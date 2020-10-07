import style from './settings.module.css';
import React, { useState, useEffect } from 'react';

// componetns
import NAVBAR from '../../components/NAVBAR';
import HEAD from '../../components/HEAD';
import FOOTER from '../../components/FOOTER';
import FuncSessions from '../../lib/functions-session';

export default function Profile(props) {

    const [ User, setUser ] = useState({});

    useEffect(() => {
        setUser({
            Nome: FuncSessions.getSession().Nome,
            Email: FuncSessions.getSession().Email,
            Telefone: FuncSessions.getSession().Telefone
        });
    }, []);
    

return(<section className={style.containerHome}>

    <HEAD Title="Seu Perfil - Lewix Generator" OnlyLoggedIn="" />
    <NAVBAR />

    <section className={"container "+ style.inCont}>

        <h1>
            <b>Your Settings</b>
        </h1>
        <section className="row bg-white">
            <div className="col-sm-12 col-md-6">
            <img src="https://source.unsplash.com/500x500/?face" className="rounded float-left" alt="person face"/>
            </div>
            <div className="col-sm-12 col-md-5 pb-4">
                <ul className="list-group list-group-flush mt-4">

                    <li className="list-group-item">
                        <b>Nome</b>
                    </li>
                    <li className="list-group-item">
                        {User.Nome}
                    </li>
                    <li className="list-group-item">
                        <b>Email</b>
                    </li>
                    <li className="list-group-item">
                        {User.Email}
                    </li>
                    <li className="list-group-item">
                        <b>Senha</b>
                    </li>
                    <li className="list-group-item">
                        <a href="#" className="btn btn-outline-secondary">
                            Upadte Password
                        </a>
                    </li>
                    <li className="list-group-item">
                        <b>Telefone</b>
                    </li>
                    <li className="list-group-item">
                        {User.Telefone}
                    </li>
                </ul>
            </div>
        </section>

    </section>

    <FOOTER />
</section>)}