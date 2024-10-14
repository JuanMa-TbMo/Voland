let usrSelected=null;
const userContainer = document.querySelector('.usr-container');
let tipo="";

//me fijo login

let usuario = localStorage.getItem("loggedInUser");

if (usuario){

    usuario = JSON.parse(usuario); 
}

let header = document.getElementById("main-header")

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

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

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



//cargo datos pagina
if (usrSelected == null){
    usuarios.forEach(usr => {
        const userDiv = document.createElement('div'); 
        userDiv.classList.add('user-box'); 

     
        userDiv.innerHTML = `
            <img src="${usr.img}" alt="User" class="user-image-sm">
            <h3>${usr.nombre}</h3>
        `;
        userDiv.onclick = () => selecionarUsuario(usr);

       
        userContainer.appendChild(userDiv);
    });
};

function selecionarUsuario(usr) {
    usrSelected=usr;
    tipo= usrSelected.tipo;


    if(usuario && (usuario.nombre == usrSelected.nombre)) {
        
            location.href='consulta-usuario.html';

       
    }


    else {

    const usrcontainer = document.createElement('div');
    usrcontainer.classList.add('user-container');
    usrcontainer.innerHTML=` 
        <div class="info-user">
            <img src="${usr.img}" alt="User-sm" class="user-image" >
            <div class="user-info">
                <h2 id="nombre">${usr.nombre}</h2>
                <h1 id="nickname">${usr.username}</h1>
            </div>
        </div>

        <div class="caja-usr">
            <div class="aero-perfil-container">
            <button class="user-btn"  onclick="togglePerfil()">Perfil</button>
            </div>
            <div class="info-user-container" >
               
                <!--la idea es cargar aca dentro con html respectivo
                    osea: si es usuario(cliente o aerolinea) y esta selecionado perfil, se carga su perfil
                    si es aerolina y seleciona Rutas: se carga info sobre sus rutas
                    -->

            </div>

        </div>`
        userContainer.innerHTML='';
        userContainer.appendChild(usrcontainer);

        
        if(tipo === "Aerolinea"){
            document.getElementById("nombre").innerText = usrSelected.nombre;
            document.getElementById("nickname").innerText = usrSelected.username + " / " + usrSelected.correo;
            let div1=document.querySelector(".aero-perfil-container");
            div1.innerHTML+= `<button class="user-btn " onclick="toggleRutas()" id="isLoggedAerolinea">Rutas</button> `
        
        
            

        }else if(tipo === "Cliente") {
            document.getElementById("nombre").innerText = usrSelected.nombre + " "+ usrSelected.apellido;
            document.getElementById("nickname").innerText = usrSelected.username + " / " + usrSelected.correo;


        }
    }
    };




function togglePerfil(){

    if(tipo=="Aerolinea"){

        let div1= document.querySelector(".info-user-container");
        div1.innerHTML = '';
        const insert = document.createElement('div');
        insert.classList.add('infoAerolina');
        insert.innerHTML =
            `   
            <p><b>Nickname: </b>${usrSelected.username}</p>
            <p><b>Nombre: </b>${usrSelected.nombre}</p>
            <p><b>Email: </b>${usrSelected.correo}</p>
            <p><b>Sitio Web: </b>${usrSelected.paginaWeb}<p>
            <p><b>Descripcion: </b>${usrSelected.descripcionGeneral}</p>
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
        <p><b>Nickname: </b>${usrSelected.username}</p>
        <p><b>Nombre: </b>${usrSelected.nombre}</p>
        <p><b>Apellido: </b>${usrSelected.apellido}</p>
        <p><b>Email: </b>${usrSelected.correo}</p>
        <p><b>Fecha de Nacimiento: </b>${usrSelected.fechaNacimiento}<p>
        <p><b>Tipo de Documento: </b>${usrSelected.tipo}</p>
        <p><b>Número de Documento: </b>${usrSelected.nroDoc} </p>
         </div>
        `
        div1.appendChild(insert);

    }


}

function toggleRutas(){
    let div1= document.querySelector(".info-user-container");
    div1.innerHTML = '';
    const insert = document.createElement('div');
    insert.classList.add('infoAerolina');
    let rutas = usrSelected.rutas;
    rutas.forEach(ruta => {
        insert.innerHTML += `<p><b>Ruta: </b>${ruta}</p>`
    });

    div1.appendChild(insert);



}