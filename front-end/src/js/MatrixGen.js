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
const  getData = () =>{
  let pacienteXaño = matrixGenerator();
  let estadisticas = [];
  for ( let i = 0; i < pacienteXaño.length; i++) {
    let info = pacienteXaño[i];
    let contadorNumeroMujeres = 0;
    let pacientesOS = [];
    let pacientesConDiabetes = [];
    for( let j = 0; j < info.length; j++) {
      let paciente = info[j];
      if ( paciente.sexo === 'F' ) {
        contadorNumeroMujeres++;
      }
      if (paciente.OS === 'OSDE' ){
        pacientesOS.push(paciente);
      }
      if (paciente.glucosa >= 126) {
       pacientesConDiabetes.push (paciente.nombre);
      }
    } 

    let porcentajeMujeres = (100/info.length)*contadorNumeroMujeres;
    console.log(porcentajeMujeres);
    let estadisticaXaño = {
      porcentajeMujeres:porcentajeMujeres,
      pacientesOSDE:pacientesOS,
      pacienteDiabetes:pacientesConDiabetes,
    };
    estadisticas.push(estadisticaXaño);
  } 
  console.log('estadisticas',estadisticas);
  console.log('paciente X año',pacienteXaño);
}
/*
porcentaje mujeres = 100/cantidad de pacientes x cantidad de mujeres 
*/