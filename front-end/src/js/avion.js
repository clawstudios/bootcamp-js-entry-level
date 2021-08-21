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
 let asientos = [
  //[false,false,false],
  //[false,false,false],
  // [false,false,false]

  [false, false, false],
  [true, true, true],
  [true, true, true],
  [true, true, true]
];//modificar AVAILABLE CULEAO
let countAvailable = () => {
  let contador = 0;
  for (let i = 0; i < asientos.length; i++) {
      let fila = asientos[i];
      for (let j = 0; j < fila.length; j++) {
          let asiento = fila[j];
          if (asiento === true) {
              contador = contador + 1;
          }
      }
  }
  return contador;
}

let isFullOfCapacity = () => {
  if (countAvailable() === 0) {
      return true;
  } else {
      return false;
  }
}
let nextAvailable = () => {
  if (isFullOfCapacity() === true) {
      return 'no existe asiento disponible bro'
  } else {
      for (let i = 0; i < asientos.length; i++) {
          let fila = asientos[i];
          for (let j = 0; j < fila.length; j++) {
              let asiento = fila[j];
              if (asiento === true) {
                  let filaSeleccionada = document.getElementsByClassName('row')[i];
                  let asientoSeleccionado = filaSeleccionada.getElementsByClassName('col-auto')[j];
                  asientoSeleccionado.className = 'col-auto mx-2 fila__asiento--ocupado';
                  asientos[i][j] = false;
                  return 'reservado el asiento de la fila: ' + (i + 1) + ' columna: ' + (j + 1);
              }
          }
      }
  }
}
console.log(countAvailable())

console.log(isFullOfCapacity())

console.log(nextAvailable())