document.addEventListener("DOMContentLoaded", () => {
   loadFavorites();
});

//Controla la cantidad de gifs dibujados
let dibujarHasta = 0;
let cantidadVerMas = 12;
let favoritosPorDibujar = '';


async function loadFavorites() {
   await loadTrending();
   limpiarContenedor(containerFavorites);
   let cantidadFavoritos = BDgifsFavoritos.length;
   if (cantidadFavoritos > 0) {
      
      dibujaGifCards(BDgifsFavoritos, containerFavorites);
      SeEncuentranGifsFavoritos();
      //Controla la aparicion de resultados
   } else {
      noSeEncuentranGifsFavoritos();
   }


   loadEventListenersFavorites();
}


async function loadTrending() {
   
   await buscarTrendingGifs();
   dibujaGifCards(BDtrendingGifs, containterTrending);
   
}

async function verMas() {
   
   console.log(BDgifsFavoritos)
}

//Muestra el loremContainer para decir que no hay resultados
function noSeEncuentranGifsFavoritos() {
   titleContainer.style.display = "flex";
   containerFavorites.style.display = "none";
   loremContainer.style.display = "flex";
   btnVerMas.style.display = "none";

}

//Controla la aparicion de resultados
function SeEncuentranGifsFavoritos() {
   
   titleContainer.style.display = "flex";
   
   containerFavorites.style.display = "grid";
   btnVerMas.style.display = "flex";

   //Oculta el lorem container en caso de haberse mostrado antes
   loremContainer.style.display = "none";
}