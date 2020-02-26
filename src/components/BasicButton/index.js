import React from "react";
import PropTypes from 'prop-types';

import './style.scss';

const BasicButton = ({text}) => (
<div className='basicButton'>
  <button type='button'>
    {text}
  </button>
</div>
);

BasicButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BasicButton;