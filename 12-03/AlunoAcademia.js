class AlunoAcademia {
    _nome;
    _peso;
    _altura;
    _sexo;
    _matriculado;
  
    getImc(pesoEmKg, alturaEmMetro) {
      if (pesoEmKg > 0 && alturaEmMetro > 0) {
        const imc = pesoEmKg/(alturaEmMetro**2)  
        console.log(imc.toFixed(2))
      } 
    }
  }
  
  const IMC = new AlunoAcademia();
  
  IMC.getImc(65, 1.74);
  