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

        const valorEmDollar = this.real/this.dollar;
        const valorConvertido = valorEmDollar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
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
    converterRealLibra() {
        this.real = document.getElementById("real3").value;
        console.log(this.real)

        const valorEmLibra = this.real/this.libra
        const valorConvertido = valorEmLibra.toLocaleString('en-US', {style: 'currency', currency: 'GBP'})
        const valorEmReal = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        document.getElementById("resultadoDaConversaoRealLibra").innerText = `${valorEmReal} é igual a ${valorConvertido}`
    }
    converterDollarReal() {
        this.real = document.getElementById("dollar").value;
        console.log(this.real)

        const valorEmReal = this.dollar*this.real;
        const valorConvertido = valorEmReal.toLocaleString('en-US', {style: 'currency', currency: 'BRL'})
        const valorEmDollar = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})

        document.getElementById("resultadoDaConversaoDollarReal").innerText = `${valorEmDollar} é igual a ${valorConvertido}`
    }
    converterEuroReal() {
        this.real = document.getElementById("euro").value;
        console.log(this.real)

        const valorEmReal = this.euro*this.real;
        const valorConvertido = valorEmReal.toLocaleString('en-US', {style: 'currency', currency: 'BRL'})
        const valorEmEuro = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})

        document.getElementById("resultadoDaConversaoEuroReal").innerText = `${valorEmEuro} é igual a ${valorConvertido}`
    }
    converterLibraReal() {
        this.real = document.getElementById("libra").value;
        console.log(this.real)

        const valorEmReal = this.libra*this.real;
        const valorConvertido = valorEmReal.toLocaleString('en-US', {style: 'currency', currency: 'BRL'})
        const valorEmLibra = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})

        document.getElementById("resultadoDaConversaoLibraReal").innerText = `${valorEmLibra} é igual a ${valorConvertido}`
    }
}

const moeda = new Moedas();