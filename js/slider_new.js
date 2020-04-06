$(function () {

  var moveSlide = function (container, slideNum){
    var
    
    items = container.find('.bar__item'),
    activeSlide = items.filter('.active'),
    reqItem = items.eq(slideNum),
    reqIndex = reqItem.index(),
    list = container.find('.bars__list'),
    duration = 500;


    if (reqItem.length) {
    list.animate({
      'left' : -reqIndex * 100 + '%'
    },duration, function () {
      activeSlide.removeClass('active');
      reqItem.addClass('active');
    });

  }

  }

  $('.arrow').on('click', function(e){
    e.preventDefault();

    var $this = $(this),
    container = $this.closest('.bars'),
    items = $('.bar__item', container),
    activeItem = items.filter('.active'),
    nextItem = activeItem.next(),
    prevItem = activeItem.prev();

    if ($this.hasClass('arrow--right')) {

      if (nextItem.length) {
        moveSlide(container, nextItem.index());

      } else {
        moveSlide(container, items.first().index());
      }

    } else {

      if (prevItem.length) {
        moveSlide(container, prevItem.index());

      } else {
        moveSlide(container, items.last().index());
      }
      

    }
});
});


