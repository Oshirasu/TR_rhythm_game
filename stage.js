// Stage / character presentation helpers

function preloadIconSet(basePath, names, frames) {
  const imgs = [];
  names.forEach(name => {
    for (let i = 0; i < frames; i++) {
      const img = new Image();
      img.src = `${basePath}/${name}${i}.png`;
      imgs.push(img);
    }
  });
  return imgs;
}

function preloadIconFolder(basePath, folder, prefix, frameCount) {
  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = `${basePath}/${folder}/${prefix}${i}.png`;
  }
}

function getIconFolder(type) {
  if (type === "bf") return "bf";
  if (type === "miku") return "miku";

  return "teto";
}

const opponentIcon = document.getElementById("health-opponent");
const playerIcon   = document.getElementById("health-player");

document.addEventListener("DOMContentLoaded", () => {
  preloadIconFolder(
    "assets/images/icon",
    "teto",
    "Icon-Teto",
    4
  );

  preloadIconFolder(
    "assets/images/icon",
    "miku",
    "Icon-Miku",
    4
  );

  preloadIconFolder(
    "assets/images/icon",
    "teto",
    "Icon-Teto-Scary",
    4
  );

  preloadIconFolder(
    "assets/images/icon",
    "teto",
    "Icon-Teto-Weak",
    4
  );

  preloadIconFolder(
    "assets/images/icon",
    "bf",
    "Icon-BFAnim",
    4
  );

  preloadNoteSkins();
  preloadJudgeDigits();
  loadSplashAtlases();
});

function setOpponentIcon(type) {
  const icons = opponentIcon.querySelectorAll(".icon-img");

  let target = null;
  icons.forEach(img => {
    if (img.classList.contains(type)) target = img;
  });

  if (!target) {
    console.warn("icon not found:", type);
    return;
  }

  const current = opponentIcon.querySelector(".icon-img.active");
  if (current !== target) {
    current?.classList.remove("active");
    target.classList.add("active");
  }
}

let frame = 1;

const ICON_TYPES = ["teto", "miku", "scary", "weak", "bf"];

setInterval(() => {
  document.querySelectorAll(
    "#health-opponent .icon-img.active, #health-player .icon-img.active"
  ).forEach(img => {

    let frame = Number(img.dataset.frame || 1);
    frame = frame % 4 + 1;
    img.dataset.frame = frame;

    const type = [...img.classList].find(c => ICON_TYPES.includes(c));
    if (!type) return;

    img.src = `assets/images/icon/${getIconFolder(type)}/Icon-${getIconPrefix(type)}${frame}.png`;
  });
}, 30000 / 195);

function getIconPrefix(type) {
  if (type === "teto") return "Teto";
  if (type === "miku") return "Miku";
  if (type === "scary") return "Teto-Scary";
  if (type === "weak") return "Teto-Weak";
  if (type === "bf") return "BFAnim";
}

const BPM = 195;
const BEAT_MS = 60000 / BPM;
const BEATS_PER_BAR = 4;
const BAR_MS = BEAT_MS * BEATS_PER_BAR;

function barBeatToMs(bar, beat){

  return (bar - 1) * BAR_MS + (beat - 1) * BEAT_MS;
}

const STOMP_SECTIONS = [
  { start: 30769, end: 50025 },  // ms
  { start: 60324, end: 69896 },
	{ start: 114153, end: 123846 },
	{ start: 126461, end: 133846 }
];

function isChorus(nowMs){
  return STOMP_SECTIONS.some(sec =>
    nowMs >= sec.start && nowMs < sec.end
  );
}

function getBeatPhase(nowMs){
  return (nowMs % BEAT_MS) / BEAT_MS;
}

function stompWave(phase){

  if (phase < 0.01) {
    return phase / 0.01;
  } 

  else {
    const t = (phase - 0.01) / 0.6;
    return Math.max(0, Math.cos(t * Math.PI / 2));
  }
}

let introPlaying = false;
let introPrepared = false;
let introPreparePromise = null;
let introSessionToken = 0;
let introFadeTimer = null;
let introFinishTimer = null;
let introSongStartDelayTimer = null;
const introStepTimers = [];

const introAudios = [
  document.getElementById("intro-3"),
  document.getElementById("intro-2"),
  document.getElementById("intro-1"),
  document.getElementById("intro-go"),
];

const introImages = [
  null, // 3
  "assets/images/intro/ready.png", // 2
  "assets/images/intro/set.png", // 1
  "assets/images/intro/go.png", // GO!
];

const introImageCache = {};

function preloadIntroImage(src) {
  if (!src) return Promise.resolve();
  if (introImageCache[src]) return introImageCache[src];

  introImageCache[src] = new Promise((resolve) => {
    const img = new Image();
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      resolve();
    };

    img.onload = finish;
    img.onerror = finish;
    img.src = src;
    if (img.complete) finish();
  });

  return introImageCache[src];
}

function waitCanPlayWithTimeout(audioEl, timeoutMs = 6000) {
  if (!audioEl) return Promise.resolve();
  return Promise.race([
    waitCanPlay(audioEl),
    new Promise((resolve) => setTimeout(resolve, timeoutMs))
  ]);
}

function isIntroAudioReady(audioEl) {
  return Boolean(audioEl && audioEl.readyState >= 2);
}

function areIntroAudiosReadyForPlayback() {
  return introAudios.every((audioEl) => !audioEl || isIntroAudioReady(audioEl));
}

function ensureIntroAudioReady(audioEl, timeoutMs = 1200) {
  if (!audioEl) return Promise.resolve(true);
  if (isIntroAudioReady(audioEl)) return Promise.resolve(true);
  try { audioEl.load(); } catch (e) {}
  return waitCanPlayWithTimeout(audioEl, timeoutMs).then(() => isIntroAudioReady(audioEl));
}

async function warmIntroAudioPlayback(audioEl, timeoutMs = 220) {
  if (!audioEl) return;
  const prevMuted = audioEl.muted;
  const prevVolume = audioEl.volume;
  const prevRate = audioEl.playbackRate || 1;
  try {
    audioEl.muted = true;
    audioEl.volume = 0;
    audioEl.playbackRate = 1;
    audioEl.currentTime = 0;
    const p = audioEl.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {});
    }
    await waitForPlaying(audioEl, timeoutMs);
  } catch (e) {
  } finally {
    try { audioEl.pause(); } catch (e) {}
    try { audioEl.currentTime = 0; } catch (e) {}
    audioEl.muted = prevMuted;
    audioEl.volume = prevVolume;
    audioEl.playbackRate = prevRate;
  }
}

async function warmIntroAudiosForPlayback() {
  for (const audioEl of introAudios) {
    await warmIntroAudioPlayback(audioEl);
  }
}

function clearIntroPlaybackTimers() {
  if (introFadeTimer) {
    clearTimeout(introFadeTimer);
    introFadeTimer = null;
  }
  if (introFinishTimer) {
    clearTimeout(introFinishTimer);
    introFinishTimer = null;
  }
  if (introSongStartDelayTimer) {
    clearTimeout(introSongStartDelayTimer);
    introSongStartDelayTimer = null;
  }
  introStepTimers.forEach((timerId) => clearTimeout(timerId));
  introStepTimers.length = 0;
}

function resetIntroImageState() {
  const img = document.getElementById("intro-image");
  if (!img) return;
  img.onload = null;
  img.classList.remove("show", "fade");
  img.style.opacity = 0;
}

function stopStageIntroPlayback() {
  introSessionToken += 1;
  introPlaying = false;
  clearIntroPlaybackTimers();
  introAudios.forEach((audioEl) => {
    if (!audioEl) return;
    try {
      audioEl.pause();
      audioEl.currentTime = 0;
    } catch (e) {}
  });
  resetIntroImageState();
}

function prepareStageIntroAssetsForPlayback() {
  if (introPrepared && areIntroAudiosReadyForPlayback()) {
    return Promise.resolve(true);
  }
  if (introPreparePromise) return introPreparePromise;

  const audioReadyTasks = introAudios.map((audioEl) => ensureIntroAudioReady(audioEl));
  const imageReadyTasks = introImages.filter(Boolean).map((src) => preloadIntroImage(src));

  introPreparePromise = Promise.all([
    ...audioReadyTasks,
    ...imageReadyTasks
  ])
    .then(() => {
      if (introPrepared) return true;
      return warmIntroAudiosForPlayback().then(() => true);
    })
    .then(() => {
      introPrepared = true;
      return true;
    })
    .catch((err) => {
      console.warn("intro prepare failed:", err);
      return false;
    })
    .finally(() => {
      introPreparePromise = null;
    });

  return introPreparePromise;
}

window.stopStageIntroPlayback = stopStageIntroPlayback;
window.prepareStageIntroAssetsForPlayback = prepareStageIntroAssetsForPlayback;

function safePlayAudio(audioEl) {
  if (!audioEl) return;
  try {
    // Avoid queued delayed playback: if not ready yet, skip this step.
    if (audioEl.readyState < 2) {
      try { audioEl.load(); } catch (e) {}
      return;
    }
    audioEl.pause();
    audioEl.currentTime = 0;
    const p = audioEl.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {});
    }
  } catch (e) {}
}

function waitForPlaying(audioEl, timeoutMs = 1200) {
  if (!audioEl) return Promise.resolve();
  if (!audioEl.paused && audioEl.readyState >= 2) return Promise.resolve();

  return new Promise((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      audioEl.removeEventListener("playing", onReady);
      audioEl.removeEventListener("timeupdate", onReady);
      resolve();
    };
    const onReady = () => finish();
    const timer = setTimeout(finish, timeoutMs);

    audioEl.addEventListener("playing", onReady);
    audioEl.addEventListener("timeupdate", onReady);
  });
}

function playIntroAndStartSong(){
  stopStageIntroPlayback();
  introPlaying = true;
  const introToken = introSessionToken;


  let imgs = document.getElementById("intro-image");
  if (!imgs) {
    imgs = document.createElement("img");
    imgs.id = "intro-image";
    document.getElementById("game").appendChild(imgs);
  }


  imgs.src = "";
  imgs.style.opacity = 0;
  imgs.className = "";

  const img = document.getElementById("intro-image");
  const SHOW_RATIO = 0.1;
  const FADE_MS = 20;
  const INTRO_STEPS = 4;

  function showIntroImage(src) {
    if (introToken !== introSessionToken) return;
    if (introFadeTimer) {
      clearTimeout(introFadeTimer);
      introFadeTimer = null;
    }

    img.classList.remove("show");
    img.classList.remove("fade");
    img.style.opacity = 0;

    img.onload = null;
    img.src = src;

    const reveal = () => {
      if (!introPlaying || introToken !== introSessionToken) return;
      img.classList.remove("fade");
      img.classList.add("show");
      img.style.opacity = "1";

      introFadeTimer = setTimeout(() => {
        if (!introPlaying || introToken !== introSessionToken) return;
        img.classList.add("fade");
        img.style.opacity = "0";
        introFadeTimer = null;
      }, BEAT_MS * SHOW_RATIO);
    };

    if (img.decode) {
      img.decode().then(reveal).catch(reveal);
    } else {
      img.onload = reveal;
    }
  }

  function finishIntroAndStartSong() {
    if (!introPlaying || introToken !== introSessionToken) return;
    img.classList.add("fade");

    introSongStartDelayTimer = setTimeout(() => {
      introSongStartDelayTimer = null;
      if (!introPlaying || introToken !== introSessionToken) return;
      img.classList.remove("show", "fade");
      img.style.opacity = 0;

      song.currentTime = 0;
      if (song2) song2.currentTime = 0;

      Promise.all([
        waitCanPlay(song),
        waitCanPlay(song2)
      ]).then(() => {
        if (!introPlaying || introToken !== introSessionToken) return;
        song.currentTime = 0;
        if (song2) song2.currentTime = 0;

        const playInst = song.play();
        const playVoices = song2 ? song2.play() : Promise.resolve();

        return Promise.all([playInst, playVoices]).then(() => {
          return Promise.all([
            waitForPlaying(song),
            waitForPlaying(song2)
          ]);
        });
      }).then(() => {
        if (!introPlaying || introToken !== introSessionToken) return;
        if (song2) {
          const instStartTime = Math.max(0, song.currentTime || 0);
          const voicesStartTime = Math.max(0, song2.currentTime || 0);
          const voicesOffsetSec =
            typeof window.getVoicesSyncOffsetSec === "function"
              ? Number(window.getVoicesSyncOffsetSec()) || 0
              : 0;
          const alignedVoicesTime = Math.max(0, instStartTime + voicesOffsetSec);
          if (Math.abs(alignedVoicesTime - voicesStartTime) >= 0.02) {
            song2.currentTime = alignedVoicesTime;
          }
          song2.playbackRate = song.playbackRate || 1;
          if (typeof startSongTimeline === "function") {
            startSongTimeline(instStartTime);
          }

          if (typeof forceSyncSongTracksNow === "function") {
            forceSyncSongTracksNow();
          } else {
            song2.currentTime = alignedVoicesTime;
          }

          requestAnimationFrame(() => {
            if (!song.paused && !song2.paused) {
              if (typeof forceSyncSongTracksNow === "function") {
                forceSyncSongTracksNow();
              } else {
                song2.currentTime = song.currentTime;
              }
            }
          });
        } else if (typeof startSongTimeline === "function") {
          startSongTimeline(song.currentTime || 0);
        }
        if (typeof beginTrackSyncBoost === "function") {
          beginTrackSyncBoost(1000);
        }
        setupJudgeImages();
        clearIntroPlaybackTimers();
        lastBarIndex = -1;
        barZoomSkipUntilMs = BAR_ZOOM_SKIP_AFTER_GO_MS;
        started = true;
        introPlaying = false;
        if (typeof requestUpdateFrame === "function") {
          requestUpdateFrame();
        } else {
          requestAnimationFrame(update);
        }
      }).catch(err => {
        console.error("play failed", err);
      });
    }, FADE_MS);
  }

  function startIntroTimeline() {
    const introStart = performance.now();
    const MAX_STEP_LATE_MS = Math.max(16, BEAT_MS * 0.9);

    function runStep(stepIndex) {
      if (!introPlaying || introToken !== introSessionToken) return;
      safePlayAudio(introAudios[stepIndex]);
      if (introImages[stepIndex]) {
        showIntroImage(introImages[stepIndex]);
      }
    }

    for (let stepIndex = 0; stepIndex < INTRO_STEPS; stepIndex += 1) {
      const target = introStart + BEAT_MS * stepIndex;
      const delay = Math.max(0, target - performance.now());
      const timer = setTimeout(() => {
        if (!introPlaying || introToken !== introSessionToken) return;
        const lateMs = performance.now() - target;
        if (stepIndex !== 0 && lateMs > MAX_STEP_LATE_MS) return;
        runStep(stepIndex);
      }, delay);
      introStepTimers.push(timer);
    }

    const finishTarget = introStart + BEAT_MS * INTRO_STEPS;
    const finishDelay = Math.max(0, finishTarget - performance.now());
    introFinishTimer = setTimeout(() => {
      introFinishTimer = null;
      if (!introPlaying || introToken !== introSessionToken) return;
      finishIntroAndStartSong();
    }, finishDelay);
  }

  clearIntroPlaybackTimers();
  prepareStageIntroAssetsForPlayback().finally(() => {
    if (!introPlaying || introToken !== introSessionToken) return;
    ensureIntroAudioReady(introAudios[0], Math.max(600, Math.round(BEAT_MS))).finally(() => {
      if (!introPlaying || introToken !== introSessionToken) return;
      startIntroTimeline();
    });
  });
}

const HEALTH_DRAIN_SECTIONS = [
  { start: 60324, end: 69702, amount: -15 },
  { start: 124023, end: 124123, amount: -25 },
  { start: 124483, end: 124583, amount: -25 },
  { start: 124944, end: 125044, amount: -25 },
];

function getHealthDrainSection(nowMs){
  return HEALTH_DRAIN_SECTIONS.find(sec =>
    nowMs >= sec.start && nowMs < sec.end
  );
}

const TIME_SIGNATURES = [
  { start: 1230.769230769231,        beatsPerBar: 4 }, // 4/4
  { start: 80000,    beatsPerBar: 6 },
  { start: 114153,   beatsPerBar: 4 },
];

function getTimeSignatureSection(nowMs) {
  let current = TIME_SIGNATURES[0];

  for (let i = 0; i < TIME_SIGNATURES.length; i++) {
    if (nowMs >= TIME_SIGNATURES[i].start) {
      current = TIME_SIGNATURES[i];
    } else {
      break;
    }
  }

  return current;
}

function getBeatsPerBar(nowMs) {
  let current = TIME_SIGNATURES[0].beatsPerBar;

  for (const sig of TIME_SIGNATURES) {
    if (nowMs >= sig.start) {
      current = sig.beatsPerBar;
    } else {
      break;
    }
  }
  return current;
}

const viewport = document.getElementById("viewport");

let zoomScale = 1;
let zoomTimer = 0;

const ZOOM_KICK = 0.025;
const ZOOM_RETURN_SPEED = 0.08;
const BAR_ZOOM_SKIP_AFTER_GO_MS = 200;
let barZoomSkipUntilMs = 0;

let lastBarIndex = -1;

function triggerBarZoom() {
  zoomScale = 1 + ZOOM_KICK;
  zoomTimer = 1;
}

function updateBarZoom(nowMs) {
  const sig = getTimeSignatureSection(nowMs);

  const beatsPerBar = sig.beatsPerBar;
  const sectionStartMs = sig.start;


  const localMs = nowMs - sectionStartMs;

  const localBeat = Math.floor(localMs / BEAT_MS);
  const barIndex = Math.floor(localBeat / beatsPerBar);

  if (barIndex !== lastBarIndex) {
    if (nowMs >= barZoomSkipUntilMs) {
      triggerBarZoom();
    }
    lastBarIndex = barIndex;
  }
}

function updateZoom() {
  if (zoomTimer <= 0) return;


  zoomScale += (1 - zoomScale) * ZOOM_RETURN_SPEED;


  if (zoomScale <= 1.0005) {
    zoomScale = 1;
    zoomTimer = 0;
  }

  viewport.style.transform = `scale(${zoomScale})`;
}

const healthBar = document.getElementById("health-bar");
const opponentFill = document.getElementById("health-opponent-fill");
const playerFill = document.getElementById("health-player-fill");

const ICON_SIZE = 40;

const ICON_SECTIONS = [
  {
    start: 60324	,
    end: 70000,
    opponent: "scary",
    player: null
  },
  {
    start: 80000,
    end: 113165,
    opponent: "miku",
    player: null
  },
  {
    start: 113230.769230769,
    end: 113384.615384616,
    opponent: null,
    player: null
  },
  {
    start: 113384.615384616,
    end: 113538.461538462,
    opponent: "miku",
    player: null
  },
	  {
    start: 113538.461538462,
    end: 113615.384615385,
    opponent: null,
    player: null
  },
  {
    start: 113615.384615385,
    end: 113692.307692308,
    opponent: "miku",
    player: null
  },
  {
    start: 113692.307692308,
    end: 113692.307692308,
    opponent: null,
    player: null
  }
];

function updateHealthBar(){
  const barWidth = healthBar.clientWidth;

  const percent = health / 100;


  const playerWidth = barWidth * percent;
  const opponentWidth = barWidth - playerWidth;

  playerFill.style.width = `${playerWidth}px`;
  opponentFill.style.width = `${opponentWidth}px`;

  const boundaryX = barWidth * (1 - percent);


  const gap = parseFloat(
    getComputedStyle(opponentIcon)
      .getPropertyValue('--health-icon-gap')
  ) || 90;

  opponentIcon.style.left = `${boundaryX}px`;
  playerIcon.style.left   = `${boundaryX}px`;

  opponentIcon.style.setProperty('--icon-gap', `${-gap}px`);
  playerIcon.style.setProperty('--icon-gap', `${gap}px`);
}

function updateHealthIconPosition() {
  const container = document.getElementById("health-container");
  const opponent = document.getElementById("health-opponent");
  const player   = document.getElementById("health-player");

  const gap = parseFloat(
    getComputedStyle(opponent).getPropertyValue("--health-icon-gap")
  );

  const centerX = container.offsetWidth / 2;

  opponent.style.left = `${centerX - gap}px`;
  player.style.left   = `${centerX + gap}px`;
}

function getIconSection(nowMs) {
  return ICON_SECTIONS.find(sec =>
    nowMs >= sec.start && nowMs < sec.end
  ) || null;
}

let currentOpponentIcon = null;
let currentPlayerIcon = null;
let hudThemeByBackground = "";

const ICON_STATES = ["scary", "miku"];

function setOpponentState(state) {
  opponentIcon.classList.remove("teto", "miku", "scary", "weak");
  opponentIcon.classList.add(state);
}

function normalizeHudThemeByBackground(value) {
  const v = String(value || "").trim().toLowerCase();
  if (v === "miku" || v === "teto") return v;
  return "";
}

function setHudThemeByBackground(theme) {
  hudThemeByBackground = normalizeHudThemeByBackground(theme);
  currentOpponentIcon = null;
}

function updateIconState(nowMs) {
  const sec = getIconSection(nowMs);

  let nextOpponent = "teto";
  if (hudThemeByBackground) {
    nextOpponent = hudThemeByBackground;
  } else {
    const isScary = sec && sec.opponent === "scary";
    const isMiku  = sec && sec.opponent === "miku";

    if (isScary) {
      nextOpponent = "scary";
    } else if (isMiku) {
      nextOpponent = "miku";
    } else if (health > 80) {
      nextOpponent = "weak";
    }
  }

if (currentOpponentIcon !== nextOpponent) {
  currentOpponentIcon = nextOpponent;
  setOpponentIcon(nextOpponent);
  setOpponentState(nextOpponent);

  updateHealthBar();
}


  const healthBar = document.getElementById("health-bar");

  if (nextOpponent === "miku") {
    healthBar.classList.add("miku-mode");
  } else {
    healthBar.classList.remove("miku-mode");
  }
}

function setPlayerIcon(type) {
  const icons = playerIcon.querySelectorAll(".icon-img");
  let target = null;

  icons.forEach(img => {
    if (img.classList.contains(type)) target = img;
  });
  if (!target) return;

  const current = playerIcon.querySelector(".icon-img.active");
  if (current !== target) {
    current?.classList.remove("active");
    target.classList.add("active");
  }
}

function resetIconAndHealthBarVisuals() {
  currentOpponentIcon = null;
  currentPlayerIcon = null;
  setHudThemeByBackground("");

  setOpponentIcon("teto");
  setOpponentState("teto");
  setPlayerIcon("bf");

  const barEl = document.getElementById("health-bar");
  if (barEl) {
    barEl.classList.remove("miku-mode");
  }

  if (typeof updateHealthBar === "function") {
    updateHealthBar();
  }
}

window.resetIconAndHealthBarVisuals = resetIconAndHealthBarVisuals;
window.setHudThemeByBackground = setHudThemeByBackground;
