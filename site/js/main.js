(function () {
  var btn = document.querySelector('.nav-toggle');
  var menu = document.getElementById('site-menu');
  if (!btn || !menu) return;

  function setOpen(open) {
    menu.classList.toggle('is-open', open);
    btn.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  }

  btn.addEventListener('click', function () {
    setOpen(!menu.classList.contains('is-open'));
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.site-header')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      setOpen(false);
      btn.focus();
    }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) setOpen(false);
  });
})();
