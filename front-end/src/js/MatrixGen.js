const matrixGenerator = () => {
  const YEAR_ROWS = 3;
  const PATIENT_COLUMNS = 10;

  let patientMatrix = [
    [], [], []
  ];

  for (let i = 0; i < YEAR_ROWS; i++) {
    for (let j = 0; j < PATIENT_COLUMNS; j++) {
      patientMatrix[i].push({
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        sexo: faker.random.arrayElement(['F', 'M']),
        OS: faker.random.arrayElement(['OSDE', 'SANCOR SALUD', 'MEDIFÉ']),
        glucosa: 60 + (faker.random.number() % 120),
      });
    }
  }

  return patientMatrix;
}