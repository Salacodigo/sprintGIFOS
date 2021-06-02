
let closeMaximizedGifBtn = document.getElementById('closeMaximizedGifBtn');


let maximizeContainer = document.getElementById('maximize-container');

let maximizedGifImage = document.getElementById('maximized-gifImage');
let maximizedFavoriteBtn = document.getElementById('maximizedFavoriteBtn');
let maximizedDownloadBtn = document.getElementById('maximizedDownloadBtn');
let maximizedGifUser = document.getElementById('maximizedGifUser');
let maximizedGifTitle = document.getElementById('maximizedGifTitle');


maximizeEventListeners();
function maximizeEventListeners(){
   closeMaximizedGifBtn.addEventListener('click', closeMaximizedGif)
   maximizedFavoriteBtn.addEventListener('click', sendToFavorites)
   maximizedDownloadBtn.addEventListener('click', downloadGIFById)
}

function sendToFavorites(e){
   let id = e.target.dataset.id;
   addFavorite(id);
   
}

function downloadGIFById(e){
   let id = e.target.dataset.id;
   let gifInfo = gifInformation(id);
   descargaGIF(gifInfo.title, gifInfo.gifId);
}

function maximizeGIF(id) {
   
   let gifInfo = gifInformation(id);
   
   maximizedGifImage.setAttribute('src', gifInfo.preview_url);
   maximizedFavoriteBtn.setAttribute('data-id', gifInfo.id);
   maximizedDownloadBtn.setAttribute('data-id', gifInfo.id);
   maximizedGifUser.innerHTML = `${gifInfo.user}`;
   maximizedGifTitle.innerHTML = `${gifInfo.title}`;
   
   maximizeContainer.style.display = 'block';
}

//Busca en las bases de datos por ID para encontrar el Gif y retorna el gif si lo encuentra
function gifInformation(id, revisaFavoritos = true) {
   let exit = false;
   let gifInfo = {};
   do {
      gifInfo = DBgifsBuscados.filter(gif => gif.gifId === id);
      if (gifInfo.length > 0) { exit = true; break }
      
      gifInfo = BDtrendingGifs.filter(gif => gif.gifId === id);
      if (gifInfo.length > 0) { exit = true; break }
      
      //Condicional que revisa la DBfavritos.
      //Esta funcion se utiliza en el proceso de agregar favoritos
      if(revisaFavoritos){
         gifInfo = BDgifsFavoritos.filter(gif => gif.gifId === id);
         if (gifInfo.length > 0) { exit = true; break }
      }
      
      gifInfo = BDcreatedGifs.filter(gif => gif.gifId === id);
      if (gifInfo.length > 0) { exit = true; break }

   } while (!exit)

   if( gifInfo.length > 0 ){ 
      return gifInfo[0];
   }

}

function closeMaximizedGif() {
   maximizeContainer.style.display = 'none'
}
