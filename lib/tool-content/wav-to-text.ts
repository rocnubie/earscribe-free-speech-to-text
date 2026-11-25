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
      metaTitle: "WAV to text: how many minutes fit in 1 GB | EarScribe",
      description:
        "WAV to text in your browser, free: at 44.1 kHz stereo 1 GB is 101 minutes, at 96 kHz 24-bit it is 31. Record lower, split the file, or transcribe as it is.",
      eyebrow: "WAV to text converter",
      intro:
        "WAV is what field recorders, DAWs and Audacity produce: uncompressed and large. EarScribe reads the WAV on your own device, so a big file never has to be uploaded, and turns it into timestamped text you can check and export.",
      benefits: [
        "Large WAV files stay on your device",
        "Timestamped segments you can replay",
        "Export TXT, SRT, VTT or JSON",
      ],
      workflowTitle: "Read the header before you read the transcript",
      workflow: [
        { title: "Check the header, not just the size", body: "An hour of CD-quality stereo is 635 MB; a 96 kHz, 24-bit recorder writes 34.56 MB per minute and hits the 1 GB ceiling in 31 minutes." },
        { title: "Resample only if you still have the source", body: "16 kHz mono is where the model ends up, and exporting there turns 10.58 MB per minute into 1.92. Without the source, split the file instead." },
        { title: "Read for names, then export", body: "The WAV does not change what the model hears, so the review is the same as any other format: names, negations, numbers, then export." },
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
    supportingKeywords: [
      "transcribe wav file",
      "wav transcription free",
      "wav too large to transcribe",
    ],
    // WAV's own problem is arithmetic: how many minutes fit under the ceiling.
    guideTitle: "WAV to text: the ceiling is size, not format",
    guideIntro:
      "Field recorders and DAWs write uncompressed audio, so the file reaches the 1 GB limit long before the model becomes the problem. At 44.1 kHz, 16-bit stereo that is 101 minutes of audio; at 96 kHz, 24-bit it is 31.",
    sections: [
      {
        title: "How many minutes fit under 1 GB",
        paragraphs: [
          "The limit is the file, not the duration: the app refuses anything over 1 GB before it decodes a single sample. Because WAV size is rate × depth × channels, the same ceiling buys very different amounts of recording depending on how the recorder was set.",
        ],
        table: {
          caption:
            "Arithmetic from the app's 1 GB file limit and the header of each WAV, not a benchmark: sample rate × bytes per sample × channels × 60.",
          source: "content/guides/data/wav-ceiling.json",
          columns: ["Recording format", "Per minute", "Minutes under 1 GB"],
          rows: [
            ["44.1 kHz, 16-bit, stereo", "10.58 MB", "101 min"],
            ["48 kHz, 16-bit, stereo", "11.52 MB", "93 min"],
            ["44.1 kHz, 16-bit, mono", "5.29 MB", "202 min"],
            ["96 kHz, 24-bit, stereo", "34.56 MB", "31 min"],
          ],
        },
      },
      {
        title: "Why a smaller file is not a worse transcript",
        paragraphs: [
          "Every input is resampled to 16 kHz mono before the model sees it — 3.84 MB of samples per minute, regardless of what came in. A 40-minute WAV and a 40-minute MP3 therefore arrive at the model as the same 154 MB.",
          "What changes is the decode: a 96 kHz file has to be read and downsampled first, so it costs time and memory for information the model discards. Above 8 kHz there is nothing left to keep.",
        ],
      },
      {
        title: "What to change if the file is over the limit",
        paragraphs: [
          "If the file is a speech recording and you still have the source, export it again at 16 kHz mono — that is where the model ends up anyway, and it turns 10.58 MB per minute into 1.92.",
          "If you only have the recording, two options work: split it at a song or session boundary and transcribe each part, or export it as M4A, which at 128 kbps is 0.93 MB per minute and fits 19.3 hours under the same ceiling.",
        ],
      },
    ],
    checklistTitle: "Before the text leaves the tab",
    checklist: [
      {
        title: "Check the header first",
        body: "A recorder set to 96 kHz, 24-bit burns through the ceiling in 31 minutes. The sample rate is visible in any file inspector and decides everything on this page.",
      },
      {
        title: "Keep the original WAV",
        body: "It is the master. Export a smaller copy for the browser, keep the uncompressed file as the thing you can re-decode later.",
      },
      {
        title: "Do not upsample to fix a bad take",
        body: "Resampling a clipped or noisy recording up to 96 kHz adds no information the model can use; it only makes the file larger.",
      },
    ],
    limitsTitle: "Where a large WAV stops working",
    limits: [
      "The 1 GB ceiling is a file limit, not a duration limit: a 44.1 kHz 16-bit mono file gets 202 minutes, a 96 kHz 24-bit stereo file only 31.",
      "Past roughly two hours of any format the peak memory estimate passes 3.3 GB, so splitting the recording is the way through.",
    ],
    imageSrc: "/screenshots/guides/pre-run.webp",
    imageAlt: "WAV to text: the pre-run estimate before a large file is decoded",
    workflowImageSrc: "/screenshots/guides/transcript-result-top.webp",
  },
  "zh-CN": {
    primaryKeyword: "wav转文字",
    supportingKeywords: ["wav转文字 免费", "wav录音转文字", "wav文件转文字", "wav转文字 在线"],
    guideTitle: "WAV 转文字：先算体积，再看准确率",
    guideIntro:
      "录音笔、剪辑软件和 Audacity 导出的 WAV 不压缩，文件往往在模型撑不住之前就先撞上 1 GB 上限。44.1 kHz、16-bit 立体声只放得下 101 分钟，96 kHz、24-bit 只剩 31 分钟。",
    sections: [
      {
        title: "1 GB 里能放多少分钟",
        paragraphs: [
          "先卡住你的是文件，不是时长：超过 1 GB 的文件，在解码第一个采样点之前就会被拒绝。WAV 的体积等于采样率 × 位深 ÷ 8 × 声道数，所以同一个上限能换到多少分钟，完全看录音时怎么设的。",
        ],
        table: {
          caption:
            "按应用 1 GB 的文件上限和每个 WAV 的文件头算出来的，不是实测：采样率 × 每采样字节数 × 声道数 × 60。",
          source: "content/guides/data/wav-ceiling.json",
          columns: ["录音格式", "每分钟", "1 GB 内可放"],
          rows: [
            ["44.1 kHz、16-bit、立体声", "10.58 MB", "101 分钟"],
            ["48 kHz、16-bit、立体声", "11.52 MB", "93 分钟"],
            ["44.1 kHz、16-bit、单声道", "5.29 MB", "202 分钟"],
            ["96 kHz、24-bit、立体声", "34.56 MB", "31 分钟"],
          ],
        },
      },
      {
        title: "文件小了，文字不会变差",
        paragraphs: [
          "不管丢进来的是什么格式，进模型之前都会被重采样成 16 kHz 单声道，每分钟 3.84 MB 的样本——40 分钟的 WAV 和 40 分钟的 MP3，到了模型那里都是同样的 154 MB。",
          "变的只是解码：96 kHz 的文件要先整体读一遍再降采样，花掉的时间和内存，换来的多是模型随后就丢掉的信息。8 kHz 以上的内容，对识别结果没有影响。",
        ],
      },
      {
        title: "超过 1 GB 之后怎么办",
        paragraphs: [
          "如果原始工程还在，直接按 16 kHz 单声道重新导出：模型本来就要转到这个格式，每分钟体积也从 10.58 MB 降到 1.92 MB。",
          "只剩成品文件的话有两条路。按歌曲或会议间隙切开，分段转写；或者导出成 128 kbps 的 M4A，每分钟 0.93 MB，同一个上限能装 19.3 小时。",
          "素材是视频也不用先转 WAV：mp4、m4v、mov、qt、mkv、webm、ts、m2ts 都能直接拖进来，音轨在浏览器里提取完，走的是同一条转写流程。",
        ],
        table: {
          caption: "同一段 40 分钟录音换几种存法之后的大小，按每分钟体积乘 40 算出来。",
          columns: ["存法", "每分钟", "40 分钟"],
          rows: [
            ["44.1 kHz、16-bit、立体声 WAV", "10.58 MB", "423 MB"],
            ["96 kHz、24-bit、立体声 WAV", "34.56 MB", "1,382 MB"],
            ["16 kHz、16-bit、单声道 WAV", "1.92 MB", "77 MB"],
            ["M4A、128 kbps", "0.93 MB", "37 MB"],
          ],
        },
      },
    ],
    checklistTitle: "文字导出之前，先过一遍",
    checklist: [
      {
        title: "先看文件头",
        body: "录音笔设在 96 kHz、24-bit，31 分钟就把 1 GB 用完了。采样率在文件属性里就能看到，这一页的结论都由它决定。",
      },
      {
        title: "原始 WAV 留着",
        body: "它是母版。给浏览器的是小副本，不压缩的原文件留着，以后还能重新解码。",
      },
      {
        title: "别用升采样救一段坏录音",
        body: "把削波或嘈杂的录音升到 96 kHz，不会多出模型用得上的信息，只会让文件更大。",
      },
      {
        title: "切段后记下偏移",
        body: "只要副本从同一秒开始，后面几段的时间戳加上偏移量，就能对回原文件。",
      },
    ],
    limitsTitle: "大 WAV 会卡在哪里",
    limits: [
      "1 GB 是文件上限，不是时长上限：44.1 kHz、16-bit 单声道能放 202 分钟，96 kHz、24-bit 立体声只有 31 分钟。",
      "任何格式超过两小时左右，峰值内存估算就会超过 3.3 GB，长录音只能拆开处理。",
      "不做说话人分离、不翻译、也不做实时字幕；多轨录音要先混音，或者每条轨道单独导出。",
    ],
    imageSrc: image,
    imageAlt: "WAV 录音转成的带时间戳文字稿和导出选项",
  },
  ja: {
    primaryKeyword: "wav 文字起こし",
    supportingKeywords: ["wav 文字起こし 無料", "wav テキスト変換", "wav 文字起こし ai", "録音 wav 文字起こし"],
    guideTitle: "WAV 文字起こし：1 GB に入る長さから考える",
    guideIntro:
      "録音機やDAWが書き出すWAVは非圧縮なので、モデルの限界より先に1 GBの上限に届きます。44.1 kHz・16-bitのステレオで101分、96 kHz・24-bitなら31分しか入りません。",
    sections: [
      {
        title: "1 GB に入るのは何分か",
        paragraphs: [
          "先に止まるのは長さではなくファイルです。1 GBを超えた時点で、1サンプルもデコードせずに受け付けません。WAVのサイズはサンプリングレート × ビット深度 ÷ 8 × チャンネル数で決まるので、同じ上限でも録音時の設定しだいで入る長さは大きく変わります。",
        ],
        table: {
          caption:
            "アプリの1 GB上限と各WAVのヘッダーから計算した値で、実測ではありません：サンプリングレート × 1サンプルのバイト数 × チャンネル数 × 60。",
          source: "content/guides/data/wav-ceiling.json",
          columns: ["録音形式", "1分あたり", "1 GB に入る長さ"],
          rows: [
            ["44.1 kHz・16-bit・ステレオ", "10.58 MB", "101 分"],
            ["48 kHz・16-bit・ステレオ", "11.52 MB", "93 分"],
            ["44.1 kHz・16-bit・モノラル", "5.29 MB", "202 分"],
            ["96 kHz・24-bit・ステレオ", "34.56 MB", "31 分"],
          ],
        },
      },
      {
        title: "ファイルが小さくても精度は落ちない",
        paragraphs: [
          "どの形式で入れても、モデルに渡す前に16 kHzモノラルへ変換されます。サンプルは1分あたり3.84 MBなので、40分のWAVも40分のMP3も、モデルから見れば同じ154 MBです。",
          "変わるのはデコードの手間だけです。96 kHzのファイルは全体を読み込んで間引く必要があり、その時間とメモリを使っても、モデルは8 kHzより上の情報を捨ててしまいます。",
        ],
      },
      {
        title: "1 GB を超えたときの対処",
        paragraphs: [
          "編集前のデータが残っているなら、16 kHzモノラルで書き出し直すのが一番早い方法です。モデルが最終的に使う形式そのもので、1分あたり10.58 MBが1.92 MBになります。",
          "書き出したファイルしかない場合は2つです。曲や会議の切れ目で分割して個別に文字起こしするか、128 kbpsのM4Aに変換するか。M4Aは1分あたり0.93 MBなので、同じ上限で19.3時間入ります。",
          "素材が動画でもWAVに変換する必要はありません。mp4・m4v・mov・qt・mkv・webm・ts・m2tsはそのままドロップでき、音声トラックはブラウザ内で取り出して同じ文字起こしに流れます。",
        ],
        table: {
          caption: "同じ40分の録音を保存形式ごとに比べたサイズ。1分あたりの値を40倍した計算値です。",
          columns: ["保存形式", "1分あたり", "40分"],
          rows: [
            ["44.1 kHz・16-bit・ステレオ WAV", "10.58 MB", "423 MB"],
            ["96 kHz・24-bit・ステレオ WAV", "34.56 MB", "1,382 MB"],
            ["16 kHz・16-bit・モノラル WAV", "1.92 MB", "77 MB"],
            ["M4A・128 kbps", "0.93 MB", "37 MB"],
          ],
        },
      },
    ],
    checklistTitle: "書き出す前のチェック",
    checklist: [
      {
        title: "ファイルヘッダーを先に見る",
        body: "96 kHz・24-bitに設定した録音機は31分で1 GBに達します。サンプリングレートはファイルの情報で確認でき、このページの数字はすべてそこから決まります。",
      },
      {
        title: "元のWAVは残す",
        body: "マスターです。ブラウザには小さいコピーを渡し、非圧縮の元ファイルは後からデコードし直せる形で保管します。",
      },
      {
        title: "悪い録音をアップサンプリングで直さない",
        body: "歪んだ音や雑音の多い録音を96 kHzにしても、モデルが使える情報は増えず、ファイルだけが大きくなります。",
      },
      {
        title: "分割したら開始位置を記録する",
        body: "2本目以降は冒頭のオフセットを足せば、元ファイルのタイムスタンプに戻せます。",
      },
    ],
    limitsTitle: "大きなWAVが止まるところ",
    limits: [
      "1 GBはファイルの上限で、長さの上限ではありません。44.1 kHz・16-bitのモノラルなら202分、96 kHz・24-bitのステレオなら31分です。",
      "どの形式でも2時間を超えるあたりでピークメモリの見積もりが3.3 GBを超えるため、長い録音は分割が必要です。",
      "話者分離・翻訳・リアルタイム字幕には対応していません。マルチトラックはミックスダウンするか、トラックごとに書き出してください。",
    ],
    imageSrc: image,
    imageAlt: "WAV録音のタイムスタンプ付き文字起こしと書き出しオプション",
  },
};
