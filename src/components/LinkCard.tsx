import type { ReactNode } from "react";

type LinkCardProps = {
  href: string;
  label: string;
  icon: ReactNode;
  iconBg: string;
  clickCount: number;
  onClick?: () => void;
};

export default function LinkCard({
  href,
  label,
  icon,
  iconBg,
  clickCount,
  onClick,
}: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="group flex w-full items-center gap-3.5 rounded-2xl border border-black/5 bg-white/80 px-4 py-3.5 text-[#1d1d1f] shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] active:translate-y-0 active:scale-[0.98] active:shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] text-lg shadow-sm ${iconBg}`}
      >
        {icon}
      </span>
      <span className="flex-1 text-[15px] font-medium">{label}</span>
      <span className="shrink-0 rounded-full bg-black/[0.04] px-2.5 py-1 text-[12px] font-medium text-[#86868b] transition-colors group-hover:bg-black/[0.06] dark:bg-white/10 dark:text-zinc-400">
        {clickCount}회
      </span>
    </a>
  );
}
