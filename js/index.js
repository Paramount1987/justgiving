$(document).ready(function(){

	////
	$(".full-link").click(function(){

	  var target = 	$(this).prev(".short-outer").toggleClass("open");
	  if($(target).hasClass("open")){
	  	$(this).text("Скрыть");
	  }else{
	  	$(this).text("Подробнее о моей истории");
	  }

	})
	////.swipebox();
	$( ".swipebox" ).swipebox();
	/////////////////////////////

//slider

$('.color-carousel').owlCarousel({
    center: true,
    items:5,
    loop:true,
    margin:45,
    responsive:{
        480:{
            items:7
        },
        768:{
          items:9
        }
    }
});
////////




	////////////////////////////////map
          var myMap;

          // Дождёмся загрузки API и готовности DOM.

          if(!$("#map-1").length == 0){
             ymaps.ready(init);
           }

          function init () {
              // Создание экземпляра карты и его привязка к контейнеру с
              // заданным id ("map").
                          myMap = new ymaps.Map('map-1', {
                              // При инициализации карты обязательно нужно указать
                              // её центр и коэффициент масштабирования.
                              center: [55.80239628, 49.21062750], // Москва
                              zoom: 15,
                              controls:[]
                          });

                      var myPlacemark = new ymaps.Placemark([55.80239628, 49.21062750],
                         {
                        // Свойства.
                        hintContent: 'ул. Остоженка, 3/14'
                    },
                        {
                        iconImageHref: 'i/icons/mark.png',
                        iconImageSize: [32, 41],
                        iconImageOffset: [0, 0]
                        });

                      myMap.behaviors.disable('scrollZoom');
                      myMap.geoObjects.add(myPlacemark);

          }

	////////////////////////
	
});