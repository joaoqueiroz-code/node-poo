import { Cliente } from "./Cliente.js";

// Classe dos dados do banco do cliente.
export class ContaCorrente {

    static numeroDeContas = 0;
    _cliente;

    set cliente(valorNovo) {
        if(valorNovo instanceof Cliente){
            this._cliente = valorNovo;
        }
    }

    agencia;

    get cliente() {
        return this._cliente;
    }

    _saldo = 0;
    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente){
        this._cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas++;
    }

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
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
