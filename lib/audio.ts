/**
 * Decode any browser-supported audio file into the 16 kHz mono Float32Array
 * that Whisper expects.
 *
 * We deliberately use OfflineAudioContext for the resample step instead of
 * relying on `new AudioContext({ sampleRate: 16000 })`, because Safari
 * silently ignores the sampleRate hint on some versions.
 */
const TARGET_SAMPLE_RATE = 16_000;

export async function fileToWhisperAudio(file: File): Promise<{
  pcm: Float32Array;
  durationSec: number;
}> {
  const arrayBuffer = await file.arrayBuffer();

  // A throwaway context to decode at the file's native rate.
  const decodeCtx = new (window.AudioContext ||
    (window as unknown as { webkitAudioContext: typeof AudioContext })
      .webkitAudioContext)();
  let decoded: AudioBuffer;
  try {
    decoded = await decodeCtx.decodeAudioData(arrayBuffer);
  } finally {
    await decodeCtx.close().catch(() => {});
  }

  const sourceChannels = decoded.numberOfChannels;
  const sourceRate = decoded.sampleRate;
  const sourceLength = decoded.length;

  // Same rate + mono = skip the offline render.
  if (sourceRate === TARGET_SAMPLE_RATE && sourceChannels === 1) {
    return {
      pcm: decoded.getChannelData(0).slice(),
      durationSec: decoded.duration,
    };
  }

  const targetLength = Math.ceil(
    (sourceLength * TARGET_SAMPLE_RATE) / sourceRate,
  );
  const offline = new OfflineAudioContext(
    1,
    targetLength,
    TARGET_SAMPLE_RATE,
  );
  const src = offline.createBufferSource();
  src.buffer = decoded;
  src.connect(offline.destination);
  src.start();

  const rendered = await offline.startRendering();
  return {
    pcm: rendered.getChannelData(0).slice(),
    durationSec: rendered.duration,
  };
}

export function isLikelyAudioFile(file: File): boolean {
  if (file.type && file.type.startsWith("audio/")) return true;
  // Fallback by extension for files served without a MIME type.
  return /\.(mp3|wav|m4a|aac|ogg|oga|flac|webm|opus)$/i.test(file.name);
}

/**
 * Downsample PCM to a fixed-length peak array suitable for waveform
 * rendering. Returns the max absolute amplitude per bucket, clamped to
 * [0, 1]. ~500 peaks is enough for a wide canvas.
 */
export function computePeaks(pcm: Float32Array, buckets = 600): number[] {
  if (pcm.length === 0 || buckets <= 0) return [];
  const peaks = new Array<number>(buckets).fill(0);
  const samplesPerBucket = Math.max(1, Math.floor(pcm.length / buckets));
  for (let i = 0; i < buckets; i++) {
    let max = 0;
    const start = i * samplesPerBucket;
    const end = Math.min(pcm.length, start + samplesPerBucket);
    for (let j = start; j < end; j++) {
      const v = Math.abs(pcm[j] ?? 0);
      if (v > max) max = v;
    }
    peaks[i] = Math.min(1, max);
  }
  return peaks;
}
