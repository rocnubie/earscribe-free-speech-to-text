import type { ToolLocale } from "@/lib/site-routes";
import type { ToolGuide } from "@/lib/tool-page-seo";
import type { ToolPageDefinition } from "@/lib/tool-pages";

export const TRANSCRIBE_AUDIO_LOCALLY_PAGE: ToolPageDefinition = {
  slug: "transcribe-audio-locally",
  resultTab: "transcript",
  copy: {
    en: {
      title: "Transcribe audio locally for free, without uploading it",
      metaTitle: "Transcribe audio locally: the network panel | EarScribe",
      description:
        "Transcribe audio locally, then check it yourself: the tab loads page assets, model weights and two third-party scripts, and none of them carries the recording.",
      eyebrow: "Local audio transcription",
      intro:
        "EarScribe decodes and transcribes your recording inside the browser tab. The file is never sent to a server; the only large download is the speech model, which your browser caches. This page explains what stays on your device, what the page does send, and how to verify it yourself.",
      benefits: [
        "The recording never leaves your device",
        "Nothing to install and no account",
        "Checkable in your browser's developer tools",
      ],
      workflowTitle: "Drop the file, watch the panel, then read the words",
      workflow: [
        { title: "The browser reads the file", body: "Your recording is opened from disk and decoded by the browser's own audio engine. It is not uploaded." },
        { title: "The model runs in a worker", body: "Whisper runs in a background Web Worker through Transformers.js and ONNX Runtime Web, on WebGPU or the CPU." },
        { title: "The result stays in the tab", body: "The transcript appears on the page, and a draft is kept in this browser's storage until you clear it." },
      ],
      tipsTitle: "Local doesn't mean careless",
      tips: [
        "Browser extensions can read what a page shows. Use a clean browser profile for sensitive recordings.",
        "Exported files and saved drafts live on this device. On a shared computer, delete them and clear the site's data.",
        "Follow your organization's rules for confidential material, even when nothing is uploaded.",
      ],
      faq: [
        { q: "Is my audio uploaded anywhere?", a: "No. The file is read and processed in the browser tab, and EarScribe's servers never receive the recording or the transcript." },
        { q: "What does the page download or send?", a: "The page's own code, the Whisper model directly from Hugging Face the first time you use it, aggregate Plausible analytics events without file names or transcript text, and Google's advertising scripts. Hugging Face receives the model request and ordinary connection data such as your IP address, but not your audio or transcript." },
        { q: "Does it work offline?", a: "Not as an installed offline app. You need a connection to load the page and to download the model the first time, but the transcription itself never depends on a server." },
        { q: "How can I check this myself?", a: "Open your browser's developer tools, go to the Network tab and transcribe a file. You'll see the model files on the first run, and no request that carries your recording." },
      ],
      screenshotAlt: "Recording transcribed in the browser without being uploaded",
    },
    "zh-CN": {
      title: "本地音频转文字：音频不上传，也能自己验证",
      metaTitle: "本地音频转文字：网络面板里能看到什么 | EarScribe",
      description: "在自己的设备上把录音转成文字，并在网络面板里核对：页面会加载静态资源、模型权重和两个第三方脚本，没有任何一个携带你的录音。",
      eyebrow: "本地音频转文字",
      intro: "EarScribe 在浏览器标签页里解码并转写你的录音，文件不会发送到任何服务器，唯一较大的下载是模型权重，浏览器会把它缓存起来。它不是离线应用：打开页面和第一次下载权重都要联网。这里列出页面实际发出的请求，以及你怎样自己核对。",
      benefits: ["录音从不离开你的设备", "无需安装，无需账号", "可以在浏览器开发者工具里自行验证"],
      workflowTitle: "选文件，看网络面板，再读文字",
      workflow: [
        { title: "浏览器读取文件", body: "录音从本地磁盘打开，由浏览器自带的音频引擎解码，不会上传。" },
        { title: "模型在 Worker 里运行", body: "Whisper 通过 Transformers.js 和 ONNX Runtime Web 在后台 Web Worker 中运行，使用 WebGPU 或 CPU。" },
        { title: "结果留在标签页里", body: "文字稿显示在页面上，草稿保存在当前浏览器的存储里，直到你清除为止。" },
      ],
      tipsTitle: "本地处理也要注意这些",
      tips: [
        "浏览器扩展可以读取页面上显示的内容，处理敏感录音时请使用干净的浏览器配置。",
        "导出的文件和保存的草稿都在这台设备上。在公用电脑上用完请删除，并清除网站数据。",
        "即使没有上传，也请遵守所在单位对保密材料的规定。",
      ],
      faq: [
        { q: "我的音频会被上传吗？", a: "不会。文件在浏览器标签页里读取和处理，EarScribe 的服务器既收不到录音，也收不到文字稿。" },
        { q: "页面会下载或发送什么？", a: "页面本身的代码、首次使用时直接从 Hugging Face 下载的 Whisper 模型、不含文件名和文字内容的 Plausible 汇总统计事件，以及 Google 的广告脚本。Hugging Face 会收到模型请求和 IP 地址等常规连接信息，但不会收到你的音频或文字稿。" },
        { q: "可以离线使用吗？", a: "它不是离线应用。可以把它装成浏览器里的快捷方式，但那只是入口，不是离线副本。打开页面和第一次下载权重都要联网，不过转写本身从不依赖服务器。" },
        { q: "怎样自己验证？", a: "打开浏览器开发者工具，切到“网络”（Network）面板，然后转写一个文件。第一次会看到模型文件的下载，但不会有携带你录音的请求。" },
      ],
      screenshotAlt: "录音在浏览器中转写、没有上传",
    },
    ja: {
      title: "音声 ローカル 文字起こし：アップロードせず、自分で確かめられる",
      metaTitle: "音声 ローカル 文字起こし：通信内容の確かめ方 | EarScribe",
      description: "録音は端末の外に出ません。ネットワークパネルでの確認手順、ページが実際に行う通信、オフラインでどこまで動くかを、実測したリクエスト一覧とともに説明します。",
      eyebrow: "ローカル 文字起こし",
      intro: "EarScribeは、ブラウザのタブの中で録音をデコードして文字起こしします。ファイルがサーバーに送られることはなく、大きなダウンロードはモデルの重みだけで、ブラウザがキャッシュします。オフラインアプリではありません。このページでは、ページが実際に送っているものと、それを自分で確かめる方法を説明します。",
      benefits: ["録音は端末から出ない", "インストールもアカウントも不要", "ブラウザの開発者ツールで確認できる"],
      workflowTitle: "ファイルを選び、パネルを見て、文字を読む",
      workflow: [
        { title: "ブラウザがファイルを読む", body: "録音はディスクから開かれ、ブラウザ自身のオーディオ機能でデコードされます。アップロードはされません。" },
        { title: "モデルはWorkerで動く", body: "WhisperはTransformers.jsとONNX Runtime Webを通じ、バックグラウンドのWeb WorkerでWebGPUまたはCPUを使って動きます。" },
        { title: "結果はタブの中に残る", body: "文字起こしはページに表示され、下書きは消去するまでこのブラウザのストレージに保存されます。" },
      ],
      tipsTitle: "ローカルでも気をつけたいこと",
      tips: [
        "ブラウザの拡張機能はページに表示された内容を読めます。機密性の高い録音には、拡張機能のないブラウザプロファイルを使いましょう。",
        "書き出したファイルと保存された下書きはこの端末に残ります。共用PCでは削除し、サイトデータも消去してください。",
        "アップロードしない場合でも、機密情報の扱いは所属組織のルールに従ってください。",
      ],
      faq: [
        { q: "音声はどこかにアップロードされますか？", a: "されません。ファイルはブラウザのタブ内で読み込まれて処理され、EarScribeのサーバーには録音も文字起こしも届きません。" },
        { q: "ページは何をダウンロード・送信しますか？", a: "ページ自体のコード、初回利用時にHugging Faceから直接ダウンロードするWhisperモデル、ファイル名や本文を含まないPlausibleの集計イベント、Googleの広告スクリプトです。Hugging FaceにはモデルのリクエストとIPアドレスなど通常の接続情報が届きますが、音声や文字起こしは送信されません。" },
        { q: "オフラインで使えますか？", a: "オフラインアプリではありません。ブラウザのショートカットとしてインストールできますが、それは入り口であってオフラインの複製ではありません。ページの読み込みと初回の重みのダウンロードには接続が必要で、文字起こし自体はサーバーに依存しません。" },
        { q: "自分で確かめるには？", a: "ブラウザの開発者ツールを開いてネットワーク（Network）タブを表示し、ファイルを文字起こししてください。初回はモデルファイルの取得が見えますが、録音を運ぶリクエストは出てきません。" },
      ],
      screenshotAlt: "録音をアップロードせずにブラウザ内で文字起こしした画面",
    },
  },
};

export const TRANSCRIBE_AUDIO_LOCALLY_GUIDES: Record<ToolLocale, ToolGuide> = {
  en: {
    primaryKeyword: "transcribe audio locally",
    supportingKeywords: [
      "local transcription",
      "transcribe audio without uploading",
      "private audio transcription",
    ],
    // The page's honesty test: list every request the tab makes, including the
    // ones that are not ours, and show that none of them carries the recording.
    guideTitle: "Transcribe audio locally: what the Network panel actually shows",
    guideIntro:
      "A cold load of this page made 58 requests to 9 hosts: thirty-one to earscribe.app, twenty-four to Google's ad and consent infrastructure, and three to analytics. The model weights from huggingface.co appear only once you pick a file. None of the fifty-eight carries a recording — but the list is longer than most privacy pages admit, so it is printed in full below.",
    sections: [
      {
        title: "Every request the tab makes",
        paragraphs: [
          "A privacy claim is only worth the list behind it, so here is the whole list. Thirty-one of the 58 requests are ours; 24 belong to Google's ad and consent stack across five hosts; two go to analytics.",
          "The weights are the large download: 41 MB for tiny, 77 MB for base, 249 MB for small, 1,085 MB for turbo on the processor and 3,200 MB on WebGPU — fetched once, then cached.",
        ],
        table: {
          caption:
            "Every host contacted during a cold load, measured in headless Chrome with an empty profile (scripts/bench/page-requests.mjs). No file was chosen, so the model fetch is the one row that stays at zero.",
          source: "content/guides/data/page-requests.json",
          columns: ["Host", "Requests", "Carries the audio?"],
          rows: [
            ["earscribe.app", "31", "no"],
            ["fundingchoicesmessages.google.com", "15", "no"],
            ["pagead2.googlesyndication.com", "3", "no"],
            ["googleads.g.doubleclick.net", "2", "no"],
            ["ep1.adtrafficquality.google", "2", "no"],
            ["ep2.adtrafficquality.google", "2", "no"],
            ["click.pageview.click", "1", "no"],
            ["static.cloudflareinsights.com", "1", "no"],
            ["www.google.com", "1", "no"],
            ["huggingface.co", "0 until a file is picked", "no"],
            ["Your recording", "—", "never sent"],
          ],
        },
      },
      {
        title: "The 90-second check",
        paragraphs: [
          "The whole list arrives in about 6 seconds of loading. Open the Network panel with the console, tick “Preserve log”, then filter to Media and XHR. Drop a file and watch: the decode and the transcription produce no request with your file in it, only the weight fetch on a first run.",
          "If you want zero third-party requests, block the two script hosts or self-host the build — the transcription path does not depend on either of them.",
        ],
      },
      {
        title: "What local does not mean",
        paragraphs: [
          "Local describes where the audio is decoded, not everything about the page. Measured cold, twenty-four of those fifty-eight requests were Google ad and consent infrastructure — the page is the least private part of this site, and the transcription is the most.",
          "That is worth saying plainly rather than burying: if the ad stack is unacceptable for your recording, block those hosts or self-host the build, and the transcription keeps working because it never depended on them.",
          "It also does not mean offline forever: the first run needs the weights, and a hard refresh with the cache cleared downloads them again.",
        ],
      },
    ],
    checklistTitle: "Before you trust the claim",
    checklist: [
      {
        title: "Filter the panel, do not scroll it",
        body: "A Media or XHR filter turns a noisy list into the four rows above; scrolling a full log is how people talk themselves out of believing it.",
      },
      {
        title: "Check the request body, not the size",
        body: "The weight download is large by design. What matters is that no request in the list has your file as a payload.",
      },
      {
        title: "Decide about the third parties",
        body: "Eight of the nine hosts are not ours, and most of them are ad related. If that matters, block them; the transcription keeps working without any of them.",
      },
    ],
    limitsTitle: "Where local processing stops helping",
    limits: [
      "A device that cannot hold the model weights cannot run this at all: base needs about 2 GB of free memory, turbo 6 GB.",
      "Local decoding says nothing about the transcript itself — it is only as private as what you do with the text afterwards.",
    ],
    imageSrc: "/screenshots/guides/pre-run.webp",
    imageAlt: "Local transcription: the pre-run estimate for a file that stays in the tab",
    workflowImageSrc: "/screenshots/guides/transcript-result-top.webp",
  },
  "zh-CN": {
    primaryKeyword: "本地音频转文字",
    supportingKeywords: ["本地语音转文字模型", "音频转文字 不上传", "隐私 语音转文字", "浏览器 本地转写"],
    guideTitle: "本地音频转文字：网络面板里到底能看到什么",
    guideIntro:
      "冷加载一次这个页面，共发出 58 个请求，联系 9 个域名：31 个发给 earscribe.app，24 个属于 Google 的广告与同意流程，3 个是统计。来自 huggingface.co 的模型权重只在你选择文件之后才出现。58 个请求里没有一个携带录音 —— 但这份清单比多数隐私说明愿意承认的要长，所以下面原样列出。",
    sections: [
      {
        title: "本地音频转文字：这个标签页发出的每一个请求",
        paragraphs: [
          "隐私声明值不值钱，要看它背后那份清单。这是完整的一份：58 个请求里 31 个是我们自己的；24 个属于 Google 的广告与同意流程，分布在 5 个域名；2 个发往统计。整份清单在空缓存下大约 6 秒出齐。",
          "权重是唯一的大文件：tiny 41 MB（WebGPU 151 MB）、base 77 MB（291 MB）、small 249 MB（968 MB）、turbo 在 WebAssembly 上 1,085 MB、在 WebGPU 上 3,236 MB。只下载一次，之后由浏览器的 CacheStorage 提供；第二次打开页面，这部分下载是 0 MB。",
          "整份清单里，唯一能看到你身份的是 huggingface.co 那一行：模型权重从 Hugging Face 的 CDN 取，CDN 会收到你的 IP 地址和常规连接信息。它看不到你的录音和文字稿，但“本地处理”不等于“没有任何服务器知道你打开过这个页面”。",
          "比权重更大的是解码后的音频：40 分钟的录音重采样成 16 kHz 单声道是 154 MB，也就是每分钟 3.84 MB，是 base 那 77 MB 权重的两倍。这段 40 分钟用 base 处理，WebAssembly 上约 9.4 分钟，WebGPU 上约 3.8 分钟；99 种语音语言不用你先选，界面本身有 27 种语言。",
        ],
        table: {
          caption:
            "空配置的无头 Chrome 冷加载一次页面时联系过的全部主机（脚本 scripts/bench/page-requests.mjs）。没有选择文件，所以模型那一行是唯一保持为零的。",
          source: "content/guides/data/page-requests.json",
          columns: ["主机", "请求数", "是否携带录音"],
          rows: [
            ["earscribe.app", "31", "否"],
            ["fundingchoicesmessages.google.com", "15", "否"],
            ["pagead2.googlesyndication.com", "3", "否"],
            ["googleads.g.doubleclick.net", "2", "否"],
            ["ep1.adtrafficquality.google", "2", "否"],
            ["ep2.adtrafficquality.google", "2", "否"],
            ["click.pageview.click", "1", "否"],
            ["static.cloudflareinsights.com", "1", "否"],
            ["www.google.com", "1", "否"],
            ["huggingface.co", "选文件前为 0", "否 —— 但这些请求带着你的 IP 地址"],
            ["你的录音", "—", "从未发送"],
          ],
        },
      },
      {
        title: "90 秒自查",
        paragraphs: [
          "整份清单大约 6 秒加载完。在开发者工具里打开“网络”面板，勾上“保留日志”，把筛选切到 Media 和 XHR。选一个文件，然后看：解码和转写不会产生任何携带你文件的请求，第一次运行时只有那一次权重下载——base 是那 77 MB。",
          "换成 40 分钟的文件再跑一次：WebAssembly 上约 9.4 分钟出结果，WebGPU 上约 3.8 分钟。这 3.8 到 9.4 分钟里，面板上新增的只有 77 MB 权重（首次）和解码后的 154 MB 本地样本，没有任何一条请求带上你的音频。",
          "如果你希望第三方请求为零，屏蔽那两个脚本域名，或者自己托管一份构建 —— 转写这条路不依赖它们中的任何一个。",
        ],
      },
      {
        title: "“本地”不意味着什么",
        paragraphs: [
          "本地描述的是音频在哪里解码，不是页面的全部。冷加载时，58 个请求里有 24 个属于 Google 的广告与同意流程 —— 在这个站里，页面本身是最不私密的部分，转写是最私密的部分。公开页会加载 AdSense 和 Plausible，登录后的 /dashboard 两样都不加载。",
          "这一点与其藏起来，不如直说：如果广告堆栈对你的录音来说不可接受，屏蔽那些域名或自托管，转写照样能用，因为它从不依赖它们。",
          "它也不意味着永远离线：第一次运行需要权重，清掉缓存再硬刷新，那 77 MB（base）会重新下载一遍。",
          "文件上限是 1 GiB，但先撞上的通常不是它。1 GiB 按每分钟 3.84 MB 的样本折算大约是 266 分钟（1,024 ÷ 3.84，这是算出来的，不是测出来的）；真正卡住的是内存：base 约需 2 GB，turbo 约 6 GB。一段 40 分钟、154 MB 的样本，外发部分是 0 字节。",
        ],
      },
    ],
    checklistTitle: "相信这句话之前",
    checklist: [
      {
        title: "筛选面板，不要靠滚动",
        body: "用 Media 或 XHR 筛选，一堆噪声就缩成上面那几行；对着完整日志往下翻，人是会把自己说服到不信的。",
      },
      {
        title: "看请求内容，不看体积",
        body: "权重下载本来就大。要确认的是：清单里没有任何一个请求把你的文件当作请求体。",
      },
      {
        title: "第三方由你决定",
        body: "九个域名里八个不是我们的，而且大多与广告有关。介意就屏蔽；屏蔽之后转写仍然可用。",
      },
    ],
    limitsTitle: "本地处理帮不上忙的地方",
    limits: [
      "装不下模型权重的设备根本跑不起来：base 大约需要 2 GB 可用内存，turbo 需要 6 GB。",
      "本地解码说明不了文字稿本身的私密程度 —— 它有多私密，取决于你之后怎么处理这段文字。",
    ],
    imageSrc: "/screenshots/guides/pre-run.webp",
    imageAlt: "本地转写：一个留在标签页里、处理前的时长与大小预估",
    workflowImageSrc: "/screenshots/guides/transcript-result-top.webp",
  },
  ja: {
    primaryKeyword: "音声 ローカル 文字起こし",
    supportingKeywords: ["文字起こし ローカル 無料", "文字起こし 情報漏洩 対策", "文字起こし アップロード不要", "ブラウザ ローカル 文字起こし"],
    guideTitle: "音声 ローカル 文字起こし：ネットワークパネルに何が映るか",
    guideIntro:
      "このページをコールドロードすると、58件のリクエストが9つのホストに送られます。31件がearscribe.app、24件がGoogleの広告と同意の仕組み、3件がアクセス解析です。huggingface.coからのモデルの重みは、ファイルを選んだあとにはじめて現れます。58件のどれも録音を運びません。ただし、この一覧は多くのプライバシー説明が認めるより長いので、以下にそのまま載せます。",
    sections: [
      {
        title: "音声 ローカル 文字起こし：このタブが行う通信のすべて",
        paragraphs: [
          "プライバシーの主張は、その裏にある一覧で決まります。これがその全体です。58 件のうち 31 件が EarScribe 自身、24 件が Google の広告と同意の仕組み（5 ホスト）、2 件がアクセス解析です。一覧はおよそ 6 秒で出そろいます。",
          "大きいのはモデルの重みだけです。tiny は 41 MB（WebGPU では 151 MB）、base は 77 MB（291 MB）、small は 249 MB（968 MB）、turbo は WebAssembly で 1,085 MB、WebGPU で 3,236 MB。初回に一度だけ取得し、その後はブラウザの CacheStorage から読むので、2 回目以降のダウンロードは 0 MB です。",
          "この一覧で、あなたを特定できる情報に触れるのは huggingface.co の行だけです。モデルの重みは Hugging Face の CDN から取得するので、CDN にはあなたの IP アドレスと通常の接続情報が伝わります。録音や文字起こしは渡りませんが、「ローカル処理」は「どのサーバーにも気配を残さない」という意味ではありません。",
          "重みより大きいのはデコード後の音声です。40 分の録音は 16 kHz モノラルで 154 MB、1 分あたり 3.84 MB（16,000 サンプル × 4 バイト × 60 秒）で、base の重み 77 MB の 2 倍あります。10 分なら 38 MB、90 分なら 346 MB、2 時間なら 461 MB。この 40 分を base で処理すると、WebAssembly で約 9.4 分、WebGPU で約 3.8 分。音声言語は 99 言語、インターフェースは 27 言語です。",
        ],
        table: {
          caption:
            "空のプロファイルのヘッドレスChromeで、ページをコールドロードしたときに接続したすべてのホスト（scripts/bench/page-requests.mjs）。ファイルを選んでいないため、モデルの行だけが0のままです。",
          source: "content/guides/data/page-requests.json",
          columns: ["ホスト", "リクエスト数", "録音を運ぶか"],
          rows: [
            ["earscribe.app", "31", "いいえ"],
            ["fundingchoicesmessages.google.com", "15", "いいえ"],
            ["pagead2.googlesyndication.com", "3", "いいえ"],
            ["googleads.g.doubleclick.net", "2", "いいえ"],
            ["ep1.adtrafficquality.google", "2", "いいえ"],
            ["ep2.adtrafficquality.google", "2", "いいえ"],
            ["click.pageview.click", "1", "いいえ"],
            ["static.cloudflareinsights.com", "1", "いいえ"],
            ["www.google.com", "1", "いいえ"],
            ["huggingface.co", "ファイル選択前は0", "いいえ — ただしこの通信でIPアドレスは伝わります"],
            ["あなたの録音", "—", "送信されません"],
          ],
        },
      },
      {
        title: "90秒で自分で確かめる",
        paragraphs: [
          "一覧はおよそ 6 秒で出そろいます。開発者ツールのネットワークパネルを開き「ログを保持」にチェックを入れ、フィルタを Media と XHR に絞ります。ファイルを選んで観察してください。デコードと文字起こしは、あなたのファイルを運ぶリクエストを 1 件も作りません。初回だけ重みの取得が見えます。base なら 77 MB です。",
          "40 分のファイルなら、WebAssembly で約 9.4 分、WebGPU で約 3.8 分で終わります。そのあいだにパネルへ増えるのは、初回の 77 MB の重みと、ローカルで展開された 154 MB のサンプルだけで、音声を載せたリクエストは 0 件です。",
          "第三者の通信をゼロにしたい場合は、その 2 つのスクリプトのホストをブロックするか、ビルドを自分でホスティングしてください。文字起こしはどちらにも依存していません。",
        ],
      },
      {
        title: "「ローカル」が意味しないこと",
        paragraphs: [
          "ローカルが指すのは音声をどこでデコードするかであり、ページ全体のことではありません。コールドロード 58 件のうち 24 件が Google の広告と同意の仕組みでした。このサイトで最もプライベートでないのはページ自体で、最もプライベートなのは文字起こしの処理です。公開ページは AdSense と Plausible を読み込み、ログイン後の /dashboard はどちらも読み込みません。",
          "だから伏せずに書きます。広告の仕組みが許容できない録音なら、それらのホストをブロックするか自前でホスティングしてください。文字起こしは依存していないので、そのまま動きます。",
          "オフラインで永久に動くという意味でもありません。初回は重みが必要で、キャッシュを消してハードリロードすれば base の 77 MB を再びダウンロードします。ブラウザのショートカットとしてインストールできますが、それは入り口であってオフラインの複製ではありません。",
          "ファイル上限は 1 GiB（1,024 MB）ですが、先に尽きるのはメモリのほうです。1,024 MB を 1 分 3.84 MB で割ると約 266 分（計算値で、実測ではありません）。それより先に、base で約 2 GB、turbo で 6 GB のメモリが必要になります。40 分・154 MB のサンプルで、外へ出るバイト数は 0 です。",
        ],
      },
    ],
    checklistTitle: "この主張を信じる前に",
    checklist: [
      {
        title: "パネルはスクロールせず絞り込む",
        body: "MediaやXHRで絞れば、雑然とした一覧が上の数行になります。全ログを眺めていると、かえって信じない理由を探してしまいます。",
      },
      {
        title: "サイズではなく中身を見る",
        body: "重みのダウンロードが大きいのは仕様です。確かめるべきは、あなたのファイルをペイロードに持つリクエストが1件もないことです。",
      },
      {
        title: "第三者をどう扱うか決める",
        body: "9つのホストのうち8つはEarScribeのものではなく、多くは広告関連です。気になるならブロックしてください。文字起こしはそれでも動きます。",
      },
    ],
    limitsTitle: "ローカル処理が助けにならない場面",
    limits: [
      "重みを保持できない端末では動きません。base で約 2 GB、turbo で 6 GB の空きメモリが必要です。",
      "ローカルでデコードしても、文字起こしそのものの扱いは変わりません。プライベートさは、そのあとテキストをどう扱うかで決まります。",
    ],
    imageSrc: "/screenshots/guides/pre-run.webp",
    imageAlt: "ローカル文字起こし：タブ内に残るファイルの処理前の見積もり",
    workflowImageSrc: "/screenshots/guides/transcript-result-top.webp",
  },
};
