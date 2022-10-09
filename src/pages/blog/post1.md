---
layout: "../../layouts/PostLayout.astro"
title: "Cómo configurar multiples colaboradores en tu repo de Github y trabajar en equipo"
description: "El dueño del repositorio debe darle acceso. Pasos para añadir collaboradores:"
pubDate: "Oct 08 2022"
heroImage: "/blog/54353563.jpg"
badge: "NEW"
---

# 1- Introducción a Github Collaborators
Lo primero que hace el nuevo collaborator es clonar el repo con el que va a trabajar. Al ser el repo  publico no le va a pedir usuario ni password.

👀 pero una cosa es que puedas clonar un repo y otra es que puedas hacerle push asi como asi.

Si no estas permitido como usuario con pass incluido te da un "403" y permiso denegado de hacerle push en consola.

## El owner del repositorio debe darte acceso

### Pasos para añadir collaboradores

1. Settings del repo
2. Collaborators
3. Add collaborator:

 - (el user debe tener un email publico en su perfil para ser encontrados por otros en Github)
 - (si quiere mantener su email priv, debe enviarle su username)

4. Ya puede el colaborador enviar Pull Requests libremente al repositorio.

## Importante

### Los cambios de los colaboradores deben hacerse en ramas diferentes

Tanto el jefe como los collaborators debe trabajar en diferentes ramas de desarrollo, los cambios aprobados son los que se le hacen merge a master y **Master** es la version definitiva.

---

# 2- Pull Requests (PR) entre Collaborators

## Que son y cuando se usan?

El pull request (P.R) es un estado intermedio antes de enviar una caracterisitica (**feature**) a la rama master con un merge.

Permite que otros miembros del equipo puedan ver los cambios hechos y si les son buenos, se aprueban.

Al aprobarlos ejecutan el merge, pero OJO no a master, en el Server de Producción; sino a un server de pruebas en una rama de desarrollo.

Para esto utilizan un **server de pruebas** en con una rama llamada "**stagin develeop**" (o simplemente **develop**) para cualquier cosa que se vaya a romper, no se rompa en **production**.

![graph](/blog/20210928115051.png "Graph")

Una vez que se prueba en **develop** se fusionan los cambios con **master** con otro P.R.

*Al aprobarse este, entonces los cambios si pasan a produccion.*

La persona que se encarga de hacer esto es el lider del equipo o un DevOp

## Utilizando los P.R

Suponinedo que tenemos que corregir un error, (es buena practica crear una rama para esto llamada **bug-fix**, **fix-typo**, etc)

- Creamos un branch **fix-typo** y nos movemos a esa rama.

```shell
git branch fix-typo
git checkout fix-typo
```

- Arreglamos los errores y hacemos commit en **fix-typo** de los cambios hechos.

```shell
git add .
git commit -am "commit description"
```

- Hacemos push del branch **fix-typo** a github.

```shell
git push origin fix-typo
```

## Debatiendo sobre el P.R

El P.R no ejecuta el Merge de por si, simplemente describe que es lo que esta pasando, para que pueda alguien revisarlo  y ejecutarlo.

- Lo importante es enviarlo al equipo para que lo revise.
- Se puede asignar a alguien a revisar el P.R.

Entonces se pueden formar una conversacion acerca del PR con el fin de que este sea lo mas bueno al final.

![platzi image](/blog/20210928180707.png " ")

Los cambios aprobados se marcan con un check del Reviewer y entonces esta listo todo para hacer el Merge.

![platzi image](/blog/20210928181317.png " ")

El Merge se confirma como un commit en el repositorio.
![platzi image](/blog/20210928181408.png " ")

Despues de hacerse el Merge te la opcion de borrar el branch (ya que era un fix y no es bueno llenarse de branches).
![platzi image](/blog/20210928181500.png " ")

## Que sucedio al final?

Se hizo el Merge y tus cambios fueron agregados a la rama **master**  en producción 🙌.

*Recursos: Curso Git-Github, platzi.com*