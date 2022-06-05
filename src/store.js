import { configureStore } from '@reduxjs/toolkit'
import listReducer from './Slices/listSlice'
export const store = configureStore({
  reducer: {
    list: listReducer,
  },
})
