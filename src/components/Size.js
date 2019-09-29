import React from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from '../contexts/LanguageContext';

class Size extends React.Component {
    static contextType = LanguageContext;
    constructor(props){
        super(props);
        this.state = {
            size: this.props.size,
            description: this.props.description
        }
    }

    render(){
        const {size, description} = this.props;
        const choose =  this.context === 'english' ? 'Choose this if you want a' : 'Vælg denne hvis du vil ha en';
        const pack =  this.context === 'english' ? 'package' : 'pakke';
        return(
            <div>
                <div className="margin">
                    <div >
                    <Link to={`/contact/${size}`}  
                        id="rcorners2" 
                        className="containerself" 
                    >
                        {choose} 
                        <br/> {size}
                        <br/>{pack}
                    </Link>
                    </div>
                </div>
                <div className="textbox">{description}</div>
            </div>
        );
    }
}


export default Size;