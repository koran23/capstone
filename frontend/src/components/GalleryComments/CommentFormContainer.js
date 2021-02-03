import React from 'react'
import CommentFormItem from '../GalleryComments/CommentFormItem'
import CommentForm from '../GalleryComments/CommentForm'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  font-family: 'Barlow Semi Condensed';
  // position: absolute;
  // width: 91%;
  // height: 430px;
  // top: 70%;
  // left: 46%;
  // -webkit-transform: translate(-50%, -50%);
  /* background-color: white; */
 /* border: 1px solid gray; */
  border-radius: 5px;
`

export default function CommentFormContainer({selectedImg}) {
    console.log(selectedImg)
    return (
        <div>
            <CommentForm selectedImg={selectedImg}/>
            <CommentFormItem/>
            
        </div>
    )
}

