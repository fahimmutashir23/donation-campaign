import { createBrowserRouter } from "react-router-dom";
import Layout from "../Lalyout/Layout";
import Home from "../Components/Pages/Home/Home";
import Donation from "../Components/Pages/Donation/Donation";
import Statistics from "../Components/Pages/Statistics/Statistics";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default router;