import React from 'react';
import "../styles/Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    <div className="header">
    <IconButton>
      <PersonIcon className="header-icon" fontSize="large" />
    </IconButton>
    <img
      className="header-logo"
      src="https://static.vecteezy.com/system/resources/previews/023/986/928/original/tinder-app-logo-tinder-app-logo-transparent-tinder-app-icon-transparent-free-free-png.png"
      alt="tinder logo"
    />
    <IconButton>
      <ForumIcon className="header-icon" fontSize="large" />
    </IconButton>
  </div>
  )
}

export default Header