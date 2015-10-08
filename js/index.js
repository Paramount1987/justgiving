$(document).ready(function(){


var videoInput = '<div class="video-item"><input type="text" class="form-control"><span class="close">х</span></div>';
var contactInput = '<div class="form-contact-item form-contact-item-added"><div class="close">удалить контакт</div><div class="form-group"><label>Телефон</label><input type="tel" class="form-control"></div><div class="form-group"><label>Электронная почта</label><input type="email" class="form-control"></div></div>'
var addressInput = '<div class="form-address-item form-address-item-added"><div class="close">удалить адрес</div><div class="form-group"><label class="label-strict">Улица</label><input type="text" class="form-control form-control-strict" name="streetPage" required></div><div class="form-group-wrap"><div class="form-group form-group-inline pull-left"><label class="label-strict">Дом</label><input type="text" class="form-control form-control-strict" name="housePage" required></div><div class="form-group form-group-inline pull-right"><label>Квартира</label><input type="text" class="form-control"></div></div><div class="form-group"><label>Хотите что-то добавить?</label><input type="text" class="form-control"></div></div>';
/////////////////////////////video add
$("#video-plus").click(function(e){
    e.preventDefault();
    $(".form-video").append(videoInput);
    $(".form-video .video-item").addClass("aviable-close");
});

$(".form-video").on("click", ".video-item .close",function(){
  $(this).closest(".video-item").remove();
  // if($(".video-item").length < 2){
  //   $(".video-item").removeClass("aviable-close");
  // }
  
});
////////////////////////////////////contact add
$("#contact-plus").click(function(e){
    e.preventDefault();
    $(".form-contact-inner").append(contactInput);
});

$(".form-contact").on("click", ".form-contact-item-added .close",function(){
  $(this).closest(".form-contact-item-added").remove();
});
////////////////////////////////////////////address add
$("#address-plus").click(function(e){
    e.preventDefault();
    $(".form-address-inner").append(addressInput);

});

$(".form-address").on("click", ".form-address-item-added .close",function(){
  $(this).closest(".form-address-item-added").remove();
});

//////////////////////////////////////////trigger-event
$("#trigger-event").change(function(){
  if($(this).is(":checked")){
    $(".form-address").slideUp();
  }else{
    $(".form-address").slideDown();
  }
});
//////////////////////////////////trigger history
	$(".full-link").click(function(){
	  var target = 	$(this).prev(".short-outer").toggleClass("open");
	  if($(target).hasClass("open")){
	  	$(this).text("Скрыть");
	  }else{
	  	$(this).text("Подробнее");
	  }

	})
	////.swipebox();
	$( ".swipebox" ).swipebox();
	/////////////////////////////

//slider

$('.sponsor-carousel').owlCarousel({
    items:2,
    loop:true,
    center: true,
    singleItem:true,
    margin:20,
    responsive:{
        768:{
          items:4
        }
    }
});

$('.color-carousel').owlCarousel({
    items:5,
    loop:true,
    margin:45,
    responsive:{
        480:{
            items:6
        },
        768:{
          items:9
        }
    }
});


$('.color-carousel').on("click",".color",function(){

  if($(this).hasClass("active")){
    return;
  }else{
    $('.color-carousel .color').removeClass("active");
    $(this).addClass('active');
  }

});
//////////////////////////////////////form-page

var validatorForm =  $("#form-page").validate({
      rules: {
        descPage: "required",
        moneyPage: "required",
        deadlinePage: "required",
        urlPage: "required",
        cityPage: "required",
        datePage: "required",
        timePage: "required",
        titlePage: {
          required: true,
          minlength: 3
        }
      },
      messages: {
        descPage: "Напишите краткое описание",
        moneyPage: false,
        deadlinePage: false,
        urlPage: false,
        cityPage: false,
        datePage: false,
        timePage: false,
        streetPage: false,
        housePage: false,
        titlePage: {
          required: "Заполните заголовок",
          minlength: "Заголовок должен быть не менее 3 символов"
        }
      }
    });



$("#deadline-page").mask("99.99.9999",{placeholder:"дд/мм/год "});
$("#date-page").mask("99.99.9999",{placeholder:"дд/мм/год "});
$("#time-page").mask("99:99",{placeholder:"__:__ "});
$("#phone-1").mask("+(999) 999 99 99",{placeholder:"+(000) 000 00 00"});

///////////////.avatar-img-wrap
var widthImg = $(".avatar-img-wrap").width();

$(".avatar-img-wrap").height(widthImg/1.8);

//////////////////////////////////////////////campany-user-title
$(".campany-user-title").hover(function(){
  var color = $("header").css("background-color");
  $(this).css("color",color);
},function(){
  $(this).css("color","#1a1a1a");
});


/////////////////////////////////visible status
$(".profile-visible").click(function(e){
  e.preventDefault();
  if($(this).hasClass("active")){
    $(this).removeClass("active");
    $(this).addClass("inactive");
    $(this).text("Невидимый");
  }else{
    $(this).removeClass("inactive");
    $(this).addClass("active");
    $(this).text("Видимый");
  }
});

/////////////////////////////////////progress-line

$(".progress-line").each(function(){
  var widthProgress = $(this).data("percent");
  $(this).css("width", widthProgress);
});
/////////////////////////////////////////get width to replace grid


function replaceDonate(){
  var wrap = $(".event-money-wrap");
  var eventInfo = $(".event-info-top");
  if(viewportSize.getWidth() < 768){
  $(".company-content .event-money-wrap").remove();
  $(".event-info-top").remove();
  $(".spot-mobile-money").before(wrap);
  $(".col-left-campaing").prepend(eventInfo);
  }else{
    $(".company-content .event-money-wrap").remove();
    $(".event-info-top").remove();
    $(".event-extra-info").prepend(wrap);
    $(".gradient-bg").prepend(eventInfo);
  }
}

replaceDonate();

$(window).resize(function(){
  replaceDonate();
  widthImg = $(".avatar-img-wrap").width();

  $(".avatar-img-wrap").height(widthImg/1.8);
});


/////////////////////////////////////menu-button
$(".menu-button").click(function(){

  if($(".search-wrap").css("display") == "block"){
    
  }else {
    if(!$(".modal-backdrop-menu").length){
      $(".wrapper").append("<div class='modal-backdrop-menu modal-backdrop fade'></div>");
      setTimeout('$(".modal-backdrop-menu").addClass("in")',150);
    }else{
      $(".modal-backdrop-menu").removeClass("in");
      setTimeout('$(".modal-backdrop-menu").remove();',150);
      }
  }

  $(".search-wrap").slideUp();
  $(".menu-wrap").slideToggle();


});

$(".menu-wrap").on("click",".icon-menu",function(){
  $(".menu-wrap").slideToggle();

  if(!$(".modal-backdrop-menu").length){
      $(".wrapper").append("<div class='modal-backdrop-menu modal-backdrop fade'></div>");
      setTimeout('$(".modal-backdrop-menu").addClass("in")',150);
  }else{
    $(".modal-backdrop-menu").removeClass("in");
      setTimeout('$(".modal-backdrop-menu").remove();',150);
  }
});
////////////////////////////////////search-btn
$(".search-btn,.search-btn-text").click(function(){

  if($(".menu-wrap").css("display") == "block"){
   
  }else {
    if(!$(".modal-backdrop-menu").length){
      $(".wrapper").append("<div class='modal-backdrop-menu modal-backdrop fade'></div>");
      setTimeout('$(".modal-backdrop-menu").addClass("in")',150);
    }else{
      $(".modal-backdrop-menu").removeClass("in");
      setTimeout('$(".modal-backdrop-menu").remove();',150);
      }
  }

  $(".menu-wrap").slideUp();
  $(".search-wrap").slideToggle();

});


$(".search-btn-text").hover(function(){ $(".i-search ").addClass("focus"); },function(){ $(".i-search ").removeClass("focus"); });
/////////////////////////////////.$(".modal-backdrop-menu")
$(".wrapper").on("click",".modal-backdrop-menu",function(){
  $(".menu-wrap").slideUp();
  $(".search-wrap").slideUp();
  $(".modal-backdrop-menu").removeClass("in");
  setTimeout('$(".modal-backdrop-menu").remove();',150);
});

////////////////////////////////////help hide
$(".helps-wrap").on("click",".link-hide",function(e){
  e.preventDefault();
  $(this).closest("li").slideUp();
});

///////////////////////////////////parallax for avatar img
window.onscroll = function(){

var top = $(document).scrollTop();


  $(".avatar-img-wrap img").css({
      "-webkit-transform":"translate(0," + top/6 +"px)",
      "-ms-transform":"translate(0," + top/6 +"px)",
      "transform":"translate(0," + top/6 +"px)"
    });
}


/////////////////////////////////
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