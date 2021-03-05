import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link, useHistory } from "react-router-dom";
import { editProfile } from "../../store/profile";
import styled from "styled-components";
import Button from "../../styles/Button";

export const StyledAuth = styled.div`
  width: 385px;
  padding: 3rem 1.5rem;
  /* background: ${(props) => props.theme.grey}; */
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

  input {
    overflow: hidden;
    border-radius: 3px;
    width: 100%;
    padding: 0.6rem 1.2rem;
    background: none;

    border: none;
    outline: none;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #fff;
    color: ${(props) => props.theme.primaryColor};
  }

  textarea {
    overflow: hidden;
    width: 100%;
    padding: 0.6rem 1.2rem;
    background: ${(props) => props.theme.black};
    border: 1px solid ${(props) => props.theme.black};
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.primaryColor};
  }

  .imgPreview {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    object-fit: cover;
  }

  .action {
    margin-top: 1rem;
  }

  button {
    padding: 0.4rem 1rem;
    background: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.secondaryColor};
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

function EditSocialPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [imgPreview, setImagePreview] = useState(null);
  const [image, setImage] = useState({ name: null });
  const [errors, setErrors] = useState([]);

  const loggedInUser = useSelector((store) => store.session.user);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const payload = {
  //     userId: loggedInUser.id,
  //     twitter: twitter,
  //     facebook: facebook,
  //     instagram: instagram,
  //     linkden: linkden,
  //   };

  //   dispatch(editSocial(payload));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    console.log(image);
    dispatch(
      editProfile({
        userId: loggedInUser.id,
        image,
        twitter: twitter,
        facebook: facebook,
        instagram: instagram,
        linkedin: linkedin,
      })
    )
      .then(() => {
        setImage(null);
      })
      .catch((res) => {
        if (res.data && res.data.errors) {
          newErrors = res.data.errors;
          setErrors(newErrors);
        }
      });
      history.push('/about-me')
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
    <StyledAuth>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>

        <label>
          Profile Picture
          <input type="file" onChange={updatePost} name="image" />
          {/* <span>+</span> */}
        </label>
        <img className="imgPreview" src={imgPreview} alt=""></img>
        <br />
        <br />
        <br />
        <label>
          Twitter
          <input
            type="text"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </label>

        <label>
          Facebook
          <input
            type="text"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </label>

        <label>
          Instagram
          <input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </label>

        <label>
          Linkedin
          <input
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </label>

        {/* <div className="action input-group"> */}

        <button type="submit">Submit</button>
        <br></br>
      </form>
    </StyledAuth>
  );
}

export default EditSocialPage;
