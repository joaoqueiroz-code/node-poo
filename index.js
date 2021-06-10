import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// Criação das constantes dos clientes. 
const cliente1 = new Cliente();
//const cliente2 = new Cliente();

const contaCorrentecliente1 = new ContaCorrente();
const contaCorrentecliente2 = new ContaCorrente();

// Dados do cliente número um.
cliente1.nome = "Yorick";
cliente1.cpf = 65675778987;

contaCorrentecliente1.agencia = 3004;
contaCorrentecliente1._saldo = 200;
contaCorrentecliente1.cliente = cliente1;

// Dados do cliente número dois.

/*cliente2.nome = "Hecarim";
cliente2.cpf = 77733311144;

contaCorrentecliente2.agencia = 3004;
contaCorrentecliente2.cliente = cliente2;
contaCorrentecliente2._saldo = 0;*/

// Mesmo resultado que anteriormente porém feito de forma mais direta.
contaCorrentecliente2.cliente = new Cliente();
contaCorrentecliente2.cliente.nome = "Hecarim";
contaCorrentecliente2.cliente.cpf = 77733311144;
contaCorrentecliente2.agencia = 3001;
contaCorrentecliente2._saldo = 200;


console.log(contaCorrentecliente2);