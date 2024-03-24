import React, { useState } from 'react';
import styles from './Shopping.module.css';

function ShoppingList() {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setShoppingItems([...shoppingItems, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = shoppingItems.filter((_, i) => i !== index);
    setShoppingItems(updatedItems);
  };

  return (
    <div className={styles['shopping-list']} style={{ paddingTop: '20px' }}>
      <h2>Lista de Compras</h2>
      <ul>
        {shoppingItems.map((item, index) => (
          <li key={index}>
            {item}
            {shoppingItems.length > 0 && (
              <button className={styles.eliminar} onClick={() => removeItem(index)}>Eliminar</button>
            )}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Ingrese un nuevo producto"
      />
      <button onClick={addItem}>Agregar Producto</button>
    </div>
  );
}

export default ShoppingList;