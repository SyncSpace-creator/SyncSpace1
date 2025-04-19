
document.addEventListener('touchstart', function() {}, { passive: true });
document.addEventListener('touchmove', function() {}, { passive: true });
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    if (mobileMenu.classList.contains('hidden')) {
      lucide.createIcons(); // Refresh icons
      menuIcon.setAttribute('data-lucide', 'menu');
    } else {
      lucide.createIcons(); // Refresh icons
      menuIcon.setAttribute('data-lucide', 'x');
    }
  });

  // Close mobile menu when clicking on links
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      menuIcon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    });
  });

  // Launch button - show auth modal
  const launchBtn = document.getElementById('launch-btn');
  const authModal = document.getElementById('auth-modal');

  launchBtn.addEventListener('click', function() {
    authModal.classList.remove('hidden');
    // Add animations to modal content
    const modalContent = authModal.querySelector('div > div');
    modalContent.classList.add('slide-up');
  });

  // Close modal when clicking outside
  authModal.addEventListener('click', function(e) {
    if (e.target === authModal) {
      authModal.classList.add('hidden');
    }
  });

  // Add animations to hero section elements
  const heroTitle = document.querySelector('#home h2');
  const heroText = document.querySelector('#home p');
  const heroButton = document.querySelector('#home button');

  heroTitle.classList.add('hero-title');
  heroText.classList.add('hero-text');
  heroButton.classList.add('hero-button');
});
