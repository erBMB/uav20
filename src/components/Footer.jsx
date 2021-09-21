import React from 'react';
import styled from 'styled-components';



const FooterStyle = styled.div`
  padding-top: 0.1rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 1446px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 1rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;


export default function Footer() {
    return (
      <FooterStyle>
         <hr style={{width:'60%', margin:' auto'}} />
<p style={{textAlign:'center', fontSize:14, marginTop:'25px'}}>Sesiunea internationala de comunicari stiintifice studentesti a Facultatii de Inginerie din cadrul Universitatii "Aurel Vlaicu" din Arad, editia a XXIII-a</p>
<p style={{marginTop:'50px'}}></p>

</FooterStyle>
 );
}
