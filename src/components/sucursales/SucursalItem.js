import React from 'react'

function SucursalItem({name,address,opening_time,closing_time}) {

    const opening_hour = parseInt(opening_time.split(':')[0]);
    opening_time = `${opening_time} ${opening_hour < 12 ? 'AM' : opening_hour === 12 ? 'MD' :'PM'}`;

    const closing_hour = parseInt(closing_time.split(':')[0]);
    closing_time = `${closing_time} ${closing_hour < 12 ? 'AM' : closing_hour === 12 ? 'MD' :'PM'}`;

    return (
        <div className='sucursal-description'>
            <p className='title'>{name}</p>
            <p>Abierto de {opening_time} - {closing_time} </p>
            <p>{address}</p>
        </div>
    )
}

export default SucursalItem
