class Moedas {
    dollar;
    real;
    euro;
    libra;

    constructor() {
        this.dollar = 4.66
        this.libra = 6.11
        this.euro = 5.15
    }

    converterRealDollar() {
        this.real = document.getElementById("real1").value;
        console.log(this.real)

        const valorEmDolar = this.real/this.dollar;
        const valorConvertido = valorEmDolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
        const valorEmReal = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        document.getElementById("resultadoDaConversaoRealDollar").innerText = `${valorEmReal} é igual a ${valorConvertido}`
    }
    converterRealEuro() {
        this.real = document.getElementById("real2").value;
        console.log(this.real)

        const valorEmEuro = this.real/this.euro
        const valorConvertido = valorEmEuro.toLocaleString('en-US', {style: 'currency', currency: 'EUR'})
        const valorEmReal = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        document.getElementById("resultadoDaConversaoRealEuro").innerText = `${valorEmReal} é igual a ${valorConvertido}`
    }
}

const moeda = new Moedas();