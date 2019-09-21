import React from 'react';
import { Link } from 'react-router-dom';
//import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu" id="ligthbluebkg">
            <Link to="/" className="item" id="headerLink">
                It Smurf
            </Link>
            <div className="right pointing menu">
                <Link to="/contact/none" className="item" id="headerLink">
                    Contact
                </Link>
                <Link to="/examples" className="item" id="headerLink">
                    Examples
                </Link>
                {/*<GoogleAuth />*/}
            </div>
        </div>
    );
};

export default Header;