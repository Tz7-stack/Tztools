// suggestions.js - Smart search auto-complete

// A list of starter suggestions
const suggestions = [
  "make a logo",
  "edit a video",
  "help me study",
  "build a website",
  "write an essay",
  "design a poster"
];

export function initSuggestions() {
  const searchInput = document.getElementById("searchBox");
  const suggestionBox = document.getElementById("suggestions");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    suggestionBox.innerHTML = "";

    if (query.length > 1) {
      const filtered = suggestions.filter(s => s.toLowerCase().includes(query));
      filtered.forEach(s => {
        const item = document.createElement("div");
        item.textContent = s;
        item.className = "suggestion-item";
        item.onclick = () => {
          searchInput.value = s;
          suggestionBox.innerHTML = "";
        };
        suggestionBox.appendChild(item);
      });
    }
  });
}

