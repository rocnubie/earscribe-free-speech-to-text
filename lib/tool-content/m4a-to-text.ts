import type { ToolLocale } from "@/lib/site-routes";
import type { ToolGuide } from "@/lib/tool-page-seo";
import type { ToolPageDefinition } from "@/lib/tool-pages";

const image = "/screenshots/02-transcript-showcase.webp";

export const M4A_TO_TEXT_PAGE: ToolPageDefinition = {
  slug: "m4a-to-text",
  resultTab: "transcript",
  copy: {
    en: {
      title: "Free M4A to text converter in your browser",
      metaTitle: "M4A to text: free, drop the file, no upload | EarScribe",
      description:
        "M4A to text in the browser: iPhone memos are already .m4a — AAC or Apple Lossless — and both decode to the same samples. Converting first only loses quality.",
      eyebrow: "M4A to text converter",
      intro:
        "M4A is the format behind iPhone Voice Memos, Zoom's audio-only recordings and many recorder apps. Choose the .m4a file as it is: EarScribe decodes it in your browser, creates timestamped text, and lets you check each line against the recording before you export.",
      benefits: [
        "No conversion to MP3 or WAV first",
        "Click a timestamp to replay that part",
        "Export TXT, SRT, VTT or JSON",
      ],
      workflowTitle: "Drop the .m4a as it is, then read the names",
      workflow: [
        { title: "Find the .m4a file", body: "Voice memos, Zoom audio-only files and recorder exports can be selected directly. On iPhone, save the recording to Files first so the browser can open it." },
        { title: "Keep the recommended model", body: "The balanced model suits most spoken M4A recordings. Choose a smaller one on older phones or for very long files." },
        { title: "Check and export", body: "Search for names and numbers, replay the matching timestamps, fix the wording, then copy the text or export a file." },
      ],
      tipsTitle: "Getting clean text from M4A recordings",
      tips: [
        "An M4A recorded as Apple Lossless is far larger than a standard one; long lossless files are easier to handle as a compressed copy.",
        "Keep the phone or recorder close to the person speaking. Distance costs more accuracy than the file format does.",
        "Trim long silence at the start and end of a recording to save memory on long files.",
      ],
      faq: [
        { q: "What is an M4A file?", a: "An M4A file is an MPEG-4 container that holds audio only, usually compressed with AAC. It is the same container as MP4 video, which is why some apps label it audio/mp4." },
        { q: "Do I need to convert M4A to MP3 before transcribing?", a: "No. Browsers decode the AAC audio in an M4A file directly, and converting between two compressed formats cannot add back detail. Select the original file." },
        { q: "Why won't my M4A file open?", a: "Most M4A files use AAC and open in every major browser. Files encoded with Apple Lossless may not decode in every browser, and copy-protected .m4p purchases cannot be decoded at all. Export a standard AAC copy and try again." },
        { q: "Can I turn an M4A into subtitles?", a: "Yes. After checking the transcript, export SRT or VTT; each cue keeps the timing of the original recording." },
      ],
      screenshotAlt: "Timestamped transcript of an M4A recording with waveform and export controls",
    },
    "zh-CN": {
      title: "免费的 m4a 转文字：录音拖进浏览器就出文字稿",
      description: "把 iPhone 语音备忘录、安卓录音 App、微信里导出的 m4a 转成带时间戳的文字稿。文件不上传、不用注册，可导出 TXT、SRT、VTT 或 JSON。",
      eyebrow: "m4a 转文字",
      intro: "iPhone 语音备忘录、安卓的录音 App、Zoom 的纯音频录制，存下来的大多是 .m4a。不用先转格式，把文件直接选进来：EarScribe 在浏览器里解码、转写，给你一份带时间戳的文字，导出前还能点着时间戳一句句回听。",
      benefits: ["不用先转成 MP3 或 WAV", "点时间戳回听那一句", "导出 TXT、SRT、VTT 或 JSON"],
      workflowTitle: "三步把 m4a 转成文字",
      workflow: [
        { title: "先把 .m4a 拿到手", body: "语音备忘录、Zoom 纯音频、录音 App 的导出文件都能直接选。iPhone 上先在语音备忘录里点分享、存到“文件”App，浏览器才读得到；安卓和微信里的录音，同样先存成文件再选。" },
        { title: "先用推荐的模型", body: "大多数 m4a 人声录音用均衡模型就够。旧手机，或者一两个小时的录音，换小一号的模型更稳。" },
        { title: "核对，再导出", body: "搜一下人名和数字，点时间戳回听对不上的地方，改完复制文字，或者导出成文件。" },
      ],
      tipsTitle: "让 m4a 录音转得更准",
      tips: [
        "用“无损”录的 m4a 比普通的胖好几倍。长录音先另存一份压缩版，处理起来更快，也不容易吃满内存。",
        "录音时把手机放近说话的人。距离对准确率的影响，比文件是什么格式大得多。",
        "开头和结尾的大段静音剪掉，处理长文件时能省下不少内存。",
      ],
      faq: [
        { q: "m4a 到底是什么格式？", a: "它是一种只装音频的文件壳子（MPEG-4 容器），里面通常是 AAC 压缩音频，也可能是 Apple Lossless。它和 MP4 视频用的是同一种容器，所以有些软件会把它显示成 audio/mp4。" },
        { q: "要先把 m4a 转成 mp3 吗？", a: "不用。浏览器能直接解码 m4a 里的 AAC；在两种有损格式之间倒一遍，丢掉的东西回不来。直接选原文件。" },
        { q: "为什么我的 m4a 打不开？", a: "大部分 m4a 是 AAC，主流浏览器都能开。用 Apple Lossless 存的，不一定每个浏览器都解得动；从商店买来的 .m4p 带版权保护，完全解不了。另存一份普通 AAC 的再试。" },
        { q: "能把 m4a 直接做成字幕吗？", a: "可以。核对完导出 SRT 或 VTT，每条字幕都带着原录音里的时间。" },
      ],
      screenshotAlt: "m4a 录音转出的带时间戳文字稿，旁边是波形和导出按钮",
    },
    ja: {
      title: "無料の m4a 文字起こし：録音ファイルをブラウザで文字に",
      description: "iPhoneのボイスメモ、Androidの録音アプリ、Zoomの音声ファイルなど、.m4aをそのまま文字起こし。アップロードも登録も不要で、TXT・SRT・VTT・JSONに書き出せます。",
      eyebrow: "m4a 文字起こし",
      intro: "iPhoneのボイスメモ、Androidの録音アプリ、Zoomの音声のみの録音。手元にある.m4aは、たいていこのどれかが作ったファイルです。形式を変えずに選ぶだけで、EarScribeがブラウザ内でデコードして文字起こしし、タイムスタンプ付きのテキストにします。書き出す前に、気になる行を再生して聞き直せます。",
      benefits: ["MP3やWAVへの変換は不要", "タイムスタンプから該当箇所を再生", "TXT・SRT・VTT・JSONに書き出し"],
      workflowTitle: "m4aを文字起こしする3ステップ",
      workflow: [
        { title: ".m4aを手元に用意する", body: "ボイスメモ、Zoomの音声ファイル、録音アプリの書き出しはそのまま選べます。iPhoneなら、ボイスメモで共有して「ファイル」に保存してから開いてください。Androidやアプリ内の録音も、まずファイルとして保存します。" },
        { title: "まずはおすすめのモデルで", body: "話し声中心の.m4aなら、バランス型のモデルで十分です。古い端末や1〜2時間の長い録音では、一つ小さいモデルを選ぶと安定します。" },
        { title: "確認してから書き出す", body: "人名や数字を検索し、タイムスタンプから該当箇所を聞き直して直します。終わったらコピーするか、ファイルに書き出します。" },
      ],
      tipsTitle: "m4aの文字起こしをきれいに仕上げるコツ",
      tips: [
        "「ロスレス」で録ったm4aは通常の数倍の大きさになります。長い録音は圧縮版を書き出してから処理すると、メモリ不足になりにくくなります。",
        "スマートフォンや録音機は、話す人の近くに置いてください。形式よりも距離のほうが精度に効きます。",
        "冒頭と末尾の長い無音を切っておくと、長いファイルでもメモリを節約できます。",
      ],
      faq: [
        { q: "m4aはどんなファイルですか？", a: "音声だけを入れるためのファイルの入れ物（MPEG-4コンテナ）で、中身はたいていAACの圧縮音声、Apple Losslessのこともあります。MP4動画と同じコンテナなので、audio/mp4と表示するアプリもあります。" },
        { q: "先にMP3へ変換したほうがいいですか？", a: "いいえ。ブラウザはm4aのAACをそのままデコードできます。圧縮形式どうしで変換し直しても、失われた情報は戻りません。元のファイルを選んでください。" },
        { q: "m4aが開けないときは？", a: "ほとんどのm4aはAACで、主要なブラウザなら開けます。Apple Losslessで保存したものはブラウザによってはデコードできず、購入した.m4pは著作権保護がかかっていて再生できません。通常のAACで保存し直してからお試しください。" },
        { q: "m4aから字幕を作れますか？", a: "はい。文字を確認したあとSRTかVTTで書き出してください。各字幕に元の録音のタイミングが残ります。" },
      ],
      screenshotAlt: "m4aの録音から作ったタイムスタンプ付きの文字起こしと、波形・書き出しボタン",
    },
  },
};

export const M4A_TO_TEXT_GUIDES: Record<ToolLocale, ToolGuide> = {
  en: {
    primaryKeyword: "m4a to text",
    supportingKeywords: [
      "transcribe m4a file",
      "iphone voice memo to text",
      "m4a transcription free",
    ],
    // The page's point: an .m4a from a phone is a recording, not a format to fix.
    // Converting it again is the one thing that measurably costs quality.
    guideTitle: "M4A to text: what is inside the file before you convert it",
    guideIntro:
      "An .m4a is an MP4 container holding either AAC or Apple Lossless, and the two differ by size, not by what the model hears. Converting one into WAV first measures as a second generation of loss: on our clip the AAC re-encode moved the samples by −29.7 dBFS while the lossless copies stayed below −94.",
    sections: [
      {
        title: "AAC or Apple Lossless, and why it matters only for size",
        paragraphs: [
          "iPhone Voice Memos writes .m4a either way: AAC when the quality setting is compressed, Apple Lossless when it is lossless. Both are decoded to the same 16 kHz mono samples before transcription, so the difference is disk and decode time, not accuracy.",
          "The measured spread is real but sits in the size column: on the same 34-second clip, compressed AAC came out at 0.93 MB per minute and Apple Lossless at 4.71 — the same samples, five times the file.",
        ],
        table: {
          caption:
            "Five encodings of the same clip, decoded back to 16 kHz mono float. “Drift” is the largest single-sample difference against the source decode; below about −60 dBFS is inaudible.",
          source: "content/guides/data/container-formats.json",
          columns: ["Encoding", "Per minute", "Hours under 1 GB", "Drift"],
          rows: [
            ["MP3 64 kbps (source)", "0.48 MB", "37.2 h", "—"],
            ["AAC 128 kbps in .m4a", "0.93 MB", "19.3 h", "−29.7 dBFS"],
            ["AAC 96 kbps in .m4a", "0.70 MB", "25.6 h", "−26.0 dBFS"],
            ["ALAC in .m4a", "4.71 MB", "3.8 h", "−136.3 dBFS"],
            ["WAV 16-bit", "5.29 MB", "3.4 h", "−94.6 dBFS"],
          ],
        },
      },
      {
        title: "What converting costs, in decibels",
        paragraphs: [
          "Re-encoding is not a repair. The AAC rows above were made from an already-lossy MP3, and the re-encode moved the decoded samples by roughly −27 dBFS — audible as a difference, even if it is hard to hear which one is “worse”.",
          "The lossless rows are the other side of the same measurement: WAV and ALAC drift by −94 and −136 dBFS, which is quantisation noise, not a generation of loss. Converting an .m4a to WAV changes nothing the model reads and makes the file five times larger.",
        ],
      },
      {
        title: "What to do with a Voice Memo that is too long",
        paragraphs: [
          "Length, not quality, is what stops a recording. A lossless .m4a reaches the 1 GB ceiling at 3.8 hours; the compressed setting reaches 19.3, which is longer than any memo anyone has listened to.",
          "If a lossless memo is over the line and you still have the phone, re-export it with the compressed setting — that is a lossy step, but it beats splitting a four-hour file into two.",
        ],
      },
    ],
    checklistTitle: "Before an .m4a reaches the model",
    checklist: [
      {
        title: "Do not convert it first",
        body: "The .m4a decodes natively. Converting to WAV first adds 5× the bytes and, if the target is lossy, another generation of loss.",
      },
      {
        title: "Check which setting recorded it",
        body: "Lossless memos are 4.71 MB per minute and hit the ceiling at 3.8 hours; compressed ones are 0.93 and never get close.",
      },
      {
        title: "Keep the original .m4a",
        body: "It is the only copy that has not been through a second encoder. If a name is wrong later, this is what settles it.",
      },
    ],
    limitsTitle: "Where an .m4a stops working",
    limits: [
      "A file that is really an MP4 with a video track is accepted, but only the audio track is decoded — anything written on screen never reaches the transcript.",
      "Past roughly two hours the peak memory estimate passes 3.3 GB regardless of how small the .m4a is.",
    ],
    imageSrc: "/screenshots/guides/model-picker.webp",
    imageAlt: "M4A to text: the model picker showing the download before a run",
    workflowImageSrc: "/screenshots/guides/pre-run.webp",
  },
  "zh-CN": {
    primaryKeyword: "m4a 转文字",
    supportingKeywords: ["m4a 转文字 免费", "m4a 转文字 在线", "m4a 录音转文字", "m4a 文件转文字"],
    guideTitle: "m4a 转文字之前，先看清这个文件里装的是什么",
    guideIntro: "一个 .m4a 是 MPEG-4 的音频壳子，里面多数是 AAC，也可能是 Apple Lossless。两种装法解码出来是同一批采样，差的只是体积。同一段 34 秒录音，AAC 重编一次就偏了 −29.7 dBFS，无损的几种都压在 −94 以下。所以该做的不是转格式，而是把文件原样选进来。",
    sections: [
      {
        title: "壳子、编码、扩展名，是三件事",
        paragraphs: [
          "m4a 不是一种编码，而是一种装音频的文件壳子（MPEG-4 容器）：壳子里可以放 AAC，也可以放 Apple Lossless。iPhone 语音备忘录两种都会写——音质设成“压缩”就写 AAC，设成“无损”就写 Apple Lossless。EarScribe 会把两种都解码成同样的 16 kHz 单声道采样再交给模型，所以它们只影响文件大小和读取时间，不影响准确率。",
          "体积上的差别倒是实打实：同一段 34 秒录音，压缩的 AAC 每分钟 0.93 MB，Apple Lossless 每分钟 4.71 MB——同样的声音，五倍的文件。",
          ".m4p 是另一回事。它是从商店买来的、带版权保护的音频，浏览器解不了，换哪个工具都解不了。这不是 bug，换一个没有保护的文件就行。",
        ],
        table: {
          caption:
            "同一段录音的五种存法，都解码回 16 kHz 单声道 float。最后一列的“偏差”是对照原始解码的最大单采样差，低于约 −60 dBFS 就听不出来了。",
          source: "content/guides/data/container-formats.json",
          columns: ["编码", "每分钟", "1 GB 可存时长", "偏差"],
          rows: [
            ["MP3 64 kbps（源文件）", "0.48 MB", "37.2 h", "—"],
            [".m4a 里的 AAC 128 kbps", "0.93 MB", "19.3 h", "−29.7 dBFS"],
            [".m4a 里的 AAC 96 kbps", "0.70 MB", "25.6 h", "−26.0 dBFS"],
            [".m4a 里的 ALAC（Apple 无损）", "4.71 MB", "3.8 h", "−136.3 dBFS"],
            ["WAV 16-bit", "5.29 MB", "3.4 h", "−94.6 dBFS"],
          ],
        },
      },
      {
        title: "转成 WAV 或 MP3，只会多丢一次",
        paragraphs: [
          "重新编码不是修复。上表里 AAC 那两行是从一个已经有损的 MP3 转出来的，转一次就让解码后的采样偏了约 −27 dBFS——听得出有差别，只是很难说哪个“更差”。",
          "无损那两行是同一次测量的另一头：WAV 偏 −94.6 dBFS，ALAC 偏 −136.3 dBFS，这是量化噪声，不是又丢了一代。把 .m4a 转成 WAV，模型读到的东西一点没变，文件却大了五倍。",
          "何况 EarScribe 反正会先把所有文件重采样成 16 kHz 单声道。16 kHz 保留到 8 kHz，人声的清晰度都在这段范围里，也正是 Whisper 训练时用的采样率。",
        ],
      },
      {
        title: "录音太长时，卡住你的是时长不是音质",
        paragraphs: [
          "单个文件上限 1 GiB。按上表的体积算，无损的 .m4a 大约 3.8 小时就顶到天花板，压缩的能撑到 19.3 小时——后者比任何人听过的语音备忘录都长。",
          "如果无损那条已经超了，而手机还在你手上：把音质改成“压缩”重新导出一次再转。这一步确实有损，但总比把一个四小时的文件劈成两半要好。",
          "安卓这边省事一些，录音 App 和通话录音大多默认就是 m4a 或 mp3，直接选即可。微信里收到的语音，先转存成文件再拖进来，能不转格式就别转。",
        ],
      },
      {
        title: "这个页面不做的事",
        paragraphs: [
          "没有说话人分离：文字稿只知道谁说了什么，不知道是两个人里的哪一位。需要区分的时候，在核对阶段自己标上名字。也不翻译，中文录音出中文，英文录音出英文。更没有实时字幕——它处理的是已经录好的文件，不是正在说的话。",
        ],
      },
    ],
    checklistTitle: "把一个 .m4a 交给模型之前",
    checklist: [
      { title: "别先转格式", body: ".m4a 能直接解码。先转成 WAV 只会让文件大五倍；转成有损格式，还会再丢一代。" },
      { title: "看清是哪种音质录的", body: "无损的每分钟 4.71 MB，3.8 小时就顶到 1 GiB；压缩的每分钟 0.93 MB，基本不用担心。" },
      { title: "留好原始文件", body: "它是唯一没进过第二个编码器的版本。日后发现人名错了，靠它才能说清。" },
    ],
    limitsTitle: "m4a 在这里会卡住的地方",
    limits: [
      "带视频轨的 MP4 也能直接转写：只解码音轨，屏幕上出现的文字不会进文字稿。",
      "录音超过两小时左右，峰值内存估计会超过 3.3 GB，跟 .m4a 本身多小没关系。",
      "带版权保护的 .m4p 无法解码，先换成没有保护的 AAC 版本。",
    ],
    imageSrc: image,
    imageAlt: "m4a 录音转成可编辑、带时间戳的文字稿",
    workflowImageSrc: "/screenshots/guides/pre-run.webp",
  },
  ja: {
    primaryKeyword: "m4a 文字起こし",
    supportingKeywords: ["m4a 文字起こし 無料", "m4a テキスト 変換", "m4a 録音 文字起こし", "m4a 文字起こし オンライン"],
    guideTitle: "m4a 文字起こしの前に、ファイルの中身を確かめる",
    guideIntro: ".m4aはMPEG-4の音声コンテナで、中身はAACかApple Losslessです。どちらもデコードすれば同じサンプルになるので、違いは容量だけ。同じ34秒の音源で、AACに再エンコードするとサンプルが−29.7 dBFSずれ、ロスレスのままなら−94 dBFSより下に収まりました。だから変換せず、そのまま選ぶのが正解です。",
    sections: [
      {
        title: "コンテナとコーデックと拡張子は別もの",
        paragraphs: [
          ".m4aはコーデックではなく、音声を入れるためのコンテナ（入れ物）です。中にAACを入れることも、Apple Losslessを入れることもできます。iPhoneのボイスメモは、音質を「圧縮」にすればAAC、「ロスレス」にすればApple Losslessで書き出します。EarScribeはどちらも16 kHzのモノラルにデコードしてからモデルに渡すので、違いはファイルの大きさと読み込み時間だけで、精度は変わりません。",
          "容量の差ははっきり出ます。同じ34秒の音源で、圧縮AACは1分あたり0.93 MB、Apple Losslessは4.71 MB。同じ音が5倍のファイルになっているだけです。",
          ".m4pは別物です。ストアで購入した著作権保護付きの音声で、ブラウザではデコードできません。ツールの問題ではないので、保護のないファイルを用意してください。",
        ],
        table: {
          caption:
            "同じ音源を5通りで保存し、16 kHzモノラルのfloatに戻して比べたもの。「ずれ」は元のデコードに対する1サンプルあたりの最大差で、およそ−60 dBFSより下は聞き取れません。",
          source: "content/guides/data/container-formats.json",
          columns: ["エンコード", "1分あたり", "1 GBに収まる時間", "ずれ"],
          rows: [
            ["MP3 64 kbps（元ファイル）", "0.48 MB", "37.2 h", "—"],
            [".m4a内のAAC 128 kbps", "0.93 MB", "19.3 h", "−29.7 dBFS"],
            [".m4a内のAAC 96 kbps", "0.70 MB", "25.6 h", "−26.0 dBFS"],
            [".m4a内のALAC（Apple Lossless）", "4.71 MB", "3.8 h", "−136.3 dBFS"],
            ["WAV 16-bit", "5.29 MB", "3.4 h", "−94.6 dBFS"],
          ],
        },
      },
      {
        title: "変換すると、何が失われるのか",
        paragraphs: [
          "再エンコードは修復ではありません。上のAACの2行は、すでに非可逆のMP3から作ったもので、変換のたびにサンプルが約−27 dBFSずれます。差としては聞き取れても、どちらが「悪い」とは言いにくい種類のずれです。",
          "ロスレスの2行は同じ測定の反対側で、WAVが−94.6 dBFS、ALACが−136.3 dBFS。これは量子化ノイズで、損失がもう一世代増えたわけではありません。.m4aをWAVにしてもモデルが読む内容は変わらず、ファイルだけが5倍になります。",
          "そもそもEarScribeは、どのファイルも16 kHzのモノラルに揃えてから処理します。16 kHzなら8 kHzまで残り、話し言葉の聞き取りやすさはこの範囲に収まっています。Whisperもこのレートで学習しています。",
        ],
      },
      {
        title: "長い録音で問題になるのは、長さのほう",
        paragraphs: [
          "1ファイルの上限は1 GiBです。上の表の容量で計算すると、ロスレスの.m4aは3.8時間ほどで上限に届き、圧縮なら19.3時間まで入ります。そこまで長いボイスメモを最後まで聞く人はいませんが、録りっぱなしの会議なら現実的な数字です。",
          "ロスレスのメモが上限を超えていて、まだ端末が手元にあるなら、音質を「圧縮」にして書き出し直してください。非可逆の一手間にはなりますが、4時間のファイルを2つに割るよりはましです。",
          "Androidの録音アプリや通話録音は、最初からm4aかmp3のことがほとんどなので、そのまま選べます。",
        ],
      },
      {
        title: "このページでできないこと",
        paragraphs: [
          "話者分離はありません。誰が話したかまでは分からないので、必要なときは確認の段階で名前を書き足してください。翻訳もしません。日本語の録音は日本語のまま、英語なら英語のまま文字になります。リアルタイム字幕でもなく、すでに録音されたファイルを処理するツールです。",
        ],
      },
    ],
    checklistTitle: "m4aをモデルに渡す前に",
    checklist: [
      { title: "変換しない", body: ".m4aはそのままデコードできます。WAVにすると容量が5倍になり、非可逆形式にすると損失がもう一世代増えます。" },
      { title: "録音時の音質設定を見る", body: "ロスレスは1分4.71 MBで3.8時間、圧縮なら1分0.93 MBで上限にはまず届きません。" },
      { title: "元のファイルを残す", body: "二度目のエンコーダを通っていない唯一のコピーです。人名の誤りを確かめる根拠になります。" },
    ],
    limitsTitle: "m4aでつまずくところ",
    limits: [
      "映像トラック付きのMP4もそのまま文字起こしできます。デコードするのは音声トラックだけで、画面に映った文字は入りません。",
      "2時間を超えるあたりから、.m4aがどれだけ小さくてもピークメモリの見積もりは3.3 GBを超えます。",
      "著作権保護された.m4pはデコードできません。保護のないAACで書き出し直してください。",
    ],
    imageSrc: image,
    imageAlt: "m4aの録音から作った、編集できるタイムスタンプ付きテキスト",
    workflowImageSrc: "/screenshots/guides/pre-run.webp",
  },
};
