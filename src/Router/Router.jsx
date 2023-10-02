import { createBrowserRouter } from "react-router-dom";
import Layout from "../Lalyout/Layout";
import Home from "../Components/Pages/Home/Home";
import Donation from "../Components/Pages/Donation/Donation";
import Statistics from "../Components/Pages/Statistics/Statistics";
import Error from "../Components/Error/Error";
import Details from "../Components/Details/Details";
import Login from "../Components/Pages/Login/Login";
import Registration from "../Components/Pages/Registration/Registration";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch(`/data.json`)
            },
            {
                path: "/donation",
                element: <PrivetRoute><Donation></Donation></PrivetRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/statistics",
                element: <PrivetRoute><Statistics></Statistics></PrivetRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: () => fetch(`/data.json`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            }
        ]
    }
])

export default Router;