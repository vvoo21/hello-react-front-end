import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  const response = await axios.get('http://127.0.0.1:3000/api/random_messages');
  return response.data.message;
});

const initialState = {
  message: null,
  loading: false,
  error: null,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGreeting.fulfilled, (state, action) => ({
      ...state,
      message: action.payload,
      loading: false,
    }));
    builder.addCase(fetchGreeting.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default greetingSlice.reducer;