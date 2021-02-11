import React from "react";
import styled from "styled-components";

const Blog = styled.div`
  .show-container {
    width: 100%;
    /* background-color:  */
    /* font-family: helvetica neue; */
  }
  .show-mid-col {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

.show-image {
  display: block;
  max-height: 85%;
  max-width: 100%;
  margin: 0px 0px;
  
}
.show-col-container {
  display: flex;
  justify-content: center;
  background-color:  ${(props) => props.theme.black};
  height: 700px;
  width: 100%;
} 
.photo-show {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
}
.photo-details-container {
  height: auto;
  width: 70%;
  padding-top: 30px;
  padding-bottom: 30px;
  /* background-color: #F3F5F6; */
  /* font-family: helvetica neue; */
}
.photo-details-container {
  display:flex;
  justify-content: center;
  align-items: flex-start;
  width: 60vw;
  /* padding-right: 200px; */
}
.photo-details-wrap {
  position: relative;
  height: auto;
  width: 400px;
  /* background: #F3F5F6; */
  /* padding-top: 20px; */
}
.display-username {
  font-size: 22px;
  font-weight: 500;
  margin-left: 10px;
  text-decoration: none;
  color: black;
  transition: ease .2s;
}
.edit-form-display-title, .edit-form-display-des {
  /* font-family: Helvetica Neue; */
  padding: 5px 10px;
  line-height: 20px;
  color: black;
}

.edit-form-display-title {
  font-size: 16px;
  font-weight: 500;
} 
.photo-user-comments {
  width: 100vw;
  /* background-color: #F3F5F6; */
}
`;

export default function SinglePhotoPage() {
  const Photo = {
    url:
      "https://images.unsplash.com/photo-1612952734440-f61490985d21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
  };
  return (
    <Blog>
        <div className='photo-show'>
      <div className='show-col-container'>
        <div className="show-container">
          <div className="show-mid-col">
            <img className='show-image' src={Photo.url} />
          </div>
        </div>
        </div>
        <div className='photo-details-container'>
            <div className='photo-user-comments'>
                {/* <div className='flex-row-space'>
                        <a className='display-username'>Segen</a>
                    </div> */}
                    <div className='photo-details-wrap'>
                        <div className='photo-details'>
                            <p className='edit-form-display-title'>A ray of light</p>
                            <p className='edit-form-display-des'>I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.</p>
                        </div>
                </div>
            </div>
        </div>
      </div>
        <div className='photo-show'>
      <div className='show-col-container'>
        <div className="show-container">
          <div className="show-mid-col">
            <img className='show-image' src={Photo.url} />
          </div>
        </div>
        </div>
        <div className='photo-details-container'>
            <div className='photo-user-comments'>
                {/* <div className='flex-row-space'>
                        <a className='display-username'>Segen</a>
                    </div> */}
                    <div className='photo-details-wrap'>
                        <div className='photo-details'>
                            <p className='edit-form-display-title'>A ray of light</p>
                            <p className='edit-form-display-des'>I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.</p>
                        </div>
                </div>
            </div>
        </div>
      </div>
    </Blog>
  );
}
