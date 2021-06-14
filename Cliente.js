// Classe dos dados do cliente.
export class Cliente{
    get get(){
        return this._cpf;

    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }

}

