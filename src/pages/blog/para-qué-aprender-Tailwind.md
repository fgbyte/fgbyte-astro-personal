---
layout: "../../layouts/PostLayout.astro"
title: "Para qué aprender Tailwind si ya se Sass & Bootstrap?"
description: "Hay sacrificios... y estos pesan en el resultado final. Concretamente en el DOM. Tailwind ha llevado al máximo conceptos como el Utility First..."
pubDate: "Feb 06 2023"
heroImage: "/blog/54353567.jpg"
badge: "NEW"
---


## SASS/Bootstrap

Hay que admitirlo, la combinación **Sass/Bootstrap** es brutal, para mi ha sido por mucho tiempo **el duo dinámico** 🤝.

Con Bootstrap estilamos rápido y responsive, con Sass usamos CSS de forma dinámica y personalizamos los componentes de Bootstrap en profundidad (📣 para los que dicen que con Bootstrap todo es cuadrado).

La grilla una vez la entiendes te cuesta desapegarse, confieso que muchas veces uso BS solo por la grilla. En fin que usarlos en conjunto es maravilloso y ahorras bastante tiempo.

### Pero no todo es color de 🌹

Hay sacrificios... y estos pesan en el resultado final. Concretamente en el DOM.

Este tiene que cargar con todos los estilos del Framework lo cual afecta el redimiendo, además Bootstrap tiene un `bundle.js` bastante pesado.
Encima el JavaScript que le ponemos al sitio😐

Si bien existen herramientas como [PurgeCSS](https://purgecss.com) que nos reducen considerablemente las clases no usadas, estas suele causar problemas (véase [Rescatando clases eliminadas por PurgeCSS en proyectos con Sass y Bootstrap](https://fgbyte.vercel.app/blog/clases-eliminadas-por-PurgeCSS))

## Tailwind

A pesar de tener nombre de película infantil, sorprende el buen trabajo y el nivel de adopción en la comunidad de desarrolladores.

Y no porque venga el [@fireship](https://twitter.com/fireship_dev/status/1567936669529305088?s=20&t=awQecDZHF90nKZ7teKRwnw)  y diga:
![](/blog/20230206121209.png)
Sino porque ha llevado al máximo conceptos como el Utility First...

###  Utility First 🙂

Concepto en donde las aplicaciones web se consideran composiciones de componentes dinámicos que van cambiando con el tiempo.

![](/blog/20230206123908.png)
>Pasamos de estilar paginas a crear sistemas de diseño.

Y los componentes son hechos por otros componentes.
```js
modal = media + button + card + ...
```

Lo cual permite clases de CSS reusables para otros proyectos.

### Volviendo al tema

Por supuesto que con Bootstrap podemos hacer componentes, por supuesto que con Sass tenemos total control de estos, pero en términos de velocidad y simplicidad las utility class de Tailwind nos abstraen complejidades y nos ahorran tiempo.

Además que uno de los principales problemas es **nombrar clases de forma correcta**. Si bien usamos **BEM** para darles orden, el CSS tiende a quedar muy personalizado y poco reutilizable.

Tailwind soluciona todo esto con sus clases de bajo nivel, que nos permiten detallar aspectos específicos de un componente en el mismo HTML; que si usáramos Bootstrap tendríamos que hacerlo necesariamente con Sass o CSS puro 👻.

### Y para mi lo más importante:

>*Tailwind hace que pasen al front solamente los estilos que se usaron en el desarrollo.*
🎉🎉🎉🎉

## Ventajas

- Adios PurgueCSS!!
- Adios `bundle.js`!!
- Hola DOM optimizado!!

## Desventajas

- Tendremos si o si un HTML cargado de clases. Lo que puede ser contraproducente en algunos casos. (ver👉[The fundamental problem: using Tailwind with WordPress page builders isn't scalable or maintainable](https://automaticcss.com/tailwind-page-builders-bad-idea/#toc-16300-1))

Pero Wordpress? Quién usa Wordpress cuando tienes Astro🔥🔥🔥
(Tema para otro post)

## Conclusión
Tailwind se considera un Framework CSS, pero llamémoslo por lo que realmente es:  
> Una API

Usándola podremos hacer un estilado bastante rápido y potente, además de obtener un DOM optimizado. 🙌

Happy coding!
