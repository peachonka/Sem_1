// Базовый URL для mock API (json-server)
const API_URL = 'http://localhost:3001/products';

// Функция для загрузки товаров
export const Products = async () => {
  try {
    const response = await fetch(API_URL); // Используем fetch вместо axios
    if (!response.ok) {
      throw new Error('Ошибка при загрузке товаров');
    }
    const data = await response.json(); // Парсим JSON-ответ
    return data; // Возвращаем данные товаров
  } catch (error) {
    console.error('Ошибка при загрузке товаров:', error);
    throw error; // Пробрасываем ошибку, чтобы обработать её в компоненте
  }
};