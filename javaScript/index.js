//////////////////////////////////////////////////////////// DATA ////////////////////////////////////////////////////////////

let usuario = localStorage.getItem("loggedInUser");
const container = document.querySelector('.Rv-container');


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
                    <div onclick="location.href ='html/consultar-usuarios.html'">Consultar Usuarios</div>
                    <div onclick="logout()">Cerrar sesion</div>
                    
                </div>
        </div>
    `)

    if (usuario.tipo == "Cliente"){

        table.insertAdjacentHTML('afterbegin',`
            <thead>
                <tr>
                    <th style="cursor: pointer;" onclick="location.href='html/consulta-usuario.html'">Mi Perfil</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="cursor: pointer;" onclick="location.href='html/consultar-usuarios.html'">Consultar Usuarios</td>
                </tr>
                <tr>
                    <td style="cursor: pointer;" onclick="location.href ='html/reservaVuelo.html' ">Reservar Vuelo</td>
                </tr>
                <tr>
                    <td style="cursor: pointer;" onclick="location.href ='html/consultaReservaCliente.html' ">Consulta Reserva</td>
                </tr>
        `)

    }
    else if (usuario.tipo == "Aerolinea"){

        table.insertAdjacentHTML('afterbegin',`
            <thead>
                <tr>
                    <th style="cursor: pointer;" onclick="location.href='html/consulta-usuario.html'">Mi Perfil</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="cursor: pointer;" onclick="location.href='html/consultar-usuarios.html'">Consultar Usuarios</td>
                </tr>
                <tr>
                    <td style="cursor: pointer;" onclick="location.href ='html/altaRutaVuelo.html' ">Nueva Ruta</td>
                </tr>
                <tr>
                    <td style="cursor: pointer;" onclick="location.href ='html/altaVuelo.html' ">Nuevo Vuelo</td>
                </tr>
                <tr>
                    <td style="cursor: pointer;" onclick="location.href ='html/consultaReservaCliente.html' ">Consulta Reserva</td>
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
                <div onclick="window.location.href='html/login.html'">Login</div>
                <div onclick="window.location.href='html/registrar.html'">Register</div>
            </div>
        </div>

        <div class="ses-container" id ="notLogged">
            <button class="user-btn" id="btnLogin" onclick="location.href ='html/login.html' ">Login</button> 
            <button class="user-btn" id="btnRegistrar" onclick="location.href ='html/registrar.html' ">Registrar</button> 
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
            <td style="cursor: pointer;" onclick="location.href='html/consultar-usuarios.html'">Consultar Usuarios</td>
        </tr>
    
    `)
}
  
rutas.forEach(ruta => {
  
  const rvItem = document.createElement('div');
  rvItem.classList.add('rv-item');
  rvItem.onclick = function(){
    const url = `html/consulta-ruta.html?ruta=${encodeURIComponent(ruta.nombre)}`;
    location.href=url;
  }

  rvItem.innerHTML = `
    <img class="rv-img" src="${ruta.img}" >
    <h2 class="rv-title">${ruta.descripcionCorta}</h2>
    <p class="rv-descripcion">${ruta.descripcion}</p>
  `;


  container.appendChild(rvItem);
});


//////////////////////////////////////////////////////////// FUNCTIONS ////////////////////////////////////////////////////////////

function toggleMenu() {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.classList.toggle('active');
}
function toggleMenuUser() {
    const dropdown = document.querySelector('.dropdown-menu-user');
    dropdown.classList.toggle('active');
}

function handleAction(action) {
    if (action === 'login') {
        location.href='login.html'; 
    } 
    if (action === 'register') {
        location.href ='registrar.html';
    }
    
}


