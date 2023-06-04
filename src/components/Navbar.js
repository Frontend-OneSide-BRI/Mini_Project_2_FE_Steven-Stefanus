import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = (props) => {

    return(
        <nav className="ui raised very padded segment">
            <a className="ui teal inverted segment no-underline">Gallery Photo</a>

            <div className="ui right floated header">
                <button className="ui button"><Link to="/">Home</Link></button>
                <button className="ui button"><NavLink to="/about">Gallery</NavLink></button>
             
            </div>

        </nav>
    )
}

export default Navbar;