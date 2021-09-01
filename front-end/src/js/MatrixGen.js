const matrixGenerator = function () {
  const YEAR_ROWS = 3;
  const PATIENT_COLUMNS = 10;

  let patientMatrix = [
    [],
    [],
    []
];  
//constructora
    for (let i = 0; i < PATIENT_COLUMNS; i++) {
    const nombre = faker.name.firstName();
    const apellido = faker.name.lastName();
    const sexo = faker.random.arrayElement(["F", "M"]);
    const OS = faker.random.arrayElement([
      "OSDE",
      "SANCOR SALUD",
      "MEDIFÉ",
       null,
    ]);

//recorrido por array
    for (let j = 0; j < YEAR_ROWS; j++) {
      let patient = {
        nombre: nombre,
        apellido: apellido,
        sexo: sexo,
        OS: OS,
        glucosa: 60 + (faker.random.number() % 120),
      };
//mete al array
      patientMatrix[j].push(patient);

    }
  }
return patientMatrix;
};

function conteoMujeres_conteoOsde(){
  const pacientes = matrixGenerator();
  let filas = pacientes.length;
  let columnas = pacientes[0].length;
  let contadorMujeres = 0;
  let contadorOsde = 0;
  let glucosa = {
    nombre: nombre,
    año: año,
  };

  for(let i = 0; i < columnas; i++){  

      if(pacientes[0][i].sexo === "F"){
          contadorMujeres = contadorMujeres+1;
      }
      if(pacientes[0][i].OS === "OSDE") {
        contadorOsde = contadorOsde + 1;
        //console.log(pacientes[0][i]);
      }

    for (let j = 0; j < filas; j++){
      if(pacientes[j][i].glucosa > 126){
        let glucosa = {
          //nombre: nombre,
          año: 2018 + j,         
        };
      }
    }
  }
  console.log(contadorMujeres);
  console.log(contadorOsde);
  console.log(glucosa);
}