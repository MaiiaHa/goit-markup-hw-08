// (() => {
//   const menueBtnRef = document.querySelector('[data-menue-btn]');
//   const mobileMenueRef = document.querySelector('[data-menue]');

//   menueBtnRef.addEventListener('click', () => {
//     const expanded = menueBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     menueBtnRef.classList.toggle('is-open');
//     menueBtnRef.setAttribute('aria-expanded', !expanded);

//     mobileMenueRef.classList.toggle('is-open');
//   });
// })();

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
