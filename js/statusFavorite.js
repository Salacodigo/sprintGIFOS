function addFavorite(id) {

   //Agrega a favoritos
   let gifPorAgregar = gifInformation(id);

   //Verifica si ya es un GIF Favorito
   let esFavorito = BDgifsFavoritos.includes(gifPorAgregar);

   //Lo agrega o quita del arreglo de favoritos
   if (!esFavorito) {
      BDgifsFavoritos.push(gifPorAgregar);
   } else {
      BDgifsFavoritos = BDgifsFavoritos.filter(gif => {
         return gif.gifId !== gifPorAgregar.gifId;
      });
   }

   //obtiene el nombre del HTML en el que estamos
   let path = self.location.href;  
   let posUltimaBarra = path.lastIndexOf("/");
   let nombreHTML = path.substring(posUltimaBarra + "/".length, path.length);       // index.html
   // alert(nombreHTML);

   //Dibuja los favoritos
   if(nombreHTML === 'favorites.html'){
      limpiarContenedor(containerFavorites);
      dibujaGifCards(BDgifsFavoritos, containerFavorites);
   }
   guardarLocalStorage('BDgifsFavoritos', BDgifsFavoritos);
}
