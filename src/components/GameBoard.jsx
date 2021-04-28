import React from 'react';
import PropTypes from 'prop-types';
import './Css/GameBoard.css';
import Easymode from './Easymode';

function GameBoard({ sideSelect }) {
  return (
    <div className="Gameboard">
      <Easymode sideSelect={sideSelect} />
    </div>
  );
}
GameBoard.propTypes = {
  sideSelect: PropTypes.number.isRequired,
};

export default GameBoard;
