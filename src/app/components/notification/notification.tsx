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
import { useEffect, useRef } from "react";

interface NotificationProps {
  type: "error" | "warning" | "alarm" | "success" | "default";
  message: string;
}

export function NotificationComponent({ type, message }: NotificationProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(showNotification(false));
    }, 5000);
  });

  function handleCloseNotification() {
    dispatch(showNotification(false));
  }

  return (
    <div className="absolute top-0 mt-20 md:w-[50%] w-[90%] py-3 px-5 bg-emerald-900 rounded-xl shadow-shape">
      <div className="flex flex-col">
        <div className="flex flex-row items-start justify-between">
          <span className="text-zinc-300 text-base font-light text-center">
            {message}
          </span>
          <button
            onClick={handleCloseNotification}
            type="button"
            className="hover:cursor-pointer hover:brightness-90"
          >
            <X className="text-zinc-300 size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
