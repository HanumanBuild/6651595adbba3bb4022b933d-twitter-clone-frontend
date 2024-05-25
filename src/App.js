import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="main">
      <Navbar />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/" component={Feed} />
      </Switch>
    </div>
  );
}

export default App;