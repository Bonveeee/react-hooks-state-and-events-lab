import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react"


function App() {

  const [isappDark, setDark] =useState("")
  const appClass = isappDark ? "App dark" : "App light"
  
  
  function handleDarkMode(){
    setDark((isappDark => isappDark = !isappDark))

  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}
export default App;
