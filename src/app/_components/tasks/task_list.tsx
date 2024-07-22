import { PlusIcon } from "lucide-react";
import { TaskItem } from "./task_item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addTask } from "@/lib/features/tasks/tasks.slice";
import { RootState } from "@/lib/store";
import { Task } from "../../domain/model/task";
import clsx from "clsx";

export default function TaskListComponent() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setAllTasks(tasks);
    setIsLoading(false);
  }, [tasks]);

  const handleAddTask = () => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
    };
    dispatch(addTask(newTask));
    setTitle("");
  };

  return (
    <div className="flex flex-col justify-start gap-5 w-full h-full mt-5">
      <div className="w-full flex justify-between items-center gap-2">
        <input
          type="text"
          className="min-h-11 border-[.5px] border-zinc-800 bg-transparent rounded-xl flex-1 shadow-shape px-3 text-zinc-400 "
          value={title}
          onChange={(value) => setTitle(value.target.value)}
        />
        <button
          type="button"
          onClick={handleAddTask}
          className="px-4 min-h-11 rounded-xl hover:brightness-90 flex items-center bg-lime-500 shadow-shape"
        >
          <span className={clsx("hidden md:flex mr-2 text-sm text-zinc-950")}>
            Adicionar
          </span>
          <PlusIcon className="size-4 text-zinc-950" />
        </button>
      </div>
      {isLoading && (
        <div className="flex flex-col items-center justify-start gap-2 w-full h-full pb-10">
          <span className="bg-zinc-900 rounded-xl animate-pulse h-14 w-full mb-1"></span>
          <span className="bg-zinc-900 rounded-xl animate-pulse h-14 w-full mb-1"></span>
          <span className="bg-zinc-900 rounded-xl animate-pulse h-14 w-full mb-1"></span>
        </div>
      )}
      {!isLoading && allTasks.length === 0 ? (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-zinc-500 text-xs font-light text-center">
            Nenhuma tarefa encontrada. <br />
            Adicione uma nova tarefa para aproveitar melhor o seu dia
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-start gap-2 w-full h-full pb-10">
          {allTasks.map((task: Task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}
