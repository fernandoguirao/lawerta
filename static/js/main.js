/* Top menú scroll */

$(window).scroll(function(){
  if ($(window).scrollTop()>80) {
    $('header,#single').addClass('scrolled');
  } else {
    $('header,#single').removeClass('scrolled');
  }
})

/*
Cuando hacemos click en un .body-container>a.col-md-3
Buscamos un .proyecto con un data-project que coincida con el data-project de arriba
Lo mostramos.
*/

$('.body.container a.col-md-3').click(function(event){
  dato = $(this).data('project');
  event.preventDefault();
  showF($(".proyecto[data-project='"+dato+"']"));
  hideF($('#gallery'));
});

$('.closeit').click(function(){
  hideF($('.proyecto'));
  showF($('#gallery'));
});

function hideF(div) {
  div.hide();
}

function showF(div) {
  div.show();
}