import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link, useHistory } from "react-router-dom";
import {editSocial} from '../../store/profile'
import styled from "styled-components";
import Button from '../../styles/Button';

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
  const [linkden, setLinkden] = useState("");
  const [errors, setErrors] = useState([]);

  const loggedInUser = useSelector((store) => store.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
        userId: loggedInUser.id,
        twitter: twitter,
        facebook: facebook,
        instagram: instagram,
        linkden: linkden
    }

    dispatch(editSocial(payload))

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
          Twitter
          <input
            type="text"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            required
          />
        </label>

        <label>
          Facebook
          <input
            type="text"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            required
          />
        </label>

        <label>
          Instagram
          <input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            required
          />
        </label>

        <label>
         Linkden
          <input
            type="text"
            value={linkden}
            onChange={(e) => setLinkden(e.target.value)}
            required
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