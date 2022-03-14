function GerarMatricula() { 
    const crypto = require('crypto');
    matricula = (crypto.randomUUID());
}

class Aluno {
  nome;
  idade;
  matricula;
  curso;
  matriculado;

  setIdade(parametroIdade) {
    if (parametroIdade > 0 ) {
      this.idade = parametroIdade
    } else {
      console.log("Idade Inválida!")
    }
  }
  
  matricular(matricula) {
    this.matricula = matricula;
    this.matriculado = true;
    console.log(`O aluno está matriculado e o número de sua matrícula é${this.matricula}`)
  }

  status() {
    // Método para mostrar o status
     console.log(`O aluno ${this.nome} possui ${this.idade} anos, está matriulado no curso ${this.curso} e sua matricula está como ${this.matriculado}`)
  }
}

const aluno1 = new Aluno();

GerarMatricula();
aluno1.matricular(matricula);

aluno1.setIdade(-19)