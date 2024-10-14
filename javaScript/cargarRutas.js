 let rutaSelect;

    

    function selectRuta(Ruta){
      rutaSelect= Ruta.nombre;
      console.log(rutaSelect);
    }


  
  const container = document.querySelector('.Rv-container');
  
  rutas.forEach(ruta => {
    
    const rvItem = document.createElement('div');
    rvItem.classList.add('rv-item');
    rvItem.onclick = function(){
      selectRuta(ruta);
      const url = `html/consulta-ruta.html?ruta=${encodeURIComponent(rutaSelect)}`;
      location.href=url;
    }
  
    rvItem.innerHTML = `
      <img class="rv-img" src="${ruta.img}" >
      <h2 class="rv-title">${ruta.titulo} por <span class="rv-author">${ruta.author}</span></h2>
      <p class="rv-descripcion">${ruta.descripcion}</p>
    `;
  
  
    container.appendChild(rvItem);
  });






  
