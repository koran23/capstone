import React from 'react'
import styled from 'styled-components'
import ReviewTitle from '../../components/ReviewTitle'

const ReviewStyle = styled.div`
* {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    
}
body {
    font-family: 'Roboto';
}
.container {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 40px;
    width: 100vw;
    margin: auto;
    margin-top: 5%;
}
img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin-right: auto;
    margin-left: auto;
    display: block;
    margin-bottom: 10px;
}
.card {
    text-align: center;
    padding: 1.5rem;
    border-bottom-right-radius: 200px;
    border-bottom-left-radius: 200px;
}
/* .card-1 {
    border: 4px solid #ff6f61;
} */
.card-1 img{
    border: 3px solid #ff6f61;
}
.card-1 i{
    font-size: 20px;
    margin-bottom: 10px;
    color: #ff6f61;
}

.name {
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 10px;
}
`

export default function Reviews() {
    return (
        <ReviewStyle>
        <div>
            <ReviewTitle/>
            <div class='container'>
                {/* <div class='card card-1'>
                    <img src='https://media1.popsugar-assets.com/files/thumbor/uhmBYgnhE8Tco4jL5UnvnDW2LYI/1196x242:2764x1810/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/006/n/1922398/fe7006935d7044366c8982.50946989_/i/Rihanna.jpg'/>
                    <i class='fas fa-quote-left'></i>
                    <p>This was the best photoshoot ever! So professional, definitley recommend. Yes, this is Rihanna.</p>
                    <p className='name'>Rihanna</p>
                </div> */}
            </div>
        </div>
        </ReviewStyle>
    )
}
