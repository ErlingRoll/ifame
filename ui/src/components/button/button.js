import React from 'react';

const Button = ({ type, ...props }) => {
    const types = {
        danger: 'bg-danger text-white',
    };
    const baseStyle = 'rounded px-2 py-1 hover:opacity-75';
    const typeStyle = types[type];

    return (
        <button
            {...props}
            className={[baseStyle, typeStyle, props.className].join(' ')}>
            {props.children}
        </button>
    );
};

export default Button;
