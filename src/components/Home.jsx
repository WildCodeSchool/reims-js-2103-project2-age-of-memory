import React from 'react';
import GameBoard from './GameBoard';
import './Css/Home.css';
import SideSelect from './SideSelect';

const addrtype = ['Facile', 'Moyen', 'Difficile', 'Hardcore'];

function Home() {
  const handleAddrTypeChange = (e) => console.log((addrtype[e.target.value]));
  const [gameBoard, setGameBoard] = React.useState(false);

  function handleChangeBoolean() {
    setGameBoard(!gameBoard);
  }
  if (gameBoard === true) {
    return (<GameBoard />);
  }

  return (
    <>
      <div className="home">
        <div className="side-select">
          <SideSelect />
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
      </div>
    </>
  );
}
export default Home;
