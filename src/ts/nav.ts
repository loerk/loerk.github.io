interface HtmxAfterSwapDetail {
  target: HTMLElement;
}

function initializeNavigation() {
  const primaryNav = document.querySelector('.primary-navigation');
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelectorAll('.primary-navigation a');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (primaryNav && navToggle) {
        const visibility = primaryNav.getAttribute('data-visible');
        if (visibility === 'true') {
          primaryNav.setAttribute('data-visible', 'false');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const visibility = primaryNav?.getAttribute('data-visible');

      if (primaryNav && navToggle) {
        if (visibility === 'false') {
          primaryNav?.setAttribute('data-visible', 'true');
          navToggle?.setAttribute('aria-expanded', 'true');
        } else if (visibility === 'true') {
          primaryNav?.setAttribute('data-visible', 'false');
          navToggle?.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
});

document.body.addEventListener('htmx:afterSwap', (event) => {
  const HtmxAfterSwapEvent = event as CustomEvent<HtmxAfterSwapDetail>;
  if (
    HtmxAfterSwapEvent.detail.target.id === 'home' ||
    HtmxAfterSwapEvent.detail.target.id === 'main' ||
    HtmxAfterSwapEvent.detail.target.id === 'footer'
  ) {
    initializeNavigation();
  }
});
