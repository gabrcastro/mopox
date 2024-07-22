import { Task } from "@/app/domain/model/task";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  tasks: Task[];
}
const getInitialTasks = (): Task[] => {
  try {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    console.error("Erro ao ler tarefas do localStorage:", error);
    return [];
  }
};

const initialState: State = {
  tasks: getInitialTasks(),
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    clearTasks: (state) => {
      state.tasks = [];
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { clearTasks, addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
