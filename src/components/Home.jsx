import React from 'react';
import PropTypes from 'prop-types';
import GameBoard from './GameBoard';
import './Css/Home.css';

const addrtype = ['Facile', 'Moyen', 'Difficile', 'Hardcore'];

function Home({ sideSelect, setSideSelect }) {
  const sideSelectMap = {
    1: 'Roman%20Empire',
    2: 'Egypt',
  };
  const handleAddrTypeChange = (e) => console.log((addrtype[e.target.value]));
  const [gameBoard, setGameBoard] = React.useState(false);

  function handleChangeBoolean() {
    if (sideSelect != null) {
      setGameBoard(!gameBoard);
    } else {
      alert('Choisis d\'abord ton camp pour pouvoir jouer !');
    }
  }
  if (gameBoard === true) {
    return (<GameBoard sideSelect={sideSelect} urlSearch={sideSelectMap[sideSelect]} />);
  }

  return (
    <>
      <div className="side-select">
        <div className="side-camp">
          <div className="title-camp">
            <h2>Choisis ton camp</h2>
          </div>
          <div className="side-select-btn">
            <button type="button" className="btn-roman" onClick={() => setSideSelect(1)}>Romain</button>
            <button type="button" className="btn-egypt" onClick={() => setSideSelect(2)}>Egyptien</button>

          </div>
        </div>
      </div>
      <div className="menu-play">

        <label htmlFor="Pseudo">
          <input className="input-pseudo" type="text" placeholder="Pseudo : Romain" value="" />
          <button className="btn-submit" type="button">Valider</button>
        </label>
      </div>

      <div className="btn-container">
        <div className="select-container">
          <select
            onChange={(e) => handleAddrTypeChange(e)}
            className="browser-default custom-select"
          >
            {
        addrtype.map((address, key) => <option value={key}>{address}</option>)
      }
            {' '}

          </select>
        </div>
        <div className="play-container">
          <button className="btn-play" type="button" onClick={handleChangeBoolean}>Play</button>
        </div>
      </div>
    </>
  );
}
Home.propTypes = {
  setSideSelect: PropTypes.func.isRequired,
  sideSelect: PropTypes.number.isRequired,
};
export default Home;
