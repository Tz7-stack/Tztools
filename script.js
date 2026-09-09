/* =========================================================
   TzTools V6.5
   Smart Search + Favorites + Recently Used + Dashboard
   ========================================================= */

const tools = [
  // ==================== AI ====================
  {
    name: "ChatGPT",
    category: "AI",
    icon: "🤖",
    description: "AI assistant for writing, studying, coding, brainstorming and more.",
    rating: 4.9,
    pricing: "Freemium",
    url: "https://chatgpt.com/",
    keywords: ["ai", "assistant", "chat", "study", "writing", "coding", "research"]
  },
  {
    name: "Google Gemini",
    category: "AI",
    icon: "✨",
    description: "Google's AI assistant for questions, ideas, research and productivity.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://gemini.google.com/",
    keywords: ["ai", "assistant", "google", "research", "study"]
  },
  {
    name: "Claude",
    category: "AI",
    icon: "🧠",
    description: "AI assistant useful for writing, analysis, coding and documents.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://claude.ai/",
    keywords: ["ai", "writing", "coding", "documents", "analysis"]
  },
  {
    name: "Microsoft Copilot",
    category: "AI",
    icon: "⚡",
    description: "AI assistant for answers, ideas, writing and everyday productivity.",
    rating: 4.6,
    pricing: "Freemium",
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
    keywords: ["ai", "search", "research", "answers"]
  },

  // ==================== DESIGN ====================
  {
    name: "Canva",
    category: "Design",
    icon: "🎨",
    description: "Create logos, posters, presentations, social graphics and more.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://www.canva.com/",
    keywords: ["logo", "design", "poster", "graphics", "presentation", "social media"]
  },
  {
    name: "Adobe Express",
    category: "Design",
    icon: "🖌️",
    description: "Quickly create graphics, flyers, social posts and visual content.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://www.adobe.com/express/",
    keywords: ["logo", "design", "graphics", "poster", "flyer"]
  },
  {
    name: "Figma",
    category: "Design",
    icon: "🔷",
    description: "Professional interface and collaborative design platform.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://www.figma.com/",
    keywords: ["design", "ui", "ux", "interface", "prototype", "website"]
  },
  {
    name: "Photopea",
    category: "Design",
    icon: "🖼️",
    description: "Browser-based image editor with powerful editing features.",
    rating: 4.7,
    pricing: "Free",
    url: "https://www.photopea.com/",
    keywords: ["photo", "image", "edit", "photoshop", "design"]
  },
  {
    name: "Pixlr",
    category: "Design",
    icon: "🌈",
    description: "Online photo and graphic editing tools.",
    rating: 4.5,
    pricing: "Freemium",
    url: "https://pixlr.com/",
    keywords: ["photo", "image", "edit", "design"]
  },

  // ==================== VIDEO ====================
  {
    name: "CapCut",
    category: "Video",
    icon: "🎬",
    description: "Easy video editor for short-form and social media content.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://www.capcut.com/",
    keywords: ["video", "edit", "tiktok", "reels", "shorts"]
  },
  {
    name: "DaVinci Resolve",
    category: "Video",
    icon: "🎞️",
    description: "Professional video editing, color grading and audio production.",
    rating: 4.9,
    pricing: "Free",
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    keywords: ["video", "editing", "professional", "color", "film"]
  },
  {
    name: "VEED",
    category: "Video",
    icon: "📹",
    description: "Simple browser-based video editor with creator tools.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://www.veed.io/",
    keywords: ["video", "edit", "subtitles", "social"]
  },
  {
    name: "Clipchamp",
    category: "Video",
    icon: "✂️",
    description: "Easy online video editor from Microsoft.",
    rating: 4.5,
    pricing: "Freemium",
    url: "https://clipchamp.com/",
    keywords: ["video", "edit", "microsoft"]
  },
  {
    name: "InVideo",
    category: "Video",
    icon: "🎥",
    description: "Create videos using templates and AI-powered tools.",
    rating: 4.5,
    pricing: "Freemium",
    url: "https://invideo.io/",
    keywords: ["video", "ai", "creator", "editing"]
  },

  // ==================== WRITING ====================
  {
    name: "Grammarly",
    category: "Writing",
    icon: "✍️",
    description: "Writing assistant for grammar, spelling, clarity and tone.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.grammarly.com/",
    keywords: ["writing", "grammar", "essay", "school", "spell"]
  },
  {
    name: "QuillBot",
    category: "Writing",
    icon: "📝",
    description: "Paraphrasing, summarizing and writing assistance.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://quillbot.com/",
    keywords: ["writing", "paraphrase", "summarize", "essay"]
  },
  {
    name: "Google Docs",
    category: "Writing",
    icon: "📄",
    description: "Create and collaborate on documents online.",
    rating: 4.8,
    pricing: "Free",
    url: "https://docs.google.com/",
    keywords: ["writing", "document", "essay", "school"]
  },
  {
    name: "LanguageTool",
    category: "Writing",
    icon: "🔤",
    description: "Grammar and spelling checker supporting many languages.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://languagetool.org/",
    keywords: ["grammar", "writing", "spell", "essay"]
  },
  {
    name: "Hemingway Editor",
    category: "Writing",
    icon: "📚",
    description: "Make writing clearer, simpler and easier to read.",
    rating: 4.5,
    pricing: "Free",
    url: "https://hemingwayapp.com/",
    keywords: ["writing", "essay", "readability"]
  },

  // ==================== WEBSITES ====================
  {
    name: "WordPress",
    category: "Websites",
    icon: "🌐",
    description: "Create websites and blogs with WordPress.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://wordpress.com/",
    keywords: ["website", "blog", "web", "site"]
  },
  {
    name: "Wix",
    category: "Websites",
    icon: "🌍",
    description: "Build websites using a visual website builder.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://www.wix.com/",
    keywords: ["website", "web", "site", "business"]
  },
  {
    name: "Framer",
    category: "Websites",
    icon: "🟣",
    description: "Design and publish modern websites visually.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.framer.com/",
    keywords: ["website", "web", "design", "landing page"]
  },
  {
    name: "Webflow",
    category: "Websites",
    icon: "🔵",
    description: "Professional visual website development platform.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://webflow.com/",
    keywords: ["website", "web", "development", "design"]
  },
  {
    name: "Carrd",
    category: "Websites",
    icon: "🪪",
    description: "Create simple responsive one-page websites.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://carrd.co/",
    keywords: ["website", "landing page", "portfolio"]
  },
  {
    name: "GitHub Pages",
    category: "Websites",
    icon: "🐙",
    description: "Host websites directly from GitHub repositories.",
    rating: 4.8,
    pricing: "Free",
    url: "https://pages.github.com/",
    keywords: ["website", "hosting", "github", "coding"]
  },

  // ==================== STUDENTS ====================
  {
    name: "Khan Academy",
    category: "Students",
    icon: "🎓",
    description: "Free lessons and practice across many school subjects.",
    rating: 4.9,
    pricing: "Free",
    url: "https://www.khanacademy.org/",
    keywords: ["study", "school", "math", "science", "learning"]
  },
  {
    name: "WolframAlpha",
    category: "Students",
    icon: "🧮",
    description: "Computational engine for maths, science and factual questions.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://www.wolframalpha.com/",
    keywords: ["math", "science", "calculation", "study"]
  },
  {
    name: "Quizlet",
    category: "Students",
    icon: "🃏",
    description: "Study using flashcards, quizzes and learning activities.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://quizlet.com/",
    keywords: ["study", "flashcards", "quiz", "school"]
  },
  {
    name: "Desmos",
    category: "Students",
    icon: "📈",
    description: "Online graphing calculator and mathematics tools.",
    rating: 4.8,
    pricing: "Free",
    url: "https://www.desmos.com/",
    keywords: ["math", "graph", "calculator", "school"]
  },
  {
    name: "GeoGebra",
    category: "Students",
    icon: "📐",
    description: "Interactive mathematics tools for geometry and algebra.",
    rating: 4.8,
    pricing: "Free",
    url: "https://www.geogebra.org/",
    keywords: ["math", "geometry", "algebra", "school"]
  },
  {
    name: "Google Scholar",
    category: "Students",
    icon: "🔬",
    description: "Search engine for academic papers and scholarly research.",
    rating: 4.7,
    pricing: "Free",
    url: "https://scholar.google.com/",
    keywords: ["research", "study", "academic", "papers"]
  },

  // ==================== PRODUCTIVITY ====================
  {
    name: "Notion",
    category: "Productivity",
    icon: "📓",
    description: "Organize notes, projects, tasks and information.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://www.notion.com/",
    keywords: ["productivity", "notes", "tasks", "planning"]
  },
  {
    name: "Trello",
    category: "Productivity",
    icon: "📋",
    description: "Manage projects and tasks using visual boards.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://trello.com/",
    keywords: ["productivity", "tasks", "project", "planning"]
  },
  {
    name: "Todoist",
    category: "Productivity",
    icon: "✅",
    description: "Task manager for organizing everyday work and goals.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://todoist.com/",
    keywords: ["productivity", "tasks", "todo", "planning"]
  },
  {
    name: "Asana",
    category: "Productivity",
    icon: "🗂️",
    description: "Project and task management platform.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://asana.com/",
    keywords: ["productivity", "project", "tasks", "team"]
  },
  {
    name: "Google Keep",
    category: "Productivity",
    icon: "💡",
    description: "Quick notes, lists and reminders.",
    rating: 4.6,
    pricing: "Free",
    url: "https://keep.google.com/",
    keywords: ["notes", "productivity", "tasks", "reminders"]
  },

  // ==================== IMAGES ====================
  {
    name: "Remove.bg",
    category: "Images",
    icon: "🪄",
    description: "Remove image backgrounds automatically.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.remove.bg/",
    keywords: ["image", "background", "remove", "photo"]
  },
  {
    name: "TinyPNG",
    category: "Images",
    icon: "🗜️",
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
    description: "Find high-quality stock photographs.",
    rating: 4.8,
    pricing: "Free",
    url: "https://unsplash.com/",
    keywords: ["image", "photo", "pictures", "stock"]
  },
  {
    name: "Pexels",
    category: "Images",
    icon: "📸",
    description: "Free stock photos and videos.",
    rating: 4.8,
    pricing: "Free",
    url: "https://www.pexels.com/",
    keywords: ["image", "photo", "video", "stock"]
  },

  // ==================== AUDIO ====================
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
    description: "Create, record and collaborate on music online.",
    rating: 4.7,
    pricing: "Free",
    url: "https://www.bandlab.com/",
    keywords: ["music", "audio", "record", "beat"]
  },

  // ==================== PDF ====================
  {
    name: "Smallpdf",
    category: "PDF & Documents",
    icon: "📕",
    description: "Compress, convert, merge and edit PDF files.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://smallpdf.com/",
    keywords: ["pdf", "document", "compress", "convert"]
  },
  {
    name: "iLovePDF",
    category: "PDF & Documents",
    icon: "❤️",
    description: "Online tools for merging, splitting and converting PDFs.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.ilovepdf.com/",
    keywords: ["pdf", "document", "merge", "convert"]
  },
  {
    name: "PDF24",
    category: "PDF & Documents",
    icon: "📘",
    description: "Free online PDF tools for everyday document tasks.",
    rating: 4.7,
    pricing: "Free",
    url: "https://tools.pdf24.org/",
    keywords: ["pdf", "document", "convert", "merge"]
  }
];


/* =========================================================
   STORAGE
   ========================================================= */

const FAVORITES_KEY = "tztools_favorites";
const RECENT_KEY = "tztools_recent";
const MAX_RECENT = 10;


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
const categoriesButton = document.getElementById("categoriesButton");
const categoriesButtonHero = document.getElementById("categoriesButtonHero");
const footerCategoriesButton = document.getElementById("footerCategoriesButton");
const categoriesClose = document.getElementById("categoriesClose");

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");


/* =========================================================
   HELPERS
   ========================================================= */

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s&.-]/g, " ");
}

function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}


/* =========================================================
   FAVORITES
   ========================================================= */

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  } catch {
    return [];
  }
}

function saveFavorites(favorites) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

function isFavorite(toolName) {
  return getFavorites().includes(toolName);
}

function toggleFavorite(toolName) {
  let favorites = getFavorites();

  if (favorites.includes(toolName)) {
    favorites = favorites.filter(name => name !== toolName);
  } else {
    favorites.push(toolName);
  }

  saveFavorites(favorites);

  renderTools(currentResults);
  renderDashboard();
}


/* =========================================================
   RECENTLY USED
   ========================================================= */

function getRecentlyUsed() {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY)) || [];
  } catch {
    return [];
  }
}

function saveRecentlyUsed(recent) {
  localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
}

function addRecentlyVisited(toolName) {
  let recent = getRecentlyUsed();

  recent = recent.filter(name => name !== toolName);
  recent.unshift(toolName);
  recent = recent.slice(0, MAX_RECENT);

  saveRecentlyUsed(recent);
  renderDashboard();
}

function clearRecentlyUsed() {
  localStorage.removeItem(RECENT_KEY);
  renderDashboard();
}


/* =========================================================
   INTENTS
   ========================================================= */

const intentGroups = {
  logo: ["logo", "logos", "brand", "branding"],
  design: ["design", "poster", "flyer", "graphics", "graphic", "banner"],
  video: ["video", "videos", "edit video", "editing", "movie", "reels", "shorts", "tiktok"],
  writing: ["write", "writing", "essay", "grammar", "spell", "paraphrase", "article"],
  website: ["website", "web", "site", "blog", "landing page"],
  study: ["study", "school", "learn", "learning", "exam", "homework", "revision"],
  math: ["math", "mathematics", "calculate", "calculation", "equation", "algebra", "geometry", "graph"],
  ai: ["ai", "artificial intelligence", "chatbot", "assistant"],
  productivity: ["productivity", "tasks", "task", "todo", "planning", "organize", "notes"],
  image: ["image", "images", "photo", "photos", "picture", "pictures", "background"],
  audio: ["audio", "music", "song", "sound", "record", "recording", "beat"],
  pdf: ["pdf", "document", "documents", "merge pdf", "compress pdf", "convert pdf"]
};

function detectIntents(query) {
  const text = normalizeText(query);
  const detected = [];

  for (const [intent, words] of Object.entries(intentGroups)) {
    if (words.some(word => text.includes(normalizeText(word)))) {
      detected.push(intent);
    }
  }

  return detected;
}


/* =========================================================
   SEARCH
   ========================================================= */

function scoreTool(tool, query, intents) {
  const q = normalizeText(query);

  if (!q) return 0;

  let score = 0;

  const toolName = normalizeText(tool.name);
  const description = normalizeText(tool.description);
  const keywords = tool.keywords.map(normalizeText);

  if (toolName === q) score += 100;
  if (toolName.includes(q)) score += 70;

  q.split(/\s+/).filter(Boolean).forEach(word => {
    if (toolName.includes(word)) score += 25;
    if (description.includes(word)) score += 8;

    if (keywords.some(keyword => keyword.includes(word))) {
      score += 20;
    }
  });

  intents.forEach(intent => {
    const categoryMap = {
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

    if (tool.category === categoryMap[intent]) {
      score += 35;
    }
  });

  return score;
}

function searchTools(query) {
  const cleanQuery = normalizeText(query);

  if (!cleanQuery) {
    return tools.slice();
  }

  const intents = detectIntents(cleanQuery);

  return tools
    .map(tool => ({
      tool,
      score: scoreTool(tool, cleanQuery, intents)
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.tool.rating - a.tool.rating;
    })
    .slice(0, 10)
    .map(item => item.tool);
}


/* =========================================================
   TOOL CARDS
   ========================================================= */

function createToolCard(tool) {
  const favorite = isFavorite(tool.name);

  return `
    <article class="tool-card">

      <button
        class="favorite-button ${favorite ? "active" : ""}"
        data-favorite="${escapeHTML(tool.name)}"
        aria-label="${favorite ? "Remove from favorites" : "Add to favorites"}"
        title="${favorite ? "Remove from favorites" : "Add to favorites"}"
      >
        ${favorite ? "★" : "☆"}
      </button>

      <div class="tool-icon">
        ${tool.icon}
      </div>

      <div class="tool-content">

        <div class="tool-category">
          ${escapeHTML(tool.category)}
        </div>

        <h3>${escapeHTML(tool.name)}</h3>

        <p>${escapeHTML(tool.description)}</p>

        <div class="tool-meta">
          <span>⭐ ${tool.rating}</span>
          <span>${escapeHTML(tool.pricing)}</span>
        </div>

        <a
          class="tool-button"
          href="${tool.url}"
          target="_blank"
          rel="noopener noreferrer"
          data-visit="${escapeHTML(tool.name)}"
        >
          Visit Tool →
        </a>

      </div>
    </article>
  `;
}


/* =========================================================
   RENDER TOOLS
   ========================================================= */

let currentResults = tools.slice();

function renderTools(results) {
  currentResults = results;

  if (!toolsGrid) return;

  if (!results.length) {
    toolsGrid.innerHTML = `
      <div class="empty-state">
        <h3>No tools found</h3>
        <p>Try something like "make a logo", "edit video", or "study maths".</p>
      </div>
    `;
    return;
  }

  toolsGrid.innerHTML = results
    .map(createToolCard)
    .join("");
}


/* =========================================================
   DASHBOARD
   ========================================================= */

function createDashboardToolCard(tool) {
  return `
    <article class="tool-card dashboard-tool-card">

      <div class="tool-icon">
        ${tool.icon}
      </div>

      <div class="tool-content">

        <div class="tool-category">
          ${escapeHTML(tool.category)}
        </div>

        <h3>${escapeHTML(tool.name)}</h3>

        <p>${escapeHTML(tool.description)}</p>

        <a
          class="tool-button"
          href="${tool.url}"
          target="_blank"
          rel="noopener noreferrer"
          data-visit="${escapeHTML(tool.name)}"
        >
          Visit Tool →
        </a>

      </div>

    </article>
  `;
}

function renderDashboard() {
  if (!dashboard) return;

  const favoriteNames = getFavorites();
  const recentNames = getRecentlyUsed();

  const favoriteTools = favoriteNames
    .map(name => tools.find(tool => tool.name === name))
    .filter(Boolean);

  const recentTools = recentNames
    .map(name => tools.find(tool => tool.name === name))
    .filter(Boolean);

  const categoryCount = new Set(tools.map(tool => tool.category)).size;

  dashboard.innerHTML = `
    <div class="dashboard-inner">

      <div class="dashboard-header">
        <div>
          <p class="section-label">YOUR SPACE</p>
          <h2>Dashboard</h2>
          <p>Your personal TzTools hub.</p>
        </div>
      </div>


      <!-- STATS -->

      <div class="dashboard-stats">

        <div class="dashboard-stat">
          <div class="dashboard-stat-icon">🧰</div>
          <div>
            <strong>${tools.length}</strong>
            <span>Total Tools</span>
          </div>
        </div>

        <div class="dashboard-stat">
          <div class="dashboard-stat-icon">⭐</div>
          <div>
            <strong>${favoriteTools.length}</strong>
            <span>Favorites</span>
          </div>
        </div>

        <div class="dashboard-stat">
          <div class="dashboard-stat-icon">🕘</div>
          <div>
            <strong>${recentTools.length}</strong>
            <span>Recently Used</span>
          </div>
        </div>

        <div class="dashboard-stat">
          <div class="dashboard-stat-icon">📂</div>
          <div>
            <strong>${categoryCount}</strong>
            <span>Categories</span>
          </div>
        </div>

      </div>


      <!-- QUICK ACTIONS -->

      <section class="dashboard-section">

        <div class="dashboard-section-header">
          <div>
            <h3>⚡ Quick Actions</h3>
            <p>Jump straight into what you need.</p>
          </div>
        </div>

        <div class="dashboard-actions">

          <button
            class="dashboard-action"
            data-dashboard-search="make a logo"
          >
            <span>🎨</span>
            <strong>Make a Logo</strong>
            <small>Find design tools</small>
          </button>

          <button
            class="dashboard-action"
            data-dashboard-search="edit video"
          >
            <span>🎬</span>
            <strong>Edit a Video</strong>
            <small>Find video editors</small>
          </button>

          <button
            class="dashboard-action"
            data-dashboard-search="study"
          >
            <span>🎓</span>
            <strong>Study</strong>
            <small>Find learning tools</small>
          </button>

          <button
            class="dashboard-action"
            data-dashboard-search="build a website"
          >
            <span>🌐</span>
            <strong>Build a Website</strong>
            <small>Find website builders</small>
          </button>

        </div>

      </section>


      <!-- FAVORITES -->

      <section class="dashboard-section">

        <div class="dashboard-section-header">

          <div>
            <h3>⭐ Favorite Tools</h3>
            <p>Your saved tools.</p>
          </div>

          ${
            favoriteTools.length
              ? `<span class="dashboard-count">${favoriteTools.length}</span>`
              : ""
          }

        </div>

        ${
          favoriteTools.length
            ? `
              <div class="favorites-dashboard-grid">
                ${favoriteTools.map(createDashboardToolCard).join("")}
              </div>
            `
            : `
              <div class="dashboard-empty">
                <div>☆</div>
                <h4>No favorites yet</h4>
                <p>Tap the star on any tool to save it here.</p>
              </div>
            `
        }

      </section>


      <!-- RECENT -->

      <section class="dashboard-section">

        <div class="dashboard-section-header">

          <div>
            <h3>🕘 Recently Used</h3>
            <p>Your latest tools.</p>
          </div>

          ${
            recentTools.length
              ? `<button class="clear-recent-button" id="clearRecentButton">Clear</button>`
              : ""
          }

        </div>

        ${
          recentTools.length
            ? `
              <div class="recent-dashboard-grid">
                ${recentTools.map(createDashboardToolCard).join("")}
              </div>
            `
            : `
              <div class="dashboard-empty">
                <div>🕘</div>
                <h4>No recently used tools</h4>
                <p>Tools you visit will appear here.</p>
              </div>
            `
        }

      </section>

    </div>
  `;

  const clearButton = document.getElementById("clearRecentButton");

  if (clearButton) {
    clearButton.addEventListener("click", clearRecentlyUsed);
  }

  document.querySelectorAll("[data-dashboard-search]").forEach(button => {
    button.addEventListener("click", () => {

      const query = button.dataset.dashboardSearch;

      if (searchInput) {
        searchInput.value = query;
      }

      performSearch();

    });
  });
}


/* =========================================================
   SEARCH ACTION
   ========================================================= */

function performSearch() {
  const query = searchInput ? searchInput.value.trim() : "";

  const results = searchTools(query);

  renderTools(results);

  if (suggestions) {
    suggestions.innerHTML = "";
  }

  const toolsSection = document.getElementById("tools");

  if (toolsSection) {
    toolsSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


/* =========================================================
   LIVE SUGGESTIONS
   ========================================================= */

function showSuggestions() {
  if (!searchInput || !suggestions) return;

  const query = searchInput.value.trim();

  if (!query) {
    suggestions.innerHTML = "";
    return;
  }

  const results = searchTools(query).slice(0, 5);

  suggestions.innerHTML = results
    .map(tool => `
      <button
        class="suggestion-item"
        data-suggestion="${escapeHTML(tool.name)}"
      >
        <span>${tool.icon}</span>
        <span>${escapeHTML(tool.name)}</span>
        <small>${escapeHTML(tool.category)}</small>
      </button>
    `)
    .join("");
}


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
      .map(category => `
        <option value="${escapeHTML(category)}">
          ${escapeHTML(category)}
        </option>
      `)
      .join("")}
  `;
}

function filterByCategory() {
  if (!categoryFilter) return;

  const category = categoryFilter.value;

  if (category === "all") {
    renderTools(
      searchInput?.value
        ? searchTools(searchInput.value)
        : tools.slice(0, 10)
    );
    return;
  }

  const filtered = tools.filter(tool => tool.category === category);

  renderTools(filtered.slice(0, 10));
}


/* =========================================================
   EVENTS
   ========================================================= */

if (searchButton) {
  searchButton.addEventListener("click", performSearch);
}

if (searchInput) {

  searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      performSearch();
    }
  });

  searchInput.addEventListener("input", showSuggestions);
}

if (categoryFilter) {
  categoryFilter.addEventListener("change", filterByCategory);
}


/* =========================================================
   GLOBAL CLICK HANDLER
   ========================================================= */

document.addEventListener("click", event => {

  const favoriteButton = event.target.closest("[data-favorite]");

  if (favoriteButton) {

    event.preventDefault();
    event.stopPropagation();

    toggleFavorite(favoriteButton.dataset.favorite);

    return;
  }


  const visitLink = event.target.closest("[data-visit]");

  if (visitLink) {

    addRecentlyVisited(visitLink.dataset.visit);

    return;
  }


  const suggestion = event.target.closest("[data-suggestion]");

  if (suggestion) {

    const toolName = suggestion.dataset.suggestion;
    const tool = tools.find(item => item.name === toolName);

    if (tool && searchInput) {
      searchInput.value = tool.name;
      performSearch();
    }

    return;
  }

});


/* =========================================================
   QUICK SEARCH
   ========================================================= */

document.querySelectorAll(".quick-search").forEach(button => {

  button.addEventListener("click", () => {

    const query =
      button.dataset.query ||
      button.dataset.search ||
      "";

    if (searchInput) {
      searchInput.value = query;
    }

    performSearch();

  });

});


/* =========================================================
   CATEGORIES MENU
   ========================================================= */

function openCategories() {

  if (!categoriesOverlay) return;

  categoriesOverlay.classList.add("active");
  categoriesOverlay.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}

function closeCategories() {

  if (!categoriesOverlay) return;

  categoriesOverlay.classList.remove("active");
  categoriesOverlay.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");
}

[
  categoriesButton,
  categoriesButtonHero,
  footerCategoriesButton
].forEach(button => {

  if (button) {
    button.addEventListener("click", openCategories);
  }

});

if (categoriesClose) {
  categoriesClose.addEventListener("click", closeCategories);
}

if (categoriesOverlay) {

  categoriesOverlay.addEventListener("click", event => {

    if (event.target === categoriesOverlay) {
      closeCategories();
    }

  });

}

document.querySelectorAll(".category-card").forEach(button => {

  button.addEventListener("click", () => {

    const category = button.dataset.category;

    closeCategories();

    if (category === "all") {

      if (categoryFilter) {
        categoryFilter.value = "all";
      }

      renderTools(tools.slice(0, 10));

      return;
    }

    if (categoryFilter) {
      categoryFilter.value = category;
    }

    const filtered = tools.filter(
      tool => tool.category === category
    );

    renderTools(filtered.slice(0, 10));

    const toolsSection = document.getElementById("tools");

    if (toolsSection) {
      toolsSection.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});


/* =========================================================
   MOBILE NAV
   ========================================================= */

if (menuButton && navLinks) {

  menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuButton.setAttribute(
      "aria-expanded",
      navLinks.classList.contains("active")
    );

  });

}


/* =========================================================
   THEME
   ========================================================= */

function applyTheme(theme) {

  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

}

const savedTheme = localStorage.getItem("tztools_theme");

if (savedTheme) {
  applyTheme(savedTheme);
}

if (themeToggle) {

  themeToggle.addEventListener("click", () => {

    const dark =
      document.body.classList.toggle("dark-mode");

    localStorage.setItem(
      "tztools_theme",
      dark ? "dark" : "light"
    );

  });

}


/* =========================================================
   ESCAPE
   ========================================================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeCategories();
  }

});


/* =========================================================
   V6.5 DASHBOARD STYLES
   ========================================================= */

const v65Styles = document.createElement("style");

v65Styles.textContent = `

.dashboard-inner {
  width: 100%;
}

.dashboard-header {
  margin-bottom: 30px;
}

.dashboard-header h2 {
  margin-bottom: 8px;
}

.dashboard-header p {
  opacity: 0.7;
}


/* STATS */

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 45px;
}

.dashboard-stat {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px;
  border-radius: 18px;
  background: rgba(127, 127, 127, 0.08);
  border: 1px solid rgba(127, 127, 127, 0.12);
}

.dashboard-stat-icon {
  font-size: 28px;
}

.dashboard-stat strong {
  display: block;
  font-size: 25px;
  line-height: 1.1;
}

.dashboard-stat span {
  display: block;
  margin-top: 5px;
  font-size: 13px;
  opacity: 0.65;
}


/* SECTIONS */

.dashboard-section {
  margin-bottom: 48px;
}

.dashboard-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.dashboard-section-header h3 {
  margin: 0 0 5px;
}

.dashboard-section-header p {
  margin: 0;
  opacity: 0.65;
}

.dashboard-count {
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(127, 127, 127, 0.12);
  font-size: 13px;
  font-weight: 700;
}


/* QUICK ACTIONS */

.dashboard-actions {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.dashboard-action {
  text-align: left;
  border: 1px solid rgba(127, 127, 127, 0.14);
  background: rgba(127, 127, 127, 0.07);
  border-radius: 18px;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}

.dashboard-action:hover {
  transform: translateY(-3px);
  background: rgba(127, 127, 127, 0.13);
}

.dashboard-action span {
  display: block;
  font-size: 28px;
  margin-bottom: 13px;
}

.dashboard-action strong {
  display: block;
  font-size: 15px;
}

.dashboard-action small {
  display: block;
  margin-top: 5px;
  opacity: 0.6;
}


/* TOOL GRIDS */

.favorites-dashboard-grid,
.recent-dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.dashboard-tool-card {
  position: relative;
}


/* EMPTY */

.dashboard-empty {
  padding: 45px 25px;
  text-align: center;
  border: 1px dashed rgba(127, 127, 127, 0.35);
  border-radius: 20px;
}

.dashboard-empty > div {
  font-size: 40px;
  margin-bottom: 10px;
}

.dashboard-empty h4 {
  margin: 0 0 8px;
  font-size: 20px;
}

.dashboard-empty p {
  margin: 0;
  opacity: 0.65;
}


/* FAVORITES */

.favorite-button {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 50%;
  background: rgba(127, 127, 127, 0.12);
  cursor: pointer;
  font-size: 22px;
  line-height: 1;
  z-index: 5;
  transition: transform 0.2s ease;
}

.favorite-button:hover {
  transform: scale(1.1);
}

.favorite-button.active {
  background: rgba(255, 190, 0, 0.16);
}


/* CLEAR */

.clear-recent-button {
  border: 0;
  background: rgba(127, 127, 127, 0.12);
  padding: 9px 15px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
}

.clear-recent-button:hover {
  background: rgba(127, 127, 127, 0.2);
}


/* EMPTY SEARCH */

.empty-state {
  width: 100%;
  text-align: center;
  padding: 50px 20px;
}


/* MOBILE */

@media (max-width: 850px) {

  .dashboard-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .dashboard-actions {
    grid-template-columns: repeat(2, 1fr);
  }

}

@media (max-width: 550px) {

  .dashboard-stats {
    grid-template-columns: 1fr;
  }

  .dashboard-actions {
    grid-template-columns: 1fr;
  }

  .favorites-dashboard-grid,
  .recent-dashboard-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-section-header {
    align-items: flex-start;
  }

}

`;

document.head.appendChild(v65Styles);


/* =========================================================
   INITIALIZE
   ========================================================= */

populateCategoryFilter();

renderTools(tools.slice(0, 10));

renderDashboard();

console.log("TzTools V6.5 loaded successfully 🚀");
