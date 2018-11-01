import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import Products from './components/Products'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
        </div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
        </Switch>
      </div>
    );
  }
}

export default App;
