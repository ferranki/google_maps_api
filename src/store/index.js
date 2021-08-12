import { configureStore } from '@reduxjs/toolkit';
import markerReducer from '../features/AutocompleteLocationSearch/slice';

export default configureStore({
  reducer: {
    addresses: markerReducer,
  },
});
