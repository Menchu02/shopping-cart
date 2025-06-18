// src/components/ProductList.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard'; // Esta importación es correcta

const ProductList = ({ products, onAddToCart }) => {
  return (
    <Container className='mt-4 product-list-container'>
      {/* Título centrado con estilos mejorados */}
      <h2 className='text-center mb-5 text-dark fw-bold'>Productos</h2>
      <Row className='justify-content-center'>
        {' '}
        {/* Centra las columnas de productos */}
        {products.map((product) => (
          <Col
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className='mb-4 d-flex justify-content-center'
          >
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
