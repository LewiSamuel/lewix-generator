import style from './footer-instagram.module.css';
export default function FooterInstagram(){
return(<footer className="container">
    <nav className="col-sm-12">
        <ul className={ style.ul }>
            <li className={ style.li }>
                <a href="https://about.instagram.com/" target="_blank">Sobre</a>
            </li>
            <li className={ style.li }>
                <a href="https://help.instagram.com/">Ajuda</a>
            </li>
            <li className={ style.li }>
                <a href="https://about.instagram.com/blog/">Imprensa</a>
            </li>
            <li className={ style.li }>
                <a href="/developer/">API</a>
            </li>
            <li className={ style.li }>
                <a href="/about/jobs/">Carreiras</a>
            </li>
            <li className={ style.li }>
                <a href="/legal/privacy/">Privacidade</a>
            </li>
            <li className={ style.li }>
                <a href="/legal/terms/">Termos</a>
            </li>
            <li className={ style.li }>
                <a href="/explore/locations/">Localizações</a>
            </li>
            <li className={ style.li }>
                <a href="/directory/profiles/">Contas mais relevantes</a>
            </li>
            <li className={ style.li }>
                <a href="/directory/hashtags/">Hashtags</a>
            </li>
        </ul>

        <b className="text-black-50">© 2020 Instagram do Facebook</b>

        </nav>
    </footer>)
}