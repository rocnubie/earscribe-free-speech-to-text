"use client";

interface ProgressBarProps {
  label: string;
  percent: number;
}

export function ProgressBar({ label, percent }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm text-slate-700">
        <span>{label}</span>
        <span className="tabular-nums text-slate-500">{Math.round(clamped)}%</span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-slate-100"
        role="progressbar"
        aria-valuenow={Math.round(clamped)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-sky-500 transition-[width] duration-200"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
