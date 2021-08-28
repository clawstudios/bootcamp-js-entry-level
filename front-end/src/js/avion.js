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
let btnPedir = document.querySelector('#btnPedir');
let datoFormulario=document.querySelector ('#user-name');
let datoUsuario=[];
const maxi2 =()=>{
    datoFormulario.push (datoUsuario);
}
console.log(datoUsuario);
const button = document.querySelector('button');
let guardarDatos= [];
button.onclick = ()=> {
    let name = prompt('¿Cuál es tu nombre y apellido?');
    console.log(name);
    let nacionalidad = prompt('¿Cuál es tu nacionalidad');
    console.log(nacionalidad)
    
    guardarDatos.push (name);
    guardarDatos.push (nacionalidad);
    alert('¡Hola ' + name + ', encantado de verte!');
  }
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
console.log(guardarDatos);