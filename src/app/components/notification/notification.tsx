import { showNotification } from "@/lib/features/timer/timer.slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import clsx from "clsx";
import { AlarmClockIcon, X } from "lucide-react";

interface NotificationProps {
  type: "error" | "warning" | "alarm" | "success" | "default";
  message: string;
}

export function NotificationComponent({ type, message }: NotificationProps) {
  const dispatch = useAppDispatch();

  function handleCloseNotification() {
    dispatch(showNotification(false));
  }

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={clsx(
          type === "alarm" || type === "success"
            ? "bg-emerald-500"
            : type === "error"
              ? "bg-red-500"
              : type === "warning"
                ? "bg-amber-500"
                : "bg-zinc-900",
          "absolute top-0 mt-14  rounded-xl shadow-shape w-[90%] md:w-[50%] min-h-12"
        )}
      >
        <div className="flex flex-row items-center justify-between w-full pr-3 pl-4 py-3">
          <p
            className={clsx(
              type !== "default" ? "text-zinc-950" : "text-zinc-300",
              "text-base"
            )}
          >
            {message}
          </p>
          <button
            onClick={handleCloseNotification}
            type="button"
            className="hover:brightness-90"
          >
            <X
              className={clsx(
                type !== "default" ? "text-zinc-950" : "text-zinc-300",
                "size-5"
              )}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
