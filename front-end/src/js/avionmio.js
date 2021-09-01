// asumo que la distribucion de asientos en mi avion es de la siguiente manera
// donde un valor en 'true' indica el asiento disponible
let asiento_vacio = [
  [true, true, true],
  [true, true, true],
  [true, true, true],
  [true, true, true],
];

function countAvailable() {
  //NO OLVIDAR LOS ';' AL FINAL DE LAS DECLARACIONES //<-
  let contadorAsientosVacios = 0; //<-

  /*
  asiento_vacio.length = cantidad de filas de la matriz
  fila.length = cantidad de columnas en una fila en particular
  */
  for (let i = 0; i < asiento_vacio.length; i++) {
    let fila = asiento_vacio[i];
    for (let j = 0; j < fila.length; j++) {
      let asiento_vacio = fila[j]; // esto antes estaba como "fila [i]" ojo con esos espacios intermedios que causan errores. ademas no es 'i', es 'j'
      if (asiento_vacio === true) {
        contadorAsientosVacios = contadorAsientosVacios + 1; //<-
      }
    }
  }
  return contadorAsientosVacios;
}

function isFullOfCapacity() {
  //si esta lleno hay que retornar verdadero, no falso.
  if (countAvailable() === 0) {
    return true;//<-
  } else {
    return false; //<-
  }
}

function nextAvailable() {
  //si el avion esta lleno, no hacer nada y avisar al usuario de tal situacion
  if (isFullOfCapacity() === true) {
    window.alert("completo");
    return;
  } else {

    //crear variables para tener un mejor manejo de la cantidad de filas y columnas de una matriz
    const NRO_FILAS = asiento_vacio.length;
    for (let i = 0; i < NRO_FILAS; i++) {
      let fila = asiento_vacio[i];
      const NRO_COLUMNAS = fila.length;
      for (let j = 0; j < NRO_COLUMNAS; j++) {

        //=======================================================
        // lo que va aqui dentro, forma parte de la logica
        // que resuelve una reserva. Todo lo que esta antes
        // es la logica para simplemente recorrer la matriz de datos.
        //=======================================================
        // let asiento_vacio = fila[i]; // esto esta mal. asiento vacio ya era una variable que representa la matriz. al hacer esto estas destruyendo la matriz. revisar la linea 3
        let celda = fila[j];
        if (celda === true) {
          let filaseleccionada = document.getElementsByClassName('row')[i];
          // console.log(filaseleccionada);
          let asientoseleccionado = filaseleccionada.getElementsByClassName('col-auto')[j];
          asientoseleccionado.className = 'col-auto mx-2 fila__asiento--ocupado';
          // console.log(asiento_vacio[i][j]);
          asiento_vacio[i][j] = false; // asiento_vacio [i][j] otra vez un espacio entre medio
          return 'reservado el asiento de la fila:' + (i + 1) + 'columna:' + (j + 1);
        }
        //==============================

      }
    }
  }
}