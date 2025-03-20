// src/api/products.js
const API_URL = process.env.REACT_APP_API_URL; // Используем переменную из .env

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error('Ошибка при загрузке товаров');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при загрузке товаров:', error);
    throw error;
  }
};