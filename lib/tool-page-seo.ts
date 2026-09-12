import type { ToolLocale, ToolSlug } from "@/lib/site-routes";
import { M4A_TO_TEXT_GUIDES } from "@/lib/tool-content/m4a-to-text";
import { WAV_TO_TEXT_GUIDES } from "@/lib/tool-content/wav-to-text";
import { VOICE_MEMO_TO_TEXT_GUIDES } from "@/lib/tool-content/voice-memo-to-text";
import { PODCAST_TRANSCRIPTION_GUIDES } from "@/lib/tool-content/podcast-transcription";
import { MEETING_RECORDING_TO_TEXT_GUIDES } from "@/lib/tool-content/meeting-recording-to-text";
import { WHISPER_ONLINE_GUIDES } from "@/lib/tool-content/whisper-online";
import { TRANSCRIBE_AUDIO_LOCALLY_GUIDES } from "@/lib/tool-content/transcribe-audio-locally";

export interface ToolGuideSection {
  title: string;
  paragraphs: string[];
}

export interface ToolGuideCheck {
  title: string;
  body: string;
}

export interface ToolGuide {
  primaryKeyword: string;
  supportingKeywords: string[];
  guideTitle: string;
  guideIntro: string;
  sections: ToolGuideSection[];
  checklistTitle: string;
  checklist: ToolGuideCheck[];
  limitsTitle: string;
  limits: string[];
  imageSrc: string;
  imageAlt: string;
}

export const TOOL_GUIDES: Record<
  ToolLocale,
  Record<ToolSlug, ToolGuide>
> = {
  en: {
    "audio-to-text": {
      primaryKeyword: "audio to text with timestamps",
      supportingKeywords: [
        "timestamped transcript",
        "editable audio transcript",
        "browser audio transcription",
        "audio transcript export",
      ],
      guideTitle: "Make an audio transcript you can check",
      guideIntro:
        "A useful transcript is more than a paragraph of guessed words. It gives you a way back to the recording, so you can verify a quote, fix a name, or find the exact moment before you share it.",
      sections: [
        {
          title: "Start with the recording you actually have",
          paragraphs: [
            "MP3, WAV, M4A, FLAC, OGG and WebM files can be selected directly. Clear speech and a microphone close to the speaker usually improve the result more than a larger model does.",
            "The first run downloads the selected Whisper model. After that, the browser may reuse its cache. Long files still depend on available device memory, so trimming long silence is a practical first step.",
          ],
        },
        {
          title: "Use timestamps as an evidence trail",
          paragraphs: [
            "Search the transcript for a person, number or phrase, then click its timestamp to replay the matching audio. This is the fastest way to catch a plausible-looking mistake that spellcheck would miss.",
            "For publication, compare names, dates, prices and specialist terms with the source. EarScribe helps you locate the evidence; it does not replace a human review of important claims.",
          ],
        },
        {
          title: "Export the same reviewed text in the right format",
          paragraphs: [
            "Use TXT when you need a clean document, SRT or VTT when the timing must travel with subtitles, and JSON when you need the raw segments and timing for another workflow.",
            "Edits made in the workspace are used by copy and export, so you can correct the transcript once instead of repairing several downloaded files.",
          ],
        },
      ],
      checklistTitle: "A quick review before you publish",
      checklist: [
        { title: "Names", body: "Replay every person, company and place name that matters to the story." },
        { title: "Numbers", body: "Check dates, prices, measurements and percentages against the audio." },
        { title: "Context", body: "Listen to the sentence before and after an excerpt you plan to quote." },
        { title: "Output", body: "Choose TXT, SRT, VTT or JSON based on the next tool, not the file extension you started with." },
      ],
      limitsTitle: "What this page does not promise",
      limits: [
        "Local processing reduces upload exposure, but your browser, device, extensions and exported files still need normal security controls.",
        "Whisper can mishear overlapping speakers, music, heavy noise and specialist vocabulary. Keep the source recording for review.",
      ],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "Timestamped audio transcript with waveform, search and export controls",
    },
    "mp3-to-text": {
      primaryKeyword: "mp3 to text converter free",
      supportingKeywords: [
        "convert MP3 to text online",
        "MP3 transcription no sign up",
        "MP3 to SRT",
        "transcribe MP3 locally",
      ],
      guideTitle: "Convert an MP3 without losing the useful trail",
      guideIntro:
        "When the file in front of you is an MP3, you should not have to convert it to another format before you can read it. EarScribe keeps the original file, creates timestamped text, and gives you a review path before export.",
      sections: [
        {
          title: "MP3 can go straight into the browser",
          paragraphs: [
            "A voice memo, podcast, meeting recording or recorder file can be selected as-is. The browser decodes the MP3 locally and the transcription model detects the spoken language from the recording.",
            "Converting an already-compressed MP3 to WAV cannot restore detail that was removed during compression. If the recording has long silence, trimming it first usually helps memory use more than changing its container.",
          ],
        },
        {
          title: "Find the risky parts before you export",
          paragraphs: [
            "Search for names, dates, prices and technical terms, then click the timestamp beside the match. You can listen to the source and edit the exact segment instead of scanning the entire recording again.",
            "A higher bitrate is useful only when it preserves clearer speech. Microphone distance, background noise and people speaking at the same time often matter more.",
          ],
        },
        {
          title: "Turn one MP3 into text or subtitles",
          paragraphs: [
            "Copy or export TXT for notes and research. Choose SRT or VTT when the transcript will be loaded into a video editor or web player. The same reviewed segments keep their timestamps in each format.",
            "Keep the original MP3 until the text and subtitles have been checked. It is the source you need when a word, number or name looks uncertain later.",
          ],
        },
      ],
      checklistTitle: "MP3 preparation and review checklist",
      checklist: [
        { title: "Keep the original", body: "Do not overwrite the source file while you prepare a cleaned or trimmed copy." },
        { title: "Check silence", body: "Remove hours of empty room tone before processing when the file is unusually long." },
        { title: "Replay names", body: "Use timestamps to verify names, numbers and phrases that look unusual." },
        { title: "Pick the output", body: "TXT is for reading; SRT and VTT keep timing for captions and web video." },
      ],
      limitsTitle: "MP3 limitations worth knowing",
      limits: [
        "The browser and device determine the practical length of a file. A free and unlimited service does not mean every device can hold an hours-long model run.",
        "Changing MP3 to WAV does not improve speech that was already masked by clipping, music, distance or aggressive noise reduction.",
      ],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "MP3 transcription workspace showing timestamps, waveform, search and export",
    },
    "audio-to-srt": {
      primaryKeyword: "audio to SRT converter",
      supportingKeywords: [
        "audio to SRT converter free",
        "convert audio to subtitles",
        "audio to VTT",
        "subtitle timing checker",
      ],
      guideTitle: "Generate SRT subtitles, then make them readable",
      guideIntro:
        "Generating subtitle cues is only the first half of the job. A publishable SRT needs sensible line breaks, readable timing and a final listen-through for words the model could not know from audio alone.",
      sections: [
        {
          title: "Create timed cues from an audio file",
          paragraphs: [
            "Select MP3, WAV, M4A or another supported audio file. EarScribe keeps the timestamped segments so you can work from the same source for SRT, VTT, TXT or JSON.",
            "This page creates subtitle files from audio. It does not burn captions into a video or replace a video editor, so you can take the file into the tool that controls your final picture and style.",
          ],
        },
        {
          title: "Run a subtitle check before delivery",
          paragraphs: [
            "Review cues that are too long, too fast, empty, repeated or overlapping. These checks catch the problems that make automatically generated subtitles hard to follow even when the words are correct.",
            "Click a cue to listen to the original audio, edit the text, and check the result again. A short final watch-through is still the right standard for important videos.",
          ],
        },
        {
          title: "Choose SRT or VTT for the next system",
          paragraphs: [
            "SRT is widely accepted by editors and video platforms. VTT is designed for web video and can carry additional browser caption settings. Export TXT when timing is not needed.",
            "Correct the transcript once in the workspace before exporting. That keeps the text and timing aligned across every format you download.",
          ],
        },
      ],
      checklistTitle: "Subtitle QA checklist",
      checklist: [
        { title: "Length", body: "Split or edit cues that take too long to read on a normal screen." },
        { title: "Reading speed", body: "Replay unusually fast cues and shorten wording only when the meaning stays intact." },
        { title: "Timing", body: "Look for empty, repeated or overlapping cues before delivery." },
        { title: "Context", body: "Listen to names, numbers and technical terms instead of trusting a plausible spelling." },
      ],
      limitsTitle: "Know the boundary of an audio-to-SRT tool",
      limits: [
        "EarScribe produces subtitle files; it does not add captions to video, style a caption track or publish to YouTube for you.",
        "Automatic timing and wording still need a human pass when the subtitles are public, legal, educational or safety-critical.",
      ],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "Timestamped transcript workspace used to review and export SRT subtitles",
    },
    "interview-transcription": {
      primaryKeyword: "interview transcription tool",
      supportingKeywords: [
        "interview transcription free",
        "transcribe interview recording",
        "verify interview quotes",
        "timestamped interview transcript",
      ],
      guideTitle: "Turn an interview recording into evidence you can revisit",
      guideIntro:
        "Interview transcription is not finished when the words appear on screen. The valuable step is finding a claim, replaying its context, and correcting the details that can change what a source meant.",
      sections: [
        {
          title: "Find themes before you write",
          paragraphs: [
            "Search the transcript for a topic, product name or repeated phrase. Timestamps let you jump to the original answer instead of relying on a shortened line copied out of context.",
            "For research and reporting, keep the recording beside the edited transcript. The transcript is a navigation layer and working draft, not an automatic publication-ready quote sheet.",
          ],
        },
        {
          title: "Verify quotes, names and numbers",
          paragraphs: [
            "Replay the sentence before and after any quote you plan to use. Check names, organizations, dates and figures against the audio, especially when the speaker is far from the microphone or several people overlap.",
            "EarScribe does not automatically identify speakers. Add speaker labels during your review when the distinction matters to the final document.",
          ],
        },
        {
          title: "Export a working transcript for the next step",
          paragraphs: [
            "Use TXT for a reading draft, JSON when you need segment timing for research tooling, or SRT/VTT when the interview is also becoming a caption track.",
            "Local processing reduces the need to upload an unpublished interview, but your device, browser and exported files still need the controls required by your organization or research protocol.",
          ],
        },
      ],
      checklistTitle: "Before an interview quote leaves your notes",
      checklist: [
        { title: "Locate", body: "Search the exact phrase and save its timestamp before copying it." },
        { title: "Listen", body: "Replay the surrounding answer so a short quote does not lose its context." },
        { title: "Correct", body: "Verify names, organizations, numbers and specialist language manually." },
        { title: "Label", body: "Add speaker names yourself when the transcript needs them; automatic labels are not provided." },
      ],
      limitsTitle: "Interview transcription needs human judgment",
      limits: [
        "The model may miss interruptions, accents, names and domain terms. Treat the output as a searchable draft that points you back to the source.",
        "Do not use local processing as a promise of absolute confidentiality. Follow consent, retention and device rules for the interview you recorded.",
      ],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "Interview transcript with searchable timestamps and replay controls",
    },
    "lecture-transcription": {
      primaryKeyword: "lecture transcription to notes",
      supportingKeywords: [
        "lecture transcription app",
        "transcribe lecture recording",
        "lecture notes from audio",
        "timestamped study notes",
      ],
      guideTitle: "Turn a lecture recording into searchable study material",
      guideIntro:
        "A lecture transcript is most useful when it helps you return to an explanation. Search a term, replay the surrounding seconds, and then shape the corrected text into notes that match how you study.",
      sections: [
        {
          title: "Search for the concept, not the whole recording",
          paragraphs: [
            "After transcription, search for a key term, name or definition. The timestamp takes you back to the explanation, which is more useful than rereading a long unstructured block of text.",
            "For long lectures, choose a model that your device can handle and remove long silent sections when possible. Practical processing length is determined by browser memory, not by the word unlimited alone.",
          ],
        },
        {
          title: "Correct terms before they become study mistakes",
          paragraphs: [
            "Replay formulas, names and specialist vocabulary before adding them to notes. Speech recognition cannot see slides, board work, diagrams or gestures, so add those visual details yourself.",
            "Use the transcript as a study aid, not as a substitute for the original class or the instructor's materials. Keeping the source recording makes later checking much faster.",
          ],
        },
        {
          title: "Save notes in the format you will revisit",
          paragraphs: [
            "TXT works well for a clean outline. JSON preserves segment timing for a personal study workflow, while SRT/VTT is useful when the lecture is being reviewed alongside a video player.",
            "Edit the text in place before exporting so the notes, timestamps and copied excerpts all use the same corrected version.",
          ],
        },
      ],
      checklistTitle: "A better lecture-to-notes pass",
      checklist: [
        { title: "Search", body: "Use a concept or proper noun to find the relevant explanation quickly." },
        { title: "Replay", body: "Listen to the surrounding context before copying a definition or claim." },
        { title: "Add visuals", body: "Write in formulas, diagrams, slide references and board content yourself." },
        { title: "Review", body: "Keep the recording and course materials beside the exported notes for later checks." },
      ],
      limitsTitle: "What a lecture transcript cannot see",
      limits: [
        "Audio transcription does not capture slides, diagrams, formulas or gestures. Those need to be added from the original class materials.",
        "EarScribe processes recordings after you select them; it is not a real-time classroom note taker or an automatic lecture summarizer.",
      ],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "Lecture transcript workspace with searchable timestamps and editable text",
    },
    "m4a-to-text": M4A_TO_TEXT_GUIDES.en,
    "wav-to-text": WAV_TO_TEXT_GUIDES.en,
    "voice-memo-to-text": VOICE_MEMO_TO_TEXT_GUIDES.en,
    "podcast-transcription": PODCAST_TRANSCRIPTION_GUIDES.en,
    "meeting-recording-to-text": MEETING_RECORDING_TO_TEXT_GUIDES.en,
    "whisper-online": WHISPER_ONLINE_GUIDES.en,
    "transcribe-audio-locally": TRANSCRIBE_AUDIO_LOCALLY_GUIDES.en,
  },
  "zh-CN": {
    "audio-to-text": {
      primaryKeyword: "音频转文字",
      supportingKeywords: ["录音转文字", "音频转文字在线", "音频转文字不上传", "带时间戳文字稿"],
      guideTitle: "音频转文字，不止得到一段文字",
      guideIntro: "真正能交付的文字稿，需要能回到原音核对。找到一句话、点击时间戳回听、改好人名和数字，再导出到下一步工具，才是完整流程。",
      sections: [
        { title: "先用你手里的录音直接开始", paragraphs: ["MP3、WAV、M4A、FLAC、OGG 和 WebM 都可以直接选择。人声清楚、麦克风距离合适，通常比盲目换更大的模型更重要。", "首次运行需要下载所选 Whisper 模型，之后浏览器可能复用缓存。长录音能否顺利处理取决于设备可用内存，先裁掉大段静音往往更实际。"] },
        { title: "用时间戳把文字和原音对上", paragraphs: ["搜索人名、数字或关键词，点击旁边的时间戳回听对应片段。这样可以快速发现看起来合理、实际却识别错的词。", "准备发布或引用时，要重点核对人名、日期、价格和专业术语。EarScribe 帮你定位证据，但重要内容仍需要人工复核。"] },
        { title: "一次核对，多种格式导出", paragraphs: ["TXT 适合笔记和研究，SRT 或 VTT 适合字幕，JSON 保留分段和时间信息，方便接入其他流程。", "工作台里的修改会同步到复制和导出，不需要分别修好几份下载文件。"] },
      ],
      checklistTitle: "发布前的快速核对清单",
      checklist: [{ title: "人名", body: "回听所有关键人物、公司和地名。" }, { title: "数字", body: "核对日期、价格、比例和测量单位。" }, { title: "上下文", body: "引用一句话前，回听它前后的完整语境。" }, { title: "格式", body: "按下一步使用场景选择 TXT、SRT、VTT 或 JSON。" }],
      limitsTitle: "这个页面不会承诺什么",
      limits: ["本地处理减少上传录音的暴露面，但浏览器、设备、扩展程序和导出文件仍需要正常的安全管理。", "多人重叠说话、音乐、严重噪音和专业词可能导致识别错误，重要内容请保留原始录音并人工复核。"],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "带波形、搜索、时间戳和导出控制的音频转文字工作台",
    },
    "mp3-to-text": {
      primaryKeyword: "MP3转文字",
      supportingKeywords: ["MP3转文字在线", "MP3转文字稿", "MP3转文字免费", "MP3转SRT"],
      guideTitle: "MP3 可以直接转文字，也要保留核对路径",
      guideIntro: "手里的文件已经是 MP3，就不该为了识别再转一次格式。直接选择 MP3，生成带时间戳文字，核对后再导出文字稿或字幕。",
      sections: [
        { title: "MP3 不需要先转成 WAV", paragraphs: ["录音笔、播客、会议或手机里的 MP3 都可以直接选择。浏览器会在本地解码，模型会自动识别录音语言。", "把已经压缩过的 MP3 转成 WAV，不能找回压缩时丢掉的细节。如果文件里有很长的静音，先裁剪往往比改容器更能减少内存压力。"] },
        { title: "先找到容易错的部分", paragraphs: ["搜索人名、日期、价格和专业词，再点击时间戳回听。与其重新听完整录音，不如先定位最需要人工判断的片段。", "高码率只有在保留更清楚的人声时才有帮助。麦克风距离、背景噪音和多人同时说话，通常影响更大。"] },
        { title: "同一个 MP3，导出文字或字幕", paragraphs: ["TXT 适合阅读和整理，SRT 或 VTT 适合剪辑和网页视频。核对后的分段会在不同格式中保留时间轴。", "文字和字幕确认前不要覆盖原始 MP3。之后遇到疑似错词时，原文件就是最快的证据。"] },
      ],
      checklistTitle: "MP3 准备与核对清单",
      checklist: [{ title: "保留原件", body: "处理前复制一份，不要覆盖原始录音。" }, { title: "检查静音", body: "特别长的空白段可以先裁掉。" }, { title: "回听专名", body: "用时间戳核对人名、数字和不常见词。" }, { title: "选对输出", body: "阅读用 TXT，字幕用 SRT 或 VTT。" }],
      limitsTitle: "MP3 转文字的实际边界",
      limits: ["免费无限使用不等于每台设备都能处理数小时录音，浏览器内存会决定实际可处理长度。", "转成 WAV 不会修复削波、音乐盖住人声、距离过远或过度降噪造成的信息损失。"],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "MP3 转文字工作台，显示时间戳、波形、搜索和导出",
    },
    "audio-to-srt": {
      primaryKeyword: "音频转SRT",
      supportingKeywords: ["音频转字幕", "SRT字幕生成", "MP3转SRT", "字幕时间轴检查"],
      guideTitle: "从音频生成 SRT 字幕，再把字幕做得可读",
      guideIntro: "自动生成字幕只是第一步。真正能交付的 SRT 还要检查断行、阅读速度、时间重叠，并回听模型无法从声音判断的专名和数字。",
      sections: [
        { title: "先生成带时间轴的字幕片段", paragraphs: ["选择 MP3、WAV、M4A 等音频，EarScribe 会保留分段时间信息，同一份结果可以导出 SRT、VTT、TXT 或 JSON。", "这里解决的是音频到字幕文件，不是把字幕烧录到视频里，也不是替代剪辑软件。你可以把文件交给控制画面和样式的下一步工具。"] },
        { title: "导出前做一次字幕体检", paragraphs: ["集中查看过长、阅读过快、空白、重复和时间重叠的字幕。这些问题会让观众读不完，即使单词本身识别正确。", "点击字幕回听原音，修改文字后再次检查。重要视频仍应完整预览一遍。"] },
        { title: "按使用场景选择 SRT 或 VTT", paragraphs: ["SRT 被大多数剪辑软件和视频平台支持；VTT 更适合网页视频。只需要阅读文字时，导出 TXT 即可。", "先在工作台中修改，再导出所有格式，可以让文字和时间轴保持一致。"] },
      ],
      checklistTitle: "字幕发布前检查清单",
      checklist: [{ title: "长度", body: "过长的字幕要拆分或精简，确保正常屏幕上读得完。" }, { title: "速度", body: "回听过快片段，只在不改变原意时精简措辞。" }, { title: "时间", body: "检查空白、重复和重叠字幕。" }, { title: "语境", body: "人名、数字和专业术语不要只看字面，要回听原音。" }],
      limitsTitle: "音频转 SRT 工具的边界",
      limits: ["EarScribe 生成字幕文件，不负责给视频加字幕样式、烧录画面或直接发布到平台。", "公开、教育、法律或安全相关视频，自动时间轴和文字都应该经过人工复核。"],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "用于检查时间轴并导出 SRT 字幕的时间戳文字工作台",
    },
    "interview-transcription": {
      primaryKeyword: "采访录音转文字",
      supportingKeywords: ["访谈录音转写", "采访文字稿", "采访引语核对", "用户访谈整理"],
      guideTitle: "把采访录音整理成可以回听核对的文字稿",
      guideIntro: "采访转写不是文字出现就结束。真正有价值的是找到观点、回听前后语境，并修正会改变原意的人名、数字和术语。",
      sections: [
        { title: "先搜索主题，再回到原始回答", paragraphs: ["按主题、产品名或反复出现的词搜索，点击时间戳回到原始回答，避免只依赖脱离语境的短句。", "用于报道和研究时，建议把原始录音和编辑稿一起保留。文字稿是检索和整理层，不是自动生成的可直接发表引语。"] },
        { title: "引用前核对人名、数字和语境", paragraphs: ["计划引用一句话时，先回听它前后的回答。说话人离麦克风较远或多人重叠时，尤其要核对人名、组织、日期和数据。", "EarScribe 不会自动区分说话人。最终稿需要说话人标签时，请在核对过程中手动补充。"] },
        { title: "把核对后的文字交给下一步", paragraphs: ["TXT 适合阅读稿，JSON 保留分段时间信息，SRT/VTT 适合采访视频字幕。", "本地处理减少未公开采访上传到外部服务的需要，但仍应遵守团队或研究项目的同意、留存和设备管理规则。"] },
      ],
      checklistTitle: "采访引语离开笔记前",
      checklist: [{ title: "定位", body: "搜索原句并先保存时间戳。" }, { title: "回听", body: "听完前后语境，避免断章取义。" }, { title: "校对", body: "人工核对人名、机构、数字和专业词。" }, { title: "标注", body: "需要说话人标签时手动添加，工具不会自动区分。" }],
      limitsTitle: "采访转写仍需要人的判断",
      limits: ["口音、打断、专名和多人同时说话都可能造成误识别，文字稿首先是帮助你回到原音的检索稿。", "本地处理不等于绝对保密，请按采访的同意、留存和设备安全要求处理录音。"],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "可搜索并点击时间戳回听的采访文字稿工作台",
    },
    "lecture-transcription": {
      primaryKeyword: "课堂录音转文字",
      supportingKeywords: ["讲座录音转文字", "课程录音整理", "课堂笔记整理", "时间戳学习笔记"],
      guideTitle: "把课堂录音变成可搜索的学习资料",
      guideIntro: "课堂文字稿最有用的地方，是让你能重新找到老师解释一个概念的片段。搜索术语、按时间戳回听，再把核对后的文字整理成自己的笔记。",
      sections: [
        { title: "按知识点搜索，不要从头重听", paragraphs: ["转录完成后搜索概念、专有名词或定义，点击时间戳回到讲解位置。比起重新听整节课，这样更适合复习和查漏。", "长课时录音要选择设备能承受的模型，并尽量先去掉大段静音。实际处理长度由浏览器内存决定，不是“无限”两个字决定。"] },
        { title: "先校正术语，再把它写进笔记", paragraphs: ["公式、人名和专业词要回听原音后再整理。音频转写看不到投影、板书、图表和手势，这些视觉信息需要从课程材料中补充。", "文字稿适合作为学习辅助，不替代课程和教师资料。保留原始录音，会让之后的核对更快。"] },
        { title: "按复习方式保存结果", paragraphs: ["TXT 适合整理提纲，JSON 保留分段时间，SRT/VTT 适合跟着视频播放器复习。", "先在工作台里修改，再导出，让笔记、时间戳和复制出来的片段都来自同一份核对后的文字。"] },
      ],
      checklistTitle: "更稳妥的课堂录音转笔记流程",
      checklist: [{ title: "搜索", body: "用概念或专有名词找到对应讲解。" }, { title: "回听", body: "复制定义或结论前，先听完整上下文。" }, { title: "补充", body: "手动补上公式、图表、板书和幻灯片信息。" }, { title: "复核", body: "把原录音和课程资料与导出的笔记一起保留。" }],
      limitsTitle: "课堂录音转文字看不到什么",
      limits: ["音频转写无法识别幻灯片、图表、公式和手势，这些内容需要从原课程材料补充。", "EarScribe 处理的是已经选择的录音，不是实时课堂速记，也不会自动生成课程总结。"],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "可搜索、可编辑并带时间戳的课堂录音文字稿工作台",
    },
    "m4a-to-text": M4A_TO_TEXT_GUIDES["zh-CN"],
    "wav-to-text": WAV_TO_TEXT_GUIDES["zh-CN"],
    "voice-memo-to-text": VOICE_MEMO_TO_TEXT_GUIDES["zh-CN"],
    "podcast-transcription": PODCAST_TRANSCRIPTION_GUIDES["zh-CN"],
    "meeting-recording-to-text": MEETING_RECORDING_TO_TEXT_GUIDES["zh-CN"],
    "whisper-online": WHISPER_ONLINE_GUIDES["zh-CN"],
    "transcribe-audio-locally": TRANSCRIBE_AUDIO_LOCALLY_GUIDES["zh-CN"],
  },
  ja: {
    "audio-to-text": {
      primaryKeyword: "音声 文字起こし 無料",
      supportingKeywords: ["音声文字起こし ブラウザ", "音声文字起こし 無制限", "登録不要", "タイムスタンプ付き文字起こし"],
      guideTitle: "音声を文字にするだけでなく、元音声まで確認する",
      guideIntro: "使える文字起こしは、文章が出て終わりではありません。検索した発言をタイムスタンプから聞き直し、人名や数字を直してから必要な形式で書き出せます。",
      sections: [
        { title: "手元の録音をそのまま選ぶ", paragraphs: ["MP3、WAV、M4A、FLAC、OGG、WebMに対応しています。大きなモデルよりも、声が明瞭でマイクが話者に近いことのほうが結果に影響する場合があります。", "初回は選択したWhisperモデルをダウンロードします。同じブラウザではキャッシュを再利用できます。長時間ファイルは端末のメモリに左右されるため、長い無音部分を先に削ると安定しやすくなります。"] },
        { title: "タイムスタンプを根拠として使う", paragraphs: ["人名、数字、キーワードを検索し、横のタイムスタンプから該当箇所を聞き直します。見た目には自然でも間違っている単語を見つけやすくなります。", "公開や引用の前には、人名、日付、金額、専門用語を元音声と照合してください。EarScribeは確認箇所を見つける道具であり、重要な内容の最終確認は人が行います。"] },
        { title: "一度直して、形式を選んで書き出す", paragraphs: ["TXTはメモ、SRTやVTTは字幕、JSONはセグメントと時間情報を使う別の処理に向いています。", "ワークスペースでの修正はコピーと書き出しに反映されるため、複数のファイルを別々に直す必要がありません。"] },
      ],
      checklistTitle: "公開前の確認ポイント",
      checklist: [{ title: "人名", body: "重要な人物名、会社名、地名を聞き直す。" }, { title: "数字", body: "日付、金額、割合、単位を音声と照合する。" }, { title: "文脈", body: "引用する一文の前後も聞いて意味を確認する。" }, { title: "形式", body: "次に使う場所に合わせてTXT、SRT、VTT、JSONを選ぶ。" }],
      limitsTitle: "このページが保証しないこと",
      limits: ["端末内処理はアップロードによる露出を減らしますが、ブラウザ、端末、拡張機能、書き出しファイルの管理まで自動で安全にするものではありません。", "重なる発話、音楽、強い雑音、専門用語では誤りが起こり得ます。大切な内容は元音声を残して確認してください。"],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "波形、検索、タイムスタンプ、書き出しを備えた音声文字起こし画面",
    },
    "mp3-to-text": {
      primaryKeyword: "MP3 文字起こし 無料",
      supportingKeywords: ["MP3 文字起こし 無制限", "MP3 文字起こし ブラウザ", "MP3 テキスト化", "MP3 字幕 SRT"],
      guideTitle: "MP3をそのまま文字起こしし、確認の道筋を残す",
      guideIntro: "手元のファイルがMP3なら、別形式に変換してから使う必要はありません。MP3を選び、タイムスタンプ付きで文字起こしし、確認後にテキストや字幕へ書き出します。",
      sections: [
        { title: "MP3をWAVに変換する前に", paragraphs: ["ボイスレコーダー、ポッドキャスト、会議、スマートフォンのMP3を直接選べます。ブラウザ内で解析し、音声から言語を自動判定します。", "圧縮済みのMP3をWAVに変換しても、圧縮で失われた情報は戻りません。長い無音部分を先に削るほうが、メモリ使用量には効果的な場合があります。"] },
        { title: "間違いやすい箇所を先に確認する", paragraphs: ["人名、日付、金額、専門用語を検索し、タイムスタンプから聞き直します。録音全体をもう一度聞くより、判断が必要な箇所を先に絞れます。", "高いビットレートだけで結果が決まるわけではありません。マイクとの距離、雑音、同時発話の影響が大きいこともあります。"] },
        { title: "一つのMP3からテキストと字幕を作る", paragraphs: ["TXTは読んだり整理したりする用途、SRTやVTTは編集ソフトやWeb動画向けです。確認済みのセグメントは各形式でタイミングを保ちます。", "確認が終わるまで元のMP3を保存してください。あとで単語や数字が気になったとき、最短で根拠に戻れます。"] },
      ],
      checklistTitle: "MP3を処理する前後のチェック",
      checklist: [{ title: "元ファイル", body: "編集前に元の録音を別に保存する。" }, { title: "無音", body: "極端に長い無音部分は先に確認する。" }, { title: "固有名詞", body: "タイムスタンプから人名、数字、専門語を聞き直す。" }, { title: "出力", body: "読むならTXT、字幕ならSRTまたはVTTを選ぶ。" }],
      limitsTitle: "MP3文字起こしの現実的な範囲",
      limits: ["無料・無制限でも、数時間の録音を処理できるかはブラウザと端末のメモリに左右されます。", "WAVへの変換で、音割れ、音楽、遠いマイク、強いノイズ除去による情報欠落は直せません。"],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "タイムスタンプ、波形、検索、書き出しを表示するMP3文字起こし画面",
    },
    "audio-to-srt": {
      primaryKeyword: "音声から字幕を作成",
      supportingKeywords: ["音声からSRTを作成", "SRT 書き出し", "VTT 書き出し", "字幕 タイミング 確認"],
      guideTitle: "音声からSRT字幕を作り、読みやすさまで確認する",
      guideIntro: "字幕ファイルを生成するだけでは納品できません。長さ、表示速度、改行、重なりを確認し、音声だけでは判断できない固有名詞や数字を聞き直します。",
      sections: [
        { title: "音声からタイムコード付きの字幕を作る", paragraphs: ["MP3、WAV、M4Aなどを選ぶと、SRT、VTT、TXT、JSONに使えるセグメントが作成されます。", "ここで作るのは音声から字幕ファイルへの変換です。動画への焼き付けや字幕のデザインは、映像を編集する次のツールで行います。"] },
        { title: "書き出す前に字幕をチェックする", paragraphs: ["長すぎる、速すぎる、空白、重複、時間の重なりを確認します。単語が正しくても、読み切れない字幕は視聴者に届きません。", "字幕をクリックして元音声を聞き、修正後にもう一度確認してください。大切な動画は最後まで通して見るのが安全です。"] },
        { title: "SRTとVTTを用途で使い分ける", paragraphs: ["SRTは編集ソフトや動画サービスで広く使われます。VTTはWeb動画向けです。時間情報がいらなければTXTを選べます。", "ワークスペースで一度修正してから書き出すと、各形式の文章とタイミングが揃います。"] },
      ],
      checklistTitle: "字幕を公開する前の確認項目",
      checklist: [{ title: "長さ", body: "通常の画面で読み切れない長い字幕を分ける。" }, { title: "速度", body: "速すぎる字幕を聞き直し、意味を保って調整する。" }, { title: "時間", body: "空白、重複、時間の重なりを確認する。" }, { title: "文脈", body: "人名、数字、専門語は音声と照合する。" }],
      limitsTitle: "音声からSRTを作る機能の範囲",
      limits: ["字幕ファイルは作れますが、動画への焼き付け、字幕デザイン、YouTubeへの直接投稿は行いません。", "公開、教育、法務、安全に関わる動画では、文章とタイミングを人が確認してください。"],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "タイムコードを確認してSRT字幕を書き出す文字起こし画面",
    },
    "interview-transcription": {
      primaryKeyword: "インタビュー 文字起こし",
      supportingKeywords: ["インタビュー文字起こし 無料", "取材 録音 文字起こし", "引用 確認", "タイムスタンプ 文字起こし"],
      guideTitle: "インタビュー録音を、聞き直せる原稿に整える",
      guideIntro: "インタビューは文字が表示されて終わりではありません。発言を検索し、前後の文脈を聞き、人名や数字を直してから原稿に使うことが大切です。",
      sections: [
        { title: "テーマから発言を探す", paragraphs: ["テーマ、製品名、繰り返し出てくる言葉を検索し、タイムスタンプから元の回答を聞きます。短い一文だけをコピーして文脈を失うことを防げます。", "取材や調査では、編集した文字と元の録音を一緒に残してください。文字起こしは検索と整理のための下書きです。"] },
        { title: "引用、人名、数字を確認する", paragraphs: ["引用する発言は前後の回答も聞き、人名、組織名、日付、数値を音声と照合します。話者がマイクから遠い場合や発話が重なる場合は特に注意が必要です。", "話者の自動識別は行いません。必要な話者名は確認しながら手動で追加してください。"] },
        { title: "確認した原稿を次の工程へ渡す", paragraphs: ["TXTは原稿、JSONはセグメントと時間情報、SRT/VTTはインタビュー動画の字幕に向いています。", "端末内処理は未公開の録音を外部サービスへ送る必要を減らしますが、同意、保存期間、端末管理のルールは別途守ってください。"] },
      ],
      checklistTitle: "引用をメモから出す前の確認",
      checklist: [{ title: "探す", body: "原文を検索し、先にタイムスタンプを保存する。" }, { title: "聞く", body: "前後の回答を再生し、文脈を確認する。" }, { title: "直す", body: "人名、組織、数値、専門用語を照合する。" }, { title: "付ける", body: "必要な話者名は手動で加える。" }],
      limitsTitle: "インタビュー文字起こしに必要な人の判断",
      limits: ["口調、割り込み、固有名詞、重なる発話では誤りが起こります。出力は元音声に戻るための検索可能な下書きとして使ってください。", "端末内処理は完全な機密性を保証しません。取材の同意や保存、端末の規程に従ってください。"],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "検索とタイムスタンプで引用を確認できるインタビュー文字起こし画面",
    },
    "lecture-transcription": {
      primaryKeyword: "講義 文字起こし",
      supportingKeywords: ["講義文字起こし 無料", "授業 録音 文字起こし", "講義録音 テキスト化", "タイムスタンプ 講義"],
      guideTitle: "講義録音を検索できる学習資料にする",
      guideIntro: "講義の文字起こしは、説明をもう一度探せるときに役立ちます。用語を検索し、タイムスタンプから聞き直し、確認した文章を自分のノートに整えます。",
      sections: [
        { title: "講義全体ではなく用語を探す", paragraphs: ["文字起こし後に概念、固有名詞、定義を検索し、タイムスタンプから説明の位置へ戻ります。最初から長時間聞き直すより、復習しやすくなります。", "長時間の録音では端末に合うモデルを選び、可能なら長い無音を削ります。実際の処理時間はブラウザのメモリで決まります。"] },
        { title: "用語を学習ノートに入れる前に直す", paragraphs: ["数式、人名、専門語は元音声を聞いてから整理してください。音声だけではスライド、板書、図、ジェスチャーは見えないため、授業資料から補います。", "文字起こしは学習補助であり、授業や教材の代わりではありません。元の録音を残すと後から確認しやすくなります。"] },
        { title: "復習方法に合わせて保存する", paragraphs: ["TXTは要点整理、JSONはセグメントの時間情報、SRT/VTTは動画プレーヤーと一緒に復習する用途に向きます。", "ワークスペースで修正してから書き出すと、ノート、タイムスタンプ、コピーした引用が同じ内容になります。"] },
      ],
      checklistTitle: "講義からノートを作る流れ",
      checklist: [{ title: "検索", body: "概念や専門語から該当する説明を探す。" }, { title: "再生", body: "定義や結論をコピーする前に前後を聞く。" }, { title: "補う", body: "数式、図、板書、スライド情報を手動で加える。" }, { title: "確認", body: "録音と授業資料をノートと一緒に残す。" }],
      limitsTitle: "講義録音の文字起こしで見えないもの",
      limits: ["音声からはスライド、図、数式、ジェスチャーを取得できません。元の授業資料から補う必要があります。", "これはリアルタイムの授業ノート作成やAI要約ではなく、選択した録音を処理するツールです。"],
      imageSrc: "/screenshots/02-transcript-showcase.webp",
      imageAlt: "検索、編集、タイムスタンプに対応した講義文字起こし画面",
    },
    "m4a-to-text": M4A_TO_TEXT_GUIDES.ja,
    "wav-to-text": WAV_TO_TEXT_GUIDES.ja,
    "voice-memo-to-text": VOICE_MEMO_TO_TEXT_GUIDES.ja,
    "podcast-transcription": PODCAST_TRANSCRIPTION_GUIDES.ja,
    "meeting-recording-to-text": MEETING_RECORDING_TO_TEXT_GUIDES.ja,
    "whisper-online": WHISPER_ONLINE_GUIDES.ja,
    "transcribe-audio-locally": TRANSCRIBE_AUDIO_LOCALLY_GUIDES.ja,
  },
};

export function getToolGuide(locale: ToolLocale, slug: ToolSlug): ToolGuide {
  return TOOL_GUIDES[locale][slug];
}
