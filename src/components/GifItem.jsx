import React from 'react';

export const GifItem = ({ id, title, url }) => {
    return (
        <React.Fragment>
            <div className='card'>
                <img src={url} alt={title} />
                <p>{title}</p>
            </div> 
        </React.Fragment>
    )
}