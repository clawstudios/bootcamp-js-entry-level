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
       
       let filaSeleccionada = document.getElementsByClassName('row') [i];
       let asientoSeleccionado = filaSeleccionada.getElementsByClassName('col-auto') [j];
       
       asientoSeleccionado.className = 'col-auto mx-2 fila__asiento--ocupado';



       reservas[i][j] = true;
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
}