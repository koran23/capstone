import React from 'react'
import { AboutMeLeft, AboutMeRight } from '../../components'
import styled from 'styled-components';

const Wrapper = styled.div`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Poppins', sans-serif;
}
.about-wrapper{
    height: 100vh;
}

@media screen and (min-width: 992px){
    .about-wrapper{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}
`


export default function AboutMeContainer() {
    return (
        <Wrapper>
        <div className='about-wrapper'>
            <AboutMeLeft/>
            <AboutMeRight/>
        </div>
        </Wrapper>
    )
}
