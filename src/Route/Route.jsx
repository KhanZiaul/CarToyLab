import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Shared/Error/Error";
import Terms from "../Pages/Terms/Terms";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import Register from "../Pages/RegisterLogin/Register/Register";
import Login from "../Pages/RegisterLogin/Login/Login";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";
import AllToys from "../Pages/AllToys/AllToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import ToysDetails from "../Pages/Home/ToysDetails/ToysDetails";
import PrivateProvider from "../Provider/PrivateProvider,jsx/PrivateProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/toy/:id',
                element: <PrivateProvider><ToysDetails></ToysDetails></PrivateProvider>,
                loader: ({ params }) => fetch(`https://react-toys-server.vercel.app/toy/${params.id}`)
            },
            {
                path: '/addToy',
                element: <PrivateProvider><AddAToy></AddAToy></PrivateProvider>
            },
            {
                path: '/myToys',
                element: <PrivateProvider><MyToys></MyToys></PrivateProvider>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>
            },
            {
                path: '/updateToy/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`https://react-toys-server.vercel.app/toy/${params.id}`)
            },
        ]
    },
]);

export default router;