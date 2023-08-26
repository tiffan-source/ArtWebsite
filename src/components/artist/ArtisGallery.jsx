import React from 'react';
import artist1 from '../../assets/images/artist1.svg';
import artist2 from '../../assets/images/artist2.svg';
import artist3 from '../../assets/images/artist3.svg';
import artist4 from '../../assets/images/artist4.svg';
import artist5 from '../../assets/images/artist5.svg';
import artist6 from '../../assets/images/artist6.svg';

function ArtistGallery() {
    return (
        <div className='py-12 px-8 my-0 mx-auto'>
            <div className="grid grid-cols-gallery gap-6 justify-center">
                <img src={artist1} alt="" className='object-cover w-full h-full' />
                <img src={artist2} alt="" className='object-cover w-full h-full' />
                <img src={artist3} alt="" className='object-cover w-full h-full' />
                <img src={artist4} alt="" className='object-cover w-full h-full' />
                <img src={artist5} alt="" className='object-cover w-full h-full' />
                <img src={artist6} alt="" className='object-cover w-full h-full' />
            </div>
        </div>


    )
}

export default ArtistGallery