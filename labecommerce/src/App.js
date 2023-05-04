import React from 'react';
import './App.css';
import filter from './Components/Filters/Filters';
import home from './Components/ProductList/Home/Home';
import cart from './Components/ShoppingCart/Cart/Cart';

function App() {
  return (
    <div>
      <filters />
      <home />
      <cart />
    </div>

  );
}

export default App;
