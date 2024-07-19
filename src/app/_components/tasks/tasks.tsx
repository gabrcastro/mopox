import { TaskItem } from "./task_item";

export function TasksComponent() {
    return (
        <div className="flex flex-col items-start justify-center w-full">
            <span className="text-white text-lg font-medium">Tarefas</span>
            <div className="flex flex-col gap-3 mt-3 w-full">
                <TaskItem title="Assistir Serie" />
            </div>
        </div>
    )
}