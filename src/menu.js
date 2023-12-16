const closeBtn = document.getElementById('close-btn');
const menuBtn = document.getElementById('menu-btn');
const menuItems = document.getElementById('menu-items');


menuBtn.addEventListener('click', () => {
    menuItems.style.display= 'flex';
} );

closeBtn.addEventListener('click', () => {
    menuItems.style.display= 'none'
} );
