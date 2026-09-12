import type { SubtitleExample } from "@/components/SubtitleConverter";
import type { ToolLocale } from "@/lib/site-routes";
import { parseSubtitles, toText } from "@/lib/subtitle-convert";
import type { CodeSample, ToolGuide } from "@/lib/tool-page-seo";
import type { ToolPageDefinition } from "@/lib/tool-pages";

const image = "/screenshots/02-transcript-showcase.webp";

/** Rolling captions in the style of YouTube's auto-generated WebVTT. */
const EXAMPLES: Record<ToolLocale, SubtitleExample> = {
  en: {
    fileName: "auto-captions.en.vtt",
    // Joined from an array so the single-space lines YouTube writes stay visible.
    text: [
      "WEBVTT",
      "Kind: captions",
      "Language: en",
      "",
      "00:00:00.000 --> 00:00:02.310 align:start position:0%",
      " ",
      "welcome<00:00:00.480><c> back</c><00:00:00.960><c> to</c><00:00:01.200><c> the</c><00:00:01.440><c> show</c>",
      "",
      "00:00:02.310 --> 00:00:02.320 align:start position:0%",
      "welcome back to the show",
      " ",
      "",
      "00:00:02.320 --> 00:00:05.200 align:start position:0%",
      "welcome back to the show",
      "today<00:00:02.800><c> we're</c><00:00:03.100><c> talking</c><00:00:03.400><c> about</c><00:00:03.700><c> attention</c>",
      "",
      "00:00:08.400 --> 00:00:11.000 align:start position:0%",
      " ",
      "so<00:00:08.700><c> what</c><00:00:08.900><c> actually</c><00:00:09.300><c> helps</c>",
      "",
    ].join("\n"),
  },
  "zh-CN": {
    fileName: "auto-captions.zh.vtt",
    text: `WEBVTT
Kind: captions
Language: zh-Hans

00:00:00.000 --> 00:00:02.300
欢迎回到节目

00:00:02.300 --> 00:00:04.800
欢迎回到节目
今天我们来聊聊注意力

00:00:07.500 --> 00:00:09.600
今天我们来聊聊注意力
那到底什么才有用呢
`,
  },
  ja: {
    fileName: "auto-captions.ja.vtt",
    text: `WEBVTT
Kind: captions
Language: ja

00:00:00.000 --> 00:00:02.300
番組へようこそ

00:00:02.300 --> 00:00:04.800
番組へようこそ
今日は集中力の話をします

00:00:07.500 --> 00:00:09.600
今日は集中力の話をします
では何が本当に役立つのでしょう
`,
  },
};

const LAYOUT_LABELS: Record<ToolLocale, { plain: string; timestamps: string; paragraphs: string; source: string }> = {
  en: { plain: "Text", timestamps: "Lines with timestamps", paragraphs: "Paragraphs", source: "Auto-generated captions (VTT)" },
  "zh-CN": { plain: "纯文本", timestamps: "每行带时间戳", paragraphs: "合并成段落", source: "自动生成的字幕（VTT）" },
  ja: { plain: "テキスト", timestamps: "タイムスタンプ付きの行", paragraphs: "段落にまとめる", source: "自動生成字幕（VTT）" },
};

function cues(locale: ToolLocale) {
  return parseSubtitles(EXAMPLES[locale].text).cues;
}

function workflowSamples(locale: ToolLocale): CodeSample[] {
  return [
    { label: LAYOUT_LABELS[locale].source, code: EXAMPLES[locale].text.trim() },
    { label: LAYOUT_LABELS[locale].plain, code: toText(cues(locale), { layout: "lines", dedupe: true }) },
  ];
}

function guideSamples(locale: ToolLocale): CodeSample[] {
  return [
    { label: LAYOUT_LABELS[locale].timestamps, code: toText(cues(locale), { layout: "timestamps", dedupe: true }) },
    { label: LAYOUT_LABELS[locale].paragraphs, code: toText(cues(locale), { layout: "paragraphs", dedupe: true }) },
  ];
}

export const SRT_TO_TXT_PAGE: ToolPageDefinition = {
  slug: "srt-to-txt",
  resultTab: "subtitles",
  converter: { mode: "to-txt", examples: EXAMPLES },
  copy: {
    en: {
      title: "Convert SRT or VTT subtitles to plain text",
      description:
        "Turn SRT or WebVTT subtitles into clean text, with or without timestamps, as lines or paragraphs. Removes repeated auto-caption lines. Runs in your browser.",
      eyebrow: "Subtitles to text",
      intro:
        "Subtitle files are full of numbers, timing lines and tags. Paste an SRT or VTT file and get readable text back, with timestamps kept or removed and repeated auto-caption lines cleaned up. Nothing is uploaded.",
      benefits: [
        "With or without timestamps",
        "Cleans up repeated auto-caption lines",
        "Nothing uploaded, no account",
      ],
      workflowTitle: "From subtitle file to readable text",
      workflow: [
        { title: "Add the subtitles", body: "Drop a .srt or .vtt file, choose one from your device, or paste the text." },
        { title: "Choose a layout", body: "One line per subtitle, the same with timestamps, or paragraphs that break where the speaker pauses." },
        { title: "Copy or download", body: "Copy the text into your notes, or download it as a .txt file." },
      ],
      tipsTitle: "Getting useful text out of subtitles",
      tips: [
        "Keep timestamps when you'll quote from the text later; they tell you where to check the video.",
        "Paragraph mode starts a new paragraph after a pause of two seconds or more, which often marks a new thought or speaker.",
        "Auto-generated captions repeat each line as it scrolls. Leave \"Remove repeated lines\" on for those.",
      ],
      faq: [
        { q: "How do I remove the timecodes from an SRT file?", a: "Choose \"One line per subtitle\" or \"Paragraphs\". Cue numbers, timing lines and formatting tags are removed, and only the spoken text is kept." },
        { q: "Can I keep the timestamps?", a: "Yes. \"Lines with timestamps\" puts each line's start time in front of it, for example [00:01:05]." },
        { q: "Why does text from auto-generated captions repeat?", a: "Auto-generated captions scroll: each cue repeats the previous line and adds a new one. EarScribe skips a line when it matches the line just before it, which removes the repetition and leaves everything else alone." },
        { q: "Does it work with Chinese and Japanese subtitles?", a: "Yes. In paragraph mode, Chinese and Japanese lines are joined without adding spaces, and if a file shows garbled characters you can pick its encoding, such as GB18030 or Shift_JIS." },
      ],
      screenshotAlt: "Subtitle file converted to plain text",
    },
    "zh-CN": {
      title: "SRT、VTT 字幕转 TXT 文本",
      description: "把 SRT 或 WebVTT 字幕转成干净的文本：可以保留或去掉时间戳，按行或合并成段落，还能去掉自动字幕的重复行。在浏览器里完成。",
      eyebrow: "字幕转文本",
      intro: "字幕文件里满是序号、时间轴和标签。粘贴 SRT 或 VTT，就能得到可读的文本：时间戳可留可去，自动字幕的重复行会被清理，文件不上传。",
      benefits: ["可保留或去掉时间戳", "清理自动字幕的重复行", "文件不上传，无需账号"],
      workflowTitle: "从字幕文件到可读文本",
      workflow: [
        { title: "放入字幕", body: "拖入 .srt 或 .vtt 文件、从设备选择，或者直接粘贴文本。" },
        { title: "选择排版", body: "每条字幕一行、每行带时间戳，或者在说话停顿处分段的段落。" },
        { title: "复制或下载", body: "把文本复制到笔记里，或下载成 .txt 文件。" },
      ],
      tipsTitle: "从字幕里拿到好用的文本",
      tips: [
        "之后要引用原话时，保留时间戳，方便回到视频里核对。",
        "段落模式在停顿两秒以上时换段，这通常对应换了话题或换了人说话。",
        "自动生成的字幕会滚动重复上一行，处理这类字幕时保持“去掉重复行”开启。",
      ],
      faq: [
        { q: "怎样去掉 SRT 里的时间轴？", a: "选择“每条字幕一行”或“合并成段落”。序号、时间轴和格式标签都会被去掉，只保留说的话。" },
        { q: "可以保留时间戳吗？", a: "可以。“每行带时间戳”会在每行前面加上开始时间，比如 [00:01:05]。" },
        { q: "为什么自动字幕转出来的文字会重复？", a: "自动生成的字幕是滚动显示的：每条都会重复上一行再加一行新内容。EarScribe 遇到和上一行完全相同的行会跳过，只去掉重复，其他内容不动。" },
        { q: "中文字幕合并段落时会多出空格吗？", a: "不会。中文和日文的行在合并时不加空格。如果文件出现乱码，可以在列表里选择 GB18030、Big5 等编码。" },
      ],
      screenshotAlt: "字幕文件转成的纯文本",
    },
    ja: {
      title: "SRT・VTT字幕をテキストに変換",
      description: "SRTやWebVTTの字幕を読みやすいテキストに。タイムスタンプの有無、行ごとか段落かを選べ、自動字幕の重複行も削除します。ブラウザ内で完結。",
      eyebrow: "字幕 テキスト変換",
      intro: "字幕ファイルは番号、タイミング行、タグだらけです。SRTやVTTを貼り付けると読みやすいテキストになり、タイムスタンプは残すことも消すこともでき、自動字幕の重複行も整理されます。アップロードはしません。",
      benefits: ["タイムスタンプの有無を選べる", "自動字幕の重複行を整理", "アップロードなし・アカウント不要"],
      workflowTitle: "字幕ファイルから読めるテキストまで",
      workflow: [
        { title: "字幕を入れる", body: ".srtか.vttファイルをドロップするか、端末から選ぶか、テキストを貼り付けます。" },
        { title: "レイアウトを選ぶ", body: "字幕ごとに1行、タイムスタンプ付きの行、または話の間で区切る段落から選びます。" },
        { title: "コピーまたはダウンロード", body: "テキストをメモにコピーするか、.txtファイルとしてダウンロードします。" },
      ],
      tipsTitle: "字幕から使えるテキストを取り出すコツ",
      tips: [
        "あとで発言を引用するなら、タイムスタンプを残すと動画で確認しやすくなります。",
        "段落モードは2秒以上の間があると改段します。話題や話者が変わる所と重なることが多いです。",
        "自動生成字幕はスクロールしながら前の行を繰り返します。その場合は「重複する行を削除」をオンのままにしてください。",
      ],
      faq: [
        { q: "SRTからタイムコードを消すには？", a: "「字幕ごとに1行」か「段落にまとめる」を選びます。字幕番号、タイミング行、書式タグが削除され、話した言葉だけが残ります。" },
        { q: "タイムスタンプは残せますか？", a: "はい。「タイムスタンプ付きの行」を選ぶと、各行の前に [00:01:05] のような開始時刻が付きます。" },
        { q: "自動字幕のテキストが重複するのはなぜですか？", a: "自動生成字幕はスクロール表示のため、各字幕が前の行を繰り返してから新しい行を足します。EarScribeは直前と同じ行を飛ばすので、重複だけが消えてほかはそのまま残ります。" },
        { q: "日本語の字幕を段落にすると余計なスペースが入りますか？", a: "入りません。日本語や中国語の行はスペースなしでつなぎます。文字化けする場合は、一覧からShift_JISなどの文字コードを選べます。" },
      ],
      screenshotAlt: "字幕ファイルから変換したテキスト",
    },
  },
};

export const SRT_TO_TXT_GUIDES: Record<ToolLocale, ToolGuide> = {
  en: {
    primaryKeyword: "srt to txt",
    supportingKeywords: ["vtt to txt", "srt to text without timecode", "srt to txt with timestamps", "subtitle file to text"],
    guideTitle: "Three ways to read a subtitle file as text",
    guideIntro:
      "The same file can become a clean script, a timestamped log or readable paragraphs. Pick the layout for what you'll do with the text next.",
    sections: [
      {
        title: "What gets removed",
        paragraphs: [
          "Cue numbers, timing lines, the WebVTT header, NOTE and STYLE blocks, formatting tags such as <i> and <font>, and positioning codes like {\\an8} are all removed. Speaker tags such as <v Anna> become \"Anna:\" so you can still tell who is talking.",
          "Line breaks inside a subtitle exist only to fit the screen, so each line becomes its own line of text, and lines in paragraph mode flow together.",
        ],
      },
      {
        title: "Timestamps or not",
        paragraphs: [
          "Without timestamps you get a clean script for reading, translating or searching. With timestamps, each line starts with its time, such as [00:01:05], which makes quotes easy to verify against the video.",
          "Paragraph mode joins lines into running text and starts a new paragraph after a pause of two seconds or more between subtitles. Chinese and Japanese lines are joined without spaces.",
        ],
      },
      {
        title: "Cleaning up auto-generated captions",
        paragraphs: [
          "Automatically generated captions, such as YouTube's, are written as rolling lines: every cue repeats the previous line, some last only a few milliseconds, and word-level timing tags sit inside the text.",
          "With \"Remove repeated lines\" on, EarScribe strips the word timing and skips any line identical to the one before it, so each sentence appears once.",
        ],
      },
    ],
    checklistTitle: "Before you use the text",
    checklist: [
      { title: "Speakers", body: "Subtitles rarely name speakers; add names where they matter." },
      { title: "Punctuation", body: "Auto-captions often lack punctuation; add it before publishing." },
      { title: "Quotes", body: "Keep timestamps for any line you plan to quote." },
      { title: "Source", body: "Keep the subtitle file; plain text loses the timing." },
    ],
    limitsTitle: "Limits",
    limits: [
      "The text is only as accurate as the subtitles; mistakes in the captions stay in the text.",
      "It reads SRT and WebVTT; formats such as ASS or TTML aren't supported.",
    ],
    imageSrc: image,
    imageAlt: "Subtitle cues turned into plain text",
    workflowSamples: workflowSamples("en"),
    guideSamples: guideSamples("en"),
  },
  "zh-CN": {
    primaryKeyword: "srt转txt",
    supportingKeywords: ["vtt转txt", "srt转txt 工具", "字幕转文本", "srt 去掉时间轴"],
    guideTitle: "把字幕文件读成文本的三种方式",
    guideIntro: "同一个文件，可以变成干净的文稿、带时间的记录，或者便于阅读的段落。按接下来要做的事选择排版。",
    sections: [
      {
        title: "会去掉哪些内容",
        paragraphs: [
          "序号、时间轴、WebVTT 文件头、NOTE 和 STYLE 块、<i>、<font> 等格式标签，以及 {\\an8} 这类定位代码都会被去掉。<v 张三> 这样的说话人标签会变成“张三:”，仍然看得出是谁在说。",
          "字幕里的换行只是为了适应屏幕宽度，所以每一行都会单独成行；在段落模式下，这些行会连成一段。",
        ],
      },
      {
        title: "要不要时间戳",
        paragraphs: [
          "不带时间戳，得到的是适合阅读、翻译或搜索的干净文稿。带时间戳时，每行以时间开头，比如 [00:01:05]，引用原话时方便回到视频核对。",
          "段落模式把各行连成一段，字幕之间停顿两秒以上就换段。中文和日文合并时不加空格。",
        ],
      },
      {
        title: "清理自动生成的字幕",
        paragraphs: [
          "YouTube 等平台自动生成的字幕是滚动写法：每条都会重复上一行，有的只持续几毫秒，文字里还夹着逐字的时间标签。",
          "开启“去掉重复行”后，EarScribe 会去掉逐字时间，并跳过与上一行完全相同的行，每句话只保留一次。",
        ],
      },
    ],
    checklistTitle: "使用文本之前",
    checklist: [
      { title: "说话人", body: "字幕很少标注说话人，重要的地方请补上名字。" },
      { title: "标点", body: "自动字幕常常没有标点，发布前补上。" },
      { title: "引用", body: "准备引用的句子保留时间戳。" },
      { title: "原文件", body: "保留字幕文件，纯文本会丢失时间信息。" },
    ],
    limitsTitle: "限制",
    limits: [
      "文本的准确度取决于字幕本身，字幕里的错误会原样留在文本里。",
      "只读取 SRT 和 WebVTT，不支持 ASS、TTML 等格式。",
    ],
    imageSrc: image,
    imageAlt: "字幕转成的纯文本",
    workflowSamples: workflowSamples("zh-CN"),
    guideSamples: guideSamples("zh-CN"),
  },
  ja: {
    primaryKeyword: "vtt テキスト 抽出",
    supportingKeywords: ["srt テキスト 変換", "srt txt 変換", "vtt テキスト 変換", "字幕 テキスト 抽出"],
    guideTitle: "字幕ファイルをテキストとして読む3つの方法",
    guideIntro: "同じファイルから、きれいな原稿、タイムスタンプ付きの記録、読みやすい段落を作れます。テキストを次に何に使うかでレイアウトを選んでください。",
    sections: [
      {
        title: "削除されるもの",
        paragraphs: [
          "字幕番号、タイミング行、WebVTTの見出し、NOTE・STYLEブロック、<i>や<font>などの書式タグ、{\\an8}のような位置指定コードはすべて削除されます。<v 山田>のような話者タグは「山田:」になり、誰の発言かは残ります。",
          "字幕内の改行は画面に収めるためだけのものなので、各行はそれぞれ1行のテキストになり、段落モードではつながった文章になります。",
        ],
      },
      {
        title: "タイムスタンプを残すかどうか",
        paragraphs: [
          "タイムスタンプなしなら、読む・翻訳する・検索するためのきれいな原稿になります。ありにすると各行が [00:01:05] のような時刻で始まり、引用を動画で確認しやすくなります。",
          "段落モードは行をつなげて文章にし、字幕の間に2秒以上の間があると改段します。日本語と中国語はスペースなしでつなぎます。",
        ],
      },
      {
        title: "自動生成字幕の整理",
        paragraphs: [
          "YouTubeなどの自動生成字幕はスクロール形式で書かれています。各字幕が前の行を繰り返し、数ミリ秒しかない字幕もあり、テキストの中に単語ごとのタイミングタグが入っています。",
          "「重複する行を削除」をオンにすると、EarScribeは単語ごとのタイミングを取り除き、直前と同じ行を飛ばすので、各文が1回ずつ残ります。",
        ],
      },
    ],
    checklistTitle: "テキストを使う前に",
    checklist: [
      { title: "話者", body: "字幕に話者名はほとんどないので、必要な所に名前を加える。" },
      { title: "句読点", body: "自動字幕は句読点が少ないので、公開前に補う。" },
      { title: "引用", body: "引用する行はタイムスタンプを残す。" },
      { title: "元ファイル", body: "テキストだけではタイミングが失われるので、字幕ファイルも残す。" },
    ],
    limitsTitle: "制限",
    limits: [
      "テキストの正確さは字幕次第で、字幕の誤りはそのままテキストに残ります。",
      "読み込めるのはSRTとWebVTTで、ASSやTTMLなどには対応していません。",
    ],
    imageSrc: image,
    imageAlt: "字幕から変換したテキスト",
    workflowSamples: workflowSamples("ja"),
    guideSamples: guideSamples("ja"),
  },
};
