import React from 'react';
import Header from './Header';

function Home() {
  return (
    <>
      <Header />
      <div className="menu-play">
        <label htmlFor="Pseudo">
          Pseudo :
          <input type="text" placeholder="Romain" value="" />
          <button type="button">Valider</button>
        </label>
        <button type="button">Play</button>
      </div>
    </>
  );
}

export default Home;
