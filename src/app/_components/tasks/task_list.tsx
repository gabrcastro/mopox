import { ArrowDownWideNarrowIcon, PlusIcon } from "lucide-react";
import { TaskItem } from "./task_item";

export default function TaskListComponent() {
  return (
    <div className="flex flex-col justify-start gap-5 w-full h-full mt-5">
      <div className="w-full flex justify-between items-center gap-2">
        <input
          type="text"
          className="min-h-11 border-[.5px] border-zinc-800 bg-transparent rounded-xl flex-1 shadow-shape "
        />
        <button
          type="button"
          className="px-4 min-h-11 rounded-xl hover:brightness-90 flex items-center bg-lime-500 shadow-shape"
        >
          <span className="mr-2 text-sm text-zinc-950">Adicionar</span>
          <PlusIcon className="size-4 text-zinc-950" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-start gap-2 w-full h-full pb-10">
        <TaskItem title="Assistir Serie" />
        <TaskItem title="Assistir Serie" />
        <TaskItem title="Assistir Serie" />
        <TaskItem title="Assistir Serie" />
        <TaskItem title="Assistir Serie" />
        <TaskItem title="Assistir Serie" />
        <TaskItem title="Assistir Serie" />
        <TaskItem title="Assistir Serie" />
        <TaskItem title="Assistir Serie" />
      </div>
    </div>
  );
}
