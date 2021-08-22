const toggleBtn = document.querySelector('.toggleBtn');
const menu = document.querySelector('.menu-items');
const icons = document.querySelector('.external-link');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});
