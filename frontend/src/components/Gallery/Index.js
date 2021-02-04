import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  }

  .tile a {
    justify-content: center; /* horizontally align portrait image */
    align-items: center; /* vertically align landscape image */

    /** fixed width, creates a square for our image to live */
    width: 414px;
    height: 414px;
    /* Could be styles with a responsive technique a like aspect ratio prop, but that is outside the scope of here */

    /* background-color: ${(props) => props.theme.bg}; */
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

export const SliderData = [
  {
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },

  {
    image:
      "https://images.unsplash.com/photo-1611615748294-9d8a9e330909?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611833306589-b0d616d56c01?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611845499083-ecb741b592cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612036167567-f94312b5230d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612039282280-9c29cf18722b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
];

const ImageGrid = ({ setSelectedImg }) => {
  const loggedInUser = useSelector((store) => store.session.user);

  return (
    <ImgGrid>
      <main>
        <div className="everything">
          <div className="index-photo-display">
            <div className="index-sub-display">
              <div className="tile">
                {SliderData &&
                  SliderData.map((doc) => (
                    <motion.div
                      layout
                      whileHover={{ opacity: 1 }}
                      s
                      onClick={() => setSelectedImg(doc.image)}
                    >
                      <a>
                        <div className="username-display">
                          <div className="photo-index-user">
                            <Link to={`/`}>
                              <img
                                src={
                                  "https://yt3.ggpht.com/ytc/AAUvwnh1sZ8Y0mGlhOcdNor1ic3mn4NtTZsA6szvWSBKFw=s900-c-k-c0x00ffffff-no-rj"
                                }
                              />
                            </Link>
                          </div>
                          <div className="photo-index-username">
                            <Link to={`/`} className="username">
                              {loggedInUser.username}
                            </Link>
                          </div>
                        </div>
                        <motion.img
                          src={doc.image}
                          alt="uploaded pic"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                        />
                      </a>
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
