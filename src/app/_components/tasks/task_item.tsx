'use client';

import clsx from "clsx";
import { Check } from "lucide-react";
import { useState } from "react";

interface TaskItemProps {
    title: string
}

export function TaskItem({ title } : TaskItemProps) {
    const [checked, setChecked] = useState(false);

    return (
        <div className={clsx("flex items-center justify-between min-h-14 px-3 py-2 rounded-lg border-1 border-zinc-800 shadow-shape w-full", checked ? "bg-zinc-800" : "bg-zinc-900")}>
            <span className={clsx("flex-1 text-sm", checked ? "line-through text-zinc-600" : "text-zinc-400")}>{title}</span>
            <button onClick={() => setChecked(!checked)} type="button" className="rounded-md border-[0.5px] border-zinc-700 shadow-shape p-1 min-h-6 min-w-6">
                {checked && <Check className="text-white size-4" />}
            </button>
        </div>
    );
}