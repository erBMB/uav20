import React from 'react';

const HorizontalLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5,
            marginTop:25,
            marginBottom:20,
           paddingLeft:-100,
           marginLeft:-100,
        }}
    />
);

export default function Line(){
    return(
        <HorizontalLine/>
            
       // </HorizontalLine>
    )
}