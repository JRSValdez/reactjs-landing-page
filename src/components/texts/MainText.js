import React from 'react'

function MainText({text, className, color ='#000', bg=false}) {

    const splitedText = text.split('\n');

    const bgStyle = {
        backgroundColor:'#FFD600',
        transform: 'rotate(-0.64deg)',
        width:'fit-content',
        paddingRight:'5px',
        paddingLeft:'5px',
        postion:'absolute'
    };

    const bgTextStyle = {
        transform: 'rotate(0.64deg)',
        color:color + ' !important'
    };

    const textStyle = {
        color: color
    };

    return (
        <div className={className}>
            { splitedText.map((text,i) => (
                !bg ? <p key={i} style={textStyle}>{text}</p> : <div key={i} style={bgStyle}><p style={bgTextStyle}>{text}</p></div>
            )) }
        </div>
    )
}

export default MainText
