gotconst Dados =[
    {
        nome: "Antoniel",
        idade: 18,
       

    },

    {
        nome: "Alexandre",
        idade: 18,
      

    },

]

function totalIdade(){
    let total = 0
    Dados.forEach((elem)=>{
       
        total +=elem.idade
        
      
    })
    return total
}





console.log(totalIdade())