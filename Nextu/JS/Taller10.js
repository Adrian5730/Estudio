class ElementoInstruccional{
    constructor(identificador, tipo, version){
        this.identificador = identificador;
        this.tipo = tipo;
        this.version = version;
    }

    nombreArchivo(){
        return `COMP18S_${this.identificador}_${this.tipo}_${this.version}.midoc`;
    }
}

var a1 = new ElementoInstruccional(1,"interactiva","V1").nombreArchivo();
var a2 = new ElementoInstruccional(2,"ejercicio","V2").nombreArchivo();
var a3 = new ElementoInstruccional(3,"laboratorio","V1").nombreArchivo();

console.log(a1);
console.log(a2);
console.log(a3);