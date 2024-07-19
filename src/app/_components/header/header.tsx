import { Edit2, InfoIcon, Settings2 } from "lucide-react";

export function HeaderComponent() {
    return (
        <div className="flex flex-row items-center justify-between w-full">
            <h1 className="text-xl text-white font-medium flex-1">MindFocus</h1>
            <InfoIcon className="text-white size-5" />
        </div>
    )
}