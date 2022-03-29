class Animal {
    peso;
    idade;
    membros;
  
    locomover() {
      console.log("Animal está se locomovendo");
    }
  
    alimentar() {}
  }
  
  class Peixe extends Animal {
    locomover() {
      console.log("O peixe está nadando!")
    }
  }
  
  const goldFish = new Peixe();
  
  goldFish.locomover();