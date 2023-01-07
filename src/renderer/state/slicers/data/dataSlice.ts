import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllRomsAPICall } from './dataAPI'
import { RootState } from '@renderer/state/store'

export type Rom = {
  id: number
  romName: string
  emulator: string
  releaseDate: Date
}

interface DataState {
  allRoms: Array<Rom>
  status: 'idle' | 'loading' | 'failed'
}

const initialState: DataState = {
  allRoms: [],
  status: 'idle',
}

export const getAllRomsAsync = createAsyncThunk(
  'data/getAllRoms',
  getAllRomsAPICall
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllRomsAsync.pending, state => {
        state.status = 'loading'
      })
      .addCase(getAllRomsAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.allRoms = action.payload
      })
  },
})

export const selectAllRoms = (state: RootState) => state.data.allRoms
export const selectDataStatus = (state: RootState) => state.data.status
export default dataSlice.reducer
