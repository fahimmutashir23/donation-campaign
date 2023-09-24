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
                loader: ()=> fetch(`/public/data.json`),
                element: <Home></Home>
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: () => fetch(`/public/data.json`)
            }
        ]
    }
])

export default Router;