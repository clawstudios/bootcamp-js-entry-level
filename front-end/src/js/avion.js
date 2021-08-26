let reservados = 0;
 let asientos = [
     [true, true,true],
     [true, true,true],
     [true, true,true],
     [true, true,true]
 ];
 function countAvailable(){
     let asientosOcupados = 0;
     for(let i = 0; i < asientos.length; i++){
         let fila = asientos[i]
         for (let j = 0; j < fila.length; j++){
             let asiento = fila[j];
             if(asiento === true){
                 asientosOcupados = asientosOcupados + 1;
                 
             }
         }
     }
     return asientosOcupados
 }

 function fullOfCapacity(){
     if(countAvailable() === 0){
         window.alert('NO HAY MAS ASIENTOS');
         return true;
     }else{
         return false;
     }

 }
 function nextAvailable(){
     if (fullOfCapacity() === true){
         return 'No hay asiento disponible'
     } else {
         for (let i = 0; i < asientos.length; i++){
             let fila = asientos[i];
             for (let j = 0; j < fila.length; j++){
                 let asiento = fila[j];
                 if (asiento === true){
                     let filaSeleccionada = document.getElementsByClassName('row')[i];
                     let asientoSeleccionado = filaSeleccionada.getElementsByClassName('col-auto')[j];
                     asientoSeleccionado.className = 'col-auto mx-2 fila__asiento--ocupado';
                     asientos[i][j] = false;
                     return 'Reservo el asiento de la fila: ' + (i + 1) + ' columna: ' + (j + 1);
             }

         }
     }

     
 }
}