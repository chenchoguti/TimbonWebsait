
/*=============================================
EFECTOS CON EL SCROLL
=============================================*/
$.scrollUp({
    scrollText:"", // un texto 
    scrollSpeed: 2000, //la velocidad para que suba
    easingType: "easeOutQuint" // el efecto para que suba

});
$("#boton").click(function(){
    // e.preventDefault();
     $('html, body').animate({
         scrollTop:530
     },1200);
     return false;
 });
 $("#boton1").click(function(){
     // e.preventDefault();
      $('html, body').animate({
          scrollTop:1030
      },1200);
      return false;
  });
  $("#boton2").click(function(){
     // e.preventDefault();
      $('html, body').animate({
          scrollTop:2600
      },1900);
      return false;
  });
 
/*=============================================
Tooltip
=============================================*/
$(document).tooltip();