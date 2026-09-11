"use strict";

/* =========================================================
   TZTOOLS V8 — MAIN APP CONTROLLER
   ========================================================= */

console.log("TzTools V8.0 starting...");

/* =========================================================
   SHARED STATE
   ========================================================= */

window.TzApp = window.TzApp || {};

const state = window.TzApp;

state.favorites =
  Array.isArray(state.favorites)
    ? state.favorites
    : JSON.parse(
        localStorage.getItem(
          "tztools_v76_favorites"
        )
      ) || [];

state.recentlyUsed =
  Array.isArray(state.recentlyUsed)
    ? state.recentlyUsed
    : JSON.parse(
        localStorage.getItem(
          "tztools_v76_recent"
        )
      ) || [];

state.compareList =
  Array.isArray(state.compareList)
    ? state.compareList
    : JSON.parse(
        localStorage.getItem(
          "tztools_v76_compare"
        )
      ) || [];

/* =========================================================
   DOM
   ========================================================= */

const $ =
  id => document.getElementById(id);

const homeNavbar =
  $("homeNavbar");

const searchForm =
  $("searchForm");

const searchInput =
  $("searchInput");

const searchButton =
  $("searchButton");

const searchClear =
  $("searchClear");

const suggestions =
  $("suggestions");

const resultsTitle =
  $("resultsTitle");

const resultsSubtitle =
  $("resultsSubtitle");

const resultsCount =
  $("resultsCount");

const toolsGrid =
  $("toolsGrid");

const noResults =
  $("noResults");

const resultsCategoryFilter =
  $("resultsCategoryFilter");

const emptyStateHomeButton =
  $("emptyStateHomeButton");

const bottomNavigation =
  $("bottomNavigation");

const toastContainer =
  $("toastContainer");

/* =========================================================
   TOOL HELPERS
   ========================================================= */

function getToolById(id) {

  if (!Array.isArray(tools)) {
    return null;
  }

  return (
    tools.find(
      tool => tool.id === id
    ) || null
  );
}

function getToolDomain(url) {

  try {

    return new URL(url)
      .hostname
      .replace(/^www\./, "");

  } catch {

    return "";

  }

}

function getToolLogo(tool) {

  const domain =
    getToolDomain(
      tool?.url
    );

  if (!domain) {
    return "";
  }

  return (
    "https://www.google.com/s2/favicons" +
    `?domain=${domain}&sz=128`
  );

}

/* =========================================================
   NAVIGATION
   ========================================================= */

function showView(viewId) {

  document
    .querySelectorAll(
      ".app-view"
    )
    .forEach(view => {

      view.classList.remove(
        "active"
      );

    });

  const target =
    $(viewId);

  if (target) {

    target.classList.add(
      "active"
    );

  }

  if (homeNavbar) {

    homeNavbar.style.display =
      viewId === "home"
        ? ""
        : "none";

  }

  updateBottomNav(
    viewId
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (
    viewId === "dashboard" &&
    typeof renderDashboard ===
      "function"
  ) {

    renderDashboard();

  }

}

function updateBottomNav(
  viewId
) {

  document
    .querySelectorAll(
      ".bottom-nav-item"
    )
    .forEach(item => {

      item.classList.toggle(
        "active",
        item.dataset.viewTarget ===
          viewId
      );

    });

}

/* =========================================================
   NAV EVENTS
   ========================================================= */

document
  .querySelectorAll(
    "[data-view-target]"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const target =
          button.dataset.viewTarget;

        if (target) {
          showView(target);
        }

      }
    );

  });

/* =========================================================
   HOME
   ========================================================= */

function resetHome() {

  if (searchInput) {
    searchInput.value = "";
  }

  if (searchClear) {
    searchClear.style.display =
      "none";
  }

  if (suggestions) {

    suggestions.innerHTML = "";

    suggestions.classList.remove(
      "open"
    );

  }

}

if (emptyStateHomeButton) {

  emptyStateHomeButton
    .addEventListener(
      "click",
      () => {

        resetHome();
        showView("home");

      }
    );

}

/* =========================================================
   TOOL CARD
   ========================================================= */

function createToolCard(
  tool
) {

  const favorite =
    state.favorites.includes(
      tool.id
    );

  const compared =
    state.compareList.includes(
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

        <div class="tool-icon">

          ${
            logo
              ? `
                <img
                  src="${logo}"
                  alt=""
                  loading="lazy"
                  onerror="
                    this.style.display='none';
                    this.parentElement.classList.add('logo-fallback');
                  "
                >
              `
              : ""
          }

          <span class="tool-icon-fallback">
            ${
              tool.name
                ?.charAt(0)
                ?.toUpperCase() || "T"
            }
          </span>

        </div>

        <span class="tool-category">
          ${tool.category || "Tool"}
        </span>

      </div>

      <div class="tool-card-body">

        <h3 class="tool-name">
          ${tool.name}
        </h3>

        <p class="tool-description">
          ${
            tool.description ||
            "A useful digital tool."
          }
        </p>

        <div class="tool-meta">

          <span>
            ★ ${tool.rating ?? "—"}
          </span>

          <span>
            ${tool.pricing || "Free"}
          </span>

        </div>

        <div class="tool-actions">

          <button
            class="icon-action favorite-button ${
              favorite
                ? "active"
                : ""
            }"
            data-action="favorite"
            data-tool-id="${tool.id}"
            aria-label="${
              favorite
                ? `Remove ${tool.name} from favorites`
                : `Add ${tool.name} to favorites`
            }"
          >
            ${
              favorite
                ? "♥"
                : "♡"
            }
          </button>

          <button
            class="icon-action compare-button ${
              compared
                ? "active"
                : ""
            }"
            data-action="compare"
            data-tool-id="${tool.id}"
            aria-label="${
              compared
                ? `Remove ${tool.name} from comparison`
                : `Compare ${tool.name}`
            }"
          >
            ${
              compared
                ? "✓"
                : "+"
            }
          </button>

          <a
            class="visit-button"
            href="${tool.url}"
            target="_blank"
            rel="noopener noreferrer"
            data-tool-id="${tool.id}"
          >
            Visit Tool
            <span>↗</span>
          </a>

        </div>

      </div>

    </article>
  `;
}

/* =========================================================
   RENDER RESULTS
   ========================================================= */

function renderTools(
  list
) {

  if (!toolsGrid) {
    return;
  }

  if (
    !Array.isArray(list) ||
    !list.length
  ) {

    toolsGrid.innerHTML = "";

    if (noResults) {
      noResults.style.display =
        "block";
    }

    return;
  }

  if (noResults) {
    noResults.style.display =
      "none";
  }

  toolsGrid.innerHTML =
    list
      .map(createToolCard)
      .join("");

}

/* =========================================================
   SEARCH
   ========================================================= */

function performSearch() {

  const query =
    searchInput?.value
      .trim();

  if (!query) {

    showToast(
      "Type what you want to do."
    );

    return;

  }

  let results =
    typeof searchTools ===
    "function"
      ? searchTools(query)
      : [];

  const category =
    resultsCategoryFilter?.value;

  if (
    category &&
    category !== "all"
  ) {

    results =
      results.filter(
        tool =>
          tool.category ===
          category
      );

  }

  showView(
    "searchResultsView"
  );

  if (resultsTitle) {

    resultsTitle.textContent =
      `Tools for "${query}"`;

  }

  if (resultsSubtitle) {

    resultsSubtitle.textContent =
      "Here are some tools that could help.";

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

}

/* =========================================================
   SEARCH EVENTS
   ========================================================= */

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
    () => {

      if (searchClear) {

        searchClear.style.display =
          searchInput.value
            ? "flex"
            : "none";

      }

      if (
        typeof renderSuggestions ===
        "function"
      ) {

        renderSuggestions(
          searchInput.value
        );

      }

    }
  );

  searchInput.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Enter"
      ) {

        event.preventDefault();

        performSearch();

      }

      if (
        event.key === "Escape"
      ) {

        suggestions?.classList
          .remove("open");

      }

    }
  );

}

if (searchClear) {

  searchClear.addEventListener(
    "click",
    () => {

      resetHome();

      if (searchInput) {
        searchInput.focus();
      }

    }
  );

}

if (
  resultsCategoryFilter
) {

  resultsCategoryFilter
    .addEventListener(
      "change",
      () => {

        if (
          searchInput?.value.trim()
        ) {

          performSearch();

        }

      }
    );

}

/* =========================================================
   FAVORITES
   ========================================================= */

async function syncFavoritesToCloud() {

  if (
    typeof supabaseClient ===
      "undefined" ||
    !supabaseClient
  ) {
    return;
  }

  try {

    const {
      data,
      error: userError
    } =
      await supabaseClient.auth
        .getUser();

    if (
      userError ||
      !data?.user
    ) {
      return;
    }

    const user =
      data.user;

    const {
      data: cloudRows,
      error
    } =
      await supabaseClient
        .from("favorites")
        .select("tool_id")
        .eq(
          "user_id",
          user.id
        );

    if (error) {

      console.warn(
        "Favorite sync read:",
        error
      );

      return;

    }

    const cloudIds =
      (cloudRows || [])
        .map(row =>
          row.tool_id
        );

    const addIds =
      state.favorites.filter(
        id =>
          !cloudIds.includes(id)
      );

    const removeIds =
      cloudIds.filter(
        id =>
          !state.favorites.includes(
            id
          )
      );

    if (removeIds.length) {

      await supabaseClient
        .from("favorites")
        .delete()
        .eq(
          "user_id",
          user.id
        )
        .in(
          "tool_id",
          removeIds
        );

    }

    if (addIds.length) {

      await supabaseClient
        .from("favorites")
        .upsert(
          addIds.map(
            tool_id => ({
              user_id:
                user.id,
              tool_id
            })
          ),
          {
            onConflict:
              "user_id,tool_id"
          }
        );

    }

  } catch (error) {

    console.warn(
      "Favorite sync failed:",
      error
    );

  }

}

async function toggleFavorite(
  id
) {

  if (
    state.favorites.includes(id)
  ) {

    state.favorites =
      state.favorites.filter(
        item => item !== id
      );

    showToast(
      "Removed from favorites."
    );

  } else {

    state.favorites.unshift(id);

    showToast(
      "Added to favorites."
    );

  }

  saveLocalData();

  refreshVisibleCards();

  if (
    typeof renderDashboard ===
    "function"
  ) {
    renderDashboard();
  }

  await syncFavoritesToCloud();

}

/* =========================================================
   COMPARE
   ========================================================= */

function toggleCompare(
  id
) {

  if (
    state.compareList.includes(
      id
    )
  ) {

    state.compareList =
      state.compareList.filter(
        item => item !== id
      );

    showToast(
      "Removed from comparison."
    );

  } else {

    if (
      state.compareList.length >=
      3
    ) {

      showToast(
        "Compare up to 3 tools."
      );

      return;

    }

    state.compareList.push(
      id
    );

    showToast(
      "Added to comparison."
    );

  }

  saveLocalData();

  refreshVisibleCards();

  if (
    typeof renderDashboard ===
    "function"
  ) {
    renderDashboard();
  }

}

/* =========================================================
   RECENT
   ========================================================= */

function addRecentlyUsed(
  id
) {

  state.recentlyUsed =
    state.recentlyUsed.filter(
      item => item !== id
    );

  state.recentlyUsed.unshift(
    id
  );

  state.recentlyUsed =
    state.recentlyUsed.slice(
      0,
      8
    );

  saveLocalData();

}

/* =========================================================
   CARD EVENTS
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const actionButton =
      event.target.closest(
        "[data-action]"
      );

    if (actionButton) {

      const id =
        actionButton.dataset
          .toolId;

      const action =
        actionButton.dataset
          .action;

      if (
        action ===
        "favorite"
      ) {
        toggleFavorite(id);
      }

      if (
        action ===
        "compare"
      ) {
        toggleCompare(id);
      }

      return;

    }

    const visit =
      event.target.closest(
        ".visit-button"
      );

    if (visit) {

      addRecentlyUsed(
        visit.dataset.toolId
      );

    }

  }
);

/* =========================================================
   LOCAL DATA
   ========================================================= */

function saveLocalData() {

  localStorage.setItem(
    "tztools_v76_favorites",
    JSON.stringify(
      state.favorites
    )
  );

  localStorage.setItem(
    "tztools_v76_recent",
    JSON.stringify(
      state.recentlyUsed
    )
  );

  localStorage.setItem(
    "tztools_v76_compare",
    JSON.stringify(
      state.compareList
    )
  );

}

/* =========================================================
   REFRESH VISIBLE CARDS
   ========================================================= */

function refreshVisibleCards() {

  const activeView =
    document.querySelector(
      ".app-view.active"
    );

  if (!activeView) {
    return;
  }

  activeView
    .querySelectorAll(
      ".tool-card"
    )
    .forEach(card => {

      const tool =
        getToolById(
          card.dataset.toolId
        );

      if (!tool) return;

      const holder =
        document.createElement(
          "div"
        );

      holder.innerHTML =
        createToolCard(tool);

      if (
        holder.firstElementChild
      ) {

        card.replaceWith(
          holder.firstElementChild
        );

      }

    });

}

/* =========================================================
   CATEGORY TILES
   ========================================================= */

document
  .querySelectorAll(
    ".category-tile"
  )
  .forEach(tile => {

    tile.addEventListener(
      "click",
      () => {

        const label =
          tile.querySelector(
            "strong"
          );

        const category =
          label?.textContent
            .trim();

        if (!category) {
          return;
        }

        const results =
          Array.isArray(tools)
            ? tools.filter(
                tool =>
                  tool.category ===
                  category
              )
            : [];

        showView(
          "searchResultsView"
        );

        if (resultsTitle) {
          resultsTitle.textContent =
            category;
        }

        if (resultsSubtitle) {
          resultsSubtitle.textContent =
            `Explore ${category.toLowerCase()} tools.`;
        }

        if (resultsCount) {
          resultsCount.textContent =
            `${results.length} tools`;
        }

        if (resultsCategoryFilter) {
          resultsCategoryFilter.value =
            category;
        }

        renderTools(results);

      }
    );

  });

/* =========================================================
   TOAST
   ========================================================= */

function showToast(
  message
) {

  if (!toastContainer) {
    console.log(message);
    return;
  }

  const toast =
    document.createElement(
      "div"
    );

  toast.className =
    "toast";

  toast.textContent =
    message;

  toastContainer.appendChild(
    toast
  );

  requestAnimationFrame(
    () => {

      toast.classList.add(
        "show"
      );

    }
  );

  setTimeout(
    () => {

      toast.classList.remove(
        "show"
      );

      setTimeout(
        () => toast.remove(),
        220
      );

    },
    2300
  );

}

/* =========================================================
   INITIALISE
   ========================================================= */

function initialiseV8() {

  saveLocalData();

  if (
    typeof updateCounts ===
    "function"
  ) {
    updateCounts();
  }

  if (
    typeof renderDashboard ===
    "function"
  ) {
    renderDashboard();
  }

  showView("home");

  console.log(
    `TzTools V8.0 ready 🚀 — ${
      Array.isArray(tools)
        ? tools.length
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
