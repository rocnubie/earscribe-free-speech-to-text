"use client";

import { CheckCircle2, ChevronDown, ChevronUp, Cpu, MemoryStick } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import type { DeviceCapability } from "@/lib/device";
import { MODELS, type ModelId } from "@/lib/models";

import { ModelCard } from "./ModelCard";

interface ModelPickerProps {
  selected: ModelId | null;
  /** All models currently downloaded + cached in this browser. */
  cached: readonly ModelId[];
  capability: DeviceCapability | null;
  disabled?: boolean;
  onSelect: (id: ModelId) => void;
  onDelete: (id: ModelId) => Promise<number>;
}

export function ModelPicker({
  selected,
  cached,
  capability,
  disabled = false,
  onSelect,
  onDelete,
}: ModelPickerProps) {
  const t = useTranslations("modelPicker");
  const tm = useTranslations("models");
  const [advanced, setAdvanced] = useState(false);
  const selectedModel = MODELS.find((model) => model.id === selected);

  return (
    <section aria-labelledby="model-picker-heading">
      <header className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2
            id="model-picker-heading"
            className="text-2xl font-semibold tracking-tight text-slate-900"
          >
            {t("title")}
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            {t("subtitle")}
          </p>
        </div>
        {advanced && <DeviceBadge capability={capability} />}
      </header>

      {selectedModel && !advanced && (
        <div className="flex flex-col gap-4 rounded-xl border border-sky-200 bg-sky-50/70 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-slate-900">
                  {tm(`${selectedModel.id}.name`)}
                </h3>
                <span className="rounded-full bg-white px-2 py-0.5 text-xs font-medium text-sky-800 ring-1 ring-sky-200">
                  {cached.includes(selectedModel.id)
                    ? t("cached")
                    : t("recommended")}
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-600">
                {tm(`${selectedModel.id}.tagline`)} {tm(`${selectedModel.id}.pros`)}
              </p>
            </div>
          </div>
          <button
            type="button"
            disabled={disabled}
            onClick={() => setAdvanced(true)}
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-sky-300 bg-white px-3 py-2 text-sm font-medium text-sky-800 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {t("advancedShow")}
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      )}

      {advanced && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {MODELS.map((model) => (
              <ModelCard
                key={model.id}
                model={model}
                selected={selected === model.id}
                cached={cached.includes(model.id)}
                capability={capability}
                disabled={
                  disabled ||
                  (capability?.ramGB != null && capability.ramGB < model.minRamGB)
                }
                onSelect={onSelect}
                onDelete={onDelete}
              />
            ))}
          </div>
          <button
            type="button"
            disabled={disabled}
            onClick={() => setAdvanced(false)}
            className="mx-auto flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {t("advancedHide")}
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>
      )}
    </section>
  );
}

function DeviceBadge({ capability }: { capability: DeviceCapability | null }) {
  const t = useTranslations("modelPicker");
  if (!capability) return null;
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-700">
      <span className="font-medium text-slate-500">{t("deviceCapability")}</span>
      <span className="flex items-center gap-1">
        <Cpu className="h-3.5 w-3.5" />
        {capability.webgpu ? t("webgpuOn") : t("webgpuOff")}
      </span>
      <span className="flex items-center gap-1">
        <MemoryStick className="h-3.5 w-3.5" />
        {capability.ramGB != null
          ? t("memoryReport", { gb: capability.ramGB })
          : t("memoryUnknown")}
      </span>
    </div>
  );
}
