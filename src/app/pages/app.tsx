"use client";

import { useAppSelector } from "@/lib/hooks";
import LayoutDefault from "../_components/layout.default";
import SettingsComponent from "../_components/settings/settings";
import { TasksComponent } from "../_components/tasks/tasks";
import { TimerComponent } from "../_components/timer/timer";

export default function App() {
  const { oppened } = useAppSelector((state) => state.settingsModal);
  return (
    <LayoutDefault>
      <TimerComponent />
      <TasksComponent />
      {oppened && <SettingsComponent />}
    </LayoutDefault>
  );
}
