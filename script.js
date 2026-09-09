/* =========================================================
   TZTOOLS — V6 JAVASCRIPT FOUNDATION
   Search → Match → Recommend → Visit
========================================================= */


/* =========================================================
   TOOL DATABASE
========================================================= */

const tools = [

  // ================= AI =================

  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: "🤖",
    description: "AI assistant for writing, studying, brainstorming, coding and more.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.9,
    url: "https://chatgpt.com/",
    tags: ["ai", "chat", "writing", "study", "coding", "assistant"]
  },

  {
    id: "gemini",
    name: "Google Gemini",
    icon: "✨",
    description: "Google's AI assistant for research, writing, ideas and everyday tasks.",
    category: "AI",
    pricing: "Free",
    rating: 4.8,
    url: "https://gemini.google.com/",
    tags: ["ai", "google", "research", "writing", "study", "assistant"]
  },

  {
    id: "claude",
    name: "Claude",
    icon: "🧠",
    description: "AI assistant useful for writing, analysis, coding and long documents.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://claude.ai/",
    tags: ["ai", "writing", "coding", "research", "documents"]
  },


  // ================= DESIGN =================

  {
    id: "canva",
    name: "Canva",
    icon: "🎨",
    description: "Create logos, posters, presentations, social graphics and more.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.9,
    url: "https://www.canva.com/",
    tags: ["design", "logo", "logos", "poster", "graphics", "presentation", "social media"]
  },

  {
    id: "adobe-express",
    name: "Adobe Express",
    icon: "🖌️",
    description: "Quickly create graphics, social posts, flyers and visual content.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.adobe.com/express/",
    tags: ["design", "logo", "graphics", "poster", "flyer", "social media"]
  },

  {
    id: "figma",
    name: "Figma",
    icon: "🧩",
    description: "Design websites, apps, interfaces and collaborative prototypes.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://www.figma.com/",
    tags: ["design", "ui", "ux", "website", "app", "prototype"]
  },


  // ================= VIDEO =================

  {
    id: "capcut",
    name: "CapCut",
    icon: "🎬",
    description: "Easy video editor for social media, short videos and creative projects.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://www.capcut.com/",
    tags: ["video", "editing", "edit", "tiktok", "youtube", "shorts", "reels"]
  },

  {
    id: "davinci",
    name: "DaVinci Resolve",
    icon: "🎞️",
    description: "Professional video editing, color grading, effects and audio production.",
    category: "Video",
    pricing: "Free",
    rating: 4.9,
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    tags: ["video", "editing", "edit", "professional", "color", "audio"]
  },

  {
    id: "veed",
    name: "VEED",
    icon: "📹",
    description: "Browser-based video editor for social media and online content.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.veed.io/",
    tags: ["video", "editing", "edit", "social media", "subtitles"]
  },


  // ================= WRITING =================

  {
    id: "grammarly",
    name: "Grammarly",
    icon: "✍️",
    description: "Improve grammar, spelling, clarity and writing quality.",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.grammarly.com/",
    tags: ["writing", "grammar", "essay", "school", "proofreading"]
  },

  {
    id: "quillbot",
    name: "QuillBot",
    icon: "📝",
    description: "Paraphrase, summarize and improve your writing.",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://quillbot.com/",
    tags: ["writing", "paraphrase", "summarize", "essay", "school"]
  },

  {
    id: "google-docs",
    name: "Google Docs",
    icon: "📄",
    description: "Create, edit and collaborate on documents online.",
    category: "Writing",
    pricing: "Free",
    rating: 4.8,
    url: "https://docs.google.com/",
    tags: ["writing", "documents", "essay", "school", "collaboration"]
  },


  // ================= WEBSITES =================

  {
    id: "wordpress",
    name: "WordPress",
    icon: "🌐",
    description: "Create websites, blogs and online publications.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://wordpress.com/",
    tags: ["website", "websites", "blog", "blogging", "site"]
  },

  {
    id: "wix",
    name: "Wix",
    icon: "🏗️",
    description: "Build websites using an easy visual website builder.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.wix.com/",
    tags: ["website", "websites", "site", "business", "builder"]
  },

  {
    id: "framer",
    name: "Framer",
    icon: "⚡",
    description: "Design and publish modern websites with a visual builder.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.framer.com/",
    tags: ["website", "websites", "design", "site", "builder"]
  },


  // ================= STUDENTS =================

  {
    id: "khan-academy",
    name: "Khan Academy",
    icon: "🎓",
    description: "Free lessons and practice for maths, science and other subjects.",
    category: "Students",
    pricing: "Free",
    rating: 4.9,
    url: "https://www.khanacademy.org/",
    tags: ["study", "student", "students", "school", "maths", "science", "learning"]
  },

  {
    id: "wolframalpha",
    name: "WolframAlpha",
    icon: "🔢",
    description: "Computational knowledge engine for maths, science and more.",
    category: "Students",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://www.wolframalpha.com/",
    tags: ["study", "student", "students", "math", "maths", "science", "calculation"]
  },

  {
    id: "quizlet",
    name: "Quizlet",
    icon: "📚",
    description: "Study with flashcards, practice tests and learning activities.",
    category: "Students",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://quizlet.com/",
    tags: ["study", "student", "students", "school", "flashcards", "learning"]
  },


  // ================= PRODUCTIVITY =================

  {
    id: "notion",
    name: "Notion",
    icon: "📓",
    description: "Organize notes, projects, tasks and personal knowledge.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://www.notion.so/",
    tags: ["productivity", "notes", "tasks", "planning", "organization"]
  },

  {
    id: "trello",
    name: "Trello",
    icon: "📋",
    description: "Organize projects and tasks using flexible boards.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://trello.com/",
    tags: ["productivity", "tasks", "planning", "projects", "organization"]
  },


  // ================= IMAGES =================

  {
    id: "remove-bg",
    name: "Remove.bg",
    icon: "🪄",
    description: "Automatically remove backgrounds from images.",
    category: "Images",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.remove.bg/",
    tags: ["image", "images", "photo", "background", "remove background", "editing"]
  },

  {
    id: "pixlr",
    name: "Pixlr",
    icon: "🖼️",
    description: "Online photo editor for quick image editing and designs.",
    category: "Images",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://pixlr.com/",
    tags: ["image", "images", "photo", "editing", "design"]
  }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const searchInput = document.getElementById("searchInput");
const toolsGrid = document.getElementById("toolsGrid");
const searchButton = document.getElementById("searchButton");


/* =========================================================
   SEARCH INTENT
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

  design: [
    "design",
    "graphic",
    "graphics",
    "poster",
    "flyer",
    "banner"
  ],

  video: [
    "video",
    "videos",
    "edit video",
    "video editing",
    "youtube video",
    "tiktok",
    "reels",
    "shorts"
  ],

  writing: [
    "write",
    "writing",
    "essay",
    "article",
    "grammar",
    "proofread",
    "paraphrase"
  ],

  website: [
    "website",
    "websites",
    "web",
    "site",
    "make a website",
    "build a website"
  ],

  study: [
    "study",
    "studying",
    "student",
    "school",
    "homework",
    "learn",
    "learning",
    "math",
    "maths",
    "science"
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
    "organization",
    "tasks",
    "planning",
    "notes"
  ],

  image: [
    "image",
    "images",
    "photo",
    "photos",
    "picture",
    "background"
  ]

};


/* =========================================================
   DETECT USER INTENT
========================================================= */

function detectIntent(query) {

  const text = query.toLowerCase();

  for (const [intent, keywords] of Object.entries(intentGroups)) {

    for (const keyword of keywords) {

      if (text.includes(keyword)) {
        return intent;
      }

    }

  }

  return null;
}


/* =========================================================
   SCORE TOOLS
========================================================= */

function scoreTool(tool, query) {

  const text = query.toLowerCase();

  if (!text.trim()) {
    return 0;
  }

  let score = 0;

  const intent = detectIntent(text);

  const tags = tool.tags || [];

  /* Exact name match */
  if (tool.name.toLowerCase() === text) {
    score += 100;
  }

  /* Name contains query */
  if (tool.name.toLowerCase().includes(text)) {
    score += 40;
  }

  /* Tag matching */
  tags.forEach(tag => {

    if (text.includes(tag.toLowerCase())) {
      score += 20;
    }

    if (tag.toLowerCase().includes(text)) {
      score += 10;
    }

  });


  /* Intent matching */

  const intentCategoryMap = {

    logo: ["Design"],
    design: ["Design"],
    video: ["Video"],
    writing: ["Writing"],
    website: ["Websites"],
    study: ["Students"],
    ai: ["AI"],
    productivity: ["Productivity"],
    image: ["Images"]

  };

  if (
    intent &&
    intentCategoryMap[intent] &&
    intentCategoryMap[intent].includes(tool.category)
  ) {
    score += 50;
  }


  /* Small rating bonus */

  score += tool.rating * 2;


  return score;
}


/* =========================================================
   SEARCH TOOLS
========================================================= */

function searchTools(query) {

  const text = query.trim();

  if (!text) {
    return tools.slice();
  }

  return tools
    .map(tool => ({
      tool,
      score: scoreTool(tool, text)
    }))
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(result => result.tool)
    .slice(0, 10);
}


/* =========================================================
   CREATE TOOL CARD
========================================================= */

function createToolCard(tool) {

  return `
    <article class="tool-card">

      <div class="tool-icon">
        ${tool.icon}
      </div>

      <div class="tool-info">

        <div class="tool-title-row">

          <h3>${tool.name}</h3>

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


/* =========================================================
   RENDER TOOLS
========================================================= */

function renderTools(container, toolList) {

  if (!container) return;

  if (!toolList || toolList.length === 0) {

    container.innerHTML = `
      <div class="empty">
        <h3>No matching tools found</h3>
        <p>
          Try something like "make a logo",
          "edit videos", or "study maths".
        </p>
      </div>
    `;

    return;
  }

  container.innerHTML = toolList
    .map(tool => createToolCard(tool))
    .join("");
}


/* =========================================================
   PERFORM SEARCH
========================================================= */

function performSearch() {

  const query = searchInput
    ? searchInput.value.trim()
    : "";

  const results = searchTools(query);

  renderTools(toolsGrid, results);

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
    "keydown",
    event => {

      if (event.key === "Enter") {
        performSearch();
      }

    }
  );

  searchInput.addEventListener(
    "input",
    () => {

      if (!searchInput.value.trim()) {

        renderTools(
          toolsGrid,
          tools
        );

      }

    }
  );

}


/* =========================================================
   INITIAL LOAD
========================================================= */

renderTools(
  toolsGrid,
  tools
);


console.log(
  `TzTools V6 loaded successfully — ${tools.length} tools`
);
