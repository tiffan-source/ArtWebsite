import React from 'react'
import Contact from '../components/Contact'
import HeaderNd from '../components/artist/HeaderNd'
import ArtistGallery from '../components/artist/ArtisGallery'

function Artist() {
    const title = "Our Artist";
    return (
        <div>
            <HeaderNd title={title} />
            <ArtistGallery />
            <Contact />
        </div>
    )
}

export default Artist