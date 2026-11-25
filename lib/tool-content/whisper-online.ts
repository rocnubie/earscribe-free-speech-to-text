import type { ToolLocale } from "@/lib/site-routes";
import type { ToolGuide } from "@/lib/tool-page-seo";
import type { ToolPageDefinition } from "@/lib/tool-pages";

const image = "/screenshots/ui-transcript.webp";

export const WHISPER_ONLINE_PAGE: ToolPageDefinition = {
  slug: "whisper-online",
  resultTab: "transcript",
  copy: {
    en: {
      title: "Run Whisper online without Python, an API key or an upload",
      metaTitle: "Whisper online: free, no API key, no upload | EarScribe",
      navTitle: "Whisper online",
      description:
        "Whisper online without an API key: the model runs in the tab, so nothing is uploaded. What each model downloads, how long an hour takes, and what it gets wrong.",
      eyebrow: "Whisper online",
      intro:
        "Not an API call that uploads the file and bills by the minute: the weights come down to the tab once, and every run after that happens on your machine. The trade is speed, and this page puts a number on it.",
      benefits: [
        "No API key, no Python, no install",
        "Four models, 41 MB to 3,236 MB",
        "WebGPU when the browser has it, CPU otherwise",
      ],
      workflowTitle: "Run Whisper online without an API key",
      workflow: [
        {
          title: "Choose the file",
          body: "The tab decodes MP3, WAV, M4A, OGG, FLAC or WebM to 16 kHz mono before Whisper sees a sample.",
        },
        {
          title: "Pick a model by its download",
          body: "Base is 77 MB on the CPU and 291 MB on the GPU; Turbo is 1,085 MB and 3,236 MB.",
        },
        {
          title: "Read the timestamps",
          body: "Every segment keeps its own start and end, so a doubtful line can be replayed before you export TXT, SRT, VTT or JSON.",
        },
      ],
      tipsTitle: "What changes the result more than the model",
      tips: [
        "Distance and room echo: a laptop two metres from the speaker loses more words than moving Base to Small wins back.",
        "Overlapped speech: Whisper drops words instead of guessing who spoke, and no larger model fixes that.",
        "Music under speech: the decoder writes lyrics or repeats a phrase, so strip the bed before you transcribe.",
      ],
      faq: [
        {
          q: "Is this the real OpenAI Whisper?",
          a: "Yes. EarScribe runs OpenAI's open weights, converted to ONNX by onnx-community and pinned in lib/models.ts, through Transformers.js. Same weights, different runtime.",
        },
        {
          q: "Which model should I pick for a one-hour recording?",
          a: "Base, at about 14 minutes on the CPU path we measured. Small takes 49 minutes, Turbo nearly four hours.",
        },
        {
          q: "Why is the first run slow?",
          a: "The weights are downloaded once — 77 MB for base on the CPU — and then cached by the browser. Later runs skip the download and start in seconds.",
        },
        {
          q: "Does it work without WebGPU?",
          a: "Yes, on the CPU path. WebGPU was 2.5 times faster for base and 4.7 times faster for small on the machine we measured.",
        },
        {
          q: "Can I use it with no internet connection?",
          a: "Not the first time: the page and the weights arrive over the network once. After that the model is cached, and the tab keeps working from the cache.",
        },
      ],
      screenshotAlt:
        "Whisper model picker in EarScribe showing Tiny, Base, Small and Large v3 Turbo with their download sizes",
    },
    "zh-CN": {
      title: "Whisper 在线跑：不装 Python、不用 API Key、不上传",
      metaTitle: "Whisper 在线：免费、无需 API Key、不上传 | EarScribe",
      navTitle: "Whisper 在线",
      description: "Whisper 在线，不用 API Key：模型在标签页里跑，音频不上传。四个模型各要下载多少、一小时音频要跑多久、它会错在哪里，这一页给实测数字。",
      eyebrow: "Whisper 在线",
      intro: "这不是把文件传上去、按分钟计费的 API：权重只下载一次到标签页，之后每次推理都在你的机器上完成。代价是速度，这一页把速度也写成数字。",
      benefits: ["不用 API Key、不用 Python、不用安装", "四个模型，41 MB 到 3,236 MB", "有 WebGPU 就用，没有就走 CPU"],
      workflowTitle: "不装环境，直接用上 Whisper",
      workflow: [
        { title: "选择文件", body: "标签页先把 MP3、WAV、M4A、OGG、FLAC 或 WebM 解码成 16 kHz 单声道，再交给 Whisper。单个文件上限 1 GiB。" },
        { title: "按下载体积选模型", body: "Base 在 CPU 上是 77 MB，在 WebGPU 上是 291 MB；Turbo 分别是 1,085 MB 和 3,236 MB。" },
        { title: "逐段核对", body: "每个分段都带自己的开始和结束时间，有疑问的行先回听，再导出 TXT、SRT、VTT 或 JSON。" },
      ],
      tipsTitle: "比换模型更能决定结果的三件事",
      tips: [
        "距离和房间混响：笔记本离说话人两米，丢掉的词比把 Base 换成 Small 能补回来的还多。",
        "多人抢话：Whisper 会直接漏词，而不是去猜谁在说，换更大的模型也修不好。",
        "人声下面压着音乐：解码器会写出歌词或重复同一句话，转写前先去掉背景音乐。",
      ],
      faq: [
        { q: "这是真正的 OpenAI Whisper 吗？", a: "是。EarScribe 跑的是 OpenAI 开源的权重，由 onnx-community 转成 ONNX、固定在 lib/models.ts 里，通过 Transformers.js 加载。权重一样，运行时不一样。" },
        { q: "一小时的录音该选哪个模型？", a: "Base，在我们测的 CPU 路径上约 14 分钟。Small 要 49 分钟，Turbo 接近四小时。" },
        { q: "为什么第一次很慢？", a: "权重要下载一次（Base 走 CPU 是 77 MB），之后由浏览器缓存。再跑就跳过下载，几秒内开始。" },
        { q: "没有 WebGPU 还能用吗？", a: "能，走 CPU 路径。在我们测的机器上，WebGPU 对 Base 快 2.5 倍，对 Small 快 4.7 倍。" },
        { q: "断网能用吗？", a: "第一次不行：页面和权重都要从网络取一次。之后模型已经在缓存里，标签页可以继续用。" },
      ],
      screenshotAlt: "EarScribe 的 Whisper 模型选择，显示 Tiny、Base、Small、Large v3 Turbo 和各自的下载体积",
    },
    ja: {
      title: "Whisper オンライン：PythonもAPIキーも不要、アップロードもしない",
      metaTitle: "Whisper オンライン：無料・APIキー不要・アップロードなし | EarScribe",
      navTitle: "Whisper オンライン",
      description: "APIキーなしのWhisper オンライン。モデルはタブ内で動くので音声はアップロードされません。各モデルのダウンロードサイズ、1時間の音声にかかる時間、間違えやすい箇所を実測値でまとめました。",
      eyebrow: "Whisper オンライン",
      intro: "ファイルを送って分単位で課金されるAPIではありません。重みは一度だけタブにダウンロードされ、そのあとの推論はすべて手元の端末で動きます。代わりに速度がかかるので、その数字もこのページに載せています。",
      benefits: ["APIキー・Python・インストール不要", "4つのモデル、41 MB〜3,236 MB", "WebGPUがあればそれを使い、なければCPU"],
      workflowTitle: "環境を作らずにWhisper オンラインで文字起こしする",
      workflow: [
        { title: "ファイルを選ぶ", body: "タブがMP3・WAV・M4A・OGG・FLAC・WebMを16 kHzモノラルにデコードしてからWhisperに渡します。1ファイルあたり1 GiBまでです。" },
        { title: "ダウンロードサイズでモデルを選ぶ", body: "BaseはCPUで77 MB、WebGPUで291 MB。Turboはそれぞれ1,085 MBと3,236 MBです。" },
        { title: "タイムスタンプで確認する", body: "区間ごとに開始と終了が残るので、怪しい行を聞き直してからTXT・SRT・VTT・JSONで書き出せます。" },
      ],
      tipsTitle: "モデルより結果を左右する3つのこと",
      tips: [
        "距離と部屋の反響：ノートPCが話者から2メートル離れていると、BaseをSmallに替えて取り戻せる量より多くの語を落とします。",
        "発話の重なり：Whisperは誰が話したかを推測せず、語を落とします。大きいモデルにしても直りません。",
        "声の下の音楽：デコーダが歌詞を書いたり同じフレーズを繰り返したりするので、文字起こしの前にBGMを外してください。",
      ],
      faq: [
        { q: "本物のOpenAI Whisperですか？", a: "はい。OpenAIが公開している重みを、onnx-communityがONNXに変換し、lib/models.tsに固定したものをTransformers.jsで動かしています。重みは同じで、実行環境だけが違います。" },
        { q: "1時間の録音にはどのモデルを選ぶべきですか？", a: "Baseです。計測したCPU経路で約14分、Smallは49分、Turboは4時間近くかかります。" },
        { q: "初回が遅いのはなぜですか？", a: "重みを一度ダウンロードするためです（BaseをCPUで動かす場合は77 MB）。以降はブラウザがキャッシュから読み込むので、数秒で始まります。" },
        { q: "WebGPUがなくても使えますか？", a: "使えます。CPU経路で動きます。計測した端末では、WebGPUはBaseで2.5倍、Smallで4.7倍速くなりました。" },
        { q: "オフラインでも使えますか？", a: "初回は無理です。ページと重みを一度ネットワークから取得します。その後はモデルがキャッシュに残るので、タブはそのまま動きます。" },
      ],
      screenshotAlt: "EarScribeのWhisperモデル選択画面。Tiny・Base・Small・Large v3 Turboと各ダウンロードサイズを表示",
    },
  },
};

export const WHISPER_ONLINE_GUIDES: Record<ToolLocale, ToolGuide> = {
  en: {
    primaryKeyword: "whisper online",
    supportingKeywords: [
      "whisper without api key",
      "run whisper in browser",
      "openai whisper online",
      "whisper large v3 turbo online",
    ],
    guideTitle: "Which Whisper model to run in a browser",
    guideIntro:
      "Four models, one download each. The number people get wrong is the size: the same model is three to four times larger when it runs on the graphics card instead of the CPU.",
    guideIntroTable: {
      caption: "Download size per model and backend. The GPU copies are fp32, the CPU copies q8.",
      source: "lib/models.ts:48-84",
      columns: ["Model", "CPU (q8)", "GPU (fp32)"],
      rows: [
        ["Tiny", "41 MB", "151 MB"],
        ["Base", "77 MB", "291 MB"],
        ["Small", "249 MB", "968 MB"],
        ["Turbo", "1,085 MB", "3,236 MB"],
      ],
    },
    sections: [
      {
        title: "How long Whisper takes on an hour of audio",
        paragraphs: [
          "On an M1 Pro, base ran at 0.235 times real time on the CPU, so an hour of audio takes about 14 minutes in the tab.",
          "Small ran at 0.819 and turbo at 3.835 — 49 minutes and just under four hours for the same hour. The GPU path was 2.5 times faster for base and 4.7 times faster for small.",
        ],
        chart: {
          caption:
            "Minutes to transcribe one hour of audio, measured on the CPU path (WebAssembly, q8).",
          source: "content/guides/data/bench-2026-11-17.json",
          max: 240,
          items: [
            { label: "Tiny", value: 7.1, unit: "min" },
            { label: "Base", value: 14.1, unit: "min" },
            { label: "Small", value: 49.1, unit: "min" },
            { label: "Turbo", value: 230.1, unit: "min", note: "CPU only" },
          ],
        },
      },
      {
        title: "What Whisper gets wrong, and what it does with silence",
        paragraphs: [
          "Thirty seconds of digital silence came back as [BLANK_AUDIO] in all six model and backend combinations we ran.",
          "Quieter than speech but not silent is worse: the same thirty seconds produced [BREAKING], [Music], (water flowing) and (birds chirping). The decoder annotates what it thinks it hears instead of returning nothing.",
          "Its first decoder token is a language guess, so a file that opens with music can be transcribed as the wrong language. Setting the language yourself skips that guess.",
        ],
        table: {
          caption:
            "Whisper's output on six synthetic clips, one run per model and backend (36 runs).",
          source: "content/guides/data/silence-hallucinations.json",
          columns: ["Input", "What came back", "Agreement"],
          rows: [
            ["30 s digital silence", "[BLANK_AUDIO]", "6 of 6"],
            ["30 s noise, −40 dB", "[BREAKING], [Music], (water flowing)", "5 answers in 6 runs"],
            ["30 s noise, −20 dB", "(birds chirping), (clippers buzzing)", "5 answers in 6 runs"],
            ["Single click", "[BLANK_AUDIO] ×4, [BEEP] ×2", "split"],
            ["Speech, then silence", "the speech only", "6 of 6"],
          ],
        },
      },
      {
        title: "Does Whisper need the file uploaded?",
        paragraphs: [
          "No. The file is decoded to 16 kHz mono inside the tab; the only large transfer is the model itself — 77 MB for base on the CPU, 291 MB on the GPU.",
          "That is the whole privacy claim: no account, no upload queue, no server holding the audio. The caveat is the same download on a metered connection.",
        ],
      },
    ],
    checklistTitle: "Before you keep the transcript",
    checklist: [
      {
        title: "Search every proper noun",
        body: "Names, companies and product terms fail first; search them, then replay the line.",
      },
      {
        title: "Replay the bracketed parts",
        body: "[BLANK_AUDIO], (birds chirping) and [Music] are the decoder filling silence, not content.",
      },
      {
        title: "Check the opening 30 seconds",
        body: "Language is guessed from the first window, and a music intro can set the wrong one.",
      },
      {
        title: "Read the quiet passages",
        body: "Overlapped speech loses words instead of marking them, so a gap in the text may be a gap in the audio.",
      },
    ],
    limitsTitle: "When running Whisper in a tab is the wrong choice",
    limits: [
      "An hour on turbo takes nearly four hours here; a hosted endpoint will finish sooner.",
      "The 3.2 GB GPU copy of turbo did not finish downloading within thirty minutes on our connection.",
      "No speaker labels, no translation, no live captioning and no meeting summary.",
      "A device with 4 GB of memory will struggle above small.",
    ],
    imageSrc: "/screenshots/ui-transcript.webp",
    imageAlt: "Whisper transcript in EarScribe with timestamps, search and export controls",
    workflowImageSrc: "/screenshots/ui-models.webp",
  },
  "zh-CN": {
    primaryKeyword: "whisper 在线",
    supportingKeywords: ["whisper 在线转写", "whisper 浏览器 不用 api key", "openai whisper 在线", "whisper large v3 turbo 在线"],
    guideTitle: "Whisper 在线跑：四个模型的体积、耗时和错处",
    guideIntro: "四个模型，每个只下载一次。最容易记错的不是速度而是体积：同一个模型放到显卡上跑，文件是 CPU 版的三到四倍。下面每个数字都是实测，不是估算。",
    guideIntroTable: {
      caption: "各模型在两种后端下的下载体积。GPU 版是 fp32，CPU 版是 q8。",
      source: "lib/models.ts:48-84",
      columns: ["模型", "CPU（q8）", "GPU（fp32）"],
      rows: [
        ["Tiny", "41 MB", "151 MB"],
        ["Base", "77 MB", "291 MB"],
        ["Small", "249 MB", "968 MB"],
        ["Turbo", "1,085 MB", "3,236 MB"],
      ],
    },
    sections: [
      {
        title: "一小时音频，在浏览器里要跑多久",
        paragraphs: [
          "在 M1 Pro 上，Base 走 CPU（WebAssembly）是 0.235 倍实时，一小时音频大约 14 分钟；换成一个 40 分钟的文件，就是 9.4 分钟。",
          "同一台机器切到 WebGPU，Base 只要 3.8 分钟，快 2.5 倍。Small 在 CPU 上要 49 分钟，Turbo 接近四小时——这个差距不是换个浏览器能补回来的。",
          "Turbo 的 GPU 版要下 3.24 GB，我们没能在这台机器上下完，所以图里 Turbo 只有 CPU 的数字，GPU 那一栏标「未测」。",
        ],
        chart: {
          caption: "转写一小时音频需要的分钟数，CPU 路径实测（WebAssembly，q8）。",
          source: "content/guides/data/bench-2026-11-17.json",
          max: 240,
          items: [
            { label: "Tiny", value: 7.1, unit: "min" },
            { label: "Base", value: 14.1, unit: "min" },
            { label: "Small", value: 49.1, unit: "min" },
            { label: "Turbo", value: 230.1, unit: "min", note: "仅 CPU" },
          ],
        },
      },
      {
        title: "浏览器、服务器、本地装 Python，区别在哪",
        paragraphs: [
          "浏览器标签页：文件不出设备，代价是推理吃你自己的 CPU 或显卡。音频先被重采样成 16 kHz 单声道，采样率再高也不会多带信息进来。",
          "服务器 API：文件上传，按音频时长计费，模型和机器由对方定。省事，但录音离开了你的设备，长文件还得排队。",
          "本地装 Python 跑 whisper：模型和显存都在你手里，参数能改、能跑批量脚本，但 CUDA 和 PyTorch 环境得自己配，换台机器就重来一遍。这一页用的是第三种推理，配第一种的隐私，省掉的是环境。",
        ],
      },
      {
        title: "它会错在哪，遇到静音又会怎样",
        paragraphs: [
          "三十秒纯数字静音，在我们跑过的六种模型加后端组合里，全都被写成了 [BLANK_AUDIO]。",
          "比人声轻、但又不算安静的片段更麻烦：同样三十秒，返回过 [BREAKING]、[Music]、(water flowing) 和 (birds chirping)。解码器会给它「听到」的东西加标注，而不是返回空。",
          "它的第一个解码 token 是语言猜测，所以开头是音乐的文件可能被当成另一种语言。自己指定语言，就跳过这次猜测。",
          "同一段 34.36 秒的样音，四个模型在 111 个词里有 26 个不一致；真正改变意思的是一个人名、一个否定词和一个数字。",
        ],
        table: {
          caption: "六段合成音频上 Whisper 的输出，每个模型配每种后端跑一次，共 36 次。",
          source: "content/guides/data/silence-hallucinations.json",
          columns: ["输入", "返回内容", "一致情况"],
          rows: [
            ["30 秒数字静音", "[BLANK_AUDIO]", "6 次一样"],
            ["30 秒噪声，−40 dB", "[BREAKING]、[Music]、(water flowing)", "6 次里 5 种答案"],
            ["30 秒噪声，−20 dB", "(birds chirping)、(clippers buzzing)", "6 次里 5 种答案"],
            ["单次点击声", "[BLANK_AUDIO] ×4、[BEEP] ×2", "分裂"],
            ["人声后接静音", "只有人声", "6 次一样"],
          ],
        },
      },
      {
        title: "要不要把文件传上去",
        paragraphs: [
          "不用。文件在标签页里就被解码成 16 kHz 单声道，唯一的大流量是模型本身：Base 在 CPU 上 77 MB，在 GPU 上 291 MB。",
          "能承诺的隐私就这么多：没有账号，没有上传队列，没有存着音频的服务器。识别覆盖 99 种语言，界面提供 27 种语言，单个文件上限 1 GiB。",
          "要注意的是同一份下载也会计进你的流量。按流量计费的网络下，Turbo 的 3.24 GB 值得先想清楚再点。",
        ],
      },
    ],
    checklistTitle: "留下文字稿之前",
    checklist: [
      { title: "把每个专有名词搜一遍", body: "人名、公司名、产品名最先出错；搜出来，再回听那一行。" },
      { title: "回听带括号的部分", body: "[BLANK_AUDIO]、(birds chirping)、[Music] 是解码器在填静音，不是内容。" },
      { title: "检查开头 30 秒", body: "语言是从第一个窗口猜出来的，一段音乐前奏可能把它定错。" },
      { title: "读一遍安静的段落", body: "抢话时它会漏词而不是标出来，文字里的空隙可能真是音频里的空隙。" },
    ],
    limitsTitle: "什么时候不该在标签页里跑 Whisper",
    limits: [
      "Turbo 跑一小时要接近四小时；托管的接口会更快跑完。",
      "Turbo 的 3.2 GB GPU 版，在我们的网络下三十分钟没下完。",
      "没有说话人分离、没有翻译、没有实时字幕，也没有会议摘要。",
      "内存只有 4 GB 的设备，跑到 Small 以上就吃力了。",
    ],
    imageSrc: image,
    imageAlt: "EarScribe 中的 Whisper 文字稿，带时间戳、搜索和导出控制",
    workflowImageSrc: "/screenshots/ui-models.webp",
  },
  ja: {
    primaryKeyword: "whisper オンライン",
    supportingKeywords: ["whisper オンライン 無料", "whisper ブラウザ apiキー不要", "openai whisper オンライン", "whisper large v3 turbo オンライン"],
    guideTitle: "Whisperをブラウザで動かす：4モデルのサイズ・時間・間違え方",
    guideIntro: "モデルは4つ、ダウンロードはそれぞれ一度だけです。覚え違いが多いのは速度よりサイズで、同じモデルでもGPUで動かすとCPU版の3〜4倍になります。以下の数字はすべて実測値です。",
    guideIntroTable: {
      caption: "モデルとバックエンドごとのダウンロードサイズ。GPU版はfp32、CPU版はq8です。",
      source: "lib/models.ts:48-84",
      columns: ["モデル", "CPU（q8）", "GPU（fp32）"],
      rows: [
        ["Tiny", "41 MB", "151 MB"],
        ["Base", "77 MB", "291 MB"],
        ["Small", "249 MB", "968 MB"],
        ["Turbo", "1,085 MB", "3,236 MB"],
      ],
    },
    sections: [
      {
        title: "1時間の音声にどれだけかかるか",
        paragraphs: [
          "M1 ProでBaseをCPU（WebAssembly）で動かすと実時間の0.235倍で、1時間の音声に約14分かかります。40分のファイルなら9.4分です。",
          "同じ端末でWebGPUに切り替えるとBaseは3.8分、2.5倍速くなります。SmallはCPUで49分、Turboは4時間近くかかり、この差はブラウザを変えても埋まりません。",
          "TurboのGPU版は3.24 GBあり、この環境ではダウンロードが終わりませんでした。そのためグラフのTurboはCPUの数字だけで、GPU側は「未測」としています。",
        ],
        chart: {
          caption: "1時間の音声を文字起こしするのに必要な分数（CPU経路、WebAssembly、q8の実測）。",
          source: "content/guides/data/bench-2026-11-17.json",
          max: 240,
          items: [
            { label: "Tiny", value: 7.1, unit: "min" },
            { label: "Base", value: 14.1, unit: "min" },
            { label: "Small", value: 49.1, unit: "min" },
            { label: "Turbo", value: 230.1, unit: "min", note: "CPUのみ" },
          ],
        },
      },
      {
        title: "ブラウザ・サーバー・ローカルPythonの違い",
        paragraphs: [
          "ブラウザのタブ：ファイルは端末から出ません。代わりに推論は自分のCPUかGPUで動きます。音声は先に16 kHzモノラルへリサンプリングされるので、元が48 kHzでも情報は増えません。",
          "サーバーのAPI：ファイルをアップロードし、音声の長さで課金されます。手間はかかりませんが、録音は端末の外に出て、長いファイルは順番待ちになります。",
          "ローカルにPythonを入れてwhisperを動かす：モデルもVRAMも自分で管理でき、パラメータもバッチ処理も自由ですが、CUDAとPyTorchの環境を自分で用意する必要があり、別のマシンではやり直しになります。このページは3つ目の推論を、1つ目のプライバシーで使えるようにしたものです。",
        ],
      },
      {
        title: "Whisperが間違えるところ、無音のときの挙動",
        paragraphs: [
          "30秒のデジタル無音は、試した6通りのモデルとバックエンドの組み合わせすべてで[BLANK_AUDIO]になりました。",
          "声より小さく、しかし無音ではない音のほうが厄介です。同じ30秒で[BREAKING]、[Music]、(water flowing)、(birds chirping)が返りました。デコーダは何も返さずに済ませず、「聞こえた」ものに注釈を付けます。",
          "最初のデコードトークンは言語の推定なので、冒頭が音楽のファイルは別の言語として処理されることがあります。言語を自分で指定すれば、この推定を飛ばせます。",
          "同じ34.36秒のサンプルで、4つのモデルは111語のうち26語が一致しませんでした。意味が変わるのは人名、否定、数字です。",
        ],
        table: {
          caption: "合成した6つのクリップに対するWhisperの出力。モデル×バックエンドごとに1回、計36回の実行です。",
          source: "content/guides/data/silence-hallucinations.json",
          columns: ["入力", "返ってきた内容", "一致"],
          rows: [
            ["30秒のデジタル無音", "[BLANK_AUDIO]", "6回とも同じ"],
            ["30秒のノイズ、−40 dB", "[BREAKING]、[Music]、(water flowing)", "6回中5通り"],
            ["30秒のノイズ、−20 dB", "(birds chirping)、(clippers buzzing)", "6回中5通り"],
            ["1回のクリック音", "[BLANK_AUDIO] ×4、[BEEP] ×2", "分かれた"],
            ["音声のあとに無音", "音声のみ", "6回とも同じ"],
          ],
        },
      },
      {
        title: "ファイルをアップロードする必要はあるか",
        paragraphs: [
          "ありません。ファイルはタブ内で16 kHzモノラルにデコードされ、大きな通信はモデル本体だけです。BaseでCPU 77 MB、GPU 291 MBになります。",
          "プライバシーについて言えるのはここまでです。アカウントもアップロード待ちも、音声を保持するサーバーもありません。音声言語は99、UIは27言語に対応し、1ファイル1 GiBまでです。",
          "同じダウンロードは従量制の回線にも乗ります。Turboの3.24 GBは、その点を踏まえて選んでください。",
        ],
      },
    ],
    checklistTitle: "文字起こしを残す前に",
    checklist: [
      { title: "固有名詞をすべて検索する", body: "人名、会社名、製品名から先に崩れます。検索してから、その行を聞き直します。" },
      { title: "括弧付きの部分を聞き直す", body: "[BLANK_AUDIO]、(birds chirping)、[Music]はデコーダが無音を埋めたもので、内容ではありません。" },
      { title: "冒頭30秒を確認する", body: "言語は最初のウィンドウで推定されます。音楽のイントロがあると、違う言語に決まることがあります。" },
      { title: "静かな区間を読む", body: "発話が重なると語を落とすだけで印を付けません。文字の切れ目が音声の切れ目とは限りません。" },
    ],
    limitsTitle: "タブでWhisperを動かすのが向かない場面",
    limits: [
      "Turboで1時間はここでは4時間近くかかります。ホストされたエンドポイントのほうが速く終わります。",
      "Turboの3.2 GBのGPU版は、この回線では30分以内にダウンロードが終わりませんでした。",
      "話者ラベル、翻訳、リアルタイム字幕、議事録の要約はありません。",
      "メモリ4 GBの端末では、Small以上は厳しくなります。",
    ],
    imageSrc: image,
    imageAlt: "EarScribeのWhisper文字起こし画面。タイムスタンプ、検索、書き出しの操作",
    workflowImageSrc: "/screenshots/ui-models.webp",
  },
};
