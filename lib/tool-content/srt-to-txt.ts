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
      title: "Convert SRT to TXT, or VTT to text, for free",
      metaTitle: "SRT to TXT: what 24 timestamps carried | EarScribe",
      description:
        "SRT to TXT in the browser: 24 timestamps and 388 of 923 bytes disappear, leaving 535 bytes of words in 12 paragraphs. Paste or drop a file; free, no upload.",
      eyebrow: "Subtitles to text",
      intro:
        "Subtitle files are full of numbers, timing lines and tags. Paste an SRT or VTT file and get readable text back, with timestamps kept or removed and repeated auto-caption lines cleaned up. Nothing is uploaded.",
      benefits: [
        "With or without timestamps",
        "Cleans up repeated auto-caption lines",
        "Nothing uploaded, no account",
      ],
      workflowTitle: "Free subtitle to text in three steps",
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
      title: "SRT 转文本：三种排版，和要删的重复行",
      metaTitle: "SRT 转文本：三种排版，去掉重复行 | EarScribe",
      description:
        "把 SRT 或 WebVTT 转成能读的文本：纯文本、带时间码、段落三种排版，自动字幕的重复行可以去掉，中文和日文合并不插空格。转换在浏览器里完成，文件不上传。",
      eyebrow: "字幕转文本",
      intro:
        "字幕文件里全是序号、时间轴和格式标签。粘贴 SRT 或 WebVTT，就能拿到真正能读的文字：三种排版任选，自动字幕的重复行可以去掉，中文和日文合并时不插空格。文件不上传。",
      benefits: [
        "纯文本、带时间码、段落三种排版",
        "自动字幕的重复行可以去掉",
        "浏览器内完成，文件不上传",
      ],
      workflowTitle: "把字幕变成文本，只要三步",
      workflow: [
        { title: "放入字幕", body: "拖入 .srt 或 .vtt 文件、从设备选择，或者直接把字幕文本粘贴进来。" },
        { title: "选择排版", body: "纯文本、每行带时间码，或者合并成段落；自动字幕记得打开「去掉重复行」。" },
        { title: "复制或下载", body: "复制到笔记里，或下载成 .txt 文件。" },
      ],
      tipsTitle: "让提取出来的文本更好用",
      tips: [
        "要引用、要回听核对，就选「每行带时间戳」；时间码只有开始时刻，精确到秒。",
        "「合并成段落」按 2 秒以上的停顿换段，不按标点切；中文和日文之间不补空格。",
        "「去掉重复行」是启发式规则，只跳过和上一行完全相同的行，删完请扫一眼有没有误删。",
      ],
      faq: [
        { q: "怎样去掉 SRT 里的时间码？", a: "选「每条字幕一行」或「合并成段落」。序号、时间轴、格式标签和逐字时间都会被去掉，只留下说的话。" },
        { q: "可以保留时间码吗？", a: "可以。选「每行带时间戳」，每行前面会加上开始时刻，比如 [00:01:05]，精确到秒。" },
        { q: "为什么自动字幕转出来的文字会重复？", a: "自动生成的字幕是滚动写法：每条都会把上一行原样带上，再加一行新的。打开「去掉重复行」后，和上一行完全相同的行会被跳过。这是启发式规则，不是 100% 准确，建议删完再看一遍。" },
        { q: "中文字幕合并段落时会多出空格吗？", a: "不会。中文、日文和全角标点之间不补空格；只有一边是英文或数字时才补一个空格。句子按原文的 。！？ 来读，换段只看 2 秒以上的停顿。出现乱码可以在编码列表里选 GB18030 或 Big5。" },
      ],
      screenshotAlt: "字幕文件转成的纯文本",
    },
    ja: {
      title: "SRT テキスト 変換：3つのレイアウトと重複行の整理",
      metaTitle: "SRT テキスト 変換：3つのレイアウトと重複行の整理 | EarScribe",
      description:
        "SRT・WebVTTの字幕を読めるテキストに変換します。テキストのみ、タイムコード付き、段落の3つから選べ、自動字幕の重複行も削除できます。中国語と日本語はスペースを入れずにつなぎます。変換はブラウザ内で完結し、アップロードはしません。",
      eyebrow: "字幕 テキスト変換",
      intro:
        "字幕ファイルは番号、タイミング行、書式タグだらけです。SRTかWebVTTを貼り付けると読めるテキストになり、レイアウトは3つから選べます。自動字幕の重複行も削除でき、中国語と日本語はスペースを入れずにつなぎます。ファイルはアップロードしません。",
      benefits: [
        "テキスト・タイムコード付き・段落の3種類",
        "自動字幕の重複行を削除",
        "ブラウザ内で完結、アップロードなし",
      ],
      workflowTitle: "字幕をテキストにする3ステップ",
      workflow: [
        { title: "字幕を読み込む", body: ".srtか.vttをドロップするか、端末から選ぶか、字幕テキストを貼り付けます。" },
        { title: "レイアウトを選ぶ", body: "テキストのみ、タイムコード付きの行、段落にまとめる、の3つから選びます。自動字幕なら「重複する行を削除」をオンにします。" },
        { title: "コピーまたは保存", body: "メモにコピーするか、.txtファイルとしてダウンロードします。" },
      ],
      tipsTitle: "取り出したテキストを使いやすくする",
      tips: [
        "引用や聞き直しに使うなら「タイムスタンプ付きの行」を選びます。タイムコードは開始時刻だけで、秒単位です。",
        "「段落にまとめる」は2秒以上の間で改段し、句読点では切りません。日本語と中国語の間にはスペースを入れません。",
        "「重複する行を削除」は目安のルールで、直前の行と完全に同じ行だけを飛ばします。削除後に一度目を通してください。",
      ],
      faq: [
        { q: "SRTからタイムコードを消すには？", a: "「字幕ごとに1行」か「段落にまとめる」を選びます。字幕番号、タイミング行、書式タグ、単語ごとのタイミングが削除され、話した言葉だけが残ります。" },
        { q: "タイムコードは残せますか？", a: "はい。「タイムスタンプ付きの行」を選ぶと、各行の前に [00:01:05] のような開始時刻が付きます。秒単位で、終了時刻は入りません。" },
        { q: "自動字幕のテキストが重複するのはなぜですか？", a: "自動生成字幕はスクロール形式で、各字幕が前の行をそのまま持ち越してから新しい行を足します。「重複する行を削除」をオンにすると、直前と完全に同じ行だけを飛ばします。目安のルールなので100%正確ではなく、削除後に確認してください。" },
        { q: "日本語の字幕を段落にすると余計なスペースが入りますか？", a: "入りません。日本語・中国語・全角の句読点の間にはスペースを入れず、片側が英数字のときだけ1つ入れます。文は元の 。！？ で読み、改段は2秒以上の間だけで決まります。文字化けする場合はShift_JISなどを選べます。" },
      ],
      screenshotAlt: "字幕ファイルから変換したテキスト",
    },
  },
};

export const SRT_TO_TXT_GUIDES: Record<ToolLocale, ToolGuide> = {
  en: {
    primaryKeyword: "srt to txt",
    supportingKeywords: [
      "vtt to txt",
      "srt to text without timecode",
      "subtitle file to text",
    ],
    // The page's point: dropping the timecodes is not lossless, and the loss can
    // be counted — 24 timestamps and 388 of 923 bytes go, 535 bytes of words stay.
    guideTitle: "SRT to TXT: what 24 timestamps were carrying",
    guideIntro:
      "Stripping a subtitle file takes 24 timestamps and 388 of its 923 bytes, and leaves 535 bytes of words in 12 paragraphs. That is the right trade when the text is going somewhere that cannot read timecodes — and the wrong one the moment someone needs to find the sentence again.",
    sections: [
      {
        title: "What comes out, measured",
        paragraphs: [
          "On our 34-second clip the converter turned 12 cues into 12 paragraphs and 94 words, one paragraph every 2.8 seconds on average. Every timestamp is gone — 2 per cue, 24 in total — and with them the only way back to the audio.",
          "The file also loses the cue boundaries: a sentence split across two cues becomes two paragraphs, or one joined sentence, depending on the setting. That choice is the section below, and it is not cosmetic.",
        ],
        table: {
          caption:
            "One transcript exported with the app's own formatters. SRT bytes include the sequence numbers and timestamps; TXT keeps only the words.",
          source: "content/guides/data/subtitle-roundtrip.json",
          columns: ["", "SRT", "TXT"],
          rows: [
            ["Bytes", "923", "535"],
            ["Cues or paragraphs", "12", "12"],
            ["Timestamps", "24", "0"],
            ["Words", "94", "94"],
          ],
        },
      },
      {
        title: "Three ways to read the same file",
        paragraphs: [
          "One paragraph per cue keeps the rhythm of the subtitles — useful for transcripts meant to be read as speech. Joining everything into prose reads better but hides where one speaker stopped.",
          "Keeping timestamps as a prefix (00:00:02 → text) is the compromise: heavier to read, but every line can still be found in the audio. If the text will be quoted or checked, use this one.",
        ],
      },
    ],
    checklistTitle: "Before the text replaces the subtitles",
    checklist: [
      {
        title: "Keep the .srt",
        body: "The text cannot rebuild timings. 923 bytes of SRT is the only copy that can put a sentence back at 00:00:02,300.",
      },
      {
        title: "Decide the paragraph rule",
        body: "One paragraph per cue preserves what was said line by line; merged prose reads better but loses the pauses.",
      },
      {
        title: "Check duplicated caption lines",
        body: "Auto-captions repeat the previous line inside the next cue. Left in, they double the text and read like a stutter.",
      },
    ],
    limitsTitle: "Where plain text stops being enough",
    limits: [
      "Without timestamps there is no way back to the recording, so a disputed word becomes a re-listen of the whole file rather than a five-second jump.",
      "Speaker changes vanish with the cue boundaries — text has no idea that the second person started talking at 00:00:12.",
    ],
    imageSrc: "/screenshots/guides/transcript-result-top.webp",
    imageAlt: "SRT to TXT: subtitle text exported beside the editor",
  },
  "zh-CN": {
    primaryKeyword: "srt 转文本",
    supportingKeywords: ["srt转txt", "vtt 转文本", "srt 转文本 在线", "字幕转文本"],
    guideTitle: "SRT 转文本：三种排版，和真正要洗的重复行",
    guideIntro:
      "同一份自动字幕，转三次会得到三种东西：3 行纯文本、3 行带时间码、2 个段落；关掉「去掉重复行」则是 5 行，多出来的 2 行完全是重复的。下面三张表里的数字，都能对着本页示例一条条数出来。",
    sections: [
      {
        title: "三种排版，转出来分别长什么样",
        paragraphs: [
          "同一份 SRT 或 WebVTT，换一个排版就换一种结果，但文字本身不变：变的只是时间码留不留、行要不要连成段。下表是本页示例字幕（3 条字幕、5 行文字）开启「去掉重复行」后的真实输出。",
          "纯文本只留说的话，序号、时间轴、格式标签和逐字时间都不见了，适合阅读、翻译和全文搜索。带时间码在每行前面加一个开始时刻，方便回到视频里核对。合并成段落把行连起来，遇到 2 秒以上的停顿才换段。",
          "三种排版都能一键复制，或下载成 .txt。选哪种只看接下来要拿它做什么，和准确度无关。",
          "同一份示例字幕是 3 条、5 行文字：纯文本和带时间码都输出 3 行，段落版本只有 2 段。原因在时间轴——第 1 条和第 2 条首尾相接，间隔 0 秒，第 2 条和第 3 条之间隔了 2.7 秒，正好越过 2 秒的换段线。",
        ],
        table: {
          caption:
            "本页示例字幕（3 条字幕、5 行文字）开启「去掉重复行」后的真实输出。表中用「／」表示换行，时间码只标开始时刻，精确到秒。",
          columns: ["排版", "输出（节选）", "适合用来"],
          rows: [
            [
              "纯文本",
              "欢迎回到节目／今天我们来聊聊注意力／那到底什么才有用呢",
              "阅读、翻译、全文搜索",
            ],
            [
              "带时间码",
              "[00:00:00] 欢迎回到节目／[00:00:02] 今天我们来聊聊注意力／[00:00:07] 那到底什么才有用呢",
              "引用原话、回听核对",
            ],
            [
              "合并成段落",
              "欢迎回到节目今天我们来聊聊注意力（空行）那到底什么才有用呢",
              "通读、当讲稿底稿",
            ],
          ],
        },
      },
      {
        title: "自动字幕会重复上一行",
        paragraphs: [
          "常见平台的自动字幕是滚动生成的：每条新字幕会把上一行原样带上，再补一行新的，于是同一句话在文本里出现两次；为了把上一行顶上去，中间还会插进只存在几毫秒的字幕。",
          "打开「去掉重复行」后，EarScribe 会把每行和紧挨着的上一行比较（比较前先合并连续空白、去掉首尾空白），完全相同就跳过。下表是同一份自动字幕在关闭和开启时的纯文本输出。",
          "这是启发式规则，不是 100% 准确，两个方向都可能出错：它只认「和上一行一模一样」，换个近义写法、错一个字、或者滚动时被拆成两半的重复，都认不出来；反过来，如果说话人真的连着说了两遍同一句话，第二遍也会被删掉。删完请扫一眼开头和结尾。",
          "拿示例数一遍：5 行里有 2 行是上一行的原样复制（第 2 行同第 1 行，第 4 行同第 3 行），去重后只剩 3 行。滚动字幕几乎每条都拖着上一行，所以真实素材里这个比例只会更高，三十分钟的访谈跑下来，文本差不多翻倍。",
        ],
        table: {
          caption:
            "同一份自动字幕（3 条字幕、5 行文字）在关闭与开启「去掉重复行」时的纯文本输出。规则只比较相邻两行，不做语义判断。",
          columns: ["#", "关闭「去掉重复行」", "开启「去掉重复行」"],
          rows: [
            ["1", "欢迎回到节目", "欢迎回到节目"],
            ["2", "欢迎回到节目", "今天我们来聊聊注意力"],
            ["3", "今天我们来聊聊注意力", "那到底什么才有用呢"],
            ["4", "今天我们来聊聊注意力", "—"],
            ["5", "那到底什么才有用呢", "—"],
          ],
        },
      },
      {
        title: "中文和日文合并时不加空格",
        paragraphs: [
          "英文用空格分词，中文和日文不用。合并段落时，如果上一行结尾和下一行开头都是中日韩字符或全角标点，EarScribe 直接拼接，不插空格：段落输出示例里「欢迎回到节目」和「今天我们来聊聊注意力」之间就没有空格。",
          "只要有一边是英文、数字或半角符号，就会补一个空格——这是唯一会插入空格的情况，也是中英混排该有的样子。",
          "句子在哪断开，由字幕里原有的 。！？、 决定；工具不会补标点，也不会按标点切开。换段只看时间：两条字幕之间停了 2 秒以上才另起一段，所以一个段落里连着两个句子很正常。日文同理，按原文的 。！？ 读句，全角标点前后同样不补空格。竖排字幕转成文本后仍是一行行文字，合并规则不变。",
        ],
      },
      {
        title: "时间码留着，还是去掉",
        paragraphs: [
          "要引用、要复核、要交给剪辑，就留着：每行以 [00:01:05] 这样的开始时刻打头。它只有开始时刻，精确到秒，没有结束时刻——够你跳到那一句，不够用来重新生成字幕。",
          "只阅读、翻译、搜索或喂给别的工具，就去掉。这个操作不可逆：文本里再也找不回 00:00:02,300 这样的位置，原字幕文件要另外留着。",
          "下表是 34 秒样本的字节账，能看清去掉的到底是什么。",
          "账是这样：923 字节的 SRT 去掉 24 个时间码和 12 个序号，少了 388 字节，剩 535 字节全是文字；12 条字幕落成 12 个段落，94 个词一个没少。那 388 字节占原文件的四成多，走的全是结构，不是内容。",
        ],
        table: {
          caption:
            "同一份 34 秒样本用页面自带的格式器导出。SRT 的字节数包含序号和时间码；TXT 只留文字。",
          source: "content/guides/data/subtitle-roundtrip.json",
          columns: ["", "SRT", "TXT"],
          rows: [
            ["字节", "923", "535"],
            ["字幕条数／段落数", "12", "12"],
            ["时间码", "24", "0"],
            ["词数", "94", "94"],
          ],
        },
      },
      {
        title: "SRT 转文本能读哪些文件，文件去了哪里",
        paragraphs: [
          "输入支持 SRT 和 WebVTT，输出是 TXT。ASS/SSA、TTML、SBV 都不支持；扩展名是 .txt 但内容是字幕的文件可以读，因为格式按内容判断，不看后缀。",
          "提取文字时，WebVTT 的 NOTE、STYLE、REGION 块和定位设置会被丢掉，逐字时间标签也会去掉，<v 张三> 会变成行首的「张三:」，至少还看得出是谁在说。",
          "编码先按 UTF-8 读，读不通时中文默认按 GB18030 再读一次，也可以手动换。文件不出浏览器：解析和转换都在当前标签页里完成，没有上传。",
        ],
      },
    ],
    checklistTitle: "换掉字幕之前",
    checklist: [
      {
        title: "留下原文件",
        body: "文本重建不了时间码。要回到 00:00:02,300，只有原 SRT 做得到。",
      },
      {
        title: "确认重复行开关",
        body: "自动字幕打开「去掉重复行」，人工字幕关掉，避免删掉真实的重复。",
      },
      { title: "补标点", body: "自动字幕常常没有标点，发布前补上，中文和日文尤其需要。" },
      { title: "引用处留时间码", body: "准备引用的句子用「每行带时间戳」导出，方便回听核对。" },
    ],
    limitsTitle: "这套转换做不到什么",
    limits: [
      "只读 SRT 和 WebVTT，ASS、TTML、SBV 需要先转成这两种格式。",
      "「去掉重复行」只比较相邻两行是否完全相同，是启发式：既可能漏掉近似重复，也可能误删真实的重复。",
      "去掉时间码不可逆，文本里没有位置信息，也没有说话人识别。",
    ],
    imageSrc: image,
    imageAlt: "字幕转成的纯文本",
    workflowSamples: workflowSamples("zh-CN"),
    guideSamples: guideSamples("zh-CN"),
  },
  ja: {
    primaryKeyword: "srt テキスト 変換",
    supportingKeywords: ["vtt テキスト 変換", "字幕 テキスト 変換", "srt txt 変換", "字幕 テキスト 抽出"],
    guideTitle: "SRT テキスト 変換：3つのレイアウトと、消すべき重複行",
    guideIntro:
      "同じ自動字幕でも、変換のしかたで結果は3通りになります。3行のテキスト、3行のタイムコード付き、2段落。重複行の削除をオフにすると5行になり、増えた2行はまったく同じ文です。以下の数字は、このページのサンプルを実際に変換した結果です。",
    sections: [
      {
        title: "3つのレイアウトと、それぞれの出力",
        paragraphs: [
          "同じSRT・WebVTTでも、レイアウトを変えると結果が変わります。文字そのものは同じで、変わるのはタイムコードを残すかどうかと、行を段落につなぐかどうかです。次の表は、このページのサンプル字幕（3件・5行）を「重複する行を削除」オンで変換した実際の出力です。",
          "テキストのみは話した言葉だけを残し、番号・タイミング行・書式タグ・単語ごとのタイミングは消えます。読む・翻訳する・全文検索に向いています。タイムコード付きは各行の先頭に開始時刻が付き、動画で確認しやすくなります。段落は行をつなぎ、2秒以上の間があるところで改段します。",
          "どれもコピーするか.txtで保存できます。どれを選ぶかは、次にそのテキストを何に使うかで決まります。精度の違いではありません。",
          "このページのサンプルは3字幕・5行です。テキストのみとタイムコード付きはどちらも3行、段落は2段落になります。理由はタイムコードで、1つ目と2つ目は間隔0秒でつながり、2つ目と3つ目の間は2.7秒あくため、2秒の改段ラインを越えます。",
        ],
        table: {
          caption:
            "このページのサンプル字幕（3件・5行）を「重複する行を削除」オンで変換した実際の出力。「／」は改行を表し、タイムコードは開始時刻のみ、秒単位です。",
          columns: ["レイアウト", "出力（抜粋）", "向いている用途"],
          rows: [
            [
              "テキストのみ",
              "番組へようこそ／今日は集中力の話をします／では何が本当に役立つのでしょう",
              "読む・翻訳・全文検索",
            ],
            [
              "タイムコード付き",
              "[00:00:00] 番組へようこそ／[00:00:02] 今日は集中力の話をします／[00:00:07] では何が本当に役立つのでしょう",
              "引用・聞き直し",
            ],
            [
              "段落",
              "番組へようこそ今日は集中力の話をします（空行）では何が本当に役立つのでしょう",
              "通読・原稿の下書き",
            ],
          ],
        },
      },
      {
        title: "自動字幕は前の行をくり返す",
        paragraphs: [
          "一般的なプラットフォームの自動字幕はスクロール形式です。新しい字幕が前の行をそのまま引き継ぎ、そこに新しい行を足すため、同じ文がテキストに2回現れます。前の行を押し上げるためだけの、数ミリ秒しか出ない字幕も入ります。",
          "「重複する行を削除」をオンにすると、各行を直前の行と比べ（比較前に連続する空白をまとめ、前後の空白を除きます）、完全に同じなら飛ばします。次の表は同じ自動字幕を、オフとオンで変換したテキストのみの出力です。",
          "これは目安のルールで、100%正確ではありません。取りこぼすことも、消しすぎることもあります。まったく同じ行しか認識しないので、言い換え・1文字違い・スクロールの途中で半分に切れた重複は残ります。逆に、話者が本当に同じ文を2回言った場合も2回目が消えます。削除したら最初と最後に目を通してください。",
          "サンプルで数えると、5行のうち2行が直前の行のコピーです（2行目は1行目と同じ、4行目は3行目と同じ）。削除すると3行が残ります。スクロール字幕はほぼ毎回前の行を引き継ぐので、実際の素材ではこの割合はもっと高くなり、30分のインタビューならテキストは2倍近くに膨らみます。",
        ],
        table: {
          caption:
            "同じ自動字幕（3件・5行）を「重複する行を削除」オフとオンで変換したテキストのみの出力。ルールは隣り合う2行を比べるだけで、意味は判断しません。",
          columns: ["#", "オフ", "オン"],
          rows: [
            ["1", "番組へようこそ", "番組へようこそ"],
            ["2", "番組へようこそ", "今日は集中力の話をします"],
            ["3", "今日は集中力の話をします", "では何が本当に役立つのでしょう"],
            ["4", "今日は集中力の話をします", "—"],
            ["5", "では何が本当に役立つのでしょう", "—"],
          ],
        },
      },
      {
        title: "中国語と日本語はスペースを入れずにつなぐ",
        paragraphs: [
          "英語はスペースで語を区切りますが、中国語と日本語は区切りません。段落にまとめるとき、前の行の末尾と次の行の先頭がどちらも日中韓の文字か全角の句読点なら、そのままつなぎます。段落の出力例でも「番組へようこそ」と「今日は集中力の話をします」の間にスペースは入りません。",
          "どちらか一方が英数字や半角記号なら、スペースを1つ入れます。スペースが入るのはこの場合だけで、混在した文章としては自然な形です。",
          "文の切れ目は、字幕に元からある 。！？、 で読みます。ツールが句読点を補うことも、句読点で分割することもありません。改段は時間だけで決まり、字幕と字幕の間に2秒以上の間があるときだけ新しい段落になります。1つの段落に文が2つ続くこともあります。日本語も同じで、全角の句読点の前後にもスペースを入れません。縦書きの字幕も変換後は1行ずつのテキストになり、つなぎ方は変わりません。",
        ],
      },
      {
        title: "タイムコードを残すか、消すか",
        paragraphs: [
          "引用する、聞き直す、編集ソフトに渡すなら残します。各行の先頭に [00:01:05] のような開始時刻が付きます。開始時刻だけで秒単位、終了時刻は入りません。その一文へ飛ぶには足り、字幕を作り直すには足りません。",
          "読む・翻訳する・検索する・別のツールに渡すなら消します。この操作は元に戻せません。テキストから 00:00:02,300 の位置は取り出せないので、元の字幕ファイルは別に残してください。",
          "次の表は34秒のサンプルのバイト数です。何が消えるのかが数字で分かります。",
          "内訳はこうです。923バイトのSRTから24個のタイムコードと12個の番号を外すと388バイト減って、残る535バイトがすべて文字になります。12字幕は12段落になり、94語は1語も減りません。消えた388バイトは元ファイルの4割強で、中身は構造だけです。",
        ],
        table: {
          caption:
            "同じ34秒のサンプルを、このページの形式変換で書き出したもの。SRTのバイト数には番号とタイムコードが含まれ、TXTは文字だけです。",
          source: "content/guides/data/subtitle-roundtrip.json",
          columns: ["", "SRT", "TXT"],
          rows: [
            ["バイト", "923", "535"],
            ["字幕数／段落数", "12", "12"],
            ["タイムコード", "24", "0"],
            ["語数", "94", "94"],
          ],
        },
      },
      {
        title: "SRT テキスト 変換で読めるファイルと、その行き先",
        paragraphs: [
          "入力はSRTとWebVTT、出力はTXTです。ASS/SSA、TTML、SBVには対応していません。拡張子が.txtでも中身が字幕なら読めます。形式は中身で判断し、拡張子では判断しません。",
          "テキストを取り出すとき、WebVTTのNOTE・STYLE・REGIONブロックや位置指定は削除され、単語ごとのタイミングも消えます。<v 山田>は行頭の「山田:」になり、誰の発言かは分かります。",
          "文字コードはまずUTF-8で読み、読めないときは日本語ならShift_JISで読み直します。一覧から手動で選ぶこともできます。ファイルはブラウザの外に出ません。解析も変換も開いているタブの中で完結します。",
        ],
      },
    ],
    checklistTitle: "字幕を置き換える前に",
    checklist: [
      {
        title: "元ファイルを残す",
        body: "テキストからタイムコードは戻せません。00:00:02,300 に戻れるのは元のSRTだけです。",
      },
      {
        title: "重複削除の設定を確認",
        body: "自動字幕ならオン、人が作った字幕ならオフにして、本当のくり返しを消さないようにします。",
      },
      { title: "句読点を補う", body: "自動字幕は句読点が少ないので、公開前に補います。日本語と中国語では特に重要です。" },
      { title: "引用する行はタイムコード付きで", body: "引用する文は「タイムスタンプ付きの行」で書き出すと、聞き直しやすくなります。" },
    ],
    limitsTitle: "この変換でできないこと",
    limits: [
      "読み込めるのはSRTとWebVTTだけです。ASS、TTML、SBVは先にどちらかへ変換してください。",
      "「重複する行を削除」は隣り合う行が完全に同じかどうかだけを見る目安のルールで、近い重複を取りこぼすことも、本当のくり返しを消すこともあります。",
      "タイムコードを消すと元に戻せません。テキストに位置情報は残らず、話者の自動識別もありません。",
    ],
    imageSrc: image,
    imageAlt: "字幕から変換したテキスト",
    workflowSamples: workflowSamples("ja"),
    guideSamples: guideSamples("ja"),
  },
};
