import {
  TOOL_SLUGS,
  type ToolLocale,
  type ToolSlug,
} from "@/lib/site-routes";
import { M4A_TO_TEXT_PAGE } from "@/lib/tool-content/m4a-to-text";
import { WAV_TO_TEXT_PAGE } from "@/lib/tool-content/wav-to-text";
import { VOICE_MEMO_TO_TEXT_PAGE } from "@/lib/tool-content/voice-memo-to-text";
import { PODCAST_TRANSCRIPTION_PAGE } from "@/lib/tool-content/podcast-transcription";
import { MEETING_RECORDING_TO_TEXT_PAGE } from "@/lib/tool-content/meeting-recording-to-text";
import { WHISPER_ONLINE_PAGE } from "@/lib/tool-content/whisper-online";
import { TRANSCRIBE_AUDIO_LOCALLY_PAGE } from "@/lib/tool-content/transcribe-audio-locally";

export { TOOL_SLUGS, type ToolLocale, type ToolSlug };

export interface ToolCopy {
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  benefits: string[];
  workflowTitle: string;
  workflow: { title: string; body: string }[];
  tipsTitle: string;
  tips: string[];
  faq: { q: string; a: string }[];
  screenshotAlt: string;
}

export interface ToolPageDefinition {
  slug: ToolSlug;
  resultTab: "transcript" | "subtitles";
  copy: Record<ToolLocale, ToolCopy>;
}

export const TOOL_UI: Record<
  ToolLocale,
  {
    toolLabel: string;
    previewTitle: string;
    relatedTitle: string;
    faqTitle: string;
    stepLabel: string;
  }
> = {
  en: {
    toolLabel: "Use the converter",
    previewTitle: "Review the transcript before you export",
    relatedTitle: "Related audio tools",
    faqTitle: "Questions about this workflow",
    stepLabel: "Step",
  },
  "zh-CN": {
    toolLabel: "直接开始转换",
    previewTitle: "导出前先核对文字和时间戳",
    relatedTitle: "相关音频工具",
    faqTitle: "常见问题",
    stepLabel: "步骤",
  },
  ja: {
    toolLabel: "そのまま変換を始める",
    previewTitle: "書き出す前に文字とタイムスタンプを確認",
    relatedTitle: "関連する音声ツール",
    faqTitle: "この使い方についての質問",
    stepLabel: "ステップ",
  },
};

export const TOOL_PAGES: Record<ToolSlug, ToolPageDefinition> = {
  "audio-to-text": {
    slug: "audio-to-text",
    resultTab: "transcript",
    copy: {
      en: {
        title: "Free audio to text with timestamps",
        description:
          "Convert audio to editable, timestamped text in your browser. Free, unlimited, no sign-up, with TXT, SRT and VTT export.",
        eyebrow: "Audio to text converter",
        intro:
          "Choose an MP3, WAV, M4A, FLAC, OGG or WebM recording. EarScribe detects the spoken language, creates timestamped text, and lets you search, edit, replay and export the result without uploading the audio.",
        benefits: [
          "Free and unlimited, with no account or per-minute quota",
          "Click any timestamp to check the original recording",
          "Copy text or export TXT, SRT, VTT and JSON",
        ],
        workflowTitle: "From recording to usable text",
        workflow: [
          { title: "Choose the recording", body: "Use a browser-supported audio file. On memory-limited devices, shorter files and the balanced model are more reliable." },
          { title: "Use the recommended quality", body: "Most users can keep the balanced setting. Advanced model choices stay hidden until you need them." },
          { title: "Review the result", body: "Search the transcript, edit names or technical terms, replay uncertain lines, then export the format your next tool needs." },
        ],
        tipsTitle: "What improves transcription quality",
        tips: [
          "Clear speech and lower background noise usually matter more than choosing the largest model.",
          "For interviews, keep speakers close to the microphone and avoid music underneath speech.",
          "Check names, numbers and specialist terms against the recording before publishing.",
        ],
        faq: [
          { q: "Which audio formats can I convert to text?", a: "EarScribe accepts common browser-playable formats including MP3, WAV, M4A, OGG, FLAC and WebM." },
          { q: "Do I need to choose the spoken language?", a: "No. Whisper detects the language from the recording. You can verify the detected language in the result workspace." },
          { q: "Is the transcript editable?", a: "Yes. Edit individual timestamped sections, search the text, replay the matching audio and export the edited version." },
        ],
        screenshotAlt: "EarScribe timestamped transcript workspace with waveform, search, editing and export controls",
      },
      "zh-CN": {
        title: "免费把音频转成带时间戳的文字",
        description: "在浏览器中把录音转成可编辑、可搜索的带时间戳文字。免费、无限、无需注册，可导出 TXT、SRT 和 VTT。",
        eyebrow: "音频转文字工具",
        intro: "选择 MP3、WAV、M4A、FLAC、OGG 或 WebM 录音，EarScribe 会自动识别语言，生成带时间戳的文字。你可以搜索、修改、点击回听，再导出需要的格式；音频无需上传。",
        benefits: ["免费无限使用，无需注册，也没有按分钟额度", "点击任意时间戳，直接回听对应录音", "复制文字，或导出 TXT、SRT、VTT 和 JSON"],
        workflowTitle: "从录音到可用文字",
        workflow: [
          { title: "选择录音", body: "支持常见音频格式。手机或内存较小的电脑建议先处理较短文件，并使用均衡模式。" },
          { title: "使用推荐精度", body: "大多数录音直接使用均衡模式即可；需要更快或更高精度时，再展开高级选项。" },
          { title: "核对并导出", body: "搜索内容，修改人名和专业词，点击时间戳回听存疑片段，然后导出到剪辑、笔记或字幕工具。" },
        ],
        tipsTitle: "怎样让识别结果更准确",
        tips: ["人声清楚、背景噪音较少，通常比一味选择最大模型更重要。", "采访录音尽量让说话人靠近麦克风，避免音乐盖住人声。", "发布前重点核对人名、数字、品牌名和专业术语。"],
        faq: [
          { q: "支持哪些音频格式转文字？", a: "支持浏览器可以解码的常见格式，包括 MP3、WAV、M4A、OGG、FLAC 和 WebM。" },
          { q: "需要提前选择录音语言吗？", a: "不需要。Whisper 会自动识别语言，完成后可以在结果工作台查看识别结果。" },
          { q: "识别出来的文字可以修改吗？", a: "可以。你可以逐段编辑、搜索全文、回听对应录音，并导出修改后的版本。" },
        ],
        screenshotAlt: "EarScribe 带波形、搜索、编辑和导出功能的时间戳文字工作台",
      },
      ja: {
        title: "音声をタイムスタンプ付きテキストに無料変換",
        description: "音声をブラウザ上で編集・検索できる文字起こしに変換。無料・回数無制限・登録不要で、TXT、SRT、VTTに書き出せます。",
        eyebrow: "音声文字起こしツール",
        intro: "MP3、WAV、M4A、FLAC、OGG、WebMを選ぶと、EarScribeが言語を自動判定し、タイムスタンプ付きで文字起こしします。検索、修正、該当箇所の聞き直し、書き出しまで行え、音声ファイルのアップロードは不要です。",
        benefits: ["無料・回数無制限・アカウント登録不要", "タイムスタンプを押して該当箇所をすぐ聞き直せる", "テキストのコピーとTXT・SRT・VTT・JSON書き出し"],
        workflowTitle: "録音から使えるテキストまで",
        workflow: [
          { title: "録音を選ぶ", body: "一般的な音声形式に対応しています。メモリの少ない端末では、短めのファイルとバランス設定が安定します。" },
          { title: "おすすめ設定で始める", body: "通常はバランス設定のままで十分です。速度や精度を調整したい場合だけ詳細設定を開きます。" },
          { title: "確認して書き出す", body: "人名や専門用語を修正し、気になる箇所を聞き直してから、字幕やメモに必要な形式で保存します。" },
        ],
        tipsTitle: "文字起こし精度を上げるポイント",
        tips: ["大きなモデルを選ぶだけでなく、人の声が明瞭で雑音が少ないことが重要です。", "インタビューでは話者とマイクの距離を近づけ、BGMが声に重ならないようにします。", "公開前に人名、数字、商品名、専門用語を録音と照合してください。"],
        faq: [
          { q: "どの音声形式を文字起こしできますか？", a: "MP3、WAV、M4A、OGG、FLAC、WebMなど、ブラウザで再生できる一般的な形式に対応します。" },
          { q: "音声の言語を先に選ぶ必要がありますか？", a: "必要ありません。Whisperが録音から言語を自動判定し、結果画面で確認できます。" },
          { q: "文字起こし結果は編集できますか？", a: "はい。タイムスタンプごとに修正し、検索や聞き直しを行ったうえで編集済みの内容を書き出せます。" },
        ],
        screenshotAlt: "波形、検索、編集、書き出しを備えたEarScribeのタイムスタンプ付き文字起こし画面",
      },
    },
  },
  "mp3-to-text": {
    slug: "mp3-to-text",
    resultTab: "transcript",
    copy: {
      en: {
        title: "Convert MP3 to text for free",
        description: "Turn an MP3 recording into searchable, editable text with timestamps. Free, unlimited and no sign-up, with TXT and subtitle export.",
        eyebrow: "MP3 to text",
        intro: "Drop an MP3 from a voice recorder, podcast, meeting or phone. EarScribe decodes it locally, detects the spoken language, and creates text you can verify against the original audio.",
        benefits: ["No upload queue or account creation", "Works with long-form speech within your device limits", "Keeps timestamps for replay and subtitle export"],
        workflowTitle: "A practical MP3 transcription workflow",
        workflow: [
          { title: "Check the source MP3", body: "A clear mono or stereo recording is enough. Very low bitrates and aggressive noise reduction can remove speech detail." },
          { title: "Transcribe in the browser", body: "The first run downloads a speech model. Later recordings can reuse the cached model on the same browser." },
          { title: "Correct high-risk details", body: "Search for names, dates, prices and technical terms, then click the timestamp to hear the source before exporting." },
        ],
        tipsTitle: "MP3-specific checks",
        tips: ["Converting the MP3 to WAV first does not restore detail already lost during compression.", "If a recording contains hours of silence, trim it before transcription to reduce memory use.", "Keep the original MP3 until the transcript and subtitles have been reviewed."],
        faq: [
          { q: "Can I convert MP3 to text without uploading it?", a: "Yes. The selected MP3 is decoded and transcribed in the browser rather than sent to an EarScribe server." },
          { q: "Will a higher-bitrate MP3 be more accurate?", a: "Only when it preserves clearer speech. Microphone placement, noise and overlapping speakers usually have a larger effect." },
          { q: "Can I turn the same MP3 into subtitles?", a: "Yes. The timestamped result can be exported as SRT or VTT after you review the cue text." },
        ],
        screenshotAlt: "MP3 converted to editable timestamped text in EarScribe",
      },
      "zh-CN": {
        title: "免费把 MP3 转成文字",
        description: "把 MP3 录音转成可搜索、可编辑的带时间戳文字。免费无限使用、无需注册，并可导出 TXT 和字幕。",
        eyebrow: "MP3 转文字",
        intro: "选择录音笔、播客、会议或手机里的 MP3，EarScribe 会在浏览器中解码，自动识别语言，并生成可以和原音逐段核对的文字。",
        benefits: ["无需上传排队，也不用注册账号", "在设备承受范围内处理长录音", "保留时间戳，方便回听和导出字幕"],
        workflowTitle: "实用的 MP3 转文字流程",
        workflow: [
          { title: "先检查原始录音", body: "普通单声道或立体声 MP3 都可以。码率过低、降噪过重可能已经损失部分人声细节。" },
          { title: "在浏览器中识别", body: "首次使用需要下载语音模型，之后同一浏览器可以复用缓存模型。" },
          { title: "重点核对关键信息", body: "搜索人名、日期、价格和专业词，点击时间戳回听原音，确认后再导出。" },
        ],
        tipsTitle: "MP3 文件需要注意什么",
        tips: ["把已经压缩过的 MP3 转成 WAV，并不能找回丢失的人声细节。", "如果录音里有很长的静音，先裁掉可以减少内存占用。", "完成文字和字幕核对前，建议保留原始 MP3。"],
        faq: [
          { q: "MP3 不上传也能转文字吗？", a: "可以。选中的 MP3 会在浏览器中解码和识别，不会发送到 EarScribe 服务器。" },
          { q: "MP3 码率越高，识别就越准吗？", a: "只有在更好地保留人声时才有帮助。麦克风距离、噪音和多人同时说话通常影响更大。" },
          { q: "同一个 MP3 可以生成字幕吗？", a: "可以。核对带时间戳的结果后，可以直接导出 SRT 或 VTT。" },
        ],
        screenshotAlt: "EarScribe 将 MP3 转成可编辑的带时间戳文字",
      },
      ja: {
        title: "MP3を無料で文字起こし",
        description: "MP3録音を検索・編集できるタイムスタンプ付きテキストに変換。無料・回数無制限・登録不要で、TXTや字幕を書き出せます。",
        eyebrow: "MP3文字起こし",
        intro: "ボイスレコーダー、ポッドキャスト、会議、スマートフォンのMP3を選ぶだけで、ブラウザ内で音声を解析し、言語を自動判定して、元音声と照合できる文字起こしを作成します。",
        benefits: ["アップロード待ちもアカウント登録も不要", "端末の性能に合わせて長めの録音にも対応", "聞き直しと字幕書き出しに使えるタイムスタンプ"],
        workflowTitle: "実用的なMP3文字起こしの流れ",
        workflow: [
          { title: "元のMP3を確認", body: "一般的なモノラル・ステレオ録音に対応します。低すぎるビットレートや強いノイズ除去では、声の情報が失われている場合があります。" },
          { title: "ブラウザで文字起こし", body: "初回は音声認識モデルをダウンロードします。同じブラウザでは次回からキャッシュを再利用できます。" },
          { title: "重要な情報を確認", body: "人名、日付、金額、専門用語を検索し、タイムスタンプから元音声を聞いて修正してから保存します。" },
        ],
        tipsTitle: "MP3で確認したいポイント",
        tips: ["圧縮済みのMP3をWAVに変換しても、失われた音声情報は戻りません。", "長い無音部分は先に削ると、処理時のメモリ使用量を減らせます。", "文字起こしと字幕の確認が終わるまで元のMP3を保管してください。"],
        faq: [
          { q: "MP3をアップロードせずに文字起こしできますか？", a: "はい。選択したMP3はブラウザ内で解析され、EarScribeのサーバーには送信されません。" },
          { q: "MP3のビットレートが高いほど正確ですか？", a: "声をより明瞭に保てている場合は有利ですが、マイク位置、雑音、同時発話の影響のほうが大きいことがあります。" },
          { q: "同じMP3から字幕も作れますか？", a: "はい。タイムスタンプ付きの結果を確認したあと、SRTまたはVTTで書き出せます。" },
        ],
        screenshotAlt: "MP3を編集可能なタイムスタンプ付きテキストへ変換したEarScribe画面",
      },
    },
  },
  "audio-to-srt": {
    slug: "audio-to-srt",
    resultTab: "subtitles",
    copy: {
      en: {
        title: "Convert audio to SRT subtitles",
        description: "Generate timestamped SRT subtitles from audio, check line length and timing issues, then export. Free, unlimited and no sign-up.",
        eyebrow: "Audio to SRT subtitle generator",
        intro: "Create SRT or VTT subtitles from MP3, WAV, M4A and other audio. EarScribe keeps Whisper timestamps, flags common readability problems, and lets you improve line breaks before export.",
        benefits: ["Subtitle check for long, fast, repeated or overlapping cues", "Click a cue to listen before changing the text", "Export SRT, VTT, TXT or JSON from the same result"],
        workflowTitle: "From audio to publishable subtitles",
        workflow: [
          { title: "Generate timestamped cues", body: "Transcribe the recording and keep the model-generated timing for each segment." },
          { title: "Run the subtitle check", body: "Review cues that are too long, unusually fast, repeated, empty or overlapping." },
          { title: "Watch through and export", body: "Improve line breaks, listen through important sections, then export SRT or VTT for your editor or video platform." },
        ],
        tipsTitle: "Subtitle readability basics",
        tips: ["Two short lines are usually easier to read than one long line.", "Fast dialogue may need shorter wording or more carefully split cues.", "Names, numbers and on-screen terminology deserve a final manual check."],
        faq: [
          { q: "What is the difference between SRT and VTT?", a: "Both store timed captions. SRT is widely accepted by video editors and platforms; VTT is designed for web video and supports additional web caption features." },
          { q: "Does EarScribe automatically fix every subtitle?", a: "It can improve line breaks and flag common problems, but important videos still need a final watch-through for wording and timing." },
          { q: "Can I edit subtitle text before downloading?", a: "Yes. Edit the timestamped transcript, return to the subtitle check, and export the updated SRT or VTT." },
        ],
        screenshotAlt: "EarScribe subtitle check showing timestamped cues and SRT export",
      },
      "zh-CN": {
        title: "把音频转换成 SRT 字幕",
        description: "从音频生成带时间轴的 SRT 字幕，检查行长、阅读速度和时间重叠后再导出。免费无限使用，无需注册。",
        eyebrow: "音频转 SRT 字幕工具",
        intro: "从 MP3、WAV、M4A 等音频生成 SRT 或 VTT。EarScribe 会保留 Whisper 时间戳，标出常见的可读性问题，并在导出前帮助你优化断行。",
        benefits: ["检查过长、过快、重复、空白和时间重叠字幕", "点击字幕即可回听原音，再决定是否修改", "同一结果可导出 SRT、VTT、TXT 和 JSON"],
        workflowTitle: "从音频到可发布字幕",
        workflow: [
          { title: "生成带时间轴的字幕", body: "识别音频，并保留模型为每个片段生成的时间范围。" },
          { title: "运行字幕体检", body: "集中检查过长、阅读过快、重复、空白或时间重叠的字幕。" },
          { title: "完整预览后导出", body: "优化断行，回听重点片段，再导出 SRT 或 VTT 到剪辑软件和视频平台。" },
        ],
        tipsTitle: "字幕可读性的基本原则",
        tips: ["两行短字幕通常比一整行长句更容易阅读。", "语速很快时，可能需要精简文字或更合理地拆分时间段。", "人名、数字和画面里的专有词，发布前应人工核对。"],
        faq: [
          { q: "SRT 和 VTT 有什么区别？", a: "两者都保存带时间轴的字幕。SRT 被多数剪辑软件和平台支持；VTT 更适合网页视频，并支持更多 Web 字幕能力。" },
          { q: "EarScribe 能自动修好所有字幕吗？", a: "它可以优化断行并标出常见问题，但重要视频仍应完整预览，人工确认措辞和时间。" },
          { q: "下载前可以修改字幕文字吗？", a: "可以。先编辑带时间戳的文字，再回到字幕体检，导出更新后的 SRT 或 VTT。" },
        ],
        screenshotAlt: "EarScribe 字幕体检界面，显示时间戳字幕和 SRT 导出",
      },
      ja: {
        title: "音声からSRT字幕を作成",
        description: "音声からタイムコード付きSRT字幕を生成し、文字数や表示速度、時間の重なりを確認して書き出せます。無料・回数無制限・登録不要です。",
        eyebrow: "音声からSRT字幕を作成",
        intro: "MP3、WAV、M4Aなどの音声からSRTまたはVTT字幕を作成します。Whisperのタイムスタンプを保ち、読みにくい字幕を見つけ、書き出し前に改行を整えられます。",
        benefits: ["長すぎる・速すぎる・重複・空欄・時間重複の字幕を確認", "字幕を押して元音声を聞いてから修正", "同じ結果からSRT・VTT・TXT・JSONを書き出し"],
        workflowTitle: "音声から公開できる字幕まで",
        workflow: [
          { title: "タイムコード付き字幕を生成", body: "音声を文字起こしし、各区間に生成されたタイムスタンプを保ちます。" },
          { title: "字幕チェックを開く", body: "長すぎる、表示が速い、重複、空欄、時間が重なる字幕をまとめて確認します。" },
          { title: "通して確認して書き出す", body: "改行を整え、重要な箇所を聞き直してから、編集ソフトや動画サイト向けにSRT・VTTを保存します。" },
        ],
        tipsTitle: "読みやすい字幕の基本",
        tips: ["長い1行より、短い2行のほうが読みやすい場合が多くあります。", "早口の場面では、文を短くするか字幕区間を丁寧に分けます。", "人名、数字、画面に出る固有名詞は最後に手作業で確認してください。"],
        faq: [
          { q: "SRTとVTTは何が違いますか？", a: "どちらも時間付き字幕形式です。SRTは多くの編集ソフトや動画サイトに対応し、VTTはWeb動画向けの機能を備えています。" },
          { q: "すべての字幕を自動で直せますか？", a: "改行の調整と一般的な問題の検出はできますが、重要な動画は最後に通して再生し、文章とタイミングを確認してください。" },
          { q: "ダウンロード前に字幕を編集できますか？", a: "はい。タイムスタンプ付きテキストを編集し、字幕チェックに戻ってから更新済みのSRT・VTTを書き出せます。" },
        ],
        screenshotAlt: "タイムスタンプ付き字幕とSRT書き出しを表示するEarScribeの字幕チェック画面",
      },
    },
  },
  "interview-transcription": {
    slug: "interview-transcription",
    resultTab: "transcript",
    copy: {
      en: {
        title: "Interview transcription you can verify against the recording",
        description: "Transcribe interview audio into searchable, editable text with timestamps. Replay quotes, correct names and export without uploading the audio.",
        eyebrow: "Interview transcription",
        intro: "Turn research interviews, reporting calls, oral histories and customer conversations into timestamped text. Search for a topic, click back to the exact recording, correct important details and export a clean transcript.",
        benefits: ["Search long interviews instead of scrubbing the whole recording", "Verify quotes and names from the original audio", "Keep sensitive source audio on the current device"],
        workflowTitle: "A safer interview review process",
        workflow: [
          { title: "Transcribe the source recording", body: "Use the recommended model first. Noisy field recordings may benefit from a higher-accuracy option on capable hardware." },
          { title: "Find claims and quotations", body: "Search the text, click the timestamp and listen to the surrounding audio before relying on a quote." },
          { title: "Clean the deliverable", body: "Correct names, organizations, numbers and terminology, then export text for notes, coding or publication." },
        ],
        tipsTitle: "What interview transcripts still need from a human",
        tips: ["Speaker identification is not automatic yet, so add names where the distinction matters.", "Treat punctuation as a reading aid, not evidence of the speaker's exact phrasing.", "Keep consent, retention and publication rules separate from the transcription tool itself."],
        faq: [
          { q: "Can EarScribe identify different speakers?", a: "Not yet. The transcript keeps timestamps, but speaker diarization and automatic speaker labels are not currently provided." },
          { q: "Should I publish an interview transcript without checking it?", a: "No. Always verify quotations, names, numbers and statements that could change meaning or attribution." },
          { q: "Is interview audio uploaded?", a: "The selected audio is processed in the browser and is not uploaded to an EarScribe server. See the Privacy page for model and analytics details." },
        ],
        screenshotAlt: "Interview transcript with searchable timestamped sections and audio replay",
      },
      "zh-CN": {
        title: "可以逐句回听核对的采访录音转文字",
        description: "把采访录音转成可搜索、可编辑的带时间戳文字。核对引语、修改人名并导出，音频无需上传。",
        eyebrow: "采访录音转文字",
        intro: "把媒体采访、用户访谈、口述历史和研究录音整理成带时间戳的文字。搜索主题，点击回到原录音，核对关键信息，再导出干净的文字稿。",
        benefits: ["直接搜索长采访，不用反复拖动整段录音", "从原音核对引语、人名和数字", "敏感采访音频保留在当前设备处理"],
        workflowTitle: "更可靠的采访核对流程",
        workflow: [
          { title: "先生成采访文字稿", body: "默认使用推荐模式。环境嘈杂的外采录音，在设备允许时可以尝试更高精度。" },
          { title: "定位观点和引语", body: "搜索文字，点击时间戳，并听取前后语境，再决定是否引用。" },
          { title: "整理可交付稿件", body: "修正人名、机构、数字和专业术语，然后导出用于笔记、研究编码或发表。" },
        ],
        tipsTitle: "采访文字稿仍需要人工做什么",
        tips: ["目前不会自动区分说话人，重要位置需要手动补充姓名。", "标点主要用于帮助阅读，不能替代对说话人原意的核对。", "采访授权、保存期限和公开范围，应独立于转录工具进行管理。"],
        faq: [
          { q: "EarScribe 能自动区分不同说话人吗？", a: "目前不能。文字稿会保留时间戳，但暂不提供说话人分离和自动姓名标签。" },
          { q: "采访稿可以不核对就直接发布吗？", a: "不建议。引语、人名、数字以及可能改变含义或归属的内容都应回听确认。" },
          { q: "采访录音会被上传吗？", a: "选中的音频会在浏览器中处理，不会上传到 EarScribe 服务器。模型和统计信息边界请查看隐私页。" },
        ],
        screenshotAlt: "可搜索、带时间戳并支持回听的采访文字稿",
      },
      ja: {
        title: "録音を聞き直して確認できるインタビュー文字起こし",
        description: "インタビュー音声を検索・編集できるタイムスタンプ付きテキストに変換。発言や人名を聞き直し、音声をアップロードせずに保存できます。",
        eyebrow: "インタビュー文字起こし",
        intro: "取材、ユーザーインタビュー、オーラルヒストリー、調査録音をタイムスタンプ付きテキストにします。話題を検索し、元音声の該当箇所に戻って重要な情報を確認してから、整えた原稿を書き出せます。",
        benefits: ["長い録音を何度もシークせず、テキストから検索", "引用、人名、数字を元音声で確認", "機密性の高い録音を現在の端末内で処理"],
        workflowTitle: "確実に確認するためのインタビュー整理",
        workflow: [
          { title: "録音を文字起こし", body: "まずはおすすめ設定を使います。雑音の多い現場録音では、端末性能に余裕があれば高精度設定も検討します。" },
          { title: "発言と引用を探す", body: "テキストを検索し、タイムスタンプから前後の音声を聞いて、引用に使えるか確認します。" },
          { title: "原稿を整える", body: "人名、組織名、数字、専門用語を修正し、メモ、分析、記事制作に必要な形式で保存します。" },
        ],
        tipsTitle: "人が確認すべきポイント",
        tips: ["現在は話者を自動識別しないため、区別が必要な箇所には名前を追加してください。", "句読点は読みやすさの補助であり、発言の正確な言い回しを保証するものではありません。", "同意、保存期間、公開範囲は文字起こしツールとは別に管理してください。"],
        faq: [
          { q: "複数の話者を自動で判別できますか？", a: "現在は対応していません。タイムスタンプは保持されますが、話者分離と自動ラベルは提供していません。" },
          { q: "確認せずにインタビュー原稿を公開できますか？", a: "推奨しません。引用、人名、数字、意味や発言者を左右する内容は元音声で確認してください。" },
          { q: "インタビュー音声はアップロードされますか？", a: "選択した音声はブラウザ内で処理され、EarScribeのサーバーには送信されません。モデルやアクセス解析についてはプライバシーページをご覧ください。" },
        ],
        screenshotAlt: "検索、タイムスタンプ、音声の聞き直しに対応したインタビュー文字起こし",
      },
    },
  },
  "lecture-transcription": {
    slug: "lecture-transcription",
    resultTab: "transcript",
    copy: {
      en: {
        title: "Turn lecture recordings into searchable notes",
        description: "Transcribe lectures and recorded lessons into searchable, editable text with timestamps. Free, unlimited and no sign-up.",
        eyebrow: "Lecture transcription",
        intro: "Convert a recorded lecture, seminar, webinar or revision session into text you can search and revisit. Use timestamps to hear the lecturer's explanation, correct course terminology, and export clean notes.",
        benefits: ["Search for a concept instead of replaying the full class", "Return to the exact explanation from a timestamp", "Edit course terms before exporting study notes"],
        workflowTitle: "From a recorded class to useful study material",
        workflow: [
          { title: "Choose the lesson recording", body: "Use the original recording when possible. Recordings captured close to the lecturer generally transcribe better than distant room audio." },
          { title: "Search and listen", body: "Find the topic, formula or term in the transcript, then replay the surrounding explanation from its timestamp." },
          { title: "Build the final notes", body: "Correct terminology and remove irrelevant sections before exporting text to your notes or reference system." },
        ],
        tipsTitle: "Use transcripts as a study aid, not a replacement",
        tips: ["A transcript can miss diagrams, equations and gestures that were only visible on screen or a board.", "Keep timestamps when an explanation depends on tone, emphasis or visual context.", "Check your institution's recording and sharing policy before transcribing a class."],
        faq: [
          { q: "Can EarScribe transcribe a two-hour lecture?", a: "It may work on capable devices, but browser memory is the practical limit. Splitting long recordings is more reliable on phones and low-memory computers." },
          { q: "Can it understand technical course vocabulary?", a: "Whisper can recognize many terms, but names, formulas and specialist vocabulary still need review. Editing is available in the result workspace." },
          { q: "Can I use the transcript as subtitles for a lecture video?", a: "Yes. After checking the text and timing, export SRT or VTT and add it to the video platform or editor." },
        ],
        screenshotAlt: "Searchable lecture transcript with timestamps and editable study text",
      },
      "zh-CN": {
        title: "把课堂录音整理成可搜索的文字笔记",
        description: "把课程、讲座和网课录音转成可搜索、可编辑的带时间戳文字。免费无限使用，无需注册。",
        eyebrow: "课堂录音转文字",
        intro: "把课堂、讲座、网课或复习录音转成可以搜索和反复查看的文字。通过时间戳回听老师的原始讲解，修正课程术语，再导出干净的学习笔记。",
        benefits: ["搜索知识点，不必从头重听整节课", "从时间戳回到老师的具体讲解", "修正课程术语后再导出学习笔记"],
        workflowTitle: "从课堂录音到可用学习资料",
        workflow: [
          { title: "选择课程录音", body: "尽量使用原始录音。靠近老师录制的人声，通常比教室后排的远距离录音更容易识别。" },
          { title: "搜索并回听", body: "在文字稿中查找知识点、公式名称或术语，再从时间戳回听前后讲解。" },
          { title: "整理最终笔记", body: "修正课程词汇，删除无关片段，再把文字导出到笔记或资料库。" },
        ],
        tipsTitle: "文字稿是学习辅助，不是课堂替代品",
        tips: ["板书、公式、图表和手势如果只出现在画面里，文字稿无法完整表达。", "涉及语气、强调或画面语境时，应保留时间戳并回看原内容。", "转录课堂前，应先确认学校和老师对录音、保存和分享的规定。"],
        faq: [
          { q: "两小时的课堂录音可以转文字吗？", a: "性能较好的设备可能可以处理，但实际限制来自浏览器内存。手机和低内存电脑建议先拆分长录音。" },
          { q: "专业课程术语能识别吗？", a: "Whisper 能识别不少术语，但人名、公式和专业词仍需要核对，可以在结果工作台直接修改。" },
          { q: "课堂文字稿可以导出成视频字幕吗？", a: "可以。核对文字和时间后，导出 SRT 或 VTT，再添加到视频平台或剪辑软件。" },
        ],
        screenshotAlt: "带搜索、时间戳和编辑功能的课堂录音文字稿",
      },
      ja: {
        title: "講義録音を検索できる学習ノートに変換",
        description: "講義や授業の録音を検索・編集できるタイムスタンプ付きテキストに変換。無料・回数無制限・登録不要です。",
        eyebrow: "講義・授業の文字起こし",
        intro: "講義、ゼミ、ウェビナー、復習用の録音を検索できるテキストにします。タイムスタンプから先生の説明を聞き直し、授業固有の用語を修正して、読みやすいノートとして保存できます。",
        benefits: ["授業全体を聞き直さず、知りたい概念を検索", "タイムスタンプから該当する説明へ戻れる", "授業用語を修正してから学習ノートを書き出し"],
        workflowTitle: "授業録音から使える学習資料まで",
        workflow: [
          { title: "授業の録音を選ぶ", body: "できるだけ元の録音を使います。教室後方の遠い音声より、先生の近くで録った音声のほうが認識しやすくなります。" },
          { title: "検索して聞き直す", body: "概念、数式名、専門用語を検索し、タイムスタンプから前後の説明を再生します。" },
          { title: "最終ノートを整える", body: "授業固有の用語を修正し、不要な部分を除いてから、ノートや資料管理ツールへ保存します。" },
        ],
        tipsTitle: "文字起こしは授業の補助として使う",
        tips: ["板書、数式、図、身ぶりなど映像だけの情報は文字起こしに含まれません。", "話し方や強調、映像の文脈が重要な箇所はタイムスタンプを残してください。", "授業を文字起こしする前に、学校や講師の録音・共有ルールを確認してください。"],
        faq: [
          { q: "2時間の講義も文字起こしできますか？", a: "高性能な端末では処理できる場合がありますが、実際の上限はブラウザのメモリです。スマートフォンやメモリの少ないPCでは分割が安定します。" },
          { q: "専門的な授業用語も認識できますか？", a: "多くの用語に対応しますが、人名、数式、専門用語は確認が必要です。結果画面で直接修正できます。" },
          { q: "講義動画の字幕として使えますか？", a: "はい。文章とタイミングを確認してからSRTまたはVTTを書き出し、動画サイトや編集ソフトに追加できます。" },
        ],
        screenshotAlt: "検索、タイムスタンプ、編集に対応した講義録音の文字起こし画面",
      },
    },
  },
  "m4a-to-text": M4A_TO_TEXT_PAGE,
  "wav-to-text": WAV_TO_TEXT_PAGE,
  "voice-memo-to-text": VOICE_MEMO_TO_TEXT_PAGE,
  "podcast-transcription": PODCAST_TRANSCRIPTION_PAGE,
  "meeting-recording-to-text": MEETING_RECORDING_TO_TEXT_PAGE,
  "whisper-online": WHISPER_ONLINE_PAGE,
  "transcribe-audio-locally": TRANSCRIBE_AUDIO_LOCALLY_PAGE,
};

export function isToolSlug(value: string): value is ToolSlug {
  return (TOOL_SLUGS as readonly string[]).includes(value);
}

export function getToolPage(locale: ToolLocale, slug: ToolSlug) {
  const page = TOOL_PAGES[slug];
  return { ...page, locale, text: page.copy[locale], ui: TOOL_UI[locale] };
}
