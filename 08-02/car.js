class Cars {
    //Atributos
    color;
    velocity;
    turnOn;
  
    constructor() {
      //Configuração Padrão
      this.color = "";
      this.velocity = "";
      this.turnOn = false;
    }
  
    startEngine() {
      //Método Ligado/Desligado
      this.turnOn = true; 
      console.log("O carro ligou!")
    }
    status() {
      //Método Cor
      console.log(`Este carro tem a cor ${this.color}.`)
    }
  }
  
  //Criação do objeto
  var car = new Cars();
  
  //Definição da cor
  car.color = "Verde"
  car.status()
  
  //Ligar o carro
  car.startEngine();
  