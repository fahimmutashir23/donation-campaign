import { Link } from "react-router-dom";


const Error = () => {
    
    return (
        <div className="min-h-screen flex justify-center items-center  text-center">
            <div className="">
            <h1 className="text-5xl">Sorry!!! <br /> Donate not found</h1>
            <Link className="text-blue-600 font-bold mt-9" to="/">Go to Home</Link>
            </div>
        
        </div>
    );
};

export default Error;