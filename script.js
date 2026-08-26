const sideBar = document.getElementById('side-bar');
const nav = document.querySelector('nav');

function openSideBar() {
  sideBar.classList.add('active');
}

function closeSideBar() {
  sideBar.classList.remove('active');
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

const navLinks = document.querySelectorAll('.nav-links .nav-link');

const sections = {
  home: document.querySelector('#home'),
  about: document.querySelector('#about'),
  experience: document.querySelector('#experience'),
  contact: document.querySelector('#contact'),
};

function updateActiveNavLink() {
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  let activeSection = '';

  Object.entries(sections).forEach(([sectionName, section]) => {
    if (!section) return;

    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      activeSection = sectionName;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');

    const href = link.getAttribute('href');

    if (activeSection === 'home' && href === '#home') {
      link.classList.add('active');
    }

    if (
      (activeSection === 'about' || activeSection === 'experience') &&
      href === '#about'
    ) {
      link.classList.add('active');
    }

    if (activeSection === 'contact' && href === '#contact') {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('load', updateActiveNavLink);
