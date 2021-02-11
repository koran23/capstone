import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../store/posts";
import { set } from "js-cookie";

const Upload = styled.div`
  form {
    margin: 0px auto 10px;
    text-align: center;
  }
  label input {
    height: 0;
    width: 0;
    opacity: 0;
  }
  label {
    display: block;
    width: 30px;
    height: 30px;
    border: 1px solid var(--primary);
    border-radius: 50%;
    margin: 10px auto;
    line-height: 30px;
    color: var(--primary);
    font-weight: bold;
    font-size: 24px;
  }
  label:hover {
    background: var(--primary);
    color: white;
  }
  .output {
    height: 60px;
    font-size: 0.8rem;
  }
  .createPost {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }
  .createPost__loggedIn {
    /* background-color: ${(props) => props.theme.primaryColor}; */
    width: 100%;
    max-width: 650px;
  }
  .createPost__textarea {
    border: none;
    width: 100%;
    max-width: 650px;
  }
  .createPost__textarea:focus {
    outline: none;
    margin-top: 6px;
    .error {
      color: var(--error);
    }
  }
      .imgPreview {
    width: auto;
    height: 50px;
    border-radius: 50%;
  }
`;

export default function CreatePost({selectedImg}) {
  const [error, setErrors] = useState(null);
  const dispatch = useDispatch();
  const [imgPreview, setImagePreview] = useState(selectedImg.url);
  const [image, setImage] = useState(selectedImg.url);
  const [caption, setCaption] = useState("");

  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    dispatch(createPost({ userId: loggedInUser.id, image, caption }))
      .then(() => {
        setImage(null);
      })
      .catch((res) => {
        if (res.data && res.data.errors) {
          newErrors = res.data.errors;
          setErrors(newErrors);
        }
      });
  };

  // const updatePost = (e) => {
  //   const file = e.target.files[0];
  //   if (file) setImage(file);

  //   const fileReader = new FileReader();
  //   if (file) {
  //     fileReader.readAsDataURL(file);
  //   }
  //   fileReader.onloadend = () => {
  //     setImagePreview(fileReader.result);
  //   };
  // };

  return (
    <Upload>
      <div className="createPost">
        <div className="createPost__loggedIn">
          <p>Create Post</p>
          <div className="createPost__loggedInCenter"> </div>
          <div>
            <textarea
            value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="createPost__textarea"
              rows="3"
            ></textarea>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <img className="imgPreview" src={imgPreview} alt=""></img>
              <br></br>
              <button className="contact-form-btn-upload" type="submit">
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </Upload>
  );
}
