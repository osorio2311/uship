
//este codigo es paga que cuando pase el ratón encima de la imagen esta crezca
// Esperar a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos la imagen por su ID
    let imagen = document.getElementById('image');

    // Verificar si la imagen fue seleccionada correctamente
    if (imagen) {
        // Seleccionamos el contenedor de la imagen
        let contenedorImagen = imagen.parentElement;

        // Añadimos un event listener para el evento mouseover (cuando el ratón pasa por encima)
        contenedorImagen.addEventListener('mouseover', () => {
            // Escala el contenedor al 110%
            contenedorImagen.style.transform = 'scale(1.1)';
        });

        // Añadimos un event listener para el evento mouseout (cuando el ratón deja de estar encima)
        contenedorImagen.addEventListener('mouseout', () => {
            // Devuelve el contenedor a su tamaño original
            contenedorImagen.style.transform = 'scale(1)';
        });
    }
});




// Datos de los precios por kg y ubicación
let precios = {
    "HASTA 0.5KG": {
        "LOCAL": 4.88,
        "PROVINCIAL": 10.88,
        "COMUNIDAD AUTÓNOMA": 10.88,
        "NACIONAL": 14.88,
        "CEUTA Y MELILLA": 20.88,
        "BALEARES Y CANARIAS": 18.88,
        "EUROPA": 22.88,
        "RESTO DEL MUNDO": 27.88
    },
    "HASTA 5KG": {
        "LOCAL": 6.75,
        "PROVINCIAL": 9.75,
        "COMUNIDAD AUTÓNOMA": 12.75,
        "NACIONAL": 16.75,
        "CEUTA Y MELILLA": 22.75,
        "BALEARES Y CANARIAS": 20.75,
        "EUROPA": 24.75,
        "RESTO DEL MUNDO": 29.75
    },
    "HASTA 10KG": {
        "LOCAL": 8.49,
        "PROVINCIAL": 11.49,
        "COMUNIDAD AUTÓNOMA": 14.49,
        "NACIONAL": 18.49,
        "CEUTA Y MELILLA": 24.49,
        "BALEARES Y CANARIAS": 22.49,
        "EUROPA": 26.49,
        "RESTO DEL MUNDO": 31.49
    },
    "HASTA 20KG": {
        "LOCAL": 11.39,
        "PROVINCIAL": 14.39,
        "COMUNIDAD AUTÓNOMA": 17.39,
        "NACIONAL": 21.39,
        "CEUTA Y MELILLA": 27.39,
        "BALEARES Y CANARIAS": 25.39,
        "EUROPA": 29.39,
        "RESTO DEL MUNDO": 34.39
    }
};

// Obtener elementos del DOM
let selectKg = document.getElementById('selectKg'); // Select para seleccionar los kg
let selectUbicacion = document.getElementById('selectUbicacion'); // Select para seleccionar la ubicación
let botonCalcular = document.getElementById('botonCalcular'); // Botón para calcular el precio
let resultado = document.getElementById('resultado'); // Elemento donde se muestra el resultado
let horaActualElemento = document.getElementById('hora-actual'); // Elemento para mostrar la hora actual

// Función para llenar los desplegables con las opciones
function llenarDesplegables() {
    // Llenar desplegable de kg
    Object.keys(precios).forEach(kg => {
        let option = document.createElement('option'); // Crear un elemento opción
        option.textContent = kg; // Asignar el texto de la opción al tipo de kg
        selectKg.appendChild(option); // Añadir la opción al select de kg
    });

    // Llenar desplegable de ubicación con el primer tipo de kg
    let primerKg = Object.keys(precios)[0]; // Obtener el primer tipo de kg
    Object.keys(precios[primerKg]).forEach(ubicacion => {
        let option = document.createElement('option'); // Crear un elemento opción
        option.textContent = ubicacion; // Asignar el texto de la opción a la ubicación
        selectUbicacion.appendChild(option); // Añadir la opción al select de ubicación
    });
}

// Función para calcular el precio de envío
function calcularPrecio() {
    let kgSeleccionado = selectKg.value; // Obtener el valor seleccionado en el select de kg
    let ubicacionSeleccionada = selectUbicacion.value; // Obtener el valor seleccionado en el select de ubicación

    let precio = precios[kgSeleccionado][ubicacionSeleccionada]; // Obtener el precio según los kg y la ubicación seleccionada
    resultado.textContent = `El precio del envío es: ${precio} €`; // Mostrar el resultado en el elemento de resultado
}

// Agregar evento al botón de calcular para llamar a la función calcularPrecio
botonCalcular.addEventListener('click', calcularPrecio);






// Función para obtener la hora actual y mostrarla
function mostrarHoraActual() {
    let ahora = new Date(); // Crear un nuevo objeto de fecha y hora
    let hora = ahora.getHours().toString().padStart(2, '0'); // Obtener las horas en formato de dos dígitos
    let minutos = ahora.getMinutes().toString().padStart(2, '0'); // Obtener los minutos en formato de dos dígitos
    let segundos = ahora.getSeconds().toString().padStart(2, '0'); // Obtener los segundos en formato de dos dígitos
    horaActualElemento.textContent = `Hora actual: ${hora}:${minutos}:${segundos}`; // Mostrar la hora actual en el elemento de hora actual
}

// Mostrar la hora actual al cargar la página por primera vez
mostrarHoraActual();

// Actualizar la hora cada segundo
setInterval(mostrarHoraActual, 1000);

// Llenar los desplegables al cargar la página
llenarDesplegables();

//mensaje de bienvenida
document.addEventListener('DOMContentLoaded',function(){
    //crear elemento de mensaje de bienvenida
    const welcomeMessage =document.createElement('div');
    welcomeMessage.classList.add('welcome-message');
    welcomeMessage.textContent = '!Bienvenido/a nuestra página web!';
//agregar el mensaje de bienvenida al cuerpo del documento
document.body.appendChild(welcomeMessage);
//mostrar el mensaje de bienvenida
welcomeMessage.style.display= 'block';
//desaparecer despues de 3 segundos
setTimeout(function(){
    welcomeMessage.style.display ='none';
}, 3000); //3000 milisegundos
});


//ciclar imagen y salga la imagen del peso y precio
function mostrarImagen(){
    let boton = document.querySelector('boton1');
    let imagen = document.querySelector('.imagen1');
    if (imagen.style.display === 'none'){
        imagen.style.display = 'block'; // muestra la imagen
        boton.textContent= 'Ocultar imagen';//Cambia el texto del botón
    }else{
        imagen.style.display = 'none'; //oculta la imagen
        boton.textContent ='Descubre más sobre nuestros productos';//restaura el texto original del botón
    }
}






//validación formulario SEGUIMIENTO
window.onload=()=>{
    let form=document.querySelector("#registroForm");
    form.seguimiento.addEventListener("input",validarSeguimiento);
    form.reset.addEventListener("click",()=>{
        inputs=document.querySelectorAll("input");//es un array de todos los input del html
        inputs.forEach(element => {
            element.classList.remove("errorInput");//borra el borde rojo de los input que tengan error
            element.classList.remove("validoInput");        
        });
        let mensajeError=document.querySelectorAll(".msn");//eliminando los mensajes de error que hayan en el html
        mensajeError.forEach(mensaje=>{
            mensaje.textContent="";
        })
    })
}
function validarFormulario(){
    if(validarSeguimiento()){
        return true;
    }else{
        return false;
    }
}
function validarSeguimiento(){
    let seguimiento=document.querySelector("#seguimiento");
    let msnError=document.querySelector(".seguimientoError");
    if(!seguimiento.value.trim()){//si esta vacio... 
        seguimiento.classList.add("errorInput");
        seguimiento.classList.remove("validoInput");
        msnError.textContent="Número de Seguimiento es obligatorio";
        return false;
    }else if(!/^USP[a-zA-Z0-9]{7}$/.test(seguimiento.value)){
        seguimiento.classList.add("errorInput");
        seguimiento.classList.remove("validoInput");
        msnError.textContent="Debe empezar por USP y contener 10 dígitos";
        return false;
    }else{
        seguimiento.classList.remove("errorInput");
        seguimiento.classList.add("validoInput");
        msnError.textContent="";
        return true;
    }
}




//VALIDAR FORMULARIO CONTACTO
window.onload=()=>{
    let form=document.querySelector("#registroForm");
    form.nombre.addEventListener("input",validarNombre);
    form.apellido.addEventListener("input",validarApellido);
    form.telefono.addEventListener("input",validarTelefono);
    form.email.addEventListener("input",validarEmail);
    form.checkbox.addEventListener("input",validarCheckbox);
    form.reset.addEventListener("click",()=>{
        inputs=document.querySelectorAll("input");//es un array de todos los input del html
        inputs.forEach(element => {
            element.classList.remove("errorInput");//borra el borde rojo de los input que tengan error
            element.classList.remove("validoInput");        
        });
        let mensajeError=document.querySelectorAll(".msn");//eliminando los mensajes de error que hayan en el html
        mensajeError.forEach(mensaje=>{
            mensaje.textContent="";
        })
    })
}
function validarFormulario1(){
    if(validarNombre() && validarApellido() && validarEmail() && validarTelefono() && validarCheckbox){
        return true;
    }else{
        return false;
    }
}

function validarNombre(){
    let nombre=document.querySelector("#nombre");
    let msnError=document.querySelector(".nombreError");
    if(!nombre.value.trim()){//si esta vacio... 
        nombre.classList.add("errorInput");
        nombre.classList.remove("validoInput");
        msnError.textContent="El nombre es obligatorio";
        return false;
    }else if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)){
        nombre.classList.add("errorInput");
        nombre.classList.remove("validoInput");
        msnError.textContent="El nombre solo puede contener letras y espacio";
        return false;
    }else{
        nombre.classList.remove("errorInput");
        nombre.classList.add("validoInput");
        msnError.textContent="";
        return true;
    }

}

function validarApellido(){
    let apellido=document.querySelector("#apellido");
    let msnError=document.querySelector(".apellidoError");
    if(!apellido.value.trim()){//si esta vacio... 
        apellido.classList.add("errorInput");
        apellido.classList.remove("validoInput");
        msnError.textContent="El apellido es obligatorio";
        return false;
    }else if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido.value)){
        apellido.classList.add("errorInput");
        apellido.classList.remove("validoInput");
        msnError.textContent="El apellido solo puede contener letras y espacio";
        return false;
    }else{
        apellido.classList.remove("errorInput");
        apellido.classList.add("validoInput");
        msnError.textContent="";
        return true;
    }
}

function validarTelefono(){
    let telefono=document.querySelector("#telefono");
    let msnError=document.querySelector(".telefonoError");
    if(!telefono.value.trim()){
        telefono.classList.add("errorInput");
        telefono.classList.remove("validoInput");
        msnError.textContent="El teléfono solo puede contener números";
        return false;
    }else if (!/^[6789]\d{8}$/.test(telefono.value)){
        telefono.classList.add("errorInput");
        telefono.classList.remove("validoInput");
        msnError.textContent="El teléfono debe comenzar con [6/7/8/9] y de longitud 9 números";
        return false;
    }else{
        telefono.classList.remove("errorInput");
        telefono.classList.add("validoInput");
        msnError.textContent="";
        return true;
    }
}


function validarEmail(){
    let email=document.querySelector("#email");
    let msnError=document.querySelector(".emailError");
    if(!email.value.trim()){
        email.classList.add("errorInput");
        email.classList.remove("validoInput");
        msnError.textContent="El email es obligatorio";
        return false;
    }else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)){
        email.classList.add("errorInput");
        email.classList.remove("validoInput");
        msnError.textContent="El formato de email es erroneo";
        return false;
    }else{
        email.classList.remove("errorInput");
        email.classList.add("validoInput");
        msnError.textContent="";
        return true;
    }

}





