export interface AboutGuideSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface AboutGuide {
  primaryKeyword: string;
  supportingKeywords: string[];
  sections: AboutGuideSection[];
  reviewTitle: string;
  reviewSteps: string[];
  imageAlt: string;
}

const ABOUT_GUIDES: Record<string, AboutGuide> = {
  en: {
    primaryKeyword: "browser audio transcription tool",
    supportingKeywords: [
      "local audio transcription",
      "timestamped transcript workspace",
      "audio transcription without sign up",
    ],
    sections: [
      {
        title: "The useful difference is the review path",
        paragraphs: [
          "Many audio-to-text tools stop when a paragraph appears. EarScribe is designed for the next question: which moment in the recording supports this line? Searchable segments, clickable timestamps and in-place editing keep the source close to the words you plan to copy or publish.",
          "That makes the product a good fit for one recording that needs careful review: an interview quote, a lecture term, a podcast excerpt or a subtitle file. It is deliberately simpler than a team meeting suite and more complete than a raw transcription API response.",
        ],
        bullets: [
          "Start free, unlimited and without an account.",
          "Keep the transcript, audio evidence and export formats in one browser workspace.",
          "Reveal advanced model and subtitle controls only when they help the current job.",
        ],
      },
      {
        title: "What happens when you select a file",
        paragraphs: [
          "The browser decodes the selected audio and runs the chosen Whisper model through Transformers.js and ONNX Runtime Web. The file is not sent to an EarScribe upload queue. The first run downloads a model to the browser cache; later runs may reuse it on the same device and browser.",
          "Local processing is a useful reduction in upload exposure, not a claim that every browser session is private by magic. Device security, extensions, browser storage and exported files still matter. The practical limit is available memory and compute, so a smaller model or a shorter file can be the right choice on an older phone.",
        ],
      },
      {
        title: "Choose the simplest model that fits the recording",
        paragraphs: [
          "Most clear speech works well with the balanced model. Tiny is useful when speed and a small download matter; Small can help with accents or noise when the device has room; Turbo is the most demanding option and benefits from WebGPU. The model picker shows the trade-off instead of forcing beginners to compare four downloads before they can start.",
          "No model can recover words hidden by clipping, music or overlapping speakers. Recording quality, microphone distance and a final listen-through often improve the outcome more than moving up one model size.",
        ],
      },
      {
        title: "Know when another workflow is a better fit",
        paragraphs: [
          "Use EarScribe when you want to review and export a recording yourself. A hosted team product may be better when you need shared projects, retention policies or automatic speaker management. A transcription API may be better when the result must be generated inside your own application.",
          "EarScribe does not promise real-time classroom captions, automatic speaker labels, AI meeting summaries, video caption burning or direct publishing. Those boundaries keep the page honest and tell you when to choose a different tool before you spend time processing the file.",
        ],
      },
    ],
    reviewTitle: "A five-minute review before sharing",
    reviewSteps: [
      "Search for names, dates, numbers and specialist terms.",
      "Click each important timestamp and listen to the surrounding sentence.",
      "Edit the transcript once; copy and every export use the edited version.",
      "Run the subtitle check when the output will be read alongside video.",
      "Keep the original recording until the final text or subtitle file is approved.",
    ],
    imageAlt: "EarScribe browser audio transcription workflow from file selection to export",
  },
  "zh-CN": {
    primaryKeyword: "浏览器音频转文字",
    supportingKeywords: ["本地音频转文字", "带时间戳文字稿工作台", "音频转文字无需注册"],
    sections: [
      {
        title: "真正的差异，是把核对路径留在结果里",
        paragraphs: [
          "很多音频转文字工具在屏幕上出现一段文字后就结束了。EarScribe 解决的是下一步：这句话在原录音的哪一秒？可搜索的分段、可点击的时间戳和原地编辑，让你复制或发布前始终能回到证据。",
          "因此它更适合需要认真核对的一段录音：采访引语、课堂术语、播客片段或字幕文件。它没有把自己做成复杂的团队会议系统，也不只是返回一段无法继续处理的 API 文本。",
        ],
        bullets: [
          "免费、无限使用、无需注册，先得到结果再决定是否继续。",
          "在同一个浏览器工作台里完成文字、原音和导出格式的衔接。",
          "模型对比和字幕检查按需展开，新手不需要先理解所有参数。",
        ],
      },
      {
        title: "选择音频后，浏览器里实际发生什么",
        paragraphs: [
          "浏览器会解码你选择的音频，并通过 Transformers.js 和 ONNX Runtime Web 运行 Whisper 模型。文件不会进入 EarScribe 的上传队列。首次运行需要把模型下载到浏览器缓存；同一设备和浏览器再次使用时，可能直接复用缓存。",
          "本地处理可以减少录音上传暴露面，但不等于浏览器天然绝对安全。设备、扩展程序、浏览器存储和导出文件仍需要正常管理。实际能处理多长的音频取决于设备内存和算力，旧手机上使用更小模型或先裁掉静音通常更稳。",
        ],
      },
      {
        title: "选择能承担任务的最小模型",
        paragraphs: [
          "大多数清晰人声直接使用均衡模式即可。Tiny 适合优先考虑速度和下载体积的场景；Small 在设备有余量时对口音或噪音可能更有帮助；Turbo 对内存和 WebGPU 要求更高。模型选择器把这些取舍直接展示出来，不要求新手一开始就比较四个下载包。",
          "任何模型都无法找回被爆音、音乐或多人重叠说话遮住的词。录音质量、麦克风距离和最后一次回听，往往比单纯升级一个模型更能改善结果。",
        ],
      },
      {
        title: "知道什么时候应该换一种工具",
        paragraphs: [
          "如果你要自己核对并导出一段录音，EarScribe 就适合这个流程。如果你需要共享项目、团队留存策略或自动管理说话人，托管团队软件可能更合适。如果结果必须嵌入自己的产品，转录 API 通常更合适。",
          "EarScribe 不承诺实时课堂字幕、自动说话人标签、AI 会议总结、把字幕烧录进视频或直接发布到平台。把边界说清楚，可以让你在处理文件前就选对工作流。",
        ],
      },
    ],
    reviewTitle: "分享前，用五分钟做一次核对",
    reviewSteps: [
      "搜索人名、日期、数字和专业术语。",
      "点击每个重要时间戳，回听它前后的完整句子。",
      "只在工作台里修改一次，复制和所有导出都会使用修改后的版本。",
      "如果要配合视频阅读，先运行字幕检查。",
      "最终文字或字幕确认前，保留原始录音。",
    ],
    imageAlt: "EarScribe 从选择音频到导出的浏览器音频转文字流程",
  },
  ja: {
    primaryKeyword: "ブラウザ 音声文字起こし",
    supportingKeywords: ["ローカル音声文字起こし", "タイムスタンプ付き文字起こし", "登録不要 音声文字起こし"],
    sections: [
      {
        title: "違いは、確認できる道筋を残すこと",
        paragraphs: [
          "音声から文章が表示されたところで終わるツールは少なくありません。EarScribeは、その一文が録音の何秒にあるのかをすぐ確認できるように作っています。検索、タイムスタンプからの聞き直し、画面上の修正を一つの流れで行えます。",
          "インタビューの引用、講義の用語、ポッドキャストの抜粋、字幕ファイルなど、確認が必要な録音に向いています。チーム会議向けの複雑な管理ツールでも、APIが返すだけのテキストでもありません。",
        ],
        bullets: [
          "無料・回数無制限・登録不要で、まず結果を確認できます。",
          "文字、元音声、書き出し形式を同じブラウザ画面でつなげます。",
          "モデル比較や字幕チェックは必要なときだけ表示し、最初の操作を軽くします。",
        ],
      },
      {
        title: "ファイルを選ぶとブラウザで何が起きるか",
        paragraphs: [
          "選択した音声をブラウザでデコードし、Transformers.jsとONNX Runtime Webを通してWhisperモデルを実行します。音声ファイルをEarScribeのアップロード待ちに送ることはありません。初回はモデルをブラウザのキャッシュへダウンロードし、同じ端末とブラウザでは次回から再利用できる場合があります。",
          "ローカル処理はアップロードによる露出を減らしますが、ブラウザが自動的に絶対安全になるという意味ではありません。端末、拡張機能、ブラウザの保存領域、書き出したファイルは普段どおり管理してください。長い録音は端末のメモリと処理性能に左右されるため、古い端末では小さなモデルや無音部分の整理が現実的です。",
        ],
      },
      {
        title: "録音に合う最小のモデルを選ぶ",
        paragraphs: [
          "明瞭な音声なら、まずバランス設定で十分です。Tinyは速度とダウンロード容量を優先したい場合、Smallは端末に余裕があり、訛りや雑音への対応を少し強めたい場合に向きます。Turboはメモリを多く使い、WebGPUがある端末で力を発揮します。モデル選択画面では、初心者が最初から四つを比較しなくても違いが分かります。",
          "大きなモデルでも、割れた音、音楽、話者の重なりで消えた言葉を復元することはできません。録音環境、マイクとの距離、最後の聞き直しのほうが結果を左右することも多くあります。",
        ],
      },
      {
        title: "別の方法が向いている場面もある",
        paragraphs: [
          "一つの録音を自分で確認して書き出したいならEarScribeが向いています。共有プロジェクト、チームの保存ルール、自動話者管理が必要なら、ホスト型のチームサービスを選ぶほうがよい場合があります。自社サービスに組み込みたい場合は、文字起こしAPIが適しています。",
          "EarScribeはリアルタイム授業字幕、自動話者ラベル、AI会議要約、動画への字幕焼き込み、動画プラットフォームへの直接公開を約束しません。できることとできないことを先に分けることで、処理前に適切な道具を選べます。",
        ],
      },
    ],
    reviewTitle: "共有前に五分で確認すること",
    reviewSteps: [
      "人名、日付、数字、専門用語を検索します。",
      "重要なタイムスタンプを押し、前後の文脈まで聞き直します。",
      "画面上で一度だけ修正すれば、コピーとすべての書き出しに反映されます。",
      "動画と一緒に読む字幕なら、先に字幕チェックを実行します。",
      "最終確認が終わるまで元の録音を保管します。",
    ],
    imageAlt: "EarScribeで音声を選び、確認して書き出すブラウザ文字起こしの流れ",
  },
};

export function getAboutGuide(locale: string): AboutGuide | null {
  return ABOUT_GUIDES[locale] ?? null;
}
