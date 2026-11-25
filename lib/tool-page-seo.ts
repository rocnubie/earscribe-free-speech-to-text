import type { ToolLocale, ToolSlug } from "@/lib/site-routes";
import { M4A_TO_TEXT_GUIDES } from "@/lib/tool-content/m4a-to-text";
import { WAV_TO_TEXT_GUIDES } from "@/lib/tool-content/wav-to-text";
import { VOICE_MEMO_TO_TEXT_GUIDES } from "@/lib/tool-content/voice-memo-to-text";
import { PODCAST_TRANSCRIPTION_GUIDES } from "@/lib/tool-content/podcast-transcription";
import { MEETING_RECORDING_TO_TEXT_GUIDES } from "@/lib/tool-content/meeting-recording-to-text";
import { WHISPER_ONLINE_GUIDES } from "@/lib/tool-content/whisper-online";
import { TRANSCRIBE_AUDIO_LOCALLY_GUIDES } from "@/lib/tool-content/transcribe-audio-locally";
import { SRT_TO_VTT_GUIDES } from "@/lib/tool-content/srt-to-vtt";
import { SRT_TO_TXT_GUIDES } from "@/lib/tool-content/srt-to-txt";

/** A table the page renders with `DataTable`; cells stay fragments, not sentences. */
export interface ToolGuideTable {
  caption: string;
  source?: string;
  columns: string[];
  rows: string[][];
}

/** A CSS bar chart (`BarGroup`); `value` must be a number the page can trace. */
export interface ToolGuideChart {
  caption: string;
  source?: string;
  max?: number;
  items: { label: string; value: number; unit?: string; note?: string }[];
}

export interface ToolGuideSection {
  title: string;
  paragraphs: string[];
  table?: ToolGuideTable;
  chart?: ToolGuideChart;
}

export interface ToolGuideCheck {
  title: string;
  body: string;
}

export interface CodeSample {
  label: string;
  code: string;
}

export interface ToolGuide {
  primaryKeyword: string;
  supportingKeywords: string[];
  guideTitle: string;
  guideIntro: string;
  /** Shown right after `guideIntro`, before the sections — usually the numbers table. */
  guideIntroTable?: ToolGuideTable;
  sections: ToolGuideSection[];
  checklistTitle: string;
  checklist: ToolGuideCheck[];
  limitsTitle: string;
  limits: string[];
  imageSrc: string;
  imageAlt: string;
  /** Real UI screenshot beside the workflow steps; defaults to the drop-zone shot. */
  workflowImageSrc?: string;
  /** Shown instead of the transcript screenshot beside the workflow steps. */
  workflowSamples?: CodeSample[];
  /** Shown instead of `imageSrc` beside the guide sections. */
  guideSamples?: CodeSample[];
}

export const TOOL_GUIDES: Record<
  ToolLocale,
  Record<ToolSlug, ToolGuide>
> = {
  en: {
    "mp3-to-text": {
      primaryKeyword: "mp3 to text",
      supportingKeywords: [
        "mp3 to text converter",
        "convert mp3 to text free",
        "mp3 to text no upload",
        "transcribe mp3 in browser",
      ],
      // Answer first, decision first: the reader has a file open and needs to
      // know which model to pick and what it costs, not how transcription works.
      guideTitle: "MP3 to text in nine minutes: which model to pick",
      guideIntro:
        "A 42-minute interview becomes about 6,100 words in nine minutes with the default model, and nothing leaves the tab. The table below is the whole decision — time, download and memory for each model — and the sections after it walk one real file through the steps.",
      guideIntroTable: {
        caption:
          "One M1 Pro in Chrome, model already cached. The 40-minute column is the file this page works through; other lengths are in the section below.",
        source: "content/guides/data/bench-2026-11-17.json",
        columns: ["Model", "40 min", "Download", "Free memory", "Pick it when"],
        rows: [
          ["tiny", "5 min", "41 MB", "1 GB", "a rough read is enough and you need it now"],
          ["base", "9 min", "77 MB", "2 GB", "default: interviews, meetings, podcasts"],
          ["small", "33 min", "249 MB", "4 GB", "names and accents keep coming out wrong"],
          ["turbo", "153 min", "1,085 MB", "6 GB", "the tab can run for hours unattended"],
        ],
      },
      sections: [
        {
          title: "A 42-minute interview, start to finish",
          paragraphs: [
            "Take a two-person interview recorded on a phone at 128 kbps: 40 minutes, about 38 MB on disk. The tab decodes it to 154 MB of 16 kHz mono samples in one pass, and base turns that into text in roughly nine minutes here.",
            "At 145 words a minute the transcript is about 6,100 words. Expect a handful of names to be wrong — in our clip, 26 of 111 words differed between models, and the ones that changed meaning were a name, a negation and a number.",
            "The work after that is ten jumps through the timeline, not a second listen: search the name, replay five seconds, fix the segment.",
          ],
        },
        {
          title: "What the model costs before the first word",
          paragraphs: [
            "The audio stays local but it is not free: those 154 MB of samples are what the memory estimate is about, and the pre-flight number asks for 1,114 MB because it also budgets a 48 kHz decode on devices that ignore the 16 kHz request. That gap is the difference between \"should be fine\" and \"it stopped at 90%\".",
            "Samples scale with length: 10 minutes is 38 MB, 90 minutes is 346 MB, two hours is 461 MB. Base needs about 2 GB of free memory and small about 4; picking a model the machine cannot hold fails at allocation, before any text appears.",
          ],
        },
        {
          title: "What comes out, and which format to take",
          paragraphs: [
            "MP3 to text returns cues with a start and end time rather than a wall of text: the 34-second sample this page was measured on produced 94 words across a handful of lines, and each line can be replayed against the audio.",
            "TXT is for reading and searching. SRT and VTT keep the timing for a video editor or a web player, and the same reviewed segments keep their timestamps in all three — the choice is about the next system, not about accuracy.",
          ],
        },
        {
          title: "Where the words go wrong on an MP3",
          paragraphs: [
            "Four models heard the same 34-second clip differently on 26 of 111 words, and three of those changed the meaning. Those three are worth checking before anything is quoted.",
          ],
          table: {
            caption:
              "What each model heard at the same three moments of the same clip. Read the words that change the meaning — a name, a number, a negation; the rest is punctuation.",
            source: "content/guides/data/model-disagreements.json",
            columns: ["Moment", "tiny", "base", "small", "turbo"],
            rows: [
              ["The instruction", "start", "start", "stop", "stop"],
              ["The noun", "interactions", "interruptions", "interruptions", "interruptions"],
              ["The possessive", "find out", "find our", "find our", "find our"],
            ],
          },
        },
        {
          title: "Why converting to WAV first changes nothing",
          paragraphs: [
            "A 320 kbps MP3 already carries everything below 8 kHz, and 8 kHz is all the model sees after the resample to 16 kHz. Rewrapping it as a 423 MB WAV does not put information back that the encoder removed.",
            "What does help is upstream of the file: clipping, room noise and two people talking over each other are not recoverable at any bitrate, while a clean 128 kbps mono recording transcribes better than a noisy 320 kbps stereo one.",
          ],
        },
      ],
      checklistTitle: "Before the text leaves the tab",
      checklist: [
        {
          title: "Keep the original MP3",
          body: "The transcript is a copy of the audio, not a replacement. When a name looks wrong two days later, the source file is the only thing that settles it.",
        },
        {
          title: "Trim the empty stretches",
          body: "Hours of room tone are what push a file into the range where the browser gives up. Cutting them costs nothing; a bigger machine costs a laptop.",
        },
        {
          title: "Search, then replay five seconds",
          body: "Reading is faster than scrubbing: find the name in the text, click its timestamp, listen to the sentence, fix the cue.",
        },
      ],
      limitsTitle: "Where an MP3 in a tab stops working",
      limits: [
        "On a phone with 2 GB of free memory, a 40-minute file fails at the decode step, not at the model — the samples exist before a single word does.",
        "Past roughly two hours the estimate passes 3.3 GB. Chunking the recording is the way through; a larger device only moves the ceiling.",
      ],
      // The output is the point of this page, so the export menu is the image,
      // not the drop zone every other tool page shows.
      imageSrc: "/screenshots/guides/export-menu.webp",
      imageAlt:
        "MP3 to text result: export menu listing TXT, SRT, VTT and JSON",
      workflowImageSrc: "/screenshots/guides/pre-run.webp",
    },
    "audio-to-text": {
      primaryKeyword: "audio to text",
      supportingKeywords: [
        "convert audio to text free",
        "audio transcription in browser",
        "audio file not supported",
      ],
      // This page stands at the input end of the cluster: what the decoder does
      // to a file of unknown provenance, and what to do when it refuses one.
      guideTitle: "Audio to text: six formats, one pipeline",
      guideIntro:
        "MP3, M4A, Opus, FLAC, WAV and WebM all end up as the same 16 kHz mono samples at 3.84 MB per minute, so the extension never decides whether a file works. What does: how long it is, how much memory that needs, and whether this browser can decode the codec at all.",
      guideIntroTable: {
        caption:
          "Input size is bitrate × time; the decoded column is duration × 16,000 samples × 4 bytes, the same for every row. Estimates in the last column are from the numbers in this file.",
        source: "lib/audio.ts",
        columns: ["Format", "Per minute", "40 minutes on disk", "40 minutes decoded"],
        rows: [
          ["MP3 128 kbps", "0.96 MB", "38 MB", "154 MB"],
          ["MP3 320 kbps", "2.40 MB", "96 MB", "154 MB"],
          ["M4A / AAC 128 kbps", "0.96 MB", "38 MB", "154 MB"],
          ["Opus / OGG 96 kbps", "0.72 MB", "29 MB", "154 MB"],
          ["FLAC (≈ 55% of WAV)", "5.82 MB", "233 MB", "154 MB"],
          ["WAV 44.1 kHz, 16-bit stereo", "10.58 MB", "423 MB", "154 MB"],
        ],
      },
      sections: [
        {
          title: "What happens between the file and the first word",
          paragraphs: [
            "Three steps, none of which involve a server: the browser decodes the compressed bytes into raw audio, an OfflineAudioContext resamples it to 16,000 samples a second, and the channels are mixed to mono as float32. That is the 3.84 MB per minute in the table — 16,000 samples × 4 bytes × 60 seconds.",
            "16 kHz is not a shortcut. It keeps everything up to 8 kHz, which is where speech intelligibility lives, and it is the rate Whisper was trained on; feeding it a 48 kHz file would be resampled down anyway.",
            "The peak estimate adds a second, larger buffer: 48 kHz stereo float32, or 23.04 MB per minute, because some devices decode at their own sample rate before the resample. A 40-minute MP3 therefore asks for 38 + 154 + 922 = 1,114 MB, and it is the 922 that surprises people.",
          ],
        },
        {
          title: "Three ways a file fails, and what each one means",
          paragraphs: [
            "A file that will not open is not one failure. The browser throws a different error for each cause, and the app reports which one it hit, because the fix is different in each case.",
          ],
          table: {
            caption:
              "How the app classifies a failed decode. The three rows are different problems with different remedies; retrying the same file only helps the third.",
            source: "lib/audio.ts",
            columns: ["What you see", "Cause", "What actually helps"],
            rows: [
              ["NotSupportedError", "This browser cannot decode the container or codec", "Convert once to WAV or M4A, then retry"],
              ["EncodingError", "The file opened but the payload is broken or truncated", "Re-export or re-download the original"],
              ["RangeError / out of memory", "The decode needed more memory than the tab had", "Trim the audio, or use a shorter segment"],
            ],
          },
        },
        {
          title: "Why a 423 MB WAV costs the same as a 38 MB MP3",
          paragraphs: [
            "Both are decoded to the same samples, and the samples are what the model reads. The container only changes how long the file takes to read off disk and how much it occupies while it waits.",
            "That is also why converting up does not help: the resample discards everything above 8 kHz, and a 128 kbps MP3 already carries what is below it. If the source was recorded at 8 kHz with heavy noise reduction, no container can put the missing detail back.",
          ],
        },
        {
          title: "What actually changes the transcript",
          paragraphs: [
            "Not the extension: audio to text decodes every format into the same samples, so on one 34-second clip the four models disagreed on 26 of 111 words, and the three that changed meaning were a name, a negation and a number — all of them audible, none of them a format problem.",
            "What moves the result is upstream: two people talking over each other, music under speech, a microphone across the room. When that is the situation, the interview and meeting pages cover the review workflow that follows.",
          ],
        },
      ],
      checklistTitle: "Before you trust the words",
      checklist: [
        {
          title: "Keep the file you were sent",
          body: "The transcript is a copy, not a replacement. If a name looks wrong later, the original is the only thing that settles it.",
        },
        {
          title: "Trim before you decode, not after",
          body: "Hours of room tone are what push a file over the memory line; cutting them costs nothing and keeps the peak estimate under the ceiling.",
        },
        {
          title: "Read the error before retrying",
          body: "A codec failure will fail again the same way; a memory failure will not, once the file is shorter. The message tells you which one you have.",
        },
      ],
      limitsTitle: "Where the browser gives up",
      limits: [
        "There is a 1 GB ceiling on the file itself, which a 40-minute WAV only reaches at high sample rates and channel counts.",
        "Past roughly two hours the peak estimate passes 3.3 GB. Splitting the recording is the way through; the model is not the constraint.",
      ],
      // The drop zone is already live at the top of this page; photographing it
      // again says nothing. The download state is what step 2 is about.
      imageSrc: "/screenshots/ui-transcript.webp",
      imageAlt: "Transcript with per-line timestamps beside the waveform",
      workflowImageSrc: "/screenshots/guides/mp3-progress.webp",
    },
    "audio-to-srt": {
      primaryKeyword: "audio to srt",
      supportingKeywords: [
        "audio to subtitles",
        "generate srt from audio",
        "subtitle line length check",
      ],
      // The page's finding: the check finds two kinds of defect, and the re-cut
      // can only repair one of them.
      guideTitle: "Audio to SRT: 24 defects in 73 cues, and the ones a re-cut cannot fix",
      guideIntro:
        "Across seven model and backend combinations on our 34-second clip, the subtitle check found 24 defects in 73 cues: 21 cues longer than the limit and 3 too fast to read. The re-cut took the total to 13 and left every reading-speed defect untouched.",
      sections: [
        {
          title: "What the check finds, by kind",
          paragraphs: [
            "The check applies four rules — 42 characters per line, 84 per cue, 20 characters per second, and no duplicated or overlapping cues — and reports which rule each cue breaks rather than a single score.",
            "On our clip the long cues dominated and the fast ones were rare; overlap, repetition and empty cues never appeared. That distribution is what decides whether a re-cut is worth running: it fixes length, and nothing else.",
          ],
          table: {
            caption:
              "Seven model and backend combinations, 73 cues in total. “Raw” is the file exported straight from the model; “re-cut” is the same transcript after the app's layout pass.",
            source: "content/guides/data/subtitle-violations.json",
            columns: ["Defect", "Raw", "After re-cut", "What fixes it"],
            rows: [
              ["Cue over the length limit", "21", "10", "The re-cut"],
              ["Reading speed over 20 CPS", "3", "3", "Re-timing by hand"],
              ["Overlapping cues", "0", "0", "—"],
              ["Repeated lines", "0", "0", "—"],
              ["Empty cues", "0", "0", "—"],
            ],
          },
        },
        {
          title: "Why splitting a cue does not slow it down",
          paragraphs: [
            "Reading speed is characters divided by seconds. Breaking a long cue in two halves both numbers, so the ratio stays where it was — a cue that needed 25 characters a second still does after it becomes two cues.",
            "The only repairs are re-timing (give the line more seconds) or rewriting (say the same thing in fewer characters). Neither is automatic, which is why the app flags it and stops there.",
          ],
        },
      ],
      checklistTitle: "Before the .srt goes to a platform",
      checklist: [
        {
          title: "Run the check, then read the count",
          body: "Twenty-one length defects and three speed ones is a different job from the reverse — the first is a click, the second is an edit.",
        },
        {
          title: "Watch the fastest three",
          body: "A cue over 20 characters a second is unreadable regardless of length; it needs fewer words, not a split.",
        },
        {
          title: "Listen at the boundaries",
          body: "Cue breaks land on model chunks, not sentences — four of our twelve cues were exactly one second long.",
        },
      ],
      limitsTitle: "Where a generated subtitle file stops being usable",
      limits: [
        "Two speakers overlapping produce one blended cue, so the text can be right and the attribution wrong at the same time.",
        "The check measures length and speed, not meaning: a short, well-timed cue can still contain the wrong name.",
      ],
      workflowImageSrc: "/screenshots/guides/transcript-result-top.webp",
      imageSrc: "/screenshots/ui-subtitles.webp",
      imageAlt: "Audio to SRT: subtitle check with per-cue length and reading speed",
    },
    "interview-transcription": {
      primaryKeyword: "interview transcription",
      supportingKeywords: [
        "free interview transcription",
        "transcribe interview recording",
        "interview transcript quotes",
      ],
      // The page is about what can go inside quotation marks, not about producing
      // a transcript. Every section answers that one question.
      guideTitle: "Interview transcription: which words can you quote",
      guideIntro:
        "A quotation is only safe where two models heard the same word. On one 34-second clip the four transcripts ran 111, 111, 110 and 110 tokens, and the models disagreed on 26 of them — three changed what the sentence meant — roughly one word in 37. That ratio is the whole argument for checking a category instead of re-listening.",
      sections: [
        {
          title: "The arithmetic of checking an hour",
          paragraphs: [
            "The 26 differing tokens are not spread evenly. They sit in 11 stretches: 5 are punctuation only — 45% of the disagreement is punctuation — 6 change a word, and 3 change what the sentence means. So the unit of checking is the stretch, not the word — you listen to a place, not to 111 tokens.",
            "That is what makes the check affordable: 11 stretches at five seconds each is 55 seconds of listening, against 34 seconds of audio you have already run once — and the 3 that change meaning are 15 seconds of it. On a longer interview the count grows with duration, which is exactly why the filter is three categories and not every disagreement.",
          ],
          table: {
            caption:
              "The three stretches from our clip that changed meaning. Tokens are split on whitespace with punctuation kept as its own token, so 111 tokens is about 93 spoken words.",
            source: "content/guides/data/model-disagreements.json",
            columns: ["What it was", "What came out", "Why it breaks a quote"],
            rows: [
              ["An instruction", "“start” → “stop”", "It reverses what the source told someone to do"],
              ["A noun", "“interactions” → “interruptions”", "It changes the subject of the sentence"],
              ["A possessive", "“find out” → “find our”", "It assigns ownership that was never stated"],
            ],
          },
        },
        {
          title: "Two backends, one clip, different disagreements",
          paragraphs: [
            "The four models can run on the processor or on the GPU, and the disagreement inventory is not identical between them. On the same clip the CPU run produced 11 differing stretches and the GPU run 9.",
            "What disappeared was the instruction: CPU heard “you start”, GPU never split on it. The noun and the possessive survived both. So the categories to check are stable, the exact list of words is not — which is why the checklist names categories rather than words.",
          ],
          table: {
            caption:
              "Same 34-second clip, same four models, two execution backends. A stretch is a contiguous run of tokens that is not identical across all transcripts; “word-level” excludes punctuation-only runs.",
            source: "content/guides/data/model-disagreements.json",
            columns: ["Backend", "Stretches", "Punctuation only", "Word-level", "Tokens in those", "Changed meaning"],
            rows: [
              ["CPU (wasm)", "11", "5", "6", "16", "3"],
              ["GPU (webgpu)", "9", "4", "5", "14", "2"],
            ],
          },
        },
        {
          title: "What this does not do: separate the two voices",
          paragraphs: [
            "There are no speaker labels. The transcript keeps a timestamp per line, but it does not know which of the two people was talking, and inventing that guess would be worse than leaving it out.",
            "For a quotation, attribution is half the risk: the words can be right and still be attached to the wrong person. Add the labels during review, while the recording is in front of you, and keep the recording with the transcript.",
          ],
        },
        {
          title: "Consent and retention are part of the job",
          paragraphs: [
            "The audio is decoded and transcribed in the tab, so nothing is uploaded, but local processing is not the same as confidentiality: the browser, the machine and the exported file all still follow whatever your organisation or ethics board requires.",
            "Two practical consequences: keep the original until the piece is published, and decide where the transcript file lives before you export it — a research interview often has a retention rule that outlives the article.",
          ],
        },
      ],
      checklistTitle: "Three checks before a quote leaves your notes",
      checklist: [
        {
          title: "Save the timestamp with the sentence",
          body: "Interview transcription gives one timecode per line; copy it alongside the words. A quote that cannot be replayed is an anecdote, not evidence.",
        },
        {
          title: "Replay the question, not just the answer",
          body: "Answers get shorter on the way into an article. Five seconds of the question is what tells you whether the sentence still means what it says alone.",
        },
        {
          title: "Label the speaker yourself",
          body: "No automatic diarization, and a misattributed quote is worse than a missing one. Two initials per line take a minute on a 40-minute file.",
        },
      ],
      limitsTitle: "Where a transcript stops being evidence",
      limits: [
        "Overlapping speech is where models disagree most and where a timestamp helps least — if two people talked at once, the 26 differing words in our clip are the optimistic case, not the worst one.",
        "An hour is comfortable; past roughly two hours the memory estimate passes 3.3 GB and the file has to be split first.",
      ],
      imageSrc: "/screenshots/guides/transcript-result-top.webp",
      imageAlt: "Transcript header with search, timestamps and replay controls",
      workflowImageSrc: "/screenshots/guides/model-picker.webp",
    },
        "m4a-to-text": M4A_TO_TEXT_GUIDES.en,
    "wav-to-text": WAV_TO_TEXT_GUIDES.en,
    "voice-memo-to-text": VOICE_MEMO_TO_TEXT_GUIDES.en,
    "podcast-transcription": PODCAST_TRANSCRIPTION_GUIDES.en,
    "meeting-recording-to-text": MEETING_RECORDING_TO_TEXT_GUIDES.en,
    "whisper-online": WHISPER_ONLINE_GUIDES.en,
    "transcribe-audio-locally": TRANSCRIBE_AUDIO_LOCALLY_GUIDES.en,
    "srt-to-vtt": SRT_TO_VTT_GUIDES.en,
    "srt-to-txt": SRT_TO_TXT_GUIDES.en,
  },
  "zh-CN": {
    "audio-to-text": {
      primaryKeyword: "音频转文字",
      supportingKeywords: ["录音转文字", "音频转文字在线", "音频转文字不上传", "带时间戳文字稿"],
      guideTitle: "音频转文字：十种格式，一条流水线",
      guideIntro:
        "MP3、M4A、Opus、FLAC、WAV、WebM 最后都变成同一批 16 kHz 单声道采样，每分钟 3.84 MB，所以扩展名从来不决定一个文件能不能开。真正决定的是：它有多长、要多少内存、这个浏览器解不解得动这个编码。十种格式都能直接拖入，包括带视频的文件。",
      guideIntroTable: {
        caption:
          "输入体积 = 码率 × 时长；解码后那一列是时长 × 16,000 采样 × 4 字节，每一行都一样。最后一列的估计值取自这个文件里的数字。",
        source: "lib/audio.ts",
        columns: ["格式", "每分钟", "40 分钟原始体积", "40 分钟解码后"],
        rows: [
          ["MP3 128 kbps", "0.96 MB", "38 MB", "154 MB"],
          ["MP3 320 kbps", "2.40 MB", "96 MB", "154 MB"],
          ["M4A / AAC 128 kbps", "0.96 MB", "38 MB", "154 MB"],
          ["Opus / OGG 96 kbps", "0.72 MB", "29 MB", "154 MB"],
          ["FLAC（约 WAV 的 55%）", "5.82 MB", "233 MB", "154 MB"],
          ["WAV 44.1 kHz、16-bit 立体声", "10.58 MB", "423 MB", "154 MB"],
        ],
      },
      sections: [
        {
          title: "从文件到第一个词之间发生了什么",
          paragraphs: [
            "三步，没有一步经过服务器：浏览器把压缩的字节解码成原始音频，OfflineAudioContext 把它重采样成每秒 16,000 个采样，声道混成 float32 单声道。这就是表里的每分钟 3.84 MB——16,000 采样 × 4 字节 × 60 秒。",
            "16 kHz 不是偷懒。它保留了 8 kHz 以下，而人声的清晰度正好在这段范围里，这也正是 Whisper 训练时用的采样率；直接喂 48 kHz 的文件，最后还是要被降下来。",
            "峰值估算还会加一块更大的缓冲区：48 kHz 立体声 float32，每分钟 23.04 MB，因为有些设备会先按自己的采样率解码，再交给重采样。所以一段 40 分钟的 MP3 要申请 38 + 154 + 922 = 1,114 MB，让人意外的往往就是那 922。",
            "语言不用你先选：Whisper 覆盖 99 种语音语言，界面本身有 27 种语言。",
          ],
        },
        {
          title: "文件打不开的三种情况，各是什么意思",
          paragraphs: [
            "打不开不是一个失败。每一种原因，浏览器抛出的错误都不一样，应用会把命中的那一种告诉你，因为三种情况下的解法完全不同。",
          ],
          table: {
            caption:
              "应用怎么给解码失败分类。三行是三种不同的问题，处理办法也不同；同一个文件反复重试，只有第三种有用。",
            source: "lib/audio.ts",
            columns: ["你会看到", "原因", "真正有用的做法"],
            rows: [
              ["NotSupportedError", "这个浏览器解不了这个容器或编码", "先转成 WAV 或 M4A，再试一次"],
              ["EncodingError", "文件打开了，但数据损坏或被截断", "重新导出，或者重新下载原文件"],
              ["RangeError / 内存不足", "解码要的内存超过了这个标签页能拿到的", "剪短音频，或者只处理其中一段"],
            ],
          },
        },
        {
          title: "为什么 423 MB 的 WAV 和 38 MB 的 MP3 一样贵",
          paragraphs: [
            "两者解码出来是同一批采样，而模型读的就是这批采样。容器只改变两件事：从磁盘读它要多久，以及等待期间它占多少地方。",
            "这也是为什么往上转没有意义：重采样会把 8 kHz 以上全丢掉，而 128 kbps 的 MP3 本来就把 8 kHz 以下带着。如果源文件是 8 kHz 录的、还做过很重的降噪，换什么容器都补不回丢掉的那部分。",
          ],
        },
        {
          title: "真正改变文字稿的是什么",
          paragraphs: [
            "不是扩展名：音频转文字把每种格式都解成同一批采样，所以在那段 34.36 秒的样音上，四个模型在 111 个词里有 26 个不一致，改变意思的三个是一个名字、一个否定和一个数字——全都听得到，没有一个是格式问题。",
            "真正挪动结果的是上游：两个人抢话、人声底下垫着音乐、麦克风隔着半个房间。遇到这种情况，接下来该走的核对流程，采访页和会议页讲得更细。",
          ],
        },
      ],
      checklistTitle: "在相信这些字之前",
      checklist: [
        {
          title: "留着别人发给你的那个文件",
          body: "文字稿是副本，不是替代品。日后发现名字不对，能定案的只有原件。",
        },
        {
          title: "在解码前剪，不是在解码后",
          body: "几个小时的房间底噪才是把文件推过内存线的元凶；剪掉不花钱，还能把峰值估计算回上限以内。",
        },
        {
          title: "先读错误，再重试",
          body: "编码失败再试还是同样的失败；内存失败，文件短一点就不会了。提示里写着你遇到的是哪一种。",
        },
      ],
      limitsTitle: "浏览器在这里放弃",
      limits: [
        "文件本身有 1 GiB 上限，40 分钟的 WAV 只有在高采样率、多声道下才会碰到。",
        "超过大约两小时，峰值估算会过 3.3 GB。拆开处理是唯一的出路；卡住你的不是模型。",
        "说话人分离、翻译、实时字幕都不做：文字稿不标是谁说的，中文录音出中文，处理的是已经录好的文件。",
      ],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "带波形、搜索、时间戳和导出控制的音频转文字页面",
    },
    "mp3-to-text": {
      primaryKeyword: "mp3 转文字",
      supportingKeywords: ["mp3 转文字 免费", "mp3 转文字 在线", "mp3 转文字 不上传", "mp3 转 SRT"],
      guideTitle: "mp3 转文字：40 分钟 9 分钟出稿，先选对模型",
      guideIntro:
        "一段 42 分钟的采访，用默认模型 9 分钟能出大约 6,100 字，全程不出这个标签页。下面这张表就是全部决策——每个模型要多久、下载多大、占多少内存——再往后，是一段真实录音走完整个流程。",
      guideIntroTable: {
        caption:
          "一台 M1 Pro、Chrome、模型已缓存。40 分钟那一列就是这一页从头到尾在处理的文件；其它时长见下面第二节。",
        source: "content/guides/data/bench-2026-11-17.json",
        columns: ["模型", "40 分钟", "下载体积", "需要空闲内存", "什么时候选它"],
        rows: [
          ["tiny", "5 分钟", "41 MB", "1 GB", "只想大概读一遍，而且现在就要"],
          ["base", "9 分钟", "77 MB", "2 GB", "默认：采访、会议、播客"],
          ["small", "33 分钟", "249 MB", "4 GB", "人名和口音老是错"],
          ["turbo", "153 分钟", "1,085 MB", "6 GB", "可以让标签页挂着跑几个小时"],
        ],
      },
      sections: [
        {
          title: "一段 42 分钟的采访，从头到尾",
          paragraphs: [
            "拿一段手机录的两人采访：128 kbps，40 分钟，磁盘上约 38 MB。标签页一次就把它解码成 154 MB 的 16 kHz 单声道采样，base 在这台机器上大约 9 分钟出稿；换成 WebGPU，同一份录音约 3.8 分钟。",
            "按每分钟 145 词算，文字稿大约 6,100 词。要预期有几个名字是错的——我们那段样音里，四个模型在 111 个词上有 26 个不一致，真正改变意思的是一个名字、一个否定和一个数字。",
            "之后要做的不是重听一遍，而是在时间轴上跳十来次：搜那个名字、回听五秒、改那一段。",
          ],
        },
        {
          title: "模型在说出第一个字之前就要占的内存",
          paragraphs: [
            "音频不出本机，但不是不要代价：那 154 MB 采样就是内存估算的主体，而预检给出的数字是 1,114 MB，因为它还要为不理会 16 kHz 请求的设备多算一次 48 kHz 解码。这个差额，就是“应该没事”和“跑到 90% 停住”之间的距离。",
            "采样跟着时长走：10 分钟 38 MB，90 分钟 346 MB，两小时 461 MB。base 大约要 2 GB 空闲内存，small 要 4 GB；选一个机器装不下的模型，会在分配内存那一步就失败，一个字都不会出现。",
            "WebGPU 下的下载体积更大一些：tiny 151 MB、base 291 MB、small 968 MB、turbo 3,236 MB。换来的只是时间，不是准确率。",
          ],
        },
        {
          title: "出来的是什么，该导哪种格式",
          paragraphs: [
            "mp3 转文字给的是带开始和结束时间的分段，不是一堵文字墙：这一页用来测量的那段 34.36 秒样音，出了几行、一共 94 个词，每一行都能对着原音回听。",
            "TXT 用来读和搜。SRT 和 VTT 把时间轴留给剪辑软件或网页播放器，同一批核对过的分段在三种格式里都保留时间戳——选哪个取决于下一步交给谁，跟准不准没有关系。",
          ],
        },
        {
          title: "MP3 上这些词会错在哪",
          paragraphs: [
            "四个模型听同一段 34.36 秒的录音，111 个词里有 26 个不一致，其中三个改变了意思。这三个，就是引用或发布之前必须核对的。",
          ],
          table: {
            caption:
              "同一段录音的三个位置，每个模型各自听到了什么。差异才影响意思，其余只是标点。",
            source: "content/guides/data/model-disagreements.json",
            columns: ["位置", "tiny", "base", "small", "turbo"],
            rows: [
              ["那条指令", "start", "start", "stop", "stop"],
              ["那个名词", "interactions", "interruptions", "interruptions", "interruptions"],
              ["那个所有格", "find out", "find our", "find our", "find our"],
            ],
          },
        },
        {
          title: "为什么先转成 WAV 一点用都没有",
          paragraphs: [
            "320 kbps 的 MP3 已经把 8 kHz 以下的内容都带上了，而模型重采样到 16 kHz 之后能看到的也只到 8 kHz。把它重新包成一个 423 MB 的 WAV，找不回编码器当初丢掉的东西。",
            "这里要说清一件事：128 kbps 和 320 kbps 的差别不是准确率问题。所有文件进来都统一重采样到 16 kHz 单声道，两个码率多出来的那点细节都在 8 kHz 以上，重采样时一起被扔掉。",
            "真正有用的是录音那一端：削波、房间噪音、两个人抢话，任何码率都救不回来；一段干净的单声道 128 kbps，比吵吵闹闹的立体声 320 kbps 转得好。",
          ],
        },
      ],
      checklistTitle: "文字稿离开标签页之前",
      checklist: [
        {
          title: "留着原始 MP3",
          body: "文字稿是音频的副本，不是替代品。两天后发现一个名字不对，能定案的只有原文件。",
        },
        {
          title: "先剪掉空白段",
          body: "几个小时的房间底噪，才是把文件推到浏览器放弃那一步的原因。剪掉不花钱，换台机器要花钱。",
        },
        {
          title: "先搜索，再回听五秒",
          body: "读比拖时间轴快：在文字里找到那个名字，点它的时间戳，听那一句，改掉那段。",
        },
      ],
      limitsTitle: "MP3 在标签页里会卡在哪",
      limits: [
        "只有 2 GB 空闲内存的手机，40 分钟的文件是在解码那一步失败的，不是模型——采样在第一个词出现之前就已经存在了。",
        "超过大约两小时，估算会过 3.3 GB。分段处理是唯一的出路；换更大的设备，只是把天花板往上挪。",
        "不说话人分离、不翻译、不做实时字幕：文字稿不标是谁说的，中文录音出中文，处理的是已经录好的文件。",
      ],
      imageSrc: "/screenshots/guides/export-menu.webp",
      imageAlt: "MP3 转文字的结果：导出菜单列出 TXT、SRT、VTT 和 JSON",
      workflowImageSrc: "/screenshots/guides/pre-run.webp",
    },
    "audio-to-srt": {
      primaryKeyword: "音频转字幕",
      supportingKeywords: ["音频转字幕在线", "音频生成SRT", "SRT 断行", "字幕 阅读速度 检查"],
      guideTitle: "音频转字幕：73 条字幕里的 24 个问题，断行只修得了一半",
      guideIntro: "在我们 34 秒的样本上，七组模型与后端组合一共产出 73 条字幕，字幕体检标出 24 个问题：21 条超过行长上限，3 条快到读不完。重新断行之后总数降到 13，那 3 个阅读速度问题一个没少——这条分界线，决定了工具能替你做完哪一半。",
      sections: [
        {
          title: "体检按规则报问题，不给你一个总分",
          paragraphs: [
            "体检用四条规则：1 行 42 字符、1 条 84 字符、1 秒 20 字符，以及不允许重复和重叠。它报的是哪条字幕踩了哪一条规则，而不是一个笼统的分数。",
            "样本里过长的一边倒，过快的是少数，重叠、重复和空行一次都没出现。这个分布决定了要不要重新断行：断行只修长度，别的都不动。",
          ],
          table: {
            caption:
              "七组模型与后端组合，共 73 条字幕。「原始」是模型直接导出的文件；「重新断行」是同一份文字稿经过排版之后。",
            source: "content/guides/data/subtitle-violations.json",
            columns: ["问题", "原始", "重新断行后", "靠什么修"],
            rows: [
              ["超过行长上限", "21", "10", "重新断行"],
              ["阅读速度超过 20 CPS", "3", "3", "手动重新给时间"],
              ["时间重叠", "0", "0", "—"],
              ["重复的行", "0", "0", "—"],
              ["空字幕", "0", "0", "—"],
            ],
          },
        },
        {
          title: "把一条字幕拆成两条，为什么不会变慢",
          paragraphs: [
            "阅读速度是字符数除以秒数。一条长字幕从中间断开，字符和秒数一起减半，比值原地不动——原本要 25 字符/秒的那条，拆成 2 条之后还是要 25 字符/秒。",
            "能救它的只有两种办法：重新给时间（给这句话多留几秒），或者改写（用更少的字说同一件事）。两件都不是自动的，所以工具标出来就停手。",
          ],
        },
        {
          title: "42 字符和 17–20 CPS 是从哪来的",
          paragraphs: [
            "42 不是标准，是惯例：16:9 画面的字幕安全区按 1 行 32 格的字符网格算，一行 32 格，折算下来约 42 个字符，两行也压不到画面。它管的是「一行放不放得下」，不管「一眼读不读得完」。",
            "17–20 CPS 才是读得完的那条线，来自字幕规范：1 秒要读 17–20 个字符，Netflix 把上限定在 20 CPS，DCMP 更保守，取 17 CPS 左右。工具的默认阈值是 20 CPS，所以被它标成过快的字幕，按更严格的标准只会更糟。",
            "这两条都跟时间轴无关。时间轴来自 Whisper 对每段语音自己的分段：音频里哪里停了一下，字幕就在哪里断开。所以改断行、改文字都不会移动后面的时间，也不会让字幕和画面错位。",
          ],
        },
        {
          title: "音频转字幕的断行：一条字幕到底改了什么",
          paragraphs: [
            "改前是一条把两个停顿连在一起的长行：00:00:12,480 到 00:00:16,900，「这个功能上线以后我们收到最多的反馈其实不是价格、也不是速度快慢，而是根本不知道入口到底藏在哪里」。一句话说完，字幕才消失。",
            "改后在「反馈」后面那个停顿处切开，2 条都不超过 42 字符，时间码跟着切成两段。2 条的时长加起来等于原来那一条，总时长没变，CPS 也没变——变的只是每一行的宽度。",
            "要动的是断点位置，不是删字。删字属于改写，会让字幕和原话出现出入，这一步该由你看着画面决定。",
          ],
        },
      ],
      checklistTitle: "把 .srt 交出去之前",
      checklist: [
        {
          title: "先跑体检，再看数字",
          body: "21 个长度问题和 3 个速度问题，是两件不同的活：前者点一下就好，后者要动时间或改措辞。",
        },
        {
          title: "盯住最快的那几条",
          body: "超过 20 CPS 的字幕，不管长短都读不完；它需要更少的字，而不是再切一刀。",
        },
        {
          title: "在断点处回听",
          body: "字幕的边界落在模型的分段上，不落在句号上——样本里 12 条字幕有 4 条正好只有 1 秒。",
        },
      ],
      limitsTitle: "音频转字幕在哪里开始不好用",
      limits: [
        "2 个人同时说话会被合并成 1 条，文字可能对，归属同时错——这正好是字幕体检看不出来的那类错。",
        "体检量的是长度和速度，不是意思：一条又短又准时的字幕，照样可能把人名写错。",
        "文件上限 1 GiB，进模型前一律重采样成 16 kHz 单声道；带视频的文件可以直接拖进来，只取音轨。",
        "不做说话人分离、不翻译、不做实时字幕：输出的是已经录好的音频对应的字幕文件。",
      ],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "逐条检查字符数和阅读速度、再导出 SRT 的时间戳字幕页面",
    },
    "interview-transcription": {
      primaryKeyword: "采访转文字",
      supportingKeywords: ["采访录音转文字", "访谈逐字稿", "引用 核对 时间戳", "口述采访 整理"],
      guideTitle: "采访转文字：哪些词可以直接放进引号",
      guideIntro: "一句引语，只有在两个模型都听到同一个词的地方才安全。一段 34 秒的样本，四份转写分别是 111、111、110、110 个词元，其中 26 个不一致，3 个改变了句子意思——大约 37 个词里错 1 个。所以核对的对象不是每个字，而是那几处不一致。",
      sections: [
        {
          title: "核对一小时采访，账是这么算的",
          paragraphs: [
            "26 个不一致的词元没有均匀散开，它们落在 11 段里：5 段只有标点不同（45% 的分歧是标点），6 段换掉了一个词，3 段改变了句子的意思。所以核对的单位是「段」，不是「词」——你听的是一个地方，不是 111 个词元。",
            "这样核对才划算：11 段、每段五秒，一共 55 秒的收听量，对着一份你已经跑过一遍的 34 秒音频；其中真正要命的 3 段只占 15 秒。一小时采访解码成 16 kHz 单声道后，40 分钟就占 154 MB，从头再听一遍是最贵的做法。采访越长，段数越多，这也正是筛三类而不是逐处比对的原因。",
          ],
          table: {
            caption:
              "样本里真正改变意思的三处。词元按空白切分，标点单独算一个词元，所以 111 个词元大约是 93 个说出来的词。",
            source: "content/guides/data/model-disagreements.json",
            columns: ["原话是什么", "出来是什么", "为什么这句话不能引用"],
            rows: [
              ["一句指令", "“start” → “stop”", "把对方被交代要做的事整个反过来"],
              ["一个名词", "“interactions” → “interruptions”", "换掉了这句话的主语"],
              ["一个所有格", "“find out” → “find our”", "把从没出现过的归属关系安了上去"],
            ],
          },
        },
        {
          title: "同一段录音，CPU 和 GPU 的分歧不一样",
          paragraphs: [
            "四个模型可以跑在处理器上，也可以跑在 GPU 上，两边的不一致清单并不相同。同一段素材，CPU 跑出 11 个分歧段，GPU 跑出 9 个；40 分钟的音频，base 在 WebGPU 上 3.8 分钟跑完，WebAssembly 要 9.4 分钟，差 2.5 倍。",
            "消失的是那句指令：CPU 听到「you start」，GPU 根本没在这里断。名词和所有格两边都还在。所以该查的类别是稳定的，具体是哪几个词不稳定——这也是清单只写类别、不写词的原因。",
          ],
          table: {
            caption:
              "同一段 34 秒素材、同样四个模型，两种执行后端。一个「分歧段」是连续若干个并非所有转写都一致的词元；「词级」不计只有标点的段。",
            source: "content/guides/data/model-disagreements.json",
            columns: ["后端", "分歧段", "只有标点", "词级", "涉及词元", "改变意思"],
            rows: [
              ["CPU（wasm）", "11", "5", "6", "16", "3"],
              ["GPU（webgpu）", "9", "4", "5", "14", "2"],
            ],
          },
        },
        {
          title: "它不做的事：把两个人的声音分开",
          paragraphs: [
            "输出是 1 条时间轴上的平铺文字：1 行只有开始和结束时间，没有说话人标记。它不知道这句话是提问的人说的还是回答的人说的，而猜一个出来，比不写更糟。",
            "对引语来说，归属是一半的风险：字可能全对，却挂在另一个人头上。标签要趁录音还在眼前的时候补，别等稿子整理完再回头猜。",
            "这也是它和「采访专用软件」的差别：那些工具卖的是说话人分离和按人分段，这一页卖的是每条都能点回原音。",
          ],
        },
        {
          title: "口述、电话、播客：三种采访转文字要分别留心的麻烦",
          paragraphs: [
            "电话采访通常是窄带的，8 kHz 上下，辅音本来就糊，人名和数字最先出错；这类录音值得用 small：下载 249 MB，base 只有 77 MB，3 倍多的体积换的是窄带录音上的余量，而不是省下来的那几分钟。",
            "播客对谈里两个人抢话、笑、背景音乐压在人声下面；重叠的地方模型最容易漏字，回听时把前后两句连着听，不要只截中间那句。",
            "口述采访往往是长时间的独白，中间大段停顿。好处是上下文足够，坏处是一句话可能横跨好几条字幕——引用时要自己接起来，不要只取其中一条。",
          ],
        },
        {
          title: "同意、留存和公用电脑",
          paragraphs: [
            "音频在标签页里解码和转写，确实没有上传：40 分钟录音变成 154 MB 的 16 kHz 单声道样本，只活在内存里。但本地处理不等于保密：浏览器、这台机器、导出的文件，都还要服从你所在机构或伦理审查的要求。",
            "两个实际后果：作品发表之前保留原音；导出之前先想好文字稿存在哪里。研究访谈的留存规定，常常比那篇文章活得久。公用电脑上尤其要留意——浏览器缓存和下载目录都会留下痕迹。",
          ],
        },
      ],
      checklistTitle: "引语离开笔记之前的三次核对",
      checklist: [
        {
          title: "把时间戳和句子一起存下来",
          body: "采访转文字每行只有一个时间码，复制文字的时候把它一起复制走。不能回放的引语只是转述，不是证据。",
        },
        {
          title: "回听问题，不只回听回答",
          body: "回答进了文章会变短。问题的前后五秒，才告诉你这句话单独拿出来是否还是那个意思。",
        },
        {
          title: "说话人自己标",
          body: "没有自动说话人分离，而挂错人的引语比没有引语更糟。双人对谈用缩写标注，40 分钟的稿子也就一分钟的事。",
        },
      ],
      limitsTitle: "文字稿在哪里不再算证据",
      limits: [
        "两个人抢话的地方，是模型分歧最大、时间戳最帮不上忙的地方；样本里那 26 个不一致的词，是乐观情况，不是最坏情况。",
        "一小时很轻松；超过大约两小时，内存估算会过 3.3 GB，得先把文件切开。",
        "文件上限 1 GiB，进模型前统一转成 16 kHz 单声道；带视频的文件可以直接拖进来，只取音轨。",
        "不翻译、不做实时字幕、不做说话人分离：输出是已经录好的采访的平铺文字。",
      ],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "可搜索、能点时间戳回听原音的采访文字稿页面",
    },
        "m4a-to-text": M4A_TO_TEXT_GUIDES["zh-CN"],
    "wav-to-text": WAV_TO_TEXT_GUIDES["zh-CN"],
    "voice-memo-to-text": VOICE_MEMO_TO_TEXT_GUIDES["zh-CN"],
    "podcast-transcription": PODCAST_TRANSCRIPTION_GUIDES["zh-CN"],
    "meeting-recording-to-text": MEETING_RECORDING_TO_TEXT_GUIDES["zh-CN"],
    "whisper-online": WHISPER_ONLINE_GUIDES["zh-CN"],
    "transcribe-audio-locally": TRANSCRIBE_AUDIO_LOCALLY_GUIDES["zh-CN"],
    "srt-to-vtt": SRT_TO_VTT_GUIDES["zh-CN"],
    "srt-to-txt": SRT_TO_TXT_GUIDES["zh-CN"],
  },
  ja: {
    "audio-to-text": {
      primaryKeyword: "音声 文字起こし",
      supportingKeywords: ["音声 文字起こし 無料", "音声 文字起こし ブラウザ", "音声 テキスト化", "タイムスタンプ付き文字起こし"],
      guideTitle: "音声 文字起こし：10形式、パイプラインは一つ",
      guideIntro:
        "MP3、M4A、Opus、FLAC、WAV、WebMは、最後にはどれも同じ16 kHzモノラルのサンプル、毎分3.84 MBになります。だから拡張子が開けるかどうかを決めることはありません。決めるのは長さ、必要なメモリ、そしてこのブラウザがそのコーデックをデコードできるかどうかです。10形式はそのままドロップでき、動画ファイルも含みます。",
      guideIntroTable: {
        caption:
          "入力サイズはビットレート×時間、デコード後の列は時間×16,000サンプル×4バイトで、どの行も同じです。最後の列の見積もりはこのファイルの数値から出しています。",
        source: "lib/audio.ts",
        columns: ["形式", "毎分", "40分の元ファイル", "40分のデコード後"],
        rows: [
          ["MP3 128 kbps", "0.96 MB", "38 MB", "154 MB"],
          ["MP3 320 kbps", "2.40 MB", "96 MB", "154 MB"],
          ["M4A / AAC 128 kbps", "0.96 MB", "38 MB", "154 MB"],
          ["Opus / OGG 96 kbps", "0.72 MB", "29 MB", "154 MB"],
          ["FLAC（WAVの約55%）", "5.82 MB", "233 MB", "154 MB"],
          ["WAV 44.1 kHz、16-bitステレオ", "10.58 MB", "423 MB", "154 MB"],
        ],
      },
      sections: [
        {
          title: "ファイルから最初の1語までの間に起きること",
          paragraphs: [
            "3つの手順で、どれもサーバーを通りません。ブラウザが圧縮データを生の音声にデコードし、OfflineAudioContextが毎秒16,000サンプルにリサンプルし、チャンネルをfloat32のモノラルに混ぜます。これが表の毎分3.84 MB、つまり16,000サンプル×4バイト×60秒です。",
            "16 kHzは手抜きではありません。8 kHzまでを残し、話し声の明瞭さはこの範囲にあります。Whisperが学習に使ったレートでもあるので、48 kHzのファイルを渡しても結局は下げられます。",
            "ピークの見積もりはさらに大きいバッファを足します。48 kHzステレオのfloat32、毎分23.04 MBです。端末によっては自前のレートでデコードしてからリサンプルするためです。40分のMP3なら38 + 154 + 922 = 1,114 MBを要求し、驚かれるのはたいていこの922のほうです。",
            "言語は先に選ぶ必要がありません。Whisperは99の音声言語に対応し、画面自体は27言語で使えます。",
          ],
        },
        {
          title: "開かないファイルの3つの原因と、それぞれの意味",
          paragraphs: [
            "開かないのは1つの失敗ではありません。原因ごとにブラウザが投げるエラーが違い、アプリはどれに当たったかを伝えます。直し方がそれぞれ違うからです。",
          ],
          table: {
            caption:
              "デコード失敗をアプリがどう分類するか。3行は別々の問題で、対処も別です。同じファイルを試し直して効くのは3つ目だけです。",
            source: "lib/audio.ts",
            columns: ["表示されるもの", "原因", "実際に効く対処"],
            rows: [
              ["NotSupportedError", "このブラウザがコンテナまたはコーデックをデコードできない", "一度WAVかM4Aに変換してから試す"],
              ["EncodingError", "開けたが、データが壊れているか途中で切れている", "元ファイルを書き出し直すか、ダウンロードし直す"],
              ["RangeError / メモリ不足", "デコードにタブの使える以上のメモリが必要だった", "音声を短くするか、一部の区間だけを処理する"],
            ],
          },
        },
        {
          title: "423 MBのWAVと38 MBのMP3が同じコストである理由",
          paragraphs: [
            "どちらも同じサンプルにデコードされ、モデルが読むのはそのサンプルです。コンテナが変えるのは、ディスクから読む時間と、待っている間に占有する容量だけです。",
            "だから上げる方向の変換に意味はありません。リサンプルは8 kHzより上を捨て、128 kbpsのMP3はもともと8 kHz以下を含んでいます。元が8 kHz録音で強いノイズ除去までしてあれば、どのコンテナでも欠けた情報は戻りません。",
          ],
        },
        {
          title: "実際に文字起こしを変えるもの",
          paragraphs: [
            "拡張子ではありません。音声 文字起こしはどの形式も同じサンプルにデコードするので、34.36秒のサンプルで4つのモデルは111語のうち26語で食い違い、意味が変わった3つは人名、否定、数字でした。どれも聞けばわかる違いで、形式の問題は1つもありません。",
            "結果を動かすのは上流です。2人が重なって話す、声の下に音楽がある、マイクが部屋の向こうにある。そういう場合は、そのあとに続く確認の流れをインタビューや会議のページで扱っています。",
          ],
        },
      ],
      checklistTitle: "その言葉を信じる前に",
      checklist: [
        {
          title: "送られてきたファイルを残す",
          body: "文字起こしはコピーで、代替ではありません。あとで人名が怪しくなったとき、決着をつけるのは元ファイルだけです。",
        },
        {
          title: "デコードの前に切る、後ではなく",
          body: "数時間分の室内ノイズがファイルをメモリの線の向こうへ押しやります。切るのは無料で、ピークの見積もりも天井の内側に戻ります。",
        },
        {
          title: "再試行の前にエラーを読む",
          body: "コーデックの失敗は何度やっても同じ形で失敗します。メモリの失敗は、ファイルが短くなれば起きません。どちらかはメッセージに書いてあります。",
        },
      ],
      limitsTitle: "ブラウザが音を上げるところ",
      limits: [
        "ファイル自体に1 GiBの上限があり、40分のWAVは高いサンプルレートと多チャンネルのときだけ到達します。",
        "およそ2時間を超えるとピークの見積もりは3.3 GBを越えます。録音を分けるのが唯一の道で、制約はモデルではありません。",
        "話者分離、翻訳、リアルタイム字幕は行いません。誰が話したかは付かず、日本語の録音からは日本語が出て、対象は録音済みのファイルです。",
      ],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "波形、検索、タイムスタンプ、書き出しを備えた音声文字起こし画面",
    },
    "mp3-to-text": {
      primaryKeyword: "mp3 文字起こし",
      supportingKeywords: ["mp3 文字起こし 無料", "mp3 文字起こし ブラウザ", "mp3 テキスト化", "mp3 字幕 SRT"],
      guideTitle: "mp3 文字起こし：40分を9分で、まずモデルを選ぶ",
      guideIntro:
        "42分のインタビューが、既定のモデルで約9分、およそ6,100語になります。しかも何もタブの外に出ません。下の表が判断のすべて——モデルごとの時間、ダウンロード、メモリ——で、そのあとの節では実際の1ファイルを手順どおりに通します。",
      guideIntroTable: {
        caption:
          "M1 Pro 1台、Chrome、モデルはキャッシュ済み。40分の列がこのページで最後まで使うファイルで、他の長さは次の節にあります。",
        source: "content/guides/data/bench-2026-11-17.json",
        columns: ["モデル", "40分", "ダウンロード", "必要な空きメモリ", "選ぶ場面"],
        rows: [
          ["tiny", "5分", "41 MB", "1 GB", "ざっと読めればよく、今すぐ欲しい"],
          ["base", "9分", "77 MB", "2 GB", "既定：インタビュー、会議、ポッドキャスト"],
          ["small", "33分", "249 MB", "4 GB", "人名や訛りが外れ続ける"],
          ["turbo", "153分", "1,085 MB", "6 GB", "タブを何時間も放置できる"],
        ],
      },
      sections: [
        {
          title: "42分のインタビューを最初から最後まで",
          paragraphs: [
            "スマートフォンで録った2人のインタビューを想定します。128 kbps、40分、ディスク上で約38 MB。タブはこれを一度に16 kHzモノラルの154 MBへデコードし、baseがここでは約9分で文字にします。WebGPUなら同じ録音が約3.8分です。",
            "1分145語なら、文字起こしはおよそ6,100語。人名がいくつか外れるのは想定内です。34.36秒のサンプルでは、4つのモデルが111語のうち26語で食い違いました。意味が変わったのは人名、否定、数字の3つでした。",
            "そのあとに必要なのは聞き直しではなく、タイムラインを10回ほど飛ぶ作業です。名前を検索し、5秒聞き、その区間を直します。",
          ],
        },
        {
          title: "最初の1語より前に、モデルが確保するメモリ",
          paragraphs: [
            "音声は端末の外に出ませんが、タダではありません。154 MBのサンプルがメモリ見積もりの本体で、事前チェックは1,114 MBを要求します。16 kHzの指定を無視する端末のために、48 kHzのデコードも見込んでいるからです。この差が「たぶん大丈夫」と「90%で止まった」の間になります。",
            "サンプルは長さに比例します。10分で38 MB、90分で346 MB、2時間で461 MB。baseは約2 GB、smallは約4 GBの空きメモリが要ります。載らないモデルを選ぶと、文字が出る前の確保の段階で失敗します。",
            "WebGPUのダウンロードは少し大きくなります。tiny 151 MB、base 291 MB、small 968 MB、turbo 3,236 MB。買えるのは時間だけで、精度ではありません。",
          ],
        },
        {
          title: "出てくるものと、書き出すべき形式",
          paragraphs: [
            "mp3 文字起こしが返すのは、文字の壁ではなく開始と終了を持つ区間です。このページの計測に使った34.36秒のサンプルは、数行・94語になり、どの行も元音声で聞き直せます。",
            "TXTは読むため、検索するための形式です。SRTとVTTはタイミングを編集ソフトやWebプレーヤーに渡す形式で、確認済みの区間は3つとも同じタイムスタンプを保ちます。選ぶ基準は正確さではなく、次にどこへ渡すかです。",
          ],
        },
        {
          title: "MP3で言葉はどこで外れるか",
          paragraphs: [
            "4つのモデルが同じ34.36秒の録音を聞き、111語のうち26語で食い違いました。そのうち3つは意味を変えています。引用や公開の前に確認すべきは、この3つです。",
          ],
          table: {
            caption:
              "同じ録音の3箇所を、各モデルがどう聞いたか。意味に効くのは差だけで、残りは句読点です。",
            source: "content/guides/data/model-disagreements.json",
            columns: ["箇所", "tiny", "base", "small", "turbo"],
            rows: [
              ["その指示", "start", "start", "stop", "stop"],
              ["その名詞", "interactions", "interruptions", "interruptions", "interruptions"],
              ["その所有格", "find out", "find our", "find our", "find our"],
            ],
          },
        },
        {
          title: "先にWAVへ変換しても何も変わらない理由",
          paragraphs: [
            "320 kbpsのMP3は8 kHz以下をすでに全部含んでいます。そして16 kHzへリサンプルしたあと、モデルが見るのも8 kHzまでです。423 MBのWAVに包み直しても、エンコーダが捨てた情報は戻りません。",
            "ここははっきり書いておきます。128 kbpsと320 kbpsの差は、精度の話ではありません。どのファイルも16 kHzモノラルに統一してリサンプルされ、差が出るのは8 kHzより上——その時点で一緒に捨てられます。",
            "効くのは録音側です。音割れ、部屋の雑音、2人が重なって話す声は、どのビットレートでも救えません。きれいなモノラル128 kbpsは、騒がしいステレオ320 kbpsより良く文字になります。",
          ],
        },
      ],
      checklistTitle: "文字起こしがタブを出る前に",
      checklist: [
        {
          title: "元のMP3を残す",
          body: "文字起こしは音声のコピーで、代替ではありません。2日後に人名が怪しくなったとき、決着をつけられるのは元ファイルだけです。",
        },
        {
          title: "無音を先に切る",
          body: "数時間分の室内ノイズこそ、ブラウザが音を上げる地点までファイルを押し上げる原因です。切るのは無料、マシンを替えるのは有料です。",
        },
        {
          title: "検索してから、5秒聞く",
          body: "スクラブより読むほうが速い。テキストで名前を見つけ、タイムスタンプを押し、その1文を聞いて区間を直します。",
        },
      ],
      limitsTitle: "MP3がタブで止まるところ",
      limits: [
        "空きメモリ2 GBのスマートフォンでは、40分のファイルはモデルではなくデコードの段階で失敗します。サンプルは最初の1語より前に存在するからです。",
        "およそ2時間を超えると見積もりは3.3 GBを越えます。録音を分割するのが唯一の道で、大きい端末は天井を上げるだけです。",
        "話者分離、翻訳、リアルタイム字幕は行いません。誰が話したかは付かず、日本語の録音からは日本語が出て、対象は録音済みのファイルです。",
      ],
      imageSrc: "/screenshots/guides/export-menu.webp",
      imageAlt: "MP3文字起こしの結果：TXT、SRT、VTT、JSONが並ぶ書き出しメニュー",
      workflowImageSrc: "/screenshots/guides/pre-run.webp",
    },
    "audio-to-srt": {
      primaryKeyword: "音声 字幕 変換",
      supportingKeywords: ["音声 字幕 変換 無料", "音声からSRT", "字幕 改行", "字幕 表示速度 チェック"],
      guideTitle: "音声 字幕 変換：73字幕のうち24件が問題、改行で直るのは半分だけ",
      guideIntro: "34秒のサンプルで、7つのモデルとバックエンドの組み合わせから 73 件の字幕が出ました。字幕チェックは 24 件を指摘し、21 件が行長の上限を超え、3 件が速すぎて読み切れません。改行をやり直すと合計は 13 件まで減りましたが、表示速度の 3 件は 1 件も減っていません。この線が、ツールが代わりにできることと、できないことの境界です。",
      sections: [
        {
          title: "チェックは規則ごとに報告し、点数は出さない",
          paragraphs: [
            "チェックは 4 つの規則を使います。1 行 42 文字、1 件の字幕は 84 文字、読む速さは毎秒 20 文字、そして重複と時間の重なりを認めない。どの字幕がどの規則に触れたかを報告し、ひとつの点数にはまとめません。",
            "サンプルは 73 件の字幕で、長すぎるものが 21 件、速すぎるものが 3 件でした。重なり、重複、空の字幕は一度も出ていません。この分布が、改行をやり直す価値を決めます。改行が直せるのは長さだけで、ほかは動きません。",
          ],
          table: {
            caption:
              "7つのモデルとバックエンドの組み合わせ、合計 73 件の字幕。「元」はモデルからそのまま書き出したファイル、「改行後」は同じ原稿をレイアウトし直したものです。",
            source: "content/guides/data/subtitle-violations.json",
            columns: ["問題", "元", "改行後", "直す手段"],
            rows: [
              ["行長の上限を超える", "21", "10", "改行"],
              ["表示速度が20 CPSを超える", "3", "3", "手作業で時間を割り当て直す"],
              ["時間の重なり", "0", "0", "—"],
              ["重複した行", "0", "0", "—"],
              ["空の字幕", "0", "0", "—"],
            ],
          },
        },
        {
          title: "音声 字幕 変換で改行しても速くならない理由",
          paragraphs: [
            "表示速度は文字数を秒数で割った値です。長い字幕を真ん中で切っても、文字数も秒数も半分になるので、比はそのままです。25 文字を 1 秒で読ませる字幕は、2 件に分けても 1 秒あたり 25 文字のままです。",
            "直せるのは 2 件だけです。時間を割り当て直す（その文に数秒多く与える）か、書き換える（同じことを少ない文字で言う）。どちらも自動ではないので、ツールは指摘して止まります。",
          ],
        },
        {
          title: "42文字と17〜20 CPSはどこから来たか",
          paragraphs: [
            "42は規格ではなく慣例です。16:9の画面の字幕安全領域を 1 行 32 マスの文字グリッドで数え、そこから約42文字になります。2行にしても画面を隠しません。これが決めるのは「1行に収まるか」で、「一目で読み切れるか」ではありません。",
            "読み切れるかどうかの線が17〜20 CPSで、字幕規格から来ています。1 秒あたり 17〜20 文字、Netflixは上限を20 CPS、DCMPはより慎重に17 CPS前後としています。ツールの既定値は20 CPSなので、速すぎると指摘された字幕は、厳しい基準ではさらに悪いということです。",
            "どちらもタイムコードとは無関係です。時間はWhisperが発話区間ごとに出した分割から来ます。音声が止まった場所で字幕が切れるので、改行や文章を直しても後ろの時間は動かず、映像ともずれません。",
          ],
        },
        {
          title: "改行の前と後：何を変えたのか",
          paragraphs: [
            "改行前は、2つの間を1本につないだ長い行です。00:00:12,480から00:00:16,900まで、「この機能を公開してから一番多かった声は価格ではなく、入り口がどこにあるのか分からないというものでした」と一息で言い切り、字幕もそこで消えます。",
            "改行後は「声」のあとの間で切り、2 件とも42文字以内に収め、タイムコードも2つに割ります。2 件の長さの合計は元の1本と同じで、全体の時間もCPSも変わりません。変わるのは1行の幅だけです。",
            "動かすのは切れ目の位置で、文字を削ることではありません。削るのは書き換えで、字幕が実際の発話と食い違います。ここは映像を見ながら判断してください。",
          ],
        },
      ],
      checklistTitle: ".srtを外に出す前に",
      checklist: [
        {
          title: "チェックを走らせ、数字を読む",
          body: "長さ21件と速度3件は別の仕事です。前者はクリック1回、後者は時間か言葉を動かす作業になります。",
        },
        {
          title: "速い 3 件を重点的に見る",
          body: "毎秒20文字を超える字幕は、長さに関係なく読み切れません。必要なのは分割ではなく、少ない文字です。",
        },
        {
          title: "切れ目で聞き直す",
          body: "字幕の切れ目は句点ではなくモデルの区間に落ちます。サンプルでは 12 件のうち 4 件がちょうど 1 秒でした。",
        },
      ],
      limitsTitle: "音声 字幕 変換が使えなくなる場所",
      limits: [
        "2人が同時に話すと 1 件の字幕に混ざります。文字は合っていて、誰の発言かだけが間違う——字幕チェックが見落とすのはこの種の誤りです。",
        "チェックが測るのは長さと速度で、意味ではありません。短くて時間も正確な字幕が、人名を間違えていることはあります。",
        "ファイルは1 GiBまで。モデルに渡す前に16 kHzモノラルへ変換します。動画ファイルはそのままドロップでき、音声だけを使います。",
        "話者分離、翻訳、リアルタイム字幕は行いません。出力は録音済みの音声に対応する字幕ファイルです。",
      ],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "字幕ごとの文字数と表示速度を確認し、SRTを書き出す文字起こし画面",
    },
    "interview-transcription": {
      primaryKeyword: "インタビュー 文字起こし",
      supportingKeywords: ["インタビュー 文字起こし 無料", "取材 録音 文字起こし", "引用 確認 タイムコード", "対談 書き起こし"],
      guideTitle: "インタビュー 文字起こし：どの言葉なら引用符に入れられるか",
      guideIntro: "引用が安全なのは、2つのモデルが同じ言葉を聞いた場所だけです。34秒のサンプルで、4つの転写は 111 個、111 個、110 個、110 個のトークン、うち 26 個が一致せず、3 個が文の意味を変えていました。およそ37語に1語です。だから確認する単位は一字一字ではなく、一致しなかった区間になります。",
      sections: [
        {
          title: "1時間分を確認する計算",
          paragraphs: [
            "26 個のトークンは均等に散らばっていません。11 個の区間に固まっていて、5 個は句読点だけの違い（不一致の 45% が句読点）、6 個は語が変わり、3 個は文の意味が変わっています。確認の単位は語ではなく区間です。聞くのは 111 個のトークンではなく、11 か所です。",
            "だから確認は現実的になります。11 個の区間を 5 秒ずつ聞けば 55 秒、すでに一度流した 34 秒の音声に対して、本当に危ない 3 個は 15 秒です。長いインタビューほど区間は増えるので、すべての不一致ではなく 3 つの種類に絞るのです。",
            "必要な時間は録音全体に比べれば小さいものです。40 分のインタビューを base で回すと約 9.4 分、WebGPU なら約 3.8 分。そのあと確認に使う 55 秒は、待ち時間の 10% にも届きません。",
          ],
          table: {
            caption:
              "サンプルのうち、意味が変わった 3 件。トークンは空白で区切り、句読点も 1 個のトークンとして数えるため、111 個のトークンは話し言葉でおよそ 93 語です。",
            source: "content/guides/data/model-disagreements.json",
            columns: ["元の発話", "出力されたもの", "引用できない理由"],
            rows: [
              ["指示", "“start” → “stop”", "相手に伝えた行動が正反対になる"],
              ["名詞", "“interactions” → “interruptions”", "文の主語が入れ替わる"],
              ["所有格", "“find out” → “find our”", "誰のものかという関係を勝手に足す"],
            ],
          },
        },
        {
          title: "同じ録音でも、CPUとGPUで不一致が違う",
          paragraphs: [
            "4 つのモデルはプロセッサでも GPU でも動き、不一致の一覧は両者で同じではありません。同じ 34 秒の素材で、CPU は 11 個の区間、GPU は 9 個でした。40 分の音声を base で処理する時間も違い、WebAssembly が 9.4 分、WebGPU が 3.8 分で 2.5 倍です。",
            "消えたのは指示の区間です。CPUは「you start」と聞き、GPUはそこで切っていません。名詞と所有格は両方に残りました。確認すべき種類は安定していて、どの語かは安定しない。だからチェックリストは語ではなく種類を書いています。",
          ],
          table: {
            caption:
              "同じ34秒の素材、同じ4つのモデル、2つの実行バックエンド。「不一致区間」は、すべての転写で同一ではないトークンが連続した範囲で、「語レベル」は句読点だけの区間を除いた数です。",
            source: "content/guides/data/model-disagreements.json",
            columns: ["バックエンド", "不一致区間", "句読点のみ", "語レベル", "該当トークン", "意味が変化"],
            rows: [
              ["CPU（wasm）", "11", "5", "6", "16", "3"],
              ["GPU（webgpu）", "9", "4", "5", "14", "2"],
            ],
          },
        },
        {
          title: "やらないこと：2人の声を分ける",
          paragraphs: [
            "出力は 1 本のタイムライン上の平らなテキストで、1 行に 1 個の時刻が付くだけです。話者ラベルはありません。質問した人と答えた人のどちらが話したかを知らないし、推測して書くほうが書かないより悪いからです。",
            "引用では、誰の発言かがリスクの半分です。言葉は全部合っていて、別の人の発言として載る。ラベルは録音が目の前にあるうちに足してください。原稿を整えてから思い出すのでは遅いです。",
            "これが「インタビュー専用ソフト」との違いです。あちらが売るのは話者分離と話者ごとの区切りで、このページが売るのは、どの行も元音声に戻れることです。",
          ],
        },
        {
          title: "対談・電話取材・ポッドキャストのインタビュー 文字起こしで困る場所",
          paragraphs: [
            "電話取材は帯域が狭く、8 kHz 前後です。子音がもともとぼやけるので、人名と数字から先に崩れます。こういう録音こそ、数分を惜しまず small を使ってください。ダウンロードは 249 MB で base の 77 MB の 3 倍以上ありますが、聞き直す時間のほうが高くつきます。",
            "ポッドキャスト収録では、2人がかぶせて話し、笑い、BGMが声の下に潜ります。重なった場所はモデルが言葉を落としやすいので、聞き直すときは前後2文をつなげて聞き、真ん中の1文だけを切り取りません。",
            "対談や口述の長い独白は、間が長く続きます。文脈が十分にあるのは利点ですが、1文が複数の字幕にまたがることがあります。引用するときは自分でつなげてください。",
          ],
        },
        {
          title: "同意、保存、共有の端末",
          paragraphs: [
            "音声はタブ内でデコードし文字起こしするのでアップロードはありません。40 分の音声は 16 kHz モノラルで 154 MB、1 分あたり 3.84 MB のサンプルになりますが、それはメモリ上だけで、ディスクには残りません。ただし端末内処理は機密保持と同じではありません。ブラウザ、この機械、書き出したファイルは、所属組織や倫理審査の求める規則に従います。",
            "実際の帰結は2つです。公開までの間は元音声を残すこと。書き出す前に、原稿をどこに置くか決めておくこと。調査インタビューの保存規定は、記事より長く生き残るのが普通です。共有の端末では特に注意してください。ブラウザのキャッシュとダウンロード先に痕跡が残ります。",
          ],
        },
      ],
      checklistTitle: "引用をメモから出す前の3つの確認",
      checklist: [
        {
          title: "タイムコードを文と一緒に残す",
          body: "インタビュー 文字起こしは1行に1つの時刻しか付きません。文章をコピーするときは時刻も一緒に持っていきます。聞き直せない引用は証拠ではなく伝聞です。",
        },
        {
          title: "答えだけでなく、質問も聞き直す",
          body: "答えは記事に入る途中で短くなります。質問の前後5秒が、その一文だけでも同じ意味になるかを教えてくれます。",
        },
        {
          title: "話者名は自分で付ける",
          body: "自動の話者分離はありません。発言者を取り違えた引用は、引用がないより悪い。2人の対談なら略称を足す作業は40分の原稿でも1分です。",
        },
      ],
      limitsTitle: "文字起こしが証拠でなくなる場所",
      limits: [
        "2人がかぶせて話す場所は、モデルの不一致が最も大きく、タイムコードが最も役に立たない場所です。サンプルの 26 個のトークンは楽観的な例で、最悪の例ではありません。",
        "1時間は余裕があります。およそ2時間を超えるとメモリの見積もりが3.3 GBを越えるので、先にファイルを分割してください。",
        "ファイルは1 GiBまで。モデルに渡す前に16 kHzモノラルへ変換します。動画ファイルはそのままドロップでき、音声だけを使います。",
        "翻訳、リアルタイム字幕、話者分離は行いません。出力は録音済みインタビューの平らなテキストです。",
      ],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "検索とタイムスタンプで引用を確認できるインタビュー文字起こし画面",
    },
        "m4a-to-text": M4A_TO_TEXT_GUIDES.ja,
    "wav-to-text": WAV_TO_TEXT_GUIDES.ja,
    "voice-memo-to-text": VOICE_MEMO_TO_TEXT_GUIDES.ja,
    "podcast-transcription": PODCAST_TRANSCRIPTION_GUIDES.ja,
    "meeting-recording-to-text": MEETING_RECORDING_TO_TEXT_GUIDES.ja,
    "whisper-online": WHISPER_ONLINE_GUIDES.ja,
    "transcribe-audio-locally": TRANSCRIBE_AUDIO_LOCALLY_GUIDES.ja,
    "srt-to-vtt": SRT_TO_VTT_GUIDES.ja,
    "srt-to-txt": SRT_TO_TXT_GUIDES.ja,
  },
};

export function getToolGuide(locale: ToolLocale, slug: ToolSlug): ToolGuide {
  return TOOL_GUIDES[locale][slug];
}
