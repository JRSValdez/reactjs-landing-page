import React from 'react'

import './buttons.css';

const SubmitButton = ({text}) => {
    return (
        <button type='button' className='submit-button'>
            {text}
        </button>
    )
}


const TextButton = ({text,onClick}) => {

    return (
        <p className='text-button' onClick={() => onClick} >
            {text}
        </p>
    )
}

const SwitchButton = ({text, active,onClick}) => {

    const style = {
        backgroundColor:active?'#000':'#FFF',
        color:active?'#FFF':'#000'
    }

    return (
        <div style={style} className='swicth-button mh-0' onClick={() => onClick()}>
            <span>icon</span>
            <p>{text}</p>
        </div>
    )
}



export {TextButton,SwitchButton,SubmitButton}
