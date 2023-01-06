import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterSlice from './slicers/counterSlice'
import userSlice from './slicers/user/userSlice'
import uiSlice from './slicers/ui/uiSlice'
// ...

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
    ui: uiSlice,
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
