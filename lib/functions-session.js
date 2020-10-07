import ls from 'local-storage';
import { useRouter } from 'next/router';

module.exports = {
    initSession(objLogin){
        // Inicia sessão com as informacoes passadas pelo objeto
        ls('token',     objLogin.token);
        ls('idUsuario', objLogin.user.id);
        ls('Email',     objLogin.user.Email);
        ls('Nome',      objLogin.user.Nome);
        ls('Senha',     objLogin.user.Senha);
        ls('Telefone',  objLogin.user.Telefone);
        ls('createdAt', objLogin.user.createdAt);
        ls('updatedAt', objLogin.user.updatedAt);

        return true;
    },
    getSession(){
        // return false case not logged
        if(!ls('token') || ls('token') == null )
        return false;

        // retorna um objeto com a sessao
        return {
                    token: ls('token'),
                    idUsuario: ls('idUsuario'),
                    Email: ls('Email'),
                    Nome: ls('Nome'),
                    Senha: ls('Senha'),
                    Telefone: ls('Telefone'),
                    createdAt: ls('createdAt'),
                    updatedAt: ls('updatedAt')
                };
    },
    isAdmin(){
        // Retorna true caso seja admin
        if(ls('token') && ls('acess') && ls('accss') == "2")
        return true;
        else
        return false;
    },
    beLoggedIn(){
        // Retorna true se estiver logado
        if(!ls('token'))
            return false;
        else
            return true;
    }
}