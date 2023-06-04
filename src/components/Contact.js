import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Contact = (props) => {

    return(
        <div>
            <Modal />
        <div 
         className="ui raised very padded text container segment"
         style={{marginTop: '80px'}}
        
        >
            <Link to="/elizabeth" className="ui header">Elizabeth</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo a dignissim volutpat.</p>

        </div>
        <div 
         className="ui raised very padded text container segment"
         style={{marginTop: '80px'}}
        
        >
            <Link to="/tammy" className="ui header">Tammy</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo a dignissim volutpat.</p>

        </div>
        </div>
    )
}

export default Contact;