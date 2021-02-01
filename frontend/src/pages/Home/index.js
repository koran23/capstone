import React from 'react'
import { CreatePost, Feed} from '../../containers/index'


export default function Home() {
    return (
        <div className='Home'>
            <CreatePost />
            <Feed/>
        </div>
    )
}
