const matrixGenerator = function() {
  const YEAR_ROWS = 3;
  const PATIENT_COLUMNS = 10;

  let patientMatrix = [
    [],
    [],
    []
  ];

  for (let i = 0; i < PATIENT_COLUMNS; i++) {
    const nombre = faker.name.firstName();
    const apellido = faker.name.lastName();
    const sexo = faker.random.arrayElement(['F', 'M']);
    const OS = faker.random.arrayElement(['OSDE', 'SANCOR SALUD', 'MEDIFÉ', null]);

    for (let j = 0; j < YEAR_ROWS; j++) {
      let patient = {
        nombre: nombre,
        apellido: apellido,
        sexo: sexo,
        OS: OS,
        glucosa: 60 + (faker.random.number() % 120)
      };

      patientMatrix[j].push(patient);
    }
  }

  return patientMatrix;
}



  let pacientes = matrixGenerator();
  let cantidadMujeres = 0;
  let pacientesOsde = [];
  let pacienteDiabetes = [];
   
  for (i = 0; i < pacientes.length; i++) {    // datos (filas) lo tomo como los datos de los pacientes
    
    for (j =0; j < ; j++) {       //colunma los 3 años
  
      if (pacientes[0][i].sexo === 'F'){
        cantidadMujeres++;
      }
        if (pacientes[i].OS === "OSDE") {
         window.print(pacientesOsde[pacientes]);
        }
        if (pacientes.glucosa >= 126) {
          window.print(pacientes [nombre, ano]);
      }
    }  
  }  
  let totalPacientes = 10
  let porcentajeMujeres = (100 * cantidadMujeres) / totalPacientes;
    console.log("El porcentaje de mujeres es " + porcentajeMujeres);
    


console.log(cantidadMujeres);
console.log(pacientesOsde);
console.log(pacienteDiabetes);

