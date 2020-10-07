import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ls from 'local-storage';

export default function Navbar(props) {

    // container dos ultimos botoes a direita
    const [ contentNav, setContent ] = useState();

    // FUNCAO DE FAZER LOGOUT
    function handleLogout(){
        ls.clear();
        window.location.reload();
    }

    useEffect(() => {
        // CASO TENHA LOGIN ATIVO
        if(ls('Nome')){
            setContent(<div className="dropdown">
                            <button className="btn btn-default dropdown-toggle" type="button" id="dropMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <img src="https://source.unsplash.com/50x50/?face" className="rounded float-left profilePhoto" alt="person face"/>
                                <b>{ls('Nome')}</b>
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropMenu">
                                <li className="p-3">
                                    <Link href="/profile">
                                        <a>
                                            My Profile
                                        </a>
                                    </Link>
                                </li>
                                <li className="p-3">
                                    <Link href="/settings">
                                        <a>
                                            Settings
                                        </a>
                                    </Link>
                                </li>
                                <li className="p-3">
                                    <a href="#" data-toggle="modal" data-target="#modalLogout">
                                        Logout
                                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-power float-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.578 4.437a5 5 0 1 0 4.922.044l.5-.866a6 6 0 1 1-5.908-.053l.486.875z"/>
                                            <path fillRule="evenodd" d="M7.5 8V1h1v7h-1z"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>);
        }else{
            // CASO NÃO ESTEJA LOGADO
            setContent(<ul className="nav">
                            <li className="nav-item">
                                <Link href="/login"><a className="nav-link">Login</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/register"><a className="nav-link btn theme-bg-color-1"><b>Register</b></a></Link>
                            </li>
                        </ul>)
        }

    },[]);


    return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
                <section className="container">
                    {/*             ICON - TITULO            */}
                    <Link href="/home">
                        <a className="navbar-brand">
                            <img src="/favicon.ico" width="30" height="30" className="d-inline-block align-top" alt="Lewix - generator" loading="lazy" />
                            <b>{props.Title ? props.Title : "Lewix Generator"}</b>
                        </a>
                    </Link>
                    {/*             CONTENT NAV            */}
                    <div className="dropdown justify-content-end" id="navbarSupportedContent">         
                        { contentNav }
                    </div>
                </section>

                {/*              MODAL LOGIN              */}
                <div className="modal fade" id="modalLogout" tabIndex="-1" aria-labelledby="modalLogin" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalLogin">Do you want logout?</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                I hope you enjoyed it! See you later!
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn" data-dismiss="modal">No</button>
                                <button type="button" className="btn btn-primary" onClick={() => handleLogout()}>Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>);
  }