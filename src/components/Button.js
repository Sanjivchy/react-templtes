import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primar', 'btn--outline']
const SIZES = ['btn--medium','btn--large']

export const Button =({childern, type, onClick, buttonStyle , ButtonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ?buttonStyle 
    :STYLES[0]; 
    const checkButtonSize = SIZES.includes(ButtonSize) ? ButtonSize: SIZES[0]

    return(
        <Link to='/Sign-up' className="btn-mobile">
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onclick}
            type={type}
            >
                {childern}
            </button>
        </Link>
    )
};

