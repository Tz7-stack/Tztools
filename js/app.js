/* =========================================================
   TZTOOLS — APP CONTROLLER
   ========================================================= */

/* ---------------------------------------------------------
   GLOBAL SEARCH STATE
--------------------------------------------------------- */

var currentSearchResults = [];
var currentSearchQuery = "";


/* ---------------------------------------------------------
   SEARCH RESULTS
--------------------------------------------------------- */

function renderSearchResults(results, query) {
  currentSearchResults = Array.isArray(results) ? results : [];
  currentSearchQuery = query || "";

  const home = document.getElementById("home");
  const resultsView = document.getElementById("searchResultsView");

  if (home) home.classList.remove("active");
  if (resultsView) resultsView.classList.add("active");

  const title = document.getElementById("resultsTitle");
  const subtitle = document.getElementById("resultsSubtitle");
  const count = document.getElementById("resultsCount");
  const grid = document.getElementById("toolsGrid");
  const noResults = document.getElementById("noResults");

  if (title) {
    title.textContent = query
      ? `Tools for "${query}"`
      : "Recommended tools";
  }

  if (subtitle) {
    subtitle.textContent = "Choose the tool that fits what you want to do.";
  }

  if (count) {
    count.textContent = `${currentSearchResults.length} tools`;
  }

  if (!grid) return;

  grid.innerHTML = "";

  if (!currentSearchResults.length) {
    if (noResults) noResults.style.display = "";
    return;
  }

  if (noResults) noResults.style.display = "none";

  currentSearchResults.forEach(tool => {
    grid.appendChild(createSearchToolCard(tool));
  });

  updateResultsCategoryFilter();
}


/* ---------------------------------------------------------
   SEARCH TOOL CARD
--------------------------------------------------------- */

function createSearchToolCard(tool) {
  const card = document.createElement("article");

  card.className = "tool-card";

  const isFavorite =
    typeof favorites !== "undefined" &&
    favorites.includes(tool.id);

  const isCompared =
    typeof compareList !== "undefined" &&
    compareList.includes(tool.id);

  card.innerHTML = `
    <div class="tool-card-top">

      <div class="tool-icon">
        ${tool.icon || "🛠️"}
      </div>

      <div class="tool-card-actions">

        <button
          class="icon-button"
          data-action="favorite"
          data-tool-id="${tool.id}"
          aria-label="${isFavorite ? "Remove from favorites" : "Add to favorites"}"
          title="${isFavorite ? "Remove favorite" : "Favorite"}"
        >
          ${isFavorite ? "❤️" : "♡"}
        </button>

        <button
          class="icon-button"
          data-action="compare"
          data-tool-id="${tool.id}"
          aria-label="${isCompared ? "Remove from compare" : "Add to compare"}"
          title="${isCompared ? "Remove from compare" : "Compare"}"
        >
          ${isCompared ? "✓" : "⇄"}
        </button>

      </div>

    </div>

    <div class="tool-card-body">

      <h3>${escapeHTML(tool.name)}</h3>

      <p>${escapeHTML(tool.description || "")}</p>

      <div class="tool-meta">

        <span class="tool-category">
          ${escapeHTML(tool.category || "Tool")}
        </span>

        <span class="tool-rating">
          ⭐ ${tool.rating || "—"}
        </span>

      </div>

      <div class="tool-footer">

        <span class="tool-pricing">
          ${escapeHTML(tool.pricing || "Free")}
        </span>

        <a
          class="visit-button"
          href="${escapeAttribute(tool.url || "#")}"
          target="_blank"
          rel="noopener noreferrer"
          data-tool-id="${tool.id}"
        >
          Visit Tool
        </a>

      </div>

    </div>
  `;

  return card;
}


/* ---------------------------------------------------------
   SAFE HTML HELPERS
--------------------------------------------------------- */

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function escapeAttribute(value) {
  return escapeHTML(value);
}


/* ---------------------------------------------------------
   CATEGORY FILTER
--------------------------------------------------------- */

function updateResultsCategoryFilter() {
  const filter = document.getElementById("resultsCategoryFilter");

  if (!filter) return;

  const categories = [
    ...new Set(
      currentSearchResults
        .map(tool => tool.category)
        .filter(Boolean)
    )
  ].sort();

  filter.innerHTML = `
    <option value="all">All Categories</option>
    ${categories
      .map(
        category =>
          `<option value="${escapeAttribute(category)}">
            ${escapeHTML(category)}
          </option>`
      )
      .join("")}
  `;
}


function applyResultsFilter() {
  const filter = document.getElementById("resultsCategoryFilter");

  if (!filter) return;

  const selected = filter.value;

  const filtered =
    selected === "all"
      ? currentSearchResults
      : currentSearchResults.filter(
          tool => tool.category === selected
        );

  const grid = document.getElementById("toolsGrid");
  const count = document.getElementById("resultsCount");
  const noResults = document.getElementById("noResults");

  if (grid) {
    grid.innerHTML = "";

    filtered.forEach(tool => {
      grid.appendChild(createSearchToolCard(tool));
    });
  }

  if (count) {
    count.textContent = `${filtered.length} tools`;
  }

  if (noResults) {
    noResults.style.display =
      filtered.length === 0 ? "" : "none";
  }
}


/* ---------------------------------------------------------
   RESULTS FILTER EVENT
--------------------------------------------------------- */

document.addEventListener("change", event => {
  if (event.target.id === "resultsCategoryFilter") {
    applyResultsFilter();
  }
});


/* ---------------------------------------------------------
   AUTH MODAL
--------------------------------------------------------- */

function closeAuthModalOnOutsideClick(event) {
  const modal = document.getElementById("authModal");

  if (!modal) return;

  if (event.target === modal) {
    if (typeof closeAuthModal === "function") {
      closeAuthModal();
    }
  }
}

document.addEventListener(
  "click",
  closeAuthModalOnOutsideClick
);


/* ---------------------------------------------------------
   AUTH MODE SWITCH
--------------------------------------------------------- */

document.addEventListener("click", event => {

  const loginTab = event.target.closest("#loginTab");
  const signupTab = event.target.closest("#signupTab");

  if (loginTab) {
    if (typeof openAuthModal === "function") {
      openAuthModal("login");
    }
  }

 if (signupTab) {
  if (typeof openAuthModal === "function") {
    openAuthModal("signup");
  }
}
});


/* ---------------------------------------------------------
   AUTH MODAL CLOSE BUTTON
--------------------------------------------------------- */

document.addEventListener("click", event => {

  const closeButton =
    event.target.closest("#authClose");

  if (!closeButton) return;

  if (typeof closeAuthModal === "function") {
    closeAuthModal();
  }
});


/* ---------------------------------------------------------
   LOGOUT BUTTON
--------------------------------------------------------- */

document.addEventListener("click", async event => {

  const logoutButton =
    event.target.closest("#logoutButton");

  if (!logoutButton) return;

  if (typeof signOutUser === "function") {
    await signOutUser();
  }

  showView("home");
});


/* ---------------------------------------------------------
   BACK TO HOME
--------------------------------------------------------- */

document.addEventListener("click", event => {

  const button =
    event.target.closest("#backHomeButton");

  if (!button) return;

  showView("home");
});


/* ---------------------------------------------------------
   COMPARE VIEW
--------------------------------------------------------- */

document.addEventListener("click", event => {

  const button =
    event.target.closest("#openCompareButton");

  if (!button) return;

  if (typeof renderDashboard === "function") {
    showView("dashboard");
    renderDashboard();
  }
});


/* ---------------------------------------------------------
   HOME SEARCH INPUT SUGGESTIONS
--------------------------------------------------------- */

document.addEventListener("input", event => {

  if (event.target.id !== "searchInput") return;

  const query = event.target.value.trim();

  const suggestions =
    document.getElementById("suggestions");

  if (!suggestions) return;

  if (!query) {
    suggestions.innerHTML = "";
    suggestions.style.display = "none";
    return;
  }

  if (typeof tools === "undefined") return;

  const matches = tools
    .filter(tool => {

      const text = [
        tool.name,
        tool.description,
        tool.category
      ]
        .join(" ")
        .toLowerCase();

      return text.includes(query.toLowerCase());
    })
    .slice(0, 5);

  if (!matches.length) {
    suggestions.innerHTML = "";
    suggestions.style.display = "none";
    return;
  }

  suggestions.innerHTML = matches
    .map(
      tool => `
        <button
          class="suggestion-item"
          type="button"
          data-suggestion="${escapeAttribute(tool.name)}"
        >
          <span>${tool.icon || "🛠️"}</span>
          <span>${escapeHTML(tool.name)}</span>
        </button>
      `
    )
    .join("");

  suggestions.style.display = "";
});


/* ---------------------------------------------------------
   SUGGESTION CLICK
--------------------------------------------------------- */

document.addEventListener("click", event => {

  const suggestion =
    event.target.closest(".suggestion-item");

  if (!suggestion) return;

  const input =
    document.getElementById("searchInput");

  if (!input) return;

  input.value =
    suggestion.dataset.suggestion || "";

  const suggestions =
    document.getElementById("suggestions");

  if (suggestions) {
    suggestions.innerHTML = "";
    suggestions.style.display = "none";
  }

  if (typeof runToolSearch === "function") {
    runToolSearch(input.value);
  }
});


/* ---------------------------------------------------------
   KEYBOARD ESCAPE
--------------------------------------------------------- */

document.addEventListener("keydown", event => {

  if (event.key !== "Escape") return;

  const authModal =
    document.getElementById("authModal");

  if (
    authModal &&
    authModal.classList.contains("active")
  ) {
    if (typeof closeAuthModal === "function") {
      closeAuthModal();
    }
  }

  const aboutPanel =
    document.getElementById("aboutPanel");

  if (
    aboutPanel &&
    aboutPanel.classList.contains("active")
  ) {
    if (typeof closeAboutPanel === "function") {
      closeAboutPanel();
    }
  }
});


/* ---------------------------------------------------------
   INITIAL APP STARTUP
--------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", async () => {

  console.log("TzTools V8.0 starting...");

  if (typeof loadCloudData === "function") {
    await loadCloudData();
  }

  if (typeof updateAuthUI === "function") {
    await updateAuthUI();
  }

  if (typeof updateCounts === "function") {
    updateCounts();
  }

  if (typeof refreshVisibleCards === "function") {
    refreshVisibleCards();
  }

  if (typeof renderDashboard === "function") {
    renderDashboard();
  }

  console.log("TzTools V8.0 ready 🚀");
});
