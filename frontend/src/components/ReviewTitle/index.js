import React from "react";
import styled from "styled-components";

const ReviewTitle = styled.div`
.header {
    text-align: center;
    color: white;
    background-color: #f7cac9;
    width: 75vw;
    margin-top: 5%;
    padding: 1rem;
    overflow-wrap: normal;
}
`

export default function Title() {
  return (
      <ReviewTitle>
    <div>
      <div class="header">
        <h1>Hear what our customers say</h1>
      </div>
    </div>
    </ReviewTitle>
  );
}
