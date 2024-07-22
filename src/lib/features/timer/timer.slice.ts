import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface State {
  minutes: number;
  pauseTimer: number;
  seconds: number;
  isRunning: boolean;
  alarming: boolean;
}

export const initialState: State = {
  minutes: 25,
  pauseTimer: 5,
  seconds: 0,
  isRunning: false,
  alarming: false,
};

export const timerSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    setInitialState: (state) => {
      state.minutes = 25;
      state.pauseTimer = 5;
      state.seconds = 0;
      state.isRunning = false;
      state.alarming = false;
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
    stop: (state, action: PayloadAction<number>) => {
      state.minutes = action.payload;
      state.seconds = 0;
      state.isRunning = false;
      state.alarming = false;
    },
    setTimer: (state, action: PayloadAction<number>) => {
      state.minutes = action.payload;
    },
    setMinutes: (state, action: PayloadAction<string>) => {
      state.minutes = +action.payload;
    },
    setPauseTimer: (state, action: PayloadAction<string>) => {
      state.pauseTimer = +action.payload;
    },
    setSeconds: (state, action: PayloadAction<string>) => {
      state.seconds = +action.payload;
    },
    alarm: (state) => {
      state.alarming = true;
    },
  },
});

export const {
  decrement,
  start,
  pause,
  stop,
  setInitialState,
  setMinutes,
  setPauseTimer,
  setSeconds,
  setTimer,
  alarm,
} = timerSlice.actions;
export default timerSlice.reducer;
