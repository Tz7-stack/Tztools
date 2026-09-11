/* =========================================================
   TZTOOLS V8 — UI.JS
   Navigation • Hamburger • Theme • About • Auth
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const $ = (id) => document.getElementById(id);


  /* =======================================================
     PAGE NAVIGATION
     ======================================================= */

  const navItems = document.querySelectorAll(".bottom-nav-item");
  const views = document.querySelectorAll(".app-view");

  function showView(viewId) {

    views.forEach((view) => {
      view.classList.remove("active");
    });

    const target = $(viewId);

    if (!target) {
      console.warn("TzTools: view not found:", viewId);
      return;
    }

    target.classList.add("active");

    navItems.forEach((item) => {
      item.classList.toggle(
        "active",
        item.dataset.viewTarget === viewId
      );
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  navItems.forEach((item) => {

    item.addEventListener("click", () => {

      const target = item.dataset.viewTarget;

      if (target) {
        showView(target);
      }

    });

  });


  /* =======================================================
     REAL TZTOOLS LOGO → HOME
     ======================================================= */

  const brandButton = $("brandButton");

  if (brandButton) {

    brandButton.addEventListener("click", () => {
      showView("home");
      closeCategoryMenu();
    });

  }


  /* =======================================================
     HAMBURGER MENU
     ======================================================= */

  const menuButton = $("menuButton");
  const categoryMenu = $("categoryMenu");
  const categoryMenuClose = $("categoryMenuClose");
  const categoryMenuBackdrop = $("categoryMenuBackdrop");

  function openCategoryMenu() {

    if (!categoryMenu) return;

    categoryMenu.classList.add("open");

    categoryMenu.setAttribute(
      "aria-hidden",
      "false"
    );

    if (menuButton) {

      menuButton.setAttribute(
        "aria-expanded",
        "true"
      );

    }

    document.body.classList.add("menu-open");
  }


  function closeCategoryMenu() {

    if (!categoryMenu) return;

    categoryMenu.classList.remove("open");

    categoryMenu.setAttribute(
      "aria-hidden",
      "true"
    );

    if (menuButton) {

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    }

    document.body.classList.remove("menu-open");
  }


  if (menuButton) {

    menuButton.addEventListener("click", () => {

      const isOpen =
        categoryMenu &&
        categoryMenu.classList.contains("open");

      if (isOpen) {
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


  /* ESC closes menu */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
      closeCategoryMenu();
    }

  });


  /* =======================================================
     CATEGORY SELECTION
     ======================================================= */

  const categoryButtons =
    document.querySelectorAll(
      ".menu-category[data-category]"
    );


  categoryButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const category =
        button.dataset.category;

      if (!category) return;

      closeCategoryMenu();

      const resultsView =
        $("searchResultsView");

      const categoryFilter =
        $("resultsCategoryFilter");


      /*
       * Switch to Results
       */

      if (resultsView) {
        showView("searchResultsView");
      }


      /*
       * Set the category filter
       */

      if (categoryFilter) {

        categoryFilter.value = category;

        categoryFilter.dispatchEvent(
          new Event("change", {
            bubbles: true
          })
        );

      }

    });

  });


  /* =======================================================
     DARK MODE
     ======================================================= */

  const themeButton =
    $("themeSettingButton");

  const themeStatus =
    $("themeStatus");

  const THEME_KEY =
    "tztools_v76_theme";


  function applyTheme(theme) {

    const dark =
      theme === "dark";

    document.body.classList.toggle(
      "dark",
      dark
    );

    if (themeStatus) {

      themeStatus.textContent =
        dark ? "On" : "Off";

    }

    localStorage.setItem(
      THEME_KEY,
      dark ? "dark" : "light"
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

    themeButton.addEventListener(
      "click",
      () => {

        const dark =
          document.body.classList.contains(
            "dark"
          );

        applyTheme(
          dark ? "light" : "dark"
        );

      }
    );

  }


  /* =======================================================
     ABOUT PANEL
     ======================================================= */

  const aboutButton =
    $("aboutButton");

  const aboutPanel =
    $("aboutPanel");

  const aboutClose =
    $("aboutClose");


  if (aboutButton && aboutPanel) {

    aboutButton.addEventListener(
      "click",
      () => {

        aboutPanel.classList.toggle(
          "open"
        );

      }
    );

  }


  if (aboutClose && aboutPanel) {

    aboutClose.addEventListener(
      "click",
      () => {

        aboutPanel.classList.remove(
          "open"
        );

      }
    );

  }


  /* =======================================================
     AUTH MODAL
     ======================================================= */

  const authModal =
    $("authModal");

  const authModalClose =
    $("authModalClose");

  const authModalBackdrop =
    $("authModalBackdrop");

  const accountButton =
    $("accountButton");


  function openAuthModal() {

    if (!authModal) return;

    authModal.classList.add("open");

    authModal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "modal-open"
    );

  }


  function closeAuthModal() {

    if (!authModal) return;

    authModal.classList.remove("open");

    authModal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "modal-open"
    );

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
     ACCOUNT SETTINGS
     ======================================================= */

  const accountSettingsButton =
    $("accountSettingsButton");


  if (accountSettingsButton) {

    accountSettingsButton.addEventListener(
      "click",
      () => {

        showView("me");

      }
    );

  }


  /* =======================================================
     INITIAL STATE
     ======================================================= */

  closeCategoryMenu();

  navItems.forEach((item) => {

    item.classList.toggle(
      "active",
      item.dataset.viewTarget === "home"
    );

  });


  console.log(
    "TzTools UI loaded successfully."
  );

});
