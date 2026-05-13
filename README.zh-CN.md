<p align="center">
  <b>🌐 Language / 语言 / Idioma:</b><br/>
  <a href="README.md">English</a> · <a href="README.zh-CN.md">中文</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português</a> · <a href="README.ja.md">日本語</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.ru.md">Русский</a> · <a href="README.ko.md">한국어</a>
</p>

<h1 align="center">EarScribe — 免费音频转文字 & 免费语音转文字</h1>

<p align="center">
  <b>在浏览器中将音频和视频转文字。100% 免费，无需注册，不上传，无限次使用。</b><br/>
  <sub>由 OpenAI Whisper 驱动，通过 WebGPU / WebAssembly 在本地运行 —— 你的音频始终不离开设备。</sub>
</p>

<p align="center">
  <a href="https://earscribe.app"><img alt="在线体验" src="https://img.shields.io/badge/在线体验-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="完全免费" src="https://img.shields.io/badge/100%25-免费-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="无需注册" src="https://img.shields.io/badge/无需-注册登录-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="隐私保护" src="https://img.shields.io/badge/本地运行-隐私保护-0f172a?style=for-the-badge"></a>
  <img alt="MIT 许可证" src="https://img.shields.io/badge/许可证-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe 免费音频转文字工具截图 —— 拖放 MP3、WAV、M4A 文件，通过 OpenAI Whisper 在浏览器本地完成免费语音转文字"></a>
</p>

<p align="center">
  <b>立即试用：</b>
  <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/about">关于</a> ·
  <a href="https://earscribe.app/es">Español</a> ·
  <a href="https://earscribe.app/de">Deutsch</a> ·
  <a href="https://earscribe.app/fr">Français</a> ·
  <a href="https://earscribe.app/ja">日本語</a> ·
  <a href="https://earscribe.app/ko">한국어</a> ·
  <a href="https://earscribe.app/pt-br">Português</a> ·
  <a href="https://earscribe.app/ru">Русский</a> ·
  <a href="https://earscribe.app/hi">हिन्दी</a> ·
  <a href="https://earscribe.app/ar">العربية</a>
</p>

---

## 什么是 EarScribe？

**[EarScribe](https://earscribe.app)** 是一款完全在浏览器中运行的**免费音频转文字**和**免费语音转文字**工具。把音频文件拖进去 —— MP3、WAV、M4A、OGG、FLAC、WebM，或者视频文件的音轨 —— 就能得到带时间戳的完整转录文本，一键导出 **SRT / VTT 字幕**。没有上传，没有登录，没有 API Key，没有按分钟计费。

这是最简单的免费**音视频转文字**方式：

- **拖放**任意音频文件
- **OpenAI Whisper** 在本地完成语音识别
- 获得**带时间戳的转录文本**、同步波形图，以及 **SRT / VTT 字幕**
- 音频**始终不离开你的设备** —— 完全的隐私保护，首次下载模型后可离线使用

> **在线体验：** **[earscribe.app](https://earscribe.app)**

---

## 目录

- [功能特性](#功能特性)
- [截图预览](#截图预览)
- [三步快速上手](#三步快速上手)
- [免费音频转文字横向对比](#免费音频转文字横向对比)
- [Whisper 模型选择指南](#whisper-模型选择指南)
- [支持的格式与 99 种语言](#支持的格式与-99-种语言)
- [使用场景](#使用场景)
- [常见问题](#常见问题)
- [技术栈](#技术栈)
- [本地开发](#本地开发)
- [部署到 Cloudflare Pages](#部署到-cloudflare-pages)
- [添加新语言](#添加新语言)
- [添加新 Whisper 模型](#添加新-whisper-模型)
- [贡献指南](#贡献指南)
- [许可证](#许可证)

---

## 功能特性

EarScribe 是一个完整的**免费在线转文字**工作台 —— 为播客创作者、记者、学生，以及所有不想把录音上传到云端的人而建。

|  | 功能 | 说明 |
|---|---|---|
| 🆓 | **100% 免费，无限次使用** | 没有付费层级，没有每日配额，没有按分钟计费。真正的**免费音频转文字**。 |
| 🚫 | **无需注册，无需登录** | 不需要邮箱，不需要账户，不需要信用卡。打开 [earscribe.app](https://earscribe.app) 拖入文件即可。 |
| 🔒 | **隐私优先设计** | 音频永不离开你的设备。不存在任何接触你文件的服务器端点。 |
| 🌐 | **浏览器原生 AI** | **OpenAI Whisper** 通过 WebGPU（GPU 加速）或 WebAssembly 降级方案在本地运行。 |
| 🎬 | **字幕导出** | 一键导出 **SRT / VTT** 字幕，直接用于 Premiere、Final Cut、DaVinci Resolve、YouTube。 |
| 📜 | **带时间戳的转录文本** | 点击任意一行即可跳转到对应时刻。内置波形图拖拽条。 |
| 🗣️ | **99 种语言** | Whisper 自动识别音频语言，无需手动选择。 |
| ⚡ | **首次运行后可离线** | 模型缓存在浏览器中，后续转录无需联网。 |
| 🎚️ | **4 种 Whisper 模型** | Tiny（40 MB）→ Base → Small → **Large v3 Turbo** 提供专业级精度。 |
| 📦 | **多种导出格式** | `.txt` · `.srt` · `.vtt` · `.json`（原始文本 + 时间信息） |
| 🌍 | **10 种界面语言** | 中文 · EN · ES · DE · FR · PT-BR · RU · JA · KO · HI · AR |
| 🪶 | **无广告，无追踪** | 仅使用 Plausible 统计 —— 无会话录制，无 Cookie，无指纹识别。 |

---

## 截图预览

> 以下截图均来自 **[earscribe.app](https://earscribe.app)** 线上版本，拍摄于 2026 年。

### 1. 拖入音频文件 —— 完全免费，无需注册，无需登录

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="免费音频转文字工具 —— 在浏览器中拖放 MP3、WAV、M4A、OGG、FLAC 或 WebM 文件，无需注册登录，无限次免费语音转文字"></a>
</p>

### 2. 带时间戳的转录文本与波形图，点击任意行直接跳转

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="EarScribe 音频转文字结果展示 —— 带时间戳的转录文本、波形图拖拽条，以及一键 SRT 和 VTT 字幕导出"></a>
</p>

### 3. 三步完成：拖入 → 选择 Whisper 模型 → 导出

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="EarScribe 免费音频转文字使用流程 —— 拖入音频，选择 OpenAI Whisper 模型（Tiny、Base、Small 或 Large v3 Turbo），阅读并导出转录文本"></a>
</p>

### 4. 为什么选择 EarScribe —— 隐私优先，浏览器原生 Whisper

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/04-features.webp" alt="EarScribe 功能特性 —— 不上传服务器保护隐私、WebGPU 加 WASM 双引擎、99 种语言自动识别、SRT VTT JSON TXT 导出、离线可用、完全免费无需 API Key"></a>
</p>

### 5. 谁在用 EarScribe —— 播客创作者、记者、学生、视频剪辑师

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="EarScribe 使用场景 —— 播客转文字、记者采访转录、讲座转文字、用户访谈、视频生成 SRT 字幕、有声书音频转录"></a>
</p>

### 6. EarScribe 对比 Otter.ai、Rev、Whisper API —— 功能横向比较

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="EarScribe 对比 Otter.ai、Rev、Whisper API —— 免费无限制音频转文字替代方案，无按分钟计费，设备本地运行保障隐私"></a>
</p>

### 7. 免费语音转文字 —— 常见问题

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="免费语音转文字常见问题 —— 隐私安全、MP3 转文字、SRT 和 VTT 字幕导出、支持语言、离线使用，以及 OpenAI Whisper 浏览器运行原理"></a>
</p>

---

## 三步快速上手

网页端最快的**免费语音转文字**流程：

1. 用任意现代浏览器（Chrome、Edge、Safari、Firefox）打开 **[earscribe.app](https://earscribe.app)**。
2. 把音频文件拖到页面上（MP3、WAV、M4A、OGG、FLAC、WebM —— 单文件时长最长约 2 小时）。
3. 选择 Whisper 模型。大多数用户推荐 **Base**；如果你有支持 WebGPU 的显卡，选 **Turbo** 可获得专业级精度。
4. 点击**开始转录**。音频在你的**浏览器标签页内**解码并交给 Whisper 处理。
5. 阅读转录文本，点击任意行可播放对应片段，或者**导出 → .srt / .vtt / .txt / .json**。

不上传。不注册账号。无配额限制。这才是真正尊重你数据的**免费音频转文字**。

> **小技巧：** 想把视频转文字？先用任意免费工具（ffmpeg、Audacity、VLC 均可）从视频中提取音频，导出为 MP3 或 WAV，然后拖到 EarScribe 即可。

---

## 免费音频转文字横向对比

2026 年，有哪些方式可以把音频转文字？EarScribe 和它们相比如何？

| | **EarScribe** | Otter.ai 免费版 | Rev 免费试用 | HappyScribe | 本地 Whisper CLI |
|---|:---:|:---:|:---:|:---:|:---:|
| **免费无限制** | ✅ | ⚠️ 每月 300 分钟 | ❌ 仅试用 | ❌ 需付费 | ✅ |
| **无需注册 / 登录** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **不上传（隐私保护）** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **浏览器直接使用** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **SRT / VTT 字幕导出** | ✅ | ⚠️ 需付费 | ✅ | ✅ | ⚠️ 需手动处理 |
| **带时间戳的转录** | ✅ | ✅ | ✅ | ✅ | ⚠️ 需手动处理 |
| **离线可用** | ✅（首次加载后） | ❌ | ❌ | ❌ | ✅ |
| **99 种语言** | ✅ | ⚠️ 有限 | ⚠️ 有限 | ✅ | ✅ |
| **OpenAI Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **需要安装** | ❌ 无 | ❌ 无 | ❌ 无 | ❌ 无 | ⚠️ Python + GPU |
| **费用** | $0 | $0–$30/月 | $0.25/分钟 | €0.20/分钟 | $0（用你自己的硬件） |

**结论：** EarScribe 是目前唯一集**真正免费、无限制、无需注册、不上传服务器、浏览器原生运行、字幕就绪**于一体的**音频转文字**工具，一键即可完成。→ **[前往 earscribe.app 体验](https://earscribe.app)**

---

## Whisper 模型选择指南

EarScribe 内置四种 **OpenAI Whisper** 模型规格，全部在本地运行，首次下载后永久缓存。

| 模型 | 大小 | 精度 | 速度 | 内存需求 | 适用场景 |
|---|---:|:---:|:---:|---:|---|
| **Whisper Tiny** | ~80 MB | ⭐ | ⚡⚡⚡⚡ | 1 GB | 快速语音便签、低配手机 |
| **Whisper Base** *(推荐)* | ~200 MB | ⭐⭐ | ⚡⚡⚡ | 2 GB | 日常播客、讲座转文字 |
| **Whisper Small** | ~500 MB | ⭐⭐⭐ | ⚡⚡ | 4 GB | 口音较重、背景噪音较多的音频 |
| **Whisper Large v3 Turbo** | ~800 MB | ⭐⭐⭐⭐ | ⚡⚡⚡（WebGPU） | 6 GB | 专业级转录、多说话人、音乐混合人声 |

> 模型**首次运行后即缓存** —— 下次转录无需再次下载。完整说明请参见 **[earscribe.app](https://earscribe.app)**。

---

## 支持的格式与 99 种语言

### 音频格式 —— MP3、WAV、M4A、OGG、FLAC、WebM

EarScribe 支持 Web Audio API 能解码的所有音频格式：

- **[MP3 转文字](https://earscribe.app)** —— 最常见的播客格式
- **[WAV 转文字](https://earscribe.app)** —— 无损录音室录音
- **[M4A 转文字](https://earscribe.app)** —— Apple 语音备忘录、iPhone 录音
- **OGG 转文字** —— 开源格式
- **FLAC 转文字** —— 高保真音频存档
- **WebM 转文字** —— 浏览器录制的音视频

需要**视频转文字**（MP4、MOV、MKV）？先用任意免费工具（Audacity、VLC、ffmpeg）提取音轨，得到 MP3 或 WAV 后拖到 **[earscribe.app](https://earscribe.app)** 即可。

### 语言 —— 支持 99 种

Whisper 自动检测音频语言，无需手动选择。EarScribe 支持：普通话、粤语、英语、西班牙语、法语、德语、意大利语、葡萄牙语、俄语、日语、韩语、繁体中文、阿拉伯语、印地语、土耳其语、荷兰语、波兰语、印尼语、瑞典语、挪威语、丹麦语、芬兰语、捷克语、匈牙利语、希腊语、希伯来语、泰语、越南语，以及 70 余种其他语言。

界面语言支持：

| 语言 | 链接 |
|---|---|
| 中文（自动检测） | [earscribe.app](https://earscribe.app) |
| 🇺🇸 English | [earscribe.app](https://earscribe.app) |
| 🇪🇸 Español | [earscribe.app/es](https://earscribe.app/es) |
| 🇩🇪 Deutsch | [earscribe.app/de](https://earscribe.app/de) |
| 🇫🇷 Français | [earscribe.app/fr](https://earscribe.app/fr) |
| 🇧🇷 Português | [earscribe.app/pt-br](https://earscribe.app/pt-br) |
| 🇷🇺 Русский | [earscribe.app/ru](https://earscribe.app/ru) |
| 🇯🇵 日本語 | [earscribe.app/ja](https://earscribe.app/ja) |
| 🇰🇷 한국어 | [earscribe.app/ko](https://earscribe.app/ko) |
| 🇮🇳 हिन्दी | [earscribe.app/hi](https://earscribe.app/hi) |
| 🇸🇦 العربية | [earscribe.app/ar](https://earscribe.app/ar) |

---

## 使用场景

EarScribe 是一个通用的**免费音频转录**工具。以下是人们用它做的事：

### 播客创作者与内容创作者

**免费播客转文字**，用于节目笔记、集数 SEO 和无障碍访问。几分钟内完成 **MP3 转文字**，导出 `.srt` 用于视频版本。→ [前往 earscribe.app 开始使用](https://earscribe.app)

### 记者与研究人员

**采访录音留在你的电脑上。** 没有第三方服务器，没有审计日志，没有泄漏风险。**免费采访转录**，在同类工具中隐私保障最强之一。

### 学生与教育工作者

**免费讲座转文字** —— 把课堂录音拖进来，下节课前就有可检索的文字稿。支持 iPhone 语音备忘录（`.m4a`）和 Zoom 录制文件。

### 会议记录与用户研究

**音频转文字用于用户访谈** —— 生成带标注的文字稿，不需要把敏感的客户录音发给第三方 SaaS。

### 视频剪辑师 —— 字幕与配音

**从音频生成 SRT 字幕**，用于 YouTube、Premiere Pro、Final Cut Pro、DaVinci Resolve。字幕时间轴直接来自 Whisper 的时间戳，与画面完美对齐。

### 有声书与长录音

两小时的 MP3？没问题。**Whisper Large v3 Turbo** 可处理有声书长度的音频，无按分钟计费，无 API 配额限制。

---

## 常见问题

<details>
<summary><b>EarScribe 真的完全免费、无限次使用吗？</b></summary><br/>
是的 —— 100% 免费，无限次使用，无需注册登录。没有付费层级，没有信用卡，没有按分钟计费，没有每日或每月配额。Whisper <b>语音转文字</b>模型在你自己的硬件上运行，没有云端算力成本需要转嫁给你。真正的<a href="https://earscribe.app">免费音频转文字</a>，没有任何附加条件。
</details>

<details>
<summary><b>我的音频隐私和安全有保障吗？</b></summary><br/>
完全有保障。EarScribe 是一个本地优先的<b>音频转文字工具</b>：你的音频文件永远不会离开你的设备，也不会被上传到任何服务器。没有账户意味着不会收集任何关于你的数据。模型下载完成后，甚至可以在断网状态下使用。
</details>

<details>
<summary><b>我的音频会被上传到服务器吗？</b></summary><br/>
不会。<b>免费音频转文字</b>完全在本地完成 —— 音频在你的设备上解码，交给运行在 Web Worker 中的 Whisper 模型处理。没有任何数据发送到服务器。
</details>

<details>
<summary><b>为什么第一次运行比较慢？</b></summary><br/>
第一次选择某个模型进行<b>音频转文字</b>时，浏览器需要下载模型文件（根据规格大小，约 80 MB 到 800 MB 不等）。下载完成后，这个免费<b>音频转文字</b>模型会被缓存并复用 —— 无需重新下载。
</details>

<details>
<summary><b>支持哪些语言？</b></summary><br/>
通过 Whisper，<b>免费音频转文字</b>支持 99 种语言，语言自动检测，无需手动选择。
</details>

<details>
<summary><b>可以直接转录视频吗？</b></summary><br/>
目前不支持直接拖入视频文件。需要<b>视频音频转文字</b>时，请先用任意能导出 MP3 或 WAV 的工具提取音轨，然后拖到 <a href="https://earscribe.app">earscribe.app</a> 即可。
</details>

<details>
<summary><b>可以离线使用吗？</b></summary><br/>
模型下载完成后，可以。<b>免费音频转文字</b>在离线状态下同样可用。页面本身需要先加载一次，后续转录无需联网。
</details>

<details>
<summary><b>如何免费把 MP3 转文字？</b></summary><br/>
把 MP3 文件拖到 <a href="https://earscribe.app">EarScribe</a>，即可免费完成 <b>MP3 转文字</b>。文件在浏览器中解码，Whisper 在本地进行语音识别，然后复制输出文本，或将 <b>MP3 转文字</b>结果导出为 SRT、VTT、TXT 或 JSON。不需要上传，不需要账户。
</details>

<details>
<summary><b>有没有免费的 Otter.ai 或 Rev 替代品？</b></summary><br/>
EarScribe 就是 Otter.ai、Rev、HappyScribe 等云转录服务的免费<b>音频转文字替代方案</b>。权衡之处在于：你用自己的设备完成计算，换来的是<b>免费语音转文字</b>、音频永不离开设备，以及零按分钟计费、零订阅费用。
</details>

<details>
<summary><b>可以从音频生成 SRT 或 VTT 字幕吗？</b></summary><br/>
可以。<b>音频转文字</b>完成后，点击<b>导出 → .srt</b> 或 <b>.vtt</b>。字幕时间轴来自 Whisper 的时间戳输出，与<b>音频转文字</b>结果精准对齐，无需手动切割。
</details>

<details>
<summary><b>这是在浏览器中运行 OpenAI Whisper 吗？</b></summary><br/>
是的 —— EarScribe 通过 Transformers.js 在 WebGPU 上运行 <b>OpenAI Whisper</b>（Tiny、Base、Small 和 Large v3 Turbo），WebGPU 不可用时自动降级为 WebAssembly，全程免费完成<b>音频转文字</b>。
</details>

> 更多问题请参见 **[关于页面](https://earscribe.app/about)**。

---

## 技术栈

EarScribe 的设计目标是快速、静态、低成本托管：

- **[Next.js 15](https://nextjs.org)**（App Router）+ **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** —— ONNX Runtime Web（WebGPU + WASM）
- **[OpenAI Whisper](https://github.com/openai/whisper)** —— Tiny、Base、Small、Large v3 Turbo（ONNX 量化版本）
- **[next-intl](https://next-intl.dev)** —— 国际化（已支持 10 种语言）
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[@opennextjs/cloudflare](https://opennext.js.org/cloudflare)** —— 部署到 Cloudflare Pages
- **Plausible Analytics**（仅在生产环境加载）

整个前端是**纯静态**的。模型权重文件在首次使用时从 Hugging Face CDN 拉取，并由浏览器的 CacheStorage 缓存。

---

## 本地开发

```bash
git clone https://github.com/<your-org>/earscribe.git
cd earscribe
pnpm install
pnpm dev
# → http://localhost:3000
```

类型检查、代码检查和构建：

```bash
pnpm typecheck
pnpm lint
pnpm build
```

---

## 部署到 Cloudflare Pages

```bash
pnpm cf:build          # 生成 .open-next/
pnpm cf:preview        # 通过 Wrangler 本地预览
pnpm cf:deploy         # wrangler deploy
```

编辑 `wrangler.toml` 并在 Cloudflare 控制台中设置以下环境变量：

| 变量 | 用途 |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | 规范 URL、站点地图、OG 标签 |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible 站点标识符 |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | Plausible 脚本地址 |

---

## 添加新语言

1. 在 [`i18n/locale.ts`](i18n/locale.ts) 的 `locales` 数组中追加新的语言代码。
2. 在 `messages/<code>.json` 旁边新建对应的翻译文件，参照 `en.json` 结构翻译内容。

路由、站点地图、hreflang 和 OG 元数据会自动识别新语言。

---

## 添加新 Whisper 模型

在 [`lib/models.ts`](lib/models.ts) 的 `MODELS` 数组中追加一条记录。对应的模型仓库需要以 `onnx-community/<name>` 形式在 Hugging Face 上可访问（或其他兼容 ONNX Whisper 格式的仓库）。同时在每个 `messages/*.json` 中添加对应的 `models.<id>` 块，用于显示模型的优缺点说明文字。

---

## 贡献指南

欢迎 Pull Request，尤其是：

- 新语言翻译（新建 `messages/<code>.json` 即可）
- 特定音频文件或浏览器的 Bug 报告
- Hugging Face 上的新 Whisper 模型变体
- 无障碍访问改进

请在本仓库开 Issue 或提交 PR；也可以先去 **[earscribe.app](https://earscribe.app)** 体验一下，了解你在为哪个产品贡献。

---

## 许可证

[MIT](LICENSE) —— 个人和商业用途均可免费使用。

---

<p align="center">
  <b>立即体验：<a href="https://earscribe.app">earscribe.app</a></b><br/>
  <sub>免费音频转文字 · 免费语音转文字 · 音视频转文字 · 100% 免费 · 无需注册 · 隐私保护</sub>
</p>

<p align="center">
  基于 <a href="https://github.com/openai/whisper">OpenAI Whisper</a>、<a href="https://huggingface.co/docs/transformers.js">Transformers.js</a> 和 <a href="https://onnxruntime.ai">ONNX Runtime Web</a> 构建。
</p>
