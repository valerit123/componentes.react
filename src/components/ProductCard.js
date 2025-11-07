import React from 'react';
import './Makeup.css';

// ProductCard: muestra nombre, precio, descripción corta y para qué sirve el producto.
export default function ProductCard({ title, description, useFor, price, image }) {
  return (
    <article className="product-card">
      <div className="card-media">
        {image ? (
          <img src={image} alt={title} className="product-image" />
        ) : (
          <div className="product-image placeholder">Imagen</div>
        )}
      </div>
      <div className="product-body">
        <h3 className="product-title">{title}</h3>
        <p className="product-desc">{description}</p>
        <p className="product-use"><strong>Para qué sirve:</strong> {useFor}</p>
      </div>
      <div className="card-footer">
        {price && <span className="product-price">{price}</span>}
      </div>
    </article>
  );
}
