// src/App.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addProduct, editProduct, deleteProduct } from './features/productSlice';
import { toggleTheme } from './features/themeSlice';
import ProductCard from './components/ProductCard';
import ProductForm from './components/ProductForm';

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const theme = useSelector((state) => state.theme);
  const [isFormVisible, setFormVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = (product) => {
    dispatch(addProduct({ ...product, id: Date.now() }));
    setFormVisible(false);
  };

  const handleEditProduct = (product) => {
    dispatch(editProduct({ id: product.id, updatedProduct: product }));
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <h1>Интернет-магазин</h1>
        <button
          onClick={() => dispatch(toggleTheme())} // Используем toggleTheme
          className="btn btn-secondary mb-3"
        >
          Переключить тему ({theme})
        </button>
        <button onClick={() => setFormVisible(true)} className="btn btn-primary mb-3 ml-3">
          Добавить товар
        </button>
        {isFormVisible && (
          <ProductForm
            onSubmit={handleAddProduct}
            onCancel={() => setFormVisible(false)}
          />
        )}
        {editingProduct && (
          <ProductForm
            product={editingProduct}
            onSubmit={handleEditProduct}
            onCancel={() => setEditingProduct(null)}
          />
        )}
        <div className="row">
          {status === 'loading' && <p>Загрузка...</p>}
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={setEditingProduct}
              onDelete={handleDeleteProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;