import React from 'react';
import { Link } from 'react-router-dom';
//import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu" id="ligthbluebkg">
            <Link to="/" className="item">
                It Smurf
            </Link>
            <div className="right pointing menu">
                <Link to="/contact" className="item">
                    Contact
                </Link>
                <Link to="/examples" className="item">
                    Examples
                </Link>
                {/*<GoogleAuth />*/}
            </div>
        </div>
    );
};

export default Header;