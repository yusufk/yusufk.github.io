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
    // Add debug log
    console.log('Setting up listener for:', el);

    document.addEventListener(type, (e) => {
      // Add debug log
      console.log('Event triggered:', e.target);
      const target = e.target.closest(el);
      // Add debug log
      console.log('Closest match:', target);

      if (target) {
        listener.call(target, e);
      }
    });
  }

  // Add mobile nav toggle handler
  on('click', 'i.mobile-nav-toggle', function(e) {
    console.log('Mobile toggle clicked');
    let navbar = select('nav');
    navbar.classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  // Modified navigation link handler
  on('click', 'a.nav-link', function(e) {
    console.log("Clicky");
    e.preventDefault();
    const targetPath = this.getAttribute('href');
    console.log('Target path:', targetPath);
    
    let navbar = select('nav');
    let header = select('header');
    let sections = select('section', true);
    let navlinks = select('.nav-link', true);
  
    // Update active states
    navlinks.forEach((item) => {
      item.classList.remove('active')
    })
    this.classList.add('active')
  
    // Handle mobile menu
    if (navbar.classList.contains('navbar-mobile')) {
      navbar.classList.remove('navbar-mobile')
      let navbarToggle = select('.mobile-nav-toggle')
      navbarToggle.classList.toggle('bi-list')
      navbarToggle.classList.toggle('bi-x')
    }
  
    // Handle header and sections
    if (targetPath === '/') {
      header.classList.remove('header-top')
      sections.forEach((item) => {
        item.classList.remove('section-show')
      })
    } else {
      header.classList.add('header-top')
      
      // Always use setTimeout for consistency
      setTimeout(() => {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        const sectionId = targetPath.replace('/', '');
        const targetSection = select(`section#${sectionId}`);
        console.log('Looking for section with ID:', sectionId);
        console.log('Found section:', targetSection);
        if (targetSection) {
          targetSection.classList.add('section-show');
        }
      }, 350);
    }
  })
  


  // Modified initial load handler
  window.addEventListener('load', () => {
    const currentPath = window.location.pathname;
    if (currentPath !== '/') {
      let header = select('header')
      let navlinks = select('nav-link', true)

      header.classList.add('header-top')

      navlinks.forEach((item) => {
        if (item.getAttribute('href') === currentPath) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    }
  });

  /**
   * Initializes testimonials slider with responsive configuration
   * - Enables autoplay with 5s delay
   * - Configures responsive breakpoints
   * - Sets up pagination and navigation
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initializes portfolio filtering and layout
   * - Sets up Isotope grid layout
   * - Handles filter button clicks
   * - Updates active filter state
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }
  });

  /**
   * Initializes portfolio details slider
   * - Enables autoplay with 5s delay
   * - Configures navigation and pagination
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
}
