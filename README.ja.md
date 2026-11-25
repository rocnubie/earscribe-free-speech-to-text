<p align="center">
  <b>🌐 Languages:</b><br/>
  <a href="README.md">English</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.zh-TW.md">繁體中文</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.pt-BR.md">Português</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.it.md">Italiano</a> ·
  <a href="README.nl.md">Nederlands</a> ·
  <a href="README.pl.md">Polski</a> ·
  <a href="README.ru.md">Русский</a> ·
  <a href="README.uk.md">Українська</a> ·
  <a href="README.sv.md">Svenska</a> ·
  <a href="README.nb.md">Norsk</a> ·
  <a href="README.da.md">Dansk</a> ·
  <a href="README.fi.md">Suomi</a> ·
  <a href="README.id.md">Bahasa Indonesia</a> ·
  <a href="README.tr.md">Türkçe</a> ·
  <a href="README.vi.md">Tiếng Việt</a> ·
  <a href="README.th.md">ไทย</a> ·
  <a href="README.hi.md">हिन्दी</a> ·
  <a href="README.bn.md">বাংলা</a>
</p>

<h1 align="center">EarScribe — ブラウザだけで音声・動画を文字起こし、しかも無料</h1>

<p align="center">
  <b>音声ファイル、動画、マイク録音を放り込むだけ。タイムスタンプ付きの文字起こしと字幕が手に入ります。</b><br/>
  <sub>Whisper は WebGPU または WebAssembly を介してあなたのデバイス上で動きます。録音がアップロードされることはありません。</sub>
</p>

<p align="center">
  <a href="https://earscribe.app"><img alt="ライブアプリ" src="https://img.shields.io/badge/Live-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="完全無料" src="https://img.shields.io/badge/100%25-Free-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="登録不要" src="https://img.shields.io/badge/No-Sign--up-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="デバイス内処理・プライベート" src="https://img.shields.io/badge/On--device-Private-0f172a?style=for-the-badge"></a>
  <img alt="ライセンス MIT" src="https://img.shields.io/badge/License-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe — ブラウザで無料の音声・動画文字起こし。MP3、WAV、M4A、MP4 をドロップすれば、アップロードせずにタイムスタンプ付きの文字起こしが得られます。"></a>
</p>

<p align="center">
  <b>🔗 アプリを開く：</b> <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/guides">ガイド</a> ·
  <a href="https://earscribe.app/changelog">変更履歴</a> ·
  <a href="https://earscribe.app/about">EarScribe について</a>
</p>

---

## 🎙️ EarScribe とは

ブラウザのタブの中で完結する文字起こしワークスペースです。音声、動画ファイル、あるいはマイクを渡すと、クリックすればその箇所を再生できるタイムスタンプ付きのテキストと、編集者にそのまま渡せる字幕ファイルが返ってきます。アカウントも、アップロードも、分単位の課金もありません。

入り口は3つ、処理は1本です。

- **ファイル** — MP3、WAV、M4A、AAC、OGG、FLAC、Opus、そして Web Audio API がデコードできるもののほとんど。1ファイルあたり最大 1 GiB。
- **動画** — MP4、MOV、MKV、WebM、M4V、TS、QT、M2TS。音声トラックは**タブ内で**デマックスされ、16 kHz モノラルに再エンコードされたうえで、通常のファイルと同じように文字起こしされます。ffmpeg も変換サイトも要りません。
- **マイク** — 講義、録音の許可がある通話、あるいは消えてしまう前に残しておきたいボイスメモを、その場で録ってその場で文字起こしできます。

キューを加えれば、フォルダ1つ分のファイルを投げ込んで席を外せます。`/dashboard` のワークスペースを加えれば、結果はあとから開き直して編集・書き出しできるプロジェクトになります。

> 👉 **ライブアプリ：** **[earscribe.app](https://earscribe.app)**

---

## 📚 目次

- [✨ できること](#-できること)
- [🖼️ スクリーンショット](#️-スクリーンショット)
- [🚀 クイックスタート](#-クイックスタート)
- [🗂️ ワークスペース](#️-ワークスペース)
- [💸 コスト](#-コスト)
- [🆚 比較](#-比較)
- [🌍 対応する入力と言語](#-対応する入力と言語)
- [💼 ユースケース](#-ユースケース)
- [🚧 できないこと](#-できないこと)
- [❓ FAQ](#-faq)
- [🛠️ 技術スタック](#️-技術スタック)
- [🧑‍💻 ローカル開発](#-ローカル開発)
- [☁️ デプロイ](#️-デプロイ)
- [🌐 言語を追加する](#-言語を追加する)
- [🔬 Whisper モデルを追加する](#-whisper-モデルを追加する)
- [🤝 コントリビュート](#-コントリビュート)
- [📄 ライセンス](#-ライセンス)

---

## ✨ できること

| | 機能 | 実際に得られるもの |
|---|---|---|
| 🎬 | **音声・動画・マイク** | 動画コンテナをそのまま受け付けます。音声トラックはローカルで取り出すので、200 MB の MP4 もマシンの外に出ません。 |
| 📝 | **タイムスタンプ付きの文字起こし** | すべての字幕キューに開始時刻と終了時刻があります。行をクリックすればその瞬間を再生でき、波形スクラバーも追従します。 |
| 🔍 | **文字起こし内の検索** | 人名、数字、用語 — 該当する文へ飛んで再生し直せます。ファイルを最初から聞き直す必要はありません。 |
| 🎞️ | **字幕の書き出し** | SRT、WebVTT、プレーンテキスト、JSON（精度を落とさないタイムコード付きの文字起こしオブジェクト）、またはクリップボード。 |
| 🧪 | **字幕チェック** | 長すぎる、速すぎる、重複している、空、時間が重なっている字幕キューを、書き出す前に指摘します。 |
| 📚 | **バッチキュー** | 複数のファイルを投げ込み、モデルと話し言葉を1回だけ指定して、キューに順番どおり実行させます。いつでも現在のファイルの後で一時停止できます。 |
| 🗂️ | **プロジェクト** | 結果はブラウザ内の `/dashboard` 配下にプロジェクトとして保存されます。文字起こし、字幕、ソースファイル、ゴミ箱があり、あとから開き直せます。 |
| ✏️ | **字幕編集** | テキストを直し、字幕キューのイン点・アウト点を動かし、分割や削除をしてから、もう一度書き出せます。 |
| 💾 | **バックアップと復元** | ワークスペース全体を1つのファイルに書き出し、別のブラウザで読み込めます。 |
| 🔁 | **字幕の変換** | SRT ⇄ VTT、SRT → テキスト。ブラウザ内で完結し、モデルのダウンロードも不要です。ここで唯一、すぐに起動するツールです。 |
| 🆓 | **無料・無制限** | 有料プランも、1日の上限も、分単位の課金も、アカウントもありません。 |
| 🔒 | **設計からしてプライベート** | 文字起こしはローカルで実行されます。公開ページには分析と広告が入りますが、`/dashboard` は広告なしです。 |
| 🌍 | **27 の表示言語、99 の話し言葉** | インターフェースは 27 ロケールに翻訳されています。話されている言語は Whisper が自動で判定します。 |

---

## 🖼️ スクリーンショット

> すべて **[earscribe.app](https://earscribe.app)** のライブサイトから撮った実際の画面です。

### 1. ファイルか動画をドロップ、あるいは録音 — 登録もアップロードも不要

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="無料の音声・動画テキスト変換ツール — ブラウザで MP3、WAV、M4A、MP4、MOV、MKV をドロップ。登録もログインも不要。"></a>
</p>

### 2. 波形付きのタイムスタンプ入り文字起こし — 行をクリックすればそこへジャンプ

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="EarScribe の文字起こし出力 — タイムスタンプ付きの音声テキスト変換、波形スクラバー、ワンクリックの SRT・VTT 字幕書き出し"></a>
</p>

### 3. 3ステップ：ドロップ → Whisper モデルを選ぶ → 書き出す

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="EarScribe で無料の音声テキスト変換が動く流れ — 音声か動画をドロップし、Whisper モデル（tiny、base、small、turbo）を選び、文字起こしを読んで書き出す"></a>
</p>

### 4. EarScribe を選ぶ理由 — プライバシー優先、ブラウザネイティブの Whisper

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/04-features.webp" alt="EarScribe の機能 — アップロード不要でプライベート、WebGPU と WASM、99 の話し言葉を自動判定、SRT VTT JSON TXT の書き出し、デバイス内推論"></a>
</p>

### 5. EarScribe を使う人 — ポッドキャスター、ジャーナリスト、学生、編集者

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="EarScribe のユースケース — ポッドキャスター、ジャーナリスト、学生、ユーザーリサーチ、動画字幕、オーディオブックの文字起こしのための無料音声テキスト変換"></a>
</p>

### 6. EarScribe と Otter.ai、Rev、HappyScribe、ローカルに入れた Whisper の比較

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="EarScribe と Otter.ai、Rev、HappyScribe の比較 — デバイス内推論で分単位の課金がない、無料・無制限の音声テキスト変換"></a>
</p>

### 7. FAQ — プライバシー、形式、字幕の書き出し、オフライン利用

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="無料の音声テキスト変換 FAQ — プライバシー、MP3 や動画のテキスト化、SRT・VTT 字幕の書き出し、対応言語、オフライン利用、ブラウザ上の Whisper についての回答"></a>
</p>

---

## 🚀 クイックスタート

1. Chrome、Edge、Safari、Firefox で **[earscribe.app](https://earscribe.app)** を開きます。
2. ファイルをドロップします。動画でも、録音ボタンでもかまいません。1ファイルあたり最大 1 GiB まで。実際の上限はディスク上のサイズではなく、デバイスのメモリです。
3. モデルを選びます。**base** が既定で、大半の音声に合います。**tiny** はスマートフォンやちょっとしたボイスメモ向け。**small** と **turbo** は、訛りが強い、雑音が多い、あるいは大事な音声向けです。
4. **文字起こし** を押します。音声はタブ内でデコードされ、Whisper に渡されます。初回は重みをダウンロードするので、ボタンに表示されるサイズに気をつけてください。
5. 文字起こしを読み、行をクリックして再生し、必要なところを直したら、**書き出し → SRT / VTT / TXT / JSON**、またはコピーします。

まとめて処理したいなら、キュータブに切り替えて、好きなだけファイルを放り込み、モデルは1回だけ選びます。キューは1ファイルずつ実行し、すでにメモリにあるモデルを再利用し、各結果をプロジェクトとして保存します。

> 💡 **事前の変換は不要です。** 2時間の MP4 もそのまま放り込めます。音声だけ残したい場合は、アプリが動画から音声トラックを取り出します。

---

## 🗂️ ワークスペース

`/dashboard` は、記憶を持った同じ文字起こしエンジンです。すべてこのブラウザに保存されます。プロジェクトのレコードは IndexedDB、モデルの重みは CacheStorage に入り、アカウントには何も同期されません。アカウントが存在しないからです。

| セクション | ここにあるもの |
|---|---|
| **プロジェクト** | すべて。新しい順。 |
| **文字起こし** | 文字起こしの実行で作られたプロジェクト。字幕キューを編集してもここに残ります。 |
| **字幕** | 字幕ファイルから作られたプロジェクト（コンバーターとインポート）。字幕の作業と音声の作業が混ざらないよう分けています。 |
| **ファイル** | ワークスペースが保持するソースメディア。種類で絞り込めます：文字起こし、字幕、音声。元の音声は既定では保存**されません**。 |
| **ゴミ箱** | 削除したプロジェクト。空にするまで復元できます。 |

プロジェクトの中では、文字起こしの検索、タイムスタンプをクリックしての再生、字幕キューの編集（テキスト、イン点・アウト点、追加・削除）、長いキューの短いものへの分割、任意の形式での再書き出し、ページを離れずにメディアプレーヤーを開く、といったことができます。

**バックアップ：** ワークスペースは1つのファイル（最大 320 MB）として書き出せ、別のブラウザや別のマシンで読み込めます。プロジェクトがデバイスの外に出ない以上、移動するコピーはこのファイルだけです。他の文書のバックアップと同じように扱ってください。

---

## 💸 コスト

無料は無負担という意味ではありません。以下はモデルとバックエンドごとに実測したダウンロードサイズで、見積もりではありません。

| モデル | WebGPU | WebAssembly | 典型的な用途 |
|---|---:|---:|---|
| **tiny** | 151 MB | 41 MB | ボイスメモ、低スペックのスマートフォン、まず試すとき |
| **base** *（既定）* | 291 MB | 77 MB | インタビュー、会議、ポッドキャスト |
| **small** | 968 MB | 249 MB | 訛りの強い音声、騒がしい部屋 |
| **turbo** | 3.24 GB | 1.09 GB | スタジオ品質の文字起こし。時間より精度が大事なとき |

- **ダウンロードは一度だけ、あとはキャッシュ。** 重みはブラウザのキャッシュに残るので、2回目は何もダウンロードしません。ブラウザのプロファイルが変われば、またダウンロードになります。
- **GPU を使う価値はあります。** 同じマシンで、WebGPU は 40 分のファイルを base で約 3.8 分で終え、CPU では 9.4 分かかりました。およそ 2.5× 速く、代わりにダウンロードは3〜4倍になります。私たちのテストでは、WebGPU の `turbo` は 3.24 GB のダウンロードを完了できなかったため、「速い」ではなく「未計測」としています。
- **決めるのはメモリで、ファイルサイズではありません。** 長い録音は文字起こしの前に 16 kHz モノラルへデコードされます。40 分の MP3 なら数百メガバイト。2時間のステレオ WAV は、始まる前にタブを圧迫することがあります。デコード時に 16 kHz を直接要求するようにしたことで、2時間のステレオファイルのピークメモリは約 1.6 GB から 0.5 GB に下がりました。
- **サーバーも、他人のマシンの順番待ちもありません。** 時間はあなたの CPU のものなので、遅いノート PC は遅いままです。それがアップロードしないことの代償です。

計測の詳細は、手法と失敗した実行も含めて[ガイド](https://earscribe.app/guides)にあります。

---

## 🆚 比較

2026 年に音声を文字起こしする方法として、EarScribe はどう違うのか。

| | **EarScribe** | Otter.ai 無料版 | Rev 無料トライアル | HappyScribe | ローカル Whisper CLI |
|---|:---:|:---:|:---:|:---:|:---:|
| **無料・無制限** | ✅ | ⚠️ 月 300 分 | ❌ トライアルのみ | ❌ 有料 | ✅ |
| **登録・ログイン不要** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **アップロード不要（プライベート）** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **動画をアップロードせずに処理** | ✅ ローカルで抽出 | ❌ アップロード必須 | ❌ アップロード必須 | ❌ アップロード必須 | ✅ ffmpeg が必要 |
| **ブラウザで動く** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **SRT / VTT の書き出し** | ✅ | ⚠️ 有料 | ✅ | ✅ | ⚠️ 手作業 |
| **タイムスタンプ付きの文字起こし** | ✅ | ✅ | ✅ | ✅ | ⚠️ 手作業 |
| **ローカル推論** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **99 の話し言葉** | ✅ | ⚠️ 限定的 | ⚠️ 限定的 | ✅ | ✅ |
| **Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **インストールが必要** | ❌ 不要 | ❌ 不要 | ❌ 不要 | ❌ 不要 | ⚠️ Python + GPU |
| **コスト** | $0 | $0〜$30/月 | $0.25/分 | €0.20/分 | $0（自分のハードウェア） |

**負けるところ：** ローカルにインストールすれば、ブラウザのタブより大きなモデルを速いバックエンドで動かせますし、有料サービスには話者ラベルやチームのワークスペースがあります。EarScribe の強みは、無料で、何もインストールせずに済み、音声がどこにも行かないことです。

→ **[earscribe.app で試す](https://earscribe.app)**

---

## 🌍 対応する入力と言語

### 音声 — MP3、WAV、M4A、AAC、OGG、FLAC、Opus

Web Audio API がデコードできるものはすべて受け付けます。この7形式で、出会う録音のほとんどをカバーできます。

- 🎵 **[MP3 文字起こし](https://earscribe.app/mp3-to-text)** — ポッドキャストとインタビューの標準
- 🎙️ **[WAV 文字起こし](https://earscribe.app/wav-to-text)** — ロスレスのスタジオ録音・フィールド録音
- 📱 **[M4A 文字起こし](https://earscribe.app/m4a-to-text)** — iPhone のボイスメモ
- 🎧 **[ボイスメモ文字起こし](https://earscribe.app/voice-memo-to-text)** — スマートフォンでの録音
- 🔊 **[音声文字起こし](https://earscribe.app/audio-to-text)** — 汎用の入り口
- 🎬 **[音声から SRT](https://earscribe.app/audio-to-srt)** — そのまま字幕へ

### 動画 — MP4、MOV、MKV、WebM、M4V、TS、QT、M2TS

音声トラックは [mediabunny](https://mediabunny.dev) でデマックスし、WebCodecs でデコードし、小さな 16 kHz モノラルの MP3（MP3 エンコーダがない環境では WAV）として再エンコードします。すべてローカルです。ブラウザがデコードできないコンテナは、黙って空の文字起こしを返すのではなく、はっきりしたメッセージで失敗します。

### マイク

録音はタブ内で MediaRecorder によって行われます。録音はドロップしたファイルとまったく同じように文字起こしされます。録音中のリアルタイム字幕は提供**しません**（[できないこと](#-できないこと)を参照）。

### 言語 — 話し言葉 99、表示言語 27

Whisper は話されている言語を自動で判定します。英語、スペイン語、フランス語、ドイツ語、イタリア語、ポルトガル語、ロシア語、日本語、韓国語、中国語（簡体字・繁体字）、アラビア語、ヒンディー語、トルコ語、オランダ語、ポーランド語、インドネシア語、スウェーデン語、ノルウェー語、デンマーク語、フィンランド語、チェコ語、ハンガリー語、ギリシャ語、ヘブライ語、タイ語、ベトナム語、そのほか 70+ の言語。

インターフェースは 27 ロケールに翻訳されています。英語は `/` にあり、残りの 26 はプレフィックスを持ちます。

| | | | |
|---|---|---|---|
| [English](https://earscribe.app) | [简体中文](https://earscribe.app/zh-CN) | [日本語](https://earscribe.app/ja) | [한국어](https://earscribe.app/ko) |
| [Español](https://earscribe.app/es) | [Português (BR)](https://earscribe.app/pt-br) | [Deutsch](https://earscribe.app/de) | [Français](https://earscribe.app/fr) |
| [Русский](https://earscribe.app/ru) | [Italiano](https://earscribe.app/it) | [Polski](https://earscribe.app/pl) | [Nederlands](https://earscribe.app/nl) |
| [Українська](https://earscribe.app/uk) | [Türkçe](https://earscribe.app/tr) | [Tiếng Việt](https://earscribe.app/vi) | [ไทย](https://earscribe.app/th) |
| [हिन्दी](https://earscribe.app/hi) | [বাংলা](https://earscribe.app/bn) | [اردو](https://earscribe.app/ur) | [العربية](https://earscribe.app/ar) |
| [فارسی](https://earscribe.app/fa) | [Bahasa Indonesia](https://earscribe.app/id) | [Svenska](https://earscribe.app/sv) | [Norsk](https://earscribe.app/nb) |
| [Dansk](https://earscribe.app/da) | [Suomi](https://earscribe.app/fi) | [繁體中文](https://earscribe.app/zh-TW) | |

---

## 💼 ユースケース

### 🎙️ ポッドキャスター・クリエイター

ショーノート、エピソードの SEO、アクセシビリティのための**[ポッドキャスト文字起こし](https://earscribe.app/podcast-transcription)**。動画版には SRT、ブログには TXT を書き出します。

### 📰 ジャーナリスト・リサーチャー

元の録音があなたのノート PC に残る**[インタビュー文字起こし](https://earscribe.app/interview-transcription)**。漏れたり、提出を求められたり、監査されたりする第三者のコピーが存在しません。

### 🎓 学生・講師

録音した講義の**[講義文字起こし](https://earscribe.app/audio-to-text)**。次の回の前に検索できます。iPhone のボイスメモや Zoom の書き出しにも使えます。

### 📞 会議・ユーザーリサーチ

**[会議録音のテキスト化](https://earscribe.app/meeting-recording-to-text)** — 通話の文字起こしであって、自動生成された議事メモではありません。

### 🎬 動画編集者

YouTube、Premiere、Final Cut、Resolve 向けの**[音声から SRT](https://earscribe.app/audio-to-srt)**。字幕キューのタイミングは Whisper 自身のタイムスタンプから取り、画面からはみ出すものは字幕チェックが指摘します。

### 📚 オーディオブック・長い録音

2時間のファイルも扱えますが、ここはデバイスのメモリがものを言う場面です。4時間の録音を始める前に、[長い音声がどう処理されるか](https://earscribe.app/guides/how-to-transcribe-long-audio)を読んでおいてください。

---

## 🚧 できないこと

はっきり書いておけば、誰かの無駄な1回を省けます。

- **話者分離はしません。** 1つのファイルに2人が入っていれば、出てくるのは「話者 1 / 話者 2」のラベルのない平坦なテキストです。インタビューのページはわざとそう書いています。
- **翻訳はしません。** 文字起こしは話された言語のままです。UI の言語と話し言葉は無関係です。
- **リアルタイム字幕はありません。** 録音と文字起こしは別のステップです。まずマイクで録り、そのあとファイルを文字起こしします。
- **キューは直列で、タブを開いたままにする必要があります。** バッチ全体でモデル1つ、言語設定1つです。タブを閉じれば止まります。
- **デバイス間の同期はありません。** プロジェクトはこのブラウザに住んでいます。引っ越すときはワークスペースの書き出しを使ってください。
- **オフラインアプリではありません。** 重みはキャッシュされますが、ページ自体はネットワークから読み込まれます。インストールしても増えるのはデスクトップやホーム画面のショートカットで、オフラインのコピーではありません。
- **1ファイル 1 GiB は厳格な上限です。実際に効いてくるのはメモリです。**

---

## ❓ FAQ

<details>
<summary><b>EarScribe は本当に無料で、制限もないのですか？</b></summary><br/>
はい。有料プランも、クレジットカードも、分単位の課金も、日次・月次の上限も、アカウントもありません。計算はあなた自身のハードウェアで走るので、クラウドの請求書を転嫁する必要がないのです。1ファイル 1 GiB の上限はありますし、実際にどこまで完了できるかはデバイスのメモリで決まります。
</details>

<details>
<summary><b>音声はどこかにアップロードされますか？</b></summary><br/>
いいえ。音声はタブ内でデコードされ、Web Worker で動く Whisper モデルに渡されます。モデルの重みは CDN から<i>あなたの</i>ブラウザへダウンロードされるので、CDN にはあなたの IP アドレスが見えます — ただし録音は送られません。公開ページには Google AdSense（AdSense のポリシーで除外されるペルシャ語ページを除く）と、Cookie を使わない Plausible の分析が入っています。<code>/dashboard</code> は広告コードを一切読み込みません。
</details>

<details>
<summary><b>動画をそのまま文字起こしできますか？</b></summary><br/>
はい、そのままできます — MP4、MOV、MKV、WebM、M4V、TS、QT、M2TS。音声トラックはブラウザ内で取り出され、通常のファイルと同じように文字起こしされるので、ffmpeg も変換サイトも要りません。コンテナがブラウザのデコードできないコーデックを使っている場合は、空の文字起こしを返すのではなく、アプリがそう伝えます。
</details>

<details>
<summary><b>初回の実行が遅いのはなぜですか？</b></summary><br/>
モデルを初めて使うとき、ブラウザがその重みをダウンロードします。WebAssembly の tiny で 41 MB、WebGPU の turbo で 3.24 GB までです。以降はキャッシュされます。ほとんどは <b>base</b>（WebAssembly で 77 MB、WebGPU で 291 MB）を選んでおけば大丈夫です。
</details>

<details>
<summary><b>精度はどのくらいで、どのモデルを選べばいいですか？</b></summary><br/>
同じ 34 秒のクリップで、4つのモデルは 111 語のうち 26 語で食い違いました。同じモデルでもダウンロードサイズを変えると、自分自身と食い違います。精度のパーセントではなく、あなたにとって大事な語で選んでください。<a href="https://earscribe.app/guides/which-whisper-model-should-i-use">モデルガイド</a>に実際の違いが並んでいます。
</details>

<details>
<summary><b>SRT や VTT の字幕は得られますか？</b></summary><br/>
はい。書き出し → SRT または VTT です。タイミングは Whisper 自身のセグメント境界から来ており、あとからテキストを切って作るものではありません。字幕チェックは長すぎる、速すぎる、重複している、空、時間が重なっている字幕キューを指摘し、書き出す前にキューのテキストとタイミングを編集できます。
</details>

<details>
<summary><b>すでに SRT や VTT ファイルがある場合は？</b></summary><br/>
モデルをダウンロードせずに変換できます。<a href="https://earscribe.app/srt-to-vtt">SRT から VTT</a> と <a href="https://earscribe.app/srt-to-txt">SRT からテキスト</a>はファイルをローカルで解析します。何もアップロードされず、Whisper の重みも取得しません。
</details>

<details>
<summary><b>オフラインで使えますか？</b></summary><br/>
文字起こしのステップは使えます。ページとモデルが読み込まれていれば、音声は文字起こしサーバーに接続せずに処理されます。ただしアプリ自体がオフラインのバンドルではありません。開くにはネットワークが必要で、一度もダウンロードしていないモデルは取得する必要があります。フッターからインストールしても、ワークスペースに直接入るショートカットが増えるだけで、オフラインのコピーは増えません。
</details>

<details>
<summary><b>誰が話しているかをラベル付けしますか？</b></summary><br/>
いいえ。出力はタイムコード付きの平坦なテキストです。話者ダイアライゼーションはこのビルドには含まれておらず、アプリもそう見せかけることはしません。
</details>

<details>
<summary><b>結果はどこに保存されますか？</b></summary><br/>
このブラウザの中です。プロジェクトは IndexedDB、モデルの重みは CacheStorage に入ります。残す選択をしない限り、元の音声はプロジェクトと一緒には保存されません。ワークスペースに保存されていないページは、再読み込みでまっさらになります。残したいものは <code>/dashboard</code> とその書き出しを使ってください。
</details>

<details>
<summary><b>Otter.ai や Rev の無料代替はありますか？</b></summary><br/>
EarScribe はクラウド文字起こしサービスの無料の代替です。計算はあなたが行い、音声はその場に留まり、分単位の課金はありません。トレードオフは現実にあります。話者ラベルはなく、チームのワークスペースもなく、長いファイルはあなたのマシンの性能に縛られます。
</details>

<details>
<summary><b>MP3 を無料でテキストにするには？</b></summary><br/>
MP3 を <a href="https://earscribe.app/mp3-to-text">earscribe.app/mp3-to-text</a>（またはトップページ）にドロップしてください。ブラウザ内でデコードされ、ローカルで文字起こしされ、コピーするか SRT、VTT、TXT、JSON として書き出せます。
</details>

> さらに詳しい回答は**[EarScribe について](https://earscribe.app/about)**に、計測のメモは**[ガイド](https://earscribe.app/guides)**にあります。

---

## 🛠️ 技術スタック

- **[Next.js 15](https://nextjs.org)**（App Router）+ **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web、WebGPU と WebAssembly のフォールバック
- **[OpenAI Whisper](https://github.com/openai/whisper)** — tiny、base、small、large-v3-turbo を ONNX 量子化
- **[mediabunny](https://mediabunny.dev)** + **WebCodecs** — タブ内での動画デマックスと音声抽出
- **[next-intl](https://next-intl.dev)** — 27 ロケール、言語ごとに1つのメッセージカタログ
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Cloudflare Pages](https://pages.cloudflare.com)** でホスティング。いくつかの Pages Functions（モデル配信、フィードバックのエンドポイント）も併用

サイトは静的レンダリングされ、ブラウザでハイドレートされます。文字起こしと字幕変換はクライアントサイドだけで動きます。モデルの重みは初回利用時に Hugging Face の CDN から取得し、CacheStorage にキャッシュします。

---

## 🧑‍💻 ローカル開発

```bash
git clone https://github.com/rocnubie/earscribe-free-speech-to-text.git
cd earscribe-free-speech-to-text
pnpm install
pnpm dev
# → http://localhost:3000
```

デプロイ前に走るチェック：

```bash
pnpm typecheck
pnpm lint
pnpm test              # node:test — queue state machine, subtitle parsers, release id
pnpm i18n:gate         # no missing keys, no English leftovers, no broken placeholders
pnpm seo:check         # page copy, keyword coverage, FAQ and cursor audits
node scripts/sitemap-audit.mjs
node scripts/llms-txt-audit.mjs
pnpm readme:audit      # README sizes vs lib/models.ts, links, 9-language parity
```

`pnpm build` は `out/` に静的エクスポートを生成します。いくつかの監査は `out/` を読むので、先にビルドを走らせてください。

---

## ☁️ デプロイ

本番デプロイは1つのコマンドで、すべての監査を順番に実行します。

```bash
pnpm pages:deploy
```

まずローカルのデプロイマーカー（`lib/release.ts` の `deployId`）を、ライブサイトの `/changelog` が返すものと比べ、一致していれば続行を拒否します。古いビルドはこうして捕まえます。そのあとビルドし、リンク、ガイド、`llms.txt`、i18n、サイトマップ、PWA の監査を走らせ、`out/` を Cloudflare Pages に公開します。

`/changelog` は読者向けの変更リストで、読んだ人が何か手を打てる内容だけを載せます。ビルドログではありません。内部のリファクタリング、文言の修正、翻訳作業は新しい `deployId` を受け取りますが、変更履歴には載りません。

環境変数とバインディング：

| 名前 | 用途 |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | 正規 URL、サイトマップ、OG タグ |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible のサイト識別子 |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | Plausible のスクリプト URL |
| `FEEDBACK_DB`（D1 binding） | `/feedback` エンドポイント。スキーマは `migrations/` |

---

## 🌐 言語を追加する

1. [`i18n/locale.ts`](i18n/locale.ts) の `ALL_LOCALE_NAMES` にロケールコードを追記します。
2. `en.json` の隣に `messages/<code>.json` を追加し、すべて翻訳します。
3. `pnpm i18n:gate` を実行します。ルーティング、サイトマップ、hreflang、OG メタデータは新しいロケールを自動で拾いますが、キーが欠けていればゲートで落ちます。

`translatedLocales` に入れてよいのは、このゲートを通ったロケールだけです。それ以外は言語スイッチャーが部分翻訳として表示します。

---

## 🔬 Whisper モデルを追加する

[`lib/models.ts`](lib/models.ts) の `MODELS` にエントリを追記します。`wasm` と `webgpu` の両方に**実測した** `sizeMB` を入れてください。2つのバックエンドは別の重みファイルを配布します。両方に同じ数字を書いたのが、このアプリがかつて 500 MB と約束して 968 MB を配った理由です。リポジトリは Hugging Face 上に `onnx-community/<name>` として存在するか、ONNX-Whisper 互換である必要があります。長所・短所の文言用に、各 `messages/*.json` へ対応する `models.<id>` ブロックも追加します。

---

## 🤝 コントリビュート

Pull Request を歓迎します。とくに次のようなものを：

- 翻訳（`messages/<code>.json`）と、ロケール固有の README 修正
- 壊れたファイル、ブラウザ、デバイスのメモリを添えたバグ報告
- 計測データ：手元にないハードウェアでのモデルサイズ、時間、ピークメモリ
- アクセシビリティの修正

ここで issue か PR を開いてください。まず **[earscribe.app](https://earscribe.app)** を試して、何に貢献することになるのかを見るのもいいでしょう。

---

## 📄 ライセンス

このリポジトリのマーケティングサイトとページは [MIT](LICENSE) です。個人利用も商用利用も無料です。文字起こしワーカー、音声デコーダー、字幕エクスポーターはここでは公開していないため、このリポジトリはサービス全体をセルフホストできる完全なコピーではありません。

---

<p align="center">
  <b>👉 ライブアプリを試す：<a href="https://earscribe.app">earscribe.app</a></b><br/>
  <sub>音声テキスト変換 · 動画テキスト変換 · 音声認識 · 字幕の書き出し · 100% 無料 · 登録不要 · デバイス内処理</sub>
</p>

<p align="center">
  <a href="https://github.com/openai/whisper">OpenAI Whisper</a>、<a href="https://huggingface.co/docs/transformers.js">Transformers.js</a>、<a href="https://onnxruntime.ai">ONNX Runtime Web</a>、<a href="https://mediabunny.dev">mediabunny</a> を使って ❤️ を込めて作りました。
</p>
