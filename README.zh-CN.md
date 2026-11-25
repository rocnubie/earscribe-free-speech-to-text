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

<h1 align="center">EarScribe — 免费音频转文字、视频转文字，就在浏览器里</h1>

<p align="center">
  <b>拖入一个音频文件、一段视频，或者直接对着麦克风录音。拿到带时间戳的文字稿和字幕。</b><br/>
  <sub>Whisper 通过 WebGPU 或 WebAssembly 在你的设备上运行——录音不会被上传。</sub>
</p>

<p align="center">
  <a href="https://earscribe.app"><img alt="在线应用" src="https://img.shields.io/badge/Live-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="完全免费" src="https://img.shields.io/badge/100%25-Free-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="无需注册" src="https://img.shields.io/badge/No-Sign--up-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="本地运行、隐私保护" src="https://img.shields.io/badge/On--device-Private-0f172a?style=for-the-badge"></a>
  <img alt="许可证 MIT" src="https://img.shields.io/badge/License-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app"><img src="public/screenshots/zh-CN/hero.webp" alt="EarScribe —— 在浏览器里免费把音频和视频转成文字。拖入 MP3、WAV、M4A 或 MP4，不用上传就能拿到带时间戳的文字稿。"></a>
</p>

<p align="center">
  <b>🔗 打开应用：</b> <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/guides">指南</a> ·
  <a href="https://earscribe.app/changelog">更新日志</a> ·
  <a href="https://earscribe.app/about">关于</a>
</p>

---

## 🎙️ EarScribe 是什么

一个完全跑在浏览器标签页里的转录工作台。你给它音频、视频文件或者麦克风输入，它还你一份带时间戳、点一下就能回放的文字稿，外加可以直接交给剪辑的字幕文件。没有账号，没有上传，也没有按分钟计费。

三种入口，同一条流水线：

- **文件** —— MP3、WAV、M4A、AAC、OGG、FLAC、Opus，以及大多数 Web Audio API 能解码的格式，单个最大 1 GiB。
- **视频** —— MP4、MOV、MKV、WebM、M4V、TS、QT、M2TS。音轨会**在标签页内**解封装并重新编码成 16 kHz 单声道，然后跟普通文件一样转录。不用 ffmpeg，也不用找在线转换站。
- **麦克风** —— 在同一处录、同一处转：一节课、一通你获准录音的通话，或者一段不留下来就会丢掉的语音备忘。

加上队列，你可以一次扔进一整个文件夹然后去干别的；加上 `/dashboard` 的工作台，这些结果就变成随时能重新打开、编辑和导出的项目。

> 👉 **在线应用：** **[earscribe.app](https://earscribe.app)**

---

## 📚 目录

- [✨ 它能做什么](#-它能做什么)
- [🖼️ 截图](#️-截图)
- [🚀 快速上手](#-快速上手)
- [🗂️ 工作台](#️-工作台)
- [💸 成本](#-成本)
- [🆚 对比](#-对比)
- [🌍 支持的输入和语言](#-支持的输入和语言)
- [💼 使用场景](#-使用场景)
- [🚧 它不做什么](#-它不做什么)
- [❓ FAQ](#-faq)
- [🛠️ 技术栈](#️-技术栈)
- [🧑‍💻 本地开发](#-本地开发)
- [☁️ 部署](#️-部署)
- [🌐 新增一门语言](#-新增一门语言)
- [🔬 新增一个 Whisper 模型](#-新增一个-whisper-模型)
- [🤝 参与贡献](#-参与贡献)
- [📄 许可证](#-许可证)

---

## ✨ 它能做什么

| | 能力 | 实际到手的东西 |
|---|---|---|
| 🎬 | **音频、视频和麦克风** | 视频容器可以直接拖进来。音轨在本地提取，所以一个 200 MB 的 MP4 同样不会离开你的机器。 |
| 📝 | **带时间戳的文字稿** | 每个字幕条目都带开始和结束时间。点一行就能听到那一刻，波形进度条会跟着走。 |
| 🔍 | **在文字稿里搜索** | 一个人名、一个数字、一个术语——直接跳到那句话重听，不必把整个文件从头放一遍。 |
| 🎞️ | **字幕导出** | SRT、WebVTT、纯文本、JSON（带全精度时间码的转录对象），或者直接复制到剪贴板。 |
| 🧪 | **字幕检查** | 导出之前，先把过长、过快、重复、空白和互相重叠的字幕条目标出来。 |
| 📚 | **批量队列** | 一次拖进好几个文件，统一选一个模型、一种口语，让队列按顺序跑。随时可以在当前文件跑完后暂停。 |
| 🗂️ | **项目** | 结果以项目形式保存在浏览器里，位于 `/dashboard` 下：文字稿、字幕、源文件和回收站，之后都能重新打开。 |
| ✏️ | **字幕编辑** | 改文字、挪动某个字幕条目的出入点、拆分或删除，然后重新导出。 |
| 💾 | **备份与恢复** | 把整个工作台导出成一个文件，在另一个浏览器里导入。 |
| 🔁 | **字幕转换** | SRT ⇄ VTT、SRT → 文本，都在浏览器里完成，不下载模型——这是唯一一个秒开的工具。 |
| 🆓 | **免费且不限量** | 没有付费档位，没有每日额度，没有按分钟收费，也不需要账号。 |
| 🔒 | **架构上就是私密的** | 转录在本地进行。公开页面带分析和广告；`/dashboard` 没有广告。 |
| 🌍 | **27 种界面语言，99 种口语** | 界面翻译成了 27 个语言版本；说的语言由 Whisper 自动识别。 |

---

## 🖼️ 截图

> 全部截图来自 **[earscribe.app](https://earscribe.app)** 线上版本。

### 1. 拖文件、拖视频，或者直接录音——不用注册，不用上传

<p align="center">
  <a href="https://earscribe.app"><img src="public/screenshots/zh-CN/hero.webp" alt="免费音频和视频转文字工具 —— 在浏览器里拖入 MP3、WAV、M4A、MP4、MOV 或 MKV。无需注册，无需登录。"></a>
</p>

<p align="center"><sub>首屏：拖放区域，以及可接受的音频、视频格式一览。</sub></p>

### 2. 带时间戳的文字稿加波形图——点任意一行跳过去

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="EarScribe 的文字稿输出 —— 带时间戳的音频转文字，配波形进度条，一键导出 SRT 和 VTT 字幕"></a>
</p>

<p align="center"><sub>文字稿界面：左侧是带时间戳的行，右侧是波形与播放进度。</sub></p>

### 3. 三步：拖入 → 选一个 Whisper 模型 → 导出

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="EarScribe 上的免费音频转文字流程 —— 拖入音频或视频，选一个 Whisper 模型（tiny、base、small 或 turbo），读文字稿并导出"></a>
</p>

<p align="center"><sub>三步流程：拖入文件、选择模型、导出结果依次排开。</sub></p>

### 4. 为什么选择 EarScribe——隐私优先，浏览器原生 Whisper

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/04-features.webp" alt="EarScribe 的功能 —— 隐私优先不上传，WebGPU 加 WASM，自动识别 99 种口语，SRT VTT JSON TXT 导出，本地推理"></a>
</p>

<p align="center"><sub>功能总览：隐私、推理后端、语言和导出格式集中在一屏。</sub></p>

### 5. 谁在用 EarScribe——播客主、记者、学生、剪辑师

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="EarScribe 的使用场景 —— 为播客主、记者、学生、用户研究、视频字幕和有声书转录提供免费音频转文字"></a>
</p>

<p align="center"><sub>使用场景：播客、采访、课堂、会议等几类用户的入口。</sub></p>

### 6. EarScribe 对比 Otter.ai、Rev、HappyScribe 和本地装一份 Whisper

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="EarScribe 对比 Otter.ai、Rev、HappyScribe —— 免费不限量的音频转文字，本地推理，没有按分钟计费"></a>
</p>

<p align="center"><sub>对比表：EarScribe 与几款云端服务、本地 Whisper 的逐项对照。</sub></p>

### 7. FAQ——隐私、格式、字幕导出、离线使用

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="免费语音转文字 FAQ —— 关于隐私、MP3 和视频转文字、SRT 与 VTT 字幕导出、支持的语言、离线使用，以及浏览器里的 Whisper 的解答"></a>
</p>

<p align="center"><sub>常见问题：隐私、格式、字幕导出和离线使用的问答摘要。</sub></p>

---

## 🚀 快速上手

1. 用 Chrome、Edge、Safari 或 Firefox 打开 **[earscribe.app](https://earscribe.app)**。
2. 拖入一个文件——或者一段视频，或者按下录音。单个文件最大 1 GiB；真正的上限是你设备的内存，不是磁盘上的体积。
3. 选模型。**base** 是默认值，适合大多数语音；**tiny** 留给手机或者随手记的语音备忘；**small** 和 **turbo** 用在口音重、嘈杂或者很重要的音频上。
4. 按下 **转录**。音频在标签页内解码后喂给 Whisper。第一次运行要下载权重，留意一下按钮上标的体积。
5. 读文字稿，点一行回放，把要紧的地方改掉，然后 **导出 → SRT / VTT / TXT / JSON**，或者直接复制。

想批量处理？切到队列，想扔多少文件扔多少，模型只需要选一次。队列一次跑一个文件，复用已经在内存里的模型，每个结果都存成一个项目。

> 💡 **不需要提前转换。** 两小时的 MP4 直接扔进来就行。如果你只想要音轨，应用也可以帮你把视频里的音频抽出来。

---

## 🗂️ 工作台

`/dashboard` 是同一个转录引擎，只是带上了记忆。所有东西都存在当前这个浏览器里——项目记录放 IndexedDB，模型权重放 CacheStorage——不会同步到任何账号，因为压根就没有账号。

| 分区 | 里面有什么 |
|---|---|
| **项目** | 全部内容，最新的在前。 |
| **文字稿** | 由一次转录生成的项目。编辑它们的字幕条目，它们仍然留在这里。 |
| **字幕** | 从字幕文件建出来的项目——转换器和导入——这样字幕的活跟语音的活分开放。 |
| **文件** | 工作台保存的源媒体，可以按类型筛选：文字稿、字幕、音频。原始音频默认**不**保存。 |
| **回收站** | 已删除的项目，清空之前都能恢复。 |

在项目里，你可以搜索文字稿、点时间戳回放、编辑字幕条目（文字、出入点、增删）、把过长的字幕条目拆得短一些、用任意格式重新导出，或者不离开页面就打开播放器。

**备份：** 整个工作台可以导出成一个文件（最大 320 MB），在另一个浏览器或另一台机器上导入。既然项目从不离开设备，这个文件就是唯一会移动的那份拷贝——请像对待其他文档备份一样对待它。

---

## 💸 成本

免费，但并非没有成本。下面是每个模型、每种后端实测的下载体积，不是估算：

| 模型 | WebGPU | WebAssembly | 典型用途 |
|---|---:|---:|---|
| **tiny** | 151 MB | 41 MB | 语音备忘、低端手机、先试一下 |
| **base** *（默认）* | 291 MB | 77 MB | 访谈、会议、播客 |
| **small** | 968 MB | 249 MB | 口音重的语音、嘈杂的房间 |
| **turbo** | 3.24 GB | 1.09 GB | 录音棚级文字稿，精度比时间更要紧的时候 |

- **只下一次，之后走缓存。** 权重待在浏览器缓存里；第二次运行不下载任何东西。换个浏览器配置文件就得重新下载。
- **GPU 值得开。** 在同一台机器上，WebGPU 用 base 处理一个 40 分钟的文件大约 3.8 分钟，CPU 是 9.4 分钟——快了大约 2.5×，代价是三四倍的下载量。在我们的测试里，WebGPU 上的 `turbo` 连 3.24 GB 的权重都没下完，所以它被标成“未测”，而不是“快”。
- **决定成败的是内存，不是文件体积。** 长录音在转录前会先解码成 16 kHz 单声道。40 分钟的 MP3 需要几百 MB；两小时的立体声 WAV 可能在开始之前就把标签页撑爆。现在解码直接以 16 kHz 请求，把两小时立体声文件的峰值内存从大约 1.6 GB 降到了 0.5 GB。
- **没有服务器，也不用排别人的队。** 时间花的是你自己 CPU 的，所以慢的笔记本就是慢。这是不上传换来的代价。

完整的测量数据，包括方法和失败的那几次运行，都在[指南](https://earscribe.app/guides)里。

---

## 🆚 对比

2026 年，把音频转成文字还有哪些办法？EarScribe 跟它们比起来怎么样？

| | **EarScribe** | Otter.ai 免费版 | Rev 免费试用 | HappyScribe | 本地 Whisper CLI |
|---|:---:|:---:|:---:|:---:|:---:|
| **免费且不限量** | ✅ | ⚠️ 每月 300 分钟 | ❌ 仅试用 | ❌ 付费 | ✅ |
| **无需注册 / 登录** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **不上传（隐私）** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **视频不用上传就能处理** | ✅ 本地提取 | ❌ 必须上传 | ❌ 必须上传 | ❌ 必须上传 | ✅ 需要 ffmpeg |
| **在浏览器里就能用** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **SRT / VTT 导出** | ✅ | ⚠️ 付费 | ✅ | ✅ | ⚠️ 需手工处理 |
| **带时间戳的文字稿** | ✅ | ✅ | ✅ | ✅ | ⚠️ 需手工处理 |
| **本地推理** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **99 种口语** | ✅ | ⚠️ 有限 | ⚠️ 有限 | ✅ | ✅ |
| **Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **需要安装** | ❌ 不需要 | ❌ 不需要 | ❌ 不需要 | ❌ 不需要 | ⚠️ Python + GPU |
| **费用** | $0 | $0–$30/月 | $0.25/分钟 | €0.20/分钟 | $0（用你自己的硬件） |

**哪里不如人：** 本地安装可以用更快的后端跑更大的模型，付费服务则多出说话人标签和团队工作台。EarScribe 的优势在于免费、什么都不用装、音频哪儿也不去。

→ **[去 earscribe.app 试试](https://earscribe.app)**

---

## 🌍 支持的输入和语言

### 音频 —— MP3、WAV、M4A、AAC、OGG、FLAC、Opus

Web Audio API 能解码的都收；这七种基本覆盖你遇到的所有录音。

- 🎵 **[MP3 转文字](https://earscribe.app/mp3-to-text)** —— 播客和访谈的标配
- 🎙️ **[WAV 转文字](https://earscribe.app/wav-to-text)** —— 无损的录音棚和现场录音
- 📱 **[M4A 转文字](https://earscribe.app/m4a-to-text)** —— iPhone 语音备忘录
- 🎧 **[语音备忘转文字](https://earscribe.app/voice-memo-to-text)** —— 手机上的录音
- 🔊 **[音频转文字](https://earscribe.app/audio-to-text)** —— 通用入口
- 🎬 **[音频转 SRT](https://earscribe.app/audio-to-srt)** —— 直接出字幕

### 视频 —— MP4、MOV、MKV、WebM、M4V、TS、QT、M2TS

音轨用 [mediabunny](https://mediabunny.dev) 解封装，用 WebCodecs 解码，再重新编码成一个小小的 16 kHz 单声道 MP3（环境里没有 MP3 编码器时用 WAV）——全程在本地。浏览器解不了的容器会给出明确提示，而不是悄悄吐给你一份空文字稿。

### 麦克风

录音在标签页里用 MediaRecorder 完成。录下来的东西跟拖进来的文件完全一样地转录；录制过程中的实时字幕**不**提供（见[它不做什么](#-它不做什么)）。

### 语言 —— 99 种口语，27 种界面

Whisper 自动识别说的是哪种语言：英语、西班牙语、法语、德语、意大利语、葡萄牙语、俄语、日语、韩语、中文（简体和繁体）、阿拉伯语、印地语、土耳其语、荷兰语、波兰语、印尼语、瑞典语、挪威语、丹麦语、芬兰语、捷克语、匈牙利语、希腊语、希伯来语、泰语、越南语，以及 70+ 种其他语言。

界面翻译成了 27 个语言版本。英语在 `/`，其余 26 种带前缀：

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

## 💼 使用场景

### 🎙️ 播客主与创作者

**[播客转文字](https://earscribe.app/podcast-transcription)**，用来写节目笔记、做单集 SEO 和无障碍。视频版导出 SRT，博客版导出 TXT。

### 📰 记者与研究者

**[采访转录](https://earscribe.app/interview-transcription)**，原始录音始终待在你的笔记本上。不存在一份第三方的副本会泄漏、被传票要走或者被审计。

### 🎓 学生与讲师

**[讲座转文字](https://earscribe.app/audio-to-text)**，把录下来的课转成文字，下一节课之前就能检索。iPhone 语音备忘录和 Zoom 导出的文件都能用。

### 📞 会议与用户研究

**[会议录音转文字](https://earscribe.app/meeting-recording-to-text)** —— 给你一通电话的文字稿，不是自动生成的会议纪要。

### 🎬 视频剪辑

**[音频转 SRT](https://earscribe.app/audio-to-srt)**，用于 YouTube、Premiere、Final Cut 和 Resolve。字幕时间点来自 Whisper 自己的时间戳，字幕检查会提前标出画面上放不下的那些。

### 📚 有声书与长录音

两小时的文件是支持的，但这类场景恰恰由设备内存说了算。打算处理四小时的录音之前，先读一读[长音频是怎么处理的](https://earscribe.app/guides/how-to-transcribe-long-audio)。

---

## 🚧 它不做什么

下面这些事它做不到：

- **不做说话人分离。** 一个文件里有两个人，出来的就是一段平铺的文字，没有“说话人 1 / 说话人 2”。采访那个页面是故意这么写的。
- **不翻译。** 文字稿保持原本说的语言；界面语言和口语语言互不相干。
- **不做实时字幕。** 录音和转录是两个步骤——麦克风先录，录完再转录。
- **队列是串行的，而且标签页得开着。** 整批共用一个模型、一个语言设置。关掉标签页它就会停。
- **不跨设备同步。** 项目就住在这个浏览器里。要搬家就用工作台导出。
- **不是离线应用。** 权重是缓存的，但页面本身要从网络加载。把它“安装”只是加了个桌面或主屏快捷方式，不是一份离线副本。
- **单个文件 1 GiB 是硬上限；实际卡住你的是内存。**

---

## ❓ FAQ

<details>
<summary><b>EarScribe 真的免费、真的没有限制吗？</b></summary><br/>
是的 —— 没有付费档位，没有信用卡，没有按分钟收费，没有每日或每月额度，也不需要账号。算力跑在你自己的硬件上，所以没有云账单要转嫁给你。单个文件有 1 GiB 上限，而真正能跑完多少，取决于你设备的内存。
</details>

<details>
<summary><b>我的音频会被上传到什么地方吗？</b></summary><br/>
不会。音频在标签页里解码，然后交给运行在 Web Worker 里的 Whisper 模型。模型权重是从 CDN 下载<i>到</i>你的浏览器的，也就是说 CDN 会看到你的 IP 地址 —— 但录音不会被发出去。公开页面带有 Google AdSense —— 波斯语页面除外，AdSense 的政策把它们排除在外 —— 外加不使用 Cookie 的 Plausible 分析；<code>/dashboard</code> 不加载任何广告代码。
</details>

<details>
<summary><b>视频能直接转录吗？</b></summary><br/>
能，直接来 —— MP4、MOV、MKV、WebM、M4V、TS、QT 和 M2TS。音轨在浏览器内提取，然后像普通文件一样转录，所以你既不需要 ffmpeg，也不需要转换网站。如果某个容器用的编解码器浏览器解不了，应用会直接告诉你，而不是给你一份空的文字稿。
</details>

<details>
<summary><b>为什么第一次运行很慢？</b></summary><br/>
第一次用某个模型时，浏览器要下载它的权重 —— WebAssembly 上的 tiny 是 41 MB，一直到 WebGPU 上的 turbo 是 3.24 GB。之后就走缓存了。几乎所有场景都选 <b>base</b>（WebAssembly 77 MB，WebGPU 291 MB）。
</details>

<details>
<summary><b>准确率怎么样，我该选哪个模型？</b></summary><br/>
在同一段 34 秒的音频上，我们这四个模型在 111 个词里有 26 个不一致，而同一个模型换个下载规格，跟自己也会对不上。按你在意的那几个词来选，别按某个准确率百分比来选：<a href="https://earscribe.app/guides/which-whisper-model-should-i-use">模型指南</a>里摆着实际的差异。
</details>

<details>
<summary><b>能拿到 SRT 或 VTT 字幕吗？</b></summary><br/>
能：导出 → SRT 或 VTT。时间点来自 Whisper 自己的分段边界，不是事后把文本切开的。字幕检查会标出过长、过快、重复、空白和互相重叠的字幕条目，导出前你还能改文字和时间。
</details>

<details>
<summary><b>我手上已经有 SRT 或 VTT 文件怎么办？</b></summary><br/>
不用下载模型就能转：<a href="https://earscribe.app/srt-to-vtt">SRT 转 VTT</a> 和 <a href="https://earscribe.app/srt-to-txt">SRT 转文本</a>都在本地解析文件。不上传任何东西，也不拉取 Whisper 权重。
</details>

<details>
<summary><b>能离线用吗？</b></summary><br/>
转录这一步可以：页面和模型加载好之后，音频的处理不再联系任何转录服务器。但应用本身不是一个离线包 —— 打开它需要网络，你从没下载过的模型得先拉下来。从页脚“安装”只是加了一个直接进工作台的快捷方式，并不会多出一份离线副本。
</details>

<details>
<summary><b>会标注谁在说话吗？</b></summary><br/>
不会。输出是带时间码的平铺文本。说话人分离不在这个版本里，应用也不会假装有。
</details>

<details>
<summary><b>我的结果存在哪里？</b></summary><br/>
在这个浏览器里：项目在 IndexedDB，模型权重在 CacheStorage。除非你主动留着，原始音频不会跟项目一起保存。没有存进工作台的页面，刷新之后就清空了；想留住在意的东西，用 <code>/dashboard</code> 和它的导出。
</details>

<details>
<summary><b>有没有免费的 Otter.ai 或 Rev 替代品？</b></summary><br/>
EarScribe 就是云转录服务的免费替代品：算力你自己出，音频留在原地，没有按分钟计费。代价是实打实的 —— 没有说话人标签，没有团队工作台，长文件还受你这台机器限制。
</details>

<details>
<summary><b>怎么免费把 MP3 转成文字？</b></summary><br/>
把 MP3 拖到 <a href="https://earscribe.app/mp3-to-text">earscribe.app/mp3-to-text</a>（或者首页）。它在你的浏览器里解码、在本地转录，然后可以复制，也可以导出成 SRT、VTT、TXT 或 JSON。
</details>

> 更多答案在**[关于页面](https://earscribe.app/about)**，测量说明在**[指南](https://earscribe.app/guides)**。

---

## 🛠️ 技术栈

- **[Next.js 15](https://nextjs.org)**（App Router）+ **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** —— ONNX Runtime Web，WebGPU 为主，WebAssembly 兜底
- **[OpenAI Whisper](https://github.com/openai/whisper)** —— tiny、base、small 和 large-v3-turbo，ONNX 量化
- **[mediabunny](https://mediabunny.dev)** + **WebCodecs** —— 在标签页里解封装视频、提取音频
- **[next-intl](https://next-intl.dev)** —— 27 个语言版本，每种语言一份消息目录
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Cloudflare Pages](https://pages.cloudflare.com)** 负责托管，外加几个 Pages Functions（模型托管、反馈接口）

站点是静态渲染、在浏览器里 hydrate 的；转录和字幕转换只在客户端跑。模型权重在首次使用时从 Hugging Face CDN 拉取，缓存在 CacheStorage。

---

## 🧑‍💻 本地开发

```bash
git clone https://github.com/rocnubie/earscribe-free-speech-to-text.git
cd earscribe-free-speech-to-text
pnpm install
pnpm dev
# → http://localhost:3000
```

部署前会跑这些检查：

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

`pnpm build` 会在 `out/` 里产出一份静态导出。有好几个审计脚本要读 `out/`，所以先跑构建。

---

## ☁️ 部署

生产部署只有一条命令，它会按顺序跑完所有审计：

```bash
pnpm pages:deploy
```

它先把本地的部署标记（`lib/release.ts` 里的 `deployId`）和线上 `/changelog` 提供的那个做比对，如果一致就拒绝继续 —— 过期的构建就是这么被拦下来的。然后它构建，跑链接、指南、`llms.txt`、i18n、站点地图和 PWA 审计，最后把 `out/` 发布到 Cloudflare Pages。

`/changelog` 是给读者看的变更清单，每一条都能让人据此做点什么。它不是构建日志：内部重构、文案修正和翻译工作会拿到新的 `deployId`，但不会在更新日志里占一行。

环境变量和绑定：

| 名称 | 用途 |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | 规范 URL、站点地图、OG 标签 |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible 站点标识符 |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | Plausible 脚本地址 |
| `FEEDBACK_DB`（D1 binding） | `/feedback` 接口；表结构在 `migrations/` |

---

## 🌐 新增一门语言

1. 把语言代码追加到 [`i18n/locale.ts`](i18n/locale.ts) 的 `ALL_LOCALE_NAMES` 里。
2. 在 `en.json` 旁边加上 `messages/<code>.json`，完整翻译。
3. 跑一下 `pnpm i18n:gate` —— 路由、站点地图、hreflang 和 OG 元数据会自动认出新语言，但少一个键就过不了这道门。

只有通过检查的语言才该进 `translatedLocales`；其余的，语言切换器会标成部分翻译。

---

## 🔬 新增一个 Whisper 模型

在 [`lib/models.ts`](lib/models.ts) 的 `MODELS` 里追加一条，`wasm` 和 `webgpu` 都要填**实测的** `sizeMB` —— 两个后端发的是不同的权重文件，给两者写同一个数字，正是这个应用当年承诺 500 MB、实际交付 968 MB 的原因。模型仓库得以 `onnx-community/<name>` 的形式存在于 Hugging Face，或者兼容 ONNX-Whisper。再给每个 `messages/*.json` 加上对应的 `models.<id>` 块，用来放优缺点的文案。

---

## 🤝 参与贡献

欢迎 PR，尤其欢迎这些：

- 翻译（`messages/<code>.json`），以及针对具体语言版本的 README 修正
- 带上出错文件、浏览器和设备内存的 bug 报告
- 测量数据：在没有的硬件上跑出的模型体积、耗时和峰值内存
- 无障碍方面的修复

在这里开 issue 或提 PR；也可以先去 **[earscribe.app](https://earscribe.app)** 看看你到底在为什么贡献。

---

## 📄 许可证

本仓库里的营销站点和页面采用 [MIT](LICENSE)：个人和商业用途都免费。转录 worker、音频解码器和字幕导出器没有在这里公开，所以这个仓库并不是该服务一份完整的、可自托管的副本。

---

<p align="center">
  <b>👉 试试线上版本：<a href="https://earscribe.app">earscribe.app</a></b><br/>
  <sub>音频转文字 · 视频转文字 · 语音转文字 · 字幕导出 · 100% 免费 · 无需注册 · 本地运行</sub>
</p>

<p align="center">
  用 ❤️ 构建，基于 <a href="https://github.com/openai/whisper">OpenAI Whisper</a>、<a href="https://huggingface.co/docs/transformers.js">Transformers.js</a>、<a href="https://onnxruntime.ai">ONNX Runtime Web</a> 和 <a href="https://mediabunny.dev">mediabunny</a>。
</p>
