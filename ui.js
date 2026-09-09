/* ================================
   TZTOOLS V4 — ADVANCED UI ANIMATIONS
================================ */

// ================================
// SECTION 1: PAGE TRANSITIONS
// ================================

class PageTransition {
  constructor() {
    this.currentPage = null;
    this.isTransitioning = false;
  }

  init() {
    document.querySelectorAll('nav button[data-page], .nav-links button[data-page], .mobile-menu button[data-page], .footer-links button[data-page], .text-button[data-page]').forEach(btn => {
      btn.addEventListener('click', (e) => this.transitionTo(e.target.dataset.page));
    });
  }

  transitionTo(pageName) {
    if (this.isTransitioning) return;
    
    const targetPage = document.getElementById(`${pageName}Page`);
    const currentPageEl = document.querySelector('.page.active');

    if (!targetPage || targetPage === currentPageEl) return;

    this.isTransitioning = true;

    // Fade out current page
    if (currentPageEl) {
      currentPageEl.style.animation = 'pageExit 0.4s ease forwards';
      setTimeout(() => {
        currentPageEl.classList.remove('active');
      }, 400);
    }

    // Fade in new page
    setTimeout(() => {
      targetPage.classList.add('active');
      targetPage.style.animation = 'pageEnter 0.5s ease forwards';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.isTransitioning = false;
    }, 200);
  }
}

// ================================
// SECTION 2: ELEMENT ANIMATIONS
// ================================

class ElementAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
  }

  init() {
    this.initScrollAnimations();
    this.initHoverAnimations();
    this.initButtonAnimations();
  }

  initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, this.observerOptions);

    document.querySelectorAll(
      '.category-grid button, .tool-grid .tool-card, .dashboard-card, .community-stats > div, .change-item'
    ).forEach(el => observer.observe(el));
  }

  initHoverAnimations() {
    // Category buttons
    document.querySelectorAll('.category-grid button').forEach(btn => {
      btn.addEventListener('mouseenter', () => this.pulseElement(btn));
      btn.addEventListener('mouseleave', () => this.resetElement(btn));
    });

    // Tool cards
    document.querySelectorAll('.tool-card').forEach(card => {
      card.addEventListener('mouseenter', () => this.elevateElement(card));
      card.addEventListener('mouseleave', () => this.resetElement(card));
    });
  }

  initButtonAnimations() {
    document.querySelectorAll('button, .visit-button').forEach(btn => {
      btn.addEventListener('mousedown', () => this.pressButton(btn));
      btn.addEventListener('mouseup', () => this.releaseButton(btn));
      btn.addEventListener('mouseleave', () => this.releaseButton(btn));
    });
  }

  pulseElement(el) {
    el.style.transform = 'translateY(-8px) scale(1.02)';
    el.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.2)';
  }

  elevateElement(el) {
    el.style.transform = 'translateY(-12px) translateZ(0)';
    el.style.boxShadow = '0 25px 50px rgba(99, 102, 241, 0.15)';
  }

  pressButton(btn) {
    btn.style.transform = 'scale(0.95)';
  }

  releaseButton(btn) {
    btn.style.transform = 'scale(1)';
  }

  resetElement(el) {
    el.style.transform = '';
    el.style.boxShadow = '';
  }
}

// ================================
// SECTION 3: SEARCH ANIMATIONS
// ================================

class SearchAnimations {
  constructor() {
    this.searchBox = document.querySelector('.search-box');
    this.searchInput = document.getElementById('search');
    this.suggestionsBox = document.getElementById('suggestions');
    this.clearBtn = document.getElementById('clearSearch');
  }

  init() {
    if (!this.searchInput) return;

    this.searchInput.addEventListener('focus', () => this.expandSearchBox());
    this.searchInput.addEventListener('blur', () => this.collapseSearchBox());
    this.searchInput.addEventListener('input', () => this.animateSuggestions());
    this.clearBtn?.addEventListener('click', () => this.clearWithAnimation());
  }

  expandSearchBox() {
    this.searchBox?.style.setProperty('--search-scale', '1.02');
    this.searchBox?.style.setProperty('--search-shadow', '0 20px 60px rgba(99, 102, 241, 0.2)');
  }

  collapseSearchBox() {
    if (!this.searchInput.value) {
      this.searchBox?.style.setProperty('--search-scale', '1');
      this.searchBox?.style.setProperty('--search-shadow', 'var(--shadow)');
    }
  }

  animateSuggestions() {
    if (this.suggestionsBox?.classList.contains('open')) {
      this.suggestionsBox.style.animation = 'suggestionsSlideIn 0.3s ease forwards';
    }
  }

  clearWithAnimation() {
    if (this.searchInput) {
      this.searchInput.style.opacity = '0.6';
      setTimeout(() => {
        this.searchInput.value = '';
        this.searchInput.style.opacity = '1';
        this.searchInput.focus();
      }, 100);
    }
  }
}

// ================================
// SECTION 4: MODAL & POPUP ANIMATIONS
// ================================

class ModalAnimations {
  constructor() {
    this.mobileMenu = document.getElementById('mobileMenu');
    this.menuButton = document.getElementById('menuButton');
    this.compareBar = document.getElementById('compareBar');
  }

  init() {
    this.initMobileMenu();
    this.initCompareBar();
  }

  initMobileMenu() {
    if (!this.menuButton) return;

    this.menuButton.addEventListener('click', () => {
      this.mobileMenu?.classList.toggle('open');
      if (this.mobileMenu?.classList.contains('open')) {
        this.animateMenuOpen();
      } else {
        this.animateMenuClose();
      }
    });

    document.querySelectorAll('.mobile-menu button').forEach(btn => {
      btn.addEventListener('click', () => {
        this.animateMenuClose();
        setTimeout(() => this.mobileMenu?.classList.remove('open'), 300);
      });
    });
  }

  animateMenuOpen() {
    this.mobileMenu.style.animation = 'slideDownIn 0.3s ease forwards';
  }

  animateMenuClose() {
    this.mobileMenu.style.animation = 'slideUpOut 0.3s ease forwards';
  }

  initCompareBar() {
    if (!this.compareBar) return;

    // This will be triggered by compare functionality
    const observer = new MutationObserver(() => {
      if (this.compareBar.classList.contains('show')) {
        this.compareBar.style.animation = 'slideUpIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
      }
    });

    observer.observe(this.compareBar, { attributes: true, attributeFilter: ['class'] });
  }
}

// ================================
// SECTION 5: LOADING ANIMATIONS
// ================================

class LoadingAnimations {
  static showLoadingState(element) {
    element.style.opacity = '0.6';
    element.style.pointerEvents = 'none';
    element.classList.add('loading');
  }

  static hideLoadingState(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
    element.classList.remove('loading');
  }

  static createLoadingSpinner() {
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    spinner.innerHTML = `
      <div class="spinner-ring"></div>
      <div class="spinner-ring"></div>
      <div class="spinner-ring"></div>
    `;
    return spinner;
  }

  static animateToolGridLoad(container) {
    const cards = container.querySelectorAll('.tool-card');
    cards.forEach((card, index) => {
      card.style.animation = `cardSlideIn 0.4s ease ${index * 0.05}s backwards`;
    });
  }
}

// ================================
// SECTION 6: SCROLL ANIMATIONS
// ================================

class ScrollAnimations {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.isScrolled = false;
  }

  init() {
    window.addEventListener('scroll', () => this.handleScroll());
    this.initParallaxEffect();
    this.initRevealOnScroll();
  }

  handleScroll() {
    const scrolled = window.scrollY > 20;
    
    if (scrolled && !this.isScrolled) {
      this.navbar?.style.setProperty('--navbar-shadow', '0 10px 30px rgba(0, 0, 0, 0.1)');
      this.isScrolled = true;
    } else if (!scrolled && this.isScrolled) {
      this.navbar?.style.setProperty('--navbar-shadow', 'none');
      this.isScrolled = false;
    }
  }

  initParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      hero.style.transform = `translateY(${scrollY * 0.3}px)`;
    });
  }

  initRevealOnScroll() {
    const sections = document.querySelectorAll('.categories, .featured-section, .community-stats');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
  }
}

// ================================
// SECTION 7: TOAST NOTIFICATIONS
// ================================

class ToastAnimations {
  constructor() {
    this.toastContainer = document.getElementById('toast');
  }

  init() {
    // Toast notifications will be animated when shown
  }

  show(message, type = 'info') {
    if (!this.toastContainer) return;

    this.toastContainer.textContent = message;
    this.toastContainer.className = `toast show ${type}`;
    this.toastContainer.style.animation = 'toastSlideIn 0.3s ease forwards';

    setTimeout(() => {
      this.toastContainer.style.animation = 'toastSlideOut 0.3s ease forwards';
      setTimeout(() => {
        this.toastContainer.className = 'toast';
      }, 300);
    }, 3000);
  }
}

// ================================
// SECTION 8: RIPPLE EFFECT
// ================================

class RippleEffect {
  static create(event, element) {
    const rect = element.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  }

  static initOnElements(selector) {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('click', (e) => this.create(e, el));
    });
  }
}

// ================================
// SECTION 9: THEME TOGGLE ANIMATION
// ================================

class ThemeAnimation {
  constructor() {
    this.themeButton = document.getElementById('themeButton');
  }

  init() {
    if (!this.themeButton) return;

    this.themeButton.addEventListener('click', () => {
      this.animateThemeToggle();
    });
  }

  animateThemeToggle() {
    this.themeButton.style.transform = 'rotate(360deg) scale(1.2)';
    this.themeButton.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    
    setTimeout(() => {
      this.themeButton.style.transform = 'rotate(0deg) scale(1)';
    }, 600);
  }
}

// ================================
// SECTION 10: INITIALIZATION
// ================================

class UIAnimationManager {
  constructor() {
    this.pageTransition = new PageTransition();
    this.elementAnimations = new ElementAnimations();
    this.searchAnimations = new SearchAnimations();
    this.modalAnimations = new ModalAnimations();
    this.scrollAnimations = new ScrollAnimations();
    this.toastAnimations = new ToastAnimations();
    this.themeAnimation = new ThemeAnimation();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeAll());
    } else {
      this.initializeAll();
    }
  }

  initializeAll() {
    console.log('🎨 Initializing TzTools UI Animations...');

    // Initialize all animation modules
    this.pageTransition.init();
    this.elementAnimations.init();
    this.searchAnimations.init();
    this.modalAnimations.init();
    this.scrollAnimations.init();
    this.toastAnimations.init();
    this.themeAnimation.init();

    // Initialize ripple effects on buttons
    RippleEffect.initOnElements('button:not(.text-button)');

    console.log('✨ UI Animations Ready!');
  }
}

// ================================
// EXPORT FOR USE IN OTHER SCRIPTS
// ================================

window.UIAnimations = {
  manager: new UIAnimationManager(),
  LoadingAnimations,
  ToastAnimations,
  RippleEffect,
  
  init() {
    this.manager.init();
  },

  showToast(message, type = 'info') {
    this.manager.toastAnimations.show(message, type);
  },

  showLoading(element) {
    LoadingAnimations.showLoadingState(element);
  },

  hideLoading(element) {
    LoadingAnimations.hideLoadingState(element);
  }
};

// Start animations on page load
window.UIAnimations.init();

