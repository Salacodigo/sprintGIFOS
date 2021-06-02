
//Instancia de la clase que realiza peticiones a la API
let funcionesBusqueda = new Busqueda();

//Busca las palabras en trending
async function buscarTrendingTerms(){
   
   let dataJSON = await funcionesBusqueda.trendingTerms();

   //Limpia el arreglo
   BDtrendingTerms = [];
   
   dataJSON.data.forEach(gif => {
      BDtrendingTerms.push(gif);
   });

}

//Busca los Gifs en trending
async function buscarTrendingGifs() {
   BDtrendingGifs =[];
   let dataJSON = await funcionesBusqueda.trendingGifs();

   dataJSON.data.forEach(gif => {

      let newGif = new GIF(
         gif.id, //id
         gif.username, //username
         gif.title, //title
         gif.images.preview_webp.url, //preview_url
         gif.url, //gif_url
         false //statusFavorite
      );

      BDtrendingGifs.push(newGif);

   });

}

//Busca y guarda los gifs en el arreglo Gifs
async function buscarGifs(word) {

   if (word != null || word != "" || word != undefined) {

      let dataJSON = await funcionesBusqueda.wordSearch(word, funcionesBusqueda.offset);

      dataJSON.data.forEach(gif => {

         let newGif = new GIF(
            gif.id, //id
            gif.username, //username
            gif.title, //title
            gif.images.preview_webp.url, //preview_url
            gif.url, //gif_url
            false //statusFavorite
         );

         DBgifsBuscados.push(newGif);

      });
   }
}

//Busca las palabras relacionadas
async function buscarSugerencias(word){
   if (word != null || word != "" || word != undefined) {
      let dataJSON = await funcionesBusqueda.wordSuggestion(word);

      return dataJSON;
   }
}