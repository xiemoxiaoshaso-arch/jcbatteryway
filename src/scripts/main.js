// src/scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
  // ====================================================
  // 1. 大 Banner 自动与手动轮播逻辑
  // ====================================================
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');
  let currentIndex = 0;
  let timer = null;

  function goToSlide(index) {
    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    currentIndex = index;
  }

  function nextSlide() { goToSlide((currentIndex + 1) % slides.length); }
  function prevSlide() { goToSlide((currentIndex - 1 + slides.length) % slides.length); }

  nextBtn?.addEventListener('click', () => { nextSlide(); resetTimer(); });
  prevBtn?.addEventListener('click', () => { prevSlide(); resetTimer(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goToSlide(i); resetTimer(); });
  });

  function startTimer() { timer = setInterval(nextSlide, 5000); }
  function resetTimer() { clearInterval(timer); startTimer(); }
  if (slides.length > 0) startTimer();

  // ====================================================
  // 2. 产品中心 - 专属小图片轮播逻辑 (新增)
  // ====================================================
  const pSlides = document.querySelectorAll('.product-slide');
  const pDots = document.querySelectorAll('.p-dot');
  const pPrevBtn = document.getElementById('p-prev-slide');
  const pNextBtn = document.getElementById('p-next-slide');
  let pIndex = 0;

  function showPSlide(index) {
    pSlides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    pDots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    pIndex = index;
  }

  pNextBtn?.addEventListener('click', (e) => {
    e.stopPropagation(); // 阻止冒泡，避免触发点击放大弹窗
    showPSlide((pIndex + 1) % pSlides.length);
  });

  pPrevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    showPSlide((pIndex - 1 + pSlides.length) % pSlides.length);
  });

  pDots.forEach((dot, i) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      showPSlide(i);
    });
  });

  // ====================================================
  // 3. 点击图片放大与全屏画廊弹窗 (Lightbox Gallery)
  // ====================================================
  const imageModal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const closeImageModal = document.getElementById('close-modal');
  const modalPrev = document.getElementById('modal-prev');
  const modalNext = document.getElementById('modal-next');
  const modalCounter = document.getElementById('modal-counter');

  let galleryImages = [];
  let currentGalleryIndex = 0;

  // 更新弹窗图片与页码显示
  function updateGalleryModal(index) {
    if (galleryImages.length === 0 || !modalImg) return;
    currentGalleryIndex = index;
    modalImg.src = galleryImages[currentGalleryIndex];
    if (modalCounter) {
      modalCounter.textContent = `${currentGalleryIndex + 1} / ${galleryImages.length}`;
    }
  }

  // 3.1 点击产品轮播图，进入全屏产品画廊
  pSlides.forEach((slide, idx) => {
    slide.addEventListener('click', () => {
      galleryImages = Array.from(pSlides).map(s => s.getAttribute('data-full')).filter(Boolean);
      updateGalleryModal(idx);
      if (imageModal) imageModal.classList.add('open');
    });
  });

  // 3.2 点击普通缩略图卡片 (如厂房/车间图片)
  const thumbCards = document.querySelectorAll('.thumb-card');
  thumbCards.forEach(card => {
    card.addEventListener('click', () => {
      const fullSrc = card.getAttribute('data-full');
      if (fullSrc) {
        galleryImages = [fullSrc];
        updateGalleryModal(0);
        if (imageModal) imageModal.classList.add('open');
      }
    });
  });

  // 3.3 弹窗大画廊左右翻页按钮
  modalNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (galleryImages.length > 0) {
      updateGalleryModal((currentGalleryIndex + 1) % galleryImages.length);
    }
  });

  modalPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (galleryImages.length > 0) {
      updateGalleryModal((currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  });

  closeImageModal?.addEventListener('click', () => imageModal?.classList.remove('open'));
  imageModal?.addEventListener('click', (e) => {
    if (e.target === imageModal) imageModal.classList.remove('open');
  });


// 静态网站 0 刷新中英双语即时切换逻辑
  const langBtn = document.getElementById('lang-toggle-btn');
  const langText = langBtn?.querySelector('.lang-text');

  // 读取本地记录，默认英文 'en'
  const savedLang = localStorage.getItem('site-lang') || 'en';
  setLanguage(savedLang);

  function setLanguage(lang) {
    if (lang === 'zh') {
      document.body.classList.remove('lang-en');
      document.body.classList.add('lang-zh');
      if (langText) langText.textContent = 'EN';
    } else {
      document.body.classList.remove('lang-zh');
      document.body.classList.add('lang-en');
      if (langText) langText.textContent = '中文';
    }
    localStorage.setItem('site-lang', lang);
  }

  langBtn?.addEventListener('click', () => {
    const currentIsZh = document.body.classList.contains('lang-zh');
    setLanguage(currentIsZh ? 'en' : 'zh');
  });

  // ====================================================
  // 4. 在线获取报价/定制留言表单弹窗 (Quote Modal)
  // ====================================================
  const quoteModal = document.getElementById('quote-modal');
  const closeQuoteModal = document.getElementById('close-quote-modal');
  const triggerQuoteBtns = document.querySelectorAll('.trigger-quote-modal');
  const quoteForm = document.getElementById('quote-form');

  triggerQuoteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      quoteModal?.classList.add('open');
    });
  });

  closeQuoteModal?.addEventListener('click', () => {
    quoteModal?.classList.remove('open');
  });

  quoteModal?.addEventListener('click', (e) => {
    if (e.target === quoteModal) quoteModal.classList.remove('open');
  });

  quoteForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ 您的定制申请已成功提交！我们的工程师将尽快为您核算并回复邮箱！');
    quoteForm.reset();
    quoteModal?.classList.remove('open');
  });

  // ====================================================
  // 5. 页面滚动时更新导航高亮
  // ====================================================
  const sections = document.querySelectorAll('section');
  const dotItems = document.querySelectorAll('.dot-item');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        dotItems.forEach(dot => dot.classList.toggle('active', dot.getAttribute('data-section') === id));
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
      }
    });
  }, { threshold: 0.4 });

  sections.forEach((section) => observer.observe(section));
});