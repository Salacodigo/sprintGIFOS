
//Arreglos como BD
let DBgifsBuscados = [];
let BDtrendingGifs = [];
let BDgifsFavoritos = [];
let BDtrendingTerms = [];
let BDcreatedGifs = [];


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