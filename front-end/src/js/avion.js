const max = 12;
let conteo = 0;
let asientos = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false],
];
let fila = asientos;

function nextAvailable() {
  for (let i = 0; i < fila.length; i++) {
    let columna = asientos[i];
    for (let e = 0; e < columna.length; e++) {
      let fila = asientos[e];
      
      if (asientos[i][e] == false) {
        conteo = conteo + 1;
        asientos[i][e] == true;
        let filaSeleccionada = document.getElementsByClassName('row')[i];
        let asientoSeleccionado = filaSeleccionada.getElementsByClassName('col-auto')[e];
        asientoSeleccionado.className = 'col-auto mx-2 fila__asiento--ocupado';
        asientos[i][e] = true;
        return "fila " + (i + 1) + " columna " + (e + 1);
      }
    }
  }
}



countAvailable = () => {
  return max - conteo; 
};

isFullOfCapacity = () => {
  if(conteo < max){
    console.log("g")
  }else{
    window.alert("h")
  }
}