 function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

   const user = usuarios.find(user => user.username == username && user.password == password);

    if (user) {
       localStorage.setItem("loggedInUser", JSON.stringify(user)); 
       window.location.href = "../index.html";
    } else {
       alert("Usuario o contraseña incorrectos");
    }
 }

 function register() {


    let select = document.getElementById("register-option");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const correo = document.getElementById("email").value
    let newUser;


    if (select == "Cliente"){

        const apellido = document.getElementById("apellido").value
        const fechaNacimiento = document.getElementById("fechaNacimiento").value
        const nacionalidad = document.getElementById("country").value
        const tipoDocumento = document.getElementById("documentType").value
        const numeroDocumento = document.getElementById("numeroDoc").value

        newUser = {username, password, correo, apellido, fechaNacimiento, nacionalidad, tipoDocumento, numeroDocumento}
    }

    else if (select == "Aerolinea"){

        const descripcionGeneral = document.getElementById("shortDescription")
        const paginaWeb = document.getElementById("paginaWeb")
        newUser = {username, password, correo, descripcionGeneral, paginaWeb}
    }

    usuarios.push(newUser);
 
    localStorage.setItem('users', JSON.stringify(usuarios));
    console.log(localStorage.getItem(newUser.username));
 
    alert("Usuario registrado con éxito. Ahora puedes iniciar sesión.");
    window.location.href = '../index.html'; 
 }
 
 function logout() {
    localStorage.removeItem("loggedInUser"); 
    window.location.href = '../index.html'; 
 }

 function showSelectionType() {
    
   let select = document.getElementById("register-option");
   let selectedValue = select.value; 

   let divCliente = document.querySelector(".cliente-container");
   let divAerolinea = document.querySelector(".aerolinea-container");

   if (!divCliente || !divAerolinea) {
       return; 
   }

   if (selectedValue === "Cliente") {
       divAerolinea.style.display = "none";
       divCliente.style.display = "block"; 

   } else if (selectedValue === "Aerolinea") {
       divCliente.style.display = "none"; 
       divAerolinea.style.display = "block"; 
   }
}
