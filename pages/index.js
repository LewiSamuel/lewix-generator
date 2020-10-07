// css 
import styles from '../styles/Home.module.css'

// componetns
import FOOTER from '../components/FOOTER';
import NAVBAR from '../components/NAVBAR';
import HEAD from '../components/HEAD';
import CardVantagens from '../components/landing/card-vantagens';

export default function Home() {
  return (<span>
    
    {/* -----------    Set Header    -------------- */}
    <HEAD Title="Lewix Generator"/>

    {/* -----------    TOP NAV    -------------- */}
    <NAVBAR />
    
    {/* -----------    BANNER TOP    -------------- */}
    <section className={" " + styles.landingHeader + " align-items-center"}>
      <div className="col">
        <article className={styles.HeaderContent + " text-center"}>
          <h1>Make a promise here!</h1>
          <p>Explain the way this will happen</p>
          <a href="/home" className={"btn btnThemePrincipal btn-lg active"} role="button">Go it!</a>
        </article>
      </div>
    </section>


    {/* -----------    DESCRIÇÃO INICIAL     -------------- */}
    <section className={"container text-center "+ styles.breakpoint1}>
      <h2>
        <b>Where can I get some?</b>
      </h2>
      <hr className={styles.hrSm + " theme-text-color-1"} />
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <img src="https://png.pngtree.com/png-vector/20200319/ourmid/pngtree-business-web-banner-concept-design-with-people-in-meeting-and-presentation-png-image_2158017.jpg" alt="variation"/>
    </section>


    {/* -----------     VANTAGENS      -------------- */}
    <section className={"container text-center "+ styles.breakpoint1}>
      <h2>
        <b>Consectetur adipiscing elit?</b>
      </h2>
      <hr className={styles.hrSm + " theme-text-color-1"} />
      <div className="row">
        <div className="col-md-12 col-lg">
          <CardVantagens />
        </div>
        <div className="col-md-12 col-lg">
          <CardVantagens />
        </div>
        <div className="col-md-12 col-lg">
          <CardVantagens />
        </div>
      </div>
    </section>

    {/* -----------    GOOGLE MAPS    -------------- */}
    <section className="row overflow-h">
      <div className="col">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61420.49779201426!2d-47.9122146670139!3d-15.815491604140565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a7c6e43a3b1%3A0x230ab21b41856b05!2sMemorial%20JK!5e0!3m2!1spt-BR!2sbr!4v1596671738361!5m2!1spt-BR!2sbr" height="450" frameBorder="0" style={{border:0,width:"100vw"}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </div>
    </section>


    <FOOTER />

  </span>)
}
