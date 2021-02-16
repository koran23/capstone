import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDeliveredPhotos, unloadGallery } from "../../store/gallery";
import { motion } from "framer-motion";
import styled from "styled-components";

const ImgGrid = styled.div`
  main {
    display: block;
  }

  .index-photo-display {
  display: -webkit-flex;
  flex-flow: column;
  align-items: center;
  margin: 30px;
  margin-top: 80px;
}

.tag-options {
  padding-top:10px;
  margin-bottom: 10px;
}

.tag-options a {
  padding: 10px;
  font-family: 'Barlow Semi Condensed';
  color: gray;
  font-size: 15px;
}
.tag-options a:hover {
  opacity: 0.6;
  cursor: pointer;
}

  .index-sub-display {
    position: relative;
    column-count: 1;
    column-gap: 1em;
    width: 85%;
    margin-top: 25px;
    margin-bottom: 50px;
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
  .tile .liked {
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

      .image {
		box-shadow: 0 1px 1px 2px rgba(0,0,0, .15);
		border-radius: 2px;
      }

  a:hover {
    opacity: 0.9;
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

const ImageGridDelivered = ({ setSelectedImg, selectedImg }) => {
  const dispatch = useDispatch();

  // Generate random prompts???
  // var item = items[Math.floor(Math.random() * items.length)];

  const currentPhotos = useSelector((fullReduxState) => {
    return fullReduxState.gallery.photo;
  });

  const loggedInUser = useSelector((store) => store.session.user);

  useEffect(async () => {
    dispatch(fetchAllDeliveredPhotos({ userId: loggedInUser.id }));
  }, []);

  return (
    <ImgGrid>
      <main>
        <div className="everything">
          <div className="index-photo-display">
            <div className="tag-options">
            <Link to={`/gallery`}>Samples</Link>
            <Link to={`/delivered`}>Delivered</Link>
          </div>
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
                      <div className="username-display">
                        <div className="photo-index-user"></div>
                        <div className="photo-index-username"></div>
                      </div>
                      <motion.img
                      className='image'
                        src={doc.url}
                        alt="uploaded pic"
                        // options={{
                        //   fillWidth: true,
                        // }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      />
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

export default ImageGridDelivered;
