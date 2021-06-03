document.addEventListener("DOMContentLoaded", () => {
   loadMyGifos();
});

async function loadMyGifos(){
   await loadTrending();
   dibujaGifCards(BDcreatedGifs, containerMyGifos);
}


async function loadTrending() {
   
   await buscarTrendingGifs();
   dibujaGifCards(BDtrendingGifs, containterTrending);
   
}