class Pizzas {
    molho;
    recheio;
    borda;
    tamanho;
    
    constructor() {
      this.borda = false;
      this.molho = '';
      this.recheio = '';
      this.tamanho = '';
    }

     CalculoDoPreco(tamanho) {
       if(tamanho== 'grande') {
         console.log('O valor da pizza é R$55,00')
       }
       if(tamanho== 'medio') {
       console.log('O valor da pizza é R$35,00')    
       }
     }
}
    var pizza = new Pizzas();
    
    pizza.tamanho = 'medio'
     
    pizza.CalculoDoPreco(pizza.tamanho);
