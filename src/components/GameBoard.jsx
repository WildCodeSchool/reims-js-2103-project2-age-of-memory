import React from 'react';
import PropTypes from 'prop-types';
import './Css/GameBoard.css';
import Easymode from './Easymode';

function GameBoard({ sideSelect, urlSearch, pairCount }) {
  return (
    <div className="Gameboard">
      <Easymode sideSelect={sideSelect} urlSearch={urlSearch} pairCount={pairCount} />
    </div>
  );
}
GameBoard.propTypes = {
  sideSelect: PropTypes.number.isRequired,
  urlSearch: PropTypes.string.isRequired,
  pairCount: PropTypes.number.isRequired,
};

export default GameBoard;
