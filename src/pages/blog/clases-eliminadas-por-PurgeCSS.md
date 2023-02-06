---
layout: "../../layouts/PostLayout.astro"
title: "Rescatando clases eliminadas por PurgeCSS en proyectos con Sass y Bootstrap"
description: "En esta ocasión me tuve que adentrar en el código de Bootstrap 🤓 y descifrar cuales eran las clases afectadas para poder rescatar mis animaciones."
pubDate: "Oct 09 2022"
heroImage: "/blog/34534343.jpg"
badge: "NEW"
---


## Introducción al problema

SASS es genial, ademas de tener una sintaxis fácil de entender, scripts y herramientas ayudan a hacer todo más rápido, eficiente y escalable tu CSS, también **nos permite generar un único archivo css** donde se recoge todo el código. Es muy usado para trabajar  en complemento  de Frameworks como Bootstrap incluso con otras herramientas de estilos como puede ser Fontawesome.

El problema es que el **archivo generado casi siempre es enorme** ya que recoge todos los estilos existentes incluso los creados por nosotros mismos.

## PurgeCSS

A la solución de esto existen herramientas como **PurgeCSS**. Es un programa que recorre todo tu código y va 'purgando' el CSS que no es utilizado. Como resultado deja un minificado (min.css), muuuuucho mas pequeño que el archivo original.

## Problema

Lo que sucede es que hay elementos de Bootstrap como los **Carousels** que se ve afectada la animación al usar la herramientas de depuración de código como purgecss.

En esta ocasión me tuve que adentrar en el código de Bootstrap 🤓 y descifrar cuales eran las clases afectadas para poder rescatar mis animaciones.

En el caso del las clases de `.carousel-item` me percaté estas muestran un comentario con `rtl:begin:ignore`, el cual desconozco su intención, pero evidentemente herramientas como Purge lo ignoran por completo afectando nuestro código final.

A continuación de muestran las clases que fueron purgadas y no debían haber sido. *Válido aclarar que debe respetarse el orden en que se encuentran en el ejemplo ya que forman parte de la cascada de estilos.*

## Las clases afectadas son las siguientes:

```css
.carousel-item.active,
.carousel-item-next,

/* esta ya en el min.css*/
.carousel-item.active { /*nos sirve de guía*/
  display: block;
}
/* rtl:begin:ignore */
.carousel-item-next:not(.carousel-item-start),
.active.carousel-item-end {
  transform: translateX(100%);
}
  
.carousel-item-prev:not(.carousel-item-end),
.active.carousel-item-start {
  transform: translateX(-100%);
}

/* rtl:end:ignore */
.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}
.carousel-fade 
.carousel-item.active,
.carousel-fade 
.carousel-item-next.carousel-item-start,
.carousel-fade 
.carousel-item-prev.carousel-item-end {
  z-index: 1;
  opacity: 1;
}
.carousel-fade 
.active.carousel-item-start,
.carousel-fade 
.active.carousel-item-end {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-fade 
.active.carousel-item-start,
.carousel-fade 
.active.carousel-item-end {
    transition: none;
  }
}
  
.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #e0e0e0;
  text-align: center;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev,
.carousel-control-next {
    transition: none;
  }
}
.carousel-control-prev:hover, 
.carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #e0e0e0;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}
  
.carousel-control-prev {
  left: 0;
}
  
.carousel-control-next {
  right: 0;
}
  
.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}
```

## Qué ocurrió al final?

Al agregar este monolito de clases a nuestro min.css los carousel vuelven a funcionar como deberían 🙌.

Desconozco otras afectaciones que puedan haber en el output de PurgeCSS ya que no han sido de interés en mis desarrollos.

Happy coding!