import React, { useState, useEffect, useRef } from "react";
import { confirmAlert } from "react-confirm-alert";
import ChatHeader from "./ChatHeader.js";
import Message from "../Message/Message";
import styled from "styled-components";

const Chatdiv = styled.div`
  .chat {
    display: flex;
    flex-direction: column;
    flex: 0.75;
    background-color: ${(props) => props.theme.background};
    height: 100vh;
  }

  .chat__messages {
    flex: 1;
  }

  .chat__input {
    color: ${(props) => props.theme.primaryColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px;
    /* border-radius: 5px; */
    margin: 20px;
    border-top: 3px solid gray;
    background-color: ${(props) => props.theme.bg};
  }

  .chat__input > form > input {
    padding: 50px;
    background: transparent;
    width: 100%;
    border: none;
    outline-width: 0;
    color: ${(props) => props.theme.primaryColor};
    font-size: large;
  }

  .chat__input > form {
    flex: 1;
  }

  .chat__inputButton {
    display: none;
  }
`;

const modalDiv = styled.div`
  .react-confirm-alert-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
  .react-confirm-alert {
    background: white;
    width: 80%;
    padding: 1em;
  }
  /* custom alert dialog styles */
  .add-dialog h3 {
    margin: 0;
  }
  .add-dialog-buttons {
    float: right;
  }
  .add-dialog-buttons button + button {
    margin-left: 0.5em;
  }
`;

function Chat() {

  

  return (
    <Chatdiv>
      <div className="chat">
        <ChatHeader />
        <div className="chat__messages">
          <Message />
        </div>
        <div className="chat__input">
          <form>
            <input placeholder={"# Please Leave a Review"} />
            <button
              // onclick={addDialog}
              className="chat__inputButton"
              type="submit"
            >
              Send Message
            </button>
          </form>

          <div className="chat__inputIcons"></div>
        </div>
      </div>
    </Chatdiv>
  );
}

export default Chat;
