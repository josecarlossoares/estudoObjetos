class InstituiçãoFinanceira {
    constructor(numConta = 202301, saldo = 500, agencia = 1001, tipoConta = 'corrente'){
        this.numConta = numConta;
        this.saldo = saldo;
        this.agencia = agencia;
        this.tipoConta = tipoConta
    }

    consulta(){
        return this.saldo;
    }

    deposito(valor = 100){
        this.saldo += valor;
    }

    saque(valor = 100){
        this.saldo -= valor
    }

    consultaConta(){
        return this;
    }
}

var banco = new InstituiçãoFinanceira()

let result = banco.consultaConta()
console.log(result);