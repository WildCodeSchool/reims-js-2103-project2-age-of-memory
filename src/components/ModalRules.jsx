import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ModalRules({ children }) {
  const [isOpen, setIsOpened] = useState(false);
  if (isOpen === false) {
    return <button type="button" id="rules" onClick={() => { setIsOpened(true); }}>Règles</button>;
  }
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        {children}
        <button type="button" onClick={() => { setIsOpened(false); }} className="card-button">Close</button>
      </div>
    </div>
  );
}

ModalRules.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ModalRules;
