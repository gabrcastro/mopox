import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface State {
  minutes: number;
  pauseMinutes: number;
  seconds: number;
  isRunning: boolean;
  alarming: boolean;
  isPause: boolean;
  timerChanged: boolean;
  notification: boolean;
  notificationMessage: string;
}

export const initialState: State = {
  minutes: 25,
  pauseMinutes: 5,
  seconds: 0,
  isRunning: false,
  alarming: false,
  isPause: false,
  timerChanged: false,
  notification: false,
  notificationMessage: "string",
};

export const timerSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    setInitialState: (state) => {
      state.minutes = 25;
      state.pauseMinutes = 5;
      state.seconds = 0;
      state.isRunning = false;
      state.alarming = false;
      state.isPause = false;
      state.timerChanged = false;
      state.notification = false;
      state.notificationMessage = "";
    },
    decrement: (state) => {
      if (state.seconds < 0) state.seconds = 0;
      if (state.minutes < 0) state.minutes = 0;

      if (state.seconds === 0) {
        if (state.minutes > 0) {
          state.minutes -= 1;
          state.seconds = 59;
        }
      } else {
        state.seconds -= 60; // TODO: go back to 1;
      }
    },
    start: (state) => {
      state.isRunning = true;
    },
    pause: (state) => {
      state.isRunning = false;
    },
    stop: (state) => {
      state.seconds = 0;
      state.isRunning = false;
      state.alarming = false;
      state.timerChanged = false;
      state.notificationMessage = "";
    },
    setTimer: (
      state,
      action: PayloadAction<{ min: number; pause?: number }>
    ) => {
      state.minutes = action.payload.min;
      state.pauseMinutes = action.payload.pause ?? 5;
    },
    setMinutes: (state, action: PayloadAction<string>) => {
      state.minutes = +action.payload;
    },
    setpauseMinutes: (state, action: PayloadAction<string>) => {
      state.pauseMinutes = +action.payload;
    },
    setSeconds: (state, action: PayloadAction<string>) => {
      state.seconds = +action.payload;
    },
    alarm: (state) => {
      state.alarming = true;
    },
    setIsPause: (state, action: PayloadAction<boolean>) => {
      state.isPause = action.payload;
    },
    setChanged: (state, action: PayloadAction<boolean>) => {
      state.timerChanged = true;
    },
    showNotification: (state, action: PayloadAction<boolean>) => {
      state.notification = action.payload;
      state.timerChanged = false;
    },
    putMessageNotification: (state, action: PayloadAction<string>) => {
      state.notificationMessage = action.payload;
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
  setpauseMinutes,
  setSeconds,
  setTimer,
  alarm,
  setIsPause,
  showNotification,
  putMessageNotification,
} = timerSlice.actions;
export default timerSlice.reducer;
