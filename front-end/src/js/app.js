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
// Pensamiento para la siguiente funcion:
// "Se debe contar cuantos asientos hay disponibles y cuantos ocupados."
// - saber cuantos acientos hay (12 asientos)
// - cuantos estan disponibles (true) 
//   - recorrer todo los ascientos para saber si es true o false
//   - si es true se reserva 


function countAvailable(){

  let asiento_vacio = true
  let ocupado = false

  let fila = matriz.lenght; i=0;
  for (i; i < fila; i++){
    let columna = matriz[i].lenght; j=0;
      for (j; j< columna; j++){
    
        if( [i][j] == true){
          suma (asiento_vacio)
        }else{ 
          suma (ocupado)
        }
      }
    }
  }
   
  return (asiento_vacio);
console.log(countAvailable)

function isFullOfCapacity(){ 
  if (total_de_asientos - asientos_vacios === 0);{
      document.write("El avion esta completo");
  }
  
}