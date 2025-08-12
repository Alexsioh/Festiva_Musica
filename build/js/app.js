document.addEventListener('DOMContentLoaded',()=>{
    
    navegacionFija()
    crearGaleria()
    resaltarEnlace()
    scrollNav()
})

//Funcion para mantener la funcion fija
function navegacionFija() {
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    window.addEventListener('scroll', ()=>{
        //getBoundingClientRect() permite ver la distancia del la vista de la pagina hacia el inicio
        //si es menos a 1 significa que ya pasamos el inicio
        if(sobreFestival.getBoundingClientRect().bottom<1){
            header.classList.add('fixed')
        }
        else{
            header.classList.remove('fixed')
        }
    })
}

function crearGaleria(){
    const CANTIDAD_IMAGENES = 16
    const galeria = document.querySelector('.galeria-imagenes')
    for(let i=1;i<=CANTIDAD_IMAGENES;i++){
        const imagen = document.createElement('IMG')
        imagen.src= `img/gallery/full/${i}.jpg`
        imagen.alt = `Imagen galeria`

        //Event handler
        imagen.onclick = function (){
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i){

    const imagen = document.createElement('IMG')
    imagen.src= `img/gallery/full/${i}.jpg`
    imagen.alt = `Imagen galeria`


    //Generar modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal

    //Boton cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal

    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)
    
    //Agregar en el HTML
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden') //para habilitar el hidden y deshabilitar el scroll 
    body.appendChild(modal)
}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')
    setTimeout(()=>{  //haremos que cierre lentamente el modal como animacion
        modal?.remove()  // pregunta si modal existe entonces eliminalo
        
        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden') //para volver a activar el scroll eliminando el hidden

    }, 300)
    
}

function resaltarEnlace(){
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        sections.forEach(section => {

            //offsetTop toma la distancia entre la parte superior de ese section con su elemento padre (body en este caso)
            const sectionTop = section.offsetTop

            //Cuantos pixeles mide el section de alto en el navegador
            const sectionHeight = section.clientHeight

            //scrollY detecta El scroll de arriba a abajo
            //que parte del navegador ocupa mas espacio
            if(window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual = section.id
            }       
        })
        navLinks.forEach(link=>{
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual){
                link.classList.add('active')
            }
        })
    })
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach(link=>{
        link.addEventListener('click', e =>{
            e.preventDefault()// Para evitar que al hacer click haga scroll por default para poder manipularlo nosotros
            //e.target nos muestra los atributos del link para usarlo comoselectores
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior:'smooth'})
        })
    })
}