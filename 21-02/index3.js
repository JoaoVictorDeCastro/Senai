/*const retornaNome = (n1, n2) => {
  console.log(n1+n2)
}

retornaNome(10, 20)*/
const verificarTemperatura = (temperatura) => {
  if (temperatura > 37.5) {
    console.log('Você está com febre alta!')
  } else if (temperatura < 37.5 && temperatura > 37) {
    console.log('Você está com febre!')
  } else if (temperatura < 37) {
    console.log('Você está saudável')
  }
}

verificarTemperatura(37.1)
verificarTemperatura(35)
verificarTemperatura(40)
