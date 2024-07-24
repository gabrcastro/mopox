"use client";

import { useAppSelector } from "@/lib/hooks";
import LayoutDefault from "../components/layout.default";
import SettingsModal from "../components/settings/settings";
import { TasksComponent } from "../components/tasks/tasks";
import { TimerComponent } from "../components/timer/timer";
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
      {notification && (
        <NotificationComponent
          type="default"
          message={"Suas configurações foram salvas com sucesso!"}
        />
      )}
    </LayoutDefault>
  );
}
