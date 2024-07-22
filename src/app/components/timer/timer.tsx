"use client";

import {
  alarm,
  decrement,
  pause,
  setInitialState,
  setTimer,
  start,
  stop,
} from "@/lib/features/timer/timer.slice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import clsx from "clsx";
import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function TimerComponent() {
  const { minutes, seconds, isRunning, alarming } = useAppSelector(
    (state) => state.counter
  );
  const dispatch = useAppDispatch();
  const intervalIdRef = useRef<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAlarming, setIsAlarming] = useState(false);

  useEffect(() => {
    let min = localStorage.getItem("minutes");
    if (!min) min = "25";

    dispatch(setTimer(+min!));
    setIsLoading(false);
  }, [setIsLoading, dispatch]);

  useEffect(() => {
    const audioAlarm = new Audio("/sounds/alarm.mp3");

    if (minutes === 0 && seconds === 0 && isRunning) {
      dispatch(alarm());
      if (alarming) {
        audioAlarm.play();
        setIsAlarming(true);
        setTimeout(() => {
          const min = localStorage.getItem("minutes") ?? 25;
          dispatch(stop(+min));
          if (intervalIdRef.current !== null) {
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
          }
          setIsAlarming(false);
        }, 5000);
      }
    }
  }, [minutes, seconds, alarming, dispatch, isRunning]);

  function startTimer() {
    const intervalId = setInterval(() => {
      dispatch(decrement());
    }, 1000);
    dispatch(start());
    return intervalId;
  }

  function pauseTimer(intervalId: number) {
    clearInterval(intervalId);
    dispatch(pause());
  }

  function stopTimer(intervalId: number) {
    let min = localStorage.getItem("minutes");
    if (!min) min = "25";
    clearInterval(intervalId);
    dispatch(stop(+min));
  }

  function handleStartTimer() {
    if (intervalIdRef.current === null) {
      const intervalId = startTimer() as unknown as number;
      intervalIdRef.current = intervalId;
    }
  }

  function handlePauseTimer() {
    if (isRunning && intervalIdRef.current !== null) {
      pauseTimer(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  }

  function handleStopTimer() {
    if (isRunning && intervalIdRef.current !== null) {
      stopTimer(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-24 ">
      {isLoading ? (
        <span className="bg-zinc-900 rounded-xl animate-pulse h-9 w-28 mb-1"></span>
      ) : (
        <span className="text-3xl text-zinc-300 font-bold mb-1">
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </span>
      )}
      <div className="flex flex-row gap-2">
        <button
          onClick={handleStartTimer}
          className={clsx(
            isRunning ? "hidden" : "",
            isAlarming ? "disabled:opacity-60" : "hover:brightness-150",
            "p-3 border-[.5px] border-zinc-700 rounded-xl hover:brightness-150"
          )}
          disabled={isAlarming}
          type="button"
        >
          <PlayIcon className="text-zinc-300 size-5" />
        </button>
        <button
          onClick={handlePauseTimer}
          className={clsx(
            isRunning ? "" : "hidden",
            isAlarming ? "disabled:opacity-60" : "hover:brightness-150",
            "p-3 border-[.5px] border-zinc-700 rounded-xl "
          )}
          disabled={isAlarming}
          type="button"
        >
          <PauseIcon className="text-zinc-300 size-5" />
        </button>
        <button
          onClick={handleStopTimer}
          className={clsx(
            isAlarming ? "disabled:opacity-60" : "hover:brightness-150",
            "p-3 border-[.5px] border-zinc-700 rounded-xl "
          )}
          disabled={isAlarming}
          type="button"
        >
          <RotateCcwIcon className="text-zinc-300 size-5" />
        </button>
      </div>
    </div>
  );
}
