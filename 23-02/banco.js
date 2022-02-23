class Banco{
    numeroConta;
    titular;
    saldo;
    status;
  
    constructor() {
      this.numeroConta = 1234567
      this.titular = 'nome'
      this.saldo = 0
      this.status = false
    }
    
    sacar(valorSacar) {
      if (valorSacar > this.saldo) {
        console.log('Não é possível sacar esse valor!')
      } else {
        this.saldo = this.saldo - valorSacar
      }
    }
  
    depositar(valorDeposito) {
      if (valorDeposito < 0) {
        console.log('Não é possível depositar essa quantia!')
      } else {
        this.saldo = this.saldo + valorDeposito
      }
    }
  
    aberturaDeConta(numero, saldoAtual, donoDaConta) {
      this.status = true; 
      this.numeroConta = numero;
      this.saldo = saldoAtual;
      this.titular = donoDaConta;
    }
  
    fechamentoDeConta() {
      this.status = false;
      this.numeroConta = 0
      this.titular = ''
    }
  
    verSaldo() {
      console.log(this.saldo)
    }
  }
  
  const cliente = new Banco;
  