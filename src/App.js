import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AccountSettings from './components/AccountSettings'

function App() {
  return (
    <Router>
      <div>
        

        
        <Switch>
          <Route path="/account-settings">
            <AccountSettings />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
