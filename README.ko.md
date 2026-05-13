<p align="center">
  <b>🌐 Language / 语言 / Idioma:</b><br/>
  <a href="README.md">English</a> · <a href="README.zh-CN.md">中文</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português</a> · <a href="README.ja.md">日本語</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.ru.md">Русский</a> · <a href="README.ko.md">한국어</a>
</p>

<h1 align="center">EarScribe — 무료 오디오 텍스트 변환 & 무료 음성 인식 도구</h1>

<p align="center">
  <b>브라우저에서 오디오와 동영상을 텍스트로 변환하세요. 100% 무료, 회원가입 없음, 업로드 없음. 무제한.</b><br/>
  <sub>WebGPU / WebAssembly 위에서 실행되는 OpenAI Whisper 구동 — 오디오가 기기를 벗어나지 않아요.</sub>
</p>

<p align="center">
  <a href="https://earscribe.app/ko"><img alt="라이브 데모" src="https://img.shields.io/badge/Live-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app/ko"><img alt="무료" src="https://img.shields.io/badge/100%25-무료-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app/ko"><img alt="회원가입 없음" src="https://img.shields.io/badge/회원가입-없음-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app/ko"><img alt="완전 비공개" src="https://img.shields.io/badge/기기에서-처리-0f172a?style=for-the-badge"></a>
  <img alt="MIT 라이선스" src="https://img.shields.io/badge/License-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app/ko"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe 무료 오디오 텍스트 변환 — MP3, WAV, M4A 드래그 앤 드롭으로 브라우저에서 무료 음성 인식, 회원가입 없이 OpenAI Whisper 실행"></a>
</p>

<p align="center">
  <b>🔗 지금 사용해보기:</b>
  <a href="https://earscribe.app/ko">earscribe.app/ko (한국어)</a> ·
  <a href="https://earscribe.app">earscribe.app (English)</a> ·
  <a href="https://earscribe.app/about">소개 페이지</a>
</p>

---

## EarScribe란 무엇인가요?

**[EarScribe](https://earscribe.app/ko)**는 웹 브라우저에서 완전하게 동작하는 **무료 음성 텍스트 변환** 및 **무료 음성 인식** 도구예요. MP3, WAV, M4A, OGG, FLAC, WebM 등 어떤 오디오 파일이든, 또는 동영상의 오디오 트랙이든 끌어다 놓으면 타임스탬프가 포함된 전사본과 **SRT / VTT 자막**을 바로 내보낼 수 있어요. 업로드도, 로그인도, API 키도, 분당 요금도 없어요.

**오디오 동영상 텍스트 변환**을 위한 가장 간단한 방법:

- 드래그 앤 드롭으로 오디오 파일 추가
- **OpenAI Whisper**가 로컬에서 전사 처리
- 타임스탬프 포함 전사본, 동기화된 파형, **SRT / VTT 자막** 생성
- 오디오가 기기를 벗어나지 않음 — 완전한 **개인정보 보호**, 첫 모델 다운로드 후 오프라인 사용 가능

> **라이브 앱:** **[earscribe.app/ko](https://earscribe.app/ko)**

---

## 목차

- [주요 기능](#주요-기능)
- [스크린샷](#스크린샷)
- [빠른 시작 (30초 안에 전사)](#빠른-시작-30초-안에-전사)
- [무료 오디오 텍스트 변환 비교](#무료-오디오-텍스트-변환-비교)
- [모델 선택 가이드 — Whisper 모델 비교](#모델-선택-가이드--whisper-모델-비교)
- [지원 형식 및 99개 언어](#지원-형식-및-99개-언어)
- [활용 사례](#활용-사례)
- [자주 묻는 질문](#자주-묻는-질문)
- [기술 스택](#기술-스택)
- [로컬 개발 환경 설정](#로컬-개발-환경-설정)
- [라이선스](#라이선스)

---

## 주요 기능

EarScribe는 팟캐스터, 기자, 학생, 그리고 민감한 녹음 파일을 클라우드에 올리지 않고 **음성 전사 무료**로 처리하고 싶은 누구에게나 적합한 완전한 온라인 전사 작업 공간이에요.

| | 기능 | 설명 |
|---|---|---|
| 🆓 | **100% 무료 무제한** | 유료 플랜 없음, 일일 쿼터 없음, 분당 요금 없음. 진정한 **무료 음성 텍스트 변환**. |
| 🚫 | **회원가입 없이, 로그인 없이** | 이메일, 계정, 신용카드 불필요. [earscribe.app/ko](https://earscribe.app/ko)를 열고 파일을 드롭하면 끝. |
| 🔒 | **개인정보 보호 설계** | 오디오가 기기를 벗어나지 않아요. 파일을 처리하는 서버 엔드포인트가 존재하지 않아요. **업로드 없음**. |
| 🌐 | **브라우저 네이티브 AI** | **OpenAI Whisper**가 WebGPU(GPU 가속) 또는 WebAssembly 폴백으로 **브라우저에서 실행**돼요. |
| 🎬 | **자막 생성 무료** | 원클릭 **SRT 자막 / VTT 자막** 내보내기 — Premiere, Final Cut, DaVinci Resolve, YouTube에 바로 사용 가능. |
| 📜 | **타임스탬프 전사본** | 어느 줄이든 클릭하면 해당 시점 오디오로 이동해요. 내장 파형 스크러버 제공. |
| 🗣️ | **99개 언어 지원** | Whisper가 음성 언어를 자동 감지 — 수동 설정 불필요. |
| ⚡ | **첫 실행 후 오프라인 사용** | 모델이 브라우저에 캐시돼요. 이후 전사는 인터넷 없이도 동작해요. |
| 🎚️ | **4가지 Whisper 모델** | Tiny(40 MB) → Base → Small → **Large v3 Turbo** (스튜디오급 정확도). |
| 📦 | **다양한 내보내기 형식** | `.txt` · `.srt` · `.vtt` · `.json` (원시 데이터 + 타이밍 포함) |
| 🌍 | **10개 UI 언어** | EN · ES · DE · FR · PT-BR · RU · JA · **KO** · HI · AR |
| 🪶 | **광고 없음, 트래킹 없음** | Plausible 분석만 사용 — 세션 리플레이, 쿠키, 핑거프린팅 없음. |

---

## 스크린샷

> **[earscribe.app](https://earscribe.app)** 라이브 사이트의 실제 스크린샷 — 2026년 촬영.

### 1. 오디오 파일 드롭 — 100% 무료, 회원가입 없이, 로그인 없이

<p align="center">
  <a href="https://earscribe.app/ko"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="무료 오디오 텍스트 변환 — 브라우저에서 MP3, WAV, M4A, OGG, FLAC, WebM 드래그 앤 드롭. 회원가입 없이, 로그인 없이, 무료 무제한 음성 텍스트 변환."></a>
</p>

### 2. 파형과 함께 제공되는 타임스탬프 전사본 — 줄 클릭으로 해당 시점 이동

<p align="center">
  <a href="https://earscribe.app/ko"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="EarScribe 전사 결과물 — 파형 스크러버와 원클릭 SRT 및 VTT 자막 생성 무료 내보내기를 포함한 타임스탬프 오디오 텍스트 변환"></a>
</p>

### 3. 3단계: 드롭 → Whisper 모델 선택 → 내보내기

<p align="center">
  <a href="https://earscribe.app/ko"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="EarScribe 무료 오디오 텍스트 변환 작동 방식 — 오디오 드롭, OpenAI Whisper 모델 선택(Tiny, Base, Small, Large v3 Turbo), 전사본 확인 및 내보내기"></a>
</p>

### 4. EarScribe 선택 이유 — 개인정보 우선, 브라우저 네이티브 Whisper

<p align="center">
  <a href="https://earscribe.app/ko"><img src="https://earscribe.app/screenshots/04-features.webp" alt="EarScribe 기능 — 업로드 없는 개인정보 보호, WebGPU + WASM, 99개 언어 자동 감지, SRT VTT JSON TXT 내보내기, 오프라인 동작, 100% 무료 API 키 불필요"></a>
</p>

### 5. EarScribe 활용 사례 — 팟캐스터, 기자, 학생, 영상 편집자

<p align="center">
  <a href="https://earscribe.app/ko"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="EarScribe 활용 사례 — 팟캐스트 받아쓰기, 기자 인터뷰 전사, 학생 강의 텍스트 변환, 사용자 리서치 회의 전사, 동영상 자막 생성 SRT, 오디오북 전사 무료"></a>
</p>

### 6. EarScribe vs Otter.ai, Rev, Whisper API — 비교표

<p align="center">
  <a href="https://earscribe.app/ko"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="EarScribe vs Otter.ai vs Rev vs Whisper API 비교 — 분당 요금 없는 무료 무제한 오디오 텍스트 변환 대안, 기기 내 처리로 개인정보 보호"></a>
</p>

### 7. 무료 음성 텍스트 변환 — 자주 묻는 질문

<p align="center">
  <a href="https://earscribe.app/ko"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="무료 음성 인식 자주 묻는 질문 — 개인정보 보호, MP3 텍스트 변환, SRT 및 VTT 자막 생성, 지원 언어, 오프라인 사용, 브라우저에서 OpenAI Whisper 실행에 관한 답변"></a>
</p>

---

## 빠른 시작 (30초 안에 전사)

웹에서 가장 빠른 **무료 음성 텍스트 변환** 흐름:

**1단계 — 앱 열기**

[earscribe.app/ko](https://earscribe.app/ko)를 Chrome, Edge, Safari, Firefox 등 최신 브라우저에서 열어요.

**2단계 — 파일 드롭**

오디오 파일을 페이지에 끌어다 놓아요. MP3, WAV, M4A, OGG, FLAC, WebM — 파일당 약 2시간 분량까지 지원해요. **계정 없이** 바로 시작할 수 있어요.

**3단계 — 모델 선택 후 전사 시작**

Whisper 모델을 선택해요. 대부분의 경우 **Base**를 추천하고, WebGPU가 있으면 **Turbo**로 스튜디오급 정확도를 얻을 수 있어요. **전사 시작** 버튼을 클릭하면 오디오가 브라우저 탭 안에서 디코딩되고 Whisper를 통해 처리돼요.

전사본을 읽고, 줄을 클릭해 해당 시점 오디오를 재생하거나, **내보내기 → .srt / .vtt / .txt / .json** 으로 저장해요.

업로드 없음. 계정 없음. 쿼터 없음. 데이터를 존중하는 **무료 오디오 텍스트 변환**.

> **팁:** **동영상 텍스트 변환**이 필요하다면 먼저 오디오를 추출하세요 (ffmpeg, Audacity, VLC 등 무료 도구로 MP3 / WAV 내보내기) 그 파일을 EarScribe에 드롭하면 돼요.

---

## 무료 오디오 텍스트 변환 비교

2026년 기준으로 EarScribe는 다른 **음성 전사 무료** 도구들과 어떻게 비교될까요?

| | **EarScribe** | Otter.ai 무료 | Rev 무료 체험 | HappyScribe | 로컬 Whisper CLI |
|---|:---:|:---:|:---:|:---:|:---:|
| **무료 무제한** | ✅ | ⚠️ 월 300분 | ❌ 체험판만 | ❌ 유료 | ✅ |
| **회원가입 없이 / 로그인 없이** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **업로드 없음 (개인정보 보호)** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **브라우저에서 실행** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **SRT 자막 / VTT 자막 내보내기** | ✅ | ⚠️ 유료 | ✅ | ✅ | ⚠️ 수동 |
| **타임스탬프 전사본** | ✅ | ✅ | ✅ | ✅ | ⚠️ 수동 |
| **오프라인 동작** | ✅ (첫 로드 후) | ❌ | ❌ | ❌ | ✅ |
| **99개 언어** | ✅ | ⚠️ 제한적 | ⚠️ 제한적 | ✅ | ✅ |
| **OpenAI Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **설치 필요** | ❌ 없음 | ❌ 없음 | ❌ 없음 | ❌ 없음 | ⚠️ Python + GPU |
| **비용** | $0 | $0–$30/월 | $0.25/분 | €0.20/분 | $0 (본인 하드웨어) |

**결론:** EarScribe는 *진정한 무료, 무제한, 회원가입 없이, 업로드 없음, 브라우저 네이티브, 자막 즉시 생성* 이 모든 조건을 하나의 클릭으로 충족하는 유일한 도구예요. EarScribe는 **Otter.ai 무료 대안**이자 **Rev 무료 대안**으로서 개인정보 보호를 타협하지 않아요. → **[earscribe.app/ko에서 바로 사용해보기](https://earscribe.app/ko)**

---

## 모델 선택 가이드 — Whisper 모델 비교

EarScribe는 4가지 **OpenAI Whisper** 모델 크기를 제공해요. 모두 로컬에서 실행되고, 첫 다운로드는 브라우저에 영구 캐시돼요.

| 모델 | 크기 | 정확도 | 속도 | RAM | 적합한 용도 |
|---|---:|:---:|:---:|---:|---|
| **Whisper Tiny** | ~80 MB | ⭐ | ⚡⚡⚡⚡ | 1 GB | 빠른 메모 음성, 저사양 기기 |
| **Whisper Base** *(권장)* | ~200 MB | ⭐⭐ | ⚡⚡⚡ | 2 GB | 일상적인 팟캐스트 받아쓰기, 강의 텍스트 변환 |
| **Whisper Small** | ~500 MB | ⭐⭐⭐ | ⚡⚡ | 4 GB | 억양이 강한 발화, 잡음이 많은 오디오 |
| **Whisper Large v3 Turbo** | ~800 MB | ⭐⭐⭐⭐ | ⚡⚡⚡ (WebGPU) | 6 GB | 스튜디오급 전사, 다중 화자, 음악+발화 |

> 모델은 **첫 실행 후 캐시**돼요 — 다음 전사는 바로 시작돼요. 자세한 내용은 **[earscribe.app/ko](https://earscribe.app/ko)**에서 확인하세요.

---

## 지원 형식 및 99개 언어

### 오디오 형식 — MP3, WAV, M4A, OGG, FLAC, WebM

EarScribe는 Web Audio API가 디코딩할 수 있는 모든 오디오 형식을 지원해요:

- **[MP3 텍스트 변환](https://earscribe.app/ko)** — 가장 일반적인 팟캐스트 형식
- **[WAV 텍스트 변환](https://earscribe.app/ko)** — 무손실 스튜디오 녹음
- **[M4A 텍스트 변환](https://earscribe.app/ko)** — Apple 음성 메모, iPhone 녹음
- **OGG 텍스트 변환** — 오픈소스 형식
- **FLAC 텍스트 변환** — 고음질 아카이브
- **WebM 텍스트 변환** — 브라우저 녹화 오디오/동영상

**동영상 텍스트 변환** (MP4, MOV, MKV)의 경우, 먼저 Audacity, VLC, ffmpeg 같은 무료 도구로 오디오를 추출한 뒤 **[earscribe.app/ko](https://earscribe.app/ko)**에 드롭하면 돼요.

### 지원 언어 — 99개

Whisper가 음성 언어를 자동 감지해요. EarScribe는 영어, 한국어, 스페인어, 프랑스어, 독일어, 이탈리아어, 포르투갈어, 러시아어, 일본어, 중국어(간체 및 번체), 아랍어, 힌디어, 터키어, 네덜란드어, 폴란드어, 인도네시아어, 스웨덴어, 노르웨이어, 덴마크어, 핀란드어, 체코어, 헝가리어, 그리스어, 히브리어, 태국어, 베트남어 외 70개 이상을 지원해요.

UI는 다음 언어로 이용할 수 있어요:

| 언어 | 링크 |
|---|---|
| 영어 | [earscribe.app](https://earscribe.app) |
| 스페인어 | [earscribe.app/es](https://earscribe.app/es) |
| 독일어 | [earscribe.app/de](https://earscribe.app/de) |
| 프랑스어 | [earscribe.app/fr](https://earscribe.app/fr) |
| 포르투갈어 | [earscribe.app/pt-br](https://earscribe.app/pt-br) |
| 러시아어 | [earscribe.app/ru](https://earscribe.app/ru) |
| 일본어 | [earscribe.app/ja](https://earscribe.app/ja) |
| **한국어** | [earscribe.app/ko](https://earscribe.app/ko) |
| 힌디어 | [earscribe.app/hi](https://earscribe.app/hi) |
| 아랍어 | [earscribe.app/ar](https://earscribe.app/ar) |

---

## 활용 사례

EarScribe는 범용 **무료 음성 전사** 도구예요. 주요 활용 방법을 소개해요.

### 팟캐스터 & 콘텐츠 크리에이터

**팟캐스트 받아쓰기 무료** — 쇼 노트, 에피소드 SEO, 접근성을 위한 전사. **MP3 텍스트 변환**을 몇 분 만에 처리하고 동영상 버전용 `.srt`를 내보낼 수 있어요. → [earscribe.app/ko에서 시작하기](https://earscribe.app/ko)

### 기자 & 연구자

**취재원 인터뷰가 노트북에 머물러요.** 서버에 업로드하지 않으니 법원 영장, 감사 로그, 유출 위험이 없어요. 웹에서 가장 강력한 개인정보 보호 보장 중 하나로 **인터뷰 전사 무료** 처리가 가능해요.

### 학생 & 교육자

**강의 텍스트 변환 무료** — 녹화된 수업을 드롭하면 다음 수업 전에 검색 가능한 전사본을 얻을 수 있어요. iPhone 음성 메모(`.m4a`)와 Zoom 녹화본에도 동작해요.

### 회의 전사 & 사용자 리서치

**사용자 인터뷰 오디오 텍스트 변환** — 민감한 고객 오디오를 서드파티 SaaS에 전송하지 않고 태그가 달린 전사본을 만들 수 있어요. **회의 전사** 용도로도 완벽해요.

### 동영상 편집자 — 자막 & 캡션

**오디오에서 자막 생성 무료** — YouTube, Premiere Pro, Final Cut Pro, DaVinci Resolve용 **SRT 자막** 생성. 큐 타이밍은 Whisper의 타임스탬프에서 나오므로 자막이 완벽하게 정렬돼요.

### 오디오북 & 장시간 음성

2시간짜리 MP3도 문제없어요. **Whisper Large v3 Turbo**는 분당 요금과 API 쿼터 없이 오디오북 길이의 오디오를 처리해요.

---

## 자주 묻는 질문

<details>
<summary><b>EarScribe는 정말로 100% 무료이고 제한이 없나요?</b></summary><br/>
네 — 100% 무료, 무제한, 회원가입 없이, 로그인 없이 사용할 수 있어요. 유료 플랜, 신용카드, 분당 요금, 일별/월별 쿼터가 전혀 없어요. Whisper 음성 인식 모델이 본인 하드웨어에서 동작하기 때문에 전달할 클라우드 컴퓨팅 비용이 없어요. 조건 없는 무료 <a href="https://earscribe.app/ko">오디오 텍스트 변환</a>이에요.
</details>

<details>
<summary><b>제 오디오는 개인정보 보호가 되나요?</b></summary><br/>
완전히 보호돼요. EarScribe는 로컬 우선 <b>오디오 텍스트 변환기</b>예요: 오디오 파일이 기기를 벗어나지 않고 어느 서버에도 업로드되지 않아요. 계정이 없으므로 수집되는 데이터도 없어요. 모델이 다운로드된 후에는 오프라인에서도 사용할 수 있어요.
</details>

<details>
<summary><b>오디오가 어딘가에 업로드되나요?</b></summary><br/>
아니요. <b>무료 음성 텍스트 변환</b>은 완전히 로컬에서 이루어져요 — 오디오가 기기에서 디코딩되고 Web Worker에서 실행되는 Whisper 모델에 전달돼요. 서버로 전송되는 것은 없어요. <b>업로드 없음</b>이 핵심이에요.
</details>

<details>
<summary><b>처음 실행이 왜 느린가요?</b></summary><br/>
<b>오디오 텍스트 변환</b>을 위해 처음으로 모델을 선택하면 브라우저가 해당 모델을 다운로드해요 (크기에 따라 80 MB에서 800 MB). 이후에는 무료 <b>오디오 텍스트 변환</b> 모델이 캐시되어 재사용돼요 — 재다운로드가 필요 없어요.
</details>

<details>
<summary><b>어떤 언어를 지원하나요?</b></summary><br/>
<b>무료 음성 인식</b>이 Whisper를 통해 99개 언어를 지원해요. 언어가 자동으로 감지되므로 직접 선택할 필요가 없어요. 한국어도 물론 포함돼요.
</details>

<details>
<summary><b>동영상을 직접 전사할 수 있나요?</b></summary><br/>
직접은 불가능해요. <b>동영상 텍스트 변환</b>의 경우, 먼저 오디오를 추출하세요 (MP3 또는 WAV를 출력할 수 있는 도구면 모두 가능) 그 파일을 <a href="https://earscribe.app/ko">earscribe.app/ko</a>에 드롭하면 돼요.
</details>

<details>
<summary><b>오프라인에서도 작동하나요?</b></summary><br/>
모델을 한 번 다운로드하고 나면 작동해요 — <b>무료 음성 텍스트 변환</b>이 오프라인에서 가능해요. 페이지 자체는 처음에 로드되어야 하지만 이후 실행은 인터넷 없이도 가능해요.
</details>

<details>
<summary><b>MP3 텍스트 변환을 무료로 어떻게 하나요?</b></summary><br/>
MP3 파일을 <a href="https://earscribe.app/ko">EarScribe</a>에 드롭하면 무료 <b>MP3 텍스트 변환</b>이 돼요. 파일이 브라우저에서 디코딩되고, Whisper가 로컬에서 전사하고, 출력을 복사하거나 SRT, VTT, TXT, JSON으로 내보낼 수 있어요. 업로드 단계도, 계정도 불필요해요.
</details>

<details>
<summary><b>Otter.ai나 Rev의 무료 대안이 있나요?</b></summary><br/>
EarScribe는 Otter.ai, Rev, HappyScribe 같은 클라우드 전사 서비스의 <b>무료 대안</b>이에요. 트레이드오프: 본인 기기에서 컴퓨팅을 처리하는 대신 <b>음성 전사 무료</b>로 사용하되, 오디오가 기기를 벗어나지 않고 분당 요금이나 구독이 없어요. <b>Otter.ai 무료 대안</b>이자 <b>Rev 무료 대안</b>으로서 개인정보를 완전히 보호해요.
</details>

<details>
<summary><b>오디오에서 SRT 또는 VTT 자막을 생성할 수 있나요?</b></summary><br/>
네. <b>오디오 텍스트 변환</b> 후 <b>내보내기 → .srt</b> 또는 <b>.vtt</b>를 클릭하면 돼요. 큐 타이밍은 Whisper의 타임스탬프에서 나오므로 수동 분할 없이 자막이 <b>자막 생성 무료</b>로 완벽하게 정렬돼요.
</details>

<details>
<summary><b>브라우저에서 OpenAI Whisper가 실행되나요?</b></summary><br/>
네 — EarScribe는 Transformers.js를 통해 WebGPU 위에서, WebGPU를 사용할 수 없는 경우 WebAssembly 폴백으로 브라우저 안에서 직접 <b>OpenAI Whisper</b> (Tiny, Base, Small, Large v3 Turbo)를 실행하는 <b>무료 음성 텍스트 변환</b>을 제공해요. <b>WebGPU 음성 인식</b>을 지원하는 덕분에 최신 GPU에서 훨씬 빠르게 동작해요.
</details>

> [소개 페이지](https://earscribe.app/about)에서 더 많은 답변을 확인하세요.

---

## 기술 스택

EarScribe는 빠르고 정적이며 호스팅 비용이 저렴하도록 설계돼 있어요:

- **[Next.js 15](https://nextjs.org)** (App Router) + **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web (WebGPU + WASM)
- **[OpenAI Whisper](https://github.com/openai/whisper)** — Tiny, Base, Small, Large v3 Turbo (ONNX 양자화)
- **[next-intl](https://next-intl.dev)** — i18n (10개 언어 제공)
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[@opennextjs/cloudflare](https://opennext.js.org/cloudflare)** — Cloudflare Pages 배포
- **Plausible Analytics** (프로덕션에서만 로드)

전체 프론트엔드는 **정적**이에요. 모델 가중치는 첫 사용 시 Hugging Face CDN에서 가져와 브라우저 CacheStorage에 캐시돼요.

---

## 로컬 개발 환경 설정

```bash
git clone https://github.com/<your-org>/earscribe.git
cd earscribe
pnpm install
pnpm dev
# → http://localhost:3000
```

타입 검사, 린트, 빌드:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

Cloudflare Pages 배포:

```bash
pnpm cf:build          # .open-next/ 생성
pnpm cf:preview        # Wrangler로 로컬 미리보기
pnpm cf:deploy         # wrangler deploy
```

---

## 라이선스

[MIT](LICENSE) — 개인 및 상업적 용도 모두 무료로 사용 가능해요.

---

<p align="center">
  <b>지금 바로 사용해보세요: <a href="https://earscribe.app/ko">earscribe.app/ko</a></b><br/>
  <sub>무료 오디오 텍스트 변환 · 무료 음성 인식 · 오디오 동영상 텍스트 변환 · 100% 무료 · 회원가입 없음 · 개인정보 보호</sub>
</p>

<p align="center">
  <a href="https://earscribe.app/ko">한국어 버전 사용하기</a> · <a href="https://earscribe.app">earscribe.app</a> · <a href="https://earscribe.app/about">소개</a>
</p>

<p align="center">
  <a href="https://github.com/openai/whisper">OpenAI Whisper</a>, <a href="https://huggingface.co/docs/transformers.js">Transformers.js</a>, <a href="https://onnxruntime.ai">ONNX Runtime Web</a>으로 만들어졌어요.
</p>
