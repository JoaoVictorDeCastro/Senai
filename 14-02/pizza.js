class Pizzas {
    tamanho;
    sabor; 
    preço;

    constructor() {
        this.tamanho = "P";
        this.sabor = "Calabresa";
        this.preço = 39.90;
    }
    Preparar () {
        console.log("A pizza está pronta!");
    }
    ColocarNoForno () {
        console.log("A pizza está no forno!");
    }
    PegarPedaço () {
        console.log("Você pegou um pedaço!");
    }
}
var pizza = new Pizzas();
pizza.Preparar();
pizza.ColocarNoForno();
pizza.PegarPedaço();
