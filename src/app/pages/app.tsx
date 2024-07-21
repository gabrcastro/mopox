"use client";

import { useAppSelector } from "@/lib/hooks";
import LayoutDefault from "../_components/layout.default";
import SettingsModal from "../_components/settings/settings";
import { TasksComponent } from "../_components/tasks/tasks";
import { TimerComponent } from "../_components/timer/timer";
import { AuthModal } from "../_components/auth/auth";

export default function App() {
  const { settingsOpened } = useAppSelector((state) => state.settingsModal);
  const { authOpened } = useAppSelector((state) => state.auth);
  return (
    <LayoutDefault>
      <TimerComponent />
      <TasksComponent />
      {settingsOpened && <SettingsModal />}
      {authOpened && <AuthModal />}
    </LayoutDefault>
  );
}
