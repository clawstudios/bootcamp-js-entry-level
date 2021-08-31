let asiento_vacio= [
  [false,true,true],
  [true,false,true],
  [true,true,true],
  [true,true,true],
];

function countAvailable(){
  let asiento = 0
  for (let i = 0; i< asiento_vacio.length;i++){
    let fila = asiento_vacio[i];
    for (let j = 0; j< fila.length; j++){
      let asiento_vacio = fila [i];
      if (asiento_vacio === true){
        asiento = asiento ++
      }
    }
  }
  return asiento;
}

function isFullOfCapacity(){
  if (countAvailable() == 0){
      window.alert ("completo");
      return false;
    }else{
      return true;
  }
}

function nextAvailable(){
    if (isFullOfCapacity() === true){
      return "no hay aseinto disponible"
    } else{
        for (let i = 0; i < asiento_vacio.length;i++){
            let fila = asiento_vacio[i];
            for (let j = 0; j< fila.length; j++){
              let asiento_vacio = fila [i];
              if (asiento_vacio === true){
                  let filaseleccionada = document.getElementsByClassName('row')[i];
                  let asientoseleccionado = filaseleccionada.getElementsByClassName('col - auto')[j];
                  asientoseleccionado.className ='col-auto mx-2 fila_asiento--ocupado';
                  asiento_vacio [i][j] = false;
                  return 'reservado el asiento de la fila:'+ (i + 1) + 'columna:' + (j + 1);     
              }
            }
        } 
    } 
}



console.log(countAvailable());
console.log(isFullOfCapacity());
console.log(nextAvailable());