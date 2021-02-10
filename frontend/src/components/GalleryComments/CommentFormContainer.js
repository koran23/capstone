import React, {useEffect} from 'react'
import { useDispatch} from "react-redux";
import { unloadGallery } from "../../store/gallery";
import CommentFormItem from '../GalleryComments/CommentFormItem'
import CommentForm from '../GalleryComments/CommentForm'
import styled from 'styled-components';

const CommentContainer = styled.div`
.comments-scroll {
  overflow: auto;
  width: 315px;
  max-height: 130px;
  margin-left: 5px;
}

@media only screen and (min-width: 1400px) and (min-height: 800px) {
  .comments-scroll {
    overflow: auto;
    width: 315px;
    max-height: 280px;
    margin-left: 5px;
  }
}
`


export default function CommentFormContainer({selectedImg}) {

    console.log(selectedImg)
    return (
        <CommentContainer>
        <div>
            <CommentForm selectedImg={selectedImg}/>
            <div classnmae='comments-scroll'>
            <CommentFormItem selectedImg={selectedImg}/>
            </div>
            </div>
  
        </CommentContainer>
    )
}

