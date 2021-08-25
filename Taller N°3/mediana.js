

//const lista1 = [100,200,500,400000000];

// devuelve la posicion de la mitad de la lista:
//const mitadLista1 = parseInt(lista1.length / 2);

//funcion para sar si es par o impar un numero:
//function esPar(numerito){
//    if(numerito % 2 === 0){
//        return true;
//    }else{
//        return false;
//    }
//}


//comprueba y ejecuta codigo dependiendo de la respuesta de "esPar?".
//let mediana;

//if(esPar(lista1.length)){
//   const elemento1 = lista1[mitadLista1 - 1];
//   const elemento2 = lista1[mitadLista1];
//   
//   //    el resultado de esta operacion es la mediana:
//   const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
//   
//   mediana = promedioElemento1y2;
//}else{
//    mediana = lista1[mitadLista1]
//}

/**
 * convertir calcular mediana en una funcion generica para poder ser reutilizada.
 * hacer que la lista de elementos "numeros" este ordenada antes de trabajar con ella.
 * dependiendo de si una lista es par o inpar se va a sacar el promedio
 * si es inpar no se saca pero si lo es sí.
 */

//cualcula el promedio de 2 numeros:
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

const lista = [100,400000000,500,200];

//funcion a utilizar con "sort":
//function ordenarLista(a,b){
//    return a - b
//}

function calcuclarMediana(lista){
    //funcion a utilizar con "sort":
    function ordenarLista(a,b){
        return a - b
    }
    
    //ordena lista:
    let listaOrdenada = lista.sort(ordenarLista);

    // devuelve la posicion de la mitad de la lista:
    const mitadLista = parseInt(lista.length / 2);

    //funcion para sar si es par o impar un numero:
    function esPar(numerito){
        if(numerito % 2 === 0){
            return true;
        }else{
            return false;
        }
    }       
    //comprueba si es par o inpar:
    if(esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        
        //    el resultado de esta operacion es la mediana:
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
        
      return mediana = promedioElemento1y2;

     }else{
        return mediana = listaOrdenada[mitadLista]
     }

    
}

console.log(calcuclarMediana(lista));