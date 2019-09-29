import React from 'react';
import { connect } from 'react-redux';
import robo from '../../pictures/robo.gif';
import location from '../../pictures/location.gif';
import signin from '../../pictures/signinface.PNG';
import LanguageContext from '../../contexts/LanguageContext';
import {robodescriptionEng, robodescriptionDK, locationDescriptionEng, locationDescriptionDK, signinpageEng, signinpageDK} from './ExamplesTxt';

class Examples extends React.Component{
    static contextType = LanguageContext;

    render() {
        const roboDescription = this.context === 'english' ? robodescriptionEng : robodescriptionDK;
        const signinpage = this.context === 'english' ? signinpageEng : signinpageDK;
        const locDescription = this.context === 'english' ? locationDescriptionEng : locationDescriptionDK;
        return (
            <div>
                <h1 style={{color: 'White', textAlign: 'center'}}>Examples</h1>
                <img alt='robots' src={robo} />
                <p style={{textAlign: 'center'}}>{roboDescription}</p>
                <img alt='location' src={location} />
                <p style={{textAlign: 'center'}}>{locDescription}</p>
                <img alt='sign in' src={signin} />
                <p style={{textAlign: 'center'}}>{signinpage}</p>
                <br/>
            </div>
        );
    }
}

export default connect(null)(Examples);