//const precioOriginal = 120;
//const descuento = 18;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

/**
 * tambien se puede implementar mejor y mas entedible de la siguiente forma:
 * 
 * function CalcularPrecioConDesc(precio, descuento){
    return (precio * (100-descuento))/100;
    }
 */



//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento,
//});


//const cupones = ["cupon1","cupon2","cupon3"];

function botonPrecioDescuento(){
    const inputPrecio = document.getElementById("InputPrecio");
    const variablePrecio = inputPrecio.value;

    const InputCupon = document.getElementById("InputCupon");
    const variableCuponDescuento = InputCupon.value;

    let descuento;

    switch(variableCuponDescuento){
        case "cupon1":
            descuento = 20;
        break;
        case "cupon2":
            descuento = 40;
        break;
        case "cupon3":
            descuento = 80;
        break;
    }

    const preciConDescuento = calcularPrecioConDescuento(variablePrecio, descuento);

    const ResultadoParrafo = document.getElementById("ResultadoParrafo");
    ResultadoParrafo.innerText = "El precio con descuento es de: $" + preciConDescuento;
}

/** 
 * Nuestros clientes están muy felices de poder calcular el precio final de sus productos
 * después del descuento, pero la tienda tiene una nueva solicitud para nosotros: 
 * implementar descuentos con cupones.
*/