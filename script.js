/* =========================================================
   TZTOOLS V7.6
   Smart Tool Finder
   ========================================================= */

"use strict";

/* =========================================================
   SUPABASE
   ========================================================= */

const SUPABASE_URL =
  "https://nslaakklgidpzwlymrhf.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_XoDQsJkHs_7PA8wQAoutHA_glygnyxK";

let supabaseClient = null;

if (
  window.supabase &&
  SUPABASE_PUBLISHABLE_KEY !==
    "PASTE_YOUR_PUBLISHABLE_KEY_HERE"
) {
  supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );
}


/* =========================================================
   TOOL DATABASE
   ========================================================= */

const tools = [

  /* ================= AI ================= */

  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: "🤖",
    description: "AI assistant for writing, ideas, learning and more.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://chatgpt.com",
    keywords: [
      "ai",
      "chat",
      "writing",
      "study",
      "research",
      "ideas",
      "assistant"
    ]
  },

  {
    id: "claude",
    name: "Claude",
    icon: "🧠",
    description: "AI assistant for writing, thinking and research.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://claude.ai",
    keywords: [
      "ai",
      "writing",
      "research",
      "chat",
      "study"
    ]
  },

  {
    id: "gemini",
    name: "Gemini",
    icon: "✨",
    description: "Google's AI assistant for ideas, research and productivity.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://gemini.google.com",
    keywords: [
      "ai",
      "google",
      "research",
      "writing",
      "study"
    ]
  },

  {
    id: "perplexity",
    name: "Perplexity",
    icon: "🔎",
    description: "AI search for research and finding answers.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.perplexity.ai",
    keywords: [
      "ai",
      "search",
      "research",
      "answers"
    ]
  },

  {
    id: "pi",
    name: "Pi",
    icon: "💬",
    description: "Friendly AI for conversations and ideas.",
    category: "AI",
    pricing: "Free",
    rating: 4.4,
    url: "https://pi.ai",
    keywords: [
      "ai",
      "chat",
      "conversation"
    ]
  },

  {
    id: "you",
    name: "You.com",
    icon: "🌐",
    description: "AI search and productivity tools.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.3,
    url: "https://you.com",
    keywords: [
      "ai",
      "search",
      "research",
      "productivity"
    ]
  },

  {
    id: "gamma",
    name: "Gamma",
    icon: "📊",
    description: "Create presentations and pages with AI.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://gamma.app",
    keywords: [
      "ai",
      "presentation",
      "slides",
      "website"
    ]
  },

  {
    id: "copyai",
    name: "Copy.ai",
    icon: "✍️",
    description: "AI tools for writing and content.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.2,
    url: "https://www.copy.ai",
    keywords: [
      "ai",
      "writing",
      "content",
      "marketing"
    ]
  },


  /* ================= DESIGN ================= */

  {
    id: "canva",
    name: "Canva",
    icon: "🎨",
    description: "Design posters, presentations, logos and more.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://www.canva.com",
    keywords: [
      "design",
      "logo",
      "poster",
      "presentation",
      "graphics"
    ]
  },

  {
    id: "figma",
    name: "Figma",
    icon: "🖌️",
    description: "Design interfaces, websites and prototypes.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.figma.com",
    keywords: [
      "design",
      "ui",
      "ux",
      "website",
      "prototype"
    ]
  },

  {
    id: "adobe-express",
    name: "Adobe Express",
    icon: "🅰️",
    description: "Quickly create graphics, videos and social posts.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.adobe.com/express",
    keywords: [
      "design",
      "graphics",
      "poster",
      "social"
    ]
  },

  {
    id: "pixlr",
    name: "Pixlr",
    icon: "🖼️",
    description: "Online image editing and design tools.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.3,
    url: "https://pixlr.com",
    keywords: [
      "design",
      "photo",
      "edit",
      "image"
    ]
  },


  /* ================= IMAGES ================= */

  {
    id: "removebg",
    name: "Remove.bg",
    icon: "✂️",
    description: "Remove image backgrounds automatically.",
    category: "Images",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.remove.bg",
    keywords: [
      "image",
      "background",
      "remove",
      "photo"
    ]
  },

  {
    id: "unsplash",
    name: "Unsplash",
    icon: "📷",
    description: "Find free high-quality photos.",
    category: "Images",
    pricing: "Free",
    rating: 4.8,
    url: "https://unsplash.com",
    keywords: [
      "images",
      "photos",
      "pictures",
      "background"
    ]
  },

  {
    id: "pexels",
    name: "Pexels",
    icon: "📸",
    description: "Free stock photos and videos.",
    category: "Images",
    pricing: "Free",
    rating: 4.7,
    url: "https://www.pexels.com",
    keywords: [
      "images",
      "photos",
      "video",
      "stock"
    ]
  },

  {
    id: "tinypng",
    name: "TinyPNG",
    icon: "🗜️",
    description: "Compress PNG and JPEG images.",
    category: "Images",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://tinypng.com",
    keywords: [
      "image",
      "compress",
      "png",
      "jpg"
    ]
  },


  /* ================= VIDEO ================= */

  {
    id: "capcut",
    name: "CapCut",
    icon: "🎬",
    description: "Edit videos with effects, text and templates.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.capcut.com",
    keywords: [
      "video",
      "edit",
      "editing",
      "shorts",
      "reels"
    ]
  },

  {
    id: "veed",
    name: "VEED",
    icon: "🎥",
    description: "Online video editing with captions and effects.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.veed.io",
    keywords: [
      "video",
      "edit",
      "captions",
      "subtitles"
    ]
  },

  {
    id: "descript",
    name: "Descript",
    icon: "🎙️",
    description: "Edit video and audio using text.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.descript.com",
    keywords: [
      "video",
      "audio",
      "edit",
      "podcast"
    ]
  },

  {
    id: "invideo",
    name: "InVideo",
    icon: "📹",
    description: "Create videos using templates and AI.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.4,
    url: "https://invideo.io",
    keywords: [
      "video",
      "ai",
      "editing",
      "templates"
    ]
  },


  /* ================= WRITING ================= */

  {
    id: "grammarly",
    name: "Grammarly",
    icon: "📝",
    description: "Improve grammar, spelling and writing.",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.grammarly.com",
    keywords: [
      "writing",
      "grammar",
      "spelling",
      "essay"
    ]
  },

  {
    id: "quillbot",
    name: "QuillBot",
    icon: "🔄",
    description: "Rewrite and improve your writing.",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://quillbot.com",
    keywords: [
      "writing",
      "rewrite",
      "paraphrase",
      "essay"
    ]
  },

  {
    id: "notion",
    name: "Notion",
    icon: "📒",
    description: "Organize notes, tasks and projects.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.notion.so",
    keywords: [
      "notes",
      "writing",
      "study",
      "planning",
      "productivity"
    ]
  },


  /* ================= WEBSITES ================= */

  {
    id: "wix",
    name: "Wix",
    icon: "🌐",
    description: "Build a website without coding.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.wix.com",
    keywords: [
      "website",
      "web",
      "site",
      "build"
    ]
  },

  {
    id: "wordpress",
    name: "WordPress",
    icon: "📰",
    description: "Create websites and blogs.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://wordpress.com",
    keywords: [
      "website",
      "blog",
      "web",
      "site"
    ]
  },

  {
    id: "framer",
    name: "Framer",
    icon: "⚡",
    description: "Build modern websites visually.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.framer.com",
    keywords: [
      "website",
      "web",
      "design",
      "landing page"
    ]
  },

  {
    id: "webflow",
    name: "Webflow",
    icon: "🔷",
    description: "Design and build professional websites.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://webflow.com",
    keywords: [
      "website",
      "web",
      "design",
      "build"
    ]
  },


  /* ================= STUDENTS ================= */

  {
    id: "khan",
    name: "Khan Academy",
    icon: "🎓",
    description: "Learn maths, science and many other subjects.",
    category: "Students",
    pricing: "Free",
    rating: 4.8,
    url: "https://www.khanacademy.org",
    keywords: [
      "study",
      "math",
      "science",
      "school",
      "learning"
    ]
  },

  {
    id: "quizlet",
    name: "Quizlet",
    icon: "🧠",
    description: "Study using flashcards and practice tests.",
    category: "Students",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://quizlet.com",
    keywords: [
      "study",
      "flashcards",
      "school",
      "revision"
    ]
  },

  {
    id: "photomath",
    name: "Photomath",
    icon: "➗",
    description: "Get help understanding maths problems.",
    category: "Students",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://photomath.com",
    keywords: [
      "math",
      "study",
      "school",
      "calculation"
    ]
  },


  /* ================= PDF ================= */

  {
    id: "ilovepdf",
    name: "iLovePDF",
    icon: "📄",
    description: "Merge, split, compress and edit PDFs.",
    category: "PDF",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.ilovepdf.com",
    keywords: [
      "pdf",
      "merge",
      "split",
      "compress"
    ]
  },

  {
    id: "smallpdf",
    name: "Smallpdf",
    icon: "📑",
    description: "Simple online PDF tools.",
    category: "PDF",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://smallpdf.com",
    keywords: [
      "pdf",
      "compress",
      "convert",
      "edit"
    ]
  },


  /* ================= AUDIO ================= */

  {
    id: "audacity",
    name: "Audacity",
    icon: "🎧",
    description: "Record and edit audio.",
    category: "Audio",
    pricing: "Free",
    rating: 4.6,
    url: "https://www.audacityteam.org",
    keywords: [
      "audio",
      "record",
      "music",
      "edit"
    ]
  },

  {
    id: "elevenlabs",
    name: "ElevenLabs",
    icon: "🔊",
    description: "Create realistic AI voices and audio.",
    category: "Audio",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://elevenlabs.io",
    keywords: [
      "audio",
      "voice",
      "ai",
      "text to speech"
    ]
  }

];


/* =========================================================
   STORAGE
   ========================================================= */

const STORAGE = {
  favorites: "tztools_v76_favorites",
  recent: "tztools_v76_recent",
  compare: "tztools_v76_compare",
  theme: "tztools_v76_theme"
};

let favorites =
  JSON.parse(localStorage.getItem(STORAGE.favorites)) || [];

let recentlyUsed =
  JSON.parse(localStorage.getItem(STORAGE.recent)) || [];

let compareList =
  JSON.parse(localStorage.getItem(STORAGE.compare)) || [];


/* =========================================================
   DOM
   ========================================================= */

const $ = id => document.getElementById(id);

const home = $("home");
const customerService = $("customerService");
const me = $("me");
const dashboard = $("dashboard");

const homeNavbar = $("homeNavbar");

const searchInput = $("searchInput");
const searchButton = $("searchButton");
const searchClear = $("searchClear");
const suggestions = $("suggestions");

const searchResultsView = $("searchResultsView");
const resultsTitle = $("resultsTitle");
const resultsSubtitle = $("resultsSubtitle");
const resultsCount = $("resultsCount");
const toolsGrid = $("toolsGrid");
const noResults = $("noResults");

const resultsCategoryFilter =
  $("resultsCategoryFilter");

const bottomNavigation =
  $("bottomNavigation");

const navAccountButton =
  $("navAccountButton");

const profileAvatar =
  $("profileAvatar");

const profileName =
  $("profileName");

const profileEmail =
  $("profileEmail");

const accountButton =
  $("accountButton");

const themeSettingButton =
  $("themeSettingButton");

const themeStatus =
  $("themeStatus");

const aboutButton =
  $("aboutButton");

const aboutPanel =
  $("aboutPanel");

const aboutClose =
  $("aboutClose");

const accountSettingsButton =
  $("accountSettingsButton");

const favoriteCount =
  $("favoriteCount");

const recentCount =
  $("recentCount");

const comparisonCount =
  $("comparisonCount");

const favoritesGrid =
  $("favoritesGrid");

const favoritesEmpty =
  $("favoritesEmpty");

const recentGrid =
  $("recentGrid");

const recentEmpty =
  $("recentEmpty");

const comparisonList =
  $("comparisonList");

const comparisonEmpty =
  $("comparisonEmpty");

const compareBar =
  $("compareBar");

const compareCount =
  $("compareCount");

const clearCompareButton =
  $("clearCompareButton");

const openCompareButton =
  $("openCompareButton");

const toastContainer =
  $("toastContainer");


/* =========================================================
   SIMPLE NAVIGATION
   ========================================================= */

function showView(viewId) {

  document
    .querySelectorAll(".app-view")
    .forEach(view => {
      view.classList.remove("active");
    });

  const target = $(viewId);

  if (target) {
    target.classList.add("active");
  }

  if (homeNavbar) {
    homeNavbar.style.display =
      viewId === "home"
        ? ""
        : "none";
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  updateBottomNav(viewId);

  if (viewId === "dashboard") {
    renderDashboard();
  }
}


function updateBottomNav(viewId) {

  document
    .querySelectorAll(".bottom-nav-item")
    .forEach(item => {

      const target =
        item.dataset.viewTarget;

      item.classList.toggle(
        "active",
        target === viewId
      );

    });
}


/* =========================================================
   BOTTOM NAV
   ========================================================= */

document
  .querySelectorAll("[data-view-target]")
  .forEach(button => {

    button.addEventListener("click", () => {

      const target =
        button.dataset.viewTarget;

      if (target) {
        showView(target);
      }

    });

  });


/* =========================================================
   FORCE CORRECT NAV ORDER
   ========================================================= */

if (bottomNavigation) {

  const navItems = [
    ...bottomNavigation.querySelectorAll(
      ".bottom-nav-item"
    )
  ];

  const desiredOrder = [
    "home",
    "customerService",
    "dashboard",
    "me"
  ];

  desiredOrder.forEach(target => {

    const item =
      navItems.find(
        element =>
          element.dataset.viewTarget === target
      );

    if (item) {
      bottomNavigation.appendChild(item);
    }

  });

}


/* =========================================================
   REMOVE TOP ACCOUNT BUTTON
   ========================================================= */

if (navAccountButton) {

  /*
     V7.6:
     Account belongs inside ME.
     We don't need a random Sign In button
     sitting at the top of the home page.
  */

  navAccountButton.style.display = "none";

}


/* =========================================================
   HOME
   ========================================================= */

function resetHome() {

  if (searchInput) {
    searchInput.value = "";
  }

  if (searchClear) {
    searchClear.style.display = "none";
  }

  if (suggestions) {
    suggestions.classList.remove("open");
    suggestions.innerHTML = "";
  }

}


/* =========================================================
   INTENT SYSTEM
   ========================================================= */

const intentGroups = {

  logo: [
    "logo",
    "logos",
    "brand logo",
    "make a logo",
    "create a logo",
    "design a logo"
  ],

  video: [
    "video",
    "edit video",
    "edit a video",
    "video editing",
    "youtube video",
    "reels",
    "shorts"
  ],

  website: [
    "website",
    "web site",
    "build website",
    "build a website",
    "create website",
    "make website"
  ],

  study: [
    "study",
    "studying",
    "school",
    "learn",
    "learning",
    "revision",
    "revise",
    "homework"
  ],

  math: [
    "math",
    "maths",
    "calculation",
    "equation",
    "algebra"
  ],

  image: [
    "image",
    "photo",
    "picture",
    "background",
    "remove background"
  ],

  writing: [
    "write",
    "writing",
    "essay",
    "grammar",
    "rewrite",
    "paraphrase"
  ],

  pdf: [
    "pdf",
    "merge pdf",
    "split pdf",
    "compress pdf"
  ],

  audio: [
    "audio",
    "voice",
    "record",
    "music"
  ],

  ai: [
    "ai",
    "artificial intelligence",
    "chatbot",
    "assistant"
  ],

  productivity: [
    "productivity",
    "organize",
    "notes",
    "planning",
    "tasks"
  ]
};


function normalizeText(text) {

  return String(text || "")
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

}


function detectIntent(query) {

  const text =
    normalizeText(query);

  const intents = [];

  Object.entries(intentGroups)
    .forEach(([intent, phrases]) => {

      phrases.forEach(phrase => {

        if (
          text.includes(
            normalizeText(phrase)
          )
        ) {
          intents.push(intent);
        }

      });

    });

  return [
    ...new Set(intents)
  ];

}


/* =========================================================
   SMART SCORING
   ========================================================= */

function scoreTool(tool, query) {

  const text =
    normalizeText(query);

  const intents =
    detectIntent(text);

  let score = 0;

  const name =
    normalizeText(tool.name);

  const description =
    normalizeText(tool.description);

  const keywords =
    tool.keywords.map(normalizeText);

  /* Exact name */

  if (text === name) {
    score += 150;
  }

  /* Name match */

  if (
    name.includes(text) &&
    text.length > 2
  ) {
    score += 70;
  }

  /* Description */

  if (
    description.includes(text) &&
    text.length > 2
  ) {
    score += 25;
  }

  /* Keywords */

  keywords.forEach(keyword => {

    if (text.includes(keyword)) {
      score += 15;
    }

    if (
      keyword.includes(text) &&
      text.length > 2
    ) {
      score += 8;
    }

  });


  /* Intent */

  intents.forEach(intent => {

    if (
      intent === "logo" &&
      keywords.includes("logo")
    ) {
      score += 60;
    }

    if (
      intent === "video" &&
      tool.category === "Video"
    ) {
      score += 60;
    }

    if (
      intent === "website" &&
      tool.category === "Websites"
    ) {
      score += 60;
    }

    if (
      intent === "study" &&
      tool.category === "Students"
    ) {
      score += 60;
    }

    if (
      intent === "math" &&
      keywords.includes("math")
    ) {
      score += 65;
    }

    if (
      intent === "image" &&
      tool.category === "Images"
    ) {
      score += 50;
    }

    if (
      intent === "writing" &&
      tool.category === "Writing"
    ) {
      score += 50;
    }

    if (
      intent === "pdf" &&
      tool.category === "PDF"
    ) {
      score += 60;
    }

    if (
      intent === "audio" &&
      tool.category === "Audio"
    ) {
      score += 60;
    }

    if (
      intent === "ai" &&
      tool.category === "AI"
    ) {
      score += 50;
    }

    if (
      intent === "productivity" &&
      tool.category === "Productivity"
    ) {
      score += 50;
    }

  });


  return score;

}


/* =========================================================
   SEARCH
   ========================================================= */

function searchTools(query) {

  const clean =
    normalizeText(query);

  if (!clean) {
    return tools.slice();
  }

  const ranked =
    tools
      .map(tool => ({
        tool,
        score: scoreTool(tool, clean)
      }))
      .filter(item => item.score > 0)
      .sort(
        (a, b) =>
          b.score - a.score
      );

  /*
     If the search is broad,
     still give useful results.
  */

  if (!ranked.length) {

    return tools
      .slice()
      .sort(
        (a, b) =>
          b.rating - a.rating
      )
      .slice(0, 10);

  }

  return ranked
    .slice(0, 10)
    .map(item => item.tool);

}


/* =========================================================
   TOOL CARD
   ========================================================= */

function isFavorite(id) {
  return favorites.includes(id);
}


function isCompared(id) {
  return compareList.includes(id);
}


function createToolCard(tool) {

  const favorite =
    isFavorite(tool.id);

  const compared =
    isCompared(tool.id);

  return `

    <article
      class="tool-card"
      data-tool-id="${tool.id}"
    >

      <div class="tool-card-top">

        <div class="tool-icon">
          ${tool.icon}
        </div>

        <span class="tool-category">
          ${tool.category}
        </span>

      </div>


      <div class="tool-card-body">

        <h3 class="tool-name">
          ${tool.name}
        </h3>

        <p class="tool-description">
          ${tool.description}
        </p>


        <div class="tool-meta">

          <span>
            ★ ${tool.rating}
          </span>

          <span>
            ${tool.pricing}
          </span>

        </div>


        <div class="tool-actions">

          <button
            class="icon-action favorite-button
              ${favorite ? "active" : ""}"
            data-action="favorite"
            data-tool-id="${tool.id}"
            title="Favorite"
            aria-label="Favorite ${tool.name}"
          >
            ${favorite ? "♥" : "♡"}
          </button>


          <button
            class="icon-action compare-button
              ${compared ? "active" : ""}"
            data-action="compare"
            data-tool-id="${tool.id}"
            title="Compare"
            aria-label="Compare ${tool.name}"
          >
            ✓
          </button>


          <a
            class="visit-button"
            href="${tool.url}"
            target="_blank"
            rel="noopener noreferrer"
            data-tool-id="${tool.id}"
          >
            Visit Tool
            <span>↗</span>
          </a>

        </div>

      </div>

    </article>

  `;

}


/* =========================================================
   RENDER RESULTS
   ========================================================= */

function renderTools(list) {

  if (!toolsGrid) return;

  if (!list.length) {

    toolsGrid.innerHTML = "";

    if (noResults) {
      noResults.style.display = "block";
    }

    return;

  }

  if (noResults) {
    noResults.style.display = "none";
  }

  toolsGrid.innerHTML =
    list
      .map(createToolCard)
      .join("");

}


/* =========================================================
   SEARCH SUBMIT
   ========================================================= */

function performSearch() {

  if (!searchInput) return;

  const query =
    searchInput.value.trim();

  if (!query) {

    showToast(
      "Type what you want to do."
    );

    return;

  }

  const results =
    searchTools(query);

  showView("searchResultsView");

  if (resultsTitle) {
    resultsTitle.textContent =
      `Tools for "${query}"`;
  }

  if (resultsSubtitle) {
    resultsSubtitle.textContent =
      "Here are some tools that could help.";
  }

  if (resultsCount) {
    resultsCount.textContent =
      `${results.length} tools`;
  }

  renderTools(results);

}


/* =========================================================
   SEARCH EVENTS
   ========================================================= */

if (searchButton) {

  searchButton.addEventListener(
    "click",
    performSearch
  );

}


if (searchInput) {

  searchInput.addEventListener(
    "input",
    () => {

      if (searchClear) {

        searchClear.style.display =
          searchInput.value
            ? "flex"
            : "none";

      }

      renderSuggestions(
        searchInput.value
      );

    }
  );


  searchInput.addEventListener(
    "keydown",
    event => {

      if (event.key === "Enter") {
        performSearch();
      }

      if (event.key === "Escape") {

        if (suggestions) {
          suggestions.classList.remove(
            "open"
          );
        }

      }

    }
  );

}


if (searchClear) {

  searchClear.addEventListener(
    "click",
    () => {

      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }

      searchClear.style.display =
        "none";

      if (suggestions) {
        suggestions.classList.remove(
          "open"
        );
      }

    }
  );

}


/* =========================================================
   SEARCH SUGGESTIONS
   ========================================================= */

function renderSuggestions(query) {

  if (!suggestions) return;

  const clean =
    normalizeText(query);

  if (!clean) {

    suggestions.innerHTML = "";

    suggestions.classList.remove(
      "open"
    );

    return;

  }

  const matches =
    tools
      .filter(tool => {

        const searchable =
          normalizeText(`
            ${tool.name}
            ${tool.description}
            ${tool.category}
            ${tool.keywords.join(" ")}
          `);

        return searchable.includes(clean);

      })
      .slice(0, 5);


  if (!matches.length) {

    suggestions.innerHTML = "";

    suggestions.classList.remove(
      "open"
    );

    return;

  }


  suggestions.innerHTML =
    matches
      .map(tool => `

        <button
          class="suggestion"
          data-tool-suggestion="${tool.id}"
        >

          <span class="suggestion-icon">
            ${tool.icon}
          </span>

          <span>
            ${tool.name}
          </span>

        </button>

      `)
      .join("");


  suggestions.classList.add("open");

}


/* =========================================================
   SUGGESTION CLICK
   ========================================================= */

if (suggestions) {

  suggestions.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          "[data-tool-suggestion]"
        );

      if (!button) return;

      const id =
        button.dataset.toolSuggestion;

      const tool =
        tools.find(
          item => item.id === id
        );

      if (!tool) return;

      if (searchInput) {
        searchInput.value =
          tool.name;
      }

      suggestions.classList.remove(
        "open"
      );

      performSearch();

    }
  );

}


/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(id) {

  if (favorites.includes(id)) {

    favorites =
      favorites.filter(
        item => item !== id
      );

    showToast(
      "Removed from favorites."
    );

  } else {

    favorites.unshift(id);

    showToast(
      "Added to favorites."
    );

  }

  saveLocalData();

  updateCounts();

  refreshVisibleCards();

  renderDashboard();

}


/* =========================================================
   COMPARE
   ========================================================= */

function toggleCompare(id) {

  if (compareList.includes(id)) {

    compareList =
      compareList.filter(
        item => item !== id
      );

    showToast(
      "Removed from comparison."
    );

  } else {

    if (compareList.length >= 3) {

      showToast(
        "Compare up to 3 tools."
      );

      return;

    }

    compareList.push(id);

    showToast(
      "Added to comparison."
    );

  }

  saveLocalData();

  updateCounts();

  refreshVisibleCards();

}


/* =========================================================
   CARD ACTIONS
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const actionButton =
      event.target.closest(
        "[data-action]"
      );

    if (actionButton) {

      const id =
        actionButton.dataset.toolId;

      const action =
        actionButton.dataset.action;

      if (action === "favorite") {
        toggleFavorite(id);
      }

      if (action === "compare") {
        toggleCompare(id);
      }

      return;

    }


    const visit =
      event.target.closest(
        ".visit-button"
      );

    if (visit) {

      const id =
        visit.dataset.toolId;

      addRecentlyUsed(id);

    }

  }
);


/* =========================================================
   RECENTLY USED
   ========================================================= */

function addRecentlyUsed(id) {

  recentlyUsed =
    recentlyUsed.filter(
      item => item !== id
    );

  recentlyUsed.unshift(id);

  recentlyUsed =
    recentlyUsed.slice(0, 8);

  saveLocalData();

  updateCounts();

}


/* =========================================================
   DASHBOARD
   ========================================================= */

function renderDashboard() {

  renderFavoriteTools();

  renderRecentTools();

  renderComparisonTools();

  updateCounts();

}


function getToolsByIds(ids) {

  return ids
    .map(
      id =>
        tools.find(
          tool => tool.id === id
        )
    )
    .filter(Boolean);

}


function renderFavoriteTools() {

  if (!favoritesGrid) return;

  const list =
    getToolsByIds(favorites);

  if (!list.length) {

    favoritesGrid.innerHTML = "";

    if (favoritesEmpty) {
      favoritesEmpty.style.display =
        "block";
    }

    return;

  }

  if (favoritesEmpty) {
    favoritesEmpty.style.display =
      "none";
  }

  favoritesGrid.innerHTML =
    list
      .map(createToolCard)
      .join("");

}


function renderRecentTools() {

  if (!recentGrid) return;

  const list =
    getToolsByIds(recentlyUsed);

  if (!list.length) {

    recentGrid.innerHTML = "";

    if (recentEmpty) {
      recentEmpty.style.display =
        "block";
    }

    return;

  }

  if (recentEmpty) {
    recentEmpty.style.display =
      "none";
  }

  recentGrid.innerHTML =
    list
      .map(createToolCard)
      .join("");

}


function renderComparisonTools() {

  if (!comparisonList) return;

  const list =
    getToolsByIds(compareList);

  if (!list.length) {

    comparisonList.innerHTML = "";

    if (comparisonEmpty) {
      comparisonEmpty.style.display =
        "block";
    }

    return;

  }

  if (comparisonEmpty) {
    comparisonEmpty.style.display =
      "none";
  }

  comparisonList.innerHTML =
    list
      .map(tool => `

        <div class="comparison-row">

          <div class="comparison-tool">

            <span class="tool-icon">
              ${tool.icon}
            </span>

            <strong>
              ${tool.name}
            </strong>

          </div>

          <span>
            ${tool.category}
          </span>

          <span>
            ★ ${tool.rating}
          </span>

          <span>
            ${tool.pricing}
          </span>

        </div>

      `)
      .join("");

}


/* =========================================================
   COUNTS
   ========================================================= */

function updateCounts() {

  if (favoriteCount) {
    favoriteCount.textContent =
      favorites.length;
  }

  if (recentCount) {
    recentCount.textContent =
      recentlyUsed.length;
  }

  if (comparisonCount) {
    comparisonCount.textContent =
      compareList.length;
  }

  if (compareCount) {
    compareCount.textContent =
      compareList.length;
  }

  if (compareBar) {

    compareBar.classList.toggle(
      "show",
      compareList.length > 0
    );

  }

}


/* =========================================================
   CLEAR COMPARISON
   ========================================================= */

if (clearCompareButton) {

  clearCompareButton.addEventListener(
    "click",
    () => {

      compareList = [];

      saveLocalData();

      updateCounts();

      refreshVisibleCards();

      showToast(
        "Comparison cleared."
      );

    }
  );

}


if (openCompareButton) {

  openCompareButton.addEventListener(
    "click",
    () => {

      showView("dashboard");

      setTimeout(() => {

        const section =
          document.querySelector(
            ".comparison-section"
          );

        if (section) {
          section.scrollIntoView({
            behavior: "smooth"
          });
        }

      }, 100);

    }
  );

}


/* =========================================================
   REFRESH CARDS
   ========================================================= */

function refreshVisibleCards() {

  const activeView =
    document.querySelector(
      ".app-view.active"
    );

  if (!activeView) return;

  const grid =
    activeView.querySelector(
      ".tools-grid"
    );

  if (!grid) return;

  const cards =
    grid.querySelectorAll(
      ".tool-card"
    );

  cards.forEach(card => {

    const id =
      card.dataset.toolId;

    const tool =
      tools.find(
        item => item.id === id
      );

    if (tool) {

      const newCard =
        document.createElement(
          "div"
        );

      newCard.innerHTML =
        createToolCard(tool);

      card.replaceWith(
        newCard.firstElementChild
      );

    }

  });

}


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function saveLocalData() {

  localStorage.setItem(
    STORAGE.favorites,
    JSON.stringify(favorites)
  );

  localStorage.setItem(
    STORAGE.recent,
    JSON.stringify(recentlyUsed)
  );

  localStorage.setItem(
    STORAGE.compare,
    JSON.stringify(compareList)
  );

}


/* =========================================================
   DARK MODE
   ========================================================= */

function applyTheme() {

  const saved =
    localStorage.getItem(
      STORAGE.theme
    );

  const dark =
    saved === "dark";

  document.body.classList.toggle(
    "dark",
    dark
  );

  if (themeStatus) {
    themeStatus.textContent =
      dark
        ? "On"
        : "Off";
  }

}


applyTheme();


if (themeSettingButton) {

  themeSettingButton.addEventListener(
    "click",
    () => {

      const dark =
        document.body.classList.toggle(
          "dark"
        );

      localStorage.setItem(
        STORAGE.theme,
        dark ? "dark" : "light"
      );

      if (themeStatus) {
        themeStatus.textContent =
          dark
            ? "On"
            : "Off";
      }

      showToast(
        dark
          ? "Dark mode on."
          : "Dark mode off."
      );

    }
  );

}


/* =========================================================
   ABOUT PANEL
   ========================================================= */

if (aboutButton) {

  aboutButton.addEventListener(
    "click",
    () => {

      if (aboutPanel) {
        aboutPanel.classList.add(
          "open"
        );
      }

    }
  );

}


if (aboutClose) {

  aboutClose.addEventListener(
    "click",
    () => {

      if (aboutPanel) {
        aboutPanel.classList.remove(
          "open"
        );
      }

    }
  );

}


/* =========================================================
   AUTH MODAL
   ========================================================= */

const authModal =
  $("authModal");

const authBackdrop =
  $("authModalBackdrop");

const loginTab =
  $("loginTab");

const signupTab =
  $("signupTab");

const loginForm =
  $("loginForm");

const signupForm =
  $("signupForm");

const loggedInPanel =
  $("loggedInPanel");

const authClose =
  $("authModalClose");

const loginEmail =
  $("loginEmail");

const loginPassword =
  $("loginPassword");

const signupName =
  $("signupName");

const signupEmail =
  $("signupEmail");

const signupPassword =
  $("signupPassword");

const logoutButton =
  $("logoutButton");


function openAuthModal() {

  if (!authModal) return;

  authModal.classList.add(
    "open"
  );

  updateAuthUI();

}


function closeAuthModal() {

  if (!authModal) return;

  authModal.classList.remove(
    "open"
  );

}


function switchAuthMode(mode) {

  if (mode === "login") {

    if (loginTab) {
      loginTab.classList.add(
        "active"
      );
    }

    if (signupTab) {
      signupTab.classList.remove(
        "active"
      );
    }

    if (loginForm) {
      loginForm.style.display =
        "block";
    }

    if (signupForm) {
      signupForm.style.display =
        "none";
    }

  } else {

    if (loginTab) {
      loginTab.classList.remove(
        "active"
      );
    }

    if (signupTab) {
      signupTab.classList.add(
        "active"
      );
    }

    if (loginForm) {
      loginForm.style.display =
        "none";
    }

    if (signupForm) {
      signupForm.style.display =
        "block";
    }

  }

}


if (loginTab) {

  loginTab.addEventListener(
    "click",
    () => switchAuthMode("login")
  );

}


if (signupTab) {

  signupTab.addEventListener(
    "click",
    () => switchAuthMode("signup")
  );

}


if (authClose) {

  authClose.addEventListener(
    "click",
    closeAuthModal
  );

}


if (authBackdrop) {

  authBackdrop.addEventListener(
    "click",
    closeAuthModal
  );

}


/* =========================================================
   ACCOUNT BUTTON
   ========================================================= */

if (accountButton) {

  accountButton.addEventListener(
    "click",
    openAuthModal
  );

}
/* =========================================================
   ACCOUNT SETTINGS
   ========================================================= */

if (accountSettingsButton) {
  accountSettingsButton.addEventListener(
    "click",
    () => {
      openAuthModal();
    }
  );
}

/* =========================================================
   LOGIN
   ========================================================= */

if (loginForm) {

  loginForm.addEventListener(
    "submit",
    async event => {

      event.preventDefault();

      if (
        !supabaseClient
      ) {

        showToast(
          "Connect Supabase first."
        );

        return;

      }

      const email =
        loginEmail?.value.trim();

      const password =
        loginPassword?.value;

      if (!email || !password) {

        showToast(
          "Enter your email and password."
        );

        return;

      }

      const {
        error
      } =
        await supabaseClient.auth.signInWithPassword({
          email,
          password
        });

      if (error) {

        showToast(
          error.message
        );

        return;

      }

      showToast(
        "Welcome back."
      );

      closeAuthModal();

      updateAuthUI();

    }
  );

}


/* =========================================================
   SIGN UP
   ========================================================= */

if (signupForm) {

  signupForm.addEventListener(
    "submit",
    async event => {

      event.preventDefault();

      if (!supabaseClient) {

        showToast(
          "Connect Supabase first."
        );

        return;

      }

      const name =
        signupName?.value.trim();

      const email =
        signupEmail?.value.trim();

      const password =
        signupPassword?.value;

      if (
        !name ||
        !email ||
        !password
      ) {

        showToast(
          "Fill in all fields."
        );

        return;

      }

      if (password.length < 6) {

        showToast(
          "Password must be at least 6 characters."
        );

        return;

      }

      const {
        data,
        error
      } =
        await supabaseClient.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name
            }
          }
        });

      if (error) {

        showToast(
          error.message
        );

        return;

      }

      if (
        data.user &&
        data.session
      ) {

        showToast(
          "Account created."
        );

      } else {

        showToast(
          "Check your email to confirm your account."
        );

      }

      closeAuthModal();

      updateAuthUI();

    }
  );

}


/* =========================================================
   AUTH UI
   ========================================================= */

async function updateAuthUI() {

  let user = null;

  if (supabaseClient) {

    const {
      data
    } =
      await supabaseClient.auth.getUser();

    user =
      data?.user || null;

  }


  if (loggedInPanel) {

    loggedInPanel.style.display =
      user
        ? "block"
        : "none";

  }

  if (loginForm) {

    loginForm.style.display =
      user
        ? "none"
        : "block";

  }

  if (signupForm) {

    signupForm.style.display =
      "none";

  }


  if (user) {

    const name =
      user.user_metadata?.full_name ||
      user.email?.split("@")[0] ||
      "User";

    if (profileName) {
      profileName.textContent =
        name;
    }

    if (profileEmail) {
      profileEmail.textContent =
        user.email || "";
    }

    if (profileAvatar) {
      profileAvatar.textContent =
        name
          .charAt(0)
          .toUpperCase();
    }

  } else {

    if (profileName) {
      profileName.textContent =
        "Guest";
    }

    if (profileEmail) {
      profileEmail.textContent =
        "Sign in to sync your tools";
    }

    if (profileAvatar) {
      profileAvatar.textContent =
        "G";
    }

  }

}


/* =========================================================
   LOGOUT
   ========================================================= */

function ensureLogoutButton() {
  let button = document.getElementById("logoutButton");

  if (button) {
    return button;
  }

  button = document.createElement("button");

  button.id = "logoutButton";
  button.type = "button";
  button.className = "settings-item";
  button.textContent = "Log Out";

  if (accountSettingsButton) {
    accountSettingsButton.insertAdjacentElement(
      "afterend",
      button
    );
  } else if (meView) {
    meView.appendChild(button);
  }

  return button;
}


document.addEventListener(
  "click",
  async event => {

    const button =
      event.target.closest("#logoutButton");

    if (!button) return;

    if (!supabaseClient) {
      showToast(
        "Supabase is not connected."
      );
      return;
    }

    button.disabled = true;

    const { error } =
      await supabaseClient.auth.signOut();

    button.disabled = false;

    if (error) {
      console.error(
        "Logout error:",
        error
      );

      showToast(
        "Could not log out. Try again."
      );

      return;
    }

    showToast(
      "Signed out."
    );

    updateAuthUI();

    closeAuthModal();
  }
);

/* =========================================================
   SUPABASE AUTH LISTENER
   ========================================================= */

if (supabaseClient) {

  supabaseClient.auth.onAuthStateChange(
    () => {
      updateAuthUI();
    }
  );

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

  if (!toastContainer) {
    console.log(message);
    return;
  }

  const toast =
    document.createElement("div");

  toast.className =
    "toast";

  toast.textContent =
    message;

  toastContainer.appendChild(
    toast
  );

  setTimeout(() => {

    toast.classList.add(
      "hide"
    );

    setTimeout(() => {
      toast.remove();
    }, 250);

  }, 2500);

}


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape") {
      return;
    }

    closeAuthModal();

    if (aboutPanel) {
      aboutPanel.classList.remove(
        "open"
      );
    }

  }
);


/* =========================================================
   CLOSE SUGGESTIONS WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    if (
      suggestions &&
      !suggestions.contains(event.target) &&
      !searchInput?.contains(event.target)
    ) {

      suggestions.classList.remove(
        "open"
      );

    }

  }
);


/* =========================================================
   INITIALISE
   ========================================================= */

function initialiseV76() {

  applyTheme();

  updateCounts();

  renderDashboard();

  updateAuthUI();

  /*
     Home is always the starting point.
  */

  showView("home");

  console.log(
    `TzTools V7.6 loaded — ${tools.length} tools`
  );

}


initialiseV76();
