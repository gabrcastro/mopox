import { createSlice } from "@reduxjs/toolkit";

export interface State {
  settingsOpened: boolean;
  // darkTheme: boolean;
}

export const initialState: State = {
  settingsOpened: false,
  // darkTheme: true,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    openSettings: (state) => {
      state.settingsOpened = true;
    },
    closeSettings: (state) => {
      state.settingsOpened = false;
    },
    // darkTheme: (state) => {
    //   state.darkTheme = true;
    // },
    // lightTheme: (state) => {
    //   state.darkTheme = false;
    // },
  },
});

export const { openSettings, closeSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
