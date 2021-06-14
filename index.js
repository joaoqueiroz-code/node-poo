import { Cliente } from "./Cliente.js";
import { Funcionario } from "./Funcionarios/funcionario.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao/SistemaDeAutenticacao.js";

const diretor1 = new Diretor("Trundle", 10000, 14523690998);
diretor1.cadastrarSenha("reitroll");
const cliente1 = new Cliente("Heatran", 99977788811, "897")

const logado = SistemaDeAutenticacao.login(diretor1, "reitroll");
const clienteLogado = SistemaDeAutenticacao.login(cliente1, "897");

console.log(logado, clienteLogado);