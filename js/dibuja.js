
function dibujaSearch(data, container) {
   console.log(data, container);
   DBgifsBuscados.forEach(gif => {
      console.log( gif.gifId );
      console.log( gif.gifUser || "-" );
      console.log( gif.gifTitle  || "-" );
      console.log( gif.gifPreviewURL );

      const div = document.createElement('div');
      div.className = "gif-card";
      div.innerHTML = 
      `
         <img class="gifImage" src=${gif.gifPreviewURL}>
         <div class="hoverGif">
           <div class="gifButton" data-id=${gif.gifId}>
             <img class="favoriteBtn" src="../assets/icon-fav.svg" src="" alt="favorite button"> 
             <img class="downloadBtn" src="../assets/icon-download.svg" alt="download GIF button">
             <img class="expandBtn" src="../assets/icon-max-normal.svg" alt="maximize GIF button">
           </div>
           <div class="gifInformation">
             <p class="gifUser">${gif.gifUser}</p>
             <p class="gifTitle">${gif.gifTitle}</p>
           </div>
         </div>
      `
      container.appendChild(div);
   })
}