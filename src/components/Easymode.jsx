import React from 'react';
import PropTypes from 'prop-types';
import Level from './Level';

function Easymode({ sideSelect, urlSearch }) {
  return (
    <>
      <Level pairCount={3} sideSelect={sideSelect} urlSearch={urlSearch} />
    </>
  );
}
Easymode.propTypes = {
  sideSelect: PropTypes.number.isRequired,
  urlSearch: PropTypes.string.isRequired,
};
export default Easymode;
