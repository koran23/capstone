import React from 'react'
import styled from 'styled-components'

const Right = styled.div`
.about-right{
    background: #fff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 5rem;
    text-align: center;
}
.about-right h1{
    font-size: 7rem;
    text-transform: uppercase;
}
.about-right h1 span{
    color: #dd2d4a;
}
.about-right h2{
    font-weight: 600;
}
.about-btns{
    display: flex;
    margin: 2rem 0;
}
.btn{
    border: none;
    font-size: 0.9rem;
    text-transform: uppercase;
    border: 2px solid #000;
    border-radius: 20px;
    padding: 0.55rem 0;
    width: 130px;
    font-weight: 600;
    background: transparent;
    margin: 0 0.5rem;
    cursor: pointer;
}
.btn.btn-pink{
    background: #dd2d4a;
    color: #fff;
    border-color: #dd2d4a;
    transition: all 0.5s ease-in-out;
}
.btn.btn-pink:hover{
    background: transparent;
    border-color: #dd2d4a;
    color: #000;
}
.btn.btn-white{
    transition: all 0.5s ease-in-out;
}
.btn.btn-white:hover{
    background: #dd2d4a;
    border-color: #dd2d4a;
    color: #fff;
}
.about-para p{
    font-weight: 300;
    padding: 0.5rem;
    opacity: 0.8;
}
`

export default function AboutMeRight() {
    return (
        <Right>
         <div class = "about-right">
        <h1>hi<span>!</span></h1>
        <h2>Here's who I am</h2>
        <div class = "about-btns">
          {/* <button type = "button" class = "btn btn-pink">resume</button>
          <button type = "button" class = "btn btn-white">projects</button> */}
        </div>

        <div class = "about-para">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aspernatur possimus ullam quaerat, laboriosam ex voluptate aliquid laborum, obcaecati ratione accusamus! Ea nisi modi dolor nam numquam? Temporibus, molestias amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus iure tempora alias laudantium sapiente impedit!</p>
        </div>
      </div>
        </Right>
    )
}
