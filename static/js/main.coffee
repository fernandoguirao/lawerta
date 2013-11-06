# Detectamos firefox 

# Mostrar copyright en fin de scroll 
showAtScroll = ->
  endOf = $(window).height() - 60
  copy = $(".copyright")
  $(window).scroll ->
    if $(window).scrollTop() > endOf
      copy.fadeIn()
    else
      copy.fadeOut()


# Top menú scroll 

# Si estamos en home 
scrollClass = ->
  $(window).scroll ->
    if $(".single-project").length is 1
      return
    else
      if $(window).scrollTop() > 80
        $("header,#single.proyectos").addClass "scrolled"
      else
        $("header,#single.proyectos").removeClass "scrolled"

# Abrir colapse 

openCurtain = (gallery, single) ->
  gallery.addClass "curtain"
  $si = 0
  gallery.children().children().each ->
    if $si is 0
      $(this).addClass "goLeft"
      $si = 1
    else if $si is 1
      $(this).addClass "goLeft"
      $si = 2
    else if $si is 2
      $(this).addClass "goRight"
      $si = 3
    else
      $(this).addClass "goRight"
      $si = 0

  $("#single.proyectos").addClass "safclass"
  single.fadeIn 700, ->
    gallery.hide()

  
  # Posicionamos footer al final de body 
  
  single.addClass "zTop"
  gallery.addClass "zBottom"
  single.removeClass "zBottom"
  gallery.removeClass "zTop"
  $("#footer").addClass "singlef"
  showAtScroll()
closeCurtain = (gallery, single) ->
  gallery.show()
  gallery.addClass "fixed"
  single.fadeOut 700
  $("#single.proyectos").removeClass "safclass"
  $("html, body").animate scrollTop: "0"
  gallery.children().children().removeClass "goLeft"
  gallery.children().children().removeClass "goRight"
  gallery.removeClass "curtain"
  gallery.removeClass "fixed"
  gallery.addClass "zTop"
  single.addClass "zBottom"
  single.removeClass "zTop"
  gallery.removeClass "zBottom"
  $("#footer").removeClass "singlef"

# Footer iphone gallery 
changeProject = (actual, tipo) ->
  $actual = actual.parent().parent().parent().parent().parent()
  $siguiente = ""
  if tipo is "next"
    if $actual.is(":last-child")
      $siguiente = actual.parent().parent().parent().parent().parent().parent().children().first()
    else
      $siguiente = actual.parent().parent().parent().parent().parent().next()
  else
    if $actual.is(":first-child")
      $siguiente = actual.parent().parent().parent().parent().parent().parent().children().last()
    else
      $siguiente = actual.parent().parent().parent().parent().parent().prev()
  
  # MOVEMOS EL DIV 
  $actual.children(".info-col").addClass "toLeft"
  $actual.children(".slides").addClass "toRight"
  $siguiente.children(".info-col").addClass "toLeft"
  $siguiente.children(".slides").addClass "toRight"
  setTimeout (->
    $actual.hide()
    $actual.children(".info-col").removeClass "toLeft"
    $actual.children(".slides").removeClass "toRight"
    $actual.removeClass "zTop"
    $siguiente.addClass "zTop"
    $siguiente.show()
  ), 500
  setTimeout (->
    $siguiente.children(".info-col").removeClass "toLeft"
    $siguiente.children(".slides").removeClass "toRight"
  ), 700
  setTimeout (->
    $("html, body").animate scrollTop: "0"
  ), 300
Modernizr.addTest "firefox", ->
  !!navigator.userAgent.match(/firefox/i)

showAtScroll()
scrollClass()
$(".cOpen").click ->
  $("#side-menu").addClass "moveLeft"
  $(".openf").removeClass "openf"

$(".cClose").click ->
  $("#side-menu").removeClass "moveLeft"

$(".body a.col-md-3").click (event) ->
  $("html, body").animate scrollTop: "0"
  $("#single.proyectos").removeClass "outof"
  $("body").addClass "single-project"
  $("header,#single.proyectos").addClass "scrolled"
  dato = $(this).data("project")
  event.preventDefault()
  $("#gallery").addClass "outofgallery"
  setTimeout (->
    openCurtain $("#gallery"), $(".proyecto[data-project='" + dato + "']")
  ), 450

$(".closeit,.work-link").click ->
  $("#single").addClass "outof"
  $("header,#single.proyectos").removeClass "scrolled"
  $("body").removeClass "single-project"
  closeCurtain $("#gallery"), $(".proyecto")
  $(".work-link").addClass "active"
  $(".contact-link").removeClass "active"

$(".contact-link").click (event) ->
  $("html, body").animate scrollTop: "0"
  $("#single.contacto").removeClass "outof"
  $("body").addClass "single-project"
  $("#single.contacto").addClass "scrolled"
  $("header").removeClass "scrolled"
  $("#gallery").addClass "outofgallery"
  setTimeout (->
    openCurtain $("#gallery"), $(".contacto .proyecto")
  ), 450
  $(".work-link").removeClass "active"
  $(".contact-link").addClass "active"
  $("#single.proyectos").addClass "outof"
  $("header,#single.proyectos").removeClass "scrolled"
  closeCurtain $("#single.proyectos"), $(".proyectos .proyecto")

$("#footer .icons a").click (event) ->
  event.preventDefault()
  $("#footer").toggleClass "openf"

$("li.next").click ->
  changeProject $(this), "next"

$("li.prev").click ->
  changeProject $(this), "prev"
