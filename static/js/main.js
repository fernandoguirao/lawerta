/* Detectamos firefox */

Modernizr.addTest('firefox', function () {
 return !!navigator.userAgent.match(/firefox/i);
});

function showAtScroll() {
  endOf = $(window).height()-60;
  copy = $('.copyright');
  $(window).scroll(function(){
    if($(window).scrollTop()>endOf){
      copy.fadeIn();
    } else {
      copy.fadeOut();
    }
  });
}

showAtScroll();

/* Top menú scroll */

/* Si estamos en home */

function scrollClass () {
  
  $(window).scroll(function(){
    if ($('.single-project').length == 1) {
      return;
    } else {
      if ($(window).scrollTop()>80) {
        $('header,#single.proyectos').addClass('scrolled');
      } else {
        $('header,#single.proyectos').removeClass('scrolled');
      }
    }
  });

}

scrollClass();

/* Abrir colapse */

$('.cOpen').click(function(){
  $('#side-menu').addClass('moveLeft');
  $('.openf').removeClass('openf');
});

$('.cClose').click(function(){
  $('#side-menu').removeClass('moveLeft');
});

/*
Cuando hacemos click en un .body-container>a.col-md-3
Buscamos un .proyecto con un data-project que coincida con el data-project de arriba
Lo mostramos.
*/


$('.body a.col-md-3').click(function(event){
  $("html, body").animate({ scrollTop: "0" });
    $('#single.proyectos').removeClass('outof');
    $('body').addClass('single-project');
    $('header,#single.proyectos').addClass('scrolled');
    dato = $(this).data('project');
    event.preventDefault();
    $('#gallery').addClass('outofgallery');
  setTimeout(function() {
    openCurtain($('#gallery'),$(".proyecto[data-project='"+dato+"']"));
  },450);
});


$('.closeit,.work-link').click(function(){
  $('#single').addClass('outof');
  $('header,#single.proyectos').removeClass('scrolled');
  $('body').removeClass('single-project');
  closeCurtain($('#gallery'),$('.proyecto'));
  $('.work-link').addClass('active');
  $('.contact-link').removeClass('active');
});

$('.contact-link').click(function(event){
  $("html, body").animate({ scrollTop: "0" });
    $('#single.contacto').removeClass('outof');
    $('body').addClass('single-project');
    $('#single.contacto').addClass('scrolled');
    $('header').removeClass('scrolled');
    $('#gallery').addClass('outofgallery');
  setTimeout(function() {
    openCurtain($('#gallery'),$(".contacto .proyecto"));
  },450);
  $('.work-link').removeClass('active');
  $('.contact-link').addClass('active');
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
  $('#single.proyectos').addClass('safclass');
  single.fadeIn(700,function(){
    gallery.hide();
  });
  
  /* Posicionamos footer al final de body */
/*
  var heightTotal = $(window).height();
  $(window).height(heightTotal+70);
  $('.copyright').addClass('bottomPosition');
  $('.bottomPosition').css({'top':heightTotal+'px'});
*/
  
  single.addClass('zTop');
  gallery.addClass('zBottom');
  single.removeClass('zBottom');
  gallery.removeClass('zTop');
  $('#footer').addClass('singlef');
  showAtScroll();
}

function closeCurtain(gallery,single){
  gallery.show();
  gallery.addClass('fixed');
  single.fadeOut(700);
  $('#single.proyectos').removeClass('safclass');
  $("html, body").animate({ scrollTop: "0" });
  gallery.children().children().removeClass('goLeft');
  gallery.children().children().removeClass('goRight');
  gallery.removeClass('curtain');
  gallery.removeClass('fixed');
  gallery.addClass('zTop');
  single.addClass('zBottom');
  single.removeClass('zTop');
  gallery.removeClass('zBottom');
  $('#footer').removeClass('singlef');
  
}

/* Footer iphone gallery */

$('#footer .icons a').click(function(event){
  event.preventDefault();
  $('#footer').toggleClass('openf');
});

$('li.next').click(function(){
  changeProject($(this),'next');
});

$('li.prev').click(function(){
  changeProject($(this),'prev');
});


function changeProject(actual,tipo) {
  $actual = actual.parent().parent().parent().parent().parent();
  $siguiente = "";
  if (tipo==='next'){
    if ($actual.is(':last-child')){
      $siguiente = actual.parent().parent().parent().parent().parent().parent().children().first();
    } else {
      $siguiente = actual.parent().parent().parent().parent().parent().next();
    }
  } else {
    if ($actual.is(':first-child')){
      $siguiente = actual.parent().parent().parent().parent().parent().parent().children().last();
    } else {
      $siguiente = actual.parent().parent().parent().parent().parent().prev();
    }
  }
  /* MOVEMOS EL DIV */
  $actual.children('.info-col').addClass('toLeft');
  $actual.children('.slides').addClass('toRight');
  $siguiente.children('.info-col').addClass('toLeft');
  $siguiente.children('.slides').addClass('toRight');
  
  setTimeout(function() {
    $actual.hide();
    $actual.children('.info-col').removeClass('toLeft');
    $actual.children('.slides').removeClass('toRight');
    $actual.removeClass('zTop');
    $siguiente.addClass('zTop');
    $siguiente.show();
  },500);
   setTimeout(function() {
  
    $siguiente.children('.info-col').removeClass('toLeft');
    $siguiente.children('.slides').removeClass('toRight');
  },700);
  setTimeout(function() {
    $("html, body").animate({ scrollTop: "0" });
  },300);
}