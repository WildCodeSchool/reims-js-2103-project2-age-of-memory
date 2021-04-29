import React from 'react';
import PropTypes from 'prop-types';
import './Css/Header.css';
import ModalRules from './ModalRules';
import BaniereDefault from './assets/Baniere.png';
import BaniereRomain from './assets/BaniereRomain.png';
import BaniereEgypte from './assets/BaniereEgypte.png';

function Header({ logo, sideSelect }) {
  const baniereSelectMap = {
    1: BaniereRomain,
    2: BaniereEgypte,
  };
  return (
    <div className="header">
      <img className="Baniere" src={baniereSelectMap[sideSelect] ?? BaniereDefault} alt="" />
      <img className="logo" src={logo} alt="Age of Memory" />
      <div className="rulesButton">
        <div className="modal">
          <ModalRules>
            <p className="rulestext">
              But du jeu :
              <br />
              Collecter des paires de cartes correspondantes.
              <br />
              <br />
              L&apos;Egypte et L&apos;Empire Romain sont en guerre.
              <br />
              <br />
              Choisissez votre camp !!!
              <br />
              <br />
              Le thème du jeu ainsi que les cartes s
              adapteront à votre choix.
              <br />
              <br />
              Plusieurs niveaux de difficulté possible,
              <br />
              <br />
              plus vous jouez en difficulté élevée,
              <br />
              plus vous gagnerez de points,
              <br />
              <br />
              ainsi vous mettez toutes les chances de votre
              côté pour faire gagner votre camp :
              <br />
              il y a 4 niveaux principaux de difficulté qui augmentent à
              chaque fois que vous finissez une partie.
              <br />
              <br />
              Exemple :
              pour le niveau facile, vous débuterez
              avec 3 paires de cartes, ensuite, 4, ensuite 5 etc...
            </p>
          </ModalRules>
        </div>
      </div>
    </div>
  );
}
Header.propTypes = {
  logo: PropTypes.isRequired,
  sideSelect: PropTypes.number.isRequired,
};

export default Header;
