import React from 'react'
import Contact from '../components/Contact'
import HeaderNd from '../components/artist/HeaderNd'
// import ArtistGallery from '../components/artist/ArtisGallery'
import ArtistGallery2 from '../components/artist/ArtistGallery2'

function Artist() {
    return (
        <div>
            <HeaderNd title={"Our Artist"} bgc={"bg-artist-cover"} />
            <ArtistGallery2 />
            <Contact />
        </div>
    )
}

export default Artist