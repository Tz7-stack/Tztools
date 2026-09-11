const tools = [

  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: "🤖",
    description: "AI assistant for writing, learning, brainstorming, coding, and everyday tasks.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.9,
    url: "https://chatgpt.com",
    keywords: ["ai", "assistant", "writing", "coding", "study", "chatbot"]
  },

  {
    id: "claude",
    name: "Claude",
    icon: "🧠",
    description: "AI assistant for writing, analysis, coding, research, and problem solving.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://claude.ai",
    keywords: ["ai", "assistant", "writing", "coding", "research", "analysis"]
  },

  {
    id: "gemini",
    name: "Gemini",
    icon: "✨",
    description: "Google's AI assistant for research, writing, learning, coding, and ideas.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://gemini.google.com",
    keywords: ["ai", "google", "assistant", "research", "study", "coding"]
  },

  {
    id: "perplexity",
    name: "Perplexity",
    icon: "🔎",
    description: "AI-powered search and research assistant for finding and understanding information.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://www.perplexity.ai",
    keywords: ["ai", "search", "research", "answers", "information"]
  },

  {
    id: "pi",
    name: "Pi",
    icon: "💬",
    description: "Conversational AI designed for helpful, natural conversations and ideas.",
    category: "AI",
    pricing: "Free",
    rating: 4.5,
    url: "https://pi.ai",
    keywords: ["ai", "chat", "assistant", "conversation"]
  },

  {
    id: "you",
    name: "You.com",
    icon: "🌐",
    description: "AI search and productivity platform for research, writing, and answers.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://you.com",
    keywords: ["ai", "search", "research", "assistant"]
  },

  {
    id: "gamma",
    name: "Gamma",
    icon: "📊",
    description: "Create presentations, documents, and visual content with AI.",
    category: "AI",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://gamma.app",
    keywords: ["ai", "presentation", "slides", "documents", "design"]
  },

  {
    id: "copyai",
    name: "Copy.ai",
    icon: "✍️",
    description: "AI-powered writing and content creation platform.",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://www.copy.ai",
    keywords: ["ai", "writing", "copywriting", "content", "marketing"]
  },

  {
    id: "canva",
    name: "Canva",
    icon: "🎨",
    description: "Design graphics, presentations, posters, social posts, and more.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.9,
    url: "https://www.canva.com",
    keywords: ["design", "logo", "poster", "graphics", "presentation", "social media"]
  },

  {
    id: "figma",
    name: "Figma",
    icon: "🖌️",
    description: "Collaborative design platform for UI, websites, prototypes, and graphics.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://www.figma.com",
    keywords: ["design", "ui", "ux", "website", "prototype", "graphics"]
  },

  {
    id: "adobe-express",
    name: "Adobe Express",
    icon: "🅰️",
    description: "Create graphics, social posts, flyers, videos, and other visual content.",
    category: "Design",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.adobe.com/express",
    keywords: ["design", "graphics", "poster", "video", "social media"]
  },

  {
    id: "pixlr",
    name: "Pixlr",
    icon: "🖼️",
    description: "Online photo editor for quick image editing and creative designs.",
    category: "Images",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://pixlr.com",
    keywords: ["photo editor", "image editor", "photos", "design"]
  },

  {
    id: "removebg",
    name: "Remove.bg",
    icon: "✂️",
    description: "Automatically remove backgrounds from images.",
    category: "Images",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.remove.bg",
    keywords: ["remove background", "background remover", "images", "photos"]
  },

  {
    id: "unsplash",
    name: "Unsplash",
    icon: "📷",
    description: "Find high-quality free photos for creative projects.",
    category: "Images",
    pricing: "Free",
    rating: 4.9,
    url: "https://unsplash.com",
    keywords: ["photos", "images", "stock photos", "free images"]
  },

  {
    id: "pexels",
    name: "Pexels",
    icon: "📸",
    description: "Free stock photos and videos for personal and creative projects.",
    category: "Images",
    pricing: "Free",
    rating: 4.9,
    url: "https://www.pexels.com",
    keywords: ["photos", "videos", "stock", "free images"]
  },

  {
    id: "tinypng",
    name: "TinyPNG",
    icon: "🐼",
    description: "Compress PNG, JPEG, and WebP images while reducing file size.",
    category: "Images",
    pricing: "Free",
    rating: 4.7,
    url: "https://tinypng.com",
    keywords: ["compress images", "image compression", "png", "jpeg", "webp"]
  },

  {
    id: "gimp",
    name: "GIMP",
    icon: "🎨",
    description: "Free and open-source image editor for photos, graphics, and digital artwork.",
    category: "Images",
    pricing: "Free Forever",
    rating: 4.8,
    url: "https://www.gimp.org",
    keywords: ["photo editor", "image editor", "graphic design", "photoshop alternative", "open source"]
  },

  {
    id: "krita",
    name: "Krita",
    icon: "🖌️",
    description: "Free and open-source digital painting software for illustrations and artwork.",
    category: "Design",
    pricing: "Free Forever",
    rating: 4.8,
    url: "https://krita.org",
    keywords: ["drawing", "digital painting", "illustration", "digital art", "free drawing"]
  },

  {
    id: "blender",
    name: "Blender",
    icon: "🧊",
    description: "Free 3D creation software for modeling, animation, rendering, and VFX.",
    category: "Design",
    pricing: "Free Forever",
    rating: 4.9,
    url: "https://www.blender.org",
    keywords: ["3d", "3d modeling", "animation", "rendering", "vfx", "3d design"]
  },

  {
    id: "inkscape",
    name: "Inkscape",
    icon: "✒️",
    description: "Free and open-source vector graphics editor for logos and illustrations.",
    category: "Design",
    pricing: "Free Forever",
    rating: 4.7,
    url: "https://inkscape.org",
    keywords: ["vector", "logo", "svg", "illustration", "icons", "graphic design"]
  },

  {
    id: "photopea",
    name: "Photopea",
    icon: "🖼️",
    description: "Free browser-based photo editor with support for PSD and many image formats.",
    category: "Images",
    pricing: "Free",
    rating: 4.8,
    url: "https://www.photopea.com",
    keywords: ["photo editor", "photoshop alternative", "psd", "image editing"]
  },

  {
    id: "penpot",
    name: "Penpot",
    icon: "🔷",
    description: "Free and open-source design platform for UI and UX projects.",
    category: "Design",
    pricing: "Free",
    rating: 4.6,
    url: "https://penpot.app",
    keywords: ["ui", "ux", "design", "prototype", "open source"]
  },

  {
    id: "excalidraw",
    name: "Excalidraw",
    icon: "✏️",
    description: "Simple online whiteboard for diagrams, sketches, and visual ideas.",
    category: "Productivity",
    pricing: "Free",
    rating: 4.8,
    url: "https://excalidraw.com",
    keywords: ["whiteboard", "diagram", "drawing", "brainstorm", "flowchart"]
  },

  {
    id: "darktable",
    name: "darktable",
    icon: "🌑",
    description: "Free and open-source photography workflow and RAW image processor.",
    category: "Images",
    pricing: "Free Forever",
    rating: 4.6,
    url: "https://www.darktable.org",
    keywords: ["raw", "photo editing", "photography", "image processing", "open source"]
  },

  {
    id: "libreoffice",
    name: "LibreOffice",
    icon: "📚",
    description: "Free office suite for documents, spreadsheets, presentations, and more.",
    category: "Productivity",
    pricing: "Free Forever",
    rating: 4.7,
    url: "https://www.libreoffice.org",
    keywords: ["documents", "word processor", "spreadsheet", "presentation", "office"]
  },

  {
    id: "obsidian",
    name: "Obsidian",
    icon: "💎",
    description: "Powerful note-taking and knowledge-management app.",
    category: "Productivity",
    pricing: "Free",
    rating: 4.8,
    url: "https://obsidian.md",
    keywords: ["notes", "study", "knowledge", "productivity", "writing"]
  },

  {
    id: "pixabay",
    name: "Pixabay",
    icon: "🌅",
    description: "Find free photos, illustrations, videos, music, and other creative assets.",
    category: "Images",
    pricing: "Free",
    rating: 4.8,
    url: "https://pixabay.com",
    keywords: ["photos", "videos", "music", "free images", "stock"]
  },

  {
    id: "mixkit",
    name: "Mixkit",
    icon: "🎬",
    description: "Free stock video clips, music, sound effects, and creative assets.",
    category: "Video",
    pricing: "Free",
    rating: 4.7,
    url: "https://mixkit.co",
    keywords: ["stock video", "video clips", "music", "sound effects"]
  },

  {
    id: "microsoft-designer",
    name: "Microsoft Designer",
    icon: "✨",
    description: "AI-powered design tool for creating images, graphics, and visual content.",
    category: "Design",
    pricing: "Free Plan",
    rating: 4.6,
    url: "https://designer.microsoft.com",
    keywords: ["ai design", "images", "graphics", "poster", "design"]
  },

  {
    id: "leonardo-ai",
    name: "Leonardo.Ai",
    icon: "🦁",
    description: "AI platform for generating images and creative visual content.",
    category: "AI",
    pricing: "Free Plan",
    rating: 4.6,
    url: "https://leonardo.ai",
    keywords: ["ai image", "image generator", "art", "creative", "generative ai"]
  },

  {
    id: "ideogram",
    name: "Ideogram",
    icon: "🔤",
    description: "AI image generator known for creating images with strong text rendering.",
    category: "AI",
    pricing: "Free Plan",
    rating: 4.6,
    url: "https://ideogram.ai",
    keywords: ["ai image", "image generator", "text in images", "design"]
  },

  {
    id: "clipdrop",
    name: "Clipdrop",
    icon: "🪄",
    description: "AI-powered tools for image generation, cleanup, background removal, and editing.",
    category: "Images",
    pricing: "Free Plan",
    rating: 4.5,
    url: "https://clipdrop.co",
    keywords: ["ai image", "background remover", "image editing", "cleanup"]
  },

  {
    id: "capcut",
    name: "CapCut",
    icon: "🎬",
    description: "Video editor with effects, captions, transitions, templates, and AI tools.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://www.capcut.com",
    keywords: ["video editor", "editing", "short videos", "tiktok", "captions"]
  },

  {
    id: "veed",
    name: "VEED",
    icon: "🎥",
    description: "Online video editor for social media, subtitles, recording, and content creation.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.veed.io",
    keywords: ["video editor", "subtitles", "captions", "social media", "recording"]
  },

  {
    id: "descript",
    name: "Descript",
    icon: "🎙️",
    description: "Edit videos and podcasts by editing their transcripts.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.descript.com",
    keywords: ["video editing", "podcast", "transcript", "audio", "captions"]
  },

  {
    id: "invideo",
    name: "InVideo",
    icon: "📹",
    description: "Online video creation platform with templates and AI-powered tools.",
    category: "Video",
    pricing: "Freemium",
    rating: 4.5,
    url: "https://invideo.io",
    keywords: ["video maker", "ai video", "video editing", "templates"]
  },

  {
    id: "grammarly",
    name: "Grammarly",
    icon: "📝",
    description: "Writing assistant for grammar, spelling, clarity, and tone.",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.grammarly.com",
    keywords: ["grammar", "writing", "spelling", "essay", "proofreading"]
  },

  {
    id: "quillbot",
    name: "QuillBot",
    icon: "🔄",
    description: "Writing tools including paraphrasing, summarizing, grammar checking, and citations.",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://quillbot.com",
    keywords: ["paraphrase", "rewrite", "summarize", "grammar", "writing"]
  },

  {
    id: "notion",
    name: "Notion",
    icon: "📓",
    description: "All-in-one workspace for notes, projects, planning, and databases.",
    category: "Productivity",
    pricing: "Free Plan",
    rating: 4.8,
    url: "https://www.notion.so",
    keywords: ["notes", "planning", "productivity", "tasks", "study", "workspace"]
  },

  {
    id: "wix",
    name: "Wix",
    icon: "🌐",
    description: "Website builder for creating websites without needing to code.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://www.wix.com",
    keywords: ["website", "website builder", "web design", "blog", "business website"]
  },

  {
    id: "wordpress",
    name: "WordPress",
    icon: "📰",
    description: "Popular platform for building websites, blogs, and online publications.",
    category: "Websites",
    pricing: "Free",
    rating: 4.7,
    url: "https://wordpress.org",
    keywords: ["website", "blog", "cms", "web design", "website builder"]
  },

  {
    id: "framer",
    name: "Framer",
    icon: "⚡",
    description: "Modern website builder for designing and publishing responsive websites.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://www.framer.com",
    keywords: ["website", "web design", "website builder", "landing page"]
  },

  {
    id: "webflow",
    name: "Webflow",
    icon: "🌊",
    description: "Visual website builder for designing and publishing professional websites.",
    category: "Websites",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://webflow.com",
    keywords: ["website", "web design", "website builder", "cms"]
  },

  {
    id: "khan-academy",
    name: "Khan Academy",
    icon: "🎓",
    description: "Free learning platform covering maths, science, computing, and more.",
    category: "Students",
    pricing: "Free Forever",
    rating: 4.9,
    url: "https://www.khanacademy.org",
    keywords: ["study", "math", "science", "learning", "school", "education"]
  },

  {
    id: "quizlet",
    name: "Quizlet",
    icon: "🧠",
    description: "Study platform for flashcards, practice questions, and learning activities.",
    category: "Students",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://quizlet.com",
    keywords: ["study", "flashcards", "school", "revision", "learning"]
  },

  {
    id: "photomath",
    name: "Photomath",
    icon: "🧮",
    description: "Math learning app that helps explain and solve mathematical problems.",
    category: "Students",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://photomath.com",
    keywords: ["math", "calculator", "homework", "algebra", "study"]
  },

  {
    id: "ilovepdf",
    name: "iLovePDF",
    icon: "📄",
    description: "Online tools for merging, splitting, compressing, converting, and editing PDFs.",
    category: "PDF",
    pricing: "Freemium",
    rating: 4.8,
    url: "https://www.ilovepdf.com",
    keywords: ["pdf", "merge pdf", "compress pdf", "convert pdf", "split pdf"]
  },

  {
    id: "smallpdf",
    name: "Smallpdf",
    icon: "📑",
    description: "Online PDF tools for compression, conversion, editing, and document management.",
    category: "PDF",
    pricing: "Freemium",
    rating: 4.7,
    url: "https://smallpdf.com",
    keywords: ["pdf", "compress pdf", "convert pdf", "edit pdf"]
  },

  {
    id: "audacity",
    name: "Audacity",
    icon: "🎧",
    description: "Free and open-source audio recording and editing software.",
    category: "Audio",
    pricing: "Free Forever",
    rating: 4.8,
    url: "https://www.audacityteam.org",
    keywords: ["audio", "recording", "audio editor", "podcast", "music"]
  },

  {
    id: "elevenlabs",
    name: "ElevenLabs",
    icon: "🔊",
    description: "AI voice and audio platform for generating realistic speech and audio.",
    category: "Audio",
    pricing: "Freemium",
    rating: 4.6,
    url: "https://elevenlabs.io",
    keywords: ["audio", "voice", "ai", "text to speech"]
  }

];
