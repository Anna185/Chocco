const photos = document.querySelector('.reviews__list');
const userPhotos = document.querySelectorAll('.reviews__item');
const fullRew = document.querySelectorAll('.reviews__full-item');

photos.addEventListener('click', function(e) {
 if (e.target.classList.contains('.reviews__item')) {
  
   for (let photo of userPhotos ) {
    if (photo.parentNode.classList.contains('active')) {
      photo.parentNode.classList.remove('active');
   }
   }
   
   e.target.parentNode.classList.add('active');
   console.log(e.target.parentNode.dataset.id);
   
   for (let item of fullRew ) {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
   }
   
     if (e.target.parentNode.dataset.id == item.dataset.ids) {
        item.classList.add('active');
     }
   }
   
 }
})


