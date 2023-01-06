import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterSlice from './slicers/counterSlice'
import userSlice from './slicers/user/userSlice'
import uiSlice from './slicers/ui/uiSlice'
import dataSlice from './slicers/data/dataSlice'
// ...

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
    ui: uiSlice,
    data: dataSlice,
  },
  devTools: true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
