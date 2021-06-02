document.addEventListener("DOMContentLoaded", () => {
   loadFavorites();
});

async function loadFavorites() {
   await loadTrending();
   
   dibujaGifCards(BDgifsFavoritos, containerFavorites);

   loadEventListenersFavorites();
}


async function loadTrending() {
   
   await buscarTrendingGifs();
   dibujaGifCards(BDtrendingGifs, containterTrending);
   
}