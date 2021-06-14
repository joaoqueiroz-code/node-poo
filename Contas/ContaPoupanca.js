import { Conta } from "./Contas/Conta.js.js";

export class ContaPoupanca extends Conta{ 
    constructor(saldoInicial, agencia, cliente) {
        super(saldoInicial, agencia, cliente);
    
    }

    sacar(valor) {
        let taxa = 1.1;
        return super._sacar(valor, taxa);
    }

}