let personas = {
    nombre: "Adrian",
    apellido: "Olave",
    edad: 18,
    ciudad: "Bogota"
};

let personasEnJSON = JSON.stringify(personas);
// Se convieerte en un string en formato Json
console.log(personasEnJSON);

// Lo convierte en el tipo de dato original
let personasEnObjeto = JSON.parse(personasEnJSON)

console.log(personasEnObjeto);