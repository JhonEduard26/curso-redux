import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true
    },
    finishLoading: (state) => {
      state.isLoading = false
    },
  }
})

export const { startLoading, finishLoading } = uiSlice.actions