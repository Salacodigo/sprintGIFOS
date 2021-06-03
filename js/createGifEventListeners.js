function loadEventListenersCreateGif() {

   repeatRecording.addEventListener('click', repeatRecordingAction);

   startBtn.addEventListener('click', startBtnAction);
   recordBtn.addEventListener('click', recordBtnAction);
   finishBtn.addEventListener('click', finishBtnAction);
   uploadBtn.addEventListener('click', uploadBtnAction);
   
   //Botones despues de cargar el gif
   downloadCreatedGif.addEventListener('click', downloadCreatedGifAction);
   linkCreatedGif.addEventListener('click', linkCreatedGifAction);
}

