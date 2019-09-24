import React from 'react';
import {PRODUCTS} from '../Products';
import Size from '../Size';
import {descriptionEng1, descriptionEng2} from './StartPageTxt';

class StartPage extends React.Component{
    constructor(){
        super();
        this.state = {PRODUCTS}
    }
    

    render() {
        return (
            <div>
                <h3 style={{color: 'White'}}>Start Page</h3>
                <p>{descriptionEng1}</p>
                <p>{descriptionEng2}</p>
                <div className="newcontainer">
                    {PRODUCTS.map((sizes, id) => {
                        return <Size key={id} size={PRODUCTS[id].size} description={PRODUCTS[id].description} />
                    })}
                </div>
                <table id="domainpack">
                    <thead>
                        <tr>
                            <th>Domain packeges</th>
                            <th>none</th>
                            <th style={{backgroundColor: '#b08d57'}}>Bronze</th>
                            <th style={{backgroundColor: '#aaa9ad'}}>Silver</th>
                            <th style={{backgroundColor: '#d4af37'}}>Gold</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>own your domain</td>
                            <td>yes</td>
                            <td>yes</td>
                            <td>yes</td>
                            <td>yes</td>
                        </tr>
                        <tr>
                            <td>24 hour service</td>
                            <td>no</td>
                            <td>no</td>
                            <td>yes</td>
                            <td>yes</td>
                        </tr>
                        <tr>
                            <td>webhotel and mail</td>
                            <td>your choice</td>
                            <td>10 GB</td>
                            <td>20 GB</td>
                            <td>50 GB</td>
                        </tr>
                        <tr>
                            <td>saftycertificate</td>
                            <td>maybe</td>
                            <td>yes</td>
                            <td>yes</td>
                            <td>yes</td>
                        </tr>    
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StartPage;