
const init = function () {
  //genero una matriz de pacientes
  const patientMatrix = matrixGenerator();
  console.log('La muestra de pacientes es la siguiente: ');
  console.log(patientMatrix);
  console.log('-------------------------------------------');

  //constantes de interes
  const pacientes = patientMatrix[0];

  // Porcentaje de mujeres sobre el total de pacientes en la muestra.
  const mujeres = filterPatientsByAttribute(pacientes, 'sexo', 'F');
  console.log('El porcentaje de mujeres sobre la muestra es de ' + ((mujeres.length / pacientes.length) * 100) + '%');
  console.log('-------------------------------------------');

  // Los datos de aquellos pacientes cuya obra social sea OSDE.
  const pacientesOSDE = filterPatientsByAttribute(pacientes, 'OS', 'OSDE');
  console.log('los pacientes con OSDE son los siguientes: ');
  console.log(pacientesOSDE);
  console.log('-------------------------------------------');

  // Informe por paciente, si en algún análisis durante los 3 años, su nivel de glucosa en sangre ha detectado riesgo de diabetes.
  const pacientesDeRiesgo = evaluateBlood(patientMatrix,RISK_LEVEL,STARTER_YEAR);
  console.log('los pacientes de riesgo son los siguientes: ');
  console.log(pacientesDeRiesgo);
  console.log('-------------------------------------------');
}

const filterPatientsByAttribute = function (patientList, objectAttr, objectValue) {
  // almacenar aqui los pacientes que cumplen una cierta condicion
  let filteredElements = [];

  //recorrer la lista de pacientes
  const PATIENT_COUNT = patientList.length;
  for (let i = 0; i < PATIENT_COUNT; i++) {

    // determino que operacion realizar en base al tipo de atributo (attr)
    switch (objectAttr) {
      case 'OS':
        if (patientList[i].OS === objectValue) {
          filteredElements.push(patientList[i]);
        }
        break;
      case 'sexo':
        if (patientList[i].sexo === objectValue) {
          filteredElements.push(patientList[i]);
        }
        break;
    }

  }

  return filteredElements;
}

const evaluateBlood = function (patientMatrix,riskLevel,starterYear) {
  let riskPatients = []; // almacena objetos con los nombre de pacientes y años en los que ha dado riesgo

  // recorrer la lista de analisis de sangre x año
  const PATIENT_COUNT = patientMatrix[0].length;
  for (let i = 0; i < PATIENT_COUNT; i++) { //for de pacientes

    let riskYearDetection = []; // almacena los años en los cuales el paciente ha dado riesgo

    const YEARS_COUNT = patientMatrix.length;
    for (let j = 0; j < YEARS_COUNT; j++) { // for de años

      // si se detecta un nivel alto de glucosa, almacenar el año
      if (patientMatrix[j][i].glucosa > riskLevel) {
        riskYearDetection.push(starterYear + j);
      }

    }

    // devolver el paciente solo si en alguno de los años de analisis se ha detectado riesgo de diabetes
    if (riskYearDetection.length > 0) {
      const patientObject = patientMatrix[0][i];
      riskPatients.push({
        nombre: patientObject.nombre + ' ' + patientObject.apellido,
        anios: riskYearDetection
      });
    }

  }

  return riskPatients;
}

//==========================================================
const RISK_LEVEL = 126;
const STARTER_YEAR = 2018;

init();

//==========================================================