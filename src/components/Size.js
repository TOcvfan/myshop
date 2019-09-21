import React from 'react';
import { Link } from 'react-router-dom';

class Size extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            size: this.props.size,
            description: this.props.description
        }
    }

    render(){
        const {size, description} = this.props;
        return(
            <div>
                <div className="margin">
                    <div >
                    <Link to={`/contact/${size}`}  
                        id="rcorners2" 
                        className="containerself" 
                    >
                        Choose this if you want a 
                        <br/> {size}
                        <br/>package
                    </Link>
                    </div>
                </div>
                <div className="textbox">{description}</div>
            </div>
        );
    }
}


export default Size;