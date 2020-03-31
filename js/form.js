(function SendOrderForm() {
  const orderForm = document.querySelector('#orderForm');
  const template = document.querySelector("#overlayTemplate").innerHTML;
  const overlay = createOverlay(template);

  orderForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (orderForm.checkValidity()) {
      const data = new FormData();
      data.append("name", orderForm.elements.name.value);
      data.append("phone", orderForm.elements.phone.value);
      data.append("comment", orderForm.elements.comment.value);
      data.append("to", "9213998099@mail.ru");


      fetch('https://webdev-api.loftschool.com/sendmail', {
        method: 'POST',
        body: data
      })
      .then(response => response.json())
      .then(resp => {
        overlay.open();
        overlay.setContent(resp.message);
      })
      .catch( () => {
        overlay.open();
        overlay.setContent('На сервере произошла ошибка. Повторите запрос');
      })
  
  }
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
  closeElement.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.removeChild(overlayElement);
    document.body.style.overflow = '';
  });

  return {
    open() {
      document.body.appendChild(overlayElement);
      document.body.style.overflow = 'hidden';
    },
    close() {
      closeElement.click();
      
    },
    setContent(content) {
      contentElement.innerHTML = content;
    }
  }
}

})();

