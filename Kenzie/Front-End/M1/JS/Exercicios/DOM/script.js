let tag = document.createElement('p')
tag.innerText = "Olá, eu sou um paragrafo em DOM"

document.querySelector('body').appendChild(tag)
/////////////////////

const tagInput = document.createElement('input')
const form = document.querySelector('form')

tagInput.placeholder = 'Digite seu texto aqui'
form.appendChild(tagInput)
////////////////////
