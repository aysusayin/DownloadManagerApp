import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Admin } from './components/admin'
import { NavigationBar } from './components/NavigationBar';
import { Softwares } from './components/softwares'; 
import { SoftwareReleases } from './components/releases'; 
import { NotFound } from './components/notfound'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
          <Route exact path="/software/:id" component={SoftwareReleases} />
          <Route exact path="/"><Softwares /></Route>
          <Route exact path="/admin"><Admin /></Route>
          <Route component={NotFound}/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
