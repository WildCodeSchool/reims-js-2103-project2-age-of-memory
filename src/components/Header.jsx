import React from 'react';
import Regle from './Regle';
import logo from './assets/logo.png';

function Header() {
  return (
    <>
      <img className="logo" src={logo} alt="Age of Memory" />
      <Regle />
    </>
  );
}

export default Header;