//Funcion que habilita el scroll en la pantalla
function habilitaScroll() {
   window.onscroll = null;
 }


 //Funcion que inhabilita el scroll en la pantalla y se mantiene en la posicion donde es activado
function inhabilitaScroll() {
   let x = window.scrollX;
   let y = window.scrollY;
   window.onscroll = function () { window.scrollTo(x, y) };
 }