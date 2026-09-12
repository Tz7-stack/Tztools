/* =========================================================
   TzTools V8 — Authentication System
   Supabase Auth
   ========================================================= */

(function () {
  "use strict";

  /* ---------------------------------------------------------
     CONFIG
     --------------------------------------------------------- */

  const SUPABASE_URL =
    "https://nslaakklgidpzwlymrhf.supabase.co";

  const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_XoDQsJkHs_7PA8wQAoutHA_glygnyxK";


  /* ---------------------------------------------------------
     HELPERS
     --------------------------------------------------------- */

  function $(id) {
    return document.getElementById(id);
  }


  function getClient() {
    if (window.supabaseClient) {
      return window.supabaseClient;
    }

    if (
      !window.supabase ||
      typeof window.supabase.createClient !== "function"
    ) {
      console.error(
        "TzTools Auth: Supabase library was not found."
      );
      return null;
    }

    if (
      !SUPABASE_PUBLISHABLE_KEY ||
      SUPABASE_PUBLISHABLE_KEY.includes(
        "PASTE_YOUR_EXISTING"
      )
    ) {
      console.error(
        "TzTools Auth: Supabase publishable key is missing."
      );
      return null;
    }

    window.supabaseClient =
      window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
      );

    return window.supabaseClient;
  }


  const client = getClient();

  let currentUser = null;


  /* ---------------------------------------------------------
     TOAST
     --------------------------------------------------------- */

  function toast(message, type) {
    if (typeof window.showToast === "function") {
      window.showToast(message, type);
      return;
    }

    if (typeof window.toast === "function") {
      window.toast(message, type);
      return;
    }

    console.log(
      "TzTools Auth:",
      message
    );
  }


  /* ---------------------------------------------------------
     DISPLAY NAME
     --------------------------------------------------------- */

  function getDisplayName(user) {
    if (!user) {
      return "Guest";
    }

    const metadata =
      user.user_metadata || {};

    return (
      metadata.full_name ||
      metadata.name ||
      metadata.display_name ||
      user.email?.split("@")[0] ||
      "User"
    );
  }


  /* ---------------------------------------------------------
     AUTH UI
     --------------------------------------------------------- */

  function updateFeatureAccess(loggedIn) {
    document
      .querySelectorAll("[data-requires-auth]")
      .forEach(function (element) {
        element.classList.toggle(
          "auth-locked",
          !loggedIn
        );
      });
  }


  function updateAuthUI(user) {
    currentUser = user || null;

    const loggedIn = !!currentUser;

    document.body.classList.toggle(
      "user-signed-in",
      loggedIn
    );

    document.body.classList.toggle(
      "user-signed-out",
      !loggedIn
    );


    /* Profile */

    const profileName =
      $("profileName");

    const profileEmail =
      $("profileEmail");

    const profileAvatar =
      $("profileAvatar");


    if (profileName) {
      profileName.textContent =
        loggedIn
          ? getDisplayName(currentUser)
          : "Guest";
    }


    if (profileEmail) {
      profileEmail.textContent =
        loggedIn
          ? currentUser.email || ""
          : "Sign in to sync your tools";
    }


    if (profileAvatar) {
      profileAvatar.textContent =
        loggedIn
          ? getDisplayName(
              currentUser
            )
              .charAt(0)
              .toUpperCase()
          : "G";
    }


    /* Account button */

    const accountButton =
      $("accountButton");

    if (accountButton) {
      accountButton.textContent =
        loggedIn
          ? "You're signed in"
          : "Sign in or create an account";
    }


    /* Auth modal */

    const loggedInPanel =
      $("loggedInPanel");

    const loginForm =
      $("loginForm");

    const signupForm =
      $("signupForm");

    const loginTab =
      $("loginTab");

    const signupTab =
      $("signupTab");


    if (loggedInPanel) {
      loggedInPanel.style.display =
        loggedIn ? "" : "none";
    }


    if (loginForm) {
      loginForm.style.display =
        loggedIn ? "none" : "";
    }


    if (signupForm) {
      signupForm.style.display =
        "none";
    }


    if (loginTab) {
      loginTab.style.display =
        loggedIn ? "none" : "";
    }


    if (signupTab) {
      signupTab.style.display =
        loggedIn ? "none" : "";
    }


    updateFeatureAccess(
      loggedIn
    );
  }


  /* ---------------------------------------------------------
     OPEN / CLOSE AUTH MODAL
     --------------------------------------------------------- */

  function openAuthModal(mode) {
    const modal =
      $("authModal");

    if (!modal) {
      console.warn(
        "TzTools Auth: authModal not found."
      );
      return;
    }


    modal.classList.add(
      "active"
    );

    modal.setAttribute(
      "aria-hidden",
      "false"
    );


    if (mode === "signup") {
      showSignupForm();
    } else {
      showLoginForm();
    }
  }


  function closeAuthModal() {
    const modal =
      $("authModal");

    if (!modal) {
      return;
    }

    modal.classList.remove(
      "active"
    );

    modal.setAttribute(
      "aria-hidden",
      "true"
    );
  }


  /* ---------------------------------------------------------
     LOGIN / SIGNUP TABS
     --------------------------------------------------------- */

  function showLoginForm() {
    const loginForm =
      $("loginForm");

    const signupForm =
      $("signupForm");

    const loginTab =
      $("loginTab");

    const signupTab =
      $("signupTab");


    if (loginForm) {
      loginForm.style.display =
        "";
    }

    if (signupForm) {
      signupForm.style.display =
        "none";
    }


    if (loginTab) {
      loginTab.classList.add(
        "active"
      );
      loginTab.setAttribute(
        "aria-selected",
        "true"
      );
    }


    if (signupTab) {
      signupTab.classList.remove(
        "active"
      );
      signupTab.setAttribute(
        "aria-selected",
        "false"
      );
    }
  }


  function showSignupForm() {
    const loginForm =
      $("loginForm");

    const signupForm =
      $("signupForm");

    const loginTab =
      $("loginTab");

    const signupTab =
      $("signupTab");


    if (loginForm) {
      loginForm.style.display =
        "none";
    }

    if (signupForm) {
      signupForm.style.display =
        "";
    }


    if (signupTab) {
      signupTab.classList.add(
        "active"
      );
      signupTab.setAttribute(
        "aria-selected",
        "true"
      );
    }


    if (loginTab) {
      loginTab.classList.remove(
        "active"
      );
      loginTab.setAttribute(
        "aria-selected",
        "false"
      );
    }
  }


  /* ---------------------------------------------------------
     SIGN UP
     --------------------------------------------------------- */

  async function signUp(
    name,
    email,
    password
  ) {
    if (!client) {
      toast(
        "Authentication is unavailable.",
        "error"
      );
      return;
    }


    name =
      String(name || "")
        .trim();

    email =
      String(email || "")
        .trim();

    password =
      String(password || "");


    if (!name) {
      toast(
        "Please enter your name.",
        "error"
      );
      return;
    }


    if (!email) {
      toast(
        "Please enter your email.",
        "error"
      );
      return;
    }


    if (!password) {
      toast(
        "Please enter a password.",
        "error"
      );
      return;
    }


    try {
      const {
        data,
        error
      } = await client.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: name,
            name: name
          }
        }
      });


      if (error) {
        throw error;
      }


      if (
        data &&
        data.session
      ) {
        currentUser =
          data.user || null;

        updateAuthUI(
          currentUser
        );

        closeAuthModal();

        toast(
          "Account created successfully."
        );
      } else {
        toast(
          "Account created! Check your email to confirm your account."
        );

        showLoginForm();
      }


    } catch (error) {
      console.error(
        "TzTools Auth signUp error:",
        error
      );

      toast(
        error.message ||
          "Could not create your account.",
        "error"
      );
    }
  }


  /* ---------------------------------------------------------
     SIGN IN
     --------------------------------------------------------- */

  async function signIn(
    email,
    password
  ) {
    if (!client) {
      toast(
        "Authentication is unavailable.",
        "error"
      );
      return;
    }


    email =
      String(email || "")
        .trim();

    password =
      String(password || "");


    if (!email) {
      toast(
        "Please enter your email.",
        "error"
      );
      return;
    }


    if (!password) {
      toast(
        "Please enter your password.",
        "error"
      );
      return;
    }


    try {
      const {
        data,
        error
      } = await client.auth.signInWithPassword({
        email: email,
        password: password
      });


      if (error) {
        throw error;
      }


      currentUser =
        data.user || null;

      updateAuthUI(
        currentUser
      );

      closeAuthModal();


      toast(
        "Welcome back, " +
          getDisplayName(
            currentUser
          ) +
          "!"
      );


    } catch (error) {
      console.error(
        "TzTools Auth signIn error:",
        error
      );

      toast(
        error.message ||
          "Could not sign in.",
        "error"
      );
    }
  }


  /* ---------------------------------------------------------
     SIGN OUT
     --------------------------------------------------------- */

  async function signOut() {
    if (!client) {
      return;
    }


    try {
      const {
        error
      } = await client.auth.signOut();


      if (error) {
        throw error;
      }


      currentUser = null;

      updateAuthUI(
        null
      );

      closeAuthModal();


      if (
        typeof window.resetHome ===
        "function"
      ) {
        window.resetHome();
      }


      toast(
        "Signed out successfully."
      );


      console.log(
        "TzTools Auth: SIGNED_OUT"
      );


    } catch (error) {
      console.error(
        "TzTools Auth signOut error:",
        error
      );

      toast(
        error.message ||
          "Could not sign out.",
        "error"
      );
    }
  }


  /* ---------------------------------------------------------
     GET CURRENT USER
     --------------------------------------------------------- */

  async function getCurrentUser() {
    if (!client) {
      return null;
    }


    try {
      const {
        data,
        error
      } = await client.auth.getUser();


      if (error) {
        return null;
      }


      currentUser =
        data.user || null;

      return currentUser;


    } catch (error) {
      console.error(
        "TzTools Auth getCurrentUser error:",
        error
      );

      return null;
    }
  }


  /* ---------------------------------------------------------
     FORM SETUP
     --------------------------------------------------------- */

  function setupForms() {

    /* LOGIN */

    const loginForm =
      $("loginForm");


    if (loginForm) {
      loginForm.addEventListener(
        "submit",
        async function (event) {
          event.preventDefault();


          const email =
            $("loginEmail")?.value ||
            "";

          const password =
            $("loginPassword")?.value ||
            "";


          await signIn(
            email,
            password
          );
        }
      );
    }


    /* SIGN UP */

    const signupForm =
      $("signupForm");


    if (signupForm) {
      signupForm.addEventListener(
        "submit",
        async function (event) {
          event.preventDefault();


          const name =
            $("signupName")?.value ||
            "";

          const email =
            $("signupEmail")?.value ||
            "";

          const password =
            $("signupPassword")?.value ||
            "";


          await signUp(
            name,
            email,
            password
          );
        }
      );
    }


    /* LOGIN TAB */

    const loginTab =
      $("loginTab");


    if (loginTab) {
      loginTab.addEventListener(
        "click",
        function (event) {
          event.preventDefault();

          showLoginForm();
        }
      );
    }


    /* SIGNUP TAB */

    const signupTab =
      $("signupTab");


    if (signupTab) {
      signupTab.addEventListener(
        "click",
        function (event) {
          event.preventDefault();

          showSignupForm();
        }
      );
    }


    /* ACCOUNT BUTTON */

    const accountButton =
      $("accountButton");


    if (accountButton) {
      accountButton.addEventListener(
        "click",
        function (event) {
          event.preventDefault();

          openAuthModal(
            currentUser
              ? "signin"
              : "signin"
          );
        }
      );
    }


    /* LOGOUT BUTTON */

    const logoutButton =
      $("logoutButton");


    if (logoutButton) {
      logoutButton.addEventListener(
        "click",
        async function (event) {
          event.preventDefault();

          await signOut();
        }
      );
    }


    /* CLOSE MODAL */

    const closeButton =
      $("authModalClose");


    if (closeButton) {
      closeButton.addEventListener(
        "click",
        function (event) {
          event.preventDefault();

          closeAuthModal();
        }
      );
    }


    /* BACKDROP */

    const backdrop =
      $("authModalBackdrop");


    if (backdrop) {
      backdrop.addEventListener(
        "click",
        function () {
          closeAuthModal();
        }
      );
    }


    /* ESC KEY */

    document.addEventListener(
      "keydown",
      function (event) {
        if (
          event.key === "Escape"
        ) {
          closeAuthModal();
        }
      }
    );
  }


  /* ---------------------------------------------------------
     SUPABASE SESSION LISTENER
     --------------------------------------------------------- */

  function setupAuthListener() {
    if (!client) {
      return;
    }


    client.auth.onAuthStateChange(
      function (
        event,
        session
      ) {
        currentUser =
          session?.user || null;


        console.log(
          "TzTools Auth:",
          event
        );


        updateAuthUI(
          currentUser
        );
      }
    );
  }


  /* ---------------------------------------------------------
     INITIALIZE
     --------------------------------------------------------- */

  async function initAuth() {
    if (!client) {
      console.error(
        "TzTools Auth: Supabase client unavailable."
      );

      updateAuthUI(
        null
      );

      return;
    }


    setupForms();

    setupAuthListener();


    try {
      const {
        data,
        error
      } = await client.auth.getSession();


      if (error) {
        console.error(
          "TzTools Auth session error:",
          error
        );
      }


      currentUser =
        data?.session?.user ||
        null;


      updateAuthUI(
        currentUser
      );


      console.log(
        "TzTools authentication ready 🔐 — " +
          getDisplayName(
            currentUser
          )
      );


    } catch (error) {
      console.error(
        "TzTools Auth initialization error:",
        error
      );

      updateAuthUI(
        null
      );
    }
  }


  /* ---------------------------------------------------------
     PUBLIC API
     --------------------------------------------------------- */

  window.TzAuth = {

    get currentUser() {
      return currentUser;
    },

    signIn:
      signIn,

    signUp:
      signUp,

    signOut:
      signOut,

    getCurrentUser:
      getCurrentUser,

    openAuthModal:
      openAuthModal,

    closeAuthModal:
      closeAuthModal,

    updateAuthUI:
      updateAuthUI,

    getDisplayName:
      getDisplayName
  };


  /* Keep compatibility with existing TzTools code */

  window.signIn =
    signIn;

  window.signUp =
    signUp;

  window.signOut =
    signOut;

  window.openAuthModal =
    openAuthModal;

  window.closeAuthModal =
    closeAuthModal;

  window.updateAuthUI =
    updateAuthUI;

  window.getDisplayName =
    getDisplayName;


  /* ---------------------------------------------------------
     START
     --------------------------------------------------------- */

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      initAuth
    );
  } else {
    initAuth();
  }

})();
