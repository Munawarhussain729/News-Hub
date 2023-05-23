import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  newsArticles: [],
}

export const newSlice = createSlice({
  name: 'newsArticle',
  initialState,
  reducers: {
    insertArticles: (state, action) => {
      const FilteredArray = action.payload.filter((item) => item.urlToImage !== null)
      console.log("Filtere array ", FilteredArray);
      state.newsArticles = [...FilteredArray]
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { insertArticles, decrement, incrementByAmount } = newSlice.actions

export default newSlice.reducer