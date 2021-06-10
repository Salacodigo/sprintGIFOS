//Se ejecuta cuando la pagina ha cargado
document.addEventListener("DOMContentLoaded", () => {
   load();
});

let wordSearched = ''; //Variable managing the word searched with VerMasBtn

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
async function buscaPorPalabra(word, verMas = false) {
   wordSearched = word;
   ocultarSugerencias();
   limpiarContenedor(containerSearch);
   if (verMas == false) {
      DBgifsBuscados = [];
      claseBusqueda.offset = 0;
   }
   await buscarGifs(word);


   if (DBgifsBuscados.length > 0) {
      dibujaGifCards(DBgifsBuscados, containerSearch);
      SeEncuentranGifsSearch(word); //Controla la aparicion de resultados
   } else {
      noSeEncuentranGifsSearch();
   }
}

//Trigger de la busqueda por palabra
async function buscarBtn() {
   let word = inputSearch.value;
   if (word != null || word != "" || word != undefined) {
      buscaPorPalabra(word);
   }
}
//Trigger de la busqueda por palabra
async function buscarBtnNav() {
   let word = inputSearchNav.value;
   if (word != null || word != "" || word != undefined) {
      buscaPorPalabra(word);
   }
}

//Permite buscar gifs al darle clic a un trending term
async function buscarTrendingTerm(e) {
   let word = e.target.dataset.word;
   
   if (word != null || word != "" || word != undefined) {
      wordSearched = word;
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
async function sugerenciasNav() {
   let word = inputSearchNav.value;
   let palabrasSugeridas = await buscarSugerencias(word);
   limpiarContenedor(sugerenciasContainerNav);
   console.log('Dibujar sugerenciasContainerNav')
   dibujarSugerencias(palabrasSugeridas, sugerenciasContainerNav);

   let palabrasEnLista = document.querySelectorAll('.suggestion')

   palabrasEnLista.forEach(palabra => {
      palabra.addEventListener('click', (e) => {
         let word = e.target.dataset.word;
         buscaPorPalabra(word);

      })
   })
}

function mostrarSugerencias() {
   //Input principal
   sugerenciasContainer.style.display = "block";
   lookupsearchBtn.style.visibility = "visible";
   clearInputBtn.style.display = "flex";
   lookupOpenBtn.style.display = "none";

}
function mostrarSugerenciasNav() {
   console.log('mostrarSugerenciasNav');
   //Input navBar
   sugerenciasContainerNav.style.display = "block";
   lookupSearchBtnNav.style.visibility = "visible";
   clearInputBtnNav.style.display = "flex";
   lookupOpenSuggestionNav.style.display = "none";
   

}

function ocultarSugerencias() {
   //Input Principal
   sugerenciasContainer.style.display = "none";
   lookupsearchBtn.style.visibility = "hidden";
   clearInputBtn.style.display = "none";
   lookupOpenBtn.style.display = "flex";
   //Input Navbar
   sugerenciasContainerNav.style.display = "none";
   lookupSearchBtnNav.style.visibility = "hidden";
   clearInputBtnNav.style.display = "none";
   lookupOpenSuggestionNav.style.display = "flex";
}

function clearInput() {
   inputSearch.value = '';
   ocultarSugerencias();
}

function clearInputNav() {
   inputSearchNav.value = '';
   ocultarSugerencias();
}

async function verMas() {
   buscaPorPalabra(wordSearched, true);
}

//Muestra el loremContainer para decir que no hay resultados
function noSeEncuentranGifsSearch() {
   division.style.display = "flex";
   titleContainer.style.display = "flex";
   titleWord.textContent = 'Lorem Ipsum';
   loremContainer.style.display = "flex";
   btnVerMas.style.display = "none";

}

//Controla la aparicion de resultados
function SeEncuentranGifsSearch(word) {
   division.style.display = "flex";
   titleContainer.style.display = "flex";
   titleWord.textContent = `${word}`;
   containerSearch.style.display = "grid";
   btnVerMas.style.display = "flex";

   //Oculta el lorem container en caso de haberse mostrado antes
   loremContainer.style.display = "none";
}

//Controla la visivilidad de la barra de búsqueda del navbar al hacer scroll a la pagina
window.onscroll = function () {
   var y = window.scrollY;

   let anchoPantalla = screen.width;
   if (y >= 400) {
      if (anchoPantalla >= 1440) {
         inputContainerNav.style.display = "block";
      } else {
         inputContainerNav.style.display = "none";
      }
   } else {
      inputContainerNav.style.display = "none";
   }
}