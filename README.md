# IMDB Reseñas, Ratings y más

Base de datos en línea que contiene información, reseñas y rating sobre películas.

## Capturas de pantalla

* **Pantalla de inicio:**
![Pantalla de inicio](/images/PantallaInicio.jpg)

* **Búsqueda:**
![Búsqueda](/images/Busqueda.jpg)

* **Póster de película, reseñar y tráiler:**
![Resultados](/images/Resultado.jpg)

## Funcionalidades

* **Buscador:** Elige la película.
* **Página Principal:** Muestra las tarjetas de las películas populares en ese
 momento
* **Tarjeta de la película:** Esta muestra el poster de la misma, su reseña y trailer.

## Desarrollo de la página
Esta se desarrolló en diferentes archivos que se describirán a continuación:

* **App.jsx** crea la función App, donde se utiliza lo siguiente:
* **useState** para crear la constante de las películas
* **useState** para crear la búsqueda de las películas
* **useState(null)** para dejar seleccionar la película
* **useState(false)** para poder abrir el Modal
* **useEffect** para poder extraer las películas del API con un async, hay un if debajo de eso que es para buscar dentro de toda la base de datos la película que se ponga en el buscador
* **MovieList.jsx** es el que aparece en la pantalla principal, crea una función que
 muestra la lista de tarjetas de las películas, crea un buscador en la parte superior,
 las que se muestran al abrir son las populares que hay en este momento.
* **MovieCard.jsx** crea la tarjeta que se muestra, importa el póster, pone el nombre de
 la película debajo y al darle click abrirá una pantalla con la reseña de la película.
 ese archivo se llama MovieModal.jsx por que lo que abre es un modal
* **MovieModal.jsx** esta función muestra el modal (pantalla superpuesta), contiene el
 poster,la reseña de la película , el trailer y un botón de cerrar la pantalla.
* **Footer.jsx** esta función agrega los nombres de los integrantes al final de la pantalla.
 "Programa realizado por Veronica, Pilar, Itzel y Ricardo"

## Instrucciones de uso

Coloca este link en tu navegador https://imdb-smoky-alpha.vercel.app/ y busca tu
 película favorita.

## Dependencias

* API: https://api.themoviedb.org/3/movie/popular, realiza peticiones de la
 información

## Tecnologías utilizadas

* **React:** Estructura página web y lógica de funciones aplicadas a la misma.
* **Bootstrap:** Estilos visuales de la interfaz.
* **API:** Para realizar peticiones de la información
* **Vite:** Entorno de desarrollo
* **Vercel:** Herramienta de despliegue de la app en la nube 

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o deseas agregar nuevas funcionalidades, por favor, crea el cambio dentro de react y envía un pull
 request.
 rickyroses.github.io/IMDB

## Licencia
Pendiente.

## Información adicional
-Revisa el archivo pdf "Presentación-ProyectoIMDB"

## Autores

* **Ricardo Leon** (Desarrollador): Desarrollo de la interfaz frontend y la integración con el backend.
* **Itzel Quezada** (Desarrolladora y Diseñadora): Diseño de la interfaz de usuario y la experiencia del usuario y backend.
* **Pilar Mondragón** (Desarrolladora): Desarrollo de la interfaz frontend y la integración con el backend.
* **Verónica Lira** (Desarrolladora): Desarrollo de la interfaz frontend y la integración con el backend.

## Demostración
[(https://imdb-smoky-alpha.vercel.app/)]



¡Descubre las funcionalidades del proyecto! 
