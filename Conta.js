import { Cliente } from "./Cliente.js";
export class Conta {
    
    constructor(saldoInicial, agencia, cliente) {
        this.agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;

    }

    set cliente(valorNovo) {
        if(valorNovo instanceof Cliente){
            this._cliente = valorNovo;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        const valorSacado = taxa * valor;

        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) return;
        this._saldo += valor;
        
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
         
    }


}