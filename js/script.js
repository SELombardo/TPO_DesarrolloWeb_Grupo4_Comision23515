// MENU RESPONSIVE

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


/* TARJETAS ACTIVIDADES */

const containerActiv = document.querySelector(".containerActiv");

fetch("../database.json") //Solicita el archivo .json mediante la función fetch()
  .then((response) => response.json()) //Cuando se reciba una respuesta (response) de fetch, convierte esa respuesta a formato JSON mediante la función .json().
  .then((data) => {
    //Cuando la conversión a JSON se complete, ejecuta una función que recibe el objeto JSON en formato JavaScript como argumento.
    for (const actividad of data) {
      //Bucle de iteración
      containerActiv.innerHTML +=
        //Crea elementos HTML en el documento y los agrega al contenedor productContainer
        ` 
            <div class="cardActiv"> 
                <div class="face front">
                    <img src=${actividad.img} alt="imágen de ejercitación ${actividad.actividad}">
                    <h3>${actividad.actividad}</h3>
                </div>   
                <div class="face back">
                    <h3>${actividad.actividad}</h3>
                    <p>${actividad.días}</p>
                    <p>${actividad.horarios} h</p>    
                </div>
            </div>
            `;
    }
  });

/* SCRIPT FORMULARIO CONTACTO */

const formulario = document.getElementById("contactForm");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;

  if (nombre.length < 4) {
    alert("Por favor, ingrese su nombre.");
    return false;
  }
  if (apellido.length < 4) {
    alert("Por favor, ingrese su apellido.");
    return false;
  }

  if (email.length < 4) {
    alert("Por favor, ingrese su correo electrónico.");
    return false;
  }
  if (mensaje.length < 4) {
    alert("Por favor, ingrese su mensaje");
    return false;
  }

  formulario.reset();

  return alert("El formulario fue enviado correctamente");
});
