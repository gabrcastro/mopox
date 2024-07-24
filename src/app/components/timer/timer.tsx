"use client";

import {
  alarm,
  decrement,
  pause,
  setIsPause,
  setTimer,
  start,
  stop,
} from "@/lib/features/timer/timer.slice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import clsx from "clsx";
import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function TimerComponent() {
  const { minutes, seconds, isRunning, alarming, isPause, pauseMinutes } =
    useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const intervalIdRef = useRef<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAlarming, setIsAlarming] = useState(false);

  useEffect(() => {
    const { min, pause } = getAndSetTimer();
    dispatch(setTimer({ min: +min!, pause: +pause! }));
    setIsLoading(false);
  }, [setIsLoading, dispatch]);

  // useEffect(() => {
  //   if ()
  // }, [isPause])

  useEffect(() => {
    const audioAlarm = new Audio("/sounds/alarm.mp3");

    if (minutes === 0 && seconds === 0 && isRunning) {
      dispatch(alarm());
      if (alarming) {
        audioAlarm.play();
        setIsAlarming(true);
        setTimeout(() => {
          dispatch(stop());
          dispatch(
            setTimer({
              min: isPause ? +getAndSetTimer().min : +getAndSetTimer().pause,
            })
          );
          if (intervalIdRef.current !== null) {
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
          }
          setIsAlarming(false);
          dispatch(setIsPause(!isPause));
        }, 5000);
      }
    }
  }, [minutes, seconds, alarming, dispatch, isRunning, isPause, pauseMinutes]);

  function getAndSetTimer() {
    let min = localStorage.getItem("minutes");
    let pause = localStorage.getItem("pause");
    if (!min) min = "25";
    if (!pause) pause = "5";

    return { min, pause };
  }

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
    const { min, pause } = getAndSetTimer();
    clearInterval(intervalId);
    dispatch(stop());

    if (isPause) {
      dispatch(setTimer({ min: +pause, pause: +pause }));
    } else {
      dispatch(setTimer({ min: +min, pause: +pause }));
    }
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
      <span className="text-zinc-400 font-medium text-base">
        {isPause ? "PAUSA" : "TIMER"}
      </span>
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
