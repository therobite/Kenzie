function countNames(names) {

  let resultado = 0

  for (let i = 0; i < names.length; i++){

     if(names[i].substring(0) === 'M')

      resultado += 1
      console.log(resultado)
  
  }
 
  return resultado
}
console.log(countNames(['Mauro', 'Ana', 'Gabriel', 'Maykel', 'Tiago']))