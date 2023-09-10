import React from 'react'
import Contact from '../components/Contact'
import HeaderNd from '../components/artist/HeaderNd'
import PaintingList from '../components/artist/PaintingList'
import Description from '../components/artist/Description'
import OtherBoardList from '../components/artist/OtherBoardList'


function Discover() {
    return (
        <div>
            <HeaderNd title={"Discvoer more than art an artiste"} bgc={"bg-discover-cover"} />
            <PaintingList />
            <Description />
            {/* <OtherBoardList /> */}
            <Contact />
        </div>
    )
}

export default Discover