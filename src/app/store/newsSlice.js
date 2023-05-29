import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_KEY } from '../APIKEY';


export const fetchNewsArticles = createAsyncThunk(
  'news/fetchnews',
  async ({ category, pageNo }, thunkAPI) => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=10&page=${pageNo}&apiKey=${API_KEY}`);
    const data = await response.json();
    return data;
  }
)

const initialState = {
  newsArticles: [],
  resultSize: 0,
  pageNo: 0
}

export const newSlice = createSlice({
  name: 'newsArticle',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewsArticles.fulfilled, (state, action) => {
      const fiteredImages = action.payload.articles.filter((item) => item.urlToImage !== null)
      state.newsArticles = [...fiteredImages]
      state.pageNo = action.payload.pageNo
      state.resultSize = action.payload.totalResults
    })
  }
})


export const { actions } = newSlice;
export const { insertArticles } = actions;
export default newSlice.reducer;
