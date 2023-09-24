import { Outlet } from "react-router-dom";
import Header from "../Components/Header/header";

const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto my-4">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;