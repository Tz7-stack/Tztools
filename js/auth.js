"use strict";

/* =========================================================
   TzTools V8 — Authentication + Cloud Sync
   ========================================================= */

window.TzApp = window.TzApp || {};

const state = window.TzApp;

/* =========================================================
   SUPABASE
   ========================================================= */

const SUPABASE_URL =
  "https://nslaakklgidpzwlymrhf.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_XoDQsJkHs_7PA8wQAoutHA_glygnyK";

let supabaseClient;

try {

  if (
    typeof window.supabase !== "undefined"
  ) {

    supabaseClient =
      window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
      );

    window.supabaseClient =
      supabaseClient;

  }

} catch (error) {

  console.error(
    "TzTools: Supabase failed to initialise.",
    error
  );

}

/* =========================================================
   AUTH STATE
   ========================================================= */

state.user = null;
state.isAuthenticated = false;

/* =========================================================
   GET CURRENT USER
   ========================================================= */

async function getCurrentUser() {

  if (!supabaseClient?.auth) {
    return null;
  }

  try {

    const {
      data,
      error
    } = await supabaseClient.auth.getUser();

    if (error) {

      if (
        error.name ===
        "AuthSessionMissingError"
      ) {
        return null;
      }

      throw error;
    }

    return data?.user || null;

  } catch (error) {

    if (
      error?.name ===
      "AuthSessionMissingError"
    ) {
      return null;
    }

    console.error(
      "TzTools getCurrentUser error:",
      error
    );

    return null;
  }
}

window.getCurrentUser =
  getCurrentUser;

/* =========================================================
   AUTH UI
   ========================================================= */

function updateAuthUI(user) {

  state.user = user || null;
  state.isAuthenticated = !!user;

  const profileName =
    document.getElementById(
      "profileName"
    );

  const profileEmail =
    document.getElementById(
      "profileEmail"
    );

  const profileAvatar =
    document.getElementById(
      "profileAvatar"
    );

  if (user) {

    const metadata =
      user.user_metadata || {};

    const name =
      metadata.full_name ||
      metadata.name ||
      user.email?.split("@")[0] ||
      "TzTools User";

    if (profileName) {
      profileName.textContent = name;
    }

    if (profileEmail) {
      profileEmail.textContent =
        user.email || "";
    }

    if (profileAvatar) {

      if (metadata.avatar_url) {

        profileAvatar.src =
          metadata.avatar_url;

      } else {

        profileAvatar.textContent =
          name
            .charAt(0)
            .toUpperCase();

      }
    }

  } else {

    if (profileName) {
      profileName.textContent =
        "Guest";
    }

    if (profileEmail) {
      profileEmail.textContent =
        "Create an account to unlock TzTools";
    }

    if (profileAvatar) {

      if (
        profileAvatar.tagName === "IMG"
      ) {
        profileAvatar.removeAttribute(
          "src"
        );
      }

      profileAvatar.textContent = "👤";
    }
  }

  updateAuthButtons(user);
}

window.updateAuthUI =
  updateAuthUI;

/* =========================================================
   AUTH BUTTON
   ========================================================= */

function updateAuthButtons(user) {

  const accountButton =
    document.getElementById(
      "accountButton"
    );

  if (!accountButton) return;

  if (user) {

    accountButton.textContent =
      "Account";

    accountButton.dataset.authState =
      "signed-in";

  } else {

    accountButton.textContent =
      "Sign In";

    accountButton.dataset.authState =
      "signed-out";
  }
}

window.updateAuthButtons =
  updateAuthButtons;

/* =========================================================
   ACCOUNT PROMPT
   ========================================================= */

function openAuthModal(
  mode = "signup",
  message = ""
) {

  const modal =
    document.getElementById(
      "authModal"
    );

  if (!modal) {

    console.warn(
      "TzTools: authModal not found."
    );

    return;
  }

  const messageElement =
    document.getElementById(
      "authMessage"
    );

  if (messageElement) {

    messageElement.textContent =
      message ||
      "Create a free account to unlock the full TzTools experience.";
  }

  modal.classList.add("active");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  if (mode === "signup") {

    document
      .getElementById("signupForm")
      ?.classList.remove("hidden");

    document
      .getElementById("loginForm")
      ?.classList.add("hidden");

  } else {

    document
      .getElementById("loginForm")
      ?.classList.remove("hidden");

    document
      .getElementById("signupForm")
      ?.classList.add("hidden");
  }
}

window.openAuthModal =
  openAuthModal;

/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeAuthModal() {

  const modal =
    document.getElementById(
      "authModal"
    );

  if (!modal) return;

  modal.classList.remove("active");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );
}

window.closeAuthModal =
  closeAuthModal;

/* =========================================================
   SIGN UP
   ========================================================= */

async function signUpUser() {

  if (!supabaseClient?.auth) {
    showAuthError(
      "Authentication is temporarily unavailable."
    );
    return;
  }

  const email =
    document.getElementById(
      "signupEmail"
    )?.value.trim();

  const password =
    document.getElementById(
      "signupPassword"
    )?.value;

  const fullName =
    document.getElementById(
      "signupName"
    )?.value.trim();

  if (!email || !password) {

    showAuthError(
      "Please enter your email and password."
    );

    return;
  }

  try {

    const {
      data,
      error
    } =
      await supabaseClient.auth.signUp({

        email,
        password,

        options: {

          data: {
            full_name:
              fullName || ""
          },

          emailRedirectTo:
            "https://tz7-stack.github.io/"
        }

      });

    if (error) {
      throw error;
    }

    if (data?.session) {

      state.user =
        data.user || null;

      state.isAuthenticated =
        true;

      await loadCloudData();

      updateAuthUI(
        data.user
      );

      closeAuthModal();

      showToast(
        "Welcome to TzTools 🎉"
      );

    } else {

      showAuthSuccess(
        "Account created! Check your email to confirm your account."
      );
    }

  } catch (error) {

    console.error(
      "TzTools signup error:",
      error
    );

    showAuthError(
      error.message ||
      "Could not create your account."
    );
  }
}

window.signUpUser =
  signUpUser;

/* =========================================================
   SIGN IN
   ========================================================= */

async function signInUser() {

  if (!supabaseClient?.auth) {

    showAuthError(
      "Authentication is temporarily unavailable."
    );

    return;
  }

  const email =
    document.getElementById(
      "loginEmail"
    )?.value.trim();

  const password =
    document.getElementById(
      "loginPassword"
    )?.value;

  if (!email || !password) {

    showAuthError(
      "Please enter your email and password."
    );

    return;
  }

  try {

    const {
      data,
      error
    } =
      await supabaseClient.auth.signInWithPassword({

        email,
        password

      });

    if (error) {
      throw error;
    }

    state.user =
      data?.user || null;

    state.isAuthenticated =
      true;

    await loadCloudData();

    updateAuthUI(
      data?.user
    );

    closeAuthModal();

    showToast(
      "Welcome back 👋"
    );

  } catch (error) {

    console.error(
      "TzTools signin error:",
      error
    );

    showAuthError(
      error.message ||
      "Incorrect email or password."
    );
  }
}

window.signInUser =
  signInUser;

/* =========================================================
   SIGN OUT
   ========================================================= */

async function signOutUser() {

  if (!supabaseClient?.auth) {
    return;
  }

  try {

    const {
      error
    } =
      await supabaseClient.auth.signOut();

    if (error) {
      throw error;
    }

    state.user = null;

    state.isAuthenticated =
      false;

    /*
      Clear account-only local data
      when signing out.
    */

    state.favorites = [];

    state.recentlyUsed = [];

    state.compareList = [];

    saveLocalData();

    updateAuthUI(null);

    if (
      typeof window.refreshVisibleCards ===
      "function"
    ) {
      window.refreshVisibleCards();
    }

    if (
      typeof window.renderDashboard ===
      "function"
    ) {
      window.renderDashboard();
    }

    if (
      typeof window.showView ===
      "function"
    ) {
      window.showView("homeView");
    }

    showToast(
      "You've been signed out."
    );

  } catch (error) {

    console.error(
      "TzTools sign out error:",
      error
    );

    showAuthError(
      "Could not sign out."
    );
  }
}

window.signOutUser =
  signOutUser;

/* =========================================================
   CLOUD — FAVORITES
   ========================================================= */

async function syncFavoritesToCloud() {

  if (!supabaseClient?.from) {
    return;
  }

  const user =
    await getCurrentUser();

  if (!user) {
    return;
  }

  try {

    /*
      First remove current user's old
      favorite rows.
    */

    const {
      error: deleteError
    } =
      await supabaseClient
        .from("favorites")
        .delete()
        .eq(
          "user_id",
          user.id
        );

    if (deleteError) {
      throw deleteError;
    }

    if (
      !state.favorites.length
    ) {
      return;
    }

    const rows =
      state.favorites.map(
        toolId => ({
          user_id: user.id,
          tool_id: String(toolId)
        })
      );

    const {
      error
    } =
      await supabaseClient
        .from("favorites")
        .upsert(
          rows,
          {
            onConflict:
              "user_id,tool_id"
          }
        );

    if (error) {
      throw error;
    }

  } catch (error) {

    console.error(
      "TzTools favorites sync error:",
      error
    );
  }
}

window.syncFavoritesToCloud =
  syncFavoritesToCloud;

/* =========================================================
   CLOUD — RECENTLY USED
   ========================================================= */

async function syncRecentToCloud() {

  if (!supabaseClient?.from) {
    return;
  }

  const user =
    await getCurrentUser();

  if (!user) {
    return;
  }

  try {

    for (
      const toolId
      of state.recentlyUsed
    ) {

      await supabaseClient
        .from("recently_used")
        .upsert(
          {
            user_id: user.id,
            tool_id: String(toolId),
            last_used_at:
              new Date().toISOString()
          },
          {
            onConflict:
              "user_id,tool_id"
          }
        );
    }

  } catch (error) {

    console.error(
      "TzTools recent sync error:",
      error
    );
  }
}

window.syncRecentToCloud =
  syncRecentToCloud;

/* =========================================================
   CLOUD — COMPARE
   ========================================================= */

async function syncCompareToCloud() {

  if (!supabaseClient?.from) {
    return;
  }

  const user =
    await getCurrentUser();

  if (!user) {
    return;
  }

  /*
    Compare is kept locally for now.
    This function is intentionally safe so
    future saved_comparisons support can be
    added without changing app.js.
  */

  console.log(
    "TzTools compare state ready:",
    state.compareList
  );
}

window.syncCompareToCloud =
  syncCompareToCloud;

/* =========================================================
   LOAD CLOUD DATA
   ========================================================= */

async function loadCloudData() {

  if (!supabaseClient?.from) {
    return;
  }

  const user =
    await getCurrentUser();

  if (!user) {
    return;
  }

  try {

    /* -------------------------
       FAVORITES
       ------------------------- */

    const {
      data: favoriteRows,
      error: favoritesError
    } =
      await supabaseClient
        .from("favorites")
        .select("tool_id")
        .eq(
          "user_id",
          user.id
        );

    if (favoritesError) {
      throw favoritesError;
    }

    state.favorites =
      (favoriteRows || [])
        .map(row =>
          String(row.tool_id)
        );


    /* -------------------------
       RECENTLY USED
       ------------------------- */

    const {
      data: recentRows,
      error: recentError
    } =
      await supabaseClient
        .from("recently_used")
        .select(
          "tool_id,last_used_at"
        )
        .eq(
          "user_id",
          user.id
        )
        .order(
          "last_used_at",
          {
            ascending: false
          }
        )
        .limit(8);

    if (recentError) {
      throw recentError;
    }

    state.recentlyUsed =
      (recentRows || [])
        .map(row =>
          String(row.tool_id)
        );


    saveLocalData();

    if (
      typeof window.refreshVisibleCards ===
      "function"
    ) {
      window.refreshVisibleCards();
    }

    if (
      typeof window.renderDashboard ===
      "function"
    ) {
      window.renderDashboard();
    }

  } catch (error) {

    console.error(
      "TzTools cloud data error:",
      error
    );
  }
}

window.loadCloudData =
  loadCloudData;

/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function saveLocalData() {

  localStorage.setItem(
    "tztools_v76_favorites",
    JSON.stringify(
      state.favorites || []
    )
  );

  localStorage.setItem(
    "tztools_v76_recent",
    JSON.stringify(
      state.recentlyUsed || []
    )
  );

  localStorage.setItem(
    "tztools_v76_compare",
    JSON.stringify(
      state.compareList || []
    )
  );
}

window.saveLocalData =
  saveLocalData;

/* =========================================================
   AUTH MESSAGES
   ========================================================= */

function showAuthError(message) {

  const element =
    document.getElementById(
      "authError"
    );

  if (element) {

    element.textContent =
      message;

    element.style.display =
      "block";

    return;
  }

  showToast(message);
}

function showAuthSuccess(message) {

  const element =
    document.getElementById(
      "authSuccess"
    );

  if (element) {

    element.textContent =
      message;

    element.style.display =
      "block";

    return;
  }

  showToast(message);
}

/* =========================================================
   MODAL EVENTS
   ========================================================= */

function setupAuthEvents() {

  document.addEventListener(
    "click",
    event => {

      const loginButton =
        event.target.closest(
          "[data-auth-login]"
        );

      if (loginButton) {

        event.preventDefault();

        openAuthModal(
          "login"
        );

        return;
      }

      const signupButton =
        event.target.closest(
          "[data-auth-signup]"
        );

      if (signupButton) {

        event.preventDefault();

        openAuthModal(
          "signup"
        );

        return;
      }

      const closeButton =
        event.target.closest(
          "[data-auth-close]"
        );

      if (closeButton) {

        event.preventDefault();

        closeAuthModal();

        return;
      }

      const accountButton =
        event.target.closest(
          "#accountButton"
        );

      if (accountButton) {

        event.preventDefault();

        if (state.isAuthenticated) {

          if (
            typeof window.showView ===
            "function"
          ) {
            window.showView(
              "meView"
            );
          }

        } else {

          openAuthModal(
            "login",
            "Sign in to access your TzTools account."
          );
        }
      }

    }
  );

  /* Login form */
  const loginForm =
    document.getElementById(
      "loginForm"
    );

  if (loginForm) {

    loginForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        signInUser();
      }
    );
  }

  /* Signup form */
  const signupForm =
    document.getElementById(
      "signupForm"
    );

  if (signupForm) {

    signupForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        signUpUser();
      }
    );
  }
}

/* =========================================================
   AUTH STATE LISTENER
   ========================================================= */

function setupAuthListener() {

  if (!supabaseClient?.auth) {
    return;
  }

  supabaseClient.auth.onAuthStateChange(
    async (
      event,
      session
    ) => {

      const user =
        session?.user || null;

      state.user =
        user;

      state.isAuthenticated =
        !!user;

      updateAuthUI(user);

      if (user) {

        /*
          Give Supabase a moment to finish
          session restoration before querying.
        */

        setTimeout(
          () => {
            loadCloudData();
          },
          0
        );

      } else {

        state.favorites = [];

        state.recentlyUsed = [];

        state.compareList = [];

        saveLocalData();
      }

      console.log(
        "TzTools Auth:",
        event
      );
    }
  );
}

/* =========================================================
   INITIALISE AUTH
   ========================================================= */

async function initialiseAuth() {

  setupAuthEvents();

  const user =
    await getCurrentUser();

  state.user =
    user;

  state.isAuthenticated =
    !!user;

  updateAuthUI(user);

  if (user) {
    await loadCloudData();
  }

  setupAuthListener();

  console.log(
    `TzTools authentication ready 🔐 — ${
      user
        ? "Signed in"
        : "Guest"
    }`
  );
}

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initialiseAuth
  );

} else {

  initialiseAuth();
}
