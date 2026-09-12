import type { Transcript } from "@/lib/subtitles";

/**
 * Homepage demo: a real recording and the transcript EarScribe produced for it.
 *
 * The audio is two macOS text-to-speech voices reading a short interview
 * script. `transcript` is the unedited output of EarScribe's pipeline for that
 * file: onnx-community/whisper-base (fp32) with the worker's options (30 s
 * chunks, 5 s stride, segment timestamps), so recognition slips are left in.
 * To swap the sample, replace the MP3, transcribe it in the app and paste the
 * exported JSON here; `peaks` are the per-bar max amplitude of the audio
 * (60 bars, normalized to the loudest bar).
 */
export const DEMO_SAMPLE: {
  src: string;
  fileName: string;
  sizeBytes: number;
  durationSec: number;
  model: string;
  peaks: number[];
  transcript: Transcript;
} = {
  src: "/samples/earscribe-sample.mp3",
  fileName: "earscribe-sample.mp3",
  sizeBytes: 275479,
  durationSec: 34.36,
  model: "Whisper Base",
  peaks: [
    0.74, 0.67, 0.76, 0.67, 0.75, 0.64, 0.64, 0.71, 0.75, 0.49, 0.61, 0.75,
    0.37, 0.62, 0.77, 0.69, 0.91, 0.85, 0.76, 0.81, 0.67, 0.66, 0.9, 0.1,
    0.72, 0.89, 0.68, 0.64, 0.74, 0.79, 0.75, 0.95, 0.8, 0.61, 0.8, 0.91,
    0.78, 0.08, 0.6, 0.6, 0.83, 0.74, 0.67, 0.87, 0.62, 0.76, 0.64, 0.77,
    0.69, 0.96, 0.92, 0.74, 0.81, 0.84, 0.74, 0.76, 0.75, 1, 0.77, 0.02,
  ],
  transcript: {
    text: " Welcome back to the show. Today we're talking with the researcher who studies attention at work. Thanks for having me. The first thing I tell people is that interruptions aren't really the problem. Really? Then what is? Getting back, after a short break, most of us need a few minutes to find our place again. So what actually helps? Before you stop, write down the very next step. One sentence is enough, when you return, you start from that note instead of from memory. One sentence, that simple enough to try this week.",
    chunks: [
      { text: " Welcome back to the show. Today we're talking with the researcher who studies attention at work.", timestamp: [0, 5.2] },
      { text: " Thanks for having me. The first thing I tell people is that interruptions aren't really the problem.", timestamp: [5.7, 11.18] },
      { text: " Really? Then what is?", timestamp: [11.58, 13.58] },
      { text: " Getting back, after a short break, most of us need a few minutes to find our place again.", timestamp: [13.58, 19.02] },
      { text: " So what actually helps?", timestamp: [19.42, 21.42] },
      { text: " Before you stop, write down the very next step.", timestamp: [21.68, 25.2] },
      { text: " One sentence is enough, when you return, you start from that note instead of from memory.", timestamp: [25.2, 31] },
      { text: " One sentence, that simple enough to try this week.", timestamp: [31, 33.8] },
    ],
  },
};
