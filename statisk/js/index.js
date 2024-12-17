document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('[data-collapse-toggle="navbar-menu"]');
  const menu = document.getElementById('navbar-menu');

  menuButton.addEventListener('click', function () {
    menu.classList.toggle('hidden');
  });
});
