document.addEventListener("DOMContentLoaded", () => {
   loadFavorites();
});

//Controla la cantidad de gifs dibujados
let dibujarHasta = 0;
let cantidadVerMas = 12; //Cantidad de GIFs adicionales al darle click al boton ver mas


async function loadFavorites() {
   await loadTrending();

   let cantidadFavoritos = BDgifsFavoritos.length;
   if (cantidadFavoritos > 0) {
      verMas(); //Funciona la primera vez para cargar los gifs
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
   let CantidadFavoritos = BDgifsFavoritos.length;
   dibujarHasta += cantidadVerMas;
   if (dibujarHasta >= CantidadFavoritos){
      dibujarHasta = CantidadFavoritos;
      //Esconde el boton ver más si no hay mas GIfs por mostrar
      btnVerMas.style.visibility = "hidden";
   }
   
   buildBDGifsFavoritosADibujar( dibujarHasta );
   limpiarContenedor(containerFavorites);
   dibujaGifCards(BDgifsFavoritosPorDibujar, containerFavorites);
}

function buildBDGifsFavoritosADibujar( cantidad ){
   BDgifsFavoritosPorDibujar = [];
   for (let i = 0; i < cantidad; i++ ){
      BDgifsFavoritosPorDibujar.push(BDgifsFavoritos[i]);
   }
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