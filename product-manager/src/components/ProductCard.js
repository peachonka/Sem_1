import React from 'react';

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text description">{product.description}</p>
          <p className="card-text">Цена: {product.price}Р</p>
          <button onClick={() => onEdit(product)} className="btn btn-primary mr-2">
            Редактировать
          </button>
          <button onClick={() => onDelete(product.id)} className="btn btn-danger">
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;