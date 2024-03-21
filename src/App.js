import React from "react";
import { Route } from "react-router-dom";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductContextProvider from "./components/contexts/ProductContext";
import CartContextProvider from "./components/contexts/CardContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Navigation />

        {/* Routelar */}
        <main className="content">
          <ProductContextProvider>
            <Route exact path="/">
              <Products />
            </Route>
          </ProductContextProvider>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </main>
      </CartContextProvider>
    </div>
  );
}

export default App;
