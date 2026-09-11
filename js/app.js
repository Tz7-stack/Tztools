"use strict";

/* =========================================================
   TZTOOLS V8 — MAIN APPLICATION
   ========================================================= */

console.log(
  "TzTools V8.0 starting..."
);

/* =========================================================
   STORAGE
   ========================================================= */

const STORAGE = {
  favorites:
    "tztools_v76_favorites",

  recent:
    "tztools_v76_recent",

  compare:
    "tztools_v76_compare",

  theme:
    "tztools_v76_theme"
};

let favorites =
  JSON.parse(
    localStorage.getItem(
      STORAGE.favorites
    )
  ) || [];

let recentlyUsed =
  JSON.parse(
    localStorage.getItem(
      STORAGE.recent
    )
  ) || [];

let compareList =
  JSON.parse(
    localStorage.getItem(
      STORAGE.compare
    )
  ) || [];

/* =========================================================
   DOM
   ========================================================= */

const $ =
  id =>
    document.getElementById(id);

const home =
  $("home");

const customerService =
  $("customerService");

const me =
  $("me");

const dashboard =
  $("dashboard");

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

const searchResultsView =
  $("searchResultsView");

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

const bottomNavigation =
  $("bottomNavigation");

const emptyStateHomeButton =
  $("emptyStateHomeButton");

const toastContainer =
  $("toastContainer");

/* =========================================================
   TOOL HELPERS
   ========================================================= */

function getToolById(id) {

  if (!Array.isArray(tools)) {
    return null;
  }

  return tools.find(
    tool => tool.id === id
  ) || null;
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

  if (!tool?.url) {
    return "";
  }

  const domain =
    getToolDomain(tool.url);

  if (!domain) {
    return "";
  }

  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
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

  updateBottomNav(viewId);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (
    viewId ===
    "dashboard"
  ) {

    if (
      typeof renderDashboard ===
      "function"
    ) {
      renderDashboard();
    }

  }

}

/* =========================================================
   BOTTOM NAV
   ========================================================= */

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

function createToolCard(tool) {

  const favorite =
    favorites.includes(
      tool.id
    );

  const compared =
    compareList.includes(
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
            ${tool.name?.charAt(0)?.toUpperCase() || "T"}
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
          ${tool.description || "A useful digital tool."}
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
            title="${
              favorite
                ? "Remove favorite"
                : "Add favorite"
            }"
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
            title="${
              compared
                ? "Remove from compare"
                : "Compare"
            }"
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
   RENDER SEARCH RESULTS
   ========================================================= */

function renderTools(
  list
) {

  if (!toolsGrid) {
    return;
  }

  if (!Array.isArray(list) ||
      !list.length) {

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

    if (
      typeof showToast ===
      "function"
    ) {
      showToast(
        "Type what you want to do."
      );
    }

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

      if (
        event &&
        event.preventDefault
      ) {
        event.preventDefault();
      }

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

      renderSuggestions(
        searchInput.value
      );

    }
  );

  searchInput.addEventListener(
    "keydown",
    event => {

      if (
        event.key ===
        "Enter"
      ) {

        event.preventDefault();

        performSearch();

      }

      if (
        event.key ===
        "Escape"
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

      if (searchInput) {

        searchInput.value = "";

        searchInput.focus();

      }

      searchClear.style.display =
        "none";

      suggestions?.classList
        .remove("open");

    }
  );

}

if (resultsCategoryFilter) {

  resultsCategoryFilter
    .addEventListener(
      "change",
      () => {

        const query =
          searchInput?.value.trim();

        if (query) {
          performSearch();
        }

      }
    );

}

/* =========================================================
   SEARCH SUGGESTIONS
   ========================================================= */

function renderSuggestions(
  query
) {

  if (!suggestions) {
    return;
  }

  const clean =
    typeof normalizeText ===
    "function"
      ? normalizeText(query)
      : String(query || "")
          .toLowerCase()
          .trim();

  if (!clean) {

    suggestions.innerHTML = "";

    suggestions.classList.remove(
      "open"
    );

    return;

  }

  if (!Array.isArray(tools)) {
    return;
  }

  const ranked =
    tools
      .map(tool => {

        const searchable =
          [
            tool.name,
            tool.description,
            tool.category,
            ...(tool.keywords || [])
          ]
            .join(" ")
            .toLowerCase();

        const name =
          String(
            tool.name || ""
          )
            .toLowerCase();

        let score = 0;

        if (
          name === clean
        ) {
          score += 100;
        }

        if (
          name.includes(clean)
        ) {
          score += 60;
        }

        if (
          searchable.includes(clean)
        ) {
          score += 25;
        }

        score +=
          Number(tool.rating || 0);

        return {
          tool,
          score
        };

      })
      .filter(item =>
        item.score > 0
      )
      .sort(
        (a, b) =>
          b.score - a.score
      )
      .slice(0, 6)
      .map(
        item => item.tool
      );

  if (!ranked.length) {

    suggestions.innerHTML = "";

    suggestions.classList.remove(
      "open"
    );

    return;

  }

  suggestions.innerHTML =
    ranked
      .map(tool => {

        const logo =
          getToolLogo(tool);

        return `
          <button
            class="suggestion"
            data-tool-suggestion="${tool.id}"
            type="button"
          >

            <span class="suggestion-icon">

              ${
                logo
                  ? `
                    <img
                      src="${logo}"
                      alt=""
                      loading="lazy"
                    >
                  `
                  : tool.name
                      ?.charAt(0)
                      ?.toUpperCase()
              }

            </span>

            <span class="suggestion-text">

              <strong>
                ${tool.name}
              </strong>

              <small>
                ${tool.category || "Tool"}
              </small>

            </span>

          </button>
        `;

      })
      .join("");

  suggestions.classList.add(
    "open"
  );

}

/* =========================================================
   SUGGESTION CLICK
   ========================================================= */

if (suggestions) {

  suggestions.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          "[data-tool-suggestion]"
        );

      if (!button) {
        return;
      }

      const id =
        button.dataset
          .toolSuggestion;

      const tool =
        getToolById(id);

      if (!tool) {
        return;
      }

      searchInput.value =
        tool.name;

      suggestions.classList
        .remove("open");

      performSearch();

    }
  );

}

/* =========================================================
   FAVORITES
   ========================================================= */

async function syncFavoriteCloudV8() {

  if (
    typeof supabaseClient ===
    "undefined" ||
    !supabaseClient
  ) {
    return;
  }

  try {

    const {
      data: userData,
      error: userError
    } =
      await supabaseClient.auth
        .getUser();

    if (
      userError ||
      !userData?.user
    ) {
      return;
    }

    const user =
      userData.user;

    const {
      data: existingRows,
      error: selectError
    } =
      await supabaseClient
        .from("favorites")
        .select("tool_id")
        .eq(
          "user_id",
          user.id
        );

    if (selectError) {
      console.warn(
        "Favorites cloud read:",
        selectError
      );
      return;
    }

    const cloudIds =
      (existingRows || [])
        .map(row =>
          row.tool_id
        );

    const removeIds =
      cloudIds.filter(
        id =>
          !favorites.includes(id)
      );

    const addIds =
      favorites.filter(
        id =>
          !cloudIds.includes(id)
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
              user_id: user.id,
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
      "Favorite cloud sync failed:",
      error
    );

  }

}

async function toggleFavorite(
  id
) {

  if (
    favorites.includes(id)
  ) {

    favorites =
      favorites.filter(
        item => item !== id
      );

    showToast(
      "Removed from favorites."
    );

  } else {

    favorites.unshift(id);

    showToast(
      "Added to favorites."
    );

  }

  saveLocalData();

  updateCountsSafe();

  refreshVisibleCards();

  if (
    typeof renderDashboard ===
    "function"
  ) {
    renderDashboard();
  }

  await syncFavoriteCloudV8();

}

/* =========================================================
   COMPARE
   ========================================================= */

function toggleCompare(
  id
) {

  if (
    compareList.includes(id)
  ) {

    compareList =
      compareList.filter(
        item => item !== id
      );

    showToast(
      "Removed from comparison."
    );

  } else {

    if (
      compareList.length >= 3
    ) {

      showToast(
        "Compare up to 3 tools."
      );

      return;

    }

    compareList.push(id);

    showToast(
      "Added to comparison."
    );

  }

  saveLocalData();

  updateCountsSafe();

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

  recentlyUsed =
    recentlyUsed.filter(
      item => item !== id
    );

  recentlyUsed.unshift(id);

  recentlyUsed =
    recentlyUsed.slice(
      0,
      8
    );

  saveLocalData();

  updateCountsSafe();

}

/* =========================================================
   CARD ACTIONS
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

      const id =
        visit.dataset.toolId;

      addRecentlyUsed(id);

    }

  }
);

/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function saveLocalData() {

  localStorage.setItem(
    STORAGE.favorites,
    JSON.stringify(
      favorites
    )
  );

  localStorage.setItem(
    STORAGE.recent,
    JSON.stringify(
      recentlyUsed
    )
  );

  localStorage.setItem(
    STORAGE.compare,
    JSON.stringify(
      compareList
    )
  );

}

function updateCountsSafe() {

  if (
    typeof updateCounts ===
    "function"
  ) {

    updateCounts();

  }

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

  const grids =
    activeView.querySelectorAll(
      ".tools-grid"
    );

  grids.forEach(grid => {

    const cards =
      grid.querySelectorAll(
        ".tool-card"
      );

    cards.forEach(card => {

      const id =
        card.dataset.toolId;

      const tool =
        getToolById(id);

      if (!tool) {
        return;
      }

      const wrapper =
        document.createElement(
          "div"
        );

      wrapper.innerHTML =
        createToolCard(tool);

      const newCard =
        wrapper.firstElementChild;

      if (newCard) {
        card.replaceWith(
          newCard
        );
      }

    });

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

        if (resultsCategoryFilter) {

          const valid =
            [
              "AI",
              "Design",
              "Images",
              "Video",
              "Writing",
              "Productivity",
              "Websites",
              "Students",
              "PDF",
              "Audio"
            ];

          if (
            valid.includes(category)
          ) {

            resultsCategoryFilter
              .value =
                category;

          }

        }

        const matching =
          tools.filter(
            tool =>
              tool.category ===
              category
          );

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
            `${matching.length} tools`;
        }

        renderTools(
          matching
        );

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
        () => {
          toast.remove();
        },
        220
      );

    },
    2300
  );

}

/* =========================================================
   CLOSE SUGGESTIONS
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    if (
      suggestions &&
      searchInput &&
      !suggestions.contains(
        event.target
      ) &&
      !searchInput.contains(
        event.target
      )
    ) {

      suggestions.classList
        .remove("open");

    }

  }
);

/* =========================================================
   DARK MODE
   ========================================================= */

function applyThemeV8() {

  const saved =
    localStorage.getItem(
      STORAGE.theme
    );

  document.body.classList.toggle(
    "dark",
    saved === "dark"
  );

}

applyThemeV8();

/* =========================================================
   INITIALISE
   ========================================================= */

function initialiseV8() {

  applyThemeV8();

  updateCountsSafe();

  if (
    typeof renderDashboard ===
    "function"
  ) {
    renderDashboard();
  }

  showView("home");

  console.log(
    `TzTools V8.0 ready 🚀 — ${tools.length} tools`
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
