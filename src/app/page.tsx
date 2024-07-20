import { HeaderComponent } from "./_components/header/header";
import { TasksComponent } from "./_components/tasks/tasks";
import { TimerComponent } from "./_components/timer/timer";
import StoreProvider from "./store.provider";

export default function Home() {
  return (
    <StoreProvider>
      <div className="p-10 h-screen w-screen overflow-y-hidden bg-zinc-950">
        <HeaderComponent />
        <main className="flex min-h-screen flex-col items-center justify-start w-full h-full">
          <div className="flex flex-col w-full h-full">
            <TimerComponent />
            <TasksComponent />
          </div>
        </main>
      </div>
    </StoreProvider>
  );
}
