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


const params = new URLSearchParams(window.location.search);
const rutaNombre = params.get('ruta');

const rutasContainer = document.querySelector('.rutas-container');
const rutaAcargar = document.createElement('div');
rutaAcargar.classList.add('vuelo-item');
const vuelosContainer = document.querySelector('.vuelos');

rutas.forEach(ruta => {
    if (ruta.nombre == rutaNombre) {
        rutaAcargar.innerHTML = `
            <img class="ruta-img" src="${ruta.img}" alt="${ruta.nombre}">
            <h2 class="ruta-nombre">${ruta.descripcionCorta}</h2>
            <p class="ruta-descripcion"><b>Descripción: </b>${ruta.descripcion}</p>
            <p class="ruta-origen"><b>Ciudad Origen:</b>${ruta.origen}</p>
            <p class="ruta-destino"><b>Ciudad Destino:</b>${ruta.destino}</p>
            <p class="ruta-hora"><b>Hora:</b>${ruta.hora}</p>
            <p class="ruta-turista"><b>Costo Turista (USD): </b>${ruta.turista}</p>
            <p class="ruta-ejecutivo"><b>Costo Ejecutivo (USD):</b>${ruta.ejecutivo}</p>
            <p class="ruta-extra"><b>Costo Equipaje Extra (USD):</b>${ruta.equipaje}</p>
            <p class="ruta-alta"><b>Fecha de Alta:</b>${ruta.alta}</p>
            <p class="ruta-estado"><b>Estado: </b>${ruta.estado}</p>
            <p class="ruta-categorias"><b>Categorias: </b> ${ruta.categorias}</p>
        `;
        
        
        ruta.vuelos.forEach(vuelo=> {
            url = `consulta-vuelo.html?vueloSelected=${encodeURIComponent(vuelo)}`;
            vuelosContainer.innerHTML+=` <button  class="vuelo-btn" , id="vuelo-btn", onclick="location.href ='${url}' ">${vuelo}</button>`
            
        });
        rutasContainer.appendChild(rutaAcargar);
    }
});




