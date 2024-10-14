function toggleMenu() {
    const dropdown = document.querySelector('.dropdown-menu');
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


