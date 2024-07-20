import { TaskItem } from "./task_item";

export function TasksComponent() {
  return (
      <div className="flex flex-row items-start justify-center gap-4 w-full h-full mt-10">
        
        <div className="flex flex-col gap-3 mt-3 w-[50%] h-full p-5 rounded-xl shadow-shape">
          <span className="text-white text-sm font-medium">Tarefas importantes</span>
          <TaskItem title="Assistir Serie" />
        </div>

        <div className="flex flex-col gap-3 mt-3 w-[50%] h-full p-5 rounded-xl shadow-shape">
          <span className="text-white text-sm font-medium">Tarefas menos importantes</span>
          <TaskItem title="Assistir Serie" />
        </div>

      </div>
  );
}
