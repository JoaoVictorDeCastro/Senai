class AlunoAcademia {
    peso;
    altura;
  
    calculaImc() {
      this.peso = document.getElementById("peso").value
      this.altura = document.getElementById("altura").value
  
      const imc = this.peso / (this.altura**2)
  
      if (imc < 18.5) {
        document.getElementById("resultadoImc").innerText = `O seu IMC é ${imc.toFixed(2)} e você se encontra ABAIXO DO PESO`
      } else if (imc > 18.5 && imc < 24.9) {
        document.getElementById("resultadoImc").innerText = `O seu IMC é ${imc.toFixed(2)} e você se encontra com PESO NORMAL`
      } else if (imc > 25 && imc < 29.9) {
        document.getElementById("resultadoImc").innerText = `O seu IMC é ${imc.toFixed(2)} e você se encontra com SOBREPESO`
      } else if (imc > 30 && imc < 34.9) {
        document.getElementById("resultadoImc").innerText = `O seu IMC é ${imc.toFixed(2)} e você se encontra com OBESIDADE GRAU I`
      } else if (imc > 35 && imc < 39.9) {
        document.getElementById("resultadoImc").innerText = `O seu IMC é ${imc.toFixed(2)} e você se encontra com OBESIDADE GRAU II`
      } else if (imc > 40) {
        document.getElementById("resultadoImc").innerText = `O seu IMC é ${imc.toFixed(2)} e você se encontra com OBESIDADE GRAU III`
      }
      
    }
  }
  
  var aluno = new AlunoAcademia()