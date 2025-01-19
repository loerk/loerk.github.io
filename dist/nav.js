"use strict";
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
            const visibility = primaryNav === null || primaryNav === void 0 ? void 0 : primaryNav.getAttribute('data-visible');
            if (primaryNav && navToggle) {
                if (visibility === 'false') {
                    primaryNav === null || primaryNav === void 0 ? void 0 : primaryNav.setAttribute('data-visible', 'true');
                    navToggle === null || navToggle === void 0 ? void 0 : navToggle.setAttribute('aria-expanded', 'true');
                }
                else if (visibility === 'true') {
                    primaryNav === null || primaryNav === void 0 ? void 0 : primaryNav.setAttribute('data-visible', 'false');
                    navToggle === null || navToggle === void 0 ? void 0 : navToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
});
document.body.addEventListener('htmx:afterSwap', (event) => {
    const HtmxAfterSwapEvent = event;
    if (HtmxAfterSwapEvent.detail.target.id === 'home' ||
        HtmxAfterSwapEvent.detail.target.id === 'main' ||
        HtmxAfterSwapEvent.detail.target.id === 'footer') {
        initializeNavigation();
    }
});
