function encabezadoEvento(nombreEvento, lugar){
    console.log(`${nombreEvento}, ${lugar}`)
};

encabezadoEvento("Concierto","Sala B");

function limpiarNombreParticipante(nombre, apellidos){
  console.log(`${apellidos.trim().toUpperCase()}, ${nombre.trim().toLowerCase()}`);
}

limpiarNombreParticipante("  NICOLL","                   DAYAN    ")