import React from 'react';
import GlobalStyles from './GlobalStyles';
import Filter from './Components/Filters/Filters';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';

function App() {
  return (
    <>
    <GlobalStyles/>
    <div>
      <Filter />
      <Home />
      <Cart />
    </div>
  </>
  );
}

export default App;
