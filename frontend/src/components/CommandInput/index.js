import React from 'react'
import styled from 'styled-components'

const Comment = styled.div`
.commentInput{
    display: flex;
    justify-content: space-between;
}

.commentInput__textarea {
    height: 100%;
    width: 100%;
    font-family: "Fira Sans", sans-serif;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    resize: none;
}

.commentInput__textarea:focus {
    outline: none;
}

.commentInput__btn {
    background-color: white;
    border: none;
}
`

export default function CommentInput() {
    return (
        <Comment>
        <div className="commentInput">
            <textarea
            placeholder='Write a comment...'
            className="commentInput__textarea"
            rows="1"></textarea>
                <button className="commentInput__btn">Post</button>
        </div>
        </Comment>
    )
}
