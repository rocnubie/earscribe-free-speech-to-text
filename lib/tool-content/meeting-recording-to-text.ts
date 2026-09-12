import type { ToolLocale } from "@/lib/site-routes";
import type { ToolGuide } from "@/lib/tool-page-seo";
import type { ToolPageDefinition } from "@/lib/tool-pages";

const image = "/screenshots/02-transcript-showcase.webp";

export const MEETING_RECORDING_TO_TEXT_PAGE: ToolPageDefinition = {
  slug: "meeting-recording-to-text",
  resultTab: "transcript",
  copy: {
    en: {
      title: "Transcribe meeting recordings to text for free",
      description:
        "Free meeting transcription after the call: turn a recording into searchable, timestamped text in your browser. No bot joins and nothing is uploaded.",
      eyebrow: "Meeting recording to text",
      intro:
        "EarScribe works on the recording after the meeting, not as a bot in the call. Choose the audio file, get a timestamped transcript on your device, then search it for decisions, action items and names before you share notes.",
      benefits: [
        "No meeting bot and no upload",
        "Search for decisions and action items",
        "Timestamps to check who said what",
      ],
      workflowTitle: "Free meeting notes from a recording",
      workflow: [
        { title: "Get the audio file", body: "Zoom's local recording already includes an audio-only M4A. Teams and Google Meet save MP4 video, so export its audio track first." },
        { title: "Transcribe on your device", body: "Choose the file, keep the recommended model and let the browser work. Long meetings take longer on slower devices." },
        { title: "Turn it into notes", body: "Search for decisions, owners and dates, replay the moments that matter, then copy the corrected text into your notes." },
      ],
      tipsTitle: "Meeting-specific tips",
      tips: [
        "Tell participants the meeting is recorded and transcribed, and follow your organization's recording policy.",
        "Errors cluster where people talk over each other. Replay those passages before quoting them.",
        "EarScribe doesn't label speakers; add names at the start of important turns while you review.",
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
      title: "会议录音免费转文字：会后处理，无需上传",
      description: "免费在浏览器里把会议录音转成可搜索、带时间戳的文字。不需要机器人入会，录音不上传，可导出 TXT、SRT 或 VTT。",
      eyebrow: "会议录音转文字",
      intro: "EarScribe 在会后处理录音，而不是派机器人进会议。选择音频文件，在你的设备上生成带时间戳的文字稿，再搜索决议、待办和人名，整理好再发纪要。",
      benefits: ["不用机器人入会，也不上传", "搜索决议和待办事项", "按时间戳核对谁说了什么"],
      workflowTitle: "免费从会议录音整理出纪要",
      workflow: [
        { title: "拿到音频文件", body: "Zoom 本地录制自带一个纯音频的 M4A。Teams、Google Meet、腾讯会议等导出的通常是 MP4 视频，需要先提取音轨。" },
        { title: "在本机转写", body: "选择文件，用推荐模型，让浏览器处理即可。设备越慢，长会议需要的时间越长。" },
        { title: "整理成纪要", body: "搜索决议、负责人和日期，回听关键片段，再把改正后的文字复制到纪要里。" },
      ],
      tipsTitle: "会议录音小技巧",
      tips: [
        "告知参会者会议正在录音和转写，并遵守公司的录音规定。",
        "多人抢话的地方最容易出错，引用前请回听。",
        "EarScribe 不标注说话人，核对时在重要发言前补上名字。",
      ],
      faq: [
        { q: "Zoom 的纯音频文件在哪里？", a: "Zoom 本地录制会在“文档（Documents）/Zoom”下建一个文件夹，里面有 MP4 视频和纯音频 M4A。云录制也可以只下载音频。" },
        { q: "Teams、腾讯会议等录制的视频怎么提取音频？", a: "这些平台通常保存 MP4 视频。下载后提取音频即可：Mac 上用 QuickTime Player 的“文件 > 导出为 > 仅音频”生成 M4A；用 ffmpeg 可以执行 ffmpeg -i meeting.mp4 -vn -c:a copy meeting.m4a，不重新编码直接复制音轨。" },
        { q: "能进会议实时转写吗？", a: "不能。EarScribe 没有会议机器人，也没有实时模式，只转写你已有的录音。" },
        { q: "能区分谁说了什么吗？", a: "不能自动区分。文字稿是一条时间线，可以借助时间戳跳到每次换人的地方补上名字。" },
      ],
      screenshotAlt: "可搜索、带时间戳的会议录音文字稿",
    },
    ja: {
      title: "会議の録音を無料で文字起こし（会議後・アップロード不要）",
      description: "録音した会議を、ブラウザで無料で検索できるタイムスタンプ付きテキストに。ボットは参加せず、音声もアップロードしません。TXT・SRT・VTTで書き出せます。",
      eyebrow: "会議 録音 文字起こし",
      intro: "EarScribeは会議にボットを参加させるのではなく、会議後の録音を処理します。音声ファイルを選ぶと端末内でタイムスタンプ付きの文字起こしができるので、決定事項・ToDo・人名を検索して確認してから議事録を共有できます。",
      benefits: ["会議ボットもアップロードも不要", "決定事項やToDoを検索", "タイムスタンプで発言を確認"],
      workflowTitle: "録音から議事録まで無料で",
      workflow: [
        { title: "音声ファイルを用意する", body: "Zoomのローカル録画には音声のみのM4Aが含まれます。TeamsやGoogle MeetはMP4動画で保存されるので、先に音声を取り出してください。" },
        { title: "端末内で文字起こしする", body: "ファイルを選び、おすすめのモデルのままブラウザで処理します。長い会議ほど、低速な端末では時間がかかります。" },
        { title: "議事録にまとめる", body: "決定事項、担当者、期日を検索し、重要な場面を聞き直してから、修正した文章を議事録にコピーします。" },
      ],
      tipsTitle: "会議録音ならではのコツ",
      tips: [
        "参加者に録音と文字起こしを伝え、社内の録音ルールに従ってください。",
        "発言が重なる箇所に誤りが集中します。引用する前に聞き直しましょう。",
        "EarScribeは話者を区別しません。確認しながら、重要な発言の前に名前を加えてください。",
      ],
      faq: [
        { q: "Zoomの音声のみのファイルはどこにありますか？", a: "Zoomのローカル録画は「書類（Documents）/Zoom」内のフォルダに保存され、MP4動画と音声のみのM4Aが入っています。クラウド録画も音声のみでダウンロードできます。" },
        { q: "TeamsやGoogle Meetの録画から音声を取り出すには？", a: "どちらもMP4動画で保存されます（TeamsはOneDriveやSharePoint、MeetはGoogleドライブ）。ダウンロードしてから音声を書き出します。MacならQuickTime Playerの「ファイル」>「書き出す」>「オーディオのみ」でM4Aになり、ffmpegなら ffmpeg -i meeting.mp4 -vn -c:a copy meeting.m4a で再エンコードせずに音声を取り出せます。" },
        { q: "会議に参加してリアルタイムで文字起こしできますか？", a: "できません。EarScribeには会議ボットもリアルタイム機能もなく、手元にある録音を文字起こしします。" },
        { q: "誰が話したかを区別できますか？", a: "自動ではできません。文字起こしは1本のタイムラインなので、タイムスタンプで話者の切り替わりへ移動して名前を加えてください。" },
      ],
      screenshotAlt: "検索できるタイムスタンプ付きの会議録音の文字起こし",
    },
  },
};

export const MEETING_RECORDING_TO_TEXT_GUIDES: Record<ToolLocale, ToolGuide> = {
  en: {
    primaryKeyword: "meeting recording to text",
    supportingKeywords: ["transcribe meeting recording", "zoom recording to text", "teams recording to text", "google meet recording to text"],
    guideTitle: "Getting a usable transcript from a recorded meeting",
    guideIntro:
      "Most meeting tools record video. The quickest path to a transcript is the audio track, and each platform hands it to you a little differently.",
    sections: [
      {
        title: "Zoom, Teams and Google Meet recordings",
        paragraphs: [
          "Zoom's local recordings are saved in a folder under Documents/Zoom that contains the MP4 video and an audio-only M4A; choose the M4A. From Zoom's cloud recordings you can download an audio-only file.",
          "Microsoft Teams stores recordings as MP4 in OneDrive or SharePoint, and Google Meet saves them to the organizer's Google Drive. Download the MP4 and extract the audio before transcribing.",
        ],
      },
      {
        title: "Finding decisions and action items",
        paragraphs: [
          "Search the transcript for words people use when they decide or hand out work, such as \"agree\", \"next step\", \"deadline\" or a colleague's name, and replay each hit to confirm the context.",
          "Write the summary from the passages you checked. A decision paraphrased from a misheard sentence is the most common way meeting notes go wrong.",
        ],
      },
      {
        title: "Consent and sensitive meetings",
        paragraphs: [
          "Recording laws and company policies differ, and many require telling everyone that a meeting is recorded. Transcribing on your own device avoids sending the file to another service, but sharing the transcript is still covered by the same rules.",
          "EarScribe keeps a draft of the transcript in this browser so you can come back to it. On a shared computer, clear the site's data when you're done.",
        ],
      },
    ],
    checklistTitle: "Meeting notes checklist",
    checklist: [
      { title: "Audio", body: "Use Zoom's M4A, or the audio extracted from the MP4." },
      { title: "Decisions", body: "Search for them and replay each one." },
      { title: "Owners", body: "Confirm names and deadlines against the recording." },
      { title: "Sharing", body: "Remove anything that shouldn't leave the meeting." },
    ],
    limitsTitle: "Limits for meeting recordings",
    limits: [
      "Video files such as MP4 aren't accepted yet; extract the audio track first.",
      "No speaker identification or automatic summary; the transcript is a searchable record you edit.",
    ],
    imageSrc: image,
    imageAlt: "Transcript of a recorded meeting with timestamps for decisions and action items",
  },
  "zh-CN": {
    primaryKeyword: "会议录音转文字",
    supportingKeywords: ["会议录音转文字 免费", "会议录音整理", "zoom录音转文字", "腾讯会议录音转文字"],
    guideTitle: "从会议录音得到能用的文字稿",
    guideIntro: "大多数会议软件录的是视频。最快的办法是用音轨转写，而每个平台给你音频的方式都略有不同。",
    sections: [
      {
        title: "Zoom、Teams、Google Meet 和国内会议软件",
        paragraphs: [
          "Zoom 本地录制保存在“文档（Documents）/Zoom”下的文件夹里，包含 MP4 视频和纯音频 M4A，选 M4A 即可。Zoom 云录制也可以只下载音频文件。",
          "Microsoft Teams 把录制以 MP4 保存在 OneDrive 或 SharePoint，Google Meet 保存在组织者的 Google 云端硬盘；腾讯会议、飞书、钉钉导出的录制通常也是 MP4。下载后先提取音频再转写。",
        ],
      },
      {
        title: "找出决议和待办事项",
        paragraphs: [
          "在文字稿里搜索做决定、分配工作时常用的词，比如“确定”“下一步”“截止”或同事的名字，逐条回听确认上下文。",
          "只用核对过的段落写纪要。根据听错的句子转述出一个决定，是会议纪要最常见的错误。",
        ],
      },
      {
        title: "录音同意和敏感会议",
        paragraphs: [
          "各地法律和公司规定不同，很多都要求告知所有人会议正在录音。在自己的设备上转写避免了把文件交给其他服务，但分享文字稿仍然受同样的规定约束。",
          "EarScribe 会在当前浏览器里保存文字稿草稿，方便之后继续。在公用电脑上用完请清除网站数据。",
        ],
      },
    ],
    checklistTitle: "会议纪要清单",
    checklist: [
      { title: "音频", body: "用 Zoom 的 M4A，或从 MP4 提取的音频。" },
      { title: "决议", body: "逐条搜索并回听。" },
      { title: "负责人", body: "对照录音确认名字和截止日期。" },
      { title: "分享", body: "删掉不该流出会议的内容。" },
    ],
    limitsTitle: "会议录音的限制",
    limits: [
      "暂不支持 MP4 等视频文件，请先提取音轨。",
      "不识别说话人，也不自动生成摘要，文字稿是一份可搜索、由你编辑的记录。",
    ],
    imageSrc: image,
    imageAlt: "带时间戳、可查找决议和待办的会议录音文字稿",
  },
  ja: {
    primaryKeyword: "会議 録音 文字起こし",
    supportingKeywords: ["会議 録音 文字起こし 無料", "議事録 文字起こし", "zoom 録音 文字起こし", "teams 録画 文字起こし"],
    guideTitle: "録音した会議から使える文字起こしを作る",
    guideIntro: "多くの会議ツールは動画で録画します。いちばん早いのは音声トラックを文字起こしすることで、その音声の取り出し方はプラットフォームごとに少しずつ違います。",
    sections: [
      {
        title: "Zoom・Teams・Google Meetの録画",
        paragraphs: [
          "Zoomのローカル録画は「書類（Documents）/Zoom」内のフォルダに保存され、MP4動画と音声のみのM4Aが含まれます。M4Aを選んでください。Zoomのクラウド録画でも音声のみのファイルをダウンロードできます。",
          "Microsoft Teamsは録画をMP4としてOneDriveやSharePointに、Google Meetは主催者のGoogleドライブに保存します。MP4をダウンロードし、音声を取り出してから文字起こしします。",
        ],
      },
      {
        title: "決定事項とToDoを見つける",
        paragraphs: [
          "「決定」「次のステップ」「期限」、同僚の名前など、決めごとや作業の割り振りで使われる言葉を検索し、見つかった箇所を聞き直して文脈を確かめます。",
          "議事録は確認した箇所から書きましょう。聞き間違えた文から決定事項を言い換えてしまうのが、議事録でいちばん多い失敗です。",
        ],
      },
      {
        title: "録音の同意と機密性の高い会議",
        paragraphs: [
          "録音に関する法律や社内規程はさまざまで、多くは参加者全員への告知を求めています。自分の端末で文字起こしすれば他のサービスにファイルを渡さずに済みますが、文字起こしを共有するときは同じルールが適用されます。",
          "EarScribeは、あとで続きができるよう文字起こしの下書きをこのブラウザに保存します。共用PCでは、使い終わったらサイトデータを消去してください。",
        ],
      },
    ],
    checklistTitle: "議事録のチェックリスト",
    checklist: [
      { title: "音声", body: "ZoomのM4Aか、MP4から取り出した音声を使う。" },
      { title: "決定事項", body: "検索して一つずつ聞き直す。" },
      { title: "担当者", body: "名前と期日を録音と照合する。" },
      { title: "共有", body: "会議の外に出すべきでない内容を削る。" },
    ],
    limitsTitle: "会議録音での制限",
    limits: [
      "MP4などの動画ファイルにはまだ対応していません。先に音声トラックを取り出してください。",
      "話者の識別や要約の自動作成はありません。文字起こしは、検索して自分で編集する記録です。",
    ],
    imageSrc: image,
    imageAlt: "決定事項やToDoを確認できるタイムスタンプ付きの会議文字起こし",
  },
};
