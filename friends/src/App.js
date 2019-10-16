import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import './App.css';
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <div className="App">
        HeLlO wOrLd: SeCrEt ClUb
        <p>bE tHeRe oR bE sQuArE</p>
      </div>
      <h1 className='link-container'>
        <Link className='link-buttons' to="/login">Login</Link>
        <Link className='link-buttons' to="/friends">Private Friends List Page</Link>
      </h1>
      <Switch>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/friends" component={FriendsList}/>
      </Switch>
    </Router>
  );
}

export default App;
