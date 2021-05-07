import React from 'react';
import './Css/EndPage.css';

function EndPage() {
  return (
    <>
      <div className="end-text">
        <h1>
          FÉLICITATIONS !
          <br />
          Vous avez terminé tous les niveaux.
          <br />
          Merci d&apos;avoir joué !
        </h1>
      </div>
      <div className="names">
        <h3>Jeu conçu et réalisé par:</h3>
        <br />
        <a href="https://www.linkedin.com/in/marjorie-thomassin-b8659a193/" target="_blank" rel="noreferrer">Marjorie</a>
        {' '}
        <a href="https://www.linkedin.com/in/pascal-joly-a62a23196/" target="_blank" rel="noreferrer">Pascal</a>
        {' '}
        <a href="https://www.linkedin.com/in/denis-machet-a29330209/" target="_blank" rel="noreferrer">Denis</a>
        {' '}
        <a href="https://www.linkedin.com/in/thomas-dufour-28763b144/" target="_blank" rel="noreferrer">Thomas</a>
        {' '}
        <a href="https://www.linkedin.com/in/brian-bertili-622b86188/" target="_blank" rel="noreferrer">Brian</a>

      </div>
    </>
  );
}

export default EndPage;
