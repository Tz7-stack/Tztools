/* =========================================================
   TzTools V4 — Main JavaScript
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
  }

];


/* ================= STORAGE ================= */

let favourites =
  JSON.parse(localStorage.getItem("tztools-favourites")) || [];

let comparisons =
  JSON.parse(localStorage.getItem("tztools-comparisons")) || [];


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


/* ================= PAGE NAVIGATION ================= */

function showPage(pageName) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(pageName + "Page");

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


document.addEventListener("click", event => {

  const pageButton = event.target.closest("[data-page]");

  if (pageButton) {
    showPage(pageButton.dataset.page);
  }

});


/* ================= TOOL SCORING ================= */
/* ================= V4.5 SMART SEARCH ================= */

const intentGroups = {

  Design: {
    keywords: [
      "logo", "logos", "branding", "brand",
      "flyer", "poster", "graphic", "graphics",
      "design", "thumbnail", "banner"
    ],
    phrases: [
      "make a logo",
      "create a logo",
      "design a logo",
      "make a poster",
      "make a flyer",
      "create graphics",
      "brand my business"
    ]
  },

  Video: {
    keywords: [
      "video", "videos", "edit", "editing",
      "youtube", "tiktok", "reel", "reels",
      "shorts", "movie", "film", "caption"
    ],
    phrases: [
      "edit a video",
      "make a video",
      "edit videos",
      "make youtube videos",
      "make tiktok videos",
      "create reels"
    ]
  },

  Website: {
    keywords: [
      "website", "web", "site", "blog",
      "landing", "store", "shop", "portfolio"
    ],
    phrases: [
      "build a website",
      "make a website",
      "create a website",
      "build a site",
      "make an online store"
    ]
  },

  Student: {
    keywords: [
      "study", "studying", "school", "student",
      "homework", "math", "science", "learn",
      "learning", "quiz", "flashcards", "revision"
    ],
    phrases: [
      "help me study",
      "help with homework",
      "study for an exam",
      "learn mathematics",
      "learn science",
      "make flashcards"
    ]
  },

  Writing: {
    keywords: [
      "write", "writing", "essay", "grammar",
      "spell", "spelling", "rewrite",
      "paraphrase", "document", "letter"
    ],
    phrases: [
      "write an essay",
      "fix my grammar",
      "improve my writing",
      "rewrite this",
      "paraphrase this"
    ]
  },

  AI: {
    keywords: [
      "ai", "artificial", "intelligence",
      "chat", "brainstorm", "question",
      "questions", "research", "assistant"
    ],
    phrases: [
      "i need an ai",
      "find an ai tool",
      "help me brainstorm",
      "research something"
    ]
  },

  Image: {
    keywords: [
      "photo", "photos", "image", "images",
      "picture", "pictures", "background",
      "remove", "edit"
    ],
    phrases: [
      "remove background",
      "remove a background",
      "edit a photo",
      "edit an image",
      "remove image background"
    ]
  },

  Productivity: {
    keywords: [
      "productivity", "organize", "organization",
      "planning", "plan", "tasks", "task",
      "notes", "projects", "calendar"
    ],
    phrases: [
      "organize my work",
      "manage my tasks",
      "plan my work",
      "take notes",
      "manage a project"
    ]
  }

};


/* ================= INTENT DETECTION ================= */

function detectIntent(query) {

  const q = query.toLowerCase().trim();

  const detected = [];

  for (const category in intentGroups) {

    const group = intentGroups[category];

    const keywordMatch = group.keywords.some(
      keyword => q.includes(keyword)
    );

    const phraseMatch = group.phrases.some(
      phrase => q.includes(phrase)
    );

    if (keywordMatch || phraseMatch) {
      detected.push(category);
    }

  }

  return detected;

}


/* ================= SMART TOOL SCORING ================= */

function scoreTool(tool, query) {

  const q = query.toLowerCase().trim();

  if (!q) return 0;

  let score = 0;

  const words = q
    .split(/\s+/)
    .filter(Boolean);

  const intents = detectIntent(q);


  /* Exact tool name */

  if (tool.name.toLowerCase() === q) {
    score += 20;
  }


  /* Tool name */

  words.forEach(word => {

    if (
      tool.name
        .toLowerCase()
        .includes(word)
    ) {
      score += 5;
    }

  });


  /* Tags */

  words.forEach(word => {

    tool.tags.forEach(tag => {

      const cleanTag =
        tag.toLowerCase();

      if (cleanTag === word) {
        score += 8;
      }

      else if (
        cleanTag.includes(word) ||
        word.includes(cleanTag)
      ) {
        score += 4;
      }

    });

  });


  /* Category */

  if (intents.includes(tool.category)) {
    score += 12;
  }


  /* Description */

  words.forEach(word => {

    if (
      tool.description
        .toLowerCase()
        .includes(word)
    ) {
      score += 2;
    }

  });


  /* Best-for match */

  words.forEach(word => {

    if (
      tool.bestFor
        .toLowerCase()
        .includes(word)
    ) {
      score += 4;
    }

  });


  /* Phrase bonus */

  const allPhrases =
    Object.values(intentGroups)
      .flatMap(group => group.phrases);

  allPhrases.forEach(phrase => {

    if (q.includes(phrase)) {

      const category =
        Object.keys(intentGroups)
          .find(category =>
            intentGroups[category]
              .phrases
              .includes(phrase)
          );

      if (category === tool.category) {
        score += 10;
      }

    }

  });


  /* Rating becomes a small tie-breaker */

  score += tool.rating * 0.5;


  return score;

}


/* ================= SEARCH TOOLS ================= */

function searchTools(query) {

  const results = tools
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

    });


  return results.slice(0, 10);

}



/* ================= TOOL CARD ================= */

function createToolCard(tool) {

  const isFavourite =
    favourites.includes(tool.id);

  const isCompared =
    comparisons.includes(tool.id);

  return `

    <article class="tool-card">

      <div class="tool-icon">
        ${tool.icon}
      </div>

      <div class="tool-info">

        <h3>${tool.name}</h3>

        <p>${tool.description}</p>

        <div class="tool-rating">

          <span class="rating">
            ⭐ ${tool.rating}
          </span>

          <span class="best-for">
            Best for: ${tool.bestFor}
          </span>

        </div>

        <div class="tool-tags">

          ${tool.tags
            .slice(0, 4)
            .map(tag => `<span>#${tag}</span>`)
            .join("")}

        </div>

        <div class="tool-meta">

          <span>${tool.category}</span>

          <span>${tool.pricing}</span>

        </div>

        <div class="tool-actions">

          <a
            class="visit-button"
            href="${tool.url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Tool →
          </a>

          <button
            class="tool-action ${isFavourite ? "active" : ""}"
            data-favourite="${tool.id}"
          >
            ${isFavourite ? "❤️ Saved" : "♡ Save"}
          </button>

          <button
            class="tool-action ${isCompared ? "active" : ""}"
            data-compare="${tool.id}"
          >
            ${isCompared ? "✓ Compared" : "⚖️ Compare"}
          </button>

        </div>

      </div>

    </article>

  `;

}


function renderTools(container, list) {

  if (!container) return;

  if (!list.length) {

    container.innerHTML = `

      <div class="empty">

        <h2>No tools found 😕</h2>

        <p>
          Try a different search or filter.
        </p>

      </div>

    `;

    return;

  }

  container.innerHTML =
    list.map(createToolCard).join("");

}


/* ================= FEATURED ================= */

function renderFeatured() {

  const popular = [...tools]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  renderTools(featuredTools, popular);

}


/* ================= MAIN SEARCH ================= */

function performSearch() {

  const query =
    searchInput?.value.trim() || "";

  if (!query) {

    showToast("Tell me what you want to do 🔎");

    return;

  }

  const results = searchTools(query);

  showPage("tools");

  directorySearch.value = query;

  categoryFilter.value = "all";
  pricingFilter.value = "all";
  ratingFilter.value = "0";
  sortFilter.value = "recommended";

  document
    .querySelectorAll(".pricing-check")
    .forEach(check => {
      check.checked = false;
    });

  renderDirectory(results);

}


/* ================= SMART SUGGESTIONS ================= */

function renderSuggestions() {

  if (!suggestions || !searchInput) return;

  const query =
    searchInput.value.trim();

  if (!query) {

    suggestions.classList.remove("open");
    suggestions.innerHTML = "";

    return;

  }

  const results = searchTools(query).slice(0, 5);

  if (!results.length) {

    suggestions.classList.remove("open");
    suggestions.innerHTML = "";

    return;

  }

  suggestions.innerHTML = results
    .map(tool => `

      <button
        class="suggestion"
        data-suggestion="${tool.id}"
      >

        <span class="suggestion-icon">
          ${tool.icon}
        </span>

        <span>

          <strong>${tool.name}</strong>

          <small>
            ${tool.category} · ${tool.bestFor}
          </small>

        </span>

      </button>

    `)
    .join("");

  suggestions.classList.add("open");

}


searchInput?.addEventListener(
  "input",
  () => {

    clearSearch.style.display =
      searchInput.value ? "block" : "none";

    renderSuggestions();

  }
);


searchInput?.addEventListener(
  "keydown",
  event => {

    if (event.key === "Enter") {
      performSearch();
    }

  }
);


searchButton?.addEventListener(
  "click",
  performSearch
);


clearSearch?.addEventListener(
  "click",
  () => {

    searchInput.value = "";

    clearSearch.style.display = "none";

    suggestions.classList.remove("open");

    searchInput.focus();

  }
);


/* ================= SUGGESTION CLICK ================= */

document.addEventListener("click", event => {

  const suggestion =
    event.target.closest("[data-suggestion]");

  if (!suggestion) return;

  const tool =
    getTool(suggestion.dataset.suggestion);

  if (!tool) return;

  searchInput.value = tool.name;

  suggestions.classList.remove("open");

  performSearch();

});


/* ================= QUICK SEARCH ================= */

document.addEventListener("click", event => {

  const button =
    event.target.closest("[data-search]");

  if (!button) return;

  const query =
    button.dataset.search;

  searchInput.value = query;

  clearSearch.style.display = "block";

  performSearch();

});


/* ================= CATEGORY CLICK ================= */

document.addEventListener("click", event => {

  const button =
    event.target.closest("[data-category]");

  if (!button) return;

  const category =
    button.dataset.category;

  showPage("tools");

  categoryFilter.value = category;

  directorySearch.value = "";

  renderDirectory();

});


/* ================= DIRECTORY FILTERING ================= */

function renderDirectory(searchResults = null) {

  if (!allTools) return;

  let list =
    searchResults || [...tools];

  if (!searchResults) {

    const query =
      directorySearch?.value
        .trim()
        .toLowerCase() || "";

    const category =
      categoryFilter?.value || "all";

    const pricing =
      pricingFilter?.value || "all";

    const minimumRating =
      Number(ratingFilter?.value || 0);

    const checkedPricing =
      [...document.querySelectorAll(
        ".pricing-check:checked"
      )].map(check => check.value);


    if (query) {

      list = list.filter(tool => {

        const text = `

          ${tool.name}
          ${tool.category}
          ${tool.description}
          ${tool.tags.join(" ")}

        `.toLowerCase();

        return text.includes(query);

      });

    }


    if (category !== "all") {

      list = list.filter(
        tool => tool.category === category
      );

    }


    if (pricing !== "all") {

      list = list.filter(
        tool => tool.pricing === pricing
      );

    }


    if (checkedPricing.length) {

      list = list.filter(
        tool => checkedPricing.includes(tool.pricing)
      );

    }


    if (minimumRating > 0) {

      list = list.filter(
        tool => tool.rating >= minimumRating
      );

    }


    if (sortFilter?.value === "rating") {

      list.sort(
        (a, b) => b.rating - a.rating
      );

    }


    if (sortFilter?.value === "name") {

      list.sort(
        (a, b) => a.name.localeCompare(b.name)
      );

    }

  }


  renderTools(allTools, list);


  if (directoryCount) {

    directoryCount.textContent =
      `${list.length} tool${list.length === 1 ? "" : "s"} found`;

  }

}


/* ================= FILTER EVENTS ================= */

[
  directorySearch,
  categoryFilter,
  pricingFilter,
  ratingFilter,
  sortFilter
].forEach(element => {

  element?.addEventListener(
    "input",
    () => renderDirectory()
  );

  element?.addEventListener(
    "change",
    () => renderDirectory()
  );

});


document
  .querySelectorAll(".pricing-check")
  .forEach(check => {

    check.addEventListener(
      "change",
      () => renderDirectory()
    );

  });


/* ================= FAVOURITES ================= */

function toggleFavourite(id) {

  if (favourites.includes(id)) {

    favourites =
      favourites.filter(
        favourite => favourite !== id
      );

    showToast("Removed from favourites");

  } else {

    favourites.push(id);

    showToast("Added to favourites ❤️");

  }

  saveData();

  refreshUI();

}


function renderDashboard() {

  if (favouriteCount) {
    favouriteCount.textContent =
      favourites.length;
  }

  if (comparisonCount) {
    comparisonCount.textContent =
      comparisons.length;
  }


  const favouriteList =
    favourites
      .map(getTool)
      .filter(Boolean);


  renderTools(
    favouriteTools,
    favouriteList
  );


  renderComparison();

}


/* ================= COMPARISON ================= */

function toggleComparison(id) {

  if (comparisons.includes(id)) {

    comparisons =
      comparisons.filter(
        item => item !== id
      );

    showToast("Removed from comparison");

  } else {

    if (comparisons.length >= 3) {

      showToast(
        "You can compare up to 3 tools."
      );

      return;

    }

    comparisons.push(id);

    showToast("Added to comparison ⚖️");

  }

  saveData();

  refreshUI();

}


function updateCompareBar() {

  if (!compareBar) return;

  if (comparisons.length) {

    compareBar.classList.add("show");

  } else {

    compareBar.classList.remove("show");

  }

  if (compareBarCount) {

    compareBarCount.textContent =
      `${comparisons.length} selected`;

  }

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

        <h2>No tools selected</h2>

        <p>
          Choose up to 3 tools from the directory
          to compare them.
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
              .map(tool =>
                `<th>${tool.icon} ${tool.name}</th>`
              )
              .join("")}

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Category</td>

            ${selected
              .map(tool =>
                `<td>${tool.category}</td>`
              )
              .join("")}

          </tr>

          <tr>

            <td>Rating</td>

            ${selected
              .map(tool =>
                `<td>⭐ ${tool.rating}</td>`
              )
              .join("")}

          </tr>

          <tr>

            <td>Pricing</td>

            ${selected
              .map(tool =>
                `<td>${tool.pricing}</td>`
              )
              .join("")}

          </tr>

          <tr>

            <td>Best for</td>

            ${selected
              .map(tool =>
                `<td>${tool.bestFor}</td>`
              )
              .join("")}

          </tr>

          <tr>

            <td>Visit</td>

            ${selected
              .map(tool => `

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

              `)
              .join("")}

          </tr>

        </tbody>

      </table>

    </div>

  `;

}


openComparison?.addEventListener(
  "click",
  () => {

    showPage("dashboard");

    setTimeout(() => {

      comparisonView?.scrollIntoView({
        behavior: "smooth"
      });

    }, 100);

  }
);


/* ================= TOOL ACTIONS ================= */

document.addEventListener("click", event => {

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

  }

});


/* ================= COMMUNITY ================= */

function renderCommunity() {

  const popular =
    [...tools]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 8);

  renderTools(
    communityTools,
    popular
  );

}


/* ================= DARK MODE ================= */

function updateThemeButton() {

  if (!themeButton) return;

  const dark =
    document.body.classList.contains(
      "dark-mode"
    );

  themeButton.textContent =
    dark ? "☀️" : "🌙";

}


function loadTheme() {

  const savedTheme =
    localStorage.getItem(
      "tztools-theme"
    );

  if (savedTheme === "dark") {

    document.body.classList.add(
      "dark-mode"
    );

  }

  updateThemeButton();

}


themeButton?.addEventListener(
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
      "tztools-theme",
      dark ? "dark" : "light"
    );

    updateThemeButton();

  }
);


/* ================= MOBILE MENU ================= */

menuButton?.addEventListener(
  "click",
  () => {

    mobileMenu?.classList.toggle(
      "open"
    );

  }
);


/* ================= REFRESH UI ================= */

function refreshUI() {

  renderFeatured();

  renderDirectory();

  renderDashboard();

  renderCommunity();

  updateCompareBar();

}


/* ================= START APP ================= */

loadTheme();

refreshUI();
