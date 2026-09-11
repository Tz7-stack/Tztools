"use strict";

/* =========================================================
   TZTOOLS V8 — DASHBOARD
   ========================================================= */

const dashboard$ = id =>
  document.getElementById(id);

/* =========================================================
   SAFE TOOL HELPERS
   ========================================================= */

function dashboardToolById(id) {
  return Array.isArray(tools)
    ? tools.find(tool => tool.id === id)
    : null;
}

function dashboardToolDomain(url) {
  try {
    return new URL(url).hostname
      .replace(/^www\./, "");
  } catch {
    return "";
  }
}

function dashboardToolLogo(tool) {
  if (!tool?.url) return "";

  const domain =
    dashboardToolDomain(tool.url);

  return domain
    ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
    : "";
}

/* =========================================================
   TOOL CARD
   ========================================================= */

function createDashboardToolCard(tool) {
  if (!tool) return "";

  const favorite =
    Array.isArray(favorites) &&
    favorites.includes(tool.id);

  const compared =
    Array.isArray(compareList) &&
    compareList.includes(tool.id);

  const logo =
    dashboardToolLogo(tool);

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
          ${tool.name || "Unnamed tool"}
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
              favorite ? "active" : ""
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
            ${favorite ? "♥" : "♡"}
          </button>

          <button
            class="icon-action compare-button ${
              compared ? "active" : ""
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
            ${compared ? "✓" : "+"}
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
   GET TOOLS
   ========================================================= */

function getDashboardTools(ids) {
  if (!Array.isArray(ids)) {
    return [];
  }

  return ids
    .map(id => dashboardToolById(id))
    .filter(Boolean);
}

/* =========================================================
   FAVORITES
   ========================================================= */

function renderFavoriteTools() {
  const grid =
    dashboard$("favoritesGrid");

  const empty =
    dashboard$("favoritesEmpty");

  if (!grid) return;

  const list =
    getDashboardTools(favorites);

  if (!list.length) {

    grid.innerHTML = "";

    if (empty) {
      empty.style.display = "block";
    }

    return;
  }

  if (empty) {
    empty.style.display = "none";
  }

  grid.innerHTML =
    list
      .map(createDashboardToolCard)
      .join("");
}

/* =========================================================
   RECENT
   ========================================================= */

function renderRecentTools() {
  const grid =
    dashboard$("recentGrid");

  const empty =
    dashboard$("recentEmpty");

  if (!grid) return;

  const list =
    getDashboardTools(recentlyUsed);

  if (!list.length) {

    grid.innerHTML = "";

    if (empty) {
      empty.style.display = "block";
    }

    return;
  }

  if (empty) {
    empty.style.display = "none";
  }

  grid.innerHTML =
    list
      .map(createDashboardToolCard)
      .join("");
}

/* =========================================================
   COMPARISON
   ========================================================= */

function renderComparisonTools() {

  const container =
    dashboard$("comparisonList");

  const empty =
    dashboard$("comparisonEmpty");

  if (!container) return;

  const list =
    getDashboardTools(compareList);

  if (!list.length) {

    container.innerHTML = "";

    if (empty) {
      empty.style.display = "block";
    }

    return;
  }

  if (empty) {
    empty.style.display = "none";
  }

  container.innerHTML =
    list
      .map(tool => {

        const logo =
          dashboardToolLogo(tool);

        return `
          <div class="comparison-row">

            <div class="comparison-tool">

              <span class="comparison-icon">

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

                <span class="comparison-icon-fallback">
                  ${tool.name?.charAt(0)?.toUpperCase() || "T"}
                </span>

              </span>

              <div>
                <strong>
                  ${tool.name}
                </strong>

                <small>
                  ${tool.category || "Tool"}
                </small>
              </div>

            </div>

            <span class="comparison-rating">
              ★ ${tool.rating ?? "—"}
            </span>

            <span class="comparison-price">
              ${tool.pricing || "Free"}
            </span>

          </div>
        `;
      })
      .join("");
}

/* =========================================================
   COUNTS
   ========================================================= */

function updateCounts() {

  const favoriteCount =
    dashboard$("favoriteCount");

  const recentCount =
    dashboard$("recentCount");

  const comparisonCount =
    dashboard$("comparisonCount");

  const compareCount =
    dashboard$("compareCount");

  const compareBar =
    dashboard$("compareBar");

  const favoriteTotal =
    Array.isArray(favorites)
      ? favorites.length
      : 0;

  const recentTotal =
    Array.isArray(recentlyUsed)
      ? recentlyUsed.length
      : 0;

  const comparisonTotal =
    Array.isArray(compareList)
      ? compareList.length
      : 0;

  if (favoriteCount) {
    favoriteCount.textContent =
      favoriteTotal;
  }

  if (recentCount) {
    recentCount.textContent =
      recentTotal;
  }

  if (comparisonCount) {
    comparisonCount.textContent =
      comparisonTotal;
  }

  if (compareCount) {
    compareCount.textContent =
      comparisonTotal;
  }

  if (compareBar) {
    compareBar.classList.toggle(
      "show",
      comparisonTotal > 0
    );
  }
}

/* =========================================================
   DASHBOARD RENDER
   ========================================================= */

function renderDashboard() {

  renderFavoriteTools();
  renderRecentTools();
  renderComparisonTools();
  updateCounts();
}

/* =========================================================
   REFRESH AFTER FAVORITE / COMPARE CHANGES
   ========================================================= */

function refreshDashboard() {
  renderDashboard();

  if (
    typeof refreshVisibleCards ===
    "function"
  ) {
    refreshVisibleCards();
  }
}

/* =========================================================
   COMPARISON BAR
   ========================================================= */

const dashboardClearCompare =
  dashboard$("clearCompareButton");

const dashboardOpenCompare =
  dashboard$("openCompareButton");

if (dashboardClearCompare) {

  dashboardClearCompare.addEventListener(
    "click",
    () => {

      compareList = [];

      if (
        typeof saveLocalData ===
        "function"
      ) {
        saveLocalData();
      }

      updateCounts();
      refreshVisibleCards();

      if (
        typeof showToast ===
        "function"
      ) {
        showToast(
          "Comparison cleared."
        );
      }
    }
  );
}

if (dashboardOpenCompare) {

  dashboardOpenCompare.addEventListener(
    "click",
    () => {

      if (
        typeof showView ===
        "function"
      ) {
        showView("dashboard");
      }

      setTimeout(() => {

        const section =
          document.querySelector(
            ".comparison-section"
          );

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }

      }, 80);
    }
  );
}

/* =========================================================
   LOG
   ========================================================= */

console.log(
  "TzTools V8 dashboard loaded."
);
