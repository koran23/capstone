import React from 'react'
import {Post} from '../index'
import styled from 'styled-components';

const FeedStyle = styled.div`

.feed {
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
`


export default function Feed() {
    return (
        <FeedStyle>
        <div className='feed'>
            <Post/>
            {/* Map posts */}
        </div>
        </FeedStyle>
    )
}

