//Extraer la funcion src y dest, src nos permite buscar los archivos fuentes y dest donde va ir lo compilado
import {src, dest, watch, series} from 'gulp' //series permite ejecutar multiples tareas

//importamos todas las funciones de sass y las colocamos en la variable dartSass
import * as dartSass from 'sass'

//Extraemos las dependencias de node_modules
import gulpSass from 'gulp-sass'

// gulpSass tiene que usar las dependencias de dartSass
// Compilamos sass utilizando las dependencias de gulpSass y le decimos donde encontraremos las dependencias de sass
const sass = gulpSass(dartSass)

// Va a tomar una copia de este archivo y lo va a mandar a build
export function js(done){
    src('src/js/app.js')  // toma el archivo
        .pipe(dest('build/js')) // lo manda a build js
    done()
}

export function css(done){
    src('src/scss/app.scss', {sourcemaps: true}) //src busca el origen del archivo scss
        //Para compilarlo usando la funcion de sass y almacenarlo
        //.on('error', sass.logError) le dice que verifique si hay errores y que avise en caso los haya
        .pipe(sass().on('error', sass.logError)) 
        .pipe(dest('build/css', {sourcemaps: '.'})) //para enviar al destino y sourcemaps para crear el map de css
    done()
}



//FUNCIONES PARA TERMINAR DEPLOYD 
export function html(done) {
    src('index.html') // puedes usar 'src/**/*.html' si hay más
        .pipe(dest('build'))
    done()
}

export function imagenes(done) {
    src('src/img/**/*')
        .pipe(dest('build/img'))
    done()
}

export function videos(done) {
    src('src/video/**/*')
        .pipe(dest('build/video'))
    done()
}





export function dev(done){
    //Va a estar pendiente a cambios que sucedan en la ruta escogida y cuando suceda llamara a la funcion css que esta arriba
    //** significa que va a buscar todos los cambios de archivos .scss
    watch('src/scss/**/*.scss', css)
    watch('src/scss/**/*.js', js)
    watch('*.html', html)
    watch('src/img/**/*', imagenes)
    watch('src/video/**/*', videos)
}







export const build = series(js, css, html, imagenes, videos)
export default series(js,css,dev)