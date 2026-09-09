/* =========================================
   TZTOOLS V6 — CORE JAVASCRIPT
   ========================================= */

"use strict";

console.log("TzTools V6 loading...");

/* =========================================
   TOOL DATABASE
   ========================================= */

const tools = [
  {
    id: "canva",
    name: "Canva",
    description: "Create logos, graphics, presentations, posters and more.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.8,
    icon: "🎨",
    tags: ["logo", "design", "graphics", "poster", "presentation"],
    link: "https://www.canva.com/"
  },

  {
    id: "figma",
    name: "Figma",
    description: "Design interfaces, websites, apps and collaborative prototypes.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.7,
    icon: "🖌️",
    tags: ["design", "ui", "ux", "website", "prototype"],
    link: "https://www.figma.com/"
  },

  {
    id: "adobe-express",
    name: "Adobe Express",
    description: "Quickly create graphics, social posts, logos and visual content.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.6,
    icon: "✨",
    tags: ["logo", "design", "graphics", "social media"],
    link: "https://www.adobe.com/express/"
  },

  {
    id: "capcut",
    name: "CapCut",
    description: "Edit videos with effects, transitions, captions and templates.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.7,
    icon: "🎬",
    tags: ["video", "editing", "reels", "shorts", "tiktok"],
    link: "https://www.capcut.com/"
  },

  {
    id: "davinci-resolve",
    name: "DaVinci Resolve",
    description: "Professional video editing, color grading and audio production.",
    category: "Video",
    pricing: "Free",
    rating: 4.8,
    icon: "🎥",
    tags: ["video", "editing", "color", "professional"],
    link: "https://www.blackmagicdesign.com/products/davinciresolve"
  },

  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "Ask questions, brainstorm ideas, write, learn and solve problems.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.9,
    icon: "🤖",
    tags: ["ai", "writing", "study", "research", "questions"],
    link: "https://chatgpt.com/"
  },

  {
    id: "gemini",
    name: "Google Gemini",
    description: "AI assistant for research, writing, brainstorming and learning.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.7,
    icon: "✨",
    tags: ["ai", "study", "research", "writing"],
    link: "https://gemini.google.com/"
  },

  {
    id: "grammarly",
    name: "Grammarly",
    description: "Improve grammar, spelling, clarity and writing style.",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.6,
    icon: "✍️",
    tags: ["writing", "grammar", "essay", "school"],
    link: "https://www.grammarly.com/"
  },

  {
    id: "quillbot",
    name: "QuillBot",
    description: "Paraphrase, summarize and improve written content.",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.5,
    icon: "📝",
    tags: ["writing", "paraphrase", "summarize", "essay"],
    link: "https://quillbot.com/"
  },

  {
    id: "notion",
    name: "Notion",
    description: "Organize notes, projects, tasks and personal information.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.7,
    icon: "📓",
    tags: ["notes", "productivity", "planning", "school"],
    link: "https://www.notion.so/"
  },

  {
    id: "khan-academy",
    name: "Khan Academy",
    description: "Learn maths, science and other subjects with free lessons.",
    category: "Students",
    pricing: "Free",
    rating: 4.8,
    icon: "🎓",
    tags: ["study", "school", "math", "science", "learning"],
    link: "https://www.khanacademy.org/"
  },

  {
    id: "wordpress",
    name: "WordPress",
    description: "Build and manage websites, blogs and online content.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.6,
    icon: "🌐",
    tags: ["website", "blog", "web", "business"],
    link: "https://wordpress.com/"
  },

  {
    id: "wix",
    name: "Wix",
    description: "Build websites using an easy visual website builder.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.5,
    icon: "🌍",
    tags: ["website", "web", "business", "portfolio"],
    link: "https://www.wix.com/"
  }
];


/* =========================================
   APP STATE
   ========================================= */

let favourites =
  JSON.parse(localStorage.getItem("tztools-favourites")) || [];

let comparisons =
  JSON.parse(localStorage.getItem("tztools-comparisons")) || [];

let recentlyUsed =
  JSON.parse(localStorage.getItem("tztools-recent")) || [];


/* =========================================
   DOM ELEMENTS
   ========================================= */

const searchInput =
  document.getElementById("searchInput");

const toolsGrid =
  document.getElementById("toolsGrid");

const recentlyUsedContainer =
  document.getElementById("recentlyUsedContainer");


/* =========================================
   TOOL HELPERS
   ========================================= */

function getTool(toolId) {
  return tools.find(tool => tool.id === toolId);
}


/* =========================================
   SEARCH
   ========================================= */

function searchTools(query = "") {

  const text = query
    .toLowerCase()
    .trim();

  if (!text) {
    return tools;
  }

  return tools.filter(tool => {

    const searchableText = [
      tool.name,
      tool.description,
      tool.category,
      ...(tool.tags || [])
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(text);
  });
}


/* =========================================
   TOOL CARD — V6
   ========================================= */

function createToolCard(tool) {

  const favorite =
    favourites.includes(tool.id);

  const recent =
    recentlyUsed.includes(tool.id);

  return `
    <article class="tool-card">

      <div class="tool-icon">
        ${tool.icon}
      </div>

      <div class="tool-info">

        <div class="tool-header">

          <h3>${tool.name}</h3>

          <button
            class="icon-button favorite-button"
            onclick="toggleFavorite('${tool.id}')"
            aria-label="Favorite ${tool.name}"
          >
            ${favorite ? "❤️" : "🤍"}
          </button>

        </div>

        <p class="tool-description">
          ${tool.description}
        </p>

        <div class="tool-tags">
          ${(tool.tags || [])
            .slice(0, 4)
            .map(tag => `<span>${tag}</span>`)
            .join("")}
        </div>

        <div class="tool-meta">

          <span>${tool.category}</span>

          <span>${tool.pricing}</span>

          <span>⭐ ${tool.rating}</span>

        </div>

        <div class="tool-actions">

          <button
            class="compare-button"
            onclick="toggleCompare('${tool.id}')"
          >
            ⚖️ Compare
          </button>

          <a
            class="visit-button"
            href="${tool.link}"
            target="_blank"
            rel="noopener noreferrer"
            onclick="trackRecentlyUsed('${tool.id}')"
          >
            Visit Tool →
          </a>

        </div>

      </div>

    </article>
  `;
}


/* =========================================
   RENDER TOOLS
   ========================================= */

function renderTools(container, toolList) {

  if (!container) return;

  if (!toolList.length) {

    container.innerHTML = `
      <div class="empty-state">
        <h3>No tools found</h3>
        <p>Try searching for something else.</p>
      </div>
    `;

    return;
  }

  container.innerHTML =
    toolList
      .map(tool => createToolCard(tool))
      .join("");
}


/* =========================================
   INITIAL RENDER
   ========================================= */

function renderInitialTools() {

  if (!toolsGrid) return;

  renderTools(
    toolsGrid,
    tools
  );
}


/* =========================================
   SEARCH EVENT
   ========================================= */

if (searchInput) {

  searchInput.addEventListener(
    "input",
    () => {

      const results =
        searchTools(searchInput.value);

      renderTools(
        toolsGrid,
        results
      );

    }
  );
}


/* =========================================
   START APP
   ========================================= */

renderInitialTools();

console.log(
  `TzTools V6 loaded successfully — ${tools.length} tools`
);
