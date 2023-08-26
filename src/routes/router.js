import {createBrowserRouter} from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Artist from '../pages/Artist';
import Gallery from '../layouts/Gallery';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {path: '/', element: <Home/>},
        ]
    },

    {
        path: '/artist',
        element: <Gallery/>,
        children: [
            {path: '/artist', element: <Artist/>},
        ]
    },
    
]);