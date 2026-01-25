/**
 * Reha-Widerspruch.de - Main JavaScript
 */

(function() {
  'use strict';

  // ==========================================================================
  // DOM Elements
  // ==========================================================================
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const faqItems = document.querySelectorAll('.faq-item');
  const cookieBanner = document.querySelector('.cookie-banner');
  const cookieAcceptBtn = document.querySelector('.cookie-accept');
  const cookieDeclineBtn = document.querySelector('.cookie-decline');

  // ==========================================================================
  // Header Scroll Effect
  // ==========================================================================
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);

  // ==========================================================================
  // Mobile Navigation
  // ==========================================================================
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile nav when clicking a link
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ==========================================================================
  // FAQ Accordion
  // ==========================================================================
  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-item__question');

    if (question) {
      question.addEventListener('click', function() {
        const isActive = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(function(otherItem) {
          otherItem.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // ==========================================================================
  // Cookie Banner
  // ==========================================================================
  const COOKIE_CONSENT_KEY = 'reha_widerspruch_cookie_consent';

  function showCookieBanner() {
    if (cookieBanner) {
      cookieBanner.classList.add('active');
    }
  }

  function hideCookieBanner() {
    if (cookieBanner) {
      cookieBanner.classList.remove('active');
    }
  }

  function setCookieConsent(value) {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    hideCookieBanner();

    if (value === 'accepted') {
      initializeTracking();
    }
  }

  function checkCookieConsent() {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(showCookieBanner, 1000);
    } else if (consent === 'accepted') {
      initializeTracking();
    }
  }

  if (cookieAcceptBtn) {
    cookieAcceptBtn.addEventListener('click', function() {
      setCookieConsent('accepted');
    });
  }

  if (cookieDeclineBtn) {
    cookieDeclineBtn.addEventListener('click', function() {
      setCookieConsent('declined');
    });
  }

  // ==========================================================================
  // Tracking Initialization (Placeholder)
  // ==========================================================================
  function initializeTracking() {
    // Google Tag Manager - Placeholder
    // Replace GTM-XXXXXXX with your actual GTM ID
    /*
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-XXXXXXX');
    */

    // Meta Pixel - Placeholder
    // Replace XXXXXXXXX with your actual Pixel ID
    /*
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'XXXXXXXXX');
    fbq('track', 'PageView');
    */

    console.log('Tracking initialized (placeholder)');
  }

  // ==========================================================================
  // Smooth Scroll for Anchor Links
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      if (targetId === '#' || targetId === '#lp') {
        return; // Don't prevent default for these
      }

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================================================
  // Intersection Observer for Animations
  // ==========================================================================
  const animateOnScroll = document.querySelectorAll('.step, .cost-card, .benefit, .testimonial');

  if ('IntersectionObserver' in window && animateOnScroll.length > 0) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animateOnScroll.forEach(function(element) {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(element);
    });
  }

  // ==========================================================================
  // Initialize
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', function() {
    handleScroll();
    checkCookieConsent();
  });

})();
