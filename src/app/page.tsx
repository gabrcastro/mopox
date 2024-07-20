import { TasksComponent } from "./_components/tasks/tasks";
import { TimerComponent } from "./_components/timer/timer";
import App from "./pages/app";
import StoreProvider from "./store.provider";

export default function Home() {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
}
