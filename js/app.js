"use strict";

/* =========================================================
   TzTools V8 — Main App
   Single source of truth: window.TzApp
   ========================================================= */

window.TzApp = window.TzApp || {};

const appState = window.TzApp;

/* =========================================================
   STATE
   ========================================================= */

appState.favorites = Array.isArray(appState.favorites)
  ? appState.favorites
  : JSON.parse(
      localStorage.getItem("tztools_v76_favorites") || "[]"
    );

appState.recentlyUsed = Array.isArray(appState.recentlyUsed)
  ? appState.recentlyUsed
  : JSON.parse(
      localStorage.getItem("tztools_v76_recent") || "[]"
    );

appState.compareList = Array.isArray(appState.compareList)
  ? appState.compareList
  : JSON.parse(
      localStorage.getItem("tztools_v76_compare") || "[]"
    );

appState.currentView = "homeView";

/* =========================================================
   DOM
   ========================================================= */

let homeNavbar;
let searchForm;
let searchInput;
let searchButton;
let searchClear;
let suggestions;
let resultsTitle;
let resultsSubtitle;
let resultsCount;
let toolsGrid;
let noResults;
let resultsCategoryFilter;
let emptyStateHomeButton;
let bottomNavigation;
let toastContainer;

/* =========================================================
   HELPERS
   ========================================================= */

function getToolById(id) {
  if (!Array.isArray(window.tools)) return null;

  return window.tools.find(
    tool => String(tool.id) === String(id)
  );
}

function getToolDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function getToolLogo(tool) {
  const domain = getToolDomain(tool.url);

  if (!domain) return "";

  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

/* =========================================================
   AUTH
   ========================================================= */

async function isSignedIn() {
  if (
    typeof window.supabaseClient === "undefined" ||
    !window.supabaseClient?.auth
  ) {
    return false;
  }

  try {
    const {
      data: { user }
    } = await window.supabaseClient.auth.getUser();

    return !!user;
  } catch {
    return false;
  }
}

function requireAccount(
  message = "Create a free account to unlock this feature."
) {
  if (typeof window.openAuthModal !== "function") {
    showToast(message);
    return false;
  }

  window.openAuthModal("signup", message);
  return false;
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function updateBottomNav(viewId) {
  document
    .querySelectorAll("[data-view-target]")
    .forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.viewTarget === viewId
      );
    });
}

async function showView(viewId) {

  if (viewId === "dashboardView") {

    const signedIn = await isSignedIn();

    if (!signedIn) {

      requireAccount(
        "Create a free account to unlock your personal TzTools Dashboard."
      );

      return;
    }
  }

  document
    .querySelectorAll(".app-view")
    .forEach(view => {
      view.classList.remove("active");
    });

  const target =
    document.getElementById(viewId);

  if (!target) {

    console.warn(
      `TzTools: view "${viewId}" was not found.`
    );

    return;
  }

  target.classList.add("active");

  appState.currentView = viewId;

  updateBottomNav(viewId);

  if (homeNavbar) {
    homeNavbar.style.display =
      viewId === "homeView"
        ? ""
        : "none";
  }

  if (
    viewId === "dashboardView" &&
    typeof window.renderDashboard === "function"
  ) {
    window.renderDashboard();
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

window.showView = showView;

/* =========================================================
   HOME
   ========================================================= */

function resetHome() {

  if (searchInput) {
    searchInput.value = "";
  }

  if (suggestions) {
    suggestions.innerHTML = "";
    suggestions.style.display = "none";
  }

  showView("homeView");
}

function updateHomeState() {

  const query =
    searchInput?.value?.trim() || "";

  if (searchClear) {
    searchClear.style.display =
      query ? "flex" : "none";
  }
}

/* =========================================================
   SEARCH
   ========================================================= */

function performSearch() {

  const query =
    searchInput?.value?.trim() || "";

  if (!query) {

    showToast(
      "Type something you want to find."
    );

    return;
  }

  if (
    typeof window.searchTools !== "function"
  ) {

    console.error(
      "TzTools: searchTools() is missing."
    );

    showToast(
      "Search is temporarily unavailable."
    );

    return;
  }

  let results =
    window.searchTools(query);

  if (!Array.isArray(results)) {
    results = [];
  }

  const category =
    resultsCategoryFilter?.value || "all";

  if (category !== "all") {

    results = results.filter(tool =>
      String(tool.category).toLowerCase() ===
      String(category).toLowerCase()
    );
  }

  const resultsView =
    document.getElementById(
      "searchResultsView"
    );

  if (!resultsView) {

    console.error(
      "TzTools: searchResultsView missing."
    );

    return;
  }

  document
    .querySelectorAll(".app-view")
    .forEach(view => {
      view.classList.remove("active");
    });

  resultsView.classList.add("active");

  appState.currentView =
    "searchResultsView";

  if (homeNavbar) {
    homeNavbar.style.display = "none";
  }

  updateBottomNav(
    "searchResultsView"
  );

  if (resultsTitle) {
    resultsTitle.textContent =
      `Results for "${query}"`;
  }

  if (resultsSubtitle) {
    resultsSubtitle.textContent =
      results.length
        ? "Tools that match what you're looking for."
        : "We couldn't find a matching tool.";
  }

  if (resultsCount) {
    resultsCount.textContent =
      `${results.length} ${
        results.length === 1
          ? "tool"
          : "tools"
      }`;
  }

  renderTools(results);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* =========================================================
   TOOL CARD
   ========================================================= */

function createToolCard(tool) {

  if (!tool) return "";

  const favorite =
    appState.favorites.includes(
      String(tool.id)
    ) ||
    appState.favorites.includes(
      tool.id
    );

  const compare =
    appState.compareList.includes(
      String(tool.id)
    ) ||
    appState.compareList.includes(
      tool.id
    );

  const logo =
    getToolLogo(tool);

  return `
    <article
      class="tool-card"
      data-tool-id="${tool.id}"
    >

      <div class="tool-card-top">

        <div class="tool-logo-wrap">

          ${
            logo
              ? `
                <img
                  class="tool-logo"
                  src="${logo}"
                  alt="${tool.name} logo"
                  loading="lazy"
                >
              `
              : `
                <div class="tool-logo-fallback">
                  ${String(tool.name).charAt(0)}
                </div>
              `
          }

        </div>

        <div class="tool-card-actions">

          <button
            class="icon-button favorite-button ${
              favorite ? "active" : ""
            }"
            data-action="favorite"
            data-tool-id="${tool.id}"
            aria-label="${
              favorite
                ? "Remove from favorites"
                : "Add to favorites"
            }"
            title="${
              favorite
                ? "Remove from favorites"
                : "Add to favorites"
            }"
          >
            ${favorite ? "♥" : "♡"}
          </button>

          <button
            class="icon-button compare-button ${
              compare ? "active" : ""
            }"
            data-action="compare"
            data-tool-id="${tool.id}"
            aria-label="${
              compare
                ? "Remove from compare"
                : "Add to compare"
            }"
            title="${
              compare
                ? "Remove from compare"
                : "Add to compare"
            }"
          >
            ⚖
          </button>

        </div>

      </div>

      <div class="tool-card-content">

        <div class="tool-category">
          ${tool.category || "Tool"}
        </div>

        <h3 class="tool-name">
          ${tool.name}
        </h3>

        <p class="tool-description">
          ${
            tool.description ||
            "Useful online tool."
          }
        </p>

        <div class="tool-meta">

          ${
            tool.rating
              ? `<span>⭐ ${tool.rating}</span>`
              : ""
          }

          ${
            tool.pricing
              ? `<span>${tool.pricing}</span>`
              : ""
          }

        </div>

      </div>

      <div class="tool-card-footer">

        <button
          class="visit-button"
          data-action="visit"
          data-tool-id="${tool.id}"
        >
          Visit Tool
          <span>↗</span>
        </button>

      </div>

    </article>
  `;
}

/* =========================================================
   RENDER
   ========================================================= */

function renderTools(list) {

  if (!toolsGrid) return;

  toolsGrid.innerHTML = "";

  if (
    !Array.isArray(list) ||
    list.length === 0
  ) {

    if (noResults) {
      noResults.style.display = "block";
    }

    return;
  }

  if (noResults) {
    noResults.style.display = "none";
  }

  toolsGrid.innerHTML =
    list.map(createToolCard).join("");
}

window.createToolCard =
  createToolCard;

window.renderTools =
  renderTools;

/* =========================================================
   FAVORITES
   ========================================================= */

async function toggleFavorite(id) {

  const signedIn =
    await isSignedIn();

  if (!signedIn) {

    requireAccount(
      "Create a free account to save tools to your Favorites."
    );

    return;
  }

  const normalizedId =
    String(id);

  const index =
    appState.favorites.findIndex(
      favoriteId =>
        String(favoriteId) ===
        normalizedId
    );

  if (index >= 0) {

    appState.favorites.splice(
      index,
      1
    );

    showToast(
      "Removed from Favorites."
    );

  } else {

    appState.favorites.push(
      normalizedId
    );

    showToast(
      "Added to Favorites ⭐"
    );
  }

  saveLocalData();

  refreshVisibleCards();

  if (
    typeof window.renderDashboard ===
    "function"
  ) {
    window.renderDashboard();
  }

  if (
    typeof window.syncFavoritesToCloud ===
    "function"
  ) {
    window.syncFavoritesToCloud();
  }
}

window.toggleFavorite =
  toggleFavorite;

/* =========================================================
   COMPARE
   ========================================================= */

async function toggleCompare(id) {

  const signedIn =
    await isSignedIn();

  if (!signedIn) {

    requireAccount(
      "Create a free account to compare tools."
    );

    return;
  }

  const normalizedId =
    String(id);

  const index =
    appState.compareList.findIndex(
      compareId =>
        String(compareId) ===
        normalizedId
    );

  if (index >= 0) {

    appState.compareList.splice(
      index,
      1
    );

    showToast(
      "Removed from Compare."
    );

  } else {

    if (
      appState.compareList.length >= 3
    ) {

      showToast(
        "You can compare up to 3 tools."
      );

      return;
    }

    appState.compareList.push(
      normalizedId
    );

    showToast(
      "Added to Compare ⚖"
    );
  }

  saveLocalData();

  refreshVisibleCards();

  if (
    typeof window.renderDashboard ===
    "function"
  ) {
    window.renderDashboard();
  }

  if (
    typeof window.syncCompareToCloud ===
    "function"
  ) {
    window.syncCompareToCloud();
  }
}

window.toggleCompare =
  toggleCompare;

/* =========================================================
   RECENTLY USED
   ========================================================= */

async function addRecentlyUsed(id) {

  const signedIn =
    await isSignedIn();

  if (!signedIn) {
    return;
  }

  const normalizedId =
    String(id);

  appState.recentlyUsed =
    appState.recentlyUsed.filter(
      recentId =>
        String(recentId) !==
        normalizedId
    );

  appState.recentlyUsed.unshift(
    normalizedId
  );

  appState.recentlyUsed =
    appState.recentlyUsed.slice(
      0,
      8
    );

  saveLocalData();

  if (
    typeof window.syncRecentToCloud ===
    "function"
  ) {
    window.syncRecentToCloud();
  }

  if (
    typeof window.renderDashboard ===
    "function"
  ) {
    window.renderDashboard();
  }
}

window.addRecentlyUsed =
  addRecentlyUsed;

/* =========================================================
   REFRESH CARDS
   ========================================================= */

function refreshVisibleCards() {

  if (!toolsGrid) return;

  const cards =
    toolsGrid.querySelectorAll(
      "[data-tool-id]"
    );

  cards.forEach(card => {

    const id =
      card.dataset.toolId;

    const tool =
      getToolById(id);

    if (!tool) return;

    const wrapper =
      document.createElement("div");

    wrapper.innerHTML =
      createToolCard(tool);

    const replacement =
      wrapper.firstElementChild;

    if (replacement) {
      card.replaceWith(
        replacement
      );
    }
  });
}

window.refreshVisibleCards =
  refreshVisibleCards;

/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function saveLocalData() {

  localStorage.setItem(
    "tztools_v76_favorites",
    JSON.stringify(
      appState.favorites || []
    )
  );

  localStorage.setItem(
    "tztools_v76_recent",
    JSON.stringify(
      appState.recentlyUsed || []
    )
  );

  localStorage.setItem(
    "tztools_v76_compare",
    JSON.stringify(
      appState.compareList || []
    )
  );
}

window.saveLocalData =
  saveLocalData;

/* =========================================================
   EVENTS
   ========================================================= */

function setupEvents() {

  document.addEventListener(
    "click",
    event => {

      const navButton =
        event.target.closest(
          "[data-view-target]"
        );

      if (navButton) {

        event.preventDefault();

        const target =
          navButton.dataset.viewTarget;

        if (target) {
          showView(target);
        }

        return;
      }

      const actionButton =
        event.target.closest(
          "[data-action]"
        );

      if (actionButton) {

        const action =
          actionButton.dataset.action;

        const id =
          actionButton.dataset.toolId;

        if (!id) return;

        if (action === "favorite") {

          event.preventDefault();

          toggleFavorite(id);

          return;
        }

        if (action === "compare") {

          event.preventDefault();

          toggleCompare(id);

          return;
        }

        if (action === "visit") {

          event.preventDefault();

          const tool =
            getToolById(id);

          if (!tool?.url) {

            showToast(
              "Tool link unavailable."
            );

            return;
          }

          addRecentlyUsed(id);

          window.open(
            tool.url,
            "_blank",
            "noopener,noreferrer"
          );

          return;
        }
      }

      const homeButton =
        event.target.closest(
          "[data-home-button], .home-button"
        );

      if (homeButton) {

        event.preventDefault();

        resetHome();
      }
    }
  );

  if (searchForm) {

    searchForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        performSearch();
      }
    );
  }

  if (searchButton) {

    searchButton.addEventListener(
      "click",
      event => {

        event.preventDefault();

        performSearch();
      }
    );
  }

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      updateHomeState
    );

    searchInput.addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {

          event.preventDefault();

          performSearch();
        }
      }
    );
  }

  if (searchClear) {

    searchClear.addEventListener(
      "click",
      () => {

        if (searchInput) {
          searchInput.value = "";
        }

        updateHomeState();

        searchInput?.focus();
      }
    );
  }

  if (emptyStateHomeButton) {

    emptyStateHomeButton.addEventListener(
      "click",
      resetHome
    );
  }

  if (resultsCategoryFilter) {

    resultsCategoryFilter.addEventListener(
      "change",
      performSearch
    );
  }

  document.addEventListener(
    "click",
    event => {

      const category =
        event.target.closest(
          "[data-category]"
        );

      if (!category) return;

      const categoryName =
        category.dataset.category;

      if (!categoryName) return;

      const filtered =
        Array.isArray(window.tools)
          ? window.tools.filter(
              tool =>
                String(tool.category)
                  .toLowerCase() ===
                String(categoryName)
                  .toLowerCase()
            )
          : [];

      document
        .querySelectorAll(".app-view")
        .forEach(view =>
          view.classList.remove("active")
        );

      const resultsView =
        document.getElementById(
          "searchResultsView"
        );

      if (!resultsView) return;

      resultsView.classList.add(
        "active"
      );

      appState.currentView =
        "searchResultsView";

      if (homeNavbar) {
        homeNavbar.style.display =
          "none";
      }

      if (resultsTitle) {
        resultsTitle.textContent =
          categoryName;
      }

      if (resultsSubtitle) {
        resultsSubtitle.textContent =
          `Explore ${categoryName} tools.`;
      }

      if (resultsCount) {
        resultsCount.textContent =
          `${filtered.length} tools`;
      }

      renderTools(filtered);

      updateBottomNav(
        "searchResultsView"
      );
    }
  );
}

/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

  if (!toastContainer) {

    console.log(
      "TzTools:",
      message
    );

    return;
  }

  const toast =
    document.createElement("div");

  toast.className =
    "tz-toast";

  toast.textContent =
    message;

  toastContainer.appendChild(
    toast
  );

  requestAnimationFrame(() => {
    toast.classList.add(
      "show"
    );
  });

  setTimeout(() => {

    toast.classList.remove(
      "show"
    );

    setTimeout(() => {
      toast.remove();
    }, 250);

  }, 2500);
}

window.showToast =
  showToast;

/* =========================================================
   INITIALISE
   ========================================================= */

function initialiseV8() {

  homeNavbar =
    document.getElementById(
      "homeNavbar"
    );

  searchForm =
    document.getElementById(
      "searchForm"
    );

  searchInput =
    document.getElementById(
      "homeSearchInput"
    ) ||
    document.getElementById(
      "searchInput"
    );

  searchButton =
    document.getElementById(
      "searchButton"
    );

  searchClear =
    document.getElementById(
      "searchClear"
    );

  suggestions =
    document.getElementById(
      "searchSuggestions"
    );

  resultsTitle =
    document.getElementById(
      "resultsTitle"
    );

  resultsSubtitle =
    document.getElementById(
      "resultsSubtitle"
    );

  resultsCount =
    document.getElementById(
      "resultsCount"
    );

  toolsGrid =
    document.getElementById(
      "toolsGrid"
    );

  noResults =
    document.getElementById(
      "noResults"
    );

  resultsCategoryFilter =
    document.getElementById(
      "resultsCategoryFilter"
    ) ||
    document.getElementById(
      "categoryFilter"
    );

  emptyStateHomeButton =
    document.getElementById(
      "emptyStateHomeButton"
    );

  bottomNavigation =
    document.getElementById(
      "bottomNavigation"
    );

  toastContainer =
    document.getElementById(
      "toastContainer"
    );

  saveLocalData();

  setupEvents();

  document
    .querySelectorAll(".app-view")
    .forEach(view =>
      view.classList.remove(
        "active"
      )
    );

  const home =
    document.getElementById(
      "homeView"
    );

  if (home) {
    home.classList.add(
      "active"
    );
  }

  appState.currentView =
    "homeView";

  updateBottomNav(
    "homeView"
  );

  console.log(
    `TzTools V8 ready 🚀 — ${
      Array.isArray(window.tools)
        ? window.tools.length
        : 0
    } tools`
  );
}

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initialiseV8
  );

} else {

  initialiseV8();
}
