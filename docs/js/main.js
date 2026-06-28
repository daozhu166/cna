/* ============================================
   CNA Website - Main Application Logic
   ============================================ */

let currentLang = 'zh';
let revealObserver = null;

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
  // Restore saved language preference first
  try {
    const saved = localStorage.getItem('cna-lang');
    if (saved === 'en' || saved === 'zh') {
      currentLang = saved;
    }
  } catch(e) {}

  initLanguageToggle();
  initScrollEffects();
  initMobileMenu();
  initSmoothScroll();
  initRevealAnimations();
  renderMemberShowcase();
  renderMemberList();
  updateAllContent();
});

// ==========================================
// LANGUAGE TOGGLE
// ==========================================
function initLanguageToggle() {
  const buttons = document.querySelectorAll('.lang-btn');
  // Set initial active state based on currentLang
  buttons.forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;
      buttons.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
      updateAllContent();
      try { localStorage.setItem('cna-lang', lang); } catch(e) {}
    });
  });
}

// ==========================================
// MASTER UPDATE FUNCTION
// ==========================================
function updateAllContent() {
  const i18n = I18N[currentLang];
  if (!i18n) { console.error('I18N data not found for lang:', currentLang); return; }

  // 1. Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = getNestedValue(i18n, key);
    if (value !== undefined && value !== null) {
      el.textContent = value;
    }
  });

  // 2. Hero section — bilingual tagline
  const heroCn = document.querySelector('.hero-tagline-cn');
  const heroEn = document.querySelector('.hero-tagline-en');
  if (heroCn && heroEn) {
    if (currentLang === 'zh') {
      heroCn.textContent = I18N.zh.hero.tagline;
      heroEn.style.display = '';  // restore visibility
      heroEn.textContent = I18N.zh.hero.taglineEn;
    } else {
      heroCn.textContent = I18N.en.hero.tagline;
      heroEn.style.display = 'none';
    }
  }

  // 3. Benefits section
  const benefitsEl = document.querySelector('.benefits-grid');
  if (benefitsEl && i18n.benefits) {
    const raw = i18n.benefits.items;
    const items = raw.split('✅').map(s => s.trim()).filter(Boolean);
    benefitsEl.innerHTML = items.map(item =>
      `<div class="benefit-item">
        <span class="benefit-check">✅</span>
        <span>${item}</span>
      </div>`
    ).join('');
  }

  // 4. Member list — re-render for category labels
  renderMemberList();

  // 5. Member showcase — re-render
  renderMemberShowcase();

  // 6. HTML lang attribute
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
}

// ==========================================
// NESTED OBJECT ACCESS
// ==========================================
function getNestedValue(obj, path) {
  const keys = path.split('.');
  let current = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return undefined;
    current = current[key];
  }
  return current;
}

// ==========================================
// SCROLL EFFECTS
// ==========================================
function initScrollEffects() {
  const navbar = document.querySelector('.navbar');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (navbar) {
          navbar.classList.toggle('scrolled', window.scrollY > 50);
        }

        // Active nav link
        const sections = document.querySelectorAll('.section[id]');
        let current = '';
        sections.forEach(section => {
          if (window.scrollY >= section.offsetTop - 120) {
            current = section.id;
          }
        });
        document.querySelectorAll('.nav-links a').forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
        });

        ticking = false;
      });
      ticking = true;
    }
  });
}

// ==========================================
// MOBILE MENU
// ==========================================
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav-links');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => nav.classList.toggle('open'));

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ==========================================
// REVEAL ANIMATIONS
// ==========================================
function initRevealAnimations() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ==========================================
// RENDER MEMBER SHOWCASE
// ==========================================
function renderMemberShowcase() {
  const container = document.getElementById('member-showcase-grid');
  if (!container) return;

  container.innerHTML = MEMBER_SHOWCASE.map(m => `
    <div class="member-card reveal">
      <div class="member-card-header">
        <img class="member-logo-img" src="${m.logo}" alt="${m.nameCN}" loading="lazy"
             onerror="this.parentElement.innerHTML='<div style=\\'width:72px;height:72px;background:#eee;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#999\\'>Logo</div>'">
        <div>
          <h3>${currentLang === 'zh' ? m.nameCN : m.nameEN}</h3>
          <span class="member-tag">${CATEGORY_LABELS[currentLang][m.category]}</span>
        </div>
      </div>
      <div class="member-card-body">
        <p>${currentLang === 'zh' ? m.descCN : m.descEN}</p>
      </div>
    </div>
  `).join('');

  initRevealAnimations();
}

// ==========================================
// RENDER MEMBER LIST
// ==========================================
function renderMemberList() {
  const tbody = document.getElementById('member-list-tbody');
  if (!tbody) return;

  const categoryClass = {
    restaurant: 'tag-restaurant',
    supply: 'tag-supply',
    tech: 'tag-tech',
    service: 'tag-service'
  };

  tbody.innerHTML = MEMBER_LIST.map(m => `
    <tr>
      <td class="num">${String(m.num).padStart(2, '0')}</td>
      <td>${m.nameCN}</td>
      <td><strong>${m.brandCN}</strong></td>
      <td><span class="category-tag ${categoryClass[m.category]}">${CATEGORY_LABELS[currentLang][m.category]}</span></td>
    </tr>
  `).join('');
}
