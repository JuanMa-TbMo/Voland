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

let userContainer = document.querySelector(".user-container")

userContainer.insertAdjacentHTML("afterbegin",`
    
    <div class="info-user">
        <img src="${usuario.img}" alt="User" class="user-image" >
        <div class="user-info">
            <h1 id="nombre">${usuario.nombre}</h1>
            <h3 id="nickname">${usuario.username} / ${usuario.correo}</h2>
        </div>
    </div>
    
`)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


function togglePerfil(){

    if(usuario.tipo == "Aerolinea"){

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

    if(usuario.tipo == "Cliente"){

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