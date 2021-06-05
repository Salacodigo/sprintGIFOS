
//Se cargan los escuchadores que estan desde el inicio

//Eventos que tienen addEventListeners 
// y no se encuentran en este script:
// Lista sugerencias
//Botones gifs

function loadEventListeners() {
   
   lookupsearchBtn.addEventListener('click', buscarBtn);
   clearInputBtn.addEventListener('click', clearInput);

   trendingTerms.forEach(term => {
      term.addEventListener('click', buscarTrendingTerm);
   })

   inputSearch.addEventListener('focus', mostrarSugerencias);

   inputSearch.addEventListener('keyup', sugerencias)
   
   inputSearch.addEventListener('keydown', (e) => {
      if(e.key === 'Enter'){
         let word = inputSearch.value;
         buscaPorPalabra(word);
      }
   })
   
   btnVerMas.addEventListener('click', verMas );

}