var expresionRegular;
function validacionNumero(tel) {
expresionRegular = new RegExp(/^\d{3}[\s-]\d{4}[\s-]\d{3}$/);
var resultado = expresionRegular.test(tel)

console.log(resultado)
}

validacionNumero("123-2112-123")

//---------------------------------------------------------------------------------------------

//Crea una función que valide si un string es una fecha DD-MM-AAAA.   bueno -> 12-01-1999   01-01-2019  malos -->  12/01/1999 1-1-19


var expresionRegular;
function validacionFecha(fecha) {
expresionRegular = new RegExp(/^\d{2}-\d{2}-\d{4}$/);
var resultado = expresionRegular.test(fecha)

console.log(resultado)
}

validacionFecha("01-01-2019")

//---------------------------------------------------------------------------------------------


//Crea una función que valide si un string es un código de exactamente 3 dígitos. bueno --> 123 000  malos --> A12  1  12


var expresionRegular;
function validacionNum(numero) {
expresionRegular = new RegExp(/^\d{3}$/);
var resultado = expresionRegular.test(numero)

console.log(resultado)
}

validacionNum("432")

