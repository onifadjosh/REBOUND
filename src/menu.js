const closeBtn = document.getElementById('close-btn');
const menuBtn = document.getElementById('menu-btn');
const menuItems = document.getElementById('menu-items');


menuBtn.addEventListener('click', () => {
    menuItems.style.display= 'flex';
} );

closeBtn.addEventListener('click', () => {
    menuItems.style.display= 'none'
} );


document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
      var menuHead = document.getElementById('menuHead');
  
      if (window.scrollY > menuHead.offsetTop) {
        menuHead.classList.add('fixed');
      } else {
        menuHead.classList.remove('fixed');
      }
    });
  });
  