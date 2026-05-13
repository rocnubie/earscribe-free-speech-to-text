<p align="center">
  <b>🌐 Language / 语言 / Idioma:</b><br/>
  <a href="README.md">English</a> · <a href="README.zh-CN.md">中文</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português</a> · <a href="README.ja.md">日本語</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.ru.md">Русский</a> · <a href="README.ko.md">한국어</a>
</p>

<h1 align="center">EarScribe — 無料音声文字起こし & 無料音声テキスト変換ツール</h1>

<p align="center">
  <b>ブラウザで音声・動画を文字起こし。100%無料、登録不要、アップロード不要。無制限。</b><br/>
  <sub>OpenAI Whisper が WebGPU / WebAssembly でブラウザ内動作 — 音声データはデバイスの外に出ません。</sub>
</p>

<p align="center">
  <a href="https://earscribe.app/ja"><img alt="ライブデモ" src="https://img.shields.io/badge/ライブ-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app/ja"><img alt="完全無料" src="https://img.shields.io/badge/100%25-無料-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app/ja"><img alt="登録不要" src="https://img.shields.io/badge/登録-不要-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app/ja"><img alt="プライバシー保護" src="https://img.shields.io/badge/デバイス内処理-プライバシー保護-0f172a?style=for-the-badge"></a>
  <img alt="ライセンス MIT" src="https://img.shields.io/badge/ライセンス-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app/ja"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe — 無料音声文字起こしツール。MP3・WAV・M4AをドラッグするだけでブラウザでOpenAI Whisperによる無料音声テキスト変換が完結。登録不要・アップロード不要。"></a>
</p>

<p align="center">
  <b>🔗 今すぐ試す:</b>
  <a href="https://earscribe.app/ja"><b>earscribe.app/ja（日本語版）</b></a> ·
  <a href="https://earscribe.app">earscribe.app（英語版）</a> ·
  <a href="https://earscribe.app/about">EarScribeについて</a>
</p>

---

## 目次

- [EarScribeとは](#earscribeとは)
- [機能一覧](#機能一覧)
- [スクリーンショット](#スクリーンショット)
- [クイックスタート（3ステップで文字起こし）](#クイックスタート3ステップで文字起こし)
- [比較表 — Otter.ai・Rev・Whisper API との違い](#比較表--otterairevwhisper-api-との違い)
- [Whisperモデルの選び方](#whisperモデルの選び方)
- [対応フォーマット & 99言語](#対応フォーマット--99言語)
- [ユースケース](#ユースケース)
- [よくある質問（FAQ）](#よくある質問faq)
- [技術スタック](#技術スタック)
- [ローカル開発](#ローカル開発)
- [ライセンス](#ライセンス)

---

## EarScribeとは

**[EarScribe](https://earscribe.app/ja)** は、ブラウザだけで動く完全無料の**音声文字起こし**・**音声テキスト変換**ツールです。MP3・WAV・M4A・OGG・FLAC・WebM などの音声ファイル、あるいは動画の音声トラックをドロップするだけで、タイムスタンプ付きのトランスクリプトと **SRT / VTT 字幕ファイル** がワンクリックで生成されます。

アップロード不要、ログイン不要、APIキー不要、従量課金ゼロ。**無制限に無料**で使える文字起こしツールです。

- 🎧 **ドラッグ＆ドロップ**で任意の音声ファイルを読み込む
- 🧠 **OpenAI Whisper** がローカルで音声認識・文字起こしを実行
- 📝 タイムスタンプ付きトランスクリプト、波形スクラバー、**SRT / VTT 字幕**を即エクスポート
- 🔒 音声データはデバイスから一切外に出ない — 完全な**プライバシー保護**、初回モデルダウンロード後はオフラインでも動作

**無料音声テキスト変換**を今すぐ体験するなら → **[earscribe.app/ja](https://earscribe.app/ja)**

---

## 機能一覧

EarScribe はポッドキャスター、ジャーナリスト、学生、動画クリエイターなど、クラウドに音声をアップロードせずに**音声文字起こし**したいすべての人のために作られた、完全無料のオンライン文字起こしワークスペースです。

| | 機能 | 詳細 |
|---|---|---|
| 🆓 | **100%無料・無制限** | 有料プランなし、1日あたりの上限なし、従量課金なし。本当の意味での**無料音声テキスト変換**。 |
| 🚫 | **登録不要・ログイン不要** | メールアドレス不要、アカウント不要、クレジットカード不要。[earscribe.app/ja](https://earscribe.app/ja) を開いてファイルをドロップするだけ。 |
| 🔒 | **プライバシー保護設計** | 音声はデバイスの外に出ない。ファイルに触れるサーバーエンドポイントは存在しない。**アップロード不要**。 |
| 🌐 | **ブラウザネイティブ AI** | **OpenAI Whisper** が WebGPU（GPU アクセラレーション）または WebAssembly フォールバックでローカル動作。 |
| 🎬 | **字幕生成 無料** | ワンクリックで **SRT字幕 / VTT字幕**をエクスポート。Premiere、Final Cut、DaVinci Resolve、YouTube にそのまま投入可能。 |
| 📜 | **タイムスタンプ付きトランスクリプト** | 任意の行をクリックするとその再生位置にジャンプ。波形スクラバー内蔵。 |
| 🗣️ | **99言語対応** | Whisper が話し言葉の言語を自動検出 — 手動設定不要。 |
| ⚡ | **初回後はオフライン動作** | モデルはブラウザにキャッシュされる。次回以降はインターネット接続なしで文字起こし可能。 |
| 🎚️ | **Whisper モデル 4種** | Tiny（40 MB）→ Base → Small → **Large v3 Turbo**（スタジオ品質） |
| 📦 | **複数エクスポート形式** | `.txt` · `.srt` · `.vtt` · `.json`（タイミング情報付き） |
| 🌍 | **UI 10言語対応** | EN · ES · DE · FR · PT-BR · RU · JA · KO · HI · AR |
| 🪶 | **広告なし・トラッキングなし** | Plausible Analytics のみ — セッションリプレイなし、Cookieなし、フィンガープリントなし。 |

---

## スクリーンショット

> **[earscribe.app](https://earscribe.app/ja)** のライブサイトから取得した実際のスクリーンショット（2026年撮影）

### 1. 音声ファイルをドロップ — 完全無料・登録不要・ログイン不要

<p align="center">
  <a href="https://earscribe.app/ja"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="無料音声文字起こしツール EarScribe — MP3・WAV・M4A・OGG・FLAC・WebMをブラウザにドロップするだけ。登録不要・ログイン不要・無制限の無料音声テキスト変換。"></a>
</p>

### 2. タイムスタンプ付きトランスクリプト・波形表示・行クリックでジャンプ

<p align="center">
  <a href="https://earscribe.app/ja"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="EarScribe の文字起こし結果画面 — タイムスタンプ付き音声テキスト変換、波形スクラバー、ワンクリック SRT字幕・VTT字幕エクスポート。"></a>
</p>

### 3. 3ステップで完了 — ドロップ → Whisperモデル選択 → エクスポート

<p align="center">
  <a href="https://earscribe.app/ja"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="EarScribe の使い方 — 音声をドロップし、OpenAI Whisperモデル（Tiny・Base・Small・Large v3 Turbo）を選択してトランスクリプトをエクスポートする無料音声文字起こしフロー。"></a>
</p>

### 4. EarScribeの特長 — プライバシーファースト・ブラウザネイティブ Whisper

<p align="center">
  <a href="https://earscribe.app/ja"><img src="https://earscribe.app/screenshots/04-features.webp" alt="EarScribe の機能 — アップロード不要のプライバシー保護、WebGPU＋WASM対応、99言語自動検出、SRT・VTT・JSON・TXTエクスポート、オフライン動作、100%無料・APIキー不要。"></a>
</p>

### 5. 活用シーン — ポッドキャスター・ジャーナリスト・学生・動画編集者

<p align="center">
  <a href="https://earscribe.app/ja"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="EarScribe のユースケース — ポッドキャスト文字起こし、ジャーナリスト取材録音、講義文字起こし、動画字幕生成、会議文字起こし、オーディオブックテキスト化の無料ツール。"></a>
</p>

### 6. EarScribe vs Otter.ai / Rev / Whisper API — 比較表

<p align="center">
  <a href="https://earscribe.app/ja"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="EarScribe vs Otter.ai vs Rev vs Whisper API 比較 — 従量課金なし・アップロード不要・プライバシー保護の無料音声テキスト変換代替ツール。Otter.ai 代替 無料・Rev 代替 無料。"></a>
</p>

### 7. よくある質問（FAQ） — 無料音声認識ツール

<p align="center">
  <a href="https://earscribe.app/ja"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="EarScribe FAQ — プライバシー、MP3文字起こし、SRT字幕・VTT字幕エクスポート、対応言語、オフライン利用、ブラウザ上での OpenAI Whisper 動作に関するよくある質問。"></a>
</p>

---

## クイックスタート（3ステップで文字起こし）

ウェブ上で最も手軽な**無料音声テキスト変換**フローです。

**ステップ 1 — ブラウザで開く**
[earscribe.app/ja](https://earscribe.app/ja) を Chrome・Edge・Safari・Firefox などのモダンブラウザで開きます。インストール不要です。

**ステップ 2 — 音声ファイルをドロップ**
MP3・WAV・M4A・OGG・FLAC・WebM など、お手持ちの音声ファイルをページにドラッグ＆ドロップします（1ファイルあたり最大約2時間まで対応）。

**ステップ 3 — モデルを選んで文字起こし開始**
Whisper モデルを選択します。ほとんどの用途には **Base** がおすすめです。WebGPU が利用できる環境なら **Large v3 Turbo** でスタジオ品質の精度が得られます。「文字起こし開始」をクリックすると、音声デコードと Whisper 推論がブラウザのタブ内で完結します。

トランスクリプトが生成されたら、任意の行をクリックしてその再生位置にジャンプするか、**エクスポート → .srt / .vtt / .txt / .json** で書き出してください。

アップロードなし。アカウントなし。上限なし。データを尊重する**無料文字起こし**がここにあります。

> **Tip:** 動画（MP4・MOV・MKV）を文字起こしするには、まず ffmpeg・Audacity・VLC などの無料ツールで音声（MP3 / WAV）を抽出し、それを **[earscribe.app/ja](https://earscribe.app/ja)** にドロップしてください。

---

## 比較表 — Otter.ai・Rev・Whisper API との違い

2026年時点で**音声をテキストに変換**する主要な手段を比較します。

| | **EarScribe** | Otter.ai 無料プラン | Rev 無料トライアル | HappyScribe | ローカル Whisper CLI |
|---|:---:|:---:|:---:|:---:|:---:|
| **無料・無制限** | ✅ | ⚠️ 月300分まで | ❌ トライアルのみ | ❌ 有料 | ✅ |
| **登録不要・ログイン不要** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **アップロード不要（プライバシー保護）** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **ブラウザで動作** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **SRT字幕 / VTT字幕エクスポート** | ✅ | ⚠️ 有料プランのみ | ✅ | ✅ | ⚠️ 手動 |
| **タイムスタンプ付きトランスクリプト** | ✅ | ✅ | ✅ | ✅ | ⚠️ 手動 |
| **オフライン動作** | ✅（初回後） | ❌ | ❌ | ❌ | ✅ |
| **99言語対応** | ✅ | ⚠️ 限定的 | ⚠️ 限定的 | ✅ | ✅ |
| **OpenAI Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **インストール不要** | ✅ | ✅ | ✅ | ✅ | ⚠️ Python＋GPU 必要 |
| **コスト** | $0 | $0〜$30/月 | $0.25/分 | €0.20/分 | $0（自分のハードウェア） |

**結論:** EarScribe は「完全無料・無制限・登録不要・アップロード不要・ブラウザ動作・字幕エクスポート対応」をすべて兼ね備えた唯一の**音声文字起こし**ツールです。**Otter.ai 代替 無料**・**Rev 代替 無料**として多くのユーザーに選ばれています。

→ **[earscribe.app/ja で試す](https://earscribe.app/ja)**

---

## Whisperモデルの選び方

EarScribe には **OpenAI Whisper** のモデルが4種類搭載されています。すべてローカル動作で、初回ダウンロード後はブラウザにキャッシュされます。

| モデル | サイズ | 精度 | 速度 | 必要RAM | こんな用途に |
|---|---:|:---:|:---:|---:|---|
| **Whisper Tiny** | 約80 MB | ⭐ | ⚡⚡⚡⚡ | 1 GB | 簡単な音声メモ、低スペック端末での文字起こし |
| **Whisper Base** *（推奨）* | 約200 MB | ⭐⭐ | ⚡⚡⚡ | 2 GB | 日常的なポッドキャスト・講義の文字起こし |
| **Whisper Small** | 約500 MB | ⭐⭐⭐ | ⚡⚡ | 4 GB | 訛りのある音声・ノイズが多い録音 |
| **Whisper Large v3 Turbo** | 約800 MB | ⭐⭐⭐⭐ | ⚡⚡⚡（WebGPU） | 6 GB | スタジオ品質・複数話者・音楽＋音声混在 |

> **ポイント:** モデルは**初回ダウンロード後にキャッシュ**されます。2回目以降の文字起こしは即座に開始されます。モデルの詳細な比較は **[earscribe.app/ja](https://earscribe.app/ja)** でご確認ください。

---

## 対応フォーマット & 99言語

### 音声フォーマット — MP3・WAV・M4A・OGG・FLAC・WebM

EarScribe は Web Audio API がデコードできるすべての音声フォーマットに対応しています。

- 🎵 **MP3 文字起こし** — ポッドキャストで最も一般的なフォーマット
- 🎙️ **WAV テキスト変換** — ロスレスのスタジオ録音
- 📱 **M4A 文字起こし** — Apple ボイスメモ、iPhone 録音
- 🎶 **OGG** — オープンソース音声フォーマット
- 🔊 **FLAC** — ハイファイ音源のアーカイブ
- 🎥 **WebM** — ブラウザで録音・録画した音声・動画

**動画 文字起こし**（MP4・MOV・MKV）をしたい場合は、Audacity・VLC・ffmpeg などの無料ツールで先に音声を抽出し、MP3 または WAV として書き出してから **[earscribe.app/ja](https://earscribe.app/ja)** にドロップしてください。

### 対応言語 — 99言語

Whisper は話し言葉の言語を自動検出します。手動で言語を設定する必要はありません。

英語・日本語・スペイン語・フランス語・ドイツ語・イタリア語・ポルトガル語・ロシア語・韓国語・中国語（簡体・繁体）・アラビア語・ヒンディー語・トルコ語・オランダ語・ポーランド語・インドネシア語・スウェーデン語・ノルウェー語・デンマーク語・フィンランド語・チェコ語・ハンガリー語・ギリシャ語・ヘブライ語・タイ語・ベトナム語、その他 70 言語以上に対応。

EarScribe の UI は以下の言語で利用できます。

| 言語 | リンク |
|---|---|
| 🇺🇸 English | [earscribe.app](https://earscribe.app) |
| 🇯🇵 日本語 | [earscribe.app/ja](https://earscribe.app/ja) |
| 🇪🇸 Español | [earscribe.app/es](https://earscribe.app/es) |
| 🇩🇪 Deutsch | [earscribe.app/de](https://earscribe.app/de) |
| 🇫🇷 Français | [earscribe.app/fr](https://earscribe.app/fr) |
| 🇧🇷 Português | [earscribe.app/pt-br](https://earscribe.app/pt-br) |
| 🇷🇺 Русский | [earscribe.app/ru](https://earscribe.app/ru) |
| 🇰🇷 한국어 | [earscribe.app/ko](https://earscribe.app/ko) |
| 🇮🇳 हिन्दी | [earscribe.app/hi](https://earscribe.app/hi) |
| 🇸🇦 العربية | [earscribe.app/ar](https://earscribe.app/ar) |

---

## ユースケース

EarScribe はあらゆる用途に対応した汎用の**無料文字起こしツール**です。

### ポッドキャスター・コンテンツクリエイター

**ポッドキャスト 文字起こし**を無料で。エピソードの概要文、SEO、アクセシビリティ対応のためのテキストを数分で生成。**MP3 文字起こし**でエクスポートした `.srt` は動画版の字幕として即使えます。→ [earscribe.app/ja で始める](https://earscribe.app/ja)

### ジャーナリスト・研究者

**取材音声はノートPCから出ない。** 第三者のサーバーへの送信なし、アクセスログなし、情報漏洩リスクなし。ウェブ上で最強レベルのプライバシー保護を備えた**無料インタビュー文字起こし**ツールです。

### 学生・教育者

**講義 文字起こし**を無料で。録音した授業を次のセッション前に検索可能なテキストに変換。iPhone のボイスメモ（`.m4a`）や Zoom 録音にも対応しています。

### 会議・ユーザーリサーチ

**会議 文字起こし**やユーザーインタビューの録音テキスト化を、顧客の音声データをサードパーティ SaaS に送ることなく実現。タグ付きトランスクリプトをチームに共有できます。

### 動画編集者 — 字幕・キャプション生成

**字幕生成 無料**。YouTube・Premiere Pro・Final Cut Pro・DaVinci Resolve 向けに **SRT字幕**を音声から生成。Whisper が出力するタイムスタンプからキューが生成されるため、字幕は自動的に音声と同期します。

### オーディオブック・長尺コンテンツ

2時間超えの MP3 でも問題なし。**Whisper Large v3 Turbo** は従量課金なし・API クォータなしでオーディオブック長の音声を処理します。**音声 動画 テキスト変換**のあらゆる規模に対応。

---

## よくある質問（FAQ）

<details>
<summary><b>EarScribe は本当に完全無料・無制限ですか？</b></summary><br/>
はい — 100%無料、無制限、登録不要、ログイン不要です。有料プランも、クレジットカードも、従量課金も、1日・1ヶ月あたりのクォータも一切ありません。Whisper の<b>音声認識</b>モデルはあなた自身のハードウェア上で動作するため、クラウドの計算コストが発生しないからです。<b>無料文字起こし</b>に条件はありません。→ <a href="https://earscribe.app/ja">earscribe.app/ja</a>
</details>

<details>
<summary><b>音声データのプライバシーは守られますか？</b></summary><br/>
完全に守られます。EarScribe はローカルファーストの<b>音声テキスト変換</b>ツールです。音声ファイルはデバイスの外に出ることなく、いかなるサーバーにもアップロードされません。アカウントがないため、あなたに関するデータは一切収集されません。モデルをダウンロードした後はオフラインでも使用できます。<b>プライバシー保護</b>は設計レベルで保証されています。
</details>

<details>
<summary><b>音声はどこかにアップロードされますか？</b></summary><br/>
いいえ。<b>無料音声テキスト変換</b>はすべてローカルで完結します — 音声はデバイスでデコードされ、Web Worker 上で動作する Whisper モデルに渡されます。サーバーには何も送信されません。<b>アップロード不要</b>が EarScribe の根幹です。
</details>

<details>
<summary><b>初回の文字起こしが遅いのはなぜですか？</b></summary><br/>
初めてモデルを選択すると、ブラウザがモデルをダウンロードします（モデルサイズによって 80 MB〜800 MB）。その後は<b>無料音声認識</b>モデルがキャッシュされ、再ダウンロードは不要です。2回目以降はほぼ即座に文字起こしが開始されます。
</details>

<details>
<summary><b>対応している言語はどれですか？</b></summary><br/>
<b>無料音声文字起こし</b>として 99 言語に対応しています。Whisper が話し言葉の言語を自動検出するため、言語を手動で選択する必要はありません。日本語はもちろん、英語・中国語・韓国語・スペイン語・フランス語など主要言語はすべてカバーしています。
</details>

<details>
<summary><b>動画（MP4・MOV）を文字起こしできますか？</b></summary><br/>
動画を直接読み込む機能は現時点ではありませんが、<b>動画 文字起こし</b>は簡単にできます。ffmpeg・Audacity・VLC などの無料ツールで動画から音声（MP3 または WAV）を抽出し、それを <a href="https://earscribe.app/ja">earscribe.app/ja</a> にドロップしてください。<b>音声 動画 テキスト変換</b>として広く活用されている方法です。
</details>

<details>
<summary><b>オフラインでも使えますか？</b></summary><br/>
モデルを一度ダウンロードすれば、はい — <b>無料文字起こし</b>はオフラインでも動作します。ページ自体は最初にロードする必要がありますが、それ以降のセッションはインターネット接続なしで動作します。
</details>

<details>
<summary><b>MP3 を無料でテキストに変換するには？</b></summary><br/>
<a href="https://earscribe.app/ja">EarScribe</a> に MP3 をドロップするだけで<b>MP3 文字起こし</b>が完了します。ファイルはブラウザでデコードされ、Whisper がローカルで文字起こしします。結果はコピーするか、SRT・VTT・TXT・JSON としてエクスポートできます。アップロードもアカウントも不要。<b>音声をテキストに変換</b>する最も手軽な方法です。
</details>

<details>
<summary><b>Otter.ai や Rev の無料代替ツールはありますか？</b></summary><br/>
EarScribe は Otter.ai・Rev・HappyScribe といったクラウド文字起こしサービスの<b>無料代替</b>ツールです。<b>Otter.ai 代替 無料</b>・<b>Rev 代替 無料</b>として、プライバシーを重視するユーザーに選ばれています。クラウドとのトレードオフは、自分のマシンで計算を行う点ですが、音声データは外部に出ず、従量課金やサブスクリプションも一切ありません。
</details>

<details>
<summary><b>SRT や VTT の字幕ファイルを生成できますか？</b></summary><br/>
できます。<b>音声文字起こし</b>後、「エクスポート → .srt」または「.vtt」をクリックしてください。キューのタイミングは Whisper が出力するタイムスタンプから自動生成されるため、手動でカットを分割する必要はありません。<b>字幕生成 無料</b>として YouTube や動画編集ソフトで広く活用されています。<b>SRT字幕・VTT字幕</b>の両方に対応。
</details>

<details>
<summary><b>ブラウザで OpenAI Whisper が動作するのですか？</b></summary><br/>
はい — EarScribe は <b>OpenAI Whisper ブラウザ</b>動作を実現しています。Tiny・Base・Small・Large v3 Turbo の 4 モデルが、Transformers.js を通じて WebGPU 上で動作し、WebGPU 非対応の環境では WebAssembly（WASM）にフォールバックします。<b>WebGPU 文字起こし</b>に対応した数少ない無料ツールの一つです。
</details>

> その他の質問は **[Aboutページ](https://earscribe.app/about)** でご確認ください。

---

## 技術スタック

EarScribe は高速・静的・低コストホスティングを念頭に構築されています。

- **[Next.js 15](https://nextjs.org)**（App Router）＋ **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web（WebGPU ＋ WASM）
- **[OpenAI Whisper](https://github.com/openai/whisper)** — Tiny・Base・Small・Large v3 Turbo（ONNX 量子化済み）
- **[next-intl](https://next-intl.dev)** — i18n（10言語対応）
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[@opennextjs/cloudflare](https://opennext.js.org/cloudflare)** — Cloudflare Pages へデプロイ
- **Plausible Analytics**（本番環境のみロード）

フロントエンド全体は**静的**です。モデルの重みは初回使用時に Hugging Face CDN から取得され、ブラウザの CacheStorage にキャッシュされます。

---

## ローカル開発

```bash
git clone https://github.com/<your-org>/earscribe.git
cd earscribe
pnpm install
pnpm dev
# → http://localhost:3000
```

型チェック・リント・ビルド:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

Cloudflare Pages へのデプロイ:

```bash
pnpm cf:build          # .open-next/ を生成
pnpm cf:preview        # Wrangler によるローカルプレビュー
pnpm cf:deploy         # wrangler deploy
```

`wrangler.toml` を編集し、Cloudflare ダッシュボードで以下の環境変数を設定してください。

| 変数 | 用途 |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | 正規 URL・サイトマップ・OG タグ |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible サイト識別子 |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | Plausible スクリプト URL |

---

## ライセンス

[MIT](LICENSE) — 個人・商用を問わず自由に利用できます。

---

<p align="center">
  <b>👉 日本語版を今すぐ試す: <a href="https://earscribe.app/ja">earscribe.app/ja</a></b><br/>
  <sub>無料文字起こし · 音声文字起こし無料 · 無料音声テキスト変換 · 登録不要 · プライバシー保護 · アップロード不要 · ブラウザで動作</sub>
</p>

<p align="center">
  <a href="https://earscribe.app/ja">EarScribe</a> は <a href="https://github.com/openai/whisper">OpenAI Whisper</a>・<a href="https://huggingface.co/docs/transformers.js">Transformers.js</a>・<a href="https://onnxruntime.ai">ONNX Runtime Web</a> の力で動いています。
</p>
