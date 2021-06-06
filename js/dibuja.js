
//Esta funcion arma el HTML del card-gif y lo añade al contenedor donde será dibujado
function dibujaGifCards(data, container) {


   data.forEach(gif => {

      // Se crea el contenedor de la Gif Card
      const div = document.createElement('div');
      div.className = "gif-card";

      //Se crea el contenedor de la imagen
      const gifImage = document.createElement('img');
      gifImage.className = 'gifImage';
      gifImage.setAttribute('src', `${gif.gifPreviewURL}`);
      gifImage.addEventListener('click', (e) => {
         e.stopPropagation();
         maximizeGIF(gif.id);
      });

      //Se crea el contenedor de los botones
      const hoverGif = document.createElement('div');
      hoverGif.className = 'hoverGif';
      hoverGif.addEventListener('click', (e) => {
         e.stopPropagation();
         maximizeGIF(gif.id);
      });

      //Se crea el contenedor de los botones
      const gifButtonContainer = document.createElement('div');
      gifButtonContainer.className = 'gifButtonContainer';


      //Se agrega cada boton al contenedor de botones
      const btnFavorite = generaBtnFavorite(gif);
      const btnDownload = generaBtnDownload(gif);
      const btnExpand = generaBtnExpand(gif);

      //Se añaden los botones al contenedor de Botones
      gifButtonContainer.appendChild(btnFavorite);
      gifButtonContainer.appendChild(btnDownload);
      gifButtonContainer.appendChild(btnExpand);


      //Se crea el elemento informacion
      const divInformation = document.createElement('div');
      divInformation.className = 'gifInformation';
      divInformation.innerHTML =
         `
         <p class="gifUser">${gif.gifUser || "-"}</p>
         <p class="gifTitle">${gif.gifTitle || "-"}</p>
      `

      //Se agrega la informacion al contenedor hoverGif
      hoverGif.appendChild(gifButtonContainer);
      hoverGif.appendChild(divInformation)

      //Se agrega la imagen y el hover Gif al contenedor padre
      div.appendChild(gifImage)
      div.appendChild(hoverGif)

      //Se agrega el contenedor padre para que sea dibujado
      container.appendChild(div);
   })
}

function generaBtnFavorite(gif) {
   //Se crea el boton favorito
   const btnFavorite = document.createElement('img');
   btnFavorite.className = "favoriteBtn";
   btnFavorite.setAttribute('data-id', `${gif.gifId}`);
   btnFavorite.setAttribute('src', "../assets/icon-fav.svg");
   btnFavorite.setAttribute('alt', 'favorite button');
   
   //Accion que realizará el Botón
   btnFavorite.addEventListener('click', (e) => {
      e.stopPropagation();
      let id = `${gif.gifId}`;
      addFavorite(id); //Controla la BD de favoritos
      console.log('presionado')
   })

   return btnFavorite;
}

function generaBtnDownload(gif) {

   //Se crea el boton downloadBtn
   const btnDownload = document.createElement('img');
   btnDownload.className = 'downloadBtn';
   btnDownload.setAttribute('data-id', `${gif.gifId}`);
   btnDownload.setAttribute('src', '../assets/icon-download.svg');
   btnDownload.setAttribute('alt', 'download GIF button');

   //Accion que realizará el Botón
   btnDownload.addEventListener('click', (e) => {
      e.stopPropagation();
      descargaGIF(`${gif.gifTitle}`,`${gif.gifId}`);
   })

   return btnDownload;

}

function generaBtnExpand(gif) {
   //Se crea el boton expandBtn
   const btnExpand = document.createElement('img');
   btnExpand.className = 'expandBtn';
   btnExpand.setAttribute('data-id', `${gif.gifId}`);
   btnExpand.setAttribute('src', '../assets/icon-max-normal.svg');
   btnExpand.setAttribute('alt', 'maximize GIF button');
   
   //Accion que realizará el Botón
   btnExpand.addEventListener('click', (e) => {
      e.stopPropagation();
      let id = `${gif.gifId}`;
      maximizeGIF(id);
   })

   return btnExpand;
}

function dibujaTrendingTerms(data, container) {

   let contador = 0;
   let cantidad = 4;

   data.forEach(gif => {

      if (contador <= cantidad) {

         const a = document.createElement('a');
         a.className = "trending-term";
         if (contador !== cantidad) {
            a.innerHTML = `<span data-word="${gif}">${gif}, </span>`
         } else {
            a.innerHTML = `<span data-word="${gif}">${gif}</span>`
         }
         container.appendChild(a);

         contador++;

      } else { return }
   })
}

function dibujarSugerencias(data, container) {

   data.data.forEach(word => {

      const li = document.createElement('li');
      li.className = "suggestion";
      li.setAttribute('data-word',`${word.name}`)
      li.innerHTML = `
      <div class="lookup-suggestion">
         <img src="../assets/icon-search.svg"
         data-word="${word.name} class="lookup-suggestion-img"
         alt="look up ${word.name}">
      </div>
      <span data-word="${word.name}">${word.name}</span>`

      container.appendChild(li);
   });
}

function limpiarContenedor(container) {
   while (container.firstChild) {
      container.removeChild(container.firstChild);
   }
}