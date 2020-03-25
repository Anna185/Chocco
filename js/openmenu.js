
(function openMenu() {
  const menuBtn = document.querySelector('.hamburger__menu');
  const menuBlock = document.querySelector('.menu');
  
  menuBtn.addEventListener('click', function () {
  menuBlock.classList.toggle('active');
  menuBtn.classList.toggle('closed'); 
    
  })

  menuBlock.addEventListener('click', function(e) {
   if (menuBlock.classList.contains('active') && e.target.classList.contains('menu__link')) {
      menuBlock.classList.toggle('active');
      menuBtn.classList.toggle('closed'); 
   }
    
  })

}) ();

(function openMenuChocco() {

  const menuList = document.querySelector('.chocco__accordeon-list');
  const menuBlock = document.querySelector('.chocco__accordeon-item');
  const menuBtn = document.querySelector('.close-btn');
  
  menuList.addEventListener('click', function (e) {
  if (e.target.classList.contains ('chocco__accordeon-item-btn')) {
    menuBlock.classList.toggle('active');
  }
})



  }) ();

 



