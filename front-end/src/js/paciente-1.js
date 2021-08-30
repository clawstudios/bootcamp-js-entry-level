
class paciente {
    constructor(apellido, nombre, sexo, OS, Glucosa) {
        this.appellido = apellido;
        this.nombre = nombre;
        this.sexo = sexo;
        this.OS = OS;
        this.Glucosa = Glucosa;
    }
};
    
    let Garcia = new paciente("Garcia", "Juan","M","Osde",89);
    let Perico = new paciente("Perico", "Francisco","M", "Pasteur", 129);
    let Juarez = new paciente("Juarez", "Maria", "F", "Sancor", 56);
    let Cardozo = new paciente("Cardozo", "Juana", "F", "Osde", 140);
    let Ronelli= new paciente("Ronelli", "Lucas", "M", "Sancor", 70);
    let Messi = new paciente("Messi", "Ivan", "M", "Sancor", 139);
    let Beltran= new paciente("Beltran", "Martin", "M", "Osde", 80);
    let Reina = new paciente("Reina", "David", "M", "Sancor", 56);
    let Penci = new paciente("Penci", "Celeste", "F", "Apross", 78);
    let Lopez= new paciente("Lopez", "Marcos", "M", "Swiss", 126);
    
    console.log(paciente());
    