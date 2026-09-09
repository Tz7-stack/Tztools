/* =========================================================
   TZTOOLS V6 — CORE JAVASCRIPT
   Clean foundation
========================================================= */


/* ================= TOOL DATABASE ================= */

const tools = [

  {
    id: "canva",
    name: "Canva",
    icon: "🎨",
    category: "Design",
    pricing: "Freemium",
    rating: 4.8,
    description: "Create logos, graphics, presentations, posters and more.",
    keywords: [
      "logo",
      "design",
      "graphic",
      "poster",
      "presentation",
      "social media",
      "thumbnail"
    ],
    url: "https://www.canva.com/"
  },

  {
    id: "adobe-express",
    name: "Adobe Express",
    icon: "✨",
    category: "Design",
    pricing: "Freemium",
    rating: 4.7,
    description: "Quickly create graphics, logos, videos and social content.",
    keywords: [
      "logo",
      "design",
      "graphic",
      "social media",
      "video",
      "poster"
    ],
    url: "https://www.adobe.com/express/"
  },

  {
    id: "figma",
    name: "Figma",
    icon: "🖌️",
    category: "Design",
    pricing: "Freemium",
    rating: 4.8,
    description: "Design interfaces, prototypes and digital products.",
    keywords: [
      "design",
      "ui",
      "ux",
      "website",
      "app",
      "prototype"
    ],
    url: "https://www.figma.com/"
  },

  {
    id: "capcut",
    name: "CapCut",
    icon: "🎬",
    category: "Video",
    pricing: "Freemium",
    rating: 4.7,
    description: "Edit videos with effects, captions, transitions and more.",
    keywords: [
      "video",
      "edit video",
      "editing",
      "tiktok",
      "reels",
      "shorts"
    ],
    url: "https://www.capcut.com/"
  },

  {
    id: "davinci-resolve",
    name: "DaVinci Resolve",
    icon: "🎞️",
    category: "Video",
    pricing: "Free",
    rating: 4.9,
    description: "Professional video editing, color grading and visual effects.",
    keywords: [
      "video",
      "edit video",
      "editing",
      "film",
      "color grading"
    ],
    url: "https://www.blackmagicdesign.com/products/davinciresolve"
  },

  {
    id: "veed",
    name: "VEED",
    icon: "📹",
    category: "Video",
    pricing: "Freemium",
    rating: 4.6,
    description: "Online video editor for creators, captions and social content.",
    keywords: [
      "video",
      "edit video",
      "captions",
      "subtitles",
      "social media"
    ],
    url: "https://www.veed.io/"
  },

  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: "🤖",
    category: "AI",
    pricing: "Freemium",
    rating: 4.9,
    description: "AI assistant for writing, learning, brainstorming and research.",
    keywords: [
      "ai",
      "write",
      "writing",
      "study",
      "homework",
      "research",
      "ideas",
      "brainstorm"
    ],
    url: "https://chatgpt.com/"
  },

  {
    id: "gemini",
    name: "Google Gemini",
    icon: "✨",
    category: "AI",
    pricing: "Freemium",
    rating: 4.7,
    description: "Google's AI assistant for questions, writing, learning and more.",
    keywords: [
      "ai",
      "study",
      "research",
      "write",
      "writing",
      "questions"
    ],
    url: "https://gemini.google.com/"
  },

  {
    id: "claude",
    name: "Claude",
    icon: "🧠",
    category: "AI",
    pricing: "Freemium",
    rating: 4.8,
    description: "AI assistant for writing, analysis, coding and research.",
    keywords: [
      "ai",
      "writing",
      "research",
      "coding",
      "analysis"
    ],
    url: "https://claude.ai/"
  },

  {
    id: "grammarly",
    name: "Grammarly",
    icon: "✍️",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.6,
    description: "Improve grammar, spelling, clarity and writing style.",
    keywords: [
      "write",
      "writing",
      "grammar",
      "essay",
      "school",
      "spelling"
    ],
    url: "https://www.grammarly.com/"
  },

  {
    id: "quillbot",
    name: "QuillBot",
    icon: "📝",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.5,
    description: "Paraphrase, summarize and improve written content.",
    keywords: [
      "write",
      "writing",
      "paraphrase",
      "summarize",
      "essay"
    ],
    url: "https://quillbot.com/"
  },

  {
    id: "google-docs",
    name: "Google Docs",
    icon: "📄",
    category: "Writing",
    pricing: "Free",
    rating: 4.7,
    description: "Create and collaborate on documents online.",
    keywords: [
      "write",
      "writing",
      "document",
      "essay",
      "school",
      "notes"
    ],
    url: "https://docs.google.com/"
  },

  {
    id: "wordpress",
    name: "WordPress",
    icon: "🌐",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.6,
    description: "Create websites, blogs and online publications.",
    keywords: [
      "website",
      "web",
      "blog",
      "wordpress",
      "site"
    ],
    url: "https://wordpress.com/"
  },

  {
    id: "wix",
    name: "Wix",
    icon: "🌐",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.6,
    description: "Build websites using an easy visual website builder.",
    keywords: [
      "website",
      "web",
      "site",
      "business website",
      "online store"
    ],
    url: "https://www.wix.com/"
  },

  {
    id: "framer",
    name: "Framer",
    icon: "⚡",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.7,
    description: "Design and publish modern websites visually.",
    keywords: [
      "website",
      "web",
      "landing page",
      "design",
      "portfolio"
    ],
    url: "https://www.framer.com/"
  },

  {
    id: "khan-academy",
    name: "Khan Academy",
    icon: "📚",
    category: "Students",
    pricing: "Free",
    rating: 4.8,
    description: "Learn maths, science and many other subjects for free.",
    keywords: [
      "study",
      "learn",
      "math",
      "mathematics",
      "science",
      "school",
      "student"
    ],
    url: "https://www.khanacademy.org/"
  },

  {
    id: "wolfram-alpha",
    name: "WolframAlpha",
    icon: "🧮",
    category: "Students",
    pricing: "Freemium",
    rating: 4.7,
    description: "Compute answers and explore mathematical and scientific topics.",
    keywords: [
      "math",
      "mathematics",
      "calculate",
      "science",
      "equation",
      "homework",
      "study"
    ],
    url: "https://www.wolframalpha.com/"
  },

  {
    id: "quizlet",
    name: "Quizlet",
    icon: "🧠",
    category: "Students",
    pricing: "Freemium",
    rating: 4.6,
    description: "Study with flashcards, practice tests and learning activities.",
    keywords: [
      "study",
      "student",
      "flashcards",
      "revision",
      "school",
      "learn"
    ],
    url: "https://quizlet.com/"
  },

  {
    id: "notion",
    name: "Notion",
    icon: "📓",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.8,
    description: "Organize notes, projects, tasks and personal information.",
    keywords: [
      "productivity",
      "notes",
      "tasks",
      "planning",
      "organization",
      "school"
    ],
    url: "https://www.notion.so/"
  },

  {
    id: "trello",
    name: "Trello",
    icon: "📋",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.6,
    description: "Organize projects and tasks with visual boards.",
    keywords: [
      "productivity",
      "tasks",
      "planning",
      "project",
      "organization"
    ],
    url: "https://trello.com/"
  },

  {
    id: "remove-bg",
    name: "Remove.bg",
    icon: "🖼️",
    category: "Design",
    pricing: "Freemium",
    rating: 4.7,
    description: "Automatically remove backgrounds from images.",
    keywords: [
      "image",
      "photo",
      "background",
      "remove background",
      "design"
    ],
    url: "https://www.remove.bg/"
  },

  {
    id: "pixlr",
    name: "Pixlr",
    icon: "🖼️",
    category: "Design",
    pricing: "Freemium",
    rating: 4.5,
    description: "Edit photos and create graphics directly in your browser.",
    keywords: [
      "image",
      "photo",
      "edit photo",
      "design",
      "graphics"
    ],
    url: "https://pixlr.com/"
  }

];


/* ================= DOM ELEMENTS ================= */

const searchInput =
  document.getElementById("searchInput");

const searchButton =
  document.getElementById("searchButton");

const suggestions =
  document.getElementById("suggestions");

const toolsGrid =
  document.getElementById("toolsGrid");

const directorySearch =
  document.getElementById("directorySearch");

const categoryFilter =
  document.getElementById("categoryFilter");

const themeToggle =
  document.getElementById("themeToggle");

const menuButton =
  document.getElementById("menuButton");

const navLinks =
  document.querySelector(".nav-links");


/* ================= SEARCH HELPERS ================= */

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .trim();
}


/* ================= INTENT DETECTION ================= */

const intentGroups = {

  logo: [
    "logo",
    "brand logo",
    "make a logo",
    "create a logo",
    "design a logo",
    "logo maker"
  ],

  design: [
    "design",
    "graphic",
    "poster",
    "flyer",
    "thumbnail",
    "banner",
    "social media design"
  ],

  video: [
    "video",
    "edit video",
    "video editing",
    "movie",
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
    "paraphrase",
    "document"
  ],

  website: [
    "website",
    "web site",
    "webpage",
    "landing page",
    "online store",
    "blog"
  ],

  study: [
    "study",
    "learn",
    "school",
    "student",
    "homework",
    "revision",
    "exam"
  ],

  math: [
    "math",
    "mathematics",
    "equation",
    "calculate",
    "algebra",
    "geometry"
  ],

  ai: [
    "ai",
    "artificial intelligence",
    "ai tool",
    "chatbot"
  ],

  productivity: [
    "productivity",
    "organize",
    "organization",
    "tasks",
    "planning",
    "project",
    "notes"
  ],

  image: [
    "image",
    "photo",
    "picture",
    "background",
    "edit photo"
  ]

};


function detectIntent(query) {

  const text = normalizeText(query);

  if (!text) {
    return [];
  }

  const detected = [];

  for (const intent in intentGroups) {

    const phrases = intentGroups[intent];

    for (const phrase of phrases) {

      if (text.includes(phrase)) {
        detected.push(intent);
        break;
      }

    }

  }

  return detected;
}


/* ================= TOOL SCORING ================= */

function scoreTool(tool, query) {

  const text = normalizeText(query);

  if (!text) {
    return 0;
  }

  const intents = detectIntent(text);

  let score = 0;

  const toolName =
    normalizeText(tool.name);

  const category =
    normalizeText(tool.category);

  const description =
    normalizeText(tool.description);

  const keywords =
    tool.keywords || [];


  /* Exact tool name */

  if (toolName === text) {
    score += 100;
  }


  /* Tool name contains search */

  if (toolName.includes(text)) {
    score += 60;
  }


  /* Category match */

  if (category.includes(text)) {
    score += 35;
  }


  /* Description match */

  if (description.includes(text)) {
    score += 25;
  }


  /* Keyword matches */

  keywords.forEach(keyword => {

    const normalizedKeyword =
      normalizeText(keyword);

    if (normalizedKeyword === text) {
      score += 50;
    }

    if (
      text.includes(normalizedKeyword) ||
      normalizedKeyword.includes(text)
    ) {
      score += 20;
    }

  });


  /* Intent matches */

  intents.forEach(intent => {

    const phrases =
      intentGroups[intent];

    keywords.forEach(keyword => {

      const keywordText =
        normalizeText(keyword);

      phrases.forEach(phrase => {

        if (
          keywordText.includes(
            normalizeText(phrase)
          ) ||
          normalizeText(phrase).includes(keywordText)
        ) {
          score += 15;
        }

      });

    });

    /* Category bonuses */

    if (
      intent === "logo" &&
      tool.category === "Design"
    ) {
      score += 35;
    }

    if (
      intent === "video" &&
      tool.category === "Video"
    ) {
      score += 35;
    }

    if (
      intent === "writing" &&
      tool.category === "Writing"
    ) {
      score += 35;
    }

    if (
      intent === "website" &&
      tool.category === "Websites"
    ) {
      score += 35;
    }

    if (
      intent === "study" &&
      tool.category === "Students"
    ) {
      score += 35;
    }

    if (
      intent === "math" &&
      tool.category === "Students"
    ) {
      score += 30;
    }

    if (
      intent === "ai" &&
      tool.category === "AI"
    ) {
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
      tool.category === "Design"
    ) {
      score += 25;
    }

  });


  /* Rating gives strong tools a small boost */

  score += Number(tool.rating || 0);


  return score;
}


/* ================= SEARCH ENGINE ================= */

function searchTools(query) {

  const text =
    normalizeText(query);

  /* Empty search = show all tools */

  if (!text) {
    return [...tools];
  }


  const scoredTools =
    tools.map(tool => {

      return {
        tool,
        score: scoreTool(tool, text)
      };

    });


  return scoredTools
    .filter(item => item.score > 0)
    .sort((a, b) => {

      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return (
        Number(b.tool.rating || 0) -
        Number(a.tool.rating || 0)
      );

    })
    .map(item => item.tool)
    .slice(0, 10);
}


/* ================= TOOL CARD ================= */

function createToolCard(tool) {

  return `
    <article class="tool-card">

      <div class="tool-icon">
        ${tool.icon}
      </div>

      <div class="tool-info">

        <div class="tool-title-row">

          <h3>
            ${tool.name}
          </h3>

          <span class="tool-rating">
            ⭐ ${tool.rating}
          </span>

        </div>

        <p>
          ${tool.description}
        </p>

        <div class="tool-meta">

          <span>
            ${tool.category}
          </span>

          <span>
            ${tool.pricing}
          </span>

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


/* ================= RENDER TOOLS ================= */

function renderTools(toolList) {

  if (!toolsGrid) {
    return;
  }


  if (!toolList.length) {

    toolsGrid.innerHTML = `
      <div class="empty-state">
        <strong>No matching tools found.</strong>
        <br>
        Try something like "make a logo",
        "edit videos", or "study maths".
      </div>
    `;

    return;
  }


  toolsGrid.innerHTML =
    toolList
      .map(createToolCard)
      .join("");
}


/* ================= MAIN SEARCH ================= */

function performSearch(query) {

  const results =
    searchTools(query);

  renderTools(results);

  if (toolsGrid) {
    toolsGrid.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  updateSuggestions("");
}


/* ================= SUGGESTIONS ================= */

function updateSuggestions(query) {

  if (!suggestions) {
    return;
  }

  const text =
    normalizeText(query);

  if (!text) {

    suggestions.innerHTML = "";

    return;
  }


  const matches =
    tools
      .filter(tool => {

        const combined = [
          tool.name,
          tool.category,
          tool.description,
          ...(tool.keywords || [])
        ]
          .join(" ")
          .toLowerCase();

        return combined.includes(text);

      })
      .slice(0, 5);


  if (!matches.length) {

    suggestions.innerHTML = "";

    return;
  }


  suggestions.innerHTML =
    matches
      .map(tool => {

        return `
          <button
            class="suggestion"
            data-suggestion="${tool.name}"
          >

            <span class="suggestion-icon">
              ${tool.icon}
            </span>

            <span>
              ${tool.name}
            </span>

          </button>
        `;

      })
      .join("");


  suggestions
    .querySelectorAll(".suggestion")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const value =
            button.dataset.suggestion;

          if (searchInput) {
            searchInput.value = value;
          }

          performSearch(value);

        }
      );

    });

}


/* ================= DIRECTORY FILTER ================= */

function updateDirectory() {

  const query =
    directorySearch
      ? directorySearch.value
      : "";

  const category =
    categoryFilter
      ? categoryFilter.value
      : "all";


  let results =
    query
      ? searchTools(query)
      : [...tools];


  if (category !== "all") {

    results =
      results.filter(
        tool => tool.category === category
      );

  }


  renderTools(results);
}


/* ================= THEME ================= */

function loadTheme() {

  const savedTheme =
    localStorage.getItem("tztools-theme");

  if (savedTheme === "dark") {

    document.body.classList.add(
      "dark-mode"
    );

    if (themeToggle) {
      themeToggle.textContent = "☀️";
    }

  }

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


  if (themeToggle) {
    themeToggle.textContent =
      isDark ? "☀️" : "🌙";
  }

}


/* ================= MOBILE MENU ================= */

function toggleMobileMenu() {

  if (!navLinks) {
    return;
  }


  const isOpen =
    navLinks.classList.toggle(
      "mobile-open"
    );


  if (menuButton) {

    menuButton.textContent =
      isOpen ? "✕" : "☰";

  }

}


/* ================= CATEGORY BUTTONS ================= */

function setupCategoryButtons() {

  const categoryButtons =
    document.querySelectorAll(
      ".category-card"
    );


  categoryButtons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const category =
          button.dataset.category;


        if (categoryFilter) {

          categoryFilter.value =
            category;

        }


        updateDirectory();


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

}


/* ================= QUICK SEARCH ================= */

function setupQuickSearches() {

  const buttons =
    document.querySelectorAll(
      ".quick-searches button"
    );


  buttons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const query =
          button.dataset.search || "";


        if (searchInput) {

          searchInput.value =
            query;

        }


        performSearch(query);

      }
    );

  });

}


/* ================= EVENT LISTENERS ================= */

if (searchButton) {

  searchButton.addEventListener(
    "click",
    () => {

      performSearch(
        searchInput
          ? searchInput.value
          : ""
      );

    }
  );

}


if (searchInput) {

  searchInput.addEventListener(
    "input",
    () => {

      updateSuggestions(
        searchInput.value
      );

    }
  );


  searchInput.addEventListener(
    "keydown",
    event => {

      if (event.key === "Enter") {

        event.preventDefault();

        performSearch(
          searchInput.value
        );

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


if (themeToggle) {

  themeToggle.addEventListener(
    "click",
    toggleTheme
  );

}


if (menuButton) {

  menuButton.addEventListener(
    "click",
    toggleMobileMenu
  );

}


/* ================= INITIALIZE ================= */

loadTheme();

setupCategoryButtons();

setupQuickSearches();

renderTools(tools);


/* ================= V6 STATUS ================= */

console.log(
  `TzTools V6 loaded successfully — ${tools.length} tools`
);
