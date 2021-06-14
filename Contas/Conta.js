import { Cliente } from "../Cliente.js";
export class Conta {
    
    constructor(saldoInicial, agencia, cliente) {
        this.agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
        if(this.constructor == Conta) throw new Error("Você não deve instaciar essa class!");
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

    _sacar(valor , taxa) {
        const valorSacado = taxa * valor;

        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

    }
    sacar(valor) {
        throw new Error("Você está usando um método abstrato.")
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