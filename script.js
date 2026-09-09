/* =========================================================
   TZTOOLS V6
   Smart Tool Finder
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     TOOL DATABASE
     ========================================================= */

  const tools = [

    // ================= AI =================

    {
      name: "ChatGPT",
      category: "AI",
      icon: "🤖",
      description: "AI assistant for writing, brainstorming, learning, coding and more.",
      pricing: "Freemium",
      rating: 4.8,
      url: "https://chatgpt.com/",
      keywords: [
        "ai", "chat", "assistant", "study", "writing",
        "coding", "brainstorm", "research", "questions"
      ]
    },

    {
      name: "Google Gemini",
      category: "AI",
      icon: "✨",
      description: "Google's AI assistant for answering questions, writing, research and ideas.",
      pricing: "Free",
      rating: 4.7,
      url: "https://gemini.google.com/",
      keywords: [
        "ai", "assistant", "google", "study", "research",
        "writing", "questions"
      ]
    },

    {
      name: "Claude",
      category: "AI",
      icon: "🧠",
      description: "AI assistant useful for writing, analysis, coding and long documents.",
      pricing: "Freemium",
      rating: 4.7,
      url: "https://claude.ai/",
      keywords: [
        "ai", "writing", "coding", "research",
        "analysis", "documents"
      ]
    },

    {
      name: "Microsoft Copilot",
      category: "AI",
      icon: "🪄",
      description: "AI assistant for answers, ideas, writing and productivity.",
      pricing: "Free",
      rating: 4.6,
      url: "https://copilot.microsoft.com/",
      keywords: [
        "ai", "assistant", "writing", "research",
        "ideas", "productivity"
      ]
    },

    {
      name: "Perplexity",
      category: "AI",
      icon: "🔎",
      description: "AI-powered search and research assistant for finding answers.",
      pricing: "Freemium",
      rating: 4.7,
      url: "https://www.perplexity.ai/",
      keywords: [
        "ai", "research", "search", "questions",
        "study", "information"
      ]
    },


    // ================= DESIGN =================

    {
      name: "Canva",
      category: "Design",
      icon: "🎨",
      description: "Create logos, posters, presentations, social posts and graphics.",
      pricing: "Freemium",
      rating: 4.8,
      url: "https://www.canva.com/",
      keywords: [
        "design", "logo", "poster", "graphics",
        "presentation", "social media", "thumbnail"
      ]
    },

    {
      name: "Adobe Express",
      category: "Design",
      icon: "🖌️",
      description: "Quickly create graphics, social posts, flyers and other visual content.",
      pricing: "Freemium",
      rating: 4.6,
      url: "https://www.adobe.com/express/",
      keywords: [
        "design", "logo", "graphics", "poster",
        "flyer", "social media"
      ]
    },

    {
      name: "Figma",
      category: "Design",
      icon: "🔷",
      description: "Professional collaborative design and interface design platform.",
      pricing: "Freemium",
      rating: 4.8,
      url: "https://www.figma.com/",
      keywords: [
        "design", "ui", "ux", "website",
        "app", "interface", "prototype"
      ]
    },

    {
      name: "Photopea",
      category: "Design",
      icon: "🖼️",
      description: "Browser-based image editor with powerful Photoshop-style features.",
      pricing: "Free",
      rating: 4.7,
      url: "https://www.photopea.com/",
      keywords: [
        "design", "photo", "image", "edit",
        "photoshop", "graphics"
      ]
    },

    {
      name: "Pixlr",
      category: "Design",
      icon: "🌈",
      description: "Online photo and graphic editor for quick creative projects.",
      pricing: "Freemium",
      rating: 4.5,
      url: "https://pixlr.com/",
      keywords: [
        "design", "photo", "image", "edit",
        "graphics"
      ]
    },


    // ================= VIDEO =================

    {
      name: "CapCut",
      category: "Video",
      icon: "🎬",
      description: "Easy video editor for social media, short videos and creative projects.",
      pricing: "Freemium",
      rating: 4.7,
      url: "https://www.capcut.com/",
      keywords: [
        "video", "edit", "editing", "reels",
        "shorts", "tiktok", "youtube"
      ]
    },

    {
      name: "DaVinci Resolve",
      category: "Video",
      icon: "🎞️",
      description: "Professional video editing, color grading, effects and audio tools.",
      pricing: "Free",
      rating: 4.8,
      url: "https://www.blackmagicdesign.com/products/davinciresolve",
      keywords: [
        "video", "editing", "professional",
        "film", "color", "effects"
      ]
    },

    {
      name: "VEED",
      category: "Video",
      icon: "📹",
      description: "Browser-based video editor with captions, effects and social tools.",
      pricing: "Freemium",
      rating: 4.5,
      url: "https://www.veed.io/",
      keywords: [
        "video", "edit", "captions",
        "subtitles", "social media"
      ]
    },

    {
      name: "Clipchamp",
      category: "Video",
      icon: "✂️",
      description: "Simple browser video editor for creating and editing videos.",
      pricing: "Freemium",
      rating: 4.5,
      url: "https://clipchamp.com/",
      keywords: [
        "video", "editing", "edit",
        "youtube", "social media"
      ]
    },

    {
      name: "InVideo",
      category: "Video",
      icon: "🎥",
      description: "Online video creation platform with templates and AI features.",
      pricing: "Freemium",
      rating: 4.5,
      url: "https://invideo.io/",
      keywords: [
        "video", "ai video", "editing",
        "youtube", "content"
      ]
    },


    // ================= WRITING =================

    {
      name: "Grammarly",
      category: "Writing",
      icon: "✍️",
      description: "Writing assistant for grammar, spelling, clarity and tone.",
      pricing: "Freemium",
      rating: 4.7,
      url: "https://www.grammarly.com/",
      keywords: [
        "writing", "grammar", "essay",
        "school", "proofreading"
      ]
    },

    {
      name: "QuillBot",
      category: "Writing",
      icon: "📝",
      description: "Writing assistant with paraphrasing, grammar and summarizing tools.",
      pricing: "Freemium",
      rating: 4.6,
      url: "https://quillbot.com/",
      keywords: [
        "writing", "paraphrase", "rewrite",
        "essay", "summarize"
      ]
    },

    {
      name: "Google Docs",
      category: "Writing",
      icon: "📄",
      description: "Online document editor for writing, editing and collaboration.",
      pricing: "Free",
      rating: 4.8,
      url: "https://docs.google.com/",
      keywords: [
        "writing", "document", "essay",
        "school", "notes", "collaboration"
      ]
    },

    {
      name: "LanguageTool",
      category: "Writing",
      icon: "🔤",
      description: "Grammar and spelling checker supporting many languages.",
      pricing: "Freemium",
      rating: 4.6,
      url: "https://languagetool.org/",
      keywords: [
        "writing", "grammar", "spelling",
        "proofreading", "essay"
      ]
    },

    {
      name: "Hemingway Editor",
      category: "Writing",
      icon: "📚",
      description: "Helps make writing clearer, simpler and easier to read.",
      pricing: "Free",
      rating: 4.4,
      url: "https://hemingwayapp.com/",
      keywords: [
        "writing", "essay", "grammar",
        "clarity", "school"
      ]
    },


    // ================= WEBSITES =================

    {
      name: "WordPress",
      category: "Websites",
      icon: "🌐",
      description: "Build websites and blogs using one of the world's biggest platforms.",
      pricing: "Freemium",
      rating: 4.6,
      url: "https://wordpress.com/",
      keywords: [
        "website", "blog", "web",
        "business", "site"
      ]
    },

    {
      name: "Wix",
      category: "Websites",
      icon: "🧩",
      description: "Website builder with templates and drag-and-drop tools.",
      pricing: "Freemium",
      rating: 4.6,
      url: "https://www.wix.com/",
      keywords: [
        "website", "web", "business",
        "portfolio", "site"
      ]
    },

    {
      name: "Framer",
      category: "Websites",
      icon: "⚡",
      description: "Modern website builder for creating fast, polished websites.",
      pricing: "Freemium",
      rating: 4.7,
      url: "https://www.framer.com/",
      keywords: [
        "website", "web", "design",
        "portfolio", "landing page"
      ]
    },

    {
      name: "Webflow",
      category: "Websites",
      icon: "🔵",
      description: "Visual website builder for advanced responsive websites.",
      pricing: "Freemium",
      rating: 4.6,
      url: "https://webflow.com/",
      keywords: [
        "website", "web", "design",
        "business", "portfolio"
      ]
    },

    {
      name: "Carrd",
      category: "Websites",
      icon: "💻",
      description: "Simple platform for creating one-page websites.",
      pricing: "Freemium",
      rating: 4.6,
      url: "https://carrd.co/",
      keywords: [
        "website", "landing page",
        "portfolio", "one page"
      ]
    },

    {
      name: "GitHub Pages",
      category: "Websites",
      icon: "🐙",
      description: "Free static website hosting directly from GitHub repositories.",
      pricing: "Free",
      rating: 4.7,
      url: "https://pages.github.com/",
      keywords: [
        "website", "hosting", "developer",
        "coding", "html", "github"
      ]
    },


    // ================= STUDENTS =================

    {
      name: "Khan Academy",
      category: "Students",
      icon: "🎓",
      description: "Free lessons and practice across many school subjects.",
      pricing: "Free",
      rating: 4.8,
      url: "https://www.khanacademy.org/",
      keywords: [
        "study", "school", "math",
        "science", "learning", "students"
      ]
    },

    {
      name: "WolframAlpha",
      category: "Students",
      icon: "🧮",
      description: "Computational engine useful for mathematics, science and facts.",
      pricing: "Freemium",
      rating: 4.7,
      url: "https://www.wolframalpha.com/",
      keywords: [
        "study", "math", "science",
        "calculation", "homework"
      ]
    },

    {
      name: "Quizlet",
      category: "Students",
      icon: "🃏",
      description: "Study with flashcards, quizzes and learning activities.",
      pricing: "Freemium",
      rating: 4.6,
      url: "https://quizlet.com/",
      keywords: [
        "study", "school", "flashcards",
        "quiz", "revision", "students"
      ]
    },

    {
      name: "Desmos",
      category: "Students",
      icon: "📈",
      description: "Powerful online graphing and mathematics tools.",
      pricing: "Free",
      rating: 4.8,
      url: "https://www.desmos.com/",
      keywords: [
        "math", "graph", "algebra",
        "geometry", "students"
      ]
    },

    {
      name: "GeoGebra",
      category: "Students",
      icon: "📐",
      description: "Interactive mathematics tools for geometry, algebra and graphs.",
      pricing: "Free",
      rating: 4.7,
      url: "https://www.geogebra.org/",
      keywords: [
        "math", "geometry", "algebra",
        "graph", "students"
      ]
    },

    {
      name: "Google Scholar",
      category: "Students",
      icon: "🎓",
      description: "Search engine for academic papers and scholarly research.",
      pricing: "Free",
      rating: 4.7,
      url: "https://scholar.google.com/",
      keywords: [
        "study", "research", "school",
        "academic", "papers"
      ]
    },


    // ================= PRODUCTIVITY =================

    {
      name: "Notion",
      category: "Productivity",
      icon: "📓",
      description: "Workspace for notes, planning, databases and projects.",
      pricing: "Freemium",
      rating: 4.7,
      url: "https://www.notion.com/",
      keywords: [
        "productivity", "notes", "planning",
        "tasks", "organization", "school"
      ]
    },

    {
      name: "Trello",
      category: "Productivity",
      icon: "📋",
      description: "Visual boards for managing tasks and projects.",
      pricing: "Freemium",
      rating: 4.6,
      url: "https://trello.com/",
      keywords: [
        "productivity", "tasks", "projects",
        "planning", "organization"
      ]
    },

    {
      name: "Todoist",
      category: "Productivity",
      icon: "✅",
      description: "Task manager for organizing daily tasks and projects.",
      pricing: "Freemium",
      rating: 4.6,
      url: "https://todoist.com/",
      keywords: [
        "productivity", "tasks", "todo",
        "planning", "organization"
      ]
    },

    {
      name: "Asana",
      category: "Productivity",
      icon: "📊",
      description: "Project and task management platform for organizing work.",
      pricing: "Freemium",
      rating: 4.5,
      url: "https://asana.com/",
      keywords: [
        "productivity", "tasks", "projects",
        "team", "planning"
      ]
    },

    {
      name: "Google Keep",
      category: "Productivity",
      icon: "💡",
      description: "Simple note-taking and reminder tool from Google.",
      pricing: "Free",
      rating: 4.6,
      url: "https://keep.google.com/",
      keywords: [
        "productivity", "notes", "reminders",
        "school", "organization"
      ]
    },


    // ================= IMAGES =================

    {
      name: "Remove.bg",
      category: "Images",
      icon: "✂️",
      description: "Automatically remove backgrounds from images.",
      pricing: "Freemium",
      rating: 4.7,
      url: "https://www.remove.bg/",
      keywords: [
        "image", "photo", "background",
        "remove background", "edit"
      ]
    },

    {
      name: "TinyPNG",
      category: "Images",
      icon: "🗜️",
      description: "Compress PNG and JPEG images while reducing file size.",
      pricing: "Freemium",
      rating: 4.6,
      url: "https://tinypng.com/",
      keywords: [
        "image", "compress", "photo",
        "file size", "optimize"
      ]
    },

    {
      name: "Unsplash",
      category: "Images",
      icon: "📸",
      description: "Find high-quality free images for creative projects.",
      pricing: "Free",
      rating: 4.8,
      url: "https://unsplash.com/",
      keywords: [
        "image", "photos", "pictures",
        "background", "design"
      ]
    },

    {
      name: "Pexels",
      category: "Images",
      icon: "🌄",
      description: "Free stock photos and videos for creative projects.",
      pricing: "Free",
      rating: 4.8,
      url: "https://www.pexels.com/",
      keywords: [
        "image", "photos", "videos",
        "stock", "background", "design"
      ]
    },


    // ================= AUDIO =================

    {
      name: "Audacity",
      category: "Audio",
      icon: "🎧",
      description: "Free audio recording and editing software.",
      pricing: "Free",
      rating: 4.7,
      url: "https://www.audacityteam.org/",
      keywords: [
        "audio", "music", "record",
        "edit", "sound"
      ]
    },

    {
      name: "BandLab",
      category: "Audio",
      icon: "🎵",
      description: "Online music creation and collaboration platform.",
      pricing: "Free",
      rating: 4.6,
      url: "https://www.bandlab.com/",
      keywords: [
        "audio", "music", "beat",
        "record", "song"
      ]
    },


    // ================= PDF =================

    {
      name: "Smallpdf",
      category: "PDF & Documents",
      icon: "📕",
      description: "Online tools for editing, compressing and converting PDFs.",
      pricing: "Freemium",
      rating: 4.6,
      url: "https://smallpdf.com/",
      keywords: [
        "pdf", "document", "convert",
        "compress", "merge"
      ]
    },

    {
      name: "iLovePDF",
      category: "PDF & Documents",
      icon: "📑",
      description: "Collection of online PDF editing and conversion tools.",
      pricing: "Freemium",
      rating: 4.7,
      url: "https://www.ilovepdf.com/",
      keywords: [
        "pdf", "document", "merge",
        "convert", "compress"
      ]
    },

    {
      name: "PDF24",
      category: "PDF & Documents",
      icon: "📄",
      description: "Free online PDF tools for merging, converting and editing documents.",
      pricing: "Free",
      rating: 4.6,
      url: "https://tools.pdf24.org/",
      keywords: [
        "pdf", "document", "convert",
        "merge", "compress"
      ]
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

  const categoriesOverlay = document.getElementById("categoriesOverlay");
  const categoriesClose = document.getElementById("categoriesClose");
  const categoriesButton = document.getElementById("categoriesButton");
  const categoriesButtonHero = document.getElementById("categoriesButtonHero");
  const footerCategoriesButton =
    document.getElementById("footerCategoriesButton");

  const menuButton = document.getElementById("menuButton");
  const navLinks = document.getElementById("navLinks");

  const themeToggle = document.getElementById("themeToggle");


  /* =========================================================
     SEARCH INTENT
     ========================================================= */

  const intentGroups = {

    logo: [
      "logo",
      "logos",
      "brand logo",
      "business logo",
      "make a logo",
      "create a logo",
      "logo maker"
    ],

    design: [
      "design",
      "graphic",
      "graphics",
      "poster",
      "flyer",
      "thumbnail",
      "banner"
    ],

    video: [
      "video",
      "edit video",
      "video editing",
      "youtube video",
      "reels",
      "shorts",
      "tiktok"
    ],

    writing: [
      "write",
      "writing",
      "essay",
      "article",
      "grammar",
      "proofread",
      "paraphrase",
      "rewrite"
    ],

    website: [
      "website",
      "web site",
      "webpage",
      "web page",
      "build a site",
      "create a website",
      "make a website",
      "landing page"
    ],

    study: [
      "study",
      "school",
      "learn",
      "homework",
      "revision",
      "exam",
      "student"
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
      "ai tool",
      "chatbot",
      "assistant"
    ],

    productivity: [
      "productivity",
      "organize",
      "tasks",
      "planning",
      "todo",
      "notes",
      "project"
    ],

    image: [
      "image",
      "photo",
      "picture",
      "background",
      "remove background",
      "compress image"
    ],

    audio: [
      "audio",
      "music",
      "song",
      "record",
      "sound",
      "beat"
    ],

    pdf: [
      "pdf",
      "document",
      "merge pdf",
      "compress pdf",
      "convert pdf"
    ]

  };


  /* =========================================================
     HELPERS
     ========================================================= */

  function normalizeText(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[^\w\s&.-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }


  function detectIntents(query) {

    const normalized = normalizeText(query);
    const found = [];

    for (const [intent, phrases] of Object.entries(intentGroups)) {

      for (const phrase of phrases) {

        if (normalized.includes(normalizeText(phrase))) {
          found.push(intent);
          break;
        }

      }

    }

    return [...new Set(found)];
  }


  /* =========================================================
     TOOL SCORING
     ========================================================= */

  function scoreTool(tool, query, intents) {

    const normalizedQuery = normalizeText(query);

    if (!normalizedQuery) {
      return 0;
    }

    let score = 0;

    const toolName = normalizeText(tool.name);
    const description = normalizeText(tool.description);
    const category = normalizeText(tool.category);

    // Exact tool name
    if (normalizedQuery === toolName) {
      score += 100;
    }

    // Tool name contains query
    if (toolName.includes(normalizedQuery)) {
      score += 60;
    }

    // Query contains tool name
    if (normalizedQuery.includes(toolName)) {
      score += 70;
    }

    // Category relevance
    if (category.includes(normalizedQuery)) {
      score += 35;
    }

    // Keyword matching
    tool.keywords.forEach(keyword => {

      const normalizedKeyword = normalizeText(keyword);

      if (!normalizedKeyword) return;

      if (normalizedQuery.includes(normalizedKeyword)) {
        score += 18;
      }

    });

    // Description matching
    normalizedQuery
      .split(" ")
      .filter(word => word.length > 2)
      .forEach(word => {

        if (description.includes(word)) {
          score += 5;
        }

      });


    // Intent matching
    intents.forEach(intent => {

      const matches = {

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

      if (matches[intent]?.includes(tool.category)) {
        score += 35;
      }

    });

    return score;
  }


  /* =========================================================
     SEARCH TOOLS
     ========================================================= */

  function searchTools(query) {

    const normalizedQuery = normalizeText(query);

    if (!normalizedQuery) {
      return tools;
    }

    const intents = detectIntents(normalizedQuery);

    const scoredTools = tools
      .map(tool => ({
        tool,
        score: scoreTool(tool, normalizedQuery, intents)
      }))
      .filter(item => item.score > 0)
      .sort((a, b) => {

        if (b.score !== a.score) {
          return b.score - a.score;
        }

        return b.tool.rating - a.tool.rating;
      });


    // If intent was detected but the search was broad,
    // return the most relevant tools.
    if (scoredTools.length > 0) {
      return scoredTools
        .slice(0, 10)
        .map(item => item.tool);
    }


    // Fallback: show tools whose names/descriptions
    // loosely match individual words.
    const fallback = tools.filter(tool => {

      const searchable = normalizeText(
        `${tool.name} ${tool.description} ${tool.category} ${tool.keywords.join(" ")}`
      );

      return normalizedQuery
        .split(" ")
        .some(word => word.length > 2 && searchable.includes(word));

    });

    return fallback.slice(0, 10);
  }


  /* =========================================================
     TOOL CARD
     ========================================================= */

  function createToolCard(tool) {

    const card = document.createElement("article");
    card.className = "tool-card";

    card.innerHTML = `
      <div class="tool-icon">
        ${tool.icon}
      </div>

      <div class="tool-card-content">

        <div class="tool-card-top">

          <div>
            <h3>${tool.name}</h3>

            <span class="tool-category">
              ${tool.category}
            </span>
          </div>

          <span class="tool-rating">
            ⭐ ${tool.rating}
          </span>

        </div>

        <p class="tool-description">
          ${tool.description}
        </p>

        <div class="tool-card-bottom">

          <span class="tool-pricing">
            ${tool.pricing}
          </span>

          <a
            class="visit-tool"
            href="${tool.url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Tool →
          </a>

        </div>

      </div>
    `;

    return card;
  }


  /* =========================================================
     RENDER TOOLS
     ========================================================= */

  function renderTools(toolList, heading = null) {

    if (!toolsGrid) return;

    toolsGrid.innerHTML = "";

    if (heading) {

      const resultHeading = document.createElement("div");

      resultHeading.className = "search-result-heading";

      resultHeading.innerHTML = `
        <h2>${heading}</h2>
        <p>${toolList.length} useful tool${toolList.length === 1 ? "" : "s"} found</p>
      `;

      toolsGrid.appendChild(resultHeading);
    }


    if (!toolList.length) {

      const emptyState = document.createElement("div");

      emptyState.className = "empty-state";

      emptyState.innerHTML = `
        <div class="empty-icon">🔎</div>

        <h3>No matching tools yet</h3>

        <p>
          Try something like
          <strong>"make a logo"</strong>,
          <strong>"edit a video"</strong>,
          <strong>"study math"</strong>,
          or
          <strong>"build a website"</strong>.
        </p>
      `;

      toolsGrid.appendChild(emptyState);

      return;
    }


    toolList.forEach(tool => {

      toolsGrid.appendChild(
        createToolCard(tool)
      );

    });

  }


  /* =========================================================
     PERFORM SEARCH
     ========================================================= */

  function performSearch(query) {

    const cleanQuery = String(query || "").trim();

    if (!cleanQuery) {

      renderTools(
        tools,
        "Explore useful tools"
      );

      return;
    }


    const results = searchTools(cleanQuery);

    renderTools(
      results,
      `Tools for "${cleanQuery}"`
    );


    const toolsSection = document.getElementById("tools");

    if (toolsSection) {

      setTimeout(() => {

        toolsSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }, 80);

    }

  }


  /* =========================================================
     SEARCH BUTTON
     ========================================================= */

  if (searchButton) {

    searchButton.addEventListener("click", () => {

      performSearch(
        searchInput?.value
      );

      if (suggestions) {
        suggestions.innerHTML = "";
      }

    });

  }


  /* =========================================================
     ENTER KEY
     ========================================================= */

  if (searchInput) {

    searchInput.addEventListener("keydown", event => {

      if (event.key === "Enter") {

        event.preventDefault();

        performSearch(
          searchInput.value
        );

        if (suggestions) {
          suggestions.innerHTML = "";
        }

      }

    });

  }


  /* =========================================================
     LIVE SEARCH SUGGESTIONS
     ========================================================= */

  if (searchInput && suggestions) {

    searchInput.addEventListener("input", () => {

      const value = searchInput.value.trim();

      suggestions.innerHTML = "";

      if (value.length < 2) {
        return;
      }


      const query = normalizeText(value);

      const matches = tools
        .filter(tool => {

          const searchable = normalizeText(
            `${tool.name} ${tool.category} ${tool.keywords.join(" ")}`
          );

          return searchable.includes(query);

        })
        .slice(0, 5);


      matches.forEach(tool => {

        const suggestion = document.createElement("button");

        suggestion.type = "button";
        suggestion.className = "suggestion-item";

        suggestion.innerHTML = `
          <span>${tool.icon}</span>
          <span>${tool.name}</span>
          <small>${tool.category}</small>
        `;

        suggestion.addEventListener("click", () => {

          searchInput.value = tool.name;

          suggestions.innerHTML = "";

          performSearch(tool.name);

        });

        suggestions.appendChild(suggestion);

      });

    });

  }


  /* =========================================================
     CATEGORY FILTER
     ========================================================= */

  if (categoryFilter) {

    categoryFilter.addEventListener("change", () => {

      const selectedCategory = categoryFilter.value;

      if (selectedCategory === "all") {

        renderTools(
          tools,
          "Explore useful tools"
        );

        return;
      }


      const filtered = tools.filter(
        tool => tool.category === selectedCategory
      );


      renderTools(
        filtered,
        `${selectedCategory} tools`
      );

    });

  }


  /* =========================================================
     QUICK SEARCH BUTTONS
     ========================================================= */

  document
    .querySelectorAll(".quick-search")
    .forEach(button => {

      button.addEventListener("click", () => {

        const query =
          button.dataset.query ||
          button.dataset.search ||
          button.textContent.trim();


        if (searchInput) {
          searchInput.value = query;
        }


        performSearch(query);

      });

    });


  /* =========================================================
     CATEGORY POPUP
     ========================================================= */

  function openCategories() {

    if (!categoriesOverlay) return;

    categoriesOverlay.classList.add("active");

    document.body.classList.add("modal-open");

  }


  function closeCategories() {

    if (!categoriesOverlay) return;

    categoriesOverlay.classList.remove("active");

    document.body.classList.remove("modal-open");

  }


  if (categoriesButton) {
    categoriesButton.addEventListener(
      "click",
      openCategories
    );
  }


  if (categoriesButtonHero) {
    categoriesButtonHero.addEventListener(
      "click",
      openCategories
    );
  }


  if (footerCategoriesButton) {
    footerCategoriesButton.addEventListener(
      "click",
      openCategories
    );
  }


  if (categoriesClose) {
    categoriesClose.addEventListener(
      "click",
      closeCategories
    );
  }


  if (categoriesOverlay) {

    categoriesOverlay.addEventListener("click", event => {

      if (event.target === categoriesOverlay) {
        closeCategories();
      }

    });

  }


  /* =========================================================
     CATEGORY MENU BUTTONS
     ========================================================= */

  document
    .querySelectorAll(".category-card")
    .forEach(button => {

      button.addEventListener("click", () => {

        const category =
          button.dataset.category;


        closeCategories();


        if (category === "all") {

          if (categoryFilter) {
            categoryFilter.value = "all";
          }

          renderTools(
            tools,
            "Explore useful tools"
          );

          return;
        }


        const filtered = tools.filter(
          tool => tool.category === category
        );


        if (categoryFilter) {

          const optionExists =
            [...categoryFilter.options]
              .some(option => option.value === category);

          if (optionExists) {
            categoryFilter.value = category;
          }

        }


        renderTools(
          filtered,
          `${category} tools`
        );


        const toolsSection =
          document.getElementById("tools");


        if (toolsSection) {

          setTimeout(() => {

            toolsSection.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }, 100);

        }

      });

    });


  /* =========================================================
     MOBILE NAVIGATION
     ========================================================= */

  if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

      navLinks.classList.toggle("active");

      menuButton.classList.toggle("active");

    });


    navLinks
      .querySelectorAll("a, button")
      .forEach(item => {

        item.addEventListener("click", () => {

          navLinks.classList.remove("active");

          menuButton.classList.remove("active");

        });

      });

  }


  /* =========================================================
     THEME TOGGLE
     ========================================================= */

  function applySavedTheme() {

    const savedTheme =
      localStorage.getItem("tztools-theme");


    if (savedTheme === "dark") {

      document.body.classList.add("dark-mode");

    } else {

      document.body.classList.remove("dark-mode");

    }

  }


  applySavedTheme();


  if (themeToggle) {

    themeToggle.addEventListener("click", () => {

      document.body.classList.toggle("dark-mode");


      const isDark =
        document.body.classList.contains("dark-mode");


      localStorage.setItem(
        "tztools-theme",
        isDark ? "dark" : "light"
      );

    });

  }


  /* =========================================================
     ESCAPE KEY
     ========================================================= */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      closeCategories();

    }

  });


  /* =========================================================
     INITIAL RENDER
     ========================================================= */

  renderTools(
    tools,
    "Explore useful tools"
  );


  console.log(
    `TzTools V6 loaded successfully — ${tools.length} tools available.`
  );

});
