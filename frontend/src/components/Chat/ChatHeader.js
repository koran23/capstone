
import React from "react";
import "./ChatHeader.css";
import styled from 'styled-components';

const Chathead = styled.div`
.chatHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: grey;
    padding: 10px;
}

.chatHeader__hash {
    /* color: ${(props) => props.theme.black}; */
    color: gray;
    font-size: 30px;
    padding: 10px;
}

.chatHeader__left > h3 {
    display: flex;
    align-items: center;
    color: white;
}

.chatHeader__right {
    display: flex;
    align-items: center;
    flex: 0.5;
    justify-content: space-between;
}

.chatHeader__right > .MuiSvgIcon-root {
    padding: 5px;
    cursor: pointer;
}

.chatHeader__right > .MuiSvgIcon-root:hover {
    color: white;
}

.chatHeader__search {
    display: flex;
    align-items: center;
    color: gray;
    background-color: #2f3135;
    border-radius: 3px;
    padding: 3px;
}

.chatHeader__search > input {
    background: transparent;
    outline-width: 0;
    color: white;
    border: none;
}
`


function ChatHeader() {

    const User = {
    // username: "#hearmeout"
  }

  return (
    <Chathead>
    <div className="chatHeader">

      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">
              <h4>{User.username}</h4>
          </span>
        </h3>
      </div>

      <div className="chatHeader__right">

          {/* <div className="chatHeader__search">
              <input placeholder='Search' />

          </div> */}
      </div>
    </div>
    </Chathead>
  );
}

export default ChatHeader;
