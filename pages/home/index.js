import style from './home.module.css';
// components
import NAVBAR from '../../components/NAVBAR';
import HEAD from '../../components/HEAD';
import FOOTER from '../../components/FOOTER';
import TagPinterest from '../../components/cards/tag-pinterest';

export default function Home() {
return(<section className={style.containerHome}>

    <HEAD Title="HOME - Lewix Generator"/>
    <NAVBAR />

    <section className={"container "+ style.subCont}>
        <h2>
            <b>Categories</b>
        </h2>
        <section className="row mt-3 mb-3">
            {["Posts","Startup","User"].map((o, indice) => <TagPinterest key={indice} Category={o} />)}
        </section>
        <hr />
        <h2>
            <b>Home</b>
        </h2>
        <h5>Put the content of your / home here</h5>
    </section>

<FOOTER />
</section>);
}