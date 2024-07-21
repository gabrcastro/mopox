"use client";

import { closeSettings } from "@/lib/features/settings/settings.slice";
import { useAppDispatch } from "@/lib/hooks";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { ToggleButton } from "../toggle/toggle_button";
import { ModalComponent } from "../modal/modal";

interface SettingsProps {}
export default function SettingsComponent({}: SettingsProps) {
  const dispatch = useAppDispatch();

  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {}, [minutes]);

  useEffect(() => {}, [minutes]);

  function handleCloseSettingsModal() {
    dispatch(closeSettings());
  }

  return (
    <ModalComponent title="Settings" closeFunction={handleCloseSettingsModal}>
      <div className="flex flex-col gap-4 mt-10">
        {/* <div className="flex items-center justify-between p-4 rounded-xl border-[.5px] border-zinc-800">
            <span className="text-zinc-400 text-md">Tema Escuro</span>
            <ToggleButton />
          </div> */}

        <div className="flex items-center justify-between p-4 rounded-xl border-[.5px] border-zinc-800">
          <span className="text-zinc-400 text-base flex-1">Tempo</span>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 items-center">
              <input
                type="number"
                className="text-zinc-400 text-base bg-transparent w-min max-w-10 focus:outline-none"
                value={minutes.toString()}
                onChange={(value) => setMinutes(+value.target.value)}
                max={60}
                min={1}
              />
              <span className="text-zinc-400 text-xs mr-2">Minutos</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <input
                type="number"
                className="text-zinc-400 text-base bg-transparent w-min max-w-10 focus:outline-none"
                value={seconds.toString().padStart(2, "0")}
                onChange={(value) => setSeconds(+value.target.value)}
                max={60}
                min={0}
              />
              <span className="text-zinc-400 text-xs mr-2">Segundos</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-xl bg-red-400 p-2 w-[60%] mt-10 hover:brightness-90"
          >
            <span className="text-zinc-900 text-base">
              Reset & Limpar tarefas
            </span>
          </button>
          <button
            type="button"
            className="rounded-xl flex-1 bg-green-400 p-2 mt-10 hover:brightness-90"
          >
            <span className="text-zinc-900 text-base">Salvar</span>
          </button>
        </div>
      </div>
    </ModalComponent>
  );
}
