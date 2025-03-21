function evaluarcompra(cantidadDisponible){

    let elementoRespuesta = document.getElementById("desicion");

    let elementoCantidad = document.getElementById("textoCantidad");
    let cantidadCompra = elementoCantidad.value;

    if (cantidadCompra < cantidadDisponible){
        elementoRespuesta.textContent = "compraste" + cantidadCompra + "hay disponible aun" + 
        (cantidadDisponible - parseInt(cantidadCompra)).toString();;

    }


}