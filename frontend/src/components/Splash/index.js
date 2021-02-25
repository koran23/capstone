import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../../assets/segen.jpg"
import styled from "styled-components";

const Background = styled.div`
  .background {
      background-image:url(BackgroundImage)
  background-size: cover;
  position: fixed;
top: 0;
width: 100%;
height: 100%;
background-size: cover;
}
.body{
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  /* font-family: "Noto Serif"; */
  color: ${(props) => props.theme.primaryColor};
}
#showcase {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    padding-top: 350px;
    padding-right: 350px;
}
#showcase h1 {
    font-size: 50px;
}
#showcase a {
    font-size:14px;
    text-decoration: none;
    padding: 10px 20px;
    border: ${(props) => props.theme.white} 1px solid;
    color: ${(props) => props.theme.white};
    border-radius: 10px;
}
`;

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
      <div className='body'>
          <div id='showcase'>
        <h1>Welcome</h1>
       <Link to={'/login'}>Get Started</Link>
        </div>
        </div>
      </div>
    </Background>
  );
}


