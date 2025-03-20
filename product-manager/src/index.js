import React from 'react';
import { createRoot } from 'react-dom/client'; // Импортируем createRoot
import { Provider } from 'react-redux';
import { store, persistor } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './styles.css';

// Находим корневой элемент
const container = document.getElementById('root');

// Создаем корневой рендерер
const root = createRoot(container);

// Рендерим приложение
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);