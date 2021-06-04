// Classe com o formato dos dados.
class Cliente{
    nome;
    cpf;
    agencia;
    saldo;

}

//Criação das contantes dos clientes. 
const cliente1 = new Cliente();
const cliente2 = new Cliente();

// Dados do clientes.
cliente1.nome = "Yorick";
cliente1.cpf = 65675778987;
cliente1.agencia = 3004;
cliente1.saldo = 0;

cliente2.nome = "Hecarim";
cliente2.cpf = 77733311144;
cliente2.agencia = 3004;
cliente2.saldo = 0;





console.log(cliente1, cliente2);