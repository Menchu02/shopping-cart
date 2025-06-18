// src/App.js
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Button, Badge } from 'react-bootstrap';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { getProducts } from './api'; // Importa la función de la API
import './App.css'; // Asegúrate de que este archivo existe en src/

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    // Cargar productos de la API cuando el componente se monte
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const totalItemsInCart = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg' className='mb-4'>
        <Container>
          <Navbar.Brand href='#'></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className='justify-content-end'>
            <Button variant='outline-light' onClick={handleShowCart}>
              Carrito <Badge bg='secondary'>{totalItemsInCart}</Badge>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ProductList products={products} onAddToCart={handleAddToCart} />

      <Cart
        show={showCart}
        handleClose={handleCloseCart}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onQuantityChange={handleQuantityChange}
      />
    </div>
  );
}

export default App;
