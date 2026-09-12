import type { ToolLocale } from "@/lib/site-routes";
import type { ToolGuide } from "@/lib/tool-page-seo";
import type { ToolPageDefinition } from "@/lib/tool-pages";

const image = "/screenshots/02-transcript-showcase.webp";

export const M4A_TO_TEXT_PAGE: ToolPageDefinition = {
  slug: "m4a-to-text",
  resultTab: "transcript",
  copy: {
    en: {
      title: "Free M4A to text converter in your browser",
      description:
        "Turn M4A recordings from iPhone Voice Memos, Zoom and recorder apps into timestamped text. Free, no sign-up; export TXT, SRT, VTT or JSON.",
      eyebrow: "M4A to text converter",
      intro:
        "M4A is the format behind iPhone Voice Memos, Zoom's audio-only recordings and many recorder apps. Choose the .m4a file as it is: EarScribe decodes it in your browser, creates timestamped text, and lets you check each line against the recording before you export.",
      benefits: [
        "No conversion to MP3 or WAV first",
        "Click a timestamp to replay that part",
        "Export TXT, SRT, VTT or JSON",
      ],
      workflowTitle: "Convert M4A to text for free in three steps",
      workflow: [
        { title: "Find the .m4a file", body: "Voice memos, Zoom audio-only files and recorder exports can be selected directly. On iPhone, save the recording to Files first so the browser can open it." },
        { title: "Keep the recommended model", body: "The balanced model suits most spoken M4A recordings. Choose a smaller one on older phones or for very long files." },
        { title: "Check and export", body: "Search for names and numbers, replay the matching timestamps, fix the wording, then copy the text or export a file." },
      ],
      tipsTitle: "Getting clean text from M4A recordings",
      tips: [
        "An M4A recorded as Apple Lossless is far larger than a standard one; long lossless files are easier to handle as a compressed copy.",
        "Keep the phone or recorder close to the person speaking. Distance costs more accuracy than the file format does.",
        "Trim long silence at the start and end of a recording to save memory on long files.",
      ],
      faq: [
        { q: "What is an M4A file?", a: "An M4A file is an MPEG-4 container that holds audio only, usually compressed with AAC. It is the same container as MP4 video, which is why some apps label it audio/mp4." },
        { q: "Do I need to convert M4A to MP3 before transcribing?", a: "No. Browsers decode the AAC audio in an M4A file directly, and converting between two compressed formats cannot add back detail. Select the original file." },
        { q: "Why won't my M4A file open?", a: "Most M4A files use AAC and open in every major browser. Files encoded with Apple Lossless may not decode in every browser, and copy-protected .m4p purchases cannot be decoded at all. Export a standard AAC copy and try again." },
        { q: "Can I turn an M4A into subtitles?", a: "Yes. After checking the transcript, export SRT or VTT; each cue keeps the timing of the original recording." },
      ],
      screenshotAlt: "Timestamped transcript of an M4A recording with waveform and export controls",
    },
    "zh-CN": {
      title: "免费 M4A 转文字：浏览器里直接识别录音",
      description: "把 iPhone 语音备忘录、Zoom 和录音 App 导出的 M4A 录音转成带时间戳的文字。免费、无需注册，可导出 TXT、SRT、VTT 或 JSON。",
      eyebrow: "M4A 转文字工具",
      intro: "iPhone 语音备忘录、Zoom 的纯音频录制和很多手机录音 App 保存的都是 M4A。直接选择 .m4a 文件即可：EarScribe 在浏览器里解码并识别，生成带时间戳的文字，导出前可以逐句对照原录音核对。",
      benefits: ["不用先转成 MP3 或 WAV", "点击时间戳回听对应片段", "导出 TXT、SRT、VTT 或 JSON"],
      workflowTitle: "三步免费把 M4A 转成文字",
      workflow: [
        { title: "找到 .m4a 文件", body: "语音备忘录、Zoom 纯音频文件和录音 App 导出的文件都可以直接选择。在 iPhone 上，先把录音存储到“文件”App，浏览器才能读取。" },
        { title: "使用推荐模型", body: "大多数 M4A 人声录音用均衡模型就够了。旧手机或特别长的录音，可以换更小的模型。" },
        { title: "核对后导出", body: "搜索人名和数字，点击时间戳回听，改正文字后复制或导出文件。" },
      ],
      tipsTitle: "让 M4A 录音识别更干净",
      tips: [
        "用“无损”音质录制的 M4A 比普通文件大得多，长录音建议另存一份压缩版本再处理。",
        "录音时让手机或录音笔靠近说话人。距离对准确率的影响比文件格式大得多。",
        "剪掉录音开头和结尾的长时间静音，处理长文件时能省下不少内存。",
      ],
      faq: [
        { q: "M4A 是什么格式？", a: "M4A 是只装音频的 MPEG-4 容器，里面通常是 AAC 压缩音频。它和 MP4 视频用的是同一种容器，所以有些软件会把它标成 audio/mp4。" },
        { q: "M4A 需要先转成 MP3 吗？", a: "不需要。浏览器可以直接解码 M4A 里的 AAC 音频，在两种有损格式之间转换也补不回丢失的细节，直接选原文件就好。" },
        { q: "为什么我的 M4A 打不开？", a: "大多数 M4A 使用 AAC 编码，主流浏览器都能打开。用 Apple Lossless（无损）编码的文件不一定所有浏览器都支持；带版权保护的 .m4p 文件则完全无法解码。请另存一份普通 AAC 格式再试。" },
        { q: "M4A 可以直接做成字幕吗？", a: "可以。核对文字后导出 SRT 或 VTT，每条字幕都保留原录音里的时间。" },
      ],
      screenshotAlt: "M4A 录音生成的带时间戳文字稿，含波形和导出按钮",
    },
    ja: {
      title: "M4Aファイルを無料で文字起こし",
      description: "iPhoneのボイスメモ、Zoom、録音アプリのM4Aをタイムスタンプ付きテキストに変換。無料・登録不要で、TXT・SRT・VTT・JSONに書き出せます。",
      eyebrow: "M4A 文字起こし",
      intro: "M4Aは、iPhoneのボイスメモ、Zoomの音声のみの録音、多くの録音アプリで使われている形式です。.m4aファイルをそのまま選ぶと、EarScribeがブラウザ内でデコードしてタイムスタンプ付きの文字にします。書き出す前に、一文ずつ元の録音と照らし合わせて確認できます。",
      benefits: ["MP3やWAVへの変換は不要", "タイムスタンプから該当箇所を再生", "TXT・SRT・VTT・JSONで書き出し"],
      workflowTitle: "M4Aを無料で文字起こしする3ステップ",
      workflow: [
        { title: ".m4aファイルを用意する", body: "ボイスメモ、Zoomの音声ファイル、録音アプリの書き出しファイルをそのまま選べます。iPhoneでは先に「ファイル」アプリへ保存すると、ブラウザから開けます。" },
        { title: "おすすめのモデルを使う", body: "話し声中心のM4Aならバランス型のモデルで十分です。古いスマートフォンや長い録音では、小さいモデルを選んでください。" },
        { title: "確認して書き出す", body: "人名や数字を検索し、タイムスタンプから聞き直して修正してから、コピーまたは書き出します。" },
      ],
      tipsTitle: "M4Aの録音をきれいに文字起こしするコツ",
      tips: [
        "「非圧縮（ロスレス）」で録音したM4Aは通常のファイルよりかなり大きくなります。長い録音は圧縮版を書き出してから処理すると安定します。",
        "スマートフォンや録音機は話す人の近くに置きましょう。形式よりも距離のほうが精度に影響します。",
        "録音の最初と最後の長い無音を削ると、長時間ファイルでもメモリを節約できます。",
      ],
      faq: [
        { q: "M4Aとはどんなファイルですか？", a: "M4Aは音声だけを入れたMPEG-4コンテナで、中身はたいていAACで圧縮された音声です。MP4動画と同じコンテナなので、audio/mp4と表示するアプリもあります。" },
        { q: "文字起こしの前にMP3へ変換する必要はありますか？", a: "ありません。ブラウザはM4A内のAACを直接デコードできますし、圧縮形式どうしで変換しても失われた情報は戻りません。元のファイルを選んでください。" },
        { q: "M4Aファイルが開けないのはなぜですか？", a: "多くのM4AはAACなので主要なブラウザで開けます。Apple Lossless（ロスレス）で保存されたファイルは一部のブラウザで読めないことがあり、著作権保護された.m4pは再生自体できません。通常のAACで書き出し直してお試しください。" },
        { q: "M4Aから字幕を作れますか？", a: "はい。文字を確認したらSRTまたはVTTで書き出してください。各字幕には元の録音のタイミングが残ります。" },
      ],
      screenshotAlt: "M4A録音から作成したタイムスタンプ付き文字起こしと書き出しボタン",
    },
  },
};

export const M4A_TO_TEXT_GUIDES: Record<ToolLocale, ToolGuide> = {
  en: {
    primaryKeyword: "m4a to text",
    supportingKeywords: ["m4a to text converter", "convert m4a to text free", "transcribe m4a file", "m4a transcription online"],
    guideTitle: "What to know about M4A before you transcribe it",
    guideIntro:
      "M4A is a container rather than a codec: an MPEG-4 file that holds only audio. Knowing where your file came from and what is inside it explains most of the problems people run into.",
    sections: [
      {
        title: "Where M4A files come from",
        paragraphs: [
          "iPhone Voice Memos, Zoom's local audio-only recording, GarageBand exports and many Android recorder apps all save M4A. Podcast editors and screen recorders often offer it as a smaller alternative to WAV.",
          "Because the container is the same as MP4 video, an M4A file may show up as audio/mp4 in some apps. That is expected and does not affect transcription.",
        ],
      },
      {
        title: "AAC or Apple Lossless inside",
        paragraphs: [
          "Most M4A files contain AAC, a compressed codec that every major browser can decode. iPhone Voice Memos can also record in Apple Lossless when Audio Quality is set to Lossless; those files are several times larger and may not open in every browser.",
          "Speech recognition gains nothing from lossless audio: EarScribe resamples every file to 16 kHz mono before Whisper reads it. If a lossless memo fails to load or runs out of memory, export a compressed copy and transcribe that.",
        ],
      },
      {
        title: "Keeping the timestamps useful",
        paragraphs: [
          "Each transcript segment keeps the time it was spoken in the file. Click it to hear the source, correct the words, and the same timing goes into SRT and VTT exports.",
          "If you trimmed the M4A in another app, transcribe the trimmed version you plan to publish so the subtitle timing lines up with it.",
        ],
      },
    ],
    checklistTitle: "Before you export an M4A transcript",
    checklist: [
      { title: "Source file", body: "Transcribe the original recording rather than a re-compressed copy." },
      { title: "Quality setting", body: "Lossless memos are large; use a compressed export for long recordings." },
      { title: "Names and numbers", body: "Search for each one and replay it before you share." },
      { title: "Format", body: "TXT for notes, SRT or VTT for video, JSON for your own tools." },
    ],
    limitsTitle: "What this page does not cover",
    limits: [
      "Copy-protected .m4p files cannot be decoded in the browser.",
      "Video files such as MP4 or MOV are not accepted yet; export the audio as M4A first.",
    ],
    imageSrc: image,
    imageAlt: "M4A recording transcribed into timestamped, editable text",
  },
  "zh-CN": {
    primaryKeyword: "m4a转文字",
    supportingKeywords: ["m4a转文字 免费", "m4a转文字 在线", "m4a录音转文字", "m4a文件转文字"],
    guideTitle: "转写 M4A 之前值得知道的事",
    guideIntro: "M4A 是一种容器，不是编码格式：它是只装音频的 MPEG-4 文件。弄清文件从哪里来、里面装的是什么，大多数常见问题就有了答案。",
    sections: [
      {
        title: "M4A 文件从哪里来",
        paragraphs: [
          "iPhone 语音备忘录、Zoom 本地录制的纯音频文件、GarageBand 导出，以及很多安卓录音 App 保存的都是 M4A。播客剪辑软件和录屏软件也常把它作为比 WAV 更小的导出选项。",
          "因为和 MP4 视频是同一种容器，有些软件会把 M4A 显示为 audio/mp4。这很正常，不影响转文字。",
        ],
      },
      {
        title: "里面是 AAC 还是无损",
        paragraphs: [
          "大多数 M4A 装的是 AAC 压缩音频，主流浏览器都能解码。iPhone 语音备忘录在音质设为“无损”时会使用 Apple Lossless，文件会大好几倍，而且不一定所有浏览器都能打开。",
          "无损音质对语音识别没有帮助：EarScribe 会先把所有文件转成 16 kHz 单声道，再交给 Whisper。如果无损录音加载失败或内存不足，另存一份压缩版本再转写即可。",
        ],
      },
      {
        title: "让时间戳真正有用",
        paragraphs: [
          "每一段文字都保留它在录音里出现的时间。点击即可回听原声、修改文字，同样的时间会带进导出的 SRT 和 VTT。",
          "如果你在其他软件里剪过这段 M4A，就转写准备发布的那个剪辑版本，字幕时间才会对得上。",
        ],
      },
    ],
    checklistTitle: "导出 M4A 文字稿之前",
    checklist: [
      { title: "原始文件", body: "转写原始录音，不要用反复压缩过的副本。" },
      { title: "音质设置", body: "无损录音体积大，长录音用压缩版本处理。" },
      { title: "人名和数字", body: "逐个搜索并回听，确认后再分享。" },
      { title: "导出格式", body: "笔记用 TXT，视频用 SRT 或 VTT，自己的工具用 JSON。" },
    ],
    limitsTitle: "这个页面不能处理的情况",
    limits: [
      "带版权保护的 .m4p 文件无法在浏览器里解码。",
      "暂不支持 MP4、MOV 等视频文件，请先把音频导出为 M4A。",
    ],
    imageSrc: image,
    imageAlt: "M4A 录音转成可编辑、带时间戳的文字",
  },
  ja: {
    primaryKeyword: "m4a 文字起こし",
    supportingKeywords: ["m4a 文字起こし 無料", "m4a テキスト変換", "m4a 録音 文字起こし", "m4a 文字起こし オンライン"],
    guideTitle: "M4Aを文字起こしする前に知っておきたいこと",
    guideIntro: "M4Aはコーデックではなくコンテナで、音声だけを入れたMPEG-4ファイルです。ファイルの出どころと中身がわかれば、よくあるトラブルはほとんど説明できます。",
    sections: [
      {
        title: "M4Aはどこで作られるか",
        paragraphs: [
          "iPhoneのボイスメモ、Zoomのローカル録画に含まれる音声のみのファイル、GarageBandの書き出し、多くのAndroid録音アプリがM4Aで保存します。ポッドキャスト編集ソフトや画面録画ソフトでも、WAVより小さい形式として選べることがよくあります。",
          "MP4動画と同じコンテナなので、アプリによってはaudio/mp4と表示されます。これは正常で、文字起こしには影響しません。",
        ],
      },
      {
        title: "中身はAACかロスレスか",
        paragraphs: [
          "多くのM4AにはAACの圧縮音声が入っていて、主要なブラウザならデコードできます。iPhoneのボイスメモは音質を「非圧縮（ロスレス）」にするとApple Losslessで録音し、ファイルが数倍大きくなるうえ、ブラウザによっては開けません。",
          "音声認識にロスレスの利点はありません。EarScribeはどのファイルも16 kHzのモノラルに変換してからWhisperに渡します。ロスレスのメモが読み込めない、またはメモリ不足になる場合は、圧縮版を書き出して文字起こししてください。",
        ],
      },
      {
        title: "タイムスタンプを活かす",
        paragraphs: [
          "文字起こしの各区間には、録音内で話された時刻が残ります。クリックすると元の音声を聞いて修正でき、同じタイミングがSRTやVTTにも反映されます。",
          "別のアプリでM4Aを編集した場合は、公開する編集後のファイルを文字起こしすると、字幕のタイミングがずれません。",
        ],
      },
    ],
    checklistTitle: "M4Aの文字起こしを書き出す前に",
    checklist: [
      { title: "元のファイル", body: "再圧縮したコピーではなく、元の録音を使う。" },
      { title: "音質設定", body: "ロスレスは容量が大きいので、長い録音は圧縮版で処理する。" },
      { title: "人名と数字", body: "一つずつ検索して聞き直してから共有する。" },
      { title: "書き出し形式", body: "メモはTXT、動画はSRTかVTT、自作ツールにはJSON。" },
    ],
    limitsTitle: "このページで扱えないもの",
    limits: [
      "著作権保護された.m4pファイルはブラウザでデコードできません。",
      "MP4やMOVなどの動画ファイルにはまだ対応していません。先に音声をM4Aとして書き出してください。",
    ],
    imageSrc: image,
    imageAlt: "M4Aの録音を編集できるタイムスタンプ付きテキストに変換した画面",
  },
};
