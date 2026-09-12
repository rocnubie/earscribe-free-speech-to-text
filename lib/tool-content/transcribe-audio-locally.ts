import type { ToolLocale } from "@/lib/site-routes";
import type { ToolGuide } from "@/lib/tool-page-seo";
import type { ToolPageDefinition } from "@/lib/tool-pages";

const image = "/screenshots/02-transcript-showcase.webp";

export const TRANSCRIBE_AUDIO_LOCALLY_PAGE: ToolPageDefinition = {
  slug: "transcribe-audio-locally",
  resultTab: "transcript",
  copy: {
    en: {
      title: "Transcribe audio locally, without uploading it",
      description:
        "Transcribe recordings on your own device: the audio is processed in your browser and never uploaded. See what stays local and how to check it yourself.",
      eyebrow: "Local audio transcription",
      intro:
        "EarScribe decodes and transcribes your recording inside the browser tab. The file is never sent to a server; the only large download is the speech model, which your browser caches. This page explains what stays on your device, what the page does send, and how to verify it yourself.",
      benefits: [
        "The recording never leaves your device",
        "Nothing to install and no account",
        "Checkable in your browser's developer tools",
      ],
      workflowTitle: "What happens when you transcribe locally",
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
        { q: "What does the page download or send?", a: "The page's own code, the Whisper model the first time you use it (through EarScribe's model proxy), aggregate Plausible analytics events without file names or transcript text, and Google's advertising scripts. None of these requests contain your audio." },
        { q: "Does it work offline?", a: "Not as an installed offline app. You need a connection to load the page and to download the model the first time, but the transcription itself never depends on a server." },
        { q: "How can I check this myself?", a: "Open your browser's developer tools, go to the Network tab and transcribe a file. You'll see the model files on the first run, and no request that carries your recording." },
      ],
      screenshotAlt: "Recording transcribed in the browser without being uploaded",
    },
    "zh-CN": {
      title: "本地语音转文字：音频不上传",
      description: "在自己的设备上把录音转成文字：音频在浏览器里处理，从不上传。说明哪些数据留在本机，以及怎样自己验证。",
      eyebrow: "本地语音转文字",
      intro: "EarScribe 在浏览器标签页里解码并转写你的录音，文件不会发送到任何服务器，唯一较大的下载是语音模型，浏览器会把它缓存起来。这里说明哪些内容留在你的设备上、页面会发送什么，以及怎样自己动手验证。",
      benefits: ["录音从不离开你的设备", "无需安装，无需账号", "可以在浏览器开发者工具里自行验证"],
      workflowTitle: "本地转写时发生了什么",
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
        { q: "页面会下载或发送什么？", a: "页面本身的代码、首次使用时的 Whisper 模型（通过 EarScribe 的模型代理下载）、不含文件名和文字内容的 Plausible 汇总统计事件，以及 Google 的广告脚本。这些请求都不包含你的音频。" },
        { q: "可以离线使用吗？", a: "它不是安装式的离线软件。打开页面和第一次下载模型都需要联网，但转写本身从不依赖服务器。" },
        { q: "怎样自己验证？", a: "打开浏览器开发者工具，切到“网络”（Network）面板，然后转写一个文件。第一次会看到模型文件的下载，但不会有携带你录音的请求。" },
      ],
      screenshotAlt: "录音在浏览器中转写、没有上传",
    },
    ja: {
      title: "ローカルで文字起こし：音声をアップロードしない",
      description: "録音を自分の端末で文字起こし。音声はブラウザ内で処理され、アップロードされません。端末に残るものと、自分で確かめる方法を説明します。",
      eyebrow: "ローカル 文字起こし",
      intro: "EarScribeは、ブラウザのタブの中で録音をデコードして文字起こしします。ファイルがサーバーに送られることはなく、大きなダウンロードは音声モデルだけで、ブラウザがキャッシュします。このページでは、端末に残るもの、ページが送信するもの、そして自分で確かめる方法を説明します。",
      benefits: ["録音は端末から出ない", "インストールもアカウントも不要", "ブラウザの開発者ツールで確認できる"],
      workflowTitle: "ローカルで文字起こしするときに起きること",
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
        { q: "ページは何をダウンロード・送信しますか？", a: "ページ自体のコード、初回利用時のWhisperモデル（EarScribeのモデルプロキシ経由）、ファイル名や本文を含まないPlausibleの集計イベント、Googleの広告スクリプトです。どのリクエストにも音声は含まれません。" },
        { q: "オフラインで使えますか？", a: "インストール型のオフラインアプリではありません。ページの読み込みと初回のモデルのダウンロードには接続が必要ですが、文字起こし自体はサーバーに依存しません。" },
        { q: "自分で確かめるには？", a: "ブラウザの開発者ツールを開いてネットワーク（Network）タブを表示し、ファイルを文字起こししてください。初回はモデルファイルの取得が見えますが、録音を運ぶリクエストは出てきません。" },
      ],
      screenshotAlt: "録音をアップロードせずにブラウザ内で文字起こしした画面",
    },
  },
};

export const TRANSCRIBE_AUDIO_LOCALLY_GUIDES: Record<ToolLocale, ToolGuide> = {
  en: {
    primaryKeyword: "transcribe audio locally",
    supportingKeywords: ["local transcription", "transcribe audio without uploading", "private audio transcription", "on-device speech to text"],
    guideTitle: "How local transcription works, and how to verify it",
    guideIntro:
      "Most online transcription services upload your file to their servers. EarScribe takes the opposite approach: the model comes to your browser, and the recording stays where it is.",
    sections: [
      {
        title: "What stays on your device and what doesn't",
        paragraphs: [
          "Stays on the device: the audio file, the decoded audio, the transcript, your edits and exported files. Goes over the network: the page itself, the Whisper model files on first use, aggregate analytics events such as a finished transcription (without file names or text), and Google's advertising scripts, as described in the privacy policy.",
          "The model download, roughly 80 MB to 800 MB depending on the model, is cached by the browser, so later sessions on the same device skip it.",
        ],
      },
      {
        title: "Verify it with the Network panel",
        paragraphs: [
          "In Chrome or Edge, press F12 (Option+Command+I on a Mac) and open the Network tab; Safari needs its Develop menu turned on first. Clear the list, choose a file and transcribe it. On a first run you'll see requests for model files, but none whose size matches your recording.",
          "Sorting the list by size makes this obvious. For a stricter test, transcribe once so the model is cached, reload the page, and watch the network while a second file is processed.",
        ],
      },
      {
        title: "When local processing is the right choice",
        paragraphs: [
          "Local transcription suits recordings you can't or don't want to hand to a third party: confidential interviews, internal meetings, research sessions whose consent forms rule out outside services, or personal notes.",
          "It doesn't make a device secure on its own. Malware, browser extensions and shared accounts can still see what you open, so give the transcript the same care as the recording.",
        ],
      },
    ],
    checklistTitle: "Checklist for sensitive recordings",
    checklist: [
      { title: "Profile", body: "Use a browser profile without unnecessary extensions." },
      { title: "Verify", body: "Watch the Network panel once if you need proof." },
      { title: "Clean up", body: "Clear site data to remove saved drafts on shared devices." },
      { title: "Exports", body: "Store exported transcripts where your policies allow." },
    ],
    limitsTitle: "Honest limits",
    limits: [
      "EarScribe is a web page, not an installed offline app; it needs a connection to load and to download the model.",
      "The page also loads analytics and advertising scripts, described in the privacy policy; EarScribe never sends them your audio or transcript.",
    ],
    imageSrc: image,
    imageAlt: "Transcription running locally in the browser, with the audio never uploaded",
  },
  "zh-CN": {
    primaryKeyword: "本地语音转文字",
    supportingKeywords: ["本地语音转文字模型", "音频转文字 不上传", "隐私 语音转文字", "浏览器 本地转写"],
    guideTitle: "本地转写是怎么工作的，又该怎样验证",
    guideIntro: "大多数在线转写服务会把你的文件上传到它们的服务器。EarScribe 反过来做：把模型带到你的浏览器里，录音留在原地。",
    sections: [
      {
        title: "哪些留在本机，哪些不是",
        paragraphs: [
          "留在设备上的：音频文件、解码后的音频、文字稿、你的修改和导出的文件。会经过网络的：页面本身、首次使用时的 Whisper 模型文件、“转写完成”之类的汇总统计事件（不含文件名和文字），以及隐私政策中说明的 Google 广告脚本。",
          "模型下载约 80 MB 到 800 MB（取决于模型），会被浏览器缓存，同一台设备之后使用时就不用再下载。",
        ],
      },
      {
        title: "用“网络”面板验证",
        paragraphs: [
          "在 Chrome 或 Edge 里按 F12（Mac 上按 Option+Command+I）打开“网络”（Network）面板；Safari 需要先打开“开发”菜单。清空列表，选择文件并转写。第一次会看到模型文件的请求，但不会有大小和你录音相当的请求。",
          "按大小排序会更直观。想更严格地验证，可以先转写一次让模型缓存，再刷新页面，观察处理第二个文件时的网络请求。",
        ],
      },
      {
        title: "什么时候适合本地处理",
        paragraphs: [
          "本地转写适合不能或不想交给第三方的录音：保密采访、内部会议、知情同意书排除了外部服务的研究访谈，或者个人笔记。",
          "它本身不能让设备变安全。恶意软件、浏览器扩展和共用账户仍然能看到你打开的内容，所以对文字稿要和对录音一样小心。",
        ],
      },
    ],
    checklistTitle: "敏感录音清单",
    checklist: [
      { title: "浏览器配置", body: "使用没有多余扩展的浏览器配置。" },
      { title: "验证", body: "需要证据时，观察一次“网络”面板。" },
      { title: "清理", body: "在公用设备上清除网站数据，删掉保存的草稿。" },
      { title: "导出文件", body: "把导出的文字稿存在规定允许的位置。" },
    ],
    limitsTitle: "坦白说明限制",
    limits: [
      "EarScribe 是网页，不是安装式离线软件，打开页面和下载模型都需要联网。",
      "页面也会加载隐私政策中说明的统计和广告脚本；EarScribe 从不把你的音频或文字稿发送给它们。",
    ],
    imageSrc: image,
    imageAlt: "录音在浏览器本地转写、从不上传",
  },
  ja: {
    primaryKeyword: "文字起こし ローカル",
    supportingKeywords: ["文字起こし ローカル 無料", "文字起こし 情報漏洩 対策", "文字起こし アップロード不要", "ブラウザ ローカル 文字起こし"],
    guideTitle: "ローカル文字起こしの仕組みと確かめ方",
    guideIntro: "多くのオンライン文字起こしサービスは、ファイルを自社のサーバーにアップロードします。EarScribeは逆で、モデルをブラウザに持ってきて、録音はその場に残します。",
    sections: [
      {
        title: "端末に残るもの、残らないもの",
        paragraphs: [
          "端末に残るもの：音声ファイル、デコードした音声、文字起こし、修正内容、書き出したファイル。ネットワークを通るもの：ページ自体、初回のWhisperモデルのファイル、「文字起こし完了」などの集計イベント（ファイル名や本文は含まない）、プライバシーポリシーで説明しているGoogleの広告スクリプトです。",
          "モデルのダウンロード（モデルによって約80 MB〜800 MB）はブラウザにキャッシュされるので、同じ端末では次回から不要です。",
        ],
      },
      {
        title: "ネットワークパネルで確かめる",
        paragraphs: [
          "ChromeやEdgeではF12（MacではOption+Command+I）を押してネットワーク（Network）タブを開きます。Safariは先に「開発」メニューを有効にしてください。一覧をクリアし、ファイルを選んで文字起こしします。初回はモデルファイルのリクエストが見えますが、録音と同じくらいのサイズのリクエストはありません。",
          "サイズで並べ替えるとわかりやすくなります。さらに厳密に確かめるなら、一度文字起こししてモデルをキャッシュしてからページを再読み込みし、2つ目のファイルを処理する間の通信を見てください。",
        ],
      },
      {
        title: "ローカル処理が向いている場面",
        paragraphs: [
          "第三者に渡せない、渡したくない録音に向いています。機密性の高い取材、社内会議、同意書で外部サービスの利用を除外した研究インタビュー、個人的なメモなどです。",
          "ローカル処理だけで端末が安全になるわけではありません。マルウェア、拡張機能、共有アカウントからは開いた内容が見えるので、文字起こしも録音と同じように慎重に扱ってください。",
        ],
      },
    ],
    checklistTitle: "機密性の高い録音のチェックリスト",
    checklist: [
      { title: "プロファイル", body: "不要な拡張機能のないブラウザプロファイルを使う。" },
      { title: "確認", body: "証拠が必要なら一度ネットワークパネルを見る。" },
      { title: "後片付け", body: "共用端末ではサイトデータを消去して下書きを消す。" },
      { title: "書き出し", body: "書き出した文字起こしは規程で認められた場所に保存する。" },
    ],
    limitsTitle: "正直な制限",
    limits: [
      "EarScribeはWebページで、インストール型のオフラインアプリではありません。読み込みとモデルのダウンロードには接続が必要です。",
      "ページはプライバシーポリシーに記載した解析・広告スクリプトも読み込みますが、EarScribeが音声や文字起こしをそれらに送ることはありません。",
    ],
    imageSrc: image,
    imageAlt: "音声をアップロードせず、ブラウザ内でローカルに文字起こしする画面",
  },
};
