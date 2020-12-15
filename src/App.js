 



import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
 
 import './App.css';
 import Login from './components/Login'
 import SignUp from './components/SignUp'
 import Dashboard from './components/Dashboard'
 
  
 import AccountSettings from './components/AccountSettings'
 import AuthContext from './context/auth-context';

class App extends Component {
  state = {
    token: null,
    username: null
  };

  login = (token, username ) => {
    this.setState({ token: token, username: username });
  };

  logout = () => {
    this.setState({ token: null, username: null });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              username: this.state.username,
              login: this.login,
              logout: this.logout
            }}
          >
            
             
            <Switch>
            { this.state.token && <Redirect from="/" to="/dashboard" exact />}
            { this.state.token && (
              <Redirect from="/login" to="/dashboard" exact />
            )}
            { this.state.token && (
              <Redirect from="/signup" to="/dashboard" exact />
            )}
            {! this.state.token && (
              <Route path="/login" component={Login } />
            )}
             {! this.state.token && (
              <Route path="/signup" component={SignUp } />
            )}
            
            { this.state.token && (
              <Route path="/accountsettings" component={AccountSettings} />
            )}
             { this.state.token && (
              <Route path="/dashboard" component={Dashboard} />
            )}
            {! this.state.token && <Redirect to="/login" exact />}
          </Switch>
     
            
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
