var menuVegetarios = ["Sopa de verduras", "Verduras", "Sin carne","Especial de lentejas","Garbanzos"]

var menuNormal = ["Asado","Carne","Chorizo","Filete","Comida para comer carne"]

var esVegetariano = false;

function comida(esVegetariano, menuVegetarios, menuNormal){
    if(esVegetariano){
        for(i=0; i < menuVegetarios.length; i++){
            console.log(`Menus Vegetarianos ${menuVegetarios[i]}`)
        }
    } else{
        for (i =0 ; i < menuNormal.length; i++) {
            console.log(`Menus Vegetarianos ${menuNormal[i]}`)
        }
    }
}

comida(esVegetariano,menuVegetarios,menuNormal );