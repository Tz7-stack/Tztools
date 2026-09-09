// ==========================================
// TzTools V6.1
// Smart Search + Recommendation Engine
// ==========================================


// ==========================================
// TOOL DATABASE
// ==========================================

const tools = [

  // ------------------------------
  // AI
  // ------------------------------

  {
    name: "ChatGPT",
    category: "AI",
    icon: "🤖",
    description: "AI assistant for writing, studying, brainstorming, coding and more.",
    pricing: "Freemium",
    url: "https://chatgpt.com/",
    keywords: [
      "ai", "chat", "assistant", "study", "school",
      "writing", "essay", "coding", "questions",
      "brainstorm", "research"
    ]
  },

  {
    name: "Google Gemini",
    category: "AI",
    icon: "✨",
    description: "Google's AI assistant for questions, research, writing and ideas.",
    pricing: "Free",
    url: "https://gemini.google.com/",
    keywords: [
      "ai", "assistant", "study", "research",
      "questions", "writing", "ideas"
    ]
  },

  {
    name: "Claude",
    category: "AI",
    icon: "🧠",
    description: "AI assistant useful for writing, analysis, coding and research.",
    pricing: "Freemium",
    url: "https://claude.ai/",
    keywords: [
      "ai", "writing", "research", "coding",
      "analysis", "study"
    ]
  },


  // ------------------------------
  // DESIGN
  // ------------------------------

  {
    name: "Canva",
    category: "Design",
    icon: "🎨",
    description: "Create logos, posters, presentations, social posts and graphics.",
    pricing: "Freemium",
    url: "https://www.canva.com/",
    keywords: [
      "logo", "design", "poster", "graphics",
      "social media", "presentation", "flyer",
      "thumbnail", "branding"
    ]
  },

  {
    name: "Adobe Express",
    category: "Design",
    icon: "🖌️",
    description: "Quickly create graphics, social content, flyers and other designs.",
    pricing: "Freemium",
    url: "https://www.adobe.com/express/",
    keywords: [
      "logo", "design", "poster", "graphics",
      "flyer", "social media", "branding"
    ]
  },

  {
    name: "Figma",
    category: "Design",
    icon: "🔷",
    description: "Design websites, apps, interfaces and collaborative prototypes.",
    pricing: "Free",
    url: "https://www.figma.com/",
    keywords: [
      "design", "ui", "ux", "website",
      "app", "interface", "prototype"
    ]
  },


  // ------------------------------
  // VIDEO
  // ------------------------------

  {
    name: "CapCut",
    category: "Video",
    icon: "🎬",
    description: "Easy video editor for social media, school projects and creative videos.",
    pricing: "Freemium",
    url: "https://www.capcut.com/",
    keywords: [
      "video", "edit video", "editing",
      "tiktok", "youtube", "shorts",
      "reels", "school project"
    ]
  },

  {
    name: "DaVinci Resolve",
    category: "Video",
    icon: "🎥",
    description: "Powerful professional video editing and color grading software.",
    pricing: "Free",
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    keywords: [
      "video", "editing", "professional",
      "film", "color grading", "youtube"
    ]
  },

  {
    name: "VEED",
    category: "Video",
    icon: "📹",
    description: "Browser-based video editor with captions, effects and social tools.",
    pricing: "Freemium",
    url: "https://www.veed.io/",
    keywords: [
      "video", "editing", "captions",
      "subtitles", "youtube", "social media"
    ]
  },


  // ------------------------------
  // WRITING
  // ------------------------------

  {
    name: "Grammarly",
    category: "Writing",
    icon: "✍️",
    description: "Improve grammar, spelling, clarity and writing style.",
    pricing: "Freemium",
    url: "https://www.grammarly.com/",
    keywords: [
      "writing", "grammar", "essay",
      "school", "spelling", "proofread"
    ]
  },

  {
    name: "QuillBot",
    category: "Writing",
    icon: "📝",
    description: "Writing assistant with paraphrasing, grammar and summarizing tools.",
    pricing: "Freemium",
    url: "https://quillbot.com/",
    keywords: [
      "writing", "paraphrase", "summary",
      "essay", "grammar", "school"
    ]
  },

  {
    name: "Google Docs",
    category: "Writing",
    icon: "📄",
    description: "Create and edit documents online with collaboration features.",
    pricing: "Free",
    url: "https://docs.google.com/",
    keywords: [
      "writing", "document", "essay",
      "school", "notes", "documents"
    ]
  },


  // ------------------------------
  // WEBSITES
  // ------------------------------

  {
    name: "WordPress",
    category: "Websites",
    icon: "🌐",
    description: "Build websites and blogs using a flexible website platform.",
    pricing: "Freemium",
    url: "https://wordpress.com/",
    keywords: [
      "website", "blog", "web",
      "site", "business", "portfolio"
    ]
  },

  {
    name: "Wix",
    category: "Websites",
    icon: "🧩",
    description: "Build websites using a visual website builder.",
    pricing: "Freemium",
    url: "https://www.wix.com/",
    keywords: [
      "website", "web", "business",
      "portfolio", "blog", "site"
    ]
  },

  {
    name: "Framer",
    category: "Websites",
    icon: "⚡",
    description: "Create modern websites with a visual design and publishing workflow.",
    pricing: "Freemium",
    url: "https://www.framer.com/",
    keywords: [
      "website", "web design", "portfolio",
      "landing page", "site", "design"
    ]
  },


  // ------------------------------
  // STUDENTS
  // ------------------------------

  {
    name: "Khan Academy",
    category: "Students",
    icon: "🎓",
    description: "Free lessons and practice for maths, science and other subjects.",
    pricing: "Free",
    url: "https://www.khanacademy.org/",
    keywords: [
      "study", "school", "math",
      "science", "learning", "students",
      "practice", "education"
    ]
  },

  {
    name: "WolframAlpha",
    category: "Students",
    icon: "🧮",
    description: "Computational engine for maths, science and factual questions.",
    pricing: "Freemium",
    url: "https://www.wolframalpha.com/",
    keywords: [
      "math", "mathematics", "calculation",
      "science", "equation", "school",
      "homework", "study"
    ]
  },

  {
    name: "Quizlet",
    category: "Students",
    icon: "📚",
    description: "Create flashcards and study using interactive learning activities.",
    pricing: "Freemium",
    url: "https://quizlet.com/",
    keywords: [
      "study", "flashcards", "school",
      "revision", "learning", "students",
      "memorize"
    ]
  },


  // ------------------------------
  // PRODUCTIVITY
  // ------------------------------

  {
    name: "Notion",
    category: "Productivity",
    icon: "📓",
    description: "Organize notes, tasks, projects and personal workspaces.",
    pricing: "Free",
    url: "https://www.notion.so/",
    keywords: [
      "productivity", "notes", "tasks",
      "planning", "organization", "school"
    ]
  },

  {
    name: "Trello",
    category: "Productivity",
    icon: "📋",
    description: "Organize projects and tasks using visual boards.",
    pricing: "Free",
    url: "https://trello.com/",
    keywords: [
      "productivity", "tasks", "projects",
      "planning", "organization"
    ]
  },


  // ------------------------------
  // IMAGES
  // ------------------------------

  {
    name: "Remove.bg",
    category: "Images",
    icon: "🖼️",
    description: "Automatically remove backgrounds from images.",
    pricing: "Freemium",
    url: "https://www.remove.bg/",
    keywords: [
      "image", "photo", "background",
      "remove background", "transparent"
    ]
  },

  {
    name: "Pixlr",
    category: "Images",
    icon: "🌈",
    description: "Online photo editor for editing and enhancing images.",
    pricing: "Freemium",
    url: "https://pixlr.com/",
    keywords: [
      "image", "photo", "edit photo",
      "photo editing", "graphics"
    ]
  }

];


// ==========================================
// DOM ELEMENTS
// ==========================================

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const suggestions = document.getElementById("suggestions");

const toolsGrid = document.getElementById("toolsGrid");
const directorySearch = document.getElementById("directorySearch");
const categoryFilter = document.getElementById("categoryFilter");

const themeToggle = document.getElementById("themeToggle");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");


// ==========================================
// TEXT NORMALIZATION
// ==========================================

function normalizeText(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ");
}


// ==========================================
// SMART INTENT GROUPS
// ==========================================

const intentGroups = {

  logo: [
    "logo",
    "logos",
    "make a logo",
    "create a logo",
    "design a logo",
    "logo maker",
    "brand logo",
    "business logo"
  ],

  design: [
    "design",
    "graphic design",
    "graphics",
    "poster",
    "flyer",
    "thumbnail",
    "banner",
    "branding",
    "social media design"
  ],

  video: [
    "video",
    "edit video",
    "video editing",
    "make a video",
    "create a video",
    "movie",
    "youtube video",
    "tiktok video",
    "reels"
  ],

  writing: [
    "write",
    "writing",
    "essay",
    "article",
    "grammar",
    "proofread",
    "paraphrase",
    "rewrite",
    "document"
  ],

  website: [
    "website",
    "web site",
    "web",
    "build a website",
    "create a website",
    "make a website",
    "blog",
    "portfolio",
    "landing page"
  ],

  study: [
    "study",
    "school",
    "learn",
    "learning",
    "revision",
    "homework",
    "exam",
    "student",
    "flashcards"
  ],

  math: [
    "math",
    "maths",
    "mathematics",
    "equation",
    "calculate",
    "calculation",
    "algebra",
    "geometry"
  ],

  ai: [
    "ai",
    "artificial intelligence",
    "chatbot",
    "assistant",
    "ask ai",
    "ai tool"
  ],

  productivity: [
    "productivity",
    "organize",
    "organization",
    "tasks",
    "planning",
    "notes",
    "project"
  ],

  image: [
    "image",
    "photo",
    "picture",
    "edit photo",
    "image editing",
    "remove background",
    "background"
  ]

};


// ==========================================
// DETECT USER INTENT
// ==========================================

function detectIntent(query) {

  const text = normalizeText(query);

  const detected = [];

  for (const [intent, phrases] of Object.entries(intentGroups)) {

    for (const phrase of phrases) {

      const normalizedPhrase = normalizeText(phrase);

      if (
        text === normalizedPhrase ||
        text.includes(normalizedPhrase)
      ) {
        detected.push(intent);
        break;
      }

    }

  }

  return [...new Set(detected)];
}


// ==========================================
// SCORE TOOLS
// ==========================================

function scoreTool(tool, query, intents) {

  const text = normalizeText(query);

  let score = 0;

  const toolName = normalizeText(tool.name);
  const description = normalizeText(tool.description);
  const keywords = tool.keywords.map(normalizeText);

  // Exact tool name
  if (text === toolName) {
    score += 100;
  }

  // Tool name contains search
  if (toolName.includes(text) && text.length > 2) {
    score += 50;
  }

  // Description matches
  if (description.includes(text) && text.length > 2) {
    score += 20;
  }

  // Keyword matches
  keywords.forEach(keyword => {

    if (text.includes(keyword)) {
      score += 12;
    }

    if (keyword.includes(text) && text.length > 2) {
      score += 8;
    }

  });

  // Intent matching
  intents.forEach(intent => {

    if (intent === "logo" && tool.keywords.includes("logo")) {
      score += 40;
    }

    if (intent === "design" && tool.category === "Design") {
      score += 30;
    }

    if (intent === "video" && tool.category === "Video") {
      score += 40;
    }

    if (intent === "writing" && tool.category === "Writing") {
      score += 40;
    }

    if (intent === "website" && tool.category === "Websites") {
      score += 40;
    }

    if (intent === "study" && tool.category === "Students") {
      score += 40;
    }

    if (intent === "math" && tool.keywords.includes("math")) {
      score += 45;
    }

    if (intent === "ai" && tool.category === "AI") {
      score += 40;
    }

    if (intent === "productivity" && tool.category === "Productivity") {
      score += 40;
    }

    if (intent === "image" && tool.category === "Images") {
      score += 40;
    }

  });

  return score;
}


// ==========================================
// SMART SEARCH
// ==========================================

function searchTools(query) {

  const text = normalizeText(query);

  if (!text) {
    return tools;
  }

  const intents = detectIntent(text);

  const rankedTools = tools
    .map(tool => ({
      tool,
      score: scoreTool(tool, text, intents)
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return rankedTools
    .slice(0, 10)
    .map(item => item.tool);
}


// ==========================================
// CREATE TOOL CARD
// ==========================================

function createToolCard(tool) {

  return `
    <article class="tool-card">

      <div class="tool-icon">
        ${tool.icon}
      </div>

      <div class="tool-info">

        <div class="tool-title-row">
          <h3>${tool.name}</h3>
          <span class="tool-category">${tool.category}</span>
        </div>

        <p>${tool.description}</p>

        <div class="tool-meta">
          <span>${tool.pricing}</span>
        </div>

        <a
          href="${tool.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Tool →
        </a>

      </div>

    </article>
  `;
}


// ==========================================
// RENDER TOOLS
// ==========================================

function renderTools(toolList) {

  if (!toolsGrid) return;

  if (!toolList.length) {

    toolsGrid.innerHTML = `
      <div class="empty-state">

        <div class="empty-icon">🔎</div>

        <h3>No matching tools found</h3>

        <p>
          Try searching for something like
          "make a logo", "edit a video", or "build a website".
        </p>

      </div>
    `;

    return;
  }

  toolsGrid.innerHTML = toolList
    .map(createToolCard)
    .join("");
}


// ==========================================
// MAIN SEARCH
// ==========================================

function performSearch() {

  if (!searchInput) return;

  const query = searchInput.value.trim();

  if (!query) {
    renderTools(tools);
    return;
  }

  const results = searchTools(query);

  renderTools(results);

  // Move user to results
  const toolsSection = document.getElementById("tools");

  if (toolsSection) {
    toolsSection.scrollIntoView({
      behavior: "smooth"
    });
  }

}


// ==========================================
// SEARCH SUGGESTIONS
// ==========================================

function updateSuggestions() {

  if (!searchInput || !suggestions) return;

  const query = normalizeText(searchInput.value);

  if (!query) {
    suggestions.innerHTML = "";
    suggestions.style.display = "none";
    return;
  }

  const suggestionsList = [
    "Make a logo",
    "Edit a video",
    "Build a website",
    "Help me study maths",
    "Write an essay",
    "Remove an image background"
  ];

  const matches = suggestionsList.filter(item =>
    normalizeText(item).includes(query)
  );

  if (!matches.length) {
    suggestions.innerHTML = "";
    suggestions.style.display = "none";
    return;
  }

  suggestions.innerHTML = matches
    .map(item => `
      <button class="suggestion-item" type="button">
        ${item}
      </button>
    `)
    .join("");

  suggestions.style.display = "block";

  suggestions
    .querySelectorAll(".suggestion-item")
    .forEach(button => {

      button.addEventListener("click", () => {

        searchInput.value = button.textContent.trim();

        suggestions.innerHTML = "";
        suggestions.style.display = "none";

        performSearch();

      });

    });

}


// ==========================================
// DIRECTORY SEARCH + FILTER
// ==========================================

function updateDirectory() {

  if (!directorySearch || !categoryFilter) return;

  const searchText = normalizeText(directorySearch.value);
  const selectedCategory = categoryFilter.value;

  let filteredTools = tools;

  if (selectedCategory !== "all") {

    filteredTools = filteredTools.filter(
      tool => normalizeText(tool.category) === normalizeText(selectedCategory)
    );

  }

  if (searchText) {

    filteredTools = filteredTools.filter(tool => {

      const searchableText = normalizeText(`
        ${tool.name}
        ${tool.description}
        ${tool.category}
        ${tool.keywords.join(" ")}
      `);

      return searchableText.includes(searchText);

    });

  }

  renderTools(filteredTools);

}


// ==========================================
// QUICK SEARCH BUTTONS
// ==========================================

document
  .querySelectorAll(".quick-search")
  .forEach(button => {

    button.addEventListener("click", () => {

      if (!searchInput) return;

      searchInput.value = button.dataset.query || button.textContent.trim();

      performSearch();

    });

  });


// ==========================================
// CATEGORY BUTTONS
// ==========================================

document
  .querySelectorAll(".category-card")
  .forEach(card => {

    card.addEventListener("click", () => {

      const category = card.dataset.category;

      if (!category || !categoryFilter) return;

      categoryFilter.value = category;

      updateDirectory();

      const toolsSection = document.getElementById("tools");

      if (toolsSection) {
        toolsSection.scrollIntoView({
          behavior: "smooth"
        });
      }

    });

  });


// ==========================================
// EVENT LISTENERS
// ==========================================

if (searchButton) {

  searchButton.addEventListener(
    "click",
    performSearch
  );

}


if (searchInput) {

  searchInput.addEventListener(
    "input",
    updateSuggestions
  );

  searchInput.addEventListener(
    "keydown",
    event => {

      if (event.key === "Enter") {
        performSearch();
      }

    }
  );

}


if (directorySearch) {

  directorySearch.addEventListener(
    "input",
    updateDirectory
  );

}


if (categoryFilter) {

  categoryFilter.addEventListener(
    "change",
    updateDirectory
  );

}


// ==========================================
// DARK MODE
// ==========================================

const savedTheme = localStorage.getItem("tztools-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}


if (themeToggle) {

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
      document.body.classList.contains("dark");

    localStorage.setItem(
      "tztools-theme",
      isDark ? "dark" : "light"
    );

  });

}


// ==========================================
// MOBILE MENU
// ==========================================

if (menuButton && navLinks) {

  menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

  });

}


// ==========================================
// INITIAL LOAD
// ==========================================

renderTools(tools);

console.log(
  `TzTools V6.1 loaded successfully — ${tools.length} tools`
);
