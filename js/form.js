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
    
  })();
  
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
    }
  }
  });
  