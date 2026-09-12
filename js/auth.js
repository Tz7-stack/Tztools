/* =========================================================
   TZTOOLS AUTH.JS — V8 FINAL CLEAN EDITION
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     1. SUPABASE CONFIG
     ========================================================= */

  const SUPABASE_URL =
    "https://nslaakklgidpzwlymrhf.supabase.co";

  /*
    IMPORTANT:
    Paste your EXISTING Supabase publishable key below.
    Do NOT use a service-role/secret key here.
  */

  const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_XoDQsJkHs_7PA8wQAoutHA_glygnyxK";


  /* =========================================================
     2. GLOBAL AUTH STATE
     ========================================================= */

  let supabaseClient = null;
  let currentUser = null;
  let authInitialized = false;


  /* =========================================================
     3. SMALL DOM HELPER
     ========================================================= */

  function $(id) {
    return document.getElementById(id);
  }


  /* =========================================================
     4. SUPABASE CLIENT
     ========================================================= */

  function getClient() {
    if (supabaseClient) {
      return supabaseClient;
    }

    if (!window.supabase) {
      console.error(
        "TzTools Auth: Supabase library was not found."
      );

      return null;
    }

    try {
      supabaseClient =
        window.supabase.createClient(
          SUPABASE_URL,
          SUPABASE_PUBLISHABLE_KEY
        );

      return supabaseClient;

    } catch (error) {
      console.error(
        "TzTools Auth: Failed to create Supabase client.",
        error
      );

      return null;
    }
  }


  /* =========================================================
     5. TOAST
     ========================================================= */

  function showToast(message, type) {

    type = type || "info";

    if (typeof window.showToast === "function") {
      window.showToast(message, type);
      return;
    }

    let toast = document.getElementById(
      "tztoolsAuthToast"
    );

    if (!toast) {

      toast = document.createElement("div");

      toast.id = "tztoolsAuthToast";

      toast.style.position = "fixed";
      toast.style.left = "50%";
      toast.style.bottom = "100px";
      toast.style.transform =
        "translateX(-50%) translateY(20px)";

      toast.style.padding =
        "12px 18px";

      toast.style.borderRadius =
        "12px";

      toast.style.background =
        "rgba(20,20,30,.95)";

      toast.style.color =
        "#fff";

      toast.style.fontSize =
        "14px";

      toast.style.fontWeight =
        "600";

      toast.style.zIndex =
        "999999";

      toast.style.opacity =
        "0";

      toast.style.pointerEvents =
        "none";

      toast.style.transition =
        "all .25s ease";

      document.body.appendChild(toast);
    }

    toast.textContent = message;

    requestAnimationFrame(function () {
      toast.style.opacity = "1";
      toast.style.transform =
        "translateX(-50%) translateY(0)";
    });

    clearTimeout(
      toast._hideTimer
    );

    toast._hideTimer =
      setTimeout(function () {

        toast.style.opacity = "0";

        toast.style.transform =
          "translateX(-50%) translateY(20px)";

      }, 3000);
  }


  /* =========================================================
     6. DISPLAY NAME
     ========================================================= */

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


  /* =========================================================
     7. AUTH FEATURE ACCESS
     ========================================================= */

  function updateFeatureAccess(loggedIn) {

    document
      .querySelectorAll(
        "[data-requires-auth]"
      )
      .forEach(function (element) {

        element.classList.toggle(
          "auth-locked",
          !loggedIn
        );

      });
  }


  /* =========================================================
     8. UPDATE AUTH UI
     ========================================================= */

  function updateAuthUI(user) {

    currentUser = user || null;

    const loggedIn =
      !!currentUser;

    document.body.classList.toggle(
      "user-signed-in",
      loggedIn
    );

    document.body.classList.toggle(
      "user-signed-out",
      !loggedIn
    );


    /* -------------------------
       PROFILE
       ------------------------- */

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
          ? (
              currentUser.email ||
              ""
            )
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


    /* -------------------------
       ACCOUNT BUTTON
       ------------------------- */

    const accountButton =
      $("accountButton");

    if (accountButton) {

      const title =
        accountButton.querySelector(
          ".setting-content strong"
        );

      const subtitle =
        accountButton.querySelector(
          ".setting-content small"
        );

      if (title) {
        title.textContent =
          "Account";
      }

      if (subtitle) {

        subtitle.textContent =
          loggedIn
            ? "You're signed in"
            : "Sign in or create an account";
      }
    }


    /* -------------------------
       AUTH FORMS
       ------------------------- */

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


    /* -------------------------
       FEATURE ACCESS
       ------------------------- */

    updateFeatureAccess(
      loggedIn
    );
  }


  /* =========================================================
     9. SWITCH LOGIN / SIGNUP
     ========================================================= */

  function switchAuthMode(mode) {

    const loginForm =
      $("loginForm");

    const signupForm =
      $("signupForm");

    const loginTab =
      $("loginTab");

    const signupTab =
      $("signupTab");


    const isSignup =
      mode === "signup";


    if (loginForm) {

      loginForm.style.display =
        isSignup ? "none" : "";
    }


    if (signupForm) {

      signupForm.style.display =
        isSignup ? "" : "none";
    }


    if (loginTab) {

      loginTab.classList.toggle(
        "active",
        !isSignup
      );
    }


    if (signupTab) {

      signupTab.classList.toggle(
        "active",
        isSignup
      );
    }
  }


  /* =========================================================
     10. OPEN AUTH MODAL
     ========================================================= */

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

    modal.classList.remove(
      "hidden"
    );

    modal.setAttribute(
      "aria-hidden",
      "false"
    );


    /*
      Only switch forms when a mode was
      explicitly requested.
    */

    if (mode) {

      switchAuthMode(
        mode
      );
    }


    /*
      If the user is already logged in,
      refresh the logged-in panel.
    */

    if (currentUser) {

      updateAuthUI(
        currentUser
      );
    }
  }


  /* =========================================================
     11. CLOSE AUTH MODAL
     ========================================================= */

  function closeAuthModal() {

    const modal =
      $("authModal");

    if (!modal) {
      return;
    }


    modal.classList.remove(
      "active"
    );

    modal.classList.add(
      "hidden"
    );

    modal.setAttribute(
      "aria-hidden",
      "true"
    );
  }


  /* =========================================================
     12. SIGN UP
     ========================================================= */

  async function signUp(
    name,
    email,
    password
  ) {

    const client =
      getClient();

    if (!client) {

      showToast(
        "Authentication is unavailable right now.",
        "error"
      );

      return false;
    }


    name =
      String(name || "").trim();

    email =
      String(email || "").trim();

    password =
      String(password || "");


    if (!name) {

      showToast(
        "Please enter your name.",
        "error"
      );

      return false;
    }


    if (!email) {

      showToast(
        "Please enter your email.",
        "error"
      );

      return false;
    }


    if (!password) {

      showToast(
        "Please enter a password.",
        "error"
      );

      return false;
    }


    if (password.length < 6) {

      showToast(
        "Password must be at least 6 characters.",
        "error"
      );

      return false;
    }


    try {

      const {
        data,
        error
      } =
        await client.auth.signUp({

          email: email,

          password: password,

          options: {

            emailRedirectTo:
              "https://tz7-stack.github.io/",

            data: {

              full_name:
                name,

              name:
                name
            }
          }
        });


      if (error) {

        console.error(
          "TzTools Auth: Sign up error",
          error
        );

        showToast(
          error.message ||
          "Could not create your account.",
          "error"
        );

        return false;
      }


      /*
        Supabase may require email confirmation.
      */

      if (
        data &&
        data.user &&
        !data.session
      ) {

        showToast(
          "Account created! Check your email to confirm it.",
          "success"
        );

        return true;
      }


      if (
        data &&
        data.user
      ) {

        currentUser =
          data.user;

        updateAuthUI(
          currentUser
        );

        showToast(
          "Account created successfully! 🎉",
          "success"
        );

        closeAuthModal();

        return true;
      }


      showToast(
        "Account created successfully!",
        "success"
      );

      return true;

    } catch (error) {

      console.error(
        "TzTools Auth: Unexpected sign up error",
        error
      );

      showToast(
        "Something went wrong creating your account.",
        "error"
      );

      return false;
    }
  }


  /* =========================================================
     13. SIGN IN
     ========================================================= */

  async function signIn(
    email,
    password
  ) {

    const client =
      getClient();

    if (!client) {

      showToast(
        "Authentication is unavailable right now.",
        "error"
      );

      return false;
    }


    email =
      String(email || "").trim();

    password =
      String(password || "");


    if (!email) {

      showToast(
        "Please enter your email.",
        "error"
      );

      return false;
    }


    if (!password) {

      showToast(
        "Please enter your password.",
        "error"
      );

      return false;
    }


    try {

      const {
        data,
        error
      } =
        await client.auth.signInWithPassword({

          email: email,

          password: password
        });


      if (error) {

        console.error(
          "TzTools Auth: Sign in error",
          error
        );

        showToast(
          error.message ||
          "Could not sign in.",
          "error"
        );

        return false;
      }


      currentUser =
        data.user;

      updateAuthUI(
        currentUser
      );


      showToast(
        "Welcome back! 👋",
        "success"
      );


      closeAuthModal();


      return true;

    } catch (error) {

      console.error(
        "TzTools Auth: Unexpected sign in error",
        error
      );

      showToast(
        "Something went wrong signing you in.",
        "error"
      );

      return false;
    }
  }


  /* =========================================================
     14. SIGN OUT
     ========================================================= */

  async function signOut() {

    const client =
      getClient();

    if (!client) {
      return false;
    }


    try {

      const {
        error
      } =
        await client.auth.signOut();


      if (error) {

        console.error(
          "TzTools Auth: Sign out error",
          error
        );

        showToast(
          error.message ||
          "Could not sign out.",
          "error"
        );

        return false;
      }


      currentUser =
        null;

      updateAuthUI(
        null
      );

      closeAuthModal();


      showToast(
        "You've been signed out.",
        "success"
      );


      return true;

    } catch (error) {

      console.error(
        "TzTools Auth: Unexpected sign out error",
        error
      );

      showToast(
        "Something went wrong signing you out.",
        "error"
      );

      return false;
    }
  }


  /* =========================================================
     15. GET CURRENT USER
     ========================================================= */

  async function getCurrentUser() {

    const client =
      getClient();

    if (!client) {
      return null;
    }


    try {

      const {
        data,
        error
      } =
        await client.auth.getUser();


      if (error) {

        /*
          No active session is normal.
        */

        if (
          error.name ===
          "AuthSessionMissingError"
        ) {

          currentUser =
            null;

          updateAuthUI(
            null
          );

          return null;
        }


        console.warn(
          "TzTools Auth: getUser warning",
          error
        );

        return null;
      }


      currentUser =
        data?.user || null;


      updateAuthUI(
        currentUser
      );


      return currentUser;

    } catch (error) {

      console.warn(
        "TzTools Auth: Could not get current user.",
        error
      );

      currentUser =
        null;

      updateAuthUI(
        null
      );

      return null;
    }
  }


  /* =========================================================
     16. SETUP FORM EVENTS
     ========================================================= */

  function setupForms() {

    /* -----------------------------------------
       LOGIN FORM
       ----------------------------------------- */

    const loginForm =
      $("loginForm");

    if (loginForm) {

      loginForm.addEventListener(
        "submit",
        async function (event) {

          event.preventDefault();

          const email =
            $("loginEmail")?.value || "";

          const password =
            $("loginPassword")?.value || "";


          const button =
            loginForm.querySelector(
              'button[type="submit"]'
            );


          if (button) {

            button.disabled =
              true;

            button.dataset.originalText =
              button.textContent;

            button.textContent =
              "Signing in...";
          }


          try {

            await signIn(
              email,
              password
            );

          } finally {

            if (button) {

              button.disabled =
                false;

              button.textContent =
                button.dataset.originalText ||
                "Sign in";
            }
          }
        }
      );
    }


    /* -----------------------------------------
       SIGNUP FORM
       ----------------------------------------- */

    const signupForm =
      $("signupForm");

    if (signupForm) {

      signupForm.addEventListener(
        "submit",
        async function (event) {

          event.preventDefault();

          const name =
            $("signupName")?.value || "";

          const email =
            $("signupEmail")?.value || "";

          const password =
            $("signupPassword")?.value || "";


          const button =
            signupForm.querySelector(
              'button[type="submit"]'
            );


          if (button) {

            button.disabled =
              true;

            button.dataset.originalText =
              button.textContent;

            button.textContent =
              "Creating account...";
          }


          try {

            await signUp(
              name,
              email,
              password
            );

          } finally {

            if (button) {

              button.disabled =
                false;

              button.textContent =
                button.dataset.originalText ||
                "Create account";
            }
          }
        }
      );
    }


    /* -----------------------------------------
       LOGIN TAB
       ----------------------------------------- */

    const loginTab =
      $("loginTab");

    if (loginTab) {

      loginTab.addEventListener(
        "click",
        function (event) {

          event.preventDefault();

          switchAuthMode(
            "signin"
          );
        }
      );
    }


    /* -----------------------------------------
       SIGNUP TAB
       ----------------------------------------- */

    const signupTab =
      $("signupTab");

    if (signupTab) {

      signupTab.addEventListener(
        "click",
        function (event) {

          event.preventDefault();

          switchAuthMode(
            "signup"
          );
        }
      );
    }


    /* -----------------------------------------
       ACCOUNT BUTTON
       ----------------------------------------- */

    const accountButton =
      $("accountButton");

    if (accountButton) {

      accountButton.addEventListener(
        "click",
        function (event) {

          event.preventDefault();

          /*
            If logged in, open the account
            panel without forcing the login form.
          */

          if (currentUser) {

            openAuthModal();

          } else {

            openAuthModal(
              "signin"
            );
          }
        }
      );
    }


    /* -----------------------------------------
       LOGOUT BUTTON
       ----------------------------------------- */

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


    /* -----------------------------------------
       CLOSE BUTTON
       ----------------------------------------- */

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


    /* -----------------------------------------
       BACKDROP
       ----------------------------------------- */

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


    /* -----------------------------------------
       ESCAPE KEY
       ----------------------------------------- */

    document.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key ===
          "Escape"
        ) {

          closeAuthModal();
        }
      }
    );
  }


  /* =========================================================
     17. SUPABASE AUTH LISTENER
     ========================================================= */

  function setupAuthListener() {

    const client =
      getClient();

    if (!client) {
      return;
    }


    client.auth.onAuthStateChange(
      function (
        event,
        session
      ) {

        console.log(
          "TzTools Auth:",
          event
        );


        currentUser =
          session?.user || null;


        updateAuthUI(
          currentUser
        );


        /*
          If user has just signed in,
          close the modal.
        */

        if (
          event ===
            "SIGNED_IN"
        ) {

          closeAuthModal();
        }


        /*
          If user signed out,
          make sure the UI resets.
        */

        if (
          event ===
            "SIGNED_OUT"
        ) {

          currentUser =
            null;

          updateAuthUI(
            null
          );
        }
      }
    );
  }


  /* =========================================================
     18. INITIALIZE AUTH
     ========================================================= */

  async function initializeTzToolsAuth() {

    if (authInitialized) {
      return;
    }


    authInitialized =
      true;


    const client =
      getClient();

    if (!client) {

      console.error(
        "TzTools Auth: Supabase client unavailable."
      );

      return;
    }


    /*
      Set a safe initial UI immediately.
    */

    updateAuthUI(
      null
    );


    /*
      Attach auth listener.
    */

    setupAuthListener();


    /*
      Recover existing session.
    */

    try {

      const {
        data,
        error
      } =
        await client.auth.getSession();


      if (error) {

        console.warn(
          "TzTools Auth: getSession warning",
          error
        );

      } else {

        currentUser =
          data?.session?.user ||
          null;


        updateAuthUI(
          currentUser
        );
      }

    } catch (error) {

      console.warn(
        "TzTools Auth: Session recovery failed.",
        error
      );
    }


    /*
      Setup buttons/forms.
    */

    setupForms();


    console.log(
      "TzTools authentication ready 🔐 —",
      currentUser
        ? getDisplayName(currentUser)
        : "Guest"
    );
  }


  /* =========================================================
     19. PUBLIC API
     ========================================================= */

  window.TzAuth = {

    getClient:
      getClient,

    getCurrentUser:
      getCurrentUser,

    getDisplayName:
      getDisplayName,

    signIn:
      signIn,

    signUp:
      signUp,

    signOut:
      signOut,

    openAuthModal:
      openAuthModal,

    closeAuthModal:
      closeAuthModal,

    switchAuthMode:
      switchAuthMode,

    updateAuthUI:
      updateAuthUI
  };


  /* =========================================================
     20. GLOBAL COMPATIBILITY
     ========================================================= */

  window.openAuthModal =
    openAuthModal;

  window.closeAuthModal =
    closeAuthModal;

  window.signIn =
    signIn;

  window.signUp =
    signUp;

  window.signOut =
    signOut;

  window.getCurrentUser =
    getCurrentUser;

  window.getDisplayName =
    getDisplayName;


  /* =========================================================
     21. START
     ========================================================= */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initializeTzToolsAuth,
      {
        once: true
      }
    );

  } else {

    initializeTzToolsAuth();
  }

})();
