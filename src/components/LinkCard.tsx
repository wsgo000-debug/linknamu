import type { ReactNode } from "react";

type LinkCardProps = {
  href: string;
  label: string;
  icon: ReactNode;
  clickCount: number;
  onClick?: () => void;
};

export default function LinkCard({ href, label, icon, clickCount, onClick }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-4 text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
        {icon}
      </span>
      <span className="flex-1 font-medium">{label}</span>
      <span className="shrink-0 text-xs text-zinc-400 dark:text-zinc-500">
        {clickCount}회
      </span>
    </a>
  );
}
