/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 
// Timeline data
window.addEventListener('DOMContentLoaded', function() {
    const quoteText = document.querySelector('.quote-text');
    quoteText.style.animationDelay = '1s'; // Delay the animation start by 1 second
  });
  

$(document).ready(function() {
    var publicationCards = $('.publication-card');
    var currentIndex = 0;

    function showNextCard() {
      // Hide the current active card
      publicationCards.eq(currentIndex).removeClass('active');
      
      // Update the index to show the next card
      currentIndex = (currentIndex + 1) % publicationCards.length;

      // Show the next card
      publicationCards.eq(currentIndex).addClass('active');
    }

    // Initially show the first card
    publicationCards.eq(currentIndex).addClass('active');

    // Slide to the next card every 3 seconds
    setInterval(showNextCard, 3000);
  });

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
