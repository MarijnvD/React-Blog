import React from 'react';
import {NavLink, useHistory} from "react-router-dom";

function TopMenu({auth, getter, setter}) {
    const history = useHistory();

    const logOutClick = (e) => {
        setter(!getter);
        history.push("/");

    }

    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
                </li>
                <li>

                    {auth === true ? <NavLink to="/blogposts" activeClassName="active-link">Blogposts</NavLink> : "" }
                </li>
                <li>
                    {auth === true ? <button type="button" onClick={logOutClick}>Uitloggen
                    </button> : <NavLink to="/login" activeClassName="active-link">Login</NavLink> }

                </li>

            </ul>



        </nav>
    );
}

export default TopMenu;