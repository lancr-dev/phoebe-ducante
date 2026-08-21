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
