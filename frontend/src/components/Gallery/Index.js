import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPhotos } from "../../store/gallery";
import { motion } from "framer-motion";
import styled from "styled-components";

const ImgGrid = styled.div`
  main {
    display: block;
  }

  .index-sub-display {
    position: relative;
    column-count: 1;
    column-gap: 1em;
    width: 100%;
    margin-top: 25px;
  }
  .index-photo-display {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 30px;
    margin-top: 5px;
  }

  .tile img {
    width: auto; /* to counter any width attributes and allow intrinsic image width */
    height: auto; /* to counter any height attributes and allow intrinsic height */
    max-width: 100%; /* scale with the parent element width */
    max-height: 100%;
    opacity: 0.8;
    cursor: pointer;
    /* transition: 0.5s ease-in-out; */
  }

  .tile a {
    justify-content: center; /* horizontally align portrait image */
    align-items: center; /* vertically align landscape image */

    /** fixed width, creates a square for our image to live */
    /* width: 414px;
    height: 414px; */
    /* Could be styles with a responsive technique a like aspect ratio prop, but that is outside the scope of here */

    /* background-color: ${(props) => props.theme.bg}; */
    filter: brightness(0.5) grayscale(100);
  }
  .tile .liked  {
    justify-content: center; /* horizontally align portrait image */
    align-items: center; /* vertically align landscape image */

    /** fixed width, creates a square for our image to live */
    /* width: 414px;
    height: 414px; */
    /* Could be styles with a responsive technique a like aspect ratio prop, but that is outside the scope of here */

    /* background-color: ${(props) => props.theme.bg}; */
     filter: brightness() grayscale(0);
  }
  .tile a:hover {
      cursor: pointer;
      filter: brightness() grayscale(0);
    }

  a {
    flex-direction: column;
    img:hover {
      cursor: pointer;
     
    }

    img {
      box-shadow: 0 1px 1px 2px rgba(0, 0, 0, 0.15);
      border-radius: 2px;
       filter: brightness() grayscale(0);
    }

    display: inline-block;
    margin-bottom: 12px;
    width: 100%;
  }

  a:hover {
    opacity: 0.9;

    .username-display {
      visibility: visible;
    }
    .photo-index-user {
      visibility: visible;
    }
  }

  .username-display {
    display: flex;
    flex-direction: row;
    font-family: "Barlow Semi Condensed";
    padding: 5px;
    visibility: hidden;
    position: absolute;

    .username {
      font-size: 15px;
      color: white;
      text-transform: lowercase;
    }
  }

  .username-display:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  .photo-index-user {
    width: 35px;
    display: block;
    box-flex: 0;
    flex: none;
    box-align: stretch;
    align-items: stretch;
    box-orient: vertical;
    box-direction: normal;
    padding-left: px;
    padding-top: 5px;

    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      vertical-align: baseline;
    }

    a {
      width: 30px;
      height: 30px;
      // background-color: #fafafa;
      box-sizing: border-box;
      display: block;
      box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      overflow: hidden;
      position: relative;
    }
  }

  .photo-index-username {
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    padding-top: 9px;
  }

  @media only screen and (-webkit-min-width: 600px) {
    .index-sub-display {
      column-count: 2;
      -moz-column-count: 2;
      -webkit-column-count: 2;
    }
  }

  @media only screen and (-webkit-min-width: 1000px) {
    .index-sub-display {
      column-count: 3;
      -moz-column-count: 3;
      -webkit-column-count: 3;
    }
  }

  @media only screen and (-webkit-min-width: 1500px) {
    .index-sub-display {
      column-count: 4;
      -moz-column-count: 4;
      -webkit-column-count: 4;
    }
  }
  @media only screen and (min-width: 600px) {
    .index-sub-display {
      column-count: 2;
      -moz-column-count: 2;
      -webkit-column-count: 2;
    }
  }

  @media only screen and (min-width: 1000px) {
    .index-sub-display {
      column-count: 3;
      -moz-column-count: 3;
      -webkit-column-count: 3;
    }
  }

  @media only screen and (min-width: 1500px) {
    .index-sub-display {
      column-count: 4;
      -moz-column-count: 4;
      -webkit-column-count: 4;
    }
  }
`;

const ImageGrid = ({ setSelectedImg, selectedImg }) => {
  const dispatch = useDispatch();

  // Generate random prompts???
  // var item = items[Math.floor(Math.random() * items.length)];

  const currentPhotos = useSelector((fullReduxState) => {
    return fullReduxState.gallery.photo;
  });

  // console.log(selectedImg.id);

  const loggedInUser = useSelector((store) => store.session.user);

  useEffect(async () => {
    // Request to the server.
    // const response = await fetch("/api/bands");
    // setBands(response.data.bands);
    dispatch(fetchAllPhotos({ userId: loggedInUser.id }));
  }, []);
  
  console.log(currentPhotos)

  return (
    <ImgGrid>
      <main>
        <div className="everything">
          <div className="index-photo-display">
            <div className="index-sub-display">
              <div className="tile">
                {currentPhotos &&
                  currentPhotos.map((doc) => (
                    <motion.div
                      layout
                      whileHover={{ opacity: 1 }}
                      s
                      onClick={() => {
                        setSelectedImg(doc);
                      }}
                    >
                      {doc.like === true ? 
                      <a className='liked'>
                        <div className="username-display">
                          <div className="photo-index-user" >
                            <Link to={`/about-me`}>
                              <img 
                                src={
                                  loggedInUser.profilePic
                                }
                              />
                            </Link>
                          </div>
                          <div className="photo-index-username">
                            <Link to={`/about-me`} className="username">
                              {loggedInUser.username}
                            </Link>
                          </div>
                        </div>
                        <motion.img
                        
                          src={doc.url}
                          alt="uploaded pic"
                          // options={{
                          //   fillWidth: true,
                          // }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                        /> 
                      </a> :    <a >
                        <div className="username-display">
                          <div className="photo-index-user">
                            <Link to={`/about-me`}>
                              <img
                                src={
                                  loggedInUser.profilePic
                                }
                              />
                            </Link>
                          </div>
                          <div className="photo-index-username">
                            <Link to={`/about-me`} className="username">
                              {loggedInUser.username}
                            </Link>
                          </div>
                        </div>
                        <motion.img
                        
                          src={doc.url}
                          alt="uploaded pic"
                          // options={{
                          //   fillWidth: true,
                          // }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                        /> 
                      </a>}
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </ImgGrid>
  );
};

export default ImageGrid;
