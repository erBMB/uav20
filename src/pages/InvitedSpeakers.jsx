import React from 'react';
import styled from 'styled-components';


const ISStyle=styled.div`

padding: 15rem 0 10rem 0;
margin-left: 3em;

.center-image{
    display:flex;
    justify-content:'center';
    width: 25%;
    margin-left: auto;
    margin-right: auto;
 }



.eh3{
    font-family: 'Times New Roman', Times, serif;
    margin-bottom: 4em;
    font-size:20px ;
    color: black;
    margin-top: 25px;
    text-align: center;
}

.eh1{
font-size: 48px;
color:black;
font-family: 'Times New Roman', Times, serif;
margin-bottom: 2em;
text-align: center;
}

.eli{
    font-size: 15px;
    margin-top: 10px;
}
.eul{
    margin-left: 100px;

}

.ep2{
    font-size:21px ;
    font-family: 'Times New Roman', Times, serif;
    color:black;
    margin-top: 2em;
    margin-left: 20px;
}
.ep1{
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
    color: black;
    margin-top: 1.2em;
    margin-left: 2em;
}
.buttons{
    display: flex;
    flex-direction: column;
   align-items: center;
    justify-content: center;
}

`;

export function IS(){
    return(
        <ISStyle>
            <h1 className='eh1'>Invited Speakers</h1>
            <hr style={{width:'70%', margin:' auto'}} />
            <ol>
                <li className='ep1'>1. Acad. Florin Gheorghe Filip, Academia Romana "The Birth of The Romanian I&CT Sector; A Tribute to Acad. Mihai Drăgănescu" </li>
                <li className='ep1'>2. Prof. Dumitru Băleanu, Department of Mathematics, Cankaya University, Ankara, Turkey and Institute of Space Sciences, Magurele-Bucharest, Romania "The Beauty of the Fractional Calculus: Theory and Applications"</li>
                <li className='ep1'>3. Prof. Valeriu Beiu, Aurel Vlaicu University of Arad, Romania "Rise of the AI Chips" </li>
                <li className='ep1'>4. Prof. Soumya Banerjee, Senior Collaborative Researcher & Professor, INRIAEVA, Paris and CNAM-Paris, France Chief Technical Consultant ( AI& ML) Start -Up Book, Paris. Director, Innovation, Workz, Arcklow-Irish Govt. Research, CONNECT Program Research Consultant Netflix, Youtube "Must Virtual Exhibition tour with JoJo"</li>
                <li className='ep1'>5. Associate Professor Angela Egri, University of Petrosani, Romania "Voice Assistant in the Intelligent Room" </li>
                <li className='ep1'>6. Associate Professor Gelu-Ovidiu Tirian, Politechnica University of Timisoara, Romania Faculty of Engineering, Hunedoara "Advanced Research in Engineering at Faculty of Engineering Hunedoara"</li>
                <li className='ep1'>7. Associate Professor Vijender Kumar Solanki, Associate Professor at CRM Institute of Technology, Hyderabad, India "Recent Advances on Big Data Analysis" </li>
                <li className='ep1'>8. Associate Professor Simona Dzitac, University of Oradea, Romania "Computational intelligence methods for power engineering" </li>
                <li className='ep1'>9. Lecturer Cornelia Victoria Anghel-Drugarin, Eftimie Murgu University of Resita, Romania "Some aspects of Research Activities at Eftimie Murgu University of Resita"</li>
                <li className='ep1'>10. Prof. Cincar Kristijan, SC Nikola Tesla, Vrsac, Serbia and PhD Student at West University of Timisoara, Romania Presentation of the online learning platform Petlja.org, Serbia</li>
            </ol>

            
        </ISStyle>
    )
}