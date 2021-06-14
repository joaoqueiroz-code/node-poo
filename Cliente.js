// Classe dos dados do cliente.
export class Cliente{
    get get(){
        return this._cpf;

    }

    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar() {
        return true;

    }
}

