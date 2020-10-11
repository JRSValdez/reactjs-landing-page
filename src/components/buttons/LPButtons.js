import React from 'react'

function TextButton({text,onClick, className}) {

    const style = {
        fontSize:'16px',
        fontWeight:'bold',
        textAlign:'left',
        cursor:'pointer'
    };

    return (
        <p style={style} onClick={() => onClick} className={className}>
            {text}
        </p>
    )
}

export {TextButton}
