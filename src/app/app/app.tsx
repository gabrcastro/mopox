"use client";

import { useAppSelector } from "@/lib/hooks";
import LayoutDefault from "../components/layout.default";
import SettingsModal from "../components/settings/settings";
import { TasksComponent } from "../components/tasks/tasks";
import { TimerComponent } from "../components/timer/timer";
import { AuthModal } from "../components/auth/auth";
import { NotificationComponent } from "../components/notification/notification";

export default function App() {
  const { settingsOpened } = useAppSelector((state) => state.settingsModal);
  const { authOpened } = useAppSelector((state) => state.auth);
  const { notification, isPause } = useAppSelector((state) => state.counter);
  return (
    <LayoutDefault>
      <TimerComponent />
      <TasksComponent />
      {settingsOpened && <SettingsModal />}
      {/* {authOpened && <AuthModal />} */}
      {/* {notification && (
          <NotificationComponent
            type="alarm"
            message={isPause ? "Sua pausa terminou" : "Hora da pausa"}
          />
        )} */}
    </LayoutDefault>
  );
}
