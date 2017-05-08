$(document).ready(function() {
	$(".fancybox").fancybox();
});

$(document).ready(function() {
  $( "#accordion" ).accordion();
});

$(document).ready(function() {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items : 1,
      });
    var owlSecond = $(".owl-carousel_second");
    owlSecond.owlCarousel({
      items : 2,
      });
    var owlTriple = $(".owl-carousel_triple");
    owlTriple.owlCarousel({
      items : 3,
      });
    var owlQuadruple = $(".owl-carousel_quadruple");
    owlQuadruple.owlCarousel({
      items : 4,
      });
    var owlFivefold = $(".owl-carousel_fivefold");
    owlFivefold.owlCarousel({
      items : 5,
      });
});

$(function(){
  $('.events-item-img').height($('.events-item-img').width()/1);
  $(window).resize(function(){
    $('.events-item-img').height($('.events-item-img').width()/1);
  });
});

$(function(){
  $('.btn').click(function(){
    $('#overlay').show(300);
    $('.form-header').show();
    $('input').show();
    $('.hideinput').show();
  });
  $('.close').click(function(){
    $('#overlay').hide(300);
  });
  $('.hideinput').click(function(){
    $('.form-header').hide();
    $('input').hide();
    $(this).hide();
  });
});