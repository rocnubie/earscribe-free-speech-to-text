import type { ToolLocale } from "@/lib/site-routes";
import type { ToolGuide } from "@/lib/tool-page-seo";
import type { ToolPageDefinition } from "@/lib/tool-pages";

const image = "/screenshots/02-transcript-showcase.webp";

export const PODCAST_TRANSCRIPTION_PAGE: ToolPageDefinition = {
  slug: "podcast-transcription",
  resultTab: "transcript",
  copy: {
    en: {
      title: "Free podcast transcription for show notes, quotes and captions",
      metaTitle: "Podcast transcription: 1,300 cues an hour | EarScribe",
      description:
        "Podcast transcription in the browser for show notes and captions: an hour is about 1,300 cues, and half of them break the 42-character line rule. Free.",
      eyebrow: "Podcast transcription",
      intro:
        "Drop in the episode you exported from your editor. EarScribe creates a timestamped transcript on your device that you can search for quotes, use to write show notes and chapters, and export as captions for the video version.",
      benefits: [
        "Find quotes by searching the whole episode",
        "Timestamps ready for chapters and captions",
        "Export TXT, SRT, VTT or JSON",
      ],
      workflowTitle: "From final mix to captions that pass",
      workflow: [
        { title: "Transcribe the final mix", body: "Use the exported episode (MP3, WAV or M4A) so the timestamps match what listeners hear. An hour is 230 MB of samples once decoded." },
        { title: "Check names and sponsors", body: "Search guest names, brands and URLs, replay each mention. The opening name said once, over music, is the likeliest error." },
        { title: "Reuse the transcript", body: "Copy text for show notes, note timestamps for chapters, and export SRT or VTT for the video episode." },
      ],
      tipsTitle: "What we tell every new host",
      tips: [
        "Music beds and intros can produce stray or repeated lines. Check the first and last minutes of the transcript.",
        "EarScribe doesn't label speakers. Add host and guest names while reviewing, using the timestamps to find each turn.",
        "Long episodes need memory. On a phone, transcribe the episode in parts or use a smaller model.",
      ],
      faq: [
        { q: "Can I transcribe a full-length episode?", a: "Yes, on most laptops and desktops. Very long episodes depend on available memory; if the browser struggles, split the episode or choose a smaller model." },
        { q: "How do I publish the transcript with my podcast?", a: "Post the corrected text on the episode page, or export SRT or WebVTT and link it from your RSS feed with the podcast:transcript tag, which a growing number of podcast apps can display." },
        { q: "Does it separate the host and the guest?", a: "No. Whisper produces one timeline of text. Use the timestamps to find each change of speaker and add names where they matter." },
        { q: "Can I paste a podcast link instead of a file?", a: "No. EarScribe works with audio files on your device. Use the file exported from your editor, or download the episode first." },
      ],
      screenshotAlt: "Podcast episode transcript with searchable, timestamped segments",
    },
    "zh-CN": {
      title: "免费播客转文字稿：做节目笔记、时间轴和字幕",
      description: "在浏览器里把播客单集转成文字稿，再整理成节目笔记、章节时间轴、金句和 SRT/VTT 字幕。免费、无需注册。",
      eyebrow: "播客转文字",
      intro: "放入剪辑软件导出的单集音频，EarScribe 会在你的设备上生成带时间戳的文字稿：可以搜索金句、整理节目笔记和章节，也可以导出成视频版的字幕。",
      benefits: ["整期搜索，快速找到金句", "时间戳可直接用于章节和字幕", "导出 TXT、SRT、VTT 或 JSON"],
      workflowTitle: "免费把成品单集变成可发布的文字稿",
      workflow: [
        { title: "转写最终混音", body: "使用导出的成品（MP3、WAV 或 M4A），时间戳才会和听众听到的一致。" },
        { title: "核对嘉宾和品牌", body: "搜索嘉宾名字、品牌和网址，逐处回听并改正写法。" },
        { title: "一稿多用", body: "复制文字写节目笔记，记下时间点做章节，再导出 SRT 或 VTT 给视频版使用。" },
      ],
      tipsTitle: "播客专用小技巧",
      tips: [
        "片头音乐和垫乐可能被识别出多余或重复的句子，记得检查开头和结尾几分钟。",
        "EarScribe 不标注说话人。核对时借助时间戳找到每次换人，补上主播和嘉宾的名字。",
        "长节目很占内存。在手机上可以分段转写，或者换更小的模型。",
      ],
      faq: [
        { q: "一整期节目都能转文字吗？", a: "大多数电脑可以。特别长的节目取决于可用内存，浏览器吃力时请拆分单集或换更小的模型。" },
        { q: "文字稿怎么和节目一起发布？", a: "可以把改好的文字放到单集页面；也可以导出 SRT 或 WebVTT，通过 RSS 的 podcast:transcript 标签链接给播客 App，支持这个标签的 App 越来越多。" },
        { q: "能区分主播和嘉宾吗？", a: "不能。Whisper 输出的是一条连续的文字时间线。可以借助时间戳找到换人的地方，在需要处补上名字。" },
        { q: "可以直接粘贴播客链接吗？", a: "不可以。EarScribe 处理的是你设备上的音频文件，请使用剪辑软件导出的文件，或先下载单集音频。" },
      ],
      screenshotAlt: "可搜索、带时间戳的播客单集文字稿",
    },
    ja: {
      title: "ポッドキャストを無料で文字起こし：概要欄・チャプター・字幕に",
      description: "ポッドキャストのエピソードをブラウザで文字起こしし、概要欄、チャプターのタイムスタンプ、引用、SRT・VTT字幕に活用。無料・登録不要です。",
      eyebrow: "ポッドキャスト 文字起こし",
      intro: "編集ソフトから書き出したエピソードを選ぶと、EarScribeが端末内でタイムスタンプ付きの文字起こしを作ります。引用を検索したり、概要欄やチャプターを書いたり、動画版の字幕として書き出したりできます。",
      benefits: ["エピソード全体を検索して引用を探せる", "チャプターや字幕にそのまま使えるタイムスタンプ", "TXT・SRT・VTT・JSONで書き出し"],
      workflowTitle: "完成したエピソードから公開用テキストまで無料で",
      workflow: [
        { title: "最終ミックスを文字起こしする", body: "書き出したエピソード（MP3・WAV・M4A）を使うと、タイムスタンプがリスナーの聞く音声と一致します。" },
        { title: "ゲスト名とスポンサーを確認する", body: "ゲストの名前、ブランド名、URLを検索し、それぞれ聞き直して表記を直します。" },
        { title: "文字起こしを使い回す", body: "概要欄用に文章をコピーし、チャプター用に時刻を控え、動画版にはSRTかVTTを書き出します。" },
      ],
      tipsTitle: "ポッドキャストならではのコツ",
      tips: [
        "BGMやジングルの部分で、余計な文や繰り返しが出ることがあります。最初と最後の数分を確認しましょう。",
        "EarScribeは話者を区別しません。確認しながら、タイムスタンプを頼りにホストとゲストの名前を補ってください。",
        "長いエピソードはメモリを使います。スマートフォンでは分割して処理するか、小さいモデルを選んでください。",
      ],
      faq: [
        { q: "1エピソードまるごと文字起こしできますか？", a: "多くのPCで可能です。非常に長いエピソードは空きメモリ次第なので、ブラウザが重いときは分割するか小さいモデルを選んでください。" },
        { q: "文字起こしをポッドキャストと一緒に公開するには？", a: "修正した文章をエピソードページに載せるか、SRTかWebVTTを書き出してRSSのpodcast:transcriptタグでリンクします。このタグに対応するアプリは増えています。" },
        { q: "ホストとゲストを分けて表示できますか？", a: "できません。Whisperは1本の文字タイムラインを出力します。タイムスタンプで話者の切り替わりを探し、必要な箇所に名前を加えてください。" },
        { q: "ポッドキャストのURLを貼り付けて使えますか？", a: "使えません。EarScribeは端末上の音声ファイルを処理します。編集ソフトの書き出しファイルか、先にダウンロードしたエピソードを使ってください。" },
      ],
      screenshotAlt: "検索できるタイムスタンプ付きのポッドキャスト文字起こし",
    },
  },
};

export const PODCAST_TRANSCRIPTION_GUIDES: Record<ToolLocale, ToolGuide> = {
  en: {
    primaryKeyword: "podcast transcription",
    supportingKeywords: [
      "transcribe podcast episode",
      "podcast transcript generator",
      "podcast captions",
    ],
    // An episode produces two artefacts. The words are the easy one; the cue
    // file is where the measurable work is.
    guideTitle: "Podcast transcription: the transcript is the easy half",
    guideIntro:
      "An hour of episode is about 8,700 words and roughly 1,300 caption cues. The words arrive usable; the cues do not — on every model we ran, at least half the cues were longer than the 42-character line the app allows, before any re-cut.",
    sections: [
      {
        title: "What one episode actually produces",
        paragraphs: [
          "Whisper writes one cue per chunk, not one cue per sentence. On our 34-second clip that was twelve cues, so an hour scales to about 1,300 — a number worth knowing before you open a caption editor and start dragging boundaries.",
          "The words are easier: 145 words a minute over an hour is 8,700, and that is a length you can search, skim and quote from. The cue count is what decides whether the video version ships this week.",
        ],
      },
      {
        title: "Half the cues break the line rule",
        paragraphs: [
          "The app applies the same limits a broadcaster would: 42 characters per line, 84 per cue, 20 characters per second of reading speed. Exported straight from the model, every combination we measured broke the line limit in at least half its cues.",
        ],
        table: {
          caption:
            "Seven model and backend combinations, each exported with the same toSrt() the download button uses, then parsed back and measured. \"After re-cut\" is the same transcript passed through the app's layout pass.",
          source: "content/guides/data/subtitle-violations.json",
          columns: ["Model", "Cues", "Over the line, raw", "After re-cut", "Longest raw cue"],
          rows: [
            ["tiny, CPU", "12", "6 (50%)", "3 (25%)", "88 chars"],
            ["tiny, GPU", "11", "6 (55%)", "3 (27%)", "89 chars"],
            ["base, CPU", "12", "6 (50%)", "3 (25%)", "89 chars"],
            ["base, GPU", "8", "6 (75%)", "3 (30%)", "100 chars"],
            ["small, CPU", "10", "5 (50%)", "1 (8%)", "100 chars"],
            ["small, GPU", "10", "5 (50%)", "0 (0%)", "100 chars"],
            ["turbo, CPU", "10", "5 (50%)", "0 (0%)", "100 chars"],
          ],
        },
      },
      {
        title: "What show notes can and cannot be",
        paragraphs: [
          "Show notes are a reading artefact: a summary, the links, the names. Transcription gives you the raw material and a timestamp for each line, which is enough to write a summary by jumping to the four moments you remember.",
          "It does not give you chapters. A chapter break is a judgement about what the episode was about, and the transcript knows only when someone stopped talking — which is why the timestamps help and the automatic segmentation does not.",
        ],
      },
    ],
    checklistTitle: "Three checks before the episode ships",
    checklist: [
      {
        title: "Listen to the first 30 seconds",
        body: "The opening is where the model has least context — a name said once, over music, is the most likely line in the episode to be wrong.",
      },
      {
        title: "Re-cut the captions before exporting",
        body: "Half the raw cues overflow the line; the layout pass takes that to between zero and 30 percent, depending on the model you chose.",
      },
      {
        title: "Keep the sponsor read verbatim",
        body: "Ad copy is the one part a listener may check against the audio. Read it in the transcript, not just in the notes.",
      },
    ],
    limitsTitle: "Where an episode stops fitting in a tab",
    limits: [
      "Music under speech is where captions degrade fastest: the words may survive, the cue boundaries will not.",
      "Past roughly two hours the memory estimate passes 3.3 GB, so a long interview episode needs splitting before it needs a better model.",
    ],
    imageSrc: "/screenshots/ui-subtitles.webp",
    imageAlt: "Podcast transcription: subtitle editor with per-cue line lengths",
    workflowImageSrc: "/screenshots/guides/pre-run.webp",
  },
  "zh-CN": {
    primaryKeyword: "播客转文字",
    supportingKeywords: ["播客转文字 免费", "播客 文字稿 生成", "播客 字幕", "播客 节目笔记"],
    guideTitle: "播客转文字：一期节目能出四样东西",
    guideIntro:
      "一小时的单集约 8,700 字、1,300 条字幕。文字转出来基本能用，字幕不是——每个模型导出的字幕里，都至少有一半超过每行 42 个字符，得先重排才敢用。",
    sections: [
      {
        title: "一期节目能转出什么",
        paragraphs: [
          "同一段音频转一次，就能拿到四样东西：带时间戳的文字稿、SRT/VTT 字幕、给节目笔记用的纯文本，以及给脚本用的 JSON。不必为每种用途各转一遍。",
          "字幕是唯一还要加工的。Whisper 按语音块断句，不按句子断：34 秒的样本出了 12 条字幕，按这个比例，一小时大约 1,300 条——先知道这个数，再打开字幕编辑器拖边界。",
        ],
        table: {
          caption: "一期节目转一次，四种产出分别用在哪里、导出什么格式。",
          columns: ["产出", "用在哪", "导出格式"],
          rows: [
            ["带时间戳文字稿", "搜索金句、回听原话", "TXT"],
            ["SRT / VTT 字幕", "B 站、YouTube 的视频版", "SRT、VTT"],
            ["纯文本", "节目笔记、单集简介", "TXT"],
            ["JSON", "自己的脚本或站点", "JSON"],
          ],
        },
      },
      {
        title: "一半字幕条超出行长限制",
        paragraphs: [
          "应用用的是播出级的三条限制：每行 42 个字符、每条字幕 84 个字符、每秒阅读 20 个字符。直接导出模型原始结果，每种组合都至少有一半字幕超出行长。",
          "所以导出前先跑一次重排。同一份文字稿过一遍应用的版式处理，超标比例降到 0 到 30%，取决于你选的模型。",
        ],
        table: {
          caption:
            "七种模型与后端组合，都用下载按钮背后的同一个 toSrt() 导出，再解析回来逐条测量。「重排后」是同一份文字稿过了应用的版式处理。",
          source: "content/guides/data/subtitle-violations.json",
          columns: ["模型", "字幕条数", "超行长（原始）", "重排后", "最长原始字幕"],
          rows: [
            ["tiny，CPU", "12", "6（50%）", "3（25%）", "88 字符"],
            ["tiny，GPU", "11", "6（55%）", "3（27%）", "89 字符"],
            ["base，CPU", "12", "6（50%）", "3（25%）", "89 字符"],
            ["base，GPU", "8", "6（75%）", "3（30%）", "100 字符"],
            ["small，CPU", "10", "5（50%）", "1（8%）", "100 字符"],
            ["small，GPU", "10", "5（50%）", "0（0%）", "100 字符"],
            ["turbo，CPU", "10", "5（50%）", "0（0%）", "100 字符"],
          ],
        },
      },
      {
        title: "节目笔记能写什么、不能写什么",
        paragraphs: [
          "节目笔记是给人读的：一段摘要、几个链接、人名。转写给你的是原料和每句话的时间戳，够你跳到记得的那四个时刻，把摘要写出来。",
          "它不会替你写章节。章节切在哪里是对内容的判断，文字稿只知道谁在什么时候不说话了——时间戳能帮你定位，自动分段帮不上。平台对章节格式的要求，还是得你对着音频自己核。",
        ],
      },
      {
        title: "长节目和手机：先看模型体积",
        paragraphs: [
          "40 分钟的节目，base 模型在 WebAssembly（CPU）下约 9 分钟转完，WebGPU 约 3.8 分钟。整期一小时按比例往上加，慢的地方主要是模型下载和内存。",
          "第一次用要下载模型，之后缓存在浏览器里。手机内存紧张时，tiny 和 base 最现实；turbo 的体积在移动端基本不用考虑。",
        ],
        table: {
          caption: "各模型的首次下载体积：CPU 走 q8 量化，GPU 走 fp32。",
          columns: ["模型", "CPU（q8）", "GPU（fp32）"],
          rows: [
            ["Tiny", "41 MB", "151 MB"],
            ["Base", "77 MB", "291 MB"],
            ["Small", "249 MB", "968 MB"],
            ["Turbo", "1,085 MB", "3,236 MB"],
          ],
        },
      },
    ],
    checklistTitle: "单集上线前的三项检查",
    checklist: [
      {
        title: "先听开头 30 秒",
        body: "开头是模型上下文最少的地方：垫着音乐、只说一次的人名，是整期最可能出错的一句。",
      },
      {
        title: "导出前重排字幕",
        body: "原始字幕一半超出行长，重排后降到 0 到 30%，取决于模型。",
      },
      {
        title: "赞助口播逐字核对",
        body: "广告口播是听众可能拿着音频对照的部分，它要进文字稿，不只是进笔记。",
      },
    ],
    limitsTitle: "一期节目装不进一个标签页的地方",
    limits: [
      "说话声下面垫着音乐时，字幕劣化最快：字可能还在，断句一定乱。",
      "超过约两小时，内存估算会过 3.3 GB——90 分钟以上的访谈，先拆分比换更大的模型更有效。",
      "不区分说话人：双人播客不会分出「主持人」和「嘉宾」；也不翻译，也不做实时字幕。",
      "单文件上限 1 GiB，进模型前统一重采样成 16 kHz 单声道。",
      "不能贴链接抓取：小宇宙、喜马拉雅、网易云音乐、B 站上的节目要先下载音频，再拖进来。",
    ],
    imageSrc: image,
    imageAlt: "带时间戳、可搜索的播客单集文字稿",
  },
  ja: {
    primaryKeyword: "ポッドキャスト 文字起こし",
    supportingKeywords: ["ポッドキャスト 文字起こし 無料", "ポッドキャスト 書き起こし", "ポッドキャスト 概要欄", "ポッドキャスト 字幕"],
    guideTitle: "ポッドキャスト 文字起こし：1本のエピソードから4つの成果物",
    guideIntro:
      "1時間のエピソードは約8,700語、字幕はおよそ1,300本になります。言葉のほうはそのまま使えますが、字幕はそうではありません。どのモデルでも、書き出した字幕の半分以上が1行42文字を超えていて、まず組み直しが必要です。",
    sections: [
      {
        title: "1本のエピソードから出てくるもの",
        paragraphs: [
          "同じ音声を一度文字起こしするだけで、4つが手に入ります。タイムスタンプ付きの文字起こし、SRT・VTTの字幕、概要欄に使うプレーンテキスト、そして自作スクリプト用のJSONです。用途ごとに何度も処理し直す必要はありません。",
          "追加の作業が要るのは字幕だけです。Whisperは文ではなく音声の塊ごとに区切るため、34秒のサンプルで12本になりました。この割合なら1時間で約1,300本です。この数字を先に知っておくと、字幕エディタで境界をドラッグする覚悟が決まります。",
        ],
        table: {
          caption: "1本のエピソードを一度処理して得られる4つの成果物と、その使い道・書き出し形式です。",
          columns: ["成果物", "使い道", "書き出し形式"],
          rows: [
            ["タイムスタンプ付き文字起こし", "引用の検索、聞き直し", "TXT"],
            ["SRT / VTT 字幕", "動画版の字幕（YouTube など）", "SRT、VTT"],
            ["プレーンテキスト", "概要欄、エピソードの説明文", "TXT"],
            ["JSON", "自作スクリプトやサイト", "JSON"],
          ],
        },
      },
      {
        title: "字幕の半分は行長を超えている",
        paragraphs: [
          "アプリは放送向けの3つの制限をかけています。1行42文字、1本あたり84文字、1秒あたり20文字の読み速度です。モデルの出力をそのまま書き出すと、どの組み合わせでも半分以上の字幕が行長を超えました。",
          "そこで書き出しの前に組み直しを行います。同じ文字起こしをアプリのレイアウト処理に通すと、超過は0〜30%まで下がります。どこまで下がるかは選んだモデル次第です。",
        ],
        table: {
          caption:
            "7つのモデルとバックエンドの組み合わせを、ダウンロードボタンと同じtoSrt()で書き出し、解析し直して1本ずつ測った結果です。「組み直し後」は同じ文字起こしをアプリのレイアウト処理に通したものです。",
          source: "content/guides/data/subtitle-violations.json",
          columns: ["モデル", "字幕数", "行長超過（生）", "組み直し後", "最長の生字幕"],
          rows: [
            ["tiny、CPU", "12", "6（50%）", "3（25%）", "88文字"],
            ["tiny、GPU", "11", "6（55%）", "3（27%）", "89文字"],
            ["base、CPU", "12", "6（50%）", "3（25%）", "89文字"],
            ["base、GPU", "8", "6（75%）", "3（30%）", "100文字"],
            ["small、CPU", "10", "5（50%）", "1（8%）", "100文字"],
            ["small、GPU", "10", "5（50%）", "0（0%）", "100文字"],
            ["turbo、CPU", "10", "5（50%）", "0（0%）", "100文字"],
          ],
        },
      },
      {
        title: "概要欄に書けること、書けないこと",
        paragraphs: [
          "概要欄は人が読むためのものです。短いまとめ、リンク、人名。文字起こしが渡してくれるのは素材と1行ごとのタイムスタンプで、覚えている4つの場面に飛んでまとめを書くには十分です。",
          "ただしチャプターは作ってくれません。どこで区切るかは内容に対する判断で、文字起こしが知っているのは「誰がいつ話し終えたか」だけです。タイムスタンプは場所を教えてくれますが、自動の分割は役に立ちません。",
        ],
      },
      {
        title: "長いエピソードとスマホ：まずモデルのサイズ",
        paragraphs: [
          "40分のエピソードなら、baseモデルでWebAssembly（CPU）が約9分、WebGPUなら約3.8分です。1時間になれば比例して伸び、時間を食うのは主にモデルのダウンロードとメモリです。",
          "初回はモデルをダウンロードし、その後はブラウザにキャッシュされます。スマートフォンでメモリが厳しいときはtinyかbaseが現実的で、turboのサイズはモバイルではまず選べません。",
        ],
        table: {
          caption: "モデルごとの初回ダウンロードサイズ。CPUはq8量子化、GPUはfp32です。",
          columns: ["モデル", "CPU（q8）", "GPU（fp32）"],
          rows: [
            ["Tiny", "41 MB", "151 MB"],
            ["Base", "77 MB", "291 MB"],
            ["Small", "249 MB", "968 MB"],
            ["Turbo", "1,085 MB", "3,236 MB"],
          ],
        },
      },
    ],
    checklistTitle: "配信前の3つの確認",
    checklist: [
      {
        title: "最初の30秒を聞く",
        body: "冒頭はモデルにとって文脈が最も少ない場所です。BGMの上で一度しか出てこない人名は、エピソードでいちばん間違えやすい一行です。",
      },
      {
        title: "書き出す前に字幕を組み直す",
        body: "生の字幕は半分が行長超過です。組み直すと0〜30%まで下がり、どこまで下がるかはモデル次第です。",
      },
      {
        title: "スポンサーの読み上げは一字一句確認する",
        body: "広告の読み上げは、リスナーが音声と照らし合わせる唯一の部分です。概要欄だけでなく、文字起こしにも残してください。",
      },
    ],
    limitsTitle: "1本のエピソードがタブに収まらなくなる場所",
    limits: [
      "話し声の下に音楽があると字幕が最も崩れます。言葉は残っても、区切りは崩れます。",
      "およそ2時間を超えるとメモリの見積もりが3.3 GBを超えます。90分以上のインタビューは、大きいモデルに替えるより先に分割してください。",
      "話者の区別はしません。2人のポッドキャストでも「ホスト」「ゲスト」には分かれません。翻訳もリアルタイム字幕も行いません。",
      "ファイルの上限は1 GiBで、モデルに渡す前に16 kHzモノラルへ変換します。",
      "URLを貼って取得することはできません。Spotify、Apple Podcasts、stand.fm、Voicyのエピソードは、音声ファイルをダウンロードしてからドロップしてください。",
    ],
    imageSrc: image,
    imageAlt: "検索できるタイムスタンプ付きのポッドキャスト文字起こし",
  },
};
