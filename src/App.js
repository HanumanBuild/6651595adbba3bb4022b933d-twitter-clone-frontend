import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Feed from './pages/Feed';
import './App.css';

function App() {
  return (
    <div className="main">
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Feed} />
      </Switch>
    </div>
  );
}

export default App;