
//Arreglos como BD
let DBgifsBuscados = [];
let BDtrendingGifs = [];
let BDgifsFavoritos = [];
let BDtrendingTerms = [];
let BDcreatedGifs = [];
let BDcreatedGifsId = [];
//Para saber a qué arreglo pertenece el GIFS
let arregloGIF = [];

//Revisa si hay info guardada de GIfs Favoritos y la carga
try {
   dataJSON = leerLocalStorage('BDgifsFavoritos');

   dataJSON.forEach(gif => {

      let newGif = new GIF(
         gif.id, //id
         gif.user, //username
         gif.title, //title
         gif.preview_url, //preview_url
         gif.gif_url, //gif_url
         gif.statusFavorite //statusFavorite
      );

      BDgifsFavoritos.push(newGif);

   });


} catch (error) { console.log(error) }

//Revisa si hay info guardada de GIfs Creados y la carga
try {
   dataJSON = leerLocalStorage('BDcreatedGifs');

   dataJSON.forEach(gif => {

      let newGif = new GIF(
         gif.id, //id
         gif.user, //username
         gif.title, //title
         gif.preview_url, //preview_url
         gif.gif_url, //gif_url
         gif.statusFavorite //statusFavorite
      );

      BDcreatedGifs.push(newGif);

   });


} catch (error) { console.log(error) }


//Funciones para Local Storage
function leerLocalStorage(nombre) {
   let leidoJSON = localStorage.getItem(nombre);
   let leido = JSON.parse(leidoJSON);
   return leido;
}

function guardarLocalStorage(nombre, datos) {
   let datosJSON = JSON.stringify(datos);
   localStorage.setItem(nombre, datosJSON);
}
