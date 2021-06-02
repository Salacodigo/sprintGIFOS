
function dibujaGifCards(data, container) {


   data.forEach(gif => {

      const div = document.createElement('div');
      div.className = "gif-card";
      div.innerHTML =
         `
         <img class="gifImage" src=${gif.gifPreviewURL}>
         <div class="hoverGif">
           <div class="gifButton">
             <img class="favoriteBtn" data-id=${gif.gifId} src="../assets/icon-fav.svg" alt="favorite button"> 
             <img class="downloadBtn" data-id=${gif.gifId} src="../assets/icon-download.svg" alt="download GIF button">
             <img class="expandBtn" data-id=${gif.gifId} src="../assets/icon-max-normal.svg" alt="maximize GIF button">
           </div>
           <div class="gifInformation">
             <p class="gifUser">${gif.gifUser || "-"}</p>
             <p class="gifTitle">${gif.gifTitle || "-"}</p>
           </div>
         </div>
      `
      container.appendChild(div);
   })
}

function dibujaTrendingTerms(data, container) {
   
   let contador = 0;
   let cantidad = 4;

   data.forEach(gif => {
      
      if (contador <= cantidad) {

         const a = document.createElement('a');
         a.className = "trending-term";
         if(contador !== cantidad){
            a.innerHTML = `<span data-word="${gif}">${gif},</span>`
         } else { 
            a.innerHTML = `<span data-word="${gif}">${gif}</span>`
         }
         container.appendChild(a);

         contador++;

      } else { return }
   })
}

function dibujarSugerencias(data, container){
   
   data.data.forEach( word => {
      
      const li = document.createElement('li');
      li.className = "suggestion";
      li.innerHTML =  `<span data-word="${word.name}">${word.name}</span>`

      container.appendChild(li);
   });
}

function limpiarContenedor(container){
   while( container.firstChild ){
      container.removeChild( container.firstChild );
   }
}