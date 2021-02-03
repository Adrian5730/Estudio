var numeros = [1,2,3,4,5]
//var arreglo2 = [1,2,4,8];
// Construye una función que dado un arreglo de números devuelva un arreglo del doble de cada elemento.

var numerosPorDos = numeros.map(x =>{
    return x * 2
})

console.log(numerosPorDos);

//Construye una función que dado un arreglo de números devuelva un arreglo de los números impares de ese arreglo.

var impares = numeros.filter(x =>{
    return x%2 !== 0
})

console.log(impares);

//Construye una función que dado un arreglo de números devuelva el doble de cada elemento si este es impar, de lo contrario devolver la mitad.

var numerospros = numeros.map(x=>{
    if(x%2!==0){
        return x*2
    } else {
        return x/2
    }
})

console.log(numerospros);