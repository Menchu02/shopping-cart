// src/components/ProductCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant='top' src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className='text-black fw-bold mt-auto'>
          €{product.price.toFixed(2)}
        </Card.Text>
        <Button variant='dark' onClick={() => onAddToCart(product)}>
          Añadir al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
