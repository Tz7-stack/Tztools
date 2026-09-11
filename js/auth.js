/* =========================================================
   TzTools Authentication
   Supabase Auth + Guest / Signed-in Feature Gating
   ========================================================= */

(function () {
  "use strict";

  /* ---------------------------------------------------------
     Supabase setup
     --------------------------------------------------------- */

  const SUPABASE_URL =
    "https://nslaakklgidpzwlymrhf.supabase.co";

  /*
    IMPORTANT:
    Use your CURRENT Supabase Publishable key here.
    Never use the service-role / secret key in browser code.
  */
  const SUPABASE_KEY =
    "sb_publishable_XoDQsJkHs_7PA8wQAoutHA_glygnyxK";

  let client = null;
  let currentUser = null;

  /* ---------------------------------------------------------
     Create Supabase client
     --------------------------------------------------------- */

  function initializeAuth() {
    if (window.supabaseClient) {
      client = window.supabaseClient;
    } else if (window.supabase && window.supabase.createClient) {
      client = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
      );

      window.supabaseClient = client;
    }

    if (!client) {
      console.error("TzTools Auth: Supabase client not available.");
      return false;
    }

    return true;
  }

  /* ---------------------------------------------------------
     Helpers
     --------------------------------------------------------- */

  function getElement(id) {
    return document.getElementById(id);
  }

  function toast(message, type = "info") {
    if (typeof window.showToast === "function") {
      window.showToast(message, type);
    } else {
      console.log(`[TzTools ${type}] ${message}`);
    }
  }

  function getUserDisplayName(user) {
    if (!user) return "Guest";

    const metadata = user.user_metadata || {};

    return (
      metadata.full_name ||
      metadata.name ||
      metadata.display_name ||
      user.email?.split("@")[0] ||
      "User"
    );
  }

  /* ---------------------------------------------------------
     Modal
     --------------------------------------------------------- */

  function openAuthModal(mode = "signin") {
    const modal = getElement("authModal");

    if (!modal) {
      console.warn("TzTools Auth: authModal not found.");
      return;
    }

    modal.classList.add("active");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    switchAuthMode(mode);

    setTimeout(() => {
      const input =
        mode === "signup"
          ? getElement("signupEmail") ||
            getElement("authEmail")
          : getElement("signinEmail") ||
            getElement("authEmail");

      if (input) input.focus();
    }, 50);
  }

  function closeAuthModal() {
    const modal = getElement("authModal");

    if (!modal) return;

    const activeElement = document.activeElement;

    if (activeElement && modal.contains(activeElement)) {
      activeElement.blur();
    }

    modal.classList.remove("active");
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }

  window.openAuthModal = openAuthModal;
  window.closeAuthModal = closeAuthModal;

  /* ---------------------------------------------------------
     Sign in / Sign up mode
     --------------------------------------------------------- */

  function switchAuthMode(mode) {
    const signinForm = getElement("signinForm");
    const signupForm = getElement("signupForm");

    const signinTab = getElement("signinTab");
    const signupTab = getElement("signupTab");

    if (mode === "signup") {
      if (signinForm) signinForm.style.display = "none";
      if (signupForm) signupForm.style.display = "block";

      if (signinTab) signinTab.classList.remove("active");
      if (signupTab) signupTab.classList.add("active");
    } else {
      if (signinForm) signinForm.style.display = "block";
      if (signupForm) signupForm.style.display = "none";

      if (signinTab) signinTab.classList.add("active");
      if (signupTab) signupTab.classList.remove("active");
    }
  }

  window.switchAuthMode = switchAuthMode;

  /* ---------------------------------------------------------
     Get form values
     --------------------------------------------------------- */

  function getSigninValues() {
    const email =
      getElement("signinEmail")?.value?.trim() ||
      getElement("authEmail")?.value?.trim() ||
      "";

    const password =
      getElement("signinPassword")?.value ||
      getElement("authPassword")?.value ||
      "";

    return {
      email,
      password
    };
  }

  function getSignupValues() {
    const name =
      getElement("signupName")?.value?.trim() ||
      getElement("signupFullName")?.value?.trim() ||
      "";

    const email =
      getElement("signupEmail")?.value?.trim() ||
      "";

    const password =
      getElement("signupPassword")?.value ||
      "";

    const confirmPassword =
      getElement("signupConfirmPassword")?.value ||
      "";

    return {
      name,
      email,
      password,
      confirmPassword
    };
  }

  /* ---------------------------------------------------------
     Validation
     --------------------------------------------------------- */

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateSignin(email, password) {
    if (!email) {
      toast("Please enter your email.", "error");
      return false;
    }

    if (!validateEmail(email)) {
      toast("Please enter a valid email.", "error");
      return false;
    }

    if (!password) {
      toast("Please enter your password.", "error");
      return false;
    }

    return true;
  }

  function validateSignup(name, email, password, confirmPassword) {
    if (!name) {
      toast("Please enter your name.", "error");
      return false;
    }

    if (!email) {
      toast("Please enter your email.", "error");
      return false;
    }

    if (!validateEmail(email)) {
      toast("Please enter a valid email.", "error");
      return false;
    }

    if (!password) {
      toast("Please create a password.", "error");
      return false;
    }

    if (password.length < 6) {
      toast("Your password must be at least 6 characters.", "error");
      return false;
    }

    if (password !== confirmPassword) {
      toast("Passwords do not match.", "error");
      return false;
    }

    return true;
  }

  /* ---------------------------------------------------------
     Sign in
     --------------------------------------------------------- */

  async function signIn() {
    if (!initializeAuth()) return;

    const {
      email,
      password
    } = getSigninValues();

    if (!validateSignin(email, password)) return;

    const button =
      getElement("signinButton") ||
      getElement("authSubmitButton");

    if (button) {
      button.disabled = true;
      button.dataset.originalText = button.textContent;
      button.textContent = "Signing in...";
    }

    try {
      const { data, error } =
        await client.auth.signInWithPassword({
          email,
          password
        });

      if (error) {
        console.error("TzTools sign-in error:", error);

        if (
          error.message?.toLowerCase().includes("email not confirmed")
        ) {
          toast(
            "Please confirm your email before signing in.",
            "error"
          );
        } else {
          toast(
            error.message || "Unable to sign in.",
            "error"
          );
        }

        return;
      }

      currentUser = data.user;

      toast("Welcome back! 🔐", "success");

      closeAuthModal();

      await handleAuthenticatedUser(currentUser);

    } catch (error) {
      console.error("TzTools sign-in exception:", error);

      toast(
        "Something went wrong while signing in.",
        "error"
      );

    } finally {
      if (button) {
        button.disabled = false;
        button.textContent =
          button.dataset.originalText || "Sign in";
      }
    }
  }

  window.signIn = signIn;

  /* ---------------------------------------------------------
     Sign up
     --------------------------------------------------------- */

  async function signUp() {
    if (!initializeAuth()) return;

    const {
      name,
      email,
      password,
      confirmPassword
    } = getSignupValues();

    if (
      !validateSignup(
        name,
        email,
        password,
        confirmPassword
      )
    ) {
      return;
    }

    const button =
      getElement("signupButton") ||
      getElement("authSignupButton");

    if (button) {
      button.disabled = true;
      button.dataset.originalText = button.textContent;
      button.textContent = "Creating account...";
    }

    try {
      const { data, error } =
        await client.auth.signUp({
          email,
          password,

          options: {
            emailRedirectTo:
              "https://tz7-stack.github.io/",

            data: {
              full_name: name,
              name: name
            }
          }
        });

      if (error) {
        console.error("TzTools sign-up error:", error);

        toast(
          error.message || "Unable to create account.",
          "error"
        );

        return;
      }

      /*
        Supabase may return a user without a session when
        email confirmation is required.
      */

      if (data.user && !data.session) {
        toast(
          "Account created! Check your email to confirm it. 📧",
          "success"
        );

        closeAuthModal();

        return;
      }

      if (data.user) {
        currentUser = data.user;

        toast(
          "Account created successfully! 🎉",
          "success"
        );

        closeAuthModal();

        await handleAuthenticatedUser(currentUser);
      }

    } catch (error) {
      console.error("TzTools sign-up exception:", error);

      toast(
        "Something went wrong while creating your account.",
        "error"
      );

    } finally {
      if (button) {
        button.disabled = false;
        button.textContent =
          button.dataset.originalText || "Create account";
      }
    }
  }

  window.signUp = signUp;

  /* ---------------------------------------------------------
     Sign out
     --------------------------------------------------------- */

  async function signOut() {
    if (!initializeAuth()) return;

    try {
      const { error } =
        await client.auth.signOut();

      if (error) {
        console.error(
          "TzTools sign-out error:",
          error
        );

        toast(
          error.message || "Unable to sign out.",
          "error"
        );

        return;
      }

      currentUser = null;

      updateAuthUI(null);

      toast(
        "You've been signed out.",
        "success"
      );

      if (typeof window.resetHome === "function") {
        window.resetHome();
      }

    } catch (error) {
      console.error(
        "TzTools sign-out exception:",
        error
      );
    }
  }

  window.signOut = signOut;

  /* ---------------------------------------------------------
     Get current user
     --------------------------------------------------------- */

  async function getCurrentUser() {
    if (!initializeAuth()) return null;

    try {
      const {
        data,
        error
      } = await client.auth.getUser();

      if (error) {
        /*
          Not being signed in is normal.
        */
        if (
          error.name === "AuthSessionMissingError"
        ) {
          currentUser = null;
          return null;
        }

        console.warn(
          "TzTools getUser:",
          error.message
        );

        currentUser = null;
        return null;
      }

      currentUser = data?.user || null;

      return currentUser;

    } catch (error) {
      currentUser = null;
      return null;
    }
  }

  window.getCurrentUser = getCurrentUser;

  /* ---------------------------------------------------------
     Authenticated user handling
     --------------------------------------------------------- */

  async function handleAuthenticatedUser(user) {
    if (!user) return;

    currentUser = user;

    updateAuthUI(user);

    /*
      Tell app.js that authentication is ready.
    */

    if (typeof window.onTzToolsAuthReady === "function") {
      try {
        await window.onTzToolsAuthReady(user);
      } catch (error) {
        console.warn(
          "TzTools app auth callback failed:",
          error
        );
      }
    }
  }

  /* ---------------------------------------------------------
     Auth UI
     --------------------------------------------------------- */

  function updateAuthUI(user) {
    const loggedIn = !!user;

    document.body.classList.toggle(
      "user-signed-in",
      loggedIn
    );

    document.body.classList.toggle(
      "guest-user",
      !loggedIn
    );

    const accountName =
      getElement("accountName");

    if (accountName) {
      accountName.textContent =
        loggedIn
          ? getUserDisplayName(user)
          : "Guest";
    }

    const accountEmail =
      getElement("accountEmail");

    if (accountEmail) {
      accountEmail.textContent =
        loggedIn
          ? user.email || ""
          : "Sign in to unlock TzTools";
    }

    const authButton =
      getElement("authButton");

    if (authButton) {
      authButton.textContent =
        loggedIn
          ? "Sign out"
          : "Sign in";
    }

    const signInButton =
      getElement("signInButton");

    if (signInButton) {
      signInButton.style.display =
        loggedIn ? "none" : "";
    }

    const signOutButton =
      getElement("signOutButton");

    if (signOutButton) {
      signOutButton.style.display =
        loggedIn ? "" : "none";
    }

    updateFeatureAccess(loggedIn);
  }

  /* ---------------------------------------------------------
     Feature gating
     --------------------------------------------------------- */

  function updateFeatureAccess(loggedIn) {
    const gatedElements =
      document.querySelectorAll(
        "[data-requires-auth]"
      );

    gatedElements.forEach((element) => {
      if (loggedIn) {
        element.classList.remove("auth-locked");
        element.removeAttribute("aria-disabled");
      } else {
        element.classList.add("auth-locked");
        element.setAttribute(
          "aria-disabled",
          "true"
        );
      }
    });
  }

  function requireAuth(featureName = "this feature") {
    if (currentUser) {
      return true;
    }

    toast(
      `🔐 Sign in to unlock ${featureName}.`,
      "info"
    );

    openAuthModal("signin");

    return false;
  }

  window.requireAuth = requireAuth;

  /* ---------------------------------------------------------
     Feature helpers for app.js
     --------------------------------------------------------- */

  window.TzAuth = {
    isSignedIn: function () {
      return !!currentUser;
    },

    getUser: function () {
      return currentUser;
    },

    requireAuth: requireAuth,

    openAuthModal: openAuthModal,

    closeAuthModal: closeAuthModal,

    signIn: signIn,

    signUp: signUp,

    signOut: signOut
  };

  /* ---------------------------------------------------------
     Protect actions
     --------------------------------------------------------- */

  window.requireAuthForFavorite = function () {
    return requireAuth("Favorites");
  };

  window.requireAuthForRecentlyUsed = function () {
    return requireAuth("Recently Used");
  };

  window.requireAuthForCompare = function () {
    return requireAuth("Compare");
  };

  window.requireAuthForDashboard = function () {
    return requireAuth("your Dashboard");
  };

  /* ---------------------------------------------------------
     Auth state listener
     --------------------------------------------------------- */

  function setupAuthListener() {
    if (!initializeAuth()) return;

    client.auth.onAuthStateChange(
      async function (event, session) {

        console.log(
          "TzTools Auth:",
          event
        );

        currentUser =
          session?.user || null;

        updateAuthUI(currentUser);

        if (currentUser) {
          /*
            Don't await Supabase callbacks directly inside
            the auth listener.
          */
          setTimeout(() => {
            handleAuthenticatedUser(
              currentUser
            );
          }, 0);
        }
      }
    );
  }

  /* ---------------------------------------------------------
     Form event wiring
     --------------------------------------------------------- */

  function setupForms() {

    const signinForm =
      getElement("signinForm");

    if (signinForm) {
      signinForm.addEventListener(
        "submit",
        function (event) {
          event.preventDefault();
          signIn();
        }
      );
    }

    const signupForm =
      getElement("signupForm");

    if (signupForm) {
      signupForm.addEventListener(
        "submit",
        function (event) {
          event.preventDefault();
          signUp();
        }
      );
    }

    const signinButton =
      getElement("signinButton");

    if (
      signinButton &&
      !signinForm
    ) {
      signinButton.addEventListener(
        "click",
        function (event) {
          event.preventDefault();
          signIn();
        }
      );
    }

    const signupButton =
      getElement("signupButton");

    if (
      signupButton &&
      !signupForm
    ) {
      signupButton.addEventListener(
        "click",
        function (event) {
          event.preventDefault();
          signUp();
        }
      );
    }

    const signOutButton =
      getElement("signOutButton");

    if (signOutButton) {
      signOutButton.addEventListener(
        "click",
        function (event) {
          event.preventDefault();
          signOut();
        }
      );
    }

    const modal =
      getElement("authModal");

    if (modal) {
      modal.addEventListener(
        "click",
        function (event) {

          if (event.target === modal) {
            closeAuthModal();
          }

        }
      );
    }

    document.addEventListener(
      "keydown",
      function (event) {

        if (event.key === "Escape") {
          closeAuthModal();
        }

      }
    );
  }

  /* ---------------------------------------------------------
     Start authentication
     --------------------------------------------------------- */

  async function initializeTzToolsAuth() {

    if (!initializeAuth()) {
      console.warn(
        "TzTools authentication could not initialize."
      );

      return;
    }

    setupForms();
    setupAuthListener();

    /*
      Check existing session.
    */

    try {
      const {
        data,
        error
      } = await client.auth.getSession();

      if (error) {
        console.warn(
          "TzTools session check:",
          error.message
        );
      }

      currentUser =
        data?.session?.user || null;

      updateAuthUI(currentUser);

      if (currentUser) {
        await handleAuthenticatedUser(
          currentUser
        );
      }

    } catch (error) {
      console.warn(
        "TzTools initial auth check failed:",
        error
      );
    }

    console.log(
      "TzTools authentication ready 🔐 —",
      currentUser
        ? getUserDisplayName(currentUser)
        : "Guest"
    );
  }

  /* ---------------------------------------------------------
     DOM ready
     --------------------------------------------------------- */

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeTzToolsAuth
    );
  } else {
    initializeTzToolsAuth();
  }

})();
