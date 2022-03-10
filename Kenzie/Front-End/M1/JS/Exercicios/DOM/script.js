/* let tag = document.createElement('p')
tag.innerText = "Olá, eu sou um paragrafo em DOM"

document.querySelector('body').appendChild(tag) */
/////////////////////

/* const tagInput = document.createElement('input')
const form = document.querySelector('form')

tagInput.placeholder = 'Digite seu texto aqui'
form.appendChild(tagInput) */
////////////////////
/* 
let article = document.createElement('article')
let articleH1 = document.createElement('h1')
let articleP = document.createElement('p')
let articleA= document.createElement('a')
document.querySelector('body').appendChild(article)

articleH1.innerText = 'DOM é muito bom'
articleP.innerText = 'DOM é complexo'
articleA.innerText = 'Para saber mais clique aqui'

document.querySelector('article').appendChild(articleH1)
document.querySelector('article').appendChild(articleP)
document.querySelector('article').appendChild(articleA) */
////////////////////
/* const main = document.getElementById('#principal')
let tagP = document.createElement('p')
let tagImg = document.createElement('img') 
let tagA = document.createElement('a') 
let tagUl = document.createElement('ul')
let tagLi1 = document.createElement('li')
let tagLi2 = document.createElement('li')
let tagLi3 = document.createElement('li')

tagP.innerText = 'Abaixo segue uma imagem e uma lista'
tagImg.src = 'https://i.imgur.com/zya46I8.jpg'
tagA.href = 'https://www.facebook.com/'
tagA.innerText = 'Facebook'
tagLi1.innerText = 'Comprar Processador'
tagLi2.innerText = 'Comprar Placa Mãe'
tagLi3.innerText = 'Comprar Memória Ram'

tagUl.appendChild(tagLi1)
tagUl.appendChild(tagLi2)
tagUl.appendChild(tagLi3)

document.querySelector('#principal').appendChild(tagP)
document.querySelector('#principal').appendChild(tagImg)
document.querySelector('#principal').appendChild(tagA)
document.querySelector('#principal').appendChild(tagUl) */
///////////////////////

/* const h1 = document.getElementsByTagName('h1')
h1.className = 'Especial'
console.log(h1) */
//////////////////////

/* let tagP = document.querySelector('p')
let novo = document.createTextNode(' Antoniel Robson de Campos Mariano')
tagP.appendChild(novo)
 */
//////////////////////

/* const shoppingList = document.getElementById("list")
const input = document.getElementById("input")
const addButton = document.getElementById("add")
const resetButton = document.getElementById("reset")

let list = []


function reloadList(){
    shoppingList.innerHTML = ""
    for(let i = 0; i < list.length; i++){
        currentElement = list[i]
        currentElement.id = i
        shoppingList.appendChild(currentElement)
    }
}

function createRemoveButton(){
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove"
    removeButton.addEventListener("click", (e) => {
        list = list.filter((_, index) => index !== Number(e.path[1].id))
        
        reloadList();
    })
    return removeButton

}

function onClickFunction (){
    let newItem =  document.createElement("li")
    let paragraph = document.createElement("p")
    let removeButton = createRemoveButton()

    if(input.value){
        paragraph.innerText = input.value;

        newItem.appendChild(paragraph)
        newItem.appendChild(removeButton)

        input.value = ""
        list.push(newItem)

        reloadList()

    }
}
addButton.addEventListener("click", onClickFunction);

function onClickResetFunction(){
    shoppingList.innerHTML=""
    list = []
}

resetButton.addEventListener("click", onClickResetFunction)
 */


let container = document.getElementById("root")
container.innerText = "repetir mais"

let span = document.createElement("span")
span.innerText = "repetir e repetir"

container.appendChild(span)

let ul = document.createElement('ul')
let li = document.createElement('li')
li.innerText = 'repetir cada vez mais'
ul.appendChild(li)
container.appendChild(ul)
console.log(container)
