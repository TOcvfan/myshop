import React from 'react';

const Context = React.createContext('dansk');

export class LanguageStore extends React.Component {
    state = { language: 'dansk' };

    onLanguageChange = (language) => {
        this.setState({ language });
    }

    render() {
        return(
            <Context.Provider value={this.state.language}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;