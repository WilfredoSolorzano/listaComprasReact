import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Perfil from "./components/Perfil/Perfil"
import ShoppingList from "./components/shoppinglist/Shopping"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Perfil></Perfil>
      <ShoppingList></ShoppingList>
    </div>
  );
}

export default App;