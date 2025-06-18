// src/components/Cart.js
import React from 'react';
import { Offcanvas, Button, ListGroup } from 'react-bootstrap';
import CartItem from './CartItem';

const Cart = ({
  show,
  handleClose,
  cartItems,
  onRemoveFromCart,
  onQuantityChange,
}) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Offcanvas show={show} onHide={handleClose} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Tu Carrito de Compras</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ListGroup>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemoveFromCart={onRemoveFromCart}
                onQuantityChange={onQuantityChange}
              />
            ))}
          </ListGroup>
        )}
        <h4 className='mt-4'>Total: €{total.toFixed(2)}</h4>
        <Button
          variant='success'
          className='mt-3'
          disabled={cartItems.length === 0}
        >
          Finalizar Compra
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
