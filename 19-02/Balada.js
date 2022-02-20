class Balada {
    local;
    precoEntrada;
    dia;
    atracaoPrincipal;
    limitePessoas;
  
    constructor() {
      this.local = 'Barra da Tijuca';
      this.precoEntrada = 30;
      this.dia = 19;
      this.atracaoPrincipal = 'Gustavo Lima';
      this.limitePessoas = 30;
    }
  
    evento() {
      console.log('A festa será na ' + this.local + ' no dia ' + this.dia);
      console.log('Pague: R$' + this.precoEntrada + ' para ver o show do(a) ' + this.atracaoPrincipal);
    }
  
    dancar() {
      console.log('Todos estão DANÇANDO!')
    }
  
    beber() {
      console.log('Todos estão BEBENDO!')
    }
  
    curtir() {
      console.log('Todos estão CURTINDO!')
    }
  
    musica() {
      console.log('Uma nova música foi iniciada')
    }
    
    limite(limitePessoas) {
      if (this.limitePessoas >= 50) {
        console.log('INGRESSO ESGOTADOS!!!!!');
      } else { 
        console.log('AINDA TEMOS INGRESSOS DISPONÍVEIS');
      }
    }  
  }
  
  var balada = new Balada();
  
  balada.evento();
  balada.musica();
  balada.dancar();
  balada.beber();
  balada.curtir();
  balada.limite();
  
  balada.limitePessoas = 60;
  
  balada.limite();
  