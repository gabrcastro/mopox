import TaskListComponent from "./task_list";

export function TasksComponent() {
  return (
    <div className="flex flex-row w-[90%] md:w-[60%] h-full mt-10">
      {/* <div className="w-full border-r-[0.5px] border-r-zinc-800 p-3"> */}
      <TaskListComponent />
      {/* </div> */}
      {/* <TaskViewComponent /> */}
    </div>
  );
}
