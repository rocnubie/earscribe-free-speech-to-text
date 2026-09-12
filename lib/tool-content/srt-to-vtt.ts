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

function workflowSamples(locale: ToolLocale): CodeSample[] {
  const srt = EXAMPLES[locale].text;
  return [
    { label: "SRT", code: srt.trim() },
    { label: "WebVTT", code: toVtt(parseSubtitles(srt).cues).trim() },
  ];
}

function guideSamples(locale: ToolLocale): CodeSample[] {
  const vtt = VTT_FEATURES[locale];
  return [
    { label: "WebVTT", code: vtt.trim() },
    { label: "SRT", code: toSrt(parseSubtitles(vtt).cues).trim() },
  ];
}

export const SRT_TO_VTT_PAGE: ToolPageDefinition = {
  slug: "srt-to-vtt",
  resultTab: "subtitles",
  converter: { mode: "srt-vtt", examples: EXAMPLES },
  copy: {
    en: {
      title: "Free SRT to VTT converter (and VTT to SRT)",
      description:
        "Convert subtitles between SRT and WebVTT in your browser. Paste text or drop a file and get the other format instantly; nothing is uploaded. Free, no sign-up.",
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
      title: "免费 SRT 转 VTT、VTT 转 SRT 在线转换",
      description: "在浏览器里把字幕在 SRT 和 WebVTT 之间互相转换。粘贴文本或拖入文件，立刻得到另一种格式，文件不上传。免费、无需注册。",
      eyebrow: "SRT ⇄ VTT 转换",
      intro: "SRT 和 WebVTT 装的是同样的带时间字幕，只是写法略有不同。粘贴字幕或拖入 .srt、.vtt 文件，EarScribe 会自动识别格式，在浏览器里完成转换，并提醒你哪些内容无法保留。",
      benefits: ["双向转换：SRT 转 VTT，VTT 转 SRT", "提醒 SRT 保留不了的位置和样式", "文件不上传，无需账号"],
      workflowTitle: "三步免费完成转换",
      workflow: [
        { title: "放入字幕", body: "拖入 .srt 或 .vtt 文件、从设备选择，或者直接粘贴文本，格式会自动识别。" },
        { title: "确认输出格式", body: "默认转成另一种格式。看一下字幕条数，以及有没有设置被去掉的提示。" },
        { title: "复制或下载", body: "复制结果，或以原文件名加新扩展名下载。" },
      ],
      tipsTitle: "什么场景用哪种格式",
      tips: [
        "基于 HTML5 <track> 的网页播放器读取的是 WebVTT。网页播放器不显示字幕时，换成 VTT 通常就能解决。",
        "Premiere Pro、DaVinci Resolve 等剪辑软件可以导入 SRT，YouTube 两种格式都支持。",
        "保留原文件：VTT 转成 SRT 会去掉位置和样式，之后无法找回。",
      ],
      faq: [
        { q: "SRT 和 VTT 有什么区别？", a: "两者都是一条条字幕，每条有开始时间、结束时间和文字。WebVTT 以 WEBVTT 开头，毫秒前用点号（00:00:01.000 而不是 00:00:01,000），不需要序号，还支持 SRT 没有的位置、样式和注释。" },
        { q: "VTT 转 SRT 会丢失内容吗？", a: "位置、对齐等字幕设置，STYLE、REGION 块和 NOTE 注释在 SRT 里没有对应写法，会被去掉。<v 张三> 这样的说话人标签会变成行首的“张三:”，粗体、斜体和下划线会保留。" },
        { q: "文件里出现乱码怎么办？", a: "较早的字幕文件常用 GBK/GB18030 等旧编码保存。EarScribe 先按 UTF-8 读取，失败时自动改用 GB18030；如果仍有乱码，可以在列表里手动选择编码。转换结果一律保存为 UTF-8。" },
        { q: "字幕文件会被上传吗？", a: "不会。读取和转换都在浏览器标签页里完成，文件不会离开你的设备。" },
      ],
      screenshotAlt: "同一组字幕的 SRT 和 WebVTT 写法",
    },
    ja: {
      title: "SRTとVTTを無料で相互変換（ブラウザで完結）",
      description: "字幕をSRTとWebVTTの間でブラウザ上で無料で相互変換。テキストを貼り付けるかファイルをドロップすると、すぐにもう一方の形式になります。アップロード不要・登録不要。",
      eyebrow: "SRT ⇄ VTT 変換",
      intro: "SRTとWebVTTは、同じタイミング付きの字幕を少し違う書き方で持つ形式です。字幕を貼り付けるか.srt・.vttファイルをドロップすると、EarScribeが形式を判定してブラウザ内で変換し、引き継げなかった内容があれば知らせます。",
      benefits: ["SRT→VTTもVTT→SRTも対応", "SRTで保持できない位置やスタイルを警告", "アップロードなし・アカウント不要"],
      workflowTitle: "3ステップで無料変換",
      workflow: [
        { title: "字幕を入れる", body: ".srtか.vttファイルをドロップするか、端末から選ぶか、テキストを貼り付けます。形式は自動で判定されます。" },
        { title: "出力形式を確認する", body: "もう一方の形式が自動で選ばれます。字幕の件数と、設定が削除された場合の警告を確認してください。" },
        { title: "コピーまたはダウンロード", body: "結果をコピーするか、元のファイル名に新しい拡張子を付けてダウンロードします。" },
      ],
      tipsTitle: "どこでどちらの形式を使うか",
      tips: [
        "HTML5の<track>要素を使うWebプレーヤーはWebVTTを読みます。Webプレーヤーで字幕が出ないときは、VTTにすると解決することが多いです。",
        "Premiere ProやDaVinci Resolveなどの編集ソフトはSRTを読み込め、YouTubeはどちらの形式にも対応しています。",
        "元のファイルは残しておきましょう。VTTをSRTにすると、位置やスタイルの指定は失われて戻せません。",
      ],
      faq: [
        { q: "SRTとVTTの違いは何ですか？", a: "どちらも開始時刻・終了時刻・テキストを持つ字幕の一覧です。WebVTTはWEBVTTという見出しで始まり、ミリ秒の前にピリオドを使い（00:00:01,000ではなく00:00:01.000）、字幕番号は不要で、SRTにない位置・スタイル・メモの機能があります。" },
        { q: "VTTをSRTにすると何か失われますか？", a: "位置や揃えなどの字幕設定、STYLE・REGIONブロック、NOTEのメモはSRTに対応する書き方がないため削除されます。<v 山田>のような話者タグは行頭の「山田:」になり、太字・斜体・下線は残ります。" },
        { q: "文字化けしました。どうすればいいですか？", a: "古い字幕ファイルはShift_JISなど、UTF-8以外の文字コードで保存されていることがよくあります。EarScribeはまずUTF-8で読み、失敗したらShift_JISで読み直します。それでも文字化けする場合は一覧から文字コードを選んでください。結果は常にUTF-8で保存されます。" },
        { q: "字幕ファイルはアップロードされますか？", a: "されません。読み込みも変換もブラウザのタブ内で行われ、ファイルは端末から出ません。" },
      ],
      screenshotAlt: "同じ字幕のSRTとWebVTTの書き方",
    },
  },
};

export const SRT_TO_VTT_GUIDES: Record<ToolLocale, ToolGuide> = {
  en: {
    primaryKeyword: "srt to vtt",
    supportingKeywords: ["vtt to srt", "srt to vtt converter online", "vtt to srt converter", "convert subtitles srt vtt"],
    guideTitle: "What actually changes between SRT and WebVTT",
    guideIntro:
      "The text and the timing survive a conversion unchanged. What differs is the syntax around them, plus a handful of WebVTT features that SRT has no way to express.",
    sections: [
      {
        title: "The syntax differences",
        paragraphs: [
          "An SRT file is a list of numbered blocks: a counter, a timing line with commas before the milliseconds, and one or more lines of text. WebVTT begins with the word WEBVTT, uses dots before the milliseconds, treats cue identifiers as optional, and allows the hours to be left out (01:02.500).",
          "Converting SRT to VTT adds the header, swaps the separators and escapes the characters WebVTT reserves, such as & and <. Converting back renumbers the cues from 1.",
        ],
      },
      {
        title: "Features SRT can't carry",
        paragraphs: [
          "WebVTT cue settings (position, line, align, size and vertical), STYLE and REGION blocks, and NOTE comments have no SRT equivalent. EarScribe drops them and shows a warning, so you know to check placement in your video editor.",
          "Voice spans such as <v Anna> become a plain \"Anna:\" prefix, class spans and karaoke timestamps are removed, and <b>, <i> and <u> are kept because most SRT players understand them.",
        ],
      },
      {
        title: "Encoding and line endings",
        paragraphs: [
          "Subtitles made years ago are often saved in Windows-1252, GB18030 or Shift_JIS rather than UTF-8. If a file isn't valid UTF-8, EarScribe decodes it with a common legacy encoding and tells you; you can pick a different one from the list.",
          "Output is always UTF-8 with plain line breaks, which current players, browsers and editors read without trouble.",
        ],
      },
    ],
    checklistTitle: "Before you upload the converted file",
    checklist: [
      { title: "Timing", body: "Spot-check the first and last cue against the video." },
      { title: "Placement", body: "If the VTT had positioned cues, reposition them in your editor after converting to SRT." },
      { title: "Characters", body: "Broken accents or symbols point to an encoding problem in the source." },
      { title: "File name", body: "Keep a language code if your platform uses one, such as video.en.vtt." },
    ],
    limitsTitle: "What this converter doesn't do",
    limits: [
      "It doesn't shift timing, merge cues or fix overlaps; the timing stays exactly as it is.",
      "It reads and writes SRT and WebVTT only; formats such as ASS or TTML aren't supported.",
    ],
    imageSrc: image,
    imageAlt: "SRT and WebVTT subtitle files side by side",
    workflowSamples: workflowSamples("en"),
    guideSamples: guideSamples("en"),
  },
  "zh-CN": {
    primaryKeyword: "srt转vtt",
    supportingKeywords: ["vtt转srt", "vtt转srt 在线", "srt转vtt 在线", "字幕格式转换"],
    guideTitle: "SRT 和 WebVTT 之间到底变了什么",
    guideIntro: "转换前后，文字和时间完全不变。变的是它们周围的写法，以及 SRT 根本表达不了的几项 WebVTT 功能。",
    sections: [
      {
        title: "写法上的区别",
        paragraphs: [
          "SRT 文件由一个个编号块组成：序号、毫秒前用逗号的时间轴行，以及一行或多行文字。WebVTT 以 WEBVTT 开头，毫秒前用点号，字幕标识可有可无，还允许省略小时（01:02.500）。",
          "SRT 转 VTT 时会加上文件头、替换分隔符，并转义 WebVTT 保留的字符，比如 & 和 <。转回 SRT 时会从 1 开始重新编号。",
        ],
      },
      {
        title: "SRT 保留不了的功能",
        paragraphs: [
          "WebVTT 的字幕设置（position、line、align、size、vertical）、STYLE 和 REGION 块、NOTE 注释在 SRT 里都没有对应写法。EarScribe 会去掉它们并给出提示，方便你在剪辑软件里重新检查位置。",
          "<v 张三> 这样的说话人标签会变成行首的“张三:”，类名标签和逐字时间戳会被去掉，<b>、<i>、<u> 则会保留，因为大多数 SRT 播放器都认识它们。",
        ],
      },
      {
        title: "编码和换行",
        paragraphs: [
          "多年前做的字幕常用 GBK/GB18030、Big5 等编码保存，而不是 UTF-8。文件不是有效的 UTF-8 时，EarScribe 会按 GB18030 读取并提示你；也可以在列表里换成其他编码。",
          "输出一律是 UTF-8、普通换行，现在的播放器、浏览器和剪辑软件都能正常读取。",
        ],
      },
    ],
    checklistTitle: "上传转换后的文件之前",
    checklist: [
      { title: "时间", body: "对照视频抽查第一条和最后一条字幕。" },
      { title: "位置", body: "原 VTT 有定位的字幕，转成 SRT 后要在剪辑软件里重新摆放。" },
      { title: "字符", body: "出现乱码或怪符号，通常是原文件编码的问题。" },
      { title: "文件名", body: "平台需要语言代码时要保留，比如 video.zh.vtt。" },
    ],
    limitsTitle: "这个转换器不做的事",
    limits: [
      "不调整时间、不合并字幕、不修复重叠，时间保持原样。",
      "只读写 SRT 和 WebVTT，不支持 ASS、TTML 等格式。",
    ],
    imageSrc: image,
    imageAlt: "SRT 和 WebVTT 字幕文件对照",
    workflowSamples: workflowSamples("zh-CN"),
    guideSamples: guideSamples("zh-CN"),
  },
  ja: {
    primaryKeyword: "srt vtt 変換",
    supportingKeywords: ["vtt srt 変換", "vtt srt 変換 サイト", "srt vtt 変換 オンライン", "字幕 形式 変換"],
    guideTitle: "SRTとWebVTTの間で実際に変わること",
    guideIntro: "変換してもテキストとタイミングはそのままです。違うのはその周りの書き方と、SRTでは表現できないWebVTTのいくつかの機能です。",
    sections: [
      {
        title: "書き方の違い",
        paragraphs: [
          "SRTは番号付きのブロックの並びで、番号、ミリ秒の前にカンマを使うタイミング行、1行以上のテキストでできています。WebVTTはWEBVTTで始まり、ミリ秒の前にピリオドを使い、字幕IDは任意で、時間の省略（01:02.500）もできます。",
          "SRTからVTTへの変換では、見出しを加え、区切り文字を入れ替え、&や<などWebVTTの予約文字をエスケープします。SRTに戻すときは1から番号を振り直します。",
        ],
      },
      {
        title: "SRTに引き継げない機能",
        paragraphs: [
          "WebVTTの字幕設定（position、line、align、size、vertical）、STYLE・REGIONブロック、NOTEのメモはSRTに対応するものがありません。EarScribeはこれらを削除して警告を出すので、編集ソフトで位置を確認できます。",
          "<v 山田>のような話者タグは行頭の「山田:」に、クラス指定や単語ごとのタイムスタンプは削除され、<b>・<i>・<u>は多くのSRTプレーヤーが理解するので残します。",
        ],
      },
      {
        title: "文字コードと改行",
        paragraphs: [
          "昔作られた字幕はUTF-8ではなくShift_JISなどで保存されていることがよくあります。有効なUTF-8でない場合、EarScribeはShift_JISで読み込んで知らせます。一覧から別の文字コードも選べます。",
          "出力は常にUTF-8と通常の改行で、現在のプレーヤー・ブラウザ・編集ソフトで問題なく読めます。",
        ],
      },
    ],
    checklistTitle: "変換したファイルをアップロードする前に",
    checklist: [
      { title: "タイミング", body: "最初と最後の字幕を動画と照らし合わせる。" },
      { title: "位置", body: "VTTで位置指定していた字幕は、SRTにした後で編集ソフトで配置し直す。" },
      { title: "文字", body: "文字化けや記号の崩れは、元ファイルの文字コードが原因のことが多い。" },
      { title: "ファイル名", body: "プラットフォームが使う場合は video.ja.vtt のように言語コードを残す。" },
    ],
    limitsTitle: "このツールがしないこと",
    limits: [
      "タイミングのずらし、字幕の結合、重なりの修正は行わず、時間はそのまま保ちます。",
      "読み書きできるのはSRTとWebVTTだけで、ASSやTTMLなどには対応していません。",
    ],
    imageSrc: image,
    imageAlt: "SRTとWebVTTの字幕ファイルの比較",
    workflowSamples: workflowSamples("ja"),
    guideSamples: guideSamples("ja"),
  },
};
