import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';

class Table extends React.Component {
    static contextType = LanguageContext;
    render(){
        const yes = this.context === 'english' ? 'Yes' : 'Ja';
        const no = this.context === 'english' ? 'No' : 'Nej';
        const choice = this.context === 'english' ? 'Your choice' : 'Dit valg';
        const maybe = this.context === 'english' ? 'Maybe' : 'Måske';
        const domain = this.context === 'english' ? 'Domain packeges' : 'Domæne pakker';
        const none = this.context === 'english' ? 'None' : 'Ingen';
        const silver = this.context === 'english' ? 'Silver' : 'Sølv'
        const gold = this.context === 'english' ? 'Gold' : 'Guld';
        const own = this.context === 'english' ? 'Own your domain' : 'Ej dit eget domæne';
        const hour = this.context === 'english' ? '24 hour service' : '24 timers service';
        const hotel = this.context === 'english' ? 'Webhotel and mail' : 'Webhotel og mail'
        const safty = this.context === 'english' ? 'Saftycertificate' : 'Sikkerhedssertifikat'
        return (
            <div>
            <table id="domainpack">
                <thead>
                    <tr>
                        <th>{domain}</th>
                        <th>{none}</th>
                        <th style={{backgroundColor: '#b08d57'}}>Bronze</th>
                        <th style={{backgroundColor: '#aaa9ad'}}>{silver}</th>
                        <th style={{backgroundColor: '#d4af37'}}>{gold}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{own}</td>
                        <td>{yes}</td>
                        <td>{yes}</td>
                        <td>{yes}</td>
                        <td>{yes}</td>
                    </tr>
                    <tr>
                        <td>{hour}</td>
                        <td>{no}</td>
                        <td>{no}</td>
                        <td>{yes}</td>
                        <td>{yes}</td>
                    </tr>
                    <tr>
                        <td>{hotel}</td>
                        <td>{choice}</td>
                        <td>5 GB</td>
                        <td>5 GB</td>
                        <td>5 GB</td>
                    </tr>
                    <tr>
                        <td>{safty}</td>
                        <td>{maybe}</td>
                        <td>{yes}</td>
                        <td>{yes}</td>
                        <td>{yes}</td>
                    </tr>    
                </tbody>
            </table>
            </div>
        );
    };
}
export default Table;