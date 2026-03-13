const CHARACTER_LANE_TO_ANIM = ["left", "down", "up", "right"];
const CHARACTER_IDLE_DELAY_MS = 380;
const CHARACTER_FRAME_MS = 1000 / 24;
let HOLD_FINAL_RUN_SECONDS = 1 / 60;

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
      applyCharacterJsonAnimOffsets: true,
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
      applyCharacterJsonAnimOffsets: true,
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
      applyCharacterJsonAnimOffsets: true,
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
      applyCharacterJsonAnimOffsets: true,
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
      applyCharacterJsonAnimOffsets: true,
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
      applyCharacterJsonAnimOffsets: true,
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
      applyCharacterJsonAnimOffsets: true,
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
      applyCharacterJsonAnimOffsets: true,
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
      applyCharacterJsonAnimOffsets: true,
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
      applyCharacterJsonAnimOffsets: true,
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
      applyCharacterJsonAnimOffsets: true,
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
      applyCharacterJsonAnimOffsets: true,
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
      applyCharacterJsonAnimOffsets: true,
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
const OPPONENT_MIKU_WARM_POOL_PRESETS = new Set([
  "animation",
  "aishite1",
  "mikuaishite2",
  "mikuaishi3",
  "miku_motto",
  "miku_kuroshi",
  "miku_hodo",
  "miku_miiii",
  "miku",
  "tetohappy"
]);
const OPPONENT_STARTUP_PREWARM_PRESETS = Array.from(OPPONENT_MIKU_WARM_POOL_PRESETS);
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
    // gfpico: align with bf animation baseline under center-anchor renderer.
    gfpico: { x: 73, y: 134 },
    bf_animation: { x: 0, y: -34 }
  },
  opponent: {
    // Teto Animation atlas has a much taller frame box; shift up to keep stage Y consistent.
    animation: { x: 275, y: -145 },
    // Tetohappy: tune Y here (positive=down, negative=up).
    tetohappy: { x: 0, y: 60 },
    // Miku variants: per-skin vertical normalization (same dad anchor).
    aishite1: { x: 20, y: 50 },
    mikuaishite2: { x: 20, y: 50 },
    mikuaishi3: { x: 0, y: 54 },
    miku_motto: { x: -20, y: 54 },
    miku_kuroshi: { x: 0, y: 50 },
    miku_hodo: { x: 0, y: 50 },
    miku_miiii: { x: 0, y: 65 },
    miku: { x: 0, y: 90 }
  }
};

const CHARACTER_PRESET_SCALE_MULTIPLIERS = {
  opponent: {
    // Miku variants: per-skin size normalization.
    aishite1: 1.12,
    mikuaishite2: 1.12,
    mikuaishi3: 1.12,
    miku_motto: 1.12,
    miku_kuroshi: 1.12,
    miku_hodo: 1.12,
    miku_miiii: 1.12,
    miku: 1.12
  }
};

const CHARACTER_JSON_ANIM_OFFSET_MULTIPLIERS = {
  player: {
    estandar: 0.55
  },
  opponent: {
    estandar: 0.68
  }
};

// Fine-tune only Miku lane Y offsets (px). + = down, - = up.
let MIKU_DOWN_EXTRA_OFFSET_Y = 0;
let MIKU_LEFT_EXTRA_OFFSET_Y = 0;

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
    holdAdvanceStarted: false,
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
    holdAdvanceStarted: false,
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
    holdAdvanceStarted: false,
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
const characterSlotLastKnownPx = {
  player: { x: Number.NaN, y: Number.NaN },
  opponent: { x: Number.NaN, y: Number.NaN },
  gf: { x: Number.NaN, y: Number.NaN }
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
const characterImageRenderUrlBySrc = {};
const characterImageSourceSizeBySrc = {};
const characterImageBlobUrlBySrc = {};
const MIKU_IMAGE_RENDER_MAX_DIMENSION = 3072;
// Even when optional downscale is off, clamp extremely large Miku-family atlases.
// 5K-6K textures can cause switch-time stalls in browser renderers.
const MIKU_IMAGE_HARD_LIMIT_DIMENSION = 4096;
let CHARACTER_ATLAS_DOWNSCALE_ENABLED = false;
const MIKU_IMAGE_PATH_RE =
  /(?:^|\/)(?:aishite 1|mikuaishi2|mikuaishite3|motto motto|kuroshi|hodo|miiii|miku)\.png$/i;
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
const characterPositionTweenState = {
  player: {
    active: false,
    startPerf: 0,
    endPerf: 0,
    easing: "",
    toX: Number.NaN,
    toY: Number.NaN
  },
  opponent: {
    active: false,
    startPerf: 0,
    endPerf: 0,
    easing: "",
    toX: Number.NaN,
    toY: Number.NaN
  },
  gf: {
    active: false,
    startPerf: 0,
    endPerf: 0,
    easing: "",
    toX: Number.NaN,
    toY: Number.NaN
  }
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
const characterSkipIdleApplyOnSwitchBySide = {
  player: false,
  opponent: false,
  gf: false
};
const characterSkipPositionApplyOnSwitchBySide = {
  player: false,
  opponent: false,
  gf: false
};
const characterBridgePositionOnSwitchBySide = {
  player: false,
  opponent: false,
  gf: false
};
let characterRenderRafId = 0;
let activeCharacterSide = null;
const CHARACTER_CHART_PATH = "data/akage/akage-chart.json";
const EARLY_SWITCH_PREWARM_WINDOW_MS = 15000;
const EARLY_SWITCH_PREWARM_MAX_PER_SIDE = 4;
const CHARACTER_RUNTIME_PREWARM_WINDOW_MS = 12000;
const OPPONENT_PRESET_LOOKAHEAD_PREWARM_MS = 12000;
const OPPONENT_PRESET_LOOKAHEAD_MAX = 5;
const OPPONENT_WARM_POOL_MAX_SPRITES = OPPONENT_MIKU_WARM_POOL_PRESETS.size;
const CHARACTER_PRESENTATION_PREWARM_NUDGE_PX = 1;
let characterChangeEvents = [];
let characterChangeEventsReady = false;
let characterChangeEventIndex = 0;
let characterChangeLastSongMs = 0;
let characterFloatEnabled = false;
let characterChartBatchApplying = false;
let deferredOpponentPresetLoad = "";
let deferredOpponentPresetLoadRafId = 0;
let characterRefreshDeferred = false;
let characterAssetsReadyPromise = null;
let characterChangeEventsLoadPromise = null;
let characterPresentationPrewarmed = false;
let characterPresentationPrewarmPromise = null;
const characterSpriteActivatedOnce = new WeakSet();
const characterActivationSerialBySide = {
  player: 0,
  opponent: 0,
  gf: 0
};
const characterSlotEls = {
  player: null,
  opponent: null,
  gf: null
};
const opponentWarmPresetUseByKey = new Map();
let opponentWarmPresetUseTick = 0;
let opponentPresetLookaheadPrewarmRunning = false;
const opponentPresetLookaheadPrewarmQueue = [];
const opponentPresetLookaheadPrewarmQueuedKeys = new Set();
let opponentPlayAnimationsByPreset = new Map();
const sceneCameraFollow = { x: 0, y: 0 };
const SCENE_CAMERA_MOVE_MS = 1000;
// Fast at start, then decelerates (negative acceleration feel).
const SCENE_CAMERA_EASING = "cubic-bezier(0.16, 1, 0.3, 1)";
const MOVE_CHARACTERS_DEFAULT_DURATION_SEC = 0.4;
const MOVE_CHARACTERS_EASING = "cubic-bezier(0.33, 1, 0.68, 1)";
// Psych's Move Characters tween starts at the event time (not arrival-time).
const MOVE_CHARACTERS_USE_ARRIVAL_TIME = false;
const MOVE_CHARACTERS_INSTANT_EPSILON_MS = 0.6;
const MOVE_CHARACTERS_INSTANT_EPSILON_PX = 0.6;
// Psych events are driven by raw song time, not input judge offset.
const CHARACTER_CHART_USE_JUDGE_OFFSET = false;
const PSYCH_CHART_BASE_WIDTH = 1280;
const PSYCH_CHART_BASE_HEIGHT = 720;
const MOVE_CHARACTERS_FORCE_INSTANT = [
  { slot: "bf", timeMs: 11076.9230769231, x: 1020 },
  { slot: "bf", timeMs: 133846.153846154, x: 1125 }
];
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
  y: 220,
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
const showImageFhudSwappedImagePromises = {};
const showImageFhudSwappedResolvedPaths = {};
const showImageFhudLastEnabledTimeByName = {};
const SHOW_IMAGE_FHUD_AKAGE_SWAP_RED_RGB = [195, 95, 109];
const SHOW_IMAGE_FHUD_AKAGE_SWAP_WHITE_RGB = [255, 255, 255];
const SHOW_IMAGE_FHUD_AKAGE_SWAP_RED_DISTANCE = 110;
const SHOW_IMAGE_FHUD_AKAGE_SWAP_RED_SOFT_DISTANCE = 200;
const SHOW_IMAGE_FHUD_AKAGE_SWAP_WHITE_MIN = 236;
const SHOW_IMAGE_FHUD_AKAGE_SWAP_WHITE_DISTANCE = 56;
const SHOW_IMAGE_FHUD_AKAGE_SWAP_WHITE_SOFT_DISTANCE = 126;
const JUMP_IMAGE_BASE_PATH = "assets/images/";
const JUMP_IMAGE_Z_INDEX = 9996;
const JUMP_IMAGE_JUMP_MS = 230;
const JUMP_IMAGE_FALL_DELAY_MS = 290;
const JUMP_IMAGE_FALL_MS = 190;
const JUMP_IMAGE_REMOVE_DELAY_MS = 280;
const JUMP_IMAGE_JUMP_Y_OFFSET = 340;
const JUMP_IMAGE_WARM_OPACITY = 0.001;
const JUMP_IMAGE_GHOST_ECHO_PAUSE_EXTRA_MS = 90;
const JUMP_IMAGE_NOGHOST_DELAY_WINDOW_MS = 56;
const JUMP_IMAGE_MAX_DRAW_WIDTH = 1400;
const JUMP_IMAGE_MAX_DRAW_HEIGHT = 900;
const JUMP_IMAGE_PREWARM_MOVE_MS = 56;
const jumpImageState = {
  imagePromises: {},
  spritesByPath: new Map(),
  ghostPauseUntilPerf: 0
};
const MIKU_GHOST_XML_PATH = "assets/images/Miku Ghost.xml";
const MIKU_GHOST_FRAME_MS = 1000 / 24;
const MIKU_GHOST_EXTRA_SCALE = 0.67;
const MIKU_GHOST_X_PX = 239;
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
  lockedMarginTop: "0px",
  appliedFrameStyle: {
    rootWidth: "",
    rootHeight: "",
    frameWidth: "",
    frameHeight: "",
    left: "",
    top: "",
    backgroundImage: "",
    backgroundPosition: "",
    backgroundSize: "",
    backgroundRepeat: ""
  }
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
  dadReturnEasing: SCENE_CAMERA_EASING,
  dadReturnStartPerf: 0,
  dadReturnFromX: Number.NaN,
  dadReturnToX: Number.NaN,
  dadReturnDurationMs: 0
};
const ghostEchoSprites = [null, null, null];
let lastGhostEchoNoGhostPerf = -Infinity;

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
    img.decoding = "async";
    let loadHandled = false;
    const handleLoaded = () => {
      if (loadHandled) return;
      loadHandled = true;

      let settled = false;
      const settle = () => {
        if (settled) return;
        settled = true;
        optimizeCharacterImageForRender(src, img)
          .catch(() => src)
          .finally(() => finish(img));
      };

      if (typeof img.decode === "function") {
        img.decode()
          .then(() => settle())
          .catch(() => settle());
      } else {
        settle();
      }
      setTimeout(() => settle(), 1500);
    };

    img.onload = () => handleLoaded();
    img.onerror = () => {
      console.warn("character image load failed:", src);
      finish(null);
    };
    img.src = src;

    if (img.complete && img.naturalWidth > 0) {
      handleLoaded();
    }
  });

  return characterImagePromises[src];
}

function getCharacterRenderImageUrl(src) {
  const key = String(src || "");
  return characterImageRenderUrlBySrc[key] || key;
}

function getCharacterSourceImageSize(src) {
  const key = String(src || "");
  const size = characterImageSourceSizeBySrc[key];
  const w = Number(size?.w);
  const h = Number(size?.h);
  return {
    w: Number.isFinite(w) && w > 0 ? w : 0,
    h: Number.isFinite(h) && h > 0 ? h : 0
  };
}

function resolveMikuImageRenderMaxDimension(src, img) {
  const key = String(src || "").toLowerCase();
  if (!key || !key.endsWith(".png")) return 0;

  const naturalW = Number(img?.naturalWidth) || 0;
  const naturalH = Number(img?.naturalHeight) || 0;
  const maxSide = Math.max(naturalW, naturalH);
  if (maxSide <= 0) return 0;

  // Restrict optimization to heavy Miku-family textures.
  if (!key.includes("/images/")) return 0;
  const isMikuFamily =
    MIKU_IMAGE_PATH_RE.test(key) ||
    key.includes("miku ghost") ||
    key.includes("mikuaishi") ||
    key.includes("aishite") ||
    key.includes("motto") ||
    key.includes("kuroshi") ||
    key.includes("hodo") ||
    key.includes("miii");
  if (!isMikuFamily) return 0;

  const hardLimitRaw = Number(MIKU_IMAGE_HARD_LIMIT_DIMENSION);
  const hardLimit =
    Number.isFinite(hardLimitRaw) && hardLimitRaw > 0
      ? hardLimitRaw
      : 4096;
  const aggressiveAishiteLimit = Math.min(hardLimit, MIKU_IMAGE_RENDER_MAX_DIMENSION);
  const isAishiteHeavySet =
    key.includes("/aishite 1.png") ||
    key.includes("/mikuaishi2.png") ||
    key.includes("/mikuaishite3.png");
  if (isAishiteHeavySet && maxSide > aggressiveAishiteLimit) {
    return aggressiveAishiteLimit;
  }
  if (maxSide > hardLimit) {
    return hardLimit;
  }

  if (!CHARACTER_ATLAS_DOWNSCALE_ENABLED) return 0;
  if (maxSide <= MIKU_IMAGE_RENDER_MAX_DIMENSION) return 0;
  return MIKU_IMAGE_RENDER_MAX_DIMENSION;
}

function createDownscaledCharacterImageUrl(src, img, maxDimension = MIKU_IMAGE_RENDER_MAX_DIMENSION) {
  return new Promise((resolve) => {
    try {
      const naturalW = Number(img?.naturalWidth) || 0;
      const naturalH = Number(img?.naturalHeight) || 0;
      if (naturalW <= 0 || naturalH <= 0) {
        resolve({ url: src, sourceWidth: 0, sourceHeight: 0 });
        return;
      }

      const maxSide = Math.max(naturalW, naturalH);
      if (maxSide <= maxDimension) {
        resolve({ url: src, sourceWidth: naturalW, sourceHeight: naturalH });
        return;
      }

      const scale = maxDimension / maxSide;
      const drawW = Math.max(1, Math.round(naturalW * scale));
      const drawH = Math.max(1, Math.round(naturalH * scale));

      const setupCtx = (canvas) => {
        const ctx = canvas.getContext("2d");
        if (!ctx) return null;
        ctx.imageSmoothingEnabled = true;
        if ("imageSmoothingQuality" in ctx) {
          ctx.imageSmoothingQuality = "high";
        }
        return ctx;
      };

      let srcImage = img;
      let srcW = naturalW;
      let srcH = naturalH;
      let canvas = null;

      // Multi-pass downscale keeps edges cleaner than one-shot resize for large atlases.
      while (srcW > drawW * 1.5 || srcH > drawH * 1.5) {
        const nextW = Math.max(drawW, Math.round(srcW * 0.5));
        const nextH = Math.max(drawH, Math.round(srcH * 0.5));
        const stepCanvas = document.createElement("canvas");
        stepCanvas.width = nextW;
        stepCanvas.height = nextH;
        const stepCtx = setupCtx(stepCanvas);
        if (!stepCtx) {
          resolve({ url: src, sourceWidth: naturalW, sourceHeight: naturalH });
          return;
        }
        stepCtx.drawImage(srcImage, 0, 0, srcW, srcH, 0, 0, nextW, nextH);
        canvas = stepCanvas;
        srcImage = stepCanvas;
        srcW = nextW;
        srcH = nextH;
      }

      if (!canvas || srcW !== drawW || srcH !== drawH) {
        canvas = document.createElement("canvas");
        canvas.width = drawW;
        canvas.height = drawH;
        const ctx = setupCtx(canvas);
        if (!ctx) {
          resolve({ url: src, sourceWidth: naturalW, sourceHeight: naturalH });
          return;
        }
        ctx.drawImage(srcImage, 0, 0, srcW, srcH, 0, 0, drawW, drawH);
      }

      if (typeof canvas.toBlob === "function") {
        canvas.toBlob((blob) => {
          if (!blob) {
            resolve({ url: src, sourceWidth: naturalW, sourceHeight: naturalH });
            return;
          }
          const prevBlobUrl = characterImageBlobUrlBySrc[src];
          if (prevBlobUrl) {
            try {
              URL.revokeObjectURL(prevBlobUrl);
            } catch (err) {}
          }
          const blobUrl = URL.createObjectURL(blob);
          characterImageBlobUrlBySrc[src] = blobUrl;
          resolve({ url: blobUrl, sourceWidth: naturalW, sourceHeight: naturalH });
        }, "image/png");
        return;
      }

      resolve({ url: canvas.toDataURL("image/png"), sourceWidth: naturalW, sourceHeight: naturalH });
    } catch (err) {
      resolve({ url: src, sourceWidth: 0, sourceHeight: 0 });
    }
  });
}

function optimizeCharacterImageForRender(src, img) {
  const key = String(src || "");
  if (!key) return Promise.resolve("");
  if (characterImageRenderUrlBySrc[key]) {
    return Promise.resolve(characterImageRenderUrlBySrc[key]);
  }
  const naturalW = Number(img?.naturalWidth) || 0;
  const naturalH = Number(img?.naturalHeight) || 0;
  const targetMaxDimension = resolveMikuImageRenderMaxDimension(key, img);
  if (!(Number.isFinite(targetMaxDimension) && targetMaxDimension > 0)) {
    characterImageRenderUrlBySrc[key] = key;
    characterImageSourceSizeBySrc[key] = {
      w: naturalW > 0 ? naturalW : 0,
      h: naturalH > 0 ? naturalH : 0
    };
    return Promise.resolve(key);
  }
  return createDownscaledCharacterImageUrl(key, img, targetMaxDimension).then((optimized) => {
    const resolved = optimized?.url || key;
    const sourceW = Number(optimized?.sourceWidth);
    const sourceH = Number(optimized?.sourceHeight);
    characterImageRenderUrlBySrc[key] = resolved;
    characterImageSourceSizeBySrc[key] = {
      w: Number.isFinite(sourceW) && sourceW > 0 ? sourceW : naturalW,
      h: Number.isFinite(sourceH) && sourceH > 0 ? sourceH : naturalH
    };
    return resolved;
  });
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
    if (loaded) {
      const sourceSize = getCharacterSourceImageSize(candidate);
      return {
        imageUrl: getCharacterRenderImageUrl(candidate),
        sourceWidth: sourceSize.w,
        sourceHeight: sourceSize.h
      };
    }
  }

  if (candidates.length > 0) {
    console.warn("character atlas image not found:", xmlPath, candidates);
  }
  return {
    imageUrl: "",
    sourceWidth: 0,
    sourceHeight: 0
  };
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

function parsePsychPoint(rawValue, fallbackX = 0, fallbackY = 0) {
  const list = Array.isArray(rawValue) ? rawValue : [];
  const xRaw = Number(list[0]);
  const yRaw = Number(list[1]);
  return {
    x: Number.isFinite(xRaw) ? xRaw : fallbackX,
    y: Number.isFinite(yRaw) ? yRaw : fallbackY
  };
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
  const position = parsePsychPoint(rawJson.position, 0, 0);

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
    position,
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
    position: { x: 0, y: 0 },
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
    position: parsePsychPoint(source.position, 0, 0),
    offsetsByAnim: source.offsetsByAnim && typeof source.offsetsByAnim === "object"
      ? source.offsetsByAnim
      : {}
  };
}

function shouldUseCharacterJsonMeta(config) {
  if (!config || typeof config !== "object") return false;
  if (!config.characterJsonPath) return false;
  if (typeof config.applyCharacterJsonMeta === "boolean") {
    return config.applyCharacterJsonMeta;
  }
  // Default to Psych-style metadata when character json exists.
  return true;
}

function shouldApplyCharacterJsonScale(config) {
  if (!shouldUseCharacterJsonMeta(config)) return false;
  if (typeof config.applyCharacterJsonScale === "boolean") {
    return config.applyCharacterJsonScale;
  }
  return false;
}

function shouldApplyCharacterJsonAnimOffsets(config) {
  if (!shouldUseCharacterJsonMeta(config)) return false;
  if (typeof config.applyCharacterJsonAnimOffsets === "boolean") {
    return config.applyCharacterJsonAnimOffsets;
  }
  // PsychEngine applies animation offsets by default.
  return true;
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
    shouldUseCharacterJsonMeta(config) ? "1" : "0",
    shouldApplyCharacterJsonScale(config) ? "1" : "0",
    shouldApplyCharacterJsonAnimOffsets(config) ? "1" : "0",
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
    const useJsonMeta = shouldUseCharacterJsonMeta(config);
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

    const atlasSourceW = Number(atlas.sourceWidth);
    const atlasSourceH = Number(atlas.sourceHeight);
    const backgroundSize =
      Number.isFinite(atlasSourceW) &&
      atlasSourceW > 0 &&
      Number.isFinite(atlasSourceH) &&
      atlasSourceH > 0
        ? `${atlasSourceW}px ${atlasSourceH}px`
        : "";

    const runtime = {
      imageUrl: atlas.imageUrl || "",
      backgroundSize,
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
    host.style.left = "0";
    host.style.top = "0";
    host.style.width = "1px";
    host.style.height = "1px";
    // Keep almost invisible, but still paintable to warm GPU textures.
    host.style.opacity = "0.001";
    host.style.pointerEvents = "none";
    host.style.overflow = "hidden";
    host.style.zIndex = "999999";
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
      host.appendChild(probeEl);
      characterRuntimePrewarmProbeByKey.set(key, probeEl);
    }

    probeEl.style.backgroundImage = `url('${runtime.imageUrl}')`;
    probeEl.style.backgroundSize = runtime.backgroundSize || "auto";

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
    // Release prewarm probe to avoid pinning too many large atlases at once.
    if (probeEl && probeEl.isConnected) {
      probeEl.remove();
    }
    characterRuntimePrewarmProbeByKey.delete(key);

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

async function prewarmCharacterPresetsFromEvents(events = [], options = {}) {
  if (!Array.isArray(events) || events.length <= 0) return;

  const limitRaw = Number(options?.maxTimeMs);
  const hasTimeLimit = Number.isFinite(limitRaw);
  const timeLimit = hasTimeLimit ? Math.max(0, limitRaw) : Number.POSITIVE_INFINITY;

  const tasks = [];
  const seen = new Set();
  for (const evt of events) {
    if (!evt || evt.type !== "change_character") continue;
    const evtTimeMs = Number(evt.timeMs);
    if (hasTimeLimit && Number.isFinite(evtTimeMs) && evtTimeMs > timeLimit) {
      break;
    }

    const side = sideFromChartSlot(normalizeName(evt.slot));
    if (!side) continue;
    const preset = resolvePresetFromCharacterName(side, evt.character);
    if (!preset) continue;
    const key = getCharacterRuntimePrewarmKey(side, preset);
    if (seen.has(key)) continue;
    seen.add(key);
    tasks.push(prewarmCharacterPresetRuntime(side, preset));
  }

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

function collectEarlyCharacterChangePresetsBySide(
  events = [],
  maxTimeMs = EARLY_SWITCH_PREWARM_WINDOW_MS,
  maxPerSide = EARLY_SWITCH_PREWARM_MAX_PER_SIDE
) {
  const result = {
    player: [],
    opponent: [],
    gf: []
  };
  const seenBySide = {
    player: new Set(),
    opponent: new Set(),
    gf: new Set()
  };

  if (!Array.isArray(events) || events.length <= 0) return result;

  const limitMs = Number(maxTimeMs);
  const timeLimit = Number.isFinite(limitMs) ? limitMs : EARLY_SWITCH_PREWARM_WINDOW_MS;
  const capRaw = Number(maxPerSide);
  const cap = Number.isFinite(capRaw) ? Math.max(1, Math.round(capRaw)) : EARLY_SWITCH_PREWARM_MAX_PER_SIDE;

  for (const evt of events) {
    if (!evt || evt.type !== "change_character") continue;
    const evtTimeMs = Number(evt.timeMs);
    if (Number.isFinite(evtTimeMs) && evtTimeMs > timeLimit) break;

    const side = sideFromChartSlot(normalizeName(evt.slot));
    if (!side) continue;
    const preset = resolvePresetFromCharacterName(side, evt.character);
    const key = normalizeCharacterPresetKey(preset);
    if (!key) continue;

    const seen = seenBySide[side];
    const list = result[side];
    if (!seen || !list) continue;
    if (seen.has(key)) continue;
    if (list.length >= cap) continue;

    seen.add(key);
    list.push(key);
  }

  return result;
}

function collectPlayAnimationsByPresetForSide(side, events = []) {
  if (!Array.isArray(events) || events.length <= 0) return new Map();
  const normalizedSide = normalizeName(side);
  if (!normalizedSide) return new Map();

  const activePresetBySide = {
    player: normalizeCharacterPresetKey(characterPresetBySide.player),
    opponent: normalizeCharacterPresetKey(characterPresetBySide.opponent),
    gf: normalizeCharacterPresetKey(characterPresetBySide.gf)
  };
  const animationsByPreset = new Map();

  events.forEach((evt) => {
    if (!evt || !evt.type) return;

    if (evt.type === "change_character") {
      const evtSide = sideFromChartSlot(normalizeName(evt.slot));
      if (!evtSide) return;
      const preset = resolvePresetFromCharacterName(evtSide, evt.character);
      activePresetBySide[evtSide] = normalizeCharacterPresetKey(preset);
      return;
    }

    if (evt.type !== "play_animation") return;
    const evtSide = sideFromChartSlot(normalizeName(evt.slot));
    if (evtSide !== normalizedSide) return;

    const activePreset = activePresetBySide[evtSide];
    if (!activePreset) return;
    const animName = normalizeName(evt.animation);
    if (!animName) return;

    const list = animationsByPreset.get(activePreset) || [];
    if (!list.includes(animName)) {
      list.push(animName);
      animationsByPreset.set(activePreset, list);
    }
  });

  return animationsByPreset;
}

function collectUpcomingOpponentWarmTargets(
  nowMs,
  windowMs = OPPONENT_PRESET_LOOKAHEAD_PREWARM_MS,
  maxTargets = OPPONENT_PRESET_LOOKAHEAD_MAX
) {
  if (!Array.isArray(characterChangeEvents) || characterChangeEvents.length <= 0) return [];

  const startMs = Number(nowMs);
  const now = Number.isFinite(startMs) ? startMs : 0;
  const windowRaw = Number(windowMs);
  const spanMs = Number.isFinite(windowRaw) ? Math.max(0, windowRaw) : OPPONENT_PRESET_LOOKAHEAD_PREWARM_MS;
  const limitMs = now + spanMs;
  const capRaw = Number(maxTargets);
  const cap = Number.isFinite(capRaw) ? Math.max(1, Math.round(capRaw)) : OPPONENT_PRESET_LOOKAHEAD_MAX;

  const targetsByPreset = new Map();
  for (let i = Math.max(0, characterChangeEventIndex); i < characterChangeEvents.length; i += 1) {
    const evt = characterChangeEvents[i];
    if (!evt || evt.type !== "change_character") continue;
    const triggerMs = getCharacterEventTriggerMs(evt);
    if (triggerMs <= now) continue;
    if (triggerMs > limitMs) break;
    if (sideFromChartSlot(normalizeName(evt.slot)) !== "opponent") continue;

    const preset = resolvePresetFromCharacterName("opponent", evt.character);
    const key = normalizeCharacterPresetKey(preset);
    if (!key || !shouldKeepPooledSpriteWarm("opponent", key)) continue;

    let target = targetsByPreset.get(key);
    if (!target) {
      if (targetsByPreset.size >= cap) continue;
      target = {
        preset: key,
        animationNames: new Set()
      };
      targetsByPreset.set(key, target);
    }

    const immediateAnim = normalizeName(evt.immediatePlayAnimation);
    if (immediateAnim) {
      target.animationNames.add(immediateAnim);
    }
  }

  return Array.from(targetsByPreset.values()).map((target) => ({
    preset: target.preset,
    animationNames: Array.from(target.animationNames)
  }));
}

function queueUpcomingOpponentPresetPrewarm(targets = []) {
  if (!Array.isArray(targets) || targets.length <= 0) return;

  targets.forEach((target) => {
    const preset = normalizeCharacterPresetKey(target?.preset);
    if (!preset) return;
    const requiresFullWarm = shouldWarmAllAnimationsForPreset("opponent", preset);
    const pooled = getPooledCharacterSprite("opponent", preset);
    if (
      pooled &&
      pooled.ready &&
      (!requiresFullWarm || pooled.prewarmAllAnimationsReady)
    ) {
      touchOpponentWarmPreset(preset);
      return;
    }
    if (opponentPresetLookaheadPrewarmQueuedKeys.has(preset)) return;
    opponentPresetLookaheadPrewarmQueuedKeys.add(preset);
    opponentPresetLookaheadPrewarmQueue.push({
      preset,
      animationNames: Array.isArray(target?.animationNames) ? target.animationNames : []
    });
  });

  if (opponentPresetLookaheadPrewarmRunning) return;
  opponentPresetLookaheadPrewarmRunning = true;
  (async () => {
    try {
      while (opponentPresetLookaheadPrewarmQueue.length > 0) {
        const next = opponentPresetLookaheadPrewarmQueue.shift();
        const preset = normalizeCharacterPresetKey(next?.preset);
        if (!preset) continue;
        opponentPresetLookaheadPrewarmQueuedKeys.delete(preset);

        try {
          const fallbackAnims =
            opponentPlayAnimationsByPreset.get(preset) ||
            (Array.isArray(next?.animationNames) ? next.animationNames : []);
          const requiresFullWarm = shouldWarmAllAnimationsForPreset("opponent", preset);
          await ensurePooledCharacterSprite("opponent", preset, {
            prewarm: true,
            warmAllAnimations: requiresFullWarm,
            animationNames: fallbackAnims
          });
          touchOpponentWarmPreset(preset);
          pruneOpponentWarmPool(preset);
        } catch (err) {
          console.warn("upcoming opponent preset prewarm failed:", preset, err);
        }

        // Yield to UI updates between heavy atlas operations.
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
    } finally {
      opponentPresetLookaheadPrewarmRunning = false;
      if (opponentPresetLookaheadPrewarmQueue.length > 0) {
        queueUpcomingOpponentPresetPrewarm(opponentPresetLookaheadPrewarmQueue);
      }
    }
  })();
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

async function prewarmCharacterSpritePaint(sprite, options = {}) {
  if (!sprite || !sprite.rootEl) return;
  if (characterSprites[sprite.side] === sprite) {
    // Active sprite must never be mutated by background prewarm.
    sprite.prewarmPainted = true;
    return;
  }
  const requestedAnimationNames = Array.isArray(options.animationNames)
    ? options.animationNames
    : [];
  const warmAllAnimations = Boolean(options.warmAllAnimations);
  if (warmAllAnimations && sprite.prewarmAllAnimationsReady && sprite.prewarmPainted) {
    return;
  }
  const rootEl = sprite.rootEl;
  const prevDisplay = rootEl.style.display;
  const prevVisibility = rootEl.style.visibility;
  const prevOpacity = rootEl.style.opacity;
  const prevPointerEvents = rootEl.style.pointerEvents;
  const prevTransition = rootEl.style.transition;
  const prevAnim = normalizeName(sprite.currentAnim) || "idle";
  const prevLoop = Boolean(sprite.loop);
  const prevFreezeOnFirstFrame = Boolean(sprite.freezeOnFirstFrame);
  const prevFrameDurationMsRaw = Number(sprite.frameDurationMs);
  const prevFrameDurationMs =
    Number.isFinite(prevFrameDurationMsRaw) && prevFrameDurationMsRaw > 0
      ? prevFrameDurationMsRaw
      : CHARACTER_FRAME_MS;

  rootEl.style.display = "";
  rootEl.style.visibility = "visible";
  // Non-zero opacity helps force an actual paint upload without visible flicker.
  rootEl.style.opacity = "0.001";
  rootEl.style.pointerEvents = "none";
  rootEl.style.transition = "none";
  rootEl.getBoundingClientRect();
  await new Promise((resolve) => requestAnimationFrame(() => resolve()));

  const candidateAnimationNames = [...requestedAnimationNames];
  if (warmAllAnimations && sprite.animations && typeof sprite.animations === "object") {
    Object.keys(sprite.animations).forEach((animName) => {
      candidateAnimationNames.push(animName);
    });
    // Note-driven lanes can still be requested through resolver fallbacks.
    candidateAnimationNames.push(
      "sing-left", "sing-down", "sing-up", "sing-right",
      "hold-left", "hold-down", "hold-up", "hold-right"
    );
  }
  const warmAnimationNames = [];
  const seenResolvedAnims = new Set();
  candidateAnimationNames.forEach((animName) => {
    const normalizedAnim = normalizeName(animName);
    if (!normalizedAnim) return;
    const resolvedAnim = sprite.resolveAnimName(normalizedAnim);
    if (!resolvedAnim || resolvedAnim === "idle") return;
    if (seenResolvedAnims.has(resolvedAnim)) return;
    if (sprite.prewarmedAnimations?.has(resolvedAnim)) return;
    seenResolvedAnims.add(resolvedAnim);
    warmAnimationNames.push(resolvedAnim);
  });

  let prewarmCompleted = true;
  for (const animName of warmAnimationNames) {
    if (characterSprites[sprite.side] === sprite) {
      prewarmCompleted = false;
      break;
    }
    sprite.play(animName, {
      loop: false,
      restart: true,
      freezeOnFirstFrame: false
    });
    if (sprite.prewarmedAnimations) {
      sprite.prewarmedAnimations.add(animName);
    }
    rootEl.getBoundingClientRect();
    await new Promise((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
    );
  }

  if (characterSprites[sprite.side] === sprite) {
    // If this sprite became active while prewarm was running, do not restore
    // captured inactive styles or animations.
    sprite.prewarmPainted = true;
    return;
  }

  const restoreAnim = sprite.animations?.[prevAnim] ? prevAnim : "idle";
  sprite.play(restoreAnim, {
    loop: restoreAnim === prevAnim ? prevLoop : true,
    restart: true,
    freezeOnFirstFrame: restoreAnim === prevAnim ? prevFreezeOnFirstFrame : false,
    frameDurationMs: prevFrameDurationMs
  });
  await new Promise((resolve) => requestAnimationFrame(() => resolve()));

  rootEl.style.display = prevDisplay;
  rootEl.style.visibility = prevVisibility;
  rootEl.style.opacity = prevOpacity;
  rootEl.style.pointerEvents = prevPointerEvents;
  rootEl.style.transition = prevTransition;
  sprite.prewarmPainted = true;
  if (warmAllAnimations && prewarmCompleted) {
    sprite.prewarmAllAnimationsReady = true;
  }
}

function getPooledCharacterSprite(side, preset) {
  const pool = getCharacterSpritePool(side);
  if (!pool) return null;
  const key = normalizeCharacterPresetKey(preset);
  if (!key) return null;
  const sprite = pool.get(key);
  return sprite || null;
}

function touchOpponentWarmPreset(preset) {
  const key = normalizeCharacterPresetKey(preset);
  if (!key) return;
  opponentWarmPresetUseTick += 1;
  opponentWarmPresetUseByKey.set(key, opponentWarmPresetUseTick);
}

function cleanupCharacterRuntimePrewarmProbe(side, preset) {
  const key = getCharacterRuntimePrewarmKey(side, preset);
  const probeEl = characterRuntimePrewarmProbeByKey.get(key);
  if (probeEl && probeEl.isConnected) {
    probeEl.remove();
  }
  characterRuntimePrewarmProbeByKey.delete(key);
}

function pruneOpponentWarmPool(activePreset = "", keepPresets = []) {
  const pool = getCharacterSpritePool("opponent");
  if (!pool) return;

  const maxWarmRaw = Number(OPPONENT_WARM_POOL_MAX_SPRITES);
  const maxWarm = Number.isFinite(maxWarmRaw)
    ? Math.max(1, Math.round(maxWarmRaw))
    : 4;

  const warmEntries = [];
  pool.forEach((sprite, key) => {
    if (!shouldKeepPooledSpriteWarm("opponent", key)) return;
    warmEntries.push({
      key,
      sprite,
      lastUse: Number(opponentWarmPresetUseByKey.get(key)) || 0
    });
  });
  if (warmEntries.length <= maxWarm) return;

  const keep = new Set();
  const activeKey = normalizeCharacterPresetKey(activePreset || characterPresetBySide.opponent);
  if (activeKey) keep.add(activeKey);
  const slotKey = normalizeCharacterPresetKey(characterSlotState.opponent?.preset);
  if (slotKey) keep.add(slotKey);
  (Array.isArray(keepPresets) ? keepPresets : []).forEach((value) => {
    const key = normalizeCharacterPresetKey(value);
    if (key) keep.add(key);
  });

  warmEntries.sort((a, b) => a.lastUse - b.lastUse);
  let removeCount = warmEntries.length - maxWarm;
  for (const entry of warmEntries) {
    if (removeCount <= 0) break;
    if (keep.has(entry.key)) continue;
    if (entry.sprite === characterSprites.opponent) continue;

    if (entry.sprite?.rootEl && entry.sprite.rootEl.isConnected) {
      entry.sprite.rootEl.remove();
    }
    pool.delete(entry.key);
    opponentWarmPresetUseByKey.delete(entry.key);
    cleanupCharacterRuntimePrewarmProbe("opponent", entry.key);
    removeCount -= 1;
  }
}

function shouldKeepPooledSpriteWarm(side, preset) {
  if (normalizeName(side) !== "opponent") return false;
  const key = normalizeCharacterPresetKey(preset);
  if (!key) return false;
  return OPPONENT_MIKU_WARM_POOL_PRESETS.has(key);
}

function shouldWarmAllAnimationsForPreset(side, preset) {
  const normalizedSide = normalizeName(side);
  const key = normalizeCharacterPresetKey(preset);
  if (!normalizedSide || !key) return false;

  if (normalizedSide === "opponent") {
    if (key === "miku") return true;
    if (shouldKeepPooledSpriteWarm(normalizedSide, key) && !isOpponentTimelineOnlyPreset(key)) {
      return true;
    }
  }

  return false;
}

function shouldDeferOpponentPresetLoadForSwitch(preset) {
  const key = normalizeCharacterPresetKey(preset);
  if (!key) return false;
  // Split-layout presets (e.g. teto animation) are often switched together
  // with Move Characters at the same chart timestamp. Deferring by 1 frame can
  // cause a visible one-frame mismatch or flicker, so keep them immediate.
  if (isOpponentPresetInSplitLayout(key)) return false;
  // Note-reactive presets like miku must switch immediately so same-frame notes
  // don't get consumed by the previous timeline-only sprite.
  return isOpponentTimelineOnlyPreset(key);
}

function setPooledSpriteActiveState(sprite, active, side = "", preset = "") {
  if (!sprite || !sprite.rootEl) return;
  const root = sprite.rootEl;
  const keepWarmWhenInactive = shouldKeepPooledSpriteWarm(side, preset);
  if (active) {
    root.classList.remove("character--pooled-inactive");
    root.style.display = "";
    root.style.visibility = "visible";
    root.style.opacity = "";
    root.style.pointerEvents = "";
    return;
  }
  if (keepWarmWhenInactive) {
    // Keep heavy presets in the render tree so GPU texture residency is stable.
    root.classList.add("character--pooled-inactive");
    root.style.display = "";
    root.style.visibility = "hidden";
    root.style.opacity = "0";
    root.style.pointerEvents = "none";
    return;
  }
  root.classList.remove("character--pooled-inactive");
  // Non-heavy presets can be fully detached to minimize render cost.
  root.style.display = "none";
  root.style.visibility = "";
  root.style.opacity = "";
  root.style.pointerEvents = "";
}

function cacheCharacterSprite(side, preset, sprite) {
  const pool = getCharacterSpritePool(side);
  if (!pool || !sprite) return;
  const key = normalizeCharacterPresetKey(preset);
  if (!key) return;
  pool.set(key, sprite);
  if (normalizeName(side) === "opponent" && shouldKeepPooledSpriteWarm(side, key)) {
    touchOpponentWarmPreset(key);
    pruneOpponentWarmPool(key);
  }
}

async function ensurePooledCharacterSprite(side, preset, options = {}) {
  const key = normalizeCharacterPresetKey(preset);
  if (!key) return null;
  const config = getPresetConfig(side, key);
  if (!config) return null;

  const hostEl = options.hostEl || ensureCharacterSlot(side);
  if (!hostEl) return null;

  const pooled = getPooledCharacterSprite(side, key);
  if (pooled && pooled.rootEl) {
    if (pooled.rootEl.parentElement !== hostEl) {
      hostEl.appendChild(pooled.rootEl);
    }
    setCharacterAnchorModeForSprite(side, key, pooled);
    if (options.prewarm) {
      await prewarmCharacterSpritePaint(pooled, {
        warmAllAnimations: Boolean(options.warmAllAnimations),
        animationNames: options.animationNames
      });
    }
    return pooled;
  }

  const sprite = new CharacterSprite(side, config, hostEl);
  setPooledSpriteActiveState(sprite, false, side, key);
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
    await prewarmCharacterSpritePaint(sprite, {
      warmAllAnimations: Boolean(options.warmAllAnimations),
      animationNames: options.animationNames
    });
    if (characterSprites[side] !== sprite) {
      setPooledSpriteActiveState(sprite, false, side, key);
    }
  }
  return sprite;
}

function activatePooledCharacterSprite(side, preset, sprite) {
  if (!sprite || !sprite.rootEl) return false;
  const current = characterSprites[side];
  const previousPreset = characterPresetBySide[side];
  const activationSerial = (characterActivationSerialBySide[side] || 0) + 1;
  characterActivationSerialBySide[side] = activationSerial;
  const firstActivation = !characterSpriteActivatedOnce.has(sprite);
  characterSpriteActivatedOnce.add(sprite);
  const hostEl = ensureCharacterSlot(side);
  if (hostEl && sprite.rootEl.parentElement !== hostEl) {
    hostEl.appendChild(sprite.rootEl);
  }

  // Slot owns position; sprites stay centered at the slot origin.
  sprite.rootEl.style.left = "0px";
  sprite.rootEl.style.top = "0px";
  sprite.rootEl.style.transition = "";

  characterSprites[side] = sprite;
  characterPresetBySide[side] = preset;
  if (side === "opponent" && shouldKeepPooledSpriteWarm(side, preset)) {
    touchOpponentWarmPreset(preset);
    pruneOpponentWarmPool(preset);
  }
  setCharacterAnchorModeForSprite(side, preset, sprite);
  applyCharacterExtraScaleForSprite(side, preset, sprite);
  applyCharacterRenderOffset(side);
  if (characterBridgePositionOnSwitchBySide[side]) {
    bridgeCharacterSwitchOffsetForMove(side, current, sprite);
    characterBridgePositionOnSwitchBySide[side] = false;
  }
  setPooledSpriteActiveState(sprite, true, side, preset);
  if (current && current !== sprite && current.rootEl) {
    const hidePrevious = () => {
      if (characterActivationSerialBySide[side] !== activationSerial) return;
      if (characterSprites[side] !== sprite) return;
      setPooledSpriteActiveState(current, false, side, previousPreset);
    };
    const skipFirstPaintBridge =
      characterChartBatchApplying &&
      normalizeName(side) === "opponent" &&
      (isOpponentPresetInSplitLayout(preset) || isOpponentTimelineOnlyPreset(preset));
    const needsFirstPaintBridge =
      firstActivation && !sprite.prewarmPainted && !skipFirstPaintBridge;
    if (needsFirstPaintBridge) {
      requestAnimationFrame(hidePrevious);
    } else {
      hidePrevious();
    }
  }
  return true;
}

function hideAllPooledCharacterSprites(side) {
  const pool = getCharacterSpritePool(side);
  if (!pool) return;
  pool.forEach((sprite, key) => {
    if (!sprite || !sprite.rootEl) return;
    setPooledSpriteActiveState(sprite, false, side, key);
  });
}

function waitForCharacterAnimationFrames(frameCount = 1) {
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

function captureInlineStyleSnapshot(el, properties = []) {
  const snapshot = {};
  if (!el) return snapshot;
  properties.forEach((prop) => {
    snapshot[prop] = el.style[prop] || "";
  });
  return snapshot;
}

function restoreInlineStyleSnapshot(el, snapshot) {
  if (!el || !snapshot) return;
  Object.keys(snapshot).forEach((prop) => {
    el.style[prop] = snapshot[prop];
  });
}

async function prewarmCharacterPresetSwitchesForGameplay() {
  if (characterPresetSwitchPrewarmed) return true;
  if (characterPresetSwitchPrewarmPromise) return characterPresetSwitchPrewarmPromise;

  characterPresetSwitchPrewarmPromise = (async () => {
    await prepareCharacterAssetsForGameplay();
    await loadCharacterChangeEvents();
    await prewarmCharacterPresetsFromEvents(characterChangeEvents, {
      maxTimeMs: CHARACTER_RUNTIME_PREWARM_WINDOW_MS
    });

    // Warm real preset swaps before gameplay starts.
    // Keep this focused on heavy Miku family presets to avoid side effects.
    const side = "opponent";
    const sprite = characterSprites[side];
    const activeSprite = sprite && sprite.ready ? sprite : null;
    const originalPreset = characterPresetBySide[side] || "shadow";
    const originalSlotPreset = characterSlotState[side]?.preset ?? null;
    const originalDisplayState = {
      ...(characterDisplayState[side] || { anim: "idle", loop: true, freeze: false })
    };

    if (activeSprite && activeSprite.rootEl) {
      cacheCharacterSprite(side, originalPreset, activeSprite);
    }

    const earlyPresetsBySide = collectEarlyCharacterChangePresetsBySide(
      characterChangeEvents,
      EARLY_SWITCH_PREWARM_WINDOW_MS,
      EARLY_SWITCH_PREWARM_MAX_PER_SIDE
    );
    const warmAnimationsByPreset = collectPlayAnimationsByPresetForSide(
      side,
      characterChangeEvents
    );
    const startupWarmPresets = [];
    const startupSeenPresets = new Set();
    const pushStartupWarmPreset = (value, options = {}) => {
      const key = normalizeCharacterPresetKey(value);
      if (!key || startupSeenPresets.has(key)) return;
      if (!options.force && !shouldKeepPooledSpriteWarm(side, key)) return;
      startupSeenPresets.add(key);
      startupWarmPresets.push(key);
    };
    pushStartupWarmPreset(originalPreset);
    OPPONENT_STARTUP_PREWARM_PRESETS.forEach((preset) =>
      pushStartupWarmPreset(preset, { force: true })
    );
    const earlyOpponentPresets = Array.isArray(earlyPresetsBySide.opponent)
      ? earlyPresetsBySide.opponent
      : [];
    earlyOpponentPresets.forEach((preset) => pushStartupWarmPreset(preset));

    for (const preset of startupWarmPresets) {
      const presetKey = normalizeCharacterPresetKey(preset);
      const keepWarm = shouldKeepPooledSpriteWarm(side, presetKey);
      await ensurePooledCharacterSprite(side, preset, {
        prewarm: true,
        warmAllAnimations: shouldWarmAllAnimationsForPreset(side, presetKey) || !keepWarm,
        animationNames:
          warmAnimationsByPreset.get(presetKey) || []
      });
      if (keepWarm) {
        touchOpponentWarmPreset(preset);
      }
    }
    pruneOpponentWarmPool(originalPreset, startupWarmPresets);

    const playAnimationsBySide = {
      player: collectPlayAnimationsByPresetForSide("player", characterChangeEvents),
      opponent: warmAnimationsByPreset,
      gf: collectPlayAnimationsByPresetForSide("gf", characterChangeEvents)
    };
    for (const warmSide of ["player", "opponent", "gf"]) {
      const presetList = Array.isArray(earlyPresetsBySide[warmSide])
        ? earlyPresetsBySide[warmSide]
        : [];
      for (const presetKey of presetList) {
        if (warmSide === "opponent" && startupSeenPresets.has(normalizeCharacterPresetKey(presetKey))) {
          continue;
        }
        await ensurePooledCharacterSprite(warmSide, presetKey, {
          prewarm: true,
          warmAllAnimations: shouldWarmAllAnimationsForPreset(warmSide, presetKey),
          animationNames:
            playAnimationsBySide[warmSide]?.get(normalizeCharacterPresetKey(presetKey)) || []
        });
        if (warmSide === "opponent" && shouldKeepPooledSpriteWarm(warmSide, presetKey)) {
          touchOpponentWarmPreset(presetKey);
        }
      }
    }
    pruneOpponentWarmPool(originalPreset);

    if (activeSprite && activeSprite.rootEl) {
      const restorePreset = normalizeCharacterPresetKey(originalPreset) || "shadow";
      const restoreSprite =
        getPooledCharacterSprite(side, restorePreset) ||
        characterSprites[side] ||
        activeSprite;
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

async function prewarmCharacterPresentationForGameplay() {
  if (characterPresentationPrewarmed) return true;
  if (characterPresentationPrewarmPromise) return characterPresentationPrewarmPromise;

  characterPresentationPrewarmPromise = (async () => {
    await prepareCharacterAssetsForGameplay();
    await prewarmCharacterPresetSwitchesForGameplay();

    const body = document.body;
    if (!body) {
      characterPresentationPrewarmed = true;
      return true;
    }

    const originalFloatClass = body.classList.contains("character-float-on");
    const slotEntries = ["player", "opponent", "gf"]
      .map((side) => {
        const slotEl = getCharacterPositionRoot(side);
        const spriteEl = characterSprites[side]?.rootEl || null;
        if (!slotEl) return null;
        return {
          side,
          slotEl,
          spriteEl,
          slotStyles: captureInlineStyleSnapshot(slotEl, [
            "left",
            "top",
            "transition",
            "animation",
            "willChange"
          ]),
          spriteStyles: captureInlineStyleSnapshot(spriteEl, [
            "display",
            "visibility",
            "opacity",
            "pointerEvents",
            "transition",
            "willChange"
          ]),
          x: readCharacterRootAxisPx(slotEl, "left"),
          y: readCharacterRootAxisPx(slotEl, "top")
        };
      })
      .filter(Boolean);

    if (!slotEntries.length) {
      characterPresentationPrewarmed = true;
      return true;
    }

    try {
      slotEntries.forEach(({ slotEl, spriteEl, x, y }) => {
        slotEl.style.transition = "none";
        slotEl.style.willChange = "left, top";
        if (Number.isFinite(x)) slotEl.style.left = `${x}px`;
        if (Number.isFinite(y)) slotEl.style.top = `${y}px`;
        slotEl.getBoundingClientRect();

        if (!spriteEl) return;
        spriteEl.style.display = "";
        spriteEl.style.visibility = "visible";
        spriteEl.style.opacity = "0.001";
        spriteEl.style.pointerEvents = "none";
        spriteEl.style.transition = "none";
        spriteEl.style.willChange = "transform, opacity";
      });

      await waitForCharacterAnimationFrames(1);

      slotEntries.forEach(({ slotEl, x, y }) => {
        if (Number.isFinite(x)) {
          slotEl.style.left = `${x + CHARACTER_PRESENTATION_PREWARM_NUDGE_PX}px`;
        }
        if (Number.isFinite(y)) {
          slotEl.style.top = `${y + CHARACTER_PRESENTATION_PREWARM_NUDGE_PX}px`;
        }
      });

      await waitForCharacterAnimationFrames(1);

      body.classList.add("character-float-on");
      await waitForCharacterAnimationFrames(2);

      slotEntries.forEach(({ slotEl, x, y }) => {
        if (Number.isFinite(x)) slotEl.style.left = `${x}px`;
        if (Number.isFinite(y)) slotEl.style.top = `${y}px`;
      });
      body.classList.toggle("character-float-on", originalFloatClass);

      await waitForCharacterAnimationFrames(1);

      characterPresentationPrewarmed = true;
      return true;
    } finally {
      body.classList.toggle("character-float-on", originalFloatClass);
      slotEntries.forEach(({ slotEl, spriteEl, slotStyles, spriteStyles }) => {
        restoreInlineStyleSnapshot(slotEl, slotStyles);
        restoreInlineStyleSnapshot(spriteEl, spriteStyles);
      });
    }
  })()
    .catch((err) => {
      console.warn("character presentation prewarm failed:", err);
      return false;
    })
    .finally(() => {
      characterPresentationPrewarmPromise = null;
    });

  return characterPresentationPrewarmPromise;
}

function annotateImmediatePlayAfterChangeEvents(events = []) {
  if (!Array.isArray(events) || events.length <= 1) return events;

  const dropIndexes = new Set();

  for (let i = 0; i < events.length; i += 1) {
    const evt = events[i];
    if (!evt || evt.type !== "change_character") continue;

    evt.hasImmediatePlayAnimation = false;
    evt.immediatePlayAnimation = "";

    const evtSide = sideFromChartSlot(normalizeName(evt.slot));
    if (!evtSide) continue;

    const evtTime = Number(evt.timeMs);
    for (let j = i + 1; j < events.length; j += 1) {
      const next = events[j];
      if (!next) continue;
      if (Number(next.timeMs) !== evtTime) break;
      if (next.type !== "play_animation") continue;

      const nextSide = sideFromChartSlot(normalizeName(next.slot));
      if (nextSide !== evtSide) continue;

      const immediateAnim = normalizeName(next.animation);
      if (!immediateAnim) continue;

      evt.hasImmediatePlayAnimation = true;
      evt.immediatePlayAnimation = immediateAnim;
      dropIndexes.add(j);
      break;
    }
  }

  if (dropIndexes.size <= 0) return events;
  return events.filter((_, index) => !dropIndexes.has(index));
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
        const durationSecondsRaw = Number(cmd[4]);
        const durationSeconds = Number.isFinite(durationSecondsRaw)
          ? durationSecondsRaw
          : MOVE_CHARACTERS_DEFAULT_DURATION_SEC;
        parsed.push({
          type: "move_characters",
          timeMs,
          slot: normalizeName(cmd[1]),
          x: Number(cmd[2]),
          y: Number(cmd[3]),
          durationSeconds,
          easing: MOVE_CHARACTERS_EASING,
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

  const optimized = annotateImmediatePlayAfterChangeEvents(parsed);

  return optimized;
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

function shouldSkipOpponentPresentationRefreshOnPresetSwap(prevPreset, nextPreset) {
  const prev = normalizeCharacterPresetKey(prevPreset);
  const next = normalizeCharacterPresetKey(nextPreset);
  if (!prev || !next) return false;
  if (prev === next) return false;
  if (prev === "shadow" || next === "shadow") return false;
  if (isOpponentPresetInSplitLayout(prev) || isOpponentPresetInSplitLayout(next)) {
    return false;
  }
  return true;
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

function getCharacterJsonAnimOffsetMultiplier(side, preset) {
  const normalizedSide = normalizeName(side);
  const normalizedPreset = normalizeName(preset);
  if (!normalizedSide || !normalizedPreset) return 1;

  const sideMap = CHARACTER_JSON_ANIM_OFFSET_MULTIPLIERS[normalizedSide];
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
  if (anim === "sing-left" || anim === "hold-left" || anim === "miss-left") {
    return { x: 0, y: MIKU_LEFT_EXTRA_OFFSET_Y };
  }
  if (anim === "sing-down" || anim === "hold-down" || anim === "miss-down") {
    return { x: 0, y: MIKU_DOWN_EXTRA_OFFSET_Y };
  }

  return { x: 0, y: 0 };
}

function shouldUseBottomAnchorForPreset(side, preset) {
  // Keep center anchor and rely on Psych JSON animation offsets for alignment.
  return false;
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

function shouldSwapFinalAkageShowImageFhud(evt) {
  if (!evt || !evt.enabled) return false;
  const normalizedName = normalizeName(evt.imageName);
  if (normalizedName !== "akage") return false;
  const lastTime = Number(showImageFhudLastEnabledTimeByName[normalizedName]);
  return Number.isFinite(lastTime) && Number(evt.timeMs) === lastTime;
}

function preloadSwappedAkageShowImageFhud(imagePath) {
  if (!imagePath) return Promise.resolve("");
  if (showImageFhudSwappedResolvedPaths[imagePath]) {
    return Promise.resolve(showImageFhudSwappedResolvedPaths[imagePath]);
  }
  if (showImageFhudSwappedImagePromises[imagePath]) {
    return showImageFhudSwappedImagePromises[imagePath];
  }

  showImageFhudSwappedImagePromises[imagePath] = preloadShowImageFhudImage(imagePath)
    .then(() => new Promise((resolve) => {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth || img.width;
          canvas.height = img.naturalHeight || img.height;
          const ctx = canvas.getContext("2d", { willReadFrequently: true });
          if (!ctx || !canvas.width || !canvas.height) {
            resolve(imagePath);
            return;
          }

          ctx.imageSmoothingEnabled = true;
          if ("imageSmoothingQuality" in ctx) {
            ctx.imageSmoothingQuality = "high";
          }
          ctx.drawImage(img, 0, 0);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
          const [swapR, swapG, swapB] = SHOW_IMAGE_FHUD_AKAGE_SWAP_RED_RGB;
          const [whiteR, whiteG, whiteB] = SHOW_IMAGE_FHUD_AKAGE_SWAP_WHITE_RGB;

          for (let i = 0; i < data.length; i += 4) {
            const alpha = data[i + 3];
            if (alpha <= 0) continue;
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const isWhiteLike =
              r >= SHOW_IMAGE_FHUD_AKAGE_SWAP_WHITE_MIN &&
              g >= SHOW_IMAGE_FHUD_AKAGE_SWAP_WHITE_MIN &&
              b >= SHOW_IMAGE_FHUD_AKAGE_SWAP_WHITE_MIN;
            const whiteDistance =
              Math.abs(r - whiteR) + Math.abs(g - whiteG) + Math.abs(b - whiteB);
            const redDistance =
              Math.abs(r - swapR) + Math.abs(g - swapG) + Math.abs(b - swapB);

            if (isWhiteLike || whiteDistance <= SHOW_IMAGE_FHUD_AKAGE_SWAP_WHITE_DISTANCE) {
              data[i] = swapR;
              data[i + 1] = swapG;
              data[i + 2] = swapB;
              continue;
            }

            if (redDistance <= SHOW_IMAGE_FHUD_AKAGE_SWAP_RED_DISTANCE) {
              data[i] = whiteR;
              data[i + 1] = whiteG;
              data[i + 2] = whiteB;
              continue;
            }

            const nearWhite = whiteDistance <= SHOW_IMAGE_FHUD_AKAGE_SWAP_WHITE_SOFT_DISTANCE;
            const nearRed = redDistance <= SHOW_IMAGE_FHUD_AKAGE_SWAP_RED_SOFT_DISTANCE;
            if (!nearWhite && !nearRed) {
              continue;
            }

            const swapTowardWhite =
              nearRed && (!nearWhite || redDistance * 1.08 <= whiteDistance);
            const targetR = swapTowardWhite ? whiteR : swapR;
            const targetG = swapTowardWhite ? whiteG : swapG;
            const targetB = swapTowardWhite ? whiteB : swapB;
            const sourceDistance = swapTowardWhite ? redDistance : whiteDistance;
            const sourceSoftLimit = swapTowardWhite
              ? SHOW_IMAGE_FHUD_AKAGE_SWAP_RED_SOFT_DISTANCE
              : SHOW_IMAGE_FHUD_AKAGE_SWAP_WHITE_SOFT_DISTANCE;
            const mix = Math.max(0.42, Math.min(0.86, 1 - sourceDistance / sourceSoftLimit));

            data[i] = Math.round(r + (targetR - r) * mix);
            data[i + 1] = Math.round(g + (targetG - g) * mix);
            data[i + 2] = Math.round(b + (targetB - b) * mix);
          }

          ctx.putImageData(imageData, 0, 0);
          const dataUrl = canvas.toDataURL("image/png");
          showImageFhudSwappedResolvedPaths[imagePath] = dataUrl;
          resolve(dataUrl);
        } catch (err) {
          console.warn("failed to swap final akage FHUD image colors:", err);
          resolve(imagePath);
        }
      };
      img.onerror = () => resolve(imagePath);
      img.src = imagePath;
    }))
    .catch(() => imagePath);

  return showImageFhudSwappedImagePromises[imagePath];
}

function preloadShowImageFhudFromEvents(events = []) {
  if (!Array.isArray(events) || events.length <= 0) return;
  events.forEach((evt) => {
    if (!evt || evt.type !== "show_image_fhud" || !evt.enabled) return;
    const normalizedName = normalizeName(evt.imageName);
    if (normalizedName) {
      const prevTime = Number(showImageFhudLastEnabledTimeByName[normalizedName]);
      const nextTime = Number(evt.timeMs);
      if (!Number.isFinite(prevTime) || nextTime >= prevTime) {
        showImageFhudLastEnabledTimeByName[normalizedName] = nextTime;
      }
    }
    const path = resolveShowImageFhudPath(evt.imageName);
    if (!path) return;
    preloadShowImageFhudImage(path);
  });

  const finalAkagePath = resolveShowImageFhudPath("akage");
  if (finalAkagePath && Number.isFinite(Number(showImageFhudLastEnabledTimeByName.akage))) {
    preloadSwappedAkageShowImageFhud(finalAkagePath);
  }
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

function showShowImageFhudOverlay(imageName, options = {}) {
  const path = resolveShowImageFhudPath(imageName);
  if (!path) return;
  const overlayEl = ensureShowImageFhudOverlay();
  if (!overlayEl) return;

  const useSwappedAkage = Boolean(options.swapAkageColors) && normalizeName(imageName) === "akage";
  preloadShowImageFhudImage(path);
  if (useSwappedAkage) {
    const resolvedPath = showImageFhudSwappedResolvedPaths[path];
    if (resolvedPath) {
      if (overlayEl.getAttribute("src") !== resolvedPath) {
        overlayEl.setAttribute("src", resolvedPath);
      }
    } else {
      if (overlayEl.getAttribute("src") !== path) {
        overlayEl.setAttribute("src", path);
      }
      preloadSwappedAkageShowImageFhud(path).then((swappedPath) => {
        if (!swappedPath || !showImageFhudOverlayEl || showImageFhudOverlayEl !== overlayEl) return;
        if (overlayEl.style.display === "none" || overlayEl.style.visibility === "hidden") return;
        overlayEl.setAttribute("src", swappedPath);
      });
    }
  } else if (overlayEl.getAttribute("src") !== path) {
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
    img.decoding = "async";
    img.fetchPriority = "high";
    img.onload = () => {
      finish(img);
    };
    img.onerror = () => finish(null);
    img.src = imagePath;
  });

  return jumpImageState.imagePromises[imagePath];
}

function preloadJumpImageFromEvents(events = []) {
  if (!Array.isArray(events) || events.length <= 0) {
    return Promise.resolve();
  }
  const seenPaths = new Set();
  const tasks = [];
  events.forEach((evt) => {
    if (!evt || evt.type !== "jump_image") return;
    const path = resolveJumpImagePath(evt.imageName);
    if (!path || seenPaths.has(path)) return;
    seenPaths.add(path);
    const task = preloadJumpImage(path)
      .then((img) => {
        const entry = ensureJumpImageSprite(path, img);
        return prewarmJumpImageSprite(entry);
      })
      .catch(() => false);
    tasks.push(task);
  });
  if (!tasks.length) return Promise.resolve();
  return Promise.allSettled(tasks);
}

function clearJumpImageTimers(entry) {
  if (!entry) return;
  entry.animToken = (Number(entry.animToken) || 0) + 1;
  if (entry.jumpRafId) {
    cancelAnimationFrame(entry.jumpRafId);
    entry.jumpRafId = 0;
  }
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
  el.loading = "eager";
  el.decoding = "async";
  el.fetchPriority = "high";
  el.src = path;
  el.style.position = "fixed";
  el.style.left = "0px";
  el.style.top = "0px";
  el.style.pointerEvents = "none";
  el.style.zIndex = `${JUMP_IMAGE_Z_INDEX}`;
  el.style.opacity = "0";
  el.style.willChange = "transform, opacity";
  el.style.transition = "none";
  el.style.transform = "translate3d(0px, 0px, 0)";
  el.style.transformOrigin = "left top";
  el.style.backfaceVisibility = "hidden";
  el.style.contain = "layout paint style";
  el.style.display = "block";
  el.style.visibility = "visible";
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
    hideTimer: 0,
    jumpRafId: 0,
    animToken: 0,
    ready: false,
    readyPromise: null,
    prewarmed: false,
    prewarmPromise: null
  };
  jumpImageState.spritesByPath.set(path, entry);
  return entry;
}

function ensureJumpImageElementReady(entry) {
  if (!entry || !entry.el) return Promise.resolve(false);
  if (entry.ready) return Promise.resolve(true);
  if (entry.readyPromise) return entry.readyPromise;

  const el = entry.el;
  entry.readyPromise = new Promise((resolve) => {
    let settled = false;
    const finish = (ok) => {
      if (settled) return;
      settled = true;
      const w = Number(el.naturalWidth) || Number(entry.naturalW) || 0;
      const h = Number(el.naturalHeight) || Number(entry.naturalH) || 0;
      if (w > 0 && h > 0) {
        entry.naturalW = w;
        entry.naturalH = h;
      }
      entry.ready = Boolean(ok && w > 0 && h > 0);
      resolve(entry.ready);
    };

    const runDecode = () => {
      if (typeof el.decode === "function") {
        el.decode()
          .then(() => finish(true))
          .catch(() => finish(true));
        return;
      }
      finish(true);
    };

    const currentW = Number(el.naturalWidth) || 0;
    const currentH = Number(el.naturalHeight) || 0;
    if (currentW > 0 && currentH > 0) {
      runDecode();
      return;
    }

    const onLoad = () => {
      cleanup();
      runDecode();
    };
    const onError = () => {
      cleanup();
      finish(false);
    };
    const cleanup = () => {
      el.removeEventListener("load", onLoad);
      el.removeEventListener("error", onError);
    };

    el.addEventListener("load", onLoad);
    el.addEventListener("error", onError);
  }).finally(() => {
    entry.readyPromise = null;
  });

  return entry.readyPromise;
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

  const viewportScale = Math.min(viewportW / naturalW, viewportH / naturalH, 1);
  const perfScale = Math.min(
    JUMP_IMAGE_MAX_DRAW_WIDTH / naturalW,
    JUMP_IMAGE_MAX_DRAW_HEIGHT / naturalH,
    1
  );
  const scale = Math.min(viewportScale, perfScale);
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

function hideJumpImageSprite(entry) {
  if (!entry || !entry.el) return;
  clearJumpImageTimers(entry);
  entry.el.style.transition = "none";
  entry.el.style.opacity = "0";
}

function prewarmJumpImageSprite(entry) {
  if (!entry || !entry.el || !entry.el.isConnected) return Promise.resolve(false);
  if (entry.prewarmed) return Promise.resolve(true);
  if (entry.prewarmPromise) return entry.prewarmPromise;

  entry.prewarmPromise = (async () => {
    const ready = await ensureJumpImageElementReady(entry);
    if (!ready) return false;
    const layout = layoutJumpImageSprite(entry);
    if (!layout) return false;

    const warmOpacity = `${JUMP_IMAGE_WARM_OPACITY}`;
    entry.el.style.display = "block";
    entry.el.style.transition = "none";
    entry.el.style.opacity = warmOpacity;
    // Keep prewarm in viewport so browser uploads texture on first load.
    const warmY = Math.max(0, Math.round((entry.viewportH - entry.drawH) / 2));
    entry.el.style.transform =
      `translate3d(${layout.posX}px, ${warmY}px, 0)`;
    // Let style + paint settle first.
    await new Promise((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
    );
    // Tiny real movement warms compositor path before gameplay.
    entry.el.style.transition = `transform ${JUMP_IMAGE_PREWARM_MOVE_MS}ms linear`;
    entry.el.style.transform =
      `translate3d(${layout.posX}px, ${warmY + 1}px, 0)`;
    await new Promise((resolve) => setTimeout(resolve, JUMP_IMAGE_PREWARM_MOVE_MS + 8));
    entry.el.style.transition = "none";
    entry.el.style.opacity = "0";
    entry.el.style.transform =
      `translate3d(${layout.posX}px, ${layout.startY}px, 0)`;
    entry.prewarmed = true;
    return true;
  })()
    .catch(() => false)
    .finally(() => {
      entry.prewarmPromise = null;
    });

  return entry.prewarmPromise;
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
      hideJumpImageSprite(entry);
    }
  });
  if (remove) {
    jumpImageState.spritesByPath.clear();
  }
}

function markJumpImageGhostPause(durationMs = 0) {
  const now = performance.now();
  const msRaw = Number(durationMs);
  const ms = Number.isFinite(msRaw) ? Math.max(0, msRaw) : 0;
  const until = now + ms;
  if (until > jumpImageState.ghostPauseUntilPerf) {
    jumpImageState.ghostPauseUntilPerf = until;
  }
}

function startJumpImageAnimation(entry) {
  if (!entry || !entry.el || !entry.el.isConnected) return;
  const layout = layoutJumpImageSprite(entry);
  if (!layout) return;

  markJumpImageGhostPause(
    JUMP_IMAGE_FALL_DELAY_MS +
      JUMP_IMAGE_FALL_MS +
      JUMP_IMAGE_REMOVE_DELAY_MS +
      JUMP_IMAGE_GHOST_ECHO_PAUSE_EXTRA_MS
  );

  clearJumpImageTimers(entry);
  const token = entry.animToken;
  entry.prewarmed = true;
  entry.el.style.display = "block";
  entry.el.style.visibility = "visible";
  entry.el.style.opacity = "1";
  entry.el.style.transition = "none";
  entry.el.style.transform =
    `translate3d(${layout.posX}px, ${layout.startY}px, 0)`;

  entry.jumpRafId = requestAnimationFrame(() => {
    entry.jumpRafId = 0;
    if (!entry.el || !entry.el.isConnected) return;
    if (entry.animToken !== token) return;
    entry.el.style.transition =
      `transform ${JUMP_IMAGE_JUMP_MS}ms cubic-bezier(0, 0.55, 0.45, 1)`;
    entry.el.style.transform =
      `translate3d(${layout.posX}px, ${layout.jumpY}px, 0)`;
  });

  entry.fallTimer = setTimeout(() => {
    if (!entry.el || !entry.el.isConnected) return;
    if (entry.animToken !== token) return;
    entry.el.style.transition =
      `transform ${JUMP_IMAGE_FALL_MS}ms cubic-bezier(0.55, 0, 1, 0.45)`;
    entry.el.style.transform =
      `translate3d(${layout.posX}px, ${layout.startY}px, 0)`;
  }, JUMP_IMAGE_FALL_DELAY_MS);

  entry.hideTimer = setTimeout(() => {
    if (!entry.el || !entry.el.isConnected) return;
    if (entry.animToken !== token) return;
    entry.el.style.transition = "none";
    entry.el.style.opacity = "0";
    entry.el.style.transform =
      `translate3d(${layout.posX}px, ${layout.startY}px, 0)`;
  }, JUMP_IMAGE_FALL_DELAY_MS + JUMP_IMAGE_REMOVE_DELAY_MS);
}

function runJumpImageEvent(imageName) {
  const path = resolveJumpImagePath(imageName);
  if (!path) return;

  const prepared = jumpImageState.spritesByPath.get(path);
  if (prepared && prepared.el?.isConnected) {
    ensureJumpImageElementReady(prepared).then((ok) => {
      if (!ok) return;
      startJumpImageAnimation(prepared);
    });
    return;
  }

  preloadJumpImage(path).then((img) => {
    const entry = ensureJumpImageSprite(path, img);
    ensureJumpImageElementReady(entry).then((ok) => {
      if (!ok) return;
      startJumpImageAnimation(entry);
    });
  });
}

function scheduleJumpImageEvent(imageName, frameDelay = 1) {
  const safeDelay = Math.max(0, Number(frameDelay) || 0);
  if (safeDelay <= 0) {
    runJumpImageEvent(imageName);
    return;
  }
  let remain = safeDelay;
  const tick = () => {
    if (remain <= 0) {
      runJumpImageEvent(imageName);
      return;
    }
    remain -= 1;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
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

      const sourceImageUrl = atlas.imagePath
        ? resolveRelativeAssetUrl(MIKU_GHOST_XML_PATH, atlas.imagePath)
        : "";
      return preloadCharacterImage(sourceImageUrl).then(() => {
        const sourceSize = getCharacterSourceImageSize(sourceImageUrl);
        const imageUrl = sourceImageUrl
          ? (getCharacterRenderImageUrl(sourceImageUrl) || sourceImageUrl)
          : "";
        const sourceFrames = pickLongestAtlasGroup(atlas.groups);
        const frames = sourceFrames.filter((frame) => {
          const w = Number(frame?.w);
          const h = Number(frame?.h);
          return w > 0 && h > 0;
        });
        const backgroundSize =
          sourceSize.w > 0 && sourceSize.h > 0
            ? `${sourceSize.w}px ${sourceSize.h}px`
            : "";

        const runtime = {
          imageUrl,
          backgroundSize,
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

  let created = false;
  let rootEl = document.getElementById("miku-ghost-sprite");
  if (!rootEl) {
    created = true;
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
  if (created) {
    resetMikuGhostAppliedFrameStyle();
  }
  return { rootEl, frameEl };
}

function getMikuGhostTargetTop() {
  const positionRoot = getCharacterPositionRoot("opponent");
  if (positionRoot && positionRoot.isConnected) {
    const inlineTop = String(positionRoot.style.top || "").trim();
    if (inlineTop) return inlineTop;
    const computedTop = String(getComputedStyle(positionRoot).top || "").trim();
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
  const style = mikuGhostState.appliedFrameStyle || (mikuGhostState.appliedFrameStyle = {
    rootWidth: "",
    rootHeight: "",
    frameWidth: "",
    frameHeight: "",
    left: "",
    top: "",
    backgroundImage: "",
    backgroundPosition: "",
    backgroundSize: "",
    backgroundRepeat: ""
  });

  const rootWidth = `${frameWidth}px`;
  const rootHeight = `${frameHeight}px`;
  const frameWidthPx = `${w}px`;
  const frameHeightPx = `${h}px`;
  const leftPx = `${-(frame.frameX || 0)}px`;
  const topPx = `${-(frame.frameY || 0)}px`;
  const bgImage =
    mikuGhostState.runtime.imageUrl
      ? `url('${mikuGhostState.runtime.imageUrl}')`
      : "";
  const bgPos = `${-frame.x}px ${-frame.y}px`;

  if (style.rootWidth !== rootWidth) {
    mikuGhostState.rootEl.style.width = rootWidth;
    style.rootWidth = rootWidth;
  }
  if (style.rootHeight !== rootHeight) {
    mikuGhostState.rootEl.style.height = rootHeight;
    style.rootHeight = rootHeight;
  }
  if (style.frameWidth !== frameWidthPx) {
    mikuGhostState.frameEl.style.width = frameWidthPx;
    style.frameWidth = frameWidthPx;
  }
  if (style.frameHeight !== frameHeightPx) {
    mikuGhostState.frameEl.style.height = frameHeightPx;
    style.frameHeight = frameHeightPx;
  }
  if (style.left !== leftPx) {
    mikuGhostState.frameEl.style.left = leftPx;
    style.left = leftPx;
  }
  if (style.top !== topPx) {
    mikuGhostState.frameEl.style.top = topPx;
    style.top = topPx;
  }
  if (style.backgroundImage !== bgImage) {
    mikuGhostState.frameEl.style.backgroundImage = bgImage;
    style.backgroundImage = bgImage;
  }
  if (style.backgroundPosition !== bgPos) {
    mikuGhostState.frameEl.style.backgroundPosition = bgPos;
    style.backgroundPosition = bgPos;
  }
  const bgSize = mikuGhostState.runtime.backgroundSize || "auto";
  if (style.backgroundSize !== bgSize) {
    mikuGhostState.frameEl.style.backgroundSize = bgSize;
    style.backgroundSize = bgSize;
  }
  if (style.backgroundRepeat !== "no-repeat") {
    mikuGhostState.frameEl.style.backgroundRepeat = "no-repeat";
    style.backgroundRepeat = "no-repeat";
  }
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
    resetMikuGhostAppliedFrameStyle();
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
    resetMikuGhostAppliedFrameStyle();
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

function resetMikuGhostAppliedFrameStyle() {
  mikuGhostState.appliedFrameStyle = {
    rootWidth: "",
    rootHeight: "",
    frameWidth: "",
    frameHeight: "",
    left: "",
    top: "",
    backgroundImage: "",
    backgroundPosition: "",
    backgroundSize: "",
    backgroundRepeat: ""
  };
}

async function preloadMikuGhostFromEvents(events = []) {
  if (!Array.isArray(events) || events.length <= 0) return false;
  const hasEvent = events.some((evt) => evt?.type === "show_miku_ghost");
  if (!hasEvent) return false;

  const runtime = await loadMikuGhostRuntime();
  if (!runtime || !Array.isArray(runtime.frames) || runtime.frames.length <= 0) {
    return false;
  }

  const sprite = ensureMikuGhostSprite();
  if (!sprite || !sprite.rootEl) return false;

  const root = sprite.rootEl;
  const prevDisplay = root.style.display;
  const prevVisibility = root.style.visibility;
  const prevOpacity = root.style.opacity;
  const prevTransition = root.style.transition;
  const prevPointerEvents = root.style.pointerEvents;

  root.style.display = "";
  root.style.visibility = "visible";
  root.style.opacity = "0.001";
  root.style.pointerEvents = "none";
  root.style.transition = "none";

  mikuGhostState.lockedTop = "";
  mikuGhostState.lockedMarginTop = "0px";
  resetMikuGhostAppliedFrameStyle();
  syncMikuGhostPosition();
  applyMikuGhostFrame(runtime.frames[0]);
  await new Promise((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
  );

  root.style.display = "none";
  root.style.visibility = prevVisibility;
  root.style.opacity = prevOpacity;
  root.style.pointerEvents = prevPointerEvents;
  root.style.transition = prevTransition;
  if (prevDisplay && prevDisplay !== "none") {
    root.style.display = prevDisplay;
  }

  return true;
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

  const slotEl = ensureCharacterSlot("opponent");
  if (!slotEl) return null;

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

    slotEl.insertBefore(root, slotEl.firstChild || null);
  } else if (root.parentElement !== slotEl) {
    slotEl.insertBefore(root, slotEl.firstChild || null);
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
  ghostEchoState.dadReturnStartPerf = 0;
  ghostEchoState.dadReturnFromX = Number.NaN;
  ghostEchoState.dadReturnToX = Number.NaN;
  ghostEchoState.dadReturnDurationMs = 0;
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

  const fromX = getOpponentCurrentXPx();
  const startPerf = performance.now();
  if (safeDuration > 0) {
    ghostEchoState.dadReturnUntilPerf = startPerf + safeDuration;
    ghostEchoState.dadReturnEasing = easingValue;
    ghostEchoState.dadReturnStartPerf = startPerf;
    ghostEchoState.dadReturnFromX = fromX;
    ghostEchoState.dadReturnToX = nextX;
    ghostEchoState.dadReturnDurationMs = safeDuration;
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
  const overrideXRaw = characterPositionOverrides.opponent.x;
  if (typeof overrideXRaw === "number" && Number.isFinite(overrideXRaw)) {
    return overrideXRaw;
  }

  const root = getCharacterPositionRoot("opponent");
  if (!root) return 0;
  let left = readCharacterRootAxisPx(root, "left");
  if (!Number.isFinite(left)) {
    left = readCharacterRootAxisPxFromRect(root, "left");
  }
  return Number.isFinite(left) ? left : 0;
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

function getGhostEchoDadRecentReturnStartX(maxAgeMs = 34) {
  const remainingMs = getGhostEchoDadReturnRemainingMs();
  if (remainingMs <= 0) return null;

  const startPerf = Number(ghostEchoState.dadReturnStartPerf);
  const fromX = Number(ghostEchoState.dadReturnFromX);
  if (!Number.isFinite(startPerf) || !Number.isFinite(fromX)) return null;

  const nowPerf = performance.now();
  const elapsedMs = nowPerf - startPerf;
  const limitRaw = Number(maxAgeMs);
  const limitMs = Number.isFinite(limitRaw) ? Math.max(0, limitRaw) : 34;
  if (elapsedMs < 0 || elapsedMs > limitMs) return null;

  return fromX;
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
    lastGhostEchoNoGhostPerf = performance.now();
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
  if (performance.now() < (Number(jumpImageState.ghostPauseUntilPerf) || 0)) {
    return;
  }

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
  const baseLeft = sourceRoot.style.left || "0px";
  const baseTop = sourceRoot.style.top || "0px";
  const sourceExtraScale = sourceRoot.style.getPropertyValue("--character-extra-scale");

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
    sprite.root.style.left = baseLeft;
    sprite.root.style.top = baseTop;
    sprite.root.style.transform = sourceRoot.style.transform || "";
    sprite.root.style.width = sourceRoot.style.width || "";
    sprite.root.style.height = sourceRoot.style.height || "";
    sprite.root.style.marginLeft = `${baseMarginLeft + ghostEchoState.offsetsX[i]}px`;
    sprite.root.style.marginTop = sourceRoot.style.marginTop || "0px";
    if (sourceExtraScale) {
      sprite.root.style.setProperty("--character-extra-scale", sourceExtraScale);
    } else {
      sprite.root.style.removeProperty("--character-extra-scale");
    }

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

function readCharacterRootAxisPx(root, axis) {
  if (!root) return Number.NaN;
  const resolvePercentPx = (raw) => {
    const pct = Number.parseFloat(raw);
    if (!Number.isFinite(pct)) return Number.NaN;
    const parent = root.offsetParent || root.parentElement;
    if (!parent) return Number.NaN;
    const rect = parent.getBoundingClientRect();
    const size = axis === "top" ? rect.height : rect.width;
    if (!Number.isFinite(size) || size <= 0) return Number.NaN;
    return (size * pct) / 100;
  };
  const key = axis === "top" ? "top" : "left";
  const inlineRaw = String(root.style[key] || "").trim();
  if (inlineRaw) {
    if (inlineRaw === "auto") return Number.NaN;
    if (inlineRaw.includes("%")) {
      const percentValue = resolvePercentPx(inlineRaw);
      if (Number.isFinite(percentValue)) return percentValue;
      return Number.NaN;
    }
    const inlineValue = Number.parseFloat(inlineRaw);
    if (Number.isFinite(inlineValue)) return inlineValue;
  }
  const computedRaw = String(getComputedStyle(root)[key] || "").trim();
  if (computedRaw) {
    if (computedRaw === "auto") return Number.NaN;
    if (computedRaw.includes("%")) {
      const percentValue = resolvePercentPx(computedRaw);
      if (Number.isFinite(percentValue)) return percentValue;
      return Number.NaN;
    }
    const computedValue = Number.parseFloat(computedRaw);
    if (Number.isFinite(computedValue)) return computedValue;
  }
  return Number.NaN;
}

function readCharacterRootAxisPxFromRect(root, axis) {
  if (!root) return Number.NaN;
  const parent = root.offsetParent || root.parentElement;
  if (!parent) return Number.NaN;
  const rootRect = root.getBoundingClientRect();
  const parentRect = parent.getBoundingClientRect();
  if (axis === "top") {
    return rootRect.top - parentRect.top;
  }
  return rootRect.left - parentRect.left;
}

function updateCharacterSlotLastKnownPosition(side) {
  const root = getCharacterPositionRoot(side);
  if (!root) return;
  const state = characterSlotLastKnownPx[side];
  if (!state) return;
  const nextX = readCharacterRootAxisPxFromRect(root, "left");
  const nextY = readCharacterRootAxisPxFromRect(root, "top");
  if (Number.isFinite(nextX)) state.x = nextX;
  if (Number.isFinite(nextY)) state.y = nextY;
}

function canReadCharacterRect(root) {
  if (!root) return false;
  if (!root.offsetParent) return false;
  const style = getComputedStyle(root);
  if (style.display === "none") return false;
  if (style.visibility === "hidden") return false;
  return true;
}

function captureCharacterRootPositionPx(root) {
  return {
    left: readCharacterRootAxisPx(root, "left"),
    top: readCharacterRootAxisPx(root, "top")
  };
}

function resetCharacterPositionTweenState(side) {
  const state = characterPositionTweenState[side];
  if (!state) return;
  state.active = false;
  state.startPerf = 0;
  state.endPerf = 0;
  state.easing = "";
  state.toX = Number.NaN;
  state.toY = Number.NaN;
}

function getCharacterPositionTweenRemainingMs(side) {
  const state = characterPositionTweenState[side];
  if (!state || !state.active) return 0;
  const remaining = Number(state.endPerf) - performance.now();
  if (!Number.isFinite(remaining) || remaining <= 0) {
    resetCharacterPositionTweenState(side);
    return 0;
  }
  return remaining;
}

function getCharacterPositionTweenEasing(side) {
  const state = characterPositionTweenState[side];
  const easing =
    typeof state?.easing === "string" && state.easing.trim()
      ? state.easing.trim()
      : SCENE_CAMERA_EASING;
  return easing;
}

function applyCharacterRenderOffset(side) {
  const sprite = characterSprites[side];
  if (!sprite || !sprite.rootEl) return;
  const root = sprite.rootEl;
  const slotPreset = characterSlotState[side]?.preset || "";
  const activePreset = characterPresetBySide[side] || "";
  const preset = normalizeCharacterPresetKey(activePreset || slotPreset);
  const presetOffset =
    CHARACTER_PRESET_OFFSETS[side]?.[preset] || { x: 0, y: 0 };
  const transientOffset = characterTransientOffsets[side] || { x: 0, y: 0 };
  const useJsonAnimOffsets = shouldApplyCharacterJsonAnimOffsets(sprite.config);
  const animOffset = useJsonAnimOffsets && typeof sprite.getCurrentAnimOffset === "function"
    ? sprite.getCurrentAnimOffset()
    : { x: 0, y: 0 };
  const animOffsetScale = getCharacterJsonAnimOffsetMultiplier(side, preset);
  const presetAnimOffset = getCharacterPresetAnimOffset(side, preset, sprite.currentAnim);

  const x =
    (Number.isFinite(Number(presetOffset.x)) ? Number(presetOffset.x) : 0) +
    (Number.isFinite(Number(transientOffset.x)) ? Number(transientOffset.x) : 0) +
    (Number.isFinite(Number(animOffset.x)) ? Number(animOffset.x) * animOffsetScale : 0) +
    (Number.isFinite(Number(presetAnimOffset.x)) ? Number(presetAnimOffset.x) : 0);
  const y =
    (Number.isFinite(Number(presetOffset.y)) ? Number(presetOffset.y) : 0) +
    (Number.isFinite(Number(transientOffset.y)) ? Number(transientOffset.y) : 0) +
    (Number.isFinite(Number(animOffset.y)) ? Number(animOffset.y) * animOffsetScale : 0) +
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
  const root = getCharacterPositionRoot(side);
  if (!root) return;
  const transitionRestoreToken = (characterPositionTransitionRestoreToken[side] || 0) + 1;
  characterPositionTransitionRestoreToken[side] = transitionRestoreToken;
  const override = characterPositionOverrides[side] || {};
  const lastKnown = characterSlotLastKnownPx[side] || { x: Number.NaN, y: Number.NaN };
  const lastKnownX = Number(lastKnown.x);
  const lastKnownY = Number(lastKnown.y);
  const instant = Boolean(options.instant);
  const durationRaw = Number(options.durationMs);
  const durationMs = Number.isFinite(durationRaw)
    ? Math.max(0, durationRaw)
    : SCENE_CAMERA_MOVE_MS;
  const easing =
    typeof options.easing === "string" && options.easing.trim()
      ? options.easing.trim()
      : SCENE_CAMERA_EASING;
  const targetXRaw = override.x;
  const targetYRaw = override.y;
  const hasTargetX = typeof targetXRaw === "number" && Number.isFinite(targetXRaw);
  const hasTargetY = typeof targetYRaw === "number" && Number.isFinite(targetYRaw);
  const transitionParts = [];
  if (hasTargetX) {
    transitionParts.push(`left ${durationMs}ms ${easing}`);
  }
  if (hasTargetY) {
    transitionParts.push(`top ${durationMs}ms ${easing}`);
  }
  const transitionValue = transitionParts.length > 0 ? transitionParts.join(", ") : "";
  if (root.style.transition !== transitionValue) {
    root.style.transition = transitionValue;
  }

  const targetX = hasTargetX ? targetXRaw : Number.NaN;
  const targetY = hasTargetY ? targetYRaw : Number.NaN;
  let fromX = hasTargetX ? readCharacterRootAxisPx(root, "left") : Number.NaN;
  let fromY = hasTargetY ? readCharacterRootAxisPx(root, "top") : Number.NaN;
  const tweenState = characterPositionTweenState[side];
  if (tweenState && tweenState.active) {
    if (hasTargetX && Number.isFinite(lastKnownX) && Math.abs(lastKnownX - fromX) > 1) {
      fromX = lastKnownX;
    }
    if (hasTargetY && Number.isFinite(lastKnownY) && Math.abs(lastKnownY - fromY) > 1) {
      fromY = lastKnownY;
    }
  }
  if (hasTargetX && (!Number.isFinite(fromX) || (Math.abs(fromX) <= 1 && Math.abs(lastKnownX) > 1))) {
    if (Number.isFinite(lastKnownX)) {
      fromX = lastKnownX;
    }
  }
  if (hasTargetY && (!Number.isFinite(fromY) || (Math.abs(fromY) <= 1 && Math.abs(lastKnownY) > 1))) {
    if (Number.isFinite(lastKnownY)) {
      fromY = lastKnownY;
    }
  }
  let synthesizedStart = false;
  if (!instant && (hasTargetX || hasTargetY) && canReadCharacterRect(root)) {
    if (hasTargetX) {
      const rectX = readCharacterRootAxisPxFromRect(root, "left");
      const computedLeft = String(getComputedStyle(root).left || "").trim();
      const preferLastKnownX =
        Number.isFinite(lastKnownX) &&
        Math.abs(lastKnownX) > 1 &&
        (!Number.isFinite(rectX) || Math.abs(rectX) <= 1);
      const bridgeX = preferLastKnownX ? lastKnownX : rectX;
      const shouldBridgeX =
        Number.isFinite(bridgeX) &&
        (!Number.isFinite(fromX) ||
          (Math.abs(fromX) <= 1 && Math.abs(bridgeX) > 1) ||
          computedLeft === "auto" ||
          computedLeft.includes("%"));
      if (shouldBridgeX) {
        root.style.left = `${bridgeX}px`;
        fromX = bridgeX;
        synthesizedStart = true;
      }
    }
    if (hasTargetY) {
      const rectY = readCharacterRootAxisPxFromRect(root, "top");
      const computedTop = String(getComputedStyle(root).top || "").trim();
      const preferLastKnownY =
        Number.isFinite(lastKnownY) &&
        Math.abs(lastKnownY) > 1 &&
        (!Number.isFinite(rectY) || Math.abs(rectY) <= 1);
      const bridgeY = preferLastKnownY ? lastKnownY : rectY;
      const shouldBridgeY =
        Number.isFinite(bridgeY) &&
        (!Number.isFinite(fromY) ||
          (Math.abs(fromY) <= 1 && Math.abs(bridgeY) > 1) ||
          computedTop === "auto" ||
          computedTop.includes("%"));
      if (shouldBridgeY) {
        root.style.top = `${bridgeY}px`;
        fromY = bridgeY;
        synthesizedStart = true;
      }
    }
  }
  if (hasTargetX && !Number.isFinite(fromX)) {
    if (Number.isFinite(lastKnownX)) {
      fromX = lastKnownX;
      synthesizedStart = true;
    }
    if (!Number.isFinite(fromX)) {
      const rectX = readCharacterRootAxisPxFromRect(root, "left");
      if (Number.isFinite(rectX)) {
        fromX = rectX;
        synthesizedStart = true;
      }
    }
  }
  if (hasTargetY && !Number.isFinite(fromY)) {
    if (Number.isFinite(lastKnownY)) {
      fromY = lastKnownY;
      synthesizedStart = true;
    }
    if (!Number.isFinite(fromY)) {
      const rectY = readCharacterRootAxisPxFromRect(root, "top");
      if (Number.isFinite(rectY)) {
        fromY = rectY;
        synthesizedStart = true;
      }
    }
  }
  const movingX =
    hasTargetX &&
    Number.isFinite(fromX) &&
    Math.abs(targetX - fromX) > 0.01;
  const movingY =
    hasTargetY &&
    Number.isFinite(fromY) &&
    Math.abs(targetY - fromY) > 0.01;
  const shouldTrackTween =
    !instant &&
    durationMs > 0 &&
    (movingX || movingY);
  if (shouldTrackTween) {
    const state = characterPositionTweenState[side];
    if (state) {
      const startPerf = performance.now();
      state.active = true;
      state.startPerf = startPerf;
      state.endPerf = startPerf + durationMs;
      state.easing = easing;
      state.toX = hasTargetX ? targetX : Number.NaN;
      state.toY = hasTargetY ? targetY : Number.NaN;
    }
  } else {
    resetCharacterPositionTweenState(side);
  }

  let prevTransition = "";
  if (instant) {
    prevTransition = transitionValue;
    root.style.transition = "none";
  } else if (synthesizedStart) {
    const prev = root.style.transition;
    root.style.transition = "none";
    if (hasTargetX && Number.isFinite(fromX)) {
      root.style.left = `${fromX}px`;
    }
    if (hasTargetY && Number.isFinite(fromY)) {
      root.style.top = `${fromY}px`;
    }
    root.getBoundingClientRect();
    root.style.transition = prev || transitionValue;
  }

  applyCharacterRenderOffset(side);

  root.style.left = hasTargetX ? `${targetX}px` : "";
  root.style.top = hasTargetY ? `${targetY}px` : "";

  if (instant) {
    requestAnimationFrame(() => {
      if (characterPositionTransitionRestoreToken[side] !== transitionRestoreToken) return;
      if (!root.isConnected) return;
      root.style.transition = prevTransition;
    });
  }
}

function shouldApplyCharacterPositionOverrideNow(side) {
  const root = getCharacterPositionRoot(side);
  const override = characterPositionOverrides[side] || {};
  const hasOverride =
    (typeof override.x === "number" && Number.isFinite(override.x)) ||
    (typeof override.y === "number" && Number.isFinite(override.y));
  if (hasOverride) return true;
  if (!root) return false;
  return Boolean(root.style.left || root.style.top);
}

function getCoTimedMoveEventForSide(evt, side) {
  if (!evt || !side || !Array.isArray(characterChangeEvents) || characterChangeEvents.length <= 0) {
    return null;
  }
  const timeMs = Number(evt.timeMs);
  if (!Number.isFinite(timeMs)) return null;
  const startIndex = Math.max(0, characterChangeEventIndex + 1);
  for (let i = startIndex; i < characterChangeEvents.length; i += 1) {
    const next = characterChangeEvents[i];
    if (!next) continue;
    const nextTime = Number(next.timeMs);
    if (!Number.isFinite(nextTime)) continue;
    if (nextTime !== timeMs) break;
    if (next.type !== "move_characters") continue;
    const nextSide = sideFromChartSlot(normalizeName(next.slot));
    if (nextSide === side) return next;
  }
  return null;
}

function hasCoTimedMoveEventForSide(evt, side) {
  return Boolean(getCoTimedMoveEventForSide(evt, side));
}

function shouldBridgeCharacterSwitchOffsetForCoTimedMove(evt) {
  if (!evt) return false;
  if (shouldForceInstantMoveEvent(evt)) return false;
  return getCharacterMoveDurationMs(evt) > 0;
}

function bridgeCharacterSwitchOffsetForMove(side, previousSprite, nextSprite) {
  if (!previousSprite || !nextSprite || previousSprite === nextSprite) return;
  const root = getCharacterPositionRoot(side);
  if (!root) return;

  const previousOffsetX = Number.parseFloat(previousSprite.rootEl?.style.marginLeft || "0");
  const previousOffsetY = Number.parseFloat(previousSprite.rootEl?.style.marginTop || "0");
  const nextOffsetX = Number.parseFloat(nextSprite.rootEl?.style.marginLeft || "0");
  const nextOffsetY = Number.parseFloat(nextSprite.rootEl?.style.marginTop || "0");
  const deltaX =
    (Number.isFinite(previousOffsetX) ? previousOffsetX : 0) -
    (Number.isFinite(nextOffsetX) ? nextOffsetX : 0);
  const deltaY =
    (Number.isFinite(previousOffsetY) ? previousOffsetY : 0) -
    (Number.isFinite(nextOffsetY) ? nextOffsetY : 0);

  if (Math.abs(deltaX) > 0.01) {
    let currentX = readCharacterRootAxisPx(root, "left");
    if (!Number.isFinite(currentX)) {
      currentX = readCharacterRootAxisPxFromRect(root, "left");
    }
    if (Number.isFinite(currentX)) {
      root.style.left = `${currentX + deltaX}px`;
    }
  }

  if (Math.abs(deltaY) > 0.01) {
    let currentY = readCharacterRootAxisPx(root, "top");
    if (!Number.isFinite(currentY)) {
      currentY = readCharacterRootAxisPxFromRect(root, "top");
    }
    if (Number.isFinite(currentY)) {
      root.style.top = `${currentY + deltaY}px`;
    }
  }
}

function applyCharacterPositionOnPresetSwitch(side) {
  if (!side) return;
  if (characterSkipPositionApplyOnSwitchBySide[side]) {
    characterSkipPositionApplyOnSwitchBySide[side] = false;
    return;
  }

  if (side === "opponent") {
    const remainingMs = getGhostEchoDadReturnRemainingMs();
    if (remainingMs > 0) {
      const recentReturnStartX = getGhostEchoDadRecentReturnStartX();
      const root = getCharacterPositionRoot(side);
      if (Number.isFinite(recentReturnStartX) && root) {
        // Ensure the new sprite is painted once at the return-start position.
        // Without this, an immediate switch after noghost can skip interpolation.
        root.style.transition = "none";
        root.style.left = `${recentReturnStartX}px`;
        root.getBoundingClientRect();
      }
      applyCharacterPositionOverride(side, {
        durationMs: remainingMs,
        easing: ghostEchoState.dadReturnEasing,
        instant: false
      });
      return;
    }
  }

  const moveRemainingMs = getCharacterPositionTweenRemainingMs(side);
  if (moveRemainingMs > 0) {
    applyCharacterPositionOverride(side, {
      durationMs: moveRemainingMs,
      easing: getCharacterPositionTweenEasing(side),
      instant: false
    });
    return;
  }

  if (shouldApplyCharacterPositionOverrideNow(side)) {
    applyCharacterPositionOverride(side, { instant: true });
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

function clearDeferredOpponentPresetLoad() {
  deferredOpponentPresetLoad = "";
  if (deferredOpponentPresetLoadRafId) {
    cancelAnimationFrame(deferredOpponentPresetLoadRafId);
    deferredOpponentPresetLoadRafId = 0;
  }
}

function requestDeferredOpponentPresetLoad(preset) {
  const normalizedPreset = normalizeCharacterPresetKey(preset);
  if (!normalizedPreset) return;

  deferredOpponentPresetLoad = normalizedPreset;
  if (deferredOpponentPresetLoadRafId) return;

  deferredOpponentPresetLoadRafId = requestAnimationFrame(() => {
    deferredOpponentPresetLoadRafId = 0;
    const pendingPreset = normalizeCharacterPresetKey(deferredOpponentPresetLoad);
    deferredOpponentPresetLoad = "";
    if (!pendingPreset) return;
    queueCharacterPresetLoad("opponent", pendingPreset);
  });
}

function getCharacterPresetLoadQueue(side) {
  if (side === "player") return characterPresetLoadQueueState.player;
  if (side === "opponent") return characterPresetLoadQueueState.opponent;
  if (side === "gf") return characterPresetLoadQueueState.gf;
  return null;
}

function isCharacterPresetLoadPending(side) {
  const queue = getCharacterPresetLoadQueue(side);
  if (!queue) return false;
  if (queue.running || queue.pendingPreset) return true;

  const activePreset = normalizeCharacterPresetKey(characterPresetBySide[side]);
  const targetPreset = normalizeCharacterPresetKey(characterSlotState[side]?.preset);
  if (!targetPreset) return false;
  return activePreset !== targetPreset;
}

function tryActivateCharacterPresetImmediate(side, preset) {
  const normalizedPreset = normalizeCharacterPresetKey(preset);
  if (!normalizedPreset) return false;
  const sprite = getPooledCharacterSprite(side, normalizedPreset);
  if (!sprite || !sprite.ready) return false;
  if (
    shouldWarmAllAnimationsForPreset(side, normalizedPreset) &&
    !sprite.prewarmAllAnimationsReady
  ) {
    return false;
  }

  if (!activatePooledCharacterSprite(side, normalizedPreset, sprite)) {
    return false;
  }

  const skipIdleApply = Boolean(characterSkipIdleApplyOnSwitchBySide[side]);
  characterSkipIdleApplyOnSwitchBySide[side] = false;

  updateCharacterAnchorMode(side);
  if (!skipIdleApply) {
    applyCharacterDisplayState(side, true);
  }
  applyCharacterPositionOnPresetSwitch(side);

  flushQueuedCharacterPlayAnimation(side);
  return true;
}

async function performCharacterPresetLoad(side, preset) {
  const normalizedPreset = normalizeCharacterPresetKey(preset);
  if (!normalizedPreset) return;
  const requiresFullWarm = shouldWarmAllAnimationsForPreset(side, normalizedPreset);

  const previousActivePreset = normalizeCharacterPresetKey(characterPresetBySide[side]);
  const skipIdleApply = Boolean(characterSkipIdleApplyOnSwitchBySide[side]);
  characterSkipIdleApplyOnSwitchBySide[side] = false;

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
  if (
    !nextSprite ||
    !nextSprite.ready ||
    (requiresFullWarm && !nextSprite.prewarmAllAnimationsReady)
  ) {
    nextSprite = await ensurePooledCharacterSprite(side, normalizedPreset, {
      prewarm: requiresFullWarm,
      warmAllAnimations: requiresFullWarm
    });
  }

  if (token !== characterLoadTokenBySide[side]) return;
  if (!nextSprite || !nextSprite.ready) {
    characterPendingPlayAnimationBySide[side] = "";
    return;
  }

  if (!activatePooledCharacterSprite(side, normalizedPreset, nextSprite)) {
    characterPendingPlayAnimationBySide[side] = "";
    return;
  }

  updateCharacterAnchorMode(side);
  if (!skipIdleApply) {
    applyCharacterDisplayState(side, true);
  }
  applyCharacterPositionOnPresetSwitch(side);
  flushQueuedCharacterPlayAnimation(side);

  const skipPresentationRefresh =
    side === "opponent" &&
    shouldSkipOpponentPresentationRefreshOnPresetSwap(previousActivePreset, normalizedPreset);
  if (!skipPresentationRefresh) {
    refreshCharacterPresentation();
  }
}

function queueCharacterPresetLoad(side, preset) {
  const queue = getCharacterPresetLoadQueue(side);
  if (!queue) return;
  const normalizedPreset = normalizeName(preset);
  if (!normalizedPreset) return;

  if (!queue.running && !queue.pendingPreset) {
    if (tryActivateCharacterPresetImmediate(side, normalizedPreset)) {
      return;
    }
  }

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
  opponentPresetLookaheadPrewarmRunning = false;
  opponentPresetLookaheadPrewarmQueue.length = 0;
  opponentPresetLookaheadPrewarmQueuedKeys.clear();
  clearDeferredOpponentPresetLoad();
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
  characterSkipIdleApplyOnSwitchBySide.player = false;
  characterSkipIdleApplyOnSwitchBySide.opponent = false;
  characterSkipIdleApplyOnSwitchBySide.gf = false;
  characterSkipPositionApplyOnSwitchBySide.player = false;
  characterSkipPositionApplyOnSwitchBySide.opponent = false;
  characterSkipPositionApplyOnSwitchBySide.gf = false;
  characterBridgePositionOnSwitchBySide.player = false;
  characterBridgePositionOnSwitchBySide.opponent = false;
  characterBridgePositionOnSwitchBySide.gf = false;
  characterPresetLoadQueueState.player.pendingPreset = "";
  characterPresetLoadQueueState.opponent.pendingPreset = "";
  characterPresetLoadQueueState.gf.pendingPreset = "";
  characterPositionOverrides.player.x = null;
  characterPositionOverrides.player.y = null;
  characterPositionOverrides.opponent.x = null;
  characterPositionOverrides.opponent.y = null;
  characterPositionOverrides.gf.x = null;
  characterPositionOverrides.gf.y = null;
  characterSlotLastKnownPx.player.x = Number.NaN;
  characterSlotLastKnownPx.player.y = Number.NaN;
  characterSlotLastKnownPx.opponent.x = Number.NaN;
  characterSlotLastKnownPx.opponent.y = Number.NaN;
  characterSlotLastKnownPx.gf.x = Number.NaN;
  characterSlotLastKnownPx.gf.y = Number.NaN;
  resetCharacterPositionTweenState("player");
  resetCharacterPositionTweenState("opponent");
  resetCharacterPositionTweenState("gf");
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
  // Keep cached jump-image elements to avoid re-decode stutter on retries.
  clearJumpImages(false);
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
  const previousSlotPreset = characterSlotState[side]?.preset || null;
  const immediatePlayAnimation = normalizeName(evt?.immediatePlayAnimation);
  const coTimedMoveEvent = getCoTimedMoveEventForSide(evt, side);
  characterSkipPositionApplyOnSwitchBySide[side] = Boolean(coTimedMoveEvent);
  characterBridgePositionOnSwitchBySide[side] =
    shouldBridgeCharacterSwitchOffsetForCoTimedMove(coTimedMoveEvent);
  characterPendingPlayAnimationBySide[side] = immediatePlayAnimation;
  characterSkipIdleApplyOnSwitchBySide[side] = Boolean(immediatePlayAnimation);

  characterSlotState[side].name = characterName;
  characterSlotState[side].preset = preset;

  if (side === "gf") {
    characterSkipPositionApplyOnSwitchBySide.gf = false;
    characterBridgePositionOnSwitchBySide.gf = false;
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

  if (!preset) {
    characterSkipPositionApplyOnSwitchBySide[side] = false;
    characterBridgePositionOnSwitchBySide[side] = false;
  }

  let deferredPresetLoad = false;
  if (preset) {
    const shouldDeferPresetLoad =
      side === "opponent" &&
      characterChartBatchApplying &&
      !immediatePlayAnimation &&
      shouldDeferOpponentPresetLoadForSwitch(preset);
    if (shouldDeferPresetLoad) {
      deferredPresetLoad = true;
      requestDeferredOpponentPresetLoad(preset);
    } else {
      if (side === "opponent") {
        clearDeferredOpponentPresetLoad();
      }
      queueCharacterPresetLoad(side, preset);
    }
  } else if (side === "opponent") {
    clearDeferredOpponentPresetLoad();
  }

  const skipPresentationRefresh =
    (side === "opponent" &&
      shouldSkipOpponentPresentationRefreshOnPresetSwap(previousSlotPreset, preset)) ||
    deferredPresetLoad;
  if (!skipPresentationRefresh) {
    requestCharacterPresentationRefresh();
  }
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
  if (shouldDelayCharacterVisualApplyUntilPresetActive(side)) return "not_ready";

  const sprite = characterSprites[side];
  if (!sprite || !sprite.ready) return "not_ready";

  const resolvedAnim = sprite.resolveAnimName(animName);
  if (!resolvedAnim || resolvedAnim === "idle") {
    // If a character swap is still in-flight, replay this command after load completes.
    if (isCharacterPresetLoadPending(side)) return "not_ready";
    return "invalid";
  }

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
  const scaledX = scaleChartCoordX(evt.x);
  const scaledY = scaleChartCoordY(evt.y);
  setSceneCameraFollowPos(scaledX, scaledY);
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
    showShowImageFhudOverlay(evt.imageName, {
      swapAkageColors: shouldSwapFinalAkageShowImageFhud(evt)
    });
    return;
  }
  hideShowImageFhudOverlay(true);
}

function applyJumpImageEvent(evt) {
  if (!evt) return;
  const imageName = evt.imageName;
  const elapsedSinceNoGhost = performance.now() - Number(lastGhostEchoNoGhostPerf);
  const inNoGhostWindow =
    elapsedSinceNoGhost >= 0 && elapsedSinceNoGhost <= JUMP_IMAGE_NOGHOST_DELAY_WINDOW_MS;
  // Pause ghost-sync slightly before the jump starts to avoid same-frame spikes.
  markJumpImageGhostPause(
    JUMP_IMAGE_FALL_DELAY_MS +
      JUMP_IMAGE_FALL_MS +
      JUMP_IMAGE_REMOVE_DELAY_MS +
      JUMP_IMAGE_GHOST_ECHO_PAUSE_EXTRA_MS
  );
  // Keep jump start immediate by default; only defer when noghost just fired.
  const delayFrames = inNoGhostWindow ? 1 : 0;
  scheduleJumpImageEvent(imageName, delayFrames);
}

function applyGhostEchoChartEvent(evt) {
  applyGhostEchoEvent(evt);
}

function applyScreenShakeEvent(evt) {
  if (!evt) return;
  triggerSceneScreenShake(evt.durationSeconds, evt.intensity, evt.timeMs);
}

function getCharacterMoveDurationMs(evt) {
  const durationSeconds = Number(evt?.durationSeconds);
  if (!Number.isFinite(durationSeconds)) return 0;
  return Math.max(0, durationSeconds * 1000);
}

function getChartScaleAxisSize(axis) {
  const gameEl = document.getElementById("game");
  if (!gameEl) return 0;
  return axis === "y"
    ? Number(gameEl.clientHeight) || 0
    : Number(gameEl.clientWidth) || 0;
}

function scaleChartCoordX(value) {
  const raw = Number(value);
  if (!Number.isFinite(raw)) return Number.NaN;
  const width = getChartScaleAxisSize("x");
  if (!Number.isFinite(width) || width <= 0) return raw;
  const base = PSYCH_CHART_BASE_WIDTH;
  if (!Number.isFinite(base) || base <= 0) return raw;
  return (raw * width) / base;
}

function scaleChartCoordY(value) {
  const raw = Number(value);
  if (!Number.isFinite(raw)) return Number.NaN;
  const height = getChartScaleAxisSize("y");
  if (!Number.isFinite(height) || height <= 0) return raw;
  const base = PSYCH_CHART_BASE_HEIGHT;
  if (!Number.isFinite(base) || base <= 0) return raw;
  return (raw * height) / base;
}

function shouldForceInstantMoveEvent(evt) {
  if (!evt) return false;
  const slot = normalizeName(evt.slot);
  const timeMs = Number(evt.timeMs);
  const x = Number(evt.x);
  if (!slot || !Number.isFinite(timeMs) || !Number.isFinite(x)) return false;
  return MOVE_CHARACTERS_FORCE_INSTANT.some((entry) => {
    if (!entry) return false;
    if (normalizeName(entry.slot) !== slot) return false;
    if (!Number.isFinite(Number(entry.timeMs))) return false;
    if (!Number.isFinite(Number(entry.x))) return false;
    if (Math.abs(timeMs - Number(entry.timeMs)) > MOVE_CHARACTERS_INSTANT_EPSILON_MS) {
      return false;
    }
    return Math.abs(x - Number(entry.x)) <= MOVE_CHARACTERS_INSTANT_EPSILON_PX;
  });
}

function applyCharacterMoveEvent(evt) {
  if (!evt) return;
  const side = sideFromChartSlot(normalizeName(evt.slot));
  if (!side) return;
  if (characterChartBatchApplying && characterRefreshDeferred) {
    characterRefreshDeferred = false;
    refreshCharacterPresentation();
  }

  const nextX = scaleChartCoordX(evt.x);
  const nextY = scaleChartCoordY(evt.y);
  const requestedDurationMs = getCharacterMoveDurationMs(evt);
  const forceInstant = shouldForceInstantMoveEvent(evt);
  let durationMs = forceInstant ? 0 : requestedDurationMs;
  if (MOVE_CHARACTERS_USE_ARRIVAL_TIME && requestedDurationMs > 0) {
    const judgeOffsetMsRaw =
      typeof window.getJudgeOffsetMs === "function"
        ? Number(window.getJudgeOffsetMs())
        : 0;
    const judgeOffsetMs = Number.isFinite(judgeOffsetMsRaw) ? judgeOffsetMsRaw : 0;
    const arrivalRaw = Number(evt.timeMs);
    const arrivalMs = Number.isFinite(arrivalRaw) ? arrivalRaw + judgeOffsetMs : Number.NaN;
    const nowRaw =
      typeof window.getSongTimeMs === "function"
        ? Number(window.getSongTimeMs())
        : Number.NaN;
    if (Number.isFinite(arrivalMs) && Number.isFinite(nowRaw)) {
      const remainingMs = Math.max(0, arrivalMs - nowRaw);
      durationMs = remainingMs > 0 ? Math.min(requestedDurationMs, remainingMs) : requestedDurationMs;
    }
  }
  if (Number.isFinite(nextX)) {
    characterPositionOverrides[side].x = nextX;
  }
  if (Number.isFinite(nextY)) {
    characterPositionOverrides[side].y = nextY;
  }
  applyCharacterPositionOverride(side, {
    durationMs,
    easing: typeof evt?.easing === "string" && evt.easing.trim() ? evt.easing : undefined,
    instant: durationMs <= 0
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
    evt.type === "show_miku_ghost" ||
    evt.type === "camera_follow_pos"
  ) {
    return triggerMs;
  }

  if (CHARACTER_CHART_USE_JUDGE_OFFSET) {
    // Optional: align chart events with judge offset (non-Psych behavior).
    const judgeOffsetMs =
      typeof window.getJudgeOffsetMs === "function"
        ? Number(window.getJudgeOffsetMs())
        : 0;
    if (Number.isFinite(judgeOffsetMs)) {
      triggerMs += judgeOffsetMs;
    }
  }

  // Optionally shift "Move Characters" to arrival-time semantics.
  if (evt.type === "move_characters" && MOVE_CHARACTERS_USE_ARRIVAL_TIME) {
    triggerMs -= getCharacterMoveDurationMs(evt);
  }

  if (!Number.isFinite(triggerMs)) return 0;
  if (triggerMs < 0) return 0;

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

  const upcomingOpponentTargets = collectUpcomingOpponentWarmTargets(nowMs);
  if (upcomingOpponentTargets.length > 0) {
    queueUpcomingOpponentPresetPrewarm(upcomingOpponentTargets);
  }
}

async function loadCharacterChangeEvents() {
  if (characterChangeEventsLoadPromise) return characterChangeEventsLoadPromise;

  characterChangeEventsLoadPromise = (async () => {
    try {
      const res = await fetch(CHARACTER_CHART_PATH);
      const json = await res.json();
      characterChangeEvents = parseCharacterChartEvents(json);
      opponentPlayAnimationsByPreset = collectPlayAnimationsByPresetForSide(
        "opponent",
        characterChangeEvents
      );
      preloadStageBackgroundFromEvents(characterChangeEvents);
      await preloadMikuGhostFromEvents(characterChangeEvents);
      preloadShowImageFromEvents(characterChangeEvents);
      preloadShowImageFhudFromEvents(characterChangeEvents);
      await preloadJumpImageFromEvents(characterChangeEvents);
      await prewarmCharacterPresetsFromEvents(characterChangeEvents, {
        maxTimeMs: CHARACTER_RUNTIME_PREWARM_WINDOW_MS
      });
      characterChangeEventsReady = true;
      resetCharacterChangeTimelinePlayback();
    } catch (err) {
      characterChangeEvents = [];
      opponentPlayAnimationsByPreset = new Map();
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
      const imageInfo = await resolveCharacterAtlasImageUrl(xmlPath, atlas.imagePath);
      const imageUrl = imageInfo?.imageUrl || "";
      const sourceWidth = Number(imageInfo?.sourceWidth);
      const sourceHeight = Number(imageInfo?.sourceHeight);
      return {
        imageUrl,
        groups: atlas.groups,
        sourceWidth: Number.isFinite(sourceWidth) && sourceWidth > 0 ? sourceWidth : 0,
        sourceHeight: Number.isFinite(sourceHeight) && sourceHeight > 0 ? sourceHeight : 0,
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
      if (shouldUseCharacterJsonMeta(config) && config?.characterJsonPath) {
        jsonPaths.add(config.characterJsonPath);
      }
    });
  });
  Object.values(GF_CHARACTER_PRESETS).forEach((config) => {
    if (config?.atlasXmlPath) paths.add(config.atlasXmlPath);
    if (shouldUseCharacterJsonMeta(config) && config?.characterJsonPath) {
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

function applyCharacterExtraScaleForSprite(side, preset, sprite) {
  if (!sprite || !sprite.rootEl) return;
  const useJsonScale = shouldApplyCharacterJsonScale(sprite.config);
  const metaScale = Number(sprite.meta?.scale);
  const baseScale =
    useJsonScale && Number.isFinite(metaScale) && metaScale > 0
      ? metaScale
      : 1;
  const presetScale = getCharacterPresetScaleMultiplier(side, preset);
  const appliedScale = baseScale * presetScale;
  sprite.rootEl.style.setProperty("--character-extra-scale", `${appliedScale}`);
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
      position: { x: 0, y: 0 },
      offsetsByAnim: {}
    };
    this.appliedFrameStyle = {
      rootWidth: "",
      rootHeight: "",
      frameWidth: "",
      frameHeight: "",
      left: "",
      top: "",
      backgroundPosition: "",
      backgroundSize: ""
    };
    this.appliedRenderOffset = {
      x: null,
      y: null
    };
    this.prewarmPainted = false;
    this.prewarmAllAnimationsReady = false;
    this.prewarmedAnimations = new Set();

    this.rootEl = document.createElement("div");
    this.rootEl.className = `character character--${side}`;

    this.frameEl = document.createElement("div");
    this.frameEl.className = "character-frame";

    this.rootEl.appendChild(this.frameEl);
    this.hostEl.appendChild(this.rootEl);
  }

  async load(presetForScale = null) {
    this.ready = false;
    this.prewarmPainted = false;
    this.prewarmAllAnimationsReady = false;
    this.prewarmedAnimations = new Set();
    const scalePreset = presetForScale || characterPresetBySide[this.side];
    const runtime = await buildCharacterConfigRuntimeCache(this.config);
    if (!runtime) {
      this.rootEl.style.display = "none";
      return false;
    }

    this.meta = cloneCharacterMeta(runtime.meta);
    applyCharacterExtraScaleForSprite(this.side, scalePreset, this);
    this.frameEl.style.imageRendering = this.meta.noAntialiasing ? "pixelated" : "";
    this.frameEl.style.backgroundImage = runtime.imageUrl ? `url('${runtime.imageUrl}')` : "";
    const backgroundSize = runtime.backgroundSize || "auto";
    this.frameEl.style.backgroundSize = backgroundSize;
    this.appliedFrameStyle.backgroundSize = backgroundSize;
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

  resolveAnimOffset(animName) {
    const offsets = this.meta?.offsetsByAnim || {};
    const normalizedAnim = normalizeName(animName);
    if (!normalizedAnim) return null;

    const exact = offsets[normalizedAnim];
    if (exact) return exact;

    if (
      normalizedAnim.startsWith("miss-") ||
      normalizedAnim.startsWith("hold-")
    ) {
      const lane = normalizedAnim.split("-")[1] || "";
      const fallback = offsets[`sing-${lane}`];
      if (fallback) return fallback;
    }

    return null;
  }

  getAnimReferenceSize(animName) {
    const resolvedAnim = this.resolveAnimName(animName);
    const frames = this.animations[resolvedAnim];
    const frame = Array.isArray(frames) && frames.length > 0 ? frames[0] : null;
    if (!frame) return { w: 0, h: 0 };

    const wRaw = Number(frame.frameWidth || frame.w);
    const hRaw = Number(frame.frameHeight || frame.h);
    return {
      w: Number.isFinite(wRaw) ? wRaw : 0,
      h: Number.isFinite(hRaw) ? hRaw : 0
    };
  }

  getCurrentFrameSize() {
    const frame =
      Array.isArray(this.currentFrames) && this.currentFrames.length > 0
        ? this.currentFrames[this.currentFrameIndex] || this.currentFrames[0]
        : null;
    if (!frame) return { w: 0, h: 0 };

    const wRaw = Number(frame.frameWidth || frame.w);
    const hRaw = Number(frame.frameHeight || frame.h);
    return {
      w: Number.isFinite(wRaw) ? wRaw : 0,
      h: Number.isFinite(hRaw) ? hRaw : 0
    };
  }

  getCurrentAnimOffset() {
    const idle = this.resolveAnimOffset("idle");
    const current = this.resolveAnimOffset(this.currentAnim) || idle;
    const idleSize = this.getAnimReferenceSize("idle");
    const currentSize = this.getCurrentFrameSize();
    const currentX = Number(current?.x);
    const currentY = Number(current?.y);
    const idleX = Number(idle?.x);
    const idleY = Number(idle?.y);
    const centerFixX = (Number(currentSize.w) - Number(idleSize.w)) * 0.5;
    const centerFixY = (Number(currentSize.h) - Number(idleSize.h)) * 0.5;
    return {
      x:
        (Number.isFinite(idleX) ? idleX : 0) -
        (Number.isFinite(currentX) ? currentX : 0) +
        (Number.isFinite(centerFixX) ? centerFixX : 0),
      y:
        (Number.isFinite(idleY) ? idleY : 0) -
        (Number.isFinite(currentY) ? currentY : 0) +
        (Number.isFinite(centerFixY) ? centerFixY : 0)
    };
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

    // Keep center-anchored renderer aligned with Psych-style per-animation offsets
    // when frame box size changes during animation playback.
    if (characterSprites[this.side] === this) {
      applyCharacterRenderOffset(this.side);
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

function normalizeCharacterSlotKey(side) {
  const key = normalizeName(side);
  if (key === "player" || key === "bf" || key === "boyfriend") return "player";
  if (key === "opponent" || key === "dad") return "opponent";
  if (key === "gf") return "gf";
  return null;
}

function ensureCharacterSlot(side) {
  const slotKey = normalizeCharacterSlotKey(side);
  if (!slotKey) return null;
  const layerEl = ensureCharacterLayer();
  if (!layerEl) return null;

  let slotEl = characterSlotEls[slotKey];
  if (!slotEl || !slotEl.isConnected) {
    slotEl = document.getElementById(`character-slot-${slotKey}`);
    if (!slotEl) {
      slotEl = document.createElement("div");
      slotEl.id = `character-slot-${slotKey}`;
      slotEl.className = `character-slot character-slot--${slotKey}`;
    }
    characterSlotEls[slotKey] = slotEl;
  }

  if (slotEl.parentElement !== layerEl) {
    layerEl.appendChild(slotEl);
  }
  return slotEl;
}

function getCharacterPositionRoot(side) {
  return ensureCharacterSlot(side);
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
  updateCharacterSlotLastKnownPosition("player");
  updateCharacterSlotLastKnownPosition("opponent");
  updateCharacterSlotLastKnownPosition("gf");

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
window.prewarmCharacterPresentationForGameplay = prewarmCharacterPresentationForGameplay;
window.resetCharacterChartStateForRetry = resetCharacterChartStateForRetry;
window.setCharacterAtlasDownscaleEnabled = (enabled) => {
  CHARACTER_ATLAS_DOWNSCALE_ENABLED = Boolean(enabled);
  return CHARACTER_ATLAS_DOWNSCALE_ENABLED;
};
window.getCharacterAtlasDownscaleEnabled = () => CHARACTER_ATLAS_DOWNSCALE_ENABLED;
window.setMikuDownOffsetY = (value) => {
  const next = Number(value);
  MIKU_DOWN_EXTRA_OFFSET_Y = Number.isFinite(next) ? next : 0;
  applyCharacterRenderOffset("opponent");
  return MIKU_DOWN_EXTRA_OFFSET_Y;
};
window.setMikuLeftOffsetY = (value) => {
  const next = Number(value);
  MIKU_LEFT_EXTRA_OFFSET_Y = Number.isFinite(next) ? next : 0;
  applyCharacterRenderOffset("opponent");
  return MIKU_LEFT_EXTRA_OFFSET_Y;
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
  const root = sprite.rootEl;
  if (visible) {
    root.style.display = "";
    root.style.visibility = "visible";
    root.style.opacity = "";
    root.style.pointerEvents = "";
    return;
  }
  root.style.display = "none";
}

function showOnlyCharacterSide(side) {
  setCharacterVisibility("player", side === "player");
  setCharacterVisibility("opponent", side === "opponent");
}

function shouldDelayCharacterVisualApplyUntilPresetActive(side) {
  const activePreset = normalizeCharacterPresetKey(characterPresetBySide[side]);
  const targetPreset = normalizeCharacterPresetKey(characterSlotState[side]?.preset);
  if (!activePreset || !targetPreset) return false;
  return activePreset !== targetPreset;
}

function applyCharacterDisplayState(side, forceRestart = false) {
  const sprite = characterSprites[side];
  const state = characterDisplayState[side];
  if (!sprite || !state) return;
  if (shouldDelayCharacterVisualApplyUntilPresetActive(side)) return;

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
  if (normalizedSide !== "opponent") {
    return false;
  }

  const preset = normalizeCharacterPresetKey(characterSlotState.opponent?.preset);
  if (!preset) return false;
  return OPPONENT_MIKU_WARM_POOL_PRESETS.has(preset);
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
    runtime.holdAdvanceStarted = true;
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
  const playerSlot = ensureCharacterSlot("player");
  const opponentSlot = ensureCharacterSlot("opponent");
  const gfSlot = ensureCharacterSlot("gf");
  if (!playerSlot || !opponentSlot || !gfSlot) return;

  const initialPlayerPreset = characterPresetBySide.player || "shadow";
  const initialOpponentPreset = characterPresetBySide.opponent || "shadow";
  const initialGfPreset = characterPresetBySide.gf || "bgthing";
  const initialPlayerConfig =
    getPresetConfig("player", initialPlayerPreset) || CHARACTER_PRESETS.shadow.player;
  const initialOpponentConfig =
    getPresetConfig("opponent", initialOpponentPreset) || CHARACTER_PRESETS.shadow.opponent;
  const initialGfConfig =
    getPresetConfig("gf", initialGfPreset) || GF_CHARACTER_PRESETS.bgthing;

  characterSprites.player = new CharacterSprite("player", initialPlayerConfig, playerSlot);
  characterSprites.opponent = new CharacterSprite("opponent", initialOpponentConfig, opponentSlot);
  characterSprites.gf = new CharacterSprite("gf", initialGfConfig, gfSlot);
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
  runtime.holdAdvanceStarted = false;
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
    setCharacterVisual(side, "hold", lane, {
      ...base,
      anim: holdAnim,
      holdFreeze: true
    });
    scheduleHoldFinalRun(side, lane, holdAnim, extra);
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
    const hadPendingAdvance = Boolean(runtime.holdAdvanceTimer);
    if (runtime.holdAdvanceTimer) {
      clearTimeout(runtime.holdAdvanceTimer);
      runtime.holdAdvanceTimer = null;
      runtime.holdAdvancePerf = 0;
    }
    runtime.holdEnded = true;
    runtime.holdReadyPerf = performance.now() + getCharacterSettleDelayMs(side, holdAnim);

    if (!runtime.holdAdvanceStarted || hadPendingAdvance) {
      runtime.holdAdvanceStarted = true;
      setCharacterVisual(side, "hold", releaseLane, {
        ...extra,
        lane: releaseLane,
        laneAnim: releaseLaneAnim,
        anim: holdAnim,
        holdFreeze: false
      });
    }

    // Always schedule idle at hold end to avoid player getting stuck when keyup is missed.
    queueCharacterIdleAt(side, runtime.holdReadyPerf);
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
