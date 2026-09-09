/* =========================================================
   TZTOOLS V6.6 → V6.9
   Smart Search + Filters + Categories + Compare
   Favorites + Recently Used + Dashboard
   UI Polish + Accessibility + Performance
========================================================= */

"use strict";

/* =========================================================
   TOOL DATABASE
========================================================= */

const tools = [
  // AI
  {
    name: "ChatGPT",
    category: "AI",
    icon: "🤖",
    description: "AI assistant for writing, learning, brainstorming, coding and more.",
    rating: 4.9,
    pricing: "Freemium",
    url: "https://chatgpt.com/",
    keywords: ["ai", "chat", "assistant", "writing", "study", "coding", "research"]
  },
  {
    name: "Google Gemini",
    category: "AI",
    icon: "✨",
    description: "Google's AI assistant for research, writing, ideas and productivity.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://gemini.google.com/",
    keywords: ["ai", "google", "assistant", "research", "study", "writing"]
  },
  {
    name: "Claude",
    category: "AI",
    icon: "🧠",
    description: "AI assistant designed for writing, analysis, coding and reasoning.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://claude.ai/",
    keywords: ["ai", "assistant", "writing", "coding", "analysis"]
  },
  {
    name: "Microsoft Copilot",
    category: "AI",
    icon: "🚀",
    description: "AI assistant for answers, ideas, writing and productivity.",
    rating: 4.6,
    pricing: "Free",
    url: "https://copilot.microsoft.com/",
    keywords: ["ai", "assistant", "writing", "productivity"]
  },
  {
    name: "Perplexity",
    category: "AI",
    icon: "🔎",
    description: "AI-powered search and research assistant.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.perplexity.ai/",
    keywords: ["ai", "search", "research", "answers", "study"]
  },

  // Design
  {
    name: "Canva",
    category: "Design",
    icon: "🎨",
    description: "Easy design platform for logos, posters, presentations and social media.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://www.canva.com/",
    keywords: ["logo", "design", "poster", "graphic", "social media", "presentation"]
  },
  {
    name: "Adobe Express",
    category: "Design",
    icon: "🖌️",
    description: "Create graphics, flyers, social posts and other visual content.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.adobe.com/express",
    keywords: ["logo", "design", "graphic", "poster", "flyer"]
  },
  {
    name: "Figma",
    category: "Design",
    icon: "🧩",
    description: "Collaborative design tool for interfaces, prototypes and graphics.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://www.figma.com/",
    keywords: ["design", "ui", "ux", "prototype", "website", "app"]
  },
  {
    name: "Photopea",
    category: "Design",
    icon: "🖼️",
    description: "Browser-based image editor with powerful Photoshop-style features.",
    rating: 4.7,
    pricing: "Free",
    url: "https://www.photopea.com/",
    keywords: ["photo", "image", "photoshop", "design", "edit"]
  },
  {
    name: "Pixlr",
    category: "Design",
    icon: "🌈",
    description: "Online photo and graphic editing tools.",
    rating: 4.5,
    pricing: "Freemium",
    url: "https://pixlr.com/",
    keywords: ["photo", "image", "edit", "design", "graphic"]
  },

  // Video
  {
    name: "CapCut",
    category: "Video",
    icon: "🎬",
    description: "Popular video editor for short-form videos, effects and social content.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://www.capcut.com/",
    keywords: ["video", "edit", "tiktok", "reels", "shorts", "effects"]
  },
  {
    name: "DaVinci Resolve",
    category: "Video",
    icon: "🎞️",
    description: "Professional video editing, color grading and visual effects software.",
    rating: 4.9,
    pricing: "Free",
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    keywords: ["video", "editing", "professional", "color", "film"]
  },
  {
    name: "VEED",
    category: "Video",
    icon: "📹",
    description: "Simple online video editor with captions, effects and social tools.",
    rating: 4.5,
    pricing: "Freemium",
    url: "https://www.veed.io/",
    keywords: ["video", "edit", "captions", "social", "online"]
  },
  {
    name: "Clipchamp",
    category: "Video",
    icon: "✂️",
    description: "Easy browser-based video editor from Microsoft.",
    rating: 4.5,
    pricing: "Freemium",
    url: "https://clipchamp.com/",
    keywords: ["video", "edit", "microsoft", "social"]
  },
  {
    name: "InVideo",
    category: "Video",
    icon: "🎥",
    description: "Online video creation platform with templates and AI features.",
    rating: 4.5,
    pricing: "Freemium",
    url: "https://invideo.io/",
    keywords: ["video", "ai", "template", "editing", "social"]
  },

  // Writing
  {
    name: "Grammarly",
    category: "Writing",
    icon: "✍️",
    description: "Writing assistant for grammar, spelling, clarity and tone.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.grammarly.com/",
    keywords: ["writing", "grammar", "english", "school", "essay"]
  },
  {
    name: "QuillBot",
    category: "Writing",
    icon: "📝",
    description: "Writing and paraphrasing assistant with several useful tools.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://quillbot.com/",
    keywords: ["writing", "paraphrase", "essay", "grammar", "school"]
  },
  {
    name: "Google Docs",
    category: "Writing",
    icon: "📄",
    description: "Online document editor for writing and collaboration.",
    rating: 4.7,
    pricing: "Free",
    url: "https://docs.google.com/",
    keywords: ["writing", "document", "essay", "school", "collaboration"]
  },
  {
    name: "LanguageTool",
    category: "Writing",
    icon: "🔤",
    description: "Grammar, spelling and style checker.",
    rating: 4.5,
    pricing: "Freemium",
    url: "https://languagetool.org/",
    keywords: ["grammar", "writing", "spelling", "english"]
  },
  {
    name: "Hemingway Editor",
    category: "Writing",
    icon: "📚",
    description: "Helps make writing clearer, simpler and easier to read.",
    rating: 4.4,
    pricing: "Free",
    url: "https://hemingwayapp.com/",
    keywords: ["writing", "essay", "clarity", "school"]
  },

  // Websites
  {
    name: "WordPress",
    category: "Websites",
    icon: "🌐",
    description: "Website and blog creation platform.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://wordpress.com/",
    keywords: ["website", "blog", "web", "site"]
  },
  {
    name: "Wix",
    category: "Websites",
    icon: "🏗️",
    description: "Website builder with templates and drag-and-drop tools.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://www.wix.com/",
    keywords: ["website", "builder", "business", "site"]
  },
  {
    name: "Framer",
    category: "Websites",
    icon: "⚡",
    description: "Modern website builder for visually impressive websites.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.framer.com/",
    keywords: ["website", "web", "design", "site", "portfolio"]
  },
  {
    name: "Webflow",
    category: "Websites",
    icon: "💻",
    description: "Professional visual website builder.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://webflow.com/",
    keywords: ["website", "web", "design", "professional"]
  },
  {
    name: "Carrd",
    category: "Websites",
    icon: "🪪",
    description: "Simple platform for creating one-page websites.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://carrd.co/",
    keywords: ["website", "landing page", "portfolio", "site"]
  },
  {
    name: "GitHub Pages",
    category: "Websites",
    icon: "🐙",
    description: "Free static website hosting directly from GitHub repositories.",
    rating: 4.7,
    pricing: "Free",
    url: "https://pages.github.com/",
    keywords: ["website", "hosting", "github", "coding", "developer"]
  },

  // Students
  {
    name: "Khan Academy",
    category: "Students",
    icon: "🎓",
    description: "Free lessons and practice for many school subjects.",
    rating: 4.9,
    pricing: "Free",
    url: "https://www.khanacademy.org/",
    keywords: ["study", "school", "math", "science", "learning"]
  },
  {
    name: "WolframAlpha",
    category: "Students",
    icon: "🧮",
    description: "Computational knowledge engine useful for maths and science.",
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
    description: "Powerful online graphing and maths calculator.",
    rating: 4.8,
    pricing: "Free",
    url: "https://www.desmos.com/",
    keywords: ["math", "graph", "calculator", "school"]
  },
  {
    name: "GeoGebra",
    category: "Students",
    icon: "📐",
    description: "Interactive mathematics tools for geometry, algebra and more.",
    rating: 4.8,
    pricing: "Free",
    url: "https://www.geogebra.org/",
    keywords: ["math", "geometry", "algebra", "school"]
  },
  {
    name: "Google Scholar",
    category: "Students",
    icon: "🔬",
    description: "Search engine for scholarly literature and academic research.",
    rating: 4.6,
    pricing: "Free",
    url: "https://scholar.google.com/",
    keywords: ["study", "research", "academic", "school"]
  },

  // Productivity
  {
    name: "Notion",
    category: "Productivity",
    icon: "📓",
    description: "Workspace for notes, planning, projects and databases.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://www.notion.com/",
    keywords: ["productivity", "notes", "planning", "school", "tasks"]
  },
  {
    name: "Trello",
    category: "Productivity",
    icon: "📋",
    description: "Visual task and project management platform.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://trello.com/",
    keywords: ["productivity", "tasks", "project", "planning"]
  },
  {
    name: "Todoist",
    category: "Productivity",
    icon: "✅",
    description: "Task manager for organizing things you need to do.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://todoist.com/",
    keywords: ["productivity", "tasks", "todo", "planning"]
  },
  {
    name: "Asana",
    category: "Productivity",
    icon: "📊",
    description: "Project and task management platform.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://asana.com/",
    keywords: ["productivity", "project", "tasks", "team"]
  },
  {
    name: "Google Keep",
    category: "Productivity",
    icon: "💡",
    description: "Simple notes, lists and reminders.",
    rating: 4.5,
    pricing: "Free",
    url: "https://keep.google.com/",
    keywords: ["notes", "tasks", "productivity", "reminders"]
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
    keywords: ["image", "background", "remove", "photo"]
  },
  {
    name: "TinyPNG",
    category: "Images",
    icon: "🐼",
    description: "Compress PNG and JPEG images while reducing file size.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://tinypng.com/",
    keywords: ["image", "compress", "photo", "png"]
  },
  {
    name: "Unsplash",
    category: "Images",
    icon: "📷",
    description: "Large collection of free-to-use photos.",
    rating: 4.8,
    pricing: "Free",
    url: "https://unsplash.com/",
    keywords: ["image", "photo", "pictures", "stock"]
  },
  {
    name: "Pexels",
    category: "Images",
    icon: "🌄",
    description: "Free stock photos and videos.",
    rating: 4.8,
    pricing: "Free",
    url: "https://www.pexels.com/",
    keywords: ["image", "photo", "video", "stock"]
  },

  // Audio
  {
    name: "Audacity",
    category: "Audio",
    icon: "🎧",
    description: "Free audio recording and editing software.",
    rating: 4.7,
    pricing: "Free",
    url: "https://www.audacityteam.org/",
    keywords: ["audio", "music", "record", "edit", "sound"]
  },
  {
    name: "BandLab",
    category: "Audio",
    icon: "🎵",
    description: "Online music creation and audio production platform.",
    rating: 4.6,
    pricing: "Free",
    url: "https://www.bandlab.com/",
    keywords: ["music", "audio", "beat", "record", "song"]
  },

  // PDF
  {
    name: "Smallpdf",
    category: "PDF & Documents",
    icon: "📕",
    description: "Online PDF tools for converting, compressing and editing documents.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://smallpdf.com/",
    keywords: ["pdf", "document", "convert", "compress"]
  },
  {
    name: "iLovePDF",
    category: "PDF & Documents",
    icon: "❤️",
    description: "Collection of useful PDF editing and conversion tools.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.ilovepdf.com/",
    keywords: ["pdf", "document", "merge", "convert", "compress"]
  },
  {
    name: "PDF24",
    category: "PDF & Documents",
    icon: "📘",
    description: "Free online tools for working with PDF documents.",
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

function readStorage(key, fallback = []) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage may be unavailable.
  }
}

let favorites = new Set(readStorage(FAVORITES_KEY));
let recentTools = readStorage(RECENT_KEY);

const compareTools = new Set();

/* =========================================================
   DOM
========================================================= */

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const suggestions = document.getElementById("suggestions");
const toolsGrid = document.getElementById("toolsGrid");
const categoryFilter = document.getElementById("categoryFilter");
const dashboard = document.getElementById("dashboard");

const categoriesOverlay = document.getElementById("categoriesOverlay");
const categoriesMenu = document.getElementById("categoriesMenu");
const categoriesClose = document.getElementById("categoriesClose");
const categoriesButton = document.getElementById("categoriesButton");
const categoriesButtonHero = document.getElementById("categoriesButtonHero");
const footerCategoriesButton = document.getElementById("footerCategoriesButton");

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");

/* =========================================================
   INTENT SYSTEM
========================================================= */

const intentGroups = {
  logo: ["logo", "logos", "brand", "branding"],
  design: ["design", "graphic", "poster", "flyer", "banner", "thumbnail"],
  video: ["video", "videos", "edit video", "editing", "reels", "shorts", "tiktok"],
  writing: ["write", "writing", "essay", "grammar", "article", "content"],
  website: ["website", "websites", "site", "web", "landing page", "blog"],
  study: ["study", "studying", "school", "learn", "learning", "revision", "exam"],
  math: ["math", "mathematics", "algebra", "geometry", "equation", "calculate"],
  ai: ["ai", "artificial intelligence", "assistant", "chatbot"],
  productivity: ["productivity", "tasks", "todo", "planning", "organize"],
  image: ["image", "photo", "picture", "background", "compress image"],
  audio: ["audio", "music", "song", "beat", "recording", "sound"],
  pdf: ["pdf", "document", "documents", "merge pdf", "convert pdf"]
};

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^\w\s&.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function detectIntents(query) {
  const text = normalizeText(query);
  const intents = [];

  for (const [intent, words] of Object.entries(intentGroups)) {
    if (words.some(word => text.includes(word))) {
      intents.push(intent);
    }
  }

  return intents;
}

function scoreTool(tool, query, intents) {
  const q = normalizeText(query);

  if (!q) return 0;

  let score = 0;

  const name = normalizeText(tool.name);
  const description = normalizeText(tool.description);
  const keywords = tool.keywords.map(normalizeText);

  if (name === q) score += 100;
  if (name.includes(q)) score += 60;
  if (q.includes(name)) score += 50;

  q.split(" ").forEach(word => {
    if (word.length < 2) return;

    if (name.includes(word)) score += 20;
    if (keywords.some(k => k.includes(word))) score += 12;
    if (description.includes(word)) score += 6;
  });

  const categoryIntentMap = {
    logo: "Design",
    design: "Design",
    video: "Video",
    writing: "Writing",
    website: "Websites",
    study: "Students",
    math: "Students",
    ai: "AI",
    productivity: "Productivity",
    image: "Images",
    audio: "Audio",
    pdf: "PDF & Documents"
  };

  intents.forEach(intent => {
    if (categoryIntentMap[intent] === tool.category) {
      score += 45;
    }

    if (tool.keywords.some(k =>
      intentGroups[intent]?.some(word => normalizeText(word) === k)
    )) {
      score += 15;
    }
  });

  score += tool.rating * 2;

  return score;
}

/* =========================================================
   SEARCH
========================================================= */

let currentResults = [...tools];

function getFilteredTools(baseTools) {
  let result = [...baseTools];

  const category = categoryFilter?.value || "all";
  const pricing = document.getElementById("pricingFilter")?.value || "all";
  const rating = document.getElementById("ratingFilter")?.value || "all";
  const sort = document.getElementById("sortFilter")?.value || "relevance";

  if (category !== "all") {
    result = result.filter(tool => tool.category === category);
  }

  if (pricing !== "all") {
    result = result.filter(tool => tool.pricing === pricing);
  }

  if (rating !== "all") {
    const minimum = Number(rating);
    result = result.filter(tool => tool.rating >= minimum);
  }

  if (sort === "rating-high") {
    result.sort((a, b) => b.rating - a.rating);
  }

  if (sort === "rating-low") {
    result.sort((a, b) => a.rating - b.rating);
  }

  if (sort === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sort === "category") {
    result.sort((a, b) => a.category.localeCompare(b.category));
  }

  return result;
}

function searchTools(query) {
  const cleanQuery = normalizeText(query);

  let results;

  if (!cleanQuery) {
    results = [...tools];
  } else {
    const intents = detectIntents(cleanQuery);

    results = tools
      .map(tool => ({
        tool,
        score: scoreTool(tool, cleanQuery, intents)
      }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.tool);
  }

  return getFilteredTools(results);
}

function performSearch(query = searchInput?.value || "") {
  const cleanQuery = normalizeText(query);

  if (searchInput && searchInput.value !== query) {
    searchInput.value = query;
  }

  currentResults = searchTools(cleanQuery);

  renderTools(currentResults.slice(0, 10));

  const status = document.getElementById("searchStatus");

  if (status) {
    status.textContent = cleanQuery
      ? `${currentResults.length} tool${currentResults.length === 1 ? "" : "s"} found`
      : `${currentResults.length} tools available`;
  }

  hideSuggestions();

  requestAnimationFrame(() => {
    document.getElementById("tools")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

/* =========================================================
   TOOL CARDS
========================================================= */

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderTools(list) {
  if (!toolsGrid) return;

  if (!list.length) {
    toolsGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔎</div>
        <h3>No tools found</h3>
        <p>Try changing your search or filters.</p>
        <button class="secondary-button" data-action="clear-filters">
          Clear Filters
        </button>
      </div>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();

  list.forEach((tool, index) => {
    const card = document.createElement("article");

    card.className = "tool-card reveal-card";
    card.style.setProperty("--card-index", index);

    const isFavorite = favorites.has(tool.name);
    const isCompared = compareTools.has(tool.name);

    card.innerHTML = `
      <div class="tool-card-top">
        <div class="tool-icon" aria-hidden="true">${escapeHTML(tool.icon)}</div>

        <button
          class="favorite-button ${isFavorite ? "active" : ""}"
          data-favorite="${escapeHTML(tool.name)}"
          aria-label="${isFavorite ? "Remove" : "Add"} ${escapeHTML(tool.name)} ${isFavorite ? "from" : "to"} favorites"
          aria-pressed="${isFavorite}"
          title="${isFavorite ? "Remove from favorites" : "Add to favorites"}"
        >
          ${isFavorite ? "★" : "☆"}
        </button>
      </div>

      <div class="tool-card-content">
        <span class="tool-category">${escapeHTML(tool.category)}</span>

        <h3>${escapeHTML(tool.name)}</h3>

        <p>${escapeHTML(tool.description)}</p>

        <div class="tool-meta">
          <span>⭐ ${tool.rating.toFixed(1)}</span>
          <span>${escapeHTML(tool.pricing)}</span>
        </div>
      </div>

      <div class="tool-card-actions">
        <a
          class="visit-button"
          href="${escapeHTML(tool.url)}"
          target="_blank"
          rel="noopener noreferrer"
          data-visit="${escapeHTML(tool.name)}"
        >
          Visit Tool ↗
        </a>

        <button
          class="compare-button ${isCompared ? "selected" : ""}"
          data-compare="${escapeHTML(tool.name)}"
          aria-pressed="${isCompared}"
        >
          ${isCompared ? "✓ Comparing" : "Compare"}
        </button>
      </div>
    `;

    fragment.appendChild(card);
  });

  toolsGrid.replaceChildren(fragment);
}

/* =========================================================
   FILTER CONTROLS
========================================================= */

function setupFilterControls() {
  if (!categoryFilter) return;

  const categories = [...new Set(tools.map(tool => tool.category))];

  categoryFilter.innerHTML = `
    <option value="all">All Categories</option>
    ${categories
      .map(category => `<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`)
      .join("")}
  `;

  const existingPanel = document.querySelector(".advanced-filters");

  if (!existingPanel) {
    const panel = document.createElement("div");

    panel.className = "advanced-filters";

    panel.innerHTML = `
      <div class="filter-group">
        <label for="pricingFilter">Pricing</label>
        <select id="pricingFilter" aria-label="Filter by pricing">
          <option value="all">All Pricing</option>
          <option value="Free">Free</option>
          <option value="Freemium">Freemium</option>
          <option value="Paid">Paid</option>
        </select>
      </div>

      <div class="filter-group">
        <label for="ratingFilter">Rating</label>
        <select id="ratingFilter" aria-label="Filter by minimum rating">
          <option value="all">Any Rating</option>
          <option value="4.8">4.8+ ⭐</option>
          <option value="4.5">4.5+ ⭐</option>
          <option value="4.0">4.0+ ⭐</option>
        </select>
      </div>

      <div class="filter-group">
        <label for="sortFilter">Sort</label>
        <select id="sortFilter" aria-label="Sort tools">
          <option value="relevance">Relevance</option>
          <option value="rating-high">Highest Rated</option>
          <option value="rating-low">Lowest Rated</option>
          <option value="name">A → Z</option>
          <option value="category">Category</option>
        </select>
      </div>

      <button class="clear-filter-button" data-action="clear-filters">
        Reset
      </button>
    `;

    const filterPanel = document.querySelector(".filter-panel");

    if (filterPanel) {
      filterPanel.appendChild(panel);
    } else {
      categoryFilter.parentElement?.appendChild(panel);
    }
  }
}

function applyFilters() {
  currentResults = searchTools(searchInput?.value || "");
  renderTools(currentResults.slice(0, 10));
}

/* =========================================================
   FAVORITES
========================================================= */

function saveFavorites() {
  writeStorage(FAVORITES_KEY, [...favorites]);
}

function toggleFavorite(name) {
  if (favorites.has(name)) {
    favorites.delete(name);
    showToast("Removed from favorites");
  } else {
    favorites.add(name);
    showToast("Added to favorites ⭐");
  }

  saveFavorites();
  renderTools(currentResults.slice(0, 10));
  renderDashboard();
}

/* =========================================================
   RECENTLY USED
========================================================= */

function addRecentlyVisited(name) {
  recentTools = recentTools.filter(item => item !== name);

  recentTools.unshift(name);

  recentTools = recentTools.slice(0, 10);

  writeStorage(RECENT_KEY, recentTools);

  renderDashboard();
}

/* =========================================================
   DASHBOARD
========================================================= */

function createDashboard() {
  if (!dashboard) return;

  dashboard.innerHTML = `
    <div class="dashboard-shell">

      <div class="dashboard-header">
        <div>
          <span class="section-label">YOUR SPACE</span>
          <h2>Your Dashboard</h2>
          <p>Keep track of tools you've saved and visited.</p>
        </div>
      </div>

      <div class="dashboard-stats">
        <div class="stat-card">
          <span class="stat-icon">🧰</span>
          <strong id="statTotal">0</strong>
          <span>Total Tools</span>
        </div>

        <div class="stat-card">
          <span class="stat-icon">⭐</span>
          <strong id="statFavorites">0</strong>
          <span>Favorites</span>
        </div>

        <div class="stat-card">
          <span class="stat-icon">🕘</span>
          <strong id="statRecent">0</strong>
          <span>Recently Used</span>
        </div>

        <div class="stat-card">
          <span class="stat-icon">📂</span>
          <strong id="statCategories">0</strong>
          <span>Categories</span>
        </div>
      </div>

      <div class="dashboard-actions">
        <button class="dashboard-action" data-dashboard-search="logo">
          🎨 Find Logo Tools
        </button>

        <button class="dashboard-action" data-dashboard-search="video">
          🎬 Find Video Tools
        </button>

        <button class="dashboard-action" data-dashboard-search="study">
          🎓 Find Study Tools
        </button>

        <button class="dashboard-action" data-dashboard-search="website">
          🌐 Find Website Tools
        </button>
      </div>

      <div class="dashboard-section">
        <div class="dashboard-section-heading">
          <div>
            <span class="section-label">SAVED</span>
            <h3>Favorite Tools</h3>
          </div>

          <button
            class="text-button"
            data-action="clear-favorites"
          >
            Clear all
          </button>
        </div>

        <div id="favoritesDashboardGrid" class="dashboard-tool-grid"></div>
      </div>

      <div class="dashboard-section">
        <div class="dashboard-section-heading">
          <div>
            <span class="section-label">HISTORY</span>
            <h3>Recently Used</h3>
          </div>

          <button
            class="text-button"
            data-action="clear-recent"
          >
            Clear
          </button>
        </div>

        <div id="recentDashboardGrid" class="dashboard-tool-grid"></div>
      </div>

    </div>
  `;
}

function createMiniToolCard(tool) {
  const isFavorite = favorites.has(tool.name);
  const isCompared = compareTools.has(tool.name);

  return `
    <article class="mini-tool-card">

      <div class="mini-tool-icon">${escapeHTML(tool.icon)}</div>

      <div class="mini-tool-info">
        <span>${escapeHTML(tool.category)}</span>
        <h4>${escapeHTML(tool.name)}</h4>
        <p>⭐ ${tool.rating.toFixed(1)} · ${escapeHTML(tool.pricing)}</p>
      </div>

      <div class="mini-tool-actions">

        <button
          class="favorite-button ${isFavorite ? "active" : ""}"
          data-favorite="${escapeHTML(tool.name)}"
          aria-label="${isFavorite ? "Remove" : "Add"} ${escapeHTML(tool.name)} ${isFavorite ? "from" : "to"} favorites"
          aria-pressed="${isFavorite}"
        >
          ${isFavorite ? "★" : "☆"}
        </button>

        <button
          class="compare-button ${isCompared ? "selected" : ""}"
          data-compare="${escapeHTML(tool.name)}"
          aria-pressed="${isCompared}"
        >
          ${isCompared ? "✓" : "Compare"}
        </button>

        <a
          class="mini-visit"
          href="${escapeHTML(tool.url)}"
          target="_blank"
          rel="noopener noreferrer"
          data-visit="${escapeHTML(tool.name)}"
        >
          Visit ↗
        </a>

      </div>
    </article>
  `;
}

function renderDashboard() {
  if (!dashboard) return;

  const favoriteGrid = document.getElementById("favoritesDashboardGrid");
  const recentGrid = document.getElementById("recentDashboardGrid");

  if (!favoriteGrid || !recentGrid) return;

  const favoriteList = tools.filter(tool => favorites.has(tool.name));

  const recentList = recentTools
    .map(name => tools.find(tool => tool.name === name))
    .filter(Boolean);

  favoriteGrid.innerHTML = favoriteList.length
    ? favoriteList.map(createMiniToolCard).join("")
    : `
      <div class="dashboard-empty">
        <span>⭐</span>
        <p>No favorite tools yet.</p>
        <small>Tap the star on any tool to save it here.</small>
      </div>
    `;

  recentGrid.innerHTML = recentList.length
    ? recentList.map(createMiniToolCard).join("")
    : `
      <div class="dashboard-empty">
        <span>🕘</span>
        <p>No recently used tools yet.</p>
        <small>Visit a tool and it will appear here.</small>
      </div>
    `;

  const categories = new Set(tools.map(tool => tool.category));

  const total = document.getElementById("statTotal");
  const fav = document.getElementById("statFavorites");
  const recent = document.getElementById("statRecent");
  const category = document.getElementById("statCategories");

  if (total) total.textContent = tools.length;
  if (fav) fav.textContent = favorites.size;
  if (recent) recent.textContent = recentList.length;
  if (category) category.textContent = categories.size;
}

/* =========================================================
   COMPARE SYSTEM
========================================================= */

function setupCompareUI() {
  if (document.getElementById("compareBar")) return;

  const bar = document.createElement("div");

  bar.id = "compareBar";
  bar.className = "compare-bar";
  bar.setAttribute("aria-live", "polite");

  bar.innerHTML = `
    <div class="compare-bar-content">
      <div>
        <strong>Compare Tools</strong>
        <span id="compareCount">0/3 selected</span>
      </div>

      <div class="compare-bar-actions">
        <button
          class="secondary-button"
          data-action="clear-compare"
        >
          Clear
        </button>

        <button
          class="primary-button"
          data-action="open-compare"
          id="openCompareButton"
          disabled
        >
          Compare
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(bar);

  const modal = document.createElement("div");

  modal.id = "compareModal";
  modal.className = "modal";
  modal.setAttribute("aria-hidden", "true");

  modal.innerHTML = `
    <div class="modal-backdrop" data-action="close-compare"></div>

    <div
      class="compare-modal-card"
      role="dialog"
      aria-modal="true"
      aria-labelledby="compareModalTitle"
    >
      <div class="modal-header">
        <div>
          <span class="section-label">TOOL COMPARISON</span>
          <h2 id="compareModalTitle">Compare Tools</h2>
        </div>

        <button
          class="modal-close"
          data-action="close-compare"
          aria-label="Close comparison"
        >
          ×
        </button>
      </div>

      <div id="compareContent"></div>
    </div>
  `;

  document.body.appendChild(modal);

  updateCompareBar();
}

function toggleCompare(name) {
  if (compareTools.has(name)) {
    compareTools.delete(name);
    showToast("Removed from comparison");
  } else {
    if (compareTools.size >= 3) {
      showToast("You can compare up to 3 tools");
      return;
    }

    compareTools.add(name);
    showToast("Added to comparison ⚖️");
  }

  updateCompareBar();
  renderTools(currentResults.slice(0, 10));
  renderDashboard();
}

function updateCompareBar() {
  const bar = document.getElementById("compareBar");
  const count = document.getElementById("compareCount");
  const openButton = document.getElementById("openCompareButton");

  if (!bar || !count || !openButton) return;

  count.textContent = `${compareTools.size}/3 selected`;
  openButton.disabled = compareTools.size < 2;

  bar.classList.toggle("visible", compareTools.size > 0);
}

function openCompareModal() {
  if (compareTools.size < 2) {
    showToast("Select at least 2 tools to compare");
    return;
  }

  const selected = tools.filter(tool => compareTools.has(tool.name));
  const modal = document.getElementById("compareModal");
  const content = document.getElementById("compareContent");

  if (!modal || !content) return;

  content.innerHTML = `
    <div class="comparison-grid">

      ${selected.map(tool => `
        <article class="comparison-card">

          <div class="comparison-icon">
            ${escapeHTML(tool.icon)}
          </div>

          <span class="tool-category">
            ${escapeHTML(tool.category)}
          </span>

          <h3>${escapeHTML(tool.name)}</h3>

          <p>${escapeHTML(tool.description)}</p>

          <div class="comparison-details">
            <div>
              <span>Rating</span>
              <strong>⭐ ${tool.rating.toFixed(1)}</strong>
            </div>

            <div>
              <span>Pricing</span>
              <strong>${escapeHTML(tool.pricing)}</strong>
            </div>

            <div>
              <span>Category</span>
              <strong>${escapeHTML(tool.category)}</strong>
            </div>
          </div>

          <a
            class="visit-button"
            href="${escapeHTML(tool.url)}"
            target="_blank"
            rel="noopener noreferrer"
            data-visit="${escapeHTML(tool.name)}"
          >
            Visit Tool ↗
          </a>

        </article>
      `).join("")}

    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  modal.querySelector(".modal-close")?.focus();
}

function closeCompareModal() {
  const modal = document.getElementById("compareModal");

  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function clearCompare() {
  compareTools.clear();
  updateCompareBar();
  renderTools(currentResults.slice(0, 10));
  renderDashboard();
}

/* =========================================================
   SUGGESTIONS
========================================================= */

function showSuggestions() {
  if (!suggestions || !searchInput) return;

  const query = normalizeText(searchInput.value);

  if (!query) {
    hideSuggestions();
    return;
  }

  const matches = tools
    .filter(tool => {
      const text = normalizeText(
        `${tool.name} ${tool.category} ${tool.keywords.join(" ")}`
      );

      return text.includes(query);
    })
    .slice(0, 5);

  if (!matches.length) {
    hideSuggestions();
    return;
  }

  suggestions.innerHTML = matches
    .map(tool => `
      <button
        class="suggestion-item"
        type="button"
        data-suggestion="${escapeHTML(tool.name)}"
      >
        <span>${escapeHTML(tool.icon)}</span>
        <span>
          <strong>${escapeHTML(tool.name)}</strong>
          <small>${escapeHTML(tool.category)}</small>
        </span>
      </button>
    `)
    .join("");

  suggestions.classList.add("visible");
}

function hideSuggestions() {
  suggestions?.classList.remove("visible");
}

/* =========================================================
   CATEGORY MENU
========================================================= */

function openCategories() {
  if (!categoriesOverlay) return;

  categoriesOverlay.classList.add("open");
  categoriesOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  categoriesMenu?.querySelector(".category-card")?.focus();
}

function closeCategories() {
  if (!categoriesOverlay) return;

  categoriesOverlay.classList.remove("open");
  categoriesOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function chooseCategory(category) {
  closeCategories();

  if (categoryFilter) {
    categoryFilter.value = category;
  }

  currentResults = getFilteredTools(tools);
  renderTools(currentResults.slice(0, 10));

  document.getElementById("tools")?.scrollIntoView({
    behavior: "smooth"
  });

  showToast(
    category === "all"
      ? "Showing all tools"
      : `${category} tools selected`
  );
}

/* =========================================================
   TOAST
========================================================= */

function showToast(message) {
  let toast = document.getElementById("tzToast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "tzToast";
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");

    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timeout);

  showToast.timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

/* =========================================================
   CLEAR ACTIONS
========================================================= */

function clearFilters() {
  if (categoryFilter) categoryFilter.value = "all";

  const pricing = document.getElementById("pricingFilter");
  const rating = document.getElementById("ratingFilter");
  const sort = document.getElementById("sortFilter");

  if (pricing) pricing.value = "all";
  if (rating) rating.value = "all";
  if (sort) sort.value = "relevance";

  currentResults = searchTools(searchInput?.value || "");
  renderTools(currentResults.slice(0, 10));

  showToast("Filters reset");
}

function clearFavorites() {
  favorites.clear();
  saveFavorites();
  renderTools(currentResults.slice(0, 10));
  renderDashboard();
  showToast("Favorites cleared");
}

function clearRecent() {
  recentTools = [];
  writeStorage(RECENT_KEY, []);
  renderDashboard();
  showToast("Recently used cleared");
}

/* =========================================================
   THEME
========================================================= */

function setupTheme() {
  const savedTheme = localStorage.getItem("tztools_theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  updateThemeButton();
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");

  localStorage.setItem(
    "tztools_theme",
    isDark ? "dark" : "light"
  );

  updateThemeButton();
}

function updateThemeButton() {
  if (!themeToggle) return;

  const isDark = document.body.classList.contains("dark-mode");

  themeToggle.textContent = isDark ? "☀️" : "🌙";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
}

/* =========================================================
   MOBILE NAV
========================================================= */

function toggleMobileNav() {
  if (!navLinks) return;

  navLinks.classList.toggle("mobile-open");
}

/* =========================================================
   DELEGATED EVENTS
========================================================= */

document.addEventListener("click", event => {
  const favoriteButton = event.target.closest("[data-favorite]");

  if (favoriteButton) {
    event.preventDefault();
    toggleFavorite(favoriteButton.dataset.favorite);
    return;
  }

  const compareButton = event.target.closest("[data-compare]");

  if (compareButton) {
    event.preventDefault();
    toggleCompare(compareButton.dataset.compare);
    return;
  }

  const visitLink = event.target.closest("[data-visit]");

  if (visitLink) {
    addRecentlyVisited(visitLink.dataset.visit);
    return;
  }

  const suggestion = event.target.closest("[data-suggestion]");

  if (suggestion) {
    const name = suggestion.dataset.suggestion;

    if (searchInput) {
      searchInput.value = name;
    }

    performSearch(name);
    return;
  }

  const categoryCard = event.target.closest(".category-card");

  if (categoryCard) {
    chooseCategory(categoryCard.dataset.category || "all");
    return;
  }

  const action = event.target.closest("[data-action]");

  if (action) {
    const actionName = action.dataset.action;

    if (actionName === "clear-filters") clearFilters();
    if (actionName === "clear-favorites") clearFavorites();
    if (actionName === "clear-recent") clearRecent();
    if (actionName === "clear-compare") clearCompare();
    if (actionName === "open-compare") openCompareModal();
    if (actionName === "close-compare") closeCompareModal();

    return;
  }

  const dashboardSearch = event.target.closest("[data-dashboard-search]");

  if (dashboardSearch) {
    const query = dashboardSearch.dataset.dashboardSearch;

    if (searchInput) {
      searchInput.value = query;
    }

    performSearch(query);
    return;
  }

  const quickSearch = event.target.closest(".quick-search");

  if (quickSearch) {
    const query =
      quickSearch.dataset.query ||
      quickSearch.dataset.search ||
      quickSearch.textContent;

    if (searchInput) {
      searchInput.value = query;
    }

    performSearch(query);
    return;
  }
});

/* =========================================================
   EVENT LISTENERS
========================================================= */

searchButton?.addEventListener("click", () => {
  performSearch();
});

searchInput?.addEventListener("input", () => {
  showSuggestions();
});

searchInput?.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    performSearch();
  }

  if (event.key === "Escape") {
    hideSuggestions();
  }
});

document.addEventListener("click", event => {
  if (
    suggestions &&
    !suggestions.contains(event.target) &&
    event.target !== searchInput
  ) {
    hideSuggestions();
  }
});

categoryFilter?.addEventListener("change", applyFilters);

document.addEventListener("change", event => {
  if (
    event.target.id === "pricingFilter" ||
    event.target.id === "ratingFilter" ||
    event.target.id === "sortFilter"
  ) {
    applyFilters();
  }
});

categoriesButton?.addEventListener("click", openCategories);
categoriesButtonHero?.addEventListener("click", openCategories);
footerCategoriesButton?.addEventListener("click", openCategories);

categoriesClose?.addEventListener("click", closeCategories);

categoriesOverlay?.addEventListener("click", event => {
  if (event.target === categoriesOverlay) {
    closeCategories();
  }
});

themeToggle?.addEventListener("click", toggleTheme);
menuButton?.addEventListener("click", toggleMobileNav);

/* =========================================================
   KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;

  closeCategories();
  closeCompareModal();
  hideSuggestions();
});

/* =========================================================
   REVEAL ANIMATION
========================================================= */

function setupRevealObserver() {
  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08
    }
  );

  document
    .querySelectorAll(".section, .category-card, .stat-card")
    .forEach(element => observer.observe(element));
}

/* =========================================================
   INITIALIZATION
========================================================= */

function initialize() {
  setupFilterControls();
  setupCompareUI();
  createDashboard();
  setupTheme();

  currentResults = getFilteredTools(tools);

  renderTools(currentResults.slice(0, 10));
  renderDashboard();

  setupRevealObserver();
}

initialize();
