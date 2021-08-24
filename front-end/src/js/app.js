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
 let reservados = 0
 let asientos = [
     [true, true,true]
     [true, true,true]
     [true, true,true]
     [true, true,true]
 ];
 
 let cantidad = asientos.length;
 
 function nextAvailable(){
 
     let estadoAsiento = "No se encuentran asientos disponibles"
 
     outer_loop:
     for(let i = 0; i < asientos; i++){
         let columnas = asientos[i].length
         for(let j = 0; j < columnas ; j++){
 
             if(asientos[i][j]==true){
                 reservados = reservados + 1
                 asientos[i][j] = false;
                 estadoAsiento = 'Reservado el asiento de la fila: ' + i + 'columna: ' + j;
                 break outer_loop
             }
 
         }
     }
 }
 
 return estadoAsiento
 
 function countAvailable(){
     return "Hay " + reservados + " asientos reservados"
     return "Hay " + (cantidad - reservados) + " asientos libres" 
 }
 
 function fullOfCapacity(){
     if(asientos == reservados){
         let Alerta = "No hay asientos disponibles"
         alert(Alerta);
         throw new Error (Alerta);
     }
 }