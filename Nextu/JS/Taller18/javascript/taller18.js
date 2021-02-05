
function validar(formulario){
    if(formulario.nombre.value.trim().length == 0 ){
        document.getElementById("errorNombre").innerHTML = "Campo Obligatorio"
        alert("paila")
    };
}