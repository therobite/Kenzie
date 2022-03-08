function oddsToTwenty(numero) {
    let arrRetorno = [];
    for (let i = 0; i <= numero; i++){
      if(i%2 === 1)
        arrRetorno.push(i)
    }  
    return arrRetorno
    
  }
  console.log(oddsToTwenty(20))
