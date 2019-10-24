# HacktoberFest Sevilla 2019 - Scope.ink & AOF

Bienvenidos al repositorio del Hacktoberfest Sevilla 2019, un evento organizado por [Scope.ink](https://scope.ink) y [Andalucía Open Future](https://andalucia.openfuture.org/)!

En este repositorio vamos a hacer nuestra primera cotribución al Hacktoberfest 2019. 

Lo primero que vamos a hacer es un **fork** de este repositorio para hacer nuestra primera contribución.

### 1. Ve a la pestaña de arriba a la derecha, donde pone *Fork* y pulsa en ella!

### 2. Luego, abre tu consola y escribe 

`git clone https://github.com/tusuario/hacktoberfestgifs`

Se creará un nuevo directorio en tu ordenador. 

### 3. Accede al repositorio creado con el comando

`cd hacktoberfestgifs`

### 4. Crea una rama en la que empezar a trabajar. Usa el comando

`git checkout -b nombre-de-la-rama`

### 5. Haz tus cambios en el localhost y añádelos a tu nueva rama con el comando
Los cambios que debes hacer son:
Crea un archivo en el directorio *names* que sea tunombre.js
En el debes incluir
~~~
        export const tu nombre = {
            "name": "Tu nombre",  
            "skills": "El lenguaje de programación que mejor domines", 
            "gif": "La URL de un gif que te guste"

        }
        export default *tunombre*
~~~

Por ejemplo este es el mío
~~~
        export const maria = {

            "name": "Mariluz",
            "skills": "JavaScript",
            "gif": "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif"
        }

        export default maria
~~~
No olvides de incluirte en el index.js para poder exportar tus datos
~~~
        export * from './maria'

        export * from './paco'

        export * from './tunombre'
~~~
Ya has terminado de modificar! ahora haz: 

`git add .`

### 6. Haz commit de tus cambios para subirlos al **Pull-Request** con el comando

`git commit -m "descripción de la tarea"`

### 7. Pushea tus cambios al PR con el comando

`git push origin nombre-de-la-rama`

### 8. En el repo principal en GitHub, (*osea, éste*) aparecera un botón verde con

`NEW PULL REQUEST`

## 9. Dale al botón para crear tu PR!
