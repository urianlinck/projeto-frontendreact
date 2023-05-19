import React from 'react';
import { useState } from 'react';
import GlobalStyles from './GlobalStyles';
import Filter from './Components/Filters/Filters';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import { AppStyled } from './AppStyled';
import productList from './assents/productList'

function App() {
  const [orderFilter, setOrderFilter] = useState("");
  return (
    <>
    <GlobalStyles/>
    <AppStyled>
      <Filter />
      <Home 
        productList={productList}
        orderFilter={orderFilter}
        setOrderFilter={setOrderFilter}/>
      <Cart />
    </AppStyled>
  </>
  );
}

export default App;
