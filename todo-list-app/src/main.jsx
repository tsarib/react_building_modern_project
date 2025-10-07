import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import {todoSlice} from './todoSlice.js'
import {loadingSlice} from './loadingSlice.js'

// Configure the Redux store with the todo and loading slices

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
