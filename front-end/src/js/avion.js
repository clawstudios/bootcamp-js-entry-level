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


const btnPedir = document.querySelector('#btnPedir');
//const button = document.querySelector('button');
//let nombreApellido= [];
//let nacionalidad1= [];
//button.onclick = ()=> {
 //   let name = prompt('¿Cuál es tu nombre y apellido?');
   // console.log(name);
  //  let nacionalidad = prompt('¿Cuál es tu nacionalidad');
   // console.log(nacionalidad)
    
 //   nombreApellido.push (name  );
 //   nacionalidad1.push(nacionalidad);
 //    alert('¡Hola ' + name + ', encantado de verte!');
 // }
 let getData = () => {
    let name1 = document.getElementById("name1").value;
    let age1 = document.getElementById("age1").value;
    if (name1 == "" || age1 == "" ) {
        window.alert('falta completar ');
    } else {
        console.log (name1 + "   " + age1);
        clearData();
    } //button.disabled=true;
}
//hacer funcion clear data;
let clearData = () => {
    document.getElementById("name1").value = " ";
    document.getElementById("age1").value= " ";
   };

  let asientos = [
    //[false,false,false],
    //[false,false,false],
    // [false,false,false]
    [true, true, true],
    [true, true, true],
    [true, true, true],
    [true, true, true]
];
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
        window.alert('no hay mas asientos ');
        btnPedir.disabled = true;
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


//function colorSeat(fila,columna){
  ////seleccionar el elemento contenedor de lo que me interesa
  //const avionContainer = document.getElementsByClassName('avion').item(0);

 // //seleccionar el elemento HTML que representa la fila de interes
 // const filas = avionContainer.children;
 // const filaSeleccionada = filas.item(fila);

  //seleccionar el asiento de interes
 // const asientos = filaSeleccionada.children;
  //let asientoSeleccionado = asientos.item(columna);
//
  //pintarlo como reservado
 // asientoSeleccionado.classList.remove('fila__asiento--libre');
 // asientoSeleccionado.classList.add('fila__asiento--ocupado');
//}
