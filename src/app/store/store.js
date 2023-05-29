import { configureStore } from '@reduxjs/toolkit';
import newsReducer, { fetchNewsArticles } from './newsSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

store.dispatch(fetchNewsArticles({ category: 'technology', pageNo: 1 }));

export default store;
