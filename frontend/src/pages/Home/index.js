import React from 'react'
import { CreatePost, Feed} from '../../containers/index'
import styled from 'styled-components';
import ScriptTag from 'react-script-tag'

export default function Home() {
    return (
        
        <div className='Home'>
            <CreatePost />
            <Feed/>
        </div>
      
    )
}
