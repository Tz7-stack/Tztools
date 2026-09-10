/* =========================================================
   TzTools V7.5
   Smart Tool Finder + Accounts + Favorites + Recent + Compare
   ========================================================= */

"use strict";

/* =========================================================
   1. SUPABASE
   ========================================================= */

const SUPABASE_URL = "https://nslaakklgidpzwlymrhf.supabase.co";

/*
  IMPORTANT:
  Paste your SUPABASE PUBLISHABLE KEY below.

  DO NOT paste the secret/service_role key here.
*/
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_XoDQsJkHs_7PA8wQAoutHA_glygnyxK";

let supabaseClient = null;

if (
  window.supabase &&
  SUPABASE_PUBLISHABLE_KEY &&
  !SUPABASE_PUBLISHABLE_KEY.includes("PASTE_YOUR")
) {
  supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );
}


/* =========================================================
   2. LOCAL STORAGE
   ========================================================= */

const STORAGE_KEYS = {
  favorites: "tztools_v75_favorites",
  recent: "tztools_v75_recent",
  compare: "tztools_v75_compare",
  theme: "tztools_v75_theme"
};

function loadStorage(key, fallback = []) {
  try {
    const value = localStorage.getItem(key);

    if (!value) return fallback;

    return JSON.parse(value);
  } catch (error) {
    console.warn("Storage read error:", error);
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Storage save error:", error);
  }
}


/* =========================================================
   3. APP STATE
   ========================================================= */

const state = {
  currentView: "home",
  currentQuery: "",
  currentResults: [],
  favorites: loadStorage(STORAGE_KEYS.favorites, []),
  recent: loadStorage(STORAGE_KEYS.recent, []),
  comparisons: loadStorage(STORAGE_KEYS.compare, []),
  currentTool: null,
  currentUser: null,
  profile: null,
  darkMode: localStorage.getItem(STORAGE_KEYS.theme) === "dark"
};


/* =========================================================
   4. TOOL DATABASE
   ========================================================= */

const tools = [

  /* ================= AI ================= */

  {
    name: "ChatGPT",
    category: "AI",
    icon: "🤖",
    description: "AI assistant for questions, writing, brainstorming, learning and more.",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://chatgpt.com/",
    tags: ["ai", "assistant", "study", "writing", "research", "questions"],
    intents: ["ai", "study", "write", "research", "brainstorm"]
  },

  {
    name: "Claude",
    category: "AI",
    icon: "🧠",
    description: "AI assistant useful for writing, analysis, brainstorming and research.",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://claude.ai/",
    tags: ["ai", "assistant", "writing", "research", "analysis"],
    intents: ["ai", "write", "research"]
  },

  {
    name: "Gemini",
    category: "AI",
    icon: "✨",
    description: "Google's AI assistant for answering questions, learning and creating.",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://gemini.google.com/",
    tags: ["ai", "google", "study", "questions", "research"],
    intents: ["ai", "study", "research"]
  },

  {
    name: "Perplexity",
    category: "AI",
    icon: "🔎",
    description: "AI search and research tool designed to help you find information.",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.perplexity.ai/",
    tags: ["ai", "search", "research", "answers"],
    intents: ["ai", "research", "search", "study"]
  },

  {
    name: "Microsoft Copilot",
    category: "AI",
    icon: "🪟",
    description: "AI assistant for questions, ideas, writing and productivity.",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://copilot.microsoft.com/",
    tags: ["ai", "assistant", "writing", "productivity"],
    intents: ["ai", "write", "productivity"]
  },


  /* ================= DESIGN ================= */

  {
    name: "Canva",
    category: "Design",
    icon: "🎨",
    description: "Easy design platform for logos, posters, presentations, social media and more.",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://www.canva.com/",
    tags: ["design", "logo", "poster", "graphics", "social media", "presentation"],
    intents: ["logo", "design", "poster", "graphics", "presentation"]
  },

  {
    name: "Adobe Express",
    category: "Design",
    icon: "🅰️",
    description: "Quickly create graphics, flyers, social posts, videos and other designs.",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.adobe.com/express/",
    tags: ["design", "logo", "graphics", "poster", "social media"],
    intents: ["logo", "design", "graphics", "poster"]
  },

  {
    name: "Figma",
    category: "Design",
    icon: "🟣",
    description: "Collaborative design platform for interfaces, graphics and prototypes.",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.figma.com/",
    tags: ["design", "ui", "ux", "prototype", "graphics"],
    intents: ["design", "website", "ui"]
  },

  {
    name: "Looka",
    category: "Design",
    icon: "💎",
    description: "AI-powered logo and brand identity maker.",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://looka.com/",
    tags: ["logo", "branding", "brand", "design", "ai"],
    intents: ["logo", "branding"]
  },

  {
    name: "Logo.com",
    category: "Design",
    icon: "🏷️",
    description: "Online logo maker for creating brand logos quickly.",
    pricing: "Freemium",
    rating: 4.4,
    url: "https://logo.com/",
    tags: ["logo", "branding", "brand"],
    intents: ["logo", "branding"]
  },


  /* ================= IMAGES ================= */

  {
    name: "Pixlr",
    category: "Images",
    icon: "🖼️",
    description: "Online photo editor for quick image editing and graphic design.",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://pixlr.com/",
    tags: ["photo", "image", "editing", "design"],
    intents: ["photo", "image", "edit"]
  },

  {
    name: "Photopea",
    category: "Images",
    icon: "📸",
    description: "Powerful browser-based image editor with advanced editing features.",
    pricing: "Free",
    rating: 4.7,
    url: "https://www.photopea.com/",
    tags: ["photo", "image", "photoshop", "editing"],
    intents: ["photo", "image", "edit"]
  },

  {
    name: "remove.bg",
    category: "Images",
    icon: "✂️",
    description: "Automatically remove backgrounds from images.",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.remove.bg/",
    tags: ["background", "remove", "image", "photo"],
    intents: ["background", "image", "photo"]
  },

  {
    name: "Unsplash",
    category: "Images",
    icon: "🌄",
    description: "Large library of free high-quality photos.",
    pricing: "Free",
    rating: 4.8,
    url: "https://unsplash.com/",
    tags: ["photos", "images", "stock", "pictures"],
    intents: ["image", "photo", "pictures"]
  },

  {
    name: "Pexels",
    category: "Images",
    icon: "📷",
    description: "Free stock photos and videos for creative projects.",
    pricing: "Free",
    rating: 4.8,
    url: "https://www.pexels.com/",
    tags: ["photos", "videos", "stock", "pictures"],
    intents: ["image", "photo", "video"]
  },

  {
    name: "Pixabay",
    category: "Images",
    icon: "🌅",
    description: "Free stock images, illustrations, vectors and media.",
    pricing: "Free",
    rating: 4.6,
    url: "https://pixabay.com/",
    tags: ["images", "photos", "vectors", "stock"],
    intents: ["image", "photo", "graphics"]
  },


  /* ================= VIDEO ================= */

  {
    name: "CapCut",
    category: "Video",
    icon: "🎬",
    description: "Popular video editor for short-form videos, effects, captions and more.",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://www.capcut.com/",
    tags: ["video", "editing", "tiktok", "reels", "shorts"],
    intents: ["video", "edit", "shorts"]
  },

  {
    name: "VEED",
    category: "Video",
    icon: "🎞️",
    description: "Browser video editor for social media videos, captions and more.",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.veed.io/",
    tags: ["video", "editing", "captions", "social media"],
    intents: ["video", "edit"]
  },

  {
    name: "InVideo",
    category: "Video",
    icon: "📹",
    description: "Online video creation platform with templates and AI features.",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://invideo.io/",
    tags: ["video", "ai", "editing", "templates"],
    intents: ["video", "edit", "ai"]
  },

  {
    name: "Descript",
    category: "Video",
    icon: "📝",
    description: "Video and audio editor with transcript-based editing.",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.descript.com/",
    tags: ["video", "audio", "editing", "transcript"],
    intents: ["video", "audio", "edit"]
  },

  {
    name: "DaVinci Resolve",
    category: "Video",
    icon: "🎥",
    description: "Professional video editing, color grading, effects and audio software.",
    pricing: "Free",
    rating: 4.8,
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    tags: ["video", "editing", "professional", "color"],
    intents: ["video", "edit"]
  },

  {
    name: "Clipchamp",
    category: "Video",
    icon: "✂️",
    description: "Simple online video editor for creating and editing videos.",
    pricing: "Freemium",
    rating: 4.4,
    url: "https://clipchamp.com/",
    tags: ["video", "editing", "microsoft"],
    intents: ["video", "edit"]
  },


  /* ================= WRITING ================= */

  {
    name: "Grammarly",
    category: "Writing",
    icon: "✍️",
    description: "Writing assistant for grammar, spelling, clarity and tone.",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.grammarly.com/",
    tags: ["writing", "grammar", "spelling", "essay"],
    intents: ["write", "grammar", "essay"]
  },

  {
    name: "LanguageTool",
    category: "Writing",
    icon: "🔤",
    description: "Grammar, spelling and style checker.",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://languagetool.org/",
    tags: ["writing", "grammar", "spelling"],
    intents: ["write", "grammar"]
  },

  {
    name: "QuillBot",
    category: "Writing",
    icon: "🪶",
    description: "Writing tools for paraphrasing, summarizing and improving text.",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://quillbot.com/",
    tags: ["writing", "paraphrase", "summary", "essay"],
    intents: ["write", "essay", "summary"]
  },

  {
    name: "Google Docs",
    category: "Writing",
    icon: "📄",
    description: "Online document editor for writing and collaborating.",
    pricing: "Free",
    rating: 4.7,
    url: "https://docs.google.com/",
    tags: ["writing", "document", "essay", "school"],
    intents: ["write", "document", "essay", "study"]
  },


  /* ================= PRODUCTIVITY ================= */

  {
    name: "Notion",
    category: "Productivity",
    icon: "📓",
    description: "Workspace for notes, planning, projects, databases and organization.",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.notion.com/",
    tags: ["notes", "planning", "organization", "productivity"],
    intents: ["notes", "productivity", "planning"]
  },

  {
    name: "Trello",
    category: "Productivity",
    icon: "📋",
    description: "Visual project and task management using boards and cards.",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://trello.com/",
    tags: ["tasks", "project", "planning", "productivity"],
    intents: ["tasks", "productivity", "planning"]
  },

  {
    name: "Todoist",
    category: "Productivity",
    icon: "✅",
    description: "Task manager for organizing your to-do list and projects.",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://todoist.com/",
    tags: ["tasks", "todo", "planning"],
    intents: ["tasks", "productivity", "planning"]
  },

  {
    name: "Google Keep",
    category: "Productivity",
    icon: "🗒️",
    description: "Simple notes and reminders for keeping track of ideas and tasks.",
    pricing: "Free",
    rating: 4.4,
    url: "https://keep.google.com/",
    tags: ["notes", "reminders", "tasks"],
    intents: ["notes", "productivity"]
  },

  {
    name: "Google Drive",
    category: "Productivity",
    icon: "☁️",
    description: "Cloud storage for files, documents and collaborative work.",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://drive.google.com/",
    tags: ["storage", "files", "documents", "cloud"],
    intents: ["files", "documents", "productivity"]
  },


  /* ================= WEBSITES ================= */

  {
    name: "Wix",
    category: "Websites",
    icon: "🌐",
    description: "Website builder for creating websites without needing to code.",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.wix.com/",
    tags: ["website", "builder", "business", "site"],
    intents: ["website", "business"]
  },

  {
    name: "WordPress.com",
    category: "Websites",
    icon: "📰",
    description: "Website and blog platform for creating online sites.",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://wordpress.com/",
    tags: ["website", "blog", "site"],
    intents: ["website", "blog"]
  },

  {
    name: "Framer",
    category: "Websites",
    icon: "⚡",
    description: "Modern website builder focused on design and responsive sites.",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.framer.com/",
    tags: ["website", "design", "builder"],
    intents: ["website", "design"]
  },

  {
    name: "Webflow",
    category: "Websites",
    icon: "🔷",
    description: "Visual website builder for creating highly customized websites.",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://webflow.com/",
    tags: ["website", "builder", "design"],
    intents: ["website", "design"]
  },

  {
    name: "Carrd",
    category: "Websites",
    icon: "💻",
    description: "Simple website builder for clean one-page websites.",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://carrd.co/",
    tags: ["website", "one page", "landing page"],
    intents: ["website", "landing"]
  },

  {
    name: "Google Sites",
    category: "Websites",
    icon: "🌍",
    description: "Simple website builder from Google.",
    pricing: "Free",
    rating: 4.2,
    url: "https://sites.google.com/",
    tags: ["website", "google", "site"],
    intents: ["website"]
  },


  /* ================= STUDENTS ================= */

  {
    name: "Khan Academy",
    category: "Students",
    icon: "🎓",
    description: "Free learning platform covering many school subjects.",
    pricing: "Free",
    rating: 4.8,
    url: "https://www.khanacademy.org/",
    tags: ["study", "math", "science", "school", "learning"],
    intents: ["study", "school", "math", "science"]
  },

  {
    name: "Quizlet",
    category: "Students",
    icon: "🧠",
    description: "Study platform with flashcards and learning activities.",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://quizlet.com/",
    tags: ["study", "flashcards", "school", "revision"],
    intents: ["study", "revision"]
  },

  {
    name: "WolframAlpha",
    category: "Students",
    icon: "🧮",
    description: "Computational knowledge engine for maths, science and more.",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.wolframalpha.com/",
    tags: ["math", "science", "calculations", "study"],
    intents: ["math", "science", "study"]
  },

  {
    name: "Desmos",
    category: "Students",
    icon: "📈",
    description: "Online graphing calculator and mathematics tools.",
    pricing: "Free",
    rating: 4.7,
    url: "https://www.desmos.com/",
    tags: ["math", "graph", "calculator", "school"],
    intents: ["math", "study"]
  },

  {
    name: "Coursera",
    category: "Students",
    icon: "📚",
    description: "Online learning platform with courses from universities and organizations.",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.coursera.org/",
    tags: ["learning", "courses", "education"],
    intents: ["study", "learning"]
  },

  {
    name: "edX",
    category: "Students",
    icon: "🎒",
    description: "Online learning platform offering courses and educational content.",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.edx.org/",
    tags: ["learning", "courses", "education"],
    intents: ["study", "learning"]
  },


  /* ================= PDF ================= */

  {
    name: "Smallpdf",
    category: "PDF",
    icon: "📕",
    description: "Online PDF tools for converting, compressing, merging and editing files.",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://smallpdf.com/",
    tags: ["pdf", "merge", "compress", "convert"],
    intents: ["pdf", "document", "convert"]
  },

  {
    name: "iLovePDF",
    category: "PDF",
    icon: "❤️",
    description: "Collection of online tools for managing and editing PDFs.",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.ilovepdf.com/",
    tags: ["pdf", "merge", "compress", "convert"],
    intents: ["pdf", "document", "convert"]
  },

  {
    name: "PDF24",
    category: "PDF",
    icon: "📑",
    description: "Free online PDF tools for editing, converting and managing documents.",
    pricing: "Free",
    rating: 4.5,
    url: "https://tools.pdf24.org/",
    tags: ["pdf", "documents", "convert", "merge"],
    intents: ["pdf", "document", "convert"]
  },

  {
    name: "Adobe Acrobat Online",
    category: "PDF",
    icon: "📘",
    description: "Online PDF tools from Adobe for common document tasks.",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.adobe.com/acrobat/online.html",
    tags: ["pdf", "adobe", "document"],
    intents: ["pdf", "document"]
  },


  /* ================= AUDIO ================= */

  {
    name: "ElevenLabs",
    category: "Audio",
    icon: "🔊",
    description: "AI voice and audio platform for generating and working with speech.",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://elevenlabs.io/",
    tags: ["voice", "audio", "ai", "speech"],
    intents: ["audio", "voice", "ai"]
  },

  {
    name: "Suno",
    category: "Audio",
    icon: "🎵",
    description: "AI music creation platform.",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://suno.com/",
    tags: ["music", "song", "ai", "audio"],
    intents: ["music", "audio", "ai"]
  },

  {
    name: "Audacity",
    category: "Audio",
    icon: "🎙️",
    description: "Free open-source audio recording and editing software.",
    pricing: "Free",
    rating: 4.7,
    url: "https://www.audacityteam.org/",
    tags: ["audio", "recording", "editing", "podcast"],
    intents: ["audio", "record", "podcast"]
  },

  {
    name: "Soundtrap",
    category: "Audio",
    icon: "🎚️",
    description: "Online music and audio production studio.",
    pricing: "Freemium",
    rating: 4.4,
    url: "https://www.soundtrap.com/",
    tags: ["music", "audio", "recording", "studio"],
    intents: ["music", "audio", "record"]
  }

];


/* =========================================================
   5. DOM HELPERS
   ========================================================= */

const $ = (id) => document.getElementById(id);

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================================================
   6. VIEW SYSTEM
   ========================================================= */

function switchView(viewName) {
  state.currentView = viewName;

  const views = document.querySelectorAll(".app-view");

  views.forEach((view) => {
    view.classList.remove("active");
    view.hidden = true;
  });

  const targetMap = {
    home: "home",
    results: "searchResultsView",
    support: "customerService",
    me: "me",
    dashboard: "dashboard"
  };

  const targetId = targetMap[viewName] || "home";
  const target = $(targetId);

  if (target) {
    target.hidden = false;
    target.classList.add("active");
  }

  const navbar = $("homeNavbar");

  if (navbar) {
    navbar.hidden = viewName !== "home";
  }

  document.querySelectorAll(".bottom-nav-item").forEach((item) => {
    const targetView = item.dataset.viewTarget;

    item.classList.toggle(
      "active",
      targetView === viewName
    );
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (viewName === "dashboard") {
    renderDashboard();
  }

  if (viewName === "me") {
    renderMe();
  }
}


/* =========================================================
   7. THEME
   ========================================================= */

function applyTheme() {
  document.body.classList.toggle("dark-mode", state.darkMode);
  document.documentElement.classList.toggle("dark-mode", state.darkMode);

  localStorage.setItem(
    STORAGE_KEYS.theme,
    state.darkMode ? "dark" : "light"
  );

  const status = $("themeStatus");

  if (status) {
    status.textContent = state.darkMode ? "On" : "Off";
  }
}

function toggleTheme() {
  state.darkMode = !state.darkMode;
  applyTheme();
}


/* =========================================================
   8. SMART SEARCH ENGINE
   ========================================================= */

const intentGroups = {

  logo: [
    "logo",
    "logos",
    "make a logo",
    "create a logo",
    "design a logo",
    "brand logo",
    "logo maker"
  ],

  design: [
    "design",
    "graphic",
    "graphics",
    "poster",
    "flyer",
    "banner",
    "social media design"
  ],

  video: [
    "video",
    "videos",
    "edit video",
    "video editing",
    "movie",
    "reels",
    "shorts",
    "tiktok"
  ],

  website: [
    "website",
    "web site",
    "webpage",
    "site",
    "build a website",
    "make a website",
    "create a website",
    "landing page"
  ],

  study: [
    "study",
    "studying",
    "school",
    "learn",
    "learning",
    "revision",
    "revise",
    "homework",
    "exam"
  ],

  math: [
    "math",
    "mathematics",
    "calculate",
    "equation",
    "algebra",
    "graph",
    "calculator"
  ],

  writing: [
    "write",
    "writing",
    "essay",
    "article",
    "grammar",
    "spell",
    "paraphrase",
    "summarize"
  ],

  ai: [
    "ai",
    "artificial intelligence",
    "ai tool",
    "assistant",
    "chatbot"
  ],

  image: [
    "image",
    "photo",
    "picture",
    "pictures",
    "background",
    "remove background",
    "edit photo"
  ],

  pdf: [
    "pdf",
    "document",
    "documents",
    "merge pdf",
    "compress pdf",
    "convert pdf"
  ],

  audio: [
    "audio",
    "sound",
    "voice",
    "record",
    "podcast",
    "music",
    "song"
  ],

  productivity: [
    "productivity",
    "organize",
    "organization",
    "tasks",
    "todo",
    "notes",
    "planning"
  ]
};

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function detectIntents(query) {
  const normalized = normalizeText(query);

  const detected = [];

  Object.entries(intentGroups).forEach(
    ([intent, phrases]) => {

      const matched = phrases.some((phrase) => {
        return normalized.includes(normalizeText(phrase));
      });

      if (matched) {
        detected.push(intent);
      }
    }
  );

  return detected;
}

function scoreTool(tool, query, detectedIntents) {
  const normalizedQuery = normalizeText(query);

  let score = 0;

  const words = normalizedQuery
    .split(" ")
    .filter(Boolean);

  /* Exact name match */
  if (
    normalizeText(tool.name) === normalizedQuery
  ) {
    score += 100;
  }

  /* Name contains query */
  if (
    normalizeText(tool.name).includes(normalizedQuery)
  ) {
    score += 50;
  }

  /* Category match */
  if (
    normalizeText(tool.category).includes(normalizedQuery)
  ) {
    score += 30;
  }

  /* Tags */
  tool.tags.forEach((tag) => {
    const normalizedTag = normalizeText(tag);

    if (normalizedQuery.includes(normalizedTag)) {
      score += 18;
    }

    words.forEach((word) => {
      if (
        word.length > 2 &&
        normalizedTag.includes(word)
      ) {
        score += 5;
      }
    });
  });

  /* Intent match */
  detectedIntents.forEach((intent) => {
    if (tool.intents.includes(intent)) {
      score += 30;
    }
  });

  /* Description */
  const description = normalizeText(tool.description);

  words.forEach((word) => {
    if (
      word.length > 2 &&
      description.includes(word)
    ) {
      score += 3;
    }
  });

  return score;
}

function searchTools(query) {
  const normalized = normalizeText(query);

  if (!normalized) {
    return [];
  }

  const detectedIntents = detectIntents(normalized);

  const scored = tools.map((tool) => ({
    tool,
    score: scoreTool(
      tool,
      normalized,
      detectedIntents
    )
  }));

  scored.sort((a, b) => {

    if (b.score !== a.score) {
      return b.score - a.score;
    }

    return b.tool.rating - a.tool.rating;
  });

  let results = scored
    .filter((item) => item.score > 0)
    .map((item) => item.tool);

  /*
    If the query is understandable but only a few
    tools matched, show closely related tools.
  */
  if (
    detectedIntents.length > 0 &&
    results.length < 10
  ) {
    const related = tools.filter((tool) =>
      detectedIntents.some((intent) =>
        tool.intents.includes(intent)
      )
    );

    results = [
      ...results,
      ...related.filter(
        (tool) => !results.includes(tool)
      )
    ];
  }

  return results.slice(0, 10);
}


/* =========================================================
   9. SEARCH UI
   ========================================================= */

function updateSuggestions() {
  const input = $("searchInput");
  const suggestions = $("suggestions");

  if (!input || !suggestions) return;

  const query = input.value.trim();

  if (!query) {
    suggestions.innerHTML = "";
    suggestions.hidden = true;
    return;
  }

  const results = searchTools(query).slice(0, 5);

  if (!results.length) {
    suggestions.innerHTML = "";
    suggestions.hidden = true;
    return;
  }

  suggestions.innerHTML = results
    .map(
      (tool) => `
        <button
          type="button"
          class="suggestion-item"
          data-suggestion="${escapeHTML(tool.name)}"
        >
          <span>${escapeHTML(tool.icon)}</span>
          <span>${escapeHTML(tool.name)}</span>
          <small>${escapeHTML(tool.category)}</small>
        </button>
      `
    )
    .join("");

  suggestions.hidden = false;
}

function performSearch(query) {
  const cleanQuery = query.trim();

  if (!cleanQuery) return;

  state.currentQuery = cleanQuery;

  const results = searchTools(cleanQuery);

  state.currentResults = results;

  const title = $("resultsTitle");
  const subtitle = $("resultsSubtitle");

  if (title) {
    title.textContent = `Tools for "${cleanQuery}"`;
  }

  if (subtitle) {
    subtitle.textContent =
      results.length
        ? "Here are some tools that can help you get there."
        : "We couldn't find a strong match yet.";
  }

  renderResults(results);

  switchView("results");
}

function renderResults(results) {
  const grid = $("toolsGrid");
  const count = $("resultsCount");
  const noResults = $("noResults");

  if (!grid) return;

  if (count) {
    count.textContent = `${results.length} ${
      results.length === 1 ? "tool" : "tools"
    } found`;
  }

  if (!results.length) {
    grid.innerHTML = "";

    if (noResults) {
      noResults.hidden = false;
    }

    return;
  }

  if (noResults) {
    noResults.hidden = true;
  }

  grid.innerHTML = results
    .map(renderToolCard)
    .join("");
}


/* =========================================================
   10. TOOL CARDS
   ========================================================= */

function isFavorite(toolName) {
  return state.favorites.includes(toolName);
}

function isCompared(toolName) {
  return state.comparisons.includes(toolName);
}

function renderToolCard(tool) {

  const favorite = isFavorite(tool.name);
  const compared = isCompared(tool.name);

  return `
    <article
      class="tool-card"
      data-tool-name="${escapeHTML(tool.name)}"
    >

      <div class="tool-card-top">

        <div class="tool-icon">
          ${escapeHTML(tool.icon)}
        </div>

        <div class="tool-info">

          <span class="tool-category">
            ${escapeHTML(tool.category)}
          </span>

          <h3 class="tool-name">
            ${escapeHTML(tool.name)}
          </h3>

        </div>

      </div>

      <p class="tool-description">
        ${escapeHTML(tool.description)}
      </p>

      <div class="tool-meta">

        <span class="tool-rating">
          ⭐ ${tool.rating.toFixed(1)}
        </span>

        <span class="tool-price">
          ${escapeHTML(tool.pricing)}
        </span>

      </div>

      <div class="tool-actions">

        <button
          type="button"
          class="favorite-button ${
            favorite ? "active" : ""
          }"
          data-action="favorite"
          data-tool="${escapeHTML(tool.name)}"
          aria-label="Favorite ${escapeHTML(tool.name)}"
        >
          ${favorite ? "❤️" : "🤍"}
        </button>

        <button
          type="button"
          class="compare-button ${
            compared ? "active" : ""
          }"
          data-action="compare"
          data-tool="${escapeHTML(tool.name)}"
        >
          ${compared ? "✓ Compared" : "⚖ Compare"}
        </button>

        <button
          type="button"
          class="visit-button"
          data-action="visit"
          data-tool="${escapeHTML(tool.name)}"
        >
          Visit Tool →
        </button>

      </div>

    </article>
  `;
}


/* =========================================================
   11. TOOL LOOKUP
   ========================================================= */

function getToolByName(name) {
  return tools.find(
    (tool) => tool.name === name
  );
}


/* =========================================================
   12. FAVORITES
   ========================================================= */

async function toggleFavorite(toolName) {

  const index = state.favorites.indexOf(toolName);

  if (index >= 0) {
    state.favorites.splice(index, 1);
  } else {
    state.favorites.unshift(toolName);
  }

  saveStorage(
    STORAGE_KEYS.favorites,
    state.favorites
  );

  if (state.currentResults.length) {
    renderResults(state.currentResults);
  }

  renderDashboard();

  await syncFavoriteToSupabase(toolName);
}

async function syncFavoriteToSupabase(toolName) {

  if (!supabaseClient || !state.currentUser) {
    return;
  }

  try {

    if (state.favorites.includes(toolName)) {

      await supabaseClient
        .from("favorites")
        .upsert({
          user_id: state.currentUser.id,
          tool_name: toolName
        });

    } else {

      await supabaseClient
        .from("favorites")
        .delete()
        .eq("user_id", state.currentUser.id)
        .eq("tool_name", toolName);

    }

  } catch (error) {
    console.warn(
      "Favorite sync error:",
      error
    );
  }
}


/* =========================================================
   13. RECENTLY USED
   ========================================================= */

async function addRecent(toolName) {

  state.recent = state.recent.filter(
    (name) => name !== toolName
  );

  state.recent.unshift(toolName);

  state.recent = state.recent.slice(0, 10);

  saveStorage(
    STORAGE_KEYS.recent,
    state.recent
  );

  renderDashboard();

  if (!supabaseClient || !state.currentUser) {
    return;
  }

  try {

    await supabaseClient
      .from("recently_used")
      .upsert(
        {
          user_id: state.currentUser.id,
          tool_name: toolName,
          visited_at: new Date().toISOString()
        },
        {
          onConflict: "user_id,tool_name"
        }
      );

  } catch (error) {

    console.warn(
      "Recent sync error:",
      error
    );
  }
}


/* =========================================================
   14. VISIT TOOL
   ========================================================= */

async function visitTool(toolName) {

  const tool = getToolByName(toolName);

  if (!tool) return;

  await addRecent(tool.name);

  window.open(
    tool.url,
    "_blank",
    "noopener,noreferrer"
  );

  showToast(
    `${tool.name} opened in a new tab.`
  );
}


/* =========================================================
   15. TOOL MODAL
   ========================================================= */

function openToolModal(toolName) {

  const tool = getToolByName(toolName);

  if (!tool) return;

  state.currentTool = tool;

  const modal = $("toolModal");

  if (!modal) return;

  if ($("toolModalIcon")) {
    $("toolModalIcon").textContent = tool.icon;
  }

  if ($("toolModalCategory")) {
    $("toolModalCategory").textContent =
      tool.category;
  }

  if ($("toolModalTitle")) {
    $("toolModalTitle").textContent =
      tool.name;
  }

  if ($("toolModalDescription")) {
    $("toolModalDescription").textContent =
      tool.description;
  }

  if ($("toolModalMeta")) {
    $("toolModalMeta").innerHTML = `
      <span>⭐ ${tool.rating.toFixed(1)}</span>
      <span>${escapeHTML(tool.pricing)}</span>
    `;
  }

  updateModalFavoriteButton();

  modal.hidden = false;
  modal.classList.add("open");
}

function closeToolModal() {

  const modal = $("toolModal");

  if (!modal) return;

  modal.classList.remove("open");
  modal.hidden = true;

  state.currentTool = null;
}

function updateModalFavoriteButton() {

  const button = $("modalFavoriteButton");

  if (!button || !state.currentTool) {
    return;
  }

  const favorite = isFavorite(
    state.currentTool.name
  );

  button.textContent = favorite
    ? "❤️ Remove Favorite"
    : "🤍 Add Favorite";
}


/* =========================================================
   16. COMPARE
   ========================================================= */

function toggleCompare(toolName) {

  const index =
    state.comparisons.indexOf(toolName);

  if (index >= 0) {

    state.comparisons.splice(index, 1);

  } else {

    if (state.comparisons.length >= 3) {

      showToast(
        "You can compare up to 3 tools."
      );

      return;
    }

    state.comparisons.push(toolName);
  }

  saveStorage(
    STORAGE_KEYS.compare,
    state.comparisons
  );

  updateCompareBar();

  if (state.currentResults.length) {
    renderResults(state.currentResults);
  }

  showToast(
    index >= 0
      ? "Removed from comparison."
      : "Added to comparison."
  );
}

function updateCompareBar() {

  const bar = $("compareBar");
  const count = $("compareCount");

  if (count) {
    count.textContent =
      state.comparisons.length;
  }

  if (bar) {
    bar.hidden =
      state.comparisons.length === 0;
  }
}

function clearCompare() {

  state.comparisons = [];

  saveStorage(
    STORAGE_KEYS.compare,
    state.comparisons
  );

  updateCompareBar();

  if (state.currentResults.length) {
    renderResults(state.currentResults);
  }
}

function openComparisonModal() {

  const modal = $("comparisonModal");

  if (!modal) return;

  const selectedTools =
    state.comparisons
      .map(getToolByName)
      .filter(Boolean);

  if ($("comparisonModalTitle")) {
    $("comparisonModalTitle").textContent =
      "Compare Tools";
  }

  if ($("comparisonContent")) {

    if (!selectedTools.length) {

      $("comparisonContent").innerHTML = `
        <p>No tools selected yet.</p>
      `;

    } else {

      $("comparisonContent").innerHTML = `
        <div class="comparison-table">

          ${selectedTools
            .map(
              (tool) => `
                <div class="comparison-column">

                  <div class="tool-icon">
                    ${escapeHTML(tool.icon)}
                  </div>

                  <h3>
                    ${escapeHTML(tool.name)}
                  </h3>

                  <p>
                    ${escapeHTML(tool.description)}
                  </p>

                  <strong>
                    ⭐ ${tool.rating.toFixed(1)}
                  </strong>

                  <span>
                    ${escapeHTML(tool.pricing)}
                  </span>

                  <button
                    class="visit-button"
                    data-action="visit"
                    data-tool="${escapeHTML(tool.name)}"
                  >
                    Visit Tool →
                  </button>

                </div>
              `
            )
            .join("")}

        </div>
      `;
    }
  }

  modal.hidden = false;
  modal.classList.add("open");
}

function closeComparisonModal() {

  const modal = $("comparisonModal");

  if (!modal) return;

  modal.classList.remove("open");
  modal.hidden = true;
}


/* =========================================================
   17. SAVE COMPARISON
   ========================================================= */

async function saveCurrentComparison() {

  if (!state.comparisons.length) {

    showToast(
      "Add tools to compare first."
    );

    return;
  }

  const name =
    `Comparison ${new Date().toLocaleDateString()}`;

  if (supabaseClient && state.currentUser) {

    try {

      const { error } =
        await supabaseClient
          .from("saved_comparisons")
          .insert({
            user_id: state.currentUser.id,
            name,
            tools: state.comparisons
          });

      if (error) throw error;

      showToast(
        "Comparison saved to your account."
      );

    } catch (error) {

      console.warn(
        "Comparison save error:",
        error
      );

      showToast(
        "Could not save comparison online."
      );
    }

  } else {

    showToast(
      "Log in to save comparisons online."
    );
  }
}


/* =========================================================
   18. DASHBOARD
   ========================================================= */

function renderDashboard() {

  const favoriteCount = $("favoriteCount");
  const recentCount = $("recentCount");
  const comparisonCount = $("comparisonCount");

  if (favoriteCount) {
    favoriteCount.textContent =
      state.favorites.length;
  }

  if (recentCount) {
    recentCount.textContent =
      state.recent.length;
  }

  if (comparisonCount) {
    comparisonCount.textContent =
      state.comparisons.length;
  }

  renderDashboardTools(
    state.favorites,
    "favoritesGrid",
    "favoritesEmpty"
  );

  renderDashboardTools(
    state.recent,
    "recentGrid",
    "recentEmpty"
  );

  renderSavedComparisons();
}

function renderDashboardTools(
  names,
  gridId,
  emptyId
) {

  const grid = $(gridId);
  const empty = $(emptyId);

  if (!grid) return;

  const selectedTools =
    names
      .map(getToolByName)
      .filter(Boolean);

  if (!selectedTools.length) {

    grid.innerHTML = "";

    if (empty) {
      empty.hidden = false;
    }

    return;
  }

  if (empty) {
    empty.hidden = true;
  }

  grid.innerHTML = selectedTools
    .map(renderToolCard)
    .join("");
}

function renderSavedComparisons() {

  const list = $("comparisonList");
  const empty = $("comparisonEmpty");

  if (!list) return;

  if (
    !state.currentUser ||
    !supabaseClient
  ) {

    list.innerHTML = "";

    if (empty) {
      empty.hidden = false;
      empty.textContent =
        "Log in to save comparisons.";
    }

    return;
  }

  /*
    Saved online comparisons are loaded separately
    when the user logs in.
  */
}


/* =========================================================
   19. ME PAGE
   ========================================================= */

function renderMe() {

  const name = $("profileName");
  const email = $("profileEmail");
  const avatar = $("profileAvatar");

  if (!state.currentUser) {

    if (name) {
      name.textContent = "Guest";
    }

    if (email) {
      email.textContent =
        "Log in to unlock your account";
    }

    if (avatar) {
      avatar.textContent = "👤";
    }

    return;
  }

  if (name) {
    name.textContent =
      state.profile?.display_name ||
      state.currentUser.email?.split("@")[0] ||
      "User";
  }

  if (email) {
    email.textContent =
      state.currentUser.email || "";
  }

  if (avatar) {
    avatar.textContent = "👤";
  }
}


/* =========================================================
   20. AUTH MODAL
   ========================================================= */

function openAuthModal() {

  const modal = $("authModal");

  if (!modal) return;

  updateAuthPanel();

  modal.hidden = false;
  modal.classList.add("open");
}

function closeAuthModal() {

  const modal = $("authModal");

  if (!modal) return;

  modal.classList.remove("open");
  modal.hidden = true;
}

function switchAuthTab(tab) {

  const loginTab = $("loginTab");
  const signupTab = $("signupTab");

  const loginForm = $("loginForm");
  const signupForm = $("signupForm");

  if (tab === "login") {

    loginTab?.classList.add("active");
    signupTab?.classList.remove("active");

    if (loginForm) {
      loginForm.hidden = false;
    }

    if (signupForm) {
      signupForm.hidden = true;
    }

  } else {

    signupTab?.classList.add("active");
    loginTab?.classList.remove("active");

    if (signupForm) {
      signupForm.hidden = false;
    }

    if (loginForm) {
      loginForm.hidden = true;
    }
  }
}

function updateAuthPanel() {

  const loggedInPanel =
    $("loggedInPanel");

  const loginForm =
    $("loginForm");

  const signupForm =
    $("signupForm");

  const tabs =
    document.querySelector(".auth-tabs");

  const loggedIn =
    Boolean(state.currentUser);

  if (loggedInPanel) {
    loggedInPanel.hidden = !loggedIn;
  }

  if (loginForm) {
    loginForm.hidden = loggedIn;
  }

  if (signupForm) {
    signupForm.hidden = loggedIn;
  }

  if (tabs) {
    tabs.hidden = loggedIn;
  }

  if (loggedIn) {

    if ($("loggedInEmail")) {
      $("loggedInEmail").textContent =
        state.currentUser.email || "";
    }

    if ($("loggedInName")) {
      $("loggedInName").textContent =
        state.profile?.display_name ||
        state.currentUser.email?.split("@")[0] ||
        "User";
    }

    if ($("loggedInAvatar")) {
      $("loggedInAvatar").textContent = "👤";
    }
  }
}

async function loginUser(event) {

  event.preventDefault();

  const message = $("loginMessage");

  if (!supabaseClient) {

    if (message) {
      message.textContent =
        "Add your Supabase publishable key in script.js first.";
    }

    return;
  }

  const email =
    $("loginEmail")?.value.trim();

  const password =
    $("loginPassword")?.value;

  if (!email || !password) {

    if (message) {
      message.textContent =
        "Please enter your email and password.";
    }

    return;
  }

  if (message) {
    message.textContent =
      "Logging in...";
  }

  try {

    const { data, error } =
      await supabaseClient.auth
        .signInWithPassword({
          email,
          password
        });

    if (error) throw error;

    state.currentUser = data.user;

    await loadUserData();

    if (message) {
      message.textContent =
        "Logged in successfully.";
    }

    updateAuthPanel();
    renderMe();
    showToast("Welcome back! 👋");

  } catch (error) {

    console.error(error);

    if (message) {
      message.textContent =
        error.message ||
        "Login failed.";
    }
  }
}

async function signupUser(event) {

  event.preventDefault();

  const message = $("signupMessage");

  if (!supabaseClient) {

    if (message) {
      message.textContent =
        "Add your Supabase publishable key in script.js first.";
    }

    return;
  }

  const name =
    $("signupName")?.value.trim();

  const email =
    $("signupEmail")?.value.trim();

  const password =
    $("signupPassword")?.value;

  if (!name || !email || !password) {

    if (message) {
      message.textContent =
        "Please fill in all fields.";
    }

    return;
  }

  if (password.length < 6) {

    if (message) {
      message.textContent =
        "Password must be at least 6 characters.";
    }

    return;
  }

  if (message) {
    message.textContent =
      "Creating account...";
  }

  try {

    const { data, error } =
      await supabaseClient.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: name
          }
        }
      });

    if (error) throw error;

    if (data.session) {

      state.currentUser = data.user;

      await loadUserData();

      updateAuthPanel();
      renderMe();

      showToast(
        "Account created! 🎉"
      );

    } else {

      if (message) {
        message.textContent =
          "Account created. Check your email to confirm your account.";
      }
    }

  } catch (error) {

    console.error(error);

    if (message) {
      message.textContent =
        error.message ||
        "Could not create account.";
    }
  }
}

async function logoutUser() {

  if (supabaseClient) {

    try {
      await supabaseClient.auth.signOut();
    } catch (error) {
      console.warn(
        "Logout error:",
        error
      );
    }
  }

  state.currentUser = null;
  state.profile = null;

  updateAuthPanel();
  renderMe();

  closeAuthModal();

  showToast(
    "You've been logged out."
  );
}


/* =========================================================
   21. LOAD USER DATA
   ========================================================= */

async function loadUserData() {

  if (
    !supabaseClient ||
    !state.currentUser
  ) {
    return;
  }

  try {

    const profileResponse =
      await supabaseClient
        .from("profiles")
        .select("*")
        .eq("id", state.currentUser.id)
        .maybeSingle();

    if (!profileResponse.error) {
      state.profile =
        profileResponse.data;
    }

    /* Favorites */

    const favoritesResponse =
      await supabaseClient
        .from("favorites")
        .select("tool_name")
        .eq("user_id", state.currentUser.id);

    if (!favoritesResponse.error) {

      const onlineFavorites =
        favoritesResponse.data
          .map((row) => row.tool_name);

      state.favorites = [
        ...new Set([
          ...state.favorites,
          ...onlineFavorites
        ])
      ];

      saveStorage(
        STORAGE_KEYS.favorites,
        state.favorites
      );
    }

    /* Recent */

    const recentResponse =
      await supabaseClient
        .from("recently_used")
        .select("tool_name, visited_at")
        .eq("user_id", state.currentUser.id)
        .order("visited_at", {
          ascending: false
        });

    if (!recentResponse.error) {

      const onlineRecent =
        recentResponse.data
          .map((row) => row.tool_name);

      state.recent = [
        ...new Set([
          ...onlineRecent,
          ...state.recent
        ])
      ].slice(0, 10);

      saveStorage(
        STORAGE_KEYS.recent,
        state.recent
      );
    }

    renderDashboard();
    renderMe();

  } catch (error) {

    console.warn(
      "Could not load user data:",
      error
    );
  }
}


/* =========================================================
   22. SUPABASE AUTH INITIALIZATION
   ========================================================= */

async function initializeAuth() {

  if (!supabaseClient) {
    renderMe();
    return;
  }

  try {

    const {
      data: {
        session
      }
    } =
      await supabaseClient.auth.getSession();

    if (session?.user) {

      state.currentUser =
        session.user;

      await loadUserData();
    }

    supabaseClient.auth.onAuthStateChange(
      async (_event, sessionData) => {

        state.currentUser =
          sessionData?.user || null;

        if (state.currentUser) {
          await loadUserData();
        } else {
          state.profile = null;
        }

        updateAuthPanel();
        renderMe();
        renderDashboard();
      }
    );

  } catch (error) {

    console.warn(
      "Auth initialization error:",
      error
    );
  }
}


/* =========================================================
   23. TOASTS
   ========================================================= */

function showToast(message) {

  const container =
    $("toastContainer");

  if (!container) return;

  const toast =
    document.createElement("div");

  toast.className = "toast";

  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {

    toast.classList.add("hide");

    setTimeout(() => {
      toast.remove();
    }, 300);

  }, 2500);
}


/* =========================================================
   24. EVENT LISTENERS
   ========================================================= */

function initializeEvents() {

  /* Search */

  $("searchForm")?.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();

      const input = $("searchInput");

      if (!input) return;

      performSearch(input.value);

      const suggestions =
        $("suggestions");

      if (suggestions) {
        suggestions.hidden = true;
      }
    }
  );

  $("searchInput")?.addEventListener(
    "input",
    updateSuggestions
  );

  $("searchClear")?.addEventListener(
    "click",
    () => {

      const input =
        $("searchInput");

      if (input) {
        input.value = "";
        input.focus();
      }

      updateSuggestions();
    }
  );


  /* Quick searches */

  document.querySelectorAll(
    ".quick-search"
  ).forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const query =
          button.dataset.query;

        const input =
          $("searchInput");

        if (input) {
          input.value = query;
        }

        performSearch(query);
      }
    );
  });


  /* Suggestions */

  $("suggestions")?.addEventListener(
    "click",
    (event) => {

      const button =
        event.target.closest(
          "[data-suggestion]"
        );

      if (!button) return;

      const query =
        button.dataset.suggestion;

      const input =
        $("searchInput");

      if (input) {
        input.value = query;
      }

      performSearch(query);
    }
  );


  /* Bottom navigation */

  document.querySelectorAll(
    ".bottom-nav-item"
  ).forEach((item) => {

    item.addEventListener(
      "click",
      () => {

        const target =
          item.dataset.viewTarget;

        switchView(target);
      }
    );
  });


  /* Generic view buttons */

  document.querySelectorAll(
    "[data-view-target]"
  ).forEach((element) => {

    if (
      element.classList.contains(
        "bottom-nav-item"
      )
    ) {
      return;
    }

    element.addEventListener(
      "click",
      () => {

        switchView(
          element.dataset.viewTarget
        );
      }
    );
  });


  /* Results back */

  $("resultsBackButton")?.addEventListener(
    "click",
    () => switchView("home")
  );

  $("emptyStateHomeButton")?.addEventListener(
    "click",
    () => switchView("home")
  );


  /* Category filter */

  $("resultsCategoryFilter")?.addEventListener(
    "change",
    (event) => {

      const category =
        event.target.value;

      let results =
        state.currentResults;

      if (category !== "all") {

        results =
          state.currentResults.filter(
            (tool) =>
              tool.category === category
          );
      }

      renderResults(results);
    }
  );


  /* Tool grid */

  $("toolsGrid")?.addEventListener(
    "click",
    handleToolAction
  );

  $("favoritesGrid")?.addEventListener(
    "click",
    handleToolAction
  );

  $("recentGrid")?.addEventListener(
    "click",
    handleToolAction
  );

  $("comparisonContent")?.addEventListener(
    "click",
    handleToolAction
  );


  /* Tool modal */

  $("toolModalClose")?.addEventListener(
    "click",
    closeToolModal
  );

  $("toolModalBackdrop")?.addEventListener(
    "click",
    closeToolModal
  );

  $("visitToolButton")?.addEventListener(
    "click",
    async () => {

      if (!state.currentTool) return;

      await visitTool(
        state.currentTool.name
      );

      closeToolModal();
    }
  );

  $("modalFavoriteButton")?.addEventListener(
    "click",
    async () => {

      if (!state.currentTool) return;

      await toggleFavorite(
        state.currentTool.name
      );

      updateModalFavoriteButton();
    }
  );


  /* Compare */

  $("clearCompareButton")?.addEventListener(
    "click",
    clearCompare
  );

  $("openCompareButton")?.addEventListener(
    "click",
    openComparisonModal
  );

  $("comparisonModalClose")?.addEventListener(
    "click",
    closeComparisonModal
  );

  $("closeComparisonButton")?.addEventListener(
    "click",
    closeComparisonModal
  );

  $("comparisonModalBackdrop")?.addEventListener(
    "click",
    closeComparisonModal
  );

  $("saveComparisonButton")?.addEventListener(
    "click",
    saveCurrentComparison
  );


  /* Me */

  $("themeSettingButton")?.addEventListener(
    "click",
    toggleTheme
  );

  $("accountButton")?.addEventListener(
    "click",
    openAuthModal
  );

  $("accountSettingsButton")?.addEventListener(
    "click",
    openAuthModal
  );

  $("navAccountButton")?.addEventListener(
    "click",
    openAuthModal
  );


  /* About */

  $("aboutButton")?.addEventListener(
    "click",
    () => {

      const panel =
        $("aboutPanel");

      if (!panel) return;

      panel.hidden =
        !panel.hidden;
    }
  );

  $("aboutClose")?.addEventListener(
    "click",
    () => {

      const panel =
        $("aboutPanel");

      if (panel) {
        panel.hidden = true;
      }
    }
  );


  /* Auth */

  $("authModalClose")?.addEventListener(
    "click",
    closeAuthModal
  );

  $("authModalBackdrop")?.addEventListener(
    "click",
    closeAuthModal
  );

  $("loginTab")?.addEventListener(
    "click",
    () => switchAuthTab("login")
  );

  $("signupTab")?.addEventListener(
    "click",
    () => switchAuthTab("signup")
  );

  $("loginForm")?.addEventListener(
    "submit",
    loginUser
  );

  $("signupForm")?.addEventListener(
    "submit",
    signupUser
  );

  $("logoutButton")?.addEventListener(
    "click",
    logoutUser
  );


  /* Escape closes modals */

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key !== "Escape") {
        return;
      }

      closeToolModal();
      closeComparisonModal();
      closeAuthModal();
    }
  );
}


/* =========================================================
   25. TOOL ACTION HANDLER
   ========================================================= */

async function handleToolAction(event) {

  const button =
    event.target.closest(
      "[data-action]"
    );

  if (!button) return;

  const action =
    button.dataset.action;

  const toolName =
    button.dataset.tool;

  if (!toolName) return;

  if (action === "favorite") {

    await toggleFavorite(toolName);

  } else if (action === "compare") {

    toggleCompare(toolName);

  } else if (action === "visit") {

    await visitTool(toolName);
  }
}


/* =========================================================
   26. INITIALIZE APP
   ========================================================= */

function initializeApp() {

  console.log(
    `TzTools V7.5 loaded — ${tools.length} tools`
  );

  applyTheme();

  initializeEvents();

  updateCompareBar();

  switchView("home");

  renderMe();

  renderDashboard();

  initializeAuth();
}


/* =========================================================
   START
   ========================================================= */

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initializeApp
  );

} else {

  initializeApp();
}
