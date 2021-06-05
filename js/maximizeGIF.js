const maximizeContainer = document.getElementById('maximize-container');

const maximizedCloseBtn = document.getElementById('closeMaximizedGifBtn');

const maximizedGifImage = document.getElementById('maximized-gifImage');
const maximizedFavoriteBtn = document.getElementById('maximizedFavoriteBtn');
const maximizedDownloadBtn = document.getElementById('maximizedDownloadBtn');
const maximizedGifUser = document.getElementById('maximizedGifUser');
const maximizedGifTitle = document.getElementById('maximizedGifTitle');

const previousArrow = document.getElementById('previous-arrow');
const nextArrow = document.getElementById('next-arrow');


maximizeEventListeners();
function maximizeEventListeners() {
   maximizedCloseBtn.addEventListener('click', closeMaximizedGif)
   maximizedFavoriteBtn.addEventListener('click', sendToFavorites)
   maximizedDownloadBtn.addEventListener('click', downloadGIFById)
   previousArrow.addEventListener('click', previousGIF);
   nextArrow.addEventListener('click', nextGIF);
}

function sendToFavorites(e) {
   let id = e.target.dataset.id;
   addFavorite(id);
}

function downloadGIFById(e) {
   let id = e.target.dataset.id;
   let gifInfo = gifInformation(id);
   descargaGIF(gifInfo.title, gifInfo.gifId);
}

function maximizeGIF(id) {

   let gifInfo = gifInformation(id);

   dibujarMaxGIF(gifInfo);

   maximizeContainer.style.display = 'flex';
   let y = window.scrollY;
   maximizeContainer.style.top = `${y}px`;
   inhabilitaScroll();
}

//Busca en las bases de datos por ID para encontrar el Gif y retorna el gif si lo encuentra
function gifInformation(id) {
   let exit = false;
   let gifInfo = {};
   do {
      gifInfo = BDgifsFavoritos.filter(gif => gif.gifId === id);
      if (gifInfo.length > 0) {
         arregloGIF = BDgifsFavoritos;
         exit = true;
         break
      }

      gifInfo = DBgifsBuscados.filter(gif => gif.gifId === id);
      if (gifInfo.length > 0) {
         arregloGIF = DBgifsBuscados;
         exit = true;
         break
      }

      gifInfo = BDtrendingGifs.filter(gif => gif.gifId === id);
      if (gifInfo.length > 0) {
         arregloGIF = BDtrendingGifs;
         exit = true;
         break
      }

      gifInfo = BDcreatedGifs.filter(gif => gif.gifId === id);
      if (gifInfo.length > 0) {
         arregloGIF = BDcreatedGifs;
         exit = true;
         break
      }

   } while (!exit)

   if (gifInfo.length > 0) {
      return gifInfo[0];
   }

}

function closeMaximizedGif() {
   maximizeContainer.style.display = 'none';
   habilitaScroll();
}

function previousGIF() {
   let id = maximizedFavoriteBtn.getAttribute('data-id');
   let gifInfo = gifInformation(id);
   let posicionGIF = arregloGIF.indexOf(gifInfo);

   //Logica para avanzar una casilla
   //Revisa si hay más GIFS
   if (posicionGIF > 0) {
      let nuevoGIF = arregloGIF[posicionGIF - 1];
      dibujarMaxGIF(nuevoGIF);
   } else {
      let nuevoGIF = arregloGIF[arregloGIF.length-1];
      dibujarMaxGIF(nuevoGIF);
   }

}

function nextGIF() {
   let id = maximizedFavoriteBtn.getAttribute('data-id');
   let gifInfo = gifInformation(id);
   let posicionGIF = arregloGIF.indexOf(gifInfo);

   //Logica para avanzar una casilla
   //Revisa si hay más GIFS
   if (posicionGIF < arregloGIF.length -1) {
      let nuevoGIF = arregloGIF[posicionGIF + 1];
      dibujarMaxGIF(nuevoGIF);
   } else {
      let nuevoGIF = arregloGIF[0];
      dibujarMaxGIF(nuevoGIF);
   }

}

function dibujarMaxGIF(gif) {

   maximizedGifImage.setAttribute('src', gif.preview_url);
   maximizedFavoriteBtn.setAttribute('data-id', gif.id);
   maximizedDownloadBtn.setAttribute('data-id', gif.id);
   maximizedGifUser.innerHTML = `${gif.user}`;
   maximizedGifTitle.innerHTML = `${gif.title}`;
}