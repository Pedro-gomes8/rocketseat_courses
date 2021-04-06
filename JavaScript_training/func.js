// Function anonymous
// Funcao 

const a = function (a1,a2) {
    return a1+a2
}

console.log(a(2,3))

// function hoisting
aloGaleraDePeao()
function aloGaleraDePeao(AloGaleradeCowboy) {
  console.log('musica que ta na cabeca agora por n sei qual motivo')  
};
// THAT WORKS!

// Arrow function
const sayMyNamy = () => {
    console.log('Pedro')
};
sayMyNamy()

// Function constructor
function New_class(nome) {
    this.nome = nome;
};

const objeto= new New_class("Pedro")
console.log(objeto)