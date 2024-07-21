import { PlusIcon } from "lucide-react";
import { TaskItem } from "./task_item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addTask } from "@/lib/features/tasks/tasks.slice";
import { RootState } from "@/lib/store";
import { Task } from "../../domain/model/task";

export default function TaskListComponent() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [allTasks, setAllTasks] = useState<Task[]>([]);

  useEffect(() => {
    setAllTasks(tasks);
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
          <span className="mr-2 text-sm text-zinc-950">Adicionar</span>
          <PlusIcon className="size-4 text-zinc-950" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-start gap-2 w-full h-full pb-10">
        {allTasks.map((task: Task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
