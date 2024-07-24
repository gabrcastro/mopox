import {
  decrement,
  pause,
  setIsPause,
  setTimer,
  showNotification,
  start,
} from "@/lib/features/timer/timer.slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import clsx from "clsx";
import { AlarmClockIcon, X } from "lucide-react";
import { ModalComponent } from "../modal/modal";
import { useRef } from "react";

interface NotificationProps {
  type: "error" | "warning" | "alarm" | "success" | "default";
  message: string;
}

export function NotificationComponent({ type, message }: NotificationProps) {
  const { isPause } = useAppSelector((state) => state.counter);

  return (
    <ModalComponent title="">
      <div className="flex items-center justify-center flex-col mb-10">
        <img src="/images/breath.svg" alt="" className="w-[40%] mt-10" />
        <div className="flex flex-col items-center mt-5">
          <span className="text-zinc-300 text-base font-light text-center">
            {isPause ? "Hora da sua pausa!" : "Pronto?"}
          </span>
          <span className="text-zinc-300 text-base font-light text-center">
            {isPause
              ? "Aproveite para caminhar, tomar um café, respirar um \nar puro e retornar cheio de energia e disposição."
              : "Vamos começar mais um momento de foco e atenção."}
          </span>
        </div>
      </div>
    </ModalComponent>
  );
}
