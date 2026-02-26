const CHARACTER_LANE_TO_ANIM = ["left", "down", "up", "right"];
const CHARACTER_IDLE_DELAY_MS = 440;
const CHARACTER_FRAME_MS = 1000 / 24;
let HOLD_FINAL_RUN_SECONDS = 0.05;

const CHARACTER_PRESETS = {
  shadow: {
    player: {
      atlasXmlPath: "assets/images/characters/Bf Shadow.xml",
      characterJsonPath: "assets/characters/bf shadow.json",
      animationAliases: {
        idle: ["bf shadow"],
        "sing-left": ["bf left"],
        "sing-down": ["bf down"],
        "sing-up": ["bf up"],
        "sing-right": ["bf right"],
        "miss-left": ["bf lmiss"],
        "miss-down": ["bf dmiss"],
        "miss-up": ["bf umiss"],
        "miss-right": ["bf rmiss"]
      }
    },
    opponent: {
      atlasXmlPath: "assets/images/characters/Teto Shadow.xml",
      characterJsonPath: "assets/characters/teto shadow.json",
      animationAliases: {
        idle: ["teto shadow"],
        "sing-left": ["teto left"],
        "sing-down": ["teto down"],
        "sing-up": ["teto up"],
        "sing-right": ["teto right"]
      }
    }
  },
  estandar: {
    player: {
      atlasXmlPath: "assets/images/characters/Bf Estandar.xml",
      characterJsonPath: "assets/characters/bf estandar.json",
      animationAliases: {
        idle: ["bf estandar", "bf estander"],
        "sing-left": ["bf left"],
        "sing-down": ["bf down"],
        "sing-up": ["bf up"],
        "sing-right": ["bf right"],
        "miss-left": ["bf left miss"],
        "miss-down": ["bf down miss"],
        "miss-up": ["bf up miss"],
        "miss-right": ["bf right miss"]
      }
    },
    opponent: {
      atlasXmlPath: "assets/images/characters/Teto Estandar.xml",
      characterJsonPath: "assets/characters/teto estandar.json",
      animationAliases: {
        idle: ["teto estandar", "teto estander"],
        "sing-left": ["teto left"],
        "sing-down": ["teto down"],
        "sing-up": ["teto up"],
        "sing-right": ["teto right"]
      }
    }
  },
  gfpico: {
    player: {
      atlasXmlPath: "assets/images/characters/gfpico.xml",
      characterJsonPath: "assets/characters/gfpico.json",
      applyCharacterJsonMeta: true,
      applyCharacterJsonScale: true,
      applyCharacterJsonAnimOffsets: false,
      animationAliases: {
        idle: ["idle"],
        pico: ["pico"],
        gf: ["gf"],
        bf: ["bf"]
      }
    }
  },
  bfdraw: {
    player: {
      atlasXmlPath: "assets/images/characters/Bf Bad Draw.xml",
      characterJsonPath: "assets/characters/bfdraw.json",
      applyCharacterJsonMeta: true,
      applyCharacterJsonScale: true,
      applyCharacterJsonAnimOffsets: false,
      animationAliases: {
        idle: ["bf bad draw", "idle"],
        "sing-left": ["left"],
        "sing-down": ["down"],
        "sing-up": ["up"],
        "sing-right": ["right"],
        "miss-left": ["lefmiss"],
        "miss-down": ["dowmiss"],
        "miss-up": ["umiss"],
        "miss-right": ["righmiss"]
      }
    }
  },
  bf_animation: {
    player: {
      atlasXmlPath: "assets/images/characters/Bf Animation.xml",
      characterJsonPath: "assets/characters/bf animation.json",
      applyCharacterJsonMeta: true,
      applyCharacterJsonScale: true,
      applyCharacterJsonAnimOffsets: false,
      animationAliases: {
        idle: ["idle"],
        animation: ["animation"]
      }
    }
  },
  animation: {
    opponent: {
      atlasXmlPath: "assets/images/characters/Teto Animation.xml",
      characterJsonPath: "assets/characters/teto animation.json",
      applyCharacterJsonMeta: true,
      applyCharacterJsonAnimOffsets: false,
      animationAliases: {
        idle: ["ani gif"]
      }
    }
  },
  chef: {
    opponent: {
      atlasXmlPath: "assets/images/characters/Teto Chef.xml",
      characterJsonPath: "assets/characters/teto chef.json",
      animationAliases: {
        idle: ["teto estandar", "teto chef"],
        "sing-left": ["teto chef left"],
        "sing-down": ["teto chef down"],
        "sing-up": ["teto chef up"],
        "sing-right": ["teto chef right"]
      }
    }
  },
  house: {
    opponent: {
      atlasXmlPath: "assets/images/characters/Teto House.xml",
      characterJsonPath: "assets/characters/teto house.json",
      animationAliases: {
        idle: ["teto estandar", "teto house"],
        "sing-left": ["teto house left"],
        "sing-down": ["teto house down"],
        "sing-up": ["teto house up"],
        "sing-right": ["teto house right"]
      }
    }
  },
  medic: {
    opponent: {
      atlasXmlPath: "assets/images/characters/Teto Medic.xml",
      characterJsonPath: "assets/characters/teto medic.json",
      animationAliases: {
        idle: ["teto estandar", "teto medic"],
        "sing-left": ["teto medic left"],
        "sing-down": ["teto medic down"],
        "sing-up": ["teto medic up"],
        "sing-right": ["teto medic right"]
      }
    }
  },
  classic: {
    opponent: {
      atlasXmlPath: "assets/images/characters/Teto Classic.xml",
      characterJsonPath: "assets/characters/teto classic.json",
      animationAliases: {
        idle: ["teto estandar", "teto classic"],
        "sing-left": ["teto classic left"],
        "sing-down": ["teto classic down"],
        "sing-up": ["teto classic up"],
        "sing-right": ["teto classic right"]
      }
    }
  },
  tetohappy: {
    opponent: {
      atlasXmlPath: "assets/images/characters/tetohappy.xml",
      characterJsonPath: "assets/characters/tetohappy.json",
      applyCharacterJsonMeta: true,
      applyCharacterJsonScale: true,
      applyCharacterJsonAnimOffsets: false,
      animationAliases: {
        idle: ["happy", "idle"]
      }
    }
  },
  aishite1: {
    opponent: {
      atlasXmlPath: "assets/images/characters/Aishite 1.xml",
      characterJsonPath: "assets/characters/aishite1.json",
      applyCharacterJsonMeta: true,
      applyCharacterJsonScale: true,
      applyCharacterJsonAnimOffsets: false,
      animationAliases: {
        idle: ["aishite"],
        aishite1: ["aishite"]
      }
    }
  },
  mikuaishite2: {
    opponent: {
      atlasXmlPath: "assets/images/characters/mikuaishi2.xml",
      characterJsonPath: "assets/characters/mikuaishite2.json",
      applyCharacterJsonMeta: true,
      applyCharacterJsonScale: true,
      applyCharacterJsonAnimOffsets: false,
      animationAliases: {
        idle: ["idle", "mikuaishi2"],
        aishite2: ["mikuaishi2"]
      }
    }
  },
  mikuaishi3: {
    opponent: {
      atlasXmlPath: "assets/images/characters/mikuaishite3.xml",
      characterJsonPath: "assets/characters/mikuaishi3.json",
      applyCharacterJsonMeta: true,
      applyCharacterJsonScale: true,
      applyCharacterJsonAnimOffsets: false,
      animationAliases: {
        idle: ["idle", "mikuaishite3"],
        aishite3: ["mikuaishite3"]
      }
    }
  },
  miku_motto: {
    opponent: {
      atlasXmlPath: "assets/images/characters/Motto Motto.xml",
      characterJsonPath: "assets/characters/miku motto.json",
      applyCharacterJsonMeta: true,
      applyCharacterJsonScale: true,
      applyCharacterJsonAnimOffsets: false,
      animationAliases: {
        idle: ["idle", "motto motto"],
        motto: ["motto motto"]
      }
    }
  },
  miku_kuroshi: {
    opponent: {
      atlasXmlPath: "assets/images/characters/Kuroshi.xml",
      characterJsonPath: "assets/characters/miku kuroshi.json",
      applyCharacterJsonMeta: true,
      applyCharacterJsonScale: true,
      applyCharacterJsonAnimOffsets: false,
      animationAliases: {
        idle: ["idle", "kuruoshi"],
        kuroushi: ["kuruoshi", "kuroshi"]
      }
    }
  },
  miku_hodo: {
    opponent: {
      atlasXmlPath: "assets/images/characters/Hodo.xml",
      characterJsonPath: "assets/characters/miku hodo.json",
      applyCharacterJsonMeta: true,
      applyCharacterJsonScale: true,
      applyCharacterJsonAnimOffsets: false,
      animationAliases: {
        idle: ["idle mi", "hodo mi", "idle"],
        "hodo mi": ["hodo mi"]
      }
    }
  },
  miku_miiii: {
    opponent: {
      atlasXmlPath: "assets/images/characters/Miiii.xml",
      characterJsonPath: "assets/characters/miku miiii.json",
      applyCharacterJsonMeta: true,
      applyCharacterJsonScale: true,
      applyCharacterJsonAnimOffsets: false,
      animationAliases: {
        idle: ["idle", "miii"],
        mi: ["miii", "mi"]
      }
    }
  },
  miku: {
    opponent: {
      atlasXmlPath: "assets/images/characters/Miku.xml",
      characterJsonPath: "assets/characters/miku.json",
      applyCharacterJsonMeta: true,
      applyCharacterJsonScale: true,
      applyCharacterJsonAnimOffsets: false,
      animationAliases: {
        idle: ["miku estandar", "idle"],
        "sing-left": ["miku left"],
        "sing-down": ["miku down"],
        "sing-up": ["miku up"],
        "sing-right": ["miku right"]
      }
    }
  }
};

const OPPONENT_SPLIT_LAYOUT_PRESETS = new Set([
  "estandar",
  "animation",
  "chef",
  "house",
  "medic",
  "classic"
]);

const OPPONENT_TIMELINE_ONLY_PRESETS = new Set([
  "animation",
  "aishite1",
  "mikuaishite2",
  "mikuaishi3",
  "miku_motto",
  "miku_kuroshi",
  "miku_hodo",
  "miku_miiii"
]);
const PLAYER_TIMELINE_ONLY_PRESETS = new Set([
  "gfpico",
  "bf_animation"
]);

const GF_CHARACTER_PRESETS = {
  bgthing: {
    atlasXmlPath: "assets/images/characters/bgthing.xml",
    characterJsonPath: "assets/characters/bgthing.json",
    animationAliases: {
      idle: ["idle"],
      animation: ["animation"]
    }
  }
};

const CHARACTER_PRESET_OFFSETS = {
  player: {
    // gfpico: global Y tuning (positive=down, negative=up).
    gfpico: { x: 30, y: 165 }
  },
  opponent: {
    // Teto Animation atlas has a much taller frame box; shift up to keep stage Y consistent.
    animation: { x: 275, y: -145 },
    // Tetohappy: tune Y here (positive=down, negative=up).
    tetohappy: { x: 0, y: 75 },
    // Miku variants: per-skin vertical normalization (same dad anchor).
    aishite1: { x: 20, y: 65 },
    mikuaishite2: { x: 20, y: 65 },
    mikuaishi3: { x: 0, y: 69 },
    miku_motto: { x: -20, y: 69 },
    miku_kuroshi: { x: 0, y: 65 },
    miku_hodo: { x: 0, y: 65 },
    miku_miiii: { x: 0, y: 75 },
    miku: { x: 0, y: 65 }
  }
};

const CHARACTER_PRESET_SCALE_MULTIPLIERS = {
  opponent: {
    // Miku variants: per-skin size normalization.
    aishite1: 1.15,
    mikuaishite2: 1.15,
    mikuaishi3: 1.15,
    miku_motto: 1.15,
    miku_kuroshi: 1.15,
    miku_hodo: 1.15,
    miku_miiii: 1.15,
    miku: 1.16
  }
};

// Fine-tune only Miku down-lane Y offset (px). + = down, - = up.
let MIKU_DOWN_EXTRA_OFFSET_Y = 20;

const characterTransientOffsets = {
  player: { x: 0, y: 0 },
  opponent: { x: 0, y: 0 },
  gf: { x: 0, y: 0 }
};

const characterBounceState = {
  enabled: false,
  amountPx: 40,
  downMs: 60,
  upMs: 140,
  lastBeatIndex: -1
};

const characterBounceAnim = {
  player: { rafId: 0, token: 0 },
  opponent: { rafId: 0, token: 0 }
};

const characterRuntime = {
  player: {
    lane: null,
    state: "idle",
    timer: null,
    holdAdvanceTimer: null,
    holdAdvancePerf: 0,
    holdEnded: false,
    releaseRequested: false,
    holdReadyPerf: 0
  },
  opponent: {
    lane: null,
    state: "idle",
    timer: null,
    holdAdvanceTimer: null,
    holdAdvancePerf: 0,
    holdEnded: false,
    releaseRequested: false,
    holdReadyPerf: 0
  },
  gf: {
    lane: null,
    state: "idle",
    timer: null,
    holdAdvanceTimer: null,
    holdAdvancePerf: 0,
    holdEnded: false,
    releaseRequested: false,
    holdReadyPerf: 0
  }
};

const characterDisplayState = {
  player: { anim: "idle", loop: true, freeze: false },
  opponent: { anim: "idle", loop: true, freeze: false },
  gf: { anim: "idle", loop: true, freeze: false }
};

const characterSlotState = {
  player: {
    name: "",
    preset: null
  },
  opponent: {
    name: "",
    preset: null
  },
  gf: {
    name: "",
    preset: null
  }
};

const characterPositionOverrides = {
  player: { x: null, y: null },
  opponent: { x: null, y: null },
  gf: { x: null, y: null }
};

const characterSprites = {
  player: null,
  opponent: null,
  gf: null
};
const characterSpritePools = {
  player: new Map(),
  opponent: new Map(),
  gf: new Map()
};

const characterAtlasPromises = {};
const characterMetaPromises = {};
const characterImagePromises = {};
const characterConfigRuntimeCache = new Map();
const characterConfigRuntimeBuildPromises = {};
const characterRuntimePrewarmPromises = {};
const characterRuntimePrewarmProbeByKey = new Map();
const characterRuntimePrewarmedKeys = new Set();
let characterRuntimePrewarmHostEl = null;
let characterPresetSwitchPrewarmPromise = null;
let characterPresetSwitchPrewarmed = false;
const characterLoadTokenBySide = {
  player: 0,
  opponent: 0,
  gf: 0
};
const characterPresetLoadQueueState = {
  player: { running: false, pendingPreset: "" },
  opponent: { running: false, pendingPreset: "" },
  gf: { running: false, pendingPreset: "" }
};
const characterPositionTransitionRestoreToken = {
  player: 0,
  opponent: 0,
  gf: 0
};
const characterPresetBySide = {
  player: "shadow",
  opponent: "shadow",
  gf: "bgthing"
};
const characterPendingPlayAnimationBySide = {
  player: "",
  opponent: "",
  gf: ""
};
let characterRenderRafId = 0;
let activeCharacterSide = null;
const CHARACTER_CHART_PATH = "data/akage/akage-chart.json";
let characterChangeEvents = [];
let characterChangeEventsReady = false;
let characterChangeEventIndex = 0;
let characterChangeLastSongMs = 0;
let characterFloatEnabled = false;
let characterChartBatchApplying = false;
let characterRefreshDeferred = false;
let characterAssetsReadyPromise = null;
let characterChangeEventsLoadPromise = null;
const sceneCameraFollow = { x: 0, y: 0 };
const SCENE_CAMERA_MOVE_MS = 1000;
// Fast at start, then decelerates (negative acceleration feel).
const SCENE_CAMERA_EASING = "cubic-bezier(0.16, 1, 0.3, 1)";
const STAGE_BACKGROUND_BASE_PATH = "assets/images/bg/";
const STAGE_BACKGROUND_STAGE_TEST_NAME = "otherbg";
const STAGE_BACKGROUND_COLORBG_NAME = "tetobg";
const STAGE_BACKGROUND_CENTER_IMAGE_NAME = "akagetransparent";
let stageBackgroundBaseName = "";
let stageBackgroundColorOverride = false;
let stageBackgroundActiveName = "";
let stageBackgroundCenterOverlayEl = null;
const stageBackgroundImagePromises = {};
const sceneCameraShakeState = {
  active: false,
  startSongMs: 0,
  endSongMs: 0,
  startPerf: 0,
  endPerf: 0,
  durationMs: 0,
  intensityPx: 0,
  x: 0,
  y: 0
};

const MEME_APPEAR_CONFIG = {
  imagePath: "assets/images/meme.png",
  startX: -400,
  targetX: -450,
  y: 250,
  scale: 0.28,
  durationMs: 600,
  easing: "cubic-bezier(0.22, 1, 0.36, 1)"
};
let memeAppearSpriteEl = null;
const WHITE_SCREEN_DEFAULT_SPEED_SEC = 0.5;
let whiteScreenOverlayEl = null;
let whiteScreenAnimToken = 0;
let whiteScreenAnimRafId = 0;
const SHOW_IMAGE_BASE_PATH = "assets/images/";
const SHOW_IMAGE_SCALE = 1.05;
const SHOW_IMAGE_Z_INDEX = 2;
let showImageOverlayEl = null;
const showImageImagePromises = {};
const SHOW_IMAGE_FHUD_BASE_PATH = "assets/images/";
let showImageFhudOverlayEl = null;
const showImageFhudImagePromises = {};
const JUMP_IMAGE_BASE_PATH = "assets/images/";
const JUMP_IMAGE_Z_INDEX = 9996;
const JUMP_IMAGE_JUMP_MS = 200;
const JUMP_IMAGE_FALL_DELAY_MS = 250;
const JUMP_IMAGE_FALL_MS = 180;
const JUMP_IMAGE_REMOVE_DELAY_MS = 250;
const JUMP_IMAGE_JUMP_Y_OFFSET = 340;
const jumpImageState = {
  imagePromises: {},
  spritesByPath: new Map()
};
const MIKU_GHOST_XML_PATH = "assets/images/Miku Ghost.xml";
const MIKU_GHOST_FRAME_MS = 1000 / 24;
const MIKU_GHOST_EXTRA_SCALE = 0.69;
const MIKU_GHOST_X_PX = 231;
const mikuGhostState = {
  enabled: false,
  visible: false,
  runtime: null,
  loadPromise: null,
  rootEl: null,
  frameEl: null,
  frameIndex: 0,
  lastFrameTime: 0,
  lockedTop: "",
  lockedMarginTop: "0px"
};
const GHOST_ECHO_CLONE_COUNT = 3;
const GHOST_ECHO_DAD_RETURN_MS = 200;
const GHOST_ECHO_DAD_RETURN_EASING = "cubic-bezier(0.16, 1, 0.3, 1)";
const ghostEchoState = {
  offsetsX: [0, 0, 0],
  alphas: [0, 0, 0],
  visible: [false, false, false],
  tweenRafId: [0, 0, 0],
  tweenToken: [0, 0, 0],
  noGhostCount: 0,
  baseDadX: null,
  dadReturnUntilPerf: 0,
  dadReturnEasing: SCENE_CAMERA_EASING
};
const ghostEchoSprites = [null, null, null];

function toInt(value, fallback = 0) {
  const n = parseInt(value || "0", 10);
  return Number.isFinite(n) ? n : fallback;
}

function parseScreenShakeSpec(rawValue) {
  const raw = String(rawValue ?? "").trim();
  if (!raw) {
    return { durationSeconds: 0, intensity: 0 };
  }

  const parts = raw.split(",");
  const firstRaw = Number(parts[0]);
  const secondRaw = Number(parts[1]);
  const durationSeconds = Number.isFinite(firstRaw) ? Math.max(0, firstRaw) : 0;
  const intensity = Number.isFinite(secondRaw) ? Math.max(0, secondRaw) : 0;
  return { durationSeconds, intensity };
}

function resolveRelativeAssetUrl(basePath, relativePath) {
  try {
    return new URL(relativePath, new URL(basePath, window.location.href)).href;
  } catch (err) {
    const normalizedBase = String(basePath || "").replace(/\\/g, "/");
    const slash = normalizedBase.lastIndexOf("/");
    const dir = slash >= 0 ? normalizedBase.slice(0, slash + 1) : "";
    return `${dir}${relativePath}`;
  }
}

function resolveStageBackgroundPath(imageName) {
  const raw = String(imageName || "").trim();
  if (!raw) return "";

  if (/^(https?:|data:|blob:)/i.test(raw)) {
    return raw;
  }

  let path = raw.replace(/\\/g, "/").replace(/^\/+/, "");
  if (!/\.[a-z0-9]+$/i.test(path)) {
    path += ".png";
  }

  if (path.startsWith("assets/")) return path;
  if (path.startsWith("images/")) return `assets/${path}`;
  if (path.startsWith("bg/")) return `assets/images/${path}`;
  return `${STAGE_BACKGROUND_BASE_PATH}${path}`;
}

function preloadStageBackground(imagePath) {
  if (!imagePath) return Promise.resolve(null);
  if (stageBackgroundImagePromises[imagePath]) {
    return stageBackgroundImagePromises[imagePath];
  }

  stageBackgroundImagePromises[imagePath] = new Promise((resolve) => {
    let settled = false;
    const finish = (value) => {
      if (settled) return;
      settled = true;
      resolve(value);
    };

    const img = new Image();
    img.onload = () => finish(img);
    img.onerror = () => {
      console.warn("stage background load failed:", imagePath);
      finish(null);
    };
    img.src = imagePath;
    if (typeof img.decode === "function") {
      img.decode()
        .then(() => finish(img))
        .catch(() => {});
    }
  });

  return stageBackgroundImagePromises[imagePath];
}

function shouldShowStageBackgroundCenterOverlay(normalizedBackgroundName) {
  const name = normalizeName(normalizedBackgroundName);
  return (
    name === normalizeName(STAGE_BACKGROUND_STAGE_TEST_NAME) ||
    name === normalizeName(STAGE_BACKGROUND_COLORBG_NAME)
  );
}

function ensureStageBackgroundCenterOverlay() {
  if (stageBackgroundCenterOverlayEl && stageBackgroundCenterOverlayEl.isConnected) {
    return stageBackgroundCenterOverlayEl;
  }

  const layerEl = ensureSceneCameraLayer();
  if (!layerEl) return null;

  let el = document.getElementById("stage-bg-center-overlay");
  const imagePath = resolveStageBackgroundPath(STAGE_BACKGROUND_CENTER_IMAGE_NAME);
  if (!el) {
    el = document.createElement("img");
    el.id = "stage-bg-center-overlay";
    el.alt = "";
    el.draggable = false;
    el.style.position = "absolute";
    el.style.left = "50%";
    el.style.top = "50%";
    el.style.transform = "translate(-50%, -50%)";
    el.style.pointerEvents = "none";
    el.style.zIndex = "-1";
    el.style.display = "none";
    el.style.maxWidth = "none";
    el.style.maxHeight = "none";
    if (imagePath) {
      el.src = imagePath;
    }
    layerEl.insertBefore(el, layerEl.firstChild || null);
  } else {
    if (imagePath && el.getAttribute("src") !== imagePath) {
      el.setAttribute("src", imagePath);
    }
    if (el.parentElement !== layerEl) {
      layerEl.insertBefore(el, layerEl.firstChild || null);
    }
  }

  stageBackgroundCenterOverlayEl = el;
  return stageBackgroundCenterOverlayEl;
}

function setStageBackgroundCenterOverlayVisible(visible) {
  const shouldShow = Boolean(visible);
  if (!shouldShow) {
    const el = stageBackgroundCenterOverlayEl || document.getElementById("stage-bg-center-overlay");
    if (!el) return;
    el.style.display = "none";
    stageBackgroundCenterOverlayEl = el;
    return;
  }

  const el = ensureStageBackgroundCenterOverlay();
  if (!el) return;
  el.style.display = "block";
}

function syncHudThemeForStageBackground(imageName) {
  if (typeof window.setHudThemeByBackground !== "function") return;
  const normalizedName = normalizeName(imageName);
  if (normalizedName === normalizeName(STAGE_BACKGROUND_STAGE_TEST_NAME)) {
    window.setHudThemeByBackground("miku");
    return;
  }
  if (normalizedName === "blanco") {
    window.setHudThemeByBackground("teto");
    return;
  }
  if (normalizedName === normalizeName(STAGE_BACKGROUND_COLORBG_NAME)) {
    window.setHudThemeByBackground("teto");
    return;
  }
  window.setHudThemeByBackground("");
}

function applyStageBackgroundImage(imageName) {
  const gameEl = document.getElementById("game");
  if (!gameEl) return;

  const normalizedName = normalizeName(imageName);
  if (!normalizedName || normalizedName === "blanco") {
    stageBackgroundActiveName = normalizedName === "blanco" ? "blanco" : "";
    gameEl.style.backgroundImage = "";
    gameEl.style.backgroundColor = "#ffffff";
    gameEl.style.backgroundRepeat = "no-repeat";
    gameEl.style.backgroundSize = "cover";
    setStageBackgroundCenterOverlayVisible(false);
    syncHudThemeForStageBackground(normalizedName === "blanco" ? "blanco" : "");
    return;
  }

  const path = resolveStageBackgroundPath(imageName);
  if (!path) return;
  preloadStageBackground(path);

  stageBackgroundActiveName = normalizedName;
  gameEl.style.backgroundImage = `url('${path}')`;
  gameEl.style.backgroundColor = "#ffffff";
  gameEl.style.backgroundRepeat = "no-repeat";
  gameEl.style.backgroundSize = "cover";
  setStageBackgroundCenterOverlayVisible(
    shouldShowStageBackgroundCenterOverlay(normalizedName)
  );
  syncHudThemeForStageBackground(normalizedName);
}

function updateStageBackgroundFromState() {
  const nextName = stageBackgroundColorOverride
    ? STAGE_BACKGROUND_COLORBG_NAME
    : stageBackgroundBaseName;
  const normalized = normalizeName(nextName);
  if (normalized === stageBackgroundActiveName) return;
  applyStageBackgroundImage(nextName);
}

function resetStageBackgroundState() {
  stageBackgroundBaseName = "";
  stageBackgroundColorOverride = false;
  stageBackgroundActiveName = "";
  applyStageBackgroundImage("");
}

function applyStageTestBackgroundEvent(evt) {
  const rawMode = normalizeName(evt?.mode);
  const nextBaseName =
    rawMode
      ? String(evt?.mode || "").trim()
      : STAGE_BACKGROUND_STAGE_TEST_NAME;
  if (rawMode === "blanco") {
    stageBackgroundColorOverride = false;
  }
  stageBackgroundBaseName = nextBaseName;
  updateStageBackgroundFromState();
}

function applyColorBackgroundEvent(evt) {
  stageBackgroundColorOverride = Boolean(evt?.enabled);
  updateStageBackgroundFromState();
}

function preloadStageBackgroundFromEvents(events = []) {
  if (!Array.isArray(events) || events.length <= 0) return;

  let hasStageTestEvent = false;
  let hasColorbgEvent = false;

  events.forEach((evt) => {
    if (!evt || !evt.type) return;
    if (evt.type === "stage_test") {
      hasStageTestEvent = true;
      const mode = normalizeName(evt.mode);
      if (mode && mode !== "blanco") {
        const path = resolveStageBackgroundPath(String(evt.mode || "").trim());
        if (path) preloadStageBackground(path);
      }
      return;
    }
    if (evt.type === "colorbg") {
      hasColorbgEvent = true;
    }
  });

  if (hasStageTestEvent) {
    const path = resolveStageBackgroundPath(STAGE_BACKGROUND_STAGE_TEST_NAME);
    if (path) preloadStageBackground(path);
  }
  if (hasColorbgEvent) {
    const path = resolveStageBackgroundPath(STAGE_BACKGROUND_COLORBG_NAME);
    if (path) preloadStageBackground(path);
  }
  if (hasStageTestEvent || hasColorbgEvent) {
    const centerPath = resolveStageBackgroundPath(STAGE_BACKGROUND_CENTER_IMAGE_NAME);
    if (centerPath) preloadStageBackground(centerPath);
  }
}

function preloadCharacterImage(src) {
  if (!src) return Promise.resolve(null);
  if (characterImagePromises[src]) return characterImagePromises[src];

  characterImagePromises[src] = new Promise((resolve) => {
    let done = false;
    const finish = (imgOrNull) => {
      if (done) return;
      done = true;
      resolve(imgOrNull);
    };

    const img = new Image();
    img.onload = () => finish(img);
    img.onerror = () => {
      console.warn("character image load failed:", src);
      finish(null);
    };
    img.src = src;

    if (typeof img.decode === "function") {
      img.decode()
        .then(() => finish(img))
        .catch(() => {});
    }
  });

  return characterImagePromises[src];
}

function getSiblingPngNameFromXmlPath(xmlPath) {
  const normalized = String(xmlPath || "").replace(/\\/g, "/");
  if (!normalized) return "";
  const name = normalized.split("/").pop() || "";
  if (!name) return "";
  return name.replace(/\.xml$/i, ".png");
}

function buildCharacterAtlasImageCandidates(xmlPath, atlasImagePath) {
  const candidates = [];
  const pushUnique = (url) => {
    if (!url) return;
    if (!candidates.includes(url)) candidates.push(url);
  };

  const siblingPng = getSiblingPngNameFromXmlPath(xmlPath);
  if (siblingPng) {
    pushUnique(resolveRelativeAssetUrl(xmlPath, siblingPng));
  }

  if (atlasImagePath) {
    pushUnique(resolveRelativeAssetUrl(xmlPath, atlasImagePath));
  }

  return candidates;
}

async function resolveCharacterAtlasImageUrl(xmlPath, atlasImagePath) {
  const candidates = buildCharacterAtlasImageCandidates(xmlPath, atlasImagePath);
  for (const candidate of candidates) {
    const loaded = await preloadCharacterImage(candidate);
    if (loaded) return candidate;
  }

  if (candidates.length > 0) {
    console.warn("character atlas image not found:", xmlPath, candidates);
  }
  return "";
}

function parseCharacterAtlas(xmlText) {
  const doc = new DOMParser().parseFromString(xmlText, "text/xml");
  const atlasEl = doc.querySelector("TextureAtlas");
  if (!atlasEl) return null;

  const imagePath = atlasEl.getAttribute("imagePath") || "";
  const groups = {};

  doc.querySelectorAll("SubTexture").forEach((st) => {
    const name = st.getAttribute("name") || "";
    const indexMatch = name.match(/(\d+)$/);
    const frameIndex = indexMatch ? toInt(indexMatch[1], 0) : 0;
    const baseName = name.replace(/\d+$/, "").trim().toLowerCase();
    if (!baseName) return;

    const frame = {
      x: toInt(st.getAttribute("x"), 0),
      y: toInt(st.getAttribute("y"), 0),
      w: toInt(st.getAttribute("width"), 0),
      h: toInt(st.getAttribute("height"), 0),
      frameX: toInt(st.getAttribute("frameX"), 0),
      frameY: toInt(st.getAttribute("frameY"), 0),
      frameWidth: toInt(st.getAttribute("frameWidth"), toInt(st.getAttribute("width"), 0)),
      frameHeight: toInt(st.getAttribute("frameHeight"), toInt(st.getAttribute("height"), 0)),
      frameIndex
    };

    if (!groups[baseName]) groups[baseName] = [];
    groups[baseName].push(frame);
  });

  Object.keys(groups).forEach((key) => {
    groups[key].sort((a, b) => a.frameIndex - b.frameIndex);
  });

  return {
    imagePath,
    groups
  };
}

function pickAnimationFrames(groups, aliases) {
  for (const alias of aliases || []) {
    const key = alias.toLowerCase();
    if (groups[key] && groups[key].length > 0) return groups[key];
  }
  return null;
}

function buildCharacterAnimations(groups, aliasMap) {
  const animations = {};
  Object.entries(aliasMap || {}).forEach(([animName, aliases]) => {
    const frames = pickAnimationFrames(groups, aliases);
    if (frames && frames.length > 0) {
      animations[animName] = frames;
    }
  });
  return animations;
}

function normalizeName(value) {
  return String(value || "").trim().toLowerCase();
}

function normalizeLaneName(value) {
  const v = String(value || "").trim().toLowerCase();
  if (v === "left" || v === "down" || v === "up" || v === "right") return v;
  return "";
}

function mapPsychAnimKeyToInternal(animKey) {
  const raw = normalizeName(animKey);
  if (!raw) return "";

  const compact = raw.replace(/[^a-z]/g, "");
  if (compact === "idle") return "idle";

  if (compact.startsWith("sing") && compact.endsWith("miss")) {
    const laneRaw = compact.slice(4, -4);
    const lane = normalizeLaneName(laneRaw);
    return lane ? `miss-${lane}` : "";
  }

  if (compact.startsWith("sing")) {
    const laneRaw = compact.slice(4);
    const lane = normalizeLaneName(laneRaw);
    return lane ? `sing-${lane}` : "";
  }

  // Keep custom animation keys (e.g. "aishite2", "hodo mi") as-is.
  return raw;
}

function parseCharacterMetaJson(rawJson) {
  if (!rawJson || typeof rawJson !== "object") return null;

  const scaleRaw = Number(rawJson.scale);
  const scale =
    Number.isFinite(scaleRaw) && scaleRaw > 0
      ? scaleRaw
      : 1;
  const noAntialiasing = Boolean(rawJson.no_antialiasing);
  const offsetsByAnim = {};

  const list = Array.isArray(rawJson.animations) ? rawJson.animations : [];
  list.forEach((entry) => {
    if (!entry || typeof entry !== "object") return;
    const internalAnim = mapPsychAnimKeyToInternal(entry.anim);
    if (!internalAnim) return;
    const offsets = Array.isArray(entry.offsets) ? entry.offsets : [];
    const ox = Number(offsets[0]);
    const oy = Number(offsets[1]);
    offsetsByAnim[internalAnim] = {
      x: Number.isFinite(ox) ? ox : 0,
      y: Number.isFinite(oy) ? oy : 0
    };
  });

  return {
    scale,
    noAntialiasing,
    offsetsByAnim
  };
}

function loadCharacterMeta(jsonPath) {
  if (!jsonPath) return Promise.resolve(null);
  if (characterMetaPromises[jsonPath]) return characterMetaPromises[jsonPath];

  characterMetaPromises[jsonPath] = fetch(jsonPath)
    .then((res) => res.json())
    .then((json) => parseCharacterMetaJson(json))
    .catch((err) => {
      console.warn("character json load failed:", jsonPath, err);
      return null;
    });

  return characterMetaPromises[jsonPath];
}

function getDefaultCharacterMeta() {
  return {
    scale: 1,
    noAntialiasing: false,
    offsetsByAnim: {}
  };
}

function cloneCharacterMeta(meta) {
  const source = meta && typeof meta === "object" ? meta : getDefaultCharacterMeta();
  return {
    scale:
      Number.isFinite(Number(source.scale)) && Number(source.scale) > 0
        ? Number(source.scale)
        : 1,
    noAntialiasing: Boolean(source.noAntialiasing),
    offsetsByAnim: source.offsetsByAnim && typeof source.offsetsByAnim === "object"
      ? source.offsetsByAnim
      : {}
  };
}

function getCharacterConfigCacheKey(config) {
  if (!config || typeof config !== "object") return "";
  let aliasPart = "";
  try {
    aliasPart = JSON.stringify(config.animationAliases || {});
  } catch (err) {
    aliasPart = "";
  }

  return [
    String(config.atlasXmlPath || ""),
    String(config.characterJsonPath || ""),
    config.applyCharacterJsonMeta ? "1" : "0",
    config.applyCharacterJsonScale ? "1" : "0",
    config.applyCharacterJsonAnimOffsets ? "1" : "0",
    aliasPart
  ].join("|");
}

async function buildCharacterConfigRuntimeCache(config) {
  const cacheKey = getCharacterConfigCacheKey(config);
  if (!cacheKey) return null;
  if (characterConfigRuntimeCache.has(cacheKey)) {
    return characterConfigRuntimeCache.get(cacheKey) || null;
  }
  if (characterConfigRuntimeBuildPromises[cacheKey]) {
    return characterConfigRuntimeBuildPromises[cacheKey];
  }

  characterConfigRuntimeBuildPromises[cacheKey] = (async () => {
    const useJsonMeta = Boolean(config?.applyCharacterJsonMeta);
    const atlasPromise = loadCharacterAtlas(config?.atlasXmlPath);
    const metaPromise =
      useJsonMeta && config?.characterJsonPath
        ? loadCharacterMeta(config.characterJsonPath)
        : Promise.resolve(null);
    const [atlas, metaRaw] = await Promise.all([atlasPromise, metaPromise]);
    if (!atlas) return null;

    if (atlas.imageReadyPromise) {
      await atlas.imageReadyPromise;
    }

    const animations = buildCharacterAnimations(atlas.groups, config.animationAliases);
    if (!animations.idle) {
      const fallbackFrames = Object.values(atlas.groups).find(
        (frames) => frames && frames.length > 0
      );
      if (fallbackFrames) animations.idle = fallbackFrames;
    }
    if (!animations.idle) return null;

    const runtime = {
      imageUrl: atlas.imageUrl || "",
      animations,
      meta: cloneCharacterMeta(metaRaw)
    };
    characterConfigRuntimeCache.set(cacheKey, runtime);
    return runtime;
  })()
    .catch((err) => {
      console.warn("character runtime cache build failed:", cacheKey, err);
      return null;
    })
    .finally(() => {
      delete characterConfigRuntimeBuildPromises[cacheKey];
    });

  return characterConfigRuntimeBuildPromises[cacheKey];
}

function preloadCharacterRuntimeCaches() {
  const configs = [];
  Object.values(CHARACTER_PRESETS).forEach((group) => {
    Object.values(group || {}).forEach((config) => {
      if (config) configs.push(config);
    });
  });
  Object.values(GF_CHARACTER_PRESETS).forEach((config) => {
    if (config) configs.push(config);
  });

  return Promise.allSettled(
    configs.map((config) => buildCharacterConfigRuntimeCache(config))
  );
}

function ensureCharacterRuntimePrewarmHost() {
  if (characterRuntimePrewarmHostEl && characterRuntimePrewarmHostEl.isConnected) {
    return characterRuntimePrewarmHostEl;
  }

  let host = document.getElementById("character-runtime-prewarm");
  if (!host) {
    host = document.createElement("div");
    host.id = "character-runtime-prewarm";
    host.style.position = "fixed";
    host.style.left = "-200vw";
    host.style.top = "-200vh";
    host.style.width = "1px";
    host.style.height = "1px";
    host.style.opacity = "0";
    host.style.pointerEvents = "none";
    host.style.overflow = "hidden";
    host.style.zIndex = "-9999";
    document.body.appendChild(host);
  }

  characterRuntimePrewarmHostEl = host;
  return characterRuntimePrewarmHostEl;
}

function getCharacterRuntimePrewarmKey(side, preset) {
  return `${normalizeName(side)}:${normalizeName(preset)}`;
}

function getFirstAnimationFrame(runtime) {
  if (!runtime || !runtime.animations || typeof runtime.animations !== "object") return null;
  const idleFrames = runtime.animations.idle;
  if (Array.isArray(idleFrames) && idleFrames.length > 0) {
    return idleFrames[0];
  }

  const firstAnimFrames = Object.values(runtime.animations).find(
    (frames) => Array.isArray(frames) && frames.length > 0
  );
  return Array.isArray(firstAnimFrames) && firstAnimFrames.length > 0
    ? firstAnimFrames[0]
    : null;
}

function getRuntimePrewarmFrames(runtime, maxFrames = 12) {
  if (!runtime || !runtime.animations || typeof runtime.animations !== "object") return [];

  const frames = [];
  const seen = new Set();
  Object.values(runtime.animations).forEach((animFrames) => {
    if (!Array.isArray(animFrames) || animFrames.length <= 0) return;
    const frame = animFrames[0];
    if (!frame) return;
    const key = [
      Number(frame.x) || 0,
      Number(frame.y) || 0,
      Number(frame.w) || 0,
      Number(frame.h) || 0,
      Number(frame.frameWidth) || 0,
      Number(frame.frameHeight) || 0
    ].join("|");
    if (seen.has(key)) return;
    seen.add(key);
    frames.push(frame);
  });

  if (frames.length <= 0) {
    const fallback = getFirstAnimationFrame(runtime);
    if (fallback) frames.push(fallback);
  }

  return frames.slice(0, Math.max(1, Number(maxFrames) || 1));
}

async function prewarmCharacterPresetRuntime(side, preset) {
  const normalizedSide = normalizeName(side);
  const normalizedPreset = normalizeName(preset);
  if (!normalizedSide || !normalizedPreset) return false;

  const key = getCharacterRuntimePrewarmKey(normalizedSide, normalizedPreset);
  if (characterRuntimePrewarmedKeys.has(key)) return true;
  if (characterRuntimePrewarmPromises[key]) return characterRuntimePrewarmPromises[key];

  characterRuntimePrewarmPromises[key] = (async () => {
    const config = getPresetConfig(normalizedSide, normalizedPreset);
    if (!config) return false;

    const runtime = await buildCharacterConfigRuntimeCache(config);
    if (!runtime || !runtime.imageUrl) return false;

    const frames = getRuntimePrewarmFrames(runtime, 12);
    if (frames.length <= 0) return false;

    const host = ensureCharacterRuntimePrewarmHost();
    if (!host) return false;

    let probeEl = characterRuntimePrewarmProbeByKey.get(key);
    if (!probeEl || !probeEl.isConnected) {
      probeEl = document.createElement("div");
      probeEl.dataset.key = key;
      probeEl.style.position = "absolute";
      probeEl.style.left = "0";
      probeEl.style.top = "0";
      probeEl.style.pointerEvents = "none";
      probeEl.style.backgroundRepeat = "no-repeat";
      probeEl.style.backgroundSize = "auto";
      host.appendChild(probeEl);
      characterRuntimePrewarmProbeByKey.set(key, probeEl);
    }

    probeEl.style.backgroundImage = `url('${runtime.imageUrl}')`;

    for (const frame of frames) {
      const frameWidth = Number.isFinite(Number(frame.frameWidth)) && Number(frame.frameWidth) > 0
        ? Number(frame.frameWidth)
        : Math.max(1, Number(frame.w) || 1);
      const frameHeight = Number.isFinite(Number(frame.frameHeight)) && Number(frame.frameHeight) > 0
        ? Number(frame.frameHeight)
        : Math.max(1, Number(frame.h) || 1);
      probeEl.style.width = `${frameWidth}px`;
      probeEl.style.height = `${frameHeight}px`;
      probeEl.style.backgroundPosition = `${-Number(frame.x || 0)}px ${-Number(frame.y || 0)}px`;
      probeEl.getBoundingClientRect();
      await new Promise((resolve) => requestAnimationFrame(() => resolve()));
    }

    characterRuntimePrewarmedKeys.add(key);
    return true;
  })()
    .catch((err) => {
      console.warn("character runtime prewarm failed:", key, err);
      return false;
    })
    .finally(() => {
      delete characterRuntimePrewarmPromises[key];
    });

  return characterRuntimePrewarmPromises[key];
}

async function prewarmCharacterPresetsFromEvents(events = []) {
  if (!Array.isArray(events) || events.length <= 0) return;

  const tasks = [];
  const seen = new Set();
  events.forEach((evt) => {
    if (!evt || evt.type !== "change_character") return;
    const side = sideFromChartSlot(normalizeName(evt.slot));
    if (!side) return;
    const preset = resolvePresetFromCharacterName(side, evt.character);
    if (!preset) return;
    const key = getCharacterRuntimePrewarmKey(side, preset);
    if (seen.has(key)) return;
    seen.add(key);
    tasks.push(prewarmCharacterPresetRuntime(side, preset));
  });

  if (tasks.length <= 0) return;
  await Promise.allSettled(tasks);
}

function collectCharacterChangePresetsForSide(side, events = []) {
  if (!Array.isArray(events) || events.length <= 0) return [];
  const normalizedSide = normalizeName(side);
  if (!normalizedSide) return [];

  const seen = new Set();
  const ordered = [];
  events.forEach((evt) => {
    if (!evt || evt.type !== "change_character") return;
    const evtSide = sideFromChartSlot(normalizeName(evt.slot));
    if (evtSide !== normalizedSide) return;
    const preset = resolvePresetFromCharacterName(evtSide, evt.character);
    if (!preset) return;
    const key = normalizeName(preset);
    if (!key || seen.has(key)) return;
    seen.add(key);
    ordered.push(preset);
  });

  return ordered;
}

async function waitForCharacterSpriteReady(side, timeoutMs = 8000) {
  const deadline = performance.now() + Math.max(0, Number(timeoutMs) || 0);
  while (performance.now() < deadline) {
    const sprite = characterSprites[side];
    if (sprite && sprite.ready) return sprite;
    await new Promise((resolve) => setTimeout(resolve, 16));
  }
  return null;
}

async function prewarmCharacterSpritePaint(sprite) {
  if (!sprite || !sprite.rootEl) return;
  const rootEl = sprite.rootEl;
  const prevDisplay = rootEl.style.display;
  const prevOpacity = rootEl.style.opacity;
  const prevPointerEvents = rootEl.style.pointerEvents;
  const prevTransition = rootEl.style.transition;

  rootEl.style.display = "";
  rootEl.style.opacity = "0";
  rootEl.style.pointerEvents = "none";
  rootEl.style.transition = "none";
  rootEl.getBoundingClientRect();

  await new Promise((resolve) => requestAnimationFrame(() => resolve()));
  await new Promise((resolve) => requestAnimationFrame(() => resolve()));

  rootEl.style.display = prevDisplay;
  rootEl.style.opacity = prevOpacity;
  rootEl.style.pointerEvents = prevPointerEvents;
  rootEl.style.transition = prevTransition;
}

function getPooledCharacterSprite(side, preset) {
  const pool = getCharacterSpritePool(side);
  if (!pool) return null;
  const key = normalizeCharacterPresetKey(preset);
  if (!key) return null;
  const sprite = pool.get(key);
  return sprite || null;
}

function cacheCharacterSprite(side, preset, sprite) {
  const pool = getCharacterSpritePool(side);
  if (!pool || !sprite) return;
  const key = normalizeCharacterPresetKey(preset);
  if (!key) return;
  pool.set(key, sprite);
}

async function ensurePooledCharacterSprite(side, preset, options = {}) {
  const key = normalizeCharacterPresetKey(preset);
  if (!key) return null;
  const config = getPresetConfig(side, key);
  if (!config) return null;

  const hostEl = options.hostEl || ensureCharacterLayer();
  if (!hostEl) return null;

  const pooled = getPooledCharacterSprite(side, key);
  if (pooled && pooled.rootEl) {
    if (pooled.rootEl.parentElement !== hostEl) {
      hostEl.appendChild(pooled.rootEl);
    }
    setCharacterAnchorModeForSprite(side, key, pooled);
    if (options.prewarm) {
      await prewarmCharacterSpritePaint(pooled);
    }
    return pooled;
  }

  const sprite = new CharacterSprite(side, config, hostEl);
  sprite.rootEl.style.display = "none";
  const loaded = await sprite.load(key);
  if (!loaded) {
    if (sprite.rootEl && sprite.rootEl.isConnected) {
      sprite.rootEl.remove();
    }
    return null;
  }

  setCharacterAnchorModeForSprite(side, key, sprite);
  cacheCharacterSprite(side, key, sprite);
  if (options.prewarm) {
    await prewarmCharacterSpritePaint(sprite);
    sprite.rootEl.style.display = "none";
  }
  return sprite;
}

function activatePooledCharacterSprite(side, preset, sprite) {
  if (!sprite || !sprite.rootEl) return false;
  const current = characterSprites[side];
  if (current && current !== sprite && current.rootEl) {
    current.rootEl.style.display = "none";
  }

  const hostEl = ensureCharacterLayer();
  if (hostEl && sprite.rootEl.parentElement !== hostEl) {
    hostEl.appendChild(sprite.rootEl);
  }

  characterSprites[side] = sprite;
  characterPresetBySide[side] = preset;
  setCharacterAnchorModeForSprite(side, preset, sprite);
  sprite.rootEl.style.display = "";
  return true;
}

function hideAllPooledCharacterSprites(side) {
  const pool = getCharacterSpritePool(side);
  if (!pool) return;
  pool.forEach((sprite) => {
    if (!sprite || !sprite.rootEl) return;
    sprite.rootEl.style.display = "none";
  });
}

async function prewarmCharacterPresetSwitchesForGameplay() {
  if (characterPresetSwitchPrewarmed) return true;
  if (characterPresetSwitchPrewarmPromise) return characterPresetSwitchPrewarmPromise;

  characterPresetSwitchPrewarmPromise = (async () => {
    await prepareCharacterAssetsForGameplay();
    await loadCharacterChangeEvents();
    await prewarmCharacterPresetsFromEvents(characterChangeEvents);

    // Warm real preset swaps on the live opponent sprite before gameplay starts.
    // This avoids first-use hitches when switching heavy Miku atlases mid-song.
    const side = "opponent";
    const sprite = await waitForCharacterSpriteReady(side, 12000);
    if (sprite && sprite.rootEl) {
      const presets = collectCharacterChangePresetsForSide(side, characterChangeEvents);
      const originalPreset = characterPresetBySide[side] || "shadow";
      const originalSlotPreset = characterSlotState[side]?.preset ?? null;
      const originalDisplayState = {
        ...(characterDisplayState[side] || { anim: "idle", loop: true, freeze: false })
      };

      cacheCharacterSprite(side, originalPreset, sprite);
      const orderedPresets = [];
      const seenPresets = new Set();
      const pushPreset = (value) => {
        const key = normalizeCharacterPresetKey(value);
        if (!key || seenPresets.has(key)) return;
        seenPresets.add(key);
        orderedPresets.push(key);
      };
      pushPreset(originalPreset);
      presets.forEach((preset) => pushPreset(preset));

      for (const preset of orderedPresets) {
        await ensurePooledCharacterSprite(side, preset, { prewarm: true });
      }

      const restorePreset = normalizeCharacterPresetKey(originalPreset) || "shadow";
      const restoreSprite =
        getPooledCharacterSprite(side, restorePreset) ||
        characterSprites[side] ||
        sprite;
      hideAllPooledCharacterSprites(side);
      activatePooledCharacterSprite(side, restorePreset, restoreSprite);
      characterSlotState[side].preset = originalSlotPreset;
      characterDisplayState[side] = originalDisplayState;
      updateCharacterAnchorMode(side);
      applyCharacterDisplayState(side, true);
      applyCharacterPositionOverride(side, { instant: true });
      refreshCharacterPresentation();
    }

    characterPresetSwitchPrewarmed = true;
    return true;
  })()
    .catch((err) => {
      console.warn("character preset switch prewarm failed:", err);
      return false;
    })
    .finally(() => {
      characterPresetSwitchPrewarmPromise = null;
    });

  return characterPresetSwitchPrewarmPromise;
}

function parseCharacterChartEvents(chartJson) {
  const srcEvents = Array.isArray(chartJson?.events) ? chartJson.events : [];
  const parsed = [];
  let order = 0;

  srcEvents.forEach((entry) => {
    if (!Array.isArray(entry) || entry.length < 2) return;
    const timeMs = Number(entry[0]);
    if (!Number.isFinite(timeMs)) return;

    const commands = Array.isArray(entry[1]) ? entry[1] : [];
    commands.forEach((cmd) => {
      order += 1;
      if (!Array.isArray(cmd) || cmd.length < 2) return;
      const commandName = normalizeName(cmd[0]);
      if (commandName === "change character") {
        if (cmd.length < 3) return;
        parsed.push({
          type: "change_character",
          timeMs,
          slot: normalizeName(cmd[1]),
          character: normalizeName(cmd[2]),
          order
        });
        return;
      }
      if (commandName === "play animation") {
        if (cmd.length < 3) return;
        const slot = normalizeName(cmd[2]);
        const side = sideFromChartSlot(slot);
        if (!side) return;
        parsed.push({
          type: "play_animation",
          timeMs,
          animation: normalizeName(cmd[1]),
          slot,
          order
        });
        return;
      }
      if (commandName === "float characters") {
        parsed.push({
          type: "float_characters",
          timeMs,
          enabled: normalizeName(cmd[1]) === "on",
          order
        });
        return;
      }
      if (commandName === "bounce characters") {
        parsed.push({
          type: "bounce_characters",
          timeMs,
          enabled: normalizeName(cmd[1]) === "on",
          order
        });
        return;
      }
      if (commandName === "meme appear") {
        parsed.push({
          type: "meme_appear",
          timeMs,
          enabled: normalizeName(cmd[1]) === "on",
          order
        });
        return;
      }
      if (commandName === "stage test") {
        parsed.push({
          type: "stage_test",
          timeMs,
          mode: String(cmd[1] || "").trim(),
          order
        });
        return;
      }
      if (commandName === "colorbg") {
        parsed.push({
          type: "colorbg",
          timeMs,
          enabled: normalizeName(cmd[1]) === "on",
          order
        });
        return;
      }
      if (commandName === "white screen") {
        const action = normalizeName(cmd[1]);
        if (action !== "on" && action !== "off") return;
        const speedRaw = Number(cmd[2]);
        const speedSeconds = Number.isFinite(speedRaw)
          ? Math.max(0, speedRaw)
          : WHITE_SCREEN_DEFAULT_SPEED_SEC;
        parsed.push({
          type: "white_screen",
          timeMs,
          enabled: action === "on",
          speedSeconds,
          order
        });
        return;
      }
      if (commandName === "show image") {
        const action = normalizeName(cmd[2] || "on");
        parsed.push({
          type: "show_image",
          timeMs,
          imageName: String(cmd[1] || "").trim(),
          enabled: action !== "off",
          order
        });
        return;
      }
      if (commandName === "show image fhud") {
        const action = normalizeName(cmd[2] || "on");
        parsed.push({
          type: "show_image_fhud",
          timeMs,
          imageName: String(cmd[1] || "").trim(),
          enabled: action !== "off",
          order
        });
        return;
      }
      if (commandName === "jump image") {
        parsed.push({
          type: "jump_image",
          timeMs,
          imageName: String(cmd[1] || "").trim(),
          order
        });
        return;
      }
      if (commandName === "show miku ghost") {
        const action = normalizeName(cmd[1] || "on");
        parsed.push({
          type: "show_miku_ghost",
          timeMs,
          enabled: action !== "off",
          order
        });
        return;
      }
      if (commandName === "ghost echo") {
        parsed.push({
          type: "ghost_echo",
          timeMs,
          action: normalizeName(cmd[1]),
          mode: normalizeName(cmd[2]),
          order
        });
        return;
      }
      if (commandName === "camera follow pos") {
        const xRaw = Number(cmd[1]);
        const yRaw = Number(cmd[2]);
        parsed.push({
          type: "camera_follow_pos",
          timeMs,
          x: Number.isFinite(xRaw) ? xRaw : 0,
          y: Number.isFinite(yRaw) ? yRaw : 0,
          order
        });
        return;
      }
      if (commandName === "screen shake") {
        const gameShake = parseScreenShakeSpec(cmd[1]);
        parsed.push({
          type: "screen_shake",
          timeMs,
          durationSeconds: gameShake.durationSeconds,
          intensity: gameShake.intensity,
          order
        });
        return;
      }
      if (commandName === "move characters") {
        parsed.push({
          type: "move_characters",
          timeMs,
          slot: normalizeName(cmd[1]),
          x: Number(cmd[2]),
          y: Number(cmd[3]),
          durationSeconds: Number.NaN,
          order
        });
        return;
      }
      if (commandName === "move dad") {
        parsed.push({
          type: "move_characters",
          timeMs,
          slot: "dad",
          x: Number(cmd[1]),
          y: Number.NaN,
          durationSeconds: Number(cmd[2]),
          order
        });
      }
    });
  });

  parsed.sort((a, b) => {
    if (a.timeMs !== b.timeMs) return a.timeMs - b.timeMs;
    return a.order - b.order;
  });

  return parsed;
}

function sideFromChartSlot(slot) {
  if (slot === "bf") return "player";
  if (slot === "dad") return "opponent";
  if (slot === "gf") return "gf";
  return null;
}

function resolvePresetFromCharacterName(side, characterName) {
  const name = normalizeName(characterName);
  if (!name || name === "nothing") return null;

  if (side === "player") {
    if (name.startsWith("bf shadow")) return "shadow";
    if (name.startsWith("bf estandar") || name.startsWith("bf estander")) return "estandar";
    if (name.startsWith("bfdraw") || name.startsWith("bf draw")) return "bfdraw";
    if (name.startsWith("bf animation")) return "bf_animation";
    if (name.startsWith("gfpico") || name.startsWith("gf pico")) return "gfpico";
    return null;
  }

  if (side === "opponent") {
    if (name.startsWith("teto shadow")) return "shadow";
    if (name.startsWith("teto estandar") || name.startsWith("teto estander")) return "estandar";
    if (name.startsWith("teto animation")) return "animation";
    if (name.startsWith("tetohappy") || name.startsWith("teto happy")) return "tetohappy";
    if (name.startsWith("teto chef")) return "chef";
    if (name.startsWith("teto house")) return "house";
    if (name.startsWith("teto medic")) return "medic";
    if (name.startsWith("teto classic")) return "classic";
    if (name.startsWith("aishite1") || name.startsWith("aishite 1")) return "aishite1";
    if (name.startsWith("mikuaishite2")) return "mikuaishite2";
    if (name.startsWith("mikuaishi3") || name.startsWith("mikuaishite3")) return "mikuaishi3";
    if (name.startsWith("miku motto")) return "miku_motto";
    if (name.startsWith("miku kuroshi") || name.startsWith("miku kuroushi")) return "miku_kuroshi";
    if (name.startsWith("miku hodo")) return "miku_hodo";
    if (name.startsWith("miku miiii")) return "miku_miiii";
    if (name === "miku" || name.startsWith("miku estandar")) return "miku";
    return null;
  }

  if (side === "gf") {
    if (name === "bgthing") return "bgthing";
    return null;
  }

  return null;
}

function getPresetConfig(side, preset) {
  if (side === "gf") {
    return GF_CHARACTER_PRESETS[preset] || null;
  }
  const group = CHARACTER_PRESETS[preset];
  if (!group) return null;
  return group[side] || null;
}

function isOpponentPresetInSplitLayout(preset) {
  const normalized = normalizeName(preset);
  if (!normalized) return false;
  return OPPONENT_SPLIT_LAYOUT_PRESETS.has(normalized);
}

function isOpponentTimelineOnlyPreset(preset) {
  const normalized = normalizeName(preset);
  if (!normalized) return false;
  return OPPONENT_TIMELINE_ONLY_PRESETS.has(normalized);
}

function isPlayerTimelineOnlyPreset(preset) {
  const normalized = normalizeName(preset);
  if (!normalized) return false;
  return PLAYER_TIMELINE_ONLY_PRESETS.has(normalized);
}

function getCharacterPresetScaleMultiplier(side, preset) {
  const normalizedPreset = normalizeName(preset);
  if (!normalizedPreset) return 1;

  const sideMap = CHARACTER_PRESET_SCALE_MULTIPLIERS[side];
  if (!sideMap) return 1;

  const raw = Number(sideMap[normalizedPreset]);
  if (!Number.isFinite(raw) || raw <= 0) return 1;
  return raw;
}

function getCharacterPresetAnimOffset(side, preset, animName) {
  const normalizedSide = normalizeName(side);
  const normalizedPreset = normalizeName(preset);
  if (normalizedSide !== "opponent" || normalizedPreset !== "miku") {
    return { x: 0, y: 0 };
  }

  const anim = normalizeName(animName);
  if (anim === "sing-down" || anim === "hold-down" || anim === "miss-down") {
    return { x: 0, y: MIKU_DOWN_EXTRA_OFFSET_Y };
  }

  return { x: 0, y: 0 };
}

function shouldUseBottomAnchorForPreset(side, preset) {
  // Only plain "miku" should switch frame anchor to center-bottom.
  return side === "opponent" && normalizeName(preset) === "miku";
}

function getCharacterSpritePool(side) {
  if (side === "player") return characterSpritePools.player;
  if (side === "opponent") return characterSpritePools.opponent;
  if (side === "gf") return characterSpritePools.gf;
  return null;
}

function normalizeCharacterPresetKey(preset) {
  return normalizeName(preset);
}

function setCharacterAnchorModeForSprite(side, preset, sprite) {
  if (!sprite || !sprite.rootEl) return;
  const useBottomAnchor = shouldUseBottomAnchorForPreset(side, preset);
  sprite.rootEl.classList.toggle("character--anchor-bottom", useBottomAnchor);
}

function updateCharacterAnchorMode(side) {
  const sprite = characterSprites[side];
  if (!sprite || !sprite.rootEl) return;
  const preset = characterPresetBySide[side] || "";
  setCharacterAnchorModeForSprite(side, preset, sprite);
}

function applyCharacterLayout(mode) {
  const body = document.body;
  if (!body) return;

  const resolvedMode = mode === "split" ? "split" : "center";
  body.classList.toggle("character-layout-center", resolvedMode === "center");
  body.classList.toggle("character-layout-split", resolvedMode === "split");
}

function requestCharacterPresentationRefresh() {
  if (characterChartBatchApplying) {
    characterRefreshDeferred = true;
    return;
  }
  refreshCharacterPresentation();
}

function setCharacterFloatEnabled(enabled) {
  characterFloatEnabled = Boolean(enabled);
  const body = document.body;
  if (!body) return;
  body.classList.toggle("character-float-on", characterFloatEnabled);
}

function getCharacterBeatMs() {
  if (typeof BEAT_MS !== "undefined") {
    const v = Number(BEAT_MS);
    if (Number.isFinite(v) && v > 0) return v;
  }
  return 60000 / 195;
}

function preloadMemeAppearImage() {
  const img = new Image();
  img.src = MEME_APPEAR_CONFIG.imagePath;
}

function resolveShowImagePath(imageName) {
  const raw = String(imageName || "").trim();
  if (!raw) return "";

  if (/^(https?:|data:|blob:)/i.test(raw)) {
    return raw;
  }

  let path = raw.replace(/\\/g, "/").replace(/^\/+/, "");
  if (!/\.[a-z0-9]+$/i.test(path)) {
    path += ".png";
  }

  if (path.startsWith("assets/")) return path;
  if (path.startsWith("images/")) return `assets/${path}`;
  return `${SHOW_IMAGE_BASE_PATH}${path}`;
}

function preloadShowImage(imagePath) {
  if (!imagePath) return Promise.resolve(null);
  if (showImageImagePromises[imagePath]) {
    return showImageImagePromises[imagePath];
  }

  showImageImagePromises[imagePath] = new Promise((resolve) => {
    let settled = false;
    const finish = (value) => {
      if (settled) return;
      settled = true;
      resolve(value);
    };

    const img = new Image();
    img.onload = () => finish(img);
    img.onerror = () => finish(null);
    img.src = imagePath;
    if (typeof img.decode === "function") {
      img.decode()
        .then(() => finish(img))
        .catch(() => {});
    }
  });

  return showImageImagePromises[imagePath];
}

function preloadShowImageFromEvents(events = []) {
  if (!Array.isArray(events) || events.length <= 0) return;
  events.forEach((evt) => {
    if (!evt || evt.type !== "show_image" || !evt.enabled) return;
    const path = resolveShowImagePath(evt.imageName);
    if (!path) return;
    preloadShowImage(path);
  });
}

function ensureShowImageOverlay() {
  if (showImageOverlayEl && showImageOverlayEl.isConnected) {
    return showImageOverlayEl;
  }

  const layerEl = ensureSceneCameraLayer();
  if (!layerEl) return null;

  let el = document.getElementById("show-image-overlay");
  if (!el) {
    el = document.createElement("img");
    el.id = "show-image-overlay";
    el.alt = "";
    el.draggable = false;
    el.style.position = "absolute";
    el.style.left = "50%";
    el.style.top = "50%";
    el.style.pointerEvents = "none";
    el.style.zIndex = `${SHOW_IMAGE_Z_INDEX}`;
    el.style.display = "none";
    el.style.maxWidth = "none";
    el.style.maxHeight = "none";
    el.style.transformOrigin = "center center";
    layerEl.appendChild(el);
  } else if (el.parentElement !== layerEl) {
    layerEl.appendChild(el);
  }

  showImageOverlayEl = el;
  updateShowImageOverlayTransform();
  return showImageOverlayEl;
}

function updateShowImageOverlayTransform() {
  const el = showImageOverlayEl || document.getElementById("show-image-overlay");
  if (!el) return;
  const followX = Number.isFinite(Number(sceneCameraFollow.x)) ? Number(sceneCameraFollow.x) : 0;
  const followY = Number.isFinite(Number(sceneCameraFollow.y)) ? Number(sceneCameraFollow.y) : 0;
  el.style.transform =
    `translate(calc(-50% + ${followX}px), calc(-50% + ${followY}px)) scale(${SHOW_IMAGE_SCALE})`;
  showImageOverlayEl = el;
}

function showShowImageOverlay(imageName) {
  const path = resolveShowImagePath(imageName);
  if (!path) return;
  const overlayEl = ensureShowImageOverlay();
  if (!overlayEl) return;

  preloadShowImage(path);
  if (overlayEl.getAttribute("src") !== path) {
    overlayEl.setAttribute("src", path);
  }
  updateShowImageOverlayTransform();
  overlayEl.style.display = "block";
  overlayEl.style.visibility = "visible";
  overlayEl.style.opacity = "1";
}

function hideShowImageOverlay(remove = true) {
  const el = showImageOverlayEl || document.getElementById("show-image-overlay");
  if (!el) return;

  if (remove) {
    el.remove();
    showImageOverlayEl = null;
    return;
  }

  el.style.display = "none";
  el.style.visibility = "hidden";
  showImageOverlayEl = el;
}

function resolveShowImageFhudPath(imageName) {
  const raw = String(imageName || "").trim();
  if (!raw) return "";

  if (/^(https?:|data:|blob:)/i.test(raw)) {
    return raw;
  }

  let path = raw.replace(/\\/g, "/").replace(/^\/+/, "");
  if (!/\.[a-z0-9]+$/i.test(path)) {
    path += ".png";
  }

  if (path.startsWith("assets/")) return path;
  if (path.startsWith("images/")) return `assets/${path}`;
  return `${SHOW_IMAGE_FHUD_BASE_PATH}${path}`;
}

function preloadShowImageFhudImage(imagePath) {
  if (!imagePath) return Promise.resolve(null);
  if (showImageFhudImagePromises[imagePath]) {
    return showImageFhudImagePromises[imagePath];
  }

  showImageFhudImagePromises[imagePath] = new Promise((resolve) => {
    let settled = false;
    const finish = (value) => {
      if (settled) return;
      settled = true;
      resolve(value);
    };

    const img = new Image();
    img.onload = () => finish(img);
    img.onerror = () => finish(null);
    img.src = imagePath;
    if (typeof img.decode === "function") {
      img.decode()
        .then(() => finish(img))
        .catch(() => {});
    }
  });

  return showImageFhudImagePromises[imagePath];
}

function preloadShowImageFhudFromEvents(events = []) {
  if (!Array.isArray(events) || events.length <= 0) return;
  events.forEach((evt) => {
    if (!evt || evt.type !== "show_image_fhud" || !evt.enabled) return;
    const path = resolveShowImageFhudPath(evt.imageName);
    if (!path) return;
    preloadShowImageFhudImage(path);
  });
}

function ensureShowImageFhudOverlay() {
  if (showImageFhudOverlayEl && showImageFhudOverlayEl.isConnected) {
    return showImageFhudOverlayEl;
  }

  let el = document.getElementById("show-image-fhud-overlay");
  if (!el) {
    el = document.createElement("img");
    el.id = "show-image-fhud-overlay";
    el.alt = "";
    el.draggable = false;
    document.body.appendChild(el);
  }

  showImageFhudOverlayEl = el;
  return showImageFhudOverlayEl;
}

function showShowImageFhudOverlay(imageName) {
  const path = resolveShowImageFhudPath(imageName);
  if (!path) return;
  const overlayEl = ensureShowImageFhudOverlay();
  if (!overlayEl) return;

  preloadShowImageFhudImage(path);
  if (overlayEl.getAttribute("src") !== path) {
    overlayEl.setAttribute("src", path);
  }
  overlayEl.style.display = "block";
  overlayEl.style.visibility = "visible";
  overlayEl.style.opacity = "1";
}

function hideShowImageFhudOverlay(remove = true) {
  const el = showImageFhudOverlayEl || document.getElementById("show-image-fhud-overlay");
  if (!el) return;

  if (remove) {
    el.remove();
    showImageFhudOverlayEl = null;
    return;
  }

  el.style.display = "none";
  el.style.visibility = "hidden";
  showImageFhudOverlayEl = el;
}

function resolveJumpImagePath(imageName) {
  const raw = String(imageName || "").trim();
  if (!raw) return "";

  if (/^(https?:|data:|blob:)/i.test(raw)) {
    return raw;
  }

  let path = raw.replace(/\\/g, "/").replace(/^\/+/, "");
  if (!/\.[a-z0-9]+$/i.test(path)) {
    path += ".png";
  }

  if (path.startsWith("assets/")) return path;
  if (path.startsWith("images/")) return `assets/${path}`;
  return `${JUMP_IMAGE_BASE_PATH}${path}`;
}

function preloadJumpImage(imagePath) {
  if (!imagePath) return Promise.resolve(null);
  if (jumpImageState.imagePromises[imagePath]) {
    return jumpImageState.imagePromises[imagePath];
  }

  jumpImageState.imagePromises[imagePath] = new Promise((resolve) => {
    let settled = false;
    const finish = (value) => {
      if (settled) return;
      settled = true;
      resolve(value);
    };

    const img = new Image();
    img.onload = () => finish(img);
    img.onerror = () => finish(null);
    img.src = imagePath;
    if (typeof img.decode === "function") {
      img.decode()
        .then(() => finish(img))
        .catch(() => {});
    }
  });

  return jumpImageState.imagePromises[imagePath];
}

function preloadJumpImageFromEvents(events = []) {
  if (!Array.isArray(events) || events.length <= 0) return;
  events.forEach((evt) => {
    if (!evt || evt.type !== "jump_image") return;
    const path = resolveJumpImagePath(evt.imageName);
    if (!path) return;
    preloadJumpImage(path).then((img) => {
      ensureJumpImageSprite(path, img);
    });
  });
}

function clearJumpImageTimers(entry) {
  if (!entry) return;
  if (entry.fallTimer) {
    clearTimeout(entry.fallTimer);
    entry.fallTimer = 0;
  }
  if (entry.hideTimer) {
    clearTimeout(entry.hideTimer);
    entry.hideTimer = 0;
  }
}

function ensureJumpImageSprite(path, loadedImg = null) {
  if (!path) return null;
  const existing = jumpImageState.spritesByPath.get(path);
  if (existing && existing.el?.isConnected) {
    if (loadedImg) {
      const w = Number(loadedImg.naturalWidth) || existing.naturalW || 0;
      const h = Number(loadedImg.naturalHeight) || existing.naturalH || 0;
      if (w > 0 && h > 0) {
        existing.naturalW = w;
        existing.naturalH = h;
      }
    }
    return existing;
  }

  const el = document.createElement("img");
  el.alt = "";
  el.draggable = false;
  el.src = path;
  el.style.position = "fixed";
  el.style.left = "0px";
  el.style.top = "0px";
  el.style.pointerEvents = "none";
  el.style.zIndex = `${JUMP_IMAGE_Z_INDEX}`;
  el.style.opacity = "1";
  el.style.willChange = "transform";
  el.style.transition = "none";
  el.style.transform = "translate3d(0px, 0px, 0)";
  el.style.transformOrigin = "left top";
  el.style.backfaceVisibility = "hidden";
  el.style.contain = "layout paint style";
  el.style.display = "none";
  document.body.appendChild(el);

  const entry = {
    path,
    el,
    naturalW: Number(loadedImg?.naturalWidth) || Number(el.naturalWidth) || 0,
    naturalH: Number(loadedImg?.naturalHeight) || Number(el.naturalHeight) || 0,
    drawW: 0,
    drawH: 0,
    posX: 0,
    startY: 0,
    jumpY: 0,
    viewportW: 0,
    viewportH: 0,
    fallTimer: 0,
    hideTimer: 0
  };
  jumpImageState.spritesByPath.set(path, entry);
  return entry;
}

function layoutJumpImageSprite(entry) {
  if (!entry || !entry.el) return null;

  const viewportW = window.innerWidth || 0;
  const viewportH = window.innerHeight || 0;
  const naturalW = Number(entry.naturalW) || Number(entry.el.naturalWidth) || 0;
  const naturalH = Number(entry.naturalH) || Number(entry.el.naturalHeight) || 0;
  if (naturalW <= 0 || naturalH <= 0 || viewportW <= 0 || viewportH <= 0) {
    return null;
  }

  entry.naturalW = naturalW;
  entry.naturalH = naturalH;

  const scale = Math.min(viewportW / naturalW, viewportH / naturalH, 1);
  const drawW = Math.max(1, Math.round(naturalW * scale));
  const drawH = Math.max(1, Math.round(naturalH * scale));
  const posX = Math.round((viewportW - drawW) / 2);
  const startY = viewportH;
  const jumpY = Math.round(viewportH / 2 - JUMP_IMAGE_JUMP_Y_OFFSET);

  if (entry.drawW !== drawW) {
    entry.drawW = drawW;
    entry.el.style.width = `${drawW}px`;
  }
  if (entry.drawH !== drawH) {
    entry.drawH = drawH;
    entry.el.style.height = `${drawH}px`;
  }
  entry.posX = posX;
  entry.startY = startY;
  entry.jumpY = jumpY;
  entry.viewportW = viewportW;
  entry.viewportH = viewportH;

  return { posX, startY, jumpY };
}

function clearJumpImages(remove = true) {
  const entries = Array.from(jumpImageState.spritesByPath.values());
  entries.forEach((entry) => {
    clearJumpImageTimers(entry);
    if (remove) {
      if (entry.el && entry.el.isConnected) {
        entry.el.remove();
      }
    } else if (entry.el) {
      entry.el.style.display = "none";
    }
  });
  if (remove) {
    jumpImageState.spritesByPath.clear();
  }
}

function startJumpImageAnimation(entry) {
  if (!entry || !entry.el || !entry.el.isConnected) return;
  const layout = layoutJumpImageSprite(entry);
  if (!layout) return;

  clearJumpImageTimers(entry);
  entry.el.style.display = "block";
  entry.el.style.opacity = "1";
  entry.el.style.transition = "none";
  entry.el.style.transform =
    `translate3d(${layout.posX}px, ${layout.startY}px, 0)`;

  requestAnimationFrame(() => {
    if (!entry.el || !entry.el.isConnected) return;
    entry.el.style.transition =
      `transform ${JUMP_IMAGE_JUMP_MS}ms cubic-bezier(0, 0.55, 0.45, 1)`;
    entry.el.style.transform =
      `translate3d(${layout.posX}px, ${layout.jumpY}px, 0)`;
  });

  entry.fallTimer = setTimeout(() => {
    if (!entry.el || !entry.el.isConnected) return;
    entry.el.style.transition =
      `transform ${JUMP_IMAGE_FALL_MS}ms cubic-bezier(0.55, 0, 1, 0.45)`;
    entry.el.style.transform =
      `translate3d(${layout.posX}px, ${layout.startY}px, 0)`;
  }, JUMP_IMAGE_FALL_DELAY_MS);

  entry.hideTimer = setTimeout(() => {
    if (!entry.el || !entry.el.isConnected) return;
    entry.el.style.transition = "none";
    entry.el.style.display = "none";
  }, JUMP_IMAGE_FALL_DELAY_MS + JUMP_IMAGE_REMOVE_DELAY_MS);
}

function runJumpImageEvent(imageName) {
  const path = resolveJumpImagePath(imageName);
  if (!path) return;

  const prepared = jumpImageState.spritesByPath.get(path);
  if (prepared && prepared.el?.isConnected) {
    startJumpImageAnimation(prepared);
    return;
  }

  preloadJumpImage(path).then((img) => {
    const entry = ensureJumpImageSprite(path, img);
    startJumpImageAnimation(entry);
  });
}

function pickLongestAtlasGroup(groups) {
  let best = [];
  Object.values(groups || {}).forEach((frames) => {
    if (!Array.isArray(frames)) return;
    if (frames.length > best.length) {
      best = frames;
    }
  });
  return best;
}

function loadMikuGhostRuntime() {
  if (mikuGhostState.runtime) return Promise.resolve(mikuGhostState.runtime);
  if (mikuGhostState.loadPromise) return mikuGhostState.loadPromise;

  mikuGhostState.loadPromise = fetch(MIKU_GHOST_XML_PATH)
    .then((res) => res.text())
    .then((text) => {
      const atlas = parseCharacterAtlas(text);
      if (!atlas) return null;

      const imageUrl = atlas.imagePath
        ? resolveRelativeAssetUrl(MIKU_GHOST_XML_PATH, atlas.imagePath)
        : "";
      return preloadCharacterImage(imageUrl).then(() => {
        const sourceFrames = pickLongestAtlasGroup(atlas.groups);
        const frames = sourceFrames.filter((frame) => {
          const w = Number(frame?.w);
          const h = Number(frame?.h);
          return w > 0 && h > 0;
        });

        const runtime = {
          imageUrl,
          frames: frames.length > 0 ? frames : sourceFrames
        };
        mikuGhostState.runtime = runtime;
        return runtime;
      });
    })
    .catch((err) => {
      console.warn("miku ghost atlas load failed:", err);
      return null;
    })
    .finally(() => {
      mikuGhostState.loadPromise = null;
    });

  return mikuGhostState.loadPromise;
}

function ensureMikuGhostSprite() {
  if (
    mikuGhostState.rootEl &&
    mikuGhostState.frameEl &&
    mikuGhostState.rootEl.isConnected
  ) {
    return {
      rootEl: mikuGhostState.rootEl,
      frameEl: mikuGhostState.frameEl
    };
  }

  const layerEl = ensureCharacterLayer();
  if (!layerEl) return null;

  let rootEl = document.getElementById("miku-ghost-sprite");
  if (!rootEl) {
    rootEl = document.createElement("div");
    rootEl.id = "miku-ghost-sprite";
    rootEl.className = "character";
    rootEl.style.left = `${MIKU_GHOST_X_PX}px`;
    rootEl.style.top = "50%";
    rootEl.style.transformOrigin = "left center";
    rootEl.style.transform =
      `translate3d(0px, -50%, 0) scale(calc(var(--character-opponent-scale) * ${MIKU_GHOST_EXTRA_SCALE}))`;
    rootEl.style.pointerEvents = "none";
    rootEl.style.zIndex = "0";
    rootEl.style.display = "none";

    const frameEl = document.createElement("div");
    frameEl.className = "character-frame";
    rootEl.appendChild(frameEl);

    layerEl.insertBefore(rootEl, layerEl.firstChild || null);
  } else if (rootEl.parentElement !== layerEl) {
    layerEl.insertBefore(rootEl, layerEl.firstChild || null);
  }

  const frameEl = rootEl.querySelector(".character-frame");
  if (!frameEl) return null;

  mikuGhostState.rootEl = rootEl;
  mikuGhostState.frameEl = frameEl;
  return { rootEl, frameEl };
}

function getMikuGhostTargetTop() {
  const opponentRoot = characterSprites.opponent?.rootEl;
  if (opponentRoot && opponentRoot.isConnected) {
    const inlineTop = String(opponentRoot.style.top || "").trim();
    if (inlineTop) return inlineTop;
    const computedTop = String(getComputedStyle(opponentRoot).top || "").trim();
    if (computedTop && computedTop !== "auto") return computedTop;
  }
  return "50%";
}

function syncMikuGhostPosition() {
  const rootEl = mikuGhostState.rootEl;
  if (!rootEl || !rootEl.isConnected) return;
  const opponentRoot = characterSprites.opponent?.rootEl;
  if (!mikuGhostState.lockedTop) {
    mikuGhostState.lockedTop = getMikuGhostTargetTop();
    mikuGhostState.lockedMarginTop = opponentRoot?.style?.marginTop || "0px";
  }
  rootEl.style.left = `${MIKU_GHOST_X_PX}px`;
  rootEl.style.top = mikuGhostState.lockedTop || "50%";
  rootEl.style.transformOrigin = "left center";
  rootEl.style.transform =
    `translate3d(0px, -50%, 0) scale(calc(var(--character-opponent-scale) * ${MIKU_GHOST_EXTRA_SCALE}))`;
  rootEl.style.marginTop = mikuGhostState.lockedMarginTop || "0px";
  rootEl.style.marginLeft = "0px";
}

function applyMikuGhostFrame(frame) {
  if (
    !frame ||
    !mikuGhostState.frameEl ||
    !mikuGhostState.rootEl ||
    !mikuGhostState.runtime
  ) return;

  const frameWidth = frame.frameWidth || frame.w || 0;
  const frameHeight = frame.frameHeight || frame.h || 0;
  const w = frame.w || 0;
  const h = frame.h || 0;

  mikuGhostState.rootEl.style.width = `${frameWidth}px`;
  mikuGhostState.rootEl.style.height = `${frameHeight}px`;
  mikuGhostState.frameEl.style.width = `${w}px`;
  mikuGhostState.frameEl.style.height = `${h}px`;
  mikuGhostState.frameEl.style.left = `${-(frame.frameX || 0)}px`;
  mikuGhostState.frameEl.style.top = `${-(frame.frameY || 0)}px`;
  mikuGhostState.frameEl.style.backgroundImage =
    mikuGhostState.runtime.imageUrl
      ? `url('${mikuGhostState.runtime.imageUrl}')`
      : "";
  mikuGhostState.frameEl.style.backgroundPosition = `${-frame.x}px ${-frame.y}px`;
  mikuGhostState.frameEl.style.backgroundSize = "auto";
  mikuGhostState.frameEl.style.backgroundRepeat = "no-repeat";
}

function showMikuGhostSprite() {
  mikuGhostState.enabled = true;

  loadMikuGhostRuntime().then((runtime) => {
    if (!mikuGhostState.enabled) return;
    if (!runtime || !Array.isArray(runtime.frames) || runtime.frames.length <= 0) return;

    const sprite = ensureMikuGhostSprite();
    if (!sprite) return;

    mikuGhostState.visible = true;
    mikuGhostState.frameIndex = 0;
    mikuGhostState.lastFrameTime = performance.now();
    mikuGhostState.lockedTop = "";
    mikuGhostState.lockedMarginTop = "0px";
    sprite.rootEl.style.display = "";
    syncMikuGhostPosition();
    applyMikuGhostFrame(runtime.frames[0]);
  });
}

function hideMikuGhostSprite(remove = false) {
  mikuGhostState.enabled = false;
  mikuGhostState.visible = false;
  mikuGhostState.frameIndex = 0;
  mikuGhostState.lastFrameTime = 0;
  mikuGhostState.lockedTop = "";
  mikuGhostState.lockedMarginTop = "0px";

  const rootEl = mikuGhostState.rootEl || document.getElementById("miku-ghost-sprite");
  if (!rootEl) return;

  if (remove) {
    rootEl.remove();
    mikuGhostState.rootEl = null;
    mikuGhostState.frameEl = null;
    return;
  }

  rootEl.style.display = "none";
  mikuGhostState.rootEl = rootEl;
  if (!mikuGhostState.frameEl) {
    mikuGhostState.frameEl = rootEl.querySelector(".character-frame");
  }
}

function updateMikuGhostSprite(now) {
  if (!mikuGhostState.enabled || !mikuGhostState.visible) return;
  const runtime = mikuGhostState.runtime;
  if (!runtime || !Array.isArray(runtime.frames) || runtime.frames.length <= 0) return;
  const sprite = ensureMikuGhostSprite();
  if (!sprite) return;

  const currentTime = Number(now);
  const lastTime = Number(mikuGhostState.lastFrameTime);
  if (Number.isFinite(lastTime) && currentTime - lastTime < MIKU_GHOST_FRAME_MS) {
    return;
  }

  mikuGhostState.lastFrameTime = currentTime;
  mikuGhostState.frameIndex =
    (mikuGhostState.frameIndex + 1) % runtime.frames.length;
  applyMikuGhostFrame(runtime.frames[mikuGhostState.frameIndex]);
}

function applyShowMikuGhostEvent(evt) {
  if (!evt) return;
  if (evt.enabled) {
    showMikuGhostSprite();
    return;
  }
  hideMikuGhostSprite(false);
}

function preloadMikuGhostFromEvents(events = []) {
  if (!Array.isArray(events) || events.length <= 0) return;
  const hasEvent = events.some((evt) => evt?.type === "show_miku_ghost");
  if (!hasEvent) return;
  loadMikuGhostRuntime();
}

function easeGhostCubicIn(t) {
  const x = Math.max(0, Math.min(1, Number(t) || 0));
  return x * x * x;
}

function clearGhostEchoTween(index) {
  const idx = index | 0;
  if (idx < 0 || idx >= GHOST_ECHO_CLONE_COUNT) return;
  const rafId = ghostEchoState.tweenRafId[idx];
  if (rafId) {
    cancelAnimationFrame(rafId);
    ghostEchoState.tweenRafId[idx] = 0;
  }
}

function tweenGhostEchoAlpha(index, targetAlpha, durationMs, easingFn, onDone) {
  const idx = index | 0;
  if (idx < 0 || idx >= GHOST_ECHO_CLONE_COUNT) return;

  clearGhostEchoTween(idx);
  const fromAlphaRaw = Number(ghostEchoState.alphas[idx]);
  const fromAlpha = Number.isFinite(fromAlphaRaw) ? fromAlphaRaw : 0;
  const toAlphaRaw = Number(targetAlpha);
  const toAlpha = Number.isFinite(toAlphaRaw) ? toAlphaRaw : 0;
  const totalMsRaw = Number(durationMs);
  const totalMs = Number.isFinite(totalMsRaw) ? Math.max(0, totalMsRaw) : 0;
  const ease = typeof easingFn === "function" ? easingFn : ((t) => t);

  if (totalMs <= 0) {
    ghostEchoState.alphas[idx] = toAlpha;
    if (typeof onDone === "function") onDone();
    return;
  }

  const token = (ghostEchoState.tweenToken[idx] || 0) + 1;
  ghostEchoState.tweenToken[idx] = token;
  const started = performance.now();

  const step = (now) => {
    if (ghostEchoState.tweenToken[idx] !== token) return;
    const elapsed = now - started;
    const t = Math.max(0, Math.min(1, elapsed / totalMs));
    const eased = ease(t);
    ghostEchoState.alphas[idx] = fromAlpha + (toAlpha - fromAlpha) * eased;

    if (t >= 1) {
      ghostEchoState.tweenRafId[idx] = 0;
      ghostEchoState.alphas[idx] = toAlpha;
      if (typeof onDone === "function") onDone();
      return;
    }

    ghostEchoState.tweenRafId[idx] = requestAnimationFrame(step);
  };

  ghostEchoState.tweenRafId[idx] = requestAnimationFrame(step);
}

function ensureGhostEchoSprite(index) {
  const idx = index | 0;
  if (idx < 0 || idx >= GHOST_ECHO_CLONE_COUNT) return null;
  if (ghostEchoSprites[idx] && ghostEchoSprites[idx].root?.isConnected) {
    ghostEchoSprites[idx].root.style.zIndex = "0";
    return ghostEchoSprites[idx];
  }

  const layerEl = ensureCharacterLayer();
  if (!layerEl) return null;

  let root = document.getElementById(`ghost-echo-${idx + 1}`);
  if (!root) {
    root = document.createElement("div");
    root.id = `ghost-echo-${idx + 1}`;
    root.className = "character character--opponent";
    root.style.pointerEvents = "none";
    root.style.zIndex = "0";
    root.style.display = "none";
    root.style.transition = "none";

    const frame = document.createElement("div");
    frame.className = "character-frame";
    root.appendChild(frame);

    layerEl.insertBefore(root, layerEl.firstChild || null);
  }

  const frameEl = root.querySelector(".character-frame");
  if (!frameEl) return null;

  const spriteObj = { root, frameEl };
  root.style.zIndex = "0";
  ghostEchoSprites[idx] = spriteObj;
  return spriteObj;
}

function clearGhostEchoDadReturnState() {
  ghostEchoState.dadReturnUntilPerf = 0;
  ghostEchoState.dadReturnEasing = SCENE_CAMERA_EASING;
}

function clearGhostEchoSprites(remove = true, options = {}) {
  const keepBaseDadX = Boolean(options.keepBaseDadX);
  const keepDadReturn = Boolean(options.keepDadReturn);
  for (let i = 0; i < GHOST_ECHO_CLONE_COUNT; i += 1) {
    clearGhostEchoTween(i);
    ghostEchoState.tweenToken[i] += 1;
    ghostEchoState.offsetsX[i] = 0;
    ghostEchoState.alphas[i] = 0;
    ghostEchoState.visible[i] = false;

    const sprite = ghostEchoSprites[i];
    if (!sprite || !sprite.root) continue;
    if (remove) {
      sprite.root.remove();
      ghostEchoSprites[i] = null;
    } else {
      sprite.root.style.display = "none";
      sprite.root.style.opacity = "0";
    }
  }
  if (!keepBaseDadX) {
    ghostEchoState.baseDadX = null;
  }
  if (!keepDadReturn) {
    clearGhostEchoDadReturnState();
  }
}

function setGhostEchoClone(index, offsetX, alpha, visible = true) {
  const idx = index | 0;
  if (idx < 0 || idx >= GHOST_ECHO_CLONE_COUNT) return;
  clearGhostEchoTween(idx);
  ghostEchoState.tweenToken[idx] += 1;

  const nextOffset = Number(offsetX);
  const nextAlpha = Number(alpha);
  ghostEchoState.offsetsX[idx] = Number.isFinite(nextOffset) ? nextOffset : 0;
  ghostEchoState.alphas[idx] = Number.isFinite(nextAlpha) ? nextAlpha : 0;
  ghostEchoState.visible[idx] = Boolean(visible);
}

function fadeOutGhostEchoClone(index, durationMs = 100) {
  const idx = index | 0;
  if (idx < 0 || idx >= GHOST_ECHO_CLONE_COUNT) return;
  if (!ghostEchoState.visible[idx] && ghostEchoState.alphas[idx] <= 0) return;

  ghostEchoState.offsetsX[idx] = 0;
  ghostEchoState.visible[idx] = true;
  tweenGhostEchoAlpha(idx, 0, durationMs, easeGhostCubicIn, () => {
    ghostEchoState.visible[idx] = false;
    const sprite = ghostEchoSprites[idx];
    if (sprite && sprite.root) {
      sprite.root.style.display = "none";
    }
  });
}

function setGhostEchoDadX(x, durationMs = 0, easing = null) {
  const nextX = Number(x);
  if (!Number.isFinite(nextX)) return;
  const durationValue = Number(durationMs);
  const safeDuration = Number.isFinite(durationValue)
    ? Math.max(0, durationValue)
    : 0;
  const easingValue =
    typeof easing === "string" && easing.trim()
      ? easing.trim()
      : SCENE_CAMERA_EASING;

  if (safeDuration > 0) {
    ghostEchoState.dadReturnUntilPerf = performance.now() + safeDuration;
    ghostEchoState.dadReturnEasing = easingValue;
  } else {
    clearGhostEchoDadReturnState();
  }

  characterPositionOverrides.opponent.x = nextX;
  applyCharacterPositionOverride("opponent", {
    durationMs: safeDuration,
    easing: easingValue,
    instant: safeDuration <= 0
  });
}

function getOpponentCurrentXPx() {
  const overrideX = Number(characterPositionOverrides.opponent.x);
  if (Number.isFinite(overrideX)) return overrideX;

  const opponent = characterSprites.opponent;
  const root = opponent?.rootEl;
  if (!root) return 0;

  const inlineLeft = Number.parseFloat(root.style.left || "");
  if (Number.isFinite(inlineLeft)) return inlineLeft;

  const computedLeft = Number.parseFloat(getComputedStyle(root).left || "");
  if (Number.isFinite(computedLeft)) return computedLeft;
  return 0;
}

function setGhostEchoBaseDadXFromCurrent() {
  ghostEchoState.baseDadX = getOpponentCurrentXPx();
}

function mapGhostEchoDadX(luaX) {
  const raw = Number(luaX);
  if (!Number.isFinite(raw)) return null;
  const base = Number(ghostEchoState.baseDadX);
  const anchor = Number.isFinite(base) ? base : getOpponentCurrentXPx();
  return anchor + (raw - 600);
}

function getGhostEchoDadReturnRemainingMs() {
  const until = Number(ghostEchoState.dadReturnUntilPerf);
  if (!Number.isFinite(until) || until <= 0) return 0;
  return Math.max(0, until - performance.now());
}

function applyGhostEchoEvent(evt) {
  if (!evt) return;
  if (evt.action !== "on") return;
  const mode = normalizeName(evt.mode);
  if (!mode) return;

  if (mode !== "noghost") {
    clearGhostEchoDadReturnState();
  }

  if (mode.startsWith("ghost")) {
    for (let i = 0; i < GHOST_ECHO_CLONE_COUNT; i += 1) {
      if (ghostEchoState.visible[i]) continue;
      ghostEchoState.visible[i] = true;
    }
  }

  if (mode === "ghostleft1") {
    setGhostEchoBaseDadXFromCurrent();
    const targetX = mapGhostEchoDadX(200);
    if (Number.isFinite(targetX)) {
      setGhostEchoDadX(targetX, 0);
    }
    for (let i = 0; i < GHOST_ECHO_CLONE_COUNT; i += 1) {
      setGhostEchoClone(i, 0, 0, true);
    }
    return;
  }

  if (mode === "ghostleft2") {
    setGhostEchoClone(0, 200, 0.75, true);
    return;
  }

  if (mode === "ghostleft3") {
    setGhostEchoClone(1, 400, 0.5, true);
    return;
  }

  if (mode === "ghostleft4") {
    setGhostEchoClone(2, 600, 0.25, true);
    return;
  }

  if (mode === "ghostright1") {
    setGhostEchoBaseDadXFromCurrent();
    const targetX = mapGhostEchoDadX(800);
    if (Number.isFinite(targetX)) {
      setGhostEchoDadX(targetX, 0);
    }
    for (let i = 0; i < GHOST_ECHO_CLONE_COUNT; i += 1) {
      setGhostEchoClone(i, 0, 0, true);
    }
    return;
  }

  if (mode === "ghostright2") {
    setGhostEchoClone(0, -290, 0.67, true);
    return;
  }

  if (mode === "ghostright3") {
    setGhostEchoClone(1, -580, 0.34, true);
    return;
  }

  if (mode === "noghost") {
    ghostEchoState.noGhostCount += 1;
    for (let i = 0; i < GHOST_ECHO_CLONE_COUNT; i += 1) {
      fadeOutGhostEchoClone(i, 100);
    }
    const targetX = mapGhostEchoDadX(600);
    if (Number.isFinite(targetX)) {
      setGhostEchoDadX(
        targetX,
        GHOST_ECHO_DAD_RETURN_MS,
        GHOST_ECHO_DAD_RETURN_EASING
      );
    }

    if (ghostEchoState.noGhostCount >= 3) {
      clearGhostEchoSprites(true, { keepBaseDadX: true, keepDadReturn: true });
      ghostEchoState.noGhostCount = 0;
    }
  }
}

function isGhostEchoRuntimeActive() {
  for (let i = 0; i < GHOST_ECHO_CLONE_COUNT; i += 1) {
    if (ghostEchoState.visible[i]) return true;
    if (Math.abs(Number(ghostEchoState.alphas[i]) || 0) > 0.001) return true;
    if (ghostEchoState.tweenRafId[i]) return true;
  }
  return false;
}

function updateGhostEchoSprites() {
  if (!isGhostEchoRuntimeActive()) return;

  const opponent = characterSprites.opponent;
  if (!opponent || !opponent.ready || !opponent.rootEl || !opponent.frameEl) {
    clearGhostEchoSprites(false, { keepBaseDadX: true, keepDadReturn: true });
    return;
  }

  const sourceRoot = opponent.rootEl;
  const sourceFrame = opponent.frameEl;
  if (sourceRoot.style.display === "none") {
    clearGhostEchoSprites(false, { keepBaseDadX: true, keepDadReturn: true });
    return;
  }
  const sourceMarginLeft = Number.parseFloat(sourceRoot.style.marginLeft || "0");
  const baseMarginLeft = Number.isFinite(sourceMarginLeft) ? sourceMarginLeft : 0;

  for (let i = 0; i < GHOST_ECHO_CLONE_COUNT; i += 1) {
    const alphaRaw = Number(ghostEchoState.alphas[i]);
    const alpha = Number.isFinite(alphaRaw) ? Math.max(0, Math.min(1, alphaRaw)) : 0;
    const isVisible = ghostEchoState.visible[i] || alpha > 0;
    const sprite = ensureGhostEchoSprite(i);
    if (!sprite || !sprite.root || !sprite.frameEl) continue;

    if (!isVisible) {
      sprite.root.style.display = "none";
      continue;
    }

    sprite.root.style.display = "";
    sprite.root.style.opacity = `${alpha}`;
    sprite.root.style.left = sourceRoot.style.left || "";
    sprite.root.style.top = sourceRoot.style.top || "";
    sprite.root.style.transform = sourceRoot.style.transform || "";
    sprite.root.style.width = sourceRoot.style.width || "";
    sprite.root.style.height = sourceRoot.style.height || "";
    sprite.root.style.marginLeft = `${baseMarginLeft + ghostEchoState.offsetsX[i]}px`;
    sprite.root.style.marginTop = sourceRoot.style.marginTop || "0px";

    sprite.frameEl.style.backgroundImage = sourceFrame.style.backgroundImage || "";
    sprite.frameEl.style.backgroundPosition = sourceFrame.style.backgroundPosition || "";
    sprite.frameEl.style.backgroundSize = sourceFrame.style.backgroundSize || "";
    sprite.frameEl.style.backgroundRepeat = sourceFrame.style.backgroundRepeat || "";
    sprite.frameEl.style.width = sourceFrame.style.width || "";
    sprite.frameEl.style.height = sourceFrame.style.height || "";
    sprite.frameEl.style.left = sourceFrame.style.left || "";
    sprite.frameEl.style.top = sourceFrame.style.top || "";
    sprite.frameEl.style.imageRendering = sourceFrame.style.imageRendering || "";
  }
}

function ensureMemeAppearSprite() {
  const layerEl = ensureSceneCameraLayer();
  if (!layerEl) return null;

  let el = document.getElementById("meme-appear-sprite");
  if (!el) {
    el = document.createElement("img");
    el.id = "meme-appear-sprite";
    el.src = MEME_APPEAR_CONFIG.imagePath;
    el.alt = "";
    el.style.position = "absolute";
    el.style.left = `${MEME_APPEAR_CONFIG.startX}px`;
    el.style.top = `${MEME_APPEAR_CONFIG.y}px`;
    el.style.transformOrigin = "left top";
    el.style.transform = `scale(${MEME_APPEAR_CONFIG.scale})`;
    el.style.pointerEvents = "none";
    el.style.zIndex = "0";
    el.style.display = "none";
    el.style.willChange = "left, transform";

    const characterLayer = document.getElementById("character-layer");
    if (characterLayer && characterLayer.parentElement === layerEl) {
      layerEl.insertBefore(el, characterLayer);
    } else {
      layerEl.appendChild(el);
    }
  }

  memeAppearSpriteEl = el;
  return memeAppearSpriteEl;
}

function showMemeAppearSprite() {
  const el = ensureMemeAppearSprite();
  if (!el) return;

  el.style.display = "";
  el.style.transition = "none";
  el.style.left = `${MEME_APPEAR_CONFIG.startX}px`;
  el.style.top = `${MEME_APPEAR_CONFIG.y}px`;
  el.style.transform = `scale(${MEME_APPEAR_CONFIG.scale})`;
  void el.offsetWidth;
  el.style.transition = `left ${MEME_APPEAR_CONFIG.durationMs}ms ${MEME_APPEAR_CONFIG.easing}`;
  el.style.left = `${MEME_APPEAR_CONFIG.targetX}px`;
}

function hideMemeAppearSprite(remove = true) {
  const el = memeAppearSpriteEl || document.getElementById("meme-appear-sprite");
  if (!el) return;

  if (remove) {
    el.remove();
    memeAppearSpriteEl = null;
    return;
  }
  el.style.display = "none";
  memeAppearSpriteEl = el;
}

function ensureWhiteScreenOverlay() {
  if (whiteScreenOverlayEl && whiteScreenOverlayEl.isConnected) {
    return whiteScreenOverlayEl;
  }

  let el = document.getElementById("white-screen-overlay");
  if (!el) {
    el = document.createElement("div");
    el.id = "white-screen-overlay";
    document.body.appendChild(el);
  }

  whiteScreenOverlayEl = el;
  return whiteScreenOverlayEl;
}

function clearWhiteScreenAnim() {
  whiteScreenAnimToken += 1;
  if (whiteScreenAnimRafId) {
    cancelAnimationFrame(whiteScreenAnimRafId);
    whiteScreenAnimRafId = 0;
  }
}

function showWhiteScreen(speedSeconds) {
  const el = ensureWhiteScreenOverlay();
  if (!el) return;

  clearWhiteScreenAnim();
  const token = whiteScreenAnimToken;
  const durationMs = Math.max(0, Math.round(Math.max(0, Number(speedSeconds) || 0) * 1000));
  el.style.display = "block";
  el.style.visibility = "visible";
  el.style.transition = "none";

  if (durationMs <= 0) {
    el.style.opacity = "1";
    return;
  }

  const currentOpacity = Number.parseFloat(el.style.opacity || "0");
  if (!Number.isFinite(currentOpacity) || currentOpacity < 1) {
    el.style.opacity = Number.isFinite(currentOpacity) ? `${Math.max(0, currentOpacity)}` : "0";
  }

  whiteScreenAnimRafId = requestAnimationFrame(() => {
    whiteScreenAnimRafId = 0;
    if (whiteScreenAnimToken !== token) return;
    if (!el.isConnected) return;
    el.style.transition = `opacity ${durationMs}ms linear`;
    el.style.opacity = "1";
  });
}

function hideWhiteScreenInstant() {
  const el = whiteScreenOverlayEl || document.getElementById("white-screen-overlay");
  if (!el) return;

  clearWhiteScreenAnim();
  el.style.transition = "none";
  el.style.opacity = "0";
  el.style.visibility = "hidden";
  el.style.display = "none";
  whiteScreenOverlayEl = el;
}

function getSceneCameraShakeIntensityPx(intensity) {
  const raw = Number(intensity);
  if (!Number.isFinite(raw) || raw <= 0) return 0;
  const gameEl = document.getElementById("game");
  const w = Number(gameEl?.clientWidth) || 0;
  const h = Number(gameEl?.clientHeight) || 0;
  const baseSize = Math.max(w, h, 1);
  return raw * baseSize;
}

function triggerSceneScreenShake(durationSeconds, intensity, startSongMs = Number.NaN) {
  const durationRaw = Number(durationSeconds);
  const durationMs = Number.isFinite(durationRaw)
    ? Math.max(0, durationRaw * 1000)
    : 0;
  const intensityPx = getSceneCameraShakeIntensityPx(intensity);
  if (durationMs <= 0 || intensityPx <= 0) return;

  const nowPerf = performance.now();
  const startSong = Number(startSongMs);
  const safeStartSong = Number.isFinite(startSong)
    ? startSong
    : (
        typeof window.getSongTimeMs === "function"
          ? Number(window.getSongTimeMs())
          : Number.NaN
      );
  sceneCameraShakeState.active = true;
  sceneCameraShakeState.startSongMs = Number.isFinite(safeStartSong) ? safeStartSong : 0;
  sceneCameraShakeState.endSongMs = Number.isFinite(safeStartSong)
    ? safeStartSong + durationMs
    : 0;
  sceneCameraShakeState.startPerf = nowPerf;
  sceneCameraShakeState.durationMs = durationMs;
  sceneCameraShakeState.endPerf = nowPerf + durationMs;
  sceneCameraShakeState.intensityPx = Math.max(0, intensityPx);
}

function resetSceneCameraShake() {
  sceneCameraShakeState.active = false;
  sceneCameraShakeState.startSongMs = 0;
  sceneCameraShakeState.endSongMs = 0;
  sceneCameraShakeState.startPerf = 0;
  sceneCameraShakeState.endPerf = 0;
  sceneCameraShakeState.durationMs = 0;
  sceneCameraShakeState.intensityPx = 0;
  sceneCameraShakeState.x = 0;
  sceneCameraShakeState.y = 0;
}

function updateSceneCameraShake(nowSongMs = Number.NaN, nowPerf = performance.now()) {
  if (!sceneCameraShakeState.active) {
    if (sceneCameraShakeState.x !== 0 || sceneCameraShakeState.y !== 0) {
      sceneCameraShakeState.x = 0;
      sceneCameraShakeState.y = 0;
      setSceneCameraFollowPos(sceneCameraFollow.x, sceneCameraFollow.y, { instant: true });
    }
    return;
  }

  const durationMs = Number(sceneCameraShakeState.durationMs);
  if (!Number.isFinite(durationMs) || durationMs <= 0) {
    resetSceneCameraShake();
    setSceneCameraFollowPos(sceneCameraFollow.x, sceneCameraFollow.y, { instant: true });
    return;
  }

  const currentSongMs = Number(nowSongMs);
  const startSong = Number(sceneCameraShakeState.startSongMs);
  const endSong = Number(sceneCameraShakeState.endSongMs);
  const useSongDomain =
    Number.isFinite(currentSongMs) &&
    Number.isFinite(startSong) &&
    Number.isFinite(endSong) &&
    endSong > startSong;

  let progress = 0;
  if (useSongDomain) {
    if (currentSongMs > endSong) {
      resetSceneCameraShake();
      setSceneCameraFollowPos(sceneCameraFollow.x, sceneCameraFollow.y, { instant: true });
      return;
    }
    progress = Math.max(0, Math.min(1, (currentSongMs - startSong) / (endSong - startSong)));
  } else {
    const endPerf = Number(sceneCameraShakeState.endPerf);
    const startPerf = Number(sceneCameraShakeState.startPerf);
    if (!Number.isFinite(endPerf) || !Number.isFinite(startPerf)) {
      resetSceneCameraShake();
      setSceneCameraFollowPos(sceneCameraFollow.x, sceneCameraFollow.y, { instant: true });
      return;
    }
    if (nowPerf > endPerf) {
      resetSceneCameraShake();
      setSceneCameraFollowPos(sceneCameraFollow.x, sceneCameraFollow.y, { instant: true });
      return;
    }
    progress = Math.max(0, Math.min(1, (nowPerf - startPerf) / durationMs));
  }

  const amp = sceneCameraShakeState.intensityPx;
  sceneCameraShakeState.x = (Math.random() * 2 - 1) * amp;
  sceneCameraShakeState.y = (Math.random() * 2 - 1) * amp;
  ensureSceneCameraLayer();
}

function applySceneCameraTransform(layerEl, gameEl) {
  if (!layerEl || !gameEl) return;
  const shakeX = Number.isFinite(Number(sceneCameraShakeState.x)) ? Number(sceneCameraShakeState.x) : 0;
  const shakeY = Number.isFinite(Number(sceneCameraShakeState.y)) ? Number(sceneCameraShakeState.y) : 0;
  const tx = -sceneCameraFollow.x + shakeX;
  const ty = -sceneCameraFollow.y + shakeY;
  layerEl.style.transform = `translate(${tx}px, ${ty}px)`;
  gameEl.style.backgroundPosition = `${tx}px ${ty}px`;
}

function ensureSceneCameraLayer() {
  const gameEl = document.getElementById("game");
  if (!gameEl) return null;

  let layerEl = document.getElementById("scene-camera-layer");
  if (!layerEl) {
    layerEl = document.createElement("div");
    layerEl.id = "scene-camera-layer";
    gameEl.insertBefore(layerEl, gameEl.firstChild || null);
  }

  const layerTransition = `transform ${SCENE_CAMERA_MOVE_MS}ms ${SCENE_CAMERA_EASING}`;
  const bgTransition = `background-position ${SCENE_CAMERA_MOVE_MS}ms ${SCENE_CAMERA_EASING}`;
  if (sceneCameraShakeState.active) {
    if (layerEl.style.transition !== "none") {
      layerEl.style.transition = "none";
    }
    if (gameEl.style.transition !== "none") {
      gameEl.style.transition = "none";
    }
  } else {
    if (layerEl.style.transition !== layerTransition) {
      layerEl.style.transition = layerTransition;
    }
    if (gameEl.style.transition !== bgTransition) {
      gameEl.style.transition = bgTransition;
    }
    layerEl.dataset.camTransition = "1";
    gameEl.dataset.camTransition = "1";
  }

  applySceneCameraTransform(layerEl, gameEl);
  updateShowImageOverlayTransform();

  return layerEl;
}

function setSceneCameraFollowPos(x, y, options = {}) {
  const nextX = Number(x);
  const nextY = Number(y);
  sceneCameraFollow.x = Number.isFinite(nextX) ? nextX : 0;
  sceneCameraFollow.y = Number.isFinite(nextY) ? nextY : 0;
  const layerEl = ensureSceneCameraLayer();
  const gameEl = document.getElementById("game");
  if (!layerEl || !gameEl) return;

  if (options.instant && !sceneCameraShakeState.active) {
    const restoreLayerTransition = `transform ${SCENE_CAMERA_MOVE_MS}ms ${SCENE_CAMERA_EASING}`;
    const restoreGameTransition = `background-position ${SCENE_CAMERA_MOVE_MS}ms ${SCENE_CAMERA_EASING}`;
    layerEl.style.transition = "none";
    gameEl.style.transition = "none";
    applySceneCameraTransform(layerEl, gameEl);
    requestAnimationFrame(() => {
      if (!layerEl.isConnected || !gameEl.isConnected) return;
      if (sceneCameraShakeState.active) return;
      layerEl.style.transition = restoreLayerTransition;
      gameEl.style.transition = restoreGameTransition;
    });
    updateShowImageOverlayTransform();
    return;
  }
  applySceneCameraTransform(layerEl, gameEl);
  updateShowImageOverlayTransform();
}

function refreshCharacterPresentation() {
  const gfVisible = Boolean(characterSlotState.gf.preset);
  setCharacterVisibility("gf", gfVisible);
  syncGfIdleWordVisibility();

  const playerPreset = characterSlotState.player.preset;
  const opponentPreset = characterSlotState.opponent.preset;

  const playerEstandar = playerPreset === "estandar";
  const playerTimelineOnly = isPlayerTimelineOnlyPreset(playerPreset);
  const opponentInSplitLayout = isOpponentPresetInSplitLayout(opponentPreset);
  const hasSplitLayout = playerEstandar || opponentInSplitLayout;
  if (hasSplitLayout) {
    applyCharacterLayout("split");
    setCharacterVisibility("player", playerEstandar || playerTimelineOnly);
    setCharacterVisibility("opponent", opponentInSplitLayout);
    return;
  }

  applyCharacterLayout("center");

  const playerHasPreset = Boolean(playerPreset);
  const opponentHasPreset = Boolean(opponentPreset);
  const playerShadow = playerPreset === "shadow";
  const opponentShadow = opponentPreset === "shadow";

  // Player timeline-only presets should stay visible even if dad has a non-shadow preset.
  if (playerTimelineOnly) {
    activeCharacterSide = null;
    setCharacterVisibility("player", true);
    setCharacterVisibility("opponent", false);
    return;
  }

  // In center layout, non-shadow presets should stay visible at normal dad/bf anchors.
  if (opponentHasPreset && !opponentShadow) {
    activeCharacterSide = null;
    setCharacterVisibility("player", false);
    setCharacterVisibility("opponent", true);
    return;
  }
  if (playerHasPreset && !playerShadow) {
    activeCharacterSide = null;
    setCharacterVisibility("player", true);
    setCharacterVisibility("opponent", false);
    return;
  }

  const canUseActiveSide =
    (activeCharacterSide === "player" && playerShadow) ||
    (activeCharacterSide === "opponent" && opponentShadow);

  if (canUseActiveSide) {
    showOnlyCharacterSide(activeCharacterSide);
    return;
  }

  if (playerShadow && !opponentShadow) {
    activeCharacterSide = "player";
    showOnlyCharacterSide("player");
    return;
  }
  if (opponentShadow && !playerShadow) {
    activeCharacterSide = "opponent";
    showOnlyCharacterSide("opponent");
    return;
  }

  activeCharacterSide = null;
  setCharacterVisibility("player", false);
  setCharacterVisibility("opponent", false);
}

function applyCharacterRenderOffset(side) {
  const sprite = characterSprites[side];
  if (!sprite || !sprite.rootEl) return;
  const root = sprite.rootEl;
  const preset = characterSlotState[side]?.preset || "";
  const presetOffset =
    CHARACTER_PRESET_OFFSETS[side]?.[preset] || { x: 0, y: 0 };
  const transientOffset = characterTransientOffsets[side] || { x: 0, y: 0 };
  const useJsonAnimOffsets = Boolean(sprite.config?.applyCharacterJsonAnimOffsets);
  const animOffset = useJsonAnimOffsets && typeof sprite.getCurrentAnimOffset === "function"
    ? sprite.getCurrentAnimOffset()
    : { x: 0, y: 0 };
  const presetAnimOffset = getCharacterPresetAnimOffset(side, preset, sprite.currentAnim);

  const x =
    (Number.isFinite(Number(presetOffset.x)) ? Number(presetOffset.x) : 0) +
    (Number.isFinite(Number(transientOffset.x)) ? Number(transientOffset.x) : 0) +
    (Number.isFinite(Number(animOffset.x)) ? Number(animOffset.x) : 0) +
    (Number.isFinite(Number(presetAnimOffset.x)) ? Number(presetAnimOffset.x) : 0);
  const y =
    (Number.isFinite(Number(presetOffset.y)) ? Number(presetOffset.y) : 0) +
    (Number.isFinite(Number(transientOffset.y)) ? Number(transientOffset.y) : 0) +
    (Number.isFinite(Number(animOffset.y)) ? Number(animOffset.y) : 0) +
    (Number.isFinite(Number(presetAnimOffset.y)) ? Number(presetAnimOffset.y) : 0);
  const offsetState =
    sprite.appliedRenderOffset && typeof sprite.appliedRenderOffset === "object"
      ? sprite.appliedRenderOffset
      : (sprite.appliedRenderOffset = { x: null, y: null });

  if (offsetState.x !== x) {
    root.style.marginLeft = `${x}px`;
    offsetState.x = x;
  }
  if (offsetState.y !== y) {
    root.style.marginTop = `${y}px`;
    offsetState.y = y;
  }
}

function applyCharacterPositionOverride(side, options = {}) {
  const sprite = characterSprites[side];
  if (!sprite || !sprite.rootEl) return;
  const root = sprite.rootEl;
  const override = characterPositionOverrides[side] || {};
  const instant = Boolean(options.instant);
  const durationRaw = Number(options.durationMs);
  const durationMs = Number.isFinite(durationRaw)
    ? Math.max(0, durationRaw)
    : SCENE_CAMERA_MOVE_MS;
  const easing =
    typeof options.easing === "string" && options.easing.trim()
      ? options.easing.trim()
      : SCENE_CAMERA_EASING;
  const transitionValue =
    `left ${durationMs}ms ${easing}, top ${durationMs}ms ${easing}`;
  if (root.style.transition !== transitionValue) {
    root.style.transition = transitionValue;
  }

  let prevTransition = "";
  if (instant) {
    prevTransition = transitionValue;
    root.style.transition = "none";
  }

  applyCharacterRenderOffset(side);

  root.style.left = Number.isFinite(override.x) ? `${override.x}px` : "";
  root.style.top = Number.isFinite(override.y) ? `${override.y}px` : "";

  if (instant) {
    const token = (characterPositionTransitionRestoreToken[side] || 0) + 1;
    characterPositionTransitionRestoreToken[side] = token;
    requestAnimationFrame(() => {
      if (characterPositionTransitionRestoreToken[side] !== token) return;
      if (!root.isConnected) return;
      root.style.transition = prevTransition;
    });
  }
}

function setCharacterBounceOffset(side, yPx) {
  const state = characterTransientOffsets[side];
  if (!state) return;
  state.y = Number.isFinite(Number(yPx)) ? Number(yPx) : 0;
  applyCharacterRenderOffset(side);
}

function stopCharacterBounceAnim(side) {
  const anim = characterBounceAnim[side];
  if (!anim) return;
  anim.token += 1;
  if (anim.rafId) {
    cancelAnimationFrame(anim.rafId);
    anim.rafId = 0;
  }
}

function easeSineOut(t) {
  const clamped = Math.max(0, Math.min(1, t));
  return Math.sin((clamped * Math.PI) / 2);
}

function easeSineIn(t) {
  const clamped = Math.max(0, Math.min(1, t));
  return 1 - Math.cos((clamped * Math.PI) / 2);
}

function runCharacterBounce(side) {
  const anim = characterBounceAnim[side];
  if (!anim) return;
  stopCharacterBounceAnim(side);

  const token = ++anim.token;
  const start = performance.now();
  const downMs = Math.max(1, Number(characterBounceState.downMs) || 60);
  const upMs = Math.max(1, Number(characterBounceState.upMs) || 140);
  const totalMs = downMs + upMs;
  const amountPx = Number(characterBounceState.amountPx) || 40;

  const step = (now) => {
    if (anim.token !== token) return;
    const elapsed = now - start;

    if (elapsed >= totalMs) {
      setCharacterBounceOffset(side, 0);
      anim.rafId = 0;
      return;
    }

    if (elapsed <= downMs) {
      const t = elapsed / downMs;
      setCharacterBounceOffset(side, amountPx * easeSineOut(t));
    } else {
      const t = (elapsed - downMs) / upMs;
      setCharacterBounceOffset(side, amountPx * (1 - easeSineIn(t)));
    }

    anim.rafId = requestAnimationFrame(step);
  };

  anim.rafId = requestAnimationFrame(step);
}

function resetCharacterBounceState() {
  stopCharacterBounceAnim("player");
  stopCharacterBounceAnim("opponent");
  setCharacterBounceOffset("player", 0);
  setCharacterBounceOffset("opponent", 0);
  characterBounceState.lastBeatIndex = -1;
}

function setCharacterBounceEnabled(enabled, nowMs = 0) {
  const nextEnabled = Boolean(enabled);
  if (characterBounceState.enabled === nextEnabled) return;
  characterBounceState.enabled = nextEnabled;

  if (!nextEnabled) {
    resetCharacterBounceState();
    return;
  }

  const beatMs = getCharacterBeatMs();
  characterBounceState.lastBeatIndex = Math.floor(Math.max(0, nowMs) / beatMs);
}

function updateCharacterBounce(nowMs) {
  if (!characterBounceState.enabled) return;
  const beatMs = getCharacterBeatMs();
  const beatIndex = Math.floor(Math.max(0, nowMs) / beatMs);
  if (beatIndex <= characterBounceState.lastBeatIndex) return;

  characterBounceState.lastBeatIndex = beatIndex;
  runCharacterBounce("player");
  runCharacterBounce("opponent");
}

function getCharacterPresetLoadQueue(side) {
  if (side === "player") return characterPresetLoadQueueState.player;
  if (side === "opponent") return characterPresetLoadQueueState.opponent;
  if (side === "gf") return characterPresetLoadQueueState.gf;
  return null;
}

async function performCharacterPresetLoad(side, preset) {
  const normalizedPreset = normalizeCharacterPresetKey(preset);
  if (!normalizedPreset) return;

  const sprite = characterSprites[side];
  const config = getPresetConfig(side, normalizedPreset);
  if (!sprite || !config) return;
  if (
    normalizeCharacterPresetKey(characterPresetBySide[side]) === normalizedPreset &&
    sprite.ready
  ) {
    updateCharacterAnchorMode(side);
    flushQueuedCharacterPlayAnimation(side);
    return;
  }

  const token = ++characterLoadTokenBySide[side];
  let nextSprite = getPooledCharacterSprite(side, normalizedPreset);
  if (!nextSprite || !nextSprite.ready) {
    nextSprite = await ensurePooledCharacterSprite(side, normalizedPreset);
  }

  if (token !== characterLoadTokenBySide[side]) return;
  if (!nextSprite || !nextSprite.ready) {
    characterPendingPlayAnimationBySide[side] = "";
    return;
  }

  hideAllPooledCharacterSprites(side);
  if (!activatePooledCharacterSprite(side, normalizedPreset, nextSprite)) {
    characterPendingPlayAnimationBySide[side] = "";
    return;
  }

  updateCharacterAnchorMode(side);
  applyCharacterDisplayState(side, true);
  if (side === "opponent") {
    const remainingMs = getGhostEchoDadReturnRemainingMs();
    if (remainingMs > 0) {
      applyCharacterPositionOverride(side, {
        durationMs: remainingMs,
        easing: ghostEchoState.dadReturnEasing,
        instant: false
      });
    } else {
      applyCharacterPositionOverride(side, { instant: true });
    }
  } else {
    applyCharacterPositionOverride(side, { instant: true });
  }
  flushQueuedCharacterPlayAnimation(side);
  refreshCharacterPresentation();
}

function queueCharacterPresetLoad(side, preset) {
  const queue = getCharacterPresetLoadQueue(side);
  if (!queue) return;
  const normalizedPreset = normalizeName(preset);
  if (!normalizedPreset) return;

  queue.pendingPreset = normalizedPreset;
  if (queue.running) return;
  queue.running = true;

  (async () => {
    try {
      while (queue.pendingPreset) {
        const nextPreset = queue.pendingPreset;
        queue.pendingPreset = "";
        try {
          await performCharacterPresetLoad(side, nextPreset);
        } catch (err) {
          console.warn("character preset load queue failed:", side, nextPreset, err);
        }
      }
    } finally {
      queue.running = false;
      if (queue.pendingPreset) {
        queueCharacterPresetLoad(side, queue.pendingPreset);
      }
    }
  })();
}

function resetCharacterChangeTimelinePlayback() {
  characterChangeEventIndex = 0;
  characterChangeLastSongMs = 0;
  characterChartBatchApplying = false;
  characterRefreshDeferred = false;
  activeCharacterSide = null;
  characterSlotState.player.name = "";
  characterSlotState.player.preset = null;
  characterSlotState.opponent.name = "";
  characterSlotState.opponent.preset = null;
  characterSlotState.gf.name = "";
  characterSlotState.gf.preset = null;
  characterPendingPlayAnimationBySide.player = "";
  characterPendingPlayAnimationBySide.opponent = "";
  characterPendingPlayAnimationBySide.gf = "";
  characterPresetLoadQueueState.player.pendingPreset = "";
  characterPresetLoadQueueState.opponent.pendingPreset = "";
  characterPresetLoadQueueState.gf.pendingPreset = "";
  characterPositionOverrides.player.x = null;
  characterPositionOverrides.player.y = null;
  characterPositionOverrides.opponent.x = null;
  characterPositionOverrides.opponent.y = null;
  characterPositionOverrides.gf.x = null;
  characterPositionOverrides.gf.y = null;
  characterTransientOffsets.player.x = 0;
  characterTransientOffsets.player.y = 0;
  characterTransientOffsets.opponent.x = 0;
  characterTransientOffsets.opponent.y = 0;
  characterTransientOffsets.gf.x = 0;
  characterTransientOffsets.gf.y = 0;
  clearCharacterTimer("player");
  clearCharacterTimer("opponent");
  clearCharacterTimer("gf");
  characterDisplayState.player = { anim: "idle", loop: true, freeze: false };
  characterDisplayState.opponent = { anim: "idle", loop: true, freeze: false };
  characterDisplayState.gf = { anim: "idle", loop: true, freeze: false };
  setCharacterFloatEnabled(false);
  setCharacterBounceEnabled(false);
  hideMemeAppearSprite(true);
  hideWhiteScreenInstant();
  hideShowImageOverlay(false);
  hideShowImageFhudOverlay(true);
  clearJumpImages(true);
  hideMikuGhostSprite(false);
  clearGhostEchoSprites(true);
  resetStageBackgroundState();
  ghostEchoState.noGhostCount = 0;
  resetSceneCameraShake();
  setSceneCameraFollowPos(0, 0, { instant: true });
  applyCharacterPositionOverride("player", { instant: true });
  applyCharacterPositionOverride("opponent", { instant: true });
  applyCharacterPositionOverride("gf", { instant: true });
  applyCharacterLayout("center");
  setCharacterVisibility("player", false);
  setCharacterVisibility("opponent", false);
  setCharacterVisibility("gf", false);
}

function applyCharacterChangeEvent(evt) {
  const slot = normalizeName(evt?.slot);
  const side = sideFromChartSlot(slot);
  if (!side) return;
  const characterName = normalizeName(evt?.character);
  const preset = resolvePresetFromCharacterName(side, characterName);
  characterPendingPlayAnimationBySide[side] = "";

  characterSlotState[side].name = characterName;
  characterSlotState[side].preset = preset;

  if (side === "gf") {
    clearCharacterTimer("gf");
    characterDisplayState.gf = { anim: "idle", loop: true, freeze: false };
    if (preset) {
      queueCharacterPresetLoad("gf", preset);
      applyCharacterDisplayState("gf", true);
    }
    requestCharacterPresentationRefresh();
    return;
  }

  if (preset === "shadow") {
    activeCharacterSide = side;
  } else if (activeCharacterSide === side) {
    activeCharacterSide = null;
  }

  const isTimelineOnlyPreset =
    (side === "opponent" && isOpponentTimelineOnlyPreset(preset)) ||
    (side === "player" && isPlayerTimelineOnlyPreset(preset));
  if (isTimelineOnlyPreset) {
    clearCharacterTimer(side);
    const runtime = characterRuntime[side];
    if (runtime) {
      runtime.state = "idle";
      runtime.lane = null;
      resetHoldRuntime(runtime);
    }
    characterDisplayState[side] = { anim: "idle", loop: true, freeze: false };
  }

  if (preset) {
    queueCharacterPresetLoad(side, preset);
  }
  requestCharacterPresentationRefresh();
}

function applyCharacterPlayAnimationEvent(evt) {
  const side = sideFromChartSlot(normalizeName(evt?.slot));
  if (!side) return;

  const animName = normalizeName(evt?.animation);
  if (!animName) return;

  const result = tryPlayCharacterAnimationEvent(side, animName);
  if (result === "not_ready") {
    characterPendingPlayAnimationBySide[side] = animName;
  }
}

function tryPlayCharacterAnimationEvent(side, animName) {
  if (!side || !animName) return "invalid";
  if (!characterSlotState[side]?.preset) return "no_preset";

  const sprite = characterSprites[side];
  if (!sprite || !sprite.ready) return "not_ready";

  const resolvedAnim = sprite.resolveAnimName(animName);
  if (!resolvedAnim || resolvedAnim === "idle") return "invalid";

  clearCharacterTimer(side);
  const runtime = characterRuntime[side];
  if (!runtime) return "invalid";

  runtime.state = "sing";
  runtime.lane = null;
  resetHoldRuntime(runtime);
  characterDisplayState[side] = { anim: resolvedAnim, loop: false, freeze: false };
  applyCharacterDisplayState(side, true);

  const preset = normalizeName(characterSlotState[side]?.preset);
  const holdLastFrameAfterPlay = side === "player" && preset === "gfpico";
  if (holdLastFrameAfterPlay) {
    return "played";
  }

  const frameCount = getCharacterAnimationFrameCount(side, resolvedAnim);
  const durationMs = Math.max(1, Math.round(frameCount * CHARACTER_FRAME_MS));
  runtime.timer = setTimeout(() => {
    runtime.timer = null;
    runtime.state = "idle";
    runtime.lane = null;
    resetHoldRuntime(runtime);
    characterDisplayState[side] = { anim: "idle", loop: true, freeze: false };
    applyCharacterDisplayState(side, true);
  }, durationMs);

  return "played";
}

function flushQueuedCharacterPlayAnimation(side) {
  if (!side) return;
  const pendingAnim = normalizeName(characterPendingPlayAnimationBySide[side]);
  if (!pendingAnim) return;

  const result = tryPlayCharacterAnimationEvent(side, pendingAnim);
  if (result === "played" || result === "invalid" || result === "no_preset") {
    characterPendingPlayAnimationBySide[side] = "";
  }
}

function applyCharacterCameraFollowPosEvent(evt) {
  if (!evt) return;
  setSceneCameraFollowPos(evt.x, evt.y);
}

function applyMemeAppearEvent(evt) {
  if (!evt) return;
  if (evt.enabled) {
    showMemeAppearSprite();
  } else {
    hideMemeAppearSprite(true);
  }
}

function applyStageTestEvent(evt) {
  if (!evt) return;
  applyStageTestBackgroundEvent(evt);
}

function applyColorbgEvent(evt) {
  if (!evt) return;
  applyColorBackgroundEvent(evt);
}

function applyWhiteScreenEvent(evt) {
  if (!evt) return;
  if (evt.enabled) {
    showWhiteScreen(evt.speedSeconds);
    return;
  }
  hideWhiteScreenInstant();
}

function applyShowImageEvent(evt) {
  if (!evt) return;
  if (evt.enabled) {
    showShowImageOverlay(evt.imageName);
    return;
  }
  hideShowImageOverlay(false);
}

function applyShowImageFhudEvent(evt) {
  if (!evt) return;
  if (evt.enabled) {
    showShowImageFhudOverlay(evt.imageName);
    return;
  }
  hideShowImageFhudOverlay(true);
}

function applyJumpImageEvent(evt) {
  if (!evt) return;
  runJumpImageEvent(evt.imageName);
}

function applyGhostEchoChartEvent(evt) {
  applyGhostEchoEvent(evt);
}

function applyScreenShakeEvent(evt) {
  if (!evt) return;
  triggerSceneScreenShake(evt.durationSeconds, evt.intensity, evt.timeMs);
}

function applyCharacterMoveEvent(evt) {
  if (!evt) return;
  const side = sideFromChartSlot(normalizeName(evt.slot));
  if (!side) return;

  const nextX = Number(evt.x);
  const nextY = Number(evt.y);
  const durationSeconds = Number(evt.durationSeconds);
  const durationMs = Number.isFinite(durationSeconds)
    ? Math.max(0, durationSeconds * 1000)
    : undefined;
  if (Number.isFinite(nextX)) {
    characterPositionOverrides[side].x = nextX;
  }
  if (Number.isFinite(nextY)) {
    characterPositionOverrides[side].y = nextY;
  }
  applyCharacterPositionOverride(side, {
    durationMs,
    instant: durationMs === 0
  });
}

function applyCharacterChartEvent(evt) {
  if (!evt || !evt.type) return;
  if (evt.type === "change_character") {
    applyCharacterChangeEvent(evt);
    return;
  }
  if (evt.type === "play_animation") {
    applyCharacterPlayAnimationEvent(evt);
    return;
  }
  if (evt.type === "float_characters") {
    setCharacterFloatEnabled(evt.enabled);
    return;
  }
  if (evt.type === "bounce_characters") {
    const nowMs =
      typeof window.getSongTimeMs === "function"
        ? Number(window.getSongTimeMs())
        : 0;
    setCharacterBounceEnabled(evt.enabled, Number.isFinite(nowMs) ? nowMs : 0);
    return;
  }
  if (evt.type === "meme_appear") {
    applyMemeAppearEvent(evt);
    return;
  }
  if (evt.type === "stage_test") {
    applyStageTestEvent(evt);
    return;
  }
  if (evt.type === "colorbg") {
    applyColorbgEvent(evt);
    return;
  }
  if (evt.type === "white_screen") {
    applyWhiteScreenEvent(evt);
    return;
  }
  if (evt.type === "show_image") {
    applyShowImageEvent(evt);
    return;
  }
  if (evt.type === "show_image_fhud") {
    applyShowImageFhudEvent(evt);
    return;
  }
  if (evt.type === "jump_image") {
    applyJumpImageEvent(evt);
    return;
  }
  if (evt.type === "show_miku_ghost") {
    applyShowMikuGhostEvent(evt);
    return;
  }
  if (evt.type === "ghost_echo") {
    applyGhostEchoChartEvent(evt);
    return;
  }
  if (evt.type === "screen_shake") {
    applyScreenShakeEvent(evt);
    return;
  }
  if (evt.type === "camera_follow_pos") {
    applyCharacterCameraFollowPosEvent(evt);
    return;
  }
  if (evt.type === "move_characters") {
    applyCharacterMoveEvent(evt);
  }
}

function getCharacterEventTriggerMs(evt) {
  if (!evt) return 0;
  let triggerMs = Number(evt.timeMs);
  if (!Number.isFinite(triggerMs)) triggerMs = 0;

  // These events should stay on raw song timeline (not note judge offset).
  if (
    evt.type === "screen_shake" ||
    evt.type === "white_screen" ||
    evt.type === "show_miku_ghost"
  ) {
    return triggerMs;
  }

  // Keep character-side chart events aligned in the same timing domain.
  const judgeOffsetMs =
    typeof window.getJudgeOffsetMs === "function"
      ? Number(window.getJudgeOffsetMs())
      : 0;
  if (Number.isFinite(judgeOffsetMs)) {
    triggerMs += judgeOffsetMs;
  }

  return triggerMs;
}

function updateCharacterChangeByChart(nowMs) {
  if (!characterChangeEventsReady || characterChangeEvents.length === 0) return;

  if (nowMs + 1 < characterChangeLastSongMs) {
    resetCharacterChangeTimelinePlayback();
  }
  characterChangeLastSongMs = nowMs;

  characterChartBatchApplying = true;
  try {
    while (characterChangeEventIndex < characterChangeEvents.length) {
      const evt = characterChangeEvents[characterChangeEventIndex];
      if (!evt) break;
      const triggerMs = getCharacterEventTriggerMs(evt);
      if (triggerMs > nowMs) break;
      applyCharacterChartEvent(evt);
      characterChangeEventIndex += 1;
    }
  } finally {
    characterChartBatchApplying = false;
    if (characterRefreshDeferred) {
      characterRefreshDeferred = false;
      refreshCharacterPresentation();
    }
  }
}

async function loadCharacterChangeEvents() {
  if (characterChangeEventsLoadPromise) return characterChangeEventsLoadPromise;

  characterChangeEventsLoadPromise = (async () => {
    try {
      const res = await fetch(CHARACTER_CHART_PATH);
      const json = await res.json();
      characterChangeEvents = parseCharacterChartEvents(json);
      preloadStageBackgroundFromEvents(characterChangeEvents);
      preloadMikuGhostFromEvents(characterChangeEvents);
      preloadShowImageFromEvents(characterChangeEvents);
      preloadShowImageFhudFromEvents(characterChangeEvents);
      preloadJumpImageFromEvents(characterChangeEvents);
      await prewarmCharacterPresetsFromEvents(characterChangeEvents);
      characterChangeEventsReady = true;
      resetCharacterChangeTimelinePlayback();
    } catch (err) {
      characterChangeEvents = [];
      characterChangeEventsReady = false;
      console.warn("character change events load failed:", err);
    }
  })();

  return characterChangeEventsLoadPromise;
}

function loadCharacterAtlas(xmlPath) {
  if (characterAtlasPromises[xmlPath]) return characterAtlasPromises[xmlPath];

  characterAtlasPromises[xmlPath] = fetch(xmlPath)
    .then((res) => res.text())
    .then(async (text) => {
      const atlas = parseCharacterAtlas(text);
      if (!atlas) return null;
      const imageUrl = await resolveCharacterAtlasImageUrl(xmlPath, atlas.imagePath);
      return {
        imageUrl,
        groups: atlas.groups,
        imageReadyPromise: imageUrl ? preloadCharacterImage(imageUrl) : Promise.resolve(null)
      };
    })
    .catch((err) => {
      console.warn("character atlas load failed:", xmlPath, err);
      return null;
    });

  return characterAtlasPromises[xmlPath];
}

function preloadCharacterAtlases() {
  const paths = new Set();
  const jsonPaths = new Set();
  Object.values(CHARACTER_PRESETS).forEach((presetGroup) => {
    Object.values(presetGroup || {}).forEach((config) => {
      if (config?.atlasXmlPath) paths.add(config.atlasXmlPath);
      if (config?.applyCharacterJsonMeta && config?.characterJsonPath) {
        jsonPaths.add(config.characterJsonPath);
      }
    });
  });
  Object.values(GF_CHARACTER_PRESETS).forEach((config) => {
    if (config?.atlasXmlPath) paths.add(config.atlasXmlPath);
    if (config?.applyCharacterJsonMeta && config?.characterJsonPath) {
      jsonPaths.add(config.characterJsonPath);
    }
  });

  const atlasReadyPromises = Array.from(paths).map((xmlPath) =>
    loadCharacterAtlas(xmlPath).then((atlas) => {
      if (!atlas?.imageReadyPromise) return null;
      return atlas.imageReadyPromise;
    })
  );
  const metaReadyPromises = Array.from(jsonPaths).map((jsonPath) =>
    loadCharacterMeta(jsonPath)
  );

  return Promise.allSettled([...atlasReadyPromises, ...metaReadyPromises]);
}

function prepareCharacterAssetsForGameplay() {
  if (characterAssetsReadyPromise) return characterAssetsReadyPromise;

  characterAssetsReadyPromise = Promise.allSettled([
    preloadCharacterAtlases(),
    preloadCharacterRuntimeCaches(),
    loadCharacterChangeEvents()
  ]).catch((err) => {
    console.warn("character assets preload failed:", err);
  });

  return characterAssetsReadyPromise;
}

class CharacterSprite {
  constructor(side, config, hostEl) {
    this.side = side;
    this.config = config;
    this.hostEl = hostEl;
    this.animations = {};
    this.currentAnim = "";
    this.currentFrames = [];
    this.currentFrameIndex = 0;
    this.loop = false;
    this.freezeOnFirstFrame = false;
    this.frameDurationMs = CHARACTER_FRAME_MS;
    this.lastFrameTime = 0;
    this.ready = false;
    this.meta = {
      scale: 1,
      noAntialiasing: false,
      offsetsByAnim: {}
    };
    this.appliedFrameStyle = {
      rootWidth: "",
      rootHeight: "",
      frameWidth: "",
      frameHeight: "",
      left: "",
      top: "",
      backgroundPosition: ""
    };
    this.appliedRenderOffset = {
      x: null,
      y: null
    };

    this.rootEl = document.createElement("div");
    this.rootEl.className = `character character--${side}`;

    this.frameEl = document.createElement("div");
    this.frameEl.className = "character-frame";

    this.rootEl.appendChild(this.frameEl);
    this.hostEl.appendChild(this.rootEl);
  }

  async load(presetForScale = null) {
    this.ready = false;
    const useJsonScale = Boolean(this.config?.applyCharacterJsonScale);
    const scalePreset = presetForScale || characterPresetBySide[this.side];
    const presetScale = getCharacterPresetScaleMultiplier(
      this.side,
      scalePreset
    );
    const runtime = await buildCharacterConfigRuntimeCache(this.config);
    if (!runtime) {
      this.rootEl.style.display = "none";
      return false;
    }

    this.meta = cloneCharacterMeta(runtime.meta);
    const metaScale = Number(this.meta.scale);
    const baseScale =
      useJsonScale && Number.isFinite(metaScale) && metaScale > 0
        ? metaScale
        : 1;
    const appliedScale = baseScale * presetScale;
    this.rootEl.style.setProperty(
      "--character-extra-scale",
      `${appliedScale}`
    );
    this.frameEl.style.imageRendering = this.meta.noAntialiasing ? "pixelated" : "";
    this.frameEl.style.backgroundImage = runtime.imageUrl ? `url('${runtime.imageUrl}')` : "";
    this.animations = runtime.animations || {};

    if (!this.animations.idle) {
      this.rootEl.style.display = "none";
      return false;
    }

    this.ready = true;
    this.play("idle", { loop: true, restart: true });
    return true;
  }

  setConfig(nextConfig, presetForScale = null) {
    if (!nextConfig) return Promise.resolve(false);
    this.config = nextConfig;
    return this.load(presetForScale);
  }

  resolveAnimName(animName) {
    if (this.animations[animName]) return animName;

    const lane = String(animName || "").split("-")[1] || "left";
    const singLane = `sing-${lane}`;

    if (String(animName).startsWith("hold-") && this.animations[singLane]) {
      return singLane;
    }
    if (String(animName).startsWith("miss-") && this.animations[singLane]) {
      return singLane;
    }

    if (this.animations.idle) return "idle";
    return "";
  }

  getCurrentAnimOffset() {
    const offsets = this.meta?.offsetsByAnim || {};
    const current = offsets[this.currentAnim];
    if (current) return current;

    if (String(this.currentAnim || "").startsWith("miss-")) {
      const lane = String(this.currentAnim).split("-")[1] || "";
      const fallback = offsets[`sing-${lane}`];
      if (fallback) return fallback;
    }

    return { x: 0, y: 0 };
  }

  applyFrame(frame) {
    if (!frame) return;

    const frameWidth = frame.frameWidth || frame.w;
    const frameHeight = frame.frameHeight || frame.h;
    const rootWidth = `${frameWidth}px`;
    const rootHeight = `${frameHeight}px`;
    const frameWidthPx = `${frame.w}px`;
    const frameHeightPx = `${frame.h}px`;
    const leftPx = `${-(frame.frameX || 0)}px`;
    const topPx = `${-(frame.frameY || 0)}px`;
    const bgPos = `${-frame.x}px ${-frame.y}px`;

    if (this.appliedFrameStyle.rootWidth !== rootWidth) {
      this.rootEl.style.width = rootWidth;
      this.appliedFrameStyle.rootWidth = rootWidth;
    }
    if (this.appliedFrameStyle.rootHeight !== rootHeight) {
      this.rootEl.style.height = rootHeight;
      this.appliedFrameStyle.rootHeight = rootHeight;
    }
    if (this.appliedFrameStyle.frameWidth !== frameWidthPx) {
      this.frameEl.style.width = frameWidthPx;
      this.appliedFrameStyle.frameWidth = frameWidthPx;
    }
    if (this.appliedFrameStyle.frameHeight !== frameHeightPx) {
      this.frameEl.style.height = frameHeightPx;
      this.appliedFrameStyle.frameHeight = frameHeightPx;
    }
    if (this.appliedFrameStyle.left !== leftPx) {
      this.frameEl.style.left = leftPx;
      this.appliedFrameStyle.left = leftPx;
    }
    if (this.appliedFrameStyle.top !== topPx) {
      this.frameEl.style.top = topPx;
      this.appliedFrameStyle.top = topPx;
    }
    if (this.appliedFrameStyle.backgroundPosition !== bgPos) {
      this.frameEl.style.backgroundPosition = bgPos;
      this.appliedFrameStyle.backgroundPosition = bgPos;
    }
  }

  play(animName, options = {}) {
    if (!this.ready) return;

    const resolvedAnim = this.resolveAnimName(animName);
    if (!resolvedAnim) return;

    const frames = this.animations[resolvedAnim];
    if (!frames || frames.length === 0) return;

    const loop = Boolean(options.loop);
    const restart = Boolean(options.restart);
    const freezeOnFirstFrame = Boolean(options.freezeOnFirstFrame);
    const forceLastFrame = Boolean(options.forceLastFrame);
    const frameDurationRaw = Number(options.frameDurationMs);
    const frameDurationMs =
      Number.isFinite(frameDurationRaw) && frameDurationRaw > 0
        ? frameDurationRaw
        : CHARACTER_FRAME_MS;
    const sameAnim = this.currentAnim === resolvedAnim && this.loop === loop;

    if (sameAnim && !restart && !forceLastFrame) return;

    this.currentAnim = resolvedAnim;
    this.currentFrames = frames;
    this.loop = loop;
    this.freezeOnFirstFrame = freezeOnFirstFrame;
    this.frameDurationMs = frameDurationMs;
    this.lastFrameTime = performance.now();

    if (forceLastFrame) {
      this.currentFrameIndex = this.currentFrames.length - 1;
      this.loop = false;
      this.freezeOnFirstFrame = false;
      this.applyFrame(this.currentFrames[this.currentFrameIndex]);
      return;
    }

    this.currentFrameIndex = 0;
    this.applyFrame(this.currentFrames[0]);
  }

  tick(now) {
    if (!this.ready) return;
    if (!this.currentFrames || this.currentFrames.length <= 1) return;
    if (this.freezeOnFirstFrame) return;

    const frameMs =
      Number.isFinite(Number(this.frameDurationMs)) && Number(this.frameDurationMs) > 0
        ? Number(this.frameDurationMs)
        : CHARACTER_FRAME_MS;
    const elapsed = now - this.lastFrameTime;
    if (elapsed < frameMs) return;

    const steps = Math.floor(elapsed / frameMs);
    this.lastFrameTime += steps * frameMs;

    let nextIndex = this.currentFrameIndex + steps;
    if (this.loop) {
      nextIndex %= this.currentFrames.length;
    } else if (nextIndex >= this.currentFrames.length) {
      nextIndex = this.currentFrames.length - 1;
    }

    if (nextIndex !== this.currentFrameIndex) {
      this.currentFrameIndex = nextIndex;
      this.applyFrame(this.currentFrames[this.currentFrameIndex]);
    }
  }
}

function ensureCharacterLayer() {
  const sceneLayerEl = ensureSceneCameraLayer();
  if (!sceneLayerEl) return null;

  let layerEl = document.getElementById("character-layer");
  if (!layerEl) {
    layerEl = document.createElement("div");
    layerEl.id = "character-layer";
  }
  if (layerEl.parentElement !== sceneLayerEl) {
    sceneLayerEl.appendChild(layerEl);
  }

  return layerEl;
}

function tickCharacterSprites(now) {
  const player = characterSprites.player;
  const opponent = characterSprites.opponent;
  const gf = characterSprites.gf;
  const nowSongMs =
    typeof window.getSongTimeMs === "function"
      ? window.getSongTimeMs()
      : (() => {
          const songEl = document.getElementById("song");
          return songEl ? songEl.currentTime * 1000 : 0;
        })();

  if (player) player.tick(now);
  if (opponent) opponent.tick(now);
  if (gf) gf.tick(now);
  updateSceneCameraShake(nowSongMs, now);
  updateMikuGhostSprite(now);
  updateGhostEchoSprites();
  updateCharacterBounce(nowSongMs);

  characterRenderRafId = requestAnimationFrame(tickCharacterSprites);
}

function updateCharacterChartEventsFromTimeline(nowMs) {
  const value = Number(nowMs);
  updateCharacterChangeByChart(Number.isFinite(value) ? value : 0);
}

function resetCharacterChartStateForRetry() {
  // Cancel pending async preset loads from old timeline before full visual reset.
  characterLoadTokenBySide.player += 1;
  characterLoadTokenBySide.opponent += 1;
  characterLoadTokenBySide.gf += 1;
  characterPresetLoadQueueState.player.pendingPreset = "";
  characterPresetLoadQueueState.opponent.pendingPreset = "";
  characterPresetLoadQueueState.gf.pendingPreset = "";
  resetCharacterChangeTimelinePlayback();
}

window.updateCharacterChartEvents = updateCharacterChartEventsFromTimeline;
window.prepareCharacterAssetsForGameplay = prepareCharacterAssetsForGameplay;
window.prewarmCharacterPresetSwitchesForGameplay = prewarmCharacterPresetSwitchesForGameplay;
window.resetCharacterChartStateForRetry = resetCharacterChartStateForRetry;
window.setMikuDownOffsetY = (value) => {
  const next = Number(value);
  MIKU_DOWN_EXTRA_OFFSET_Y = Number.isFinite(next) ? next : 0;
  applyCharacterRenderOffset("opponent");
  return MIKU_DOWN_EXTRA_OFFSET_Y;
};
window.setTetohappyOffsetY = (value) => {
  const next = Number(value);
  const y = Number.isFinite(next) ? next : 0;
  if (!CHARACTER_PRESET_OFFSETS.opponent) {
    CHARACTER_PRESET_OFFSETS.opponent = {};
  }
  if (!CHARACTER_PRESET_OFFSETS.opponent.tetohappy) {
    CHARACTER_PRESET_OFFSETS.opponent.tetohappy = { x: 0, y: 0 };
  }
  CHARACTER_PRESET_OFFSETS.opponent.tetohappy.y = y;
  if (characterSlotState.opponent?.preset === "tetohappy") {
    applyCharacterRenderOffset("opponent");
  }
  return CHARACTER_PRESET_OFFSETS.opponent.tetohappy.y;
};
window.setGfpicoOffsetY = (value) => {
  const next = Number(value);
  const y = Number.isFinite(next) ? next : 0;
  if (!CHARACTER_PRESET_OFFSETS.player) {
    CHARACTER_PRESET_OFFSETS.player = {};
  }
  if (!CHARACTER_PRESET_OFFSETS.player.gfpico) {
    CHARACTER_PRESET_OFFSETS.player.gfpico = { x: 0, y: 0 };
  }
  CHARACTER_PRESET_OFFSETS.player.gfpico.y = y;
  if (characterSlotState.player?.preset === "gfpico") {
    applyCharacterRenderOffset("player");
  }
  return CHARACTER_PRESET_OFFSETS.player.gfpico.y;
};
window.setHoldFinalRunSeconds = (value) => {
  const next = Number(value);
  HOLD_FINAL_RUN_SECONDS = Number.isFinite(next) ? Math.max(0, next) : 0.15;
  return HOLD_FINAL_RUN_SECONDS;
};

function startCharacterRenderLoop() {
  if (characterRenderRafId) cancelAnimationFrame(characterRenderRafId);
  characterRenderRafId = requestAnimationFrame(tickCharacterSprites);
}

function setCharacterVisibility(side, visible) {
  const sprite = characterSprites[side];
  if (!sprite || !sprite.rootEl) return;
  sprite.rootEl.style.display = visible ? "" : "none";
}

function showOnlyCharacterSide(side) {
  setCharacterVisibility("player", side === "player");
  setCharacterVisibility("opponent", side === "opponent");
}

function applyCharacterDisplayState(side, forceRestart = false) {
  const sprite = characterSprites[side];
  const state = characterDisplayState[side];
  if (!sprite || !state) return;

  const frameDurationRaw = Number(state.frameDurationMs);
  const frameDurationMs =
    Number.isFinite(frameDurationRaw) && frameDurationRaw > 0
      ? frameDurationRaw
      : undefined;

  sprite.play(state.anim, {
    loop: state.loop,
    restart: forceRestart || state.anim !== "idle",
    freezeOnFirstFrame: Boolean(state.freeze),
    frameDurationMs,
    forceLastFrame: Boolean(state.forceLastFrame)
  });
  applyCharacterRenderOffset(side);
  if (side === "gf") {
    syncGfIdleWordVisibility();
  }
}

function syncGfIdleWordVisibility() {
  const gfSprite = characterSprites.gf;
  if (!gfSprite || !gfSprite.rootEl) return;
  const shouldShow = characterSlotState.gf.preset === "bgthing";
  gfSprite.rootEl.classList.toggle("character--gf-idle-word", Boolean(shouldShow));
}

function getCharacterAnimationFrameCount(side, animName) {
  const sprite = characterSprites[side];
  if (!sprite || !sprite.ready) return 1;
  const resolved = sprite.resolveAnimName(animName);
  const frames = resolved ? sprite.animations[resolved] : null;
  if (!frames || frames.length <= 0) return 1;
  return frames.length;
}

function getCharacterSettleDelayMs(side, animName) {
  return CHARACTER_IDLE_DELAY_MS;
}

function getHoldRemainingMs(side, extra = {}) {
  let remainingMs = 0;
  const note = extra?.note;
  if (note && typeof note === "object") {
    const startMs = Number(note.time);
    const sustainMs = Number(note.sustain);
    if (Number.isFinite(startMs) && Number.isFinite(sustainMs)) {
      const judgeOffsetMs =
        side === "player" && typeof window.getJudgeOffsetMs === "function"
          ? Number(window.getJudgeOffsetMs()) || 0
          : 0;
      const holdEndMs = startMs + sustainMs + judgeOffsetMs;
      const nowSongMs =
        typeof window.getSongTimeMs === "function"
          ? Number(window.getSongTimeMs()) || 0
          : 0;
      remainingMs = holdEndMs - nowSongMs;
    }
  }

  if (!Number.isFinite(remainingMs) || remainingMs <= 0) {
    remainingMs = Number(extra?.note?.sustain);
  }

  return Number.isFinite(remainingMs) ? remainingMs : 0;
}

function shouldUseMikuHoldTiming(side) {
  const normalizedSide = normalizeName(side);
  if (normalizedSide !== "player" && normalizedSide !== "opponent") {
    return false;
  }
}

function getHoldFinalRunPlan(side, holdAnim, extra = {}) {
  const frameCount = Math.max(1, getCharacterAnimationFrameCount(side, holdAnim));
  if (frameCount <= 1) {
    return { startDelayMs: 0, frameDurationMs: CHARACTER_FRAME_MS };
  }

  const remainingMs = getHoldRemainingMs(side, extra);
  const travelFrames = Math.max(1, frameCount - 1);
  const normalTravelMs = travelFrames * CHARACTER_FRAME_MS;

  if (!Number.isFinite(remainingMs) || remainingMs <= 0) {
    return null;
  }

  const finalRunTargetMs = Math.max(
    1,
    (Number(HOLD_FINAL_RUN_SECONDS) || 0) * 1000
  );

  // If hold is shorter than configured run-window, keep first frame until end.
  // Non-miku hold_end will force the last frame.
  if (remainingMs <= finalRunTargetMs) {
    return {
      startDelayMs: Math.max(0, remainingMs),
      frameDurationMs: CHARACTER_FRAME_MS
    };
  }

  // Keep first frame until X seconds before hold end, then run to the last frame.
  const finalRunMs = Math.max(1, Math.min(normalTravelMs, finalRunTargetMs));
  return {
    startDelayMs: Math.max(0, remainingMs - finalRunMs),
    frameDurationMs: Math.max(1, finalRunMs / travelFrames)
  };
}

function scheduleHoldFinalRun(side, lane, holdAnim, extra = {}) {
  const runtime = characterRuntime[side];
  if (!runtime) return;

  if (runtime.holdAdvanceTimer) {
    clearTimeout(runtime.holdAdvanceTimer);
    runtime.holdAdvanceTimer = null;
  }

  const plan = getHoldFinalRunPlan(side, holdAnim, extra);
  if (!plan) return;
  const delay = Math.max(0, Number(plan.startDelayMs) || 0);
  runtime.holdAdvancePerf = performance.now() + delay;

  runtime.holdAdvanceTimer = setTimeout(() => {
    runtime.holdAdvanceTimer = null;
    runtime.holdAdvancePerf = 0;
    if (runtime.state !== "hold") return;

    const activeLane = runtime.lane == null ? lane : runtime.lane;
    const laneAnim = CHARACTER_LANE_TO_ANIM[activeLane] || "left";
    setCharacterVisual(side, "hold", activeLane, {
      ...extra,
      lane: activeLane,
      laneAnim,
      anim: holdAnim,
      holdFreeze: false,
      holdFrameDurationMs: plan.frameDurationMs
    });
  }, delay);
}

async function initializeCharacterSprites() {
  const layerEl = ensureCharacterLayer();
  if (!layerEl) return;

  const initialPlayerPreset = characterPresetBySide.player || "shadow";
  const initialOpponentPreset = characterPresetBySide.opponent || "shadow";
  const initialGfPreset = characterPresetBySide.gf || "bgthing";
  const initialPlayerConfig =
    getPresetConfig("player", initialPlayerPreset) || CHARACTER_PRESETS.shadow.player;
  const initialOpponentConfig =
    getPresetConfig("opponent", initialOpponentPreset) || CHARACTER_PRESETS.shadow.opponent;
  const initialGfConfig =
    getPresetConfig("gf", initialGfPreset) || GF_CHARACTER_PRESETS.bgthing;

  characterSprites.player = new CharacterSprite("player", initialPlayerConfig, layerEl);
  characterSprites.opponent = new CharacterSprite("opponent", initialOpponentConfig, layerEl);
  characterSprites.gf = new CharacterSprite("gf", initialGfConfig, layerEl);
  setCharacterVisibility("gf", false);

  await Promise.all([
    characterSprites.player.load(initialPlayerPreset),
    characterSprites.opponent.load(initialOpponentPreset),
    characterSprites.gf.load(initialGfPreset)
  ]);
  cacheCharacterSprite("player", initialPlayerPreset, characterSprites.player);
  cacheCharacterSprite("opponent", initialOpponentPreset, characterSprites.opponent);
  cacheCharacterSprite("gf", initialGfPreset, characterSprites.gf);

  updateCharacterAnchorMode("player");
  updateCharacterAnchorMode("opponent");
  updateCharacterAnchorMode("gf");
  applyCharacterDisplayState("player", true);
  applyCharacterDisplayState("opponent", true);
  applyCharacterDisplayState("gf", true);
  resetCharacterChangeTimelinePlayback();
  startCharacterRenderLoop();
}

function resolveAnimFromVisualDetail(detail = {}) {
  if (typeof detail.anim === "string" && detail.anim) return detail.anim;

  if (detail.state === "idle") return "idle";

  const laneAnim = CHARACTER_LANE_TO_ANIM[detail.lane] || "left";
  if (detail.state === "miss") return `miss-${laneAnim}`;
  if (detail.state === "hold") return `hold-${laneAnim}`;
  return `sing-${laneAnim}`;
}

function handleCharacterVisualEvent(detail = {}) {
  const side =
    detail.side === "opponent"
      ? "opponent"
      : detail.side === "gf"
        ? "gf"
        : "player";
  const anim = resolveAnimFromVisualDetail(detail);
  const freeze = detail.state === "hold" && detail.holdFreeze !== false;
  const loop = anim === "idle";
  const frameDurationRaw = Number(detail.holdFrameDurationMs);
  const frameDurationMs =
    Number.isFinite(frameDurationRaw) && frameDurationRaw > 0
      ? frameDurationRaw
      : undefined;
  const forceLastFrame = Boolean(detail.forceLastFrame);

  characterDisplayState[side] = { anim, loop, freeze, frameDurationMs, forceLastFrame };
  applyCharacterDisplayState(side);
}

function clearCharacterTimer(side) {
  const runtime = characterRuntime[side];
  if (!runtime) return;
  if (runtime.timer) {
    clearTimeout(runtime.timer);
    runtime.timer = null;
  }
}

function resetHoldRuntime(runtime) {
  if (!runtime) return;
  if (runtime.holdAdvanceTimer) {
    clearTimeout(runtime.holdAdvanceTimer);
    runtime.holdAdvanceTimer = null;
  }
  runtime.holdAdvancePerf = 0;
  runtime.holdEnded = false;
  runtime.releaseRequested = false;
  runtime.holdReadyPerf = 0;
}

function setCharacterVisual(side, state, lane = null, extra = {}) {
  const game = document.getElementById("game");
  if (game) {
    const sidePrefix =
      side === "player"
        ? "player"
        : side === "opponent"
          ? "opponent"
          : null;
    if (sidePrefix) {
      game.dataset[`${sidePrefix}State`] = state;
      game.dataset[`${sidePrefix}Lane`] = lane == null ? "" : String(lane);
      if (extra.anim) game.dataset[`${sidePrefix}Anim`] = String(extra.anim);
    }
  }

  document.dispatchEvent(new CustomEvent("character-note-event", {
    detail: { side, state, lane, ...extra }
  }));
}

function queueCharacterIdle(side, delayMs = CHARACTER_IDLE_DELAY_MS) {
  clearCharacterTimer(side);
  const runtime = characterRuntime[side];
  if (!runtime) return;
  const safeDelay = Math.max(0, Number(delayMs) || 0);
  runtime.timer = setTimeout(() => {
    runtime.state = "idle";
    runtime.lane = null;
    resetHoldRuntime(runtime);
    setCharacterVisual(side, "idle", null, { anim: "idle" });
  }, safeDelay);
}

function queueCharacterIdleAt(side, perfTimeMs) {
  const now = performance.now();
  const delay = Math.max(0, (Number(perfTimeMs) || now) - now);
  if (delay <= 0) {
    clearCharacterTimer(side);
    const runtime = characterRuntime[side];
    if (!runtime) return;
    runtime.state = "idle";
    runtime.lane = null;
    resetHoldRuntime(runtime);
    setCharacterVisual(side, "idle", null, { anim: "idle" });
    return;
  }
  queueCharacterIdle(side, delay);
}

function characterOnNoteEvent(side, lane, type, extra = {}) {
  const runtime = characterRuntime[side];
  if (!runtime) return;

  if (side === "player" && isPlayerTimelineOnlyPreset(characterSlotState.player.preset)) {
    return;
  }
  // Timeline-driven opponent presets should not be overridden by note sing/miss switching.
  if (side === "opponent" && isOpponentTimelineOnlyPreset(characterSlotState.opponent.preset)) {
    return;
  }

  const laneAnim = CHARACTER_LANE_TO_ANIM[lane] || "left";
  const base = { lane, laneAnim, ...extra };
  const runtimeLane = runtime.lane;
  const laneMatchesRuntime =
    runtimeLane == null || lane == null || runtimeLane === lane;
  const isActiveHoldEvent = runtime.state === "hold" && laneMatchesRuntime;

  if (type === "tap") {
    clearCharacterTimer(side);
    runtime.state = "sing";
    runtime.lane = lane;
    resetHoldRuntime(runtime);
    setCharacterVisual(side, "sing", lane, { ...base, anim: `sing-${laneAnim}` });
    queueCharacterIdle(side, getCharacterSettleDelayMs(side, `sing-${laneAnim}`));
    return;
  }

  if (type === "hold_start") {
    clearCharacterTimer(side);
    runtime.state = "hold";
    runtime.lane = lane;
    resetHoldRuntime(runtime);
    const holdAnim = `hold-${laneAnim}`;
    const useMikuTiming = shouldUseMikuHoldTiming(side);
    setCharacterVisual(side, "hold", lane, {
      ...base,
      anim: holdAnim,
      holdFreeze: true
    });
    if (!useMikuTiming) {
      scheduleHoldFinalRun(side, lane, holdAnim, extra);
    }
    return;
  }

  if (type === "hold_release") {
    if (!isActiveHoldEvent) return;

    runtime.releaseRequested = true;
    if (runtime.holdEnded) {
      queueCharacterIdleAt(side, runtime.holdReadyPerf || performance.now());
      return;
    }
    clearCharacterTimer(side);
    runtime.state = "idle";
    runtime.lane = null;
    resetHoldRuntime(runtime);
    setCharacterVisual(side, "idle", null, { ...extra, anim: "idle" });
    return;
  }

  if (type === "hold_end") {
    if (!isActiveHoldEvent) return;

    if (
      side === "player" &&
      extra?.note &&
      extra.note.holding === false &&
      extra.note.released
    ) {
      // Released before sustain end: keep idle, don't replay hold anim.
      return;
    }

    const releaseLane = runtime.lane == null ? lane : runtime.lane;
    const releaseLaneAnim = CHARACTER_LANE_TO_ANIM[releaseLane] || "left";
    const holdAnim = `hold-${releaseLaneAnim}`;
    const useMikuTiming = shouldUseMikuHoldTiming(side);
    if (runtime.holdAdvanceTimer) {
      clearTimeout(runtime.holdAdvanceTimer);
      runtime.holdAdvanceTimer = null;
      runtime.holdAdvancePerf = 0;
    }
    runtime.holdEnded = true;
    runtime.holdReadyPerf = performance.now() + getCharacterSettleDelayMs(side, holdAnim);
    if (useMikuTiming) {
      setCharacterVisual(side, "hold", releaseLane, {
        ...extra,
        lane: releaseLane,
        laneAnim: releaseLaneAnim,
        anim: holdAnim,
        holdFreeze: false
      });
    } else {
      setCharacterVisual(side, "hold", releaseLane, {
        ...extra,
        lane: releaseLane,
        laneAnim: releaseLaneAnim,
        anim: holdAnim,
        holdFreeze: false,
        forceLastFrame: true
      });
    }

    // Opponent has no keyup, so return to idle automatically.
    if (side !== "player" || runtime.releaseRequested) {
      queueCharacterIdleAt(side, runtime.holdReadyPerf);
    }
    return;
  }

  if (type === "miss") {
    clearCharacterTimer(side);
    runtime.state = "miss";
    runtime.lane = lane;
    resetHoldRuntime(runtime);
    setCharacterVisual(side, "miss", lane, { ...base, anim: `miss-${laneAnim}` });
    queueCharacterIdle(side, getCharacterSettleDelayMs(side, `miss-${laneAnim}`));
  }
}

document.addEventListener("character-note-event", (event) => {
  handleCharacterVisualEvent(event.detail || {});
});

document.addEventListener("DOMContentLoaded", () => {
  applyCharacterLayout("center");
  resetStageBackgroundState();
  preloadMemeAppearImage();
  ensureWhiteScreenOverlay();
  hideWhiteScreenInstant();
  ensureShowImageOverlay();
  hideShowImageOverlay(false);
  hideMikuGhostSprite(false);
  prepareCharacterAssetsForGameplay();
  initializeCharacterSprites();
  prewarmCharacterPresetSwitchesForGameplay();
});
