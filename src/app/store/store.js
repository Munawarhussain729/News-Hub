import { configureStore } from '@reduxjs/toolkit'
import newSlice from './newsSlice'

export const store = configureStore({
  reducer: {
    newSlice: newSlice,
  },
})