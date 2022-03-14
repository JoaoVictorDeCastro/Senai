class Instagram {
    nome;
    seguidores;
    seguindo;
    privacidade;
  
    constructor() {
      this.seguidores = 0;
      this.seguindo = 0;
      this.privacidade = true;
    }
    
    mudarNome(usuario) {
      this.nome = usuario;
    }
    
    seguir() {
      this.seguindo ++
    }
  
    deixarDeSeguir() {
      this.seguindo --;
      if (this.seguindo < 0) {
        this.seguindo = 0;
      }
    }
  
    toggle() {
      if (this.privacidade == true) {
        this.privacidade = false;
      } else {
        this.privacidade = true;
      }
    }
  
    status() {
      if (this.privacidade == true) {
        console.log(`Seu nome de usuário é ${this.nome}, você tem ${this.seguidores} seguidores. Você está seguindo ${this.seguindo} pessoas e atualmente, sua conta está privada. `)
      } else {
        console.log(`Seu nome de usuário é ${this.nome}, você tem ${this.seguidores} seguidores. Você está seguindo ${this.seguindo} pessoas e atualmente, sua conta está pública. `)
      }
    }
  }
  
  var conta1 = new Instagram();
  conta1.seguidores = 500
  conta1.seguindo = 500
  
  conta1.mudarNome("JoãoVictor");
  conta1.seguir();
  conta1.toggle();
  conta1.status();
  conta1.deixarDeSeguir();
  conta1.toggle();
  conta1.status();