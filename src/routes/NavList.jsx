import Artist from "../pages/Artist";
import Contact from "../pages/Contact";
import Discover from "../pages/Discover";
import Home from "../pages/Home";

export default [
    {
        title: 'Home',
        url: '/home',
        component : <Home />
    },
    {
        title: 'Gallery',
        url: '/gallery',
        component : <Discover />
    },
    {
        title: 'Artiste',
        url: '/artiste',
        component : <Artist />
    },
    {
        title: 'Contact',
        url: '/contact',
        component : <Contact />
    },
];