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
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState([]);
  return (
    <>
    <GlobalStyles/>
    <AppStyled>
      <Filter
      minFilter={minFilter}
      setMinFilter={setMinFilter}
      maxFilter={maxFilter}
      setMaxFilter={setMaxFilter}
      searchFilter={searchFilter}
      setSearchFilter={setSearchFilter}
      />
      <Home 
        productList={productList}
        orderFilter={orderFilter}
        setOrderFilter={setOrderFilter}
        cart={cart}
        setCart={setCart}
        amount={amount}
        setAmount={setAmount}
        minFilter={minFilter}
        maxFilter={maxFilter}
        searchFilter={searchFilter}
        />
      <Cart
      cart={cart}
      setCart={setCart}
      amount={amount}
      setAmount={setAmount} 
      />
    </AppStyled>
  </>
  );
}

export default App;
