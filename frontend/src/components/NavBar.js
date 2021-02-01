import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import styled from "styled-components";


const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${(props) => props.theme.bg};
  z-index: 99;
  padding: 10px 10%;
  border-bottom: 1px solid gray;

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
    /* transition: all 0.3s ease 0s; */
  }
  /* .nav_links li:hover {
    color: ${(props) => props.theme.pink};
  } */
  
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

const NavBar = ({ setAuthenticated }) => {
  return (
    <Bar>
      <div className='nav_links'>
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Review" exact={true} activeClassName="active">
            Review
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" exact={true} activeClassName="active">
            Gallery
          </NavLink>
        </li>
         <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li> 
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li> */}
         <li>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </li> 
      </ul>
    </nav>
    </div>
    </Bar>
  );
}

export default NavBar;