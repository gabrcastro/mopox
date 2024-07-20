import { AppThunk } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

export interface State {
  minutes: number;
  seconds: number;
  isRunning: boolean;
}

export const initialState: State = {
  minutes: 24,
  seconds: 10,
  isRunning: false,
};

export const timerSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    setInitialState: (state) => {
        state.minutes = 24;
        state.seconds = 10;
        state.isRunning = false;
    },
    decrement: (state) => {
      if (state.seconds === 0) {
        if (state.minutes > 0) {
          state.minutes -= 1;
          state.seconds = 59;
        }
      } else {
        state.seconds -= 1;
      }
    },
    start: (state) => {
      state.isRunning = true;
    },
    pause: (state) => {
      state.isRunning = false;
    },
  },
});

export const { decrement, start, pause, setInitialState } = timerSlice.actions;

export const startTimer = (): AppThunk => (dispatch) => {
  const intervalId = setInterval(() => {
    dispatch(decrement());
  }, 1000);
  dispatch(start());
  return intervalId;
};

export const pauseTimer =
  (intervalId: number): AppThunk =>
  (dispatch) => {
    clearInterval(intervalId);
    dispatch(pause());
  };

export const stopTimer =
  (intervalId: number): AppThunk =>
  (dispatch) => {
    clearInterval(intervalId);
    dispatch(setInitialState());
  };

export default timerSlice.reducer;
