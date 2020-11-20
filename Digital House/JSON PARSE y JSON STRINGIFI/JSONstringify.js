let personas = {
    nombre: "Adrian",
    apellido: "Olave",
    edad: 18,
    ciudad: "Bogota"
};

let personasEnJSON = JSON.stringify(personas);
// Se convieerte en un string en formato Json
console.log(personasEnJSON);