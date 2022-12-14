---
layout: "../../layouts/PostLayout.astro"
title: "Rescatando clases eliminadas por PurgeCSS en projectos con Sass y Bootstrap"
description: "En esta ocaci贸n me tuve que adrentrar en el c贸digo de Bootstrap 馃 y descifrar cuales eran las clases afectadas para poder rescatar mis animaciones."
pubDate: "Oct 09 2022"
heroImage: "/blog/34534343.jpg"
badge: "NEW"
---


## Introducci贸n al problema

SASS es genial, ademas de tener una sintaxis f谩cil de entender, scripts y herramientas ayudan a hacer todo m谩s r谩pido, eficiente y escalable tu CSS, tambi茅n **nos permite generar un unico archivo css** donde se recoge todo el c贸digo. Es muy usado para trabajar  en complemento  de Frameworks como Bootstrap incluso con otras herramientas de estilos como puede ser Fontawesome.

El problema es que el **archivo generado casi siempre es enorme** ya que recoge todos los estilos existentes incluso los creados por nosotros mismos.

## PurgeCSS

A la solicion de esto existen herramientas como **PurgeCSS**. Es un programa que recorre todo tu c贸digo y va 'purgando' el CSS que no es utilizado. Como resultado deja un minificado (min.css), muuuuucho mas peque帽o que el archivo original.

## Problema

Lo que sucede es que hay elementos de Bootstrap como los **Carousels** que se ve afectada la animaci贸n al usar la herramientas de depuraci贸n de c贸digo como purgecss.

En esta ocaci贸n me tuve que adrentrar en el c贸digo de Bootstrap 馃 y descifrar cuales eran las clases afectadas para poder rescatar mis animaciones.

En el caso del las clases de `.carousel-item` me percat茅 estas muestran un comentario con `rtl:begin:ignore`, el cual desconozco su intenci贸n, pero evidentemente herramientas como Purge lo ignoran por completo afectando nuestro codigo final.

A continuacion de muestran las clases que fueron purgadas y no debian haber sido. *V谩lido aclarar que debe respetarse el orden en que se encuentran en el ejemplo ya que forman parte de la cascada de estilos.*

## Las clases afectadas son las siguientes:

```css
.carousel-item.active,
.carousel-item-next,

/* esta ya en el min.css*/
.carousel-item.active { /*nos sirve de guia*/
聽 display: block;
}
/* rtl:begin:ignore */
.carousel-item-next:not(.carousel-item-start),
.active.carousel-item-end {
聽 transform: translateX(100%);
}
  
.carousel-item-prev:not(.carousel-item-end),
.active.carousel-item-start {
聽 transform: translateX(-100%);
}

/* rtl:end:ignore */
.carousel-fade .carousel-item {
聽 opacity: 0;
聽 transition-property: opacity;
聽 transform: none;
}
.carousel-fade 
.carousel-item.active,
.carousel-fade 
.carousel-item-next.carousel-item-start,
.carousel-fade 
.carousel-item-prev.carousel-item-end {
聽 z-index: 1;
聽 opacity: 1;
}
.carousel-fade 
.active.carousel-item-start,
.carousel-fade 
.active.carousel-item-end {
聽 z-index: 0;
聽 opacity: 0;
聽 transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
聽 .carousel-fade 
.active.carousel-item-start,
.carousel-fade 
.active.carousel-item-end {
聽 聽 transition: none;
聽 }
}
  
.carousel-control-prev,
.carousel-control-next {
聽 position: absolute;
聽 top: 0;
聽 bottom: 0;
聽 z-index: 1;
聽 display: flex;
聽 align-items: center;
聽 justify-content: center;
聽 width: 15%;
聽 padding: 0;
聽 color: #e0e0e0;
聽 text-align: center;
聽 background: none;
聽 border: 0;
聽 opacity: 0.5;
聽 transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
聽 .carousel-control-prev,
.carousel-control-next {
聽 聽 transition: none;
聽 }
}
.carousel-control-prev:hover, 
.carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
聽 color: #e0e0e0;
聽 text-decoration: none;
聽 outline: 0;
聽 opacity: 0.9;
}
  
.carousel-control-prev {
聽 left: 0;
}
  
.carousel-control-next {
聽 right: 0;
}
  
.carousel-control-prev-icon,
.carousel-control-next-icon {
聽 display: inline-block;
聽 width: 2rem;
聽 height: 2rem;
聽 background-repeat: no-repeat;
聽 background-position: 50%;
聽 background-size: 100% 100%;
}
```

## Qu茅 ocurri贸 al final?

Al agregar este monolito de clases a nuestro min.css los carousel vuelven a funcionar como deberian 馃檶.

Desconozco otras afectaciones que puedan haber en el output de PurgeCSS ya que no han sido de interes en mis desarrollos.

Happy coding!