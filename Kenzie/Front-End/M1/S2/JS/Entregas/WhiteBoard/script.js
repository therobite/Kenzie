function soma(number){
  let result = 0
   for(let i  = 0; i < number.length; i++){
    if(number[i] < 0){
      result+=number[i]
      
    }
  }
  return result
}
soma([10,-20,-30,50,-12,56,-85,47,69])