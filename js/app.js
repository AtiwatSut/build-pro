/**
 * ช่างบอลรับเหมา - Main JavaScript Application
 * PWA Registration, Lightbox, Navigation, and Interactive UI
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. Update Footer Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 1. Initialize PWA Service Worker
  initServiceWorker();

  // 2. Navigation & Mobile Menu
  initNavigation();

  // 3. Portfolio & Image Lightbox Modal
  initLightbox();

  // 4. Portfolio 'Load More' Toggle
  initPortfolioMore();
});

/* ======================================================
   1. PWA Service Worker Registration
   ====================================================== */
function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => {
          console.log('BuildPro Service Worker registered with scope:', reg.scope);
        })
        .catch((err) => {
          console.warn('Service Worker registration failed:', err);
        });
    });
  }
}

/* ======================================================
   2. Navigation & Mobile Menu
   ====================================================== */
function initNavigation() {
  const header = document.querySelector('.header');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  // Mobile Menu Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.innerHTML = isOpen ? '&#x2715;' : '&#9776;';
    });

    // Close menu when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = '&#9776;';
        mobileToggle.setAttribute('aria-expanded', false);
      });
    });
  }

  // Active Link Spy on Scroll
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset + 120;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

/* ======================================================
   3. Portfolio & Image Lightbox Modal
   ====================================================== */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const modalCaption = document.getElementById('lightboxCaption');
  const modalSub = document.getElementById('lightboxSubcaption');
  const closeBtn = document.getElementById('lightboxClose');

  if (!modal || !modalImg) return;

  // Handle all elements with data-lightbox
  document.querySelectorAll('[data-lightbox]').forEach((item) => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-img-src') || item.querySelector('img')?.src;
      const title = item.getAttribute('data-title') || 'ผลงานช่างบอลรับเหมา';
      const loc = item.getAttribute('data-loc') || 'ขอนแก่นและพื้นที่ใกล้เคียง';

      if (src) {
        modalImg.src = src;
        modalCaption.textContent = title;
        modalSub.textContent = loc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal functions
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ======================================================
   4. Portfolio 'Load More' Toggle
   ====================================================== */
function initPortfolioMore() {
  const moreBtn = document.getElementById('btnPortfolioMore');
  const extraGrid = document.getElementById('portfolioExtra');

  if (moreBtn && extraGrid) {
    moreBtn.addEventListener('click', () => {
      const isExpanded = extraGrid.classList.toggle('active');
      moreBtn.innerHTML = isExpanded 
        ? '<span>ย่อผลงาน</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 15l-6-6-6 6"/></svg>'
        : '<span>ดูผลงานเพิ่มเติม</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>';
    });
  }
}
