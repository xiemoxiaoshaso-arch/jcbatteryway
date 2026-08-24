// src/scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
  // ====================================================
  // 1. 全局画廊大图弹窗 (Lightbox Modal) 核心控制器
  // ====================================================
  const imageModal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const closeModal = document.getElementById('close-modal');
  const modalPrev = document.getElementById('modal-prev');
  const modalNext = document.getElementById('modal-next');
  const modalCounter = document.getElementById('modal-counter');

  let currentGalleryList = []; // 存放当前弹窗组的所有图片 URL
  let currentGalleryIndex = 0; // 当前展示的图片索引

  // 核心函数：打开弹窗并显示指定图片
  function openGalleryModal(imageList, startIndex = 0) {
    if (!imageList || imageList.length === 0 || !modalImg || !imageModal) return;

    currentGalleryList = imageList;
    currentGalleryIndex = startIndex;

    updateModalView();
    imageModal.classList.add('open');
  }

  // 刷新弹窗内视图与翻页按钮
  function updateModalView() {
    if (!modalImg || currentGalleryList.length === 0) return;

    modalImg.src = currentGalleryList[currentGalleryIndex];

    // 更新页码计数器 (如 "1 / 3")
    if (modalCounter) {
      modalCounter.textContent = `${currentGalleryIndex + 1} / ${currentGalleryList.length}`;
    }

    // 多于 1 张图片显示左右切换箭头，只有 1 张时自动隐藏
    const showNav = currentGalleryList.length > 1;
    if (modalPrev) modalPrev.style.display = showNav ? 'flex' : 'none';
    if (modalNext) modalNext.style.display = showNav ? 'flex' : 'none';
  }

  // 弹窗翻页事件
  modalNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentGalleryList.length > 0) {
      currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryList.length;
      updateModalView();
    }
  });

  modalPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentGalleryList.length > 0) {
      currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
      updateModalView();
    }
  });

  // 关闭弹窗
  closeModal?.addEventListener('click', () => imageModal?.classList.remove('open'));
  imageModal?.addEventListener('click', (e) => {
    if (e.target === imageModal) imageModal.classList.remove('open');
  });


  // ====================================================
  // 2. 绑定页面上所有可放大的图片区域
  // ====================================================

  // 2.1 绑定 Banner 右下角的 3 张缩略图 (.hero-thumbnails)
  document.querySelectorAll('.hero-thumbnails').forEach(container => {
    const cards = container.querySelectorAll('.thumb-card');
    cards.forEach((card, idx) => {
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        const list = Array.from(cards).map(c => c.getAttribute('data-full')).filter(Boolean);
        openGalleryModal(list, idx);
      });
    });
  });

  // 2.2 绑定 4 个车间/厂房卡片 (.factory-card)
  document.querySelectorAll('.factory-card').forEach(card => {
    const slides = card.querySelectorAll('.factory-slide');
    const list = Array.from(slides).map(s => s.getAttribute('data-full')).filter(Boolean);

    card.addEventListener('click', (e) => {
      // 排除点击小卡片上的左右小切换箭头和指示点
      if (e.target.closest('.f-arrow') || e.target.closest('.f-dots')) return;

      const activeSlide = card.querySelector('.factory-slide.active');
      const activeIdx = activeSlide ? Array.from(slides).indexOf(activeSlide) : 0;

      openGalleryModal(list, activeIdx >= 0 ? activeIdx : 0);
    });
  });

  // 2.3 绑定产品中心小轮播图 (.product-slide)
  const pSlides = document.querySelectorAll('.product-slide');
  pSlides.forEach((slide, idx) => {
    slide.addEventListener('click', (e) => {
      if (e.target.closest('.p-arrow') || e.target.closest('.p-slider-dots')) return;

      const list = Array.from(pSlides).map(s => s.getAttribute('data-full')).filter(Boolean);
      openGalleryModal(list, idx);
    });
  });

  // 2.4 补漏：绑定其他可能独立的 .thumb-card
  document.querySelectorAll('.thumb-card').forEach(card => {
    if (!card.closest('.hero-thumbnails') && !card.closest('.factory-card')) {
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        const fullSrc = card.getAttribute('data-full');
        if (fullSrc) openGalleryModal([fullSrc], 0);
      });
    }
  });


  // ====================================================
  // 3. 大 Banner 自动与手动轮播逻辑
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

  nextBtn?.addEventListener('click', (e) => { e.stopPropagation(); nextSlide(); resetTimer(); });
  prevBtn?.addEventListener('click', (e) => { e.stopPropagation(); prevSlide(); resetTimer(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', (e) => { e.stopPropagation(); goToSlide(i); resetTimer(); });
  });

  function startTimer() { timer = setInterval(nextSlide, 5000); }
  function resetTimer() { clearInterval(timer); startTimer(); }
  if (slides.length > 0) startTimer();


  // ====================================================
  // 4. 车间卡片迷你小轮播逻辑
  // ====================================================
  document.querySelectorAll('.factory-slider').forEach((card) => {
    const fSlides = card.querySelectorAll('.factory-slide');
    const fDots = card.querySelectorAll('.f-dot');
    const fPrevBtn = card.querySelector('.f-arrow-left');
    const fNextBtn = card.querySelector('.f-arrow-right');
    let fIdx = 0;

    function showFSlide(index) {
      if (fSlides.length <= 1) return;
      fSlides.forEach((slide, i) => slide.classList.toggle('active', i === index));
      fDots.forEach((dot, i) => dot.classList.toggle('active', i === index));
      fIdx = index;
    }

    fNextBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      showFSlide((fIdx + 1) % fSlides.length);
    });

    fPrevBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      showFSlide((fIdx - 1 + fSlides.length) % fSlides.length);
    });

    fDots.forEach((dot, i) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        showFSlide(i);
      });
    });
  });


  // ====================================================
  // 5. 产品中心小轮播逻辑
  // ====================================================
  const pDots = document.querySelectorAll('.p-dot');
  const pPrevBtn = document.getElementById('p-prev-slide');
  const pNextBtn = document.getElementById('p-next-slide');
  let pIndex = 0;

  function showPSlide(index) {
    if (pSlides.length === 0) return;
    pSlides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    pDots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    pIndex = index;
  }

  pNextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
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
  // 6. 在线获取报价表单 Ajax 异步提交 (对接 Web3Forms)
  // ====================================================
  const quoteModal = document.getElementById('quote-modal');
  const closeQuoteModal = document.getElementById('close-quote-modal');
  const triggerQuoteBtns = document.querySelectorAll('.trigger-quote-modal');
  const quoteForm = document.getElementById('quote-form');

  triggerQuoteBtns.forEach(btn => {
    btn.addEventListener('click', () => quoteModal?.classList.add('open'));
  });

  closeQuoteModal?.addEventListener('click', () => quoteModal?.classList.remove('open'));
  quoteModal?.addEventListener('click', (e) => {
    if (e.target === quoteModal) quoteModal.classList.remove('open');
  });

  quoteForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = quoteForm.querySelector('.btn-submit');
    const originalBtnText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending... / 正在发送...';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(quoteForm)
      });
      const data = await response.json();

      if (data.success) {
        alert('✅ Success! Your inquiry has been sent. We will contact you soon!\n提交成功！我们的工程师将尽快核算并回复您的邮箱！');
        quoteForm.reset();
        quoteModal?.classList.remove('open');
      } else {
        alert('❌ Submission failed / 提交失败: ' + data.message);
      }
    } catch (error) {
      alert('❌ Network error, please try again / 网络错误，请重试！');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });


  // ====================================================
  // 7. 静态网站 0 刷新双语切换逻辑
  // ====================================================
  const langBtn = document.getElementById('lang-toggle-btn');
  const langText = langBtn?.querySelector('.lang-text');

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

    const formInputs = document.querySelectorAll('[data-placeholder-en]');
    formInputs.forEach(input => {
      const ph = input.getAttribute(`data-placeholder-${lang}`);
      if (ph) input.placeholder = ph;
    });
  }

  langBtn?.addEventListener('click', () => {
    const currentIsZh = document.body.classList.contains('lang-zh');
    setLanguage(currentIsZh ? 'en' : 'zh');
  });

  // 8. 参数规格表弹窗逻辑
  const specsModal = document.getElementById('specs-modal');
  const closeSpecsModal = document.getElementById('close-specs-modal');
  const triggerSpecsBtns = document.querySelectorAll('.trigger-specs-modal');
  const specsToQuoteBtn = document.getElementById('specs-to-quote-btn');

  triggerSpecsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      specsModal?.classList.add('open');
    });
  });

  closeSpecsModal?.addEventListener('click', () => {
    specsModal?.classList.remove('open');
  });

  // 点击参数表底部的“索取报价”按钮时，关闭参数表并打开报价表单
  specsToQuoteBtn?.addEventListener('click', () => {
    specsModal?.classList.remove('open');
    quoteModal?.classList.add('open');
  });

  specsModal?.addEventListener('click', (e) => {
    if (e.target === specsModal) specsModal.classList.remove('open');
  });


  // ====================================================
  // 9. 页面滚动更新侧边栏/顶部导航高亮
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