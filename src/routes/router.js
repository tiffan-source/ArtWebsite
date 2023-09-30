import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import NavList from './NavList';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            ...NavList.map((item) => {
                return { path: item.url, element: item.component }
            })
        ]
    },

]);