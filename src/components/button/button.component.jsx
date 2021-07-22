import React from 'react';

import './button.styles.css';

const Button = ({ action, text }) => (
    <button className='button-deal' onClick={action}>
        {text}
    </button>
);

export default Button;

