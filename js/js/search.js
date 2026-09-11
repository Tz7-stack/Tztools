/* =========================================================
   TZTOOLS — SMART SEARCH
   ========================================================= */

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .trim();
}


const intentGroups = {

  logo: {
    phrases: [
      "make a logo",
      "create a logo",
      "design a logo",
      "logo maker",
      "logo design",
      "i need a logo"
    ],
    keywords: [
      "logo",
      "branding",
      "brand",
      "icon"
    ]
  },

  video: {
    phrases: [
      "edit videos",
      "make a video",
      "video editor",
      "create videos",
      "edit a video"
    ],
    keywords: [
      "video",
      "editing",
      "movie",
      "reels",
      "youtube",
      "tiktok"
    ]
  },

  website: {
    phrases: [
      "build a website",
      "make a website",
      "create a website",
      "website builder",
      "make a site"
    ],
    keywords: [
      "website",
      "web",
      "site",
      "landing page",
      "blog"
    ]
  },

  study: {
    phrases: [
      "study better",
      "help me study",
      "study for school",
      "learn something",
      "do my homework"
    ],
    keywords: [
      "study",
      "school",
      "homework",
      "learning",
      "education",
      "revision"
    ]
  },

  math: {
    phrases: [
      "solve math",
      "solve maths",
      "math problem",
      "maths problem",
      "calculate this"
    ],
    keywords: [
      "math",
      "maths",
      "algebra",
      "equation",
      "calculator"
    ]
  },

  image: {
    phrases: [
      "edit a photo",
      "edit photos",
      "edit an image",
      "remove background",
      "make an image"
    ],
    keywords: [
      "image",
      "photo",
      "picture",
      "background",
      "photoshop"
    ]
  },

  writing: {
    phrases: [
      "write an essay",
      "help me write",
      "rewrite this",
      "fix my grammar",
      "write something"
    ],
    keywords: [
      "writing",
      "essay",
      "grammar",
      "rewrite",
      "paraphrase",
      "proofread"
    ]
  },

  pdf: {
    phrases: [
      "edit a pdf",
      "merge pdfs",
      "compress pdf",
      "convert pdf",
      "split pdf"
    ],
    keywords: [
      "pdf",
      "document",
      "merge",
      "compress",
      "convert"
    ]
  },

  audio: {
    phrases: [
      "edit audio",
      "record audio",
      "make music",
      "text to speech"
    ],
    keywords: [
      "audio",
      "music",
      "voice",
      "recording",
      "podcast"
    ]
  },

  ai: {
    phrases: [
      "ai tool",
      "use ai",
      "ai assistant",
      "artificial intelligence"
    ],
    keywords: [
      "ai",
      "artificial",
      "assistant",
      "chatbot"
    ]
  },

  productivity: {
    phrases: [
      "be productive",
      "organize my work",
      "take notes",
      "manage tasks"
    ],
    keywords: [
      "productivity",
      "notes",
      "tasks",
      "planning",
      "organize"
    ]
  }

};


function getSearchWords(query) {

  return normalizeText(query)
    .split(/\s+/)
    .filter(word => word.length > 1);

}


function detectIntent(query) {

  const text = normalizeText(query);

  let bestIntent = null;
  let bestScore = 0;

  Object.entries(intentGroups)
    .forEach(([intent, group]) => {

      let score = 0;

      group.phrases.forEach(phrase => {

        if (text.includes(phrase)) {
          score += 10;
        }

      });

      group.keywords.forEach(keyword => {

        if (text.includes(keyword)) {
          score += 3;
        }

      });

      if (score > bestScore) {
        bestScore = score;
        bestIntent = intent;
      }

    });

  return bestIntent;

}


function getToolSearchText(tool) {

  return [
    tool.name,
    tool.description,
    tool.category,
    ...(tool.keywords || [])
  ]
    .join(" ")
    .toLowerCase();

}


function scoreTool(tool, query, intent) {

  const text = normalizeText(query);
  const name = normalizeText(tool.name);
  const description = normalizeText(tool.description);
  const category = normalizeText(tool.category);
  const toolText = getToolSearchText(tool);

  const words = getSearchWords(text);

  let score = 0;

  /* Exact name match */
  if (name === text) {
    score += 250;
  }

  /* Name contains query */
  if (name.includes(text)) {
    score += 100;
  }

  /* Description contains full query */
  if (description.includes(text)) {
    score += 45;
  }

  /* Category match */
  if (category.includes(text)) {
    score += 45;
  }

  /* Individual word matching */
  words.forEach(word => {

    if (name.includes(word)) {
      score += 35;
    }

    if (description.includes(word)) {
      score += 12;
    }

    if (category.includes(word)) {
      score += 18;
    }

    if (toolText.includes(word)) {
      score += 8;
    }

  });


  /* Intent matching */

  if (intent) {

    const group = intentGroups[intent];

    if (group) {

      group.keywords.forEach(keyword => {

        if (toolText.includes(keyword)) {
          score += 25;
        }

      });

    }

  }


  /* Rating tie-breaker */

  score += Number(tool.rating || 0) * 2;

  return score;

}


function searchTools(query) {

  const text = normalizeText(query);

  if (!text) {
    return tools
      .slice()
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 10);
  }

  const intent = detectIntent(text);

  const ranked = tools
    .map(tool => ({
      tool,
      score: scoreTool(tool, text, intent)
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => {

      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return b.tool.rating - a.tool.rating;

    });

  return ranked
    .slice(0, 10)
    .map(item => item.tool);

}


/* =========================================================
   SEARCH UI HELPERS
   ========================================================= */

function runToolSearch(query) {

  const results = searchTools(query);

  if (typeof renderSearchResults === "function") {
    renderSearchResults(results, query);
  }

  return results;

}
