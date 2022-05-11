import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (dispatch, getState) => {
    return await fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
      res.json(),
    );
  },
);

const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    status: null,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = 'Yükleniyor.';
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = 'Yüklendi.';
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = 'Hata.';
    },
  },
});

export default postSlice.reducer;
