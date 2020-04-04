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