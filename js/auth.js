/* =========================================================
   TzTools Authentication
   Supabase Auth
   ========================================================= */

(function () {
  "use strict";

  const SUPABASE_URL =
    "https://nslaakklgidpzwlymrhf.supabase.co";

  /*
    IMPORTANT:
    Put your existing Supabase PUBLISHABLE key here.
    Do NOT use a service-role/secret key.
  */
  const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_XoDQsJkHs_7PA8wQAoutHA_glygnyxK";

  let client = null;
  let currentUser = null;

  /* =========================================================
     HELPERS
     ========================================================= */

  function $(id) {
    return document.getElementById(id);
  }

  function toast(message) {
    if (typeof window.showToast === "function") {
      window.showToast(message);
      return;
    }

    console.log("TzTools Auth:", message);
  }

  function getDisplayName(user) {
    if (!user) return "Guest";

    return (
      user.user_metadata?.full_name ||
      user.user_metadata?.name ||
      user.email?.split("@")[0] ||
      "User"
    );
  }

  /* =========================================================
     SUPABASE
     ========================================================= */

  function initializeSupabase() {
    if (window.supabaseClient) {
      client = window.supabaseClient;
      return true;
    }

    if (!window.supabase) {
      console.error("TzTools Auth: Supabase library not found.");
      return false;
    }

    if (
      !SUPABASE_PUBLISHABLE_KEY ||
      SUPABASE_PUBLISHABLE_KEY === "YOUR_SUPABASE_PUBLISHABLE_KEY"
    ) {
      console.error(
        "TzTools Auth: Supabase publishable key is missing."
      );
      return false;
    }

    client = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_PUBLISHABLE_KEY
    );

    window.supabaseClient = client;

    return true;
  }

  /* =========================================================
     AUTH UI
     ========================================================= */

 function updateAuthUI(user) {
  const loggedIn = !!user;

  document.body.classList.toggle("is-authenticated", loggedIn);
  document.body.classList.toggle("is-guest", !loggedIn);

  const profileName = document.getElementById("profileName");
  const profileEmail = document.getElementById("profileEmail");
  const profileAvatar = document.getElementById("profileAvatar");

  const accountButton = document.getElementById("accountButton");
  const loggedInPanel = document.getElementById("loggedInPanel");

  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");

  // GUEST
  if (!user) {
    if (profileName) {
      profileName.textContent = "Guest";
    }

    if (profileEmail) {
      profileEmail.textContent = "Sign in to sync your tools";
    }

    if (profileAvatar) {
      profileAvatar.textContent = "G";
    }

    if (accountButton) {
      accountButton.querySelector(".setting-content strong").textContent = "Account";
      accountButton.querySelector(".setting-content small").textContent =
        "Sign in or create an account";
    }

    if (loggedInPanel) {
      loggedInPanel.style.display = "none";
    }

    if (loginForm) {
      loginForm.style.display = "";
    }

    if (signupForm) {
      signupForm.style.display = "none";
    }

    if (loginTab) {
      loginTab.style.display = "";
    }

    if (signupTab) {
      signupTab.style.display = "";
    }

    updateFeatureAccess(false);
    return;
  }

  // SIGNED IN
  const displayName = getUserDisplayName(user);
  const email = user.email || "";

  if (profileName) {
    profileName.textContent = displayName || "User";
  }

  if (profileEmail) {
    profileEmail.textContent = email || "Signed in";
  }

  if (profileAvatar) {
    profileAvatar.textContent =
      (displayName || email || "U").trim().charAt(0).toUpperCase();
  }

  if (accountButton) {
    accountButton.querySelector(".setting-content strong").textContent =
      "Account";
    accountButton.querySelector(".setting-content small").textContent =
      "You're signed in";
  }

  if (loggedInPanel) {
    loggedInPanel.style.display = "block";
  }

  if (loginForm) {
    loginForm.style.display = "none";
  }

  if (signupForm) {
    signupForm.style.display = "none";
  }

  if (loginTab) {
    loginTab.style.display = "none";
  }

  if (signupTab) {
    signupTab.style.display = "none";
  }

  updateFeatureAccess(true);
}

  /* =========================================================
     AUTH MODAL
     ========================================================= */

  function openAuthModal(mode) {
    const modal = $("authModal");

    if (!modal) {
      console.warn("TzTools Auth: authModal not found.");
      return;
    }

    modal.classList.add("active");
    modal.classList.remove("hidden");

    if (mode) {
      switchAuthMode(mode);
    }
  }

  function closeAuthModal() {
    const modal = $("authModal");

    if (!modal) return;

    modal.classList.remove("active");
    modal.classList.add("hidden");
  }

  function switchAuthMode(mode) {
    const signinPanel = $("signinPanel");
    const signupPanel = $("signupPanel");

    if (mode === "signup") {
      if (signinPanel) signinPanel.style.display = "none";
      if (signupPanel) signupPanel.style.display = "";
    } else {
      if (signinPanel) signinPanel.style.display = "";
      if (signupPanel) signupPanel.style.display = "none";
    }
  }

  /* =========================================================
     SIGN IN
     ========================================================= */

  async function signIn(email, password) {
    if (!client) return false;

    email = String(email || "").trim();
    password = String(password || "");

    if (!email || !password) {
      toast("Please enter your email and password.");
      return false;
    }

    try {
      const { data, error } =
        await client.auth.signInWithPassword({
          email: email,
          password: password
        });

      if (error) {
        console.error("TzTools Auth sign-in error:", error);
        toast(error.message || "Sign in failed.");
        return false;
      }

      currentUser = data?.user || null;

      updateAuthUI(currentUser);

      closeAuthModal();

      toast("Welcome back 👋");

      await handleAuthenticatedUser(currentUser);

      return true;

    } catch (error) {
      console.error("TzTools Auth sign-in exception:", error);
      toast("Something went wrong while signing in.");
      return false;
    }
  }

  /* =========================================================
     SIGN UP
     ========================================================= */

  async function signUp(name, email, password) {
    if (!client) return false;

    name = String(name || "").trim();
    email = String(email || "").trim();
    password = String(password || "");

    if (!name || !email || !password) {
      toast("Please complete all fields.");
      return false;
    }

    if (password.length < 6) {
      toast("Password must be at least 6 characters.");
      return false;
    }

    try {
      const { data, error } =
        await client.auth.signUp({
          email: email,
          password: password,

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
        console.error("TzTools Auth sign-up error:", error);
        toast(error.message || "Account creation failed.");
        return false;
      }

      if (!data?.session) {
        toast(
          "Account created 🎉 Check your email to confirm your account."
        );

        closeAuthModal();

        return true;
      }

      currentUser = data.user || null;

      updateAuthUI(currentUser);

      closeAuthModal();

      toast("Account created successfully 🎉");

      await handleAuthenticatedUser(currentUser);

      return true;

    } catch (error) {
      console.error("TzTools Auth sign-up exception:", error);
      toast("Something went wrong while creating your account.");
      return false;
    }
  }

  /* =========================================================
     SIGN OUT
     ========================================================= */

  async function signOut() {
    if (!client) return false;

    try {
      const { error } = await client.auth.signOut();

      if (error) {
        console.error("TzTools Auth sign-out error:", error);
        toast(error.message || "Sign out failed.");
        return false;
      }

      currentUser = null;

      updateAuthUI(null);

      toast("Signed out 👋");

      return true;

    } catch (error) {
      console.error("TzTools Auth sign-out exception:", error);
      return false;
    }
  }

  /* =========================================================
     CURRENT USER
     ========================================================= */

  async function getCurrentUser() {
    if (!client) return null;

    try {
      const { data, error } =
        await client.auth.getUser();

      if (error) {
        if (
          error.name === "AuthSessionMissingError" ||
          error.message?.includes("Auth session missing")
        ) {
          return null;
        }

        console.error(
          "TzTools Auth getUser error:",
          error
        );

        return null;
      }

      return data?.user || null;

    } catch (error) {
      console.error(
        "TzTools Auth getUser exception:",
        error
      );

      return null;
    }
  }

  /* =========================================================
     AUTHENTICATED USER HANDLER
     ========================================================= */

  async function handleAuthenticatedUser(user) {
    if (!user) {
      updateAuthUI(null);
      return;
    }

    currentUser = user;

    // Update immediately
    updateAuthUI(user);

    // Update again after the browser paints the UI
    requestAnimationFrame(function () {
      updateAuthUI(user);
    });

    if (
      typeof window.onTzToolsAuthReady === "function"
    ) {
      try {
        await window.onTzToolsAuthReady(user);
      } catch (error) {
        console.error(
          "TzTools Auth callback error:",
          error
        );
      }
    }
  }

  /* =========================================================
     AUTH LISTENER
     ========================================================= */

  function setupAuthListener() {
    if (!client) return;

    client.auth.onAuthStateChange(
      function (event, session) {
        console.log(
          "TzTools Auth:",
          event
        );

        currentUser =
          session?.user || null;

        updateAuthUI(currentUser);

        if (currentUser) {
          setTimeout(function () {
            handleAuthenticatedUser(
              currentUser
            );
          }, 0);
        }
      }
    );
  }

  /* =========================================================
     FORM SETUP
     ========================================================= */

  function setupForms() {
    const signinForm = $("signinForm");
    const signupForm = $("signupForm");

    if (signinForm) {
      signinForm.addEventListener(
        "submit",
        async function (event) {
          event.preventDefault();

          const email =
            $("signinEmail")?.value || "";

          const password =
            $("signinPassword")?.value || "";

          await signIn(
            email,
            password
          );
        }
      );
    }

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

          await signUp(
            name,
            email,
            password
          );
        }
      );
    }

    const signInButton = $("signInButton");

    if (signInButton) {
      signInButton.addEventListener(
        "click",
        function () {
          openAuthModal("signin");
        }
      );
    }

    const signOutButton = $("signOutButton");

    if (signOutButton) {
      signOutButton.addEventListener(
        "click",
        async function () {
          await signOut();
        }
      );
    }

    const authButton = $("authButton");

    if (authButton) {
      authButton.addEventListener(
        "click",
        async function () {
          if (currentUser) {
            await signOut();
          } else {
            openAuthModal("signin");
          }
        }
      );
    }

    const closeButton = $("authModalClose");

    if (closeButton) {
      closeButton.addEventListener(
        "click",
        closeAuthModal
      );
    }

    const modal = $("authModal");

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

  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.TzAuth = {
    isSignedIn: function () {
      return !!currentUser;
    },

    getUser: function () {
      return currentUser;
    },

    requireAuth: function () {
      if (currentUser) return true;

      openAuthModal("signin");

      toast("Please sign in to continue.");

      return false;
    },

    open: openAuthModal,
    close: closeAuthModal,

    signIn: signIn,
    signUp: signUp,
    signOut: signOut
  };

  /* =========================================================
     INITIALIZATION
     ========================================================= */

  async function initializeTzToolsAuth() {
    if (!initializeSupabase()) {
      return;
    }

    setupForms();
    setupAuthListener();

    try {
      const { data, error } =
        await client.auth.getSession();

      if (error) {
        console.error(
          "TzTools Auth getSession error:",
          error
        );

        updateAuthUI(null);

        return;
      }

      currentUser =
        data?.session?.user || null;

      updateAuthUI(currentUser);

      if (currentUser) {
        await handleAuthenticatedUser(
          currentUser
        );
      }

      console.log(
        "TzTools authentication ready 🔐 —",
        getDisplayName(currentUser)
      );

    } catch (error) {
      console.error(
        "TzTools Auth initialization error:",
        error
      );

      updateAuthUI(null);
    }
  }

  /* =========================================================
     START
     ========================================================= */

  if (
    document.readyState === "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      initializeTzToolsAuth
    );
  } else {
    initializeTzToolsAuth();
  }

})();
