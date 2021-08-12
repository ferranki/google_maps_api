import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'addresses',
  initialState: {
    value: "",
  },
  reducers: {
    addAddress: (state, action) => {
      console.log("addAddress", action.payload)
      state.value = [...state.value,action.payload];
      console.log(state.value)
    }
  },
});

export const { addAddress } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.address.value)`
export const selectMarkersAddresses = state => state.addresses.value;

export default slice.reducer;
