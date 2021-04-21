import React from 'react';
import logo from './assets/logo.png';
import Baniere from './assets/Baniere.png';
import './Css/Header.css';

function Header() {
  return (
    <div className="header">
      <img className="Baniere" src={Baniere} alt="" />
      <img className="logo" src={logo} alt="Age of Memory" />
      <div className="rulesButton">
        <button id="rules" type="button" onClick={() => alert('Magie Noire')}>Règles</button>
      </div>
    </div>
  );
}

export default Header;
