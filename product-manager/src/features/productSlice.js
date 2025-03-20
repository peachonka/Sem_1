import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Products } from '../api/products';

// Асинхронное действие для загрузки товаров
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const products = await Products();
    return products;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    editProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const productIndex = state.items.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        state.items[productIndex] = updatedProduct;
      }
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter((product) => product.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addProduct, editProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;