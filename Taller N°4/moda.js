const lista1 = [1,2,3,1,2,3,4,2,2,2,1];

const lista1Cont = {};

lista1.map(function(elemento){

    if (lista1Cont[elemento]) {
        lista1Cont[elemento] += 1; 

    }else{
        lista1Cont[elemento] = 1;
    }
       
});


const lista1Vector = Object.entries(lista1Cont).sort(function(elementoA, elementoB){
    return elementoA[1] - elementoB[1];
  });

  const moda = lista1Vector[lista1Vector.length -1];

  /**
   * reto: convertir este codigo en una funcion. :v
   */
  
  function calcularModa(lista){
      
     lista.map(function(elemento){

        if (listaCont[elemento]) {
            listaCont[elemento] += 1; 
    
        }else{
            listaCont[elemento] = 1;
        }
           
    });

    const listaVector = Object.entries(listaCont).sort(function(elementoA, elementoB){
        return elementoA[1] - elementoB[1];
      });
    
      const moda = listaVector[listaVector.length -1];

      return moda;
    
  }

  /**
   *En las clases prácticas de este taller aprendimos a calcular el promedio (media aritmética),
    la mediana y la moda con JavaScript. En este reto debes encontrar la fórmula de algún otro tipo de promedio,
    trabajar con alguno de sus casos de uso útiles y traducirlo a código JavaScript.

    Responde las siguientes preguntas en los comentarios:

    *¿Cuál tipo de promedio elegiste para trabajar?
    *¿Qué casos de uso tiene tu tipo de promedio?
    *¿Cómo traduces su fórmula a código JavaScript?
   */

    // hacer para luego.