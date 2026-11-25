import type { ToolLocale } from "@/lib/site-routes";
import type { ToolGuide } from "@/lib/tool-page-seo";
import type { ToolPageDefinition } from "@/lib/tool-pages";

const image = "/screenshots/02-transcript-showcase.webp";

export const MEETING_RECORDING_TO_TEXT_PAGE: ToolPageDefinition = {
  slug: "meeting-recording-to-text",
  resultTab: "transcript",
  copy: {
    en: {
      title: "Transcribe a meeting recording to text for free",
      metaTitle: "Meeting recording to text: what the brackets are | EarScribe",
      description:
        "Meeting recording to text for free: Zoom, Teams and Meet files, the memory an hour of audio needs, and why the bracketed lines are noise rather than minutes.",
      eyebrow: "Meeting recording to text",
      intro:
        "EarScribe works on the recording after the meeting, not as a bot in the call. Choose the audio file, get a timestamped transcript on your device, then search it for decisions, action items and names before you share notes.",
      benefits: [
        "No meeting bot and no upload",
        "Search for decisions and action items",
        "Timestamps to check who said what",
      ],
      workflowTitle: "Get the file, run it, cut the noise",
      workflow: [
        { title: "Get the audio file", body: "Zoom's local recording already includes an M4A beside the MP4. Teams and Google Meet save MP4, so export the audio track first." },
        { title: "Transcribe on your device", body: "An hour decodes to 230 MB of samples; the estimate asks for about 1.6 GB of peak before any word appears." },
        { title: "Turn it into meeting notes", body: "Delete the bracketed lines first, then search the decision verbs — agreed, decided, will send — and replay those four moments." },
      ],
      tipsTitle: "What the minutes always forget",
      tips: [
        "Tell participants the meeting is recorded and transcribed, and follow your organisation's recording policy.",
        "A quiet room is not silent: at −20 dB the model produced five different labels for the same 30 seconds, several of them invented scenery.",
        "EarScribe does not label speakers; add names at the start of important turns while you review.",
      ],
      faq: [
        { q: "Where does Zoom save the audio-only file?", a: "Zoom's local recordings go into a folder under Documents/Zoom that holds the MP4 video and an audio-only M4A. Cloud recordings can also be downloaded as audio only." },
        { q: "How do I get audio from a Teams or Google Meet recording?", a: "Both save MP4 video: Teams to OneDrive or SharePoint, Meet to Google Drive. Download the file, then export the audio. On a Mac, QuickTime Player's File > Export As > Audio Only creates an M4A; with ffmpeg, the command ffmpeg -i meeting.mp4 -vn -c:a copy meeting.m4a copies the audio without re-encoding." },
        { q: "Can it join my meeting and transcribe live?", a: "No. EarScribe has no meeting bot and no live mode; it transcribes a recording you already have." },
        { q: "Can it tell who said what?", a: "Not automatically. The transcript is one timeline; the timestamps let you jump to each change of speaker and add names." },
      ],
      screenshotAlt: "Meeting recording transcript with searchable, timestamped segments",
    },
    "zh-CN": {
      title: "会议录音转文字：MP4、M4A 直接拖进来",
      description:
        "会议录音转文字，免费在浏览器里完成：腾讯会议、飞书、钉钉、企业微信、Zoom 导出的 MP4 或 M4A 都能直接拖入，音轨在本地提取，录音不上传，可导出 TXT、SRT 或 VTT。",
      eyebrow: "会议录音转文字",
      intro:
        "EarScribe 在会后处理你手上的录制文件，不派机器人进会议。MP4 或 M4A 直接拖进来，音轨在你的浏览器里提取，几秒后得到带时间戳的文字稿。有一点要先说清楚：产出是一份文字记录，不是自动生成的会议纪要——决议和待办得你自己从中挑出来。",
      benefits: ["MP4、M4A 直接拖入，不用先转格式", "录音不上传，全程在浏览器里转写", "带时间戳，按时间回听原声"],
      workflowTitle: "导出、拖入，再整理成纪要",
      workflow: [
        { title: "从会议软件导出录制", body: "腾讯会议、飞书、钉钉、企业微信的录制通常导出 MP4（含视频轨），Zoom 本地录制还会多给一个纯音频 M4A。两种都能直接用，不需要提前提取音轨。" },
        { title: "拖进来转写", body: "文件上限 1 GiB。进模型前音频统一转成 16 kHz 单声道；模型四档，CPU 上从 tiny 的 41 MB 到 turbo 的 1,085 MB，按设备和内存挑一个。" },
        { title: "整理成纪要", body: "先删掉括号行，再搜「定了」「同意」「下周发」这类说法，回听那几句，把人名补上。文字稿自己不会变成纪要。" },
      ],
      tipsTitle: "会议录音特有的坑",
      tips: [
        "录音前告知参会者，并遵守公司的录音和数据处理规定。",
        "几个人同时说话的地方最容易出错，引用前一定回听。",
        "EarScribe 不区分说话人，只有一条时间线，重要发言的人名要你自己补。",
      ],
      faq: [
        { q: "腾讯会议、飞书、钉钉的录制是什么格式？", a: "通常是含视频轨的 MP4，个别版本也能只导出音频。直接拖进 EarScribe 就行，音轨会在浏览器里提取，不用先用别的软件转成音频。Zoom 本地录制另有一个纯音频 M4A，拖那个最省事。" },
        { q: "Zoom 的纯音频文件在哪里？", a: "本地录制保存于“文档（Documents）/Zoom”下的文件夹，里面同时有 MP4 视频和纯音频 M4A；云录制也可以只下载音频。" },
        { q: "能进会议实时转写、出实时字幕吗？", a: "不能。没有会议机器人，也没有实时模式，只处理你已有的录制文件。" },
        { q: "转完能直接当会议纪要发吗？", a: "不能。EarScribe 只给文字稿：不区分说话人、不生成摘要、不翻译。纪要里的决议、负责人和截止日期，要你回听确认后自己写。" },
      ],
      screenshotAlt: "带时间戳、可搜索的会议录音文字稿",
    },
    ja: {
      title: "会議 録音 文字起こし｜MP4・M4Aをそのままドロップ",
      description:
        "会議の録音を、検索できるタイムスタンプ付きのテキストに無料で。Zoom・Microsoft Teams・Google Meet・Webexが書き出すMP4もM4Aもそのままドロップでき、音声はブラウザ内で取り出します。録音のアップロードはありません。",
      eyebrow: "会議 録音 文字起こし",
      intro:
        "EarScribeは会議にボットを入れず、会議のあとに手元の録画ファイルを処理します。MP4でもM4Aでもそのままドロップでき、音声トラックはブラウザ内で取り出して、タイムスタンプ付きの文字起こしにします。ただし出てくるのは文字起こしであって、自動で整った議事録ではありません。決定事項やToDoは、文字起こしから拾って自分で議事メモにまとめてください。",
      benefits: ["MP4もM4Aもそのまま、変換は不要", "録音はアップロードせずブラウザ内で処理", "タイムスタンプから元の音声を聞き直せる"],
      workflowTitle: "書き出す、ドロップする、議事メモは自分で作る",
      workflow: [
        { title: "会議ツールから録画を書き出す", body: "Zoom・Microsoft Teams・Google Meet・Webexの録画は、映像トラック入りのMP4か音声のみのM4Aで保存されるのが一般的です。どちらもそのまま使えるので、音声を先に取り出す必要はありません。" },
        { title: "ドロップして文字起こし", body: "ファイルは1 GiBまで。モデルに渡す前に16 kHzモノラルへ変換されます。モデルはtinyからturboまで4段階で、CPUなら41 MB、GPUなら最大3,236 MB。端末とメモリに合わせて選んでください。" },
        { title: "議事メモにまとめる", body: "まず括弧の行を削り、「決定」「〜します」「金曜までに」といった言葉を検索して、その箇所だけ聞き直します。担当者の名前は最後に自分の手で入れます。" },
      ],
      tipsTitle: "会議の録音でつまずきやすいところ",
      tips: [
        "録音と文字起こしをすることを参加者に伝え、社内の録音・データ管理のルールに従ってください。",
        "複数の人が同時に話す箇所は誤りが集中します。引用する前に必ず聞き直してください。",
        "EarScribeは話者を区別しません。タイムラインは1本だけなので、重要な発言の名前は自分で補ってください。",
      ],
      faq: [
        { q: "Zoom・Teams・Google Meet・Webexの録画はどんな形式ですか？", a: "映像トラック入りのMP4が一般的で、Zoomのローカル録画には音声のみのM4Aも残ります。どちらもそのままドロップでき、音声トラックはブラウザ内で取り出します。変換ソフトは要りません。" },
        { q: "音声のみのファイルはどこにありますか？", a: "Zoomのローカル録画は「書類（Documents）/Zoom」内のフォルダに、MP4動画と音声のみのM4Aが並んで保存されます。M4Aをそのままドロップするのが一番短い手順です。" },
        { q: "会議に入ってリアルタイムに文字起こしできますか？", a: "できません。会議ボットもリアルタイム字幕もなく、手元にある録音ファイルだけを処理します。" },
        { q: "そのまま議事録として送れますか？", a: "いいえ。EarScribeが出すのは文字起こしだけで、要約の生成・話者の識別・翻訳は行いません。決定事項・担当者・期日は、聞き直して確認したうえで議事メモに書いてください。" },
      ],
      screenshotAlt: "検索できるタイムスタンプ付きの会議録音の文字起こし",
    },
  },
};

export const MEETING_RECORDING_TO_TEXT_GUIDES: Record<ToolLocale, ToolGuide> = {
  en: {
    primaryKeyword: "meeting recording to text",
    supportingKeywords: [
      "transcribe meeting recording",
      "zoom recording to text",
      "meeting notes from a recording",
    ],
    // The page's job: most of a meeting is not speech, and the transcript says so
    // in brackets. Everything here serves that one observation.
    guideTitle: "Meeting recording to text: where the words go missing",
    guideIntro:
      "A meeting is mostly not speech — waiting, room tone, a cough, a screen share. The transcript marks those stretches instead of inventing words, but only digital silence is stable: the same 30 seconds of room noise produced five different labels at −40 dB across six runs.",
    sections: [
      {
        title: "What the brackets mean",
        paragraphs: [
          "Anything inside square or round brackets is the model saying \"no speech here\". It is not a caption someone wrote, and it is not a word anyone said — it is the decoder's label for a stretch that produced no text.",
          "The stability of that label depends entirely on the noise floor. We ran six 30-second clips through six model and weight combinations:",
        ],
        table: {
          caption:
            "Thirty-six runs, one trial per model and weight set. \"Distinct labels\" counts how many different strings the six runs produced for the same 30 seconds of audio.",
          source: "content/guides/data/silence-hallucinations.json",
          columns: ["The 30 seconds contained", "Distinct labels", "What came out"],
          rows: [
            ["Digital silence", "1", "[BLANK_AUDIO], every run"],
            ["White noise", "3", "[silence], [BLANK_AUDIO], [ Silence ]"],
            ["Noise at −40 dB", "5", "[silence], [Pause], [Music], [BREAKING], (water flowing)"],
            ["Noise at −20 dB", "5", "(birds chirping), (clippers buzzing), [Music], [BLANK_AUDIO]"],
            ["Clicks", "2", "[BEEP], [BLANK_AUDIO]"],
            ["Speech", "5", "The real words, five ways"],
          ],
        },
      },
      {
        title: "What Zoom, Teams and Meet leave on disk",
        paragraphs: [
          "The recording exists before this page does anything. Which file you get decides whether there is a step before the drop zone.",
        ],
        table: {
          caption:
            "Where each platform puts the recording, and the shortest path from that file to something the browser can decode.",
          columns: ["Platform", "What you get", "Before you transcribe"],
          rows: [
            ["Zoom, local recording", "MP4 video + M4A audio", "Nothing: drop the M4A"],
            ["Zoom, cloud recording", "MP4 (download)", "Export the audio track"],
            ["Teams", "MP4 in OneDrive or SharePoint", "Export the audio track"],
            ["Google Meet", "MP4 in Drive", "Export the audio track"],
          ],
        },
      },
      {
        title: "What changes when the recording is a lecture",
        paragraphs: [
          "A lecture drops the one problem a meeting has and keeps the other two. With a single speaker there is no attribution question, so the missing speaker labels stop mattering; the noise floor and the length stay exactly as they were.",
          "What a transcript of a lecture cannot see is the part that was not spoken: the slides, the board, the equation written while the sentence trails off. A video file is accepted, but only its audio track is decoded, so the deck never reaches the text.",
          "Length is the practical limit. Ninety minutes is 345 MB of samples plus a 2,074 MB native decode — about 2.4 GB of peak, which is past comfortable on a laptop that is also running a browser with twenty tabs open. Splitting at the break is cheaper than a bigger machine.",
        ],
      },
      {
        title: "What an hour of meeting costs before the first word",
        paragraphs: [
          "An hour is 230 MB of 16 kHz samples, and the estimate adds a 1,382 MB native-rate decode because some devices ignore the 16 kHz request. That is roughly 1.6 GB of peak before a single word appears. A 45-minute call is 173 MB of samples and 1,037 MB of the native buffer, which is why an hour is comfortable on a laptop and a two-hour recording is not.",
          "The practical lever is trimming, not a bigger machine: the first ten minutes of most calls are people joining, and cutting them removes 38 MB of samples and a sixth of the native buffer.",
        ],
      },
    ],
    checklistTitle: "Three checks before the notes go out",
    checklist: [
      {
        title: "Delete the bracketed lines first",
        body: "They are labels, not minutes. Leaving them in makes a notes document look like a transcript and reads like nobody spoke.",
      },
      {
        title: "Search for the decision verbs",
        body: "agreed, decided, will send, by Friday — searching the verbs finds the four sentences that matter in an hour faster than reading does.",
      },
      {
        title: "Add the names yourself",
        body: "There are no speaker labels: one timeline, no attribution. A note with the wrong owner is worse than one with no owner.",
      },
    ],
    limitsTitle: "Where meeting notes stop being minutes",
    limits: [
      "Overlapping speech is where models disagree most, and a meeting is full of it — expect one blended line where three people talked at once.",
      "Past roughly two hours the memory estimate passes 3.3 GB. Splitting the recording at a break is the way through.",
    ],
    imageSrc: "/screenshots/guides/transcript-result-top.webp",
    imageAlt: "Meeting recording to text: transcript with per-line timestamps",
    workflowImageSrc: "/screenshots/guides/pre-run.webp",
  },
  "zh-CN": {
    primaryKeyword: "会议录音转文字",
    supportingKeywords: ["会议录音转文字 免费", "会议录音转文字 在线", "腾讯会议录音转文字", "zoom录音转文字"],
    guideTitle: "会议录音转文字：先看你用哪个软件录的",
    guideIntro:
      "会议录音转文字之前，真正要先回答的是「这个文件是什么」：会议软件通常导出 MP4（含视频轨）或 M4A（纯音频），两种都能直接拖进来，音轨在浏览器里提取，不用先转格式。另外先说清楚——出来的是文字记录，不是自动写好的会议纪要。",
    sections: [
      {
        title: "会议录音转文字：括号里的内容是什么",
        paragraphs: [
          "方括号、圆括号里的东西，是模型在说「这里没有人说话」。它不是谁写的字幕，也不是谁说过的话，而是解码器给一段没产生文字的声音打的标签。",
          "这个标签稳不稳定，完全取决于底噪。我们把同样的 30 秒素材跑了 6 次，每次换一组模型与精度，一共 36 次运行：数字静音只有 1 种标签，−20 dB 的噪声有 5 种。",
        ],
        table: {
          caption:
            "共 36 次运行，每个模型与精度组合各跑一次。「不同标签数」指同样的 30 秒音频在这六次里出现了多少种不同的字符串。",
          source: "content/guides/data/silence-hallucinations.json",
          columns: ["这 30 秒里有什么", "不同标签数", "实际输出"],
          rows: [
            ["数字静音", "1", "每次都是 [BLANK_AUDIO]"],
            ["白噪声", "3", "[silence]、[BLANK_AUDIO]、[ Silence ]"],
            ["−40 dB 的噪声", "5", "[silence]、[Pause]、[Music]、[BREAKING]、(water flowing)"],
            ["−20 dB 的噪声", "5", "(birds chirping)、(clippers buzzing)、[Music]、[BLANK_AUDIO]"],
            ["咔哒声", "2", "[BEEP]、[BLANK_AUDIO]"],
            ["人声", "5", "真的那句话，五种写法"],
          ],
        },
      },
      {
        title: "腾讯会议、飞书、Zoom 各留下什么文件",
        paragraphs: [
          "录制在你打开 EarScribe 之前就已经存在了。拿到的是哪种文件，决定你要不要多做一步——而现在这一步基本可以省掉。",
          "国内常用的几款，导出的通常是含视频轨的 MP4；Zoom 的本地录制会额外留一个纯音频 M4A。MP4 和 M4A 都能直接拖进转写框，浏览器只解码音轨，画面从头到尾没被读取。不论容器是哪一个，进模型前都会变成 16 kHz 单声道、每分钟 3.84 MB：1 小时就是 230 MB 的样本，和文件本身的 1 GiB 上限是两件不同的事。",
        ],
        table: {
          caption: "各软件常见的导出格式，以及从文件到转写框的最短路径。具体文件名以你手上那份为准。",
          columns: ["软件", "导出的文件", "要不要先处理"],
          rows: [
            ["Zoom 本地录制", "MP4 视频 + M4A 纯音频", "不用：拖 M4A 最省事"],
            ["Zoom 云录制", "MP4 下载", "不用：直接拖，音轨自动提取"],
            ["Microsoft Teams", "OneDrive 或 SharePoint 里的 MP4", "不用：直接拖"],
            ["Google Meet", "Google 云端硬盘里的 MP4", "不用：直接拖"],
            ["腾讯会议", "通常为 MP4（含视频轨）", "不用：直接拖"],
            ["飞书", "通常为 MP4（含视频轨）", "不用：直接拖"],
            ["钉钉", "通常为 MP4（含视频轨）", "不用：直接拖"],
            ["企业微信", "通常为 MP4（含视频轨）", "不用：直接拖"],
          ],
        },
      },
      {
        title: "不用先转格式：拖进来就行",
        paragraphs: [
          "以前要把 MP4 拆成音频，得开 QuickTime 或敲一行 ffmpeg。现在不需要：MP4 直接拖进来，EarScribe 在浏览器里把音轨解出来，视频轨完全忽略。所以录屏里的幻灯片不会被读到，屏幕上的字也进不了文字稿。",
          "文件上限 1 GiB，进模型前所有音频都会重采样成 16 kHz 单声道——44.1 kHz 立体声和 8 kHz 电话录音，最后都是同样的样本。按每分钟 3.84 MB 折算，1 GiB 大约能装 266 分钟的解码样本（1,024 ÷ 3.84，这是算出来的），但通常轮不到容量先报警。格式不需要你操心，需要操心的是时长和内存。",
          "万一某个 MP4 就是打不开，用 ffmpeg -i meeting.mp4 -vn -c:a copy meeting.m4a 把音轨原样拷出来即可：不重新编码，也不损失质量。",
        ],
      },
      {
        title: "一小时的会议，在第一个字出现前要占多少内存",
        paragraphs: [
          "一小时的音频是 230 MB 的 16 kHz 样本（60 × 3.84）；估算还会加一块按原始采样率解码的缓冲（约 1.4 GB），因为有些设备会忽略 16 kHz 的请求。也就是说，第一个字出来之前，峰值大约 1.6 GB。45 分钟是 173 MB 样本加 1,037 MB 原生缓冲；90 分钟是 345 MB 加 2,074 MB，峰值约 2.4 GB。",
          "所以一小时在笔记本上还算舒服，两小时就不一定了。模型这边，同一段 34.36 秒的样音，tiny 和 base 的 111 个词里有 26 个不同，3 处改变语义——默认给 base 就是这个原因。",
          "选模型是另一个变量，下载量差别很大：",
        ],
        table: {
          caption: "四档模型的下载量，单位 MB。权重首次下载后缓存在浏览器里，第二次不再重复下载。",
          columns: ["模型", "CPU（WASM）", "GPU（WebGPU）", "什么时候选它"],
          rows: [
            ["tiny", "41 MB", "151 MB", "先跑一遍看看结构"],
            ["base", "77 MB", "291 MB", "默认，会议录音够用"],
            ["small", "249 MB", "968 MB", "口音重、术语多"],
            ["turbo", "1,085 MB", "3,236 MB", "要更准，内存也得够"],
          ],
        },
      },
      {
        title: "文字稿不是会议纪要",
        paragraphs: [
          "这是最容易误会的一点：EarScribe 产出的是「谁在什么时间说了什么」的记录，不是整理好的纪要。它不区分说话人、不生成摘要、不翻译、不做实时字幕。决议、负责人和截止日期，都要你从文字稿里挑出来再写一遍。",
          "好处是这份记录不会替你下结论。模型听错一句，回听 10 秒就能发现；如果换成摘要替你改写这句话，错误就被藏进结论里了。",
          "所以流程是：删掉括号行 → 搜关键词 → 回听确认 → 自己写纪要。文字稿是原料，纪要仍然是你的活。",
        ],
      },
    ],
    checklistTitle: "发纪要之前的三件事",
    checklist: [
      { title: "先删掉括号行", body: "那些是标签，不是发言。留在纪要里，读者会以为整场会没人说话。" },
      { title: "搜决定类的词", body: "「定了」「同意」「下周发」「周五之前」——搜这些词，比从头读一遍快得多。" },
      { title: "人名自己补", body: "没有说话人标签，只有一条时间线。负责人写错，比没写更麻烦。" },
    ],
    limitsTitle: "会议录音转文字做不到的事",
    limits: [
      "几个人同时说话是模型最容易出错的地方，而会议里到处都是：三个人一起说的那句，常常混成一行。",
      "超过大约两小时，内存估算会超过 3.3 GB，请在休息处分段转写。",
      "不做说话人分离、不生成摘要、不翻译、不做实时字幕，这四件事都得另外做。",
    ],
    imageSrc: image,
    imageAlt: "带时间戳、可搜索的会议录音文字稿",
  },
  ja: {
    primaryKeyword: "会議 録音 文字起こし",
    supportingKeywords: ["会議 録音 文字起こし 無料", "議事メモ 文字起こし", "zoom 録音 文字起こし", "webex 録画 文字起こし"],
    guideTitle: "会議 録音 文字起こし：どのツールで録ったかでファイルが変わる",
    guideIntro:
      "会議の録音を文字起こしする前に決めるのは、モデルではなく「このファイルは何か」です。会議ツールは映像トラック入りのMP4か、音声のみのM4Aで書き出すのが普通で、どちらもそのままドロップできます。音声トラックはブラウザ内で取り出すので、変換は要りません。先にひとつだけ——出てくるのは文字起こしであって、自動で整った議事録ではありません。",
    sections: [
      {
        title: "会議 録音 文字起こし：括弧に入っているものの正体",
        paragraphs: [
          "角括弧や丸括弧の中身は、モデルが「ここに発話はない」と言っているだけです。誰かが書いた字幕でも、誰かが言った言葉でもなく、文字を生まなかった区間につけられたデコーダーのラベルです。",
          "そのラベルが安定するかどうかは、底に流れるノイズの量で決まります。同じ 30 秒の素材を、モデルと精度の組み合わせを変えて 6 回、合計 36 回処理しました。デジタルの無音はラベルが 1 種類、−20 dB のノイズは 5 種類に分かれました。",
        ],
        table: {
          caption:
            "36回の実行で、各モデル・精度の組み合わせは1回ずつ。「ラベルの種類」は、同じ30秒から何通りの文字列が出たかを数えたものです。",
          source: "content/guides/data/silence-hallucinations.json",
          columns: ["30秒の中身", "ラベルの種類", "実際の出力"],
          rows: [
            ["デジタルの無音", "1", "毎回 [BLANK_AUDIO]"],
            ["ホワイトノイズ", "3", "[silence]、[BLANK_AUDIO]、[ Silence ]"],
            ["−40 dBのノイズ", "5", "[silence]、[Pause]、[Music]、[BREAKING]、(water flowing)"],
            ["−20 dBのノイズ", "5", "(birds chirping)、(clippers buzzing)、[Music]、[BLANK_AUDIO]"],
            ["クリック音", "2", "[BEEP]、[BLANK_AUDIO]"],
            ["人の発話", "5", "実際の言葉が5通りに"],
          ],
        },
      },
      {
        title: "Zoom・Teams・Google Meet・Webexが残すファイル",
        paragraphs: [
          "録画は、このページを開く前にもう存在しています。どのファイルが手元にあるかで、ドロップの前にひと手間いるかどうかが決まります。今はそのひと手間がほぼ不要になりました。",
          "4 つのツールはいずれも、映像トラック入りの MP4 で保存するのが一般的です。Zoom のローカル録画だけは、同じフォルダに音声のみの M4A も残します。MP4 も M4A もそのままドロップでき、ブラウザは音声トラックだけを取り出します。どの形式でも、モデルに渡す前には 16 kHz モノラル・1 分 3.84 MB になり、1 時間で 230 MB、40 分で 154 MB のサンプルになります。",
        ],
        table: {
          caption: "各ツールが残すファイルと、そこから文字起こしまでの最短ルート。実際のファイル名は手元の書き出しを確認してください。",
          columns: ["ツール", "書き出されるファイル", "ドロップ前の作業"],
          rows: [
            ["Zoom（ローカル録画）", "MP4動画＋音声のみのM4A", "不要：M4Aをドロップするのが最短"],
            ["Zoom（クラウド録画）", "MP4（ダウンロード）", "不要：そのままドロップ"],
            ["Microsoft Teams", "OneDrive／SharePointのMP4", "不要：そのままドロップ"],
            ["Google Meet", "GoogleドライブのMP4", "不要：そのままドロップ"],
            ["Webex", "MP4（クラウド録画）", "不要：そのままドロップ"],
          ],
        },
      },
      {
        title: "変換は要りません。ドロップするだけ",
        paragraphs: [
          "以前はMP4から音声を抜くのにQuickTimeやffmpegが必要でした。今は不要です。MP4をそのままドロップすれば、EarScribeがブラウザ内で音声トラックだけをデコードし、映像トラックは使いません。画面に映ったスライドの文字が文字起こしに入ることはありません。",
          "ファイルは 1 GiB（1,024 MB）まで。モデルに渡す前には、どの形式も 16 kHz モノラルへ変換されます。44.1 kHz のステレオも 8 kHz の電話音声も、最後は同じサンプルになります。1 分 3.84 MB で割ると、1,024 MB はおよそ 266 分（計算値）。とはいえ容量より先にメモリが尽きます。気にするのは形式ではなく、長さとメモリです。",
          "それでもそのMP4が開けない端末では、ffmpeg -i meeting.mp4 -vn -c:a copy meeting.m4a で音声をそのまま取り出せます。再エンコードしないので品質は落ちません。",
        ],
      },
      {
        title: "1時間の会議が、最初の1語までに使うメモリ",
        paragraphs: [
          "1 時間の音声は 16 kHz のサンプルで 230 MB（60 × 3.84）。これに元のサンプルレートでデコードするバッファ（約 1.4 GB）が加算されます。16 kHz の指定を無視する端末があるためです。最初の 1 語が出る前に、ピークはおよそ 1.6 GB になります。45 分なら 173 MB と 1,037 MB、90 分なら 345 MB と 2,074 MB で、ピークは約 2.4 GB です。",
          "だから 1 時間はノート PC でも快適ですが、2 時間はそうとは限りません。同じ 34.36 秒のサンプルでも、tiny と base は 111 語のうち 26 語が違い、3 語は意味が変わりました。既定で base（77 MB）を勧める理由です。",
          "モデルの選択も効きます。ダウンロード量は次のとおりです。",
        ],
        table: {
          caption: "4モデルのダウンロード量（MB）。重みは初回だけ取得し、その後はブラウザにキャッシュされます。",
          columns: ["モデル", "CPU（WASM）", "GPU（WebGPU）", "使いどころ"],
          rows: [
            ["tiny", "41 MB", "151 MB", "まず流れを見たいとき"],
            ["base", "77 MB", "291 MB", "既定。会議の録音なら十分"],
            ["small", "249 MB", "968 MB", "訛りや専門用語が多い"],
            ["turbo", "1,085 MB", "3,236 MB", "精度優先。メモリに余裕があるとき"],
          ],
        },
      },
      {
        title: "文字起こしは議事録ではありません",
        paragraphs: [
          "いちばん誤解されるところです。EarScribeが出すのは「誰がいつ何を言ったか」の記録で、整った議事録ではありません。話者の識別、要約の生成、翻訳、リアルタイム字幕はどれも行いません。決定事項も担当者も期日も、文字起こしから自分で拾って議事メモに書く必要があります。",
          "そのかわり、この記録は勝手に結論を出しません。聞き間違いは 10 秒聞き直せば見つかります。要約が言い換えてしまった場合、誤りは結論の中に隠れてしまいます。",
          "手順はこうです。括弧の行を消す → 言葉を検索する → 聞き直す → 議事メモは自分で書く。文字起こしは材料で、議事メモはあなたの仕事です。",
        ],
      },
    ],
    checklistTitle: "議事メモを送る前の3つ",
    checklist: [
      { title: "括弧の行を先に消す", body: "あれはラベルで、発言ではありません。残したまま送ると、誰も話していない会議のように読めます。" },
      { title: "決めごとの動詞を検索する", body: "「決定」「〜します」「金曜までに」——言葉で探すほうが、頭から読むより速く要点にたどり着けます。" },
      { title: "名前は自分で入れる", body: "話者ラベルはなく、タイムラインは1本だけ。担当者が違うメモは、担当者のないメモより厄介です。" },
    ],
    limitsTitle: "会議の録音で文字起こしが止まるところ",
    limits: [
      "複数の人が同時に話す箇所は、モデルがいちばん間違えるところで、会議はその連続です。3人が重なった一言は、1行に混ざります。",
      "およそ 2 時間（461 MB のサンプル）を超えるとメモリの見積もりが 3.3 GB を超えます。休憩のところで分割してください。",
      "話者分離・要約の生成・翻訳・リアルタイム字幕は行いません。どれも別の作業になります。",
    ],
    imageSrc: image,
    imageAlt: "検索できるタイムスタンプ付きの会議録音の文字起こし",
  },
};
