import React from "react";
import BackgroundImage from "../../assets/spicsgs9nde61.png"
import styled from 'styled-components'

const Background = styled.div`
.background {
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
    >hello world
    </div>
    </Background>
  );
}

