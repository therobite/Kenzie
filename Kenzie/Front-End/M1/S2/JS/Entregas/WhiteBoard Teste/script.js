dobro([2, 4, 6, 8])


function dobro (arr){

let resultado = []

    for (let i = 0; i < arr.length; i++){

    resultado.push(arr[i]*2)       


    }
    console.log (resultado)
    return resultado

}