//Se ejecuta cuando la pagina ha cargado
document.addEventListener("DOMContentLoaded", () => {
   load();
});

async function load() {
   await loadTrending();
   trendingTerms = document.querySelectorAll('.trending-term');
   loadEventListeners();
}


//Carga y dibuja los trending Terms y Trending Gifs
async function loadTrending() {
   await buscarTrendingTerms();
   dibujaTrendingTerms(BDtrendingTerms, containerTrendingTerms);

   await buscarTrendingGifs();
   dibujaGifCards(BDtrendingGifs, containterTrending);

}

//Realiza la busqueda de GIfs con base en una palabra
async function buscaPorPalabra(word, verMas=false){
   ocultarSugerencias();
   limpiarContenedor(containerSearch);
   if(verMas == false){
      DBgifsBuscados = [];
      funcionesBusqueda.offset = 0;
   }
   await buscarGifs(word);
   
   dibujaGifCards(DBgifsBuscados, containerSearch);
}

//Trigger de la busqueda por palabra
async function buscarBtn() {
   let word = inputSearch.value;
   if (word != null || word != "" || word != undefined) {
      buscaPorPalabra(word);
   }
}

//Permite buscar gifs al darle clic a un trending term
async function buscarTrendingTerm(e) {
   let word = e.target.dataset.word;

   if (word != null || word != "" || word != undefined) {
      buscaPorPalabra(word);
   }

}

// Realiza la busqueda de sugerencias conforme se va escribiendo en el input
async function sugerencias() {
   let word = inputSearch.value;
   let palabrasSugeridas = await buscarSugerencias(word);
   limpiarContenedor(sugerenciasContainer);

   dibujarSugerencias(palabrasSugeridas, sugerenciasContainer);

   let palabrasEnLista = document.querySelectorAll('.suggestion')

   palabrasEnLista.forEach(palabra => {
      palabra.addEventListener('click', (e) => {
         let word = e.target.dataset.word;
         buscaPorPalabra(word);

      })
   })

}

async function mostrarSugerencias() {
   sugerenciasContainer.style.display = "block";
}

async function ocultarSugerencias() {
   sugerenciasContainer.style.display = "none";
}


async function verMas(){
   let word = inputSearch.value;
   buscaPorPalabra(word, true);
}
