//Reconoce el link del navbar
const linkMood = document.getElementById('mood');

linkMood.addEventListener('click', containsDark);
//Almacena el estado actual
let mood;

//Carga el modo almacenado en leerLocalStorage
currentMood();

//Lee el local storage para conocer el mood actual
function currentMood( ){
   try{
      //Si mood = False está en diurno. 
      //Si mood = True está en nocturno.
      mood = leerLocalStorage('mood') || false;
      guardarLocalStorage('mood', mood);
   } catch (error){ 
      console.log(error)
   }

   if(mood){
      linkMood.innerHTML = "<span>Modo Diurno</span>";
      document.body.classList.add('dark');
   } else {
      linkMood.innerHTML = "<span>Modo Nocturno</span>";
      document.body.classList.remove('dark');
   }
}


function containsDark () {
   let status = document.body.classList.contains('dark');
   changeMood( status );
}

function changeMood( status ){
   if(status){
      linkMood.innerHTML = "<span>Modo Nocturno</span>";
      document.body.classList.remove('dark');
   } else {
      linkMood.innerHTML = "<span>Modo Diurno</span>";
      document.body.classList.add('dark');
   }
   guardarLocalStorage('mood', !status);
}
