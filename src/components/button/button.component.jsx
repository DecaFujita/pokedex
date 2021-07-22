import React from 'react';

import './button.styles.css';

const Button = ({ action }) => (
    <button className='button-deal' onClick={action}>
        text
    </button>
);

export default Button;

