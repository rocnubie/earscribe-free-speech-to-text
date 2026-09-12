import type { ToolLocale } from "@/lib/site-routes";
import type { ToolGuide } from "@/lib/tool-page-seo";
import type { ToolPageDefinition } from "@/lib/tool-pages";

const image = "/screenshots/02-transcript-showcase.webp";

export const PODCAST_TRANSCRIPTION_PAGE: ToolPageDefinition = {
  slug: "podcast-transcription",
  resultTab: "transcript",
  copy: {
    en: {
      title: "Free podcast transcription for show notes, quotes and captions",
      description:
        "Transcribe podcast episodes in your browser, then turn the text into show notes, chapter timestamps, quotes and SRT or VTT captions. Free, no sign-up.",
      eyebrow: "Podcast transcription",
      intro:
        "Drop in the episode you exported from your editor. EarScribe creates a timestamped transcript on your device that you can search for quotes, use to write show notes and chapters, and export as captions for the video version.",
      benefits: [
        "Find quotes by searching the whole episode",
        "Timestamps ready for chapters and captions",
        "Export TXT, SRT, VTT or JSON",
      ],
      workflowTitle: "From finished episode to a free, publishable transcript",
      workflow: [
        { title: "Transcribe the final mix", body: "Use the exported episode (MP3, WAV or M4A) so the timestamps match what listeners hear." },
        { title: "Check names and sponsors", body: "Search for guest names, brands and URLs, replay each mention and correct the spelling." },
        { title: "Reuse the transcript", body: "Copy text for show notes, note timestamps for chapters, and export SRT or VTT for the video episode." },
      ],
      tipsTitle: "Podcast-specific tips",
      tips: [
        "Music beds and intros can produce stray or repeated lines. Check the first and last minutes of the transcript.",
        "EarScribe doesn't label speakers. Add host and guest names while reviewing, using the timestamps to find each turn.",
        "Long episodes need memory. On a phone, transcribe the episode in parts or use a smaller model.",
      ],
      faq: [
        { q: "Can I transcribe a full-length episode?", a: "Yes, on most laptops and desktops. Very long episodes depend on available memory; if the browser struggles, split the episode or choose a smaller model." },
        { q: "How do I publish the transcript with my podcast?", a: "Post the corrected text on the episode page, or export SRT or WebVTT and link it from your RSS feed with the podcast:transcript tag, which a growing number of podcast apps can display." },
        { q: "Does it separate the host and the guest?", a: "No. Whisper produces one timeline of text. Use the timestamps to find each change of speaker and add names where they matter." },
        { q: "Can I paste a podcast link instead of a file?", a: "No. EarScribe works with audio files on your device. Use the file exported from your editor, or download the episode first." },
      ],
      screenshotAlt: "Podcast episode transcript with searchable, timestamped segments",
    },
    "zh-CN": {
      title: "免费播客转文字稿：做节目笔记、时间轴和字幕",
      description: "在浏览器里把播客单集转成文字稿，再整理成节目笔记、章节时间轴、金句和 SRT/VTT 字幕。免费、无需注册。",
      eyebrow: "播客转文字",
      intro: "放入剪辑软件导出的单集音频，EarScribe 会在你的设备上生成带时间戳的文字稿：可以搜索金句、整理节目笔记和章节，也可以导出成视频版的字幕。",
      benefits: ["整期搜索，快速找到金句", "时间戳可直接用于章节和字幕", "导出 TXT、SRT、VTT 或 JSON"],
      workflowTitle: "免费把成品单集变成可发布的文字稿",
      workflow: [
        { title: "转写最终混音", body: "使用导出的成品（MP3、WAV 或 M4A），时间戳才会和听众听到的一致。" },
        { title: "核对嘉宾和品牌", body: "搜索嘉宾名字、品牌和网址，逐处回听并改正写法。" },
        { title: "一稿多用", body: "复制文字写节目笔记，记下时间点做章节，再导出 SRT 或 VTT 给视频版使用。" },
      ],
      tipsTitle: "播客专用小技巧",
      tips: [
        "片头音乐和垫乐可能被识别出多余或重复的句子，记得检查开头和结尾几分钟。",
        "EarScribe 不标注说话人。核对时借助时间戳找到每次换人，补上主播和嘉宾的名字。",
        "长节目很占内存。在手机上可以分段转写，或者换更小的模型。",
      ],
      faq: [
        { q: "一整期节目都能转文字吗？", a: "大多数电脑可以。特别长的节目取决于可用内存，浏览器吃力时请拆分单集或换更小的模型。" },
        { q: "文字稿怎么和节目一起发布？", a: "可以把改好的文字放到单集页面；也可以导出 SRT 或 WebVTT，通过 RSS 的 podcast:transcript 标签链接给播客 App，支持这个标签的 App 越来越多。" },
        { q: "能区分主播和嘉宾吗？", a: "不能。Whisper 输出的是一条连续的文字时间线。可以借助时间戳找到换人的地方，在需要处补上名字。" },
        { q: "可以直接粘贴播客链接吗？", a: "不可以。EarScribe 处理的是你设备上的音频文件，请使用剪辑软件导出的文件，或先下载单集音频。" },
      ],
      screenshotAlt: "可搜索、带时间戳的播客单集文字稿",
    },
    ja: {
      title: "ポッドキャストを無料で文字起こし：概要欄・チャプター・字幕に",
      description: "ポッドキャストのエピソードをブラウザで文字起こしし、概要欄、チャプターのタイムスタンプ、引用、SRT・VTT字幕に活用。無料・登録不要です。",
      eyebrow: "ポッドキャスト 文字起こし",
      intro: "編集ソフトから書き出したエピソードを選ぶと、EarScribeが端末内でタイムスタンプ付きの文字起こしを作ります。引用を検索したり、概要欄やチャプターを書いたり、動画版の字幕として書き出したりできます。",
      benefits: ["エピソード全体を検索して引用を探せる", "チャプターや字幕にそのまま使えるタイムスタンプ", "TXT・SRT・VTT・JSONで書き出し"],
      workflowTitle: "完成したエピソードから公開用テキストまで無料で",
      workflow: [
        { title: "最終ミックスを文字起こしする", body: "書き出したエピソード（MP3・WAV・M4A）を使うと、タイムスタンプがリスナーの聞く音声と一致します。" },
        { title: "ゲスト名とスポンサーを確認する", body: "ゲストの名前、ブランド名、URLを検索し、それぞれ聞き直して表記を直します。" },
        { title: "文字起こしを使い回す", body: "概要欄用に文章をコピーし、チャプター用に時刻を控え、動画版にはSRTかVTTを書き出します。" },
      ],
      tipsTitle: "ポッドキャストならではのコツ",
      tips: [
        "BGMやジングルの部分で、余計な文や繰り返しが出ることがあります。最初と最後の数分を確認しましょう。",
        "EarScribeは話者を区別しません。確認しながら、タイムスタンプを頼りにホストとゲストの名前を補ってください。",
        "長いエピソードはメモリを使います。スマートフォンでは分割して処理するか、小さいモデルを選んでください。",
      ],
      faq: [
        { q: "1エピソードまるごと文字起こしできますか？", a: "多くのPCで可能です。非常に長いエピソードは空きメモリ次第なので、ブラウザが重いときは分割するか小さいモデルを選んでください。" },
        { q: "文字起こしをポッドキャストと一緒に公開するには？", a: "修正した文章をエピソードページに載せるか、SRTかWebVTTを書き出してRSSのpodcast:transcriptタグでリンクします。このタグに対応するアプリは増えています。" },
        { q: "ホストとゲストを分けて表示できますか？", a: "できません。Whisperは1本の文字タイムラインを出力します。タイムスタンプで話者の切り替わりを探し、必要な箇所に名前を加えてください。" },
        { q: "ポッドキャストのURLを貼り付けて使えますか？", a: "使えません。EarScribeは端末上の音声ファイルを処理します。編集ソフトの書き出しファイルか、先にダウンロードしたエピソードを使ってください。" },
      ],
      screenshotAlt: "検索できるタイムスタンプ付きのポッドキャスト文字起こし",
    },
  },
};

export const PODCAST_TRANSCRIPTION_GUIDES: Record<ToolLocale, ToolGuide> = {
  en: {
    primaryKeyword: "podcast transcription",
    supportingKeywords: ["transcribe podcast free", "podcast transcript generator", "podcast show notes from transcript", "podcast chapter timestamps"],
    guideTitle: "Turn one transcript into everything an episode needs",
    guideIntro:
      "A transcript earns its keep after the episode is out: it becomes show notes, chapter markers, quotes for social posts and captions for the video version. Timestamps connect all of them back to the audio.",
    sections: [
      {
        title: "Show notes and chapters",
        paragraphs: [
          "Skim the transcript for topic changes and note their timestamps. Many platforms turn a timestamp list in the description into chapters; YouTube, for example, needs the list to start at 0:00 and contain at least three chapters of ten seconds or more.",
          "Write the notes from the corrected transcript rather than the raw one, so guest names and links are spelled the way you confirmed them.",
        ],
      },
      {
        title: "Quotes and clips",
        paragraphs: [
          "Search for the phrase you remember, click its timestamp and listen to the whole sentence before quoting it. The surrounding context often changes how a line should be trimmed.",
          "When you cut a clip for social media, the timestamps tell your editor exactly where to go, which saves scrubbing through an hour of audio.",
        ],
      },
      {
        title: "Captions and accessibility",
        paragraphs: [
          "Export SRT or WebVTT for the video version of the episode, and run the subtitle check to catch cues that are too long or too fast to read.",
          "A published transcript also serves listeners who are deaf or hard of hearing, and anyone who prefers to skim. The podcast namespace's podcast:transcript tag lets you link the transcript file from your RSS feed.",
        ],
      },
    ],
    checklistTitle: "Before you publish the transcript",
    checklist: [
      { title: "Names", body: "Guests, companies, products and places spelled correctly." },
      { title: "Links", body: "URLs and promo codes checked against the audio." },
      { title: "Ad reads", body: "Decide whether sponsor segments stay in the published text." },
      { title: "Timing", body: "Chapter timestamps and captions match the final mix." },
    ],
    limitsTitle: "What EarScribe won't do",
    limits: [
      "It doesn't fetch episodes from RSS, Spotify or Apple Podcasts links; it needs the audio file.",
      "It doesn't identify speakers or write summaries; you stay in control of the edit.",
    ],
    imageSrc: image,
    imageAlt: "Searchable podcast transcript with timestamps for chapters and quotes",
  },
  "zh-CN": {
    primaryKeyword: "播客转文字",
    supportingKeywords: ["播客转文字稿", "播客文字稿 免费", "播客 节目笔记", "播客 章节时间轴"],
    guideTitle: "一份文字稿，满足单集需要的全部内容",
    guideIntro: "文字稿真正派上用场是在节目上线之后：它可以变成节目笔记、章节标记、社交平台的金句和视频版字幕，时间戳把这些内容都连回原音频。",
    sections: [
      {
        title: "节目笔记和章节",
        paragraphs: [
          "浏览文字稿找出话题转换的地方，记下时间点。很多平台会把简介里的时间点列表变成章节，比如 YouTube 要求列表从 0:00 开始，至少三个章节，每章不少于 10 秒。",
          "用改正后的文字稿写笔记，而不是原始识别结果，这样嘉宾名字和链接都是你确认过的写法。",
        ],
      },
      {
        title: "金句和切片",
        paragraphs: [
          "搜索你记得的那句话，点击时间戳听完整句再引用。上下文常常会影响一句话该怎么截取。",
          "剪短视频切片时，时间戳能直接告诉剪辑师位置，不用在一小时的音频里来回拖动。",
        ],
      },
      {
        title: "字幕和无障碍",
        paragraphs: [
          "为视频版导出 SRT 或 WebVTT，并运行字幕检查，找出太长或读不过来的字幕条。",
          "公开的文字稿也方便听障听众和喜欢快速浏览的人。按照播客命名空间规范，可以用 podcast:transcript 标签在 RSS 里链接文字稿文件。",
        ],
      },
    ],
    checklistTitle: "发布文字稿之前",
    checklist: [
      { title: "名字", body: "嘉宾、公司、产品和地名写法正确。" },
      { title: "链接", body: "网址和优惠码对照音频核实。" },
      { title: "口播广告", body: "决定赞助口播是否保留在公开文字里。" },
      { title: "时间", body: "章节时间和字幕与最终混音一致。" },
    ],
    limitsTitle: "EarScribe 不做的事",
    limits: [
      "不会从 RSS、小宇宙、Apple Podcasts 等链接抓取节目，需要音频文件。",
      "不识别说话人，也不自动写摘要，编辑由你掌控。",
    ],
    imageSrc: image,
    imageAlt: "带时间戳、可用于章节和金句的播客文字稿",
  },
  ja: {
    primaryKeyword: "ポッドキャスト 文字起こし",
    supportingKeywords: ["ポッドキャスト 文字起こし 無料", "ポッドキャスト 概要欄", "ポッドキャスト チャプター", "ポッドキャスト 字幕"],
    guideTitle: "1つの文字起こしをエピソードのあらゆる用途に",
    guideIntro: "文字起こしが本当に役立つのは配信後です。概要欄、チャプター、SNS用の引用、動画版の字幕になり、タイムスタンプがそのすべてを元の音声につなぎます。",
    sections: [
      {
        title: "概要欄とチャプター",
        paragraphs: [
          "文字起こしをざっと読んで話題が変わる箇所の時刻を控えます。多くのプラットフォームは説明文の時刻リストをチャプターにします。たとえばYouTubeでは、0:00から始まり、10秒以上のチャプターが3つ以上必要です。",
          "概要欄は、認識そのままではなく修正済みの文字起こしから書きましょう。ゲスト名やリンクが確認済みの表記になります。",
        ],
      },
      {
        title: "引用と切り抜き",
        paragraphs: [
          "覚えているフレーズを検索し、タイムスタンプから文全体を聞いてから引用します。前後の文脈で、どこまで切り取るべきかが変わることはよくあります。",
          "SNS用に切り抜くときも、タイムスタンプを渡せば編集担当はすぐにその場所へ行けます。1時間の音声を何度も探す必要はありません。",
        ],
      },
      {
        title: "字幕とアクセシビリティ",
        paragraphs: [
          "動画版にはSRTかWebVTTを書き出し、字幕チェックで長すぎる・速すぎる字幕を見つけます。",
          "公開された文字起こしは、聴覚に障害のあるリスナーや、ざっと読みたい人にも役立ちます。ポッドキャストのネームスペースにあるpodcast:transcriptタグを使えば、RSSから文字起こしファイルにリンクできます。",
        ],
      },
    ],
    checklistTitle: "文字起こしを公開する前に",
    checklist: [
      { title: "名前", body: "ゲスト、会社、製品、地名の表記が正しいか。" },
      { title: "リンク", body: "URLやクーポンコードを音声と照合したか。" },
      { title: "広告", body: "スポンサー読み上げを公開テキストに残すか決めたか。" },
      { title: "タイミング", body: "チャプターと字幕が最終ミックスと合っているか。" },
    ],
    limitsTitle: "EarScribeがしないこと",
    limits: [
      "RSSやSpotify、Apple PodcastsのURLからエピソードを取得しません。音声ファイルが必要です。",
      "話者の識別や要約の自動作成は行いません。編集はあなたが決めます。",
    ],
    imageSrc: image,
    imageAlt: "チャプターや引用に使えるタイムスタンプ付きのポッドキャスト文字起こし",
  },
};
