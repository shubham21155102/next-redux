// store.js

import { configureStore } from '@reduxjs/toolkit';
import formSlice from '../slices/formSlices'; // Correct the import name

const store = configureStore({
  reducer: {
    form: formSlice, // Correct the slice name
  },
});

export default store;
