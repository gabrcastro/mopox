import { Action, configureStore } from "@reduxjs/toolkit";
import timerReducer from "./features/timer/timer.slice";
import settingsReducer from "./features/settings/settings.slice";
import authReducer from "./features/auth/auth.slice";
import taskReducer from "./features/tasks/tasks.slice";

// Define o tipo da store
export function makeStore() {
  return configureStore({
    reducer: {
      counter: timerReducer,
      settingsModal: settingsReducer,
      auth: authReducer,
      tasks: taskReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
