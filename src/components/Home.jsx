import React from 'react';
import GameBoard from './GameBoard';
import './Css/Home.css';

function Home() {
  const [addrtype, setAddrtype] = React.useState(['Facile', 'Moyen', 'Difficile', 'Hardcore']);
  const Add = addrtype.map(() => setAddrtype);
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
      <div className="menu-play">
        <label htmlFor="Pseudo">
          Pseudo :
          <input type="text" placeholder="Romain" value="" />
          <button type="button">Valider</button>
        </label>
        <button type="button" onClick={handleChangeBoolean}>Play</button>
        <select
          onChange={(e) => handleAddrTypeChange(e)}
          className="browser-default custom-select"
        >
          {
        Add.map((address, key) => <option value={key}>{address}</option>)
      }
        </select>

      </div>
    </>
  );
}
export default Home;
