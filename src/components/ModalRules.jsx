import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Css/Header.css';

function ModalRules({ children }) {
  const [isOpened, setIsOpened] = useState(false);
  function changeState() {
    setIsOpened(!isOpened);
  }

  if (isOpened === false) {
    return <button type="button" id="rules" onClick={() => { setIsOpened(true); }}>Règles</button>;
  }
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        {children}
        <div id="card-button" role="button" aria-label="Close" tabIndex="-1" onKeyDown={changeState} onClick={changeState} className={changeState ? 'isOpened' : 'notOpened'} />
      </div>
    </div>
  );
}

ModalRules.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ModalRules;
