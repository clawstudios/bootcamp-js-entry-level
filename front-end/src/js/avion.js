const max = 12;
 let conteo = 0;
 let asientos = [
   [true, true, true],
   [true, true, true],
   [true, true, true],
   [true, true, true],
 ];
 let fila = asientos;
 function nextAvailable() {
   let asiento = "no hay asientos";

   for (let i = 0; i < fila.length; i++) {
     let columna = asientos[i];
     for (let e = 0; e < columna.length; e++) {
       let fila = asientos[e];

       if (asientos[i][e] == false) {
         conteo = conteo + 1;
         asientos[i][e] == true;
         return "fila " + (i + 1) + " columna " + (e + 1);
       }
     }
   }
 }
 countAvailable = () => {
   return max - conteo;
 };
 isFullOfCapacity = () => {
   if (countAvailable() == max) {
     return true;
   } else {
     return false;
   }
 };
 console.log(nextAvailable());
 console.log(countAvailable());
 console.log(conteo);
