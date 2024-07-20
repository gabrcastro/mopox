import { PlusIcon, User2 } from "lucide-react";

export default function TaskViewComponent() {
  return (
    <div className="w-full h-full p-5 bg-neutral-950">
      <div className="h-full w-full flex flex-col justify-between">
        <h3 className="text-zinc-300">Nova atividade</h3>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-zinc-400 text-sm">Titulo</span>
            <input
              type="text"
              className="min-h-14 border-[.5px] border-zinc-800 bg-transparent rounded-md shadow-shape"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-zinc-400 text-sm">Descricao</span>
            <input
              type="text"
              className="min-h-14 border-[.5px] border-zinc-800 bg-transparent rounded-md shadow-shape"
            />
          </div>
        </div>

        <button
          type="button"
          className="w-full min-h-16 p-2 rounded-xl hover:brightness-90 flex items-center justify-center border-[.5px] border-zinc-800 shadow-shape"
        >
          <PlusIcon className="size-5 text-zinc-300" />
          <span className="ml-5 text-sm text-zinc-300">Nova tarefa</span>
        </button>
      </div>
    </div>
  );
}
