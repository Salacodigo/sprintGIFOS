
async function descargaGIF(nombre, id) {
   
   let a = document.createElement('a');
   
   // let response = await fetch(`https://media2.giphy.com/media/${id}/giphy.gif?${APIkey}&rid=giphy.gif`);
   let response = await claseBusqueda.downloadGIF(id);
 
   let file = await response.blob();
   //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes
   a.download = `${nombre}`;
   a.href = window.URL.createObjectURL(file);
 
   //store download url in javascript https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes#JavaScript_access
   a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
 
   //click en el elemento para inciar la descarga
   a.click();
 
 }