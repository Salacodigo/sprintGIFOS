function addFavorite(id){
   
   //Agrega a favoritos
   let gifPorAgregar = gifInformation(id);

   //Verifica si ya es un GIF Favorito
   let esFavorito = BDgifsFavoritos.includes(gifPorAgregar);

   //Lo agrega o quita del arreglo de favoritos
   if(!esFavorito){
      BDgifsFavoritos.push(gifPorAgregar);
   } else { 
      BDgifsFavoritos = BDgifsFavoritos.filter( gif => {
         return gif.gifId !== gifPorAgregar.gifId;
      });
   }

   //Dibuja los favoritos
   limpiarContenedor(containerFavorites);
   dibujaGifCards(BDgifsFavoritos, containerFavorites);
   guardarLocalStorage('BDgifsFavoritos', BDgifsFavoritos);
}
