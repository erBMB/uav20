import React from 'react'
import styled from 'styled-components';

const PSStyle=styled.div`

padding-top: 200px;

.split {
  height: 100%;
  width: 30%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
  border-right: black;
    border-style: solid;
    border-width: 2px;
    margin-bottom: 15px;
    border-left: none;
    border-bottom: none;
    border-top: none;
    padding-top: 100px;
}

.left {
  left: 0;
  background-color: #111;
}

.right {
  right: 0;
  width: 70%;
}

.centered {
  //position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  width: 30%;
}



img{
   margin-top:5em;
    width: 200%;
    height: 200%;
}
.center-image{
    display:flex;
    justify-content:'center';
    width: 25%;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    ;
 }

.containerL{
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    border-right: black;
    border-style: solid;
    border-width: 2px;
    margin-bottom: 15px;
    border-left: none;
    border-bottom: none;
    border-top: none;
}

a:link, a:visited {
  background-color: white;
  color: black;
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
}

@media screen and (max-width: 1000px) {
    .container { display: flex; flex-flow: column-reverse; }
}

a:hover, a:active {
  background-color: #F5F5F5;
}
`;


export function PS() {
  return (
    <>
    
    <PSStyle>
      <div className="split letft ">
        <div className="center-image">
          <img
            src="/resources/FI.png"
            alt="Felicitari tuturor participantilor"
          />
        </div>
        <p style={{ textAlign: "center", color: "black", fontSize: "20px" }}>
          4-5 iunie 2021
        </p>
        <a
          href="https://www.facebook.com/SICSSArad/"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: "16px", textAlign: "center" }}
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
          href="https://www.facebook.com/SICSSArad/"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: "16px", textAlign: "center" }}
        >
          Universitatea "Aurel Vlaicu" din Arad
        </a>
        <h1>Centrul de infromatii</h1>
        <p>
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
      <div className="split right ">
        <h1>Bun venit pe pagina noastră!</h1>
        <div className="centered">
          <img
            src="/resources/arad-romania.jpg"
            alt="Felicitari tuturor participantilor"
          />
        </div>

        <a
          href="https://www.facebook.com/SICSSArad/"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: "16px", textAlign: "center" }}
        >
          Program desfasurare
        </a>
        <div>
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
            studentului.
          </p>
        </div>
      </div>
    </PSStyle>
    </>
  );
}