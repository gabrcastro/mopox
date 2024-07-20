"use client";

import {
  pauseTimer,
  startTimer,
  stopTimer,
} from "@/lib/features/timer/timer.slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import clsx from "clsx";
import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-react";
import { useEffect, useRef } from "react";

export function TimerComponent() {
  const { minutes, seconds, isRunning } = useAppSelector(
    (state) => state.counter
  );
  const dispatch = useAppDispatch();
  const intervalIdRef = useRef<number | null>(null);

  const handleStartTimer = () => {
    if (intervalIdRef.current === null) {
      const intervalId = dispatch(startTimer()) as unknown as number;
      intervalIdRef.current = intervalId;
    }
  };

  const handlePauseTimer = () => {
    if (isRunning && intervalIdRef.current !== null) {
      dispatch(pauseTimer(intervalIdRef.current));
      intervalIdRef.current = null;
    }
  };

  const handleStopTimer = () => {
    if (isRunning && intervalIdRef.current !== null) {
      dispatch(stopTimer(intervalIdRef.current));
      intervalIdRef.current = null;
    }
  };

  useEffect(() => {
    // Cleanup the interval when the component unmounts
    return () => {
      if (intervalIdRef.current !== null) {
        dispatch(stopTimer(intervalIdRef.current));
      }
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-24 ">
      <span className="text-3xl text-zinc-300 font-bold mb-1">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </span>
      <div className="flex flex-row gap-2">
        <button
          onClick={handleStartTimer}
          className={clsx(
            isRunning ? "hidden" : "",
            "p-3 border-[.5px] border-zinc-700 rounded-xl hover:brightness-150"
          )}
          type="button"
        >
          <PlayIcon className="text-zinc-300 size-5" />
        </button>
        <button
          onClick={handlePauseTimer}
          className={clsx(
            isRunning ? "" : "hidden",
            "p-3 border-[.5px] border-zinc-700 rounded-xl hover:brightness-150"
          )}
          type="button"
        >
          <PauseIcon className="text-zinc-300 size-5" />
        </button>
        <button
          onClick={handleStopTimer}
          className="p-3 border-[.5px] border-zinc-700 rounded-xl hover:brightness-150"
          type="button"
        >
          <RotateCcwIcon className="text-zinc-300 size-5" />
        </button>
      </div>
    </div>
  );
}
