class Pessoa {
    nome;
    idade;
    sexo;
  
    fazerAniversario() {}
  }
  
  class Aluno extends Pessoa {
    matriculado;
  
  }
  
  class Professor extends Pessoa {
    especialidade;
    emAula;
  
    darAula() {}
  }
  
  class Funcionario extends Pessoa {
    setor
  
    mudarSetor() {}
  }
  
  const pessoa1 = new Pessoa();
  const aluno1 = new Aluno();
  const professor1 = new Professor();
  
  aluno1.nome = "Vitor";
  aluno1.idade = 23;
  aluno1.fazerAniversario();
  
  professor1.fazerAniversario();
  
  console.log(aluno1.nome);