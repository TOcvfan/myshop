import React from 'react';
import {PRODUCTS} from '../Products';
import Size from '../Size';

class StartPage extends React.Component{
    constructor(){
        super();
        this.state = {PRODUCTS}
    }
    

    render() {
        return (
            <div>
                <h3 id="ligthbluetxt">Start Page</h3>
                <div className="containerself">
                {PRODUCTS.map((sizes, id) => {
                    return <Size key={id} size={PRODUCTS[id].size} description={PRODUCTS[id].description} />
                })}
                </div>
            </div>
        );
    }
}

export default StartPage;