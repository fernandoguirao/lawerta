/*
Cada objeto tiene
Título
Subtítulo
Texto
Imágenes (infinitas)
Fecha
Etiquetas (infinitas)
*/



function works(id,title,subtitle,text,images,date,tags) {
  this.id=id;
  this.title=title;
  this.subtitle=subtitle;
  this.text=text;
  this.images=images;
  this.date=date;
  this.tags=tags;
}

var work0001 = new works (1,"Longbearded","Proyecto","Hello, world","http://google.com","28/05/2013","ilustraciones");

