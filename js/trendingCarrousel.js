//Almacena la posicion en la que hace scroll el contenedorTrending
let xCoord = 0;
let yCoord = 749.984375;

//Controla el desplazamiento a la izquierda del contenedor trending GIFOS
function controlLeftAction() {
   xCoord -= (357 + 30);
   let limiteIzquierdo = 0;
   if (xCoord < limiteIzquierdo){
      xCoord = limiteIzquierdo;
   }
   containterTrending.scroll(xCoord, yCoord);
}

//Controla el desplazamiento a la derecha del contenedor trending GIFOS
function desplazarDerecha() {
   
   xCoord += (357 + 30);
   let limiteDerecho = (7 * (357 +30) + 30);
   
   if (xCoord > limiteDerecho){
      xCoord = limiteDerecho;
   }
   containterTrending.scroll(xCoord, yCoord);
   
}