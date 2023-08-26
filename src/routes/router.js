import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Artist from '../pages/Artist';
import Gallery from '../layouts/Gallery';
import Discover from '../pages/Discover';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
        ]
    },

    {
        path: '/artist',
        element: <Gallery />,
        children: [
            { path: '/artist', element: <Artist /> },
        ]
    },

    {
        path: '/discover',
        element: <Gallery />,
        children: [
            { path: '/discover', element: <Discover /> },
        ]
    },

]);