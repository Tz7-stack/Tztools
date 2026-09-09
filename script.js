/* =========================================================
   TZTOOLS V6.1
   Smart Recommendation Engine
   ========================================================= */

/* -----------------------------
   TOOL DATABASE
----------------------------- */

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
    keywords: ["ai", "chatbot", "assistant", "study", "writing", "coding", "ideas"]
  },

  {
    name: "Google Gemini",
    category: "AI",
    icon: "✨",
    description: "Google's AI assistant for research, writing, learning and creative tasks.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://gemini.google.com/",
    keywords: ["ai", "assistant", "research", "study", "writing"]
  },

  {
    name: "Claude",
    category: "AI",
    icon: "🧠",
    description: "AI assistant useful for writing, analysis, coding and long-form work.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://claude.ai/",
    keywords: ["ai", "writing", "analysis", "coding", "research"]
  },

  {
    name: "Microsoft Copilot",
    category: "AI",
    icon: "💡",
    description: "AI assistant for questions, research, writing and everyday productivity.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://copilot.microsoft.com/",
    keywords: ["ai", "assistant", "research", "writing", "productivity"]
  },

  {
    name: "Perplexity",
    category: "AI",
    icon: "🔎",
    description: "AI-powered search and research assistant for finding information.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.perplexity.ai/",
    keywords: ["ai", "research", "search", "questions", "information"]
  },


  // DESIGN
  {
    name: "Canva",
    category: "Design",
    icon: "🎨",
    description: "Easy design platform for logos, posters, flyers, presentations and graphics.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://www.canva.com/",
    keywords: [
      "logo", "logo maker", "branding", "poster", "flyer",
      "thumbnail", "graphics", "social media", "presentation"
    ]
  },

  {
    name: "Adobe Express",
    category: "Design",
    icon: "🖌️",
    description: "Quick design and content creation for graphics, logos, social posts and more.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.adobe.com/express/",
    keywords: [
      "logo", "branding", "poster", "flyer",
      "graphic", "social media", "design"
    ]
  },

  {
    name: "Figma",
    category: "Design",
    icon: "🔷",
    description: "Professional collaborative design tool for interfaces, graphics and prototypes.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.figma.com/",
    keywords: [
      "logo", "branding", "design", "ui", "interface",
      "prototype", "graphics"
    ]
  },

  {
    name: "Photopea",
    category: "Design",
    icon: "🖼️",
    description: "Browser-based image editor with powerful Photoshop-style features.",
    rating: 4.6,
    pricing: "Free",
    url: "https://www.photopea.com/",
    keywords: [
      "logo", "photo", "image", "graphics",
      "poster", "flyer", "editing"
    ]
  },

  {
    name: "Pixlr",
    category: "Design",
    icon: "🌈",
    description: "Online photo and graphic editor for quick creative projects.",
    rating: 4.5,
    pricing: "Freemium",
    url: "https://pixlr.com/",
    keywords: [
      "logo", "photo", "image", "design",
      "graphics", "poster", "editing"
    ]
  },


  // VIDEO
  {
    name: "CapCut",
    category: "Video",
    icon: "🎬",
    description: "Popular video editor for short videos, social media, effects and more.",
    rating: 4.8,
    pricing: "Freemium",
    url: "https://www.capcut.com/",
    keywords: [
      "video", "video editing", "youtube",
      "reels", "shorts", "tiktok", "effects"
    ]
  },

  {
    name: "DaVinci Resolve",
    category: "Video",
    icon: "🎞️",
    description: "Professional video editing, color grading, effects and audio production.",
    rating: 4.8,
    pricing: "Free",
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    keywords: [
      "video", "editing", "film", "movie",
      "color grading", "professional"
    ]
  },

  {
    name: "VEED",
    category: "Video",
    icon: "📹",
    description: "Online video editor for social media, subtitles, clips and content.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://www.veed.io/",
    keywords: [
      "video", "editing", "subtitles",
      "youtube", "social media", "reels"
    ]
  },

  {
    name: "Clipchamp",
    category: "Video",
    icon: "✂️",
    description: "Simple browser-based video editor for everyday content creation.",
    rating: 4.5,
    pricing: "Freemium",
    url: "https://clipchamp.com/",
    keywords: [
      "video", "editing", "youtube",
      "social media", "clips"
    ]
  },

  {
    name: "InVideo",
    category: "Video",
    icon: "🎥",
    description: "Online video creation platform with templates and AI-powered features.",
    rating: 4.5,
    pricing: "Freemium",
    url: "https://invideo.io/",
    keywords: [
      "video", "ai video", "youtube",
      "social media", "content"
    ]
  },


  // WRITING
  {
    name: "Grammarly",
    category: "Writing",
    icon: "✍️",
    description: "Writing assistant for grammar, spelling, clarity and tone.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.grammarly.com/",
    keywords: [
      "writing", "grammar", "essay",
      "proofread", "school", "correction"
    ]
  },

  {
    name: "QuillBot",
    category: "Writing",
    icon: "📝",
    description: "Writing assistant with paraphrasing, summarizing and grammar tools.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://quillbot.com/",
    keywords: [
      "writing", "paraphrase", "rewrite",
      "essay", "summarize", "school"
    ]
  },

  {
    name: "Google Docs",
    category: "Writing",
    icon: "📄",
    description: "Online document editor for writing, collaboration and school work.",
    rating: 4.7,
    pricing: "Free",
    url: "https://docs.google.com/",
    keywords: [
      "writing", "essay", "document",
      "school", "notes", "assignment"
    ]
  },

  {
    name: "LanguageTool",
    category: "Writing",
    icon: "🔤",
    description: "Grammar and spelling checker for improving written work.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://languagetool.org/",
    keywords: [
      "grammar", "writing", "proofread",
      "spelling", "essay"
    ]
  },

  {
    name: "Hemingway Editor",
    category: "Writing",
    icon: "📚",
    description: "Writing tool that helps make text clearer and easier to read.",
    rating: 4.5,
    pricing: "Free",
    url: "https://hemingwayapp.com/",
    keywords: [
      "writing", "essay", "clarity",
      "article", "school"
    ]
  },


  // WEBSITES
  {
    name: "WordPress",
    category: "Websites",
    icon: "🌐",
    description: "Website and blog platform for creating and managing websites.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://wordpress.com/",
    keywords: [
      "website", "blog", "web", "site",
      "business website"
    ]
  },

  {
    name: "Wix",
    category: "Websites",
    icon: "🧩",
    description: "Website builder for creating websites without needing to code.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://www.wix.com/",
    keywords: [
      "website", "web", "site",
      "business", "portfolio"
    ]
  },

  {
    name: "Framer",
    category: "Websites",
    icon: "⚡",
    description: "Modern website builder for creating polished websites visually.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.framer.com/",
    keywords: [
      "website", "web", "landing page",
      "portfolio", "design"
    ]
  },

  {
    name: "Webflow",
    category: "Websites",
    icon: "🔵",
    description: "Powerful visual website builder with advanced design control.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://webflow.com/",
    keywords: [
      "website", "web", "site",
      "design", "business"
    ]
  },

  {
    name: "Carrd",
    category: "Websites",
    icon: "🪪",
    description: "Simple platform for creating clean one-page websites.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://carrd.co/",
    keywords: [
      "website", "one page",
      "landing page", "portfolio"
    ]
  },

  {
    name: "GitHub Pages",
    category: "Websites",
    icon: "🐙",
    description: "Free static website hosting directly from GitHub repositories.",
    rating: 4.6,
    pricing: "Free",
    url: "https://pages.github.com/",
    keywords: [
      "website", "hosting", "web",
      "html", "css", "coding"
    ]
  },


  // STUDENTS
  {
    name: "Khan Academy",
    category: "Students",
    icon: "🎓",
    description: "Free learning platform covering maths, science and many school subjects.",
    rating: 4.8,
    pricing: "Free",
    url: "https://www.khanacademy.org/",
    keywords: [
      "study", "school", "math",
      "science", "learning", "exam"
    ]
  },

  {
    name: "WolframAlpha",
    category: "Students",
    icon: "🧮",
    description: "Computational knowledge engine for maths, science and calculations.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.wolframalpha.com/",
    keywords: [
      "math", "mathematics", "equation",
      "calculation", "science", "homework"
    ]
  },

  {
    name: "Quizlet",
    category: "Students",
    icon: "🃏",
    description: "Study platform with flashcards, quizzes and learning activities.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://quizlet.com/",
    keywords: [
      "study", "revision", "flashcards",
      "quiz", "exam", "school"
    ]
  },

  {
    name: "Desmos",
    category: "Students",
    icon: "📈",
    description: "Interactive graphing and mathematical tools for students.",
    rating: 4.7,
    pricing: "Free",
    url: "https://www.desmos.com/",
    keywords: [
      "math", "graph", "algebra",
      "equation", "geometry"
    ]
  },

  {
    name: "GeoGebra",
    category: "Students",
    icon: "📐",
    description: "Interactive mathematics software for geometry, algebra and graphs.",
    rating: 4.7,
    pricing: "Free",
    url: "https://www.geogebra.org/",
    keywords: [
      "math", "geometry", "algebra",
      "graph", "school"
    ]
  },

  {
    name: "Google Scholar",
    category: "Students",
    icon: "🔬",
    description: "Search engine for academic papers and scholarly research.",
    rating: 4.6,
    pricing: "Free",
    url: "https://scholar.google.com/",
    keywords: [
      "research", "study", "academic",
      "school", "papers"
    ]
  },


  // PRODUCTIVITY
  {
    name: "Notion",
    category: "Productivity",
    icon: "📓",
    description: "Workspace for notes, planning, projects and organizing information.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.notion.com/",
    keywords: [
      "notes", "productivity", "planning",
      "tasks", "organize", "projects"
    ]
  },

  {
    name: "Trello",
    category: "Productivity",
    icon: "📋",
    description: "Visual task and project management platform.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://trello.com/",
    keywords: [
      "tasks", "productivity", "projects",
      "planning", "organize"
    ]
  },

  {
    name: "Todoist",
    category: "Productivity",
    icon: "✅",
    description: "Task management app for organizing daily work and responsibilities.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://todoist.com/",
    keywords: [
      "todo", "tasks", "productivity",
      "planning", "organize"
    ]
  },

  {
    name: "Asana",
    category: "Productivity",
    icon: "📊",
    description: "Project and task management platform for organizing work.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://asana.com/",
    keywords: [
      "tasks", "projects", "productivity",
      "planning", "team"
    ]
  },

  {
    name: "Google Keep",
    category: "Productivity",
    icon: "💛",
    description: "Simple note-taking and list app for keeping ideas organized.",
    rating: 4.5,
    pricing: "Free",
    url: "https://keep.google.com/",
    keywords: [
      "notes", "todo", "lists",
      "productivity", "organize"
    ]
  },


  // IMAGES
  {
    name: "Remove.bg",
    category: "Images",
    icon: "✂️",
    description: "Automatically remove backgrounds from images.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.remove.bg/",
    keywords: [
      "image", "photo", "background",
      "remove background", "picture"
    ]
  },

  {
    name: "TinyPNG",
    category: "Images",
    icon: "🗜️",
    description: "Compress PNG and JPEG images while keeping good quality.",
    rating: 4.6,
    pricing: "Freemium",
    url: "https://tinypng.com/",
    keywords: [
      "image", "compress", "photo",
      "picture", "resize"
    ]
  },

  {
    name: "Unsplash",
    category: "Images",
    icon: "📷",
    description: "Large library of high-quality images for creative projects.",
    rating: 4.8,
    pricing: "Free",
    url: "https://unsplash.com/",
    keywords: [
      "images", "photos", "pictures",
      "stock photos", "background"
    ]
  },

  {
    name: "Pexels",
    category: "Images",
    icon: "📸",
    description: "Free stock photos and videos for creative projects.",
    rating: 4.8,
    pricing: "Free",
    url: "https://www.pexels.com/",
    keywords: [
      "images", "photos", "pictures",
      "stock photos", "videos"
    ]
  },


  // AUDIO
  {
    name: "Audacity",
    category: "Audio",
    icon: "🎙️",
    description: "Free audio recording and editing software.",
    rating: 4.7,
    pricing: "Free",
    url: "https://www.audacityteam.org/",
    keywords: [
      "audio", "music", "recording",
      "podcast", "sound", "editing"
    ]
  },

  {
    name: "BandLab",
    category: "Audio",
    icon: "🎵",
    description: "Online music creation, recording and collaboration platform.",
    rating: 4.6,
    pricing: "Free",
    url: "https://www.bandlab.com/",
    keywords: [
      "audio", "music", "recording",
      "song", "beats", "sound"
    ]
  },


  // PDF
  {
    name: "Smallpdf",
    category: "PDF & Documents",
    icon: "📕",
    description: "Online PDF tools for merging, compressing, converting and editing.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://smallpdf.com/",
    keywords: [
      "pdf", "document", "merge pdf",
      "compress pdf", "convert pdf"
    ]
  },

  {
    name: "iLovePDF",
    category: "PDF & Documents",
    icon: "❤️",
    description: "Collection of online tools for working with PDF documents.",
    rating: 4.7,
    pricing: "Freemium",
    url: "https://www.ilovepdf.com/",
    keywords: [
      "pdf", "document", "merge pdf",
      "split pdf", "compress pdf"
    ]
  },

  {
    name: "PDF24",
    category: "PDF & Documents",
    icon: "📑",
    description: "Free online PDF tools for editing, converting and managing documents.",
    rating: 4.7,
    pricing: "Free",
    url: "https://tools.pdf24.org/",
    keywords: [
      "pdf", "document", "convert pdf",
      "merge pdf", "compress pdf"
    ]
  }

];


/* -----------------------------
   SEARCH INTENTS
----------------------------- */

const intentGroups = {

  logo: {
    categories: ["Design"],
    keywords: [
      "logo",
      "logo maker",
      "brand logo",
      "business logo",
      "company logo",
      "branding"
    ]
  },

  design: {
    categories: ["Design"],
    keywords: [
      "design",
      "poster",
      "flyer",
      "banner",
      "thumbnail",
      "graphic",
      "graphics"
    ]
  },

  video: {
    categories: ["Video"],
    keywords: [
      "video",
      "edit video",
      "video editing",
      "youtube video",
      "reels",
      "shorts",
      "movie"
    ]
  },

  writing: {
    categories: ["Writing"],
    keywords: [
      "write",
      "writing",
      "essay",
      "article",
      "grammar",
      "rewrite",
      "paraphrase",
      "proofread"
    ]
  },

  website: {
    categories: ["Websites"],
    keywords: [
      "website",
      "web site",
      "webpage",
      "web page",
      "build a site",
      "make a site",
      "create a website"
    ]
  },

  study: {
    categories: ["Students"],
    keywords: [
      "study",
      "school",
      "learn",
      "homework",
      "revision",
      "exam",
      "student",
      "lesson"
    ]
  },

  math: {
    categories: ["Students"],
    keywords: [
      "math",
      "mathematics",
      "equation",
      "algebra",
      "calculation",
      "calculate",
      "geometry",
      "graph"
    ]
  },

  ai: {
    categories: ["AI"],
    keywords: [
      "ai",
      "artificial intelligence",
      "chatbot",
      "ai assistant"
    ]
  },

  productivity: {
    categories: ["Productivity"],
    keywords: [
      "productivity",
      "organize",
      "tasks",
      "todo",
      "planning",
      "notes",
      "project management"
    ]
  },

  image: {
    categories: ["Images"],
    keywords: [
      "image",
      "photo",
      "picture",
      "remove background",
      "compress image",
      "resize image",
      "stock photos"
    ]
  },

  audio: {
    categories: ["Audio"],
    keywords: [
      "audio",
      "music",
      "recording",
      "sound",
      "podcast",
      "edit audio"
    ]
  },

  pdf: {
    categories: ["PDF & Documents"],
    keywords: [
      "pdf",
      "merge pdf",
      "split pdf",
      "convert pdf",
      "compress pdf",
      "document"
    ]
  }

};


/* -----------------------------
   HELPERS
----------------------------- */

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}


/* -----------------------------
   DETECT USER INTENT
----------------------------- */

function detectIntents(query) {

  const text = normalizeText(query);

  const detected = [];

  Object.entries(intentGroups).forEach(([intent, data]) => {

    const matched = data.keywords.some(keyword =>
      text.includes(normalizeText(keyword))
    );

    if (matched) {
      detected.push(intent);
    }

  });

  return detected;
}


/* -----------------------------
   SCORE TOOLS
----------------------------- */

function scoreTool(tool, query, intents) {

  const text = normalizeText(query);

  const name = normalizeText(tool.name);
  const description = normalizeText(tool.description);
  const category = normalizeText(tool.category);

  const keywords = (tool.keywords || [])
    .map(keyword => normalizeText(keyword));

  let score = 0;


  // Exact tool search
  if (text === name) {
    score += 150;
  }


  // Tool name contains full query
  if (text.length > 2 && name.includes(text)) {
    score += 80;
  }


  // Query words
  const words = text
    .split(" ")
    .filter(word => word.length > 2);

  words.forEach(word => {

    if (name.includes(word)) {
      score += 25;
    }

    if (keywords.some(keyword => keyword.includes(word))) {
      score += 18;
    }

    if (description.includes(word)) {
      score += 7;
    }

  });


  // Intent/category matching
  intents.forEach(intent => {

    const group = intentGroups[intent];

    if (!group) return;


    if (
      group.categories.some(
        categoryName =>
          normalizeText(categoryName) === category
      )
    ) {
      score += 55;
    }


    group.keywords.forEach(keyword => {

      const normalizedKeyword = normalizeText(keyword);

      if (text.includes(normalizedKeyword)) {

        if (keywords.includes(normalizedKeyword)) {
          score += 35;
        } else {
          score += 12;
        }

      }

    });

  });


  return score;
}


/* -----------------------------
   SEARCH TOOLS
----------------------------- */

function searchTools(query) {

  const cleanQuery = normalizeText(query);

  if (!cleanQuery) {
    return tools.slice(0, 10);
  }


  const intents = detectIntents(cleanQuery);


  let results = tools
    .map(tool => ({
      ...tool,
      score: scoreTool(tool, cleanQuery, intents)
    }))
    .filter(tool => tool.score > 0)
    .sort((a, b) => b.score - a.score);


  /*
    If the search has a recognized intent,
    make sure we don't show completely unrelated tools.
  */

  if (intents.length > 0) {

    const intentCategories = new Set();

    intents.forEach(intent => {

      intentGroups[intent].categories.forEach(category => {
        intentCategories.add(category);
      });

    });


    const relevantResults = results.filter(tool =>
      intentCategories.has(tool.category)
    );


    if (relevantResults.length >= 3) {
      results = relevantResults;
    }

  }


  return results.slice(0, 10);
}


/* -----------------------------
   RENDER TOOLS
----------------------------- */

function renderTools(toolList, title = "") {

  const grid = document.getElementById("toolsGrid");

  if (!grid) return;


  if (!toolList.length) {

    grid.innerHTML = `
      <div class="empty-state">
        <h3>No matching tools found</h3>
        <p>Try searching for something like "make a logo", "edit videos", or "build a website".</p>
      </div>
    `;

    return;
  }


  const heading = title
    ? `
      <div class="search-result-heading">
        <h2>${title}</h2>
        <p>${toolList.length} relevant tools found</p>
      </div>
    `
    : "";


  grid.innerHTML = heading + toolList.map(tool => `

    <article class="tool-card">

      <div class="tool-card-top">

        <div class="tool-icon">
          ${tool.icon}
        </div>

        <div class="tool-info">

          <h3>${tool.name}</h3>

          <span class="tool-category">
            ${tool.category}
          </span>

        </div>

      </div>


      <p class="tool-description">
        ${tool.description}
      </p>


      <div class="tool-meta">

        <span>⭐ ${tool.rating}</span>

        <span>${tool.pricing}</span>

      </div>


      <a
        class="tool-button"
        href="${tool.url}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Tool →
      </a>

    </article>

  `).join("");

}


/* -----------------------------
   SEARCH
----------------------------- */

function performSearch(query) {

  const cleanQuery = query.trim();

  if (!cleanQuery) {
    renderTools(tools.slice(0, 10), "Popular Tools");
    return;
  }


  const results = searchTools(cleanQuery);

  renderTools(
    results,
    `Tools for "${cleanQuery}"`
  );

}


/* -----------------------------
   SUGGESTIONS
----------------------------- */

function showSuggestions(query) {

  const suggestions = document.getElementById("suggestions");

  if (!suggestions) return;


  const text = normalizeText(query);

  if (!text) {

    suggestions.innerHTML = "";

    return;
  }


  const suggestionList = [
    "Make a logo",
    "Edit videos",
    "Build a website",
    "Help me study",
    "Solve a math problem",
    "Improve my writing",
    "Find AI tools",
    "Edit an image",
    "Work with PDF files",
    "Create music"
  ];


  const matches = suggestionList
    .filter(item =>
      normalizeText(item).includes(text)
    )
    .slice(0, 5);


  suggestions.innerHTML = matches.map(item => `
    <button
      class="suggestion-item"
      type="button"
      data-suggestion="${item}"
    >
      🔎 ${item}
    </button>
  `).join("");


  suggestions
    .querySelectorAll(".suggestion-item")
    .forEach(button => {

      button.addEventListener("click", () => {

        const input = document.getElementById("searchInput");

        if (!input) return;

        input.value = button.dataset.suggestion;

        suggestions.innerHTML = "";

        performSearch(input.value);

      });

    });

}


/* -----------------------------
   CATEGORY FILTER
----------------------------- */

function setupCategoryFilter() {

  const filter = document.getElementById("categoryFilter");

  if (!filter) return;


  filter.addEventListener("change", () => {

    const selected = filter.value;


    if (selected === "all") {

      renderTools(tools.slice(0, 10), "Popular Tools");

      return;
    }


    const filtered = tools.filter(tool =>
      tool.category === selected
    );


    renderTools(
      filtered.slice(0, 10),
      selected
    );

  });

}


/* -----------------------------
   QUICK SEARCH BUTTONS
----------------------------- */

function setupQuickSearch() {

  document
    .querySelectorAll(".quick-search")
    .forEach(button => {

      button.addEventListener("click", () => {

        const query =
          button.dataset.query ||
          button.textContent.trim();

        const input =
          document.getElementById("searchInput");

        if (!input) return;

        input.value = query;

        performSearch(query);

        window.scrollTo({
          top: document.getElementById("tools")?.offsetTop || 0,
          behavior: "smooth"
        });

      });

    });

}


/* -----------------------------
   SEARCH EVENTS
----------------------------- */

function setupSearch() {

  const input =
    document.getElementById("searchInput");

  const searchButton =
    document.getElementById("searchButton");


  if (!input) return;


  input.addEventListener("input", () => {
    showSuggestions(input.value);
  });


  input.addEventListener("keydown", event => {

    if (event.key === "Enter") {

      event.preventDefault();

      showSuggestions("");

      performSearch(input.value);

    }

  });


  if (searchButton) {

    searchButton.addEventListener("click", () => {

      showSuggestions("");

      performSearch(input.value);

    });

  }

}


/* -----------------------------
   CATEGORIES POPUP
----------------------------- */

function setupCategories() {

  const overlay =
    document.getElementById("categoriesOverlay");

  const closeButton =
    document.getElementById("categoriesClose");

  const openButtons = [
    document.getElementById("categoriesButton"),
    document.getElementById("categoriesButtonHero"),
    document.getElementById("footerCategoriesButton")
  ].filter(Boolean);


  function openCategories() {

    if (!overlay) return;

    overlay.classList.add("active");

    document.body.classList.add("modal-open");

  }


  function closeCategories() {

    if (!overlay) return;

    overlay.classList.remove("active");

    document.body.classList.remove("modal-open");

  }


  openButtons.forEach(button => {
    button.addEventListener("click", openCategories);
  });


  if (closeButton) {
    closeButton.addEventListener("click", closeCategories);
  }


  if (overlay) {

    overlay.addEventListener("click", event => {

      if (event.target === overlay) {
        closeCategories();
      }

    });

  }


  document
    .querySelectorAll(".category-card")
    .forEach(button => {

      button.addEventListener("click", () => {

        const category =
          button.dataset.category;

        const filter =
          document.getElementById("categoryFilter");


        if (filter && category) {

          if (
            [...filter.options]
              .some(option => option.value === category)
          ) {
            filter.value = category;
          }

        }


        const filtered = tools.filter(tool =>
          category === "all"
            ? true
            : tool.category === category
        );


        renderTools(
          filtered.slice(0, 10),
          category === "all"
            ? "Popular Tools"
            : category
        );


        closeCategories();


        document
          .getElementById("tools")
          ?.scrollIntoView({
            behavior: "smooth"
          });

      });

    });

}


/* -----------------------------
   MOBILE NAV
----------------------------- */

function setupMobileMenu() {

  const menuButton =
    document.getElementById("menuButton");

  const navLinks =
    document.getElementById("navLinks");


  if (!menuButton || !navLinks) return;


  menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

  });


  navLinks
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });

    });

}


/* -----------------------------
   THEME
----------------------------- */

function setupTheme() {

  const themeToggle =
    document.getElementById("themeToggle");

  if (!themeToggle) return;


  const savedTheme =
    localStorage.getItem("tztools-theme");


  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }


  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    localStorage.setItem(
      "tztools-theme",
      document.body.classList.contains("dark-mode")
        ? "dark"
        : "light"
    );

  });

}


/* -----------------------------
   ESCAPE KEY
----------------------------- */

function setupEscapeKey() {

  document.addEventListener("keydown", event => {

    if (event.key !== "Escape") return;


    const overlay =
      document.getElementById("categoriesOverlay");

    if (overlay) {
      overlay.classList.remove("active");
    }


    document.body.classList.remove("modal-open");

  });

}


/* -----------------------------
   INITIALIZE
----------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  renderTools(
    tools.slice(0, 10),
    "Popular Tools"
  );


  setupSearch();

  setupQuickSearch();

  setupCategoryFilter();

  setupCategories();

  setupMobileMenu();

  setupTheme();

  setupEscapeKey();

});
