---
layout: "../../layouts/PostLayout.astro"
title: "Rescatando clases eliminadas por Purguecss en projectos con Bootstrap"
description: "En esta ocación me tuve que adrentrar en el código de Bootstrap 🤓 y descifrar cuales eran las clases afectadas para poder rescatar mis animaciones."
pubDate: "Oct 09 2022"
heroImage: ""
badge: "NEW"
---


Hey devs, **purguecss** es una herramienta super util para reducir el tamaño del codigo CSS sobre todo si se trabaja con SASS y Frameworks grandes o relativamente grandes como  Bootstrap.

Sass nos permite generar un unico archivo (min.css) con todo el codigo del Framework incluso otras herramientas de estilo como puede ser Fontawesome.

Lo que sucede es que hay elementos de Bootstrap como los Carouseles que se ve afectada la animacion al usar la herramienta de purgecss.

En esta ocación me tuve que adrentrar en el código de Bootstrap 🤓 y descifrar cuales eran las clases afectadas para poder rescatar mis animaciones.

En el caso del elemento `.carousel` me percaté estas muestran un comentario con `rtl:begin:ignore`, desconozco su intencion, pero evidentemente herramientas como Purge lo ignoran por completo afectando el codigo final.

## Las clases afectadas son las siguientes:

```css
.carousel-item.active,
.carousel-item-next,

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
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  z-index: 1;
  opacity: 1;
}
.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
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
.carousel-control-prev:hover, .carousel-control-prev:focus,
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

Al agregar este monolito de clases a nuestro min.css los carousel vuelven a funcionar como deberian 🙌

Desconozco otras afectaciones que puedan haber en el output de PurgueCSS ya que no han sido de interes en mis desarrollos.

Happy coding!