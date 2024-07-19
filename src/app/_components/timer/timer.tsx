import { PauseIcon, PlayCircle, PlayIcon, Settings2, StopCircle, StopCircleIcon } from "lucide-react";

export function TimerComponent() {
    return (
        <div className="flex flex-col items-center justify-between my-16">
            <div className="text-5xl text-white">
                25:00
            </div>

            <div className="flex flex-row items-center justify-center gap-5 mt-5">
                <PlayIcon className="text-white size-10"/>
                {/* <PauseIcon className="text-white size-10"/>
                <StopCircle className="text-white size-10"/> */}
                <Settings2 className="text-white size-10"/>
            </div>
        </div>
    )
}