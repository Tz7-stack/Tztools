/* =========================================================
   TZTOOLS — DASHBOARD
   ========================================================= */

function getToolsByIds(ids) {
  if (!Array.isArray(ids)) return [];

  return ids
    .map(id => tools.find(tool => tool.id === id))
    .filter(Boolean);
}


/* =========================================================
   DASHBOARD COUNTS
   ========================================================= */

function updateCounts() {
  const favoriteCount =
    document.getElementById("favoriteCount");

  const recentCount =
    document.getElementById("recentCount");

  const comparisonCount =
    document.getElementById("comparisonCount");

  if (favoriteCount) {
    favoriteCount.textContent = favorites.length;
  }

  if (recentCount) {
    recentCount.textContent = recentlyUsed.length;
  }

  if (comparisonCount) {
    comparisonCount.textContent = compareList.length;
  }

  const compareBar =
    document.getElementById("compareBar");

  const compareCount =
    document.getElementById("compareCount");

  if (compareBar) {
    compareBar.classList.toggle(
      "active",
      compareList.length > 0
    );
  }

  if (compareCount) {
    compareCount.textContent =
      compareList.length;
  }
}


/* =========================================================
   TOOL CARD
   ========================================================= */

function createDashboardToolCard(tool) {
  if (!tool) return "";

  const isFavorite =
    favorites.includes(tool.id);

  const isCompared =
    compareList.includes(tool.id);

  return `
    <article class="tool-card">

      <div class="tool-card-top">

        <div class="tool-icon">
          ${tool.icon}
        </div>

        <button
          class="icon-action ${isFavorite ? "active" : ""}"
          data-action="favorite"
          data-tool-id="${tool.id}"
          aria-label="Favorite ${tool.name}"
          title="Favorite"
        >
          ${isFavorite ? "♥" : "♡"}
        </button>

      </div>

      <div class="tool-card-content">

        <h3>${tool.name}</h3>

        <p>
          ${tool.description}
        </p>

        <div class="tool-meta">

          <span class="tool-category">
            ${tool.category}
          </span>

          <span class="tool-rating">
            ⭐ ${tool.rating}
          </span>

        </div>

        <div class="tool-pricing">
          ${tool.pricing}
        </div>

      </div>

      <div class="tool-card-actions">

        <a
          href="${tool.url}"
          target="_blank"
          rel="noopener noreferrer"
          class="visit-button"
          data-tool-id="${tool.id}"
        >
          Visit Tool
        </a>

        <button
          class="compare-button ${isCompared ? "active" : ""}"
          data-action="compare"
          data-tool-id="${tool.id}"
        >
          ${isCompared ? "✓ Compared" : "Compare"}
        </button>

      </div>

    </article>
  `;
}


/* =========================================================
   FAVORITES
   ========================================================= */

function renderFavoriteTools() {
  const grid =
    document.getElementById("favoritesGrid");

  const empty =
    document.getElementById("favoritesEmpty");

  if (!grid) return;

  const favoriteTools =
    getToolsByIds(favorites);

  if (favoriteTools.length === 0) {
    grid.innerHTML = "";

    if (empty) {
      empty.style.display = "";
    }

    return;
  }

  if (empty) {
    empty.style.display = "none";
  }

  grid.innerHTML =
    favoriteTools
      .map(createDashboardToolCard)
      .join("");
}


/* =========================================================
   RECENTLY USED
   ========================================================= */

function renderRecentTools() {
  const grid =
    document.getElementById("recentGrid");

  const empty =
    document.getElementById("recentEmpty");

  if (!grid) return;

  const recentTools =
    getToolsByIds(recentlyUsed);

  if (recentTools.length === 0) {
    grid.innerHTML = "";

    if (empty) {
      empty.style.display = "";
    }

    return;
  }

  if (empty) {
    empty.style.display = "none";
  }

  grid.innerHTML =
    recentTools
      .map(createDashboardToolCard)
      .join("");
}


/* =========================================================
   COMPARISON
   ========================================================= */

function renderComparisonTools() {
  const list =
    document.getElementById("comparisonList");

  const empty =
    document.getElementById("comparisonEmpty");

  if (!list) return;

  const comparedTools =
    getToolsByIds(compareList);

  if (comparedTools.length === 0) {
    list.innerHTML = "";

    if (empty) {
      empty.style.display = "";
    }

    return;
  }

  if (empty) {
    empty.style.display = "none";
  }

  list.innerHTML =
    comparedTools
      .map(tool => `
        <div class="comparison-item">

          <div class="comparison-tool-info">

            <span class="comparison-icon">
  <img
    src="https://www.google.com/s2/favicons?domain=${getToolDomain(tool.url)}&sz=128"
    alt=""
    loading="lazy"
    onerror="this.style.display='none'; this.parentElement.textContent='•';"
  >
</span>

            <div>
              <strong>${tool.name}</strong>

              <small>
                ${tool.category}
              </small>
            </div>

          </div>

          <div class="comparison-details">

            <span>
              ⭐ ${tool.rating}
            </span>

            <span>
              ${tool.pricing}
            </span>

          </div>

          <button
            class="remove-comparison"
            data-action="compare"
            data-tool-id="${tool.id}"
            aria-label="Remove ${tool.name} from comparison"
          >
            ×
          </button>

        </div>
      `)
      .join("");
}


/* =========================================================
   RENDER ENTIRE DASHBOARD
   ========================================================= */

function renderDashboard() {
  renderFavoriteTools();
  renderRecentTools();
  renderComparisonTools();
  updateCounts();
}


/* =========================================================
   REFRESH VISIBLE CARDS
   ========================================================= */

function refreshVisibleCards() {
  renderFavoriteTools();
  renderRecentTools();
  renderComparisonTools();
  updateCounts();

  if (
    typeof currentSearchResults !== "undefined" &&
    Array.isArray(currentSearchResults)
  ) {
    if (
      typeof renderSearchResults === "function"
    ) {
      renderSearchResults(
        currentSearchResults
      );
    }
  }
}


/* =========================================================
   FAVORITE
   ========================================================= */

async function toggleFavorite(toolId) {
  const index =
    favorites.indexOf(toolId);

  if (index === -1) {
    favorites.push(toolId);
  } else {
    favorites.splice(index, 1);
  }

  saveLocalData();

  updateCounts();
  refreshVisibleCards();

  if (
    typeof getCurrentUser === "function" &&
    typeof syncFavoritesToCloud === "function"
  ) {
    const user =
      await getCurrentUser();

    if (user) {
      await syncFavoritesToCloud();
    }
  }
}


/* =========================================================
   RECENTLY USED
   ========================================================= */

async function addRecentlyUsed(toolId) {
  recentlyUsed =
    recentlyUsed.filter(
      id => id !== toolId
    );

  recentlyUsed.unshift(toolId);

  recentlyUsed =
    recentlyUsed.slice(0, 20);

  saveLocalData();

  updateCounts();

  if (
    typeof getCurrentUser === "function" &&
    typeof syncRecentToCloud === "function"
  ) {
    const user =
      await getCurrentUser();

    if (user) {
      await syncRecentToCloud();
    }
  }

  renderRecentTools();
}


/* =========================================================
   COMPARE
   ========================================================= */

function toggleCompare(toolId) {
  const index =
    compareList.indexOf(toolId);

  if (index === -1) {

    if (compareList.length >= 3) {
      showToast(
        "You can compare up to 3 tools."
      );

      return;
    }

    compareList.push(toolId);

  } else {

    compareList.splice(index, 1);

  }

  saveLocalData();

  refreshVisibleCards();
}


/* =========================================================
   CLEAR COMPARISON
   ========================================================= */

function clearComparison() {
  compareList = [];

  saveLocalData();

  refreshVisibleCards();
}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {
  const container =
    document.getElementById(
      "toastContainer"
    );

  if (!container) {
    alert(message);
    return;
  }

  const toast =
    document.createElement("div");

  toast.className = "toast";

  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");

    setTimeout(() => {
      toast.remove();
    }, 300);

  }, 2500);
}


/* =========================================================
   DASHBOARD EVENTS
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const actionButton =
      event.target.closest(
        "[data-action]"
      );

    if (actionButton) {

      const toolId =
        actionButton.dataset.toolId;

      const action =
        actionButton.dataset.action;

      if (action === "favorite") {
        toggleFavorite(toolId);
      }

      if (action === "compare") {
        toggleCompare(toolId);
      }

      return;
    }


    const visitButton =
      event.target.closest(
        ".visit-button"
      );

    if (visitButton) {

      const toolId =
        visitButton.dataset.toolId;

      if (toolId) {
        addRecentlyUsed(toolId);
      }

      return;
    }


    if (
      event.target.closest(
        "#clearCompareButton"
      )
    ) {
      clearComparison();
    }

  }
);


/* =========================================================
   INITIAL DASHBOARD
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {
    renderDashboard();
  }
);




/* =========================================================
   DIRECTORY CATEGORY STRIP
   ========================================================= */

.home-categories {
  width: min(1180px, calc(100% - 40px));

  margin: 12px auto 0;

  display: grid;

  grid-template-columns:
    repeat(5, minmax(0, 1fr));

  gap: 12px;
}

.home-category {
  min-height: 78px;

  padding: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #e4e7ec;
  border-radius: 12px;

  background: #fff;

  color: #30353d;

  font-size: 12px;
  font-weight: 700;

  transition:
    transform .18s ease,
    border-color .18s ease,
    box-shadow .18s ease;
}

.home-category:hover {
  transform: translateY(-2px);

  border-color: #cfd3df;

  box-shadow:
    0 10px 25px rgba(20,25,35,.07);
}

/* =========================================================
   DIRECTORY CONTENT
   ========================================================= */

.home-section {
  width: min(1180px, calc(100% - 40px));

  margin: 0 auto;

  padding: 50px 0 90px;
}

.home-section-header {
  display: flex;
  align-items: end;
  justify-content: space-between;

  gap: 20px;

  margin-bottom: 18px;
}

.home-section-header h2 {
  font-size: 23px;

  letter-spacing: -0.035em;
  font-weight: 800;
}

.home-section-header p {
  margin: 0;

  text-align: right;

  color: #7a818c;

  font-size: 12px;
}

/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 700px) {

  #homeNavbar {
    width: calc(100% - 24px);

    min-height: 62px;
  }

  #home .home-content,
  #home .home-hero {
    width: calc(100% - 24px);

    padding:
      50px 0
      35px;
  }

  #home h1 {
    font-size: 35px;
  }

  #home p {
    font-size: 13px;
  }

  #searchInput {
    height: 58px;

    padding-left: 17px;
    padding-right: 105px;

    font-size: 13px;
  }

  #searchButton {
    min-width: 82px;
    height: 44px;

    font-size: 11px;
  }

  .home-categories {
    width: calc(100% - 24px);

    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap: 9px;
  }

  .home-category {
    min-height: 62px;
  }

  .home-section {
    width: calc(100% - 24px);
  }

  .home-section-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .home-section-header p {
    text-align: left;
  }
}
