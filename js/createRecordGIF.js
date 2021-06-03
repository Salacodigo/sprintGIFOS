//Funcion para pedir acceso a la cámara
async function requestCameraAccess() {
   try {
      let access = false;

      access = await getStreamAndRecord();

   } catch (err) {
      console.log(err);
   }
}

//Funcion para pedir acceso a la cámara
//Muestra lo que captura la pantalla en el tag <video></video>
async function getStreamAndRecord() {
   try {
      stream = await navigator.mediaDevices.getUserMedia({
         audio: false,
         video: {
            height: { max: 480 }
         }
      })
      video.srcObject = stream;
      video.play()

   } catch (err) {
      console.log(err);
   }
}

//Empieza a grabar y cronometrar
async function recording() {
   createObject();
   recorder.startRecording();
}

function createObject() {
   recorder = RecordRTC(stream, {
      type: 'gif',
      frameRate: 1,
      quality: 10,
      width: 360,
      hidden: 240,
      onGifRecordingStarted: function () {
         console.log('started');
      },
   });
}


async function stopRecording() {
   await recorder.stopRecording();

   let blob = await recorder.getBlob();
   //invokeSaveAsDialog(blob); //Linea para guardar el GIF en el pc local

   form = new FormData();
   let dateCreated = tiempoActual();
   form.append('file', recorder.getBlob(), `${dateCreated}.gif`);
   console.log(form.get('file'))

}

function stopStreamedVideo(video) {
   const stream = video.srcObject;
   const tracks = stream.getTracks();
   tracks.forEach(function (track) {
      track.stop();
   });
   video.srcObject = null;
}

async function uploadToGiphy(form) {
   let claseBusqueda = new Busqueda();
   let response = await claseBusqueda.uploadGIF(form);
   return response.data.id;
}

