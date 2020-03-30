
(function openMenu() {
  const menuBtn = document.querySelector('.hamburger__menu');
  const menuBlock = document.querySelector('.menu');

  menuBtn.addEventListener('click', function () {
    menuBlock.classList.toggle('active');
    menuBtn.classList.toggle('closed');

  })

  menuBlock.addEventListener('click', function (e) {
    if (menuBlock.classList.contains('active') && e.target.classList.contains('menu__link')) {
      menuBlock.classList.toggle('active');
      menuBtn.classList.toggle('closed');
    }

  })

})();

(function openMenuChocco() {

  const menuList = document.querySelector('.chocco__accordeon-list');
  const menuBlock = document.querySelectorAll('.chocco__accordeon-item');
  const menuBtn = document.querySelectorAll('.close-btn');

  menuList.addEventListener('click', function (e) {

    if (e.target.classList.contains('chocco__accordeon-item-btn')) {
      const targetBlock = e.target.parentNode;
      for (let item of menuBlock) {
        if (item.classList.contains('active') && item !== targetBlock) {
          item.classList.remove('active');

        }
      }
      targetBlock.classList.toggle('active');
    }
    if (e.target.classList.contains('chocco__accordeon-item-title')) {
      const targetBlock = e.target.parentNode.parentNode;
      for (let item of menuBlock) {
        if (item.classList.contains('active') && item !== targetBlock) {
          item.classList.remove('active');
        }
      }
      targetBlock.classList.toggle('active');
    }
  })
})();



(function openMenuTeam() {

  const teamList = document.querySelector('.team__list-accordeon');
  const teamBlock = document.querySelectorAll('.team__item-accordeon');


  teamList.addEventListener('click', function (e) {

    if (e.target.classList.contains('team__item-accordeon-title')) {
      const targetBlock = e.target.parentNode;
      for (let item of teamBlock) {
        if (item.classList.contains('active') && item !== targetBlock) {
          item.classList.remove('active');

        }
      }
      targetBlock.classList.toggle('active');
    }

  })
})();



(function Slider() {
  const left = document.querySelector("#left");
  const right = document.querySelector("#right");
  const items = document.querySelector("#items");

  right.addEventListener("click", function (e) {
    loop("right", e);
  });

  left.addEventListener("click", function (e) {
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
})();


(function SendOrderForm() {
const orderForm = document.querySelector('#orderForm');
const submitBtn = document.querySelector('.btn__order');

submitBtn.addEventListener('click', function (event) {
  if (orderForm.checkValidity()) {
    event.preventDefault();

    const data = new FormData();
    data.append("name", orderForm.elements.name.value);
    data.append("phone", orderForm.elements.phone.value);
    data.append("comment", orderForm.elements.comment.value);
    data.append("to", "9213998099@mail.ru");
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail', true);
    xhr.responseType = 'json';
    xhr.send(JSON.stringify(data));
  }
  
});

(function Overlay() {
const openButton = document.querySelector(".openOverlay");
const template = document.querySelector("#overlayTemplate").innerHTML;
const overlay = createOverlay(template);

openButton.addEventListener("click", function() {
  overlay.open();
  overlay.setContent("Спасибо, данные сохранены");
});

function createOverlay(template) {
  const fragment = document.createElement('div');

  fragment.innerHTML = template;

  const overlayElement = fragment.querySelector(".overlay");
  const contentElement = fragment.querySelector(".content");
  const closeElement = fragment.querySelector(".close");
  
  overlayElement.addEventListener("click", e => {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  });
  closeElement.addEventListener("click", () => {
    document.body.removeChild(overlayElement);
  });

  return {
    open() {
      document.body.appendChild(overlayElement);
    },
    close() {
      closeElement.click();
    },
    setContent(content) {
      contentElement.innerHTML = content;
    }
  };
}); 
