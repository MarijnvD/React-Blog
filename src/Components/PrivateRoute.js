import React from 'react';
import {Route, Redirect} from "react-router-dom";

function PrivateRoute({ auth, children, ...rest }) {

    return (
        <Route {...rest} >
            {auth === true ? children : <Redirect to="/login" />}
        </Route>
    );
}

export default PrivateRoute;