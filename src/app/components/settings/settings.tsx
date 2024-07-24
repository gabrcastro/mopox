"use client";

import { closeSettings } from "@/lib/features/settings/settings.slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { ModalComponent } from "../modal/modal";
import { SettingsItemComponent } from "./settings_item";
import {
  setInitialState,
  setIsPause,
  setTimer,
  showNotification,
} from "@/lib/features/timer/timer.slice";
import { clearTasks } from "@/lib/features/tasks/tasks.slice";

interface SettingsProps {}
export default function SettingsComponent({}: SettingsProps) {
  const { tasks } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const [min, setMin] = useState(
    JSON.parse(localStorage.getItem("minutes") || "25")
  );
  const [pause, setPause] = useState(
    JSON.parse(localStorage.getItem("pause") || "5")
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleCloseSettingsModal() {
    dispatch(closeSettings());
  }

  function handleSaveSettings() {
    localStorage.setItem("minutes", min.toString());
    localStorage.setItem("pause", pause.toString());
    dispatch(setIsPause(false));
    dispatch(setTimer({ min: min, pause: pause }));
    dispatch(closeSettings());
    dispatch(showNotification(true));
  }

  function handleResetSettings() {
    dispatch(setInitialState());
    dispatch(clearTasks());
  }

  return (
    <ModalComponent title="Settings" closeFunction={handleCloseSettingsModal}>
      <div className="flex flex-col gap-4 mt-10">
        {/* <div className="flex items-center justify-between p-4 rounded-xl border-[.5px] border-zinc-800">
            <span className="text-zinc-400 text-md">Tema Escuro</span>
            <ToggleButton />
          </div> */}

        <SettingsItemComponent title="Tempo">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 items-center">
              <input
                type="number"
                className="text-zinc-400 text-base bg-transparent w-min max-w-10 focus:outline-none"
                value={min}
                onChange={(value) => setMin(value.target.value)}
                max={60}
                min={1}
              />
              <span className="text-zinc-400 text-xs mr-2">Minutos</span>
            </div>
          </div>
        </SettingsItemComponent>

        <SettingsItemComponent title="Pausa">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 items-center">
              <input
                type="number"
                className="text-zinc-400 text-base bg-transparent w-min max-w-10 focus:outline-none"
                value={pause}
                onChange={(value) => setPause(value.target.value)}
                max={60}
                min={1}
              />
              <span className="text-zinc-400 text-xs mr-2">Minutos</span>
            </div>
          </div>
        </SettingsItemComponent>

        {/* <SettingsItemComponent title="Mutar alarme">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 items-center">
              <ToggleButton />
            </div>
          </div>
        </SettingsItemComponent> */}

        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleResetSettings}
            className="rounded-xl bg-red-400 p-2 w-[60%] mt-10 hover:brightness-90"
          >
            <span className="text-zinc-900 text-base">
              Limpar lista & voltar ao padrão
            </span>
          </button>
          <button
            type="button"
            onClick={handleSaveSettings}
            className="rounded-xl flex-1 bg-green-400 p-2 mt-10 hover:brightness-90"
          >
            <span className="text-zinc-900 text-base">Salvar</span>
          </button>
        </div>
      </div>
    </ModalComponent>
  );
}
