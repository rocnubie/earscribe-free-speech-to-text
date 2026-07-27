"use client";

import {
  AlertTriangle,
  Check,
  Cpu,
  HardDriveDownload,
  Loader2,
  Trash2,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import type { DeviceCapability } from "@/lib/device";
import { formatBytes } from "@/lib/format";
import type { ModelSpec } from "@/lib/models";

interface ModelCardProps {
  model: ModelSpec;
  /** The model the user has currently picked (will run on click). */
  selected: boolean;
  /** The model that's already downloaded + cached in this browser, if any. */
  cached: boolean;
  capability: DeviceCapability | null;
  disabled?: boolean;
  onSelect: (id: ModelSpec["id"]) => void;
  /**
   * Called when the user confirms removal of this model's cached weights
   * from the browser. Should return bytes freed (best-effort).
   */
  onDelete: (id: ModelSpec["id"]) => Promise<number>;
}

function Tier({
  value,
  icon: Icon,
  label,
}: {
  value: number;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1.5" title={label}>
      <Icon className="h-3.5 w-3.5 text-slate-500" />
      <span className="flex gap-0.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className={[
              "h-1.5 w-1.5 rounded-full",
              i < value ? "bg-slate-900" : "bg-slate-200",
            ].join(" ")}
          />
        ))}
      </span>
    </div>
  );
}

type DeleteState =
  | { kind: "idle" }
  | { kind: "confirming" }
  | { kind: "deleting" }
  | { kind: "success"; freed: number }
  | { kind: "error" };

export function ModelCard({
  model,
  selected,
  cached,
  capability,
  disabled = false,
  onSelect,
  onDelete,
}: ModelCardProps) {
  const t = useTranslations("models");
  const tp = useTranslations("modelPicker");
  const [del, setDel] = useState<DeleteState>({ kind: "idle" });

  const block = t.raw(model.id) as {
    name: string;
    tagline: string;
    pros: string;
    cons: string;
  };

  const warnings: string[] = [];
  if (capability && model.preferWebGPU && !capability.webgpu) {
    warnings.push(tp("warningWebgpuMissing"));
  }
  if (capability?.ramGB != null && capability.ramGB < model.minRamGB) {
    warnings.push(
      tp("warningRamLow", {
        available: capability.ramGB,
        required: model.minRamGB,
      }),
    );
  }

  // Visual priority: selected > cached > recommended
  const borderClass = selected
    ? "border-sky-500 ring-2 ring-sky-200"
    : cached
      ? "border-emerald-400"
      : "border-slate-200 hover:border-slate-400";

  const inConfirmFlow =
    del.kind === "confirming" || del.kind === "deleting";

  const handleConfirmYes = async () => {
    setDel({ kind: "deleting" });
    try {
      const freed = await onDelete(model.id);
      setDel({ kind: "success", freed });
      // Fade the success state back to idle after a moment.
      window.setTimeout(() => {
        setDel({ kind: "idle" });
      }, 2200);
    } catch {
      setDel({ kind: "error" });
      window.setTimeout(() => setDel({ kind: "idle" }), 2500);
    }
  };

  return (
    <div
      className={[
        "group relative w-full rounded-xl border bg-white text-left transition-all",
        inConfirmFlow || disabled ? "opacity-70" : "",
        borderClass,
      ].join(" ")}
    >
      <button
        type="button"
        disabled={inConfirmFlow || disabled}
        onClick={() => onSelect(model.id)}
        className="flex w-full flex-col gap-3 rounded-xl p-5 text-left disabled:cursor-not-allowed"
      >
        <div className="absolute right-3 top-3 flex items-center gap-1.5">
          {cached && del.kind === "idle" && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-800">
              <Check className="h-3 w-3" />
              {tp("cached")}
            </span>
          )}
          {model.recommended && !cached && !selected && (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
              {tp("recommended")}
            </span>
          )}
          {selected && del.kind === "idle" && !cached && (
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-white">
              <Check className="h-4 w-4" />
            </span>
          )}
        </div>

        <div className="pr-24">
          <h3 className="text-lg font-semibold text-slate-900">{block.name}</h3>
          <p className="mt-0.5 text-sm text-slate-600">{block.tagline}</p>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-700">
          <Tier value={model.speedTier} icon={Zap} label={tp("speedLabel")} />
          <Tier value={model.accuracyTier} icon={Cpu} label={tp("accuracyLabel")} />
          <span
            className={[
              "inline-flex items-center gap-1",
              cached ? "text-emerald-700" : "text-slate-500",
            ].join(" ")}
          >
            {!cached && <HardDriveDownload className="h-3 w-3" />}
            ~{model.sizeMB} MB
          </span>
        </div>

        <div className="space-y-1 text-sm">
          <p className="text-slate-700">
            <span className="font-medium text-emerald-700">+</span>{" "}
            {t(`${model.id}.pros`)}
          </p>
          <p className="text-slate-700">
            <span className="font-medium text-rose-700">−</span>{" "}
            {t(`${model.id}.cons`)}
          </p>
        </div>

        {cached && del.kind === "idle" && (
          <p className="text-xs italic text-emerald-700">{tp("cachedHint")}</p>
        )}

        {warnings.length > 0 && del.kind === "idle" && (
          <ul className="space-y-1 rounded-lg bg-amber-50 p-3 text-xs text-amber-900">
            {warnings.map((warning) => (
              <li key={warning} className="flex items-start gap-2">
                <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>{warning}</span>
              </li>
            ))}
          </ul>
        )}
      </button>

      {cached && del.kind === "idle" && (
        <button
          type="button"
          aria-label={tp("deleteRemoveAria")}
          title={tp("deleteRemoveAria")}
          onClick={() => setDel({ kind: "confirming" })}
          disabled={disabled}
          className="absolute right-3 top-10 z-10 rounded-md p-1 text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600 disabled:cursor-not-allowed"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      )}

      {/* Delete flow surface (replaces or augments bottom hint) */}
      {del.kind === "confirming" && (
        <div className="mx-5 mb-5 space-y-2 rounded-lg border border-rose-200 bg-rose-50 p-3 text-xs text-rose-900">
          <p className="font-medium">{tp("deleteConfirmQuestion")}</p>
          <p>
            {tp("deleteConfirmHint", { size: `${model.sizeMB} MB` })}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setDel({ kind: "idle" })}
              className="flex-1 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              {tp("deleteConfirmCancel")}
            </button>
            <button
              type="button"
              onClick={() => void handleConfirmYes()}
              className="flex-1 rounded-md bg-rose-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-rose-500"
            >
              {tp("deleteConfirmYes")}
            </button>
          </div>
        </div>
      )}
      {del.kind === "deleting" && (
        <div className="mx-5 mb-5 flex items-center justify-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600">
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
          {tp("deleting")}
        </div>
      )}
      {del.kind === "success" && (
        <div className="mx-5 mb-5 flex items-center justify-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-800">
          <Check className="h-3.5 w-3.5" />
          {tp("deleteSuccess", {
            size: del.freed > 0 ? formatBytes(del.freed) : `${model.sizeMB} MB`,
          })}
        </div>
      )}
      {del.kind === "error" && (
        <div className="mx-5 mb-5 rounded-lg bg-rose-50 px-3 py-2 text-xs text-rose-700">
          {tp("deleteFailed")}
        </div>
      )}

    </div>
  );
}
