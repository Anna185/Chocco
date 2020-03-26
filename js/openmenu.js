
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
  const menuBlock = document.querySelectorAll('.chocco__accordeon-item');
  const menuBtn = document.querySelectorAll('.close-btn');

  menuList.addEventListener('click', function (e) {
  
  if (e.target.classList.contains ('chocco__accordeon-item-btn')) {
    const targetBlock = e.target.parentNode;
    for (let item of menuBlock) {
      if (item.classList.contains('active') && item !== targetBlock) {
        item.classList.remove('active');
        
      }
    }
       targetBlock.classList.toggle('active');
  }
    if (e.target.classList.contains ('chocco__accordeon-item-title')) {
    const targetBlock = e.target.parentNode.parentNode;
    for (let item of menuBlock) {
      if (item.classList.contains('active') && item !== targetBlock) {
        item.classList.remove('active');
      }
    }
       targetBlock.classList.toggle('active');
  }
})
  }) ();

  
  
(function openMenuTeam() {

  const teamList = document.querySelector('.team__list-accordeon');
  const teamBlock = document.querySelectorAll('.team__item-accordeon');
  

  teamList.addEventListener('click', function (e) {
  
  if (e.target.classList.contains ('team__item-accordeon-title')) {
    const targetBlock = e.target.parentNode;
    for (let item of teamBlock) {
      if (item.classList.contains('active') && item !== targetBlock) {
        item.classList.remove('active');
        
      }
    }
       targetBlock.classList.toggle('active');
  }
    
})
  }) ();

  

  


