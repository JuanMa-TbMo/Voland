let usernameDiv = document.querySelector(".user-btn");
let loggedInUser = localStorage.getItem("loggedInUser");

let ocultar = document.getElementById("notLogged");
let mostrar = document.getElementById("isLogged");

if (loggedInUser) {
  let user = JSON.parse(loggedInUser); 
  let nombreUsuario = user.username;
  let tipo = user.tipo;

  console.log(nombreUsuario);


  if (tipo === "Cliente") {
      ocultar.style.display = "none";
      mostrar.style.display = "flex";
      
      
  }else if( tipo === "Aerolinea"){
      ocultar.style.display = "none";
      mostrar.style.display = "flex";

  }

  let btn = document.getElementById("botonNickname");
  btn.innerText = nombreUsuario; 
  
} else {
  ocultar.style.display = "flex";
  mostrar.style.display = "none";
}