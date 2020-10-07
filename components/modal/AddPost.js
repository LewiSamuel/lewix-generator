import React, { useState, useEffect } from 'react';

// components
import api from '../../lib/api';
import FuncSessions from '../../lib/functions-session';

export default function AddPost(){

    const [ PhotoUrl, setPhotoUrl ] = useState("");
    const [ Descricao, setDescricao ] = useState("");
    const [ idUser, setidUser ] = useState("");

    const [ DisplayLoading, setDL ] = useState("d-none");
    const [ DisplayForm, setDF ] = useState("d-block");
    const [ MsgError, setMsgError ] = useState("");

    async function handleSubmit(e){
        e.preventDefault();

        // toggle loading
        setDL("d-block");
        setDF("d-none");

        try{
            // chama a API de Login
            const resp = await api.post('/post/save', {PhotoUrl, Descricao, idUser: FuncSessions.getSession().idUsuario }, {
                headers: { 'authorization': FuncSessions.getSession().token }
            });;
            // Reseta mensagem de erro
            setMsgError("");
            // Atualiza pagina
            // window.location.reload();

        }catch(err){
            // Seta Mensagem de erro
            setMsgError(err.response.data.error);

            // Toggle loading
            setDL("d-none");
            setDF("d-block");
        } 
    }



    return (<span>
        {/*  Modal trigger button  */}
        <a href="#" data-toggle="modal" data-target="#modalAddPost" className="btn btnThemePrincipal float-right">+ New Post</a>
        
        {/*  Modal Add Post   */}
        <form onSubmit={e => handleSubmit(e)} className="modal fade" id="modalAddPost" tabIndex="-1" aria-labelledby="modalLogin" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalLogin">Add New Post</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i aria-hidden="true">&times;</i>
                        </button>
                    </div>
                    <div className="modal-body">
                        
                        <p className="text-danger">
                            { MsgError }
                        </p>

                        <div className={"form-group text-center mt-5 mb-5 " + DisplayLoading }>
                            <div className="spinner-border spin-theme" role="status">
                                <i className="sr-only">Loading...</i>
                            </div>
                        </div>

                        <div className={ DisplayForm }>

                            <div className="form-group">
                                <label htmlFor="Descricao">Descricao</label>
                                <textarea className="form-control" name="Descricao" id="Descricao" onChange={e => setDescricao(e.target.value)} rows="3" />
                            </div>
 
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary btnThemePrincipal disabled">Register</button>
                    </div>
                </div>
            </div>
        </form>


    </span>);
}