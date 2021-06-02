function addFavorite(id){
   
   //Agrega a favoritos
   let gifPorAgregar = gifInformation(id, true);

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
   
   guardarLocalStorage('BDgifsFavoritos', BDgifsFavoritos);
}


function temporal (){
   console.log(id);
   BDgifsFavoritos.push(id);
   console.log('BDgifsFavoritosB',BDgifsFavoritos);

   let DBgifsFavoritosActualizada = []
   

   let exit = false;
   let gifInfo = {};
   do {
      gifInfo = DBgifsBuscados.filter(gif => gif.gifId === id);
      if (gifInfo.length > 0) { exit = true; break }
      
      gifInfo = BDtrendingGifs.filter(gif => gif.gifId === id);
      if (gifInfo.length > 0) { exit = true; break }
      
      gifInfo = BDgifsFavoritos.filter(gif => gif.gifId === id);
      if (gifInfo.length > 0) { exit = true; break }
      
      gifInfo = BDcreatedGifs.filter(gif => gif.gifId === id);
      if (gifInfo.length > 0) { exit = true; break }

   } while (!exit)

   if( gifInfo.length > 0 ){ 
      return gifInfo[0];
   }
}