import React from 'react';
import styled from "styled-components";

export const modalDiv = styled.div`

.Modal {
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 30%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
}
`

export const modal = props => {
    return (
        <modalDiv>
        <div className='Modal'>
            {props.children}
        </div>
        </modalDiv>
    );
};