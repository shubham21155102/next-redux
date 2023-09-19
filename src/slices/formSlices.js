import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  // Add other form fields here
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormField: (state, action) => {
      
      // Use the spread operator to create a new state object
      return {
        ...state,
        [action.payload.fieldName]: action.payload.fieldValue,
      };
    },
    resetForm: (state) => {
      // Reset the form to its initial state
      return initialState;
    },
  },
});

export const { updateFormField, resetForm } = formSlice.actions;
export default formSlice.reducer;
