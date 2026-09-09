/* =========================================================
   TzTools V6.3
   Favorites System
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     TOOL DATABASE
     ========================================================= */

  const tools = [

    // AI
    {
      id: "chatgpt",
      name: "ChatGPT",
      category: "AI",
      icon: "🤖",
      description: "AI assistant for questions, writing, coding, learning and more.",
      rating: 4.9,
      pricing: "Freemium",
      url: "https://chatgpt.com/",
      keywords: ["ai", "chat", "assistant", "questions", "writing", "coding", "study"]
    },
    {
      id: "gemini",
      name: "Google Gemini",
      category: "AI",
      icon: "✨",
      description: "Google's AI assistant for research, writing, ideas and productivity.",
      rating: 4.8,
      pricing: "Freemium",
      url: "https://gemini.google.com/",
      keywords: ["ai", "google", "assistant", "research", "writing"]
    },
    {
      id: "claude",
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
      id: "copilot",
      name: "Microsoft Copilot",
      category: "AI",
      icon: "🪟",
      description: "AI assistant for research, writing, ideas and everyday tasks.",
      rating: 4.7,
      pricing: "Freemium",
      url: "https://copilot.microsoft.com/",
      keywords: ["ai", "microsoft", "assistant", "research"]
    },
    {
      id: "perplexity",
      name: "Perplexity",
      category: "AI",
      icon: "🔎",
      description: "AI-powered answer engine for research and web-based questions.",
      rating: 4.7,
      pricing: "Freemium",
      url: "https://www.perplexity.ai/",
      keywords: ["ai", "research", "search", "answers"]
    },

    // Design
    {
      id: "canva",
      name: "Canva",
      category: "Design",
      icon: "🎨",
      description: "Create logos, posters, presentations, social posts and graphics.",
      rating: 4.8,
      pricing: "Freemium",
      url: "https://www.canva.com/",
      keywords: ["design", "logo", "poster", "graphics", "presentation", "social"]
    },
    {
      id: "adobe-express",
      name: "Adobe Express",
      category: "Design",
      icon: "🅰️",
      description: "Quickly create graphics, flyers, social posts and visual content.",
      rating: 4.7,
      pricing: "Freemium",
      url: "https://www.adobe.com/express/",
      keywords: ["design", "logo", "graphics", "flyer", "social"]
    },
    {
      id: "figma",
      name: "Figma",
      category: "Design",
      icon: "🟣",
      description: "Collaborative design and prototyping platform for digital products.",
      rating: 4.8,
      pricing: "Freemium",
      url: "https://www.figma.com/",
      keywords: ["design", "ui", "ux", "prototype", "website", "app"]
    },
    {
      id: "photopea",
      name: "Photopea",
      category: "Design",
      icon: "🖼️",
      description: "Powerful browser-based image editor with Photoshop-style tools.",
      rating: 4.7,
      pricing: "Free",
      url: "https://www.photopea.com/",
      keywords: ["design", "photoshop", "image", "edit", "graphics"]
    },
    {
      id: "pixlr",
      name: "Pixlr",
      category: "Design",
      icon: "✨",
      description: "Online photo editor for quick and creative image editing.",
      rating: 4.6,
      pricing: "Freemium",
      url: "https://pixlr.com/",
      keywords: ["design", "photo", "image", "edit", "graphics"]
    },

    // Video
    {
      id: "capcut",
      name: "CapCut",
      category: "Video",
      icon: "🎬",
      description: "Easy video editor for social media, TikTok, YouTube and more.",
      rating: 4.8,
      pricing: "Freemium",
      url: "https://www.capcut.com/",
      keywords: ["video", "edit", "tiktok", "youtube", "shorts", "social"]
    },
    {
      id: "davinci",
      name: "DaVinci Resolve",
      category: "Video",
      icon: "🎥",
      description: "Professional video editing, color grading, effects and audio.",
      rating: 4.9,
      pricing: "Free",
      url: "https://www.blackmagicdesign.com/products/davinciresolve",
      keywords: ["video", "editing", "professional", "color", "film"]
    },
    {
      id: "veed",
      name: "VEED",
      category: "Video",
      icon: "📹",
      description: "Browser-based video editor with captions, effects and social tools.",
      rating: 4.6,
      pricing: "Freemium",
      url: "https://www.veed.io/",
      keywords: ["video", "edit", "captions", "social", "youtube"]
    },
    {
      id: "clipchamp",
      name: "Clipchamp",
      category: "Video",
      icon: "✂️",
      description: "Simple video editor from Microsoft for creating and editing videos.",
      rating: 4.5,
      pricing: "Freemium",
      url: "https://clipchamp.com/",
      keywords: ["video", "edit", "microsoft", "windows"]
    },
    {
      id: "invideo",
      name: "InVideo",
      category: "Video",
      icon: "🎞️",
      description: "Create videos using templates and AI-powered video tools.",
      rating: 4.6,
      pricing: "Freemium",
      url: "https://invideo.io/",
      keywords: ["video", "ai", "youtube", "social", "templates"]
    },

    // Writing
    {
      id: "grammarly",
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
      id: "quillbot",
      name: "QuillBot",
      category: "Writing",
      icon: "📝",
      description: "Paraphrasing, summarizing and writing assistance tool.",
      rating: 4.6,
      pricing: "Freemium",
      url: "https://quillbot.com/",
      keywords: ["writing", "paraphrase", "summarize", "essay"]
    },
    {
      id: "google-docs",
      name: "Google Docs",
      category: "Writing",
      icon: "📄",
      description: "Online document editor for writing and collaboration.",
      rating: 4.8,
      pricing: "Free",
      url: "https://docs.google.com/",
      keywords: ["writing", "document", "essay", "school", "document"]
    },
    {
      id: "languagetool",
      name: "LanguageTool",
      category: "Writing",
      icon: "🔤",
      description: "Grammar, spelling and style checker for your writing.",
      rating: 4.6,
      pricing: "Freemium",
      url: "https://languagetool.org/",
      keywords: ["writing", "grammar", "spelling", "english"]
    },
    {
      id: "hemingway",
      name: "Hemingway Editor",
      category: "Writing",
      icon: "📚",
      description: "Improve readability and make writing clearer and simpler.",
      rating: 4.5,
      pricing: "Freemium",
      url: "https://hemingwayapp.com/",
      keywords: ["writing", "essay", "readability", "english"]
    },

    // Websites
    {
      id: "wordpress",
      name: "WordPress",
      category: "Websites",
      icon: "🌐",
      description: "Build websites and blogs using one of the world's biggest platforms.",
      rating: 4.7,
      pricing: "Freemium",
      url: "https://wordpress.com/",
      keywords: ["website", "blog", "web", "site"]
    },
    {
      id: "wix",
      name: "Wix",
      category: "Websites",
      icon: "🌐",
      description: "Create websites with an easy visual website builder.",
      rating: 4.6,
      pricing: "Freemium",
      url: "https://www.wix.com/",
      keywords: ["website", "web", "site", "business"]
    },
    {
      id: "framer",
      name: "Framer",
      category: "Websites",
      icon: "⚡",
      description: "Design and publish modern websites with a visual builder.",
      rating: 4.7,
      pricing: "Freemium",
      url: "https://www.framer.com/",
      keywords: ["website", "design", "web", "portfolio"]
    },
    {
      id: "webflow",
      name: "Webflow",
      category: "Websites",
      icon: "🌊",
      description: "Professional visual website builder with advanced control.",
      rating: 4.7,
      pricing: "Freemium",
      url: "https://webflow.com/",
      keywords: ["website", "web", "design", "professional"]
    },
    {
      id: "carrd",
      name: "Carrd",
      category: "Websites",
      icon: "🪪",
      description: "Create simple, responsive one-page websites quickly.",
      rating: 4.6,
      pricing: "Freemium",
      url: "https://carrd.co/",
      keywords: ["website", "landing", "portfolio", "one page"]
    },
    {
      id: "github-pages",
      name: "GitHub Pages",
      category: "Websites",
      icon: "🐙",
      description: "Free hosting for websites directly from GitHub repositories.",
      rating: 4.8,
      pricing: "Free",
      url: "https://pages.github.com/",
      keywords: ["website", "hosting", "github", "coding", "free"]
    },

    // Students
    {
      id: "khan-academy",
      name: "Khan Academy",
      category: "Students",
      icon: "🎓",
      description: "Free educational lessons and practice across many subjects.",
      rating: 4.9,
      pricing: "Free",
      url: "https://www.khanacademy.org/",
      keywords: ["study", "school", "math", "science", "education"]
    },
    {
      id: "wolframalpha",
      name: "WolframAlpha",
      category: "Students",
      icon: "🧮",
      description: "Computational engine for maths, science and factual questions.",
      rating: 4.8,
      pricing: "Freemium",
      url: "https://www.wolframalpha.com/",
      keywords: ["math", "study", "science", "calculation"]
    },
    {
      id: "quizlet",
      name: "Quizlet",
      category: "Students",
      icon: "🃏",
      description: "Study using flashcards, quizzes and learning activities.",
      rating: 4.7,
      pricing: "Freemium",
      url: "https://quizlet.com/",
      keywords: ["study", "flashcards", "school", "quiz"]
    },
    {
      id: "desmos",
      name: "Desmos",
      category: "Students",
      icon: "📈",
      description: "Powerful online graphing calculator for mathematics.",
      rating: 4.8,
      pricing: "Free",
      url: "https://www.desmos.com/",
      keywords: ["math", "graph", "calculator", "school"]
    },
    {
      id: "geogebra",
      name: "GeoGebra",
      category: "Students",
      icon: "📐",
      description: "Interactive mathematics tools for geometry, algebra and graphs.",
      rating: 4.8,
      pricing: "Free",
      url: "https://www.geogebra.org/",
      keywords: ["math", "geometry", "algebra", "graph"]
    },
    {
      id: "google-scholar",
      name: "Google Scholar",
      category: "Students",
      icon: "🎓",
      description: "Search engine for academic papers and scholarly research.",
      rating: 4.7,
      pricing: "Free",
      url: "https://scholar.google.com/",
      keywords: ["study", "research", "school", "academic"]
    },

    // Productivity
    {
      id: "notion",
      name: "Notion",
      category: "Productivity",
      icon: "📓",
      description: "Workspace for notes, planning, projects and organization.",
      rating: 4.8,
      pricing: "Freemium",
      url: "https://www.notion.com/",
      keywords: ["productivity", "notes", "planning", "tasks", "school"]
    },
    {
      id: "trello",
      name: "Trello",
      category: "Productivity",
      icon: "📋",
      description: "Visual project and task management using boards and cards.",
      rating: 4.7,
      pricing: "Freemium",
      url: "https://trello.com/",
      keywords: ["productivity", "tasks", "project", "planning"]
    },
    {
      id: "todoist",
      name: "Todoist",
      category: "Productivity",
      icon: "✅",
      description: "Task manager for organizing your daily work and goals.",
      rating: 4.7,
      pricing: "Freemium",
      url: "https://todoist.com/",
      keywords: ["productivity", "todo", "tasks", "planning"]
    },
    {
      id: "asana",
      name: "Asana",
      category: "Productivity",
      icon: "📊",
      description: "Project management platform for teams and personal planning.",
      rating: 4.6,
      pricing: "Freemium",
      url: "https://asana.com/",
      keywords: ["productivity", "project", "tasks", "team"]
    },
    {
      id: "google-keep",
      name: "Google Keep",
      category: "Productivity",
      icon: "🗒️",
      description: "Quick notes, lists and reminders from Google.",
      rating: 4.6,
      pricing: "Free",
      url: "https://keep.google.com/",
      keywords: ["notes", "productivity", "reminders", "school"]
    },

    // Images
    {
      id: "remove-bg",
      name: "Remove.bg",
      category: "Images",
      icon: "✂️",
      description: "Automatically remove backgrounds from images.",
      rating: 4.7,
      pricing: "Freemium",
      url: "https://www.remove.bg/",
      keywords: ["image", "background", "remove", "photo"]
    },
    {
      id: "tinypng",
      name: "TinyPNG",
      category: "Images",
      icon: "🐼",
      description: "Compress PNG and JPEG images while reducing file size.",
      rating: 4.7,
      pricing: "Freemium",
      url: "https://tinypng.com/",
      keywords: ["image", "compress", "png", "jpeg", "photo"]
    },
    {
      id: "unsplash",
      name: "Unsplash",
      category: "Images",
      icon: "📷",
      description: "Find free high-quality photos and visual inspiration.",
      rating: 4.8,
      pricing: "Free",
      url: "https://unsplash.com/",
      keywords: ["image", "photo", "pictures", "background"]
    },
    {
      id: "pexels",
      name: "Pexels",
      category: "Images",
      icon: "📸",
      description: "Free stock photos and videos for creative projects.",
      rating: 4.8,
      pricing: "Free",
      url: "https://www.pexels.com/",
      keywords: ["image", "photo", "video", "stock", "background"]
    },

    // Audio
    {
      id: "audacity",
      name: "Audacity",
      category: "Audio",
      icon: "🎙️",
      description: "Free audio recording and editing software.",
      rating: 4.7,
      pricing: "Free",
      url: "https://www.audacityteam.org/",
      keywords: ["audio", "music", "record", "edit", "sound"]
    },
    {
      id: "bandlab",
      name: "BandLab",
      category: "Audio",
      icon: "🎵",
      description: "Online music creation, recording and collaboration platform.",
      rating: 4.7,
      pricing: "Free",
      url: "https://www.bandlab.com/",
      keywords: ["audio", "music", "record", "song", "beat"]
    },

    // PDF
    {
      id: "smallpdf",
      name: "Smallpdf",
      category: "PDF & Documents",
      icon: "📄",
      description: "Online tools for editing, converting, compressing and managing PDFs.",
      rating: 4.7,
      pricing: "Freemium",
      url: "https://smallpdf.com/",
      keywords: ["pdf", "document", "convert", "compress", "merge"]
    },
    {
      id: "ilovepdf",
      name: "iLovePDF",
      category: "PDF & Documents",
      icon: "❤️",
      description: "Complete collection of tools for working with PDF documents.",
      rating: 4.8,
      pricing: "Freemium",
      url: "https://www.ilovepdf.com/",
      keywords: ["pdf", "document", "merge", "convert", "compress"]
    },
    {
      id: "pdf24",
      name: "PDF24",
      category: "PDF & Documents",
      icon: "📑",
      description: "Free online PDF tools for editing and converting documents.",
      rating: 4.7,
      pricing: "Free",
      url: "https://tools.pdf24.org/",
      keywords: ["pdf", "document", "convert", "edit", "merge"]
    }
  ];


  /* =========================================================
     ELEMENTS
     ========================================================= */

  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const suggestions = document.getElementById("suggestions");
  const toolsGrid = document.getElementById("toolsGrid");
  const categoryFilter = document.getElementById("categoryFilter");

  const categoriesOverlay =
    document.getElementById("categoriesOverlay");

  const categoriesButton =
    document.getElementById("categoriesButton");

  const categoriesButtonHero =
    document.getElementById("categoriesButtonHero");

  const footerCategoriesButton =
    document.getElementById("footerCategoriesButton");

  const categoriesClose =
    document.getElementById("categoriesClose");

  const menuButton =
    document.getElementById("menuButton");

  const navLinks =
    document.getElementById("navLinks");

  const themeToggle =
    document.getElementById("themeToggle");


  /* =========================================================
     FAVORITES STORAGE
     ========================================================= */

  const FAVORITES_KEY = "tztools_favorites";

  function getFavorites() {
    try {
      return JSON.parse(
        localStorage.getItem(FAVORITES_KEY)
      ) || [];
    } catch {
      return [];
    }
  }

  function saveFavorites(favorites) {
    localStorage.setItem(
      FAVORITES_KEY,
      JSON.stringify(favorites)
    );
  }

  function isFavorite(toolId) {
    return getFavorites().includes(toolId);
  }

  function toggleFavorite(toolId) {

    const favorites = getFavorites();

    const index = favorites.indexOf(toolId);

    if (index === -1) {
      favorites.push(toolId);
    } else {
      favorites.splice(index, 1);
    }

    saveFavorites(favorites);

    renderCurrentResults();

    updateFavoritesDashboard();
  }


  /* =========================================================
     SMART SEARCH
     ========================================================= */

  const intentGroups = {

    logo: [
      "logo",
      "logos",
      "brand",
      "branding",
      "business logo"
    ],

    design: [
      "design",
      "graphic",
      "graphics",
      "poster",
      "flyer",
      "banner",
      "thumbnail",
      "social post"
    ],

    video: [
      "video",
      "edit video",
      "video editing",
      "tiktok",
      "youtube",
      "reels",
      "shorts",
      "movie"
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

    website: [
      "website",
      "web",
      "site",
      "blog",
      "portfolio",
      "landing page"
    ],

    study: [
      "study",
      "school",
      "learn",
      "homework",
      "exam",
      "revision",
      "education"
    ],

    math: [
      "math",
      "mathematics",
      "algebra",
      "geometry",
      "equation",
      "calculation",
      "graph"
    ],

    ai: [
      "ai",
      "artificial intelligence",
      "chatbot",
      "assistant",
      "ask ai"
    ],

    productivity: [
      "productivity",
      "tasks",
      "todo",
      "organize",
      "planning",
      "notes",
      "project"
    ],

    image: [
      "image",
      "photo",
      "picture",
      "background",
      "compress image",
      "remove background"
    ],

    audio: [
      "audio",
      "music",
      "song",
      "record",
      "sound",
      "podcast"
    ],

    pdf: [
      "pdf",
      "document",
      "documents",
      "merge pdf",
      "compress pdf",
      "convert pdf"
    ]
  };


  function normalizeText(text) {

    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s]/g, " ")
      .replace(/\s+/g, " ");
  }


  function detectIntents(query) {

    const text = normalizeText(query);

    const detected = [];

    for (const [intent, words] of Object.entries(intentGroups)) {

      if (
        words.some(word =>
          text.includes(normalizeText(word))
        )
      ) {
        detected.push(intent);
      }
    }

    return detected;
  }


  function scoreTool(tool, query, intents) {

    const text = normalizeText(query);

    if (!text) return 0;

    const words = text.split(" ");

    let score = 0;

    const toolName = normalizeText(tool.name);
    const description = normalizeText(tool.description);
    const keywordText = tool.keywords
      .map(normalizeText)
      .join(" ");

    // Exact tool name
    if (toolName === text) {
      score += 100;
    }

    // Tool name contains query
    if (toolName.includes(text)) {
      score += 60;
    }

    // Individual words
    words.forEach(word => {

      if (word.length < 2) return;

      if (toolName.includes(word)) {
        score += 20;
      }

      if (keywordText.includes(word)) {
        score += 12;
      }

      if (description.includes(word)) {
        score += 5;
      }
    });


    // Intent matching
    const category = normalizeText(tool.category);

    intents.forEach(intent => {

      if (intent === "logo" && tool.category === "Design") {
        score += 35;
      }

      if (intent === "design" && tool.category === "Design") {
        score += 30;
      }

      if (intent === "video" && tool.category === "Video") {
        score += 35;
      }

      if (intent === "writing" && tool.category === "Writing") {
        score += 35;
      }

      if (intent === "website" && tool.category === "Websites") {
        score += 35;
      }

      if (intent === "study" && tool.category === "Students") {
        score += 35;
      }

      if (intent === "math" &&
          ["Students"].includes(tool.category)) {
        score += 30;
      }

      if (intent === "ai" && tool.category === "AI") {
        score += 35;
      }

      if (
        intent === "productivity" &&
        tool.category === "Productivity"
      ) {
        score += 35;
      }

      if (
        intent === "image" &&
        tool.category === "Images"
      ) {
        score += 35;
      }

      if (
        intent === "audio" &&
        tool.category === "Audio"
      ) {
        score += 35;
      }

      if (
        intent === "pdf" &&
        tool.category === "PDF & Documents"
      ) {
        score += 35;
      }
    });

    return score;
  }


  function searchTools(query) {

    const text = normalizeText(query);

    if (!text) {
      return tools;
    }

    const intents = detectIntents(text);

    return tools
      .map(tool => ({
        tool,
        score: scoreTool(tool, text, intents)
      }))
      .filter(result => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map(result => result.tool);
  }


  /* =========================================================
     TOOL CARD
     ========================================================= */

  function createToolCard(tool) {

    const favorite = isFavorite(tool.id);

    const card = document.createElement("article");

    card.className = "tool-card";

    card.innerHTML = `

      <div class="tool-card-top">

        <div class="tool-icon">
          ${tool.icon}
        </div>

        <button
          class="favorite-button ${favorite ? "active" : ""}"
          data-favorite="${tool.id}"
          aria-label="${favorite ? "Remove from favorites" : "Add to favorites"}"
          title="${favorite ? "Remove from favorites" : "Add to favorites"}"
        >
          ${favorite ? "★" : "☆"}
        </button>

      </div>

      <div class="tool-info">

        <h3>${tool.name}</h3>

        <span class="tool-category">
          ${tool.category}
        </span>

        <p class="tool-description">
          ${tool.description}
        </p>

      </div>

      <div class="tool-meta">

        <span>⭐ ${tool.rating}</span>

        <span>${tool.pricing}</span>

      </div>

      <a
        class="tool-button"
        href="${tool.url}"
        target="_blank"
        rel="noopener noreferrer"
        data-visit="${tool.id}"
      >
        Visit Tool →
      </a>

    `;

    return card;
  }


  /* =========================================================
     RENDER TOOLS
     ========================================================= */

  let currentResults = [...tools];


  function renderTools(toolList, heading = "") {

    if (!toolsGrid) return;

    toolsGrid.innerHTML = "";

    if (heading) {

      const resultHeading =
        document.createElement("div");

      resultHeading.className =
        "search-result-heading";

      resultHeading.innerHTML = `
        <h2>${heading}</h2>
        <p>${toolList.length} relevant tools found</p>
      `;

      toolsGrid.appendChild(resultHeading);
    }

    if (!toolList.length) {

      const empty = document.createElement("div");

      empty.className = "empty-state";

      empty.innerHTML = `
        <div>🔎</div>
        <h3>No tools found</h3>
        <p>
          Try searching for something like
          "make a logo", "edit videos" or "study maths".
        </p>
      `;

      toolsGrid.appendChild(empty);

      return;
    }

    toolList.forEach(tool => {

      toolsGrid.appendChild(
        createToolCard(tool)
      );

    });
  }


  function renderCurrentResults() {

    renderTools(
      currentResults,
      currentResults.length < tools.length
        ? "Search Results"
        : ""
    );
  }


  /* =========================================================
     SEARCH
     ========================================================= */

  function performSearch(query) {

    const cleanQuery = query.trim();

    if (!cleanQuery) {

      currentResults = [...tools];

      renderTools(tools);

      hideSuggestions();

      return;
    }

    currentResults = searchTools(cleanQuery);

    renderTools(
      currentResults,
      `Results for "${cleanQuery}"`
    );

    hideSuggestions();

    const toolsSection =
      document.getElementById("tools");

    if (toolsSection) {
      toolsSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  }


  if (searchButton) {

    searchButton.addEventListener("click", () => {

      performSearch(
        searchInput ? searchInput.value : ""
      );

    });
  }


  if (searchInput) {

    searchInput.addEventListener("keydown", event => {

      if (event.key === "Enter") {

        event.preventDefault();

        performSearch(searchInput.value);

      }

    });


    searchInput.addEventListener("input", () => {

      showSuggestions(
        searchInput.value
      );

    });
  }


  /* =========================================================
     SUGGESTIONS
     ========================================================= */

  function showSuggestions(query) {

    if (!suggestions) return;

    const text = query.trim();

    if (!text) {

      hideSuggestions();

      return;
    }

    const results =
      searchTools(text).slice(0, 5);

    suggestions.innerHTML = "";

    if (!results.length) {

      hideSuggestions();

      return;
    }

    results.forEach(tool => {

      const item =
        document.createElement("button");

      item.className =
        "suggestion-item";

      item.innerHTML = `
        <span>${tool.icon}</span>
        <span>
          <strong>${tool.name}</strong>
          <small>${tool.category}</small>
        </span>
      `;

      item.addEventListener("click", () => {

        searchInput.value = tool.name;

        performSearch(tool.name);

      });

      suggestions.appendChild(item);

    });

    suggestions.classList.add("show");
  }


  function hideSuggestions() {

    if (!suggestions) return;

    suggestions.innerHTML = "";

    suggestions.classList.remove("show");
  }


  /* =========================================================
     FAVORITE BUTTON EVENTS
     ========================================================= */

  if (toolsGrid) {

    toolsGrid.addEventListener("click", event => {

      const button =
        event.target.closest("[data-favorite]");

      if (!button) return;

      event.preventDefault();

      const toolId =
        button.dataset.favorite;

      toggleFavorite(toolId);

    });


    toolsGrid.addEventListener("click", event => {

      const visitLink =
        event.target.closest("[data-visit]");

      if (!visitLink) return;

      const toolId =
        visitLink.dataset.visit;

      addRecentlyVisited(toolId);

    });
  }


  /* =========================================================
     DYNAMIC CATEGORY FILTER
     ========================================================= */

  function setupCategoryFilter() {

    if (!categoryFilter) return;

    const currentValue =
      categoryFilter.value || "all";

    const categories = [
      ...new Set(
        tools.map(tool => tool.category)
      )
    ].sort();

    categoryFilter.innerHTML = `
      <option value="all">
        All Categories
      </option>
    `;

    categories.forEach(category => {

      const option =
        document.createElement("option");

      option.value = category;

      option.textContent = category;

      categoryFilter.appendChild(option);

    });

    if (
      categories.includes(currentValue)
    ) {
      categoryFilter.value =
        currentValue;
    }
  }


  if (categoryFilter) {

    categoryFilter.addEventListener(
      "change",
      () => {

        const category =
          categoryFilter.value;

        if (category === "all") {

          currentResults = [...tools];

          renderTools(tools);

          return;
        }

        currentResults =
          tools.filter(
            tool => tool.category === category
          );

        renderTools(
          currentResults,
          category
        );

      }
    );
  }


  /* =========================================================
     QUICK SEARCH
     ========================================================= */

  document.querySelectorAll(
    ".quick-search"
  ).forEach(button => {

    button.addEventListener("click", () => {

      const query =
        button.dataset.query ||
        button.textContent;

      if (searchInput) {
        searchInput.value = query;
      }

      performSearch(query);

    });

  });


  /* =========================================================
     CATEGORIES POPUP
     ========================================================= */

  function openCategories() {

    if (!categoriesOverlay) return;

    categoriesOverlay.classList.add("show");

    document.body.classList.add(
      "modal-open"
    );
  }


  function closeCategories() {

    if (!categoriesOverlay) return;

    categoriesOverlay.classList.remove("show");

    document.body.classList.remove(
      "modal-open"
    );
  }


  [
    categoriesButton,
    categoriesButtonHero,
    footerCategoriesButton
  ].forEach(button => {

    if (button) {
      button.addEventListener(
        "click",
        openCategories
      );
    }

  });


  if (categoriesClose) {

    categoriesClose.addEventListener(
      "click",
      closeCategories
    );

  }


  if (categoriesOverlay) {

    categoriesOverlay.addEventListener(
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
  }


  document.querySelectorAll(
    ".category-card"
  ).forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const category =
          button.dataset.category;

        closeCategories();

        if (category === "all") {

          if (categoryFilter) {
            categoryFilter.value = "all";
          }

          currentResults = [...tools];

          renderTools(tools);

          return;
        }

        if (categoryFilter) {

          const exists =
            [...categoryFilter.options]
              .some(
                option =>
                  option.value === category
              );

          if (exists) {
            categoryFilter.value =
              category;
          }

        }

        currentResults =
          tools.filter(
            tool => tool.category === category
          );

        renderTools(
          currentResults,
          category
        );

        const toolsSection =
          document.getElementById("tools");

        if (toolsSection) {

          toolsSection.scrollIntoView({
            behavior: "smooth"
          });

        }

      }
    );

  });


  /* =========================================================
     MOBILE NAVIGATION
     ========================================================= */

  if (menuButton && navLinks) {

    menuButton.addEventListener(
      "click",
      () => {

        navLinks.classList.toggle(
          "show"
        );

      }
    );

  }


  /* =========================================================
     THEME
     ========================================================= */

  const savedTheme =
    localStorage.getItem(
      "tztools_theme"
    );

  if (savedTheme === "dark") {

    document.body.classList.add(
      "dark-mode"
    );

  }


  if (themeToggle) {

    themeToggle.addEventListener(
      "click",
      () => {

        document.body.classList.toggle(
          "dark-mode"
        );

        const dark =
          document.body.classList.contains(
            "dark-mode"
          );

        localStorage.setItem(
          "tztools_theme",
          dark ? "dark" : "light"
        );

      }
    );

  }


  /* =========================================================
     RECENTLY VISITED
     V6.4 PREPARATION
     ========================================================= */

  const RECENT_KEY =
    "tztools_recent";

  function addRecentlyVisited(toolId) {

    let recent = [];

    try {
      recent =
        JSON.parse(
          localStorage.getItem(
            RECENT_KEY
          )
        ) || [];
    } catch {
      recent = [];
    }

    recent =
      recent.filter(
        id => id !== toolId
      );

    recent.unshift(toolId);

    recent =
      recent.slice(0, 10);

    localStorage.setItem(
      RECENT_KEY,
      JSON.stringify(recent)
    );
  }


  /* =========================================================
     FAVORITES DASHBOARD
     ========================================================= */

  function createFavoritesDashboard() {

    const dashboard =
      document.getElementById(
        "dashboard"
      );

    if (!dashboard) return;

    dashboard.innerHTML = `

      <div class="dashboard-header">

        <p class="section-label">
          YOUR COLLECTION
        </p>

        <h2>
          Favorite Tools ⭐
        </h2>

        <p>
          Keep your favorite tools
          ready whenever you need them.
        </p>

      </div>

      <div
        id="favoritesDashboardGrid"
        class="tools-grid favorites-dashboard-grid"
      ></div>

    `;

    updateFavoritesDashboard();
  }


  function updateFavoritesDashboard() {

    const grid =
      document.getElementById(
        "favoritesDashboardGrid"
      );

    if (!grid) return;

    grid.innerHTML = "";

    const favoriteIds =
      getFavorites();

    const favoriteTools =
      favoriteIds
        .map(
          id =>
            tools.find(
              tool =>
                tool.id === id
            )
        )
        .filter(Boolean);

    if (!favoriteTools.length) {

      grid.innerHTML = `

        <div class="empty-state">

          <div>☆</div>

          <h3>
            No favorites yet
          </h3>

          <p>
            Tap the ☆ on any tool
            to save it here.
          </p>

          <button
            class="tool-button"
            id="browseToolsButton"
            type="button"
          >
            Browse Tools →
          </button>

        </div>

      `;

      const browse =
        document.getElementById(
          "browseToolsButton"
        );

      if (browse) {

        browse.addEventListener(
          "click",
          () => {

            const toolsSection =
              document.getElementById(
                "tools"
              );

            if (toolsSection) {

              toolsSection.scrollIntoView({
                behavior: "smooth"
              });

            }

          }
        );

      }

      return;
    }

    favoriteTools.forEach(tool => {

      grid.appendChild(
        createToolCard(tool)
      );

    });
  }


  /* =========================================================
     FAVORITES DASHBOARD CLICK HANDLING
     ========================================================= */

  document.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          "#favoritesDashboardGrid [data-favorite]"
        );

      if (!button) return;

      event.preventDefault();

      toggleFavorite(
        button.dataset.favorite
      );

    }
  );


  /* =========================================================
     ESCAPE KEY
     ========================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        hideSuggestions();

        closeCategories();

        if (navLinks) {
          navLinks.classList.remove(
            "show"
          );
        }

      }

    }
  );


  /* =========================================================
     CLICK OUTSIDE SEARCH SUGGESTIONS
     ========================================================= */

  document.addEventListener(
    "click",
    event => {

      if (
        searchInput &&
        suggestions &&
        !searchInput.contains(event.target) &&
        !suggestions.contains(event.target)
      ) {
        hideSuggestions();
      }

    }
  );


  /* =========================================================
     FAVORITES STYLING
     Added here so V6.3 works without
     needing another CSS replacement.
     ========================================================= */

  const favoriteStyles =
    document.createElement("style");

  favoriteStyles.textContent = `

    .tool-card-top {
      position: relative;
    }

    .favorite-button {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      border: 1px solid rgba(127, 127, 127, 0.25);
      background: transparent;
      cursor: pointer;
      font-size: 21px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        transform 0.2s ease,
        background 0.2s ease,
        color 0.2s ease;
    }

    .favorite-button:hover {
      transform: scale(1.08);
    }

    .favorite-button.active {
      color: #f5b700;
      background: rgba(245, 183, 0, 0.10);
    }

    .favorites-dashboard-grid {
      margin-top: 25px;
    }

    .dashboard-header {
      text-align: center;
      margin-bottom: 30px;
    }

    .dashboard-header h2 {
      margin: 8px 0;
    }

    .dashboard-header p {
      opacity: 0.75;
    }

    .modal-open {
      overflow: hidden;
    }

  `;

  document.head.appendChild(
    favoriteStyles
  );


  /* =========================================================
     INITIALIZE
     ========================================================= */

  setupCategoryFilter();

  renderTools(tools);

  createFavoritesDashboard();

});
