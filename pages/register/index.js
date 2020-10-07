import React, { useState } from 'react';
// css
import style from './register.module.css';

// components
import HEAD from '../../components/HEAD';
import api from '../../lib/api';
import ls from 'local-storage';
import Link from 'next/link';

ls.clear();

export default function Login(props) {

    const [ Nome, setNome ] = useState();
    const [ Email, setEmail ] = useState();
    const [ Telefone, setTelefone ] = useState();
    const [ Senha, setSenha ] = useState();

    const [ DisplayLoading, setDL ] = useState("d-none");
    const [ DisplayForm, setDF ] = useState("d-block");
    const [ MsgError, setMsgError ] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        setDL("d-block");
        setDF("d-none");

        try{
            const resp = await api.post('/user/save', { Nome: Nome, Telefone: Telefone, Email: Email, Senha: Senha });
            
            ls('token', resp.data.token);
            ls('idUsuario', resp.data.obj_save.id);
            ls('Email', resp.data.obj_save.Email);
            ls('Nome', resp.data.obj_save.Nome);
            ls('Senha', resp.data.obj_save.Senha);
            ls('Telefone', resp.data.obj_save.Telefone);
            ls('createdAt', resp.data.obj_save.createdAt);
            ls('updatedAt', resp.data.obj_save.updatedAt);
            setMsgError("");
            window.location.href = '/home';

        }catch(err){
            setMsgError(err.response.data.error);
            
        }
        
        setDL("d-none");
        setDF("d-block");
    }

return (<section className={style.containerLogin}>

<HEAD Title="Register - Lewix Generator" OnlyNotLoggedIn="home"/>

<section className="row">
    <div className={"col-sm-12 col-md-5 bg-white align-items-center "+style.sideL}>


<article className="col-sm-10 offset-sm-1" style={{heigth: "max-content"}}>
<form className="container" onSubmit={(e) => handleSubmit(e)}>
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
            <b>Register</b>
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
            <label htmlFor="exampleInputName1">Name</label>
            <input type="text" onChange={e => setNome(e.target.value)} className="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputTel1">Tel.</label>
            <input type="tel" onChange={e => setTelefone(e.target.value)} className="form-control" id="exampleInputTel1" aria-describedby="telHelp" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" onChange={e => setSenha(e.target.value)} className="form-control" id="exampleInputPassword1" />
        </div>
    </section>

    <button type="submit" className="btn btn-primary btnThemePrincipal">Register</button>
    <Link href="/login"><a className="btn">Login</a></Link>

</form>
</article>


        </div>
    </section>

    </section>);
}