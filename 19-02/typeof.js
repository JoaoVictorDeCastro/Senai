/*let y = 1;

{
  let y = 0;
  console.log('Variável antes do bloco', y)
}

console.log('Variável depois do bloco', y)*/

var nome = 'João Victor';
var idade = 15;
var altura = 1.70;
var feliz = true; 


console.log(typeof altura)

if (feliz == true) {
  console.log(`Eu sou o ${nome}, tenho ${idade} anos. Além disso, tenho ${altura} de altura e estou feliz no momento.`);
}
if (feliz == false) {
  console.log(`Eu sou o ${nome}, tenho ${idade} anos. Além disso, tenho ${altura} de altura e estou triste no momento.`)
}
