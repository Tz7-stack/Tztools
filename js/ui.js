/* =========================================================
   TZTOOLS — UI + NAVIGATION
   ========================================================= */


/* =========================================================
   SHOW VIEW
   ========================================================= */

function showView(viewId) {
  document
    .querySelectorAll(".app-view")
    .forEach(view => {
      view.classList.remove("active");
    });

  const target =
    document.getElementById(viewId);

  if (target) {
    target.classList.add("active");
  }

  const homeNavbar =
    document.getElementById("homeNavbar");

  if (homeNavbar) {
    homeNavbar.style.display =
      viewId === "home" ? "" : "none";
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  updateBottomNav(viewId);

  if (viewId === "dashboard") {
    if (
      typeof renderDashboard === "function"
    ) {
      renderDashboard();
    }
  }
}


/* =========================================================
   BOTTOM NAVIGATION
   ========================================================= */

function updateBottomNav(viewId) {
  document
    .querySelectorAll(".bottom-nav-item")
    .forEach(item => {

      const target =
        item.dataset.viewTarget;

      item.classList.toggle(
        "active",
        target === viewId
      );

    });
}


/* =========================================================
   NAVIGATION EVENTS
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const navButton =
      event.target.closest(
        "[data-view-target]"
      );

    if (!navButton) return;

    const target =
      navButton.dataset.viewTarget;

    if (target) {
      showView(target);
    }

  }
);


/* =========================================================
   HOME SEARCH BUTTON
   ========================================================= */

function handleHomeSearch() {
  const input =
    document.getElementById(
      "searchInput"
    );

  if (!input) return;

  const query =
    input.value.trim();

  if (!query) return;

  if (
    typeof runToolSearch === "function"
  ) {
    runToolSearch(query);
  }
}


/* =========================================================
   SEARCH EVENTS
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    if (
      event.target.closest(
        "#searchButton"
      )
    ) {
      handleHomeSearch();
    }

  }
);


document.addEventListener(
  "keydown",
  event => {

    if (
      event.target.id === "searchInput" &&
      event.key === "Enter"
    ) {
      event.preventDefault();
      handleHomeSearch();
    }

  }
);


/* =========================================================
   CLEAR SEARCH
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    if (
      !event.target.closest(
        "#searchClear"
      )
    ) {
      return;
    }

    const input =
      document.getElementById(
        "searchInput"
      );

    if (input) {
      input.value = "";
      input.focus();
    }

    const suggestions =
      document.getElementById(
        "suggestions"
      );

    if (suggestions) {
      suggestions.innerHTML = "";
      suggestions.style.display =
        "none";
    }

  }
);


/* =========================================================
   CUSTOMER SERVICE
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        "#customerService"
      );

    if (!button) return;

    showToast(
      "Customer Service is coming soon."
    );

  }
);


/* =========================================================
   ACCOUNT BUTTON
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        "#accountButton"
      );

    if (!button) return;

    if (
      typeof getCurrentUser === "function"
    ) {
      getCurrentUser().then(user => {

        if (user) {

          showView("me");

        } else if (
          typeof openAuthModal === "function"
        ) {

          openAuthModal("login");

        }

      });

    }

  }
);


/* =========================================================
   ME / SETTINGS ACCOUNT
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        "#accountSettingsButton"
      );

    if (!button) return;

    if (
      typeof getCurrentUser === "function"
    ) {

      getCurrentUser().then(user => {

        if (user) {
          showToast(
            "You are already signed in."
          );
        } else if (
          typeof openAuthModal === "function"
        ) {
          openAuthModal("login");
        }

      });

    }

  }
);


/* =========================================================
   ABOUT PANEL
   ========================================================= */

function openAboutPanel() {
  const panel =
    document.getElementById(
      "aboutPanel"
    );

  if (!panel) return;

  panel.classList.add("active");
  panel.classList.remove("hidden");
}


function closeAboutPanel() {
  const panel =
    document.getElementById(
      "aboutPanel"
    );

  if (!panel) return;

  panel.classList.remove("active");
  panel.classList.add("hidden");
}


document.addEventListener(
  "click",
  event => {

    if (
      event.target.closest(
        "#aboutButton"
      )
    ) {
      openAboutPanel();
    }

    if (
      event.target.closest(
        "#aboutClose"
      )
    ) {
      closeAboutPanel();
    }

  }
);


/* =========================================================
   DARK MODE
   ========================================================= */

function applyTheme(theme) {
  const isDark =
    theme === "dark";

  document.body.classList.toggle(
    "dark-mode",
    isDark
  );

  localStorage.setItem(
    STORAGE.theme,
    theme
  );

  const themeStatus =
    document.getElementById(
      "themeStatus"
    );

  if (themeStatus) {
    themeStatus.textContent =
      isDark
        ? "Dark mode"
        : "Light mode";
  }
}


function toggleTheme() {
  const isDark =
    document.body.classList.contains(
      "dark-mode"
    );

  applyTheme(
    isDark ? "light" : "dark"
  );
}


document.addEventListener(
  "click",
  event => {

    if (
      event.target.closest(
        "#themeSettingButton"
      )
    ) {
      toggleTheme();
    }

  }
);


/* =========================================================
   INITIAL THEME
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const savedTheme =
      localStorage.getItem(
        STORAGE.theme
      ) || "light";

    applyTheme(savedTheme);

    showView("home");
/* =========================================================
   TZTOOLS CATEGORY MENU
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const categoryMenu = document.getElementById("categoryMenu");
const categoryMenuClose = document.getElementById("categoryMenuClose");
const categoryMenuBackdrop = document.getElementById("categoryMenuBackdrop");

function openCategoryMenu() {
  if (!categoryMenu) return;

  categoryMenu.classList.add("open");
  categoryMenu.setAttribute("aria-hidden", "false");

  if (menuButton) {
    menuButton.setAttribute("aria-expanded", "true");
  }

  document.body.classList.add("menu-open");
}

function closeCategoryMenu() {
  if (!categoryMenu) return;

  categoryMenu.classList.remove("open");
  categoryMenu.setAttribute("aria-hidden", "true");

  if (menuButton) {
    menuButton.setAttribute("aria-expanded", "false");
  }

  document.body.classList.remove("menu-open");
}

if (menuButton) {
  menuButton.addEventListener("click", () => {
    const isOpen = categoryMenu?.classList.contains("open");

    if (isOpen) {
      closeCategoryMenu();
    } else {
      openCategoryMenu();
    }
  });
}

if (categoryMenuClose) {
  categoryMenuClose.addEventListener("click", closeCategoryMenu);
}

if (categoryMenuBackdrop) {
  categoryMenuBackdrop.addEventListener("click", closeCategoryMenu);
}


/* ESC CLOSES MENU */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCategoryMenu();
  }
});


/* CATEGORY BUTTONS */

document.querySelectorAll(".menu-category[data-category]").forEach((button) => {

  button.addEventListener("click", () => {

    const category = button.dataset.category;

    closeCategoryMenu();

    const filter = document.getElementById("resultsCategoryFilter");

    if (filter) {
      filter.value = category;
    }

    const resultsView = document.getElementById("searchResultsView");

    if (resultsView) {
      document.querySelectorAll(".app-view").forEach((view) => {
        view.classList.remove("active");
      });

      resultsView.classList.add("active");

      document.querySelectorAll(".bottom-nav-item").forEach((item) => {
        item.classList.remove("active");
      });
    }

    if (typeof window.TzApp !== "undefined" &&
        typeof window.TzApp.renderTools === "function") {
      window.TzApp.renderTools();
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});
  }
);
