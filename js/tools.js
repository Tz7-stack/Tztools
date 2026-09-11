// TzTools — 160+ Tool Directory
// V8 Tool Database

const tools = [

  // =========================
  // 🤖 AI ASSISTANTS
  // =========================

  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "AI assistant for writing, learning, brainstorming, coding and everyday tasks.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.9,
    url: "https://chatgpt.com/",
    keywords: ["ai", "assistant", "chat", "study", "writing", "coding", "research", "homework", "brainstorm"]
  },

  {
    id: "claude",
    name: "Claude",
    description: "AI assistant for writing, analysis, research, coding and long documents.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://claude.ai/",
    keywords: ["ai", "assistant", "writing", "research", "coding", "documents", "analysis", "study"]
  },

  {
    id: "gemini",
    name: "Google Gemini",
    description: "Google's AI assistant for questions, research, writing, learning and brainstorming.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://gemini.google.com/",
    keywords: ["ai", "google", "assistant", "study", "research", "writing", "homework"]
  },

  {
    id: "perplexity",
    name: "Perplexity",
    description: "AI-powered search and research assistant with web sources.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.perplexity.ai/",
    keywords: ["ai", "research", "search", "sources", "questions", "study", "web"]
  },

  {
    id: "microsoft-copilot",
    name: "Microsoft Copilot",
    description: "AI assistant for questions, writing, productivity and creative tasks.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://copilot.microsoft.com/",
    keywords: ["ai", "assistant", "microsoft", "writing", "productivity", "research"]
  },

  {
    id: "meta-ai",
    name: "Meta AI",
    description: "AI assistant for questions, ideas, writing and creative tasks.",
    category: "AI",
    pricing: "Free",
    rating: 4.5,
    url: "https://www.meta.ai/",
    keywords: ["ai", "assistant", "chat", "ideas", "writing", "creative"]
  },

  {
    id: "grok",
    name: "Grok",
    description: "AI assistant for questions, research, writing and brainstorming.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://grok.com/",
    keywords: ["ai", "assistant", "chat", "research", "writing", "questions"]
  },

  {
    id: "poe",
    name: "Poe",
    description: "Platform for interacting with multiple AI models and bots.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://poe.com/",
    keywords: ["ai", "chat", "models", "assistant", "bots", "writing"]
  },

  {
    id: "you",
    name: "You.com",
    description: "AI-powered search and productivity platform.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.4,
    url: "https://you.com/",
    keywords: ["ai", "search", "research", "assistant", "productivity"]
  },

  {
    id: "pi",
    name: "Pi",
    description: "Conversational AI designed for helpful everyday conversations.",
    category: "AI",
    pricing: "Free",
    rating: 4.4,
    url: "https://pi.ai/",
    keywords: ["ai", "chat", "assistant", "conversation", "ideas"]
  },

  // =========================
  // 🎨 DESIGN
  // =========================

  {
    id: "canva",
    name: "Canva",
    description: "Create logos, posters, presentations, social graphics and more.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.9,
    url: "https://www.canva.com/",
    keywords: ["design", "logo", "poster", "presentation", "flyer", "graphics", "social media", "thumbnail"]
  },

  {
    id: "figma",
    name: "Figma",
    description: "Collaborative design and UI/UX design platform.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://www.figma.com/",
    keywords: ["design", "ui", "ux", "website", "app", "prototype", "wireframe"]
  },

  {
    id: "adobe-express",
    name: "Adobe Express",
    description: "Quickly create graphics, videos, flyers, posters and social content.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.adobe.com/express/",
    keywords: ["design", "graphics", "poster", "flyer", "video", "logo", "social"]
  },

  {
    id: "microsoft-designer",
    name: "Microsoft Designer",
    description: "AI-powered design tool for graphics, posts and creative content.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://designer.microsoft.com/",
    keywords: ["design", "ai", "logo", "poster", "graphics", "social", "image"]
  },

  {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    description: "Generative AI tools for creating and editing visual content.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://firefly.adobe.com/",
    keywords: ["ai", "design", "image", "generative", "creative", "graphics"]
  },

  {
    id: "inkscape",
    name: "Inkscape",
    description: "Free vector graphics editor for logos, illustrations and SVG designs.",
    category: "Design",
    pricing: "Free",
    rating: 4.6,
    url: "https://inkscape.org/",
    keywords: ["design", "logo", "svg", "vector", "illustration", "graphics"]
  },

  {
    id: "gimp",
    name: "GIMP",
    description: "Free open-source image editor for advanced graphics work.",
    category: "Design",
    pricing: "Free",
    rating: 4.6,
    url: "https://www.gimp.org/",
    keywords: ["image", "photo", "design", "editing", "graphics", "photoshop"]
  },

  {
    id: "krita",
    name: "Krita",
    description: "Digital painting and illustration software.",
    category: "Design",
    pricing: "Free",
    rating: 4.7,
    url: "https://krita.org/",
    keywords: ["drawing", "painting", "illustration", "art", "design"]
  },

  {
    id: "penpot",
    name: "Penpot",
    description: "Open-source design and prototyping platform.",
    category: "Design",
    pricing: "Free",
    rating: 4.5,
    url: "https://penpot.app/",
    keywords: ["design", "ui", "ux", "prototype", "website", "app"]
  },

  {
    id: "excalidraw",
    name: "Excalidraw",
    description: "Simple collaborative whiteboard for diagrams and ideas.",
    category: "Design",
    pricing: "Free",
    rating: 4.6,
    url: "https://excalidraw.com/",
    keywords: ["diagram", "whiteboard", "drawing", "flowchart", "brainstorm"]
  },

  {
    id: "blender",
    name: "Blender",
    description: "Free 3D creation suite for modeling, animation and rendering.",
    category: "Design",
    pricing: "Free",
    rating: 4.8,
    url: "https://www.blender.org/",
    keywords: ["3d", "modeling", "animation", "render", "design", "game"]
  },

  {
    id: "photopea",
    name: "Photopea",
    description: "Browser-based image editor with powerful Photoshop-style features.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.photopea.com/",
    keywords: ["photo", "image", "editing", "photoshop", "design", "graphics"]
  },

  {
    id: "pixlr",
    name: "Pixlr",
    description: "Online photo editor and graphic design platform.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://pixlr.com/",
    keywords: ["photo", "image", "editing", "design", "graphics"]
  },

  {
    id: "looka",
    name: "Looka",
    description: "AI-powered logo and brand identity creator.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.4,
    url: "https://looka.com/",
    keywords: ["logo", "branding", "brand", "design", "business", "ai"]
  },

  {
    id: "logoai",
    name: "LogoAI",
    description: "AI-powered logo and brand identity generator.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.4,
    url: "https://www.logoai.com/",
    keywords: ["logo", "ai", "branding", "business", "design"]
  },

  {
    id: "removebg",
    name: "Remove.bg",
    description: "Automatically remove image backgrounds.",
    category: "Images",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.remove.bg/",
    keywords: ["background", "remove background", "transparent", "image", "photo"]
  },

  // =========================
  // 🖼️ IMAGES
  // =========================

  {
    id: "unsplash",
    name: "Unsplash",
    description: "High-quality free stock photography.",
    category: "Images",
    pricing: "Free",
    rating: 4.8,
    url: "https://unsplash.com/",
    keywords: ["images", "photos", "stock", "wallpaper", "background"]
  },

  {
    id: "pexels",
    name: "Pexels",
    description: "Free stock photos and videos.",
    category: "Images",
    pricing: "Free",
    rating: 4.8,
    url: "https://www.pexels.com/",
    keywords: ["images", "photos", "videos", "stock", "wallpaper"]
  },

  {
    id: "pixabay",
    name: "Pixabay",
    description: "Free images, illustrations, vectors and videos.",
    category: "Images",
    pricing: "Free",
    rating: 4.7,
    url: "https://pixabay.com/",
    keywords: ["images", "photos", "vectors", "illustrations", "videos"]
  },

  {
    id: "tinypng",
    name: "TinyPNG",
    description: "Compress PNG and JPEG images while reducing file size.",
    category: "Images",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://tinypng.com/",
    keywords: ["image", "compress", "png", "jpg", "optimize", "size"]
  },

  {
    id: "squoosh",
    name: "Squoosh",
    description: "Browser-based image compression and optimization tool.",
    category: "Images",
    pricing: "Free",
    rating: 4.7,
    url: "https://squoosh.app/",
    keywords: ["image", "compress", "optimize", "jpg", "png", "web"]
  },

  {
    id: "cleanup-pictures",
    name: "Cleanup.pictures",
    description: "Remove unwanted objects and people from images.",
    category: "Images",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://cleanup.pictures/",
    keywords: ["image", "remove object", "photo", "cleanup", "editing"]
  },

  {
    id: "iloveimg",
    name: "iLoveIMG",
    description: "Online image compression, resizing, cropping and conversion tools.",
    category: "Images",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.iloveimg.com/",
    keywords: ["image", "compress", "resize", "crop", "convert", "jpg"]
  },

  {
    id: "fotor",
    name: "Fotor",
    description: "Online photo editing and AI design platform.",
    category: "Images",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.fotor.com/",
    keywords: ["photo", "image", "editing", "ai", "design"]
  },

  {
    id: "leonardo-ai",
    name: "Leonardo.Ai",
    description: "AI platform for generating and editing images.",
    category: "Images",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://leonardo.ai/",
    keywords: ["ai", "image", "generator", "art", "design", "creative"]
  },

  {
    id: "ideogram",
    name: "Ideogram",
    description: "AI image generator known for text and typography in images.",
    category: "Images",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://ideogram.ai/",
    keywords: ["ai", "image", "logo", "text", "poster", "design"]
  },

  {
    id: "clipdrop",
    name: "Clipdrop",
    description: "AI-powered image generation and editing tools.",
    category: "Images",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://clipdrop.co/",
    keywords: ["ai", "image", "editing", "background", "design"]
  },

  {
    id: "stability-ai",
    name: "Stability AI",
    description: "AI tools and models for image generation and creative work.",
    category: "Images",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://stability.ai/",
    keywords: ["ai", "image", "generator", "creative", "art"]
  },

  {
    id: "krea",
    name: "Krea",
    description: "AI-powered creative tools for image and video generation.",
    category: "Images",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.krea.ai/",
    keywords: ["ai", "image", "video", "creative", "generation"]
  },

  // =========================
  // 🎬 VIDEO
  // =========================

  {
    id: "capcut",
    name: "CapCut",
    description: "Video editor with templates, effects, captions and AI tools.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://www.capcut.com/",
    keywords: ["video", "edit", "editing", "shorts", "reels", "tiktok", "captions"]
  },

  {
    id: "veed",
    name: "VEED",
    description: "Online video editor for social media, subtitles and content creation.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.veed.io/",
    keywords: ["video", "edit", "subtitles", "captions", "social", "youtube"]
  },

  {
    id: "descript",
    name: "Descript",
    description: "Edit videos and podcasts by editing their transcripts.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.descript.com/",
    keywords: ["video", "podcast", "editing", "transcript", "audio"]
  },

  {
    id: "invideo",
    name: "InVideo",
    description: "AI-powered video creation and editing platform.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://invideo.io/",
    keywords: ["video", "ai", "generator", "youtube", "editing", "social"]
  },

  {
    id: "runway",
    name: "Runway",
    description: "AI-powered creative platform for generating and editing video.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://runwayml.com/",
    keywords: ["ai", "video", "generator", "editing", "creative"]
  },

  {
    id: "pika",
    name: "Pika",
    description: "AI video generation and creative effects platform.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://pika.art/",
    keywords: ["ai", "video", "generate", "animation", "creative"]
  },

  {
    id: "heygen",
    name: "HeyGen",
    description: "AI video creation platform with avatars and voiceovers.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.heygen.com/",
    keywords: ["ai", "video", "avatar", "voice", "presentation"]
  },

  {
    id: "synthesia",
    name: "Synthesia",
    description: "AI video platform for creating presenter-led videos.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.synthesia.io/",
    keywords: ["ai", "video", "avatar", "presentation", "voice"]
  },

  {
    id: "canva-video",
    name: "Canva Video",
    description: "Create and edit social videos and presentations.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.canva.com/video-editor/",
    keywords: ["video", "editing", "canva", "social", "presentation"]
  },

  {
    id: "clipchamp",
    name: "Clipchamp",
    description: "Browser-based video editor from Microsoft.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://clipchamp.com/",
    keywords: ["video", "editing", "microsoft", "youtube", "social"]
  },

  {
    id: "opusclip",
    name: "OpusClip",
    description: "AI tool that turns long videos into short clips.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.opus.pro/",
    keywords: ["video", "shorts", "clips", "youtube", "reels", "ai"]
  },

  {
    id: "adobe-premiere",
    name: "Adobe Premiere",
    description: "Professional video editing software from Adobe.",
    category: "Video",
    pricing: "Paid",
    rating: 4.7,
    url: "https://www.adobe.com/products/premiere.html",
    keywords: ["video", "editing", "professional", "film", "youtube"]
  },

  {
    id: "davinci-resolve",
    name: "DaVinci Resolve",
    description: "Professional video editing, color grading and audio production.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.9,
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    keywords: ["video", "editing", "color", "audio", "film", "professional"]
  },

  // =========================
  // ✍️ WRITING
  // =========================

  {
    id: "grammarly",
    name: "Grammarly",
    description: "Writing assistant for grammar, clarity and spelling.",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.grammarly.com/",
    keywords: ["writing", "grammar", "spelling", "essay", "school", "ai"]
  },

  {
    id: "quillbot",
    name: "QuillBot",
    description: "Writing and paraphrasing assistant.",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://quillbot.com/",
    keywords: ["writing", "paraphrase", "rewrite", "essay", "grammar"]
  },

  {
    id: "hemingway",
    name: "Hemingway Editor",
    description: "Improve readability and clarity in your writing.",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://hemingwayapp.com/",
    keywords: ["writing", "grammar", "readability", "essay", "editing"]
  },

  {
    id: "prowritingaid",
    name: "ProWritingAid",
    description: "Writing analysis and editing assistant.",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://prowritingaid.com/",
    keywords: ["writing", "grammar", "editing", "essay", "author"]
  },

  {
    id: "wordtune",
    name: "Wordtune",
    description: "AI writing assistant for rewriting and improving text.",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.wordtune.com/",
    keywords: ["writing", "rewrite", "ai", "essay", "paraphrase"]
  },

  {
    id: "jasper",
    name: "Jasper",
    description: "AI writing platform for marketing and content creation.",
    category: "Writing",
    pricing: "Paid",
    rating: 4.4,
    url: "https://www.jasper.ai/",
    keywords: ["ai", "writing", "marketing", "content", "copywriting"]
  },

  {
    id: "copyai",
    name: "Copy.ai",
    description: "AI-powered writing and content creation platform.",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.copy.ai/",
    keywords: ["ai", "writing", "copywriting", "marketing", "content"]
  },

  {
    id: "writesonic",
    name: "Writesonic",
    description: "AI writing and content creation platform.",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.4,
    url: "https://writesonic.com/",
    keywords: ["ai", "writing", "content", "blog", "marketing"]
  },

  {
    id: "notebooklm",
    name: "NotebookLM",
    description: "Google's source-based AI research and study assistant.",
    category: "Writing",
    pricing: "Free",
    rating: 4.8,
    url: "https://notebooklm.google.com/",
    keywords: ["ai", "study", "research", "notes", "pdf", "school", "summarize"]
  },

  // =========================
  // ⚡ PRODUCTIVITY
  // =========================

  {
    id: "notion",
    name: "Notion",
    description: "Workspace for notes, projects, databases and organization.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://www.notion.so/",
    keywords: ["productivity", "notes", "tasks", "projects", "school", "planning"]
  },

  {
    id: "trello",
    name: "Trello",
    description: "Visual boards for managing tasks and projects.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://trello.com/",
    keywords: ["productivity", "tasks", "project", "planning", "kanban"]
  },

  {
    id: "asana",
    name: "Asana",
    description: "Project and task management platform.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://asana.com/",
    keywords: ["productivity", "tasks", "project", "team", "planning"]
  },

  {
    id: "clickup",
    name: "ClickUp",
    description: "All-in-one productivity and project management platform.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://clickup.com/",
    keywords: ["productivity", "tasks", "project", "notes", "team"]
  },

  {
    id: "todoist",
    name: "Todoist",
    description: "Task manager for organizing daily work and school tasks.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://todoist.com/",
    keywords: ["tasks", "todo", "productivity", "school", "planning"]
  },

  {
    id: "google-docs",
    name: "Google Docs",
    description: "Online document editor with real-time collaboration.",
    category: "Productivity",
    pricing: "Free",
    rating: 4.8,
    url: "https://docs.google.com/",
    keywords: ["documents", "writing", "school", "essay", "collaboration"]
  },

  {
    id: "google-sheets",
    name: "Google Sheets",
    description: "Online spreadsheet tool for data and calculations.",
    category: "Productivity",
    pricing: "Free",
    rating: 4.7,
    url: "https://sheets.google.com/",
    keywords: ["spreadsheet", "excel", "data", "math", "school", "budget"]
  },

  {
    id: "google-slides",
    name: "Google Slides",
    description: "Create collaborative presentations online.",
    category: "Productivity",
    pricing: "Free",
    rating: 4.7,
    url: "https://slides.google.com/",
    keywords: ["presentation", "slides", "school", "project", "design"]
  },

  {
    id: "obsidian",
    name: "Obsidian",
    description: "Knowledge management and note-taking app.",
    category: "Productivity",
    pricing: "Free",
    rating: 4.7,
    url: "https://obsidian.md/",
    keywords: ["notes", "knowledge", "study", "productivity", "research"]
  },

  {
    id: "evernote",
    name: "Evernote",
    description: "Digital note-taking and organization platform.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://evernote.com/",
    keywords: ["notes", "productivity", "school", "organization"]
  },

  {
    id: "google-keep",
    name: "Google Keep",
    description: "Simple notes, lists and reminders.",
    category: "Productivity",
    pricing: "Free",
    rating: 4.6,
    url: "https://keep.google.com/",
    keywords: ["notes", "todo", "reminders", "school", "productivity"]
  },

  // =========================
  // 🌐 WEBSITE BUILDERS
  // =========================

  {
    id: "wix",
    name: "Wix",
    description: "Website builder for businesses, portfolios and online stores.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.wix.com/",
    keywords: ["website", "web", "builder", "business", "store", "portfolio"]
  },

  {
    id: "wordpress",
    name: "WordPress",
    description: "Popular platform for building websites and blogs.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://wordpress.com/",
    keywords: ["website", "blog", "web", "business", "portfolio"]
  },

  {
    id: "framer",
    name: "Framer",
    description: "Modern website builder focused on design and animation.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.framer.com/",
    keywords: ["website", "web", "design", "portfolio", "landing page"]
  },

  {
    id: "webflow",
    name: "Webflow",
    description: "Visual website development platform for professional sites.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://webflow.com/",
    keywords: ["website", "web", "design", "development", "cms"]
  },

  {
    id: "carrd",
    name: "Carrd",
    description: "Simple builder for one-page websites.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://carrd.co/",
    keywords: ["website", "landing page", "portfolio", "one page"]
  },

  {
    id: "google-sites",
    name: "Google Sites",
    description: "Simple website builder from Google.",
    category: "Websites",
    pricing: "Free",
    rating: 4.5,
    url: "https://sites.google.com/",
    keywords: ["website", "web", "school", "business", "portfolio"]
  },

  {
    id: "github-pages",
    name: "GitHub Pages",
    description: "Host static websites directly from GitHub repositories.",
    category: "Websites",
    pricing: "Free",
    rating: 4.7,
    url: "https://pages.github.com/",
    keywords: ["website", "hosting", "github", "coding", "web", "developer"]
  },

  {
    id: "netlify",
    name: "Netlify",
    description: "Platform for deploying and hosting modern websites.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.netlify.com/",
    keywords: ["website", "hosting", "deploy", "developer", "web"]
  },

  {
    id: "vercel",
    name: "Vercel",
    description: "Platform for deploying modern web applications.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://vercel.com/",
    keywords: ["website", "web", "hosting", "developer", "deploy", "nextjs"]
  },

  {
    id: "bubble",
    name: "Bubble",
    description: "No-code platform for building web applications.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://bubble.io/",
    keywords: ["website", "app", "no code", "web app", "business"]
  },

  // =========================
  // 🎓 STUDENTS
  // =========================

  {
    id: "khan-academy",
    name: "Khan Academy",
    description: "Free educational lessons and practice exercises.",
    category: "Students",
    pricing: "Free",
    rating: 4.9,
    url: "https://www.khanacademy.org/",
    keywords: ["study", "school", "math", "science", "learning", "education"]
  },

  {
    id: "quizlet",
    name: "Quizlet",
    description: "Flashcards and study tools for learning and revision.",
    category: "Students",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://quizlet.com/",
    keywords: ["study", "flashcards", "school", "revision", "learning", "quiz"]
  },

  {
    id: "photomath",
    name: "Photomath",
    description: "Math learning tool that explains problems step by step.",
    category: "Students",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://photomath.com/",
    keywords: ["math", "mathematics", "algebra", "study", "homework"]
  },

  {
    id: "wolframalpha",
    name: "WolframAlpha",
    description: "Computational engine for mathematics, science and more.",
    category: "Students",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://www.wolframalpha.com/",
    keywords: ["math", "science", "calculation", "physics", "chemistry", "study"]
  },

  {
    id: "desmos",
    name: "Desmos",
    description: "Interactive graphing calculator for mathematics.",
    category: "Students",
    pricing: "Free",
    rating: 4.8,
    url: "https://www.desmos.com/",
    keywords: ["math", "calculator", "graph", "algebra", "geometry", "school"]
  },

  {
    id: "geogebra",
    name: "GeoGebra",
    description: "Interactive mathematics tools for geometry, algebra and graphs.",
    category: "Students",
    pricing: "Free",
    rating: 4.8,
    url: "https://www.geogebra.org/",
    keywords: ["math", "geometry", "algebra", "graph", "school", "study"]
  },

  {
    id: "google-scholar",
    name: "Google Scholar",
    description: "Search engine for academic papers and scholarly research.",
    category: "Students",
    pricing: "Free",
    rating: 4.8,
    url: "https://scholar.google.com/",
    keywords: ["research", "study", "papers", "academic", "sources", "school"]
  },

  {
    id: "zotero",
    name: "Zotero",
    description: "Research tool for collecting and organizing sources.",
    category: "Students",
    pricing: "Free",
    rating: 4.7,
    url: "https://www.zotero.org/",
    keywords: ["research", "references", "citations", "academic", "study"]
  },

  {
    id: "anki",
    name: "Anki",
    description: "Powerful flashcard system based on spaced repetition.",
    category: "Students",
    pricing: "Free",
    rating: 4.8,
    url: "https://apps.ankiweb.net/",
    keywords: ["study", "flashcards", "revision", "memory", "school"]
  },

  {
    id: "duolingo",
    name: "Duolingo",
    description: "Interactive platform for learning languages.",
    category: "Students",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.duolingo.com/",
    keywords: ["language", "study", "learning", "school", "education"]
  },

  {
    id: "coursera",
    name: "Coursera",
    description: "Online courses and learning programs from universities and organizations.",
    category: "Students",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.coursera.org/",
    keywords: ["courses", "study", "education", "learning", "school", "skills"]
  },

  {
    id: "edx",
    name: "edX",
    description: "Online courses from universities and institutions.",
    category: "Students",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.edx.org/",
    keywords: ["courses", "education", "study", "learning", "university"]
  },

  {
    id: "brilliant",
    name: "Brilliant",
    description: "Interactive learning for mathematics, science and computer science.",
    category: "Students",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://brilliant.org/",
    keywords: ["math", "science", "coding", "learning", "study"]
  },

  {
    id: "symbolab",
    name: "Symbolab",
    description: "Step-by-step mathematical problem solver.",
    category: "Students",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.symbolab.com/",
    keywords: ["math", "algebra", "calculus", "equations", "homework"]
  },

  // =========================
  // 📄 PDF
  // =========================

  {
    id: "ilovepdf",
    name: "iLovePDF",
    description: "Online tools for merging, splitting, compressing and converting PDFs.",
    category: "PDF",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://www.ilovepdf.com/",
    keywords: ["pdf", "merge", "split", "compress", "convert", "edit"]
  },

  {
    id: "smallpdf",
    name: "Smallpdf",
    description: "Online PDF compression, conversion and editing tools.",
    category: "PDF",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://smallpdf.com/",
    keywords: ["pdf", "compress", "convert", "merge", "edit", "sign"]
  },

  {
    id: "adobe-acrobat",
    name: "Adobe Acrobat Online",
    description: "Online PDF editing, conversion and signing tools.",
    category: "PDF",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.adobe.com/acrobat/online.html",
    keywords: ["pdf", "edit", "convert", "sign", "document"]
  },

  {
    id: "pdfescape",
    name: "PDFescape",
    description: "Online PDF editor and form filler.",
    category: "PDF",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.pdfescape.com/",
    keywords: ["pdf", "edit", "form", "document", "sign"]
  },

  {
    id: "sejda",
    name: "Sejda PDF",
    description: "Online PDF editing and document processing tools.",
    category: "PDF",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.sejda.com/",
    keywords: ["pdf", "edit", "compress", "merge", "split", "convert"]
  },

  {
    id: "pdf24",
    name: "PDF24 Tools",
    description: "Large collection of free online PDF tools.",
    category: "PDF",
    pricing: "Free",
    rating: 4.7,
    url: "https://tools.pdf24.org/",
    keywords: ["pdf", "merge", "split", "compress", "convert", "edit"]
  },

  {
    id: "pdfcandy",
    name: "PDF Candy",
    description: "Online PDF tools for conversion, editing and management.",
    category: "PDF",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://pdfcandy.com/",
    keywords: ["pdf", "convert", "edit", "merge", "compress"]
  },

  {
    id: "chatpdf",
    name: "ChatPDF",
    description: "Ask questions and interact with PDF documents using AI.",
    category: "PDF",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.chatpdf.com/",
    keywords: ["pdf", "ai", "study", "research", "summarize", "questions"]
  },

  {
    id: "humata",
    name: "Humata",
    description: "AI assistant for asking questions about documents.",
    category: "PDF",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.humata.ai/",
    keywords: ["pdf", "ai", "documents", "research", "summarize", "study"]
  },

  {
    id: "ocr-space",
    name: "OCR.Space",
    description: "Online OCR tool for extracting text from images and PDFs.",
    category: "PDF",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://ocr.space/",
    keywords: ["pdf", "ocr", "text", "image", "scan", "document"]
  },

  // =========================
  // 🎙️ AUDIO
  // =========================

  {
    id: "audacity",
    name: "Audacity",
    description: "Free open-source audio recording and editing software.",
    category: "Audio",
    pricing: "Free",
    rating: 4.8,
    url: "https://www.audacityteam.org/",
    keywords: ["audio", "music", "recording", "editing", "podcast"]
  },

  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "AI voice generation and text-to-speech platform.",
    category: "Audio",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://elevenlabs.io/",
    keywords: ["ai", "voice", "text to speech", "audio", "narration"]
  },

  {
    id: "soundtrap",
    name: "Soundtrap",
    description: "Online music and audio creation studio.",
    category: "Audio",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.soundtrap.com/",
    keywords: ["music", "audio", "recording", "beat", "podcast"]
  },

  {
    id: "bandlab",
    name: "BandLab",
    description: "Online music creation and collaboration platform.",
    category: "Audio",
    pricing: "Free",
    rating: 4.7,
    url: "https://www.bandlab.com/",
    keywords: ["music", "audio", "beat", "recording", "producer"]
  },

  {
    id: "moises",
    name: "Moises",
    description: "AI-powered music practice and audio separation tools.",
    category: "Audio",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://moises.ai/",
    keywords: ["music", "audio", "ai", "vocals", "practice"]
  },

  {
    id: "murf",
    name: "Murf",
    description: "AI voice generator for narration and presentations.",
    category: "Audio",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://murf.ai/",
    keywords: ["ai", "voice", "audio", "narration", "presentation"]
  },

  {
    id: "speechify",
    name: "Speechify",
    description: "Text-to-speech tool for listening to written content.",
    category: "Audio",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://speechify.com/",
    keywords: ["text to speech", "audio", "reading", "study", "voice"]
  },

  {
    id: "otter",
    name: "Otter.ai",
    description: "AI-powered transcription and meeting notes.",
    category: "Audio",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://otter.ai/",
    keywords: ["audio", "transcription", "notes", "meeting", "lecture", "study"]
  },

  // =========================
  // 💻 CODING
  // =========================

  {
    id: "github",
    name: "GitHub",
    description: "Platform for hosting, collaborating on and managing code.",
    category: "Coding",
    pricing: "Freemium",
    rating: 4.9,
    url: "https://github.com/",
    keywords: ["coding", "code", "github", "developer", "programming", "repository"]
  },

  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI coding assistant integrated into developer tools.",
    category: "Coding",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://github.com/features/copilot",
    keywords: ["coding", "ai", "programming", "developer", "code"]
  },

  {
    id: "replit",
    name: "Replit",
    description: "Browser-based coding and app development platform.",
    category: "Coding",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://replit.com/",
    keywords: ["coding", "programming", "website", "app", "developer", "javascript"]
  },

  {
    id: "codepen",
    name: "CodePen",
    description: "Online playground for HTML, CSS and JavaScript.",
    category: "Coding",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://codepen.io/",
    keywords: ["coding", "html", "css", "javascript", "web", "frontend"]
  },

  {
    id: "jsfiddle",
    name: "JSFiddle",
    description: "Online editor for testing HTML, CSS and JavaScript.",
    category: "Coding",
    pricing: "Free",
    rating: 4.5,
    url: "https://jsfiddle.net/",
    keywords: ["coding", "javascript", "html", "css", "web", "testing"]
  },

  {
    id: "stackblitz",
    name: "StackBlitz",
    description: "Instant browser-based development environment.",
    category: "Coding",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://stackblitz.com/",
    keywords: ["coding", "web", "javascript", "developer", "typescript"]
  },

  {
    id: "cursor",
    name: "Cursor",
    description: "AI-powered code editor for software development.",
    category: "Coding",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.cursor.com/",
    keywords: ["coding", "ai", "code", "developer", "programming"]
  },

  {
    id: "codeium",
    name: "Codeium",
    description: "AI coding assistant for developers.",
    category: "Coding",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://codeium.com/",
    keywords: ["coding", "ai", "programming", "developer", "code"]
  },

  {
    id: "stackoverflow",
    name: "Stack Overflow",
    description: "Community platform for programming questions and answers.",
    category: "Coding",
    pricing: "Free",
    rating: 4.8,
    url: "https://stackoverflow.com/",
    keywords: ["coding", "programming", "developer", "javascript", "python", "questions"]
  },

  {
    id: "freecodecamp",
    name: "freeCodeCamp",
    description: "Free interactive platform for learning coding and web development.",
    category: "Coding",
    pricing: "Free",
    rating: 4.9,
    url: "https://www.freecodecamp.org/",
    keywords: ["coding", "learn", "javascript", "html", "css", "python", "web"]
  },

  {
    id: "w3schools",
    name: "W3Schools",
    description: "Beginner-friendly tutorials and references for web technologies.",
    category: "Coding",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.w3schools.com/",
    keywords: ["coding", "html", "css", "javascript", "python", "web", "learn"]
  },

  {
    id: "mdn",
    name: "MDN Web Docs",
    description: "Comprehensive documentation for web development technologies.",
    category: "Coding",
    pricing: "Free",
    rating: 4.9,
    url: "https://developer.mozilla.org/",
    keywords: ["coding", "javascript", "html", "css", "web", "developer", "documentation"]
  },

  // =========================
  // 🔎 RESEARCH
  // =========================

  {
    id: "consensus",
    name: "Consensus",
    description: "AI-powered search engine for scientific research.",
    category: "Research",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://consensus.app/",
    keywords: ["research", "ai", "papers", "science", "academic", "study"]
  },

  {
    id: "scite",
    name: "Scite",
    description: "Research platform for discovering and evaluating scientific papers.",
    category: "Research",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://scite.ai/",
    keywords: ["research", "papers", "academic", "citations", "science"]
  },

  {
    id: "connected-papers",
    name: "Connected Papers",
    description: "Visual tool for discovering related academic papers.",
    category: "Research",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.connectedpapers.com/",
    keywords: ["research", "papers", "academic", "science", "sources"]
  },

  {
    id: "researchrabbit",
    name: "ResearchRabbit",
    description: "Visual research discovery and literature mapping tool.",
    category: "Research",
    pricing: "Free",
    rating: 4.6,
    url: "https://www.researchrabbit.ai/",
    keywords: ["research", "papers", "academic", "literature", "study"]
  },

  {
    id: "litmaps",
    name: "Litmaps",
    description: "Discover academic literature and map research topics.",
    category: "Research",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.litmaps.com/",
    keywords: ["research", "papers", "academic", "literature", "sources"]
  },

  {
    id: "semanticscholar",
    name: "Semantic Scholar",
    description: "AI-powered academic search and research discovery.",
    category: "Research",
    pricing: "Free",
    rating: 4.7,
    url: "https://www.semanticscholar.org/",
    keywords: ["research", "academic", "papers", "science", "study"]
  },

  {
    id: "europe-pmc",
    name: "Europe PMC",
    description: "Search engine for life science research publications.",
    category: "Research",
    pricing: "Free",
    rating: 4.5,
    url: "https://europepmc.org/",
    keywords: ["research", "science", "papers", "medical", "academic"]
  },

  // =========================
  // 🧰 EXTRA UTILITY TOOLS
  // =========================

  {
    id: "tinywow",
    name: "TinyWow",
    description: "Large collection of free document, image and PDF tools.",
    category: "PDF",
    pricing: "Free",
    rating: 4.6,
    url: "https://tinywow.com/",
    keywords: ["pdf", "documents", "image", "convert", "compress", "tools"]
  },

  {
    id: "cloudconvert",
    name: "CloudConvert",
    description: "Online file conversion service supporting many formats.",
    category: "PDF",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://cloudconvert.com/",
    keywords: ["convert", "file", "pdf", "image", "video", "audio", "document"]
  },

  {
    id: "convertio",
    name: "Convertio",
    description: "Online file converter supporting many formats.",
    category: "PDF",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://convertio.co/",
    keywords: ["convert", "file", "pdf", "image", "video", "audio"]
  },

  {
    id: "removebg",
    name: "Remove.bg",
    description: "Automatically remove backgrounds from images.",
    category: "Images",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.remove.bg/",
    keywords: ["background", "remove", "image", "photo", "transparent"]
  },

  {
    id: "smallseotools",
    name: "Small SEO Tools",
    description: "Collection of online writing, SEO and utility tools.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.3,
    url: "https://smallseotools.com/",
    keywords: ["seo", "writing", "grammar", "plagiarism", "tools", "productivity"]
  },

  {
    id: "google-drive",
    name: "Google Drive",
    description: "Cloud storage for files, documents and collaboration.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://drive.google.com/",
    keywords: ["storage", "files", "cloud", "documents", "school", "productivity"]
  },

  {
    id: "dropbox",
    name: "Dropbox",
    description: "Cloud storage and file sharing platform.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.dropbox.com/",
    keywords: ["storage", "files", "cloud", "sharing", "productivity"]
  },

  {
    id: "loom",
    name: "Loom",
    description: "Record and share quick screen and camera videos.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.loom.com/",
    keywords: ["screen recording", "video", "presentation", "work", "tutorial"]
  },

  {
    id: "calendly",
    name: "Calendly",
    description: "Scheduling platform for sharing appointment availability.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://calendly.com/",
    keywords: ["calendar", "schedule", "meeting", "productivity", "booking"]
  },

  {
    id: "zapier",
    name: "Zapier",
    description: "Automation platform connecting apps and workflows.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://zapier.com/",
    keywords: ["automation", "productivity", "workflow", "apps", "business"]
  },

  {
    id: "make",
    name: "Make",
    description: "Visual automation platform for connecting apps and workflows.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.make.com/",
    keywords: ["automation", "workflow", "productivity", "apps", "business"]
  },

  {
    id: "gamma",
    name: "Gamma",
    description: "AI-powered platform for creating presentations and documents.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://gamma.app/",
    keywords: ["ai", "presentation", "slides", "document", "design", "school"]
  },

  {
    id: "beautiful-ai",
    name: "Beautiful.ai",
    description: "AI-assisted presentation design platform.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.beautiful.ai/",
    keywords: ["presentation", "slides", "ai", "design", "school"]
  },

  {
    id: "prezi",
    name: "Prezi",
    description: "Presentation platform with dynamic visual layouts.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://prezi.com/",
    keywords: ["presentation", "slides", "school", "design"]
  },

  {
    id: "visme",
    name: "Visme",
    description: "Create presentations, infographics and visual content.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.visme.co/",
    keywords: ["presentation", "infographic", "design", "graphics", "school"]
  },

  {
    id: "piktochart",
    name: "Piktochart",
    description: "Create infographics, presentations and visual reports.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://piktochart.com/",
    keywords: ["infographic", "presentation", "design", "report", "school"]
  },

  {
    id: "venngage",
    name: "Venngage",
    description: "Infographic and visual communication design platform.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.4,
    url: "https://venngage.com/",
    keywords: ["infographic", "design", "presentation", "report", "graphics"]
  },

  {
    id: "tome",
    name: "Tome",
    description: "AI-powered tool for creating presentations and visual stories.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.4,
    url: "https://tome.app/",
    keywords: ["ai", "presentation", "slides", "story", "design"]
  },

  {
    id: "readwise",
    name: "Readwise",
    description: "Tool for organizing highlights and building a reading habit.",
    category: "Productivity",
    pricing: "Paid",
    rating: 4.5,
    url: "https://readwise.io/",
    keywords: ["reading", "notes", "study", "productivity", "research"]
  },

  {
    id: "pomofocus",
    name: "Pomofocus",
    description: "Simple Pomodoro timer for focused work and studying.",
    category: "Productivity",
    pricing: "Free",
    rating: 4.5,
    url: "https://pomofocus.io/",
    keywords: ["timer", "pomodoro", "study", "focus", "productivity"]
  },

  {
    id: "forest",
    name: "Forest",
    description: "Focus timer designed to help reduce distractions.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.forestapp.cc/",
    keywords: ["focus", "timer", "study", "productivity", "pomodoro"]
  },

  {
    id: "miro",
    name: "Miro",
    description: "Collaborative online whiteboard for brainstorming and planning.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://miro.com/",
    keywords: ["whiteboard", "brainstorm", "team", "planning", "diagram"]
  },

  {
    id: "slack",
    name: "Slack",
    description: "Team communication and collaboration platform.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://slack.com/",
    keywords: ["chat", "team", "communication", "work", "productivity"]
  },

  {
    id: "discord",
    name: "Discord",
    description: "Community and group communication platform.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://discord.com/",
    keywords: ["chat", "community", "communication", "team", "study"]
  },

  {
    id: "microsoft-onedrive",
    name: "OneDrive",
    description: "Cloud storage and file synchronization from Microsoft.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://onedrive.live.com/",
    keywords: ["cloud", "storage", "files", "microsoft", "documents"]
  },

  {
    id: "libreoffice",
    name: "LibreOffice",
    description: "Free office suite for documents, spreadsheets and presentations.",
    category: "Productivity",
    pricing: "Free",
    rating: 4.7,
    url: "https://www.libreoffice.org/",
    keywords: ["office", "documents", "word", "spreadsheet", "presentation", "school"]
  },

  {
    id: "airtable",
    name: "Airtable",
    description: "Flexible database and project organization platform.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.airtable.com/",
    keywords: ["database", "productivity", "project", "organization", "spreadsheet"]
  },

  {
    id: "monday",
    name: "monday.com",
    description: "Work management platform for teams and projects.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://monday.com/",
    keywords: ["productivity", "project", "tasks", "team", "planning"]
  },

  {
    id: "milanote",
    name: "Milanote",
    description: "Visual workspace for organizing creative projects and ideas.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://milanote.com/",
    keywords: ["notes", "brainstorm", "creative", "planning", "design"]
  },

  {
    id: "figjam",
    name: "FigJam",
    description: "Collaborative online whiteboard from Figma.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.figma.com/figjam/",
    keywords: ["whiteboard", "brainstorm", "diagram", "team", "planning"]
  },

  {
    id: "typeform",
    name: "Typeform",
    description: "Create interactive forms and surveys.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.typeform.com/",
    keywords: ["form", "survey", "quiz", "feedback", "business"]
  },

  {
    id: "google-forms",
    name: "Google Forms",
    description: "Create online forms, quizzes and surveys.",
    category: "Productivity",
    pricing: "Free",
    rating: 4.7,
    url: "https://forms.google.com/",
    keywords: ["form", "quiz", "survey", "school", "feedback"]
  },

  {
    id: "mailchimp",
    name: "Mailchimp",
    description: "Email marketing and audience management platform.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.4,
    url: "https://mailchimp.com/",
    keywords: ["email", "marketing", "newsletter", "business"]
  },

  {
    id: "buffer",
    name: "Buffer",
    description: "Social media scheduling and publishing platform.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://buffer.com/",
    keywords: ["social media", "schedule", "marketing", "content", "productivity"]
  },

  {
    id: "later",
    name: "Later",
    description: "Social media planning and scheduling platform.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.4,
    url: "https://later.com/",
    keywords: ["social media", "schedule", "instagram", "content", "marketing"]
  },

  {
    id: "metricool",
    name: "Metricool",
    description: "Social media analytics, planning and publishing platform.",
    category: "Productivity",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://metricool.com/",
    keywords: ["social media", "analytics", "marketing", "content", "schedule"]
  }

];

// Make available globally for TzTools
window.tools = tools;

console.log(`TzTools database loaded 🚀 — ${tools.length} tools`);
