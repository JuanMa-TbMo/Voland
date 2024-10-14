let usuario = localStorage.getItem("loggedInUser");

if (usuario){
    usuario = JSON.parse(usuario);
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












/////////////////////////////////////////////////////////////////////////////////////////
    
const container = document.querySelector('.vuelos-container');
const params = new URLSearchParams(window.location.search);
const vueloNombre = params.get('vueloSelected');
let rutaSelecionada =null;
let aerolineaSelecionada=null;


    //Aerolinea accede a caso de uso
if (usuario.tipo=="Aerolinea"){
    container.innerHTML = ``;
    let rutasArr=usuario.rutas;
    

    rutasArr.forEach(rutaNombre=>{
        rutas.forEach(r=>{

            if(r.nombre==rutaNombre){
                const rutaDiv= document.createElement('div');
                rutaDiv.classList.add('user-box');
                        
                rutaDiv.innerHTML = `
                <img src="${r.img}" alt="ruta" class="user-image-sm">  
                <h3><b>Ruta:<b>${r.nombre} </h3>`;
                rutaDiv.onclick=()=> selecionarRuta(r);

                container.appendChild(rutaDiv);

            }
        });
      
    });

    function selecionarRuta(ruta){
        let vuelosRutas = ruta.vuelos;
        container.innerHTML = ``;
        vuelosRutas.forEach(vuelo=>{
            vuelos.forEach(v=>{
                if(v.nombre==vuelo){
                    const vueloDiv= document.createElement('div');
                    vueloDiv.classList.add('user-box');

                    vueloDiv.innerHTML = `
                    <img src="../imagenes/avion.png" alt="ruta" class="user-image-sm">  
                    <h3><b>Vuelo: <b>${v.nombre} </h3>`;
                    vueloDiv.onclick = ()=> selecionarVuelo(v);
    
                    container.appendChild(vueloDiv);
                }

            });
        });
    }

    function selecionarVuelo(vuelo){
        let reservasLista=[]; 
        reservasList.forEach(res=>{
             if (res.vuelo == vuelo.nombre )  {
                  reservasLista.push(res);
                }
        });
    
        container.innerHTML = ``;
        reservasLista.forEach(reserva => {
           
    
            const vueloItem = document.createElement('div');
            vueloItem.classList.add('vuelo-item');
                
            
            vueloItem.innerHTML = `
            <h1 class="vuelo-nombre">Reserva al vuelo ${reserva.vuelo}</h1><div class="datos-container"> 
            <p class="vuelo-fechaAlta"><b>Fecha del Vuelo:</b> ${reserva.fecha}</p>
            </div>
            `;
    
            for(let pasajero of reserva.pasajeros ){
                
                vueloItem.innerHTML += `
                <div class="datos-container"> 
                <h3 class="vuelo-fechaAlta"> ${pasajero}</h3>
                </div>
                `
            }
            
    
            container.appendChild(vueloItem);
      });
    }
    


}







    //Cliente accede a caso de uso
if (usuario.tipo == "Cliente"){ 
    usuarios.forEach(usr => {
        if(usr.tipo === "Aerolinea"){
        const userDiv = document.createElement('div'); 
        userDiv.classList.add('user-box'); 

        userDiv.innerHTML = `
            <img src="../imagenes/avatar.png" alt="User" class="user-image-sm">
            <h3>${usr.nombre}</h3>
        `;
        userDiv.onclick = () => selecionarUsuario(usr);
        
         container.appendChild(userDiv);
        }
    });


    function selecionarUsuario(usr) {

        aerolineaSelecionada=usr;
        container.innerHTML = ``;
        let rutasAS=aerolineaSelecionada.rutas;
        

        rutasAS.forEach(ruta=>{
            rutas.forEach(r=>{
                if(r.nombre==ruta){
            const  rutaDiv= document.createElement('div');
                rutaDiv.classList.add('user-box');
                        
                rutaDiv.innerHTML = `
                <img src="${r.img}" alt="ruta" class="user-image-sm">  
                <h3><b>Ruta:<b>${r.nombre} </h3>`;
                rutaDiv.onclick=()=> selecionarRuta(r);

                container.appendChild(rutaDiv);
    
            }
            });
          
        });
    }

    function selecionarRuta(ruta){
        let vuelosRutas = ruta.vuelos;
        container.innerHTML = ``;
        vuelosRutas.forEach(vuelo=>{
            vuelos.forEach(v=>{
                if(v.nombre==vuelo){
                    const  vueloDiv= document.createElement('div');
                    vueloDiv.classList.add('user-box');

                    vueloDiv.innerHTML = `
                    <img src="../imagenes/avion.png" alt="ruta" class="user-image-sm">  
                    <h3><b>Vuelo: <b>${v.nombre} </h3>`;
                    vueloDiv.onclick=()=> selecionarVuelo(v);
    
                    container.appendChild(vueloDiv);
                }

            });
        });
    }

    function selecionarVuelo(vuelo){
    let reservasLista=[]; 
    reservasList.forEach(res=>{
         if (res.vuelo=vuelo.nombre)  {
            if(res.cliente === usuario.username){
            reservasLista.push(res);
            }
         } 
       
    });

    container.innerHTML = ``;
    reservasLista.forEach(reserva => {
       

        const vueloItem = document.createElement('div');
        vueloItem.classList.add('vuelo-item');
            
        
        vueloItem.innerHTML = `
        <h1 class="vuelo-nombre">Reserva al vuelo ${reserva.vuelo}</h1><div class="datos-container"> 
        <p class="vuelo-fechaAlta"><b>Fecha del Vuelo:</b> ${reserva.fecha}</p>
        </div>
        `;

        for(let pasajero of reserva.pasajeros ){
            
            vueloItem.innerHTML += `
            <div class="datos-container"> 
            <h3 class="vuelo-fechaAlta"> ${pasajero}</h3>
            </div>
            `
        }
        

        container.appendChild(vueloItem);
  });
}
}