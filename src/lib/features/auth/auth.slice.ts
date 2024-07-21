import { createSlice } from "@reduxjs/toolkit";

export interface State {
  authOpened: boolean;
}

export const initialState: State = {
  authOpened: false,
};

export const authSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    openAuthModal: (state) => {
      state.authOpened = true;
    },
    closeAuthModal: (state) => {
      state.authOpened = false;
    },
  },
});

export const { openAuthModal, closeAuthModal } = authSlice.actions;
export default authSlice.reducer;
