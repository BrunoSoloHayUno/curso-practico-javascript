//funciones de ayuda (helpers/utils)
//cualcula el promedio de 2 numeros:
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function esPar(numerito){
    return (numerito % 2 === 0);
 }

//Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
    
        const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

let salariosCol = colombia.map(function(personita){
    return personita.salario;
});

const salariosColOrdenados = salariosCol.sort(function(salarioA,salarioB){
    return salarioA-salarioB;
});

//Mediana General
const medianaGeneralCol = medianaSalarios(salariosColOrdenados);
//formula
// (p * (%)) / 100

//Mediana del top 10%
const comienzoRevanada = (salariosColOrdenados.length * 90)/100;
const contadorRevanada = salariosColOrdenados.length - comienzoRevanada;


const salarioColTop10 = salariosColOrdenados.splice(comienzoRevanada,contadorRevanada);

const medianaTop10Col = medianaSalarios(salarioColTop10);

console.log(medianaGeneralCol,medianaTop10Col);