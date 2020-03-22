
(function openMenu() {
  const menuBtn = document.querySelector('.hamburger__menu');
  const menuBlock = document.querySelector('menu');
  
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

