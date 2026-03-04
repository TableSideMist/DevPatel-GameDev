(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('#nav-menu');
  var navLinks = document.querySelectorAll('.nav-list a');

  if (!header || !menuToggle || !nav) return;

  function openMenu() {
    header.classList.add('menu-open');
    nav.removeAttribute('hidden');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close menu');
    menuToggle.querySelector('.menu-text').textContent = 'Close Menu';
  }

  function closeMenu() {
    header.classList.remove('menu-open');
    nav.setAttribute('hidden', '');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    menuToggle.querySelector('.menu-text').textContent = 'Open Menu';
  }

  function toggleMenu() {
    var isOpen = header.classList.contains('menu-open');
    if (isOpen) closeMenu();
    else openMenu();
  }

  menuToggle.addEventListener('click', toggleMenu);

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth < 768) closeMenu();
    });
  });

  // Close menu on escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('menu-open')) {
      closeMenu();
    }
  });

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
