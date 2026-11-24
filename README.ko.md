<p align="center">
  <b>🌐 Language / 语言 / Idioma:</b><br/>
  <a href="README.md">English</a> · <a href="README.zh-CN.md">中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.ru.md">Русский</a>
</p>

<h1 align="center">EarScribe — 브라우저에서 오디오와 동영상을 무료로 텍스트로</h1>

<p align="center">
  <b>오디오 파일이나 동영상을 넣거나 마이크로 녹음하세요. 타임스탬프가 붙은 전사문과 자막을 받습니다.</b><br/>
  <sub>Whisper는 WebGPU 또는 WebAssembly를 통해 사용자 기기에서 실행되며, 녹음 파일은 업로드되지 않습니다.</sub>
</p>

<p align="center">
  <a href="https://earscribe.app"><img alt="라이브 앱" src="https://img.shields.io/badge/Live-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="무료" src="https://img.shields.io/badge/100%25-Free-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="가입 불필요" src="https://img.shields.io/badge/No-Sign--up-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="프라이버시" src="https://img.shields.io/badge/On--device-Private-0f172a?style=for-the-badge"></a>
  <img alt="MIT 라이선스" src="https://img.shields.io/badge/License-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe — 브라우저에서 오디오와 동영상을 무료로 텍스트로. MP3, WAV, M4A, MP4 파일을 넣으면 업로드 없이 타임스탬프가 붙은 전사문을 얻습니다."></a>
</p>

<p align="center">
  <b>🔗 앱 열기:</b> <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/guides">가이드</a> ·
  <a href="https://earscribe.app/changelog">변경 기록</a> ·
  <a href="https://earscribe.app/about">소개</a>
</p>

---

## 🎙️ EarScribe란 무엇인가

브라우저 탭 안에서 전부 동작하는 전사 작업 공간입니다. 오디오 파일이나 동영상 파일, 또는 마이크를 넘기면 클릭해서 그 순간을 다시 들을 수 있는 타임스탬프 텍스트와 편집자에게 넘길 수 있는 자막 파일을 돌려받습니다. 계정도, 업로드도, 분당 요금도 없습니다.

입력은 세 가지, 처리 과정은 하나입니다.

- **파일** — MP3, WAV, M4A, AAC, OGG, FLAC, Opus, 그리고 Web Audio API가 디코딩할 수 있는 대부분의 형식. 최대 1 GiB.
- **동영상** — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS. 오디오 트랙을 **탭 안에서** 디먹싱해 16 kHz 모노로 다시 인코딩한 뒤 다른 파일과 똑같이 전사합니다. ffmpeg도, 변환 사이트도 필요 없습니다.
- **마이크** — 강의, 녹음이 허용된 통화, 어쩌면 그냥 잃어버릴 뻔한 음성 메모를 같은 화면에서 녹음하고 전사합니다.

대기열을 더하면 폴더 하나 분량의 파일을 맡겨 두고 자리를 비울 수 있고, `/dashboard`의 작업 공간을 더하면 결과가 나중에 다시 열어 편집하고 내보낼 수 있는 프로젝트가 됩니다.

> 👉 **라이브 앱:** **[earscribe.app](https://earscribe.app)**

---

## 📚 목차

- [✨ 주요 기능](#-주요-기능)
- [🖼️ 스크린샷](#️-스크린샷)
- [🚀 빠른 시작](#-빠른-시작)
- [🗂️ 작업 공간](#️-작업-공간)
- [💸 비용](#-비용)
- [🆚 비교](#-비교)
- [🌍 지원 입력 및 언어](#-지원-입력-및-언어)
- [💼 활용 사례](#-활용-사례)
- [🚧 지원하지 않는 것](#-지원하지-않는-것)
- [❓ 자주 묻는 질문](#-자주-묻는-질문)
- [🛠️ 기술 스택](#️-기술-스택)
- [🧑‍💻 로컬 개발](#-로컬-개발)
- [☁️ 배포](#️-배포)
- [🌐 새 언어 추가](#-새-언어-추가)
- [🔬 새 Whisper 모델 추가](#-새-whisper-모델-추가)
- [🤝 기여](#-기여)
- [📄 라이선스](#-라이선스)

---

## ✨ 주요 기능

| | 기능 | 실제로 얻는 것 |
|---|---|---|
| 🎬 | **오디오, 동영상, 마이크** | 동영상 컨테이너를 그대로 받습니다. 오디오 트랙을 기기 안에서 추출하므로 200 MB MP4도 밖으로 나가지 않습니다. |
| 📝 | **타임스탬프 전사문** | 자막 큐마다 시작과 끝 시각이 붙습니다. 줄을 클릭하면 그 순간을 들을 수 있고, 파형 스크러버가 함께 따라갑니다. |
| 🔍 | **전사문 안에서 검색** | 이름, 숫자, 용어 무엇이든 해당 문장으로 건너뛰어 다시 듣습니다. 파일을 처음부터 다시 들을 필요가 없습니다. |
| 🎞️ | **자막 내보내기** | SRT, WebVTT, 일반 텍스트, JSON(전체 정밀도 타임코드를 담은 전사 객체), 또는 클립보드. |
| 🧪 | **자막 검사** | 내보내기 전에 너무 길거나, 너무 빠르거나, 반복되거나, 비었거나, 겹치는 큐를 표시합니다. |
| 📚 | **일괄 대기열** | 여러 파일을 넣고 모델 하나와 음성 언어 하나만 고른 뒤 대기열이 순서대로 처리하게 합니다. 언제든 현재 파일이 끝난 뒤 일시정지할 수 있습니다. |
| 🗂️ | **프로젝트** | 결과는 `/dashboard` 아래 프로젝트로 브라우저에 저장됩니다. 전사문, 자막, 원본 파일, 휴지통 폴더가 포함되며 나중에 다시 열 수 있습니다. |
| ✏️ | **자막 편집** | 텍스트를 고치고, 큐의 시작·끝 지점을 옮기고, 큐를 나누거나 삭제한 뒤 다시 내보냅니다. |
| 💾 | **백업과 복원** | 작업 공간 전체를 파일 하나로 내보내 다른 브라우저에서 가져올 수 있습니다. |
| 🔁 | **자막 변환** | SRT ⇄ VTT와 SRT → 텍스트를 브라우저에서, 모델 다운로드 없이 처리합니다. 이 앱에서 즉시 시작되는 유일한 도구입니다. |
| 🆓 | **무료, 무제한** | 유료 등급도, 일일 할당량도, 분당 요금도, 계정도 없습니다. |
| 🔒 | **구조적으로 프라이빗** | 전사는 기기에서 실행됩니다. 공개 페이지에는 분석과 광고가 있고, `/dashboard`에는 광고가 없습니다. |
| 🌍 | **인터페이스 27개 언어, 음성 99개 언어** | 인터페이스는 27개 로케일로 번역되어 있고, Whisper가 음성 언어를 자동으로 감지합니다. |

---

## 🖼️ 스크린샷

> **[earscribe.app](https://earscribe.app)** 라이브 사이트에서 직접 찍은 실제 스크린샷입니다.

### 1. 파일, 동영상, 녹음 무엇이든 — 가입도 업로드도 없습니다

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="무료 오디오·동영상 텍스트 변환 — 브라우저에서 MP3, WAV, M4A, MP4, MOV, MKV 파일을 넣으세요. 가입도 로그인도 없습니다."></a>
</p>

### 2. 파형과 함께 보는 타임스탬프 전사문 — 아무 줄이나 클릭해 이동

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="EarScribe 전사 결과 — 파형 스크러버와 원클릭 SRT·VTT 자막 내보내기를 갖춘 타임스탬프 오디오 텍스트 변환"></a>
</p>

### 3. 세 단계: 파일 넣기 → Whisper 모델 선택 → 내보내기

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="EarScribe의 무료 오디오 텍스트 변환 방식 — 오디오나 동영상을 넣고 Whisper 모델(tiny, base, small, turbo)을 고른 뒤 전사문을 읽고 내보냅니다"></a>
</p>

### 4. EarScribe를 쓰는 이유 — 프라이버시 우선, 브라우저 네이티브 Whisper

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/04-features.webp" alt="EarScribe 기능 — 업로드 없는 프라이버시, WebGPU + WASM, 음성 99개 언어 자동 감지, SRT VTT JSON TXT 내보내기, 기기 내 추론"></a>
</p>

### 5. EarScribe를 쓰는 사람 — 팟캐스터, 기자, 학생, 편집자

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="EarScribe 활용 사례 — 팟캐스터, 기자, 학생, 사용자 리서치, 동영상 자막, 오디오북 전사를 위한 무료 오디오 텍스트 변환"></a>
</p>

### 6. EarScribe vs Otter.ai, Rev, HappyScribe, 그리고 로컬 Whisper 설치

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="EarScribe vs Otter.ai vs Rev vs HappyScribe 비교 — 기기 내 추론과 분당 요금이 없는 무료 무제한 오디오 텍스트 변환"></a>
</p>

### 7. FAQ — 프라이버시, 형식, 자막 내보내기, 오프라인 사용

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="무료 음성 텍스트 변환 FAQ — 프라이버시, MP3와 동영상 텍스트 변환, SRT·VTT 자막 내보내기, 지원 언어, 오프라인 사용, 브라우저 속 Whisper에 대한 답변"></a>
</p>

---

## 🚀 빠른 시작

1. Chrome, Edge, Safari, Firefox에서 **[earscribe.app](https://earscribe.app)** 을 엽니다.
2. 파일을 넣거나, 동영상을 넣거나, 녹음을 시작합니다. 파일당 최대 1 GiB까지 받으며, 실제 한도는 디스크 크기가 아니라 기기의 메모리입니다.
3. 모델을 고릅니다. **base**가 기본값이고 대부분의 음성에 맞습니다. **tiny**는 휴대폰이나 짧은 음성 메모용이고, **small**과 **turbo**는 억양이 있거나 시끄럽거나 중요한 오디오용입니다.
4. **전사**를 누릅니다. 오디오가 디코딩되어 탭 안의 Whisper로 전달됩니다. 첫 실행에서는 가중치를 내려받으므로 버튼에 표시되는 크기를 확인하세요.
5. 전사문을 읽고, 줄을 클릭해 다시 듣고, 필요한 부분을 고친 뒤 **내보내기 → SRT / VTT / TXT / JSON** 으로 저장하거나 복사합니다.

일괄 처리가 필요하면 대기열로 전환해 원하는 만큼 파일을 넣고 모델은 한 번만 고르면 됩니다. 대기열은 한 번에 파일 하나씩 처리하고, 이미 메모리에 올라온 모델을 재사용하며, 각 결과를 프로젝트로 저장합니다.

> 💡 **변환 단계가 필요 없습니다.** 두 시간짜리 MP4도 그대로 들어갑니다. 오디오만 남기고 싶다면 앱이 동영상의 오디오 트랙을 대신 추출해 줍니다.

---

## 🗂️ 작업 공간

`/dashboard`는 기억을 갖춘 같은 전사 엔진입니다. 모든 것은 이 브라우저에 저장되며 — 프로젝트 기록은 IndexedDB, 모델 가중치는 CacheStorage — 계정과 동기화되지 않습니다. 계정이 없기 때문입니다.

| 구역 | 들어 있는 것 |
|---|---|
| **프로젝트** | 전부, 최신순. |
| **전사문** | 전사 실행으로 만들어진 프로젝트. 큐를 편집해도 여기에 남습니다. |
| **자막** | 자막 파일에서 만들어진 프로젝트 — 변환기와 가져오기 — 이므로 자막 작업이 음성 작업과 섞이지 않습니다. |
| **파일** | 작업 공간이 보관하는 원본 미디어. 전사문, 자막, 오디오로 종류를 걸러 볼 수 있습니다. 원본 오디오는 기본적으로 저장되지 **않습니다**. |
| **휴지통** | 삭제한 프로젝트. 비울 때까지 복구할 수 있습니다. |

프로젝트 안에서는 전사문을 검색하고, 타임스탬프를 클릭해 다시 재생하고, 자막 큐를 편집하고(텍스트, 시작·끝 지점, 추가와 삭제), 긴 큐를 더 짧게 다시 나누고, 어떤 형식으로든 다시 내보내고, 페이지를 벗어나지 않고 미디어 플레이어를 열 수 있습니다.

**백업:** 작업 공간은 파일 하나(최대 320 MB)로 내보내 다른 브라우저나 다른 기기에서 가져올 수 있습니다. 프로젝트는 기기를 떠나지 않으므로 이 파일이 유일하게 이동하는 사본입니다. 다른 문서 백업과 똑같이 다루세요.

---

## 💸 비용

무료라고 해서 부담이 없는 것은 아닙니다. 아래는 추정치가 아니라 모델과 백엔드별로 측정한 다운로드 크기입니다.

| 모델 | WebGPU | WebAssembly | 주 용도 |
|---|---:|---:|---|
| **tiny** | 151 MB | 41 MB | 음성 메모, 저사양 휴대폰, 첫 시도 |
| **base** *(기본)* | 291 MB | 77 MB | 인터뷰, 회의, 팟캐스트 |
| **small** | 968 MB | 249 MB | 억양이 있는 발화, 시끄러운 방 |
| **turbo** | 3.24 GB | 1.09 GB | 정확도가 시간보다 중요한 스튜디오급 전사문 |

- **한 번 내려받으면 캐시됩니다.** 가중치는 브라우저 캐시에 남으므로 두 번째 실행에서는 아무것도 내려받지 않습니다. 다른 브라우저 프로필을 쓰면 다시 받아야 합니다.
- **GPU는 값을 합니다.** 같은 기기에서 WebGPU는 40분짜리 파일을 base로 약 3.8분에 끝냈고 CPU에서는 9.4분이 걸렸습니다. 약 2.5배 빠른 대신 다운로드 용량은 서너 배입니다. 테스트에서 WebGPU의 `turbo`는 3.24 GB 다운로드를 끝내지 못했으므로 빠르다고 적는 대신 측정하지 못했다고 적습니다.
- **파일 크기가 아니라 메모리가 결정합니다.** 긴 녹음은 전사 전에 16 kHz 모노로 디코딩됩니다. 40분짜리 MP3는 수백 MB면 충분하지만, 두 시간짜리 스테레오 WAV는 시작하기도 전에 탭을 버티게 할 수 있습니다. 이제 디코딩이 16 kHz를 직접 요청하므로 두 시간짜리 스테레오 파일의 최대 메모리가 약 1.6 GB에서 0.5 GB로 줄었습니다.
- **서버도, 남의 기기에서 도는 대기열도 없습니다.** 시간은 내 CPU의 것이므로 느린 노트북은 느립니다. 업로드하지 않는 대가입니다.

방법과 실패한 실행까지 포함한 전체 측정값은 [가이드](https://earscribe.app/guides)에 있습니다.

---

## 🆚 비교

2026년에 EarScribe는 다른 오디오 전사 방법과 어떻게 다를까요?

| | **EarScribe** | Otter.ai 무료 | Rev 무료 체험 | HappyScribe | 로컬 Whisper CLI |
|---|:---:|:---:|:---:|:---:|:---:|
| **무료·무제한** | ✅ | ⚠️ 월 300분 | ❌ 체험판만 | ❌ 유료 | ✅ |
| **가입·로그인 불필요** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **업로드 없음(프라이빗)** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **업로드 없이 동영상 처리** | ✅ 기기에서 추출 | ❌ 업로드 필요 | ❌ 업로드 필요 | ❌ 업로드 필요 | ✅ ffmpeg 필요 |
| **브라우저에서 동작** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **SRT / VTT 내보내기** | ✅ | ⚠️ 유료 | ✅ | ✅ | ⚠️ 수동 |
| **타임스탬프 전사문** | ✅ | ✅ | ✅ | ✅ | ⚠️ 수동 |
| **기기 내 추론** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **음성 99개 언어** | ✅ | ⚠️ 제한적 | ⚠️ 제한적 | ✅ | ✅ |
| **Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **설치 필요** | ❌ 없음 | ❌ 없음 | ❌ 없음 | ❌ 없음 | ⚠️ Python + GPU |
| **비용** | $0 | $0–$30/월 | $0.25/분 | €0.20/분 | $0 (내 하드웨어) |

**불리한 점:** 로컬 설치는 브라우저 탭보다 빠른 백엔드에서 더 큰 모델을 돌릴 수 있고, 유료 서비스는 화자 라벨과 팀 작업 공간을 더해 줍니다. EarScribe의 강점은 무료이고, 설치할 것이 없고, 오디오가 어디로도 가지 않는다는 점입니다.

→ **[earscribe.app에서 사용해 보기](https://earscribe.app)**

---

## 🌍 지원 입력 및 언어

### 오디오 — MP3, WAV, M4A, AAC, OGG, FLAC, Opus

Web Audio API가 디코딩할 수 있는 것은 무엇이든 받습니다. 위 일곱 가지면 실제로 만나는 녹음은 거의 다 커버됩니다.

- 🎵 **[MP3 텍스트 변환](https://earscribe.app/mp3-to-text)** — 팟캐스트와 인터뷰의 표준
- 🎙️ **[WAV 텍스트 변환](https://earscribe.app/wav-to-text)** — 무손실 스튜디오·현장 녹음
- 📱 **[M4A 텍스트 변환](https://earscribe.app/m4a-to-text)** — iPhone 음성 메모
- 🎧 **[음성 메모 텍스트 변환](https://earscribe.app/voice-memo-to-text)** — 모바일에서 찍은 휴대폰 녹음
- 🔊 **[오디오 텍스트 변환](https://earscribe.app/audio-to-text)** — 일반적인 진입점
- 🎬 **[오디오 SRT 변환](https://earscribe.app/audio-to-srt)** — 곧바로 자막으로

### 동영상 — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS

오디오 트랙은 [mediabunny](https://mediabunny.dev)로 디먹싱하고 WebCodecs로 디코딩한 뒤 작은 모노 16 kHz MP3(MP3 인코더가 없는 경우 WAV)로 다시 인코딩합니다. 모두 기기 안에서 처리합니다. 브라우저가 디코딩할 수 없는 컨테이너는 빈 전사문을 조용히 내놓는 대신 분명한 메시지와 함께 실패합니다.

### 마이크

녹음은 탭 안에서 MediaRecorder로 이루어집니다. 녹음 파일은 넣은 파일과 똑같이 전사됩니다. 녹음 중 실시간 자막은 제공하지 **않습니다**([지원하지 않는 것](#-지원하지-않는-것) 참고).

### 언어 — 음성 99개, 인터페이스 27개

Whisper가 음성 언어를 자동으로 감지합니다. 영어, 스페인어, 프랑스어, 독일어, 이탈리아어, 포르투갈어, 러시아어, 일본어, 한국어, 중국어(간체와 번체), 아랍어, 힌디어, 터키어, 네덜란드어, 폴란드어, 인도네시아어, 스웨덴어, 노르웨이어, 덴마크어, 핀란드어, 체코어, 헝가리어, 그리스어, 히브리어, 태국어, 베트남어, 그리고 70개 이상.

인터페이스는 27개 로케일로 번역되어 있습니다. 영어는 `/`에 있고 나머지 26개는 접두사를 붙입니다.

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

## 💼 활용 사례

### 🎙️ 팟캐스터와 크리에이터
**[팟캐스트 전사](https://earscribe.app/podcast-transcription)** 로 쇼 노트, 에피소드 SEO, 접근성을 확보합니다. 동영상 버전에는 SRT를, 블로그에는 TXT를 내보내세요.

### 📰 기자와 연구자
**[인터뷰 전사](https://earscribe.app/interview-transcription)** — 원본 녹음이 노트북에 그대로 남습니다. 유출되거나, 소환되거나, 감사될 제3자 사본이 존재하지 않습니다.

### 🎓 학생과 강사
녹음한 수업을 **[강의 전사](https://earscribe.app/audio-to-text)** 해 두면 다음 수업 전에 검색할 수 있습니다. iPhone 음성 메모와 Zoom 내보내기에도 동작합니다.

### 📞 회의와 사용자 리서치
**[회의 녹음 텍스트 변환](https://earscribe.app/meeting-recording-to-text)** — 통화의 전사문이지, 자동으로 만들어진 회의록이 아닙니다.

### 🎬 영상 편집자
YouTube, Premiere, Final Cut, Resolve를 위한 **[오디오 SRT 변환](https://earscribe.app/audio-to-srt)**. 큐 타이밍은 Whisper 자체의 타임스탬프에서 나오고, 자막 검사가 화면에서 넘칠 부분을 표시합니다.

### 📚 오디오북과 긴 녹음
두 시간짜리 파일도 지원하지만, 바로 이 경우에 기기 메모리가 결정합니다. 네 시간짜리를 시작하기 전에 [긴 오디오를 처리하는 방식](https://earscribe.app/guides/how-to-transcribe-long-audio)을 읽어 보세요.

---

## 🚧 지원하지 않는 것

여기서 분명히 해 두면 모두의 헛된 실행을 줄일 수 있습니다.

- **화자 분리 없음.** 한 파일에 두 사람이 있으면 "화자 1 / 화자 2" 라벨 없이 평평한 텍스트가 나옵니다. 인터뷰 페이지가 일부러 그렇게 안내합니다.
- **번역 없음.** 전사문은 말한 언어 그대로 남습니다. UI 언어와 음성 언어는 무관합니다.
- **실시간 자막 없음.** 녹음과 전사는 별개 단계입니다. 마이크로 먼저 녹음하고, 그다음 파일을 전사합니다.
- **대기열은 직렬이고 탭이 열려 있어야 합니다.** 일괄 전체에 모델 하나, 언어 설정 하나입니다. 탭을 닫으면 멈춥니다.
- **기기 간 동기화 없음.** 프로젝트는 이 브라우저에 있습니다. 옮기려면 작업 공간 내보내기를 쓰세요.
- **오프라인 앱이 아닙니다.** 가중치는 캐시되지만 페이지 자체는 네트워크에서 불러옵니다. 설치하면 데스크톱이나 홈 화면 바로가기가 생길 뿐, 오프라인 사본이 생기지는 않습니다.
- **파일당 1 GiB는 확정 상한이고, 실제 한도는 메모리입니다.**

---

## ❓ 자주 묻는 질문

<details>
<summary><b>EarScribe는 정말 무료이고 제한이 없나요?</b></summary><br/>
예 — 유료 등급도, 신용카드도, 분당 요금도, 일일·월간 할당량도, 계정도 없습니다. 연산은 사용자의 하드웨어에서 돌기 때문에 클라우드 청구서를 떠넘길 일이 없습니다. 파일당 1 GiB 상한이 있고, 실제로 끝까지 처리되는지는 기기 메모리가 결정합니다.
</details>

<details>
<summary><b>제 오디오가 어디론가 업로드되나요?</b></summary><br/>
아니요. 오디오는 탭에서 디코딩되어 Web Worker에서 실행되는 Whisper 모델로 전달됩니다. 모델 가중치는 CDN에서 브라우저로 내려받으므로 CDN은 사용자의 IP 주소를 볼 수 있지만, 녹음 파일은 전송되지 않습니다. 공개 페이지에는 Google AdSense(단, AdSense 정책상 제외되는 페르시아어 페이지는 예외)와 쿠키 없는 Plausible 분석이 붙습니다. <code>/dashboard</code>는 광고 코드를 전혀 불러오지 않습니다.
</details>

<details>
<summary><b>동영상도 전사할 수 있나요?</b></summary><br/>
예, 바로 됩니다 — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS. 오디오 트랙을 브라우저 안에서 추출해 일반 파일처럼 전사하므로 ffmpeg나 변환 사이트가 필요 없습니다. 컨테이너가 브라우저에서 디코딩할 수 없는 코덱을 쓰면 빈 전사문 대신 그렇다고 알려 줍니다.
</details>

<details>
<summary><b>첫 실행이 왜 느린가요?</b></summary><br/>
모델을 처음 쓸 때 브라우저가 가중치를 내려받습니다. WebAssembly의 tiny는 41 MB부터 WebGPU의 turbo는 3.24 GB까지입니다. 이후에는 캐시됩니다. 거의 모든 경우 <b>base</b>(WebAssembly 77 MB, WebGPU 291 MB)를 고르세요.
</details>

<details>
<summary><b>정확도는 어느 정도이고 어떤 모델을 골라야 하나요?</b></summary><br/>
같은 34초 클립에서 네 모델이 111개 단어 중 26개에 대해 서로 다른 답을 냈고, 같은 모델도 다운로드 크기 두 가지에서 자기 자신과 어긋났습니다. 정확도 퍼센트가 아니라 내게 중요한 단어를 기준으로 고르세요. <a href="https://earscribe.app/guides/which-whisper-model-should-i-use">모델 가이드</a>가 실제 차이를 보여 줍니다.
</details>

<details>
<summary><b>SRT나 VTT 자막을 얻을 수 있나요?</b></summary><br/>
예: 내보내기 → SRT 또는 VTT. 타이밍은 나중에 텍스트를 쪼개서가 아니라 Whisper 자체의 세그먼트 경계에서 나옵니다. 자막 검사가 너무 길거나, 너무 빠르거나, 반복되거나, 비었거나, 겹치는 큐를 표시하고, 내보내기 전에 큐 텍스트와 타이밍을 편집할 수 있습니다.
</details>

<details>
<summary><b>이미 SRT나 VTT 파일이 있으면요?</b></summary><br/>
모델을 내려받지 않고 변환하세요. <a href="https://earscribe.app/srt-to-vtt">SRT to VTT</a>와 <a href="https://earscribe.app/srt-to-txt">SRT to text</a>가 파일을 로컬에서 파싱합니다. 아무것도 업로드되지 않고 Whisper 가중치도 받지 않습니다.
</details>

<details>
<summary><b>오프라인에서도 동작하나요?</b></summary><br/>
전사 단계는 그렇습니다. 페이지와 모델이 한번 로드되면 오디오는 전사 서버와 통신하지 않고 처리됩니다. 하지만 앱 자체가 오프라인 번들은 아닙니다. 여는 데 네트워크가 필요하고, 한 번도 내려받지 않은 모델은 받아와야 합니다. 푸터에서 설치하면 작업 공간으로 열리는 바로가기가 생길 뿐 오프라인 사본이 생기지는 않습니다.
</details>

<details>
<summary><b>누가 말하는지 라벨을 붙여 주나요?</b></summary><br/>
아니요. 출력은 타임코드가 붙은 평평한 텍스트입니다. 화자 분리는 이 빌드에 없고, 앱은 있는 척하지 않습니다.
</details>

<details>
<summary><b>결과는 어디에 저장되나요?</b></summary><br/>
이 브라우저에 저장됩니다. 프로젝트는 IndexedDB, 모델 가중치는 CacheStorage에 있습니다. 원본 오디오는 직접 보관하지 않는 한 프로젝트와 함께 저장되지 않습니다. 작업 공간에 저장하지 않은 페이지는 새로고침하면 초기 상태로 시작합니다. 남기고 싶은 것이 있으면 <code>/dashboard</code>와 그 내보내기를 쓰세요.
</details>

<details>
<summary><b>Otter.ai나 Rev의 무료 대안이 있나요?</b></summary><br/>
EarScribe는 클라우드 전사 서비스의 무료 대안입니다. 연산은 사용자가 하고, 오디오는 그대로 있고, 분당 요금이 없습니다. 대가도 분명합니다 — 화자 라벨 없음, 팀 작업 공간 없음, 긴 파일은 기기 성능에 좌우됩니다.
</details>

<details>
<summary><b>MP3를 무료로 텍스트로 바꾸려면 어떻게 하나요?</b></summary><br/>
MP3를 <a href="https://earscribe.app/mp3-to-text">earscribe.app/mp3-to-text</a>(또는 홈 페이지)에 넣으세요. 브라우저에서 디코딩되고 로컬에서 전사되며, 복사하거나 SRT, VTT, TXT, JSON으로 내보낼 수 있습니다.
</details>

> 더 많은 답변은 **[소개 페이지](https://earscribe.app/about)**, 측정 관련 설명은 **[가이드](https://earscribe.app/guides)** 에 있습니다.

---

## 🛠️ 기술 스택

- **[Next.js 15](https://nextjs.org)** (App Router) + **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web, WebGPU와 WebAssembly 폴백
- **[OpenAI Whisper](https://github.com/openai/whisper)** — tiny, base, small, large-v3-turbo, ONNX 양자화
- **[mediabunny](https://mediabunny.dev)** + **WebCodecs** — 탭 안에서 동영상 디먹싱과 오디오 추출
- **[next-intl](https://next-intl.dev)** — 27개 로케일, 언어별 메시지 카탈로그 하나
- **[Tailwind CSS v4](https://tailwindcss.com)**
- 호스팅은 **[Cloudflare Pages](https://pages.cloudflare.com)**, 모델 호스트와 피드백 엔드포인트용 Pages Functions 몇 개

사이트는 정적으로 렌더링되고 브라우저에서 하이드레이션됩니다. 전사와 자막 변환은 클라이언트에서만 이루어집니다. 모델 가중치는 첫 사용 시 Hugging Face CDN에서 받아 CacheStorage에 캐시됩니다.

---

## 🧑‍💻 로컬 개발

```bash
git clone https://github.com/rocnubie/earscribe-free-speech-to-text.git
cd earscribe-free-speech-to-text
pnpm install
pnpm dev
# → http://localhost:3000
```

배포 전에 실행하는 검사:

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

`pnpm build`는 `out/`에 정적 내보내기를 만듭니다. 여러 감사가 `out/`을 읽으므로 빌드를 먼저 실행하세요.

---

## ☁️ 배포

프로덕션 배포는 명령 하나로 진행되며, 모든 감사를 순서대로 실행합니다.

```bash
pnpm pages:deploy
```

먼저 로컬 배포 마커(`lib/release.ts`의 `deployId`)를 라이브 사이트의 `/changelog`에서 제공되는 값과 비교하고, 같으면 진행을 거부합니다. 이렇게 오래된 빌드를 잡아냅니다. 그다음 빌드하고, 링크·가이드·`llms.txt`·i18n·사이트맵·PWA 감사를 실행한 뒤 `out/`을 Cloudflare Pages에 게시합니다.

`/changelog`는 독자가 실제로 활용할 수 있는 변경 목록입니다. 빌드 로그가 아닙니다. 내부 리팩터링, 문구 수정, 번역 작업은 새 `deployId`를 받지만 변경 기록 항목은 생기지 않습니다.

환경 변수와 바인딩:

| 이름 | 쓰임새 |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | 표준 URL, 사이트맵, OG 태그 |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible 사이트 식별자 |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | Plausible 스크립트 URL |
| `FEEDBACK_DB` (D1 바인딩) | `/feedback` 엔드포인트, 스키마는 `migrations/` |

---

## 🌐 새 언어 추가

1. [`i18n/locale.ts`](i18n/locale.ts)의 `ALL_LOCALE_NAMES`에 로케일 코드를 추가합니다.
2. `en.json` 옆에 `messages/<code>.json`을 추가하고 완전히 번역합니다.
3. `pnpm i18n:gate`를 실행합니다. 라우팅, 사이트맵, hreflang, OG 메타데이터는 로케일을 자동으로 인식하지만, 키가 빠지면 게이트가 실패합니다.

게이트를 통과한 로케일만 `translatedLocales`에 넣어야 합니다. 언어 전환기는 나머지를 부분 번역으로 표시합니다.

---

## 🔬 새 Whisper 모델 추가

[`lib/models.ts`](lib/models.ts)의 `MODELS`에 항목을 추가할 때 `wasm`과 `webgpu` 양쪽에 **측정된** `sizeMB`를 넣으세요. 두 백엔드는 서로 다른 가중치 파일을 배포하며, 하나의 숫자를 양쪽에 적는 것이 앱이 한때 500 MB를 약속하고 968 MB를 내놓은 이유입니다. 저장소는 Hugging Face에 `onnx-community/<name>`으로 존재하거나 ONNX-Whisper와 호환되어야 합니다. 장단점 문구를 위해 각 `messages/*.json`에 대응하는 `models.<id>` 블록을 추가하세요.

---

## 🤝 기여

풀 리퀘스트를 환영합니다. 특히 다음을 기다립니다.

- 번역(`messages/<code>.json`)과 로케일별 README 수정
- 어떤 파일이 문제였는지, 브라우저와 기기 메모리는 어땠는지까지 담은 버그 리포트
- 저희에게 없는 하드웨어에서의 모델 크기·시간·최대 메모리 측정
- 접근성 수정

여기에 이슈나 PR을 올리거나, 먼저 **[earscribe.app](https://earscribe.app)** 을 써 보고 무엇에 기여하게 될지 확인해 보세요.

---

## 📄 라이선스

이 저장소의 마케팅 사이트와 페이지는 [MIT](LICENSE)입니다. 개인적·상업적 사용 모두 무료입니다. 전사 워커, 오디오 디코더, 자막 내보내기는 여기에 공개되어 있지 않으므로, 이 저장소는 서비스 전체를 자체 호스팅할 수 있는 완전한 사본이 아닙니다.

---

<p align="center">
  <b>👉 라이브 앱 사용해 보기: <a href="https://earscribe.app">earscribe.app</a></b><br/>
  <sub>오디오 텍스트 변환 · 동영상 텍스트 변환 · 음성 텍스트 변환 · 자막 내보내기 · 100% 무료 · 가입 불필요 · 기기 내 처리</sub>
</p>

<p align="center">
  <a href="https://github.com/openai/whisper">OpenAI Whisper</a>, <a href="https://huggingface.co/docs/transformers.js">Transformers.js</a>, <a href="https://onnxruntime.ai">ONNX Runtime Web</a>, <a href="https://mediabunny.dev">mediabunny</a> 위에서 ❤️를 담아 만들었습니다.
</p>
