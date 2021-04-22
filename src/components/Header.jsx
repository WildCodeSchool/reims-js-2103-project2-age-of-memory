import React from 'react';
import logo from './assets/logo.png';
import Baniere from './assets/Baniere.png';
import './Css/Header.css';
import ModalRules from './ModalRules';

function Header() {
  return (
    <div className="header">
      <img className="Baniere" src={Baniere} alt="" />
      <img className="logo" src={logo} alt="Age of Memory" />
      <div className="rulesButton">
        <ModalRules>
          <div className="modal">
            <p className="rulestext">
              Egypte et Empire Romain sont en guerre,
              choisissez votre camp !\n Le thème du jeu ainsi que les cartes s
              adapteront à votre choix, il y a plusieurs niveaux de difficulté possible,\n plus vous
              jouez en difficulté élevée, plus vous gagnerez de points,
              vous mettez ainsi toutes les chances de votre
              côté pour faire gagner votre camp !\n * : il y a
              4 niveaux principaux de difficulté qui augmentent à
              chaque fois que vous finissez une partie.\n Exemple :
              pour le niveau facile, vous débuterez
              avec 3 paires de cartes, ensuite, 4, ensuite 5 etc...
            </p>
          </div>
        </ModalRules>
      </div>
    </div>
  );
}

export default Header;
