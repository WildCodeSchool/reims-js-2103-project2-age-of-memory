import React from 'react';
import Regle from './components/Regle';
import logo from './components/assets/logo.png';

function Header() {
  return (
    <>
      <img className="logo" src={logo} alt="Age of Memory" />
      <Regle />
    </>
  );
}

export default Header;
