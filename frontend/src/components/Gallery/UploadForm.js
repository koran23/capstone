import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPhoto } from "../../store/gallery";
import styled from "styled-components";
import Button from '../../styles/Button'

export const Upload = styled.div`
  width: 385px;
  padding: 3rem 1.5rem;
  background: ${(props) => props.theme.grey};
  border-radius: 4px;
  margin: 8% auto;

  h2 {
    margin-bottom: 1.3rem;
  }

  .input-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .input-group input:last-child {
    margin-left: 0.7rem;
  }
  label {
     border: 1px solid ${(props) => props.theme.black};
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.bg};
  }

  input {
    overflow: hidden;
    border-radius: 3px;
    width: 100%;
    padding: 0.6rem 1.2rem;
    background: ${(props) => props.theme.black};
    border: 1px solid ${(props) => props.theme.black};
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.bg};
  }

  textarea {
    overflow: hidden;
    width: 100%;
    padding: 0.6rem 1.2rem;
    background: ${(props) => props.theme.black};
    border: 1px solid ${(props) => props.theme.bg};
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.bg};
  }

  .action {
    margin-top: 1rem;
  }

    .imgPreview {
    width: auto;
    height: 400px;
    /* border-radius: 50%; */
  }

  button {
    padding: 0.4rem 1rem;
    background: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.blue};
    border-radius: 3px;
    text-transform: uppercase;
    letter-spacing: 1.1px;
  }

  span {
    letter-spacing: 0.8px;
    color: ${(props) => props.theme.secondaryColor};
  }

  @media screen and (max-width: 430px) {
    margin: 20% auto;
    width: 90%;
  }
`;

const UploadForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [imgPreview, setImagePreview] = useState([]);
  // const [image, setImage] = useState({ name: null });
  const [images, setImages] = useState([]);
  const [delivered, setDelivered] = useState(false);
  const [errors, setErrors] = useState([]);

  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    console.log(delivered);
    dispatch(
      createPhoto({ userId: loggedInUser.id, delivered: delivered, images })
    )
      .then(() => {
        setImages(null);
      })
      .catch((res) => {
        if (res.data && res.data.errors) {
          newErrors = res.data.errors;
          setErrors(newErrors);
        }
      });
      history.push('/gallery')
  };

  const updatePost = (e) => {
    const files = e.target.files;
    if (files) setImages(files);
    console.log(files)
    const fileReader = new FileReader();
    if (files) {
      fileReader.readAsDataURL(files[0]);
    }
    fileReader.onloadend = () => {
      setImagePreview(fileReader.result);
    };
  };

  return (
    <Upload>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="file" multiple onChange={updatePost} name="images" />
          {/* <span>+</span> */}
        </label>
        <img className="imgPreview" src={imgPreview} alt=""></img>
        <br></br>
        <label>Is this a delivery?</label>
        <input
          type="checkbox"
          checked={delivered}
          value={delivered}
          onChange={() => setDelivered(!delivered)}
        />
        <br></br>
        <Button type="submit">Upload</Button>
      </form>
    </Upload>
  );
};

export default UploadForm;
