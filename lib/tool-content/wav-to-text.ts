import type { ToolLocale } from "@/lib/site-routes";
import type { ToolGuide } from "@/lib/tool-page-seo";
import type { ToolPageDefinition } from "@/lib/tool-pages";

const image = "/screenshots/02-transcript-showcase.webp";

export const WAV_TO_TEXT_PAGE: ToolPageDefinition = {
  slug: "wav-to-text",
  resultTab: "transcript",
  copy: {
    en: {
      title: "Free WAV to text converter for large recordings",
      description:
        "Free WAV to text in your browser: transcribe recorder, DAW and Audacity files into timestamped text. Nothing is uploaded; export TXT, SRT or VTT.",
      eyebrow: "WAV to text converter",
      intro:
        "WAV is what field recorders, DAWs and Audacity produce: uncompressed and large. EarScribe reads the WAV on your own device, so a big file never has to be uploaded, and turns it into timestamped text you can check and export.",
      benefits: [
        "Large WAV files stay on your device",
        "Timestamped segments you can replay",
        "Export TXT, SRT, VTT or JSON",
      ],
      workflowTitle: "Transcribe a WAV recording for free",
      workflow: [
        { title: "Check the file size", body: "An hour of CD-quality stereo WAV is about 635 MB, and files over 1 GB are refused. Split long recordings or export a mono copy first." },
        { title: "Pick a model that fits the device", body: "The balanced model works for most recordings. Tiny is lighter when memory is tight; larger models need more of it." },
        { title: "Review and export", body: "Replay uncertain lines from their timestamps, correct them, then export the format you need." },
      ],
      tipsTitle: "WAV settings that matter, and ones that don't",
      tips: [
        "Sample rates above 16 kHz and 24-bit depth don't make Whisper more accurate; the audio is converted to 16 kHz mono before recognition.",
        "Mono is enough for speech. Stereo channels are mixed into one track before transcription.",
        "Microphone placement and a quiet room improve results far more than a higher-resolution file.",
      ],
      faq: [
        { q: "Is WAV better than MP3 for transcription?", a: "Usually not by much. Whisper listens to 16 kHz mono audio, so a well-encoded MP3 of clear speech transcribes about as well. WAV helps most when a noisy recording would suffer from further compression." },
        { q: "How large a WAV file can I transcribe?", a: "EarScribe accepts files up to 1 GB, and the real limit is your device's memory. The browser holds the file and the decoded audio at the same time, so a one-hour stereo WAV can need well over a gigabyte. Split longer recordings or export a 16 kHz mono copy." },
        { q: "Why does my WAV file fail to open?", a: "Standard PCM WAV opens in every major browser. Some recorders and phone systems store compressed variants such as ADPCM inside a WAV; convert those to 16-bit PCM WAV or MP3." },
        { q: "Can I transcribe a multitrack session?", a: "Export a single mixed WAV first, or one file per track if you need to know exactly who said what. EarScribe transcribes one file at a time." },
      ],
      screenshotAlt: "WAV recording converted into timestamped text with waveform and export controls",
    },
    "zh-CN": {
      title: "免费 WAV 转文字：大文件不用上传",
      description: "免费在浏览器里把录音笔、音频软件和 Audacity 导出的 WAV 转成带时间戳的文字。大文件不上传，可导出 TXT、SRT、VTT 或 JSON。",
      eyebrow: "WAV 转文字工具",
      intro: "录音笔、音频工作站和 Audacity 导出的通常是 WAV：不压缩，体积很大。EarScribe 在你自己的设备上读取 WAV，大文件不必上传，直接生成可以核对和导出的带时间戳文字。",
      benefits: ["大 WAV 文件留在本机", "每段文字都能按时间戳回听", "导出 TXT、SRT、VTT 或 JSON"],
      workflowTitle: "免费转写 WAV 录音的步骤",
      workflow: [
        { title: "先看文件大小", body: "一小时 CD 音质的立体声 WAV 约 635 MB，超过 1 GB 的文件会被拒绝。长录音请先拆分，或导出一份单声道副本。" },
        { title: "选适合设备的模型", body: "大多数录音用均衡模型即可。内存紧张时用 Tiny，大模型需要更多内存。" },
        { title: "核对并导出", body: "从时间戳回听没把握的句子，改正后导出需要的格式。" },
      ],
      tipsTitle: "哪些 WAV 参数有用，哪些没用",
      tips: [
        "高于 16 kHz 的采样率和 24-bit 位深不会让 Whisper 更准，识别前音频都会转成 16 kHz 单声道。",
        "人声用单声道就够了。立体声的两个声道会在转写前合成一个声道。",
        "麦克风摆位和安静的环境，比更高规格的文件更能提升效果。",
      ],
      faq: [
        { q: "WAV 转文字比 MP3 更准吗？", a: "通常差别不大。Whisper 处理的是 16 kHz 单声道音频，清晰人声的高质量 MP3 识别效果差不多。WAV 主要在嘈杂录音不宜再压缩时更有优势。" },
        { q: "多大的 WAV 可以转文字？", a: "EarScribe 接受 1 GB 以内的文件，真正的上限是设备内存。浏览器要同时保存原文件和解码后的音频，一小时的立体声 WAV 可能需要超过 1 GB 内存。更长的录音请拆分，或导出 16 kHz 单声道副本。" },
        { q: "为什么 WAV 文件打不开？", a: "标准 PCM 格式的 WAV 主流浏览器都能打开。有些录音设备和电话系统会在 WAV 里存放 ADPCM 等压缩编码，请先转成 16-bit PCM WAV 或 MP3。" },
        { q: "多轨录音能直接转写吗？", a: "请先导出一个混音后的 WAV；如果需要准确知道谁说了什么，就每个音轨单独导出一个文件。EarScribe 每次处理一个文件。" },
      ],
      screenshotAlt: "WAV 录音转成的带时间戳文字，含波形和导出按钮",
    },
    ja: {
      title: "WAVファイルを無料で文字起こし（アップロード不要）",
      description: "録音機・DAW・Audacityで作ったWAVを、ブラウザ内で無料でタイムスタンプ付きテキストに変換。大きなファイルもアップロードせず、TXT・SRT・VTT・JSONで書き出せます。",
      eyebrow: "WAV 文字起こし",
      intro: "フィールドレコーダー、DAW、Audacityが書き出すWAVは非圧縮で容量が大きい形式です。EarScribeはWAVを手元の端末で読み込むので、大きなファイルをアップロードする必要がありません。確認して書き出せるタイムスタンプ付きの文字にします。",
      benefits: ["大きなWAVも端末から出さない", "区間ごとにタイムスタンプから再生", "TXT・SRT・VTT・JSONで書き出し"],
      workflowTitle: "WAV録音を無料で文字起こしする手順",
      workflow: [
        { title: "ファイルサイズを確認する", body: "CD音質のステレオWAVは1時間で約635 MBになり、1 GBを超えるファイルは受け付けません。長い録音は分割するか、モノラル版を書き出してください。" },
        { title: "端末に合うモデルを選ぶ", body: "多くの録音はバランス型で十分です。メモリが少ない場合はTinyを。大きいモデルほどメモリを使います。" },
        { title: "確認して書き出す", body: "自信のない箇所をタイムスタンプから聞き直して修正し、必要な形式で書き出します。" },
      ],
      tipsTitle: "効くWAV設定と効かない設定",
      tips: [
        "16 kHzを超えるサンプリングレートや24-bitは、Whisperの精度を上げません。認識の前に16 kHzモノラルへ変換されます。",
        "話し声ならモノラルで十分です。ステレオの左右チャンネルは文字起こし前に1つにまとめられます。",
        "マイクの位置と静かな部屋のほうが、高解像度のファイルよりずっと結果を良くします。",
      ],
      faq: [
        { q: "WAVのほうがMP3より正確に文字起こしできますか？", a: "大きな差はないことがほとんどです。Whisperは16 kHzのモノラル音声を聞くので、はっきりした声なら品質の良いMP3でもほぼ同じ結果になります。雑音の多い録音をさらに圧縮したくない場合はWAVが有利です。" },
        { q: "どのくらい大きなWAVまで処理できますか？", a: "1 GBまでのファイルを受け付けますが、実際の上限は端末のメモリです。ブラウザは元のファイルとデコード後の音声を同時に保持するため、1時間のステレオWAVでは1 GBを大きく超えるメモリが必要になることがあります。長い録音は分割するか、16 kHzモノラル版を書き出してください。" },
        { q: "WAVファイルが開けないのはなぜですか？", a: "標準的なPCMのWAVなら主要なブラウザで開けます。録音機や電話システムの中には、WAVにADPCMなどの圧縮形式を入れるものがあります。16-bit PCMのWAVかMP3に変換してください。" },
        { q: "マルチトラックの録音も文字起こしできますか？", a: "まず1つにミックスしたWAVを書き出してください。誰が話したかを正確に知りたい場合は、トラックごとにファイルを分けます。EarScribeは1ファイルずつ処理します。" },
      ],
      screenshotAlt: "WAV録音をタイムスタンプ付きテキストに変換した画面と書き出しボタン",
    },
  },
};

export const WAV_TO_TEXT_GUIDES: Record<ToolLocale, ToolGuide> = {
  en: {
    primaryKeyword: "wav to text",
    supportingKeywords: ["wav to text converter", "transcribe wav file", "wav transcription online", "convert wav to text free"],
    guideTitle: "Why WAV files behave differently",
    guideIntro:
      "WAV is usually uncompressed PCM audio, which makes it easy to decode and expensive to hold in memory. Plan for the file size; the transcription itself is the easy part.",
    sections: [
      {
        title: "Size grows with sample rate, bit depth and channels",
        paragraphs: [
          "CD-quality stereo WAV (16-bit, 44.1 kHz) takes about 10.6 MB per minute, and 24-bit, 48 kHz stereo about 17.3 MB per minute, so it reaches EarScribe's 1 GB file limit after roughly an hour. A 16 kHz, 16-bit mono WAV needs under 2 MB per minute and still contains everything speech recognition uses.",
          "EarScribe decodes the whole file in the browser and converts it to 16 kHz mono for Whisper. Nothing is uploaded, but the browser needs memory for the original file and the decoded audio together, which is why long high-resolution WAVs can fail on phones.",
        ],
      },
      {
        title: "When to make a smaller copy first",
        paragraphs: [
          "If a recording runs longer than an hour or was captured at 24-bit, 48 kHz stereo, export a 16 kHz mono WAV or a good-quality MP3 from your editor before transcribing. You lose nothing the model would have used.",
          "Keep the original WAV as your master for editing and archiving. The transcript's timestamps still line up with it as long as the copy starts at the same point.",
        ],
      },
      {
        title: "Channels and multitrack sessions",
        paragraphs: [
          "Stereo channels are mixed together before recognition. If two people were recorded on separate channels, the transcript still reads as one conversation without speaker labels.",
          "For podcasts or interviews recorded as separate tracks, transcribe the final mix for show notes, or each track on its own when you need to know exactly who said what.",
        ],
      },
    ],
    checklistTitle: "WAV transcription checklist",
    checklist: [
      { title: "Length", body: "Split recordings over an hour on phones and low-memory laptops." },
      { title: "Encoding", body: "Use standard 16-bit or 24-bit PCM WAV; convert compressed variants." },
      { title: "Working copy", body: "Transcribe a 16 kHz mono export when the original is huge, and keep the original." },
      { title: "Review", body: "Replay names, numbers and technical terms before you export." },
    ],
    limitsTitle: "Limits to keep in mind",
    limits: [
      "Files over 1 GB are refused, and the practical limit is your device's memory; there is no server doing the work for you.",
      "EarScribe does not separate speakers or tracks; multitrack sessions need a mixdown or one file per track.",
    ],
    imageSrc: image,
    imageAlt: "Transcript of a WAV recording with timestamps and export options",
  },
  "zh-CN": {
    primaryKeyword: "wav转文字",
    supportingKeywords: ["wav转文字 免费", "wav录音转文字", "wav文件转文字", "wav转文字 在线"],
    guideTitle: "为什么 WAV 文件和别的格式不一样",
    guideIntro: "WAV 通常是不压缩的 PCM 音频，解码容易，但很占内存。真正要提前规划的是文件大小，转写本身反而是简单的部分。",
    sections: [
      {
        title: "体积随采样率、位深和声道增长",
        paragraphs: [
          "CD 音质的立体声 WAV（16-bit、44.1 kHz）每分钟约 10.6 MB，24-bit、48 kHz 立体声每分钟约 17.3 MB，大约一小时就会达到 EarScribe 1 GB 的文件上限。16 kHz、16-bit 单声道 WAV 每分钟不到 2 MB，语音识别需要的信息一点不少。",
          "EarScribe 会在浏览器里解码整个文件，并转成 16 kHz 单声道交给 Whisper。文件不上传，但浏览器要同时存放原文件和解码后的音频，所以长时间的高规格 WAV 在手机上容易失败。",
        ],
      },
      {
        title: "什么时候先导出一个小副本",
        paragraphs: [
          "录音超过一小时，或者是 24-bit、48 kHz 立体声时，先在剪辑软件里导出 16 kHz 单声道 WAV 或高质量 MP3 再转写。模型用得到的信息不会损失。",
          "原始 WAV 留作剪辑和归档的母版。只要副本的起点相同，文字稿的时间戳就和原文件对得上。",
        ],
      },
      {
        title: "声道和多轨录音",
        paragraphs: [
          "识别前两个声道会合成一个。如果两个人分别录在左右声道，文字稿仍然是一段连续对话，不会标注说话人。",
          "分轨录制的播客或采访，写节目笔记时转写最终混音即可；需要准确区分谁说了什么时，再逐个音轨单独转写。",
        ],
      },
    ],
    checklistTitle: "WAV 转写清单",
    checklist: [
      { title: "时长", body: "在手机和低内存电脑上，超过一小时的录音先拆分。" },
      { title: "编码", body: "使用标准 16-bit 或 24-bit PCM WAV，压缩变体先转换。" },
      { title: "工作副本", body: "原文件太大时转写 16 kHz 单声道副本，原文件保留。" },
      { title: "核对", body: "导出前回听人名、数字和专业术语。" },
    ],
    limitsTitle: "需要注意的限制",
    limits: [
      "超过 1 GB 的文件会被拒绝，实际上限取决于设备内存，没有服务器替你处理。",
      "EarScribe 不区分说话人或音轨，多轨录音需要先混音，或每轨导出一个文件。",
    ],
    imageSrc: image,
    imageAlt: "WAV 录音转成的带时间戳文字稿和导出选项",
  },
  ja: {
    primaryKeyword: "wav 文字起こし",
    supportingKeywords: ["wav 文字起こし 無料", "wav テキスト変換", "wav 文字起こし ai", "録音 wav 文字起こし"],
    guideTitle: "WAVファイルがほかの形式と違う理由",
    guideIntro: "WAVは多くの場合非圧縮のPCM音声で、デコードは簡単ですがメモリを大きく使います。前もって考えるべきなのはファイルサイズで、文字起こし自体は難しくありません。",
    sections: [
      {
        title: "サイズはサンプリングレート・ビット深度・チャンネル数で増える",
        paragraphs: [
          "CD音質のステレオWAV（16-bit、44.1 kHz）は1分あたり約10.6 MB、24-bit・48 kHzのステレオは約17.3 MBで、1時間ほどでEarScribeの上限の1 GBに達します。16 kHz・16-bitのモノラルなら1分2 MB未満で、音声認識に必要な情報はすべて残ります。",
          "EarScribeはブラウザ内でファイル全体をデコードし、16 kHzのモノラルに変換してWhisperに渡します。アップロードはしませんが、元のファイルとデコード後の音声を同時にメモリに置くため、長時間の高解像度WAVはスマートフォンで失敗しやすくなります。",
        ],
      },
      {
        title: "先に小さいコピーを作るべきとき",
        paragraphs: [
          "1時間を超える録音や、24-bit・48 kHzのステレオ録音は、編集ソフトで16 kHzモノラルのWAVか高品質のMP3を書き出してから文字起こししてください。モデルが使う情報は失われません。",
          "元のWAVは編集と保管用のマスターとして残しましょう。コピーの開始位置が同じなら、文字起こしのタイムスタンプは元ファイルとも一致します。",
        ],
      },
      {
        title: "チャンネルとマルチトラック",
        paragraphs: [
          "左右のチャンネルは認識前に1つにまとめられます。2人を別々のチャンネルで録っていても、文字起こしは話者ラベルのない1つの会話になります。",
          "トラックを分けて録ったポッドキャストやインタビューは、概要欄用なら最終ミックスを、誰が話したかを正確に残したいならトラックごとに文字起こしします。",
        ],
      },
    ],
    checklistTitle: "WAV文字起こしのチェックリスト",
    checklist: [
      { title: "長さ", body: "スマートフォンや低メモリのPCでは、1時間を超える録音を分割する。" },
      { title: "エンコード", body: "標準の16-bitか24-bit PCMを使い、圧縮形式は変換する。" },
      { title: "作業用コピー", body: "元が大きすぎる場合は16 kHzモノラル版を文字起こしし、元ファイルは残す。" },
      { title: "確認", body: "書き出す前に人名・数字・専門用語を聞き直す。" },
    ],
    limitsTitle: "知っておきたい制限",
    limits: [
      "1 GBを超えるファイルは受け付けず、実際の上限は端末のメモリです。代わりに処理するサーバーはありません。",
      "EarScribeは話者やトラックを区別しません。マルチトラックはミックスダウンするか、トラックごとにファイルを分けてください。",
    ],
    imageSrc: image,
    imageAlt: "WAV録音のタイムスタンプ付き文字起こしと書き出しオプション",
  },
};
