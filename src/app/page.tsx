import { HeaderComponent } from "./_components/header/header";
import { TasksComponent } from "./_components/tasks/tasks";
import { TimerComponent } from "./_components/timer/timer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-10">
      <HeaderComponent />
      <TimerComponent />
      <TasksComponent />
    </main>
  );
}
