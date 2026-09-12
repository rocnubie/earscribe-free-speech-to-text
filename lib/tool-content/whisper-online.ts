import type { ToolLocale } from "@/lib/site-routes";
import type { ToolGuide } from "@/lib/tool-page-seo";
import type { ToolPageDefinition } from "@/lib/tool-pages";

const image = "/screenshots/02-transcript-showcase.webp";

export const WHISPER_ONLINE_PAGE: ToolPageDefinition = {
  slug: "whisper-online",
  resultTab: "transcript",
  copy: {
    en: {
      title: "Run OpenAI Whisper online in your browser",
      description:
        "Use OpenAI's Whisper speech recognition online without an API key: Tiny, Base, Small or Large v3 Turbo, running in your browser. No upload, no sign-up.",
      eyebrow: "Whisper online",
      intro:
        "EarScribe runs OpenAI's open-source Whisper models directly in your browser tab with Transformers.js and ONNX Runtime Web. Pick a model, choose an audio file, and get Whisper's timestamped transcript without installing Python or paying for an API.",
      benefits: [
        "No API key, no Python, no install",
        "Tiny, Base, Small or Large v3 Turbo",
        "WebGPU when available, CPU otherwise",
      ],
      workflowTitle: "Using Whisper in the browser",
      workflow: [
        { title: "Choose an audio file", body: "EarScribe decodes MP3, WAV, M4A, OGG, FLAC and WebM in the browser and hands Whisper a 16 kHz mono copy." },
        { title: "Pick a Whisper model", body: "Base is recommended for most recordings. Compare all four to trade download size and speed for accuracy." },
        { title: "Review Whisper's output", body: "Every segment carries Whisper's timestamps. Replay, correct and export TXT, SRT, VTT or JSON." },
      ],
      tipsTitle: "Getting the most from Whisper",
      tips: [
        "Whisper detects the language from the first 30 seconds, so start the file with speech rather than a long music intro.",
        "Silence and music can make Whisper invent short phrases. Trim long silent stretches and check the start and end of the transcript.",
        "Larger models help most with accents, noise and specialist vocabulary; for clear speech, Base is often enough.",
      ],
      faq: [
        { q: "Is this the real OpenAI Whisper?", a: "Yes. EarScribe uses OpenAI's Whisper weights converted to ONNX, published by the onnx-community organization on Hugging Face, and runs them with Transformers.js. The model is the same; only the runtime is different." },
        { q: "Which Whisper models are available?", a: "Tiny, Base, Small and Large v3 Turbo. The model picker shows each download size and a memory guide before you start." },
        { q: "How is this different from the OpenAI API?", a: "The API uploads your file to OpenAI, needs an API key and bills by audio length. Here the model runs on your device, so there is no key or fee, but speed depends on your hardware." },
        { q: "Why is the first run slow?", a: "The browser downloads the model once and caches it. Later runs on the same device and browser start much faster." },
      ],
      screenshotAlt: "Whisper transcript with timestamps produced in the browser",
    },
    "zh-CN": {
      title: "在浏览器里在线使用 OpenAI Whisper",
      description: "不用 API Key 也能在线使用 OpenAI Whisper 语音转文字：Tiny、Base、Small、Large v3 Turbo 都在浏览器里运行。不上传、无需注册。",
      eyebrow: "Whisper 在线",
      intro: "EarScribe 借助 Transformers.js 和 ONNX Runtime Web，直接在浏览器标签页里运行 OpenAI 开源的 Whisper 模型。选好模型和音频文件，就能得到 Whisper 带时间戳的转写结果，不用装 Python，也不用为 API 付费。",
      benefits: ["无需 API Key、Python 或安装", "Tiny、Base、Small、Large v3 Turbo 任选", "支持 WebGPU，没有时自动改用 CPU"],
      workflowTitle: "在浏览器里使用 Whisper",
      workflow: [
        { title: "选择音频文件", body: "EarScribe 在浏览器里解码 MP3、WAV、M4A、OGG、FLAC 和 WebM，再把 16 kHz 单声道音频交给 Whisper。" },
        { title: "选择 Whisper 模型", body: "大多数录音推荐 Base。也可以对比四个模型，在下载体积、速度和准确率之间取舍。" },
        { title: "核对 Whisper 的结果", body: "每一段都带有 Whisper 给出的时间戳，可以回听、修改，并导出 TXT、SRT、VTT 或 JSON。" },
      ],
      tipsTitle: "用好 Whisper 的几个要点",
      tips: [
        "Whisper 根据前 30 秒判断语言，文件开头最好是人声，而不是很长的片头音乐。",
        "静音和音乐可能让 Whisper 凭空生成短句，剪掉长静音，并检查文字稿的开头和结尾。",
        "大模型主要在口音、噪音和专业词汇上更有优势；清晰人声用 Base 往往就够了。",
      ],
      faq: [
        { q: "这是真正的 OpenAI Whisper 吗？", a: "是的。EarScribe 使用 onnx-community 在 Hugging Face 上发布的 ONNX 版 Whisper 权重，通过 Transformers.js 运行。模型相同，只是运行环境不同。" },
        { q: "可以用哪些 Whisper 模型？", a: "Tiny、Base、Small 和 Large v3 Turbo。开始前，模型选择器会显示每个模型的下载大小和内存建议。" },
        { q: "和 OpenAI API 有什么区别？", a: "API 需要把文件上传到 OpenAI、要有 API Key，并按音频时长计费。这里模型在你的设备上运行，没有 Key 也没有费用，但速度取决于你的硬件。" },
        { q: "为什么第一次比较慢？", a: "浏览器第一次要下载模型并缓存，之后在同一台设备和浏览器上启动会快很多。" },
      ],
      screenshotAlt: "在浏览器中由 Whisper 生成的带时间戳文字稿",
    },
    ja: {
      title: "OpenAIのWhisperをブラウザで使って文字起こし",
      description: "APIキーなしでOpenAIのWhisperをオンラインで。Tiny・Base・Small・Large v3 Turboがブラウザで動きます。アップロード不要・登録不要です。",
      eyebrow: "Whisper 文字起こし",
      intro: "EarScribeは、OpenAIがオープンソースで公開したWhisperモデルを、Transformers.jsとONNX Runtime Webでブラウザのタブ内で直接動かします。モデルと音声ファイルを選ぶだけで、Pythonのインストールや有料APIなしに、Whisperのタイムスタンプ付き文字起こしが得られます。",
      benefits: ["APIキー・Python・インストール不要", "Tiny・Base・Small・Large v3 Turboから選べる", "WebGPUがなければCPUで動作"],
      workflowTitle: "ブラウザでWhisperを使う流れ",
      workflow: [
        { title: "音声ファイルを選ぶ", body: "EarScribeがMP3・WAV・M4A・OGG・FLAC・WebMをブラウザでデコードし、16 kHzモノラルの音声をWhisperに渡します。" },
        { title: "Whisperのモデルを選ぶ", body: "多くの録音にはBaseがおすすめです。4つのモデルを比べて、ダウンロード容量・速度・精度のバランスを選べます。" },
        { title: "Whisperの結果を確認する", body: "各区間にWhisperのタイムスタンプが付きます。聞き直して修正し、TXT・SRT・VTT・JSONで書き出します。" },
      ],
      tipsTitle: "Whisperをうまく使うコツ",
      tips: [
        "Whisperは最初の30秒で言語を判定します。長いBGMではなく、話し声から始まるファイルが向いています。",
        "無音や音楽の部分で、Whisperが短い文をでっち上げることがあります。長い無音は削り、最初と最後を確認しましょう。",
        "大きいモデルが効くのは訛り・雑音・専門用語です。はっきりした声ならBaseで十分なことが多いです。",
      ],
      faq: [
        { q: "本物のOpenAI Whisperですか？", a: "はい。onnx-communityがHugging Faceで公開しているONNX版のWhisperの重みを、Transformers.jsで動かしています。モデルは同じで、実行環境だけが違います。" },
        { q: "どのWhisperモデルが使えますか？", a: "Tiny、Base、Small、Large v3 Turboです。開始前にモデル選択画面で各モデルのダウンロード容量とメモリの目安を確認できます。" },
        { q: "OpenAIのAPIとは何が違いますか？", a: "APIはファイルをOpenAIにアップロードし、APIキーが必要で、音声の長さに応じて課金されます。EarScribeは端末上でモデルを動かすので、キーも料金も不要ですが、速度はハードウェア次第です。" },
        { q: "初回が遅いのはなぜですか？", a: "ブラウザが最初にモデルをダウンロードしてキャッシュするためです。同じ端末とブラウザなら、2回目以降はずっと速く始まります。" },
      ],
      screenshotAlt: "ブラウザ上のWhisperで作成したタイムスタンプ付き文字起こし",
    },
  },
};

export const WHISPER_ONLINE_GUIDES: Record<ToolLocale, ToolGuide> = {
  en: {
    primaryKeyword: "whisper online",
    supportingKeywords: ["whisper online free", "openai whisper in browser", "whisper transcription online", "whisper large v3 turbo online"],
    guideTitle: "Which Whisper model to run, and what to expect",
    guideIntro:
      "Whisper is a family of speech recognition models that OpenAI released as open source in 2022, trained on 680,000 hours of audio in many languages. Model size is the main trade-off: bigger models are more accurate and much heavier to run.",
    sections: [
      {
        title: "The four models in EarScribe",
        paragraphs: [
          "Tiny (39 million parameters) is the fastest and smallest download, useful on phones and for a quick draft. Base (74 million) is the recommended balance for clear speech. Small (244 million) copes better with accents and noise but needs more memory, ideally with WebGPU.",
          "Large v3 Turbo (809 million parameters) is a faster version of Whisper's largest model with a much smaller decoder: 4 layers instead of 32. It is the most accurate option here and needs a capable device; about 6 GB of memory and WebGPU are recommended.",
        ],
      },
      {
        title: "WebGPU or WebAssembly",
        paragraphs: [
          "When your browser supports WebGPU, the model runs on your graphics chip, which is much faster for the larger models. Otherwise EarScribe falls back to WebAssembly on the CPU: it works almost everywhere, just more slowly.",
          "WebGPU is available in recent Chrome and Edge and is arriving in other browsers. If Small or Large v3 Turbo feels slow, the CPU path is usually the reason.",
        ],
      },
      {
        title: "Where Whisper struggles",
        paragraphs: [
          "Whisper can produce plausible text during silence or music, repeat a phrase, or drop words when people talk over each other. It does not label speakers.",
          "Timestamps come per segment rather than per word. Use them to jump back and check anything important before you publish.",
        ],
      },
    ],
    checklistTitle: "Choosing a model",
    checklist: [
      { title: "Phone or older laptop", body: "Start with Tiny or Base." },
      { title: "Clear speech", body: "Base is usually enough." },
      { title: "Accents or noise", body: "Try Small on a device with 4 GB of memory or more." },
      { title: "Best accuracy", body: "Large v3 Turbo, with WebGPU and 6 GB of memory or more." },
    ],
    limitsTitle: "What running Whisper in a browser can't do",
    limits: [
      "Speed depends entirely on your device; there is no server to offload long files to.",
      "Live streaming transcription, translation and speaker labels are not part of this tool.",
    ],
    imageSrc: image,
    imageAlt: "Choosing between Whisper Tiny, Base, Small and Large v3 Turbo in EarScribe",
  },
  "zh-CN": {
    primaryKeyword: "whisper 在线",
    supportingKeywords: ["whisper 在线转写", "whisper 语音转文字", "whisper 语音转文字 免费", "whisper large v3 turbo 在线"],
    guideTitle: "该选哪个 Whisper 模型，能期待什么",
    guideIntro: "Whisper 是 OpenAI 在 2022 年开源的一系列语音识别模型，用 68 万小时的多语言音频训练。模型大小是最主要的取舍：越大越准，运行也越吃力。",
    sections: [
      {
        title: "EarScribe 里的四个模型",
        paragraphs: [
          "Tiny（3900 万参数）最快、下载最小，适合手机和快速出草稿。Base（7400 万参数）是清晰人声的推荐选择。Small（2.44 亿参数）更能应付口音和噪音，但需要更多内存，最好有 WebGPU。",
          "Large v3 Turbo（8.09 亿参数）是 Whisper 最大模型的提速版，解码器从 32 层缩减到 4 层。它是这里最准的选项，需要性能较好的设备，建议有约 6 GB 内存和 WebGPU。",
        ],
      },
      {
        title: "WebGPU 还是 WebAssembly",
        paragraphs: [
          "浏览器支持 WebGPU 时，模型在显卡上运行，大模型会快很多；不支持时，EarScribe 改用 CPU 上的 WebAssembly，几乎哪里都能跑，只是更慢。",
          "较新版本的 Chrome 和 Edge 已支持 WebGPU，其他浏览器也在陆续跟进。如果 Small 或 Large v3 Turbo 感觉很慢，通常是走了 CPU。",
        ],
      },
      {
        title: "Whisper 不擅长的地方",
        paragraphs: [
          "在静音或音乐段，Whisper 可能生成看似合理的文字、重复某句话，或在多人抢话时漏词。它也不会标注说话人。",
          "时间戳是按段落给出的，不是逐字。发布前，用它们跳回原音频核对重要内容。",
        ],
      },
    ],
    checklistTitle: "怎么选模型",
    checklist: [
      { title: "手机或旧电脑", body: "从 Tiny 或 Base 开始。" },
      { title: "人声清晰", body: "Base 通常就够。" },
      { title: "口音或噪音", body: "在 4 GB 以上内存的设备上试试 Small。" },
      { title: "追求最高准确率", body: "Large v3 Turbo，搭配 WebGPU 和 6 GB 以上内存。" },
    ],
    limitsTitle: "浏览器里运行 Whisper 做不到的事",
    limits: [
      "速度完全取决于你的设备，没有服务器替你处理长文件。",
      "不支持实时流式转写、翻译和说话人标注。",
    ],
    imageSrc: image,
    imageAlt: "在 EarScribe 中选择 Whisper Tiny、Base、Small 或 Large v3 Turbo",
  },
  ja: {
    primaryKeyword: "whisper 文字起こし",
    supportingKeywords: ["whisper 文字起こし 無料", "whisper オンライン", "whisper 使い方", "whisper large v3 turbo"],
    guideTitle: "どのWhisperモデルを選び、何を期待できるか",
    guideIntro: "Whisperは、OpenAIが2022年にオープンソースで公開した音声認識モデルのシリーズで、多言語の音声68万時間で学習されています。いちばん大きな選択肢はモデルの大きさで、大きいほど正確ですが、動かすのも重くなります。",
    sections: [
      {
        title: "EarScribeで使える4つのモデル",
        paragraphs: [
          "Tiny（3,900万パラメータ）は最速でダウンロードも最小なので、スマートフォンや下書きに向いています。Base（7,400万）ははっきりした声におすすめのバランス型です。Small（2億4,400万）は訛りや雑音に強くなりますが、メモリを多く使い、WebGPUがあると快適です。",
          "Large v3 Turbo（8億900万パラメータ）は、Whisperの最大モデルのデコーダを32層から4層に減らした高速版です。ここで最も精度が高い選択肢で、約6 GBのメモリとWebGPUのある端末をおすすめします。",
        ],
      },
      {
        title: "WebGPUかWebAssemblyか",
        paragraphs: [
          "ブラウザがWebGPUに対応していれば、モデルはGPUで動き、大きいモデルほど速くなります。対応していない場合はCPU上のWebAssemblyに切り替わり、ほとんどの環境で動きますが遅くなります。",
          "WebGPUは最近のChromeとEdgeで使え、ほかのブラウザでも対応が進んでいます。SmallやLarge v3 Turboが遅いと感じたら、多くの場合CPUで動いています。",
        ],
      },
      {
        title: "Whisperが苦手なこと",
        paragraphs: [
          "無音や音楽の部分でそれらしい文を作ったり、同じフレーズを繰り返したり、発言が重なると単語を落としたりすることがあります。話者の区別もしません。",
          "タイムスタンプは単語ごとではなく区間ごとです。公開前に、重要な箇所はタイムスタンプから聞き直して確認してください。",
        ],
      },
    ],
    checklistTitle: "モデルの選び方",
    checklist: [
      { title: "スマートフォンや古いPC", body: "TinyかBaseから始める。" },
      { title: "はっきりした声", body: "たいていBaseで十分。" },
      { title: "訛りや雑音", body: "メモリ4 GB以上の端末でSmallを試す。" },
      { title: "最高の精度", body: "Large v3 Turboを、WebGPUとメモリ6 GB以上で。" },
    ],
    limitsTitle: "ブラウザのWhisperでできないこと",
    limits: [
      "速度は端末次第です。長いファイルを代わりに処理するサーバーはありません。",
      "リアルタイムのストリーミング文字起こし、翻訳、話者ラベルには対応していません。",
    ],
    imageSrc: image,
    imageAlt: "EarScribeでWhisperのTiny・Base・Small・Large v3 Turboを選ぶ画面",
  },
};
