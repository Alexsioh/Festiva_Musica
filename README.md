# Dato
- Cada vez que instalas una dependencia se crea sus compiladores en la carpeta .bin dentro de node_modules

- Al instalar una dependencia con npm i "Nombre de la dependencia", se escribe el nombre de la dependencia en el package.json dentro de dependencies y quiere decir cuales son las dependencias que SI necesitamos antes de subirlo al servidor. En el caso de SASS NO requiere que se suba al servidor ya que se compila a una hoja de estilos de css el cual si se sube al servidor, por ende SASS NO se requiere como una dependencia del proyecto, sino como una DEPENDENCIA DE DESARROLLO DEL PROYECTO, estos van en devDependencies dentro del package.json

- Package-lock.json contiene las dependencias de las dependencias, este documento no se modifica ya que se genera automaticamente

- Para guardar el archivo app.css, se puede guardar en la ruta dist/css o build/css, la carpeta build se conoce como un build de produccion, son los archivos que se sube al final

# npm init
- Para descargar package.json

# 'npm i --save-dev sass', o 'npm i -D sass'
- Para descargar SASS como DEPENDENCIA DE DESARROLLO DEL PROYECTO

# npm run sass
- Colocar el los scripts de package.json: "sass": "sass --watch src/scss:build/css"
indica un nuevo comando (npm run sass) para ejecutar sass, -watch para que cuando se agregue algun cambio lo realice en el app.css automaticamente. src/scss:build/css, busca la carpeta src/scss y selecciona el archivo .scss, luego transfiere los datos (:) a la carpeta build/css en el archivo app.css

# "type": "module"
- commonjs es la forma por default, pero el tipo module nos da soporte a los ES Modules, que es la forma mas moderna de exportar e importar funciones o paquetes en javascript

# npm i --save-dev gulp
- Para descargar Gulp como DEPENDENCIA DE DESARROLLO DEL PROYECTO

# gulpfile.js
- Crea funciones

# npm i --save-dev gulp-sass
- Instala las dependencias que nos permite conectar nuestro gulp file con sass

# _variables.scss
- Para colocar los custom properties

# @use '_variables' as v;
- Se coloca en app.scss para importar el archivo de variables .scss

# @use @import @forward
- Use lee y usa el codigo del documento que se va a usar, se puede colocar dos veces @use 'archivo', y no se carga dos veces el archivo, solo indica error. Puede usarse cuando se requiera namespace ('archivo' as a) para acceder a contenidos especificos
- Por otro lado, @import importa los datos del otro archivo y si se importa dos veces el mismo archivo se copia dos veces lo que genera codigo duplicado
- Por ultimo forward no permite la opcion de namespace ('archivo' as a), se puede usar cuando quieras todo el contenido de una hoja de estilos y no requieras namespace para acceder a contenidos especificos

# @mixin nombre-mixin
- Los mixins en SASS te van a permitir escribir código que pueda ser re-utilizado en tus hojas de estilos De esta forma la cantidad de clases o código repetido puede ser considerablemente menor. Para reutilizar el mixin se usar @include nombre-mixin

# Cambiamos en package.js 'gulp dev' a solo 'gulp'
- Ejecutara la funcion default y ejecutara en el orden que este escrito (js, css,dev), se podran ejecutar varias funciones gracias a importar {series}