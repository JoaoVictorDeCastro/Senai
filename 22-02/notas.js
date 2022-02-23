const traduzNotas = (notas) => {
    if (notas > 90) {
        console.log('A')
    } else if (notas >= 80 && notas < 90) {
        console.log('B')
    } else if (notas >= 70 && notas < 80) {
        console.log('C')
    } else if (notas >= 60 && notas < 70) {
        console.log('D')
    } else if (notas < 60) {
        console.log('F')
    } else {
        console.log('NOTA INVÁLIDA!')
    }
  }
  
  traduzNotas(100)
  traduzNotas(85)
  traduzNotas(75)
  traduzNotas(65)
  traduzNotas(55)
  traduzNotas('João')
  