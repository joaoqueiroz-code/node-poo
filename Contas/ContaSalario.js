import { Conta } from "./Contas/Conta";

export class ContaSalario extends Conta {
    constructor(cliente) {
        super(0, 3000, cliente)
    }

    sacar(valor) {
        let taxa = 1.01;
        return super._sacar(valor, taxa);
    }

}