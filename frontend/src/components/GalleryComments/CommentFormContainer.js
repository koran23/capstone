import React from 'react'
import CommentFormItem from '../GalleryComments/CommentFormItem'
import CommentForm from '../GalleryComments/CommentForm'
import styled from 'styled-components';


export default function CommentFormContainer({selectedImg}) {
    console.log(selectedImg)
    return (
        <div>
            <CommentForm selectedImg={selectedImg}/>
            <CommentFormItem/>
            
        </div>
    )
}

