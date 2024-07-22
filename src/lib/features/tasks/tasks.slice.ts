import { Task } from "@/app/domain/model/task";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  tasks: Task[];
}

const initialState: State = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    clearTasks: (state) => {
      state.tasks = [];
    },
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { clearTasks, setTasks, addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
