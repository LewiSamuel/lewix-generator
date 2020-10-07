// CSS
import style from './login.module.css';

// REACT
import { useState } from 'react';

// components
import HEAD from '../../components/HEAD';
import api from '../../lib/api';
import Link from 'next/link';
import FuncSessions from '../../lib/functions-session';

export default function Login(props) {

    // labels
    const [ Email, setEmail ] = useState("");
    const [ Senha, setSenha ] = useState("");
    const [ DisplayLoading, setDL ] = useState("d-none");
    const [ DisplayForm, setDF ] = useState("d-block");
    const [ MsgError, setMsgError ] = useState("");

    async function handleFormLogin(e){
        e.preventDefault();

        // toggle loading
        setDL("d-block");
        setDF("d-none");

        try{
            // chama a API de Login
            const resp = await api.post('/user/auth', { Email: Email, Senha: Senha });
            // inicia sessao com os dados recebidos
            FuncSessions.initSession(resp.data);
            // Reseta mensagem de erro
            setMsgError("");
            // redireiona para /home
            window.location.href = '/home';

        }catch(err){
            // Seta Mensagem de erro
            setMsgError(err.response.data.error);
        }
        
        // Toggle loading
        setDL("d-none");
        setDF("d-block");
    }

    

return (<section className={style.containerLogin}>

    {/*     HEADER     */}
    <HEAD Title="Login - Lewix Generator" OnlyNotLoggedIn="home"/>

    <section className="row">
        <div className={"col-sm-12 col-md-6 col-lg-4 bg-white align-items-center "+style.sideL}>


            <article className="col-sm-10 offset-sm-1" style={{heigth: "max-content"}}>
            <form className="container" onSubmit={handleFormLogin}>

                <div className="form-group">
                <Link href="/">
                    <a className="navbar-brand">
                        <img src="/favicon.ico" width="30" height="30" className="d-inline-block align-top" alt="Lewix - generator" loading="lazy" />
                        <b>Lewix Generator</b>
                    </a>
                </Link>
                </div>

                <div className="form-group">
                    <h1>
                        <b>Sign in</b>
                    </h1>
                    <p className="text-danger">
                        { MsgError }
                    </p>
                </div>

                <div className={"form-group mt-5 mb-5 " + DisplayLoading }>
                    <div className="spinner-border spin-theme" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

                <section className={ DisplayForm }>
                <div className="form-group">
                    <label htmlFor="InputEmail">Email</label>
                    <input type="email" className="form-control" id="InputEmail" onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="InputSenha">Senha</label>
                    <input type="password" className="form-control" id="InputSenha" onChange={e => setSenha(e.target.value)}/>
                </div>
                </section>

                <button type="submit" className="btn btnThemePrincipal">Login</button>
                <Link href="/register"><a className="btn"><b>Register</b></a></Link>

            </form>
            </article>


        </div>
    </section>


</section>);
}