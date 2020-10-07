// React
import React, { useEffect } from 'react';

// components
import Head from 'next/head';
import Router from 'next/router';
import FuncSessions from '../lib/functions-session';

export default function Navbar(props) {

    useEffect(() => {

        // Redirect se nao estiver logado
        if(props.OnlyLoggedIn != undefined)
        if(!FuncSessions.beLoggedIn())
        Router.push("/" + props.OnlyLoggedIn);
    
        // Redirect se estiver logado
        if(props.OnlyNotLoggedIn != undefined)
        if(FuncSessions.beLoggedIn())
        Router.push("/" + props.OnlyNotLoggedIn);

    },[]);

    return(<Head>
        <title>{props.Title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/css/bootstrap.min.css" integrity="sha384-VCmXjywReHh4PwowAiWNagnWcLhlEJLA5buUprzK8rxFgeH0kww/aWY76TfkUoSX" crossOrigin="anonymous" />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.min.js" integrity="sha384-XEerZL0cuoUbHE4nZReLT7nx9gQrQreJekYhJD9WNWhH8nEW+0c5qq7aIo2Wl30J" crossOrigin="anonymous"></script>
      </Head>);
  }