
let information = document.getElementById("information");

let usuarioIngresado = localStorage.getItem("loggedInUser"); 
let usuario = JSON.parse(usuarioIngresado); 
let tipo = usuario.tipo;
let infoTextBox = document.getElementById("information");


function togglePerfil(){

    if(tipo=="Aerolinea"){

        let div1= document.querySelector(".info-user-container");
        div1.innerHTML = '';
        const insert = document.createElement('div');
        insert.classList.add('infoAerolina');
        insert.innerHTML =
            `   
            <p><b>Nickname: </b>${usuario.username}</p>
            <p><b>Nombre: </b>${usuario.nombre}</p>
            <p><b>Email: </b>${usuario.correo}</p>
            <p><b>Sitio Web: </b>${usuario.paginaWeb}<p>
            <p><b>Descripcion: </b>${usuario.descripcionGeneral}</p>
            `
        div1.appendChild(insert);
    }

    if(tipo=="Cliente"){

        let div1= document.querySelector(".info-user-container");
        div1.innerHTML = '';
        const insert = document.createElement('div');
        insert.classList.add('infoAerolina');
         insert.innerHTML =
        `   
        <p><b>Nickname: </b>${usuario.username}</p>
        <p><b>Nombre: </b>${usuario.nombre}</p>
        <p><b>Apellido: </b>${usuario.apellido}</p>
        <p><b>Email: </b>${usuario.correo}</p>
        <p><b>Fecha de Nacimiento: </b>${usuario.fechaNacimiento}<p>
        <p><b>Tipo de Documento: </b>${usuario.tipo}</p>
        <p><b>Número de Documento: </b>${usuario.nroDoc} </p>
        `
        div1.appendChild(insert);

    }


}

function toggleRutas(){
    let div1= document.querySelector(".info-user-container");
    div1.innerHTML = '';
    const insert = document.createElement('div');
    insert.classList.add('infoAerolina');
    let rutas = usuario.rutas;
    rutas.forEach(ruta => {
        insert.innerHTML += `<p><b>Ruta: </b>${ruta}</p>`
    });

    div1.appendChild(insert);



}

if(tipo === "Aerolinea"){
    // {"username":"zfly","nombre":"ZuluFly","password":"12345","correo":"zfly@hotmail.com","tipo":"Aerolinea","descripcionGeneral":"Descripcion zfly","paginaWeb":"https://www.zfly.com"}
    document.getElementById("nombre").innerText = usuario.nombre;
    document.getElementById("nickname").innerText = usuario.username + " / " + usuario.correo;
    let descripcionGeneral = usuario.descripcionGeneral;
    let paginaWeb = usuario.paginaWeb;
    let div1=document.querySelector(".aero-perfil-container");
    div1.innerHTML+= `<button class="user-btn " onclick="toggleRutas()" id="isLoggedAerolinea">Rutas</button> `
  
   
    

}else if(tipo === "Cliente") {
    //{"username":"carlos","password":"12345","correo":"carlos@hotmail.com",
    //"tipo":"Cliente","apellido":"Perez","fechaNacimiento":"14/01/2004","nacionalidad":"Uruguay","tipoDocumento":"C.I","nroDoc":"12345678910"}
    document.getElementById("nombre").innerText = usuario.nombre + " "+ usuario.apellido;
    document.getElementById("nickname").innerText = usuario.username + " / " + usuario.correo;

   
    
    let correo = usuario.correo;
    let apellido = usuario.apellido;
    let fechaNacimiento = usuario.fechaNacimiento;
    let nacionalidad = usuario.nacionalidad;
    let tipoDoc = usuario.tipoDocumento;
    let nroDoc = usuario.nroDoc;




}