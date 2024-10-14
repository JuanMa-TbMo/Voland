let usuario = localStorage.getItem("loggedInUser");


if(usuario){
    usuario = JSON.parse(usuario)
}

let header = document.getElementById("main-header")
let table = document.querySelector(".table-container").querySelector("table")

if(usuario){
    

    header.insertAdjacentHTML('beforeend',
    `
        <div class="ses-container-logged" id="isLogged">
            <button class="user-btn" id = "botonNickname" onclick="toggleMenuUser()">${usuario.username}</button> 
                <div class="dropdown-menu-user">
                    <div onclick="location.href ='./consultar-usuarios.html'">Consultar Usuarios</div>
                    <div onclick="logout()">Cerrar sesion</div>
                    
                </div>
        </div>
    `)

    if (usuario.tipo == "Cliente"){

        table.insertAdjacentHTML('afterbegin',`
            <thead>
                <tr>
                    <th style="cursor: pointer;" onclick="location.href='./consulta-usuario.html'">Mi Perfil</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="cursor: pointer;" onclick="location.href='html/consultar-usuarios.html'">Consultar Usuarios</td>
                </tr>
                <tr>
                    <td style="cursor: pointer;" onclick="location.href ='./reservaVuelo.html' ">Reservar Vuelo</td>
                </tr>
                <tr>
                    <td style="cursor: pointer;" onclick="location.href ='./consultaReservaCliente.html' ">Consulta Reserva</td>
                </tr>
        `)

    }
    else if (usuario.tipo == "Aerolinea"){

        table.insertAdjacentHTML('afterbegin',`
            <thead>
                <tr>
                    <th style="cursor: pointer;" onclick="location.href='./consulta-usuario.html'">Mi Perfil</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="cursor: pointer;" onclick="location.href='./consultar-usuarios.html'">Consultar Usuarios</td>
                </tr>
                <tr>
                    <td style="cursor: pointer;" onclick="location.href ='./altaRutaVuelo.html' ">Nueva Ruta</td>
                </tr>
                <tr>
                    <td style="cursor: pointer;" onclick="location.href ='./altaVuelo.html' ">Nuevo Vuelo</td>
                </tr>
                <tr>
                    <td style="cursor: pointer;" onclick="location.href ='./consultaReservaCliente.html' ">Consulta Reserva</td>
                </tr>                    
        `)
    }

}

else{

    header.insertAdjacentHTML('beforeend',
    `
        <div class="dropdown" onclick="toggleMenu()">
            <div class="menu-icon">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>

            <div class="dropdown-content">
                <div onclick="window.location.href='./login.html'">Login</div>
                <div onclick="window.location.href='./registrar.html'">Register</div>
            </div>
        </div>

        <div class="ses-container" id ="notLogged">
            <button class="user-btn" id="btnLogin" onclick="location.href ='./login.html' ">Login</button> 
            <button class="user-btn" id="btnRegistrar" onclick="location.href ='./registrar.html' ">Registrar</button> 
        </div>
    `)

    table.insertAdjacentHTML('afterbegin',`
        
        <thead>
            <tr>
                <th>Visitante</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td style="cursor: pointer;" onclick="location.href='./consultar-usuarios.html'">Consultar Usuarios</td>
        </tr>
    
    `)
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function toggleMenu() {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.classList.toggle('active');
}
function toggleMenuUser() {
    const dropdown = document.querySelector('.dropdown-menu-user');
    dropdown.classList.toggle('active');
}
    
    
const container = document.querySelector('.vuelos-container');
const params = new URLSearchParams(window.location.search);
const vueloNombre = params.get('vueloSelected');
let nombreRuta = "";

vuelos.forEach(vuelo => {
  if (vuelo.nombre==vueloNombre)
{
  
    nombreRuta = vuelo.ruta;
  
  const vueloItem = document.createElement('div');
  vueloItem.classList.add('vuelo-item');

  vueloItem.innerHTML = `
  
    <img class="vuelo-img" src="../imagenes/avion.png">
    <h2 class="vuelo-nombre">${vuelo.nombre}</h2>
    <p class="vuelo-nombre"><b>Nombre:</b> ${vuelo.nombre}</p>
    <p class="vuelo-fecha"><b>Fecha:</b> ${vuelo.fecha}</p>
    <p class="vuelo-duracion"><b>Duracion:</b> ${vuelo.duracion}</p>
    <p class="vuelo-cantTurista"><b>Cantidad máxima asientos turistas:</b> ${vuelo.cantidadTurista}</p>
    <p class="vuelo-cantTurista"><b>Cantidad máxima asientos ejecutivos:</b> ${vuelo.cantidadEjecutivo}</p>
    <p class="vuelo-fechaAlta"><b>Fecha Alta:</b> ${vuelo.fechaAlta}</p>
  `;
  
  let aerolineaBtn = document.querySelector(".aerolinea-btn");
  aerolineaBtn.innerText = vuelo.Aerolinea;

  let rutaBtn = document.querySelector(".ruta-btn");
  rutaBtn.innerText = vuelo.ruta;

  container.appendChild(vueloItem);
}
});



function enviarDatos(){
  const url = `consulta-ruta.html?ruta=${encodeURIComponent(nombreRuta)}`;
  location.href=url;
};