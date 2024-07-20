import { AppThunk } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

export interface State {
  oppened: boolean;
}

export const initialState: State = {
  oppened: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    openSettings: (state) => {
      state.oppened = true;
    },
    closeSettings: (state) => {
      state.oppened = false;
    },
  },
});

export const { openSettings, closeSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
