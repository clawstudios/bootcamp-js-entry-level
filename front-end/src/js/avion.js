const maxSeats = 12;

let countReservados = 0;
let reservas = [
  [false,false,false],
  [false,false,false],
  [false,false,false],
  [false,false,false],
];

function nextAvailable(){
  let asiento = "no se encuentra ningún asiento libre";

  let rows = reservas.length;
  outer_loop:
  for(let i=0;i<rows;i++){

   let columns = reservas[i].length;
   for(let j=0;j<columns;j++){

     if(reservas[i][j]==false){
       countReservados=countReservados+1;
       reservas[i][j] = true;
       colorSeat(i, j);
       asiento = 'reservado el asiento de la fila: ' + (++i) + ' columna: ' + (++j);
       break outer_loop;
     }

   }

  }

  console.log(asiento);
  return asiento;
}

function countAvailable(){
  return maxSeats-countReservados;
}

function isFullOfCapacity(){
  return maxSeats==countReservados;
}

function colorSeat(fila,columna){
  //seleccionar el elemento contenedor de lo que me interesa
  const avionContainer = document.getElementsByClassName('avion').item(0);

  //seleccionar el elemento HTML que representa la fila de interes
  const filas = avionContainer.children;
  const filaSeleccionada = filas.item(fila);

  //seleccionar el asiento de interes
  const asientos = filaSeleccionada.children;
  let asientoSeleccionado = asientos.item(columna);

  //pintarlo como reservado
  asientoSeleccionado.classList.remove('fila__asiento--libre');
  asientoSeleccionado.classList.add('fila__asiento--ocupado');
}