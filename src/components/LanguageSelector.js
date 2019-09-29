import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;
    
    render() {
        
        return(
            <div>English:
                <i className="pointer flag gb" onClick={() => this.context.onLanguageChange('english')} />
                Dansk:
                <i className="pointer flag dk" onClick={() => this.context.onLanguageChange('dansk')} />
            </div>
        );
    }
}

export default LanguageSelector;