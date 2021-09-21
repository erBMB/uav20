import React from 'react';
import styled from 'styled-components';
import HorizontalLine from '../components/HorizontalLine';
import Lists from '../components/Lists';
import {sectiuneaTextile} from '../components/listData'



const ComiteeStyle=styled.div`
padding: 15rem 0 10rem 0;
margin-left: 3em;

.eh3{
    font-family: 'Times New Roman', Times, serif;
    margin-bottom: 25px;
    font-size:20px ;
    color: black;
    margin-top: 25px;
}

.eh1{
font-size: 48px;
color:black;
font-family: 'Times New Roman', Times, serif;
}

.eli{
    font-size: 15px;
    margin-top: 10px;
}
.eul{
    margin-left: 100px;

}
`;




export default function Comitee(){
    return(
        <>
        <Lists sectiuneaTextile={sectiuneaTextile } style={{fontSize:'15px',marginTop:"10px"}}></Lists>
        <ComiteeStyle>
<h1 className='eh1'>Comitete:</h1>
<HorizontalLine/>
<h3 className="eh3">Comitet consultativ</h3>
<ul className="eul" >
  <li className="eli">Rector: Ramona Lile</li>
  <li className="eli">Prorector: Codruta Stoica</li>
  <li className="eli">Prorector: Popa Alexandru</li>
  <li className="eli">Prorector: Teodor Cilan</li>
  <li className="eli">Decan - Facultatea de Inginerie: Dan Glavan</li>
  <li className="eli">Prodecan: Doina Mortoiu</li>
  <li className="eli">Prodecan: Adina Bucevschi</li>
  <li className="eli">Director de departament: Gheorghe Sima</li>
</ul> 
<h3 className="eh3">Comitet științific </h3>
<ul className="eul" >
<li className="eli">Acad. Florin Gheorghe Filip (Romania)</li>
<li className="eli">Valeriu Beiu (Romania)</li>
<li className="eli">Michio Sugeno (Japonia)</li>
<li className="eli">Lakhmi C. Jain (Australia)</li>
<li className="eli">Anca Ralescu (USA)</li>
<li className="eli">Dan Ralescu (USA)</li>
<li className="eli">Guojun Wang (China)</li>
<li className="eli">Bernadette Bouchon-Meunier (Franta)</li>
<li className="eli">Salil Bose (USA)</li>
<li className="eli">Ioan Dzitac (Romania)</li>
<li className="eli">Tsung-Chih Lin (China)</li>
<li className="eli">Octavian Prostean (Romania)</li>
<li className="eli">Oana Geman (Romania)</li>
<li className="eli">Ankur Gupta (India)</li>
<li className="eli">Gheorghe Capatana (Republica Moldova)</li>
<li className="eli">Muhammad Waseem Ashraf (Pakistan)</li>
<li className="eli">Simona Dzitac (Romania)</li>
<li className="eli">Gelu Ovidiu Tirian (Romania)</li>
<li className="eli">Mariana Nagy (Romania)</li>
<li className="eli">Rajeeb Dey (India)</li>
<li className="eli">Seshadhri Srinivasan (India)</li>
<li className="eli">Muhammad Waseem Ashraf (Pakistan)</li>
<li className="eli">Nilanjan Dey (India)</li>
<li className="eli">Amira Ashour (Egipt)</li>
<li className="eli">Fuqian Shi (China)</li>
<li className="eli">Barnali Dey (India)</li>
<li className="eli">Krit Salahddine (Maroc)</li>
<li className="eli">Bhuvan Modi (USA)</li>
<li className="eli">Muhammad Arif (China)</li>
<li className="eli">Ranbir Batth (India)</li>
<li className="eli">Muhammad Imran Tariq (Pakistan)</li>
<li className="eli">Mohit Mittal (India)</li>
<li className="eli">Rob Raluca (Romania)</li>
<li className="eli">Cornelia Victoria Anghel Drugarin (Romania)</li>
<li className="eli">Roxana Beiu (Romania)</li>
<li className="eli">Clara Rohatinovici (Romania)</li>
<li className="eli">Kristijan Cincar (Serbia)</li>
<li className="eli">Marius Buzera (Romania)</li>
<li className="eli">Maria Petcut (Romania)</li>
<li className="eli">Maria Muresan (Romania)</li>
<li className="eli">Florina Pasculescu (Romania)</li>
<li className="eli">Carmen Rus (Romania)</li>
</ul>
<h3 className="eh3">Comitet de organizare</h3>
<h3 style={{marginLeft:'20px',color:'black',fontSize:'15px', marginTop:'25px'}}>1. Inginerie Electrica si Informatica</h3>
<ul className="eul" >
<li className="eli"> Marius M. Balas</li>
<li className="eli"> Valentina E. Balas</li>
<li className="eli"> Virgil F. Duma</li>
<li className="eli"> Valentin Muller</li>
<li className="eli"> Corina Mnerie</li>
<li className="eli"> Ioan Koles</li>
<li className="eli"> Cornel Barna</li>
<li className="eli"> Mihaela Popa</li>
<li className="eli"> Daniel Dragu</li>
<li className="eli"> Noemi Clara Rohatinovici</li>
</ul>
<h3 style={{marginLeft:'20px',color:'black',fontSize:'15px', marginTop:'25px'}}>2. Sectiunea Mecanica</h3>
<ul className="eul" >
<li className="eli">Ioan Radu</li>
<li className="eli">Iosif Kaposta</li>
<li className="eli">Liviu Sevastian Bocii</li>
<li className="eli">Adriana Motica</li>
<li className="eli">Gheorghe Hutiu</li>
<li className="eli">Dorin Demian</li>
<li className="eli">Lucian Gal</li>
<li className="eli">Bogdan Tanasoiu</li>
<li className="eli">Aurelia Tanasoiu</li>
<li className="eli">Laurentiu Jitaru</li>
<li className="eli">Adriana Micsa</li>
<li className="eli">Mihai Sirb</li>
<li className="eli">Stela Muncut</li>
<li className="eli">Sorin Igret</li>
<li className="eli">Radu Negrila</li>
<li className="eli">Theoharis Babanatsas</li>
<li className="eli">Andrei Komjaty</li>
<li className="eli">Lavinia Culda</li>
</ul>
<h3 style={{marginLeft:'20px',color:'black',fontSize:'15px', marginTop:'25px'}}>3. Sectiunea Textile</h3>
<ul className="eul" >
<li className="eli">Ionel Barbu</li>
<li className="eli">Cecilia Sirgie</li>
<li className="eli">Monica Szabo</li>
<li className="eli">Magdalena Fogorasi</li>
<li className="eli">Monica Pustianu</li>
<li className="eli">Erzsebet Airinei</li>
</ul>
        </ComiteeStyle>
        </>
        

    )
}