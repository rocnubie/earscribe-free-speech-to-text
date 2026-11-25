import type { SubtitleExample } from "@/components/SubtitleConverter";
import {
  TOOL_SLUGS,
  type ToolLocale,
  type ToolSlug,
} from "@/lib/site-routes";
import { M4A_TO_TEXT_PAGE } from "@/lib/tool-content/m4a-to-text";
import { WAV_TO_TEXT_PAGE } from "@/lib/tool-content/wav-to-text";
import { VOICE_MEMO_TO_TEXT_PAGE } from "@/lib/tool-content/voice-memo-to-text";
import { PODCAST_TRANSCRIPTION_PAGE } from "@/lib/tool-content/podcast-transcription";
import { MEETING_RECORDING_TO_TEXT_PAGE } from "@/lib/tool-content/meeting-recording-to-text";
import { WHISPER_ONLINE_PAGE } from "@/lib/tool-content/whisper-online";
import { TRANSCRIBE_AUDIO_LOCALLY_PAGE } from "@/lib/tool-content/transcribe-audio-locally";
import { SRT_TO_VTT_PAGE } from "@/lib/tool-content/srt-to-vtt";
import { SRT_TO_TXT_PAGE } from "@/lib/tool-content/srt-to-txt";

export { TOOL_SLUGS, type ToolLocale, type ToolSlug };

export interface ToolCopy {
  /** H1. */
  title: string;
  /** <title> when the H1 phrase is too long for a search result. Falls back to `title`. */
  metaTitle?: string;
  /** Short label for the related-tools grid; falls back to `title`. */
  navTitle?: string;
  description: string;
  eyebrow: string;
  intro: string;
  benefits: string[];
  workflowTitle: string;
  workflow: { title: string; body: string }[];
  tipsTitle: string;
  tips: string[];
  faq: { q: string; a: string }[];
  screenshotAlt: string;
}

export interface ToolPageDefinition {
  slug: ToolSlug;
  resultTab: "transcript" | "subtitles";
  copy: Record<ToolLocale, ToolCopy>;
  /** Subtitle-file tools embed the converter instead of the transcriber. */
  converter?: {
    mode: "srt-vtt" | "to-txt";
    examples: Record<ToolLocale, SubtitleExample>;
  };
}

export const TOOL_UI: Record<
  ToolLocale,
  {
    toolLabel: string;
    previewTitle: string;
    relatedTitle: string;
    faqTitle: string;
    stepLabel: string;
    /** Heading for the guides that back this page's claims. Guides are English-only. */
    guidesTitle: string;
    /** Shown next to the English guide titles on a localized page. */
    guidesNote: string;
  }
> = {
  en: {
    toolLabel: "Use the converter",
    previewTitle: "Review the transcript before you export",
    relatedTitle: "Related audio tools",
    faqTitle: "Questions about this workflow",
    stepLabel: "Step",
    guidesTitle: "Where these numbers come from",
    guidesNote: "The same figures, written up with method and data.",
  },
  "zh-CN": {
    toolLabel: "直接开始转换",
    previewTitle: "导出前先核对文字和时间戳",
    relatedTitle: "相关音频工具",
    faqTitle: "常见问题",
    stepLabel: "步骤",
    guidesTitle: "这些说法的实测出处",
    guidesNote: "以下为英文原文，附测量过程与数据",
  },
  ja: {
    toolLabel: "そのまま変換を始める",
    previewTitle: "書き出す前に文字とタイムスタンプを確認",
    relatedTitle: "関連する音声ツール",
    faqTitle: "この使い方についての質問",
    stepLabel: "ステップ",
    guidesTitle: "このページの根拠になった計測",
    guidesNote: "以下は英語の原文です（計測手順とデータ付き）",
  },
};

export const TOOL_PAGES: Record<ToolSlug, ToolPageDefinition> = {
  "audio-to-text": {
    slug: "audio-to-text",
    resultTab: "transcript",
    copy: {
      en: {
        title: "Free audio to text with timestamps",
        // H1 keeps the verb; the title carries the query plus the number that
        // decides whether a file works here.
        metaTitle: "Audio to text: any format, nothing uploaded | EarScribe",
        description:
          "Audio to text in the browser: drop MP3, M4A, FLAC, WAV or WebM and read it with timestamps. Every format decodes to 16 kHz samples; memory decides what runs.",
        eyebrow: "Audio to text converter",
        intro:
          "Choose an MP3, WAV, M4A, FLAC, OGG or WebM recording. EarScribe detects the spoken language, creates timestamped text, and lets you search, edit, replay and export the result without uploading the audio.",
        benefits: [
          "Free and unlimited, with no account or per-minute quota",
          "Click any timestamp to check the original recording",
          "Copy text or export TXT, SRT, VTT and JSON",
        ],
        workflowTitle: "Read the file, watch the memory, read the result",
        workflow: [
          { title: "Bring the audio file you have", body: "MP3, M4A, Opus, FLAC, WAV and WebM all decode. A 40-minute MP3 at 128 kbps is 38 MB and needs no conversion first." },
          { title: "Watch the memory line", body: "For audio to text the estimate adds 154 MB of 16 kHz samples and 922 MB of native stereo decode to that file. That sum, not the format, decides whether it runs." },
          { title: "Read the result, not just the words", body: "Search a name, click its timestamp, listen for five seconds. Four models differed on 26 of 111 words of one clip." },
        ],
        tipsTitle: "When a file will not open",
        tips: [
          "If a file will not open, do not retry it — the message already says whether it is the codec, the payload or memory.",
          "Convert down, not up: a lossless copy is not a better transcript, and a bigger file is a slower decode for the same samples.",
          "Replay the sentence before and after a quote, not just the quote. Overlap and clipped first words hide at the edges.",
        ],
        faq: [
          { q: "Which formats work for audio to text?", a: "MP3, M4A/AAC, Opus/OGG, FLAC, WAV and WebM, plus video containers whose audio track the browser exposes. All of them decode to the same samples." },
          { q: "Why does my file fail to open?", a: "Three different causes: a codec this browser lacks, a payload that is broken or truncated, or a decode that ran out of memory. The message names which, and only the third is fixed by a shorter file." },
          { q: "Will a WAV transcribe better than an MP3?", a: "No. Both become the same 16 kHz samples for the same duration, and 8 kHz is the ceiling either way." },
          { q: "Does anything leave the machine?", a: "Only the model request: decode, resample and transcription all run in this tab." },
        ],
        screenshotAlt: "EarScribe timestamped transcript workspace with waveform, search, editing and export controls",
      },
      "zh-CN": {
        title: "音频转文字：十种格式拖进来，带时间戳出稿",
        metaTitle: "音频转文字：任意格式，不上传 | EarScribe",
        description:
          "在浏览器里把 MP3、M4A、FLAC、WAV、WebM 和带视频的 mp4 转成带时间戳的文字。所有文件都解码成 16 kHz 采样，能不能跑由内存决定，音频不上传。",
        eyebrow: "音频转文字工具",
        intro:
          "MP3、WAV、M4A、FLAC、OGG、WebM，还有 mp4、mov 这类带视频的文件，都可以直接拖进来。EarScribe 自动识别语言、生成带时间戳的文字，可以搜索、修改、回听，再导出；音频不上传。",
        benefits: ["十种格式都能直接拖进来，包括视频", "点任意时间戳，回到原音", "复制文字，或导出 TXT、SRT、VTT 和 JSON"],
        workflowTitle: "先看能不能开，再看内存，最后读结果",
        workflow: [
          { title: "把手上的文件直接拖进来", body: "MP3、M4A、Opus、FLAC、WAV、WebM 都能解码，mp4 这类视频也一样。40 分钟、128 kbps 的 MP3 是 38 MB，不用先转格式。" },
          { title: "盯一下内存那条线", body: "40 分钟的音频，估算里还要加上 154 MB 的 16 kHz 采样和 922 MB 的原生立体声解码。决定能不能跑的是这个和，不是格式。" },
          { title: "读结果，不只读字", body: "搜一个名字，点它的时间戳，听五秒。同一段 34.36 秒的样音，四个模型在 111 个词里有 26 个不一致。" },
        ],
        tipsTitle: "文件打不开的时候",
        tips: [
          "打不开就别反复重试——提示里已经写了是编码、数据还是内存。",
          "只往下转，不往上转：更大的文件不会换来更好的文字稿，只是同样的采样解码得更慢。",
          "回听引语前后各一句，不只回听引语本身。重叠和被切掉的第一个词，都藏在边上。",
        ],
        faq: [
          { q: "哪些格式可以音频转文字？", a: "十种：MP3、M4A/AAC、OGG/Opus、FLAC、WAV、WebM，加上 mp4、m4v、mov、qt 这些带视频的文件（mkv、ts、m2ts 也一样），全都只取音轨。它们最后解码成同一批 16 kHz 采样。" },
          { q: "为什么我的文件打不开？", a: "三种不同的原因：浏览器缺这个编解码器、数据损坏或被截断、解码时内存不够。提示会说明是哪一种，只有第三种能靠剪短文件解决。" },
          { q: "WAV 会比 MP3 转得更准吗？", a: "不会。同样时长下两者都变成同一批 16 kHz 采样，8 kHz 就是上限。" },
          { q: "有东西离开这台机器吗？", a: "只有模型请求：解码、重采样、转写都在这个标签页里完成，音频不上传。" },
        ],
        screenshotAlt: "EarScribe 带波形、搜索、时间戳和导出控制的时间戳文字转写界面",
      },
      ja: {
        title: "音声 文字起こし：10形式をそのまま、タイムスタンプ付きで",
        metaTitle: "音声 文字起こし：どの形式でも、アップロードなし | EarScribe",
        description:
          "MP3、M4A、FLAC、WAV、WebM、動画のmp4まで、そのまま音声 文字起こし。どのファイルも16 kHzのサンプルにデコードされ、動くかどうかはメモリで決まります。音声のアップロードは不要です。",
        eyebrow: "音声 文字起こしツール",
        intro:
          "MP3、WAV、M4A、FLAC、OGG、WebM、さらにmp4やmovのような動画ファイルもそのまま選べます。EarScribeが言語を自動判定してタイムスタンプ付きのテキストを作り、検索・修正・聞き直し・書き出しまで行えます。音声はアップロードされません。",
        benefits: ["10形式をそのまま、動画ファイルもOK", "タイムスタンプを押して元音声へ戻れる", "コピー、またはTXT・SRT・VTT・JSONへ書き出し"],
        workflowTitle: "開けるか、メモリが足りるか、結果を読む",
        workflow: [
          { title: "手元のファイルをそのまま選ぶ", body: "MP3、M4A、Opus、FLAC、WAV、WebMはすべてデコードでき、mp4などの動画も同じです。40分・128 kbpsのMP3は38 MBで、形式の変換は要りません。" },
          { title: "メモリの行を見る", body: "40分の音声には、16 kHzサンプルの154 MBとネイティブのステレオデコード922 MBが加算されます。動くかどうかを決めるのは形式ではなく、この合計です。" },
          { title: "文字だけでなく結果を読む", body: "名前を検索し、タイムスタンプを押して5秒聞きます。34.36秒のサンプルで、4つのモデルは111語のうち26語で食い違いました。" },
        ],
        tipsTitle: "ファイルが開かないとき",
        tips: [
          "開かないファイルを何度も試さないでください。コーデックか、データか、メモリかはメッセージに書かれています。",
          "変換するなら下げる方向へ。大きいファイルは良い文字起こしを生まず、同じサンプルを遅くデコードするだけです。",
          "引用の前後1文も聞き直してください。重なりや頭が切れた語は端に隠れます。",
        ],
        faq: [
          { q: "どの形式が音声 文字起こしに対応しますか？", a: "10形式です。MP3、M4A/AAC、OGG/Opus、FLAC、WAV、WebMに加えて、mp4、m4v、mov、qtなどの動画ファイル（mkv、ts、m2tsも同様）に対応し、いずれも音声トラックだけを読みます。すべて同じ16 kHzのサンプルになります。" },
          { q: "ファイルが開かないのはなぜですか？", a: "原因は3つあります。ブラウザがコーデックを持っていない、データが壊れているか途中で切れている、デコードでメモリが足りない。どれに当たったかはメッセージに出ます。短くして解決するのは3つ目だけです。" },
          { q: "WAVのほうがMP3より正確ですか？", a: "いいえ。同じ長さなら同じ16 kHzのサンプルになり、8 kHzが上限です。" },
          { q: "音声はどこかに送られますか？", a: "送られるのはモデルの取得だけです。デコード、リサンプル、文字起こしはすべてこのタブ内で動きます。" },
        ],
        screenshotAlt: "波形、検索、タイムスタンプ、書き出しを備えたEarScribeの文字起こし画面",
      },
    },
  },
  "mp3-to-text": {
    slug: "mp3-to-text",
    resultTab: "transcript",
    copy: {
      en: {
        title: "Convert MP3 to text for free",
        // The H1 carries the verb; the title carries the query people type, and
        // the numbers the page can actually back up.
        metaTitle: "MP3 to text: free, in your browser, no upload | EarScribe",
        description: "MP3 to text in about nine minutes for a 40-minute file, decoded in the browser. Free, no sign-up, nothing uploaded; export TXT, SRT or VTT when it is checked.",
        eyebrow: "MP3 to text",
        intro: "Drop an MP3 from a voice recorder, podcast, meeting or phone. EarScribe decodes it locally, detects the spoken language, and creates text you can verify against the original audio.",
        benefits: ["No upload queue or account creation", "Works with long-form speech within your device limits", "Keeps timestamps for replay and subtitle export"],
        workflowTitle: "Drop it, run base, then read the names",
        workflow: [
          { title: "Check the source MP3", body: "A clear mono or stereo recording is enough: a 40-minute mono MP3 at 128 kbps is 38 MB and needs no preparation. Only clipping or heavy noise reduction removes detail the model would otherwise use." },
          { title: "Transcribe in the browser", body: "Base downloads 77 MB once and finishes 40 minutes of audio in about nine minutes. The same weights come from cache on the next file." },
          { title: "Correct high-risk details", body: "Search for names, dates, prices and technical terms, then click the timestamp to hear the source before exporting." },
        ],
        tipsTitle: "Habits that save a second run",
        // Advice, not a second copy of a number the body already carries.
        tips: [
          "For MP3 to text, stay on base unless names keep coming out wrong: small buys vocabulary, not judgement, and costs four times the wait.",
          "Switch tabs while it runs — the work happens in a worker, not in the foreground. Reloading the page is what loses it.",
          "If the file is for reading, export TXT and stop. Subtitles are a different job with a different limit.",
        ],
        faq: [
          { q: "Can I convert MP3 to text without uploading it?", a: "No upload at all: the MP3 is decoded to 16 kHz mono inside the tab and the model reads those samples. The only network request is for the weights, which are cached after the first run." },
          { q: "How long does a 40-minute MP3 take?", a: "About nine minutes with the default model. The decision table at the top has the other three." },
          { q: "Will a higher-bitrate MP3 be more accurate?", a: "Not measurably — the resample throws away everything a 128 kbps file does not already keep. Room noise costs more than bitrate." },
          { q: "Can I turn the same MP3 into subtitles?", a: "Yes: the reviewed cues export as SRT or VTT. Line length and reading speed are the limits there, not the transcript." },
        ],
        screenshotAlt: "MP3 converted to editable timestamped text in EarScribe",
      },
      "zh-CN": {
        title: "mp3 转文字：拖进来，拿到能回听的文字稿",
        metaTitle: "mp3 转文字：浏览器内完成，不上传 | EarScribe",
        description:
          "40 分钟的 MP3 用 base 模型约 9 分钟出稿，WebGPU 下约 3.8 分钟，全程在浏览器里解码。不上传、不注册，核对后可导出 TXT、SRT 或 VTT。",
        eyebrow: "mp3 转文字",
        intro:
          "录音笔、播客、会议、手机里的 MP3，直接拖进来就行。EarScribe 在本地把它解码成 16 kHz 单声道，识别语言，给你一份能逐句回听的文字稿。128 kbps 还是 320 kbps，对准确率没有区别。",
        benefits: ["不用上传，也不用注册账号", "40 分钟录音，base 约 9 分钟（WebGPU 约 3.8 分钟）", "保留时间戳，能回听，也能导出字幕"],
        workflowTitle: "选 base、等九分钟、回来核人名",
        workflow: [
          { title: "先看一眼原始 MP3", body: "40 分钟、128 kbps 的单声道 MP3 约 38 MB，不用任何预处理。真正会损失人声的只有削波和过度降噪。" },
          { title: "在浏览器里转写", body: "base 首次下载 77 MB，之后走缓存。40 分钟音频约 9 分钟跑完，WebGPU 下约 3.8 分钟。" },
          { title: "核对高风险细节", body: "人名、日期、价格、专业词，搜到就点时间戳回听原音，确认完再导出。" },
        ],
        tipsTitle: "少跑第二遍的几个习惯",
        tips: [
          "base 就够用，除非人名一直错：small 换来的是词表不是判断力，等待时间还要四倍。",
          "跑的时候可以切到别的标签页——计算在 worker 里进行。会丢进度的是刷新页面。",
          "如果只是要读，导出 TXT 就停手。字幕是另一件事，限制也不一样。",
        ],
        faq: [
          { q: "mp3 不上传也能转文字吗？", a: "完全不上传：MP3 在标签页里解码成 16 kHz 单声道，模型读的就是这份采样。唯一的网络请求是下载模型权重，首次之后走缓存。" },
          { q: "40 分钟的 MP3 要转多久？", a: "默认模型约 9 分钟，WebGPU 下约 3.8 分钟。另外三个模型见页面顶部的对照表。" },
          { q: "码率越高，识别就越准吗？", a: "测不出差别：模型统一重采样到 16 kHz，8 kHz 以上本来就会被丢掉，128 kbps 已经够了。房间噪音比码率更费准确率。" },
          { q: "同一个 MP3 能直接出字幕吗？", a: "可以。核对过的分段可以导出成 SRT 或 VTT，那里卡住你的是行长和阅读速度，不是文字稿。" },
        ],
        screenshotAlt: "EarScribe 把 MP3 转成可编辑的带时间戳文字稿",
      },
      ja: {
        title: "mp3 文字起こし：ドロップするだけで、聞き直せるテキストに",
        metaTitle: "mp3 文字起こし：ブラウザ内で完結、アップロードなし | EarScribe",
        description:
          "40分のMP3をbaseモデルで約9分、WebGPUなら約3.8分で文字起こし。すべてブラウザ内でデコードし、アップロードも登録も不要。確認後にTXT・SRT・VTTへ書き出せます。",
        eyebrow: "mp3 文字起こし",
        intro:
          "ボイスレコーダー、ポッドキャスト、会議、スマートフォンのMP3をそのまま選べます。EarScribeが端末内で16 kHzモノラルにデコードし、言語を判定して、一行ずつ聞き直せる文字起こしを作ります。128 kbpsか320 kbpsかは、精度の差にはなりません。",
        benefits: ["アップロードもアカウント登録も不要", "40分の録音をbaseで約9分（WebGPUなら約3.8分）", "タイムスタンプ付きで、聞き直しと字幕書き出しに対応"],
        workflowTitle: "baseを選び、9分待ち、人名を確認する",
        workflow: [
          { title: "元のMP3を確認する", body: "40分・128 kbpsのモノラルなら約38 MBで、前処理は要りません。声の情報が本当に失われるのは、音割れと強すぎるノイズ除去です。" },
          { title: "ブラウザで文字起こしする", body: "baseは初回に77 MBをダウンロードし、以降はキャッシュから読み込みます。40分なら約9分、WebGPUなら約3.8分です。" },
          { title: "危ない箇所を直す", body: "人名、日付、金額、専門用語を検索し、タイムスタンプから元音声を聞いて確認してから書き出します。" },
        ],
        tipsTitle: "二度目を走らせないための習慣",
        tips: [
          "人名が外れ続ける場合を除いてbaseのままで。smallが買うのは語彙であって判断力ではなく、待ち時間は4倍です。",
          "実行中は別のタブに切り替えて構いません。計算はworkerで動きます。失うのはページを再読み込みしたときだけです。",
          "読むだけならTXTで書き出して終わりに。字幕は別の仕事で、制約も違います。",
        ],
        faq: [
          { q: "MP3をアップロードせずに文字起こしできますか？", a: "まったくアップロードしません。MP3はタブ内で16 kHzモノラルにデコードされ、モデルはそのサンプルを読みます。通信はモデルの重みの取得だけで、初回以降はキャッシュから読み込みます。" },
          { q: "40分のMP3にどれくらいかかりますか？", a: "既定のモデルで約9分、WebGPUなら約3.8分です。残り3つのモデルはページ上部の表にまとめています。" },
          { q: "ビットレートが高いほど正確になりますか？", a: "測れる差はありません。モデルは必ず16 kHzにリサンプルするので、8 kHzより上は元から捨てられます。128 kbpsで十分で、部屋の雑音のほうが高くつきます。" },
          { q: "同じMP3から字幕も作れますか？", a: "はい。確認済みの区間をSRTまたはVTTで書き出せます。そこで制約になるのは行の長さと読む速さで、文字起こしの正確さではありません。" },
        ],
        screenshotAlt: "MP3を編集できるタイムスタンプ付きテキストに変換したEarScribe画面",
      },
    },
  },
  "audio-to-srt": {
    slug: "audio-to-srt",
    resultTab: "subtitles",
    copy: {
      en: {
        title: "Convert audio to SRT subtitles for free",
        metaTitle: "Audio to SRT: free subtitle file, no upload | EarScribe",
        description: "Audio to SRT in your browser: 24 defects in 73 cues, and the re-cut halves the long ones while leaving all 3 speed defects alone. Free, no upload, no account.",
        eyebrow: "Audio to SRT subtitle generator",
        intro: "Create SRT or VTT subtitles from MP3, WAV, M4A and other audio. EarScribe keeps Whisper timestamps, flags common readability problems, and lets you improve line breaks before export.",
        benefits: ["Subtitle check for long, fast, repeated or overlapping cues", "Click a cue to listen before changing the text", "Export SRT, VTT, TXT or JSON from the same result"],
        workflowTitle: "Generate the cues, run the check, then watch it through",
        workflow: [
          { title: "Generate timestamped cues", body: "Transcribe the recording and keep the model-generated timing for each segment." },
          { title: "Run the subtitle check", body: "Review cues that are too long, unusually fast, repeated, empty or overlapping." },
          { title: "Watch through and export", body: "Improve line breaks, listen through important sections, then export SRT or VTT for your editor or video platform." },
        ],
        tipsTitle: "Subtitle readability basics",
        tips: ["Two short lines are usually easier to read than one long line.", "Fast dialogue may need shorter wording or more carefully split cues.", "Names, numbers and on-screen terminology deserve a final manual check."],
        faq: [
          { q: "What is the difference between SRT and VTT?", a: "Both store timed captions. SRT is widely accepted by video editors and platforms; VTT is designed for web video and supports additional web caption features." },
          { q: "Does EarScribe automatically fix every subtitle?", a: "It can improve line breaks and flag common problems, but important videos still need a final watch-through for wording and timing." },
          { q: "Can I edit subtitle text before downloading?", a: "Yes. Edit the timestamped transcript, return to the subtitle check, and export the updated SRT or VTT." },
        ],
        screenshotAlt: "EarScribe subtitle check showing timestamped cues and SRT export",
      },
      "zh-CN": {
        title: "音频转字幕：从音频生成 SRT 与 VTT",
        metaTitle: "音频转字幕：时间轴来自 Whisper 分段 | EarScribe",
        description: "把音频转成带真实时间轴的 SRT 或 VTT：每条字幕的时间来自 Whisper 自己的分段，导出前按 42 字符行宽和 17–20 CPS 体检。免费、不上传、不用注册。",
        eyebrow: "音频转字幕工具",
        intro: "把 MP3、WAV、M4A 或其他音频做成 SRT、VTT 字幕。每条字幕的起止时间来自 Whisper 对这段语音自己的分段，不是先写出整篇文字再按字数切开。导出之前，字幕体检会按 42 字符行宽和 17–20 CPS 的阅读速度，标出过长、过快、重复、空行和重叠的字幕。",
        benefits: ["字幕时间来自模型分段，不用手工重新对时", "体检标出过长、过快、重复、空行和重叠", "点一条字幕就能回听，改完断行再导出"],
        workflowTitle: "生成字幕段，跑一次体检，再完整看一遍",
        workflow: [
          { title: "生成带时间轴的字幕条", body: "转写音频，保留 Whisper 为每个语音段给出的起止时间。字幕的边界就是这些分段，不是把文字事后按字数切开。" },
          { title: "跑一遍字幕体检", body: "工具按每行 42 字符、每条 84 字符、每秒 20 字符检查，标出过长、过快、重复、空行和重叠，并说明每条踩了哪条规则。" },
          { title: "改断行，看完再导出", body: "改文字和断行都不会移动时间轴；把重点段落完整看一遍，再导出 SRT 或 VTT 交给剪辑软件或视频平台。" },
        ],
        tipsTitle: "一条字幕为什么不能太长",
        tips: [
          "42 字符是 32 格字幕网格推出来的惯例，不是标准：它保证一行放得进安全区，两行也不至于压住画面。",
          "17–20 CPS 是字幕规范里的阅读速度：Netflix 把上限定在 20 CPS，DCMP 更保守，取 17 CPS 左右。",
          "断行只改行长，不改速度——每秒字符数没变，太快的那条还是得快，只能精简措辞或重新给时间。",
        ],
        faq: [
          { q: "SRT 和 VTT 有什么区别？", a: "两者都保存带时间轴的字幕。SRT 被多数剪辑软件和视频平台直接接受；VTT 是给网页视频用的，能带样式和定位信息。要 VTT 不必重新转写，转换一下就行。" },
          { q: "时间轴需要手动重新对一遍吗？", a: "通常不用。每条字幕的起止时间来自 Whisper 的分段，你改的是断行和文字，时间轴不动。要整体平移（比如片头多了两秒），在剪辑软件里偏移整条轨道，比一条条改快。" },
          { q: "为什么我的字幕每条都这么长？", a: "Whisper 按语音停顿分段，一段话说完才断开，所以一口气说 30 个字，出来就是一条 30 个字的字幕。体检会标出超过 42 字符的行，断行在导出前做。" },
        ],
        screenshotAlt: "EarScribe 的音频转字幕界面：字幕体检列出每条字幕的字符数与阅读速度，旁边是 SRT 导出",
      },
      ja: {
        title: "音声 字幕 変換：音声からSRT・VTTを作る",
        metaTitle: "音声 字幕 変換：時間はWhisperの区間ごと | EarScribe",
        description: "音声からタイムコード付きのSRT・VTTを作ります。字幕の時間はWhisper自身の区間分割から取り、書き出す前に42文字の行長と17〜20 CPSの表示速度で確認します。無料・アップロードなし・登録不要です。",
        eyebrow: "音声 字幕 変換ツール",
        intro: "MP3、WAV、M4Aなどの音声からSRT・VTT字幕を作ります。各字幕の開始と終了は、Whisperがその発話区間に対して出した分割そのもので、全文を書いてから行に切るのではありません。書き出す前に、42文字の行長と17〜20 CPSの表示速度で、長すぎる・速すぎる・重複・空行・時間の重なりを確認できます。",
        benefits: ["字幕の時間はモデルの区間から取り、合わせ直しが不要", "長すぎる・速すぎる・重複・空行・時間の重なりを検出", "字幕を押して聞き直し、改行を整えて書き出し"],
        workflowTitle: "字幕区間を作り、チェックを走らせ、最後に通して見る",
        workflow: [
          { title: "タイムコード付きの字幕を作る", body: "音声を文字起こしし、Whisperが各発話区間に出した開始・終了時刻をそのまま保ちます。字幕の切れ目はこの区間で、文章を後から字数で切ったものではありません。" },
          { title: "字幕チェックを走らせる", body: "1行42文字、1字幕84文字、毎秒20文字の規則で、長すぎる・速すぎる・重複・空行・時間の重なりを検出し、どの規則に触れたかを示します。" },
          { title: "改行を直し、通して見てから書き出す", body: "文章と改行を直してもタイムコードは動きません。大事な箇所を最後まで見てから、編集ソフトや動画サイト向けにSRT・VTTを書き出します。" },
        ],
        tipsTitle: "1行が長すぎると読めない理由",
        tips: [
          "42文字は32マスの字幕グリッドから導かれた慣例で、規格ではありません。1行が安全領域に収まり、2行でも画面を隠しすぎないための数字です。",
          "17〜20 CPSは字幕規格の表示速度です。Netflixは上限を20 CPS、DCMPはより慎重に17 CPS前後としています。",
          "改行しても表示速度は変わりません。1秒あたりの文字数は同じなので、速すぎる字幕は言葉を削るか、時間を割り当て直すしかありません。",
        ],
        faq: [
          { q: "SRTとVTTはどう違いますか？", a: "どちらも時間付きの字幕を保存します。SRTは編集ソフトや動画サイトで広く使われ、VTTはWeb動画向けでスタイルや位置の指定ができます。VTTが必要でも文字起こしをやり直す必要はありません。" },
          { q: "タイムコードは手で合わせ直す必要がありますか？", a: "通常は不要です。各字幕の時間はWhisperの区間から来ており、直すのは改行と文章だけです。全体をずらしたい場合（冒頭に2秒足したなど）は、1件ずつではなくトラックごとオフセットするほうが速いです。" },
          { q: "字幕がどれも長くなるのはなぜですか？", a: "Whisperは発話の間で区切るため、一息で30文字話せば30文字の字幕が1本できます。チェックは42文字を超えた行を示すので、改行は書き出す前に整えてください。" },
        ],
        screenshotAlt: "音声から字幕を作るEarScribeの画面：字幕ごとの文字数と表示速度のチェック、SRT書き出し",
      },
    },
  },
  "interview-transcription": {
    slug: "interview-transcription",
    resultTab: "transcript",
    copy: {
      en: {
        title: "Free interview transcription you can verify against the recording",
        // The body counts tokens, not words: the title uses the ratio, which is
        // the same claim in the unit the prose actually states.
        metaTitle: "Interview transcription: 1 word in 37 is wrong | EarScribe",
        description: "Interview transcription in the browser: check only the words that change meaning, then quote. Free, no upload, timestamps kept, speaker labels added by you.",
        eyebrow: "Interview transcription",
        intro: "Turn research interviews, reporting calls, oral histories and customer conversations into timestamped text. Search for a topic, click back to the exact recording, correct important details and export a clean transcript.",
        benefits: ["Search long interviews instead of scrubbing the whole recording", "Verify quotes and names from the original audio", "Keep sensitive source audio on the current device"],
        workflowTitle: "Transcribe, filter, then quote",
        workflow: [
          { title: "Transcribe the interview", body: "Base is enough for a clean recording; a noisy field interview is where small earns its four times longer wait." },
          { title: "Search the three risky categories", body: "Names, negations and numbers — the three where our models disagreed on meaning, out of 26 differing words in 111." },
          { title: "Replay five seconds, then quote", body: "Click the timestamp, hear the question and the answer, then decide. A quote that cannot be replayed is an anecdote." },
        ],
        tipsTitle: "What a transcript cannot tell you about an interview",
        tips: [
          "Add speaker initials as you read, not afterwards — a misattributed quote is worse than a missing one.",
          "In interview transcription, treat punctuation as the model's guess: a comma can turn a hesitation into a statement.",
          "Decide where the transcript lives before you export it; research interviews often outlive the article in a retention rule.",
        ],
        faq: [
          { q: "Can EarScribe identify different speakers?", a: "Not yet: you get one timestamped stream, so two initials per line is a manual pass — and the one that decides whether a quote is attributed correctly." },
          { q: "Should I publish an interview transcript without checking it?", a: "No. In our clip 26 of 111 words differed between models and three changed the meaning, so the words you publish need a replay behind them." },
          { q: "Is interview audio uploaded?", a: "The selected audio is processed in the browser and is not uploaded to an EarScribe server. See the Privacy page for model and analytics details." },
        ],
        screenshotAlt: "Interview transcript with searchable timestamped sections and audio replay",
      },
      "zh-CN": {
        title: "采访转文字：逐句回听，核对每一条引语",
        metaTitle: "采访转文字：引语要能回听核对 | EarScribe",
        description: "把口述采访、电话采访、播客对谈转成带时间戳的文字稿；输出是平铺文字，不说话人分离。引用前逐条回听，核对人名、数字和语境。音频不上传。",
        eyebrow: "采访转文字",
        intro: "把口述采访、电话采访、播客对谈和用户访谈整理成带时间戳的文字。搜一个话题，点回原音的那几秒，改掉会改变原意的人名、数字和否定，再导出文字稿。输出的是一整条平铺的文字，每行只有时间，不标是谁在说——说话人标签要你自己补。",
        benefits: ["在长采访里搜关键词，不用整段拖动", "每句话都能点回原音，核对引语和归属", "采访音频留在当前设备，不上传服务器"],
        workflowTitle: "先转写，再按三类词筛，最后才引用",
        workflow: [
          { title: "转写采访录音", body: "干净的录音用 base 就够；嘈杂的外采、电话采访或口音重的对谈，才是 small 值得多等那几倍时间的地方。" },
          { title: "只查三类会改变原意的词", body: "人名、否定和数字。我们的样本里，四个模型在 111 个词上有 26 个不一致，真正改变含义的三处，正好落在这三类。" },
          { title: "回听五秒，再决定引不引", body: "点时间戳，把问题和回答一起听完。不能回放的引语只是转述，不能算证据。" },
        ],
        tipsTitle: "采访稿不会告诉你的三件事",
        tips: [
          "它不标说话人：两个人对谈出来是一条一条的平铺文字，谁说的要边读边补，别等整理完再回头猜。",
          "标点是模型的猜测，一个逗号能把犹豫变成断言，引用前按原音重新断句。",
          "录音能不能留、留多久、放在哪台机器上，导出前就要定；研究访谈的留存规定，常常比稿子活得久。",
        ],
        faq: [
          { q: "能自动区分不同说话人吗？", a: "不能，目前也不假装能。输出是一条时间轴上的平铺文字，没有说话人标记；双人对谈靠你在核对时补缩写，而这一步恰好决定引语有没有挂错人。" },
          { q: "采访稿不核对能直接发布吗？", a: "不能。我们的样本里 111 个词有 26 个不一致，其中 3 个改变了原意；凡是要进引号的话，背后都得有一次回听。" },
          { q: "采访录音会被上传吗？", a: "选中的音频在浏览器里解码和转写，不会上传到 EarScribe 服务器。模型和统计信息的边界见隐私页。" },
        ],
        screenshotAlt: "可搜索、带时间戳并能点回原音回听的采访文字稿",
      },
      ja: {
        title: "インタビュー 文字起こし：引用をタイムコードで確認する",
        metaTitle: "インタビュー 文字起こし：引用は聞き直して確認 | EarScribe",
        description: "対談、電話取材、ポッドキャスト収録をタイムスタンプ付きのテキストにします。出力は話者ラベルのない一本のテキストで、引用前に人名・数字・文脈を聞き直せます。無料。",
        eyebrow: "インタビュー 文字起こし",
        intro: "対談、電話取材、ポッドキャスト収録、ユーザーインタビューをタイムスタンプ付きのテキストにします。話題を検索し、その数秒へ戻って聞き、意味が変わる人名・数字・否定を直してから書き出します。出力は話者の区切りがない一本のテキストで、行ごとに付くのは時刻だけです。話者名は確認しながらご自身で足してください。",
        benefits: ["長い録音をシークせず、テキストから検索", "引用と人名を元音声で確認し、誰の発言かも自分で付ける", "取材音声は端末内で処理し、アップロードしない"],
        workflowTitle: "文字起こし、3種類の言葉で絞り、それから引用する",
        workflow: [
          { title: "取材録音を文字起こし", body: "きれいな録音ならbaseで足ります。雑音の多い現場、電話取材、なまりの強い対談こそ、smallで待ち時間が数倍になる価値があります。" },
          { title: "意味が変わる3種類だけを見る", body: "人名、否定、数字です。サンプルでは4つのモデルが111語のうち26語で食い違い、意味が変わった3か所はちょうどこの3種類でした。" },
          { title: "5秒聞き直してから引用する", body: "タイムスタンプを押し、質問と答えを続けて聞きます。聞き直せない引用は証拠ではなく伝聞です。" },
        ],
        tipsTitle: "文字起こしが教えてくれない3つのこと",
        tips: [
          "話者は付きません。2人の対談は一本の平らなテキストになるので、読みながら略称を足してください。まとめてから推測すると取り違えます。",
          "句読点はモデルの推測です。読点ひとつでためらいが断定に変わるので、引用前に音声で区切り直します。",
          "録音を残せるか、いつまで残すか、どの端末に置くかは書き出す前に決めます。調査インタビューの保存規定は原稿より長く生き残ります。",
        ],
        faq: [
          { q: "複数の話者を自動で判別できますか？", a: "できません。出力は1本のタイムライン上の平らなテキストで、話者ラベルは付きません。2人の対談は確認しながら略称を足すことになり、その作業が引用の取り違えを防ぎます。" },
          { q: "確認せずにインタビュー原稿を公開できますか？", a: "できません。サンプルでは111語のうち26語が一致せず、3語は意味が変わりました。引用符に入れる言葉には、必ず聞き直しを1回添えてください。" },
          { q: "インタビュー音声はアップロードされますか？", a: "選択した音声はブラウザ内でデコードと文字起こしを行い、EarScribeのサーバーには送信しません。モデルとアクセス解析の範囲はプライバシーページをご覧ください。" },
        ],
        screenshotAlt: "検索、タイムスタンプ、音声の聞き直しに対応したインタビュー文字起こし",
      },
    },
  },
    "m4a-to-text": M4A_TO_TEXT_PAGE,
  "wav-to-text": WAV_TO_TEXT_PAGE,
  "voice-memo-to-text": VOICE_MEMO_TO_TEXT_PAGE,
  "podcast-transcription": PODCAST_TRANSCRIPTION_PAGE,
  "meeting-recording-to-text": MEETING_RECORDING_TO_TEXT_PAGE,
  "whisper-online": WHISPER_ONLINE_PAGE,
  "transcribe-audio-locally": TRANSCRIBE_AUDIO_LOCALLY_PAGE,
  "srt-to-vtt": SRT_TO_VTT_PAGE,
  "srt-to-txt": SRT_TO_TXT_PAGE,
};

export function isToolSlug(value: string): value is ToolSlug {
  return (TOOL_SLUGS as readonly string[]).includes(value);
}

export function getToolPage(locale: ToolLocale, slug: ToolSlug) {
  const page = TOOL_PAGES[slug];
  return { ...page, locale, text: page.copy[locale], ui: TOOL_UI[locale] };
}
