const preloadImages = [];

function preloadImage(src) {
  const img = new Image();
  img.src = src;
  preloadImages.push(img);
}

const NOTE_SKINS = {
  normal: {
    note: [
      "assets/images/note-left.png",
      "assets/images/note-down.png",
      "assets/images/note-up.png",
      "assets/images/note-right.png"
    ],
    receptor: "assets/images/Akage_Notes.png",
    sustain: "assets/images/Akage_Notes.png"
  },

  special: {
    note: [
      "assets/images/mikunote-left.png",
      "assets/images/mikunote-down.png",
      "assets/images/mikunote-up.png",
      "assets/images/mikunote-right.png"
    ],
    receptor: "assets/images/MikuerNotres.png",
    sustain: "assets/images/MikuerNotres.png"
  }
};

let currentSkin = "normal";

function updateSkin(nowMs) {
  const prev = currentSkin;

  if (nowMs >= 80000 && nowMs < 114153) {
    currentSkin = "special";
  } else {
    currentSkin = "normal";
  }


  if (prev !== currentSkin) {
    notes.forEach(note => {
      if (note.el) {
        const skin = NOTE_SKINS[currentSkin];
        note.el.style.backgroundImage =
          `url('${skin.note[note.lane]}')`;
      }
      if (note.sustainTiles) {
        note.sustainTiles.forEach(tile => {
          tile.style.backgroundImage =
            `url('${NOTE_SKINS[currentSkin].sustain}')`;
        });
      }
      if (note.tailEl) {
        note.tailEl.style.backgroundImage =
          `url('${NOTE_SKINS[currentSkin].sustain}')`;
      }
    });
  }
}

function preloadNoteSkins() {
  Object.values(NOTE_SKINS).forEach(skin => {

    skin.note.forEach(src => preloadImage(src));


    preloadImage(skin.receptor);
  });
}

function preloadJudgeDigits() {
  for (let i = 0; i <= 9; i++) {
    preloadImage(`assets/images/judge/num${i}.png`);
  }
}

// ===============
// ノートスプラッシュ
// ===============
const SPLASH_SCALE = 1.15;
const SPLASH_FRAME_MS = 24;
const SPLASH_COLOR_BY_LANE = ["purple", "blue", "green", "red"];
const SPLASH_XML_BY_SKIN = {
  normal: "assets/images/Akage_Splashes.xml",
  special: "assets/images/MikuerSplash.xml"
};
const splashAtlases = {
  normal: null,
  special: null
};
const splashAtlasPromises = {};

function loadSplashAtlasFor(skin) {
  if (splashAtlasPromises[skin]) return splashAtlasPromises[skin];
  const xmlPath = SPLASH_XML_BY_SKIN[skin];
  if (!xmlPath) return Promise.resolve(null);

  splashAtlasPromises[skin] = fetch(xmlPath)
    .then(res => res.text())
    .then(text => {
      const atlas = parseSplashAtlas(text);
      splashAtlases[skin] = atlas;
      if (atlas && atlas.imagePathResolved) {
        const img = new Image();
        img.src = atlas.imagePathResolved;
      }
      return atlas;
    })
    .catch(err => {
      console.warn("splash atlas load failed", skin, err);
      splashAtlases[skin] = null;
      return null;
    });

  return splashAtlasPromises[skin];
}

function loadSplashAtlases() {
  return Promise.all([
    loadSplashAtlasFor("normal"),
    loadSplashAtlasFor("special")
  ]);
}

function parseSplashAtlas(xmlText) {
  const doc = new DOMParser().parseFromString(xmlText, "text/xml");
  const atlasEl = doc.querySelector("TextureAtlas");
  if (!atlasEl) return null;
  const imagePath = atlasEl.getAttribute("imagePath") || "";
  const frames = {};

  doc.querySelectorAll("SubTexture").forEach(st => {
    const name = st.getAttribute("name") || "";
    const m = name.match(/^note splash (red|blue|green|purple) (100|200)(\d+)$/);
    if (!m) return;

    const color = m[1];
    const variant = m[2];
    const key = `${color}${variant}`;

    const frame = {
      name,
      x: parseInt(st.getAttribute("x") || "0", 10),
      y: parseInt(st.getAttribute("y") || "0", 10),
      w: parseInt(st.getAttribute("width") || "0", 10),
      h: parseInt(st.getAttribute("height") || "0", 10),
      frameX: parseInt(st.getAttribute("frameX") || "0", 10),
      frameY: parseInt(st.getAttribute("frameY") || "0", 10),
      frameWidth: parseInt(st.getAttribute("frameWidth") || st.getAttribute("width") || "0", 10),
      frameHeight: parseInt(st.getAttribute("frameHeight") || st.getAttribute("height") || "0", 10)
    };

    if (!frames[key]) frames[key] = [];
    frames[key].push(frame);
  });

  Object.keys(frames).forEach(k => {
    frames[k].sort((a, b) => {
      const na = parseInt((a.name.match(/(\d+)$/) || [0, 0])[1], 10);
      const nb = parseInt((b.name.match(/(\d+)$/) || [0, 0])[1], 10);
      return na - nb;
    });
  });

  return {
    imagePath,
    imagePathResolved: imagePath ? `assets/images/${imagePath}` : "",
    frames
  };
}

function getSplashFrames(color, atlas) {
  if (!atlas) return null;
  const variant = Math.random() < 0.5 ? "100" : "200";
  return atlas.frames[`${color}${variant}`] || null;
}

function applySplashFrame(el, frame) {
  if (!frame) return;
  el.style.width = `${frame.w}px`;
  el.style.height = `${frame.h}px`;
  el.style.left = `${-(frame.frameX || 0)}px`;
  el.style.top = `${-(frame.frameY || 0)}px`;
  el.style.backgroundPosition = `${-frame.x}px ${-frame.y}px`;
}

function spawnSplash(lane) {
  const atlas = splashAtlases[currentSkin] || splashAtlases.normal;
  if (!atlas) return;

  const laneEl = document.querySelector(
    `.lane-group.player .lane[data-lane="${lane}"]`
  );
  if (!laneEl) return;

  const judgeEl = laneEl.querySelector(".judge-image");
  if (!judgeEl) return;

  const laneRect = laneEl.getBoundingClientRect();
  const judgeRect = judgeEl.getBoundingClientRect();

  const x = judgeRect.left - laneRect.left + judgeRect.width / 2;
  const y = judgeRect.top - laneRect.top + judgeRect.height / 2;

  const color = SPLASH_COLOR_BY_LANE[lane] || "blue";
  const frames = getSplashFrames(color, atlas);
  if (!frames || frames.length === 0) return;

  const wrap = document.createElement("div");
  wrap.className = "note-splash";
  wrap.style.left = `${x}px`;
  wrap.style.top = `${y}px`;

  const base = frames[0];
  const frameW = base.frameWidth || base.w;
  const frameH = base.frameHeight || base.h;
  wrap.style.width = `${frameW}px`;
  wrap.style.height = `${frameH}px`;
  wrap.style.transform = `translate(-50%, -50%) scale(${SPLASH_SCALE})`;

  const sprite = document.createElement("div");
  sprite.className = "note-splash-sprite";
  sprite.style.backgroundImage = `url('${atlas.imagePathResolved}')`;

  applySplashFrame(sprite, base);
  wrap.appendChild(sprite);
  laneEl.appendChild(wrap);

  let i = 0;
  const step = () => {
    if (!wrap.isConnected) return;
    if (i >= frames.length) {
      wrap.remove();
      return;
    }
    applySplashFrame(sprite, frames[i]);
    i++;
    setTimeout(step, SPLASH_FRAME_MS);
  };
  step();
}
const SUSTAIN_FRAMES = {
  normal: {
    left:  {
      body: { x: 54, y: 2, w: 50, h: 44 },
      end:  { x: 158, y: 2, w: 50, h: 62, flip: true }
    },
    down:  {
      body: { x: 2, y: 2, w: 50, h: 44 },
      end:  { x: 106, y: 2, w: 50, h: 62, flip: true }
    },
    up:    {
      body: { x: 2, y: 2, w: 50, h: 44 },
      end:  { x: 106, y: 2, w: 50, h: 62, flip: true }
    },
    right: {
      body: { x: 54, y: 2, w: 50, h: 44 },
      end:  { x: 158, y: 2, w: 50, h: 62, flip: true }
    }
  },

  event: {
    left:  {
      body: { x: 2, y: 2, w: 50, h: 44 },
      end:  { x: 106, y: 2, w: 50, h: 62, flip: true }
    },
    down:  {
      body: { x: 54, y: 2, w: 50, h: 44 },
      end:  { x: 158, y: 2, w: 50, h: 62, flip: true }
    },
    up:    {
      body: { x: 54, y: 2, w: 50, h: 44 },
      end:  { x: 158, y: 2, w: 50, h: 62, flip: true }
    },
    right: {
      body: { x: 2, y: 2, w: 50, h: 44 },
      end:  { x: 106, y: 2, w: 50, h: 62, flip: true }
    }
  }
};

// ========================
// 速度・判定関連
// ========================
const BASE_SPEED = 1000;

const NOTE_SPEED = 1.33;
let speedMultiplier = NOTE_SPEED;


const OPP_SPAWN_EXTRA_MS = 500;

let judgeMsHideTimer = null;

let HIT_Y = 1000;
// 判定幅(ms)
const JUDGE = {
SICK: 45,
GOOD: 90,
BAD: 135,
SHIT: 10000 / 30,
FRAME_MS: 10000 / 30,

get MAX() { return this.SHIT; }
};


let JUDGE_OFFSET = -20;

function setJudgeOffset(ms) {
	JUDGE_OFFSET = Number(ms) || 0;
	const statusEl = document.getElementById("status");
	if (statusEl) statusEl.textContent = `Status: ${started ? 'playing' : 'idle'} (offset ${JUDGE_OFFSET}ms)`;
	// Also update HIT_Y by recalculating judge images layout if already setup
	try { setupJudgeImages();
  primeAudioElements();
  } catch (e) {}
}

function getJudgeOffsetMs() {
  return Number(JUDGE_OFFSET) || 0;
}
window.getJudgeOffsetMs = getJudgeOffsetMs;


function setNoteSpeed(mult) {
	speedMultiplier = Number(mult) || NOTE_SPEED;
}


// ===============
// 譜面データ読み込み
// ===============
let chartData = null;
const FLASH_CAMERA_EVENT_NAME = "flash camera";
const DEFAULT_FLASH_FADE_SECONDS = 0.2;
let flashCameraEvents = [];
let flashCameraEventIndex = 0;
let flashCameraLastSongMs = 0;
let flashCameraOverlayEl = null;
let flashCameraAnimToken = 0;
let flashCameraAnimRafId = 0;
let flashCameraPrewarmed = false;
let flashCameraPrewarmPromise = null;

function normalizeChartEventName(name) {
  return String(name || "").trim().toLowerCase();
}

function ensureFlashCameraOverlay() {
  if (flashCameraOverlayEl && flashCameraOverlayEl.isConnected) {
    return flashCameraOverlayEl;
  }

  let el = document.getElementById("camera-flash-overlay");
  if (!el) {
    el = document.createElement("div");
    el.id = "camera-flash-overlay";
    document.body.appendChild(el);
  }

  flashCameraOverlayEl = el;
  return flashCameraOverlayEl;
}

function waitForAnimationFrames(frameCount = 1) {
  const total =
    Number.isFinite(Number(frameCount)) && Number(frameCount) > 0
      ? Math.round(Number(frameCount))
      : 1;
  return new Promise((resolve) => {
    let remaining = total;
    const step = () => {
      remaining -= 1;
      if (remaining <= 0) {
        resolve();
        return;
      }
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

function prewarmFlashCameraForStart() {
  if (flashCameraPrewarmed) return Promise.resolve(true);
  if (flashCameraPrewarmPromise) return flashCameraPrewarmPromise;

  flashCameraPrewarmPromise = (async () => {
    const el = ensureFlashCameraOverlay();
    const previousStyles = {
      transition: el.style.transition || "",
      opacity: el.style.opacity || "",
      willChange: el.style.willChange || ""
    };

    try {
      el.style.willChange = "opacity";
      el.style.transition = "none";
      el.style.opacity = "0";
      el.getBoundingClientRect();

      await waitForAnimationFrames(1);

      el.style.transition = "opacity 16ms linear";
      el.style.opacity = "0.001";
      await waitForAnimationFrames(2);

      el.style.opacity = "0";
      await waitForAnimationFrames(1);

      flashCameraPrewarmed = true;
      return true;
    } catch (err) {
      console.warn("flash camera prewarm failed:", err);
      return false;
    } finally {
      el.style.transition = previousStyles.transition;
      el.style.opacity = previousStyles.opacity;
      el.style.willChange = previousStyles.willChange;
      flashCameraPrewarmPromise = null;
    }
  })();

  return flashCameraPrewarmPromise;
}

function parseFlashCameraEvents(eventList) {
  const parsed = [];
  if (!Array.isArray(eventList)) return parsed;

  let order = 0;
  eventList.forEach((entry) => {
    if (!Array.isArray(entry) || entry.length < 2) return;

    const timeMs = Number(entry[0]);
    if (!Number.isFinite(timeMs)) return;

    const commands = Array.isArray(entry[1]) ? entry[1] : [];
    commands.forEach((cmd) => {
      order += 1;
      if (!Array.isArray(cmd) || cmd.length < 2) return;
      if (normalizeChartEventName(cmd[0]) !== FLASH_CAMERA_EVENT_NAME) return;

      const fadeSecondsRaw = Number(cmd[1]);
      const fadeSeconds = Number.isFinite(fadeSecondsRaw)
        ? Math.max(0, fadeSecondsRaw)
        : DEFAULT_FLASH_FADE_SECONDS;

      parsed.push({
        timeMs,
        fadeSeconds,
        order
      });
    });
  });

  parsed.sort((a, b) => {
    if (a.timeMs !== b.timeMs) return a.timeMs - b.timeMs;
    return a.order - b.order;
  });

  return parsed;
}

function resetFlashCameraEvents() {
  flashCameraEventIndex = 0;
  flashCameraLastSongMs = 0;
  flashCameraAnimToken += 1;
  if (flashCameraAnimRafId) {
    cancelAnimationFrame(flashCameraAnimRafId);
    flashCameraAnimRafId = 0;
  }

  const el = ensureFlashCameraOverlay();
  el.style.transition = "none";
  el.style.opacity = "0";
}

function triggerFlashCamera(fadeSeconds) {
  const el = ensureFlashCameraOverlay();
  const fadeMs = Math.max(16, Math.round(Math.max(0, fadeSeconds) * 1000));
  const token = flashCameraAnimToken + 1;
  flashCameraAnimToken = token;
  if (flashCameraAnimRafId) {
    cancelAnimationFrame(flashCameraAnimRafId);
    flashCameraAnimRafId = 0;
  }

  el.style.transition = "none";
  el.style.opacity = "1";
  flashCameraAnimRafId = requestAnimationFrame(() => {
    flashCameraAnimRafId = 0;
    if (flashCameraAnimToken !== token) return;
    if (!el.isConnected) return;
    el.style.transition = `opacity ${fadeMs}ms linear`;
    el.style.opacity = "0";
  });
}

function updateFlashCameraEvents(nowMs) {
  if (!flashCameraEvents.length) return;

  if (nowMs + 1 < flashCameraLastSongMs) {
    resetFlashCameraEvents();
  }
  flashCameraLastSongMs = nowMs;

  while (flashCameraEventIndex < flashCameraEvents.length) {
    const evt = flashCameraEvents[flashCameraEventIndex];
    if (!evt) break;
    const judgeOffsetMs =
      typeof window.getJudgeOffsetMs === "function"
        ? Number(window.getJudgeOffsetMs())
        : 0;
    const triggerMs =
      evt.timeMs + (Number.isFinite(judgeOffsetMs) ? judgeOffsetMs : 0);
    if (triggerMs > nowMs) break;
    triggerFlashCamera(evt.fadeSeconds);
    flashCameraEventIndex += 1;
  }
}

fetch("data/akage/akage-chart.json")
  .then(res => res.json())
  .then(data => {
  console.log("chart json:", data);
  chartData = data;
  flashCameraEvents = parseFlashCameraEvents(data?.events);
  resetFlashCameraEvents();
  buildNotes();
})
  .catch(err => {
    console.error("chart load failed", err);
  });

const judgeImages = [];
// ===============
// ノーツ管理
// ===============
let notes = [];
let started = false;

let NEXT_NOTE_ID = 1;
// ===============
// 判定ライン配置
// ===============
function setupJudgeImages() {
  judgeImages.length = 0;

  const groups = document.querySelectorAll(".lane-group");

  groups.forEach(group => {
    const isPlayer = group.classList.contains("player");

    const lanes = group.querySelectorAll(".lane");

    lanes.forEach(lane => {
      const laneIndex = Number(lane.dataset.lane);

      let img = lane.querySelector(".judge-image");
      if (!img) {
        img = document.createElement("div");
        img.className = "judge-image";
        lane.appendChild(img);
      }

      const dirMap = ["left", "down", "up", "right"];
      const dir = dirMap[laneIndex];
      img.classList.add(dir);


      if (isPlayer) {
        judgeImages[laneIndex] = img;
      }

      initReceptor(img, dir, isPlayer);

      const bottom = parseFloat(
        getComputedStyle(lane).getPropertyValue("--judge-bottom")
      ) || 20;

      img.style.bottom = `${bottom}px`;
    });
  });


  const gameRect = document.getElementById("game").getBoundingClientRect();

const judgeBottom =
  parseFloat(
    getComputedStyle(document.documentElement)
      .getPropertyValue("--judge-bottom")
  ) || 20;

HIT_Y = gameRect.height - judgeBottom;
}


document.addEventListener("DOMContentLoaded", () => {
	try { setupJudgeImages();
  primeAudioElements();
  installTrackSyncEventHooks();
  ensureFlashCameraOverlay();
  } catch (e) {}
  applyUiVisibility();
});

// ===============
// 譜面からノーツ生成
// ===============
function buildNotes() {
  if (!chartData || !chartData.notes) {
    console.error("Invalid chartData", chartData);
    return;
  }

  notes = [];

  chartData.notes.forEach(section => {
    if (!section.sectionNotes) return;

    section.sectionNotes.forEach(n => {
      const time = n[0];
      const noteIndex = n[1];
      const sustain = n[2] || 0;

    notes.push({
      time,
      rawLane: noteIndex,
      lane: noteIndex % 4,
      isPlayer: noteIndex < 4,

      sustain,
      isSustain: sustain > 0,

      hit: false,
      holding: false,
      released: false,

      lastHoldCheck: 0,
      failed: false,

      headMissed: false,
      lastMissTick: 0,

      fading: false,
      fadeStart: 0,

      el: null,
      sustainTiles: [], 
      tailEl: null,
      sustainSpawned: false,

      ended: false

    ,_id: NEXT_NOTE_ID++
    });
    });
  });

  notes.sort((a, b) => a.time - b.time);
  console.log("notes loaded:", notes.length);
}


// ===============
// ノーツ生成
// ===============
function spawnNote(note, nowMs = getSongTimeMs()) {
  const groupSelector = note.isPlayer
    ? ".lane-group.player"
    : ".lane-group.opponent";

  const laneEl = document.querySelector(
    `${groupSelector} .lane[data-lane="${note.lane}"]`
  );

  if (!laneEl) {
    console.warn("lane not found", groupSelector, note.lane);
    return;
  }
  note._laneEl = laneEl;


  const el = document.createElement("div");
  el.classList.add("note");

  const imgs = [
    "assets/images/note-left.png",
    "assets/images/note-down.png",
    "assets/images/note-up.png",
    "assets/images/note-right.png"
  ];

  const skin = NOTE_SKINS[currentSkin];

  el.style.backgroundImage =
    `url('${skin.note[note.lane]}')`;
  el.style.backgroundSize = "contain";
  el.style.backgroundRepeat = "no-repeat";
  el.style.backgroundPosition = "center";


  el.style.position = "absolute";

  el.style.zIndex = "8";

  const container = ensureNoteContainer(laneEl);
  container.appendChild(el);        // head
  note.el = el;


  const diff =
    (note.time + (JUDGE_OFFSET || 0)) - nowMs;

  const laneOffset =
    LANE_JUDGE_Y_OFFSET[note.lane] || 0;

  const y =
    HIT_Y +
    laneOffset -
    (diff / 1000) *
      BASE_SPEED *
      speedMultiplier;


  el.style.top = `${y}px`;
}

const LANE_JUDGE_Y_OFFSET = {
  0: -110,   // left
  1: -110,   // down
  2: -110,   // up
  3: -110    // right
};
// ======================================
// メイン更新ループ
// ======================================
function emitCharacterNoteEvent(side, lane, type, extra = {}) {
  if (typeof characterOnNoteEvent !== "function") return;
  characterOnNoteEvent(side, lane, type, extra);
}

let updateFrameQueued = false;
let updateRafId = 0;

function requestUpdateFrame() {
  if (updateFrameQueued) return;
  updateFrameQueued = true;
  updateRafId = requestAnimationFrame(() => {
    updateFrameQueued = false;
    update();
  });
}

function update() {
  const nowMs = getSongTimeMs();
  const gameRect = document.getElementById("game").getBoundingClientRect();
  const sustainClipLineLocalByLane = Object.create(null);
  const sustainClipLineViewByLane = Object.create(null);

  if (!started || introPlaying) {
    if (
      !introPlaying &&
      !songResultShown &&
      !gameOverTriggered &&
      !gameOverEnding &&
      song
    ) {
      const durationSec = Number(song.duration);
      const currentSec = Math.max(0, Number(song.currentTime) || 0);
      if (Number.isFinite(durationSec) && durationSec > 0) {
        if (currentSec >= durationSec - 0.2) {
          onSongFinished();
        }
      }
    }
    requestUpdateFrame();
    return;
  }

  if (checkSongFinished(nowMs)) {
    requestUpdateFrame();
    return;
  }

  try {
  updateSkin(nowMs);
  updateIconState(nowMs);
  updateFlashCameraEvents(nowMs);
  if (typeof window.updateCharacterChartEvents === "function") {
    window.updateCharacterChartEvents(nowMs);
  }
  syncSongTracks();
  updateBarZoom(nowMs);
  updateZoom();


  document
    .querySelectorAll(".judge-image")
    .forEach(el => updateReceptorAnim(el));


  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];

  // ===== opponent notes auto remove ====
if (!note.isPlayer) {

  if (!note.isSustain && nowMs >= note.time) {
    emitCharacterNoteEvent("opponent", note.lane, "tap", { note });
    removeNote(note);
    i--;
    continue;
  }
}

    const diff =
      (note.time + (JUDGE_OFFSET || 0)) - nowMs;


    const diffNoOffset = note.time - nowMs;

    const laneOffset =
      LANE_JUDGE_Y_OFFSET[note.lane] || 0;

    const y =
      HIT_Y +
      laneOffset -
      (diff / 1000) *
        BASE_SPEED *
        speedMultiplier;

    if (note.el) {

      note.el.style.top = `${y}px`;
    }


if (
  note.isPlayer &&
  note.isSustain &&
  note.el &&
  note.headMissed &&
  y > HIT_Y + 200
) {

  note.el.style.opacity = "0";
  note.el.style.pointerEvents = "none";
}

  // ===== opponent sustain start =====
if (!note.isPlayer && note.isSustain) {
  const sustainStartTime = note.time;
  if (nowMs >= sustainStartTime) {
    if (!note._opponentHoldStarted) {
      note._opponentHoldStarted = true;
      emitCharacterNoteEvent("opponent", note.lane, "hold_start", { note });
    }
    if (note.el) {
      note.el.remove();
      note.el = null;
    }
  }
}


if (!note.isPlayer && note.isSustain) {
  const endTime = note.time + note.sustain;

  if (nowMs >= endTime) {
    if (!note._opponentHoldEnded) {
      note._opponentHoldEnded = true;
      emitCharacterNoteEvent("opponent", note.lane, "hold_end", { note });
    }

    if (note.sustainTiles) {
      note.sustainTiles.forEach(t => t.remove());
      note.sustainTiles.length = 0;
    }


    if (note.tailEl) {
      note.tailEl.remove();
      note.tailEl = null;
    }

    note.sustainSpawned = false;
  }
}
    // ===== head =====
    const SPAWN_AHEAD_MS = 2000;

if (!note.hit && !note.el && diff <= SPAWN_AHEAD_MS && diff >= 0) {
  spawnNote(note, nowMs);


  if (note.isSustain && note.isPlayer) {
    spawnSustain(note, nowMs);
  }


  if (note.isSustain && !note.isPlayer && !note.sustainSpawned) {
    if (diff <= SPAWN_AHEAD_MS + note.sustain + OPP_SPAWN_EXTRA_MS) {
      spawnSustain(note, nowMs);
    }
  }
}


if (note.isSustain && !note.isPlayer && !note.sustainSpawned) {
  const earlyThreshold = SPAWN_AHEAD_MS + note.sustain + OPP_SPAWN_EXTRA_MS;
  if (diffNoOffset <= earlyThreshold && diffNoOffset >= -5000) {
    spawnSustain(note, nowMs);
  }
}



if (
  note.isPlayer &&
  !note.hit &&
  !note.isSustain &&
  nowMs > note.time + JUDGE.SHIT + (JUDGE_OFFSET || 0)
) {
emitCharacterNoteEvent("player", note.lane, "miss", { note });
applyJudge("MISS");
showJudge("MISS", "miss");

  removeNote(note);
  i--;
  continue;
}



const headJudgeEnd =
  note.time + JUDGE.SHIT + (JUDGE_OFFSET || 0);

if (
  note.isPlayer &&
  note.isSustain &&
  !note.hit &&
  !note.headMissed &&
  nowMs > headJudgeEnd
) {
  note.headMissed = true;
  note.lastMissTick = nowMs;

  emitCharacterNoteEvent("player", note.lane, "miss", { note });
  applyJudge("MISS");
  showJudge("MISS", "miss");
}


if (
  note.isPlayer &&
  note.isSustain
) {
  const sustainEnd =
    note.time + note.sustain + (JUDGE_OFFSET || 0);

  const headJudgeEnd =
    note.time + JUDGE.SHIT + (JUDGE_OFFSET || 0);

    if (nowMs >= sustainEnd && (note.hit || nowMs >= headJudgeEnd)) {


    if (!note.finishQueued) {
      note.finishQueued = true;
      note.holdEndedAtMs = nowMs;
      emitCharacterNoteEvent("player", note.lane, "hold_end", { note });

      note.el?.remove();
      note.el = null;

      if (note.holding) {
        forceReceptorFinish(note.lane);

        const el = judgeImages[note.lane];
        if (el && el.dataset.player === "1") {
          el.dataset.hold = "0";
          el.dataset.finish = "1";
        }
      } else {
        // released early: avoid confirm
        const el = judgeImages[note.lane];
        if (el && el.dataset.player === "1") {
          el.dataset.hold = "0";
          el.dataset.finish = "0";
          if (el.dataset.state === "confirm") {
            el.dataset.state = "idle";
            el.dataset.frame = 0;
            el.dataset.lastTime = performance.now();
            setReceptorFrame(el, el.dataset.dir, "idle", 0);
          }
        }
      }

      // Do not remove immediately; let sustain visuals clip out smoothly.
    }
  }
}


if (
  note.isPlayer &&
  note.isSustain &&
  (note.hit || note.headMissed)
) {
  const endTime = note.time + note.sustain;

  if (nowMs < endTime) {
    if (nowMs - note.lastMissTick >= 135) {
      note.lastMissTick = nowMs;


      const RELEASE_GRACE = 70;

      if (
        !note.holding &&
        nowMs - (note.releaseTime || 0) > RELEASE_GRACE
      ) {
        note.failed = true;
        emitCharacterNoteEvent("player", note.lane, "miss", { note, sustain: true });
        applyJudge("MISS", { playMissSound: false });
        showJudge("MISS", "miss");
      }
    }
  }
}

if (note.ended) {
  continue;
}
    if (note.sustainTiles.length > 0 || note.tailEl) {


      const displayBaseTime = note.time + (JUDGE_OFFSET || 0);
      const timeBase = note.time;
      const endTime = timeBase + note.sustain;

      const SUSTAIN_HEAD_Y_OFFSET = {
  left:  20,
  down:   0,
  up:     0,
  right: 20
};

const dir = ["left", "down", "up", "right"][note.lane];

const headBottomY =
  HIT_Y +
  laneOffset +
  (SUSTAIN_HEAD_Y_OFFSET[dir] || 0) -
  ((displayBaseTime - nowMs) / 1000) *
    BASE_SPEED *
    speedMultiplier;

      const step = note._sustainStepPx || ((note.sustain / 1000) * BASE_SPEED * speedMultiplier) / Math.max(1, note.sustainTiles.length);

      for (let t = 0; t < note.sustainTiles.length; t++) {
        const tile = note.sustainTiles[t];
        const tileBottom = headBottomY - (tile._spawnOffsetPx ?? (t * step));
        const h = tile._renderH || (note.sustainFrame.body.h * NOTE_SCALE);
        const tileTop = tileBottom - h;
        tile._topPx = tileTop;
        tile.style.top = `${tileTop}px`;
      }

      if (note.tailEl) {
        const tail = note.tailEl;
        const tailCount = note._sustainTileCount ?? note.sustainTiles.length;
        const tailBottom = headBottomY - (tail._spawnOffsetPx ?? (tailCount * step));
        const th = tail._renderH || (note.sustainFrame.end.h * NOTE_SCALE);
        const tailTop = tailBottom - th;
        tail._topPx = tailTop;
        tail.style.top = `${tailTop}px`;
      }

      // ===== smooth sustain clipping near judge line =====
      // Apply clipping not only on clean hits but also on finish/miss routes,
      // otherwise tail can linger below the receptor line.
      if (note.hit || note.finishQueued || note.headMissed) {
        const lineKey = `${note.isPlayer ? "p" : "o"}:${note.lane}`;
        const laneEl =
          note._laneEl ||
          note.el?.closest(".lane") ||
          document.querySelector(
            `${note.isPlayer ? ".lane-group.player" : ".lane-group.opponent"} .lane[data-lane="${note.lane}"]`
          );
        const judgeEl = judgeImages[note.lane] || null;
        let lineYLocal = Number(sustainClipLineLocalByLane[lineKey]);
        let lineYView = Number(sustainClipLineViewByLane[lineKey]);
        if (!Number.isFinite(lineYLocal) || !Number.isFinite(lineYView)) {
          lineYLocal = HIT_Y + laneOffset + SUSTAIN_CLIP_LINE_OFFSET_Y;
          lineYView = gameRect.top + lineYLocal;
          if (laneEl && judgeEl) {
            const laneRect = laneEl.getBoundingClientRect();
            const judgeRect = judgeEl.getBoundingClientRect();
            lineYLocal = (judgeRect.top - laneRect.top) + SUSTAIN_CLIP_LINE_OFFSET_Y;
            lineYView = judgeRect.top + SUSTAIN_CLIP_LINE_OFFSET_Y;
          }
          sustainClipLineLocalByLane[lineKey] = lineYLocal;
          sustainClipLineViewByLane[lineKey] = lineYView;
        }
        const offscreenYLocal = gameRect.height + 70;
        const offscreenYView = gameRect.bottom + 70;

        for (let t = 0; t < note.sustainTiles.length; t++) {
          const tile = note.sustainTiles[t];
          const tileTop = Number.isFinite(Number(tile._topPx))
            ? Number(tile._topPx)
            : (parseFloat(tile.style.top) || 0);
          const fullRenderH = tile._renderH || (note.sustainFrame.body.h * NOTE_SCALE);
          const fullRawH = note.sustainFrame.body.h;
          const visibleRenderH = Math.min(
            fullRenderH,
            Math.max(0, lineYLocal - tileTop)
          );
          const visibleRawH = Math.min(fullRawH, Math.max(0, visibleRenderH / NOTE_SCALE));
          const clipBottom = Math.max(0, fullRawH - visibleRawH);
          if (visibleRawH <= 0.01) {
            tile.remove();
            note.sustainTiles.splice(t, 1);
            t--;
            continue;
          }
          tile.style.opacity = "0.87";
          tile.style.clipPath = `inset(0px 0px ${clipBottom}px 0px)`;

          if (tileTop > offscreenYLocal) {
            tile.remove();
            note.sustainTiles.splice(t, 1);
            t--;
          }
        }

        if (note.tailEl) {
          const tail = note.tailEl;
          const tailLineYView = lineYView - SUSTAIN_TAIL_CLIP_EXTRA_UP_Y;
          const tailRect = tail.getBoundingClientRect();
          const fullRenderH = tail._renderH || (note.sustainFrame.end.h * NOTE_SCALE);
          const fullRawH = note.sustainFrame.end.h;
          const visibleRenderH = Math.min(
            fullRenderH,
            Math.max(0, tailLineYView - tailRect.top)
          );
          const visibleRawH = Math.min(fullRawH, Math.max(0, visibleRenderH / NOTE_SCALE));
          // Tail is rotated; use transformed viewport geometry for line matching.
          if (tailRect.top >= tailLineYView - 0.5 || visibleRawH <= 0.01) {
            tail.remove();
            note.tailEl = null;
          } else {
            // tail is rendered upside-down; clip from source top.
            const clipTop = Math.max(0, fullRawH - visibleRawH);
            tail.style.opacity = "0.87";
            tail.style.clipPath = `inset(${clipTop}px 0px 0px 0px)`;
          }

          if (note.tailEl && tailRect.top > offscreenYView) {
            tail.remove();
            note.tailEl = null;
          }
        }
      }
    }

    if (note.isPlayer && note.isSustain && note.finishQueued) {
      const sustainEnd = note.time + note.sustain + (JUDGE_OFFSET || 0);
      const noVisuals = note.sustainTiles.length <= 0 && !note.tailEl;
      const forceCleanupMs = sustainEnd + SUSTAIN_FORCE_CLEANUP_EXTRA_MS;
      if (noVisuals || nowMs >= forceCleanupMs) {
        removeNote(note);
        i--;
        continue;
      }
    }
  }


  const section = getHealthDrainSection(nowMs);
  if (section) {
    const beat = Math.floor(nowMs / BEAT_MS);
    if (beat !== lastDrainBeat) {
      lastDrainBeat = beat;
      changeHealth(section.amount, { allowGameOver: false, minClamp: 1 });
    }
  } else {
    lastDrainBeat = -1;
  }
  } catch (err) {
    console.error("update loop error:", err);
    requestUpdateFrame();
    return;
  }

  requestUpdateFrame();


const STOMP_Y = 17;

if (isChorus(nowMs)) {
  const phase = getBeatPhase(nowMs);
  const power = stompWave(phase);
  const y = power * STOMP_Y;

  const gap = parseFloat(
    getComputedStyle(opponentIcon)
      .getPropertyValue('--health-icon-gap')
  ) || 90;


opponentIcon.style.setProperty('--icon-shake-y', `${y}px`);
playerIcon.style.setProperty('--icon-shake-y', `${y}px`);
}

}

// ===============
// 判定表示
// ===============
function showJudge(text, cls, ms) {
  if (cls === "miss") {
    updateJudgeMs(null);
    return;
  }

  const container = document.getElementById("judge-popup");
  if (!container) return;


  updateJudgeMs(ms);


  const wrap = document.createElement("div");
  wrap.className = `judge-item ${cls}`;

  const img = document.createElement("img");
  img.src = `assets/images/judge/${cls}.png`;
  wrap.appendChild(img);

  container.appendChild(wrap);
  wrap.style.opacity = 1;

animateJudgePhysics(wrap, {
  startFade: 400,
  fadeMs: 100
});
}

function updateJudgeMs(ms) {
  const el = document.getElementById("judge-ms-fixed");
  if (!el) return;


  if (ms === undefined || ms === null) {
    el.textContent = "";
    if (judgeMsHideTimer) {
      clearTimeout(judgeMsHideTimer);
      judgeMsHideTimer = null;
    }
    return;
  }


  const sign = ms > 0 ? "+" : "";
  el.textContent = `${sign}${ms}ms`;


  if (judgeMsHideTimer) {
    clearTimeout(judgeMsHideTimer);
  }


  judgeMsHideTimer = setTimeout(() => {
    el.textContent = "";
    judgeMsHideTimer = null;
  }, 700);
}

function animateJudgePhysics(el, options = {}) {

  const START_FADE_MS = options.startFade ?? 200;
  const FADE_DURATION = options.fadeMs ?? 220;
  let y = options.startY ?? 0;
  let v = options.initialV ?? -2;
  const a = options.accel ?? 0.1;

  const startTime = performance.now();
  let opacity = 1;

  function step(now) {
    const elapsed = now - startTime;


    v += a;
    y += v;

    el.style.transform =
      `translateX(-50%) translateY(${y}px)`;


    if (elapsed >= START_FADE_MS) {
      const fadeT =
        (elapsed - START_FADE_MS) / FADE_DURATION;

      opacity = Math.max(0, 1 - fadeT);
      el.style.opacity = opacity;
    }

    if (opacity > 0) {
      requestAnimationFrame(step);
    } else {
      el.remove();
    }
  }

  requestAnimationFrame(step);
}

// ===============
// 判定（押下）
// ===============
function judge(lane) {
  if (!started) return;

  const now = getSongTimeMs();

  const target = notes.find(n =>
    n.isPlayer &&
    !n.hit &&
    n.lane === lane &&
    Math.abs((n.time + (JUDGE_OFFSET || 0)) - now) <= JUDGE.SHIT
  );

  if (!target) return;

  const absDiff = Math.abs((target.time + (JUDGE_OFFSET || 0)) - now);

  let result;
  if (absDiff <= JUDGE.SICK) result = "SICK";
  else if (absDiff <= JUDGE.GOOD) result = "GOOD";
  else if (absDiff <= JUDGE.BAD) result = "BAD";
  else result = "SHIT";

  const msOffset = Math.round((target.time + (JUDGE_OFFSET || 0)) - now);

  showJudge(result + "!", result.toLowerCase(), msOffset);
  if (result === "SICK") {
    spawnSplash(lane);
  }



  applyJudge(result);

   receptorConfirm(lane);

  if (target.isSustain) {
    target.holding = true;
    target.hit = true;
    emitCharacterNoteEvent("player", lane, "hold_start", { note: target, judge: result });

    receptorConfirm(lane, true);

    if (target.el) {
target.el.remove();
target.el = null;
}


    for (let t = 0; t < target.sustainTiles.length; t++) {
      const tile = target.sustainTiles[t];
      if (tile._endMs <= now) {
        tile.remove();
        target.sustainTiles.splice(t, 1);
        t--;
      }
    }

  } else {

    target.hit = true;
    emitCharacterNoteEvent("player", lane, "tap", { note: target, judge: result });
    removeNote(target);
  }
}

function removeNote(note) {
  note.el?.remove();

  if (note.sustainTiles) {
    note.sustainTiles.forEach(t => t.remove());
    note.sustainTiles.length = 0;
  }

  note.tailEl?.remove();


  try {
    const laneSel = `${note.isPlayer ? ".lane-group.player" : ".lane-group.opponent"} .lane[data-lane="${note.lane}"]`;
    const lane = document.querySelector(laneSel) || document.querySelector(`.lane[data-lane="${note.lane}"]`);
    if (lane) {
      const container = lane.querySelector(".note-container");
      if (container) {
        container.querySelectorAll(".sustain-tile, .sustain-tail").forEach(el => {
          const ownerId = el.dataset.noteId;
          if (ownerId) {

            if (String(ownerId) === String(note._id)) el.remove();
          } else {

            const end = Number(el.dataset.endMs || el.getAttribute("data-end-ms"));
            if (!isNaN(end)) {
              const noteStart = note.time;
              const noteEnd = note.time + (note.sustain || 0);
              if (end >= noteStart - 5 && end <= noteEnd + 5) el.remove();
            }
          }
        });
      }
    }
  } catch (e) {
    console.warn("cleanup failed", e);
  }

  note.sustainSpawned = false;

  const i = notes.indexOf(note);
  if (i !== -1) notes.splice(i, 1);
}

function receptorConfirm(lane, isSustain = false) {
  const el = judgeImages[lane];
  if (!el || el.dataset.player !== "1") return;

  el.dataset.state = "confirm";
  el.dataset.frame = 0;
  el.dataset.lastTime = performance.now();

  if (isSustain) {
    el.dataset.hold = "1";
    el.dataset.finish = "0";
  } else {

    el.dataset.finish = "1";
  }

  setReceptorFrame(el, el.dataset.dir, "confirm", 0);
}

function forceReceptorFinish(lane) {
  const el = judgeImages[lane];
  if (!el || el.dataset.player !== "1") return;

  const dir = el.dataset.dir;
  const frames = RECEPTOR_FRAMES[dir]?.confirm;
  if (!frames) return;


  el.dataset.state = "confirm";
  el.dataset.hold = "0";
  el.dataset.finish = "1";


  const last = frames.length - 1;
  el.dataset.frame = last;
  el.dataset.lastTime = performance.now();

  setReceptorFrame(el, dir, "confirm", last);
}
// ===============
// 音声
// ===============
// const statusEl = document.getElementById("status");
const song = document.getElementById("song");
const song2 = document.getElementById("song2");
const lossSfx = new Audio("assets/sounds/fnf_loss_sfx.ogg");
const gameOverBgm = new Audio("assets/music/gameOver.ogg");
const gameOverEndBgm = new Audio("assets/music/gameOverEnd.ogg");
const MASTER_VOLUME_STORAGE_KEY = "tr_master_volume";
const DEFAULT_MASTER_VOLUME = 1;
let masterVolume = DEFAULT_MASTER_VOLUME;
let gameOverTriggered = false;
let gameOverEnding = false;
let gameOverReturnScheduled = false;
let gameOverEndTimer = null;
let gameOverOverlapTimer = null;
let screenCurtainTimer = null;
let screenCurtainAnimToken = 0;
const SCREEN_CURTAIN_DROP_MS = 500;
const SCREEN_CURTAIN_LIFT_MS = 500;
const SCREEN_CURTAIN_HOLD_MS = 120;
const SCREEN_RETURN_DELAY_MS = 200;
let gameOverRestartTimer = null;
let songResultShown = false;
let songResultReturnTransitioning = false;
gameOverBgm.loop = true;

function clamp01(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 0;
  if (n < 0) return 0;
  if (n > 1) return 1;
  return n;
}

function readSavedMasterVolume() {
  try {
    const raw = localStorage.getItem(MASTER_VOLUME_STORAGE_KEY);
    if (raw == null) return DEFAULT_MASTER_VOLUME;
    return clamp01(raw);
  } catch (e) {
    return DEFAULT_MASTER_VOLUME;
  }
}

function applyMasterVolume() {
  if (song) song.volume = masterVolume;
  if (song2) song2.volume = masterVolume;
  if (lossSfx) lossSfx.volume = masterVolume;
  if (gameOverBgm) gameOverBgm.volume = masterVolume;
  if (gameOverEndBgm) gameOverEndBgm.volume = masterVolume;

  if (Array.isArray(introAudios)) {
    introAudios.forEach((a) => {
      if (!a) return;
      a.volume = masterVolume;
    });
  }

  if (Array.isArray(missSounds)) {
    missSounds.forEach((a) => {
      if (!a) return;
      a.volume = MISS_SOUND_VOLUME * masterVolume;
    });
  }
}

function setMasterVolume(value, persist = true) {
  masterVolume = clamp01(value);
  applyMasterVolume();

  if (persist) {
    try {
      localStorage.setItem(MASTER_VOLUME_STORAGE_KEY, String(masterVolume));
    } catch (e) {}
  }

  return masterVolume;
}

function getMasterVolume() {
  return masterVolume;
}

window.setMasterVolume = setMasterVolume;
window.getMasterVolume = getMasterVolume;

function ensureScreenCurtain() {
  let el = document.getElementById("screen-curtain");
  if (!el) {
    el = document.createElement("div");
    el.id = "screen-curtain";
    document.body.appendChild(el);
  }
  return el;
}

function clearScreenCurtainTimer() {
  screenCurtainAnimToken += 1;
  if (screenCurtainTimer) {
    clearTimeout(screenCurtainTimer);
    screenCurtainTimer = null;
  }
}

function clearGameOverRestartTimer() {
  if (gameOverRestartTimer) {
    clearTimeout(gameOverRestartTimer);
    gameOverRestartTimer = null;
  }
}

function resetScreenCurtain() {
  const el = ensureScreenCurtain();
  clearScreenCurtainTimer();
  el.classList.remove(
    "screen-curtain--drop",
    "screen-curtain--lift",
    "screen-curtain--hold"
  );
  el.classList.remove("screen-curtain--solid");
  el.classList.add("screen-curtain--hidden");
}

function dropScreenCurtain(durationMs = SCREEN_CURTAIN_DROP_MS, onDone) {
  const el = ensureScreenCurtain();
  clearScreenCurtainTimer();
  const token = screenCurtainAnimToken;
  el.style.setProperty("--curtain-ms", `${durationMs}ms`);
  el.classList.remove(
    "screen-curtain--lift",
    "screen-curtain--hidden",
    "screen-curtain--hold",
    "screen-curtain--drop"
  );
  el.classList.remove("screen-curtain--solid");
  void el.offsetWidth;
  el.classList.add("screen-curtain--drop");

  let settled = false;
  const finish = () => {
    if (settled) return;
    settled = true;
    el.removeEventListener("animationend", onAnimEnd);
    if (token !== screenCurtainAnimToken) return;
    if (screenCurtainTimer) {
      clearTimeout(screenCurtainTimer);
      screenCurtainTimer = null;
    }
    el.classList.remove("screen-curtain--drop");
    el.classList.add("screen-curtain--hold");
    el.classList.remove("screen-curtain--solid");
    if (typeof onDone === "function") onDone();
  };
  const onAnimEnd = (event) => {
    if (!event || event.target !== el) return;
    if (event.animationName !== "screen-curtain-drop") return;
    finish();
  };
  el.addEventListener("animationend", onAnimEnd);
  screenCurtainTimer = setTimeout(finish, Math.max(0, durationMs) + 120);
}

function liftScreenCurtain(durationMs = SCREEN_CURTAIN_LIFT_MS) {
  const el = ensureScreenCurtain();
  clearScreenCurtainTimer();
  const token = screenCurtainAnimToken;
  el.style.setProperty("--curtain-ms", `${durationMs}ms`);
  el.classList.remove(
    "screen-curtain--drop",
    "screen-curtain--hold",
    "screen-curtain--hidden",
    "screen-curtain--lift"
  );
  el.classList.remove("screen-curtain--solid");
  void el.offsetWidth;
  el.classList.add("screen-curtain--lift");

  let settled = false;
  const finish = () => {
    if (settled) return;
    settled = true;
    el.removeEventListener("animationend", onAnimEnd);
    if (token !== screenCurtainAnimToken) return;
    if (screenCurtainTimer) {
      clearTimeout(screenCurtainTimer);
      screenCurtainTimer = null;
    }
    el.classList.remove("screen-curtain--lift");
    el.classList.add("screen-curtain--hidden");
  };
  const onAnimEnd = (event) => {
    if (!event || event.target !== el) return;
    if (event.animationName !== "screen-curtain-lift") return;
    finish();
  };
  el.addEventListener("animationend", onAnimEnd);
  screenCurtainTimer = setTimeout(finish, Math.max(0, durationMs) + 120);
}

let audioPrimed = false;
const INITIAL_START_LOAD_DELAY_MS = 1800;
const INITIAL_START_GUARD_TIMEOUT_MS = 2600;
const INITIAL_START_WARMUP_WAIT_MS = 700;
const INITIAL_START_WARMUP_PLAY_MS = 160;
const appLoadPerf = performance.now();
let initialStartPrepared = false;
let startPrepareInProgress = false;
let startPreparePromise = null;
let songTimelineAnchorSec = 0;
let songTimelineAnchorPerf = 0;
let songTimelineRate = 1;
let songTimelineRunning = false;
const SYNC_CHECK_INTERVAL = 20;
const SYNC_SOFT_THRESHOLD = 0.002;
const SYNC_BAR_ADJUST_THRESHOLD = 0.008;
const SYNC_HARD_RESYNC_THRESHOLD = 0.04;
const SYNC_HARD_RESYNC_COOLDOWN_MS = 220;
const SYNC_RATE_MAX_DELTA = 0.015;
const SYNC_RATE_SMOOTH = 0.35;
let voicesSyncOffsetSec = 0;
let lastSyncCheck = 0;
let lastHardResyncPerf = -Infinity;
let syncEventHooksInstalled = false;
let syncLastAdjustBarIndexVoices = -1;
let syncVoicesRateDelta = 0;

function primeAudioElements() {
  if (audioPrimed) return;
  audioPrimed = true;
  const list = [song, song2, lossSfx, gameOverBgm, gameOverEndBgm, ...introAudios, ...missSounds];
  list.forEach(a => {
    if (!a) return;
    a.preload = "auto";
    try { a.load(); } catch (e) {}
  });
}

function getSongTimelineSec() {
  if (!songTimelineRunning) return Math.max(0, songTimelineAnchorSec || 0);
  const elapsedSec = (performance.now() - songTimelineAnchorPerf) / 1000;
  return Math.max(0, songTimelineAnchorSec + elapsedSec * songTimelineRate);
}

function getSongTimeSec() {
  if (song && !song.paused) {
    const live = Math.max(0, song.currentTime || 0);
    songTimelineAnchorSec = live;
    songTimelineAnchorPerf = performance.now();
    return live;
  }
  if (songTimelineRunning) return getSongTimelineSec();
  if (!song) return 0;
  return Math.max(0, song.currentTime || songTimelineAnchorSec || 0);
}

function getSongTimeMs() {
  return getSongTimeSec() * 1000;
}

function setSongTimelineTime(timeSec = 0) {
  const safeSec = Math.max(0, Number(timeSec) || 0);
  songTimelineAnchorSec = safeSec;
  songTimelineAnchorPerf = performance.now();
}

function setSongTimelineRate(rate = 1) {
  const current = getSongTimelineSec();
  songTimelineAnchorSec = current;
  songTimelineAnchorPerf = performance.now();
  const nextRate = Number(rate);
  songTimelineRate = Number.isFinite(nextRate) && nextRate > 0 ? nextRate : 1;
}

function startSongTimeline(timeSec = null) {
  const base =
    timeSec == null
      ? (song ? Math.max(0, song.currentTime || 0) : 0)
      : Math.max(0, Number(timeSec) || 0);
  songTimelineRunning = true;
  songTimelineAnchorSec = base;
  songTimelineAnchorPerf = performance.now();
  songTimelineRate = song ? (song.playbackRate || 1) : 1;
}

function pauseSongTimeline() {
  if (!songTimelineRunning) return;
  songTimelineAnchorSec = getSongTimelineSec();
  songTimelineAnchorPerf = performance.now();
  songTimelineRunning = false;
}

function resetSongTimeline(timeSec = 0) {
  songTimelineRunning = false;
  songTimelineAnchorSec = Math.max(0, Number(timeSec) || 0);
  songTimelineAnchorPerf = performance.now();
  songTimelineRate = song ? (song.playbackRate || 1) : 1;
  syncLastAdjustBarIndexVoices = -1;
  syncVoicesRateDelta = 0;
  lastHardResyncPerf = -Infinity;
}

window.getSongTimeSec = getSongTimeSec;
window.getSongTimeMs = getSongTimeMs;
window.startSongTimeline = startSongTimeline;
window.pauseSongTimeline = pauseSongTimeline;
window.resetSongTimeline = resetSongTimeline;
window.setSongTimelineTime = setSongTimelineTime;
window.setSongTimelineRate = setSongTimelineRate;

function sleepMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function waitInitialLoadDelay() {
  const elapsed = performance.now() - appLoadPerf;
  const remain = INITIAL_START_LOAD_DELAY_MS - elapsed;
  if (remain <= 0) return Promise.resolve();
  return sleepMs(remain);
}

function waitRenderIdleFrames(frameCount = 2) {
  const count = Math.max(1, Number(frameCount) || 1);
  return new Promise((resolve) => {
    let left = count;
    const step = () => {
      left -= 1;
      if (left <= 0) {
        resolve();
        return;
      }
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

async function warmupSongPairForStableStart() {
  if (!song || !song2) return;

  const prevSongMuted = song.muted;
  const prevSong2Muted = song2.muted;
  const prevSongRate = song.playbackRate || 1;
  const prevSong2Rate = song2.playbackRate || 1;

  try {
    song.muted = true;
    song2.muted = true;
    song.playbackRate = 1;
    song2.playbackRate = 1;
    song.currentTime = 0;
    song2.currentTime = 0;

    const playInst = song.play();
    const playVoices = song2.play();
    await Promise.allSettled([playInst, playVoices]);

    await Promise.race([
      Promise.all([
        waitForPlaying(song, INITIAL_START_WARMUP_WAIT_MS),
        waitForPlaying(song2, INITIAL_START_WARMUP_WAIT_MS)
      ]),
      sleepMs(INITIAL_START_WARMUP_WAIT_MS)
    ]);

    await sleepMs(INITIAL_START_WARMUP_PLAY_MS);
  } catch (e) {
    console.warn("audio warmup skipped:", e);
  } finally {
    try { song.pause(); } catch (e) {}
    try { song2.pause(); } catch (e) {}
    try { song.currentTime = 0; } catch (e) {}
    try { song2.currentTime = 0; } catch (e) {}
    resetSongTimeline(0);
    song.muted = prevSongMuted;
    song2.muted = prevSong2Muted;
    song.playbackRate = prevSongRate;
    song2.playbackRate = prevSong2Rate;
    applyMasterVolume();
  }
}

async function prepareInitialSongStart() {
  if (initialStartPrepared) return;
  if (startPreparePromise) return startPreparePromise;

  startPreparePromise = (async () => {
    primeAudioElements();

    await Promise.race([
      (async () => {
        await Promise.all([
          waitCanPlay(song),
          waitCanPlay(song2),
          waitInitialLoadDelay()
        ]);
        await waitRenderIdleFrames(2);
      })(),
      sleepMs(INITIAL_START_GUARD_TIMEOUT_MS)
    ]);

    await warmupSongPairForStableStart();
    initialStartPrepared = true;
  })()
    .catch((err) => {
      console.warn("initial start prepare failed:", err);
    })
    .finally(() => {
      startPreparePromise = null;
    });

  return startPreparePromise;
}

function prepareVisualAssetsForStart() {
  const tasks = [];
  if (typeof window.prepareStageIntroAssetsForPlayback === "function") {
    tasks.push(window.prepareStageIntroAssetsForPlayback());
  }
  if (typeof window.prepareCharacterAssetsForGameplay === "function") {
    tasks.push(window.prepareCharacterAssetsForGameplay());
  }
  if (typeof window.prewarmCharacterPresetSwitchesForGameplay === "function") {
    tasks.push(window.prewarmCharacterPresetSwitchesForGameplay());
  }
  if (typeof window.prewarmCharacterPresentationForGameplay === "function") {
    tasks.push(window.prewarmCharacterPresentationForGameplay());
  }
  tasks.push(prewarmFlashCameraForStart());
  if (!tasks.length) return Promise.resolve();
  return Promise.allSettled(tasks);
}

function clampNumber(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

function syncSong2Immediate(playIfNeeded = false) {
  if (!song || !song2) return;
  const masterRate = song.playbackRate || 1;
  const targetTime = Math.max(0, getSongTimeSec() + voicesSyncOffsetSec);
  song2.playbackRate = masterRate;
  song2.currentTime = targetTime;

  if (playIfNeeded && !song.paused && song2.paused) {
    const p = song2.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }
}

function setVoicesSyncOffsetSec(value) {
  const n = Number(value);
  voicesSyncOffsetSec = Number.isFinite(n) ? n : 0;
  syncLastAdjustBarIndexVoices = -1;
  syncVoicesRateDelta = 0;
  lastHardResyncPerf = -Infinity;
  syncSong2Immediate(false);
  return voicesSyncOffsetSec;
}

function getVoicesSyncOffsetSec() {
  return voicesSyncOffsetSec;
}

function forceSyncSongTracksNow() {
  // Keep API name for compatibility: force a re-check/re-align only.
  syncLastAdjustBarIndexVoices = -1;
  syncVoicesRateDelta = 0;
  lastHardResyncPerf = -Infinity;
  syncSongTracks();
}

window.setVoicesSyncOffsetSec = setVoicesSyncOffsetSec;
window.getVoicesSyncOffsetSec = getVoicesSyncOffsetSec;
window.forceSyncSongTracksNow = forceSyncSongTracksNow;

function installTrackSyncEventHooks() {
  if (syncEventHooksInstalled || !song) return;
  syncEventHooksInstalled = true;

  song.addEventListener("seeking", () => {
    setSongTimelineTime(song.currentTime || 0);
    if (song2) syncSong2Immediate(false);
  });
  song.addEventListener("seeked", () => {
    setSongTimelineTime(song.currentTime || 0);
    if (song2) syncSong2Immediate(false);
  });
  song.addEventListener("ratechange", () => {
    setSongTimelineRate(song.playbackRate || 1);
    if (song2) song2.playbackRate = song.playbackRate || 1;
  });
  song.addEventListener("pause", () => {
    pauseSongTimeline();
    if (song2 && !song2.paused) song2.pause();
  });
  song.addEventListener("play", () => {
    startSongTimeline(song.currentTime || 0);
    if (song2) {
      const targetVoicesTime = Math.max(
        0,
        (Number(song.currentTime) || 0) + (Number(voicesSyncOffsetSec) || 0)
      );
      if (Math.abs((Number(song2.currentTime) || 0) - targetVoicesTime) > SYNC_SOFT_THRESHOLD) {
        song2.currentTime = targetVoicesTime;
      }
      song2.playbackRate = song.playbackRate || 1;
      if (song2.paused) {
        const p = song2.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      }
    }
  });
  song.addEventListener("ended", () => {
    onSongFinished();
  });
}

function beginTrackSyncBoost(durationMs = 2500) {
  syncLastAdjustBarIndexVoices = -1;
  syncVoicesRateDelta = 0;
  lastHardResyncPerf = -Infinity;
  if (song2 && song) {
    song2.playbackRate = song.playbackRate || 1;
  }
}
window.beginTrackSyncBoost = beginTrackSyncBoost;

function getSyncBarIndex(nowMs) {
  const safeNowMs = Math.max(0, Number(nowMs) || 0);
  const beatMs =
    typeof BEAT_MS === "number" && Number.isFinite(BEAT_MS) && BEAT_MS > 0
      ? BEAT_MS
      : (60000 / 195);
  const beatsPerBarRaw =
    typeof getBeatsPerBar === "function"
      ? Number(getBeatsPerBar(safeNowMs))
      : 4;
  const beatsPerBar = Math.max(1, Number.isFinite(beatsPerBarRaw) ? beatsPerBarRaw : 4);
  const barMs = beatMs * beatsPerBar;
  if (!Number.isFinite(barMs) || barMs <= 0) return 0;
  return Math.floor(safeNowMs / barMs);
}

function waitCanPlay(a) {
  if (!a) return Promise.resolve();
  if (a.readyState >= 3) return Promise.resolve();
  return new Promise(resolve => {
    const onReady = () => resolve();
    a.addEventListener("canplaythrough", onReady, { once: true });
    a.addEventListener("loadeddata", onReady, { once: true });
    try { a.load(); } catch (e) {}
  });
}

// =======================
// Inst/Voices 同期補正
// =======================
function syncSongTracks() {
  if (!song || !song2 || song.paused || song2.paused) return;
  const now = performance.now();
  if (now - lastSyncCheck < SYNC_CHECK_INTERVAL) return;
  lastSyncCheck = now;
  const nowSongSec = Math.max(0, getSongTimeSec());
  const masterRate = song.playbackRate || 1;

  // Keep voices in the same playback-rate domain as inst.
  if (Math.abs((song2.playbackRate || 1) - masterRate) > 0.0001) {
    song2.playbackRate = masterRate;
  }

  // Voices follow the shared "time since song start" timeline (+ optional offset).
  const voicesTargetTime = Math.max(0, nowSongSec + voicesSyncOffsetSec);
  const voicesDiff = voicesTargetTime - (song2.currentTime || 0);
  const absVoicesDiff = Math.abs(voicesDiff);

  // In-sync: return to the same rate without touching currentTime.
  if (absVoicesDiff <= SYNC_SOFT_THRESHOLD) {
    syncVoicesRateDelta += (0 - syncVoicesRateDelta) * SYNC_RATE_SMOOTH;
    if (Math.abs(syncVoicesRateDelta) < 0.00005) syncVoicesRateDelta = 0;
    const stableRate = clampNumber(masterRate + syncVoicesRateDelta, 0.5, 2);
    if (Math.abs((song2.playbackRate || 1) - stableRate) > 0.0001) {
      song2.playbackRate = stableRate;
    }
    return;
  }

  // Large drift: seek voices immediately with a short cooldown.
  if (
    absVoicesDiff >= SYNC_HARD_RESYNC_THRESHOLD &&
    (now - lastHardResyncPerf >= SYNC_HARD_RESYNC_COOLDOWN_MS || absVoicesDiff >= 0.2)
  ) {
    lastHardResyncPerf = now;
    syncVoicesRateDelta = 0;
    song2.currentTime = voicesTargetTime;
    song2.playbackRate = masterRate;
    return;
  }

  // Small/medium drift: nudge by playbackRate only (no seek).
  if (absVoicesDiff >= SYNC_BAR_ADJUST_THRESHOLD) {
    const desiredRateDelta = clampNumber(voicesDiff * 0.08, -SYNC_RATE_MAX_DELTA, SYNC_RATE_MAX_DELTA);
    syncVoicesRateDelta += (desiredRateDelta - syncVoicesRateDelta) * SYNC_RATE_SMOOTH;
  } else {
    syncVoicesRateDelta += (0 - syncVoicesRateDelta) * SYNC_RATE_SMOOTH;
  }

  const nextRate = clampNumber(masterRate + syncVoicesRateDelta, 0.5, 2);
  if (Math.abs((song2.playbackRate || 1) - nextRate) > 0.0001) {
    song2.playbackRate = nextRate;
  }
}

const MISS_SOUND_VOLUME = 0.3;
const MISS_SOUND_FILES = ["missnote1", "missnote2", "missnote3"];
const missSounds = MISS_SOUND_FILES.map(name => {
  const audio = new Audio(`assets/sounds/${name}.ogg`);
  audio.volume = MISS_SOUND_VOLUME * masterVolume;
  audio.preload = "auto";
  return audio;
});
setMasterVolume(readSavedMasterVolume(), false);
const MISS_SOUND_COOLDOWN = 150;
let lastMissSoundAt = -Infinity;

// ===============
// ミス効果音
// ===============
function playMissSound() {
  const now = performance.now();
  if (now - lastMissSoundAt < MISS_SOUND_COOLDOWN) return;
  lastMissSoundAt = now;

  const s = missSounds[Math.floor(Math.random() * missSounds.length)];
  if (!s) return;

  try {
    s.currentTime = 0;
    const p = s.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {});
    }
  } catch (e) {}
}

function startGame() {
	console.log("startGame called");
  if (gameOverTriggered) return;
  if (songResultReturnTransitioning) return;
  if (started || introPlaying) return;
  if (startPrepareInProgress) return;

  hideSongResultOverlay();
	setupJudgeImages();
  primeAudioElements();
  if (typeof window.stopStageIntroPlayback === "function") {
    window.stopStageIntroPlayback();
  }
  resetSongTimeline(0);

  startPrepareInProgress = true;
  Promise.allSettled([
    prepareInitialSongStart(),
    prepareVisualAssetsForStart()
  ]).finally(() => {
    startPrepareInProgress = false;
    if (gameOverTriggered || started || introPlaying) return;
    playIntroAndStartSong();
  });

  // if (statusEl) {
  //   statusEl.textContent = "Status: intro";
  // }
}


document.addEventListener("keydown", e => {
	if (e.repeat) return;
  if (songResultReturnTransitioning) return;


	if (e.key === "Enter") {
    if (gameOverTriggered) {
      startGameOverEnd();
    } else if (songResultShown) {
      returnFromSongResultToInitialState();
    } else {
      startGame();
    }
		return;
	}

  if (!started || introPlaying) return;

	if (e.key === "s" || e.key === "S" || e.key === "ArrowLeft") {
    receptorPress(0);
    judge(0);
  }
	else if (e.key === "d" || e.key === "D" || e.key === "ArrowDown") {
    receptorPress(1);
    judge(1);
  }
	else if (e.key === "j" || e.key === "J" || e.key === "ArrowUp") {
    receptorPress(2);
    judge(2);
  }
	else if (e.key === "k" || e.key === "K" || e.key === "ArrowRight") {
    receptorPress(3);
    judge(3);
  }
});

document.addEventListener("keyup", e => {
  if (e.key === "s" || e.key === "S" || e.key === "ArrowLeft") {
    releaseSustain(0);
    receptorIdle(0);
  }
  else if (e.key === "d" || e.key === "D" || e.key === "ArrowDown") {
    releaseSustain(1);
    receptorIdle(1);
  }
  else if (e.key === "j" || e.key === "J" || e.key === "ArrowUp") {
    releaseSustain(2);
    receptorIdle(2);
  }
  else if (e.key === "k" || e.key === "K" || e.key === "ArrowRight") {
    releaseSustain(3);
    receptorIdle(3);
  }
});



   const RATING_WEIGHT = {
  "SICK": 1.0,
  "GOOD": 0.75,
  "BAD": 0.50,
  "SHIT": 0.25,
  "MISS": 0.0
};


const INITIAL_HEALTH = 53;
let health = INITIAL_HEALTH;
const MAX_HEALTH = 96;
const MIN_HEALTH = 0;

updateHealthBar();

// ===============
// 判定集計
// ===============
let hasGood = false;
let hasBad = false;
let hasShit = false;

// =======================
// 判定結果の反映
// =======================
function applyJudge(judge, options = {}){


  if (RATING_WEIGHT[judge] !== undefined) {
    hitNotes++;
    ratingSum += RATING_WEIGHT[judge];
  }
  if (Object.prototype.hasOwnProperty.call(judgeCounts, judge)) {
    judgeCounts[judge] += 1;
  }
  const doMissSound = options.playMissSound !== false;

  switch(judge){
    case "SICK":
      score += 350;
      changeHealth(+1);
      break;

    case "GOOD":
      score += 200;
			hasGood = true;
      changeHealth(+1);
      break;

    case "BAD":
      score += 100;
			hasBad = true;
      changeHealth(+1);
      break;

    case "SHIT":
      score += 50;
			 hasShit = true;
      changeHealth(+1);
      break;
    case "MISS":
      misses++;
      changeHealth(-5);
      if (doMissSound) playMissSound();
      break;
  }

  if (judge === "MISS") {
    combo = 0;
  } else {
    combo++;
    if (combo > maxCombo) {
      maxCombo = combo;
    }
  }

  updateRating();
  updateScoreboard();
  updateComboDisplay();
}

// ===============
// 体力処理
// ===============
function changeHealth(amount, options = {}){
  const prev = health;
  health += amount;


  if (amount < 0) {
    const minClamp = options.minClamp ?? MIN_HEALTH;
    health = Math.max(minClamp, health);
  }

  health = Math.min(MAX_HEALTH, health);

  updateHealthBar();

  const allowGameOver = options.allowGameOver !== false;
  if (allowGameOver && amount < 0 && prev > 0 && health <= 0) {
    gameOver();
  }
}


// ===============
// アイコン状態
// ===================
function gameOver(){
  if (gameOverTriggered) return;
  gameOverTriggered = true;
  songResultShown = false;
  hideSongResultOverlay();

  started = false;
  introPlaying = false;
  resetSongTimeline(0);

  try {
    song.pause();
    song.currentTime = 0;
  } catch (e) {}
  try {
    if (song2) {
      song2.pause();
      song2.currentTime = 0;
    }
  } catch (e) {}

  let overlay = document.getElementById("gameover-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "gameover-overlay";
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.zIndex = "9999";
    overlay.style.pointerEvents = "none";
    document.body.appendChild(overlay);
  }
  overlay.style.background = "";
  overlay.innerHTML = "";
  overlay.classList.add("gameover-overlay");
  overlay.style.display = "flex";
  overlay.classList.remove("gameover-beat");
  overlay.classList.remove("gameover-retry");
  resetScreenCurtain();
  clearGameOverRestartTimer();

  const title = document.createElement("div");
  title.className = "gameover-title";
  title.textContent = "Game Over!";

  const hint = document.createElement("div");
  hint.className = "gameover-hint";
  hint.textContent = "Press enter key to retry";

  overlay.appendChild(title);
  overlay.appendChild(hint);

  lossSfx.currentTime = 0;
  gameOverBgm.currentTime = 0;
  gameOverEndBgm.currentTime = 0;
  let gameOverStarted = false;

  const startGameOverBgm = () => {
    if (gameOverStarted || gameOverEnding) return;
    gameOverStarted = true;
    overlay.classList.add("gameover-beat");
    gameOverBgm.play().catch(() => {});
  };

  const scheduleOverlap = () => {
    const d = lossSfx.duration;
    if (Number.isFinite(d) && d > 0) {
      const delayMs = Math.max(0, (d - 1.5) * 1000);
      if (gameOverOverlapTimer) clearTimeout(gameOverOverlapTimer);
      gameOverOverlapTimer = setTimeout(startGameOverBgm, delayMs);
    }
  };

  lossSfx.onended = () => {
    startGameOverBgm();
  };
  lossSfx.addEventListener("loadedmetadata", scheduleOverlap, { once: true });
  lossSfx.play().catch(() => {});
  scheduleOverlap();
}

function startGameOverEnd(){
  if (!gameOverTriggered || gameOverEnding) return;
  gameOverEnding = true;
  resetSongTimeline(0);

  if (gameOverOverlapTimer) {
    clearTimeout(gameOverOverlapTimer);
    gameOverOverlapTimer = null;
  }
  lossSfx.onended = null;

  const overlay = document.getElementById("gameover-overlay");
  if (overlay) {
    const title = overlay.querySelector(".gameover-title");
    const hint = overlay.querySelector(".gameover-hint");
    if (title) title.textContent = "Good Luck!";
    if (hint) hint.textContent = ":D";
    overlay.classList.remove("gameover-beat");
    overlay.classList.add("gameover-retry");
  }

  try {
    song.pause();
    song.currentTime = 0;
  } catch (e) {}
  try {
    if (song2) {
      song2.pause();
      song2.currentTime = 0;
    }
  } catch (e) {}
  if (typeof window.stopStageIntroPlayback === "function") {
    window.stopStageIntroPlayback();
  } else {
    introAudios.forEach(a => {
      try {
        if (!a) return;
        a.pause();
        a.currentTime = 0;
      } catch (e) {}
    });
  }

  try {
    gameOverBgm.pause();
    gameOverBgm.currentTime = 0;
  } catch (e) {}
  try {
    lossSfx.pause();
    lossSfx.currentTime = 0;
  } catch (e) {}

  gameOverEndBgm.currentTime = 0;

  const onMeta = () => {
    scheduleReturnFromGameOverEnd();
  };
  gameOverEndBgm.addEventListener("loadedmetadata", onMeta, { once: true });
  gameOverEndBgm.play().catch(() => {});
  scheduleReturnFromGameOverEnd();
}

function scheduleReturnFromGameOverEnd(){
  if (gameOverReturnScheduled) return;
  const d = gameOverEndBgm.duration;
  if (!Number.isFinite(d) || d <= 0) return;
  gameOverReturnScheduled = true;
  const delayMs = Math.max(0, (d - 4.5) * 1000);
  if (gameOverEndTimer) clearTimeout(gameOverEndTimer);
  gameOverEndTimer = setTimeout(() => {
    resumeFromGameOver();
  }, delayMs);
}

function resumeFromGameOver(){
  if (!gameOverEnding) return;
  gameOverEnding = false;
  gameOverReturnScheduled = false;
  if (gameOverEndTimer) {
    clearTimeout(gameOverEndTimer);
    gameOverEndTimer = null;
  }
  clearScreenCurtainTimer();
  clearGameOverRestartTimer();

  try {
    gameOverEndBgm.pause();
    gameOverEndBgm.currentTime = 0;
  } catch (e) {}

  const overlay = document.getElementById("gameover-overlay");
  dropScreenCurtain(SCREEN_CURTAIN_DROP_MS, () => {
    if (overlay) {
      overlay.style.display = "none";
      overlay.classList.remove("gameover-beat");
      overlay.classList.remove("gameover-retry");
      overlay.innerHTML = "";
    }

    gameOverTriggered = false;
    resetGameState();
    clearScreenCurtainTimer();
    screenCurtainTimer = setTimeout(() => {
      liftScreenCurtain(SCREEN_CURTAIN_LIFT_MS);
      clearGameOverRestartTimer();
      gameOverRestartTimer = setTimeout(() => {
        startGame();
      }, SCREEN_CURTAIN_LIFT_MS + SCREEN_RETURN_DELAY_MS);
    }, SCREEN_CURTAIN_HOLD_MS);
  });
}

function ensureSongResultOverlay() {
  let overlay = document.getElementById("song-result-overlay");
  if (overlay) return overlay;

  console.warn("song-result-overlay was not found in index.html");
  return null;
}

function setSongResultVideoActive(active) {
  const iframe = document.getElementById("song-result-video");
  if (!iframe) return;
  const nextSrc = iframe.dataset.src || "";
  const currentSrc = iframe.getAttribute("src") || "";

  if (active) {
    if (nextSrc && currentSrc !== nextSrc) {
      iframe.setAttribute("src", nextSrc);
    }
    return;
  }

  if (currentSrc) {
    iframe.removeAttribute("src");
  }
}

function hideSongResultOverlay() {
  const overlay = document.getElementById("song-result-overlay");
  if (!overlay) return;
  setSongResultVideoActive(false);
  overlay.classList.remove("is-visible");
  overlay.setAttribute("aria-hidden", "true");
  overlay.style.display = "none";
  overlay.style.visibility = "hidden";
  overlay.style.opacity = "0";
}

function returnFromSongResultToInitialState() {
  if (!songResultShown || songResultReturnTransitioning) return;

  songResultReturnTransitioning = true;
  clearScreenCurtainTimer();
  clearGameOverRestartTimer();

  dropScreenCurtain(SCREEN_CURTAIN_DROP_MS, () => {
    try {
      if (song) {
        song.pause();
        song.currentTime = 0;
      }
    } catch (e) {}

    try {
      if (song2) {
        song2.pause();
        song2.currentTime = 0;
      }
    } catch (e) {}

    if (typeof window.stopStageIntroPlayback === "function") {
      window.stopStageIntroPlayback();
    } else {
      introAudios.forEach((a) => {
        try {
          if (!a) return;
          a.pause();
          a.currentTime = 0;
        } catch (e) {}
      });
    }

    resetSongTimeline(0);
    resetGameState();
    clearScreenCurtainTimer();
    screenCurtainTimer = setTimeout(() => {
      liftScreenCurtain(SCREEN_CURTAIN_LIFT_MS);

      setTimeout(() => {
        songResultReturnTransitioning = false;
      }, SCREEN_CURTAIN_LIFT_MS + SCREEN_RETURN_DELAY_MS);
    }, SCREEN_CURTAIN_HOLD_MS);
  });
}

function formatResultValue(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "0";
  return n.toLocaleString();
}

function getSongResultCharStyle(ch, index, text) {
  const safeIndex = Number.isFinite(index) ? index : 0;
  const safeText = typeof text === "string" ? text : "";
  const code = (safeText.charCodeAt(safeIndex) || 0) + safeIndex * 17 + safeText.length * 11;
  const rotate = ((code % 5) - 2) * 0.38;
  const shiftY = (((code >> 3) % 3) - 1) * 0.65;
  const shiftX = (((code >> 5) % 3) - 1) * 0.3;
  const skewX = (((code >> 2) % 3) - 1) * 0.6;
  const scaleY = 1 + (((code >> 4) % 3) - 1) * 0.012;
  return {
    rotate,
    shiftY,
    shiftX,
    skewX,
    scaleY,
  };
}

function setSongResultText(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  const text = String(value ?? "");
  el.textContent = "";
  el.setAttribute("aria-label", text);
  el.dataset.rawValue = text;

  const fragment = document.createDocumentFragment();
  const chars = Array.from(text);
  chars.forEach((ch, index) => {
    const span = document.createElement("span");
    const style = getSongResultCharStyle(ch, index, text);
    span.className = "song-result-value-char";
    if (/[^0-9A-Za-z]/.test(ch)) {
      span.classList.add("song-result-value-char--symbol");
    }
    span.setAttribute("aria-hidden", "true");
    span.textContent = ch === " " ? "\u00A0" : ch;
    span.style.setProperty("--result-char-rotate", `${style.rotate}deg`);
    span.style.setProperty("--result-char-shift-y", `${style.shiftY}px`);
    span.style.setProperty("--result-char-shift-x", `${style.shiftX}px`);
    span.style.setProperty("--result-char-skew-x", `${style.skewX}deg`);
    span.style.setProperty("--result-char-scale-y", `${style.scaleY}`);
    fragment.appendChild(span);
  });

  el.appendChild(fragment);
}

function showSongResultOverlay() {
  const overlay = ensureSongResultOverlay();
  if (!overlay) return;
  if (overlay.parentElement !== document.body) {
    document.body.appendChild(overlay);
  } else {
    // Move to DOM tail so same-z overlays cannot stay above it.
    document.body.appendChild(overlay);
  }
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  // Keep result above FHUD images (9997) but below screen-curtain (10000).
  overlay.style.zIndex = "9998";
  overlay.style.background = "";
  const ratingInfo = getRatingInfo();
  const clearStatus = ratingInfo.clearStatus || "-";
  const accuracyText =
    ratingInfo.percent === null
      ? "N/A"
      : `${ratingInfo.percent.toFixed(2)}% (${clearStatus})`;

  setSongResultText("result-score", formatResultValue(score));
  setSongResultText("result-misses", formatResultValue(misses));
  setSongResultText("result-accuracy", accuracyText);
  setSongResultText("result-max-combo", formatResultValue(maxCombo));
  setSongResultText("result-judge-sick", formatResultValue(judgeCounts.SICK));
  setSongResultText("result-judge-good", formatResultValue(judgeCounts.GOOD));
  setSongResultText("result-judge-bad", formatResultValue(judgeCounts.BAD));
  setSongResultText("result-judge-shit", formatResultValue(judgeCounts.SHIT));
  setSongResultText("result-judge-miss", formatResultValue(judgeCounts.MISS));
  setSongResultVideoActive(true);

  overlay.classList.add("is-visible");
  overlay.style.display = "flex";
  overlay.style.visibility = "visible";
  overlay.style.opacity = "1";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.pointerEvents = "auto";
  overlay.setAttribute("aria-hidden", "false");
}

function onSongFinished() {
  if (songResultShown || gameOverTriggered || gameOverEnding || introPlaying) {
    return;
  }

  songResultShown = true;
  started = false;
  introPlaying = false;
  pauseSongTimeline();

  try {
    if (song && !song.paused) song.pause();
  } catch (e) {}

  try {
    if (song2 && !song2.paused) song2.pause();
  } catch (e) {}

  showSongResultOverlay();
}

function checkSongFinished(nowMs) {
  if (!started || introPlaying || songResultShown || gameOverTriggered || gameOverEnding) {
    return false;
  }

  if (!song) return false;

  if (song.ended) {
    onSongFinished();
    return true;
  }

  const durationSec = Number(song.duration);
  if (Number.isFinite(durationSec) && durationSec > 0) {
    const durationMs = durationSec * 1000;
    const mediaMs = Math.max(0, Number(song.currentTime) || 0) * 1000;
    const currentMs = Math.max(nowMs, mediaMs);
    // Fallback when `ended` is missed: finalize slightly before the hard end.
    const nearEndThresholdMs = durationMs - 30;
    if (currentMs >= nearEndThresholdMs) {
      onSongFinished();
      return true;
    }
  }

  return false;
}

function resetGameState(){
  if (typeof window.stopStageIntroPlayback === "function") {
    window.stopStageIntroPlayback();
  }
  if (typeof window.resetCharacterChartStateForRetry === "function") {
    window.resetCharacterChartStateForRetry();
  }

  notes.forEach(note => removeNote(note));
  document
    .querySelectorAll(".note, .sustain-tile, .sustain-tail, .note-splash")
    .forEach(el => el.remove());

  notes = [];
  NEXT_NOTE_ID = 1;
  buildNotes();

  songResultShown = false;
  songResultReturnTransitioning = false;
  hideSongResultOverlay();

  score = 0;
  misses = 0;
  combo = 0;
  maxCombo = 0;
  hitNotes = 0;
  ratingSum = 0;
  rating = "N/A";
  resetJudgeCounts();
  hasGood = false;
  hasBad = false;
  hasShit = false;

  health = INITIAL_HEALTH;
  updateHealthBar();
  if (typeof resetIconAndHealthBarVisuals === "function") {
    resetIconAndHealthBarVisuals();
  }
  updateRating();
  updateScoreboard();
  updateComboDisplay();

  lastBarIndex = -1;
  barZoomSkipUntilMs = 0;
  zoomScale = 1;
  zoomTimer = 0;
}

const healthFill = document.getElementById("health-fill");
const iconOpponent = document.getElementById("health-opponent");
const iconPlayer = document.getElementById("health-player");

changeHealth(+1);
changeHealth(-5);

let score = 0;
let misses = 0;
let combo = 0;
let maxCombo = 0;
const COMBO_SHOW_MIN = 8;
const COMBO_FLOAT_V = -2;
const COMBO_FLOAT_A = 0.08;
let hitNotes = 0;
let ratingSum = 0;
let rating = "N/A"
const judgeCounts = {
  SICK: 0,
  GOOD: 0,
  BAD: 0,
  SHIT: 0,
  MISS: 0
};

function resetJudgeCounts() {
  judgeCounts.SICK = 0;
  judgeCounts.GOOD = 0;
  judgeCounts.BAD = 0;
  judgeCounts.SHIT = 0;
  judgeCounts.MISS = 0;
}

const UI_VISIBILITY = {
  scoreboard: true,
  judge: false,
  combo: false
};

function applyUiVisibility() {
  const body = document.body;
  if (!body) return;
  body.classList.toggle("hide-scoreboard", !UI_VISIBILITY.scoreboard);
  body.classList.toggle("hide-judge", !UI_VISIBILITY.judge);
  body.classList.toggle("hide-combo", !UI_VISIBILITY.combo);
}

function setUiVisibility(next = {}) {
  Object.assign(UI_VISIBILITY, next);
  applyUiVisibility();
}

function getRankFromPercent(percent) {
  if (!Number.isFinite(percent)) return "N/A";
  if (percent >= 100) return "perfect!!";
  if (percent >= 90) return "sick!";
  if (percent >= 80) return "great";
  if (percent >= 70) return "good";
  if (percent >= 65) return "nice";
  if (percent >= 50) return "meh";
  if (percent >= 40) return "bruh";
  if (percent >= 20) return "bad";
  return "shit";
}

function getRatingInfo() {
  if (hitNotes === 0) {
    return {
      percent: null,
      rank: "N/A",
      clearStatus: getClearStatus(),
      text: "N/A"
    };
  }

  const percentRaw = (ratingSum / hitNotes) * 100;
  const percent = Number(percentRaw.toFixed(2));
  const rank = getRankFromPercent(percent);
  const clearStatus = getClearStatus();
  return {
    percent,
    rank,
    clearStatus,
    text: `${rank} (${percent}%)${clearStatus ? ` - ${clearStatus}` : ""}`
  };
}

function updateRating(){
  const info = getRatingInfo();
  rating = info.text;
}

function getClearStatus(){

  if (misses === 0) {
    if (!hasGood && !hasBad && !hasShit) {
      return "SFC";
    }
    if (hasGood && !hasBad && !hasShit) {
      return "GFC";
    }
    if (hasBad || hasShit) {
      return "FC";
    }
  }


  if (misses >= 1 && misses <= 9) {
    return "SDCB";
  }

  if (misses >= 10) {
    return "Clear";
  }

  return "";
}

function popElement(el) {
  if (!el) return;


  el.classList.remove("score-pop");
  void el.offsetWidth;
  el.classList.add("score-pop");
}

function popScoreboard(){
  const el = document.getElementById("scoreboard-inner");
  if (!el) return;

  el.classList.remove("pop");
  void el.offsetWidth;
  el.classList.add("pop");
}

function updateScoreboard(){
  document.getElementById("score-text").textContent =
    `Score: ${score}`;

  document.getElementById("misses-text").textContent =
    `Misses: ${misses}`;

  document.getElementById("rating-text").textContent =
    `Rating: ${rating}`;


  popScoreboard();
}

// ===================
// コンボ表示
// ===================
function updateComboDisplay() {
  const el = document.getElementById("judge-combo");
  if (!el) return;

  if (combo <= COMBO_SHOW_MIN) {
    return;
  }

  const wrap = document.createElement("div");
  wrap.className = "combo-pop";

  const str = String(combo).padStart(3, "0");
  for (const ch of str) {
    const img = document.createElement("img");
    img.src = `assets/images/judge/num${ch}.png`;
    img.alt = ch;
    wrap.appendChild(img);
  }

  el.appendChild(wrap);
  animateJudgePhysics(wrap, { startFade: 550, fadeMs: 120, initialV: COMBO_FLOAT_V, accel: COMBO_FLOAT_A });
}

// ===============
// レセプタ画像
// ===============
const RECEPTOR_FRAMES = {
  left: {
    idle: [
      { x: 285.5,  y: 137, w: 160, h: 154, ox: 3, oy: 0 }
    ],
    press: [
      { x: 491, y: 2, w: 136, h: 138, ox: 3, oy: 0 },
      { x: 491, y: 2, w: 136, h: 138, ox: 3, oy: 0 },
      { x: 2, y: 66, w: 141, h: 144, ox: 3, oy: 0 },
      { x: 2, y: 66, w: 141, h: 144, ox: 3, oy: 0 }
    ],
    confirm: [
      { x: 218,  y: 448, w: 218, h: 206, ox: 3, oy: 6 },
      { x: 464, y: 300, w: 209, h: 198, ox: 3, oy: 6 },
      { x: 886, y: 303, w: 215, h: 201, ox: 3, oy: 6 },
      { x: 886, y: 303, w: 215, h: 201, ox: 3, oy: 6 }
    ]
  },

  down: {
  idle: [
      { x: 757, y: 145, w: 149, h: 156, ox: 0, oy: 0 }
    ],
    press: [
      { x: 210, y: 2, w: 138, h: 136, ox: 2.5, oy: 0 },
      { x: 210, y: 2, w: 138, h: 136, ox: 2.5, oy: 0 },
      { x: 767, y: 2, w: 145, h: 141, ox: 2.5, oy: 0 },
      { x: 767, y: 2, w: 145, h: 141, ox: 2.5, oy: 0 }
    ],
    confirm: [
      { x: 408, y: 708, w: 206, h: 219, ox: 2.5, oy: 10 },
      { x: 658, y: 503, w: 197, h: 210, ox: 2.5, oy: 10 },
      { x: 2, y: 648, w: 201, h: 215, ox: 2.5, oy: 10 },
      { x: 2, y: 648, w: 201, h: 215, ox: 2.5, oy: 10 }
    ]
  },
  up:   {
  idle: [
      { x: 316, y: 290, w: 146, h: 156, ox: 0, oy: 0 }
    ],
    press: [
      { x: 350, y: 2, w: 139, h: 136, ox: -1.5, oy: 0 },
      { x: 350, y: 2, w: 139, h: 136, ox: -1.5, oy: 0 },
      { x: 914, y: 2, w: 144, h: 142, ox: -1.5, oy: 0 },
      { x: 914, y: 2, w: 144, h: 142, ox: -1.5, oy: 0 }
    ],
    confirm: [
      { x: 616, y: 715, w: 207, h: 219, ox: -1.5, oy: 9 },
      { x: 857, y: 506, w: 197, h: 210, ox: -1.5, oy: 9 },
      { x: 205, y: 656, w: 201, h: 215, ox: -1.5, oy: 9 },
      { x: 205, y: 656, w: 201, h: 215, ox: -1.5, oy: 9 }
    ]
  },
  right:{
  idle: [
      { x: 446, y: 142, w: 156, h: 146, ox: 0, oy: 0 }
    ],
    press: [
      { x: 629, y: 2, w: 136, h: 139, ox: 0, oy: 0 },
      { x: 629, y: 2, w: 136, h: 139, ox: 0, oy: 0 },
      { x: 145, y: 140, w: 141, h: 145, ox: 0, oy: 0 },
      { x: 145, y: 140, w: 141, h: 145, ox: 0, oy: 0 }
    ],
    confirm: [
      { x: 438, y: 500, w: 218, h: 206, ox: 0, oy: 7 },
      { x: 675, y: 303, w: 209, h: 198, ox: 0, oy: 7 },
      { x: 2, y: 445, w: 214, h: 201, ox: 0, oy: 7 },
      { x: 2, y: 445, w: 214, h: 201, ox: 0, oy: 7 }
    ]
  }
};

const RECEPTOR_FRAME_MS = 1000 / 30;
const RECEPTOR_HOLD_CONFIRM_LOOP_FRAMES = 2;

function updateReceptorAnim(el) {
  if (!started) return;

  const dir   = el.dataset.dir;
  const state = el.dataset.state;

  if (el.dataset.player !== "1") return;

  if (!dir || !state) return;

  const frames = RECEPTOR_FRAMES[dir][state];
  if (!frames) return;

  const now  = performance.now();
  const last = Number(el.dataset.lastTime || 0);

  if (now - last < RECEPTOR_FRAME_MS) return;

  let frame = Number(el.dataset.frame || 0);

if (state === "confirm") {
if (el.dataset.hold === "1") {
const loopFrames = Math.max(
  1,
  Math.min(RECEPTOR_HOLD_CONFIRM_LOOP_FRAMES, frames.length)
);
if (frame >= loopFrames) frame = 0;
frame = (frame + 1) % loopFrames;
} else if (el.dataset.finish === "1") {

if (frame < frames.length - 1) frame++;
}
}
else if (state === "press") {
if (frame < frames.length - 1) frame++;
}

  el.dataset.frame = frame;
  el.dataset.lastTime = now;

  setReceptorFrame(el, dir, state, frame);
}

function receptorIdle(lane) {
  if (!started || introPlaying) return;

  const el = judgeImages[lane];
  if (!el || el.dataset.player !== "1") return;

  delete el.dataset.hold;
delete el.dataset.finish;

  el.dataset.state = "idle";
  el.dataset.frame = 0;
  el.dataset.lastTime = performance.now();
  setReceptorFrame(el, el.dataset.dir, "idle", 0);
}

const RECEPTOR_SCALE = 0.68;

const RECEPTOR_MAX_SIZE = {
  left:  { w: 220, h: 220 },
  down:  { w: 220, h: 220 },
  up:    { w: 220, h: 220 },
  right: { w: 220, h: 220 }
};

function setReceptorFrame(el, dir, state, frame) {
  const f = RECEPTOR_FRAMES[dir][state][frame];


  el.style.width  = `${f.w}px`;
  el.style.height = `${f.h}px`;

  el.style.backgroundImage =
    `url('${NOTE_SKINS[currentSkin].receptor}')`;

  el.style.backgroundPosition =
    `-${f.x}px -${f.y}px`;

  el.style.backgroundRepeat = "no-repeat";


  el.style.left = "50%";

  el.style.bottom = "var(--judge-bottom)";
 
  const ox = f.ox || 0;
  const oy = f.oy || 0;
 

  el.style.transform =
    `translate(-50%, 40%) translate(${ox}px, ${oy}px) scale(${RECEPTOR_SCALE})`;
}

function initReceptor(el, dir, isPlayer) {
  el.dataset.dir = dir;
  el.dataset.state = "idle";
  el.dataset.frame = 0;
  el.dataset.lastTime = 0;
  el.dataset.player = isPlayer ? "1" : "0";

  setReceptorFrame(el, dir, "idle", 0);
}

function receptorPress(lane) {
  if (!started || introPlaying) return;

  const el = judgeImages[lane];
  if (!el || el.dataset.player !== "1") return;

  if (el.dataset.state === "confirm") return;

  el.dataset.state = "press";
  el.dataset.frame = 0;
  el.dataset.lastTime = performance.now();
  setReceptorFrame(el, el.dataset.dir, "press", 0);
}

// =======================
// 長押し生成
// =======================
const NOTE_SCALE = 0.7;
const SUSTAIN_CLIP_LINE_OFFSET_Y = 50;
const SUSTAIN_TAIL_CLIP_EXTRA_UP_Y = -15;
const SUSTAIN_FORCE_CLEANUP_EXTRA_MS = 1200;

// ======================
// 長押し本体生成
// ======================
function spawnSustain(note, nowMs = getSongTimeMs()) {


  let laneEl = document.querySelector(
    `${note.isPlayer ? ".lane-group.player" : ".lane-group.opponent"} .lane[data-lane="${note.lane}"]`
  );



  if (!laneEl) {
    laneEl = document.querySelector(
      `${note.isPlayer ? ".lane-group.opponent" : ".lane-group.player"} .lane[data-lane="${note.lane}"]`
    ) || document.querySelector(`.lane[data-lane="${note.lane}"]`);
  }

  if (!laneEl) return;

  const container = ensureNoteContainer(laneEl);

  const dirMap = ["left", "down", "up", "right"];
  const dir = dirMap[note.lane];
  const type = note.isEvent ? "event" : "normal";
  const frame = SUSTAIN_FRAMES[type][dir];

  note.sustainFrame = frame;



  const displayBaseTime = note.time + (JUDGE_OFFSET || 0);
  const timeBase = note.time;


  if (note.sustainSpawned) {
    console.log("already spawned:", note._id);
    return;
  }


  if (note.isPlayer && nowMs > timeBase + note.sustain + 50) {
    console.log("player sustain already ended, skip:", note._id);
    return;
  }


  if (!note.isPlayer && nowMs > timeBase + note.sustain + 60000) {
    console.log("opponent sustain too late, skip:", note._id);
    return;
  }

  // mark spawned
  note.sustainSpawned = true;


  const laneOffset =
    LANE_JUDGE_Y_OFFSET[note.lane] || 0;



const HEAD_AS_BODY_PX =
  frame.body.h * NOTE_SCALE;

const totalPx =
  (note.sustain / 1000) *
  BASE_SPEED *
  speedMultiplier
  - HEAD_AS_BODY_PX;


  const MAX_PRESPAWN_MS = 2000;
  const effectiveNowMs = Math.max(nowMs, displayBaseTime - MAX_PRESPAWN_MS);


  const TILE_H_RAW = frame.body.h;
  const tileCount = Math.max(1, Math.ceil(totalPx / (TILE_H_RAW * NOTE_SCALE)));
  const tileMs = note.sustain / tileCount;
  note._sustainTileCount = tileCount;


  const stepPx = totalPx / tileCount;
  note._sustainStepPx = stepPx;
  note.sustainTiles = [];


  const headBottomY =
    HIT_Y +
    laneOffset -
    ((displayBaseTime - effectiveNowMs) / 1000) *
      BASE_SPEED *
      speedMultiplier;

  for (let i = 1; i <= tileCount; i++) {
    const tile = document.createElement("div");
    tile.className = "sustain-tile";
    tile.style.opacity = "0.87";

    if (note._id !== undefined) tile.dataset.noteId = note._id;


    tile._startMs = timeBase + i * tileMs;
    tile._endMs = tile._startMs + tileMs;
    tile.dataset.endMs = tile._endMs;
    tile.style.position = "absolute";


    tile.style.width = `${frame.body.w}px`;
    tile.style.height = `${frame.body.h}px`;

    tile.style.backgroundImage =
      `url('${NOTE_SKINS[currentSkin].sustain}')`;
    tile.style.backgroundPosition =
      `-${frame.body.x}px -${frame.body.y}px`;
    tile.style.backgroundRepeat = "no-repeat";
    tile.style.left = "50%";
    tile.style.transform = `translateX(-50%) scale(${NOTE_SCALE})`;
    tile.style.transformOrigin = "center bottom";
    tile.style.willChange = "top, clip-path";

    tile.style.zIndex = "7";


    tile._spawnOffsetPx = (i - 1) * stepPx;


    tile._renderH = frame.body.h * NOTE_SCALE;


    const tileBottom = headBottomY - tile._spawnOffsetPx;
    tile._topPx = tileBottom - tile._renderH;
    tile.style.top = `${tile._topPx}px`;

    container.appendChild(tile);
    note.sustainTiles.push(tile);
  }

  // ===== tail =====
  const tail = document.createElement("div");
  tail.className = "sustain-tail";
  tail.style.position = "absolute";
  tail.style.width = `${frame.end.w}px`;
  tail.style.height = `${frame.end.h}px`;
  tail.style.backgroundImage =
    `url('${NOTE_SKINS[currentSkin].sustain}')`;
  tail.style.backgroundPosition =
    `-${frame.end.x}px -${frame.end.y}px`;
  tail.style.backgroundRepeat = "no-repeat";
  tail.style.left = "50%";

  tail.style.transform = `translateX(-50%) scale(${NOTE_SCALE}) rotate(180deg)`;
  tail.style.transformOrigin = "center bottom";
  tail.style.willChange = "top, clip-path";
  tail.style.zIndex = "7";


const bodyRenderH = frame.body.h * NOTE_SCALE;


const tailRenderH = frame.end.h * NOTE_SCALE;


tail._spawnOffsetPx =
  tileCount * stepPx + (tailRenderH - bodyRenderH);
  tail._renderH = frame.end.h * NOTE_SCALE;
  tail._endMs = timeBase + note.sustain;
  tail.dataset.endMs = tail._endMs;
  if (note._id !== undefined) tail.dataset.noteId = note._id;

  const TAIL_Y_FIX = {
  left:  10,
  down:  0,
  up:    0,
  right: 10
};

  tail._spawnOffsetPx += TAIL_Y_FIX[dir] || 0;


  const tailBottom = headBottomY - tail._spawnOffsetPx;
  tail._topPx = tailBottom - tail._renderH;
  tail.style.top = `${tail._topPx}px`;

  container.appendChild(tail);
  note.tailEl = tail;
}


function ensureNoteContainer(laneEl) {
  let container = laneEl.querySelector(".note-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "note-container";
    container.style.position = "absolute";
    container.style.left = "0";
    container.style.top = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    laneEl.appendChild(container);
  }
  return container;
}


// ===============
// 長押し離し
// ===============
function releaseSustain(lane) {
  if (!started) return;

  const target = notes.find(n =>
    n.isPlayer && n.isSustain && n.holding && n.lane === lane
  );
  if (!target) return;

  target.holding = false;
  target.released = true;
  target.releaseTime = getSongTimeMs();
  emitCharacterNoteEvent("player", lane, "hold_release", { note: target });
}
