import {createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Carousel from './components/Carousel'
import Dashboard from './pages/Dashboard'

const router = createBrowserRouter([
    {
        path:'/carousel',
        element: <Carousel/>
    },
    {
        path:'',
        element: <Home/>
    },
    {
        path:'/about',
        element: <About/>
    },
    {
        path:'/contact',
        element: <Contact/>
    },
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'/sign-up',
        element: <SignUp/>
    },
    {
        path:'/Dashboard',
        element: <Dashboard/>
    },
    {
        path:'*',
        element: <NotFound/>
    }
])


export default router;
