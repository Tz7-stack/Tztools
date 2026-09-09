/* =========================================================
   TZTOOLS V6 — MAIN STYLESHEET
========================================================= */


/* =========================================================
   GLOBAL RESET
========================================================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  background: #f7f8ff;
  color: #111827;

  line-height: 1.6;
  min-height: 100vh;
}


/* =========================================================
   VARIABLES
========================================================= */

:root {
  --bg: #f7f8ff;
  --surface: #ffffff;
  --surface-soft: #f3f4ff;

  --text: #111827;
  --text-soft: #374151;
  --muted: #6b7280;

  --border: #e5e7eb;

  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --primary-light: #eef2ff;

  --accent: #f59e0b;

  --success: #10b981;
  --danger: #ef4444;

  --shadow-sm:
    0 4px 12px rgba(15, 23, 42, 0.06);

  --shadow:
    0 12px 30px rgba(15, 23, 42, 0.08);

  --shadow-lg:
    0 20px 50px rgba(15, 23, 42, 0.12);

  --radius-sm: 10px;
  --radius: 16px;
  --radius-lg: 24px;
}


/* =========================================================
   DARK MODE
========================================================= */

body.dark-mode {
  --bg: #0f1117;
  --surface: #171a23;
  --surface-soft: #202431;

  --text: #f9fafb;
  --text-soft: #d1d5db;
  --muted: #9ca3af;

  --border: #2d3342;

  --primary-light: #25264a;

  background: var(--bg);
  color: var(--text);
}


/* =========================================================
   LINKS / BUTTONS
========================================================= */

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.btn-reset {
  border: 0;
  background: none;
}


/* =========================================================
   CONTAINER
========================================================= */

.container {
  width: min(1180px, 92%);
  margin: 0 auto;
}


/* =========================================================
   NAVBAR
========================================================= */

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;

  width: 100%;

  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(14px);

  border-bottom: 1px solid var(--border);
}

.dark-mode .navbar {
  background: rgba(15, 17, 23, 0.9);
}

.navbar .container {
  min-height: 72px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;
}


/* =========================================================
   LOGO
========================================================= */

.logo {
  font-size: 1.35rem;
  font-weight: 800;

  color: var(--text);

  letter-spacing: -0.5px;
}

.logo span {
  color: var(--primary);
}

.footer-logo {
  font-size: 1.2rem;
  font-weight: 800;
}


/* =========================================================
   NAVIGATION
========================================================= */

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-links a {
  color: var(--muted);
  font-size: 0.95rem;
  font-weight: 600;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.nav-links a:hover {
  color: var(--primary);
  transform: translateY(-1px);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}


/* =========================================================
   ICON BUTTONS
========================================================= */

.icon-button,
.menu-button {
  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  border: 1px solid var(--border);
  border-radius: 12px;

  background: var(--surface);
  color: var(--text);

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.icon-button:hover,
.menu-button:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
  background: var(--primary-light);
}

.menu-button {
  display: none;
}


/* =========================================================
   PAGES
========================================================= */

.page {
  width: 100%;
  min-height: calc(100vh - 72px);
}


/* =========================================================
   HERO
========================================================= */

.hero {
  text-align: center;

  padding:
    90px 20px
    70px;

  max-width: 900px;
  margin: 0 auto;
}

.eyebrow {
  display: inline-block;

  padding: 7px 13px;

  margin-bottom: 18px;

  border-radius: 999px;

  background: var(--primary-light);
  color: var(--primary);

  font-size: 0.8rem;
  font-weight: 800;

  letter-spacing: 0.6px;
  text-transform: uppercase;
}

.hero h1 {
  font-size: clamp(2.4rem, 6vw, 4.8rem);

  line-height: 1.05;

  letter-spacing: -3px;

  margin-bottom: 20px;
}

.hero h1 span {
  color: var(--primary);
}

.subtitle {
  max-width: 680px;
  margin: 0 auto;

  color: var(--muted);

  font-size: 1.1rem;
}


/* =========================================================
   SEARCH
========================================================= */

.search-wrapper {
  width: min(760px, 100%);
  margin: 35px auto 0;
}

.search-box {
  display: flex;
  align-items: center;

  gap: 10px;

  padding: 8px 8px 8px 18px;

  background: var(--surface);

  border: 1px solid var(--border);

  border-radius: 18px;

  box-shadow: var(--shadow);

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.search-box:focus-within {
  border-color: var(--primary);

  box-shadow:
    0 0 0 4px rgba(99, 102, 241, 0.12),
    var(--shadow);
}

.search-box input {
  flex: 1;

  min-width: 0;

  border: 0;
  outline: 0;

  background: transparent;

  color: var(--text);

  font-size: 1rem;
}

.search-box input::placeholder {
  color: var(--muted);
}

#searchButton {
  flex-shrink: 0;

  border: 0;

  padding: 12px 20px;

  border-radius: 12px;

  background: var(--primary);
  color: white;

  font-weight: 700;

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

#searchButton:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.search-hint {
  margin-top: 12px;

  color: var(--muted);

  font-size: 0.85rem;
}


/* =========================================================
   SUGGESTIONS
========================================================= */

.suggestions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 10px;

  margin-top: 20px;
}

.suggestion {
  padding: 9px 14px;

  border: 1px solid var(--border);
  border-radius: 999px;

  background: var(--surface);

  color: var(--text-soft);

  font-size: 0.85rem;
  font-weight: 600;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.suggestion:hover {
  transform: translateY(-2px);

  border-color: var(--primary);

  background: var(--primary-light);

  color: var(--primary);
}

.suggestion-icon {
  margin-right: 5px;
}


/* =========================================================
   QUICK SEARCHES
========================================================= */

.quick-searches {
  margin-top: 30px;
}

.quick-searches p {
  color: var(--muted);
  font-size: 0.85rem;
  margin-bottom: 10px;
}


/* =========================================================
   SECTIONS
========================================================= */

section {
  scroll-margin-top: 90px;
}

.section {
  padding: 70px 0;
}

.section-header {
  margin-bottom: 28px;
}

.section-label {
  color: var(--primary);

  font-size: 0.8rem;
  font-weight: 800;

  text-transform: uppercase;
  letter-spacing: 1px;

  margin-bottom: 6px;
}

.section-header h2 {
  font-size: clamp(1.7rem, 4vw, 2.4rem);

  letter-spacing: -1px;
}

.section-header p {
  margin-top: 7px;

  color: var(--muted);
}


/* =========================================================
   CATEGORY GRID
========================================================= */

.category-grid {
  display: grid;

  grid-template-columns:
    repeat(4, minmax(0, 1fr));

  gap: 16px;
}

.category-card {
  padding: 22px;

  border: 1px solid var(--border);
  border-radius: var(--radius);

  background: var(--surface);

  box-shadow: var(--shadow-sm);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.category-card:hover {
  transform: translateY(-5px);

  border-color: var(--primary);

  box-shadow: var(--shadow);
}

.category-card-icon {
  font-size: 1.8rem;
  margin-bottom: 12px;
}

.category-card h3 {
  font-size: 1rem;
  margin-bottom: 5px;
}

.category-card p {
  color: var(--muted);
  font-size: 0.85rem;
}


/* =========================================================
   TOOL GRID
========================================================= */

.tool-grid {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 18px;
}


/* =========================================================
   TOOL CARD
========================================================= */

.tool-card {
  position: relative;

  display: flex;
  align-items: flex-start;

  gap: 15px;

  padding: 20px;

  background: var(--surface);

  border: 1px solid var(--border);

  border-radius: var(--radius);

  box-shadow: var(--shadow-sm);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.tool-card:hover {
  transform: translateY(-5px);

  border-color: var(--primary);

  box-shadow: var(--shadow);
}


/* =========================================================
   TOOL ICON
========================================================= */

.tool-icon {
  flex: 0 0 54px;

  width: 54px;
  height: 54px;

  display: grid;
  place-items: center;

  border-radius: 15px;

  background: var(--primary-light);

  font-size: 1.7rem;
}


/* =========================================================
   TOOL INFO
========================================================= */

.tool-info {
  min-width: 0;
  flex: 1;
}

.tool-title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 10px;

  margin-bottom: 6px;
}

.tool-info h3 {
  color: var(--text);

  font-size: 1.05rem;

  line-height: 1.3;
}

.tool-rating {
  flex-shrink: 0;

  color: var(--accent);

  font-size: 0.82rem;
  font-weight: 700;
}

.tool-info > p {
  color: var(--muted);

  font-size: 0.9rem;

  margin-bottom: 13px;
}


/* =========================================================
   TOOL META
========================================================= */

.tool-meta {
  display: flex;
  flex-wrap: wrap;

  gap: 7px;

  margin-bottom: 15px;
}

.tool-meta span {
  display: inline-flex;
  align-items: center;

  padding: 5px 9px;

  border-radius: 999px;

  background: var(--surface-soft);

  color: var(--text-soft);

  font-size: 0.75rem;
  font-weight: 700;
}


/* =========================================================
   VISIT TOOL BUTTON
========================================================= */

.tool-info > a {
  display: inline-flex;
  align-items: center;

  padding: 9px 13px;

  border-radius: 10px;

  background: var(--primary);
  color: white;

  font-size: 0.82rem;
  font-weight: 700;

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.tool-info > a:hover {
  background: var(--primary-dark);

  transform: translateX(2px);
}


/* =========================================================
   OLD / EXTRA TOOL CLASSES
   Kept for compatibility with future V6 features
========================================================= */

.rating {
  color: var(--accent);
  font-weight: 700;
}

.best-for {
  color: var(--muted);
  font-size: 0.8rem;
}

.tool-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.visit-button {
  display: inline-flex;
  align-items: center;

  padding: 9px 13px;

  border-radius: 10px;

  background: var(--primary);
  color: white;

  font-size: 0.82rem;
  font-weight: 700;
}


/* =========================================================
   EMPTY STATES
========================================================= */

.empty,
.empty-state {
  padding: 45px 20px;

  text-align: center;

  border: 1px dashed var(--border);

  border-radius: var(--radius);

  background: var(--surface);
}

.empty h3,
.empty-state h3 {
  margin-bottom: 7px;
}

.empty p,
.empty-state p {
  color: var(--muted);
}


/* =========================================================
   DASHBOARD
========================================================= */

.dashboard-grid {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 20px;
}

.dashboard-card {
  padding: 24px;

  background: var(--surface);

  border: 1px solid var(--border);

  border-radius: var(--radius);

  box-shadow: var(--shadow-sm);
}

.dashboard-card-icon {
  font-size: 1.7rem;

  margin-bottom: 10px;
}

.dashboard-card h3 {
  margin-bottom: 5px;
}

.dashboard-card p {
  color: var(--muted);
}


/* =========================================================
   FILTER PANEL
========================================================= */

.filter-panel {
  display: flex;
  align-items: center;

  gap: 12px;

  margin-bottom: 25px;
}

.filter-search {
  flex: 1;

  display: flex;
  align-items: center;

  gap: 8px;

  padding: 11px 14px;

  border: 1px solid var(--border);

  border-radius: 12px;

  background: var(--surface);
}

.filter-search input {
  width: 100%;

  border: 0;
  outline: 0;

  background: transparent;

  color: var(--text);
}

#categoryFilter {
  padding: 11px 14px;

  border: 1px solid var(--border);

  border-radius: 12px;

  background: var(--surface);
  color: var(--text);

  outline: none;
}


/* =========================================================
   FOOTER
========================================================= */

footer {
  margin-top: 70px;

  padding: 45px 0;

  border-top: 1px solid var(--border);

  background: var(--surface);
}

.footer-content {
  display: flex;

  justify-content: space-between;

  gap: 30px;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;

  gap: 18px;
}

.footer-links a {
  color: var(--muted);

  font-size: 0.9rem;
}

.footer-links a:hover {
  color: var(--primary);
}


/* =========================================================
   SCROLLBAR
========================================================= */

::-webkit-scrollbar {
  width: 9px;
}

::-webkit-scrollbar-track {
  background: var(--bg);
}

::-webkit-scrollbar-thumb {
  background: #c7c9d9;
  border-radius: 999px;
}

.dark-mode ::-webkit-scrollbar-thumb {
  background: #3b4050;
}


/* =========================================================
   SELECTION
========================================================= */

::selection {
  background: rgba(99, 102, 241, 0.2);
}


/* =========================================================
   RESPONSIVE — TABLET
========================================================= */

@media (max-width: 900px) {

  .nav-links {
    display: none;
  }

  .menu-button {
    display: grid;
  }

  .category-grid {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  .tool-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
  }

}


/* =========================================================
   RESPONSIVE — MOBILE
========================================================= */

@media (max-width: 600px) {

  .container {
    width: min(94%, 1180px);
  }

  .navbar .container {
    min-height: 64px;
  }

  .hero {
    padding:
      65px 10px
      50px;
  }

  .hero h1 {
    font-size: 2.45rem;
    letter-spacing: -1.8px;
  }

  .subtitle {
    font-size: 0.98rem;
  }

  .search-box {
    padding-left: 13px;
  }

  #searchButton {
    padding: 11px 14px;
  }

  .category-grid {
    grid-template-columns: 1fr 1fr;

    gap: 10px;
  }

  .category-card {
    padding: 16px;
  }

  .tool-card {
    padding: 16px;
  }

  .tool-icon {
    width: 46px;
    height: 46px;

    flex-basis: 46px;

    font-size: 1.4rem;
  }

  .tool-title-row {
    flex-direction: column;

    gap: 4px;
  }

  .filter-panel {
    flex-direction: column;
    align-items: stretch;
  }

  .footer-content {
    flex-direction: column;
  }

}


/* =========================================================
   SMALL PHONES
========================================================= */

@media (max-width: 420px) {

  .hero h1 {
    font-size: 2.1rem;
  }

  .search-box {
    flex-direction: column;
    align-items: stretch;

    padding: 10px;
  }

  .search-box input {
    padding: 8px;
  }

  #searchButton {
    width: 100%;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .tool-card {
    gap: 11px;
  }

}


/* =========================================================
   ANIMATIONS
========================================================= */

@keyframes toolCardAppear {

  from {
    opacity: 0;
    transform: translateY(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }

}

.tool-card {
  animation: toolCardAppear 0.35s ease both;
}


/* =========================================================
   ACCESSIBILITY
========================================================= */

button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible {
  outline: 3px solid rgba(99, 102, 241, 0.35);
  outline-offset: 3px;
}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

}
