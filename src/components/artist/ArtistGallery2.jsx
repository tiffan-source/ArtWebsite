import React from 'react';
import dataArtiste from '../../data/dataArtiste';
import CardArtist from './CardArtist';

function ArtistGallery2() {
    return (
        <div className='py-12 px-4 my-0 mx-auto md:px-8'>
            <div className="grid gap-6 justify-center md:grid-cols-gallery">
                {dataArtiste.map((item, index) => {
                    const {nom, prenom, description, photo} = item;
                    return (
                        <CardArtist nom={nom} description={description} photo={photo} prenom={prenom}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ArtistGallery2