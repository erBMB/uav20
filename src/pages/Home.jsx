import React from 'react';
import styled from 'styled-components';

const Home1Style=styled.div`

padding-top: 150px;
display: flex;
justify-content: center;
align-items: center;

hr{
    margin-top: 15px;
    margin-bottom:15px;
}

a:link, a:visited {
  background-color: white;
  color: navy;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-style: solid;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin-top: 20px;
margin-bottom: 20px;
}

    a:hover, a:active {
  background-color: #F5F5F5;
}

code {
  background: #2db34a;
  border-radius: 6px;
  color: #fff;
  display: block;
  font: 14px/24px "Source Code Pro", Inconsolata, "Lucida Console", Terminal, "Courier New", Courier;
  padding: 24px 15px;
  text-align: center;
}
header,
section,
aside,
footer {
  margin: 0 1.5% 24px 1.5%;
}
section {
  float: left;
  width: 20%;
}
aside {
  float: right;
  width: 45%;
}

.img1{
    padding-top: 20px;
    padding-left: 20px;
    width: 300px;
    height: 300px;
}
.img2{
    padding-top: 50px;
    padding-right: 10px;
    padding-left: 200px;
    width: 800px;
    height: 500px;
}
.top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

.dimText{
    font-size:14px ;
color:black;
}

@media only screen and (max-width: 1220px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
      section{
          width: 100%;
          padding-left: 3em;
          padding-right: 3em;
      }
      aside{
        width: 100%;
          
          padding-left: 3em;
          padding-right: 3em;
      }
      
    }
    }
`;



export function Home1(){
    return (
      <Home1Style>
         <div className="top-section">
        <section >
        <img src="/resources/FI.png" className="img1" alt="a" />;
        <p style={{ textAlign: "center", color: "black", fontSize: "20px" }}>
          4-5 iunie 2021
        </p>
        <a
          href="https://www.facebook.com/SICSSArad/"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: "16px", textAlign: "center", color:'navy' }}
        >
          Vizitați-ne pe Facebook
        </a>
        <hr style={{ width: "70%", margin: " auto" }} />
        <h1>Universitatea "Aurel Vlaicu" Arad - ROMANIA</h1>
        <h2>
          Str. Elena Drăgoi, nr. 2, Arad Complex Universitar M +4 0257-250.389
        </h2>
        <hr style={{ width: "70%", margin: " auto" }} />
        <a
          href="https://inginerie.uav.ro/"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: "16px", textAlign: "center" }}
        >
          Universitatea "Aurel Vlaicu" din Arad
        </a>
        <h1 style={{fontSize:'18px',color:'black'}}>Centrul de infromatii</h1>
        <div style={{fontSize:'14px'}}>
            <p></p>
        <p style={{marginTop:'10px'}}>
          <b>Valentina Emilia Balas </b>
        </p>
        <p> balas@drbalas.ro</p>
        <p>+40 0740 059 151 </p>
        <p>
          <b>Marius Mircea Balas </b>
        </p>
        <p>marius@drbalas.ro </p>
        <p> +40 0756 577 992 </p>
        </div>
        </section>
        <aside >
        <h1>Bun venit pe pagina noastră!</h1>
        <div className="centered">
          <img
            src="/resources/arad-romania.jpg"
            alt="Felicitari tuturor participantilor"
          />
        </div>

        <a
          href="https://cdn.uav.ro/documente-inginerie/Manisfestari-Studentesti/Programul-Sesiunii-Stiintifice-Studentesti-2021.pdf"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: "16px", textAlign: "center" }}
        >
          Program desfasurare
        </a>
        <div className='dimText'>
          <p>
            Sesiunea internationala de comunicari stiintifice studentesti a
            Facultatii de Inginerie din cadrul Universitatii "Aurel Vlaicu" din
            Arad, se afla la a XXII-a editie.{" "}
          </p>
          <p>
            Ca intotdeauna principalul ei scop este atat provocarea cat si
            oferirea oportunitatii studentilor de a-si demonstra fiecare
            cunostintele, din domeniul ingineriei, mecanicii, informaticii si
            energeticii, cu aplicabilitatea lor prin realizarea unor lucrari
            stiintifice care sa le puna in evidenta eforturile creative si
            intelectuale.
          </p>
          <p>
            {" "}
            Aceasta sesiune de comunicari stiintifice este un prilej pentru
            studentii din diversele centre universitare atat din tara cat si din
            afara tarii, de a schimba pareri, opinii, cunostinte, de a lega
            colaborari viitoare, prietenii si de a primii sfaturi de la cei mai
            buni în domeniu, doctoranzi, masteranzi si profesori din mediul
            academic de pe plan atat național cat si international.{" "}
          </p>
          <p>
            Diplomele care vor fi oferite participantilor, diplome de
            participare sau de premiere pentru cele mai bune lucrari, vor putea
            constitui un plus în CV-ul personal al studentului. Competitia intre
            studentii participanti la sesiunile de comunicari este benefica si
            poate constitui un mod de afirmare în evolutia profesionala a
            studentului2.
          </p>
        </div>
        </aside>
        </div>
      </Home1Style>
    );
}