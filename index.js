// Classe dos dados do cliente.
class Cliente{
    nome;
    cpf;

}

// Classe dos dados do banco do cliente.
class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if(this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
}


// Criação das constantes dos clientes. 
const cliente1 = new Cliente();
const cliente2 = new Cliente();

const contaCorrentecliente1 = new ContaCorrente();
const contaCorrentecliente2 = new ContaCorrente();

// Dados do cliente número um.
cliente1.nome = "Yorick";
cliente1.cpf = 65675778987;

contaCorrentecliente1.agencia = 3004;
contaCorrentecliente1.saldo = 200;

// Dados do cliente número dois.
cliente2.nome = "Hecarim";
cliente2.cpf = 77733311144;

contaCorrentecliente2.agencia = 3004;
contaCorrentecliente2.saldo = 0;


contaCorrentecliente1.sacar(50);


console.log(contaCorrentecliente1.saldo);