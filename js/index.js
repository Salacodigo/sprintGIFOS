
//Clase que realiza peticiones a la API
let funcionesBusqueda = new Busqueda();

funcionesBusqueda.trendingGifs();
funcionesBusqueda.trendingTerms();
funcionesBusqueda.wordSuggestion('cinema');


//guarda los gifs en el arreglo Gifs
async function buscarGifs(word) {
   
   if(word != null || word != "" || word != undefined){

      let dataJSON = await funcionesBusqueda.wordSearch(word, funcionesBusqueda.offset);
      
      dataJSON.data.forEach( gif => {
         
         let newGif = new GIF(
            gif.id, //id
            gif.username, //username
            gif.title, //title
            gif.images.preview_webp.url, //preview_url
            gif.url, //gif_url
            'search', //category
            false //statusFavorite
         );
   
         DBgifsBuscados.push(newGif);
         
      });
   }
}
