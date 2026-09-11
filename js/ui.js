/* =========================================================
   TZTOOLS V8 — UI CONTROLLER
   Navigation • Category Menu • Theme • About
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     HELPERS
     ======================================================= */

  const $ = (id) => document.getElementById(id);

  const home = $("home");
  const searchResultsView = $("searchResultsView");
  const customerService = $("customerService");
  const dashboard = $("dashboard");
  const me = $("me");

  const bottomNavItems = document.querySelectorAll(
    ".bottom-nav-item"
  );


  /* =======================================================
     VIEW NAVIGATION
     ======================================================= */

  function showView(viewId) {

    const views = document.querySelectorAll(".app-view");

    views.forEach((view) => {
      view.classList.remove("active");
    });

    const target = $(viewId);

    if (!target) return;

    target.classList.add("active");

    bottomNavItems.forEach((item) => {
      item.classList.toggle(
        "active",
        item.dataset.viewTarget === viewId
      );
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    /* Dashboard refresh */

    if (
      viewId === "dashboard" &&
      typeof window.renderDashboard === "function"
    ) {
      window.renderDashboard();
    }

    if (
      viewId === "dashboard" &&
      window.TzApp &&
      typeof window.TzApp.renderDashboard === "function"
    ) {
      window.TzApp.renderDashboard();
    }
  }


  /* =======================================================
     BOTTOM NAVIGATION
     ======================================================= */

  bottomNavItems.forEach((item) => {

    item.addEventListener("click", () => {

      const targetView = item.dataset.viewTarget;

      if (!targetView) return;

      showView(targetView);

    });

  });


  /* =======================================================
     BRAND → HOME
     ======================================================= */

  const brandButton = $("brandButton");

  if (brandButton) {

    brandButton.addEventListener("click", () => {

      showView("home");

    });

  }


  /* =======================================================
     CATEGORY MENU
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

      const open =
        categoryMenu &&
        categoryMenu.classList.contains("open");

      if (open) {
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


  /* =======================================================
     ESC → CLOSE MENU
     ======================================================= */

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

        const category =
          button.dataset.category;

        if (!category) return;

        closeCategoryMenu();

        /* Switch to results page */

        showView("searchResultsView");

        /* Apply category filter */

        const filter =
          $("resultsCategoryFilter");

        if (filter) {

          filter.value = category;

          filter.dispatchEvent(
            new Event("change", {
              bubbles: true
            })
          );

        }

        /* Let the main app refresh results */

        if (
          window.TzApp &&
          typeof window.TzApp.renderTools === "function"
        ) {
          window.TzApp.renderTools();
        }

      });

    });


  /* =======================================================
     BACK HOME BUTTON
     ======================================================= */

  const emptyStateHomeButton =
    $("emptyStateHomeButton");

  if (emptyStateHomeButton) {

    emptyStateHomeButton.addEventListener(
      "click",
      () => showView("home")
    );

  }


  /* =======================================================
     DARK MODE
     ======================================================= */

  const themeButton =
    $("themeSettingButton");

  const themeStatus =
    $("themeStatus");


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
      "tztools_v76_theme",
      dark ? "dark" : "light"
    );

  }


  const savedTheme =
    localStorage.getItem(
      "tztools_v76_theme"
    );

  applyTheme(
    savedTheme === "dark"
      ? "dark"
      : "light"
  );


  if (themeButton) {

    themeButton.addEventListener(
      "click",
      () => {

        const isDark =
          document.body.classList.contains(
            "dark"
          );

        applyTheme(
          isDark ? "light" : "dark"
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

        if (
          aboutPanel.classList.contains(
            "open"
          )
        ) {

          aboutPanel.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
          });

        }

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
     ACCOUNT BUTTON
     ======================================================= */

  const accountButton =
    $("accountButton");

  const authModal =
    $("authModal");


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

    authModal.classList.remove(
      "open"
    );

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


  const authModalClose =
    $("authModalClose");

  const authModalBackdrop =
    $("authModalBackdrop");


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

        const accountBtn =
          $("accountButton");

        if (accountBtn) {

          accountBtn.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });

        }

      }
    );

  }


  /* =======================================================
     INITIAL STATE
     ======================================================= */

  closeCategoryMenu();

  bottomNavItems.forEach((item) => {

    item.classList.toggle(
      "active",
      item.dataset.viewTarget === "home"
    );

  });


  console.log(
    "TzTools UI controller loaded successfully."
  );

});
