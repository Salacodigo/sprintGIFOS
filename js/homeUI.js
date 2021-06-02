document.addEventListener("DOMContentLoaded", () => {
   load();
});

async function load(){
    await loadTrending();
    trendingTerms = document.querySelectorAll('.trending-term');
    
    loadEventListeners();
 }


//Trending Terms Container 
let containerTrendingTerms = document.getElementById('terms-resultados')
let trendingTerms;

//Search GIFS Constants
let inputSearch = document.getElementById('input-search');
let btnSearch = document.getElementById('btn-search');
let containerSearch = document.getElementById('buscados');

//Sugerencias
let sugerenciasContainer = document.getElementById('sugerencias-container')

//Trending GIfs Constants
let containterTrending = document.getElementById('carrousel');


function loadEventListeners() {
   btnSearch.addEventListener('click', buscarBtn);

   trendingTerms.forEach( term => {
      term.addEventListener('click', buscarTrendingTerm);
   })

   inputSearch.addEventListener('focus', mostrarSugerencias);

   inputSearch.addEventListener('keyup', sugerencias)
}




async function loadTrending(){
   await buscarTrendingTerms();
   dibujaTrendingTerms(BDtrendingTerms, containerTrendingTerms);
   
   await buscarTrendingGifs();
   dibujaGifCards(BDtrendingGifs, containterTrending);
   
}

async function buscarBtn() {

   let word = inputSearch.value;
   if(word != null || word != "" || word != undefined){
      limpiarContenedor(containerSearch);
      DBgifsBuscados = [];
      funcionesBusqueda.offset = 0;
      await buscarGifs(word);
      guardarLocalStorage('DBgifsBuscados', DBgifsBuscados);
      dibujaGifCards(DBgifsBuscados, containerSearch);
   }  
}

async function buscarTrendingTerm(e){
   let word = e.target.dataset.word;
   
   if(word != null || word != "" || word != undefined){
      limpiarContenedor(containerSearch);
      DBgifsBuscados = [];
      funcionesBusqueda.offset = 0;
      await buscarGifs(word);
      guardarLocalStorage('DBgifsBuscados', DBgifsBuscados);
      dibujaGifCards(DBgifsBuscados, containerSearch);
   }  

}

async function mostrarSugerencias(){
   sugerenciasContainer.style.display = "block";
}

async function sugerencias(){
   let word = inputSearch.value;
   let palabrasSugeridas = await buscarSugerencias(word);
   limpiarContenedor(sugerenciasContainer);
   
   dibujarSugerencias(palabrasSugeridas, sugerenciasContainer);

}