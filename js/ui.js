/* =========================================================
   TZTOOLS V8 — UI.JS
   UI ONLY
   Menu • Theme • About • Auth Modal
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const $ = (id) => document.getElementById(id);

  /* =======================================================
     CATEGORY / HAMBURGER MENU
     ======================================================= */

  const menuButton = $("menuButton");
  const categoryMenu = $("categoryMenu");
  const categoryMenuClose = $("categoryMenuClose");
  const categoryMenuBackdrop = $("categoryMenuBackdrop");

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
      if (categoryMenu?.classList.contains("open")) {
        closeCategoryMenu();
      } else {
        openCategoryMenu();
      }
    });
  }

  if (categoryMenuClose) {
    categoryMenuClose.addEventListener(
      "click",
      closeCategoryMenu
    );
  }

  if (categoryMenuBackdrop) {
    categoryMenuBackdrop.addEventListener(
      "click",
      closeCategoryMenu
    );
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCategoryMenu();
    }
  });


  /* =======================================================
     CATEGORY BUTTONS
     ======================================================= */

  document
    .querySelectorAll(".menu-category[data-category]")
    .forEach((button) => {

      button.addEventListener("click", () => {

        const category = button.dataset.category;

        if (!category) return;

        closeCategoryMenu();

        /*
         * Let the existing app logic handle the results.
         * We only set the category filter and switch pages.
         */

        const filter = $("resultsCategoryFilter");

        if (filter) {
          filter.value = category;

          filter.dispatchEvent(
            new Event("change", {
              bubbles: true
            })
          );
        }

        const resultsView = $("searchResultsView");

        if (resultsView) {

          document
            .querySelectorAll(".app-view")
            .forEach((view) => {
              view.classList.remove("active");
            });

          resultsView.classList.add("active");
        }

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      });

    });


  /* =======================================================
     BRAND BUTTON → HOME
     ======================================================= */

  const brandButton = $("brandButton");

  if (brandButton) {

    brandButton.addEventListener("click", () => {

      closeCategoryMenu();

      document
        .querySelectorAll(".app-view")
        .forEach((view) => {
          view.classList.remove("active");
        });

      const home = $("home");

      if (home) {
        home.classList.add("active");
      }

      document
        .querySelectorAll(".bottom-nav-item")
        .forEach((item) => {

          item.classList.toggle(
            "active",
            item.dataset.viewTarget === "home"
          );

        });

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  /* =======================================================
     DARK MODE
     ======================================================= */

  const themeButton = $("themeSettingButton");
  const themeStatus = $("themeStatus");

  const THEME_KEY = "tztools_v76_theme";

  function applyTheme(theme) {

    const isDark = theme === "dark";

    document.body.classList.toggle(
      "dark",
      isDark
    );

    if (themeStatus) {
      themeStatus.textContent =
        isDark ? "On" : "Off";
    }

    localStorage.setItem(
      THEME_KEY,
      isDark ? "dark" : "light"
    );
  }

  const savedTheme =
    localStorage.getItem(THEME_KEY);

  applyTheme(
    savedTheme === "dark"
      ? "dark"
      : "light"
  );

  if (themeButton) {

    themeButton.addEventListener("click", () => {

      const isDark =
        document.body.classList.contains("dark");

      applyTheme(
        isDark ? "light" : "dark"
      );

    });

  }


  /* =======================================================
     ABOUT PANEL
     ======================================================= */

  const aboutButton = $("aboutButton");
  const aboutPanel = $("aboutPanel");
  const aboutClose = $("aboutClose");

  if (aboutButton && aboutPanel) {

    aboutButton.addEventListener("click", () => {

      aboutPanel.classList.toggle("open");

    });

  }

  if (aboutClose && aboutPanel) {

    aboutClose.addEventListener("click", () => {

      aboutPanel.classList.remove("open");

    });

  }


  /* =======================================================
     AUTH MODAL
     ======================================================= */

  const authModal = $("authModal");
  const authModalClose = $("authModalClose");
  const authModalBackdrop = $("authModalBackdrop");
  const accountButton = $("accountButton");

  function openAuthModal() {

    if (!authModal) return;

    authModal.classList.add("open");

    authModal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add("modal-open");
  }

  function closeAuthModal() {

    if (!authModal) return;

    authModal.classList.remove("open");

    authModal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove("modal-open");
  }

  if (accountButton) {
    accountButton.addEventListener(
      "click",
      openAuthModal
    );
  }

  if (authModalClose) {
    authModalClose.addEventListener(
      "click",
      closeAuthModal
    );
  }

  if (authModalBackdrop) {
    authModalBackdrop.addEventListener(
      "click",
      closeAuthModal
    );
  }


  /* =======================================================
     FINAL UI STATE
     ======================================================= */

  closeCategoryMenu();

  if (authModal) {
    authModal.setAttribute(
      "aria-hidden",
      "true"
    );
  }

  console.log(
    "TzTools UI loaded successfully."
  );

});
