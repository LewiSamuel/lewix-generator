// css
import style from './tag-pinterest.module.css';

// React
import React from 'react';

// components
import Link from 'next/link';


export default function Tag(props){
    return(<Link href={"/" + props.Category.toLowerCase()}>
            <a>
                <article
                    style={{backgroundImage: `url(https://source.unsplash.com/80x80/?${props.Category})`}}
                    className={style.pinterestCardCategoria}>
                    <b>{props.Category}</b>
                </article>
            </a>
            </Link>);
}