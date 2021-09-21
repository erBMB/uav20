import React from "react";
import styled from "styled-components";

const SponsoriStyle = styled.div`
  padding: 15rem 0 10rem 0;
  margin-left: 3em;

  .center-image {
    display: flex;
    justify-content: "center";
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

  .eh3 {
    font-family: "Times New Roman", Times, serif;
    margin-bottom: 4em;
    font-size: 20px;
    color: black;
    margin-top: 25px;
    text-align: center;
  }

  .eh1 {
    font-size: 48px;
    color: black;
    font-family: "Times New Roman", Times, serif;
    margin-bottom: 2em;
    text-align: center;
  }

  .eli {
    font-size: 15px;
    margin-top: 10px;
  }
  .eul {
    margin-left: 100px;
  }

  .ep2 {
    font-size: 21px;
    font-family: "Times New Roman", Times, serif;
    color: black;
    margin-top: 2em;
    margin-left: 20px;
  }
  .ep1 {
    font-size: 17px;
    font-family: "Times New Roman", Times, serif;
    color: black;
    margin-top: 0.7em;
    margin-left: 2em;
  }
`;

export default function Sponsorii() {
  return (
    <>
      <SponsoriStyle>
        <h1 className="eh1">Sponsori și parteneri</h1>

        <h3 className="eh3">
          Eveniment realizat cu sprijinul Ministerul Educației Naționale
        </h3>
        <hr style={{ width: "70%", margin: " auto" }} />
        <div className="center-image">
          <img src="/resources/sponsors.png" alt="Multumim sustinatorilor" />
        </div>
        <hr style={{ width: "70%", margin: " auto" }} />
        <h1 className="eh1" style={{ marginTop: "1em" }}>
          Sponsori tehnici:
        </h1>

        <p className="ep2">
          {" "}
          Asociatia Generala a Inginerilor din Romania, AGIR - filiala Arad{" "}
        </p>
        <p className="ep1"> https://www.agir.ro/filiala.php?filiala=Ar </p>
        <p className="ep2">
          {" "}
          Asociația pentru Automatizari si Instrumentatie din Romania, A.A.I.R.
          - filiala Arad{" "}
        </p>
        <p className="ep1"> https://www.aair.org.ro/pag/sucursale </p>
        <p className="ep2"> Ministerul Educatiei Nationale </p>
        <p className="ep1"> https://www.edu.ro/ </p>
        <p className="ep2">
          {" "}
          Societatea Română de Automatica si Informatica Tehnica, SRAIT -
          filaila Arad{" "}
        </p>
        <p className="ep1"> https://uav.ro/ro/cercetare/srait-filiala-arad </p>
      </SponsoriStyle>
    </>
  );
}
