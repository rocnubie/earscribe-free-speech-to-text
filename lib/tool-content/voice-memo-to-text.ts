import type { ToolLocale } from "@/lib/site-routes";
import type { ToolGuide } from "@/lib/tool-page-seo";
import type { ToolPageDefinition } from "@/lib/tool-pages";

const image = "/screenshots/02-transcript-showcase.webp";

export const VOICE_MEMO_TO_TEXT_PAGE: ToolPageDefinition = {
  slug: "voice-memo-to-text",
  resultTab: "transcript",
  copy: {
    en: {
      title: "Free voice memo to text for iPhone and Mac",
      metaTitle: "Voice memo to text: when the phone is enough | EarScribe",
      description:
        "Voice memo to text in the browser: the phone already shows a transcript, but it cannot leave as an .srt. Two hours is 111 MB compressed, 565 MB lossless.",
      eyebrow: "Voice memo to text",
      intro:
        "Voice Memos saves each recording as an .m4a file. Export it from the app, open it here, and EarScribe transcribes it in the browser with timestamps you can click to replay, edit and export.",
      benefits: [
        "Works in Safari on iPhone, iPad and Mac",
        "Click a line to hear that part of the memo",
        "Export text or subtitles when you're done",
      ],
      workflowTitle: "From Voice Memos to free, editable text",
      workflow: [
        { title: "Export the memo", body: "On iPhone or iPad, open the recording, tap the More button (•••), choose Share, then Save to Files. On a Mac, drag the recording out of Voice Memos onto the desktop." },
        { title: "Open it in EarScribe", body: "Tap the upload area and pick the memo from Files or Finder. The first run downloads the speech model, which your browser then keeps." },
        { title: "Review and share", body: "Search the text, replay anything unclear, fix names, then copy the text or export a file." },
      ],
      tipsTitle: "Voice memo tips",
      tips: [
        "Lossless memos (Audio Quality in the Voice Memos settings) are much larger. For long recordings, Compressed is easier to process and just as good for speech.",
        "Keep the phone close to the person speaking and don't cover the microphone at the bottom edge.",
        "If a long memo runs out of memory, trim the silent parts in Voice Memos or split it before transcribing.",
      ],
      faq: [
        { q: "Doesn't the Voice Memos app transcribe already?", a: "Recent versions of iOS and macOS can show a transcript in Voice Memos for some languages and devices. EarScribe is useful when you need timestamps you can export as subtitles, edits that carry into every format, or a language the built-in feature doesn't cover." },
        { q: "What format are voice memos?", a: "Voice Memos records .m4a files: AAC audio when Audio Quality is Compressed, Apple Lossless when it is Lossless." },
        { q: "Can I do this entirely on my iPhone?", a: "Yes. Save the memo to Files, open EarScribe in Safari and choose the file. Older iPhones can be slow with larger models, so start with the recommended one." },
        { q: "Are my voice memos uploaded?", a: "No. The file is decoded and transcribed inside the browser tab; the only download is the speech model." },
      ],
      screenshotAlt: "Voice memo transcribed into timestamped text in EarScribe",
    },
    "zh-CN": {
      title: "语音备忘录转文字：iPhone 和安卓录音都能用",
      metaTitle: "语音备忘录转文字：系统自带够用吗 | EarScribe",
      description:
        "语音备忘录、安卓录音机、微信语音转文字，都在浏览器里完成：带时间戳、可导出 SRT/VTT、不上传。两小时录音压缩后 111 MB。",
      eyebrow: "语音备忘录转文字",
      intro:
        "iPhone 的“语音备忘录”存成 .m4a，小米、华为、OPPO 自带的录音机多是 .m4a 或 .ogg，安卓上也常见 .amr。把文件导出来在这里打开，EarScribe 就在浏览器里转写，每一句带时间戳，可以点击回听、修改和导出。微信里的语音也先转存成文件再打开。",
      benefits: [
        "iPhone、安卓手机和 Mac 的浏览器都能用",
        "点一句话，就能回听那一段录音",
        "导出 TXT、SRT 或 VTT，直接进剪辑软件",
      ],
      workflowTitle: "从手机录音到能改的文字",
      workflow: [
        { title: "导出录音", body: "iPhone 打开录音，点“更多”（•••）→“共享”→“存储到文件”。小米、华为、OPPO 在录音机里长按录音，选“分享”或“导出”，存进文件管理。Mac 上把录音从“语音备忘录”拖到桌面。" },
        { title: "在 EarScribe 打开", body: "点上传区域，从文件管理或访达里选录音，.m4a 也可以直接拖进来。第一次使用会下载语音模型，之后浏览器会缓存。" },
        { title: "核对后导出", body: "搜索内容，回听不清楚的地方，改正人名和金额，再复制文字或导出字幕。" },
      ],
      tipsTitle: "录之前和转写前的几件事",
      tips: [
        "“无损”是“压缩”的五倍大：每分钟约 4.71 MB 对 0.93 MB，两小时就是 565 MB 对 111 MB。文件上限 1 GiB，长录音用“压缩”更稳。",
        "录音时让手机靠近说话人，别挡住底部的麦克风。放在口袋或包里录的，多半只剩衣物摩擦声。",
        "安卓录音机常默认存成 .ogg 或 .amr，音质够用；不必再转成 WAV 把体积放大。",
      ],
      faq: [
        { q: "手机自带的转写不够用吗？", a: "较新的 iOS 能在“语音备忘录”里显示文字稿，部分安卓录音机也有类似功能。但它只留在手机里：要导出 .srt/.vtt 字幕、要在电脑上接着改、要换成系统不支持的语言时，EarScribe 更合适——它在本地跑 Whisper，不上传，也没有时长限制。" },
        { q: "手机录音一般是什么格式？", a: "iPhone 的语音备忘录是 .m4a，压缩时是 AAC、无损时是 Apple Lossless；安卓录音机常见 .m4a、.ogg 和 .amr。这几种都能直接打开，.m4a 还能拖进来。" },
        { q: "能全程只用手机完成吗？", a: "可以。把录音存到“文件”，用手机浏览器打开 EarScribe 选文件即可。旧手机跑大模型会慢，先用推荐的 base。" },
        { q: "能区分说话人、翻译或者实时转写吗？", a: "都不做。输出是一路带时间戳的文字，不区分说话人、不翻译，也不是实时字幕；录音文件不会被上传。" },
      ],
      screenshotAlt: "语音备忘录在 EarScribe 中转成的带时间戳文字",
    },
    ja: {
      title: "ボイスメモ 文字起こし：iPhone も Android も無料で",
      metaTitle: "ボイスメモ 文字起こし：標準機能で足りるか | EarScribe",
      description:
        "ボイスメモもAndroidのレコーダーも、ブラウザで文字起こし。タイムスタンプ付きでSRT・VTTに書き出せ、音声はアップロードしません。",
      eyebrow: "ボイスメモ 文字起こし",
      intro:
        "iPhoneのボイスメモは.m4a、Androidのレコーダーは.m4aや.ogg、.amrで保存されます。書き出したファイルをここで開けば、EarScribeがブラウザ内で文字起こしします。行ごとのタイムスタンプから聞き直し、修正して書き出せます。",
      benefits: [
        "iPhone・Android・Macのブラウザで使える",
        "行をタップするとその部分を再生",
        "TXT・SRT・VTTに書き出して編集ソフトへ",
      ],
      workflowTitle: "スマホの録音を編集できるテキストにするまで",
      workflow: [
        { title: "メモを書き出す", body: "iPhoneは録音を開いて「その他」（•••）→「共有」→「“ファイル”に保存」。Androidはレコーダーで録音を長押しし、「共有」や「エクスポート」からファイルマネージャーへ保存します。Macはボイスメモからデスクトップへドラッグします。" },
        { title: "EarScribeで開く", body: "アップロード欄をタップし、ファイルマネージャーやFinderから録音を選びます。.m4aはそのままドラッグしてもかまいません。初回は音声モデルをダウンロードし、以降はブラウザにキャッシュされます。" },
        { title: "確認して書き出す", body: "文字を検索し、聞き取りにくい箇所を再生して人名や金額を直してから、コピーするか字幕として書き出します。" },
      ],
      tipsTitle: "録音前と文字起こし前に",
      tips: [
        "「非圧縮」は「圧縮」の約5倍です。1分あたり4.71 MB 対 0.93 MB、2時間なら565 MB 対 111 MB。ファイル上限は1 GiBなので、長い録音は「圧縮」が安全です。",
        "スマートフォンは話す人の近くに置き、下端のマイクをふさがないようにします。ポケットやカバンの中の録音は衣ずれの音が大半になります。",
        "Androidのレコーダーは.oggや.amrで保存されることもあります。音質は十分なので、WAVに変換して容量を増やす必要はありません。",
      ],
      faq: [
        { q: "スマホ標準の文字起こしでは足りませんか？", a: "新しいiOSならボイスメモに文字起こしが表示され、Androidのレコーダーにも同様の機能があります。ただしスマホの中だけで完結します。.srt/.vtt字幕として書き出す、PCで続きを編集する、標準機能が対応していない言語を使うならEarScribeが向いています。Whisperを端末内で動かし、アップロードも時間制限もありません。" },
        { q: "スマホの録音はどんな形式ですか？", a: "iPhoneのボイスメモは.m4a（圧縮はAAC、非圧縮はApple Lossless）。Androidのレコーダーは.m4a・.ogg・.amrが一般的です。どれもそのまま開けます。" },
        { q: "スマホだけで完結できますか？", a: "はい。録音を「ファイル」に保存し、スマホのブラウザでEarScribeを開いて選ぶだけです。古い端末では大きいモデルが遅いので、まずは推奨のbaseを使ってください。" },
        { q: "話者分離・翻訳・リアルタイム字幕はできますか？", a: "どれも行いません。出力はタイムスタンプ付きの一続きのテキストで、話者の区別・翻訳・リアルタイム字幕には対応していません。録音ファイルはアップロードされません。" },
      ],
      screenshotAlt: "EarScribeでボイスメモをタイムスタンプ付きテキストにした画面",
    },
  },
};

export const VOICE_MEMO_TO_TEXT_GUIDES: Record<ToolLocale, ToolGuide> = {
  en: {
    primaryKeyword: "voice memo to text",
    supportingKeywords: [
      "iphone voice memo transcription",
      "voice memo transcript",
      "record voice memo to text",
    ],
    // The decision this page exists for: the phone already transcribes. It is the
    // export and the language coverage that decide whether that is enough.
    guideTitle: "Voice memo to text: when the phone's own transcript is enough",
    guideIntro:
      "Recent iOS and macOS versions show a transcript beside the recording, so the question is no longer whether a memo can become text — it is whether you need the text outside the phone. Two hours of memo is 111 MB compressed or 565 MB lossless, and the built-in transcript cannot leave as a subtitle file.",
    sections: [
      {
        title: "What the phone gives you, and what it does not",
        paragraphs: [
          "The built-in transcript is a reading aid: it follows the playback, it is searchable inside the app, and it saves a copy-paste. What it does not do is produce a caption file, travel to another device, or cover the languages this tool offers.",
          "The gap is measurable in three places: 4 export formats here against none there, 99 spoken languages against the set Apple ships, and a 27-locale interface against one.",
          "That is the whole decision, and it is worth making deliberately rather than defaulting to whichever icon is closer.",
        ],
        table: {
          caption:
            "The two routes compared on what people actually do with a memo. “Export” means a file you can hand to an editor, a player or a colleague.",
          columns: ["What you need", "Voice Memos on the phone", "A browser tab"],
          rows: [
            ["Read the words while listening", "yes", "yes"],
            ["A caption file (.srt / .vtt)", "no", "yes"],
            ["Text you can edit and re-export", "copy-paste only", "TXT, SRT, VTT, JSON"],
            ["27 interface languages", "no", "yes"],
            ["Nothing uploaded", "yes", "yes"],
          ],
        },
      },
      {
        title: "What the file itself costs",
        paragraphs: [
          "A memo is an .m4a either way: AAC when the quality setting is compressed, Apple Lossless when it is not. At 0.93 MB per minute the compressed setting puts 19.3 hours under the 1 GB ceiling; at 4.71 the lossless one puts 3.8, which is the only case where a memo gets too big to process.",
          "Both decode to the same 16 kHz samples, so nothing about accuracy changes between them — this is a disk question, not a transcription question.",
          "A 5-minute memo is 4.7 MB compressed or 24 MB lossless, and a 20-minute one is 19 MB or 94 MB. Worth keeping the two sizes in proportion: a 45-minute memo is 42 MB compressed or 212 MB lossless, while the model that reads it is 41 MB for tiny and 77 MB for base. Below about an hour the weights and the recording are the same order of magnitude.",
        ],
      },
    ],
    checklistTitle: "Before you move a memo off the phone",
    checklist: [
      {
        title: "Check the quality setting first",
        body: "A lossless memo is five times the size: 4.71 MB per minute against 0.93, and 3.8 hours is where the 1 GB ceiling arrives.",
      },
      {
        title: "Copy the date with the file",
        body: "Voice Memos names files by date and location. Once the .m4a is off the phone that context is the only thing tying it to the meeting it recorded.",
      },
      {
        title: "Decide the output before transcribing",
        body: "Reading on the phone needs nothing. Captions need SRT or VTT; a searchable archive needs TXT. The choice is made before the run, not after.",
      },
    ],
    limitsTitle: "Where a voice memo stops being the right source",
    limits: [
      "A memo recorded in a pocket is mostly fabric noise: the model will produce brackets where the words should be, and no model choice fixes that.",
      "Files past roughly two hours exceed the memory budget on a phone browser — which is exactly where you are standing when the memo is on the device.",
    ],
    imageSrc: "/screenshots/guides/transcript-result-top.webp",
    imageAlt: "Voice memo to text: transcript with timestamps beside the waveform",
    workflowImageSrc: "/screenshots/guides/model-picker.webp",
  },
  "zh-CN": {
    primaryKeyword: "语音备忘录转文字",
    supportingKeywords: ["语音备忘录转文字 iphone", "语音备忘录转文字 免费", "安卓录音转文字", "微信语音转文字", "mac 语音备忘录转文字"],
    // The decision this page exists for: the phone already transcribes. It is the
    // export and the language coverage that decide whether that is enough.
    guideTitle: "语音备忘录转文字：系统自带的那份够用吗",
    guideIntro:
      "较新的 iPhone 在“语音备忘录”里就能显示文字，部分安卓录音机也有类似功能，所以问题不再是“能不能转”，而是“文字要不要离开手机”。两小时录音压缩后 111 MB、无损 565 MB，而系统自带的那份文字导不出字幕，也带不到别的设备上。",
    sections: [
      {
        title: "语音备忘录转文字：手机给了你什么，又少了什么",
        paragraphs: [
          "系统自带的转写是阅读辅助：跟着播放走，能在 App 里搜索，省掉一次复制粘贴。它不做字幕文件，不跟着你换设备，也不覆盖这个工具支持的语言。",
          "差距落在三个地方：这里能导出 4 种格式（TXT、SRT、VTT、JSON），那边一种都没有；这里支持 99 种语音语言，系统只带它自己那套；界面 27 种语言，对 1 种。",
          "同一段 34.36 秒的样音，换一档模型，111 个词里就有 26 个不同，其中 3 处改变了语义——这也是为什么默认给 base，而不是最省事的 tiny。",
          "要决定的就这么多，值得认真选一次，而不是看哪个图标离手指更近。",
        ],
        table: {
          caption:
            "两条路，按人们实际会拿录音做的事来比。“导出”指能交给剪辑软件、播放器或同事的文件。",
          columns: ["你需要什么", "手机自带转写", "浏览器标签页"],
          rows: [
            ["边听边看文字", "可以", "可以"],
            ["字幕文件（.srt / .vtt）", "不行", "可以"],
            ["改完还能再导出的文字", "只能复制粘贴", "TXT、SRT、VTT、JSON"],
            ["27 种界面语言", "不行", "可以"],
            ["不上传", "可以", "可以"],
          ],
        },
      },
      {
        title: "文件本身要花多少",
        paragraphs: [
          "同样是 .m4a：音质设“压缩”是 AAC，设“无损”是 Apple Lossless。压缩每分钟 0.93 MB，1 GiB 上限能放 19.3 小时；无损每分钟 4.71 MB，只放得下 3.8 小时——这是录音唯一会大到处理不了的情况。",
          "两者解码后都是同样的 16 kHz 单声道，每分钟 3.84 MB，1 小时 230 MB，跟文件多大无关。准确率不会因为选了哪个而改变——这是存储的问题，不是转写的问题。",
          "5 分钟录音压缩后 4.7 MB、无损 24 MB；20 分钟是 19 MB 或 94 MB；45 分钟是 42 MB 或 212 MB。模型这边，tiny 下载 41 MB（WebGPU 151 MB），base 77 MB（291 MB），small 249 MB（968 MB），turbo 1085 MB（3236 MB）。一小时以内、230 MB 的样本，和 77 MB 的 base 权重基本是同一个量级。",
          "这些模型给的不是同一份答案：同一段 34.36 秒的样音，tiny 和 base 的 111 个词里有 26 个不同，3 处改变了语义。",
        ],
      },
    ],
    checklistTitle: "把录音搬出手机之前",
    checklist: [
      {
        title: "先看音质设置",
        body: "无损是压缩的五倍：每分钟 4.71 MB 对 0.93 MB，3.8 小时就撞上 1 GiB 上限。",
      },
      {
        title: "把日期一起记下",
        body: "录音机常按日期命名。文件离开手机之后，这行日期往往是它和那场会议唯一的联系。",
      },
      {
        title: "转写前先想好输出去哪",
        body: "只想在手机上看，什么都不用做；要字幕就选 SRT 或 VTT；要能搜索的存档就选 TXT。",
      },
    ],
    limitsTitle: "什么时候录音本身就不合适",
    limits: [
      "放在口袋或包里录的，多半只剩衣物摩擦声。模型会在该有字的地方留下方括号，换哪个模型都救不回来。",
      "超过约两小时的录音，会超出手机浏览器的内存预算——而录音恰好就在这台手机上。",
      "不区分说话人、不翻译、也不是实时字幕：输出只有一路带时间戳的文字。",
    ],
    imageSrc: image,
    imageAlt: "语音备忘录转成的带时间戳文字，旁边是波形",
    workflowImageSrc: "/screenshots/guides/model-picker.webp",
  },
  ja: {
    primaryKeyword: "ボイスメモ 文字起こし",
    supportingKeywords: ["ボイスメモ 文字起こし iphone", "ボイスメモ 文字起こし 無料", "android 録音 文字起こし", "ボイスメモ 文字起こし mac"],
    // The decision this page exists for: the phone already transcribes. It is the
    // export and the language coverage that decide whether that is enough.
    guideTitle: "ボイスメモ 文字起こし：標準機能のままで足りるか",
    guideIntro:
      "新しい iOS ならボイスメモに文字起こしが表示され、Android のレコーダーにも同様の機能があります。問題は「文字にできるか」ではなく「その文字をスマホの外へ出せるか」です。2 時間の録音は圧縮で 111 MB、非圧縮で 565 MB。標準の文字起こしは字幕ファイルにならず、別の端末にも持っていけません。",
    sections: [
      {
        title: "ボイスメモ 文字起こし：スマホができること、できないこと",
        paragraphs: [
          "標準の文字起こしは読むための補助です。再生に追従し、アプリ内で検索でき、コピーの手間を省きます。ただし字幕ファイルを作ることはせず、別の端末へ移ることもなく、このツールが対応する言語をカバーすることもありません。",
          "差は 3 点です。ここでは 4 形式（TXT・SRT・VTT・JSON）に書き出せて、標準機能は 0。対応する音声言語は 99 言語で、標準機能は OS が載せている分だけ。インターフェースは 27 言語で、標準機能は 1 言語です。",
          "同じ 34.36 秒のサンプルでも、モデルを 1 段変えると 111 語のうち 26 語が変わり、3 語は意味が変わりました。既定で base（77 MB）を勧めるのは、一番軽い tiny（41 MB）ではなくこの差のためです。",
          "判断材料はこれだけです。指に近いアイコンで決めるより、一度は意識して選ぶ価値があります。",
        ],
        table: {
          caption:
            "録音を実際にどう使うかで2つの方法を比べます。「書き出し」は編集ソフトやプレーヤー、同僚に渡せるファイルのことです。",
          columns: ["必要なこと", "スマホ標準の文字起こし", "ブラウザのタブ"],
          rows: [
            ["聞きながら文字を読む", "できる", "できる"],
            ["字幕ファイル（.srt / .vtt）", "できない", "できる"],
            ["直して再書き出しできる文字", "コピー＆ペーストのみ", "TXT・SRT・VTT・JSON"],
            ["27言語のインターフェース", "できない", "できる"],
            ["アップロードしない", "できる", "できる"],
          ],
        },
      },
      {
        title: "ファイル自体のコスト",
        paragraphs: [
          "どちらも .m4a です。音質が「圧縮」なら AAC、「非圧縮」なら Apple Lossless。圧縮は 1 分 0.93 MB で、1 GiB（1,024 MB）の上限に 19.3 時間入ります。非圧縮は 1 分 4.71 MB で 3.8 時間まで——録音が大きすぎて処理できなくなるのはこの場合だけです。",
          "どちらも同じ 16 kHz モノラルのサンプルにデコードされ、1 分あたり 3.84 MB、1 時間で 230 MB になります。2 時間なら 565 MB のファイルが 461 MB のサンプルになる計算です。ファイルの大きさとは関係なく、精度も変わりません。これはディスクの話で、文字起こしの話ではありません。",
          "5 分の録音は圧縮 4.7 MB・非圧縮 24 MB、20 分で 19 MB・94 MB、45 分で 42 MB・212 MB。モデルは tiny が 41 MB（WebGPU で 151 MB）、base が 77 MB（291 MB）、small が 249 MB（968 MB）、turbo が 1,085 MB（3,236 MB）。1 時間・230 MB のサンプルと、base の 77 MB はほぼ同じ桁です。",
          "モデルは同じ答えを返すわけではありません。同じ 34.36 秒のサンプルで、tiny と base は 111 語のうち 26 語が違い、3 語は意味が変わりました。",
        ],
      },
    ],
    checklistTitle: "録音をスマホの外へ出す前に",
    checklist: [
      {
        title: "まず音質設定を見る",
        body: "非圧縮は圧縮の約 5 倍。1 分 4.71 MB 対 0.93 MB で、3.8 時間で 1 GiB（1,024 MB）の上限に届きます。",
      },
      {
        title: "日付も一緒に残す",
        body: "レコーダーは日付でファイルを名付けます。スマホを離れたあと、その日付が会議と録音を結ぶ唯一の手がかりになります。",
      },
      {
        title: "書き出し先を先に決める",
        body: "スマホで読むだけなら何も不要。字幕ならSRTかVTT、検索できるアーカイブならTXTです。",
      },
    ],
    limitsTitle: "録音自体が向かない場面",
    limits: [
      "ポケットやカバンの中で録った音は衣ずれが大半で、モデルは語句のあるべき場所に括弧を残します。どのモデルを選んでも直りません。",
      "2 時間（461 MB のサンプル）を大きく超える録音は、スマホのブラウザのメモリ予算を超えます。しかも録音があるのは、まさにそのスマホです。",
      "話者分離・翻訳・リアルタイム字幕には対応していません。出力はタイムスタンプ付きの一続きのテキストです。",
    ],
    imageSrc: image,
    imageAlt: "ボイスメモを文字起こししたタイムスタンプ付きテキストと波形",
    workflowImageSrc: "/screenshots/guides/model-picker.webp",
  },
};
