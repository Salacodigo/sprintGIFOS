document.addEventListener("DOMContentLoaded", () => {
   loadEventListenersCreateGif();
});

//Instancia de clase Busqueda
let claseBusquedaCreate = new Busqueda()
let api_key = claseBusquedaCreate.getApiKey;

//Object recorder
let recorder = {};
let access;
let form = ''; 
let s = 0;
let time = '';

async function repeatRecordingAction() {
   console.log('repeatRecordingAction');
   
   await requestCameraAccess();
   volverPantalla3();
   restartCronometer();
}

async function startBtnAction() {
   console.log('startBtnAction');
   cambioPantalla2();
   await requestCameraAccess();
   cambioPantalla3();
}

async function recordBtnAction() {
   console.log('recordBtnAction');
   await recording();
   startCronometer();
   cambioPaso4();
}

async function finishBtnAction() {
   console.log('finishBtnAction');
   stopCronometer();
   await stopRecording();
   cambioPaso5();
}

async function uploadBtnAction() {
   console.log('uploadBtnAction');
   stopStreamedVideo(video);
   cambioPantalla4();
   let id = await uploadToGiphy(form);
   informacionBotones(id);
   saveCreatedGifInfo();
   cambioPaso6();
   
}

//Pedir permisos
function cambioPantalla2(){
   screenStep1.style.display = "none";
   screenStep2.style.display = "block";
}
//Muestra el video
function cambioPantalla3() {
   screenStep2.style.display = "none";
   screenStep3.style.display = "block";

   startBtn.style.display = "none";
   recordBtn.style.display = "block";
}
//Volver a la pantalla donde se piden permisos
function volverPantalla3(){
   uploadBtn.style.display = 'none';
   recordBtn.style.display = 'inline';
   repeatRecording.style.display = 'none';
}
//GIFO subido con exito
function cambioPantalla4(){
   screenStep3.style.display = "none";
   screenStep4.style.display = "block";
}

//Al dar clic en record
function cambioPaso4() {
   recordBtn.style.display = "none";
   finishBtn.style.display = "block";
   crono.style.display = "block";
}

//Al dar clic en Finalizar
function cambioPaso5() {
   finishBtn.style.display = "none";
   uploadBtn.style.display = "block";
   crono.style.display = "none";
   repeatRecording.style.display = "block";
}

//Al dar clic en upload
function cambioPaso6(){
   repeatRecording.style.display = "none";
   uploadBtn.style.display = "none";

   downloadCreatedGif.style.display = "block";
   linkCreatedGif.style.display = "block";
}



//Agrega la informacion del GIF Creado a los botones de link y descarga
function informacionBotones(id){

   //Guarda el id para buscarlo para dibujar los gifs creados
   BDcreatedGifsId.push(id);
   
   //Url para encontrar el GIF con el id
   let url = `https://media2.giphy.com/media/${id}/giphy.gif?${api_key}&rid=giphy.gif`;
   
   downloadCreatedGif.setAttribute("data-id", `${id}`);
   linkCreatedGif.setAttribute("url", `${url}`);

}

async function downloadCreatedGifAction(e){
   console.log('e:',e)
   let id = e.target.getAttribute('data-id');
   await descargaGIF('createdGif', id);
}

function linkCreatedGifAction(e){
   console.log('e:',e)
   let url = e.target.getAttribute('url');
   window.open(url,"ventana1","width=1440,height=720,scrollbars=NO")
}


async function saveCreatedGifInfo(){
   let ids = BDcreatedGifsId;

   let dataJSON = await getGIfsById(ids);

   console.log('dataJSON',dataJSON)

   dataJSON.data.forEach(gif => {

      let newGif = new GIF(
         gif.id, //id
         gif.username, //username
         gif.title, //title
         gif.images.downsized.url, //preview_url
         gif.url, //gif_url
         false //statusFavorite
      );

      BDcreatedGifs.push(newGif);

   });
   guardarLocalStorage('BDcreatedGifs', BDcreatedGifs);
   
}



//Cronometro
function startCronometer() {
   interval = setInterval(writeTime, 1000);
 }
 
 function writeTime() {
   time = '';
   s++;
   if (s >= 10) {
     time = `00:00:${s}`;
   } else {
     time = `00:00:0${s}`;
   }
   crono.innerHTML = time;
 }
 
 function stopCronometer() {
   clearInterval(interval);
   crono.innerHTML = time;
 }

 function restartCronometer() {
   clearInterval(interval);
   s = 0;
   crono.innerHTML = `00:00:00`;
 }
 
 function tiempoActual(){
   const tiempoTranscurrido = Date.now();
   const hoy = new Date(tiempoTranscurrido);
   let string = hoy.toISOString(); // "2020-06-13T18:30:00.000Z"
   return string;
 }

 