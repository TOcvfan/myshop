import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StartPage from './page/StartPage';
import Mail from './page/Mail';
import Examples from './page/Examples';
import Header from './Header';
import history from '../history';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {
  state = { language: 'dansk' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render(){

  const contactRoute = ({match}, props) => {
    if(match && match.params && match.params.size) {
        const size = match.params.size;
        return <Mail size={size}/>
    }else{
        return <Mail/>
    }
  }

    return (
      <div className="ui container">
          <Router history={history}>
            <div>
              <Header />
              <div>English:
                  <i className="pointing flag gb" onClick={() => this.onLanguageChange('english')} />
                  Dansk:
                  <i className="pointing flag dk" onClick={() => this.onLanguageChange('dansk')} />
              </div>
                <LanguageContext.Provider value={this.state.language}>
                  <Switch>
                    <Route path="/" exact component={StartPage} />
                    <Route path="/contact/:size" exact render={(props) => contactRoute(props)} />
                    <Route path="/contact" exact render={(props) => contactRoute(props)} />
                    <Route path="/examples" exact component={Examples} />
                  </Switch>
                </LanguageContext.Provider>  
            </div>
          </Router>
        
      </div>
    );
  };
}
export default App;
