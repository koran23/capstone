import React from "react";
import BackgroundImage from "frontend/src/assets/segen.jpg"
import styled from 'styled-components'

const Background = styled.div`
.background {
  background-size: cover;
  position: fixed;
top: 0;
width: 100%;
height: 100%;
background-size: cover;
}
`

export default function Splash() {
  return (
    <Background>
    <div className='background'
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      
    </div>
    </Background>
  );
}

