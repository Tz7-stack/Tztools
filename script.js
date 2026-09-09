/* =========================================================
   TzTools V7.0.2
   AUTH + SMART SEARCH + FILTERS + FAVORITES + RECENT
   COMPARE + DASHBOARD + UI POLISH + ACCESSIBILITY
   ========================================================= */

/* =========================================================
   SUPABASE CONFIG
   ========================================================= */

const SUPABASE_URL = "https://nslaakklgidpzwlymrhf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_XoDQsJkHs_7PA8wQAoutHA_glygnyxK";

let supabaseClient = null;
let currentUser = null;

/* =========================================================
   TOOL DATABASE
   ========================================================= */

const tools = [
  // AI
  {
    name: "ChatGPT",
    category: "AI",
    icon: "🤖",
    description: "AI assistant for writing, studying, brainstorming, coding and more.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://chatgpt.com/",
    keywords: ["ai", "chat", "assistant", "study", "writing", "coding", "research"]
  },
  {
    name: "Google Gemini",
    category: "AI",
    icon: "✨",
    description: "Google's AI assistant for research, writing, ideas and everyday tasks.",
    rating: 4.7,
    pricing: "Free",
    url: "https://gemini.google.com/",
    keywords: ["ai", "google", "assistant", "research", "study"]
  },
  {
    name: "Claude",
    category: "AI",
    icon: "🧠",
    description: "AI assistant focused on writing, analysis, reasoning and coding.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://claude.ai/",
    keywords: ["ai", "writing", "coding", "research", "analysis"]
  },
  {
    name: "Microsoft Copilot",
    category: "AI",
    icon: "🪟",
    description: "AI assistant for answers, writing, research and productivity.",
    rating: 4.6,
    pricing: "Free",
    url: "https://copilot.microsoft.com/",
    keywords: ["ai", "assistant", "microsoft", "research"]
  },
  {
    name: "Perplexity",
    category: "AI",
    icon: "🔎",
    description: "AI-powered search and research assistant.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.perplexity.ai/",
    keywords: ["ai", "search", "research", "answers"]
  },

  // Design
  {
    name: "Canva",
    category: "Design",
    icon: "🎨",
    description: "Easy design platform for logos, posters, presentations and social graphics.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://www.canva.com/",
    keywords: ["design", "logo", "poster", "graphics", "social media"]
  },
  {
    name: "Adobe Express",
    category: "Design",
    icon: "🅰️",
    description: "Quickly create graphics, social posts, flyers and visual content.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://www.adobe.com/express",
    keywords: ["design", "logo", "graphics", "poster", "adobe"]
  },
  {
    name: "Figma",
    category: "Design",
    icon: "🖌️",
    description: "Collaborative design and prototyping platform.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://www.figma.com/",
    keywords: ["design", "ui", "ux", "prototype", "website", "app"]
  },
  {
    name: "Photopea",
    category: "Design",
    icon: "🖼️",
    description: "Powerful browser-based image editor similar to Photoshop.",
    rating: 4.7,
    pricing: "Free",
    url: "https://www.photopea.com/",
    keywords: ["photo", "image", "design", "photoshop", "editing"]
  },
  {
    name: "Pixlr",
    category: "Design",
    icon: "🌈",
    description: "Online photo editor and design tool.",
    rating: 4.5,
    pricing: "Freemium",
    url: "https://pixlr.com/",
    keywords: ["photo", "image", "design", "editing"]
  },

  // Video
  {
    name: "CapCut",
    category: "Video",
    icon: "🎬",
    description: "Easy video editor for social media, short videos and creative projects.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.capcut.com/",
    keywords: ["video", "edit", "editing", "shorts", "reels", "tiktok"]
  },
  {
    name: "DaVinci Resolve",
    category: "Video",
    icon: "🎥",
    description: "Professional video editing, color grading and audio production software.",
    rating: 4.9,
    pricing: "Free",
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    keywords: ["video", "editing", "professional", "film", "color"]
  },
  {
    name: "VEED",
    category: "Video",
    icon: "📹",
    description: "Browser-based video editor with captions and social media tools.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://www.veed.io/",
    keywords: ["video", "edit", "captions", "social"]
  },
  {
    name: "Clipchamp",
    category: "Video",
    icon: "✂️",
    description: "Simple browser-based video editor from Microsoft.",
    rating: 4.5,
    pricing: "Freemium",
    url: "https://clipchamp.com/",
    keywords: ["video", "editing", "microsoft"]
  },
  {
    name: "InVideo",
    category: "Video",
    icon: "🎞️",
    description: "Online video creation platform with templates and AI features.",
    rating: 4.5,
    pricing: "Freemium",
    url: "https://invideo.io/",
    keywords: ["video", "ai", "editing", "templates"]
  },

  // Writing
  {
    name: "Grammarly",
    category: "Writing",
    icon: "✍️",
    description: "Writing assistant for grammar, clarity and tone.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.grammarly.com/",
    keywords: ["writing", "grammar", "english", "school"]
  },
  {
    name: "QuillBot",
    category: "Writing",
    icon: "📝",
    description: "Writing and paraphrasing tools for improving text.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://quillbot.com/",
    keywords: ["writing", "paraphrase", "grammar", "school"]
  },
  {
    name: "Google Docs",
    category: "Writing",
    icon: "📄",
    description: "Online document editor for writing and collaboration.",
    rating: 4.8,
    pricing: "Free",
    url: "https://docs.google.com/",
    keywords: ["writing", "document", "school", "essay"]
  },
  {
    name: "LanguageTool",
    category: "Writing",
    icon: "🔤",
    description: "Grammar, spelling and style checker.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://languagetool.org/",
    keywords: ["grammar", "writing", "spelling"]
  },
  {
    name: "Hemingway Editor",
    category: "Writing",
    icon: "📚",
    description: "Makes writing clearer and easier to read.",
    rating: 4.5,
    pricing: "Free",
    url: "https://hemingwayapp.com/",
    keywords: ["writing", "essay", "grammar", "clarity"]
  },

  // Websites
  {
    name: "WordPress",
    category: "Websites",
    icon: "🌐",
    description: "Popular platform for creating websites and blogs.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://wordpress.com/",
    keywords: ["website", "blog", "web", "site"]
  },
  {
    name: "Wix",
    category: "Websites",
    icon: "🧩",
    description: "Website builder with templates and drag-and-drop editing.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://www.wix.com/",
    keywords: ["website", "web", "builder", "business"]
  },
  {
    name: "Framer",
    category: "Websites",
    icon: "⚡",
    description: "Modern website design and publishing platform.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.framer.com/",
    keywords: ["website", "web", "design", "builder"]
  },
  {
    name: "Webflow",
    category: "Websites",
    icon: "🔷",
    description: "Visual website builder for advanced web design.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://webflow.com/",
    keywords: ["website", "web", "design", "developer"]
  },
  {
    name: "Carrd",
    category: "Websites",
    icon: "🪪",
    description: "Simple platform for creating one-page websites.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://carrd.co/",
    keywords: ["website", "landing page", "portfolio"]
  },
  {
    name: "GitHub Pages",
    category: "Websites",
    icon: "🐙",
    description: "Free static website hosting directly from GitHub repositories.",
    rating: 4.7,
    pricing: "Free",
    url: "https://pages.github.com/",
    keywords: ["website", "hosting", "coding", "github"]
  },

  // Students
  {
    name: "Khan Academy",
    category: "Students",
    icon: "🎓",
    description: "Free educational lessons and practice for students.",
    rating: 4.9,
    pricing: "Free",
    url: "https://www.khanacademy.org/",
    keywords: ["study", "school", "math", "science", "education"]
  },
  {
    name: "WolframAlpha",
    category: "Students",
    icon: "🧮",
    description: "Computational engine for maths, science and more.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://www.wolframalpha.com/",
    keywords: ["math", "science", "calculation", "study"]
  },
  {
    name: "Quizlet",
    category: "Students",
    icon: "🃏",
    description: "Flashcards and study tools for learning and revision.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://quizlet.com/",
    keywords: ["study", "flashcards", "revision", "school"]
  },
  {
    name: "Desmos",
    category: "Students",
    icon: "📈",
    description: "Powerful online graphing calculator.",
    rating: 4.8,
    pricing: "Free",
    url: "https://www.desmos.com/",
    keywords: ["math", "graph", "calculator", "school"]
  },
  {
    name: "GeoGebra",
    category: "Students",
    icon: "📐",
    description: "Interactive mathematics tools for geometry, algebra and graphs.",
    rating: 4.8,
    pricing: "Free",
    url: "https://www.geogebra.org/",
    keywords: ["math", "geometry", "algebra", "school"]
  },
  {
    name: "Google Scholar",
    category: "Students",
    icon: "🎓",
    description: "Search engine for academic papers and research.",
    rating: 4.7,
    pricing: "Free",
    url: "https://scholar.google.com/",
    keywords: ["research", "study", "academic", "papers"]
  },

  // Productivity
  {
    name: "Notion",
    category: "Productivity",
    icon: "📓",
    description: "Workspace for notes, projects, planning and organization.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://www.notion.com/",
    keywords: ["productivity", "notes", "planning", "school"]
  },
  {
    name: "Trello",
    category: "Productivity",
    icon: "📋",
    description: "Visual project management using boards and cards.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://trello.com/",
    keywords: ["productivity", "projects", "tasks", "planning"]
  },
  {
    name: "Todoist",
    category: "Productivity",
    icon: "✅",
    description: "Task manager for organizing everyday work and goals.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://todoist.com/",
    keywords: ["tasks", "todo", "productivity", "planning"]
  },
  {
    name: "Asana",
    category: "Productivity",
    icon: "📊",
    description: "Project and task management platform.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://asana.com/",
    keywords: ["productivity", "projects", "tasks"]
  },
  {
    name: "Google Keep",
    category: "Productivity",
    icon: "💡",
    description: "Quick notes, lists and reminders.",
    rating: 4.6,
    pricing: "Free",
    url: "https://keep.google.com/",
    keywords: ["notes", "tasks", "productivity"]
  },

  // Images
  {
    name: "Remove.bg",
    category: "Images",
    icon: "🪄",
    description: "Automatically remove backgrounds from images.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.remove.bg/",
    keywords: ["image", "background", "photo", "remove"]
  },
  {
    name: "TinyPNG",
    category: "Images",
    icon: "🐼",
    description: "Compress PNG and JPEG images while keeping quality.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://tinypng.com/",
    keywords: ["image", "compress", "png", "jpg"]
  },
  {
    name: "Unsplash",
    category: "Images",
    icon: "📷",
    description: "Large collection of free high-quality images.",
    rating: 4.8,
    pricing: "Free",
    url: "https://unsplash.com/",
    keywords: ["images", "photos", "pictures"]
  },
  {
    name: "Pexels",
    category: "Images",
    icon: "📸",
    description: "Free stock photos and videos.",
    rating: 4.8,
    pricing: "Free",
    url: "https://www.pexels.com/",
    keywords: ["images", "photos", "videos", "stock"]
  },

  // Audio
  {
    name: "Audacity",
    category: "Audio",
    icon: "🎙️",
    description: "Free open-source audio recording and editing software.",
    rating: 4.7,
    pricing: "Free",
    url: "https://www.audacityteam.org/",
    keywords: ["audio", "music", "recording", "editing"]
  },
  {
    name: "BandLab",
    category: "Audio",
    icon: "🎵",
    description: "Online music creation and recording platform.",
    rating: 4.7,
    pricing: "Free",
    url: "https://www.bandlab.com/",
    keywords: ["music", "audio", "recording", "beats"]
  },

  // PDF
  {
    name: "Smallpdf",
    category: "PDF & Documents",
    icon: "📕",
    description: "Online PDF tools for editing, converting and compressing documents.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://smallpdf.com/",
    keywords: ["pdf", "document", "convert", "compress"]
  },
  {
    name: "iLovePDF",
    category: "PDF & Documents",
    icon: "❤️",
    description: "Collection of tools for editing and managing PDF files.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.ilovepdf.com/",
    keywords: ["pdf", "document", "merge", "convert"]
  },
  {
    name: "PDF24",
    category: "PDF & Documents",
    icon: "📘",
    description: "Free online PDF tools for creating and managing documents.",
    rating: 4.7,
    pricing: "Free",
    url: "https://tools.pdf24.org/",
    keywords: ["pdf", "document", "convert", "edit"]
  }
];

/* =========================================================
   STORAGE
   ========================================================= */

const FAVORITES_KEY = "tztools_favorites";
const RECENT_KEY = "tztools_recent";
const THEME_KEY = "tztools_theme";

let selectedCompare = [];
let currentSearchResults = [...tools];

/* =========================================================
   HELPERS
   ========================================================= */

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, " ")
    .replace(/\s+/g, " ");
}

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  } catch {
    return [];
  }
}

function saveFavorites(list) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(list));
}

function getRecent() {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY)) || [];
  } catch {
    return [];
  }
}

function saveRecent(list) {
  localStorage.setItem(RECENT_KEY, JSON.stringify(list));
}

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

  window.tzToastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

/* =========================================================
   SEARCH INTENTS
   ========================================================= */

const intentGroups = {
  logo: ["logo", "brand", "branding", "brand identity"],
  design: ["design", "graphic", "poster", "flyer", "thumbnail", "graphics"],
  video: ["video", "edit video", "editing", "reels", "shorts", "youtube"],
  writing: ["writing", "write", "essay", "grammar", "spell", "article"],
  website: ["website", "web", "site", "landing page", "portfolio"],
  study: ["study", "school", "learn", "revision", "homework", "exam"],
  math: ["math", "mathematics", "equation", "algebra", "geometry", "calculate"],
  ai: ["ai", "artificial intelligence", "assistant", "chatbot"],
  productivity: ["productivity", "tasks", "todo", "planning", "organize"],
  image: ["image", "photo", "picture", "background", "compress image"],
  audio: ["audio", "music", "record", "song", "beat"],
  pdf: ["pdf", "document", "convert pdf", "merge pdf"]
};

const intentCategories = {
  logo: ["Design"],
  design: ["Design"],
  video: ["Video"],
  writing: ["Writing"],
  website: ["Websites"],
  study: ["Students"],
  math: ["Students"],
  ai: ["AI"],
  productivity: ["Productivity"],
  image: ["Images", "Design"],
  audio: ["Audio"],
  pdf: ["PDF & Documents"]
};

function detectIntents(query) {
  const text = normalizeText(query);
  const detected = [];

  Object.entries(intentGroups).forEach(([intent, words]) => {
    if (words.some(word => text.includes(normalizeText(word)))) {
      detected.push(intent);
    }
  });

  return detected;
}

function scoreTool(tool, query, intents) {
  const q = normalizeText(query);

  if (!q) return 0;

  let score = 0;

  const name = normalizeText(tool.name);
  const description = normalizeText(tool.description);
  const category = normalizeText(tool.category);

  if (name === q) score += 100;
  if (name.includes(q)) score += 60;
  if (q.includes(name)) score += 45;

  q.split(" ").forEach(word => {
    if (word.length < 2) return;

    if (name.includes(word)) score += 25;
    if (description.includes(word)) score += 10;
    if (category.includes(word)) score += 15;

    if (
      tool.keywords.some(keyword =>
        normalizeText(keyword).includes(word)
      )
    ) {
      score += 22;
    }
  });

  intents.forEach(intent => {
    if (intentCategories[intent]?.includes(tool.category)) {
      score += 35;
    }

    if (
      tool.keywords.some(keyword =>
        intentGroups[intent].some(word =>
          normalizeText(keyword).includes(normalizeText(word))
        )
      )
    ) {
      score += 15;
    }
  });

  return score;
}

function searchTools(query) {
  const cleanQuery = normalizeText(query);

  if (!cleanQuery) {
    return [...tools];
  }

  const intents = detectIntents(cleanQuery);

  return tools
    .map(tool => ({
      tool,
      score: scoreTool(tool, cleanQuery, intents)
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.tool);
}

/* =========================================================
   TOOL CARD
   ========================================================= */

function createToolCard(tool) {
  const favorites = getFavorites();
  const isFavorite = favorites.includes(tool.name);
  const isCompared = selectedCompare.includes(tool.name);

  const card = document.createElement("article");

  card.className = "tool-card reveal";
  card.dataset.toolName = tool.name;

  card.innerHTML = `
    <div class="tool-card-top">
      <div class="tool-icon">${tool.icon}</div>

      <button
        class="favorite-button"
        type="button"
        data-favorite="${tool.name}"
        aria-label="${isFavorite ? "Remove from favorites" : "Add to favorites"}"
        aria-pressed="${isFavorite}"
      >
        ${isFavorite ? "★" : "☆"}
      </button>
    </div>

    <div class="tool-card-content">
      <span class="tool-category">${tool.category}</span>

      <h3>${tool.name}</h3>

      <p>${tool.description}</p>

      <div class="tool-meta">
        <span>⭐ ${tool.rating}</span>
        <span>${tool.pricing}</span>
      </div>
    </div>

    <div class="tool-card-actions">
      <a
        href="${tool.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="visit-tool"
        data-visit="${tool.name}"
      >
        Visit Tool ↗
      </a>

      <button
        type="button"
        class="compare-button ${isCompared ? "active" : ""}"
        data-compare="${tool.name}"
      >
        ${isCompared ? "✓ Comparing" : "Compare"}
      </button>
    </div>
  `;

  return card;
}

/* =========================================================
   RENDER TOOLS
   ========================================================= */

function renderTools(list = currentSearchResults) {
  const grid = $("#toolsGrid");

  if (!grid) return;

  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No tools found 😭</h3>
        <p>Try something like "make a logo", "edit video", or "study maths".</p>
      </div>
    `;
    return;
  }

  list.slice(0, 10).forEach(tool => {
    grid.appendChild(createToolCard(tool));
  });

  requestAnimationFrame(() => {
    $$(".reveal").forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("visible");
      }, index * 35);
    });
  });
}

/* =========================================================
   CATEGORY FILTER
   ========================================================= */

function populateCategoryFilter() {
  const select = $("#categoryFilter");

  if (!select) return;

  const categories = [...new Set(tools.map(tool => tool.category))].sort();

  select.innerHTML = `
    <option value="all">All Categories</option>
    ${categories
      .map(category => `<option value="${category}">${category}</option>`)
      .join("")}
  `;
}

/* =========================================================
   ADVANCED FILTERS
   ========================================================= */

function createAdvancedFilters() {
  const category = $("#categoryFilter");

  if (!category || document.querySelector(".filter-panel")) {
    return;
  }

  const wrapper = category.closest(".filter-panel") || category.parentElement;

  if (!wrapper) return;

  if (!wrapper.classList.contains("filter-panel")) {
    wrapper.classList.add("filter-panel");
  }

  const advanced = document.createElement("div");

  advanced.className = "advanced-filters";

  advanced.innerHTML = `
    <select id="pricingFilter" aria-label="Filter by pricing">
      <option value="all">All Pricing</option>
      <option value="Free">Free</option>
      <option value="Freemium">Freemium</option>
      <option value="Paid">Paid</option>
    </select>

    <select id="ratingFilter" aria-label="Filter by rating">
      <option value="0">Any Rating</option>
      <option value="4.5">4.5+</option>
      <option value="4.7">4.7+</option>
      <option value="4.8">4.8+</option>
    </select>

    <select id="sortFilter" aria-label="Sort tools">
      <option value="relevance">Sort: Relevance</option>
      <option value="rating">Highest Rated</option>
      <option value="name">Name A-Z</option>
      <option value="pricing">Pricing</option>
    </select>
  `;

  wrapper.appendChild(advanced);

  ["pricingFilter", "ratingFilter", "sortFilter"].forEach(id => {
    const element = document.getElementById(id);

    if (element) {
      element.addEventListener("change", applyFilters);
    }
  });

  category.addEventListener("change", applyFilters);
}

function applyFilters() {
  const category = $("#categoryFilter")?.value || "all";
  const pricing = $("#pricingFilter")?.value || "all";
  const rating = Number($("#ratingFilter")?.value || 0);
  const sort = $("#sortFilter")?.value || "relevance";

  let list = [...currentSearchResults];

  if (category !== "all") {
    list = list.filter(tool => tool.category === category);
  }

  if (pricing !== "all") {
    list = list.filter(tool => tool.pricing === pricing);
  }

  if (rating > 0) {
    list = list.filter(tool => tool.rating >= rating);
  }

  if (sort === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  }

  if (sort === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sort === "pricing") {
    list.sort((a, b) => a.pricing.localeCompare(b.pricing));
  }

  renderTools(list);
}

/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(toolName) {
  let favorites = getFavorites();

  if (favorites.includes(toolName)) {
    favorites = favorites.filter(name => name !== toolName);
    showToast(`${toolName} removed from favorites`);
  } else {
    favorites.push(toolName);
    showToast(`${toolName} added to favorites ⭐`);
  }

  saveFavorites(favorites);

  renderTools(currentSearchResults);
  renderDashboard();
}

/* =========================================================
   RECENTLY USED
   ========================================================= */

function addRecentlyVisited(toolName) {
  let recent = getRecent();

  recent = recent.filter(name => name !== toolName);
  recent.unshift(toolName);

  recent = recent.slice(0, 10);

  saveRecent(recent);

  renderDashboard();
}

/* =========================================================
   DASHBOARD
   ========================================================= */

function createDashboard() {
  const dashboard = $("#dashboard");

  if (!dashboard) return;

  dashboard.innerHTML = `
    <div class="dashboard-container">

      <div class="dashboard-header">
        <div>
          <span class="section-label">YOUR SPACE</span>
          <h2 id="dashboardGreeting">TzTools Dashboard</h2>
          <p>Your favorites, recently used tools and quick actions.</p>
        </div>
      </div>

      <div class="dashboard-stats">
        <div class="dashboard-stat">
          <strong id="statTools">0</strong>
          <span>Total Tools</span>
        </div>

        <div class="dashboard-stat">
          <strong id="statFavorites">0</strong>
          <span>Favorites</span>
        </div>

        <div class="dashboard-stat">
          <strong id="statRecent">0</strong>
          <span>Recently Used</span>
        </div>

        <div class="dashboard-stat">
          <strong id="statCategories">0</strong>
          <span>Categories</span>
        </div>
      </div>

      <div class="dashboard-actions">
        <button class="dashboard-action" data-dashboard-search="make a logo">
          🎨 Make a Logo
        </button>

        <button class="dashboard-action" data-dashboard-search="edit video">
          🎬 Edit Video
        </button>

        <button class="dashboard-action" data-dashboard-search="study">
          🎓 Study
        </button>

        <button class="dashboard-action" data-dashboard-search="build a website">
          🌐 Build Website
        </button>
      </div>

      <section class="dashboard-section">
        <div class="dashboard-section-header">
          <h3>⭐ Favorite Tools</h3>
        </div>

        <div id="favoritesDashboardGrid" class="favorites-dashboard-grid"></div>
      </section>

      <section class="dashboard-section">
        <div class="dashboard-section-header">
          <h3>🕘 Recently Used</h3>
        </div>

        <div id="recentDashboardGrid" class="favorites-dashboard-grid"></div>
      </section>

    </div>
  `;

  renderDashboard();
}

function createMiniToolCard(tool) {
  return `
    <article class="mini-tool-card">
      <div class="tool-icon">${tool.icon}</div>

      <div>
        <strong>${tool.name}</strong>
        <small>${tool.category}</small>
      </div>

      <a
        href="${tool.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="visit-tool"
        data-visit="${tool.name}"
      >
        Open ↗
      </a>
    </article>
  `;
}

function renderDashboard() {
  const favoritesGrid = $("#favoritesDashboardGrid");
  const recentGrid = $("#recentDashboardGrid");

  const favorites = getFavorites();
  const recent = getRecent();

  const favoriteTools = favorites
    .map(name => tools.find(tool => tool.name === name))
    .filter(Boolean);

  const recentTools = recent
    .map(name => tools.find(tool => tool.name === name))
    .filter(Boolean);

  if (favoritesGrid) {
    favoritesGrid.innerHTML = favoriteTools.length
      ? favoriteTools.map(createMiniToolCard).join("")
      : `
        <div class="empty-state">
          <p>No favorites yet. Tap ☆ on a tool to save it.</p>
        </div>
      `;
  }

  if (recentGrid) {
    recentGrid.innerHTML = recentTools.length
      ? recentTools.map(createMiniToolCard).join("")
      : `
        <div class="empty-state">
          <p>Your recently used tools will appear here.</p>
        </div>
      `;
  }

  const statTools = $("#statTools");
  const statFavorites = $("#statFavorites");
  const statRecent = $("#statRecent");
  const statCategories = $("#statCategories");

  if (statTools) statTools.textContent = tools.length;
  if (statFavorites) statFavorites.textContent = favorites.length;
  if (statRecent) statRecent.textContent = recent.length;

  if (statCategories) {
    statCategories.textContent =
      new Set(tools.map(tool => tool.category)).size;
  }

  const greeting = $("#dashboardGreeting");

  if (greeting && currentUser) {
    const name =
      currentUser.user_metadata?.display_name ||
      currentUser.email?.split("@")[0] ||
      "there";

    greeting.textContent = `Welcome back, ${name} 👋`;
  }
}

/* =========================================================
   COMPARE
   ========================================================= */

function toggleCompare(toolName) {
  if (selectedCompare.includes(toolName)) {
    selectedCompare = selectedCompare.filter(name => name !== toolName);
    showToast(`${toolName} removed from comparison`);
  } else {
    if (selectedCompare.length >= 3) {
      showToast("You can compare up to 3 tools.");
      return;
    }

    selectedCompare.push(toolName);
    showToast(`${toolName} added to comparison`);
  }

  renderTools(currentSearchResults);
  renderCompareBar();
}

function renderCompareBar() {
  let bar = $("#compareBar");

  if (!bar) {
    bar = document.createElement("div");
    bar.id = "compareBar";
    bar.className = "compare-bar";
    document.body.appendChild(bar);
  }

  if (!selectedCompare.length) {
    bar.classList.remove("show");
    return;
  }

  bar.innerHTML = `
    <div>
      <strong>${selectedCompare.length}/3 selected</strong>
      <span>${selectedCompare.join(", ")}</span>
    </div>

    <div class="compare-bar-actions">
      <button type="button" id="openCompare">
        Compare
      </button>

      <button type="button" id="clearCompare">
        Clear
      </button>
    </div>
  `;

  bar.classList.add("show");
}

function openCompareModal() {
  if (!selectedCompare.length) return;

  let modal = $("#compareModal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "compareModal";
    modal.className = "compare-modal";
    document.body.appendChild(modal);
  }

  const selectedTools = selectedCompare
    .map(name => tools.find(tool => tool.name === name))
    .filter(Boolean);

  modal.innerHTML = `
    <div class="compare-modal-backdrop" data-close-compare></div>

    <div class="compare-modal-content" role="dialog" aria-modal="true">
      <button
        class="modal-close"
        type="button"
        data-close-compare
        aria-label="Close comparison"
      >
        ×
      </button>

      <span class="section-label">TOOL COMPARISON</span>
      <h2>Compare Tools</h2>

      <div class="comparison-grid">
        ${selectedTools.map(tool => `
          <div class="comparison-card">
            <div class="tool-icon">${tool.icon}</div>

            <h3>${tool.name}</h3>

            <span>${tool.category}</span>

            <p>${tool.description}</p>

            <div class="comparison-info">
              <strong>⭐ ${tool.rating}</strong>
              <span>${tool.pricing}</span>
            </div>

            <a
              href="${tool.url}"
              target="_blank"
              rel="noopener noreferrer"
              class="visit-tool"
              data-visit="${tool.name}"
            >
              Visit Tool ↗
            </a>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  modal.classList.add("show");
}

function closeCompareModal() {
  const modal = $("#compareModal");

  if (modal) {
    modal.classList.remove("show");
  }
}

/* =========================================================
   SEARCH UI
   ========================================================= */

function performSearch(query) {
  const cleanQuery = normalizeText(query);

  currentSearchResults = searchTools(cleanQuery);

  applyFilters();

  const toolsSection = $("#tools");

  if (toolsSection) {
    toolsSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  updateSuggestions("");
}

function updateSuggestions(query) {
  const suggestions = $("#suggestions");

  if (!suggestions) return;

  const cleanQuery = normalizeText(query);

  if (!cleanQuery) {
    suggestions.innerHTML = "";
    suggestions.classList.remove("show");
    return;
  }

  const results = searchTools(cleanQuery).slice(0, 5);

  if (!results.length) {
    suggestions.innerHTML = "";
    suggestions.classList.remove("show");
    return;
  }

  suggestions.innerHTML = results
    .map(tool => `
      <button
        type="button"
        class="suggestion-item"
        data-suggestion="${tool.name}"
      >
        <span>${tool.icon}</span>
        <span>
          <strong>${tool.name}</strong>
          <small>${tool.category}</small>
        </span>
      </button>
    `)
    .join("");

  suggestions.classList.add("show");
}

/* =========================================================
   CATEGORIES
   ========================================================= */

function openCategories() {
  const overlay = $("#categoriesOverlay");

  if (!overlay) return;

  overlay.classList.add("show");
  document.body.classList.add("modal-open");

  $("#categoriesClose")?.focus();
}

function closeCategories() {
  const overlay = $("#categoriesOverlay");

  if (!overlay) return;

  overlay.classList.remove("show");
  document.body.classList.remove("modal-open");
}

/* =========================================================
   AUTH STYLES
   ========================================================= */

function injectAuthStyles() {
  if ($("#tzAuthStyles")) return;

  const style = document.createElement("style");
  style.id = "tzAuthStyles";

  style.textContent = `
    .tz-account-button {
      border: 1px solid var(--border-color, rgba(128,128,128,.25));
      background: var(--card-bg, rgba(255,255,255,.08));
      color: inherit;
      padding: 9px 14px;
      border-radius: 12px;
      cursor: pointer;
      font: inherit;
      font-weight: 700;
      transition: .2s ease;
      white-space: nowrap;
    }

    .tz-account-button:hover {
      transform: translateY(-1px);
    }

    .tz-auth-overlay {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: rgba(0,0,0,.65);
      backdrop-filter: blur(8px);
    }

    .tz-auth-overlay.show {
      display: flex;
    }

    .tz-auth-modal {
      position: relative;
      width: min(440px, 100%);
      max-height: 90vh;
      overflow-y: auto;
      padding: 28px;
      border-radius: 24px;
      background: var(--card-bg, #fff);
      color: var(--text-color, #111);
      box-shadow: 0 25px 80px rgba(0,0,0,.3);
      animation: tzAuthIn .22s ease;
    }

    @keyframes tzAuthIn {
      from {
        opacity: 0;
        transform: translateY(15px) scale(.97);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .tz-auth-close {
      position: absolute;
      right: 16px;
      top: 14px;
      border: 0;
      background: transparent;
      color: inherit;
      font-size: 28px;
      cursor: pointer;
    }

    .tz-auth-modal h2 {
      margin: 5px 0 8px;
    }

    .tz-auth-subtitle {
      opacity: .7;
      margin-bottom: 22px;
    }

    .tz-auth-form {
      display: grid;
      gap: 14px;
    }

    .tz-auth-field {
      display: grid;
      gap: 7px;
    }

    .tz-auth-field label {
      font-weight: 700;
      font-size: .9rem;
    }

    .tz-auth-field input {
      width: 100%;
      box-sizing: border-box;
      padding: 13px 14px;
      border-radius: 12px;
      border: 1px solid rgba(128,128,128,.3);
      background: transparent;
      color: inherit;
      font: inherit;
      outline: none;
    }

    .tz-auth-field input:focus {
      border-color: #6366f1;
      box-shadow: 0 0 0 3px rgba(99,102,241,.15);
    }

    .tz-auth-submit {
      border: 0;
      border-radius: 12px;
      padding: 13px 16px;
      background: #6366f1;
      color: white;
      font-weight: 800;
      font-size: 1rem;
      cursor: pointer;
      margin-top: 5px;
    }

    .tz-auth-submit:disabled {
      opacity: .6;
      cursor: wait;
    }

    .tz-auth-switch {
      margin-top: 18px;
      text-align: center;
      font-size: .92rem;
    }

    .tz-auth-switch button {
      border: 0;
      background: transparent;
      color: #6366f1;
      font: inherit;
      font-weight: 800;
      cursor: pointer;
    }

    .tz-auth-message {
      display: none;
      padding: 11px 13px;
      border-radius: 12px;
      margin-bottom: 14px;
      font-size: .9rem;
    }

    .tz-auth-message.show {
      display: block;
    }

    .tz-auth-message.error {
      background: rgba(239,68,68,.12);
      color: #dc2626;
    }

    .tz-auth-message.success {
      background: rgba(34,197,94,.12);
      color: #16a34a;
    }

    .tz-account-panel {
      text-align: center;
    }

    .tz-account-avatar {
      width: 65px;
      height: 65px;
      display: grid;
      place-items: center;
      margin: 0 auto 15px;
      border-radius: 50%;
      background: rgba(99,102,241,.15);
      font-size: 30px;
    }

    .tz-account-email {
      opacity: .65;
      word-break: break-word;
      margin-bottom: 20px;
    }

    .tz-logout-button {
      width: 100%;
      border: 1px solid rgba(239,68,68,.35);
      background: rgba(239,68,68,.08);
      color: #dc2626;
      padding: 12px;
      border-radius: 12px;
      font-weight: 800;
      cursor: pointer;
    }

    @media (max-width: 700px) {
      .tz-account-button {
        padding: 8px 11px;
      }

      .tz-auth-modal {
        padding: 23px;
        border-radius: 20px;
      }
    }
  `;

  document.head.appendChild(style);
}

/* =========================================================
   AUTH MODAL
   ========================================================= */

let authMode = "login";

function createAuthUI() {
  injectAuthStyles();

  if (!document.querySelector(".tz-account-button")) {
    const navLinks = $("#navLinks");

    if (navLinks) {
      const accountButton = document.createElement("button");

      accountButton.className = "tz-account-button";
      accountButton.id = "accountButton";
      accountButton.type = "button";
      accountButton.textContent = "Account";

      navLinks.appendChild(accountButton);

      accountButton.addEventListener("click", openAuthModal);
    }
  }

  if (!$("#tzAuthOverlay")) {
    const overlay = document.createElement("div");

    overlay.id = "tzAuthOverlay";
    overlay.className = "tz-auth-overlay";

    overlay.innerHTML = `
      <div
        class="tz-auth-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tzAuthTitle"
      >
        <button
          class="tz-auth-close"
          type="button"
          id="tzAuthClose"
          aria-label="Close account dialog"
        >
          ×
        </button>

        <div id="tzAuthContent"></div>
      </div>
    `;

    document.body.appendChild(overlay);

    $("#tzAuthClose").addEventListener("click", closeAuthModal);

    overlay.addEventListener("click", event => {
      if (event.target === overlay) {
        closeAuthModal();
      }
    });
  }

  updateAccountButton();
}

function updateAccountButton() {
  const button = $("#accountButton");

  if (!button) return;

  if (currentUser) {
    const name =
      currentUser.user_metadata?.display_name ||
      currentUser.email?.split("@")[0] ||
      "Account";

    button.textContent = `👤 ${name}`;
  } else {
    button.textContent = "Account";
  }
}

function openAuthModal() {
  const overlay = $("#tzAuthOverlay");

  if (!overlay) return;

  if (currentUser) {
    renderAccountPanel();
  } else {
    authMode = "login";
    renderAuthForm();
  }

  overlay.classList.add("show");
  document.body.classList.add("modal-open");
}

function closeAuthModal() {
  const overlay = $("#tzAuthOverlay");

  if (!overlay) return;

  overlay.classList.remove("show");
  document.body.classList.remove("modal-open");
}

function renderAuthForm() {
  const content = $("#tzAuthContent");

  if (!content) return;

  const signup = authMode === "signup";

  content.innerHTML = `
    <span class="section-label">
      ${signup ? "CREATE ACCOUNT" : "WELCOME BACK"}
    </span>

    <h2 id="tzAuthTitle">
      ${signup ? "Create your TzTools account" : "Log in to TzTools"}
    </h2>

    <p class="tz-auth-subtitle">
      ${
        signup
          ? "Save your tools and build your personal workspace."
          : "Continue where you left off."
      }
    </p>

    <div id="tzAuthMessage" class="tz-auth-message"></div>

    <form class="tz-auth-form" id="tzAuthForm">

      ${
        signup
          ? `
            <div class="tz-auth-field">
              <label for="tzDisplayName">Display name</label>
              <input
                id="tzDisplayName"
                name="displayName"
                type="text"
                autocomplete="name"
                placeholder="Your name"
                maxlength="50"
                required
              >
            </div>
          `
          : ""
      }

      <div class="tz-auth-field">
        <label for="tzEmail">Email</label>
        <input
          id="tzEmail"
          name="email"
          type="email"
          autocomplete="email"
          placeholder="you@example.com"
          required
        >
      </div>

      <div class="tz-auth-field">
        <label for="tzPassword">Password</label>
        <input
          id="tzPassword"
          name="password"
          type="password"
          autocomplete="${signup ? "new-password" : "current-password"}"
          placeholder="Your password"
          minlength="6"
          required
        >
      </div>

      <button
        type="submit"
        class="tz-auth-submit"
        id="tzAuthSubmit"
      >
        ${signup ? "Create Account" : "Log In"}
      </button>
    </form>

    <div class="tz-auth-switch">
      ${
        signup
          ? `Already have an account?
             <button type="button" id="tzSwitchAuth">Log in</button>`
          : `Don't have an account?
             <button type="button" id="tzSwitchAuth">Create one</button>`
      }
    </div>
  `;

  $("#tzAuthForm").addEventListener("submit", handleAuthSubmit);

  $("#tzSwitchAuth").addEventListener("click", () => {
    authMode = signup ? "login" : "signup";
    renderAuthForm();
  });

  setTimeout(() => {
    (signup ? $("#tzDisplayName") : $("#tzEmail"))?.focus();
  }, 50);
}

function showAuthMessage(message, type = "error") {
  const element = $("#tzAuthMessage");

  if (!element) return;

  element.textContent = message;
  element.className = `tz-auth-message show ${type}`;
}

async function handleAuthSubmit(event) {
  event.preventDefault();

  if (!supabaseClient) {
    showAuthMessage(
      "Supabase is still loading. Please try again in a moment."
    );
    return;
  }

  const form = event.currentTarget;
  const submit = $("#tzAuthSubmit");

  const formData = new FormData(form);

  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const displayName = String(formData.get("displayName") || "").trim();

  submit.disabled = true;
  submit.textContent = authMode === "signup"
    ? "Creating account..."
    : "Logging in...";

  try {
    if (authMode === "signup") {
      if (!displayName) {
        throw new Error("Please enter a display name.");
      }

      const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: displayName
          },
          emailRedirectTo: window.location.origin + window.location.pathname
        }
      });

      if (error) throw error;

      if (data.session) {
        showAuthMessage(
          "Account created successfully! 🎉",
          "success"
        );

        setTimeout(() => {
          closeAuthModal();
        }, 900);
      } else {
        showAuthMessage(
          "Account created! Check your email to confirm your account. 📧",
          "success"
        );
      }
    } else {
      const { data, error } =
        await supabaseClient.auth.signInWithPassword({
          email,
          password
        });

      if (error) throw error;

      currentUser = data.user;

      showAuthMessage(
        "You're logged in! Welcome back 👋",
        "success"
      );

      updateAccountButton();
      renderDashboard();

      setTimeout(() => {
        closeAuthModal();
      }, 700);
    }
  } catch (error) {
    console.error("Auth error:", error);

    showAuthMessage(
      error?.message || "Something went wrong. Please try again."
    );
  } finally {
    submit.disabled = false;
    submit.textContent =
      authMode === "signup" ? "Create Account" : "Log In";
  }
}

function renderAccountPanel() {
  const content = $("#tzAuthContent");

  if (!content || !currentUser) return;

  const name =
    currentUser.user_metadata?.display_name ||
    currentUser.email?.split("@")[0] ||
    "TzTools User";

  content.innerHTML = `
    <div class="tz-account-panel">

      <div class="tz-account-avatar">
        👤
      </div>

      <span class="section-label">MY ACCOUNT</span>

      <h2>Welcome, ${name}!</h2>

      <p class="tz-auth-subtitle">
        Your TzTools account is active.
      </p>

      <p class="tz-account-email">
        ${currentUser.email || ""}
      </p>

      <button
        type="button"
        class="tz-logout-button"
        id="tzLogoutButton"
      >
        Log Out
      </button>

    </div>
  `;

  $("#tzLogoutButton").addEventListener("click", logoutUser);
}

async function logoutUser() {
  if (!supabaseClient) return;

  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    console.error(error);
    showToast("Couldn't log out. Try again.");
    return;
  }

  currentUser = null;

  updateAccountButton();
  renderDashboard();
  closeAuthModal();

  showToast("Logged out successfully.");
}

/* =========================================================
   SUPABASE INITIALIZATION
   ========================================================= */

function loadSupabaseLibrary() {
  return new Promise((resolve, reject) => {
    if (window.supabase) {
      resolve(window.supabase);
      return;
    }

    const existing = document.querySelector(
      'script[data-supabase-library="true"]'
    );

    if (existing) {
      existing.addEventListener("load", () => resolve(window.supabase));
      existing.addEventListener("error", reject);
      return;
    }

    const script = document.createElement("script");

    script.src =
      "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

    script.async = true;
    script.dataset.supabaseLibrary = "true";

    script.onload = () => {
      if (window.supabase) {
        resolve(window.supabase);
      } else {
        reject(new Error("Supabase library failed to load."));
      }
    };

    script.onerror = () => {
      reject(new Error("Could not load Supabase."));
    };

    document.head.appendChild(script);
  });
}

async function initializeSupabase() {
  try {
    const library = await loadSupabaseLibrary();

    supabaseClient = library.createClient(
      SUPABASE_URL,
      SUPABASE_PUBLISHABLE_KEY
    );

    const {
      data: { session }
    } = await supabaseClient.auth.getSession();

    currentUser = session?.user || null;

    updateAccountButton();
    renderDashboard();

    supabaseClient.auth.onAuthStateChange(
      (_event, sessionData) => {
        currentUser = sessionData?.user || null;

        setTimeout(() => {
          updateAccountButton();
          renderDashboard();
        }, 0);
      }
    );

    console.log("TzTools Supabase authentication ready.");
  } catch (error) {
    console.error("Supabase initialization failed:", error);
    showToast("Account system couldn't connect.");
  }
}

/* =========================================================
   THEME
   ========================================================= */

function initializeTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  const themeButton = $("#themeToggle");

  if (!themeButton) return;

  updateThemeButton();

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
      THEME_KEY,
      document.body.classList.contains("dark-mode")
        ? "dark"
        : "light"
    );

    updateThemeButton();
  });
}

function updateThemeButton() {
  const button = $("#themeToggle");

  if (!button) return;

  const dark = document.body.classList.contains("dark-mode");

  button.textContent = dark ? "☀️" : "🌙";
  button.setAttribute(
    "aria-label",
    dark ? "Switch to light mode" : "Switch to dark mode"
  );
}

/* =========================================================
   MOBILE NAV
   ========================================================= */

function initializeMobileNav() {
  const menuButton = $("#menuButton");
  const navLinks = $("#navLinks");

  if (!menuButton || !navLinks) return;

  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      navLinks.classList.contains("open")
    );
  });
}

/* =========================================================
   QUICK SEARCH
   ========================================================= */

function initializeSearch() {
  const input = $("#searchInput");
  const button = $("#searchButton");

  if (!input) return;

  input.addEventListener("input", () => {
    updateSuggestions(input.value);
  });

  input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      performSearch(input.value);
    }
  });

  button?.addEventListener("click", () => {
    performSearch(input.value);
  });
}

/* =========================================================
   QUICK SEARCH BUTTONS
   ========================================================= */

function initializeQuickSearches() {
  $$(".quick-search").forEach(button => {
    button.addEventListener("click", () => {
      const query = button.dataset.query || "";

      const input = $("#searchInput");

      if (input) {
        input.value = query;
      }

      performSearch(query);
    });
  });
}

/* =========================================================
   DELEGATED EVENTS
   ========================================================= */

function initializeDelegatedEvents() {
  document.addEventListener("click", event => {

    const favorite = event.target.closest("[data-favorite]");

    if (favorite) {
      event.preventDefault();
      toggleFavorite(favorite.dataset.favorite);
      return;
    }

    const compare = event.target.closest("[data-compare]");

    if (compare) {
      event.preventDefault();
      toggleCompare(compare.dataset.compare);
      return;
    }

    const visit = event.target.closest("[data-visit]");

    if (visit) {
      addRecentlyVisited(visit.dataset.visit);
      return;
    }

    const suggestion = event.target.closest("[data-suggestion]");

    if (suggestion) {
      event.preventDefault();

      const toolName = suggestion.dataset.suggestion;
      const input = $("#searchInput");

      if (input) {
        input.value = toolName;
      }

      performSearch(toolName);
      return;
    }

    const dashboardSearch =
      event.target.closest("[data-dashboard-search]");

    if (dashboardSearch) {
      const query = dashboardSearch.dataset.dashboardSearch;

      const input = $("#searchInput");

      if (input) {
        input.value = query;
      }

      performSearch(query);
      return;
    }

    if (event.target.closest("#openCompare")) {
      openCompareModal();
      return;
    }

    if (event.target.closest("#clearCompare")) {
      selectedCompare = [];
      renderCompareBar();
      renderTools(currentSearchResults);
      return;
    }

    if (event.target.closest("[data-close-compare]")) {
      closeCompareModal();
      return;
    }
  });
}

/* =========================================================
   CATEGORY MENU
   ========================================================= */

function initializeCategories() {
  $("#categoriesButton")?.addEventListener(
    "click",
    openCategories
  );

  $("#categoriesButtonHero")?.addEventListener(
    "click",
    openCategories
  );

  $("#footerCategoriesButton")?.addEventListener(
    "click",
    openCategories
  );

  $("#categoriesClose")?.addEventListener(
    "click",
    closeCategories
  );

  $$(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      const category = card.dataset.category;

      closeCategories();

      if (category === "all") {
        currentSearchResults = [...tools];
      } else {
        currentSearchResults = tools.filter(
          tool => tool.category === category
        );
      }

      const filter = $("#categoryFilter");

      if (filter) {
        filter.value =
          category === "all" ? "all" : category;
      }

      renderTools(currentSearchResults);

      $("#tools")?.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
}

/* =========================================================
   KEYBOARD ACCESSIBILITY
   ========================================================= */

function initializeKeyboardControls() {
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    closeCategories();
    closeCompareModal();
    closeAuthModal();

    updateSuggestions("");
  });
}

/* =========================================================
   REDUCED MOTION
   ========================================================= */

function initializeAccessibility() {
  const mediaQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  if (mediaQuery.matches) {
    document.documentElement.classList.add("reduce-motion");
  }
}

/* =========================================================
   INITIALIZATION
   ========================================================= */

function initializeTzTools() {
  populateCategoryFilter();
  createAdvancedFilters();

  createDashboard();
  createAuthUI();

  initializeTheme();
  initializeMobileNav();
  initializeSearch();
  initializeQuickSearches();
  initializeDelegatedEvents();
  initializeCategories();
  initializeKeyboardControls();
  initializeAccessibility();

  currentSearchResults = [...tools];

  renderTools(currentSearchResults);
  renderCompareBar();

  initializeSupabase();

  console.log(
    `TzTools V7.0.2 loaded — ${tools.length} tools available.`
  );
}

/* =========================================================
   START
   ========================================================= */

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeTzTools
  );
} else {
  initializeTzTools();
}
