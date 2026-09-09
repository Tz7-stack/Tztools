/* =========================================================
   TzTools V7 — CLEAN JAVASCRIPT
   ========================================================= */

"use strict";

/* =========================================================
   SUPABASE
   ========================================================= */

const SUPABASE_URL = "https://nslaakklgidpzwlymrhf.supabase.co";

// ⚠️ KEEP YOUR EXISTING sb_publishable_... KEY HERE
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_XoDQsJkHs_7PA8wQAoutHA_glygnyxK";

let supabaseClient = null;
let currentUser = null;


/* =========================================================
   TOOL DATABASE
   ========================================================= */

const tools = [

  // DESIGN
  {
    id: "canva",
    name: "Canva",
    category: "Design",
    pricing: "Freemium",
    rating: 4.8,
    icon: "🎨",
    description: "Create logos, posters, presentations, social posts and graphics.",
    keywords: ["logo", "design", "poster", "flyer", "graphic", "thumbnail", "branding"],
    url: "https://www.canva.com/"
  },

  {
    id: "adobe-express",
    name: "Adobe Express",
    category: "Design",
    pricing: "Freemium",
    rating: 4.7,
    icon: "✨",
    description: "Quickly create graphics, logos, flyers, videos and social content.",
    keywords: ["logo", "design", "flyer", "poster", "graphics", "social"],
    url: "https://www.adobe.com/express/"
  },

  {
    id: "figma",
    name: "Figma",
    category: "Design",
    pricing: "Freemium",
    rating: 4.8,
    icon: "🧩",
    description: "Design interfaces, websites, apps and digital products.",
    keywords: ["design", "ui", "ux", "website", "app", "prototype"],
    url: "https://www.figma.com/"
  },

  {
    id: "looka",
    name: "Looka",
    category: "Design",
    pricing: "Paid",
    rating: 4.6,
    icon: "🔷",
    description: "Generate professional-looking logo and brand designs.",
    keywords: ["logo", "branding", "brand", "business"],
    url: "https://looka.com/"
  },

  {
    id: "pixlr",
    name: "Pixlr",
    category: "Images",
    pricing: "Freemium",
    rating: 4.5,
    icon: "🖼️",
    description: "Edit photos and create graphics directly in your browser.",
    keywords: ["photo", "image", "edit", "graphics", "background"],
    url: "https://pixlr.com/"
  },

  // VIDEO
  {
    id: "capcut",
    name: "CapCut",
    category: "Video",
    pricing: "Freemium",
    rating: 4.7,
    icon: "🎬",
    description: "Edit videos, add effects, captions, music and transitions.",
    keywords: ["video", "editing", "tiktok", "reels", "youtube", "shorts"],
    url: "https://www.capcut.com/"
  },

  {
    id: "veed",
    name: "VEED",
    category: "Video",
    pricing: "Freemium",
    rating: 4.6,
    icon: "🎥",
    description: "Browser-based video editing with captions and social tools.",
    keywords: ["video", "edit", "caption", "youtube", "reels"],
    url: "https://www.veed.io/"
  },

  {
    id: "invideo",
    name: "InVideo",
    category: "Video",
    pricing: "Freemium",
    rating: 4.5,
    icon: "📹",
    description: "Create and edit videos using templates and AI features.",
    keywords: ["video", "ai", "youtube", "editing", "social"],
    url: "https://invideo.io/"
  },

  // WRITING
  {
    id: "grammarly",
    name: "Grammarly",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.7,
    icon: "✍️",
    description: "Improve grammar, spelling, clarity and writing style.",
    keywords: ["grammar", "writing", "essay", "spell", "school"],
    url: "https://www.grammarly.com/"
  },

  {
    id: "quillbot",
    name: "QuillBot",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.6,
    icon: "🪶",
    description: "Paraphrase, summarize and improve written text.",
    keywords: ["writing", "paraphrase", "rewrite", "essay", "summarize"],
    url: "https://quillbot.com/"
  },

  {
    id: "notion",
    name: "Notion",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.8,
    icon: "📝",
    description: "Organize notes, projects, tasks and personal information.",
    keywords: ["notes", "planning", "tasks", "projects", "school", "organize"],
    url: "https://www.notion.com/"
  },

  // AI
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "AI",
    pricing: "Freemium",
    rating: 4.9,
    icon: "🤖",
    description: "Ask questions, brainstorm ideas, learn and work with AI.",
    keywords: ["ai", "chat", "study", "questions", "research", "writing"],
    url: "https://chatgpt.com/"
  },

  {
    id: "gemini",
    name: "Google Gemini",
    category: "AI",
    pricing: "Freemium",
    rating: 4.7,
    icon: "✨",
    description: "Google's AI assistant for questions, research and creative tasks.",
    keywords: ["ai", "chat", "research", "questions", "writing"],
    url: "https://gemini.google.com/"
  },

  {
    id: "perplexity",
    name: "Perplexity",
    category: "AI",
    pricing: "Freemium",
    rating: 4.7,
    icon: "🔎",
    description: "AI-powered search and research assistant.",
    keywords: ["ai", "research", "search", "questions", "school"],
    url: "https://www.perplexity.ai/"
  },

  // WEBSITES
  {
    id: "wix",
    name: "Wix",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.6,
    icon: "🌐",
    description: "Build websites using templates and visual editing tools.",
    keywords: ["website", "web", "site", "blog", "business", "store"],
    url: "https://www.wix.com/"
  },

  {
    id: "wordpress",
    name: "WordPress",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.7,
    icon: "📰",
    description: "Create websites, blogs and online content.",
    keywords: ["website", "blog", "web", "site", "business"],
    url: "https://wordpress.com/"
  },

  {
    id: "webflow",
    name: "Webflow",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.7,
    icon: "💻",
    description: "Build and publish advanced websites visually.",
    keywords: ["website", "web", "landing", "site", "design"],
    url: "https://webflow.com/"
  },

  // STUDENTS
  {
    id: "khan-academy",
    name: "Khan Academy",
    category: "Students",
    pricing: "Free",
    rating: 4.9,
    icon: "🎓",
    description: "Learn maths, science and many other school subjects.",
    keywords: ["study", "school", "math", "science", "student", "learning"],
    url: "https://www.khanacademy.org/"
  },

  {
    id: "photomath",
    name: "Photomath",
    category: "Students",
    pricing: "Freemium",
    rating: 4.7,
    icon: "🧮",
    description: "Get step-by-step help understanding maths problems.",
    keywords: ["math", "mathematics", "homework", "study", "student"],
    url: "https://photomath.com/"
  },

  {
    id: "quizlet",
    name: "Quizlet",
    category: "Students",
    pricing: "Freemium",
    rating: 4.7,
    icon: "📚",
    description: "Study with flashcards, practice tests and learning activities.",
    keywords: ["study", "flashcards", "quiz", "school", "revision"],
    url: "https://quizlet.com/"
  },

  // PRODUCTIVITY
  {
    id: "trello",
    name: "Trello",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.6,
    icon: "📋",
    description: "Organize projects and tasks using boards and cards.",
    keywords: ["tasks", "projects", "planning", "organize", "productivity"],
    url: "https://trello.com/"
  },

  {
    id: "todoist",
    name: "Todoist",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.7,
    icon: "✅",
    description: "Manage tasks, reminders and daily plans.",
    keywords: ["tasks", "todo", "planning", "productivity", "organize"],
    url: "https://todoist.com/"
  },

  // PDF / DOCUMENTS
  {
    id: "ilovepdf",
    name: "iLovePDF",
    category: "PDF",
    pricing: "Freemium",
    rating: 4.7,
    icon: "📄",
    description: "Merge, split, compress, convert and edit PDF files.",
    keywords: ["pdf", "document", "merge", "compress", "convert"],
    url: "https://www.ilovepdf.com/"
  },

  {
    id: "smallpdf",
    name: "Smallpdf",
    category: "PDF",
    pricing: "Freemium",
    rating: 4.6,
    icon: "📑",
    description: "Easy online PDF tools for everyday document work.",
    keywords: ["pdf", "document", "convert", "compress"],
    url: "https://smallpdf.com/"
  },

  // AUDIO
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "Audio",
    pricing: "Freemium",
    rating: 4.7,
    icon: "🔊",
    description: "Create realistic AI-generated voices and audio.",
    keywords: ["audio", "voice", "ai", "sound", "text to speech"],
    url: "https://elevenlabs.io/"
  },

  {
    id: "suno",
    name: "Suno",
    category: "Audio",
    pricing: "Freemium",
    rating: 4.6,
    icon: "🎵",
    description: "Create music and songs using AI.",
    keywords: ["music", "song", "audio", "ai"],
    url: "https://suno.com/"
  }

];


/* =========================================================
   STATE
   ========================================================= */

let currentResults = [...tools];
let favorites = JSON.parse(
  localStorage.getItem("tztools-favorites") || "[]"
);
let recentlyUsed = JSON.parse(
  localStorage.getItem("tztools-recent") || "[]"
);
let comparison = JSON.parse(
  localStorage.getItem("tztools-comparison") || "[]"
);


/* =========================================================
   HELPERS
   ========================================================= */

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "");
}

function saveLocalData() {
  localStorage.setItem(
    "tztools-favorites",
    JSON.stringify(favorites)
  );

  localStorage.setItem(
    "tztools-recent",
    JSON.stringify(recentlyUsed)
  );

  localStorage.setItem(
    "tztools-comparison",
    JSON.stringify(comparison)
  );
}

function getTool(id) {
  return tools.find(tool => tool.id === id);
}


/* =========================================================
   ELEMENTS
   ========================================================= */

const searchInput = $("#searchInput");
const searchButton = $("#searchButton");
const suggestions = $("#suggestions");
const toolsGrid = $("#toolsGrid");
const categoryFilter = $("#categoryFilter");
const themeToggle = $("#themeToggle");
const menuButton = $("#menuButton");
const navLinks = $("#navLinks");
const categoriesButton = $("#categoriesButton");
const categoriesButtonHero = $("#categoriesButtonHero");
const footerCategoriesButton = $("#footerCategoriesButton");
const categoriesOverlay = $("#categoriesOverlay");
const categoriesClose = $("#categoriesClose");


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

function populateCategoryFilter() {

  if (!categoryFilter) return;

  const categories = [
    ...new Set(tools.map(tool => tool.category))
  ];

  categoryFilter.innerHTML = `
    <option value="all">All Categories</option>
    ${categories
      .sort()
      .map(category =>
        `<option value="${category}">${category}</option>`
      )
      .join("")}
  `;
}


/* =========================================================
   SMART INTENT SYSTEM
   ========================================================= */

const intentGroups = {

  design: [
    "logo",
    "logos",
    "branding",
    "brand",
    "flyer",
    "poster",
    "graphic",
    "graphics",
    "thumbnail",
    "banner",
    "design"
  ],

  video: [
    "video",
    "videos",
    "edit",
    "editing",
    "youtube",
    "tiktok",
    "reel",
    "reels",
    "shorts",
    "film",
    "movie"
  ],

  website: [
    "website",
    "web",
    "site",
    "blog",
    "landing",
    "store",
    "shop",
    "portfolio"
  ],

  student: [
    "study",
    "studying",
    "school",
    "student",
    "homework",
    "math",
    "mathematics",
    "science",
    "learn",
    "learning",
    "quiz",
    "flashcards",
    "revision"
  ],

  writing: [
    "write",
    "writing",
    "essay",
    "grammar",
    "spell",
    "spelling",
    "rewrite",
    "paraphrase",
    "letter"
  ],

  ai: [
    "ai",
    "artificial",
    "intelligence",
    "chat",
    "assistant",
    "research"
  ],

  image: [
    "image",
    "images",
    "photo",
    "photos",
    "picture",
    "pictures",
    "background"
  ],

  productivity: [
    "productivity",
    "organize",
    "organization",
    "planning",
    "plan",
    "tasks",
    "task",
    "notes",
    "projects"
  ],

  pdf: [
    "pdf",
    "document",
    "documents",
    "merge",
    "compress",
    "convert"
  ],

  audio: [
    "audio",
    "music",
    "song",
    "voice",
    "sound"
  ]

};


function detectIntents(query) {

  const q = normalize(query);
  const detected = [];

  for (const intent in intentGroups) {

    if (
      intentGroups[intent].some(word =>
        q.includes(word)
      )
    ) {
      detected.push(intent);
    }

  }

  return detected;
}


/* =========================================================
   TOOL SCORING
   ========================================================= */

function scoreTool(tool, query) {

  const q = normalize(query);

  if (!q) return 0;

  const words = q
    .split(/\s+/)
    .filter(Boolean);

  const intents = detectIntents(q);

  let score = 0;

  const name = normalize(tool.name);
  const description = normalize(tool.description);
  const keywords = tool.keywords.map(normalize);

  // Exact tool name
  if (name === q) {
    score += 100;
  }

  // Keyword matching
  words.forEach(word => {

    if (name.includes(word)) {
      score += 15;
    }

    if (description.includes(word)) {
      score += 4;
    }

    keywords.forEach(keyword => {

      if (keyword === word) {
        score += 20;
      }

      else if (
        keyword.includes(word) ||
        word.includes(keyword)
      ) {
        score += 8;
      }

    });

  });

  // Intent/category matching
  intents.forEach(intent => {

    const category = tool.category.toLowerCase();

    if (
      intent === "design" &&
      category === "design"
    ) {
      score += 45;
    }

    if (
      intent === "video" &&
      category === "video"
    ) {
      score += 45;
    }

    if (
      intent === "website" &&
      category === "websites"
    ) {
      score += 45;
    }

    if (
      intent === "student" &&
      category === "students"
    ) {
      score += 45;
    }

    if (
      intent === "writing" &&
      category === "writing"
    ) {
      score += 45;
    }

    if (
      intent === "ai" &&
      category === "ai"
    ) {
      score += 45;
    }

    if (
      intent === "image" &&
      category === "images"
    ) {
      score += 45;
    }

    if (
      intent === "productivity" &&
      category === "productivity"
    ) {
      score += 45;
    }

    if (
      intent === "pdf" &&
      category === "pdf"
    ) {
      score += 45;
    }

    if (
      intent === "audio" &&
      category === "audio"
    ) {
      score += 45;
    }

  });

  return score;
}


/* =========================================================
   SMART SEARCH
   ========================================================= */

function searchTools(query) {

  const q = normalize(query);

  if (!q) {
    return [...tools];
  }

  const ranked = tools
    .map(tool => ({
      tool,
      score: scoreTool(tool, q)
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => {

      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return b.tool.rating - a.tool.rating;

    });

  return ranked
    .slice(0, 10)
    .map(item => item.tool);
}


/* =========================================================
   FAVORITES
   ========================================================= */

function isFavorite(id) {
  return favorites.includes(id);
}

function toggleFavorite(id) {

  if (isFavorite(id)) {

    favorites = favorites.filter(
      item => item !== id
    );

  } else {

    favorites.push(id);

  }

  saveLocalData();
  renderTools(currentResults);
}


/* =========================================================
   RECENTLY USED
   ========================================================= */

function addRecentlyUsed(id) {

  recentlyUsed = [
    id,
    ...recentlyUsed.filter(item => item !== id)
  ].slice(0, 10);

  saveLocalData();
}


/* =========================================================
   COMPARISON
   ========================================================= */

function isCompared(id) {
  return comparison.includes(id);
}

function toggleCompare(id) {

  if (isCompared(id)) {

    comparison = comparison.filter(
      item => item !== id
    );

  } else {

    if (comparison.length >= 3) {
      showToast("You can compare up to 3 tools.");
      return;
    }

    comparison.push(id);

  }

  saveLocalData();
  renderTools(currentResults);
  renderCompareBar();
}


/* =========================================================
   TOOL CARD
   ========================================================= */

function createToolCard(tool) {

  const favorite = isFavorite(tool.id);
  const compared = isCompared(tool.id);

  return `
    <article class="tool-card">

      <div class="tool-card-top">

        <div class="tool-icon">
          ${tool.icon}
        </div>

        <button
          class="favorite-button ${favorite ? "active" : ""}"
          data-favorite="${tool.id}"
          aria-label="Favorite ${tool.name}"
        >
          ${favorite ? "♥" : "♡"}
        </button>

      </div>

      <div class="tool-info">

        <div class="tool-title-row">

          <h3>${tool.name}</h3>

          <span class="tool-category">
            ${tool.category}
          </span>

        </div>

        <p>
          ${tool.description}
        </p>

        <div class="tool-meta">

          <span>
            ${tool.pricing}
          </span>

          <span>
            ⭐ ${tool.rating}
          </span>

        </div>

        <div class="tool-actions">

          <a
            class="visit-button"
            href="${tool.url}"
            target="_blank"
            rel="noopener noreferrer"
            data-visit="${tool.id}"
          >
            Visit Tool →
          </a>

          <button
            class="compare-button ${compared ? "active" : ""}"
            data-compare="${tool.id}"
          >
            ${compared ? "✓ Compared" : "Compare"}
          </button>

        </div>

      </div>

    </article>
  `;
}


/* =========================================================
   RENDER TOOLS
   ========================================================= */

function renderTools(toolList) {

  if (!toolsGrid) return;

  currentResults = [...toolList];

  if (!toolList.length) {

    toolsGrid.innerHTML = `
      <div class="empty-state">

        <div class="empty-icon">🔎</div>

        <h3>No matching tools found</h3>

        <p>
          Try something like
          "make a logo",
          "edit a video",
          "build a website",
          or "help me study".
        </p>

      </div>
    `;

    return;
  }

  toolsGrid.innerHTML = toolList
    .map(createToolCard)
    .join("");
}


/* =========================================================
   SEARCH
   ========================================================= */

function performSearch(query = "") {

  const value =
    typeof query === "string"
      ? query.trim()
      : "";

  if (searchInput) {
    searchInput.value = value;
  }

  if (!value) {

    renderTools(tools);

    return;
  }

  const results = searchTools(value);

  renderTools(results);

  const toolsSection = $("#tools");

  if (toolsSection) {
    toolsSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


/* =========================================================
   SEARCH SUGGESTIONS
   ========================================================= */

function renderSuggestions(value) {

  if (!suggestions) return;

  const query = normalize(value);

  if (!query) {

    suggestions.innerHTML = "";
    suggestions.classList.remove("open");

    return;
  }

  const suggestionsList = [
    "make a logo",
    "edit a video",
    "build a website",
    "help me study",
    "write an essay",
    "edit a photo",
    "find an AI tool",
    "organize my tasks",
    "work with a PDF",
    "create music"
  ];

  const matches = suggestionsList
    .filter(item =>
      normalize(item).includes(query)
    )
    .slice(0, 5);

  if (!matches.length) {

    suggestions.classList.remove("open");
    return;

  }

  suggestions.innerHTML = matches
    .map(item => `
      <button
        class="suggestion-item"
        data-suggestion="${item}"
      >
        🔎 ${item}
      </button>
    `)
    .join("");

  suggestions.classList.add("open");
}


/* =========================================================
   QUICK SEARCHES
   ========================================================= */

function initializeQuickSearches() {

  $$(".quick-search").forEach(button => {

    button.addEventListener("click", () => {

      const query =
        button.dataset.search ||
        button.textContent.trim();

      performSearch(query);

    });

  });

}


/* =========================================================
   CATEGORY MENU
   ========================================================= */

function openCategories() {

  if (!categoriesOverlay) return;

  categoriesOverlay.classList.add("open");

}

function closeCategories() {

  if (!categoriesOverlay) return;

  categoriesOverlay.classList.remove("open");

}


/* =========================================================
   MOBILE NAV
   ========================================================= */

function initializeMobileNav() {

  if (!menuButton || !navLinks) return;

  menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      navLinks.classList.contains("open")
    );

  });

  navLinks.addEventListener("click", event => {

    if (
      event.target.closest("a") ||
      event.target.closest("button")
    ) {
      navLinks.classList.remove("open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );
    }

  });

}


/* =========================================================
   DARK MODE
   ========================================================= */

function initializeTheme() {

  const savedTheme =
    localStorage.getItem("tztools-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  updateThemeIcon();

  themeToggle?.addEventListener(
    "click",
    toggleTheme
  );

}

function toggleTheme() {

  document.body.classList.toggle(
    "dark-mode"
  );

  const isDark =
    document.body.classList.contains(
      "dark-mode"
    );

  localStorage.setItem(
    "tztools-theme",
    isDark ? "dark" : "light"
  );

  updateThemeIcon();

}

function updateThemeIcon() {

  if (!themeToggle) return;

  const isDark =
    document.body.classList.contains(
      "dark-mode"
    );

  themeToggle.textContent =
    isDark ? "☀️" : "🌙";

}


/* =========================================================
   DASHBOARD
   ========================================================= */

function createDashboard() {

  const dashboard = $("#dashboard");

  if (!dashboard) return;

  dashboard.innerHTML = `

    <div class="container">

      <div class="section-heading">

        <span class="section-label">
          YOUR SPACE
        </span>

        <h2>
          Dashboard
        </h2>

        <p>
          Your favorites, recently used tools
          and comparisons will appear here.
        </p>

      </div>

      <div class="dashboard-grid">

        <div class="dashboard-card">
          <span>❤️</span>
          <strong id="favoriteCount">0</strong>
          <p>Favorites</p>
        </div>

        <div class="dashboard-card">
          <span>🕘</span>
          <strong id="recentCount">0</strong>
          <p>Recently Used</p>
        </div>

        <div class="dashboard-card">
          <span>⚖️</span>
          <strong id="comparisonCount">0</strong>
          <p>Comparing</p>
        </div>

      </div>

      <div class="dashboard-content">

        <div>
          <h3>Favorite Tools</h3>
          <div id="dashboardFavorites"></div>
        </div>

        <div>
          <h3>Recently Used</h3>
          <div id="dashboardRecent"></div>
        </div>

      </div>

    </div>
  `;

  renderDashboard();

}


function renderDashboard() {

  const favoriteCount =
    $("#favoriteCount");

  const recentCount =
    $("#recentCount");

  const comparisonCount =
    $("#comparisonCount");

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
      comparison.length;
  }

  const favoriteBox =
    $("#dashboardFavorites");

  if (favoriteBox) {

    const favTools =
      favorites
        .map(getTool)
        .filter(Boolean);

    favoriteBox.innerHTML =
      favTools.length
        ? favTools.map(createMiniTool).join("")
        : `<p class="muted">No favorites yet.</p>`;

  }

  const recentBox =
    $("#dashboardRecent");

  if (recentBox) {

    const recentTools =
      recentlyUsed
        .map(getTool)
        .filter(Boolean);

    recentBox.innerHTML =
      recentTools.length
        ? recentTools.map(createMiniTool).join("")
        : `<p class="muted">Nothing used yet.</p>`;

  }

}


function createMiniTool(tool) {

  return `
    <div class="mini-tool">

      <span class="mini-tool-icon">
        ${tool.icon}
      </span>

      <div>
        <strong>${tool.name}</strong>
        <small>${tool.category}</small>
      </div>

      <a
        href="${tool.url}"
        target="_blank"
        rel="noopener noreferrer"
        data-visit="${tool.id}"
      >
        Open
      </a>

    </div>
  `;

}


/* =========================================================
   COMPARE BAR
   ========================================================= */

function renderCompareBar() {

  let bar = $("#compareBar");

  if (!bar) {

    bar = document.createElement("div");

    bar.id = "compareBar";
    bar.className = "compare-bar";

    document.body.appendChild(bar);

  }

  if (!comparison.length) {

    bar.innerHTML = "";
    bar.classList.remove("show");

    return;
  }

  const selected =
    comparison
      .map(getTool)
      .filter(Boolean);

  bar.innerHTML = `

    <div class="compare-bar-inner">

      <div>
        <strong>
          ${selected.length} tool${selected.length > 1 ? "s" : ""} selected
        </strong>

        <span>
          Choose up to 3 tools.
        </span>
      </div>

      <div class="compare-bar-actions">

        <button id="openCompare">
          Compare
        </button>

        <button id="clearCompare">
          Clear
        </button>

      </div>

    </div>
  `;

  bar.classList.add("show");

}


/* =========================================================
   COMPARE MODAL
   ========================================================= */

function openCompareModal() {

  const selected =
    comparison
      .map(getTool)
      .filter(Boolean);

  if (!selected.length) return;

  let modal = $("#compareModal");

  if (!modal) {

    modal = document.createElement("div");

    modal.id = "compareModal";
    modal.className = "modal-overlay";

    document.body.appendChild(modal);

  }

  modal.innerHTML = `

    <div class="compare-modal">

      <button
        class="modal-close"
        id="closeCompare"
      >
        ✕
      </button>

      <h2>Compare Tools</h2>

      <div class="comparison-grid">

        ${selected.map(tool => `

          <div class="comparison-card">

            <div class="tool-icon">
              ${tool.icon}
            </div>

            <h3>${tool.name}</h3>

            <p>${tool.description}</p>

            <strong>
              ⭐ ${tool.rating}
            </strong>

            <span>
              ${tool.pricing}
            </span>

            <a
              href="${tool.url}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Tool →
            </a>

          </div>

        `).join("")}

      </div>

    </div>
  `;

  modal.classList.add("open");

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

  let toast = $("#tzToast");

  if (!toast) {

    toast = document.createElement("div");

    toast.id = "tzToast";
    toast.className = "tz-toast";

    document.body.appendChild(toast);

  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.tzToastTimer);

  window.tzToastTimer =
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2200);

}


/* =========================================================
   AUTH UI
   ========================================================= */

function createAuthUI() {

  if (!navLinks) return;

  if ($("#accountButton")) return;

  const button =
    document.createElement("button");

  button.type = "button";
  button.id = "accountButton";
  button.className = "account-button";

  button.textContent = "Account";

  navLinks.appendChild(button);

  button.addEventListener(
    "click",
    openAuthModal
  );

}


function openAuthModal() {

  let modal = $("#authModal");

  if (!modal) {

    modal = document.createElement("div");

    modal.id = "authModal";
    modal.className = "modal-overlay";

    document.body.appendChild(modal);

  }

  renderAuthModal();

  modal.classList.add("open");

}


function renderAuthModal() {

  const modal = $("#authModal");

  if (!modal) return;

  if (currentUser) {

    modal.innerHTML = `

      <div class="auth-modal">

        <button
          class="modal-close"
          data-close-auth
        >
          ✕
        </button>

        <h2>Welcome 👋</h2>

        <p>
          ${currentUser.email || "Signed in"}
        </p>

        <button
          class="auth-submit"
          id="logoutButton"
        >
          Log out
        </button>

      </div>
    `;

    $("#logoutButton")?.addEventListener(
      "click",
      logoutUser
    );

    return;
  }

  modal.innerHTML = `

    <div class="auth-modal">

      <button
        class="modal-close"
        data-close-auth
      >
        ✕
      </button>

      <h2>Welcome to TzTools</h2>

      <p>
        Sign in to save favorites,
        recent tools and comparisons.
      </p>

      <form id="authForm">

        <input
          type="email"
          id="authEmail"
          placeholder="Email address"
          required
        >

        <input
          type="password"
          id="authPassword"
          placeholder="Password"
          required
        >

        <button
          type="submit"
          class="auth-submit"
        >
          Sign In
        </button>

      </form>

      <button
        class="auth-secondary"
        id="signupButton"
      >
        Create Account
      </button>

      <p id="authMessage"></p>

    </div>
  `;

  $("#authForm")?.addEventListener(
    "submit",
    signInUser
  );

  $("#signupButton")?.addEventListener(
    "click",
    signUpUser
  );

}


async function signInUser(event) {

  event.preventDefault();

  if (!supabaseClient) {

    showToast("Authentication is still loading.");

    return;
  }

  const email =
    $("#authEmail")?.value.trim();

  const password =
    $("#authPassword")?.value;

  const message =
    $("#authMessage");

  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

  if (error) {

    if (message) {
      message.textContent =
        error.message;
    }

    return;
  }

  currentUser = data.user;

  showToast("Signed in successfully.");

  renderAuthModal();
  updateAccountButton();

}


async function signUpUser() {

  if (!supabaseClient) {

    showToast("Authentication is still loading.");

    return;
  }

  const email =
    $("#authEmail")?.value.trim();

  const password =
    $("#authPassword")?.value;

  const message =
    $("#authMessage");

  if (!email || !password) {

    if (message) {
      message.textContent =
        "Enter your email and password first.";
    }

    return;
  }

  const { data, error } =
    await supabaseClient.auth.signUp({
      email,
      password
    });

  if (error) {

    if (message) {
      message.textContent =
        error.message;
    }

    return;
  }

  if (message) {
    message.textContent =
      "Account created. Check your email if confirmation is required.";
  }

  if (data.user) {
    currentUser = data.user;
    updateAccountButton();
  }

}


async function logoutUser() {

  if (!supabaseClient) return;

  await supabaseClient.auth.signOut();

  currentUser = null;

  renderAuthModal();
  updateAccountButton();

  showToast("Logged out.");

}


function updateAccountButton() {

  const button =
    $("#accountButton");

  if (!button) return;

  button.textContent =
    currentUser
      ? "Account ✓"
      : "Account";

}


/* =========================================================
   SUPABASE INITIALIZATION
   ========================================================= */

function initializeSupabase() {

  if (
    SUPABASE_PUBLISHABLE_KEY ===
    "PASTE_YOUR_PUBLISHABLE_KEY_HERE"
  ) {

    console.warn(
      "TzTools: Supabase publishable key has not been added yet."
    );

    return;
  }

  if (
    typeof window.supabase ===
    "undefined"
  ) {

    console.warn(
      "TzTools: Supabase library not loaded."
    );

    return;
  }

  supabaseClient =
    window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_PUBLISHABLE_KEY
    );

  supabaseClient.auth.getSession()
    .then(({ data }) => {

      currentUser =
        data.session?.user || null;

      updateAccountButton();

    });

  supabaseClient.auth.onAuthStateChange(
    (_event, session) => {

      currentUser =
        session?.user || null;

      updateAccountButton();

    }
  );

}


/* =========================================================
   EVENT LISTENERS
   ========================================================= */

// Search
searchButton?.addEventListener(
  "click",
  () => performSearch(
    searchInput?.value || ""
  )
);

searchInput?.addEventListener(
  "input",
  () => {
    renderSuggestions(
      searchInput.value
    );
  }
);

searchInput?.addEventListener(
  "keydown",
  event => {

    if (event.key === "Enter") {

      event.preventDefault();

      performSearch(
        searchInput.value
      );

      suggestions?.classList.remove(
        "open"
      );

    }

  }
);


// Suggestions
suggestions?.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        "[data-suggestion]"
      );

    if (!button) return;

    performSearch(
      button.dataset.suggestion
    );

    suggestions.classList.remove(
      "open"
    );

  }
);


// Category filter
categoryFilter?.addEventListener(
  "change",
  () => {

    const category =
      categoryFilter.value;

    if (category === "all") {

      renderTools(tools);

      return;
    }

    renderTools(
      tools.filter(
        tool =>
          tool.category === category
      )
    );

  }
);


// Categories
categoriesButton?.addEventListener(
  "click",
  openCategories
);

categoriesButtonHero?.addEventListener(
  "click",
  openCategories
);

footerCategoriesButton?.addEventListener(
  "click",
  openCategories
);

categoriesClose?.addEventListener(
  "click",
  closeCategories
);

categoriesOverlay?.addEventListener(
  "click",
  event => {

    if (
      event.target ===
      categoriesOverlay
    ) {
      closeCategories();
    }

  }
);


// Tool cards + global actions
document.addEventListener(
  "click",
  event => {

    const favorite =
      event.target.closest(
        "[data-favorite]"
      );

    if (favorite) {

      toggleFavorite(
        favorite.dataset.favorite
      );

      return;
    }


    const compare =
      event.target.closest(
        "[data-compare]"
      );

    if (compare) {

      toggleCompare(
        compare.dataset.compare
      );

      return;
    }


    const visit =
      event.target.closest(
        "[data-visit]"
      );

    if (visit) {

      addRecentlyUsed(
        visit.dataset.visit
      );

    }


    const category =
      event.target.closest(
        "[data-category]"
      );

    if (category) {

      const selected =
        category.dataset.category;

      if (categoryFilter) {
        categoryFilter.value =
          selected;
      }

      renderTools(
        tools.filter(
          tool =>
            tool.category === selected
        )
      );

      closeCategories();

      $("#tools")?.scrollIntoView({
        behavior: "smooth"
      });

    }


    const closeAuth =
      event.target.closest(
        "[data-close-auth]"
      );

    if (closeAuth) {

      $("#authModal")?.classList.remove(
        "open"
      );

    }


    const clearCompare =
      event.target.closest(
        "#clearCompare"
      );

    if (clearCompare) {

      comparison = [];

      saveLocalData();

      renderTools(currentResults);
      renderCompareBar();

    }


    const openCompare =
      event.target.closest(
        "#openCompare"
      );

    if (openCompare) {
      openCompareModal();
    }


    const closeCompare =
      event.target.closest(
        "#closeCompare"
      );

    if (closeCompare) {

      $("#compareModal")?.classList.remove(
        "open"
      );

    }

  }
);


// Close modals by clicking outside
document.addEventListener(
  "click",
  event => {

    const authModal =
      $("#authModal");

    if (
      authModal &&
      event.target === authModal
    ) {
      authModal.classList.remove(
        "open"
      );
    }

    const compareModal =
      $("#compareModal");

    if (
      compareModal &&
      event.target === compareModal
    ) {
      compareModal.classList.remove(
        "open"
      );
    }

  }
);


/* =========================================================
   KEYBOARD ACCESSIBILITY
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape") return;

    categoriesOverlay?.classList.remove(
      "open"
    );

    $("#authModal")?.classList.remove(
      "open"
    );

    $("#compareModal")?.classList.remove(
      "open"
    );

  }
);


/* =========================================================
   START APP
   ========================================================= */

function initializeTzTools() {

  populateCategoryFilter();

  createDashboard();

  createAuthUI();

  initializeTheme();

  initializeMobileNav();

  initializeQuickSearches();

  renderTools(tools);

  renderCompareBar();

  initializeSupabase();

  console.log(
    `TzTools V7 loaded — ${tools.length} tools available.`
  );

}


if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initializeTzTools
  );

} else {

  initializeTzTools();

}
