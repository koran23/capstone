import React from 'react'
import {Feed} from '../../containers/index'
import PhotoSeries from '../../components/PhotoSeries'

export default function Home() {
    return (
        
        <div className='Home'>
            <Feed/>
            <PhotoSeries/>
        </div>    
    )
}
