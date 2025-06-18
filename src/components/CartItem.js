// src/components/CartItem.js
import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const CartItem = ({ item, onRemoveFromCart, onQuantityChange }) => {
  return (
    <ListGroup.Item className='d-flex justify-content-between align-items-center'>
      <div>
        <h5>{item.name}</h5>
        <p>
          €{item.price.toFixed(2)} x {item.quantity}
        </p>
      </div>
      <div>
        <Button
          variant='secondary'
          size='sm'
          onClick={() => onQuantityChange(item.id, item.quantity - 1)}
          disabled={item.quantity === 1}
        >
          -
        </Button>{' '}
        <span className='mx-2'>{item.quantity}</span>{' '}
        <Button
          variant='secondary'
          size='sm'
          onClick={() => onQuantityChange(item.id, item.quantity + 1)}
        >
          +
        </Button>{' '}
        <Button
          variant='danger'
          size='sm'
          onClick={() => onRemoveFromCart(item.id)}
        >
          Eliminar
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default CartItem;
