import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPhoto } from "../../store/gallery";
import styled from "styled-components";
// import { setPic } from "../../store/session";
// import { addGalleryPic } from "../../store/gallery";

const Upload = styled.div`
  form {
    margin: 30px auto 10px;
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
    margin: 1px auto;
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
  .imgPreview {
    width: auto;
    height: 100px;
    border-radius: 50%;
  }
  .error {
    color: var(--error);
  }
`;

const UploadForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [imgPreview, setImagePreview] = useState(null);
  const [image, setImage] = useState({ name: null });
  const [errors, setErrors] = useState([]);

  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });
  console.log(loggedInUser);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    console.log(image)
    dispatch(createPhoto({ userId: loggedInUser.id, image }))
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


    const updatePost = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);

    const fileReader = new FileReader();
    if (file) {
      fileReader.readAsDataURL(file);
    }
    fileReader.onloadend = () => {
      setImagePreview(fileReader.result);
    };
  };

  return (
    <Upload>
     <form onSubmit={handleSubmit}>
              <label>
                <input type="file" onChange={updatePost} name="image" />
                <span>+</span>
              </label>
              <img className="imgPreview" src={imgPreview} alt=""></img>
              <br></br>
              <button className="contact-form-btn-upload"  type="submit">
                Post
              </button>
            </form>
    </Upload>
  );
};

export default UploadForm;
