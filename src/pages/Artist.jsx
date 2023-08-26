import React from 'react'
import Contact from '../components/Contact'
import HeaderNd from '../components/artist/HeaderNd'
import ArtistGallery from '../components/artist/ArtisGallery'

function Artist() {
    return (
        <div>
            <HeaderNd title={"Our Artist"} bgc={"bg-artist-cover"} />
            <ArtistGallery />
            <Contact />
        </div>
    )
}

export default Artist