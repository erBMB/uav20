import React from "react";
import styled from "styled-components";

const SStyle = styled.div`
  padding: 15rem 0 10rem 0;
  margin-left: 3em;

  .center-image {
    display: flex;
    justify-content: "center";
    width: 25%;
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
    font-size: 3rem;
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
    font-size: 16px;
    font-family: "Times New Roman", Times, serif;
    color: black;
    margin-top: 1.2em;
    margin-left: 2em;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export function Sections() {
  return (
    <SStyle>
      <h1 className="eh1">
        Secțiunile sesiunii internaționale de comunicări științifice
        studențești:
      </h1>
      <hr style={{ width: "70%", margin: " auto" }} />
      {/* <ol style={{ marginTop: "30px", alignContent: "center" }}> */}
      <ol
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <li className="ep1">Automatizări și Calculatoare;</li>
        <li className="ep1">Electronică;</li>
        <li className="ep1">
          Energetică, Electrotehnică, Energii regenerabile;
        </li>
        <li className="ep1">Informatică;</li>
        <li className="ep1">Mecanică;</li>
        <li className="ep1">Textile;</li>
      </ol>
    </SStyle>
  );
}
