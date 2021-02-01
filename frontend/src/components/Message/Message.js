
import React from "react"
import './Message.css'
import styled from 'styled-components';

const MessageDiv = styled.div`
.message {
    display: flex;
    align-items: center;
    padding: 20px;
    color: white;
}
.message__info h4 {
    margin-left: 20px;
   color: ${(props) => props.theme.primaryColor}
}
.message__info p {
    margin-left: 25px;
   color: ${(props) => props.theme.primaryColor}
}

.message__info {
    margin-left: 20px;
}

.message__timestamp {
    color: gray;
    margin-left: 20px;
    font-size: x-small;
}
`

function Message() {
  return (
    <MessageDiv>
    <div className='message'>
        <div className='message__info'>
            <h4>Ahdari
                <span className='message__timestamp'>this is a timestamp</span>
            </h4>

            <p>This is a review</p>
        </div>
    </div>
    </MessageDiv>
  );
}

export default Message;