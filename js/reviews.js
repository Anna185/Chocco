const photos = document.querySelector('.reviews__list');
const userPhotos = document.querySelectorAll('.reviews__item');
const fullRew = document.querySelectorAll('.reviews__full-item');

photos.addEventListener('click', function(e) {
  e.preventDefault();

 if (e.target.classList.contains('reviews__item__avatar')) {
  
   for (let photo of userPhotos ) {
    if (photo.classList.contains('active')) {
      photo.classList.remove('active');
   }
   }
   
   e.target.parentNode.parentNode.classList.add('active');
   console.log(e.target.parentNode.dataset.id);
   
   for (let item of fullRew ) {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
   }
   
     if (e.target.parentNode.parentNode.dataset.id == item.dataset.ids) {
        item.classList.add('active');
     }
   }
   
 }
})


