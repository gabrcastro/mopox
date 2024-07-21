import { openAuthModal } from "@/lib/features/auth/auth.slice";
import { openSettings } from "@/lib/features/settings/settings.slice";
import { useAppDispatch } from "@/lib/hooks";
import { LucideSettings2 } from "lucide-react";

export function HeaderComponent() {
  const dispatch = useAppDispatch();

  function handleOpenSettingsModal() {
    dispatch(openSettings());
  }

  function handleOpenAuthModal() {
    dispatch(openAuthModal());
  }

  return (
    <div className="fixed flex flex-row w-[90%] md:w-[70%] justify-between items-center py-5 bg-zinc-950">
      <div className="flex gap-2">
        {/* <TimerIcon className="size-6 text-zinc-300" /> */}
        <span className="text-zinc-300 font-medium text-xl">mindfocus</span>
      </div>

      <div className="flex flex-row gap-4">
        <button
          onClick={handleOpenSettingsModal}
          className="hover:brightness-150"
          type="button"
        >
          <LucideSettings2 className="text-zinc-300 size-5" />
        </button>
        {/* <div className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center">
          <User2 className="text-zinc-300 size-4" />
        </div> */}
        <button
          onClick={handleOpenAuthModal}
          className="rounded-lg border-[.5px] border-zinc-800 px-3 py-1 hover:brightness-90 hover:cursor-pointer"
          type="button"
        >
          <span className="text-sm text-zinc-300 ">Faça login</span>
        </button>
      </div>
    </div>
  );
}
