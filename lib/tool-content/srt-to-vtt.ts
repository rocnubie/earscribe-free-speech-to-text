import type { SubtitleExample } from "@/components/SubtitleConverter";
import type { ToolLocale } from "@/lib/site-routes";
import { parseSubtitles, toSrt, toVtt } from "@/lib/subtitle-convert";
import type { CodeSample, ToolGuide } from "@/lib/tool-page-seo";
import type { ToolPageDefinition } from "@/lib/tool-pages";

const image = "/screenshots/02-transcript-showcase.webp";

const EXAMPLES: Record<ToolLocale, SubtitleExample> = {
  en: {
    fileName: "episode-12.srt",
    text: `1
00:00:00,000 --> 00:00:05,200
Welcome back to the show. Today we're talking
with a researcher who studies attention at work.

2
00:00:05,700 --> 00:00:11,180
Thanks for having me. The first thing I tell people
is that interruptions aren't <i>really</i> the problem.

3
00:00:11,580 --> 00:00:13,580
Really? Then what is?
`,
  },
  "zh-CN": {
    fileName: "episode-12.srt",
    text: `1
00:00:00,000 --> 00:00:05,200
欢迎回到节目。今天我们请到了
一位研究职场注意力的学者。

2
00:00:05,700 --> 00:00:11,180
谢谢邀请。我常跟大家说的第一件事是：
打断其实<i>并不是</i>真正的问题。

3
00:00:11,580 --> 00:00:13,580
真的吗？那问题是什么？
`,
  },
  ja: {
    fileName: "episode-12.srt",
    text: `1
00:00:00,000 --> 00:00:05,200
番組へようこそ。今日は職場での
集中力を研究している方をお迎えしました。

2
00:00:05,700 --> 00:00:11,180
お招きありがとうございます。まずお伝えしたいのは、
中断そのものは<i>実は</i>問題ではないということです。

3
00:00:11,580 --> 00:00:13,580
本当ですか？では何が問題なんでしょう？
`,
  },
};

/** WebVTT features that SRT cannot carry, used to show what conversion drops. */
const VTT_FEATURES: Record<ToolLocale, string> = {
  en: `WEBVTT

NOTE Episode 12, exported from the editor

STYLE
::cue(v[voice="Host"]) { color: #7dd3fc; }

00:00:11.580 --> 00:00:13.580 line:10% align:start
<v Host>Really? Then what is?

00:00:13.580 --> 00:00:19.020
<v Guest>Getting back. After a short break,
most of us need a few minutes to find our place.
`,
  "zh-CN": `WEBVTT

NOTE 第 12 期，从剪辑软件导出

STYLE
::cue(v[voice="主持人"]) { color: #7dd3fc; }

00:00:11.580 --> 00:00:13.580 line:10% align:start
<v 主持人>真的吗？那问题是什么？

00:00:13.580 --> 00:00:19.020
<v 嘉宾>是回到原来的状态。短暂休息之后，
大多数人需要好几分钟才能重新进入状态。
`,
  ja: `WEBVTT

NOTE 第12回、編集ソフトから書き出し

STYLE
::cue(v[voice="司会"]) { color: #7dd3fc; }

00:00:11.580 --> 00:00:13.580 line:10% align:start
<v 司会>本当ですか？では何が問題なんでしょう？

00:00:13.580 --> 00:00:19.020
<v ゲスト>元の作業に戻ることです。少し休むと、
多くの人は再開までに数分かかります。
`,
};

const SAMPLE_LABELS: Record<ToolLocale, { input: string; output: string; vttSource: string; srtResult: string }> = {
  en: { input: "SRT (input)", output: "WebVTT (output)", vttSource: "WebVTT (input)", srtResult: "SRT (output)" },
  "zh-CN": { input: "转换前 · SRT", output: "转换后 · WebVTT", vttSource: "VTT 原文件", srtResult: "转成 SRT 之后" },
  ja: { input: "変換前 · SRT", output: "変換後 · WebVTT", vttSource: "VTT の元ファイル", srtResult: "SRT に変換後" },
};

function workflowSamples(locale: ToolLocale): CodeSample[] {
  const srt = EXAMPLES[locale].text;
  return [
    { label: SAMPLE_LABELS[locale].input, code: srt.trim() },
    { label: SAMPLE_LABELS[locale].output, code: toVtt(parseSubtitles(srt).cues).trim() },
  ];
}

function guideSamples(locale: ToolLocale): CodeSample[] {
  const vtt = VTT_FEATURES[locale];
  return [
    { label: SAMPLE_LABELS[locale].vttSource, code: vtt.trim() },
    { label: SAMPLE_LABELS[locale].srtResult, code: toSrt(parseSubtitles(vtt).cues).trim() },
  ];
}

export const SRT_TO_VTT_PAGE: ToolPageDefinition = {
  slug: "srt-to-vtt",
  resultTab: "subtitles",
  converter: { mode: "srt-vtt", examples: EXAMPLES },
  copy: {
    en: {
      title: "Free SRT to VTT converter (and VTT to SRT)",
      metaTitle: "SRT to VTT: 12 cues in, 12 out, 19 bytes | EarScribe",
      description:
        "SRT to VTT in the browser: the same cues and timings, a dot instead of a comma and a WEBVTT header line. Paste or drop a file; nothing is uploaded, free.",
      eyebrow: "SRT ⇄ VTT converter",
      intro:
        "SRT and WebVTT carry the same timed lines in slightly different syntax. Paste subtitles or drop a .srt or .vtt file: EarScribe detects the format, converts it in your browser and tells you when something couldn't be carried over.",
      benefits: [
        "Works both ways: SRT to VTT and VTT to SRT",
        "Warns about positions and styles SRT can't keep",
        "Nothing uploaded, no account",
      ],
      workflowTitle: "Convert subtitles for free in three steps",
      workflow: [
        { title: "Add the subtitles", body: "Drop a .srt or .vtt file, choose one from your device, or paste the text. The format is detected automatically." },
        { title: "Check the output format", body: "The other format is selected for you. Check the number of cues and any warning about dropped settings." },
        { title: "Copy or download", body: "Copy the result, or download it with the original file name and the new extension." },
      ],
      tipsTitle: "Which format to use where",
      tips: [
        "Web players built on the HTML5 <track> element read WebVTT. If subtitles don't show up in a web player, a VTT file is usually the fix.",
        "Video editors such as Premiere Pro and DaVinci Resolve import SRT, and YouTube accepts both formats.",
        "Keep the original file: converting VTT to SRT drops positioning and styling you can't get back.",
      ],
      faq: [
        { q: "What's the difference between SRT and VTT?", a: "Both list cues with a start time, an end time and text. WebVTT starts with a WEBVTT header, uses a dot before the milliseconds (00:00:01.000 instead of 00:00:01,000), doesn't need cue numbers, and supports positioning, styling and notes that SRT lacks." },
        { q: "Is anything lost when converting VTT to SRT?", a: "Cue settings such as position and alignment, STYLE and REGION blocks, and NOTE comments have no SRT equivalent and are dropped. Speaker tags like <v Anna> become \"Anna:\" at the start of the line, while bold, italic and underline are kept." },
        { q: "My file shows strange characters. What happened?", a: "Older subtitle files are often saved in a legacy encoding rather than UTF-8. EarScribe tries UTF-8 first, then falls back to a common legacy encoding; if characters still look wrong, choose the right encoding from the list. The result is always saved as UTF-8." },
        { q: "Are my subtitle files uploaded?", a: "No. Reading and converting happen in your browser tab, so the file never leaves your device." },
      ],
      screenshotAlt: "The same subtitle cues in SRT and WebVTT",
    },
    "zh-CN": {
      title: "SRT 转 VTT 免费在线转换（也支持 VTT 转 SRT）",
      description:
        "SRT 转 VTT 只是把逗号换成点、补一行 WEBVTT，文字和时间轴都不动。粘贴文本或拖入文件即可，全程在浏览器里完成，文件不上传，也不用注册。",
      eyebrow: "SRT ⇄ VTT 转换",
      intro:
        "SRT 和 WebVTT 存的是同一批带时间的字幕，只是写法不一样：SRT 用逗号分隔毫秒，WebVTT 用点，还要以 WEBVTT 开头。把字幕粘贴进来，或拖入 .srt、.vtt 文件，EarScribe 会自己判断是哪种格式、在浏览器里转好，转不过去的内容会单独告诉你。",
      benefits: [
        "两个方向都能转：SRT 转 VTT，VTT 转 SRT",
        "转回 SRT 之前，先告诉你哪些设置会丢",
        "文件不上传，不用账号",
      ],
      workflowTitle: "三步完成转换",
      workflow: [
        { title: "把字幕放进来", body: "拖入 .srt 或 .vtt 文件、从设备里选一个，或者直接粘贴文本。是哪种格式，不用你告诉它。" },
        { title: "看一眼输出", body: "目标格式已经替你选好。核对字幕条数有没有变少，再看有没有「设置被去掉」的提示。" },
        { title: "复制或下载", body: "复制转换结果，或者用原文件名加新扩展名下载，比如 episode-12.srt 变成 episode-12.vtt。" },
      ],
      tipsTitle: "哪种格式用在什么地方",
      tips: [
        "网页播放器（HTML5 的 <track>）只认 WebVTT。字幕在网页播放器里不显示，换成 VTT 基本就好了。",
        "Premiere Pro、DaVinci Resolve 这类剪辑软件导入的是 SRT，YouTube 两种都收。",
        "转换前留一份原文件：VTT 转成 SRT，位置和样式就没了，找不回来。",
      ],
      faq: [
        { q: "SRT 转 VTT 到底改了什么？", a: "三处。WebVTT 的第一行必须是 WEBVTT，SRT 没有这一行；毫秒前用点号（00:00:01.000，不是 00:00:01,000）；每条字幕上面的序号可以不要，这里的转换会去掉。文字和时间轴都不动。" },
        { q: "VTT 转 SRT 会丢东西吗？", a: "会。position、align 这类写在时间轴行上的 cue 设置，STYLE、REGION 块和 NOTE 注释，SRT 里没有对应写法，会被删掉。<v 主持人> 这样的说话人标签会变成行首的「主持人: 」，粗体、斜体、下划线会保留。" },
        { q: "打开是乱码，怎么办？", a: "早年做的字幕常存成 GBK/GB18030、Big5，而不是 UTF-8。EarScribe 先按 UTF-8 读，读不通就换 GB18030 再读一次并提示你；也可以在下拉列表里手动选编码。转换结果一律按 UTF-8 输出。" },
        { q: "字幕文件会被上传吗？", a: "不会。读取和转换都在当前这个标签页里跑，文件不会离开你的设备，也不下载任何模型。" },
      ],
      screenshotAlt: "同一组字幕的 SRT 和 WebVTT 写法",
    },
    ja: {
      title: "SRT VTT 変換をブラウザで無料（双方向）",
      description:
        "SRT VTT 変換は、カンマをピリオドに変えて WEBVTT の行を足すだけ。テキストもタイムコードも変わりません。貼り付けかファイル選択だけで、変換はブラウザ内で完結し、アップロードも登録も要りません。",
      eyebrow: "SRT ⇄ VTT 変換",
      intro:
        "SRTとWebVTTは、同じ時間付きの字幕を違う書き方で持っているだけです。SRTはミリ秒の前にカンマ、WebVTTはピリオドを使い、1行目にWEBVTTが必要です。字幕を貼り付けるか.srt・.vttファイルを選ぶと、EarScribeが形式を判定してブラウザ内で変換し、引き継げなかった項目は別に知らせます。",
      benefits: ["SRT→VTTもVTT→SRTも変換できる", "SRTに戻す前に、失われる設定を先に知らせる", "アップロードなし・アカウント不要"],
      workflowTitle: "3ステップで変換",
      workflow: [
        { title: "字幕を入れる", body: ".srtか.vttファイルをドロップするか、端末から選ぶか、テキストを貼り付けます。形式は自動で判定されるので、指定する必要はありません。" },
        { title: "出力を確認する", body: "変換先はもう一方の形式が選ばれています。字幕の数が減っていないか、設定が削除されたという注意が出ていないかを見てください。" },
        { title: "コピーかダウンロード", body: "結果をコピーするか、episode-12.srt が episode-12.vtt になるように、元のファイル名のままダウンロードします。" },
      ],
      tipsTitle: "どちらの形式をどこで使うか",
      tips: [
        "HTML5の<track>を使うWebプレーヤーが読むのはWebVTTです。Webプレーヤーで字幕が出ないときは、VTTにすればほぼ解決します。",
        "Premiere ProやDaVinci Resolveなどの編集ソフトが読み込むのはSRTで、YouTubeはどちらの形式も受け付けます。",
        "元のファイルは残しておいてください。VTTをSRTにすると、位置やスタイルは戻せません。",
      ],
      faq: [
        { q: "SRTをVTTにすると何が変わる？", a: "3か所です。WebVTTは1行目がWEBVTTでなければならず、SRTにはその行がありません。ミリ秒の前はピリオド（00:00:01.000、00:00:01,000ではありません）。各字幕の上の番号は不要なので、この変換では削除します。テキストとタイムコードはそのままです。" },
        { q: "VTTをSRTにすると何か失われますか？", a: "失われます。タイムコード行に書くposition・alignなどのキュー設定、STYLE・REGIONブロック、NOTEのメモは、SRTに置き場所がないため削除されます。<v 司会>のような話者タグは行頭の「司会: 」になり、太字・斜体・下線は残ります。" },
        { q: "文字化けしたときは？", a: "少し前の字幕は、UTF-8ではなくShift_JISで保存されていることがよくあります。EarScribeはまずUTF-8で読み、読めなければShift_JISで読み直して知らせます。一覧から手動で選ぶこともできます。出力は常にUTF-8です。" },
        { q: "字幕ファイルはアップロードされますか？", a: "されません。読み込みも変換もこのタブの中で完結し、ファイルは端末の外に出ません。モデルのダウンロードもありません。" },
      ],
      screenshotAlt: "同じ字幕のSRTとWebVTTの書き方",
    },
  },
};

export const SRT_TO_VTT_GUIDES: Record<ToolLocale, ToolGuide> = {
  en: {
    primaryKeyword: "srt to vtt",
    supportingKeywords: [
      "vtt to srt",
      "srt to vtt converter online",
      "convert subtitles srt vtt",
    ],
    // The conversion is mechanical, so the page can be checked: same cues, same
    // timing, and a smaller file. Everything else is the three syntax changes.
    guideTitle: "SRT to VTT: 12 cues in, 12 cues out, 19 bytes smaller",
    guideIntro:
      "Converting is a syntax change, not a transcription step: the same 12 cues come back with the same text and the same millisecond timings, in a file 19 bytes smaller than the SRT because WebVTT does not number its cues. Three things change, and all three can break a player if a tool gets them wrong.",
    sections: [
      {
        title: "The three things that change",
        paragraphs: [
          "WebVTT needs a WEBVTT line at the top; SRT has no header. SRT writes decimals with a comma, WebVTT with a dot. WebVTT does not require a sequence number over each cue, and the exporter here drops it — which is why the output is smaller even though it gained a header.",
          "That is the whole diff on our 34-second clip: 923 bytes of SRT became 904 bytes of WebVTT, with 10 fewer lines because the twelve numbers disappeared. Text and timing parsed back identical.",
          "What the conversion does not touch is the cue lengths: they run from 1 second to 6.2 with a mean of 2.8, and four of the twelve are exactly one second — a chunk boundary rather than a spoken sentence. Fixing that is a re-cut, not a format change.",
        ],
        table: {
          caption:
            "One transcript exported with the app's own formatters and parsed back. Byte counts are UTF-8; timings compared to the millisecond.",
          source: "content/guides/data/subtitle-roundtrip.json",
          columns: ["", "SRT", "WebVTT"],
          rows: [
            ["Cues", "12", "12"],
            ["Bytes", "923", "904"],
            ["Lines", "48", "38"],
            ["Timestamp separator", "comma", "dot"],
            ["Header line", "none", "WEBVTT"],
            ["Cue numbers", "yes", "no"],
          ],
        },
      },
      {
        title: "What actually breaks a player",
        paragraphs: [
          "A file that starts with a byte-order mark before WEBVTT is treated as invalid by some parsers, and a file saved without the header at all is not WebVTT regardless of its extension. Both come from editors that re-save the file, not from the conversion.",
          "The other silent failure is an extension that lies: a .vtt that still contains comma decimals will fail in browsers while opening fine in a desktop player that guesses the format. Converting again from the original SRT fixes it; trimming the file by hand usually does not.",
        ],
      },
    ],
    checklistTitle: "Before the .vtt goes to a player",
    checklist: [
      {
        title: "First line is WEBVTT",
        body: "Not WEBVTT with a byte-order mark in front of it, and not a blank line first. This one check rules out most “invalid VTT” errors.",
      },
      {
        title: "Decimals are dots",
        body: "00:00:02.300, not 00:00:02,300. A mixed file plays in some tools and fails in browsers, which is the worst kind of failure to debug.",
      },
      {
        title: "Timings survived",
        body: "Compare the first and last cue against the source: on our clip the round trip was millisecond-identical, so a difference means the file was re-timed by an editor.",
      },
    ],
    limitsTitle: "Where a conversion cannot help",
    limits: [
      "SRT carries no styling, so nothing about fonts, position or speaker colours survives — a VTT with STYLE blocks has to be written, not converted.",
      "If the source cues were already too long for the line limit, converting does not shorten them: that is the re-cut step, not the format step.",
    ],
    imageSrc: "/screenshots/guides/transcript-result-top.webp",
    imageAlt: "SRT to VTT: exported captions beside the subtitle editor",
    workflowSamples: [
      {
        label: "episode-12.srt (input)",
        code: `1
00:00:00,000 --> 00:00:05,200
Welcome back to the show. Today we're talking
with a researcher who studies attention at work.

2
00:00:05,700 --> 00:00:11,180
srt-to-vtt`,
      },
    ],
  },
  "zh-CN": {
    primaryKeyword: "srt转vtt",
    supportingKeywords: ["vtt转srt", "srt转vtt 在线", "vtt转srt 在线", "字幕格式转换", "webvtt 转换"],
    guideTitle: "SRT 转 VTT：12 条字幕进去，12 条出来，文件还小了 19 字节",
    guideIntro:
      "转换不是重新听写，只是把写法换掉：12 条字幕、同样的文字、毫秒不差的时间点，转完还少了 19 字节，因为 WebVTT 不用写序号。真正变的只有三处，任何一处被工具改错，播放器就直接不认这个文件。",
    sections: [
      {
        title: "改的只有这三处",
        paragraphs: [
          "第一，WebVTT 的第一行必须是 WEBVTT，SRT 没有文件头。第二，秒和毫秒之间：SRT 用逗号（00:00:01,000），WebVTT 用点（00:00:01.000）。第三，每条字幕上面的序号，WebVTT 不要求写，这里的转换会把它去掉——所以明明多了一行文件头，文件反而更小了。",
          "拿一段 34 秒的素材实测：923 字节的 SRT 变成 904 字节的 WebVTT，行数从 48 降到 38。12 个序号没了，同时多了 WEBVTT 和它下面那行空行，一进一出正好净少 10 行。再解析回来，12 条字幕的文字和毫秒时间一条不差。",
          "时间轴完全没动：不挪时间、不合并、不拆分。原来每条字幕多长，转完还是多长。短得来不及读、长得一行放不下，那是切分造成的，得回去重剪，换格式救不了。",
          "样本里这三条能一条条算：第 1 条 5.2 秒，第 2 条 5.5 秒，第 3 条 2.0 秒，整段 13.58 秒。转成 WebVTT 之后还是这三段，秒数一个没变——变的只有序号、文件头和那个逗号。",
          "把样本放大到真实素材，19 字节和 10 行的账才看得清：一份 30 分钟的访谈，按每条字幕 3–5 秒算，大约 360–600 条字幕，也就有 360–600 个序号和 720–1200 个时间码；转成 VTT 之后序号一个都不用写，时间码照旧留在每段开头，少掉的正好是那 360–600 个序号。这是估算，不是实测，但方向不会反。",
        ],
        table: {
          caption:
            "同一份转录用页面自带的转换器导出，再解析回来。字节数按 UTF-8 计算，时间比对到毫秒。",
          source: "content/guides/data/subtitle-roundtrip.json",
          columns: ["", "SRT", "WebVTT"],
          rows: [
            ["字幕条数", "12", "12"],
            ["字节数", "923", "904"],
            ["行数", "48", "38"],
            ["时间戳分隔符", "逗号", "点"],
            ["文件头", "无", "WEBVTT"],
            ["字幕序号", "有", "无"],
          ],
        },
      },
      {
        title: "SRT转VTT 之后播放器打不开，多半是这两个原因",
        paragraphs: [
          "WEBVTT 前面多一个 BOM 的文件，有些解析器直接判为无效；连 WEBVTT 这一行都没有的文件，扩展名写成 .vtt 也不是 WebVTT。这两件事都是剪辑软件另存时弄出来的，跟转换没关系。",
          "还有一种更隐蔽：扩展名已经是 .vtt，里面的毫秒还在用逗号。浏览器会拒绝加载，桌面播放器却因为自己猜格式而播放正常——这种「我这儿没问题」最难查。从原始 SRT 重新转一次就好，手工改那几个字符通常改不干净。",
        ],
      },
      {
        title: "VTT 转回 SRT，会丢掉什么",
        paragraphs: [
          "SRT 只有「序号 + 时间轴 + 文字」这三样，WebVTT 多出来的功能在 SRT 里没有地方放。写在时间轴行上的位置、对齐设置，还有 STYLE、REGION 块，转换时都会删掉，页面会提示你，位置要回剪辑软件里重新摆。NOTE 注释也一样被删，但这类改动不提示。",
          "说话人标签 <v 主持人> 会变成行首的「主持人: 」，从标签变成普通文字；类名、注音、逐字时间戳这些标签连同标记一起去掉，注音的读音会直接接在汉字后面。粗体、斜体、下划线保留，因为大多数 SRT 播放器都认识这三个标签。",
          "数一遍更清楚：下面这张表列了 10 种写法，能原样带回 SRT 的只有 2 种——粗体斜体下划线，和 &amp; 这类实体；另外 8 种要么整块删掉，要么降级成普通文字。NOTE 注释连提示都没有，cue 设置、STYLE、REGION 就算提示了，位置也只能回剪辑软件重摆。",
        ],
        table: {
          caption: "按 lib/subtitle-convert.ts 里 VTT 转 SRT 的实际处理逐项对照。",
          columns: ["VTT 里的写法", "转成 SRT 之后", "还能找回来吗"],
          rows: [
            ["position、align 等 cue 设置", "删除", "不能，要回剪辑软件重排"],
            ["STYLE 块", "整块删除", "不能"],
            ["REGION 块", "整块删除", "不能"],
            ["NOTE 注释", "整块删除，不给提示", "不能"],
            ["<v 主持人>", "行首的「主持人: 」", "变成文字，不再是标签"],
            ["<c.yellow> 类名", "删标签、留文字", "不能"],
            ["<00:00:12.000> 逐字时间", "删除", "不能"],
            ["<ruby>、<rt> 注音", "删标签，读音接在汉字后面", "不能"],
            ["<b>、<i>、<u>", "原样保留", "能"],
            ["&amp;、&lt; 等实体", "还原成 & 和 <", "能"],
          ],
        },
      },
      {
        title: "乱码不是转换弄出来的",
        paragraphs: [
          "早几年做的字幕，常存成 GBK/GB18030、Big5，而不是 UTF-8。文件不是合法的 UTF-8 时，EarScribe 会改用 GB18030 再读一遍，并告诉你换了编码；下拉列表里也可以自己选 Big5、Shift_JIS。",
          "输出一律是 UTF-8 加普通换行，浏览器、播放器、剪辑软件都能直接读。想彻底躲开这件事，存文件的时候就选 UTF-8，别用「ANSI」。",
        ],
      },
    ],
    checklistTitle: "把 .vtt 交给播放器之前",
    checklist: [
      {
        title: "第一行就是 WEBVTT",
        body: "前面不能有 BOM，也不能先空一行。这一条能排掉大半「invalid VTT」的报错。",
      },
      {
        title: "毫秒前面是点",
        body: "00:00:02.300，不是 00:00:02,300。逗号和点混用的文件，有的工具能播、浏览器却不行，这是最难查的一类故障。",
      },
      {
        title: "时间没被改过",
        body: "拿第一条和最后一条跟原文件对一下。这里转一圈是毫秒级一致，对不上就说明中间被剪辑软件重新对过时间。",
      },
      {
        title: "文件是 UTF-8",
        body: "中文、日文、韩文字幕尤其要看这一项，编码错了，播放器里就是一堆问号和方块。",
      },
    ],
    limitsTitle: "这个转换器做不到的事",
    limits: [
      "SRT 没有样式，字体、位置、说话人颜色都带不过去；带 STYLE 的 VTT 只能写出来，不能靠转换得到。",
      "原来一行就太长，转换不会让它变短。那是重新切分的活，不是换格式的活。",
      "只读写 SRT 和 WebVTT，不支持 ASS、TTML、SBV 这些格式。",
    ],
    imageSrc: image,
    imageAlt: "SRT 和 WebVTT 字幕文件对照",
    workflowSamples: workflowSamples("zh-CN"),
    guideSamples: guideSamples("zh-CN"),
  },
  ja: {
    primaryKeyword: "srt vtt 変換",
    supportingKeywords: ["vtt srt 変換", "vtt srt 変換 サイト", "srt vtt 変換 オンライン", "字幕 形式 変換"],
    guideTitle: "SRT VTT 変換で変わるのは3か所、12字幕はそのまま",
    guideIntro:
      "変換は書き起こし直しではなく、書き方の入れ替えです。同じ12字幕、同じテキスト、ミリ秒まで同じタイムコードのまま、ファイルは19バイト小さくなります。WebVTTは字幕番号を書かないからです。変わるのは3か所だけで、どれか一つを取り違えるとプレーヤーはファイルを読みません。",
    sections: [
      {
        title: "変わるのは3か所だけ",
        paragraphs: [
          "1つ目は1行目のWEBVTTです。SRTにはヘッダーがありません。2つ目はタイムコードの区切りで、SRTはカンマ（00:00:01,000）、WebVTTはピリオド（00:00:01.000）を使います。3つ目は各字幕の上の番号で、WebVTTでは不要なため、この変換では削除します。ヘッダーが1行増えたのにファイルが小さくなるのは、そのためです。",
          "34秒の素材で試すと、923バイトのSRTが904バイトのWebVTTになり、行数は48から38へ減りました。12個の番号が消え、代わりにWEBVTTとその下の空行が2行増えるので、差し引き10行減です。解析し直すと、12字幕のテキストもタイムコードも1件も変わりませんでした。",
          "タイムコードには手を付けません。ずらす・結合する・分割することもないので、字幕の長さは変換の前後で同じです。1行に収まらない長さや読む時間が足りない短さは、形式ではなくカットの問題で、変換では直りません。",
          "サンプルの3字幕はそれぞれ5.2秒・5.5秒・2.0秒、全体で13.58秒です。WebVTTにしてもこの3つの区切りはそのままで、秒数は1つも変わりません。変わるのは番号とヘッダーと、カンマがピリオドになることだけです。",
          "実素材の規模に置き換えると、19バイト・10行の差が見えてきます。30分のインタビューなら、1字幕3〜5秒として360〜600字幕、番号も360〜600個、タイムコードはその2倍の720〜1200個です。WebVTTは番号を書かないので、減るのは番号の360〜600個ぶん。これは試算で、実測ではありません。",
        ],
        table: {
          caption:
            "同じ書き起こしをこのページの変換器で書き出し、もう一度解析したもの。バイト数はUTF-8、タイムコードはミリ秒まで比較しています。",
          source: "content/guides/data/subtitle-roundtrip.json",
          columns: ["", "SRT", "WebVTT"],
          rows: [
            ["字幕の数", "12", "12"],
            ["バイト数", "923", "904"],
            ["行数", "48", "38"],
            ["タイムコードの区切り", "カンマ", "ピリオド"],
            ["ヘッダー行", "なし", "WEBVTT"],
            ["字幕番号", "あり", "なし"],
          ],
        },
      },
      {
        title: "プレーヤーが読まないときの原因は2つ",
        paragraphs: [
          "WEBVTTの前にBOMが付いたファイルは、パーサーによっては無効と判断されます。WEBVTTの行がそもそもないファイルは、拡張子が.vttでもWebVTTではありません。どちらも編集ソフトで保存し直したときに起きるもので、変換が原因ではありません。",
          "見落としやすいのは、拡張子だけ.vttで中身のミリ秒がカンマのままのファイルです。ブラウザは読み込みを拒否し、形式を推測するデスクトッププレーヤーでは普通に再生できてしまいます。元のSRTからもう一度変換すれば直りますが、手で数文字を書き換えても直りきらないことが多いです。",
        ],
      },
      {
        title: "VTTからSRTに戻すと失われるもの",
        paragraphs: [
          "SRTにあるのは「番号・タイムコード・テキスト」の3つだけで、WebVTTの追加機能を置く場所がありません。タイムコード行に書く位置や揃えの設定、STYLE・REGIONブロックは変換時に削除され、画面に注意が出ます。位置は編集ソフトで置き直してください。NOTEのメモも削除されますが、こちらは通知されません。",
          "話者タグの<v 司会>は行頭の「司会: 」になり、タグではなく普通の文字になります。クラス名・ルビ・単語ごとのタイムスタンプはタグごと削除され、ルビの読みは漢字の直後につながります。<b>・<i>・<u>は多くのSRTプレーヤーが解釈するので残します。",
          "数えると分かりやすくなります。次の表は10項目ありますが、そのまま残るのは2項目だけです。太字・斜体・下線と、&amp; などの実体参照です。残りの8項目は削除されるか、ただの文字になります。キュー設定・STYLE・REGION・NOTEの4つは、位置を編集ソフトで置き直す必要があります。",
        ],
        table: {
          caption: "lib/subtitle-convert.ts のVTT→SRT処理に沿って1項目ずつ確認したものです。",
          columns: ["VTTでの書き方", "SRTにした後", "戻せるか"],
          rows: [
            ["position・align などのキュー設定", "削除", "戻せない。編集ソフトで置き直す"],
            ["STYLE ブロック", "まるごと削除", "戻せない"],
            ["REGION ブロック", "まるごと削除", "戻せない"],
            ["NOTE のメモ", "まるごと削除（通知なし）", "戻せない"],
            ["<v 司会>", "行頭の「司会: 」", "文字になり、タグではなくなる"],
            ["<c.yellow> のクラス指定", "タグだけ削除、文字は残る", "戻せない"],
            ["<00:00:12.000> の単語タイムスタンプ", "削除", "戻せない"],
            ["<ruby>・<rt> のルビ", "タグを削除、読みは漢字の直後", "戻せない"],
            ["<b>・<i>・<u>", "そのまま残る", "残せる"],
            ["&amp;・&lt; などの実体参照", "& と < に戻る", "残せる"],
          ],
        },
      },
      {
        title: "文字化けは SRT VTT 変換のせいではありません",
        paragraphs: [
          "少し前に作った字幕は、UTF-8ではなくShift_JISで保存されていることがよくあります。有効なUTF-8でない場合、EarScribeはShift_JISで読み直して、その旨を知らせます。一覧からBig5やGB18030を選ぶこともできます。",
          "出力は常にUTF-8・通常の改行で、ブラウザもプレーヤーも編集ソフトもそのまま読めます。根本的に避けたいなら、保存するときにUTF-8を選んでください。",
        ],
      },
    ],
    checklistTitle: "その.vttをプレーヤーに渡す前に",
    checklist: [
      {
        title: "1行目がWEBVTT",
        body: "前にBOMが付いていないか、空行が入っていないかも見ます。この1点で「invalid VTT」の多くは消えます。",
      },
      {
        title: "ミリ秒の前はピリオド",
        body: "00:00:02.300 であって、00:00:02,300 ではありません。混在したファイルはツールによっては再生でき、ブラウザでは失敗します。いちばん厄介な壊れ方です。",
      },
      {
        title: "タイムコードが変わっていない",
        body: "最初と最後の字幕を元ファイルと比べてください。ここでの往復はミリ秒まで一致するので、ずれていれば編集ソフトで時刻を打ち直されています。",
      },
      {
        title: "文字コードはUTF-8",
        body: "日本語字幕では特に確認を。文字コードを間違えると、プレーヤーでは「？」や四角の並びになります。",
      },
    ],
    limitsTitle: "この変換でできないこと",
    limits: [
      "SRTにはスタイルがないので、フォント・位置・話者ごとの色は引き継げません。STYLE付きのVTTは書くもので、変換して作るものではありません。",
      "元の行が長すぎる場合、変換しても短くなりません。それは切り直しの作業で、形式の作業ではありません。",
      "読み書きできるのはSRTとWebVTTだけで、ASS・TTML・SBVには対応していません。",
    ],
    imageSrc: image,
    imageAlt: "SRTとWebVTTの字幕ファイルの比較",
    workflowSamples: workflowSamples("ja"),
    guideSamples: guideSamples("ja"),
  },
};
