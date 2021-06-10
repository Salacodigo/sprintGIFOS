//Funcion que habilita el scroll en la pantalla
function habilitaScroll() {
  console.log('habilitaScroll');
   window.onscroll = null;
}

 //Funcion que inhabilita el scroll en la pantalla y se mantiene en la posicion donde es activado
function inhabilitaScroll() {
  console.log('InhabilitaScroll');
   let x = window.scrollX;
   let y = window.scrollY;
   window.onscroll = function () { window.scrollTo(x, y) };
 }


//Para el caso del menu Mobile
const btnBurguer = document.getElementById('btn-burguer');
const btnBurguerClose = document.getElementById('btn-burguerClose');

btnBurguer.addEventListener('click', inhabilitaScroll);
btnBurguerClose.addEventListener('click', habilitaScroll);