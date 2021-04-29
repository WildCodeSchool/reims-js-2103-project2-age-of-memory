import React from 'react';
import PropTypes from 'prop-types';
import Level from './Level';

function Easymode({ sideSelect, urlSearch, pairCount }) {
  return (
    <>
      <Level pairCount={pairCount} sideSelect={sideSelect} urlSearch={urlSearch} />
    </>
  );
}
Easymode.propTypes = {
  sideSelect: PropTypes.number.isRequired,
  urlSearch: PropTypes.string.isRequired,
  pairCount: PropTypes.number.isRequired,
};
export default Easymode;
