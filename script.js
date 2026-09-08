/* =========================================================
   TzTools V4.5 — COMPLETE BRAIN
   ========================================================= */


/* ================= TOOL DATABASE ================= */

const tools = [

  {
    id: "canva",
    name: "Canva",
    icon: "🎨",
    category: "Design",
    description: "Create logos, graphics, presentations, posters and more.",
    rating: 4.8,
    pricing: "Freemium",
    bestFor: "Beginners",
    tags: ["logo", "design", "graphics", "poster", "flyer"],
    url: "https://www.canva.com/"
  },

  {
    id: "adobe-express",
    name: "Adobe Express",
    icon: "✨",
    category: "Design",
    description: "Quickly create graphics, logos, social posts and visual content.",
    rating: 4.7,
    pricing: "Freemium",
    bestFor: "Quick designs",
    tags: ["logo", "design", "graphics", "social media"],
    url: "https://www.adobe.com/express/"
  },

  {
    id: "figma",
    name: "Figma",
    icon: "🖌️",
    category: "Design",
    description: "Design interfaces, graphics and digital products collaboratively.",
    rating: 4.8,
    pricing: "Freemium",
    bestFor: "UI design",
    tags: ["design", "ui", "website", "prototype"],
    url: "https://www.figma.com/"
  },

  {
    id: "capcut",
    name: "CapCut",
    icon: "🎬",
    category: "Video",
    description: "Edit videos, add effects, captions, music and transitions.",
    rating: 4.8,
    pricing: "Freemium",
    bestFor: "Social videos",
    tags: ["video", "editing", "tiktok", "reels", "shorts"],
    url: "https://www.capcut.com/"
  },

  {
    id: "davinci",
    name: "DaVinci Resolve",
    icon: "🎞️",
    category: "Video",
    description: "Professional video editing, colour grading and audio production.",
    rating: 4.9,
    pricing: "Free",
    bestFor: "Professional editing",
    tags: ["video", "editing", "film", "youtube"],
    url: "https://www.blackmagicdesign.com/products/davinciresolve"
  },

  {
    id: "veed",
    name: "VEED",
    icon: "📹",
    category: "Video",
    description: "Simple online video editor for social media and content creators.",
    rating: 4.6,
    pricing: "Freemium",
    bestFor: "Online editing",
    tags: ["video", "editing", "youtube", "captions"],
    url: "https://www.veed.io/"
  },

  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: "🤖",
    category: "AI",
    description: "Ask questions, brainstorm ideas, learn and get help with tasks.",
    rating: 4.9,
    pricing: "Freemium",
    bestFor: "AI assistance",
    tags: ["ai", "chat", "study", "writing", "research"],
    url: "https://chatgpt.com/"
  },

  {
    id: "claude",
    name: "Claude",
    icon: "🧠",
    category: "AI",
    description: "AI assistant for writing, analysis, brainstorming and research.",
    rating: 4.8,
    pricing: "Freemium",
    bestFor: "Writing & analysis",
    tags: ["ai", "writing", "research", "questions"],
    url: "https://claude.ai/"
  },

  {
    id: "gemini",
    name: "Google Gemini",
    icon: "✨",
    category: "AI",
    description: "Google's AI assistant for questions, ideas, learning and research.",
    rating: 4.7,
    pricing: "Freemium",
    bestFor: "Research",
    tags: ["ai", "research", "study", "questions"],
    url: "https://gemini.google.com/"
  },

  {
    id: "grammarly",
    name: "Grammarly",
    icon: "✍️",
    category: "Writing",
    description: "Improve grammar, spelling, clarity and writing style.",
    rating: 4.7,
    pricing: "Freemium",
    bestFor: "Writing improvement",
    tags: ["writing", "grammar", "spelling", "essay"],
    url: "https://www.grammarly.com/"
  },

  {
    id: "quillbot",
    name: "QuillBot",
    icon: "📝",
    category: "Writing",
    description: "Rewrite, paraphrase and improve your writing.",
    rating: 4.6,
    pricing: "Freemium",
    bestFor: "Paraphrasing",
    tags: ["writing", "rewrite", "paraphrase", "essay"],
    url: "https://quillbot.com/"
  },

  {
    id: "google-docs",
    name: "Google Docs",
    icon: "📄",
    category: "Writing",
    description: "Create and collaborate on documents online.",
    rating: 4.7,
    pricing: "Free",
    bestFor: "Documents",
    tags: ["writing", "documents", "essay", "school"],
    url: "https://docs.google.com/"
  },

  {
    id: "wordpress",
    name: "WordPress",
    icon: "🌐",
    category: "Website",
    description: "Create blogs, websites and online content.",
    rating: 4.6,
    pricing: "Freemium",
    bestFor: "Blogs",
    tags: ["website", "blog", "site"],
    url: "https://wordpress.com/"
  },

  {
    id: "wix",
    name: "Wix",
    icon: "🌐",
    category: "Website",
    description: "Build websites without needing to code.",
    rating: 4.6,
    pricing: "Freemium",
    bestFor: "Easy websites",
    tags: ["website", "web", "site", "store"],
    url: "https://www.wix.com/"
  },

  {
    id: "framer",
    name: "Framer",
    icon: "⚡",
    category: "Website",
    description: "Create modern websites with a powerful visual builder.",
    rating: 4.7,
    pricing: "Freemium",
    bestFor: "Modern websites",
    tags: ["website", "web", "landing", "design"],
    url: "https://www.framer.com/"
  },

  {
    id: "khan",
    name: "Khan Academy",
    icon: "📚",
    category: "Student",
    description: "Learn maths, science and many other subjects for free.",
    rating: 4.9,
    pricing: "Free",
    bestFor: "Learning",
    tags: ["study", "school", "math", "science", "learning"],
    url: "https://www.khanacademy.org/"
  },

  {
    id: "wolfram",
    name: "WolframAlpha",
    icon: "🧮",
    category: "Student",
    description: "Compute answers and explore mathematical and scientific topics.",
    rating: 4.8,
    pricing: "Freemium",
    bestFor: "Math & science",
    tags: ["study", "math", "science", "questions"],
    url: "https://www.wolframalpha.com/"
  },

  {
    id: "quizlet",
    name: "Quizlet",
    icon: "📖",
    category: "Student",
    description: "Study with flashcards, quizzes and learning activities.",
    rating: 4.7,
    pricing: "Freemium",
    bestFor: "Revision",
    tags: ["study", "school", "flashcards", "quiz"],
    url: "https://quizlet.com/"
  },

  {
    id: "notion",
    name: "Notion",
    icon: "📓",
    category: "Productivity",
    description: "Organize notes, tasks, projects and information.",
    rating: 4.8,
    pricing: "Freemium",
    bestFor: "Organization",
    tags: ["productivity", "notes", "planning", "projects"],
    url: "https://www.notion.com/"
  },

  {
    id: "trello",
    name: "Trello",
    icon: "📋",
    category: "Productivity",
    description: "Organize tasks and projects using simple visual boards.",
    rating: 4.7,
    pricing: "Freemium",
    bestFor: "Task management",
    tags: ["productivity", "tasks", "planning", "projects"],
    url: "https://trello.com/"
  },

  {
    id: "removebg",
    name: "Remove.bg",
    icon: "🖼️",
    category: "Image",
    description: "Automatically remove backgrounds from images.",
    rating: 4.7,
    pricing: "Freemium",
    bestFor: "Background removal",
    tags: ["image", "photo", "background", "remove background"],
    url: "https://www.remove.bg/"
  },

  {
    id: "pixlr",
    name: "Pixlr",
    icon: "🌈",
    category: "Image",
    description: "Edit photos and create graphics directly in your browser.",
    rating: 4.6,
    pricing: "Freemium",
    bestFor: "Photo editing",
    tags: ["image", "photo", "editing", "graphics"],
    url: "https://pixlr.com/"
  },


  /* ================= V4.5 AI TOOLS ================= */

  {
    id: "perplexity",
    name: "Perplexity",
    icon: "🔎",
    category: "AI",
    description: "AI-powered search and research with useful cited answers.",
    rating: 4.8,
    pricing: "Freemium",
    bestFor: "Research",
    tags: ["ai", "search", "research", "questions", "answers"],
    url: "https://www.perplexity.ai/"
  },

  {
    id: "mistral-le-chat",
    name: "Le Chat",
    icon: "💬",
    category: "AI",
    description: "AI assistant for writing, research, coding and everyday tasks.",
    rating: 4.7,
    pricing: "Freemium",
    bestFor: "AI assistance",
    tags: ["ai", "chat", "writing", "research", "coding"],
    url: "https://chat.mistral.ai/"
  },

  {
    id: "deepseek",
    name: "DeepSeek",
    icon: "🧠",
    category: "AI",
    description: "AI assistant for questions, reasoning, writing and coding.",
    rating: 4.7,
    pricing: "Free",
    bestFor: "Reasoning & coding",
    tags: ["ai", "chat", "coding", "math", "questions"],
    url: "https://www.deepseek.com/"
  },

  {
    id: "grok",
    name: "Grok",
    icon: "⚡",
    category: "AI",
    description: "AI assistant for questions, brainstorming and general tasks.",
    rating: 4.6,
    pricing: "Freemium",
    bestFor: "General AI",
    tags: ["ai", "chat", "questions", "brainstorm"],
    url: "https://grok.com/"
  },

  {
    id: "copilot",
    name: "Microsoft Copilot",
    icon: "🪟",
    category: "AI",
    description: "AI assistant for answering questions, writing and productivity.",
    rating: 4.7,
    pricing: "Freemium",
    bestFor: "Everyday assistance",
    tags: ["ai", "chat", "writing", "productivity", "questions"],
    url: "https://copilot.microsoft.com/"
  },

  {
    id: "meta-ai",
    name: "Meta AI",
    icon: "✨",
    category: "AI",
    description: "AI assistant for questions, ideas, writing and creative tasks.",
    rating: 4.6,
    pricing: "Free",
    bestFor: "Everyday AI",
    tags: ["ai", "chat", "ideas", "writing", "questions"],
    url: "https://www.meta.ai/"
  },

  {
    id: "pi",
    name: "Pi",
    icon: "💡",
    category: "AI",
    description: "Conversational AI designed for helpful everyday discussions.",
    rating: 4.5,
    pricing: "Free",
    bestFor: "Conversation",
    tags: ["ai", "chat", "conversation", "questions"],
    url: "https://pi.ai/"
  },

  {
    id: "gamma",
    name: "Gamma",
    icon: "📊",
    category: "AI",
    description: "Create presentations, documents and visual content with AI.",
    rating: 4.7,
    pricing: "Freemium",
    bestFor: "Presentations",
    tags: ["ai", "presentation", "slides", "documents", "design"],
    url: "https://gamma.app/"
  },

  {
    id: "copy-ai",
    name: "Copy.ai",
    icon: "✍️",
    category: "AI",
    description: "AI-powered writing and content creation.",
    rating: 4.6,
    pricing: "Freemium",
    bestFor: "Content creation",
    tags: ["ai", "writing", "copywriting", "content"],
    url: "https://www.copy.ai/"
  },

  {
    id: "jasper",
    name: "Jasper",
    icon: "📝",
    category: "AI",
    description: "AI platform for creating and improving marketing content.",
    rating: 4.6,
    pricing: "Paid",
    bestFor: "Marketing content",
    tags: ["ai", "writing", "marketing", "content"],
    url: "https://www.jasper.ai/"
  },

  {
    id: "writesonic",
    name: "Writesonic",
    icon: "🖊️",
    category: "AI",
    description: "AI tools for writing, content creation and research.",
    rating: 4.5,
    pricing: "Freemium",
    bestFor: "AI writing",
    tags: ["ai", "writing", "content", "research"],
    url: "https://writesonic.com/"
  },

  {
    id: "otter-ai",
    name: "Otter.ai",
    icon: "🎙️",
    category: "AI",
    description: "Record, transcribe and summarize conversations and meetings.",
    rating: 4.6,
    pricing: "Freemium",
    bestFor: "Transcription",
    tags: ["ai", "transcription", "notes", "meetings", "audio"],
    url: "https://otter.ai/"
  },

  {
    id: "elevenlabs",
    name: "ElevenLabs",
    icon: "🔊",
    category: "AI",
    description: "Create AI-generated voices, speech and audio content.",
    rating: 4.8,
    pricing: "Freemium",
    bestFor: "AI voice",
    tags: ["ai", "voice", "audio", "speech", "text to speech"],
    url: "https://elevenlabs.io/"
  },

  {
    id: "runway",
    name: "Runway",
    icon: "🎥",
    category: "AI",
    description: "Create and edit videos using powerful AI tools.",
    rating: 4.7,
    pricing: "Freemium",
    bestFor: "AI video",
    tags: ["ai", "video", "editing", "generation", "film"],
    url: "https://runwayml.com/"
  },

  {
    id: "suno",
    name: "Suno",
    icon: "🎵",
    category: "AI",
    description: "Create music and songs with AI.",
    rating: 4.7,
    pricing: "Freemium",
    bestFor: "AI music",
    tags: ["ai", "music", "audio", "song", "creative"],
    url: "https://suno.com/"
  },

  {
    id: "leonardo",
    name: "Leonardo.Ai",
    icon: "🖼️",
    category: "AI",
    description: "Create AI-generated images and creative visual content.",
    rating: 4.7,
    pricing: "Freemium",
    bestFor: "AI images",
    tags: ["ai", "image", "images", "art", "design"],
    url: "https://leonardo.ai/"
  },
    {
        id: "openai",
        name: "OpenAI",
        description: "AI tools for writing, coding, research, and more.",
        category: "AI",
        pricing: "Freemium",
        url: "https://openai.com",
        keywords: ["ai", "chat", "writing", "coding", "research"]
    },
    {
        id: "mistral",
        name: "Mistral AI",
        description: "AI models and assistants for everyday tasks and development.",
        category: "AI",
        pricing: "Freemium",
        url: "https://mistral.ai",
        keywords: ["ai", "chat", "coding", "models"]
    },
    {
        id: "huggingface",
        name: "Hugging Face",
        description: "A huge hub for AI models, datasets, and machine learning tools.",
        category: "AI",
        pricing: "Free",
        url: "https://huggingface.co",
        keywords: ["ai", "models", "machine learning", "datasets"]
    },
    {
        id: "deepseek",
        name: "DeepSeek",
        description: "AI assistant focused on reasoning, coding, and general tasks.",
        category: "AI",
        pricing: "Free",
        url: "https://www.deepseek.com",
        keywords: ["ai", "coding", "reasoning", "chat"]
    },
    {
        id: "perplexity",
        name: "Perplexity",
        description: "AI-powered search and research assistant.",
        category: "AI",
        pricing: "Freemium",
        url: "https://www.perplexity.ai",
        keywords: ["ai", "search", "research", "answers"]
    },
    {
        id: "gemini",
        name: "Google Gemini",
        description: "Google's AI assistant for writing, research, images, and more.",
        category: "AI",
        pricing: "Freemium",
        url: "https://gemini.google.com",
        keywords: ["ai", "google", "writing", "research", "images"]
    },
    {
        id: "copilot",
        name: "Microsoft Copilot",
        description: "AI assistant for productivity, research, writing, and everyday questions.",
        category: "AI",
        pricing: "Freemium",
        url: "https://copilot.microsoft.com",
        keywords: ["ai", "microsoft", "productivity", "writing", "research"]
    },
    {
        id: "poe",
        name: "Poe",
        description: "A platform for interacting with multiple AI assistants and models.",
        category: "AI",
        pricing: "Freemium",
        url: "https://poe.com",
        keywords: ["ai", "chat", "models", "assistants"]
    },
    {
        id: "character-ai",
        name: "Character.AI",
        description: "Create and chat with AI-powered characters.",
        category: "AI",
        pricing: "Freemium",
        url: "https://character.ai",
        keywords: ["ai", "chat", "characters", "conversation"]
    },
    {
        id: "pi",
        name: "Pi",
        description: "A conversational AI designed for helpful everyday conversations.",
        category: "AI",
        pricing: "Free",
        url: "https://pi.ai",
        keywords: ["ai", "chat", "conversation", "assistant"]
    },
    {
        id: "you",
        name: "You.com",
        description: "AI-powered search, research, and productivity tools.",
        category: "AI",
        pricing: "Freemium",
        url: "https://you.com",
        keywords: ["ai", "search", "research", "productivity"]
    },
    {
        id: "gamma",
        name: "Gamma",
        description: "Create presentations, documents, and webpages with AI.",
        category: "AI",
        pricing: "Freemium",
        url: "https://gamma.app",
        keywords: ["ai", "presentations", "documents", "websites"]
    },
    {
        id: "jasper",
        name: "Jasper",
        description: "AI platform for marketing content and business writing.",
        category: "AI",
        pricing: "Paid",
        url: "https://www.jasper.ai",
        keywords: ["ai", "writing", "marketing", "content"]
    },
    {
        id: "writesonic",
        name: "Writesonic",
        description: "AI tools for writing, content creation, and research.",
        category: "AI",
        pricing: "Freemium",
        url: "https://writesonic.com",
        keywords: ["ai", "writing", "content", "research"]
    },
    {
        id: "copy-ai",
        name: "Copy.ai",
        description: "AI-powered tools for writing, marketing, and business workflows.",
        category: "AI",
        pricing: "Freemium",
        url: "https://www.copy.ai",
        keywords: ["ai", "writing", "marketing", "business"]
    },
];


/* ================= STORAGE ================= */

let favourites =
  JSON.parse(localStorage.getItem("tztools-favourites")) || [];

let comparisons =
  JSON.parse(localStorage.getItem("tztools-comparisons")) || [];

let recentlyUsed =
  JSON.parse(localStorage.getItem("tztools-recent")) || [];


/* ================= ELEMENTS ================= */

const searchInput = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
const clearSearch = document.getElementById("clearSearch");
const suggestions = document.getElementById("suggestions");

const featuredTools = document.getElementById("featuredTools");
const allTools = document.getElementById("allTools");

const directorySearch = document.getElementById("directorySearch");
const categoryFilter = document.getElementById("categoryFilter");
const pricingFilter = document.getElementById("pricingFilter");
const ratingFilter = document.getElementById("ratingFilter");
const sortFilter = document.getElementById("sortFilter");

const directoryCount = document.getElementById("directoryCount");

const favouriteTools = document.getElementById("favouriteTools");
const favouriteCount = document.getElementById("favouriteCount");

const comparisonCount = document.getElementById("comparisonCount");
const comparisonView = document.getElementById("comparisonView");

const compareBar = document.getElementById("compareBar");
const compareBarCount = document.getElementById("compareBarCount");
const openComparison = document.getElementById("openComparison");

const communityTools = document.getElementById("communityTools");

const themeButton = document.getElementById("themeButton");
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

const toast = document.getElementById("toast");


/* ================= HELPERS ================= */

function saveData() {

  localStorage.setItem(
    "tztools-favourites",
    JSON.stringify(favourites)
  );

  localStorage.setItem(
    "tztools-comparisons",
    JSON.stringify(comparisons)
  );

  localStorage.setItem(
    "tztools-recent",
    JSON.stringify(recentlyUsed)
  );

}


function getTool(id) {
  return tools.find(tool => tool.id === id);
}


function showToast(message) {

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.tzToastTimer);

  window.tzToastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);

}


/* ================= SMART SEARCH ================= */

const intentGroups = {

  Design: [
    "logo", "logos", "branding", "brand",
    "flyer", "poster", "graphic", "graphics",
    "design", "thumbnail", "banner"
  ],

  Video: [
    "video", "videos", "edit", "editing",
    "youtube", "tiktok", "reel", "reels",
    "shorts", "movie", "film", "caption"
  ],

  Website: [
    "website", "web", "site", "blog",
    "landing", "store", "shop", "portfolio"
  ],

  Student: [
    "study", "studying", "school", "student",
    "homework", "math", "science", "learn",
    "learning", "quiz", "flashcards", "revision"
  ],

  Writing: [
    "write", "writing", "essay", "grammar",
    "spell", "spelling", "rewrite",
    "paraphrase", "document", "letter"
  ],

  AI: [
    "ai", "artificial", "intelligence",
    "chat", "brainstorm", "assistant",
    "research", "question", "questions"
  ],

  Image: [
    "photo", "photos", "image", "images",
    "picture", "pictures", "background"
  ],

  Productivity: [
    "productivity", "organize", "organization",
    "planning", "plan", "tasks", "task",
    "notes", "projects", "calendar"
  ]

};


function detectIntent(query) {

  const q = query.toLowerCase();

  const detected = [];

  for (const category in intentGroups) {

    if (
      intentGroups[category].some(
        word => q.includes(word)
      )
    ) {
      detected.push(category);
    }

  }

  return detected;

}


function scoreTool(tool, query) {

  const q = query.toLowerCase().trim();

  if (!q) return 0;

  let score = 0;

  const words = q
    .replace(/[^\w\s-]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  const intents = detectIntent(q);

  if (tool.name.toLowerCase() === q) {
    score += 30;
  }

  words.forEach(word => {

    const name = tool.name.toLowerCase();
    const description = tool.description.toLowerCase();

    if (name.includes(word)) {
      score += 7;
    }

    if (description.includes(word)) {
      score += 2;
    }

    (tool.tags || tool.keywords || []).forEach(tag => {

      const t = tag.toLowerCase();

      if (t === word) {
        score += 10;
      }

      else if (
        t.includes(word) ||
        word.includes(t)
      ) {
        score += 4;
      }

    });

  });


  if (intents.includes(tool.category)) {
    score += 12;
  }


  score += tool.rating * 0.5;

  return score;

}


function searchTools(query) {

  return tools
    .map(tool => ({
      ...tool,
      score: scoreTool(tool, query)
    }))
    .filter(tool => tool.score > 0)
    .sort((a, b) => {

      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return b.rating - a.rating;

    })
    .slice(0, 10);

}


/* ================= TOOL CARD ================= */

function createToolCard(tool) {
  const tags = tool.tags || tool.keywords || [];
  const link = tool.link || tool.url || "#";

  return `
    <div class="tool-card">

      <div class="tool-icon">
        ${tool.icon || "🛠️"}
      </div>

      <div class="tool-info">

        <div class="tool-header">
          <h3>${tool.name}</h3>
          <span class="rating">⭐ ${tool.rating || "N/A"}</span>
        </div>

        <p>
          ${tool.bestFor || tool.description || "A useful digital tool."}
        </p>

        <div class="tool-tags">
          ${tags
            .slice(0, 4)
            .map(tag => `<span>#${tag}</span>`)
            .join("")}
        </div>

        <div class="tool-meta">
          <span>${tool.category || "Other"}</span>
          <span>${tool.pricing || "Unknown"}</span>
        </div>

        <div class="tool-actions">
          <a href="${link}" target="_blank" rel="noopener noreferrer">
            Visit Tool →
          </a>
        </div>

      </div>

    </div>
  `;
}








/* ================= RENDER TOOLS ================= */



function renderTools(container, list) {
  if (!container) return;

  if (!list || !list.length) {
    container.innerHTML = `
      <div class="empty">
        <h2>🔎 No tools found</h2>
        <p>Try a different search or category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list
    .map(tool => createToolCard(tool))
    .join("");
}


/* ================= FEATURED ================= */

function renderFeatured() {

  if (!featuredTools) return;

  const featured = [...tools]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  renderTools(featuredTools, featured);

}


/* ================= DIRECTORY ================= */

function renderDirectory() {

  if (!allTools) return;

  const query =
    directorySearch?.value.toLowerCase().trim() || "";

  const category =
    categoryFilter?.value || "all";

  const pricing =
    pricingFilter?.value || "all";

  const minimumRating =
    Number(ratingFilter?.value || 0);

  const sort =
    sortFilter?.value || "recommended";

  let results = [...tools];


  if (query) {

    results = results.filter(tool => {

      const searchable = [
        tool.name,
        tool.description,
        tool.category,
        tool.bestFor,
        ...tool.tags
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(query);

    });

  }


  if (category !== "all") {

    results = results.filter(
      tool => tool.category === category
    );

  }


  if (pricing !== "all") {

    results = results.filter(
      tool => tool.pricing === pricing
    );

  }


  if (minimumRating > 0) {

    results = results.filter(
      tool => tool.rating >= minimumRating
    );

  }


  const selectedPricing =
    [...document.querySelectorAll(".pricing-check:checked")]
      .map(input => input.value);

  if (selectedPricing.length) {

    results = results.filter(
      tool => selectedPricing.includes(tool.pricing)
    );

  }


  if (sort === "rating") {

    results.sort(
      (a, b) => b.rating - a.rating
    );

  }

  else if (sort === "name") {

    results.sort(
      (a, b) => a.name.localeCompare(b.name)
    );

  }


  if (directoryCount) {

    directoryCount.textContent =
      `${results.length} tool${results.length === 1 ? "" : "s"} found`;

  }

  renderTools(allTools, results);

}


/* ================= FAVOURITES ================= */

function toggleFavourite(id) {

  if (favourites.includes(id)) {

    favourites =
      favourites.filter(item => item !== id);

    showToast("Removed from favourites");

  }

  else {

    favourites.push(id);

    showToast("Added to favourites ❤️");

  }

  saveData();

  updateCounts();

  renderFeatured();
  renderDirectory();
  renderDashboard();
  renderCommunity();

}


function renderFavourites() {

  if (!favouriteTools) return;

  const list =
    favourites
      .map(getTool)
      .filter(Boolean);

  renderTools(favouriteTools, list);

}


/* ================= COMPARISON ================= */

function toggleComparison(id) {

  if (comparisons.includes(id)) {

    comparisons =
      comparisons.filter(item => item !== id);

    showToast("Removed from comparison");

  }

  else {

    if (comparisons.length >= 3) {

      showToast("You can compare up to 3 tools");

      return;

    }

    comparisons.push(id);

    showToast("Added to comparison ⚖️");

  }

  saveData();

  updateCounts();

  renderFeatured();
  renderDirectory();
  renderDashboard();

}


function renderComparison() {

  if (!comparisonView) return;

  const selected =
    comparisons
      .map(getTool)
      .filter(Boolean);


  if (!selected.length) {

    comparisonView.innerHTML = `
      <div class="empty">

        <h2>⚖️ No tools selected</h2>

        <p>
          Choose up to 3 tools to compare them.
        </p>

      </div>
    `;

    return;

  }


  comparisonView.innerHTML = `

    <div class="comparison-table-wrapper">

      <table class="comparison-table">

        <thead>

          <tr>

            <th>Feature</th>

            ${selected
              .map(tool => `<th>${tool.icon} ${tool.name}</th>`)
              .join("")}

          </tr>

        </thead>

        <tbody>

          <tr>
            <td>Category</td>
            ${selected.map(tool => `<td>${tool.category}</td>`).join("")}
          </tr>

          <tr>
            <td>Rating</td>
            ${selected.map(tool => `<td>⭐ ${tool.rating}</td>`).join("")}
          </tr>

          <tr>
            <td>Pricing</td>
            ${selected.map(tool => `<td>${tool.pricing}</td>`).join("")}
          </tr>

          <tr>
            <td>Best for</td>
            ${selected.map(tool => `<td>${tool.bestFor}</td>`).join("")}
          </tr>

          <tr>
            <td>Action</td>

            ${selected.map(tool => `
              <td>
                <a
                  class="visit-button"
                  href="${tool.url}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit →
                </a>
              </td>
            `).join("")}

          </tr>

        </tbody>

      </table>

    </div>
  `;

}


/* ================= DASHBOARD ================= */

function renderDashboard() {

  renderFavourites();
  renderComparison();
  updateCounts();

}


/* ================= COMMUNITY ================= */

function renderCommunity() {

  if (!communityTools) return;

  const popular =
    [...tools]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 8);

  renderTools(communityTools, popular);

}


/* ================= COUNTS ================= */

function updateCounts() {

  if (favouriteCount) {
    favouriteCount.textContent =
      favourites.length;
  }

  if (comparisonCount) {
    comparisonCount.textContent =
      comparisons.length;
  }

  if (compareBarCount) {

    compareBarCount.textContent =
      `${comparisons.length} selected`;

  }

  if (compareBar) {

    compareBar.classList.toggle(
      "show",
      comparisons.length > 0
    );

  }

}


/* ================= RECENTLY USED ================= */

function addRecentlyUsed(id) {

  recentlyUsed =
    recentlyUsed.filter(item => item !== id);

  recentlyUsed.unshift(id);

  recentlyUsed =
    recentlyUsed.slice(0, 6);

  saveData();

}


/* ================= SEARCH SUGGESTIONS ================= */

const suggestionSearches = [
  {
    icon: "🎨",
    text: "Make a logo"
  },
  {
    icon: "🎬",
    text: "Edit a video"
  },
  {
    icon: "📚",
    text: "Help me study"
  },
  {
    icon: "🌐",
    text: "Build a website"
  },
  {
    icon: "🤖",
    text: "Find an AI tool"
  }
];


function renderSuggestions(query) {

  if (!suggestions) return;

  const q = query.toLowerCase().trim();

  if (!q) {

    suggestions.classList.remove("open");
    suggestions.innerHTML = "";

    return;

  }


  const matching =
    suggestionSearches
      .filter(item =>
        item.text.toLowerCase().includes(q)
      )
      .slice(0, 5);


  if (!matching.length) {

    suggestions.classList.remove("open");
    suggestions.innerHTML = "";

    return;

  }


  suggestions.innerHTML =
    matching.map(item => `

      <button
        class="suggestion"
        data-search="${item.text}"
      >

        <span class="suggestion-icon">
          ${item.icon}
        </span>

        <span>
          ${item.text}
        </span>

      </button>

    `).join("");


  suggestions.classList.add("open");

}


/* ================= HOME SEARCH ================= */

function performSearch(query) {

  const cleanQuery =
    query.trim();

  if (!cleanQuery) {

    showToast("Tell us what you want to accomplish.");

    return;

  }

  const results =
    searchTools(cleanQuery);


  showPage("tools");


  if (directorySearch) {
    directorySearch.value = cleanQuery;
  }

  if (categoryFilter) {
    categoryFilter.value = "all";
  }

  if (pricingFilter) {
    pricingFilter.value = "all";
  }

  if (ratingFilter) {
    ratingFilter.value = "0";
  }

  if (sortFilter) {
    sortFilter.value = "recommended";
  }


  if (directoryCount) {

    directoryCount.textContent =
      `${results.length} recommended tool${results.length === 1 ? "" : "s"}`;

  }


  renderTools(allTools, results);

}


/* ================= PAGE NAVIGATION ================= */

function showPage(pageName) {

  document
    .querySelectorAll(".page")
    .forEach(page => {
      page.classList.remove("active");
    });


  const page =
    document.getElementById(
      pageName + "Page"
    );


  if (page) {
    page.classList.add("active");
  }


  mobileMenu?.classList.remove("open");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  if (pageName === "tools") {
    renderDirectory();
  }

  if (pageName === "dashboard") {
    renderDashboard();
  }

  if (pageName === "community") {
    renderCommunity();
  }

}


/* ================= EVENTS ================= */

document.addEventListener("click", event => {

  const pageButton =
    event.target.closest("[data-page]");

  if (pageButton) {

    showPage(
      pageButton.dataset.page
    );

    return;

  }


  const categoryButton =
    event.target.closest("[data-category]");

  if (categoryButton) {

    showPage("tools");

    if (categoryFilter) {
      categoryFilter.value =
        categoryButton.dataset.category;
    }

    renderDirectory();

    return;

  }


  const searchQuick =
    event.target.closest("[data-search]");

  if (searchQuick) {

    const query =
      searchQuick.dataset.search;

    if (searchInput) {
      searchInput.value = query;
    }

    performSearch(query);

    return;

  }


  const favouriteButton =
    event.target.closest("[data-favourite]");

  if (favouriteButton) {

    toggleFavourite(
      favouriteButton.dataset.favourite
    );

    return;

  }


  const compareButton =
    event.target.closest("[data-compare]");

  if (compareButton) {

    toggleComparison(
      compareButton.dataset.compare
    );

    return;

  }


  const recentLink =
    event.target.closest("[data-recent]");

  if (recentLink) {

    addRecentlyUsed(
      recentLink.dataset.recent
    );

  }

});


/* ================= SEARCH EVENTS ================= */

searchButton?.addEventListener(
  "click",
  () => {

    performSearch(
      searchInput?.value || ""
    );

    if (suggestions) {
      suggestions.classList.remove("open");
    }

  }
);


searchInput?.addEventListener(
  "input",
  () => {

    const value =
      searchInput.value;

    if (clearSearch) {

      clearSearch.style.display =
        value ? "block" : "none";

    }

    renderSuggestions(value);

  }
);


searchInput?.addEventListener(
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


clearSearch?.addEventListener(
  "click",
  () => {

    searchInput.value = "";

    clearSearch.style.display =
      "none";

    suggestions?.classList.remove("open");

    searchInput.focus();

  }
);


/* ================= DIRECTORY EVENTS ================= */

[
  directorySearch,
  categoryFilter,
  pricingFilter,
  ratingFilter,
  sortFilter
].forEach(element => {

  element?.addEventListener(
    "input",
    renderDirectory
  );

  element?.addEventListener(
    "change",
    renderDirectory
  );

});


document
  .querySelectorAll(".pricing-check")
  .forEach(checkbox => {

    checkbox.addEventListener(
      "change",
      renderDirectory
    );

  });


/* ================= COMPARE ================= */

openComparison?.addEventListener(
  "click",
  () => {

    showPage("dashboard");

    setTimeout(() => {

      comparisonView?.scrollIntoView({
        behavior: "smooth"
      });

    }, 150);

  }
);


/* ================= MOBILE MENU ================= */

menuButton?.addEventListener(
  "click",
  () => {

    mobileMenu?.classList.toggle("open");

  }
);


/* ================= DARK MODE ================= */

function applyTheme() {

  const theme =
    localStorage.getItem("tztools-theme");

  if (theme === "dark") {

    document.body.classList.add(
      "dark-mode"
    );

    if (themeButton) {
      themeButton.textContent = "☀️";
    }

  }

  else {

    document.body.classList.remove(
      "dark-mode"
    );

    if (themeButton) {
      themeButton.textContent = "🌙";
    }

  }

}


themeButton?.addEventListener(
  "click",
  () => {

    const dark =
      document.body.classList.toggle(
        "dark-mode"
      );

    localStorage.setItem(
      "tztools-theme",
      dark ? "dark" : "light"
    );

    themeButton.textContent =
      dark ? "☀️" : "🌙";

  }
);


/* ================= INITIALIZE ================= */

applyTheme();

renderFeatured();

renderDirectory();

renderDashboard();

renderCommunity();

updateCounts();


console.log(
  `TzTools V4.5 loaded successfully — ${tools.length} tools`
);
