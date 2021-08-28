let pacientes = [facu];

// INPUT
let facu = new Paciente("1", "11", "M", "null", "130 mg/dL");
/*
let b = new Paciente("2", "12", "F", "OSDE", "130 mg/dL");
let c = new Paciente("3", "13", "M", "null", "130 mg/dL");
let d = new Paciente("4", "14", "F", "null", "130 mg/dL");
let e = new Paciente("5", "15", "M", "null", "130 mg/dL");
let f = new Paciente("6", "16", "M", "OSDE", "130 mg/dL");
let g = new Paciente("7", "17", "F", "null", "130 mg/dL");
let h = new Paciente("8", "18", "M", "OSDE", "130 mg/dL");
let i = new Paciente("9", "19", "M", "null", "130 mg/dL");
let j = new Paciente("10", "20", "F", "OSDE", "130 mg/dL");
*/
// CONSTRUCTORA
function Paciente(nombre, apellido, sexo, OS, glucosa){
    this.nombre = nombre
    this.apellido = apellido
    this.sexo = sexo
    this.OS = OS
    this.glucosa = glucosa
};

function analizador(){

    for (let i = 0; i < pacientes.length; i++) {
     let columna = pacientes[i];
      for (let e = 0; e < columna.length; e++) {
       let fila = asientos[e];

       if(pacientes[i][e].sexo == "F"){
           let conteo = conteo++;
           
       }
    }
}
};
console.log(pacientes);
