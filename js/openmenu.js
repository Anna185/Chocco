
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

 
 (function Form() {
let formData = new FormData(document.forms.order);
let xhr = new XMLHttpRequest();
xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
xhr.send(formData);
xhr.onload = () => alert(xhr.response);
}) ();


const openButton = document.querySelector("#openOverlay");
const successOverlay = createOverlay("Заказ отправлен");

openButton.addEventListener("click", function() {
  document.body.appendChild(successOverlay);
});

function createOverlay(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");
  overlayElement.addEventListener("click", function(e) {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  });

  const containerElement = document.createElement("div");
  containerElement.classList.add("container");

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");
  contentElement.innerHTML = content;

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";
  closeElement.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.removeChild(overlayElement);
  });

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);

  return overlayElement;
}

