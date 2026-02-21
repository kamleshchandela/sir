import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterslice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})