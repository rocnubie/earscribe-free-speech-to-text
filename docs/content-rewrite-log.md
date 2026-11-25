# 内容重写台账

一句话：**每重写一页，就在这里加一行**；没有行的页面就是没重写过的页面。

数字不是手填的，跑一次即可刷新：

```bash
node scripts/seo/content-audit.mjs --json artifacts/seo/content-audit.json
```

**发布时会被拦**：`pnpm pages:deploy` 里的 `sitemap-audit` 会比对 `lib/sitemap-manifest.json`
里的正文哈希与 `lib/content-ledger.lock.json` 里的台账指纹——**正文变了但本文件没变，就直接失败**。
处理方式：在下面表里改对应行 → `node scripts/sitemap-audit.mjs --update`。
与重写无关的改动（改错字、调整版式）用 `--skip-ledger` 跳过。

判据（与 `pack-check` / `keyword` 门禁同一套）：

| 列 | 含义 |
|---|---|
| 词 | `<main>` 正文字数（CJK 按字符 ÷ 2 折算，否则中文会被算成几十个词） |
| 数字/千词 | 带单位数字的密度。**≥ 20 才算有证据**，≥ 50 是长文目标；测不出数据的页面天然低，不代表差 |
| H2 主词 | 是否有正文 H2 含主关键词（`keyword.mjs` 里的 error 级规则） |
| 契约 | `content/{tool-,}packs/*.yaml` 是否存在。**没有契约 = 没有门禁** |
| 状态 | ✅ 新标准 · ✅ 短页（转换器类，密度门槛 10） · 🔧 已重写但缺一项 · ⬜ 旧版 |

短页是给「粘贴一个文件、拿另一个文件」的转换器页（srt-to-vtt / srt-to-txt）的：它们的主体是语法，不是测量，
硬凑到 20 只会变填充。门槛 10 写在 `content-audit.mjs` 的 `DENSITY_FLOOR` 里，不是随手放过。

---

## 1. 英文工具页（13）

| 页面 | 主词 | 上次重写 | 发布标记 | 词 | 数字/千词 | H2 主词 | 契约 | 状态 |
|---|---|---|---|---|---|---|---|---|
| `/mp3-to-text` | mp3 to text | 2026-11-24 | `2026-11-24-headings-and-interview` | 1,394 | 47 | ✓ | ✓ | ✅ |
| `/audio-to-text` | audio to text | 2026-11-24 | `2026-11-24-headings-and-interview` | 1,337 | 51 | ✓ | ✓ | ✅ |
| `/interview-transcription` | interview transcription | 2026-11-24 | `2026-11-24-headings-and-interview` | 1,218 | 20 | ✓ | ✓ | ✅ |
| `/meeting-recording-to-text` | meeting recording to text | 2026-11-24 | `2026-11-24-fact-fixes` | 1,247 | 22 | ✓ | ✓ | ✅ |
| `/podcast-transcription` | podcast transcription | 2026-11-24 | `2026-11-24-headings-and-interview` | 1,044 | 43 | ✓ | ✓ | ✅ |
| `/whisper-online` | whisper online | 2026-11-18 | `2026-11-18-whisper-online`（旧批次） | 1,233 | 40 | ✓ | ✓ | ✅ 数字够，H2 骨架旧 |
| `/wav-to-text` | wav to text | 2026-11-24 | `2026-11-24-wav-and-m4a` | 1,093 | 54 | ✓ | ✓ | ✅ |
| `/audio-to-srt` | audio to srt | 2026-11-24 | `2026-11-24-final-three` | 893 | 28 | ✓ | ✓ | ✅ |
| `/transcribe-audio-locally` | transcribe audio locally | 2026-11-24 | `2026-11-24-fact-fixes` | 1,228 | 20 | ✓ | ✓ | ✅ |
| `/srt-to-vtt` | srt to vtt | 2026-11-24 | `2026-11-24-subtitle-roundtrip` | 1,072 | 11 | ✓ | ✓ | ✅ 短页 |
| `/m4a-to-text` | m4a to text | 2026-11-24 | `2026-11-24-wav-and-m4a` | 1,129 | 27 | ✓ | ✓ | ✅ |
| `/voice-memo-to-text` | voice memo to text | 2026-11-24 | `2026-11-24-final-three` | 1,100 | 16 | ✓ | ✓ | ✅ |
| `/srt-to-txt` | srt to txt | 2026-11-24 | `2026-11-24-subtitle-roundtrip` | 862 | 16 | ✓ | ✓ | ✅ 短页 |

`/lecture-transcription` 已于 2026-11-24 合并进 `/meeting-recording-to-text`（301，见第 4 节）。

## 2. 英文指南（7）

| 页面 | 上次重写 | 发布标记 | 词 | 数字/千词 | 契约 | 状态 |
|---|---|---|---|---|---|---|
| `/guides/how-to-transcribe-an-mp3-file` | 2026-11-19（v2）；2026-11-24 改了两段开场 | `2026-11-19-mp3-walkthrough-v2` | 2,162 | 65 | ✓ | ✅ |
| `/guides/how-to-make-whisper-faster` | 2026-11-24（改 H2 带主词） | `2026-11-24-guide-headings` | 1,803 | 52 | ✗ | ✅ 数据够，无契约 |
| `/guides/how-to-transcribe-long-audio` | 2026-11-24（改 H2 带主词） | `2026-11-24-guide-headings` | 1,579 | 58 | ✗ | ✅ 数据够，无契约 |
| `/guides/how-long-should-a-subtitle-line-be` | 2026-11-24（改 H2 带主词） | `2026-11-24-guide-headings` | 1,349 | 47 | ✗ | ✅ 数据够，无契约 |
| `/guides/which-whisper-model-should-i-use` | 2026-11-24（改 H2 带主词） | `2026-11-24-guide-headings` | 1,491 | 38 | ✗ | ✅ 无契约 |
| `/guides/how-to-stop-whisper-hallucinations` | 2026-11-24（改 H2 + 三处补主词） | `2026-11-24-gate-tightening` | 1,955 | **8** | ✗ | 🔧 密度不足 + 无契约 |
| `/guides`（索引页） | 2026-11-17 | `guides-index-cards-b` | 525 | 82 | ✗ | ✅ |

> 指南的「H2 主词」列没有单列：`content-audit` 对没有契约的指南用 slug 猜主词，结果不可信。
> 补契约之后这一列才有意义——这也是下面待办里「给 5 篇指南补契约」的原因。

## 3. 多语言（26 页，2026-11-25 完成）

zh-CN 13 + ja 13 于 2026-11-25 按「本地化重写」完成：以英文结构为骨架，补齐了英文有而译文没有的
实测表格（26 页共补 30+ 张）、代码块与图；H1 与 H2 改用本地搜索名词；删掉只在英语里成立的直译句
（`free does not mean weightless`、`flat text`、`where it loses`）。

结果：**39 页全部达标**（en 13 + zh 13 + ja 13），per1k ≥ 20（转换器页 ≥ 10），H2 含主词 39/39。

| 语言 | 工具页 | 达标 | 状态 | 发布标记 |
|---|---|---|---|---|
| zh-CN | 13 | 13/13 | ✅ 2026-11-25 本地化重写 | `2026-11-25-tool-pages-localized` |
| ja | 13 | 13/13 | ✅ 同上 | 同上 |
| 其余 20 个语言 | 各 2–3 页（首页/about/privacy） | ⬜ 不在本轮范围 | — |

**同一天修了两处度量口径**（不修的话中文、日文页面永远显示不达标，与内容无关）：

- `scripts/seo/lib/html.mjs` 的 `countQuantities` 只认英文单位，`923 字节`、`48 行`、`73 本`、`42 文字`、`20 CPS` 全部不计入密度；
- `scripts/seo/content-audit.mjs` 的关键词匹配先 `normaliseText` 再比较，`WAV 转文字` 里的排版空格让它匹配不上关键词 `wav转文字`。

修完 36 页从「不达标」转为「达标」，**没有一页变差**（en 13/13 保持不变）。


## 4. 结构性改动（不属于页面重写，但影响台账）

| 日期 | 改动 | 发布标记 |
|---|---|---|
| 2026-11-23 | `/changelog` 26 条死 hreflang 清除 | `2026-11-23-hreflang-dead-links` |
| 2026-11-24 | 关键词落位进门禁（标题/H1/H2 含主词；密度 >4% 才告警） | `2026-11-24-keyword-placement` |
| 2026-11-24 | 密度下限校准到 0.15%/千词，三页补到 0.5%+ | `2026-11-24-keyword-density-4` |
| 2026-11-24 | `/lecture-transcription` → `/meeting-recording-to-text`（301，三语言） | `2026-11-24-merge-lecture` |
| 2026-11-24 | 全站审查脚本 `scripts/seo/content-audit.mjs` | `2026-11-24-content-audit` |
| 2026-11-24 | 5 个新页共用的两个 H2 拆开（模板痕迹 45–55% → 0–11%） | `2026-11-24-headings-and-interview` |
| 2026-11-24 | interview 补到 20/千词（新增「两个后端的分歧对比」表 + 130 秒核算） | 同上 |
| 2026-11-24 | 台账漂移门禁：正文变了台账没动就拦发布 | 同上 |
| 2026-11-25 | **可爬链接**：页脚加 27 个语言首页 `<a>`，83 个孤岛全部接回主图（新增 `reachability-audit` 进门禁，109/109 可达） | `2026-11-25-crawl-path` |
| 2026-11-25 | **lastmod 逐语言**：`TOOL_UPDATED` 改为按 slug+locale，24 个本地化页的假日期（11-24）回到真实 09-12 | 同上 |
| 2026-11-25 | 5 个工具页标题改为点击型（免费/不上传/浏览器内），保留主词 | 同上 |
| 2026-11-24 | 删掉 13 条装饰性 `exceptions`（它们豁免的规则不作用于工具页）；`content-audit` 接进 `seo:check`（`--summary`） | `2026-11-24-gate-tightening` |
| 2026-11-24 | **9 处数字修正**（四组交叉审查发现）：interview 130→55 秒、mp3 42→40 分钟与 93→94 词、meeting 五分之一→六分之一、srt-to-vtt 与 audio-to-srt 五个→四个 1 秒 cue、voice-memo 18→19.3 小时、wav 同错、transcribe 四个 host→五个/三条→两条 | `2026-11-24-fact-fixes` |
| 2026-11-25 | `/changelog` 两条新记录：Auto 语言检测真正传进引擎、中文按界面语言出简/繁 | `2026-11-25-chinese-script` |
| 2026-11-25 | `/changelog` 一条新记录：被墙地区改走可到达的模型源（镜像优先，自家桶兜底） | `2026-11-25-model-mirror` |
| 2026-11-24 | 密度门槛**改回 20**（15 是当天为过线而降的，撤销） | 同上 |
| 2026-11-24 | 4 篇指南各改一个 H2，让主词进入标题；`scripts/seo/pack-scaffold.mjs`（从构建产物生成契约的机械半部） | `2026-11-24-guide-headings` |
| 2026-11-24 | 真实请求实测 `page-requests.json` + `scripts/bench/page-requests.mjs`（无头 Chrome 记录 58 个请求 / 9 个 host） | `2026-11-24-final-three` |
| 2026-11-24 | 字幕往返实测 `subtitle-roundtrip.json` + `scripts/bench/subtitle-roundtrip.mjs`（用 lib/subtitles.ts 自己导出再解析） | `2026-11-24-subtitle-roundtrip` |
| 2026-11-24 | 两份实测数据 + 生成脚本：`wav-ceiling.json`（1 GB 上限换算）、`container-formats.json`（五种编码的体积与漂移） | `2026-11-24-wav-and-m4a` |

## 5. 队列（按 ROI，不按页面顺序）

| 档 | 做什么 | 成本 | 为什么现在 |
|---|---|---|---|
| A | 拆开 5 个新页共用的两个 H2（模板痕迹 45–55%）；interview 补到 30+/千词 | 半天 | 自己刚犯的错，改起来最便宜 |
| B | 6 个格式页改成「短页精确回答」（300–400 词，一页一个问题 + 一个数字块 + 内链上收） | 3 天 | 长尾该有的形态；不追厚 |
| C | 给 5 篇指南补契约（现在无 pack = 无门禁） | 半天 | 否则它们永远不在门禁里 |
| D | `transcribe-audio-locally`（Network 面板可实证）、`audio-to-srt`（字幕规则）按新标准重写 | 1 天 | 这两页有现成证据 |
| E | 多语言本地化重写 | 视 en 定稿进度 | 排在最后 |

**不要做的**：先把 34 页全重写一遍。6 份实测数据已经用尽，没有新数据时「重写」只会变成换措辞。
