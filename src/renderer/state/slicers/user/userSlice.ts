import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@state/store'
import { loginAPICall } from './userAPI'

interface UserState {
  authenticated: false
  status: 'idle' | 'loading' | 'failed'
  userData: UserData | undefined
  error: boolean
}

type UserData = {
  id: number
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

const initialState: UserState = {
  authenticated: false,
  status: 'idle',
  userData: undefined,
  error: false,
}

export const loginAsync = createAsyncThunk('user/login', loginAPICall)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthenticatedFalse: (state: UserState) => {
      state.authenticated = false
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginAsync.pending, state => {
        state.status = 'loading'
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.authenticated = false
        state.error = true
        // Check if authentication was successful
        if (action.payload) {
          state.authenticated = true
          state.error = false
        }
      })
  },
})

export const { setAuthenticatedFalse } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user.authenticated
export const selectDataStatus = (state: RootState) => state.user.status
export const selectLoginError = (state: RootState) => state.user.error

export default userSlice.reducer
