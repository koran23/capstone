import React from 'react'
import styled from 'styled-components'

const TitleStyle = styled.div`
/* base styles & title */
body{
  font-family: "Noto Serif";
  color: ${(props) => props.theme.primaryColor}
}
.App{
  max-width: 960px;
  margin: 0 auto;
}
.title h1{
  color: var(--primary);
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-weight: normal;
}
.title h2, .title p{
  text-align: center;
  color: ${(props) => props.theme.primaryColor}
}
.title h2{
  color: ${(props) => props.theme.primaryColor}
  margin-top: 60px;
  font-size: 2.6rem;
}
`

export default function Title() {
    return (
        <TitleStyle>
        <div className="title">
            <h2>Your Pictures</h2>
            <p>Please select your favorite photos</p>
        </div>
        </TitleStyle>
    )
}
