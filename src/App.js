import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import LaunchPage from './Pages/LaunchPage/LaunchPage';
import AppPage from './Pages/AppPage/AppPage';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <BrowserRouter>
        
        <Switch>
          <Route path = '/' exact component = {LaunchPage} />
          <Route path = '/app' component = {AppPage} />
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;
