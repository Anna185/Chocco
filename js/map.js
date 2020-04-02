
let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.75, 37.60],
    zoom: 14,
    controls: []
  });

  const coords = [
    [55.748756, 37.582161],
    [55.760818,37.58128],
    [55.759456,37.626789],
    [55.751619,37.601277]
  ];
  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable:false,
    iconLayout: 'default#image',
    iconImageHref: "./img/marker.svg",
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]

  });

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });
  myMap.geoObjects.add(myCollection);
  myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);


