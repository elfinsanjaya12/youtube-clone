import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
      </div>
    </Router>
  )
}

export default App;
