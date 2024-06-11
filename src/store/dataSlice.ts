import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Jane Appleseed',
  number: '0000 0000 0000 0000',
  month: '00',
  year: '00',
  cvc: '000',
};

const dataSlice = createSlice({
  name: 'dataForms',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setNumber(state, action) {
      state.number = action.payload;
    },
    setMonth(state, action) {
      state.month = action.payload;
    },
    setYear(state, action) {
      state.year = action.payload;
    },
    setCvc(state, action) {
      state.cvc = action.payload;
    },
  },
});

export const { setName, setNumber, setMonth, setYear, setCvc } = dataSlice.actions;

export default dataSlice.reducer;
