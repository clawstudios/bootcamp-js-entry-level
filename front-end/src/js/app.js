/**
 * En este archivo debes agregar tus funciones para realizar los ejecricios
 * del Bootcamp.
 * =========
 * Recuerda:
 * =========
 * Siempre que tengas dudas, primero investiga e intenta resolverlo solo,
 * pero si te encuentras bloqueado, no dudes en pedir ayuda.
 *
 */
 const maxSeats = 12;

 let countReservados = 0;
 let reservas = [
   [true,true,true],
   [true,true,true],
   [true,true,true],
   [true,true,true],
 ];
 
 function nextAvailable(){
   let asiento = "no se encuentra ningún asiento libre";
 
   let rows = reservas.length;
   outer_loop:
   for(let i=0;i<rows;i++){
    let columns = reservas[i].length;
    for(let j=0;j<columns;j++){
 
      if(reservas[i][j]==true){
        countReservados=countReservados+1;
        reservas[i][j] = false;
        asiento = 'reservado el asiento de la fila: ' + i + ' columna: ' + j;
        break outer_loop;
      }
 
    }
   }
 
   return asiento;
 }
 
 function countAvailable(){
    return maxSeats-countReservados;
 }
 
 function isFullOfCapacity(){
   return maxSeats==countReservados;