import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import './App.css';
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="App">
        HeLlO wOrLd: SeCrEt ClUb
        <p>bE tHeRe oR bE sQuArE</p>
      </div>
      <h1>
        <Link to="/login">Login</Link>
      </h1>
      <Switch>
        <Route path="/login" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
