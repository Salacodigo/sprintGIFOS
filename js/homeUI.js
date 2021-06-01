

//Search GIFS Constants
let inputSearch = document.getElementById('input-search');
let btnSearch = document.getElementById('btn-search');
let contSearch = document.getElementById('buscados');


loadEventListeners();
function loadEventListeners() {
   btnSearch.addEventListener('click', buscarBtn);

}


async function buscarBtn() {

   let word = inputSearch.value;
   if(word != null || word != "" || word != undefined){
      DBgifsBuscados = [];
      funcionesBusqueda.offset = 0;
      await buscarGifs(word);
      dibujaSearch(DBgifsBuscados, contSearch)
   }  
}

