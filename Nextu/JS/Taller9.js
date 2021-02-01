class Persona {
    constructor(){
        this.nombre ="luis";
        this.apellido = "torres";
    }

    // Metodo o funcion
    nombreCompleto(){
        return `${this.nombre} ${this.apellido} `
    }
}

var p = new Persona();

class Empleado extends Persona{
    constructor(id){
        super();
        this.id = id;
    }
}
emp = new Empleado(123);
console.log(emp.id);
console.log(emp.nombre);
console.log(emp.nombreCompleto());

/*class Mascota{
    constructor(nombreApodo){
        this.apodo = nombreApodo;
    }

    setPropietario(propietario){
        this.propietario = propietario
    }
}

var m1 = new Mascota("Tobby");
m1.setPropietario(p);
console.log(m1.propietario.nombreCompleto())*/

