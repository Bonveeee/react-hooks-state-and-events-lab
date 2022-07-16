import { useState } from "react";

function Item({ name, category }) {
  const [isAddToCart, setCart] = useState("");

  function addToItem() {
    setCart((isAddToCart) => (isAddToCart = !isAddToCart));
  }

  return (
    <li className={isAddToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isAddToCart ? "add" : "remove"} onClick={addToItem}>
        {isAddToCart ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
