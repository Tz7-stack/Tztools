/* =========================================================
   TZTOOLS — AUTH + CLOUD SYNC
   ========================================================= */

const SUPABASE_URL = "https://nslaakklgidpzwlymrhf.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "PASTE_YOUR_EXISTING_PUBLISHABLE_KEY_HERE";

const supabaseClient =
  window.supabase &&
  SUPABASE_URL &&
  SUPABASE_PUBLISHABLE_KEY
    ? window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
      )
    : null;


/* =========================================================
   STORAGE
   ========================================================= */

const STORAGE = {
  favorites: "tztools_v76_favorites",
  recent: "tztools_v76_recent",
  compare: "tztools_v76_compare",
  theme: "tztools_v76_theme"
};

let favorites =
  JSON.parse(localStorage.getItem(STORAGE.favorites)) || [];

let recentlyUsed =
  JSON.parse(localStorage.getItem(STORAGE.recent)) || [];

let compareList =
  JSON.parse(localStorage.getItem(STORAGE.compare)) || [];


/* =========================================================
   SAVE LOCAL DATA
   ========================================================= */

function saveLocalData() {
  localStorage.setItem(
    STORAGE.favorites,
    JSON.stringify(favorites)
  );

  localStorage.setItem(
    STORAGE.recent,
    JSON.stringify(recentlyUsed)
  );

  localStorage.setItem(
    STORAGE.compare,
    JSON.stringify(compareList)
  );
}


/* =========================================================
   GET CURRENT USER
   ========================================================= */

async function getCurrentUser() {
  if (!supabaseClient) return null;

  const { data, error } =
    await supabaseClient.auth.getUser();

  if (error) {
    if (error.name === "AuthSessionMissingError") {
      return null;
    }

    console.error("Could not get current user:", error);
    return null;
  }

  return data?.user || null;
}


/* =========================================================
   UPDATE AUTH UI
   ========================================================= */

async function updateAuthUI() {
  const user = await getCurrentUser();

  const profileName =
    document.getElementById("profileName");

  const profileEmail =
    document.getElementById("profileEmail");

  const profileAvatar =
    document.getElementById("profileAvatar");

  if (user) {
    const name =
      user.user_metadata?.full_name ||
      user.user_metadata?.name ||
      user.email?.split("@")[0] ||
      "User";

    if (profileName) {
      profileName.textContent = name;
    }

    if (profileEmail) {
      profileEmail.textContent = user.email || "";
    }

    if (profileAvatar) {
      profileAvatar.textContent =
        name.charAt(0).toUpperCase();
    }
  } else {
    if (profileName) {
      profileName.textContent = "Guest";
    }

    if (profileEmail) {
      profileEmail.textContent = "Not signed in";
    }

    if (profileAvatar) {
      profileAvatar.textContent = "👤";
    }
  }

  updateAuthButtons(user);
}


/* =========================================================
   AUTH BUTTONS
   ========================================================= */

function updateAuthButtons(user) {
  const accountButton =
    document.getElementById("accountButton");

  if (!accountButton) return;

  if (user) {
    accountButton.textContent = "Account";
  } else {
    accountButton.textContent = "Sign In";
  }
}


/* =========================================================
   OPEN AUTH MODAL
   ========================================================= */

function openAuthModal(mode = "login") {
  const modal =
    document.getElementById("authModal");

  if (!modal) return;

  modal.classList.add("active");
  modal.classList.remove("hidden");

  const loginForm =
    document.getElementById("loginForm");

  const signupForm =
    document.getElementById("signupForm");

  if (mode === "signup") {
    if (loginForm) loginForm.style.display = "none";
    if (signupForm) signupForm.style.display = "";
  } else {
    if (loginForm) loginForm.style.display = "";
    if (signupForm) signupForm.style.display = "none";
  }
}


/* =========================================================
   CLOSE AUTH MODAL
   ========================================================= */

function closeAuthModal() {
  const modal =
    document.getElementById("authModal");

  if (!modal) return;

  modal.classList.remove("active");
  modal.classList.add("hidden");
}


/* =========================================================
   SIGN UP
   ========================================================= */

async function signUpUser(email, password, name = "") {
  if (!supabaseClient) {
    console.error("Supabase is not connected.");
    return { success: false };
  }

  const { data, error } =
    await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name
        },
        emailRedirectTo:
          "https://tz7-stack.github.io/"
      }
    });

  if (error) {
    console.error("Signup error:", error);
    return {
      success: false,
      error
    };
  }

  return {
    success: true,
    data
  };
}


/* =========================================================
   SIGN IN
   ========================================================= */

async function signInUser(email, password) {
  if (!supabaseClient) {
    console.error("Supabase is not connected.");
    return { success: false };
  }

  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

  if (error) {
    console.error("Login error:", error);

    return {
      success: false,
      error
    };
  }

  await loadCloudData();
  await updateAuthUI();

  return {
    success: true,
    data
  };
}


/* =========================================================
   SIGN OUT
   ========================================================= */

async function signOutUser() {
  if (!supabaseClient) return;

  const { error } =
    await supabaseClient.auth.signOut();

  if (error) {
    console.error("Logout error:", error);
    return;
  }

  favorites = [];
  recentlyUsed = [];
  compareList = [];

  saveLocalData();

  await updateAuthUI();

  if (typeof renderDashboard === "function") {
    renderDashboard();
  }

  if (typeof refreshVisibleCards === "function") {
    refreshVisibleCards();
  }
}


/* =========================================================
   SYNC FAVORITES TO CLOUD
   ========================================================= */

async function syncFavoritesToCloud() {
  if (!supabaseClient) return;

  const user = await getCurrentUser();

  if (!user) return;

  const rows = favorites.map(toolName => ({
    user_id: user.id,
    tool_name: toolName
  }));

  if (rows.length === 0) {
    await supabaseClient
      .from("favorites")
      .delete()
      .eq("user_id", user.id);

    return;
  }

  const { error } =
    await supabaseClient
      .from("favorites")
      .upsert(
        rows,
        {
          onConflict: "user_id,tool_name",
          ignoreDuplicates: true
        }
      );

  if (error) {
    console.error(
      "Favorite cloud sync failed:",
      error
    );
  }
}


/* =========================================================
   SYNC RECENT TO CLOUD
   ========================================================= */

async function syncRecentToCloud() {
  if (!supabaseClient) return;

  const user = await getCurrentUser();

  if (!user) return;

  const rows = recentlyUsed.map((toolName, index) => ({
    user_id: user.id,
    tool_name: toolName,
    last_used_at: new Date(
      Date.now() - index
    ).toISOString()
  }));

  if (!rows.length) return;

  const { error } =
    await supabaseClient
      .from("recently_used")
      .upsert(
        rows,
        {
          onConflict: "user_id,tool_name"
        }
      );

  if (error) {
    console.error(
      "Recent cloud sync failed:",
      error
    );
  }
}


/* =========================================================
   LOAD CLOUD DATA
   ========================================================= */

async function loadCloudData() {
  if (!supabaseClient) return;

  const user = await getCurrentUser();

  if (!user) return;


  /* ---------------- FAVORITES ---------------- */

  const favoritesResult =
    await supabaseClient
      .from("favorites")
      .select("tool_name")
      .eq("user_id", user.id);

  if (!favoritesResult.error) {
    favorites =
      favoritesResult.data.map(
        item => item.tool_name
      );
  }


  /* ---------------- RECENT ---------------- */

  const recentResult =
    await supabaseClient
      .from("recently_used")
      .select("tool_name,last_used_at")
      .eq("user_id", user.id)
      .order("last_used_at", {
        ascending: false
      });

  if (!recentResult.error) {
    recentlyUsed =
      recentResult.data.map(
        item => item.tool_name
      );
  }


  saveLocalData();

  if (typeof refreshVisibleCards === "function") {
    refreshVisibleCards();
  }

  if (typeof renderDashboard === "function") {
    renderDashboard();
  }
}


/* =========================================================
   AUTH STATE LISTENER
   ========================================================= */

if (supabaseClient) {
  supabaseClient.auth.onAuthStateChange(
    async (event, session) => {

      console.log(
        "Auth state:",
        event
      );

      if (session?.user) {
        await loadCloudData();
      }

      await updateAuthUI();
    }
  );
}


/* =========================================================
   AUTH FORM EVENTS
   ========================================================= */

document.addEventListener(
  "submit",
  async event => {

    if (event.target.id === "signupForm") {
      event.preventDefault();

      const form =
        event.target;

      const email =
        form.querySelector(
          '[name="email"]'
        )?.value.trim();

      const password =
        form.querySelector(
          '[name="password"]'
        )?.value;

      const name =
        form.querySelector(
          '[name="name"]'
        )?.value.trim() || "";

      if (!email || !password) {
        alert(
          "Please enter your email and password."
        );
        return;
      }

      const result =
        await signUpUser(
          email,
          password,
          name
        );

      if (!result.success) {
        alert(
          result.error?.message ||
          "Could not create account."
        );
        return;
      }

      alert(
        "Account created! Check your email to confirm your account."
      );

      closeAuthModal();
    }


    if (event.target.id === "loginForm") {
      event.preventDefault();

      const form =
        event.target;

      const email =
        form.querySelector(
          '[name="email"]'
        )?.value.trim();

      const password =
        form.querySelector(
          '[name="password"]'
        )?.value;

      if (!email || !password) {
        alert(
          "Please enter your email and password."
        );
        return;
      }

      const result =
        await signInUser(
          email,
          password
        );

      if (!result.success) {
        alert(
          result.error?.message ||
          "Could not sign in."
        );
        return;
      }

      closeAuthModal();
    }
  }
);


/* =========================================================
   INITIAL AUTH UI
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  async () => {
    await updateAuthUI();
  }
);
