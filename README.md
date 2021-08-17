# Trainee Javascript Bootcamp

## Introducción

### Objetivo
Durante el bootcamp vamos a construir pequeña web app que muestre resultados de videojuegos obtenidos mediante una API gratuita, a medida que cada integrante avance, se irán agregando funcionalidades con mayor complejidad.

Los problemas que deberán resolver para superar este challenge se pueden resolver con conocimientos básicos de cualquier lenguaje de programación llevado a JavaScript.

Se requiere también la toma de contacto de conceptos como:
- Manejo de Arrays / listas.
- Objetos JSON.
- HTTP Requests (fetch(), verbos)

Que deberán profundizar a medida que se avance con las tareas propuestas.

### Metodología de Trabajo
La metodología de trabajo es la misma que se utiliza en el día a día en Claw Studios.

- Metodologías ágiles para la gestión del proyecto.
- JIRA para el seguimiento de las tareas a realizar por cada uno.
- Git para el control de versión de los archivos en el repositorio de Github.
- Pull Requests (PR) para la revisión del código (Code reviews).
- Seguiremos el flujo de trabajo conocido como [Gitflow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow).

### Estructura del repositorio
Dentro de este repositorio podemos encontrar dos carpetas con proyectos separados.

    |- back-end
        |- src
    |- front-end
        |- src
            |- assets
            |- css
            |- js
	            |- vendor
		        |- app.js
			|- index.html
#### Front-end
La carpeta `front-end/src`, contiene nuestro proyecto de Front-End, es decir, la User Interface (UI) encargada de pedir los resultados de la API de videojuegos y mostrarlos.

El archivo `index.html` es el punto de inicio de nuestra web, este contiene el layout en HTML, importa los estilos CSS ubicados en la carpeta `src/css` y también importa los archivos Javascript necesarios para levantar el proyecto.

Los archivos Javascript se encuentran dentro de la carpeta `src/js`, dentro de ella podemos ver un archivo `app.js` sobre el cual trabajaremos en el bootcamp y una carpeta `vendor` que contiene dependencias de terceros (third party) para poder contar con algunas interacciones en nuestro boilerplate, ya que este boilerplate está basado en un template gratuito de Bootstrap.

Para extender el layout y agregar nuevas funciones a este proyecto, es recomendable que se guíen utilizando [la documentación de Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/), preferentemente la parte de [Layout (Containers, Grid y Columns)](https://getbootstrap.com/docs/5.0/layout/) y de [Componentes](https://getbootstrap.com/docs/5.0/components).

#### Back-end
Dentro de la carpeta `back-end`, encontrarán un archivo `package.json` que cuenta con datos del proyecto, su punto de entrada, sus dependencias y scripts. Este archivo es el archivo de configuración de un proyecto de node.js.

Dentro de la carpeta `src/` se encuentra nuestro punto de entrada a nuestro back-end, el archivo `app.js`

El proyecto ya tiene instalado [ExpressJS.](https://expressjs.com/es/starter/hello-world.html).

## Challenge
Vamos a construir una biblioteca de videojuegos que muestre los resultados obtenidos de la siguiente API: https://www.freetogame.com/api-doc, en ese link encontrarán los endpoints expuestos.

Los requerimientos específicos se encuentran cargados en la plataforma JIRA.