export class SistemaDeAutenticacao {
    static eAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;

    }
    
    static login(autenticavel, senha) {
        if(SistemaDeAutenticacao.eAutenticavel(autenticavel)) return autenticavel.autenticar(senha);

        return false;
    }

}