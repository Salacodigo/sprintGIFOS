document.addEventListener("DOMContentLoaded", () => {
   loadMyGifos();
});


async function loadTrending() {
   
   await buscarTrendingGifs();
   dibujaGifCards(BDtrendingGifs, containterTrending);
   
}

async function loadMyGifos() {
   await loadTrending();
   limpiarContenedor(containerMyGifos);
   let cantidadMyGIFOS = BDcreatedGifs.length;
   if (cantidadMyGIFOS > 0) {
      
      dibujaGifCards(BDcreatedGifs, containerMyGifos);
      SeEncuentranGifsCreados();
      //Controla la aparicion de resultados
   } else {
      noSeEncuentranGifsCreados();
   }

   loadEventListenersMyGifos();
}

function verMas(){
   console.log(BDcreatedGifs);
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