//Código del cuadrado:
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm" );

//ya
function perimetroCuadrado(lado) {
    return lado * 4; 
} 


//console.log("El perimetro del cuadrado: " + perimetroCuadrado + "cm");

//ya
function areaCuadrado(lado){
    return lado * lado;
} 
//console.log("El área del cuadrado: " + areaCuadrado + "cm^2");
console.groupEnd();


//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es: " + alturaTriangulo + "cm" );

/**
 * tips: 
 * function nombre(parametro){
 *          return parametro;
 * }
 * 
 * nombreFuncion(argumento);
 */

//Código del triangulo:
console.group("Triengulos");

//ya
function perimetroTriengulo(lado1,lado2,base1){
     return lado1 + lado2 + base1;

}
//console.log("El perimetro del triangulo es: " + perimetroTriengulo + "cm");

//console.log("El área del triangulo: " + areaTriangulo + "cm^2");

//ya
function areaTriangulo(base,altura){
    return (base * altura) /2;
}

/**
 * vamos a divir los datos nesesarios dependiendo lo que se quiera calcular
 * si es el perimetro vamos a pedir los lados y la base.
 * si es el area vamos a pedir solo la base y la altura.
 */

console.groupEnd();

//Código del círculo:
console.group("Círculos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es: " + radioCirculo + "cm" );

//Diámetro

function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;

console.log("PI es: " + PI);

//Circunferencia

/**
 * tips funcion anidada: 
 *
 */
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
 
//Área
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

// aquí interactuamos con el html:
//PD: "value" es una palabra reservada al parecer.
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;

    const perimetro = perimetroCuadrado(valor);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;

    const area = areaCuadrado(valor);
    alert(area);
}

/**
 * reto:
 * crear funciones y formularios para el triangulo y el circulo
 * 
 */
// funciones para triangulo.

// la altura del triangulo es la distancia que hay desde la base a la union (la punta) de los lados del triangulo.
function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputBaseTriangulo");
    const base = input1.value;

    const input2 = document.getElementById("InputAlturaTriangulo");
    const altura = input2.value;

    const area = areaTriangulo(base,altura);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const  input3 = document.getElementById("InputLado1Triangulo");
    const lado1 = input3.value;

    const input4 = document.getElementById("InputLado2Triangulo");
    const lado2 = input4.value;

    const input5 = document.getElementById("InputBasePerimetoTriangulo");
    const base1 = input5.value;

                     // aquí usamos una funcion existente:
    const perimetro = perimetroTriengulo(parseInt(lado1,10),parseInt(lado2,10),parseInt(base1,10));
    alert(perimetro);
}


//funciones circulo.

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = input.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = input.value;

    const area = areaCirculo(radio);
    alert(area);
}

//----------------------------------------------------------------------------------

/** 
 * En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

    *La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
    *La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
    *La función debe retornar la altura del triángulo.

    Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.


    traduccion del teorema a mi codigo: Math.sqrt(ladoA**2-(base/2)**2);
    triangulo isóseles: es cualquier triangulo que tenga al menos 2 lados de igual longitud.
*/

function alturaTrianguloIsosceles (ladoA,ladoB,base){
        altura = Math.sqrt(ladoA**2-(base/2)**2);
        return altura;
}

function calcularAlturaTrianguloIsosceles(){
    const inputA = document.getElementById("InputLadoATriangulo");
    const ladoA = inputA.value;

    const inputB = document.getElementById("InputLadoBTriangulo");
    const ladoB = inputB.value;

    const inputC = document.getElementById("InputBaseAlturaTriangulo");
    const baseB = inputC.value;

    if(ladoA === ladoB && baseB !== ladoA && baseB !==ladoB){
        const altura = alturaTrianguloIsosceles(parseInt(ladoA,10),parseInt(ladoB,10),parseInt(baseB,10));
        alert(altura);
    }else{
        return alert("Lo siento, pero este triagulo no es Isósceles");
    }
    
}