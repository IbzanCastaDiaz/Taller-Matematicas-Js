//Funcion para calcular los datos de un cuadrado
function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    }
}
//Funcion para calcular los datos de un triangulo
function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}
//Funcion para calcular la altura de un triangulo isosceles 
function calcularAlturaTriangulo (lado1, base){
    if (lado1==base) {
        console.warn("Este no es un triangulo Isosceles")
    } else  {
        return Math.sqrt(lado1**2 - ((base**2)/4))
    }
}


console.group("Circle")
const radioCirculo=3;
const diametroCirculo= radioCirculo * 2;
const PI= 3.1416;

const circunferencia= diametroCirculo * PI;
const areaCirculo= (radioCirculo**2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
})

function calcularCirculo(radio){
    const diametro= radio * 2;
    const radioAlCuadrado= Math.pow(radio,2);
    return {
        circunferencia: (radio * 2) * Math.PI,
        area: radioAlCuadrado * Math.PI
    }
}


console.groupEnd("Circle")

