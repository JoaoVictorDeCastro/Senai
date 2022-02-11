class Cars {
    year
    color
    turnOn
    velocity
    
    constructor() {
      this.year = 0;
      this.color = "";
      this.turnOn = false;
      this.velocity = 0;
    }
   
     status() {
       console.log(`Este carro tem a cor ${this.color} e é do ano de ${this.year}.
       Ele está a uma velocidade de ${this.velocity}km/h`);
     }
   
    engineStart() {
      this.turnOn = true;
      console.log("Carro ligado");
    }
   
    engineStop() {
      this.turnOn = false;
      console.log("Carro desligado");
    }
   
    accelerate() {
      if (this.turnOn === true) {
       this.velocity += 20;
      } else {
        console.log("ERRO! O carro está desligado!");
      }
    }
   }
   
   var car = new Cars();
   var car2 = new Cars();
   
   car.engineStart();
   
   car.year = 2022;
   car.color = "azul";
   
   
   car.accelerate();
   car.status()