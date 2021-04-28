import React from 'react';
import PropTypes from 'prop-types';
import './Css/Header.css';
import ModalRules from './ModalRules';

function Header({ Baniere, logo }) {
  return (
    <div className="header">
      <img className="Baniere" src={Baniere} alt="" />
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
  Baniere: PropTypes.isRequired,
  logo: PropTypes.isRequired,
};

export default Header;
