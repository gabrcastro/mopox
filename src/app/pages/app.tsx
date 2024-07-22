"use client";

import { useAppSelector } from "@/lib/hooks";
import LayoutDefault from "../components/layout.default";
import SettingsModal from "../components/settings/settings";
import { TasksComponent } from "../components/tasks/tasks";
import { TimerComponent } from "../components/timer/timer";
import { AuthModal } from "../components/auth/auth";

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
