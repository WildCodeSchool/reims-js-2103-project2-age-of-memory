import React from 'react';
import './Css/Home.css';

function SideSelect() {
  return (
    <div className="side-camp">
      <div className="title-camp">
        <h2>Choisis ton camp</h2>
      </div>
      <div className="side-select-btn">
        <button type="button" className="btn-egypt">Egyptien</button>
        <button type="button" className="btn-roman">Romain</button>

      </div>
    </div>
  );
}

export default SideSelect;
