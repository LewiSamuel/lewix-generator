// css
import style from './feed-instagram.module.css';

// React
import React, { useState, useEffect } from 'react';

// components
import Link from 'next/link';
import FunctionsSession from '../../lib/functions-session';
import FunctionsTime from '../../lib/functions-time';


export default function CardPost(props){

    const [ isLogin, setLogin ] = useState();

    useEffect(() => {
        setLogin(FunctionsSession.beLoggedIn())
    }, []);

    return <article className="card">
                {/*             TOP              */}
                <section className="card-body">
                    <Link href="/profile">
                    <a className="nav-link float-left">
                        <img src="https://source.unsplash.com/50x50/?face" className="rounded float-left profilePhoto" alt="person face"/>
                        <b>{ props.objPost.User.Nome }</b>
                    </a>
                    </Link>
                    <a href="#" className="float-right" data-toggle="modal" data-target={"#modalOptions" + props.objPost.id }>
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-three-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                        </svg>
                    </a>
                </section>

                {/*             IMG CARD              */}
                <img src="https://source.unsplash.com/800x450/?life" className="card-img-top" alt="..."/>

                {/*             ACTIONS              */}
                {/* <section className="card-body pb-0">
                    <a href="#" className="icon-post">
                        <svg width="2.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-suit-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                        </svg>
                        <b>234</b>
                    </a>
                    <a href="#" className="icon-post" data-toggle="modal" data-target="#modalcomment">
                        <svg width="2.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-chat-square-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.5a2 2 0 0 1 1.6.8L8 14.333 9.9 11.8a2 2 0 0 1 1.6-.8H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                        <b>15</b>
                    </a>
                    <a href="#" className="icon-post">
                        <svg width="2.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-share" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M11.724 3.947l-7 3.5-.448-.894 7-3.5.448.894zm-.448 9l-7-3.5.448-.894 7 3.5-.448.894z"/>
                        <path fillRule="evenodd" d="M13.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-11-6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                        </svg>
                    </a>
                </section> */}

                {/*             DESCRIÇÃO              */}
                <section className="card-body pt-3">
                    <p className="card-text">{ props.objPost.Descricao }</p>
                    <small className="card-text text-black-50">{ FunctionsTime.timeago( Date.now() - new Date(props.objPost.createdAt)) }</small>
                </section>

                {/*             COMENTAR              */}
                {/* {isLogin ?
                (<section className={"card-body " + style.botComment }>
                    <div className="form-group">
                        <textarea className="form-control float-left" id="exampleFormControlTextarea1" placeholder="Add a comment ..." />
                        <button type="button" className="btn float-left">Comentar</button>
                    </div>
                </section>) : ""} */}
                

                {/*             MODAL COMENTARIOS              */}
                <section className="modal fade" id="modalcomment" tabIndex="-1" aria-labelledby="modalcomment" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <section className="modal-header">
                            <h5 className="modal-title" id="modalcomment">Comments on post</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </section>

                        <section className="modal-body">
                            <p>
                            <img src="https://source.unsplash.com/50x50/?face" className="rounded float-left profilePhoto" alt="person face"/>
                            <b>{ props.UsuarioNome }</b> <span>It`s Very good! 😍</span>
                            </p>

                            <p>
                            <img src="https://source.unsplash.com/50x50/?face" className="rounded float-left profilePhoto" alt="person face"/>
                            <b>{ props.UsuarioNome }</b> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend ultrices ipsum, sit amet imperdiet metus vehicula id.😍</span>
                            </p>
                        </section>

                        {/*             COMENTAR              */}
                        {/* {isLogin ?
                        (<section className={"card-body " + style.botComment }>
                            <div className="form-group">
                                <textarea className="form-control float-left" id="exampleFormControlTextarea1" placeholder="Add a comment ..." />
                                <button type="button" className="btn float-left">Comentar</button>
                            </div>
                        </section>) : ""} */}

                    </div>
                </div>
                </section>


                {/*             MODAL options              */}
                <section className="modal fade" id={"modalOptions" + props.objPost.id } tabIndex="-1" aria-labelledby={"modalOptions" + props.objPost.id } aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <section className="modal-header">
                            <h5 className="modal-title">Options</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </section>

                        <section className="modal-body">
                            <div className="list-group list-group-flush">
                                <a href={"/posts/" + new Buffer(new Buffer(props.objPost.id).toString("base64")) } className="list-group-item list-group-item-action text-center">
                                    Go to post
                                </a>
                                {FunctionsSession.getSession() ?
                                <span>
                                    <a href="#" className="list-group-item list-group-item-action text-center">
                                    Edit
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action text-center">
                                        Delete
                                    </a>
                                </span> :
                                <span />}
                            </div>
                        </section>

                        <div className="modal-footer">
                            <button type="button" className="btn" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
                </section>


            </article>
}