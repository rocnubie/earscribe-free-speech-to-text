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
      description:
        "Transcribe Voice Memos recordings into timestamped, editable text for free on iPhone, iPad or Mac. Nothing to install, no sign-up; export TXT, SRT or VTT.",
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
      title: "免费把 iPhone 语音备忘录转成文字",
      description: "免费在 iPhone、iPad 或 Mac 上把语音备忘录录音转成带时间戳、可编辑的文字。无需安装、无需注册，可导出 TXT、SRT 或 VTT。",
      eyebrow: "语音备忘录转文字",
      intro: "“语音备忘录”App 会把每条录音保存为 .m4a 文件。从 App 里导出后在这里打开，EarScribe 会在浏览器中转成文字，每一句都有时间戳，可以点击回听、修改和导出。",
      benefits: ["iPhone、iPad、Mac 的 Safari 都能用", "点击任意一句回听那段录音", "完成后导出文字或字幕"],
      workflowTitle: "免费把语音备忘录变成文字",
      workflow: [
        { title: "导出录音", body: "在 iPhone 或 iPad 上打开录音，轻点“更多”（•••），选择“共享”，再选“存储到文件”。在 Mac 上，直接把录音从“语音备忘录”拖到桌面。" },
        { title: "在 EarScribe 打开", body: "轻点上传区域，从“文件”App 或访达里选择录音。第一次使用会下载语音模型，之后浏览器会保留缓存。" },
        { title: "核对后分享", body: "搜索内容，回听不清楚的地方，改正人名，然后复制文字或导出文件。" },
      ],
      tipsTitle: "语音备忘录小技巧",
      tips: [
        "在“语音备忘录”设置里把音质设为“无损”，文件会大很多。长录音用“压缩”更好处理，识别人声的效果也一样。",
        "录音时让手机靠近说话人，别用手挡住手机底部的麦克风。",
        "长录音内存不够时，先在“语音备忘录”里剪掉静音部分，或者拆成几段再转写。",
      ],
      faq: [
        { q: "语音备忘录 App 自己不是能转文字吗？", a: "较新版本的 iOS 和 macOS 在部分语言和设备上可以在“语音备忘录”里显示文字稿。需要可以导出成字幕的时间戳、修改后同步到所有导出格式，或者自带功能不支持的语言时，EarScribe 更合适。" },
        { q: "语音备忘录是什么格式？", a: "语音备忘录录的是 .m4a 文件：音质设为“压缩”时是 AAC 音频，设为“无损”时是 Apple Lossless。" },
        { q: "能全程只用 iPhone 完成吗？", a: "可以。把录音存储到“文件”，用 Safari 打开 EarScribe 并选择文件即可。较旧的 iPhone 运行大模型会比较慢，建议先用推荐的模型。" },
        { q: "我的语音备忘录会被上传吗？", a: "不会。文件在浏览器标签页里解码和识别，唯一需要下载的是语音模型。" },
      ],
      screenshotAlt: "语音备忘录在 EarScribe 中转成的带时间戳文字",
    },
    ja: {
      title: "iPhoneのボイスメモを無料で文字起こし",
      description: "ボイスメモの録音を、iPhone・iPad・Macで無料でタイムスタンプ付きの編集できるテキストに。インストール不要・登録不要で、TXT・SRT・VTTに書き出せます。",
      eyebrow: "ボイスメモ 文字起こし",
      intro: "ボイスメモは録音を.m4aファイルとして保存します。アプリから書き出してここで開けば、EarScribeがブラウザ内で文字起こしします。タイムスタンプから聞き直し、修正して書き出せます。",
      benefits: ["iPhone・iPad・MacのSafariで使える", "行をクリックするとその部分を再生", "終わったら文字や字幕として書き出し"],
      workflowTitle: "ボイスメモを無料で文字にするまで",
      workflow: [
        { title: "メモを書き出す", body: "iPhoneやiPadでは録音を開き、「その他」（•••）→「共有」→「“ファイル”に保存」を選びます。Macではボイスメモから録音をデスクトップへドラッグします。" },
        { title: "EarScribeで開く", body: "アップロード欄をタップし、「ファイル」アプリやFinderからメモを選びます。初回は音声モデルをダウンロードし、以降はブラウザに保存されます。" },
        { title: "確認して共有する", body: "文字を検索し、聞き取りにくい箇所を再生して人名などを直してから、コピーまたは書き出します。" },
      ],
      tipsTitle: "ボイスメモのコツ",
      tips: [
        "ボイスメモの設定で音質を「非圧縮」にするとファイルがかなり大きくなります。長い録音は「圧縮」のほうが処理しやすく、話し声の認識にも十分です。",
        "スマートフォンは話す人の近くに置き、下部のマイクを手でふさがないようにしましょう。",
        "長いメモでメモリが足りない場合は、ボイスメモで無音部分を削るか、分割してから文字起こししてください。",
      ],
      faq: [
        { q: "ボイスメモのアプリだけで文字起こしできませんか？", a: "最近のiOSやmacOSでは、一部の言語と機種でボイスメモに文字起こしを表示できます。字幕として書き出せるタイムスタンプが必要なとき、修正をすべての形式に反映したいとき、標準機能が対応していない言語のときにEarScribeが役立ちます。" },
        { q: "ボイスメモのファイル形式は何ですか？", a: ".m4aです。音質が「圧縮」ならAAC、「非圧縮」ならApple Losslessで保存されます。" },
        { q: "iPhoneだけで完結できますか？", a: "はい。メモを「ファイル」に保存し、SafariでEarScribeを開いてファイルを選ぶだけです。古いiPhoneでは大きいモデルが遅くなるので、まずはおすすめのモデルを使ってください。" },
        { q: "ボイスメモはアップロードされますか？", a: "されません。ファイルはブラウザのタブ内でデコードされ、文字起こしされます。ダウンロードするのは音声モデルだけです。" },
      ],
      screenshotAlt: "EarScribeでボイスメモをタイムスタンプ付きテキストにした画面",
    },
  },
};

export const VOICE_MEMO_TO_TEXT_GUIDES: Record<ToolLocale, ToolGuide> = {
  en: {
    primaryKeyword: "voice memo to text",
    supportingKeywords: ["transcribe voice memos", "voice memo to text iphone", "voice memos to text on mac", "voice memo transcription free"],
    guideTitle: "Getting a voice memo out of the app and into text",
    guideIntro:
      "Making the recording is easy; the fiddly part is getting the file out of Voice Memos in a form you can use. Here is what the export gives you and how to keep the transcript tied to it.",
    sections: [
      {
        title: "Exporting from iPhone, iPad and Mac",
        paragraphs: [
          "On iPhone and iPad, Save to Files in the Share sheet writes the memo as an .m4a file to iCloud Drive or On My iPhone, where the browser's file picker can reach it. AirDrop to a Mac works too.",
          "On a Mac, drag a recording from Voice Memos straight into Finder, or use the app's Share button. Memos synced through iCloud appear on every device signed in to the same Apple Account.",
        ],
      },
      {
        title: "What's inside the file",
        paragraphs: [
          "Standard memos are AAC audio in an .m4a file. With Audio Quality set to Lossless, the same .m4a holds Apple Lossless audio and is much larger, but it doesn't improve speech recognition, because Whisper works from a 16 kHz mono copy.",
          "The exported file keeps the memo's name, and EarScribe names its TXT, SRT and VTT exports after the file you open. Renaming the memo before you export makes the transcript easy to find later.",
        ],
      },
      {
        title: "From memo to notes or captions",
        paragraphs: [
          "For notes, search the transcript for the points you need and copy the corrected text. For a video or social clip, export SRT or VTT and add it to your editor; the cue times follow the memo's timeline.",
          "Memos are often recorded on the move. Replay anything that sounds off before sharing, especially names, amounts and dates.",
        ],
      },
    ],
    checklistTitle: "Voice memo checklist",
    checklist: [
      { title: "Export", body: "Save to Files on iPhone or iPad, or drag from the Mac app." },
      { title: "Name", body: "Rename the memo so exports carry a useful file name." },
      { title: "Size", body: "Use Compressed quality for long memos." },
      { title: "Review", body: "Replay names, numbers and dates before sharing." },
    ],
    limitsTitle: "What to expect",
    limits: [
      "EarScribe transcribes a recording after it's made; it is not a live dictation keyboard.",
      "It doesn't connect to Voice Memos or iCloud. Export the memo, then open it here.",
    ],
    imageSrc: image,
    imageAlt: "Transcript of an exported voice memo with timestamps",
  },
  "zh-CN": {
    primaryKeyword: "语音备忘录转文字",
    supportingKeywords: ["语音备忘录转文字 iphone", "语音备忘录转文字 免费", "iphone录音转文字", "mac 语音备忘录转文字"],
    guideTitle: "把语音备忘录导出来，再变成文字",
    guideIntro: "录音很简单，麻烦的是把文件从“语音备忘录”里导出成能用的格式。下面说明导出后得到的是什么，以及怎样让文字稿和录音一一对应。",
    sections: [
      {
        title: "从 iPhone、iPad 和 Mac 导出",
        paragraphs: [
          "在 iPhone 和 iPad 上，共享菜单里的“存储到文件”会把录音以 .m4a 格式保存到 iCloud 云盘或“我的 iPhone”，浏览器的文件选择器可以直接读取。也可以用隔空投送发到 Mac。",
          "在 Mac 上，可以把录音从“语音备忘录”直接拖进访达，或者用 App 里的“共享”按钮。开启 iCloud 同步后，登录同一个 Apple 账户的设备上都能看到这些录音。",
        ],
      },
      {
        title: "文件里装的是什么",
        paragraphs: [
          "普通录音是装在 .m4a 里的 AAC 音频。音质设为“无损”时，同样的 .m4a 里装的是 Apple Lossless，文件大得多，但对语音识别没有帮助，因为 Whisper 处理的是 16 kHz 单声道副本。",
          "导出的文件沿用录音的名字，EarScribe 导出的 TXT、SRT、VTT 也会以你打开的文件命名。导出前先给录音改个名，之后更容易找到对应的文字稿。",
        ],
      },
      {
        title: "从录音到笔记或字幕",
        paragraphs: [
          "做笔记时，在文字稿里搜索需要的要点，复制改正后的文字。做视频或短片时，导出 SRT 或 VTT 放进剪辑软件，字幕时间和录音时间轴一致。",
          "语音备忘录常常是在路上录的，分享前回听听起来不对的地方，尤其是人名、金额和日期。",
        ],
      },
    ],
    checklistTitle: "语音备忘录清单",
    checklist: [
      { title: "导出", body: "iPhone/iPad 用“存储到文件”，Mac 直接拖出来。" },
      { title: "命名", body: "先给录音改名，导出的文件名才好认。" },
      { title: "大小", body: "长录音用“压缩”音质。" },
      { title: "核对", body: "分享前回听人名、数字和日期。" },
    ],
    limitsTitle: "使用前须知",
    limits: [
      "EarScribe 转写的是录好的文件，不是实时听写输入法。",
      "它不会连接“语音备忘录”或 iCloud，需要先导出录音再在这里打开。",
    ],
    imageSrc: image,
    imageAlt: "导出的语音备忘录生成的带时间戳文字稿",
  },
  ja: {
    primaryKeyword: "ボイスメモ 文字起こし",
    supportingKeywords: ["ボイスメモ 文字起こし iphone", "ボイスメモ 文字起こし 無料", "iphone 録音 文字起こし", "mac ボイスメモ 文字起こし"],
    guideTitle: "ボイスメモを書き出して文字にする",
    guideIntro: "録音は簡単でも、使える形でボイスメモからファイルを取り出すのは少し手間です。書き出したファイルの中身と、文字起こしを録音と結びつけておく方法をまとめます。",
    sections: [
      {
        title: "iPhone・iPad・Macからの書き出し",
        paragraphs: [
          "iPhoneとiPadでは、共有メニューの「“ファイル”に保存」でメモが.m4aとしてiCloud Driveや「このiPhone内」に保存され、ブラウザのファイル選択から開けます。AirDropでMacへ送ることもできます。",
          "Macでは、ボイスメモから録音をFinderへそのままドラッグするか、アプリの共有ボタンを使います。iCloudで同期していれば、同じApple Accountでサインインしたすべてのデバイスにメモが表示されます。",
        ],
      },
      {
        title: "ファイルの中身",
        paragraphs: [
          "通常のメモは.m4aに入ったAAC音声です。音質を「非圧縮」にすると同じ.m4aにApple Losslessが入り、容量はかなり大きくなりますが、音声認識には役立ちません。Whisperは16 kHzモノラルのコピーで処理するためです。",
          "書き出したファイルにはメモの名前が付き、EarScribeのTXT・SRT・VTTも開いたファイル名で保存されます。書き出す前にメモの名前を変えておくと、あとで文字起こしを探しやすくなります。",
        ],
      },
      {
        title: "メモからノートや字幕へ",
        paragraphs: [
          "ノートにするなら、必要な要点を検索して修正済みの文章をコピーします。動画やSNSのクリップにするなら、SRTかVTTを書き出して編集ソフトに追加すれば、字幕の時間はメモのタイムラインに合います。",
          "ボイスメモは移動中に録ることが多いものです。共有する前に、人名・金額・日付など気になる箇所を聞き直してください。",
        ],
      },
    ],
    checklistTitle: "ボイスメモのチェックリスト",
    checklist: [
      { title: "書き出し", body: "iPhone・iPadは「“ファイル”に保存」、Macはドラッグで。" },
      { title: "名前", body: "メモの名前を変えて、書き出しファイルをわかりやすくする。" },
      { title: "容量", body: "長いメモは「圧縮」の音質で。" },
      { title: "確認", body: "共有前に人名・数字・日付を聞き直す。" },
    ],
    limitsTitle: "あらかじめ知っておくこと",
    limits: [
      "EarScribeは録音済みのファイルを文字起こしするツールで、リアルタイムの音声入力キーボードではありません。",
      "ボイスメモやiCloudとは連携しません。メモを書き出してから、ここで開いてください。",
    ],
    imageSrc: image,
    imageAlt: "書き出したボイスメモのタイムスタンプ付き文字起こし",
  },
};
