


//Primero llamamos al boton al que le van a dar para calcular el descuento
const btn =document.querySelector("#calcular");
//Llamamos al input price
const inputPrice =document.querySelector("#price");
//Llamamos al input Discount
const inputDescuento =document.querySelector("#discount");
//Llamamos al input Discount
const precioResultado =document.querySelector("#result");




btn.addEventListener("click", calcularPrecioConDescuento) ;

function calcularPrecioConDescuento () {
    // P * (1-(D/100))
    const precio= inputPrice.value;
    const descuento = inputDescuento.value;

    const nuevoPrecio = precio * (1-descuento/100)

    precioResultado.innerText = "El nuevo precio con descuento es Q" + nuevoPrecio;
}





function descuento (precio, descuento) {
    return precio * (1-(descuento/100))
}



