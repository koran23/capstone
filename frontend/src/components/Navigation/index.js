import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import styled from "styled-components";


const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #000;
  z-index: 99;
  padding: 20px 10%;
  color: ${(props) => props.theme.bg};

  .list {
    text-decoration: none;
  }
  .home {
    cursor: pointer;
  }
  .nav_links {
    list-style: none;
  }
  .nav_links li {
    display: inline-block;
    padding: 0px 20px;
    transition: all 0.3s ease 0s;
  }
  .nav_links li:hover {
    color: ${(props) => props.theme.green};
  }
  
  input {
    width: 500px;
  }

  .toggle-navhandler {
    display: none;
  }

  .logo span {
    position: relative;
    top: 1px;
  }

  ul {
    list-style: none;
    display: flex;
    /* flex-direction: column; */
    position: relative;
    top: 2px;
  }

  li svg {
    margin-right: 1.7rem;
    position: relative;
    top: 3px;
  }

  img {
    position: relative;
    top: 3px;
  }

  @media screen and (max-width: 1093px) {
    .toggle-navhandler {
      display: block;
    }
  }

  @media screen and (max-width: 1000px) {
    input {
      width: 400px;
    }
  }

  @media screen and (max-width: 850px) {
    input {
      width: 280px;
    }
  }

  @media screen and (max-width: 500px) {
    .toggle-navhandler {
      display: none;
    }

    li svg {
      width: 30px;
      height: 30px;
      margin-right: 1.7rem;
      position: relative;
      top: 0px;
    }
  }
`;

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <div className='nav_links'>
        <ul>
          <li>
            <NavLink to={`/gallery`}>
              My Gallery
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about-me">
              My Profile
            </NavLink>
            </li>
          <li>
            <NavLink exact to="/explore">
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/upload">
              Upload
            </NavLink>
          </li>
            {/* <li>
            <NavLink exact to="/chat">
              Chat
            </NavLink>
            </li> */}
        </ul>
        </div>
        <div>
          <ProfileButton user={sessionUser} />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
      <div className='nav_links'>
        <ul>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
        </div>
      </>
    );
  }

  return (
    <Bar>
      <ul>
        <li className="list">
          {/* <NavLink className="home" exact to="/">
            Home
          </NavLink> */}
        </li>
      </ul>
      {isLoaded && sessionLinks}
    </Bar>
  );
}

export default Navigation;
