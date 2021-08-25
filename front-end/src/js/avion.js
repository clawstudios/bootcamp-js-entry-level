let reservados = 0;
let asientos = [
    [true, true,true]
    [true, true,true]
    [true, true,true]
    [true, true,true]
];

let cantidad = asientos.length;

function nextAvailable(){
    let estadoAsiento = "No se encuentran asientos disponibles";
    outer_loop:
    for(let i = 0; i < cantidad; i++){
        let columnas = asientos[i].length
        for(let j = 0; j < columnas ; j++){

            if(asientos[i][j]==true){
                reservados = reservados + 1
                asientos[i][j] = false;
                estadoAsiento = 'Reserva el asiento de la fila: ' + i + 'columna: ' + j;
                break outer_loop
            }

        }
    }
}
return estadoAsiento;

function countAvailable(){
    return "Hay " + reservados + " asientos reservados";
    return "Hay " + (cantidad - reservados) + " asientos libres"; 
}

function fullOfCapacity(){
    if(asientos == reservados){
        let Alerta = "No hay asientos disponibles";
        alert(Alerta);
        throw new Error (Alerta);
    }
}