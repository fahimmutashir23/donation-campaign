import { createBrowserRouter } from "react-router-dom";
import Layout from "../Lalyout/Layout";
import Home from "../Components/Pages/Home/Home";
import Donation from "../Components/Pages/Donation/Donation";
import Statistics from "../Components/Pages/Statistics/Statistics";
import Error from "../Components/Error/Error";
import Details from "../Components/Details/Details";

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
                element: <Donation></Donation>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: () => fetch(`/data.json`)
            }
        ]
    }
])

export default Router;