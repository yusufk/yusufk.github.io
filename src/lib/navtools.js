import Swiper from 'swiper/bundle';
import Isotope from 'isotope-layout';

export default function Navtools() {
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  const on = (type, el, listener, all = false) => {
    document.addEventListener(type, (e) => {
      const target = e.target.closest(el);
      if (target) {
        listener.call(target, e);
      }
    });
  }

  // Mobile nav toggle
  on('click', 'i.mobile-nav-toggle', function(e) {
    let navbar = select('nav');
    navbar.classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  // Close mobile menu when a nav link is clicked
  on('click', 'a.nav-link', function(e) {
    let navbar = select('nav');
    if (navbar.classList.contains('navbar-mobile')) {
      navbar.classList.remove('navbar-mobile');
      let navbarToggle = select('.mobile-nav-toggle');
      navbarToggle.classList.toggle('bi-list');
      navbarToggle.classList.toggle('bi-x');
    }
  });

  // Swiper: testimonials
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    slidesPerView: 'auto',
    pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      1200: { slidesPerView: 3, spaceBetween: 20 }
    }
  });

  // Isotope portfolio filtering
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        select('#portfolio-flters li', true).forEach(el => el.classList.remove('filter-active'));
        this.classList.add('filter-active');
        portfolioIsotope.arrange({ filter: this.getAttribute('data-filter') });
      }, true);
    }
  });

  // Swiper: portfolio details
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true }
  });
}
