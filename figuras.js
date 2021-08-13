//Código del cuadrado:
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm" );

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado: " + areaCuadrado + "cm^2");
console.groupEnd();

//Código del triangulo:
console.group("Triengulos");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + "cm" );

const perimetroTriengulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriengulo + "cm");

console.groupEnd();

//Código del círculo:
console.group("Círculos");

//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm" );

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + "cm" );

//PI
const PI = Math.PI;

console.log("PI es: " + PI);

//Circunferencia
const pereimetroCirculo = diametroCirculo * PI;

console.log("El perímetro del círculo es: " + pereimetroCirculo + "cm" );


//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es : " + areaCirculo + "cm^2" );

console.groupEnd();