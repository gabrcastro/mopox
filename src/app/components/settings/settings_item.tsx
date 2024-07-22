import React from "react";

interface SettingsItemProps {
  title: string;
  children: React.ReactNode;
}

export function SettingsItemComponent({ title, children }: SettingsItemProps) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border-[.5px] border-zinc-800">
      <span className="text-zinc-400 text-base flex-1">{title}</span>
      {children}
    </div>
  );
}
