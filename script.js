/* =========================================================
   TZTOOLS — MAIN JAVASCRIPT
   V5 FOUNDATION
   ========================================================= */

"use strict";

/* =========================================================
   TOOL DATABASE
   ========================================================= */

const tools = [
  {
    id: "canva",
    name: "Canva",
    category: "Design",
    description: "Create logos, graphics, presentations, posters and more.",
    pricing: "Freemium",
    rating: 4.8,
    icon: "🎨",
    url: "https://www.canva.com/",
    keywords: [
      "logo",
      "design",
      "poster",
      "graphics",
      "presentation",
      "social media"
    ]
  },

  {
    id: "adobe-express",
    name: "Adobe Express",
    category: "Design",
    description: "Create graphics, social posts, videos and branded content.",
    pricing: "Freemium",
    rating: 4.7,
    icon: "✨",
    url: "https://www.adobe.com/express/",
    keywords: [
      "logo",
      "design",
      "graphics",
      "poster",
      "social media",
      "video"
    ]
  },

  {
    id: "figma",
    name: "Figma",
    category: "Design",
    description: "Design interfaces, websites, apps and digital products.",
    pricing: "Freemium",
    rating: 4.8,
    icon: "🖌️",
    url: "https://www.figma.com/",
    keywords: [
      "ui",
      "ux",
      "website",
      "app",
      "design",
      "prototype"
    ]
  },

  {
    id: "capcut",
    name: "CapCut",
    category: "Video",
    description: "Edit videos with effects, captions, transitions and more.",
    pricing: "Freemium",
    rating: 4.7,
    icon: "🎬",
    url: "https://www.capcut.com/",
    keywords: [
      "video",
      "editing",
      "edit video",
      "tiktok",
      "reels",
      "shorts"
    ]
  },

  {
    id: "davinci-resolve",
    name: "DaVinci Resolve",
    category: "Video",
    description: "Professional video editing, color grading and visual effects.",
    pricing: "Free",
    rating: 4.9,
    icon: "🎥",
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    keywords: [
      "video",
      "editing",
      "professional",
      "film",
      "color grading"
    ]
  },

  {
    id: "veed",
    name: "VEED",
    category: "Video",
    description: "Simple online video editing with captions and AI tools.",
    pricing: "Freemium",
    rating: 4.6,
    icon: "📹",
    url: "https://www.veed.io/",
    keywords: [
      "video",
      "editing",
      "captions",
      "subtitles",
      "ai video"
    ]
  },

  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "AI",
    description: "AI assistant for writing, studying, brainstorming and more.",
    pricing: "Freemium",
    rating: 4.9,
    icon: "🤖",
    url: "https://chatgpt.com/",
    keywords: [
      "ai",
      "writing",
      "study",
      "homework",
      "research",
      "ideas"
    ]
  },

  {
    id: "gemini",
    name: "Google Gemini",
    category: "AI",
    description: "Google's AI assistant for research, writing and everyday tasks.",
    pricing: "Freemium",
    rating: 4.7,
    icon: "✨",
    url: "https://gemini.google.com/",
    keywords: [
      "ai",
      "research",
      "writing",
      "study",
      "homework"
    ]
  },

  {
    id: "claude",
    name: "Claude",
    category: "AI",
    description: "AI assistant for writing, analysis, coding and research.",
    pricing: "Freemium",
    rating: 4.8,
    icon: "🧠",
    url: "https://claude.ai/",
    keywords: [
      "ai",
      "writing",
      "coding",
      "research",
      "analysis"
    ]
  },

  {
    id: "grammarly",
    name: "Grammarly",
    category: "Writing",
    description: "Improve grammar, spelling, clarity and writing style.",
    pricing: "Freemium",
    rating: 4.7,
    icon: "✍️",
    url: "https://www.grammarly.com/",
    keywords: [
      "writing",
      "grammar",
      "essay",
      "school",
      "proofreading"
    ]
  },

  {
    id: "quillbot",
    name: "QuillBot",
    category: "Writing",
    description: "Paraphrase, summarize and improve your writing.",
    pricing: "Freemium",
    rating: 4.6,
    icon: "📝",
    url: "https://quillbot.com/",
    keywords: [
      "writing",
      "paraphrase",
      "rewrite",
      "essay",
      "summary"
    ]
  },

  {
    id: "google-docs",
    name: "Google Docs",
    category: "Writing",
    description: "Create and collaborate on documents online.",
    pricing: "Free",
    rating: 4.8,
    icon: "📄",
    url: "https://docs.google.com/",
    keywords: [
      "writing",
      "document",
      "essay",
      "school",
      "notes"
    ]
  },

  {
    id: "wordpress",
    name: "WordPress",
    category: "Websites",
    description: "Build websites and blogs with powerful customization.",
    pricing: "Free",
    rating: 4.6,
    icon: "🌐",
    url: "https://wordpress.com/",
    keywords: [
      "website",
      "blog",
      "web",
      "site"
    ]
  },

  {
    id: "wix",
    name: "Wix",
    category: "Websites",
    description: "Build websites using an easy visual website builder.",
    pricing: "Freemium",
    rating: 4.6,
    icon: "🌎",
    url: "https://www.wix.com/",
    keywords: [
      "website",
      "web",
      "business",
      "portfolio"
    ]
  },

  {
    id: "framer",
    name: "Framer",
    category: "Websites",
    description: "Create modern websites with powerful visual design tools.",
    pricing: "Freemium",
    rating: 4.7,
    icon: "⚡",
    url: "https://www.framer.com/",
    keywords: [
      "website",
      "web design",
      "portfolio",
      "landing page"
    ]
  },

  {
    id: "khan-academy",
    name: "Khan Academy",
    category: "Students",
    description: "Learn maths, science and other subjects for free.",
    pricing: "Free",
    rating: 4.9,
    icon: "📚",
    url: "https://www.khanacademy.org/",
    keywords: [
      "study",
      "school",
      "math",
      "science",
      "learning"
    ]
  },

  {
    id: "wolframalpha",
    name: "WolframAlpha",
    category: "Students",
    description: "Compute answers and explore maths, science and data.",
    pricing: "Freemium",
    rating: 4.7,
    icon: "🔢",
    url: "https://www.wolframalpha.com/",
    keywords: [
      "math",
      "calculation",
      "science",
      "homework",
      "study"
    ]
  },

  {
    id: "quizlet",
    name: "Quizlet",
    category: "Students",
    description: "Study using flashcards, quizzes and learning activities.",
    pricing: "Freemium",
    rating: 4.7,
    icon: "🎓",
    url: "https://quizlet.com/",
    keywords: [
      "study",
      "flashcards",
      "quiz",
      "school",
      "revision"
    ]
  },

  {
    id: "notion",
    name: "Notion",
    category: "Productivity",
    description: "Organize notes, projects, tasks and personal information.",
    pricing: "Freemium",
    rating: 4.8,
    icon: "📓",
    url: "https://www.notion.so/",
    keywords: [
      "notes",
      "productivity",
      "tasks",
      "planning",
      "school"
    ]
  },

  {
    id: "trello",
    name: "Trello",
    category: "Productivity",
    description: "Organize projects and tasks using visual boards.",
    pricing: "Freemium",
    rating: 4.6,
    icon: "📋",
    url: "https://trello.com/",
    keywords: [
      "tasks",
      "productivity",
      "planning",
      "projects"
    ]
  },

  {
    id: "remove-bg",
    name: "Remove.bg",
    category: "Images",
    description: "Remove image backgrounds automatically.",
    pricing: "Freemium",
    rating: 4.7,
    icon: "🖼️",
    url: "https://www.remove.bg/",
    keywords: [
      "background",
      "remove background",
      "image",
      "photo"
    ]
  },

  {
    id: "pixlr",
    name: "Pixlr",
    category: "Images",
    description: "Edit photos and create graphics directly in your browser.",
    pricing: "Freemium",
    rating: 4.5,
    icon: "🌈",
    url: "https://pixlr.com/",
    keywords: [
      "photo",
      "image",
      "editing",
      "graphics"
    ]
  }
];

/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const searchInput = document.getElementById("searchInput");
const toolsGrid = document.getElementById("toolsGrid");

/* =========================================================
   TOOL SEARCH
   ========================================================= */

function searchTools(query = "") {
  const cleanQuery = query.trim().toLowerCase();

  if (!cleanQuery) {
    return tools;
  }

  const words = cleanQuery.split(/\s+/);

  return tools
    .map(tool => {
      let score = 0;

      words.forEach(word => {
        if (tool.name.toLowerCase().includes(word)) {
          score += 10;
        }

        if (tool.category.toLowerCase().includes(word)) {
          score += 6;
        }

        if (tool.description.toLowerCase().includes(word)) {
          score += 4;
        }

        tool.keywords.forEach(keyword => {
          if (keyword.toLowerCase().includes(word)) {
            score += 8;
          }
        });
      });

      return {
        tool,
        score
      };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(result => result.tool)
    .slice(0, 10);
}

/* =========================================================
   TOOL CARD
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

        <p>${tool.description}</p>

        <div class="tool-meta">
          <span>${tool.category}</span>
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

/* =========================================================
   RENDER TOOLS
   ========================================================= */

function renderTools(results = tools) {
  if (!toolsGrid) return;

  if (results.length === 0) {
    toolsGrid.innerHTML = `
      <div class="empty-state">
        <h3>No tools found</h3>
        <p>Try searching for something else.</p>
      </div>
    `;

    return;
  }

  toolsGrid.innerHTML = results
    .map(tool => createToolCard(tool))
    .join("");
}

/* =========================================================
   SEARCH EVENTS
   ========================================================= */

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const results = searchTools(searchInput.value);

    renderTools(results);
  });
}

/* =========================================================
   INITIAL LOAD
   ========================================================= */

renderTools();

console.log(
  `TzTools loaded successfully — ${tools.length} tools`
);
