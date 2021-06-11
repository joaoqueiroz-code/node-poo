import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//TERCEIRA FORMA, UTILIZANDO CONSTRUCTOR.
const cliente1 = new Cliente("Yorick", 65675778987);
const cliente2 = new Cliente("Hecarim", 77733311144);

const contaCorrentecliente1 = new ContaCorrente(3004, cliente1);
const contaCorrentecliente2 = new ContaCorrente(3004, cliente2);

//PRIMEIRA FORMA
/*contaCorrentecliente2.agencia = 3004;
contaCorrentecliente2.cliente = cliente2;
contaCorrentecliente2._saldo = 0;

//SEGUNDA FORMA
contaCorrentecliente2._cliente = new Cliente();
contaCorrentecliente2._cliente.nome = "Hecarim";
contaCorrentecliente2._cliente.cpf = 77733311144;
contaCorrentecliente2.agencia = 3001;
contaCorrentecliente2._saldo = 200;*/


console.log(ContaCorrente.numeroDeContas);