import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Page404 from './pages/Page404/Page404';
import Category from './pages/Category/Category';
import Cart from './pages/Cart/Cart';
import './utils/utility-classes.css';
import Product from './pages/Product/Product';
import Terms_and_conditions from './pages/Terms_and_conditions/Terms_and_conditions';
import Favorites from './pages/Favorites/Favorites';

function App() {
  return(
    <div className="app">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/about" component={About}/>
        <Route path="/category/:categoryName" component={Category}/>
        <Route path="/product/:productId" component={Product}/>
        <Route path = "/terms&&conditions" component={Terms_and_conditions}/>
        <Route path = "/favorites" component = {Favorites} />
        <Route path="*" component={Page404}/>
      </Switch>
    </div>
  );
}

export default App;
