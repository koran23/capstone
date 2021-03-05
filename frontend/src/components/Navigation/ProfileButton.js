import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { Redirect } from "react-router-dom";
import Button from "../../styles/Button";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ModalDiv = styled.div`
display: flex;
position: fixed;
`

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    history.push("/");
    dispatch(sessionActions.logout());
  };

  return (
    <ModalDiv>
      <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul>
          <li>{user.username}</li>
          <br></br>
          <li>
            <Button onClick={logout}>Log Out</Button>
          </li>
        </ul>
      )}
    </ModalDiv>
  );
}

export default ProfileButton;
