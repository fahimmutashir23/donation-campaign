
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className='flex justify-center mt-16'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if(user){
       return children
    }

    return <Navigate to="/login"></Navigate>;
};

PrivetRoute.propTypes = {
    children: PropTypes.node
};

export default PrivetRoute;