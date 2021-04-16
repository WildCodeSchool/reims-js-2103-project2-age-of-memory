import React from 'react';
import Rules from './Rules';
import logo from './assets/logo.png';

function Header() {
  return (
    <>
      <img className="logo" src={logo} alt="Age of Memory" />
      <Rules />
    </>
  );
}

export default Header;
