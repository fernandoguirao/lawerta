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


$('.body a.col-md-3').click(function(event){
  dato = $(this).data('project');
  event.preventDefault();
  openCurtain($('#gallery'),$(".proyecto[data-project='"+dato+"']"));
});

$('.closeit').click(function(){
  closeCurtain($('#gallery'),$('.proyecto'));
});


/*
Lo que tiene que ocurrir al cerrar el single
single comienza a desaparecer
gallery aparece con position fixed y se cierra
  mientras la página hace scroll hasta arriba
gallery cambia a position normal
*/

/*
Al abrir
#gallery se hace fixed
en cada row, los dos primeros se van a la izquierda y los dos segundos a la derecha
  mientras #single hace fadeIn
*/

function openCurtain(gallery,single){
  gallery.addClass('curtain');
  var $si = 0;
  gallery.children().children().each(function(){
    if ($si===0) {
      $(this).addClass('goLeft');
      $si=1;
    } else if ($si===1) {
      $(this).addClass('goLeft');
      $si=2;
    } else if ($si===2) {
      $(this).addClass('goRight');
      $si=3;
    } else {
      $(this).addClass('goRight');
      $si=0;
    }
  });
  single.fadeIn(700,function(){
    gallery.hide();
  });
  single.addClass('zTop');
  gallery.addClass('zBottom');
  single.removeClass('zBottom');
  gallery.removeClass('zTop');
}

function closeCurtain(gallery,single){
  gallery.show();
  gallery.addClass('fixed');
  single.fadeOut(700);
  $("html, body").animate({ scrollTop: "0" });
  gallery.children().children().removeClass('goLeft');
  gallery.children().children().removeClass('goRight');
  gallery.removeClass('curtain');
  gallery.removeClass('fixed');
  gallery.addClass('zTop');
  single.addClass('zBottom');
  single.removeClass('zTop');
  gallery.removeClass('zBottom');
  
}