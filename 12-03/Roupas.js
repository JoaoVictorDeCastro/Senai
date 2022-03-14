class Roupas {
    _tipo;
    _marca;
    _tamanho;
    _cor;
  
    setTamanho(escolhaDeTamanho) {
      if (escolhaDeTamanho == 'P' || escolhaDeTamanho == 'M' || escolhaDeTamanho == 'G') {
        this.tamanho = escolhaDeTamanho
      } else {
        console.log('Tamanho Inválido!')
      }
    }
    status() {
      console.log(`Esta ${this.tipo} é da marca ${this.marca}, do tamanho ${this.tamanho} e da cor ${this.cor}.`)
    }
  }
  
  const peca1 = new Roupas;
  
  peca1.tipo = 'blusa'
  peca1.marca = 'colcci'
  peca1.cor = 'Branca'
  peca1.setTamanho('M');
  peca1.status();