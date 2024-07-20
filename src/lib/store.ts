import { Action, configureStore } from '@reduxjs/toolkit'
import timerReducer from './features/timer/timer.slice'
import { thunk, ThunkAction } from 'redux-thunk'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: timerReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>