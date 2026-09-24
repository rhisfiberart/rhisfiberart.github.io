/* Portfolio lightbox
   - Click a piece's photo to open it full screen
   - Every <img> inside a piece's .portfolio-img-wrap becomes one slide
   - Left/right arrows (buttons, keyboard, or swipe) move between photos
   - Esc, the X button, or clicking the dark background closes it */
(function () {
  var wraps = document.querySelectorAll('.portfolio-img-wrap');
  if (!wraps.length) return;

  var slides = [];   // photos for the piece currently open
  var index = 0;
  var lastFocus = null;

  // ---- build the overlay once ----
  var box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Photo viewer');
  box.hidden = true;
  box.innerHTML =
    '<button type="button" class="lightbox-btn lightbox-close" aria-label="Close">&times;</button>' +
    '<button type="button" class="lightbox-btn lightbox-prev" aria-label="Previous photo">&#8249;</button>' +
    '<figure class="lightbox-figure">' +
      '<img class="lightbox-img" alt="">' +
      '<figcaption class="lightbox-caption"></figcaption>' +
    '</figure>' +
    '<button type="button" class="lightbox-btn lightbox-next" aria-label="Next photo">&#8250;</button>';
  document.body.appendChild(box);

  var imgEl = box.querySelector('.lightbox-img');
  var capEl = box.querySelector('.lightbox-caption');
  var prevBtn = box.querySelector('.lightbox-prev');
  var nextBtn = box.querySelector('.lightbox-next');
  var closeBtn = box.querySelector('.lightbox-close');

  function show(i) {
    var n = slides.length;
    index = (i + n) % n;
    imgEl.src = slides[index].src;
    imgEl.alt = slides[index].alt;
    var title = slides[index].title;
    var count = n > 1 ? (index + 1) + ' / ' + n : '';
    capEl.textContent = title && count ? title + ' - ' + count : title || count;
    capEl.hidden = !capEl.textContent;
    // preload neighbours so arrowing feels instant
    if (n > 1) {
      [slides[(index + 1) % n], slides[(index - 1 + n) % n]].forEach(function (s) {
        new Image().src = s.src;
      });
    }
  }

  function open(wrap, start) {
    var title = '';
    var article = wrap.closest('.portfolio-item');
    var h = article && article.querySelector('.portfolio-title');
    if (h) title = h.textContent.trim();
    slides = Array.prototype.map.call(wrap.querySelectorAll('img'), function (im) {
      return { src: im.currentSrc || im.src, alt: im.alt, title: title };
    });
    var multi = slides.length > 1;
    prevBtn.hidden = nextBtn.hidden = !multi;
    lastFocus = document.activeElement;
    box.hidden = false;
    document.body.classList.add('lightbox-open');
    show(start || 0);
    closeBtn.focus();
  }

  function close() {
    box.hidden = true;
    imgEl.removeAttribute('src');
    document.body.classList.remove('lightbox-open');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  // ---- set up each piece on the page ----
  Array.prototype.forEach.call(wraps, function (wrap) {
    var imgs = wrap.querySelectorAll('img');
    if (!imgs.length) return;
    wrap.setAttribute('role', 'button');
    wrap.setAttribute('tabindex', '0');
    wrap.setAttribute('aria-label', 'View photos full screen' + (imgs.length > 1 ? ' (' + imgs.length + ' photos)' : ''));
    if (imgs.length > 1) {
      var badge = document.createElement('span');
      badge.className = 'portfolio-count';
      badge.setAttribute('aria-hidden', 'true');
      badge.textContent = imgs.length + ' photos';
      wrap.appendChild(badge);
    }
    wrap.addEventListener('click', function () { open(wrap, 0); });
    wrap.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(wrap, 0); }
    });
  });

  // ---- controls ----
  prevBtn.addEventListener('click', function (e) { e.stopPropagation(); show(index - 1); });
  nextBtn.addEventListener('click', function (e) { e.stopPropagation(); show(index + 1); });
  closeBtn.addEventListener('click', close);
  box.addEventListener('click', function (e) {
    // click on the dark backdrop (not the photo or a button) closes
    if (e.target === box || e.target.classList.contains('lightbox-figure')) close();
  });

  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft' && slides.length > 1) show(index - 1);
    else if (e.key === 'ArrowRight' && slides.length > 1) show(index + 1);
    else if (e.key === 'Tab') {
      // keep keyboard focus inside the viewer
      var f = Array.prototype.filter.call(box.querySelectorAll('button'), function (b) { return !b.hidden; });
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // swipe on touch screens
  var startX = null;
  box.addEventListener('touchstart', function (e) { startX = e.changedTouches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', function (e) {
    if (startX === null || slides.length < 2) return;
    var dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
  }, { passive: true });
})();
