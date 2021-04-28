import React from 'react';
import PropTypes from 'prop-types';
import Level from './Level';

function Easymode({ sideSelect }) {
  return (
    <>
      <Level pairCount={3} sideSelect={sideSelect} />
    </>
  );
}
Easymode.propTypes = {
  sideSelect: PropTypes.number.isRequired,
};
export default Easymode;
