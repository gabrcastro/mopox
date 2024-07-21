import { X } from "lucide-react";

interface ModalProps {
  title: string;
  closeFunction: () => void;
  children: React.ReactNode;
}

export function ModalComponent({ title, closeFunction, children }: ModalProps) {
  return (
    <div className="fixed z-50 w-full h-full bg-zinc-950 bg-opacity-80 flex items-center justify-center">
      <div className="md:w-[50%] w-[90%] p-5 bg-zinc-900 rounded-3xl shadow-shape">
        <div className="flex flex-row justify-between items-center">
          <span className="text-zinc-300 font-medium text-xl">{title}</span>
          <button
            onClick={closeFunction}
            type="button"
            className="hover:cursor-pointer hover:brightness-90"
          >
            <X className="text-zinc-300 size-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
