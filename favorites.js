/* ================= FAVORITES SYSTEM ================= */

const FAVORITES_KEY = "tztools_favorites";

/* Get saved favorites */
function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  } catch (error) {
    return [];
  }
}

/* Save favorites */
function saveFavorites(favorites) {
  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(favorites)
  );
}

/* Check if a tool is favorited */
function isFavorite(toolId) {
  return getFavorites().includes(toolId);
}

/* Toggle favorite */
function toggleFavorite(toolId) {
  let favorites = getFavorites();

  if (favorites.includes(toolId)) {
    favorites = favorites.filter(id => id !== toolId);
  } else {
    favorites.push(toolId);
  }

  saveFavorites(favorites);

  /* Refresh visible tools */
  if (typeof renderTools === "function" && typeof searchTools === "function") {
    const results = searchTools(searchInput ? searchInput.value : "");
    
    if (typeof toolsGrid !== "undefined") {
      renderTools(toolsGrid, results);
    }
  }

  if (typeof showToast === "function") {
    showToast(
      favorites.includes(toolId)
        ? "❤️ Added to favorites"
        : "💔 Removed from favorites"
    );
  }
}

/* Get the actual favorite tool objects */
function getFavoriteTools() {
  const favorites = getFavorites();

  if (typeof tools === "undefined") return [];

  return tools.filter(tool =>
    favorites.includes(tool.id)
  );
}
