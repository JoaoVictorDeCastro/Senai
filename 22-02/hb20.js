class Car {
    ligado;
    cor;
    marca;
  
    setCor(cor) {
      this.cor = cor;
    }
  
    getCor() {
      return this.cor
    }
  
    setMarca(marca) {
      this.marca = marca;
    }
    
    getMarca() {
      return this.marca
    }
  
    setLigado(ligado) {
      this.ligado = ligado;
    }
  
    getLigado() {
      return this.ligado
    }
    
    status() {
      console.log(`O objeto criado é da marca ${this.marca}, tem a cor ${this.cor} o estado de ligado do motor está como ${this.ligado}.`);
    }
  }
  
  let hb20 = new Car();
  
  hb20.setCor('Preto')
  hb20.setMarca('Hyundai')
  hb20.setLigado(true)
  
  console.log(hb20.getCor())
  console.log(hb20.getMarca())
  console.log(hb20.getLigado())
  
  hb20.status()