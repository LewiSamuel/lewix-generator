// React
import React, { useState, useEffect } from 'react';
// css
import style from './posts.module.css';
// components
import NAVBAR from '../../components/NAVBAR';
import HEAD from '../../components/HEAD';
import FOOTER from '../../components/FOOTER/footer-instagram';
import CardPost from '../../components/cards/feed-instagram';
import api from '../../lib/api';
import FuncSessions from '../../lib/functions-session';
// modal
import AddPost from '../../components/modal/AddPost';


export default function Posts(){

    const [ Posts, setPosts ] = useState([]);

    async function FetchAPI(){
        try{
            // chama a API de Login
            const resp = await api.post('/post/list', {});
            // Set result
            setPosts(resp.data);
    
        }catch(err){
            // Seta Mensagem de erro
            setMsgError(err.response.data.error);
        }
    }

    useEffect(() => {
        FetchAPI();
    }, [])
   

return(<section className={style.containerHome}>

    <HEAD Title="HOME - Lewix Generator"/>
    <NAVBAR />

    <section className={"container "+ style.inCont}>
        {FuncSessions.getSession() ? <AddPost /> : <div />}
        <h1>
            <b>Posts</b>
        </h1>
        <hr />
        <section className="row">
            {Posts.map(o =>
                <div className="col-sm-12 col-md-6 mb-4" key={o.id}>
                    <CardPost objPost={o} />
                </div>
            )}
        </section>
    </section>

<FOOTER />
</section>);
}