import React from 'react';
import {PRODUCTS, PRODUCTS_DK} from '../Products';
import Size from '../Size';
import {descriptionEng1, descriptionEng2, descriptionDK1, descriptionDK2} from './StartPageTxt';
import Table from './table';
import LanguageContext from '../../contexts/LanguageContext';

class StartPage extends React.Component{
    static contextType = LanguageContext;
    constructor(){
        super();
        this.state = {PRODUCTS}
    }

    render() {
        const description1 = this.context === 'english' ? descriptionEng1 : descriptionDK1;
        const description2 = this.context === 'english' ? descriptionEng2 : descriptionDK2;
        const products = this.context === 'english' ? PRODUCTS : PRODUCTS_DK;
        const head = this.context === 'english' ? 'IT-Smurf Homepages' : 'IT-Smølf Hjemmesider'
        return (
            <div>
                <h1 style={{color: 'White', textAlign: 'center'}}>{head}</h1>
                <p>{description1}</p>
                <p>{description2}</p>
                <div className="newcontainer">
                    {products.map((sizes, id) => {
                        return <Size key={id} size={products[id].size} description={products[id].description} />
                    })}
                </div>
                <Table />
            </div>
        );
    }
}

export default StartPage;