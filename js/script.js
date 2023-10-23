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

contactForm.addEventListener("submit", (event) =>{
  event.preventDefault()                          //para que el btn submit no refresque la pág
  contactForm.reset()                             //resetea los campos
})
