let loggedInUser = localStorage.getItem("loggedInUser");

let select = document.querySelector(".select-ruta");

if (loggedInUser) { 
    let user = JSON.parse(loggedInUser); 
    let rutas = user.rutas;

    rutas.forEach(ruta => {
        select.innerHTML+= `<option> ${ruta}</option>`;
    });
}
