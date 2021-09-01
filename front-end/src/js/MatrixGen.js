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

function datosPacinete () {
  let contadorMujeres = 0;
  let pacientesDiabetes = [];
  let osOSDE = [];
    for (i = 0; i < PATIENT_COLUMNS.lenhth; i++) {
      let infoPacientes = PATIENT_COLUMNS[i];
        for (j = 0; j < infoPacientes.length; j++) {
          let datosPacientes = infoPacientes[j];
           if (pacient.sexo === 'F') {
             contadorMujeres++;
           }
        }

    }
}

console.log(datosPacinete());