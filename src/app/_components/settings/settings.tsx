"use client";

import { closeSettings } from "@/lib/features/settings/settings.slice";
import { useAppDispatch } from "@/lib/hooks";
import { X } from "lucide-react";

interface SettingsProps {}
export default function SettingsComponent({}: SettingsProps) {
  const dispatch = useAppDispatch();

  function handleCloseSettingsModal() {
    dispatch(closeSettings());
  }

  return (
    <div className="fixed z-50 w-full h-full bg-zinc-950 bg-opacity-80 flex items-center justify-center">
      <div className="w-[50%] p-5 bg-zinc-900 rounded-3xl shadow-shape">
        <div className="flex flex-row justify-between items-center">
          <span className="text-zinc-300 font-medium text-xl">Settings</span>
          <button
            onClick={handleCloseSettingsModal}
            type="button"
            className="hover:cursor-pointer hover:brightness-90"
          >
            <X className="text-zinc-300 size-5" />
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-20">
          <div className="flex items-center justify-between p-4 rounded-xl border-[.5px] border-zinc-800">
            <span className="text-zinc-400 text-md">Tema Escuro</span>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl border-[.5px] border-zinc-800">
            <span className="text-zinc-400 text-base flex-1">Tempo</span>
            <div className="flex">
              <input
                type="text"
                className="text-zinc-400 text-base bg-transparent w-min max-w-7"
                value={"25"}
              />
              <span className="text-zinc-400 text-base mr-2">:</span>
              <input
                type="text"
                className="text-zinc-400 text-base bg-transparent w-min max-w-7"
                value={"00"}
              />
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
      </div>
    </div>
  );
}
