# EarScribe SEO keyword map

更新时间：2026-09-12（新增 7 个长尾工具页和 2 个字幕小工具，依据见 `docs/2026-09-12-长尾工具页规划.md`）

这份地图把一个页面绑定到一个主要搜索意图。它不把 Google Suggest 当作搜索量数据；关键词是否值得继续投入，要用 Search Console 的展示、点击和真实转化验证。

## English

| URL | Primary keyword | Search intent | Information gain that must remain on the page |
| --- | --- | --- | --- |
| / | free audio to text converter | I have an audio file and want a free result now | No sign-up, unlimited use, language detection, local browser processing, timestamped review and export choices |
| /audio-to-text | audio to text with timestamps | I need searchable text that I can verify against audio | Timestamp replay, editing, model/device trade-offs and a review checklist |
| /mp3-to-text | mp3 to text converter free | I already have an MP3 and do not want a format conversion detour | Compression limits, silence trimming, source retention and TXT/SRT/VTT output |
| /audio-to-srt | audio to SRT converter | I need a timed subtitle file, not only a transcript | Cue length, reading speed, overlap checks, SRT/VTT choice and final watch-through |
| /interview-transcription | interview transcription tool | I need to find and verify quotes in a recording | Context replay, names/numbers, speaker-label boundary and evidence-first workflow |
| /lecture-transcription | lecture transcription to notes | I need searchable study material from a recording | Search-to-replay workflow, visual-material limits, long-file constraints and note export |
| /m4a-to-text | m4a to text | I have an M4A (voice memo, Zoom audio) and want text | M4A = AAC in an MPEG-4 container, Apple Lossless and .m4p caveats, 16 kHz resampling, trimmed-file timing |
| /wav-to-text | wav to text | I have a large uncompressed WAV and don't want to upload it | Size per minute by format, 1 GB limit, memory of file plus decoded audio, 16 kHz mono copy, channels and multitrack |
| /voice-memo-to-text | voice memo to text (iphone) | I want my iPhone/Mac Voice Memos as text | Export steps on iPhone/iPad/Mac, Compressed vs Lossless, built-in transcript vs exportable timestamps, file naming |
| /podcast-transcription | podcast transcription | I want a transcript for show notes, quotes and captions | Chapters (YouTube 0:00 rule), quote checking, podcast:transcript tag, music-bed errors, no speaker labels |
| /meeting-recording-to-text | meeting recording to text | I have a recorded meeting and need notes | Zoom audio-only M4A, Teams/Meet MP4 audio extraction (QuickTime, ffmpeg), decisions search, consent, drafts on shared PCs |
| /whisper-online | whisper online | I want to run OpenAI Whisper without an API key | Model parameters (39M/74M/244M/809M), Turbo's 4-layer decoder, WebGPU vs WASM, API differences, Whisper failure modes |
| /transcribe-audio-locally | transcribe audio locally | I don't want my recording uploaded | What stays local vs what the page sends, Network-panel verification steps, not an offline app, honest limits |
| /srt-to-vtt | srt to vtt | I need my subtitles in the other format | Two-way conversion, syntax differences, WebVTT features dropped in SRT (settings, STYLE, REGION, NOTE), voice spans, legacy encodings |
| /srt-to-txt | srt to txt | I want readable text from a subtitle file | Three layouts (lines, timestamps, paragraphs), rolling auto-caption cleanup, CJK joining, what gets stripped |

## 简体中文

| URL | 主关键词 | 搜索意图 | 页面必须提供的信息增量 |
| --- | --- | --- | --- |
| /zh-CN/audio-to-text | 音频转文字 | 手里有录音，想马上得到可用文字 | 支持格式、是否上传、时间戳回听、人工核对和导出 |
| /zh-CN/mp3-to-text | MP3转文字 | 已经有 MP3，不想先转格式 | 压缩限制、静音裁剪、保留原件和文字/字幕双输出 |
| /zh-CN/audio-to-srt | 音频转SRT | 需要可以交付的字幕文件 | SRT/VTT 区别、断行、阅读速度、重叠和发布前检查 |
| /zh-CN/interview-transcription | 采访录音转文字 | 从采访中找出可引用、可核对的内容 | 语境回听、说话人边界、人名数字核对和敏感录音处理边界 |
| /zh-CN/lecture-transcription | 课堂录音转文字 | 把课程录音变成可搜索学习材料 | 术语回听、长录音限制、板书公式不可见和学习资料整理 |
| /zh-CN/m4a-to-text | m4a转文字 | 手里有 M4A（语音备忘录、Zoom 音频）想转文字 | AAC/无损/.m4p 说明、16 kHz 重采样、剪辑后文件的时间对齐 |
| /zh-CN/wav-to-text | wav转文字 | 大 WAV 文件不想上传 | 各规格每分钟体积、1 GB 上限、内存占用、单声道副本、声道与多轨 |
| /zh-CN/voice-memo-to-text | 语音备忘录转文字 | iPhone/Mac 语音备忘录转成文字 | 导出步骤、压缩与无损、系统自带转写的区别、文件命名 |
| /zh-CN/podcast-transcription | 播客转文字 | 做节目笔记、金句和字幕 | 章节时间轴规则、金句核对、podcast:transcript 标签、片头音乐误识别 |
| /zh-CN/meeting-recording-to-text | 会议录音转文字 | 会后把录音整理成纪要 | Zoom 纯音频 M4A、Teams/腾讯会议等 MP4 提取音频、决议检索、录音同意 |
| /zh-CN/whisper-online | whisper 在线 | 不用 API Key 使用 Whisper | 各模型参数量、Turbo 解码器、WebGPU/WASM、与 API 的区别、Whisper 的弱点 |
| /zh-CN/transcribe-audio-locally | 本地语音转文字 | 录音不想上传 | 本机与网络各有什么、用“网络”面板验证、不是离线软件、限制说明 |
| /zh-CN/srt-to-vtt | srt转vtt | 字幕要换成另一种格式 | 双向转换、写法区别、SRT 保留不了的 WebVTT 功能、GB18030 等旧编码 |
| /zh-CN/srt-to-txt | srt转txt | 从字幕文件拿到可读文本 | 三种排版、自动字幕重复行清理、中文合并不加空格、会去掉哪些内容 |

## 日本語

| URL | 主キーワード | 検索意図 | ページに必要な情報の追加 |
| --- | --- | --- | --- |
| /ja/audio-to-text | 音声 文字起こし 無料 | 登録せずに録音を文字起こししたい | ブラウザ処理、タイムスタンプ、対応形式、端末の注意点 |
| /ja/mp3-to-text | MP3 文字起こし 無料 | 手元の MP3 をすぐテキスト化したい | 圧縮音源、無音部分、元ファイル、字幕書き出し |
| /ja/audio-to-srt | 音声から字幕を作成 | 音声から使える字幕ファイルを作りたい | SRT/VTT、改行、表示速度、重なりと公開前確認 |
| /ja/interview-transcription | インタビュー 文字起こし | 引用や固有名詞を録音で確認したい | 文脈の聞き直し、話者ラベルの限界、検索と書き出し |
| /ja/lecture-transcription | 講義 文字起こし | 講義録音を検索できる学習資料にしたい | 用語の再生、長時間録音、板書や数式の限界、ノート化 |
| /ja/m4a-to-text | m4a 文字起こし | 手元のM4A（ボイスメモ、Zoom音声）を文字にしたい | AAC/ロスレス/.m4pの注意、16 kHz変換、編集後ファイルのタイミング |
| /ja/wav-to-text | wav 文字起こし | 大きなWAVをアップロードせずに文字起こししたい | 形式別の1分あたり容量、1 GB上限、メモリ、モノラル版、チャンネルとマルチトラック |
| /ja/voice-memo-to-text | ボイスメモ 文字起こし | iPhone・Macのボイスメモを文字にしたい | 書き出し手順、圧縮と非圧縮、標準の文字起こしとの違い、ファイル名 |
| /ja/podcast-transcription | ポッドキャスト 文字起こし | 概要欄・引用・字幕に使いたい | チャプターの条件、引用の確認、podcast:transcriptタグ、BGMでの誤認識 |
| /ja/meeting-recording-to-text | 会議 録音 文字起こし | 録音した会議から議事録を作りたい | ZoomのM4A、Teams・MeetのMP4から音声を取り出す方法、決定事項の検索、録音の同意 |
| /ja/whisper-online | whisper 文字起こし | APIキーなしでWhisperを使いたい | 各モデルのパラメータ数、Turboのデコーダ、WebGPUとWASM、APIとの違い、苦手なこと |
| /ja/transcribe-audio-locally | 文字起こし ローカル | 情報漏洩が心配で音声をアップロードしたくない | 端末に残るもの・送信されるもの、ネットワークパネルでの確認、オフラインアプリではない点 |
| /ja/srt-to-vtt | srt vtt 変換 | 字幕を別の形式にしたい | 相互変換、書き方の違い、SRTに引き継げないWebVTT機能、Shift_JISなどの文字コード |
| /ja/srt-to-txt | vtt テキスト 抽出 | 字幕ファイルから読めるテキストがほしい | 3つのレイアウト、自動字幕の重複整理、日本語はスペースなしで結合、削除されるもの |

## Evidence and guardrails

- Google Suggest was checked on 2026-07-28 and again on 2026-09-12 (new long-tail pages) for English, Simplified Chinese and Japanese seed phrases. It indicates language users type, not volume or ranking difficulty.
- The pages target the action a user can complete in EarScribe. They do not claim real-time transcription, automatic speaker separation, AI summaries, video caption burning, direct publishing, 100% accuracy or absolute privacy.
- Tool pages are published for en, zh-CN and ja only. A new locale should enter the sitemap only after keyword research, native review and a page-specific workflow are ready.
