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
                <h3 style={{color: 'White'}}>Start Page</h3>
                <p>Do you need a web-page, maybe a web-shop, a blog, a page where you can show your youtube videos or just a page with a login or perhaps page showing who you are</p>
                <p>then leave a message about your thoughts/ideas and I will get back to you within 24 hours</p>
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