document.addEventListener("DOMContentLoaded", () => {
   loadMyGifos();
});


//Controla la cantidad de gifs dibujados
let dibujarHasta = 0;
let cantidadVerMas = 12; //Cantidad de GIFs adicionales al darle click al boton ver mas


async function loadTrending() {
   
   await buscarTrendingGifs();
   dibujaGifCards(BDtrendingGifs, containterTrending);
   
}

async function loadMyGifos() {
   await loadTrending();
   let cantidadMyGIFOS = BDcreatedGifs.length;
   if (cantidadMyGIFOS > 0) {
      verMas();
      SeEncuentranGifsCreados();
      //Controla la aparicion de resultados
   } else {
      noSeEncuentranGifsCreados();
   }

   loadEventListenersMyGifos();
}

function verMas() {
   let CantidadFavoritos = BDcreatedGifs.length;
   dibujarHasta += cantidadVerMas;
   if (dibujarHasta >= CantidadFavoritos){
      dibujarHasta = CantidadFavoritos;
      //Esconde el boton ver más si no hay mas GIfs por mostrar
      btnVerMas.style.visibility = "hidden";
   }
   
   buildBDcreatedGifsADibujar( dibujarHasta );
   limpiarContenedor(containerMyGifos);
   dibujaGifCards(BDcreatedGifsPorDibujar, containerMyGifos);
}

function buildBDcreatedGifsADibujar( cantidad ){
   BDcreatedGifsPorDibujar = [];
   for (let i = 0; i < cantidad; i++ ){
      BDcreatedGifsPorDibujar.push(BDcreatedGifs[i]);
   }
}

//Muestra el loremContainer para decir que no hay resultados
function noSeEncuentranGifsCreados() {
   titleContainer.style.display = "flex";
   containerMyGifos.style.display = "none";
   loremContainer.style.display = "flex";
   btnVerMas.style.display = "none";

}

//Controla la aparicion de resultados
function SeEncuentranGifsCreados() {
   
   titleContainer.style.display = "flex";
   containerMyGifos.style.display = "grid";
   btnVerMas.style.display = "flex"
   //Oculta el lorem container en caso de haberse mostrado antes
   loremContainer.style.display = "none";
}