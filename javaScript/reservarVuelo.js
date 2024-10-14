let loggedInUser = localStorage.getItem("loggedInUser");
let cliente = JSON.parse(loggedInUser);

let maxPasajes=0;

const selectAerolineas = document.getElementById('selectAerolineas');

for (let aerolinea of aerolineas) {
        // Crear un nuevo elemento <option>
    let a = document.createElement('option');
    a.value = aerolinea.username;  // Asignar el valor del option
    a.text = aerolinea.nombre;     // Asignar el texto visible del option

        // Agregar la nueva opción al select
    selectAerolineas.appendChild(a);
}

function cargarRutas() {
    let selectAerolineas = document.getElementById("selectAerolineas"); // Select de aerolíneas
    let selectRutas = document.getElementById("selectRutas");           // Select de rutas

    // Obtener el nombre de la aerolínea seleccionada
    let nombreAerolinea = selectAerolineas.options[selectAerolineas.selectedIndex].value;
    console.log(nombreAerolinea);

    // Limpiar las opciones anteriores del select de rutas
    selectRutas.innerHTML = ""; 

    // Iterar sobre las rutas y agregar las que correspondan a la aerolínea seleccionada
    for (let ruta of rutas) {
        if (ruta.aerolinea == nombreAerolinea) {
            // Crear un nuevo elemento <option>
            let r = document.createElement('option');
            r.value = ruta.nombre;  // Asignar el valor del option
            r.text = ruta.nombre;   // Asignar el texto visible del option

            // Agregar la nueva opción al select de rutas
            selectRutas.appendChild(r);
        }
    }
}


function cargarVuelos() {
    let selectRutas = document.getElementById("selectRutas");           // Select de rutas
    let selectVuelos = document.getElementById("selectVuelos"); // Select de aerolíneas
    

    // Obtener el nombre de la aerolínea seleccionada
    let nombreRuta = selectRutas.options[selectRutas.selectedIndex].value;
    console.log(nombreRuta);

    // Limpiar las opciones anteriores del select de rutas
    selectVuelos.innerHTML = ""; 

    // Iterar sobre las rutas y agregar las que correspondan a la aerolínea seleccionada
    for (let v of vuelos) {
        if (v.ruta == nombreRuta) {
            // Crear un nuevo elemento <option>
            let r = document.createElement('option');
            r.value = v.nombre;  // Asignar el valor del option
            r.text = v.nombre;   // Asignar el texto visible del option

            // Agregar la nueva opción al select de rutas
            selectVuelos.appendChild(r);
        }
    }
}


function cargarDatosDelVuelo(){
    let selectVuelos = document.getElementById("selectVuelos");
    let nombreVuelo = selectVuelos.options[selectVuelos.selectedIndex].value;
    let vuelo = null;
    

    for (let v of vuelos) {
        if(v.nombre === nombreVuelo){
             vuelo = v;
        }
    }

    console.log(vuelo);
   

    

}


function cargarPasajesMaximos(){
    let selectVuelos = document.getElementById("selectVuelos");
    let nombreVuelo = selectVuelos.options[selectVuelos.selectedIndex].value;
    let selectedAsientos = document.getElementById("selectAsientos");
    let tipoAsiento = selectedAsientos.options[selectedAsientos.selectedIndex].value;

    let vuelo = null;
    

    for (let v of vuelos) {
        if(v.nombre === nombreVuelo){
             vuelo = v;
        }
    }

    console.log(vuelo);
    console.log(tipoAsiento);

    if(vuelo){
        

        let textoAsientos = document.getElementById("maxPasajes");
         pasajesPicker = document.getElementById("pasajes");

        if(tipoAsiento === "Turista"){
            textoAsientos.innerHTML = "Pasajes maximos: " + vuelo.cantidadTurista;
            pasajesPicker.max = vuelo.cantidadTurista;
            maxPasajes=vuelo.cantidadTurista;
        }else{
            textoAsientos.innerHTML = "Pasajes maximos: " + vuelo.cantidadEjecutivo;
            pasajesPicker.max = vuelo.cantidadEjecutivo;
            maxPasajes=vuelo.cantidadEjecutivo;
        }

    }
}

const pasajesInput = document.getElementById("pasajes");
const pasajesContainer = document.getElementById("pasajes-container");

pasajesInput.addEventListener("input", function() {
  
    pasajesContainer.innerHTML = "";

   
    const cantidadPasajes = parseInt(pasajesInput.value);

    if (cantidadPasajes === 1) {
        pasajesContainer.className = "grid-container grid-1";
    } else if (cantidadPasajes === 2) {
        pasajesContainer.className = "grid-container grid-2";
    } else if (cantidadPasajes >= 9) {
        pasajesContainer.className = "grid-container grid-3";
    }

  
    if ( maxPasajes >= cantidadPasajes > 0) {
        for (let i = 0; i < cantidadPasajes; i++) {
            // Crea un nuevo div para cada pasaje
            const pasajeDiv = document.createElement("div");
            pasajeDiv.className = "pasaje"; 
            pasajeDiv.innerHTML += `
            <label for="pasajero">Pasajero ${i+1}</label>
            <input type="text" id="pasaje-${i + 1}" placeholder="Nombre y apellido" required>`;


            pasajesContainer.appendChild(pasajeDiv);
        }
    }
});
