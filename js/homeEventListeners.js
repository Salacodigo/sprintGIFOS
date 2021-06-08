
//Se cargan los escuchadores que estan desde el inicio

//Eventos que tienen addEventListeners 
// y no se encuentran en este script:
// Lista sugerencias
//Botones gifs

function loadEventListeners() {
   //Del input principal
   lookupsearchBtn.addEventListener('click', buscarBtn);
   clearInputBtn.addEventListener('click', clearInput);
   //Del input Navbar
   lookupSearchBtnNav.addEventListener('click', buscarBtnNav);
   clearInputBtnNav.addEventListener('click', clearInputNav);
   

   trendingTerms.forEach(term => {
      term.addEventListener('click', buscarTrendingTerm);
   })

   inputSearch.addEventListener('focus', mostrarSugerencias);
   
   inputSearchNav.addEventListener('focus', mostrarSugerenciasNav);

   inputSearch.addEventListener('keyup', sugerencias);

   inputSearchNav.addEventListener('keyup', sugerenciasNav);
   
   inputSearch.addEventListener('keydown', (e) => {
      if(e.key === 'Enter'){
         let word = inputSearch.value;
         buscaPorPalabra(word);
      }
   })

   inputSearchNav.addEventListener('keydown', (e) => {
      if(e.key === 'Enter'){
         let word = inputSearchNav.value;
         buscaPorPalabra(word);
      }
   })
   
   btnVerMas.addEventListener('click', verMas );
   
   controlLeft.addEventListener('click', controlLeftAction );

   controlRight.addEventListener('click', desplazarDerecha );


}