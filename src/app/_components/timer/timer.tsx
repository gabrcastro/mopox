"use client";

import { pauseTimer, startTimer, stopTimer } from "@/lib/features/timer/timer.slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import clsx from "clsx";
import { PauseIcon, PlayIcon, Settings2, StopCircle } from "lucide-react";
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
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-between md:justify-center md:my-10 my-16">
        <div className="text-5xl text-white">
          {minutes}:{seconds.toString().padStart(2, "0")}
        </div>

        <div className="flex flex-row items-center justify-center gap-5 mt-5">
          <button 
            onClick={handleStartTimer} 
            type="button"
            className={clsx(isRunning ? "hidden" : "")}
          >
                <PlayIcon className="text-white size-10" />
          </button>
          <button 
            onClick={handlePauseTimer} 
            type="button"
            className={clsx(isRunning ? "" : "hidden")}
          >
                <PauseIcon className="text-white size-10" />
          </button>
          <button 
            onClick={handleStopTimer} 
            type="button"
            className={clsx(isRunning ? "" : "hidden")}
          >
                <StopCircle className="text-white size-10" />
          </button>
          <button 
            onClick={handleStartTimer} 
            type="button"
            className={clsx(isRunning ? "hidden" : "")}
          >
                <Settings2 className="text-white size-10" />
          </button>
        </div>
      </div>
    </div>
  );
}
