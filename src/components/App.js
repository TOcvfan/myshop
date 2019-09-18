import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StartPage from './page/StartPage';
import Mail from './page/Mail';
import Examples from './page/Examples';
import Header from './Header';
import history from '../history';

const App = () => {
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
            <Switch>
              <Route path="/itsmurf" exact component={StartPage} />
              <Route path="/itsmurf/contact/:size" exact render={(props) => contactRoute(props)} />
              <Route path="/itsmurf/contact" exact render={(props) => contactRoute(props)} />
              <Route path="/itsmurf/examples" exact component={Examples} />
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
