import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@renderer/state/store'

interface UIState {
  currentPage: string // Used by sidebar to know which page you are currently on
}

const initialState: UIState = {
  currentPage: '',
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCurrentPage: (state: UIState, action: PayloadAction<string>) => {
      state.currentPage = action.payload
    },
  },
})

export const { setCurrentPage } = uiSlice.actions

export const selectCurrentPage = (state: RootState) => state.ui.currentPage

export default uiSlice.reducer
