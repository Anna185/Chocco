
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


  
(function Slider() {
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

right.addEventListener("click", function(e) {
 loop("right", e);
});

left.addEventListener("click", function(e) {
 loop("left", e);
});

function loop(direction, e) {
 e.preventDefault();
 if (direction === "right") {
   items.appendChild(items.firstElementChild);
 } else {
   items.insertBefore(items.lastElementChild, items.firstElementChild);
 }
}
}) ();

   
 const myForm = document.querySelector('#order');
 const send = document.querySelector('#send');

 send.addEventListener('click', event => {
    event.preventDefault();

   if (validateForm(myForm)) {
     const data = {
       name: myForm.elements.name.value,
       pnone: myForm.elements.phone.value,
       comment: myForm.elements.comment.value
     };

     const xhr = new XMLHttpRequest();
     xhr.responseType = 'json';
     xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
     xhr.send(JSON.stringify(data));
     xhr.addEventListener('load', () => {
      if(xhr.response.status) {
        console.log('заказ отправлен');
      }

     });


   }
 });

 function validateForm(form) {
   let valid = true;

   if (!validateField(form.elements.name)) {
     valid = false;
   }

   if (!validateField(form.elements.phone)) {
    valid = false;
  }

  if (!validateField(form.elements.comment)) {
    valid = false;
  }

  return valid;
 }

 function validateField(field) {
   field.nextElementSibling.textContent = field.validationMessage;
   return field.checkValidity();
 }

 




  
  
  
  
    
