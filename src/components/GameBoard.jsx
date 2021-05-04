import React from 'react';
import PropTypes from 'prop-types';
import './Css/GameBoard.css';
import Easymode from './Easymode';

function GameBoard({ sideSelect, urlSearch, pairCount }) {
  const [currentPairCount, setCurrentPairCount] = React.useState(0);
  return (
    <>
      <div className="ModalWin">
        { currentPairCount === pairCount && (
        <>
          <p>Bien Joué bg t&apos;es un adepte de magie noire !!</p>
          <button type="button">Accueil</button>
          <button type="button">Niveau Suivant</button>
        </>
        )}
      </div>

      <div className="Gameboard">
        <Easymode
          sideSelect={sideSelect}
          urlSearch={urlSearch}
          pairCount={pairCount}
          setCurrentPairCount={setCurrentPairCount}
          currentPairCount={currentPairCount}
        />
      </div>
    </>
  );
}
GameBoard.propTypes = {
  sideSelect: PropTypes.number.isRequired,
  urlSearch: PropTypes.string.isRequired,
  pairCount: PropTypes.number.isRequired,
};

export default GameBoard;
