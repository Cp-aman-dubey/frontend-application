import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListAssociateComponent from './components/ListAssociateComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateAssociateComponent from './components/CreateAssociateComponent';
import UpdateAssociateComponent from './components/UpdateAssociateComponent';
import ViewAssociateComponent from './components/ViewAssociateComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListAssociateComponent}></Route>
                          <Route path = "/associates" component = {ListAssociateComponent}></Route>
                          <Route path = "/add-associate/:id" component = {CreateAssociateComponent}></Route>
                          <Route path = "/update-associate/:id" component = {UpdateAssociateComponent}></Route> 
                          <Route path = "/view-associate/:id" component={ViewAssociateComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;