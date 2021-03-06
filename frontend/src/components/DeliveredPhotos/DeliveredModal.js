import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { unloadGallery } from "../../store/gallery";
import { motion } from 'framer-motion';
import styled from 'styled-components';
import CommentFormContainer from '../GalleryComments/CommentFormContainer'

const Mod = styled.div`

.modal-photo-show {
  position: absolute;
  max-height: 100%;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2px;
  background: white;
  /* border: 3px solid white; */
  display: inline;
  // opacity: 0.96;
}

.photo-comment-div {
  display: flex;
  flex-direction: row;
}


.photo-show-div img {
    display: flex;
  max-width: auto;
  max-height: 400px;
  margin:auto;
  box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
  /* border: 3px solid white; */
}

@media only screen and (min-width: 1100px) and (min-height: 600px) {
  .photo-show-div img {
    width: auto;
    max-height: 450px;
  }
}

@media only screen and (min-width: 1300px) and (min-height: 750px) {
  .photo-show-div img {
    width: auto;
    max-height: 600px;
  }
}

@media only screen and (min-width: 1400px) and (min-height: 800px) {
  .photo-show-div img {
    width: auto;
    max-height: 650px;
  }
}

@media only screen and (min-width: 1600px) and (min-height: 900px) {
  .photo-show-div img {
    width: auto;
    max-height: 750px;
  }
}

.ReactModal__Body--open {
  overflow: hidden;
}

.photo-show-overlay {
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background: rgba(0.7, 0.7, 0.7, 0.7);
}


.photo-show {
  position: absolute;
  width: 100%;
  height: 648px;
  top: 50%;
  left: 51.5%;
 transform: translate(-50%, -50%);
  background-color: black;
  border-radius: 2px;
	img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 2px;
    
  }
}

.close-modal-x {
  position: absolute;
  width: 25px;
  height: 25px;
  font-size: 20px;
  top: 15px;
  left: 98.6%;
  transform: translate(-50%, -50%);
  color: gray;
  align-items: center;
}

.close-modal-x:hover {
  opacity: 0.6;
}

`

const DeliveredModal = ({ setSelectedImg, selectedImg }) => {
   const loggedInUser = useSelector((store) => store.session.user);
   const dispatch = useDispatch();

  
  const handleClick = (e) => {
    // window.location.href = '/post'
      setSelectedImg(null);
      Redirect(`/gallery/${loggedInUser.id}`)
  }

    useEffect(() => {
    // Request to the server.
    // const response = await fetch("/api/bands");
    // setBands(response.data.bands);
    
     return () => {
      dispatch(unloadGallery())
    }
  }, [dispatch]);
  
  
  return (
      <Mod>
        <div  className='ReactModal__Overlay ReactModal__Overlay--after-open photo-show-overlay'>
        <div className='ReactModal__Content ReactModal__Content--after-open modal-photo-show'>
        <div className='photo-comment-div'>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div onClick={handleClick} className='photo-show-div'>
          <div className='container'>
      <motion.img src={selectedImg.url} alt="enlarged pic" 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        />
      </div>
      </div>
    </motion.div>
      <CommentFormContainer selectedImg={selectedImg}/>
    </div>
    </div>
    </div>
    </Mod>
  )
}

export default DeliveredModal;