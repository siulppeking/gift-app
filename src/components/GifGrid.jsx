import React from 'react';
import { GifItem } from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <React.Fragment>
            {
                isLoading && (<h3>Cargando...</h3>)
                // isLoading ? (<h3>Cargando...</h3>)
                //     : null 
            }

            <h3>{category}</h3>
            <div className='card-grid'>
                {
                    images.map((image) => {
                        return <GifItem key={image.id} title={image.title} url={image.url} />
                    })
                }
            </div>

        </React.Fragment>
    )
}