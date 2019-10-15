import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import './App.css';
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="App">
        HeLlO wOrLd: SeCrEt ClUb
      </div>
      <Link to="/login">Login</Link>
      <Switch>
        <Route path="/login" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
