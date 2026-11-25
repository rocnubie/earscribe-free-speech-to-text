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

<h1 align="center">EarScribe — audio i wideo na tekst za darmo, w przeglądarce</h1>

<p align="center">
  <b>Wrzuć plik audio, wideo albo nagraj z mikrofonu. Otrzymasz transkrypcję ze znacznikami czasu i napisy.</b><br/>
  <sub>Whisper działa na Twoim urządzeniu przez WebGPU lub WebAssembly — nagranie nigdy nie jest wysyłane.</sub>
</p>

<p align="center">
  <a href="https://earscribe.app"><img alt="Działająca aplikacja" src="https://img.shields.io/badge/Live-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Za darmo" src="https://img.shields.io/badge/100%25-Free-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Bez rejestracji" src="https://img.shields.io/badge/No-Sign--up-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Prywatnie" src="https://img.shields.io/badge/On--device-Private-0f172a?style=for-the-badge"></a>
  <img alt="Licencja MIT" src="https://img.shields.io/badge/License-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe — audio i wideo na tekst za darmo w przeglądarce. Wrzuć MP3, WAV, M4A albo MP4 i dostań transkrypcję ze znacznikami czasu bez wysyłania pliku."></a>
</p>

<p align="center">
  <b>🔗 Otwórz aplikację:</b> <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/guides">Przewodniki</a> ·
  <a href="https://earscribe.app/changelog">Zmiany</a> ·
  <a href="https://earscribe.app/about">O nas</a>
</p>

---

## 🎙️ Czym jest EarScribe

Obszar roboczy do transkrypcji, który działa w całości w karcie przeglądarki. Dajesz mu audio, plik wideo albo mikrofon; dostajesz tekst ze znacznikami czasu, w które można kliknąć, żeby odsłuchać fragment, plus pliki z napisami do przekazania montażyście. Bez konta, bez wysyłania plików i bez opłat za minutę.

Trzy drogi wejścia, jeden potok przetwarzania:

- **Plik** — MP3, WAV, M4A, AAC, OGG, FLAC, Opus albo prawie wszystko, co dekoduje Web Audio API, do 1 GiB.
- **Wideo** — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS. Ścieżka audio jest demuksowana i ponownie kodowana do 16 kHz mono **w karcie**, a potem transkrybowana jak każdy inny plik. Bez ffmpeg, bez stron z konwerterami.
- **Mikrofon** — nagrywanie i transkrypcja w jednym miejscu: wykład, rozmowa, którą masz prawo nagrywać, albo notatka głosowa, która inaczej by przepadła.

Dodaj kolejkę i możesz wrzucić cały folder plików, a potem odejść; dodaj obszar roboczy pod `/dashboard`, a wyniki staną się projektami, które otworzysz, poprawisz i wyeksportujesz później.

> 👉 **Działająca aplikacja:** **[earscribe.app](https://earscribe.app)**

---

## 📚 Spis treści

- [✨ Co potrafi](#-co-potrafi)
- [🖼️ Zrzuty ekranu](#️-zrzuty-ekranu)
- [🚀 Szybki start](#-szybki-start)
- [🗂️ Obszar roboczy](#️-obszar-roboczy)
- [💸 Ile to kosztuje](#-ile-to-kosztuje)
- [🆚 Porównanie](#-porównanie)
- [🌍 Obsługiwane formaty i języki](#-obsługiwane-formaty-i-języki)
- [💼 Zastosowania](#-zastosowania)
- [🚧 Czego nie robi](#-czego-nie-robi)
- [❓ FAQ](#-faq)
- [🛠️ Stack technologiczny](#️-stack-technologiczny)
- [🧑‍💻 Praca lokalna](#-praca-lokalna)
- [☁️ Wdrożenie](#️-wdrożenie)
- [🌐 Dodanie nowego języka](#-dodanie-nowego-języka)
- [🔬 Dodanie nowego modelu Whisper](#-dodanie-nowego-modelu-whisper)
- [🤝 Współtworzenie](#-współtworzenie)
- [📄 Licencja](#-licencja)

---

## ✨ Co potrafi

| | Funkcja | Co naprawdę dostajesz |
|---|---|---|
| 🎬 | **Audio, wideo i mikrofon** | Kontenery wideo są przyjmowane bezpośrednio. Ścieżka audio jest wyodrębniana lokalnie, więc plik MP4 o rozmiarze 200 MB też nigdy nie opuszcza komputera. |
| 📝 | **Transkrypcja ze znacznikami czasu** | Każdy cue ma czas początku i końca. Kliknij wiersz, żeby odsłuchać ten moment; waveform podąża za odtwarzaniem. |
| 🔍 | **Wyszukiwanie w transkrypcji** | Imię, liczba, termin — przeskocz do zdania i odsłuchaj je, zamiast słuchać całego pliku od nowa. |
| 🎞️ | **Eksport napisów** | SRT, WebVTT, czysty tekst, JSON (obiekt transkrypcji z pełną precyzją timecode'ów) albo schowek. |
| 🧪 | **Kontrola napisów** | Oznacza cue zbyt długie, zbyt szybkie, powtórzone, puste lub nachodzące na siebie, zanim je wyeksportujesz. |
| 📚 | **Kolejka wsadowa** | Wrzuć kilka plików, ustaw jeden model i jeden język mówiony, a kolejka przetworzy je po kolei. W każdej chwili możesz ją wstrzymać po bieżącym pliku. |
| 🗂️ | **Projekty** | Wyniki zapisują się w przeglądarce jako projekty pod `/dashboard`: transkrypcje, napisy, pliki źródłowe i kosz, do otwarcia później. |
| ✏️ | **Edycja napisów** | Popraw tekst, przesuń punkt wejścia lub wyjścia cue, podziel albo usuń cue, a potem eksportuj ponownie. |
| 💾 | **Kopia zapasowa i przywracanie** | Wyeksportuj cały obszar roboczy do jednego pliku i zaimportuj go w innej przeglądarce. |
| 🔁 | **Konwersja napisów** | SRT ⇄ VTT oraz SRT → tekst, w przeglądarce, bez pobierania modelu — to jedyne narzędzie tutaj, które startuje natychmiast. |
| 🆓 | **Za darmo i bez limitów** | Bez płatnego planu, bez dziennego limitu, bez opłat za minutę, bez konta. |
| 🔒 | **Prywatność z architektury** | Transkrypcja działa lokalnie. Strony publiczne zawierają analitykę i reklamy; `/dashboard` jest bez reklam. |
| 🌍 | **27 języków interfejsu, 99 języków mówionych** | Interfejs jest przetłumaczony na 27 locale; Whisper sam rozpoznaje język mówiony. |

---

## 🖼️ Zrzuty ekranu

> Prawdziwe zrzuty z działającej strony **[earscribe.app](https://earscribe.app)**.

### 1. Wrzuć plik lub wideo albo nagraj — bez rejestracji, bez wysyłania

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="Darmowy konwerter audio i wideo na tekst — wrzuć MP3, WAV, M4A, MP4, MOV lub MKV w przeglądarce. Bez rejestracji, bez logowania."></a>
</p>

### 2. Transkrypcja ze znacznikami czasu i waveformem — kliknij wiersz, żeby przeskoczyć

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="Wynik transkrypcji EarScribe — audio na tekst ze znacznikami czasu, przewijalnym waveformem i eksportem napisów SRT oraz VTT jednym kliknięciem"></a>
</p>

### 3. Trzy kroki: wrzuć → wybierz model Whisper → eksportuj

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="Jak działa darmowe audio na tekst w EarScribe — wrzuć audio lub wideo, wybierz model Whisper (tiny, base, small lub turbo), przeczytaj i wyeksportuj transkrypcję"></a>
</p>

### 4. Dlaczego EarScribe — Whisper w przeglądarce, prywatność przede wszystkim

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/04-features.webp" alt="Funkcje EarScribe — bez wysyłania plików, WebGPU plus WASM, 99 języków mówionych wykrywanych automatycznie, eksport SRT VTT JSON TXT, wnioskowanie na urządzeniu"></a>
</p>

### 5. Kto używa EarScribe — podcasterzy, dziennikarze, studenci, montażyści

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="Zastosowania EarScribe — darmowe audio na tekst dla podcasterów, dziennikarzy, studentów, badań użytkowników, napisów do wideo i transkrypcji audiobooków"></a>
</p>

### 6. EarScribe kontra Otter.ai, Rev, HappyScribe i lokalna instalacja Whisper

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="Porównanie EarScribe, Otter.ai, Rev i HappyScribe — darmowe audio na tekst bez limitów, z wnioskowaniem na urządzeniu i bez opłat za minutę"></a>
</p>

### 7. FAQ — prywatność, formaty, eksport napisów, praca offline

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="FAQ mowy na tekst za darmo — odpowiedzi o prywatność, MP3 i wideo na tekst, eksport napisów SRT i VTT, obsługiwane języki, pracę offline i Whispera w przeglądarce"></a>
</p>

---

## 🚀 Szybki start

1. Otwórz **[earscribe.app](https://earscribe.app)** w Chrome, Edge, Safari lub Firefoksie.
2. Wrzuć plik — albo wideo, albo naciśnij nagrywanie. Przyjmuje do 1 GiB na plik; prawdziwym limitem jest pamięć urządzenia, nie rozmiar na dysku.
3. Wybierz model. **base** jest domyślny i wystarcza do większości mowy; **tiny** jest do telefonu albo szybkiej notatki głosowej; **small** i **turbo** są do audio z akcentem, zaszumionego lub ważnego.
4. Naciśnij **Transkrybuj**. Audio jest dekodowane i przekazywane do Whispera w karcie. Przy pierwszym uruchomieniu pobierane są wagi, więc patrz na rozmiar na przycisku.
5. Przeczytaj transkrypcję, kliknij wiersz, żeby go odsłuchać, popraw to, co ważne, a potem **Eksport → SRT / VTT / TXT / JSON** albo skopiuj.

Wolisz partię? Przełącz na kolejkę, wrzuć dowolną liczbę plików i wybierz model raz. Kolejka przetwarza jeden plik naraz, używa ponownie modelu już w pamięci i zapisuje każdy wynik jako projekt.

> 💡 **Żaden krok konwersji nie jest potrzebny.** Dwugodzinny MP4 wchodzi od razu. Jeśli wolisz zachować samo audio, aplikacja wyodrębni ścieżkę audio z wideo.

---

## 🗂️ Obszar roboczy

`/dashboard` to ten sam silnik transkrypcji, tylko z pamięcią. Wszystko jest przechowywane w tej przeglądarce — IndexedDB dla rekordów projektów, CacheStorage dla wag modeli — i nic nie jest synchronizowane z kontem, bo konto nie istnieje.

| Sekcja | Co się tam znajduje |
|---|---|
| **Projekty** | Wszystko, od najnowszego. |
| **Transkrypcje** | Projekty utworzone przez transkrypcję. Edycja ich cue trzyma je tutaj. |
| **Napisy** | Projekty utworzone z pliku napisów — konwerter i importy — dzięki czemu praca nad napisami jest oddzielona od pracy nad mową. |
| **Pliki** | Media źródłowe, które obszar roboczy przechowuje, z filtrem po typie: transkrypcje, napisy, audio. Oryginalne audio **nie** jest domyślnie zapisywane. |
| **Kosz** | Usunięte projekty, do odzyskania, dopóki go nie opróżnisz. |

W projekcie możesz przeszukiwać transkrypcję, kliknąć znacznik czasu, żeby odsłuchać fragment, edytować cue napisów (tekst, punkty wejścia i wyjścia, dodawanie i usuwanie), dzielić długie cue na krótsze, eksportować ponownie w dowolnym formacie albo otworzyć odtwarzacz bez opuszczania strony.

**Kopia zapasowa:** obszar roboczy eksportuje się do jednego pliku (do 320 MB) i importuje w innej przeglądarce lub na innym komputerze. Ponieważ projekty nigdy nie opuszczają urządzenia, ten plik jest jedyną kopią, która podróżuje — traktuj go jak każdą inną kopię zapasową dokumentów.

---

## 💸 Ile to kosztuje

Za darmo nie znaczy bez ciężaru. To zmierzone rozmiary pobierania dla modelu i backendu, nie szacunki:

| Model | WebGPU | WebAssembly | Typowe użycie |
|---|---:|---:|---|
| **tiny** | 151 MB | 41 MB | Notatki głosowe, tanie telefony, pierwsza próba |
| **base** *(domyślny)* | 291 MB | 77 MB | Wywiady, spotkania, podcasty |
| **small** | 968 MB | 249 MB | Mowa z akcentem, hałaśliwe pomieszczenia |
| **turbo** | 3.24 GB | 1.09 GB | Transkrypcje na poziomie studia, gdy dokładność liczy się bardziej niż czas |

- **Pobierz raz, potem z pamięci podręcznej.** Wagi leżą w pamięci podręcznej przeglądarki; drugie uruchomienie nic nie pobiera. Inny profil przeglądarki oznacza ponowne pobranie.
- **GPU się opłaca.** Na tym samym komputerze WebGPU skończyło 40-minutowy plik z base w około 3.8 minuty wobec 9.4 na CPU — mniej więcej 2.5× szybciej, kosztem trzy do czterech razy większego pobierania. `turbo` na WebGPU nigdy nie dokończyło pobierania 3.24 GB w naszym teście, więc jest opisane jako niezmierzone, a nie szybkie.
- **Decyduje pamięć, nie rozmiar pliku.** Długie nagrania są dekodowane do 16 kHz mono przed transkrypcją. 40-minutowy MP3 potrzebuje kilkuset megabajtów; dwugodzinny stereo WAV potrafi wyczerpać kartę, zanim zacznie. Dekodowanie prosi teraz od razu o 16 kHz, co obniżyło pamięć szczytową przy dwugodzinnym pliku stereo z około 1.6 GB do 0.5 GB.
- **Bez serwera, bez kolejki na cudzej maszynie.** Czas należy do Twojego CPU, więc wolny laptop jest wolny. To cena za brak wysyłania plików.

Pełne pomiary, z metodą i nieudanymi próbami, są w [przewodnikach](https://earscribe.app/guides).

---

## 🆚 Porównanie

Jak EarScribe wypada wobec innych sposobów transkrypcji audio w 2026 roku?

| | **EarScribe** | Otter.ai Free | Rev Free Trial | HappyScribe | Local Whisper CLI |
|---|:---:|:---:|:---:|:---:|:---:|
| **Za darmo i bez limitów** | ✅ | ⚠️ 300 min/mies. | ❌ Tylko okres próbny | ❌ Płatne | ✅ |
| **Bez rejestracji / logowania** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Bez wysyłania (prywatnie)** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Wideo bez wysyłania** | ✅ Ekstrakcja lokalnie | ❌ Wymagane wysłanie | ❌ Wymagane wysłanie | ❌ Wymagane wysłanie | ✅ Wymaga ffmpeg |
| **Działa w przeglądarce** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Eksport SRT / VTT** | ✅ | ⚠️ Płatne | ✅ | ✅ | ⚠️ Ręcznie |
| **Transkrypcja ze znacznikami czasu** | ✅ | ✅ | ✅ | ✅ | ⚠️ Ręcznie |
| **Wnioskowanie lokalne** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **99 języków mówionych** | ✅ | ⚠️ Ograniczone | ⚠️ Ograniczone | ✅ | ✅ |
| **Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Wymagana instalacja** | ❌ Żadna | ❌ Żadna | ❌ Żadna | ❌ Żadna | ⚠️ Python + GPU |
| **Koszt** | $0 | $0–$30/mies. | $0.25/min | €0.20/min | $0 (Twój sprzęt) |

**Gdzie przegrywa:** lokalna instalacja może uruchomić większy model na szybszym backendzie niż karta przeglądarki, a płatna usługa dodaje etykiety mówców i przestrzeń roboczą dla zespołu. Atutem EarScribe jest to, że jest darmowy, niczego nie trzeba instalować, a audio nigdzie nie trafia.

→ **[Wypróbuj na earscribe.app](https://earscribe.app)**

---

## 🌍 Obsługiwane formaty i języki

### Audio — MP3, WAV, M4A, AAC, OGG, FLAC, Opus

Przyjmowane jest wszystko, co dekoduje Web Audio API; te siedem formatów pokrywa niemal każde nagranie, na jakie trafisz.

- 🎵 **[MP3 na tekst](https://earscribe.app/mp3-to-text)** — standard podcastów i wywiadów
- 🎙️ **[WAV na tekst](https://earscribe.app/wav-to-text)** — bezstratne nagrania studyjne i terenowe
- 📱 **[M4A na tekst](https://earscribe.app/m4a-to-text)** — Notatki głosowe iPhone'a
- 🎧 **[Notatka głosowa na tekst](https://earscribe.app/voice-memo-to-text)** — nagrania z telefonu na urządzeniu mobilnym
- 🔊 **[Audio na tekst](https://earscribe.app/audio-to-text)** — ogólny punkt wejścia
- 🎬 **[Audio na SRT](https://earscribe.app/audio-to-srt)** — prosto do napisów

### Wideo — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS

Ścieżka audio jest demuksowana przez [mediabunny](https://mediabunny.dev), dekodowana przez WebCodecs i ponownie kodowana jako mały mono MP3 16 kHz (albo WAV tam, gdzie nie ma enkodera MP3) — wszystko lokalnie. Kontener, którego przeglądarka nie potrafi zdekodować, kończy się czytelnym komunikatem, a nie cichą pustą transkrypcją.

### Mikrofon

Nagrywanie odbywa się w karcie przez MediaRecorder. Nagranie jest transkrybowane dokładnie tak samo jak wrzucony plik; napisy na żywo w trakcie nagrywania **nie** są dostępne (zobacz [czego nie robi](#-czego-nie-robi)).

### Języki — 99 mówionych, 27 interfejsu

Whisper sam rozpoznaje język mówiony: angielski, hiszpański, francuski, niemiecki, włoski, portugalski, rosyjski, japoński, koreański, chiński (uproszczony i tradycyjny), arabski, hindi, turecki, niderlandzki, polski, indonezyjski, szwedzki, norweski, duński, fiński, czeski, węgierski, grecki, hebrajski, tajski, wietnamski i 70+ innych.

Interfejs jest przetłumaczony na 27 locale. Angielski jest pod `/`, pozostałe 26 ma prefiks:

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

## 💼 Zastosowania

### 🎙️ Podcasterzy i twórcy
**[Transkrypcja podcastów](https://earscribe.app/podcast-transcription)** do opisów odcinków, SEO i dostępności. Eksportuj SRT do wersji wideo, TXT do bloga.

### 📰 Dziennikarze i badacze
**[Transkrypcja wywiadów](https://earscribe.app/interview-transcription)**, w której oryginalne nagranie zostaje na Twoim laptopie. Nie istnieje kopia u pośrednika, która mogłaby wyciec, trafić do sądu czy do audytu.

### 🎓 Studenci i wykładowcy
**[Transkrypcja wykładów](https://earscribe.app/audio-to-text)** z nagranych zajęć, przeszukiwalna przed następnym spotkaniem. Działa z Notatkami głosowymi iPhone'a i eksportami z Zoom.

### 📞 Spotkania i badania użytkowników
**[Nagranie spotkania na tekst](https://earscribe.app/meeting-recording-to-text)** — transkrypcja rozmowy, a nie automatycznie generowane notatki ze spotkania.

### 🎬 Montażyści wideo
**[Audio na SRT](https://earscribe.app/audio-to-srt)** do YouTube'a, Premiere, Final Cut i Resolve. Timing cue pochodzi ze znaczników czasu samego Whispera, a kontrola napisów oznacza to, co wyjedzie poza ekran.

### 📚 Audiobooki i długie nagrania
Pliki dwugodzinne są obsługiwane, ale to przypadek, w którym decyduje pamięć urządzenia. Przeczytaj [jak obsługiwane jest długie audio](https://earscribe.app/guides/how-to-transcribe-long-audio), zanim zaczniesz czterogodzinne.

---

## 🚧 Czego nie robi

Mówienie tego wprost oszczędza wszystkim zmarnowanego przebiegu:

- **Bez rozdzielania mówców.** Dwie osoby w jednym pliku dają płaski tekst bez etykiet „Speaker 1 / Speaker 2”. Strona o wywiadach mówi o tym celowo.
- **Bez tłumaczenia.** Transkrypcja zostaje w języku, w którym mówiono; język interfejsu i język mówiony nie mają ze sobą związku.
- **Bez napisów na żywo.** Nagrywanie i transkrypcja to osobne kroki — najpierw mikrofon nagrywa, potem plik jest transkrybowany.
- **Kolejka jest szeregowa i wymaga otwartej karty.** Jeden model i jedno ustawienie języka dla całej partii. Zamknięcie karty ją zatrzymuje.
- **Bez synchronizacji między urządzeniami.** Projekty żyją w tej przeglądarce. Do przenoszenia służy eksport obszaru roboczego.
- **To nie jest aplikacja offline.** Wagi są w pamięci podręcznej, ale sama strona ładuje się z sieci. Instalacja dodaje skrót na pulpicie lub ekranie głównym, a nie kopię offline.
- **1 GiB na plik to twardy limit; praktycznym jest pamięć.**

---

## ❓ FAQ

<details>
<summary><b>Czy EarScribe naprawdę jest darmowy i bez limitów?</b></summary><br/>
Tak — bez płatnego planu, bez karty kredytowej, bez opłat za minutę, bez dziennego czy miesięcznego limitu, bez konta. Obliczenia wykonuje Twój sprzęt, więc nie ma rachunku za chmurę do przerzucenia. Jest limit 1 GiB na plik, a o tym, co faktycznie się udaje, decyduje pamięć urządzenia.
</details>

<details>
<summary><b>Czy moje audio jest gdzieś wysyłane?</b></summary><br/>
Nie. Audio jest dekodowane w karcie i przekazywane do modelu Whisper działającego w Web Workerze. Wagi modelu są pobierane <i>do</i> Twojej przeglądarki z CDN, co oznacza, że CDN widzi Twój adres IP — ale nagranie nie jest wysyłane. Strony publiczne zawierają Google AdSense — poza stronami w języku perskim, które wyklucza polityka AdSense — oraz bezciasteczkową analitykę Plausible; <code>/dashboard</code> nie ładuje kodu reklamowego.
</details>

<details>
<summary><b>Czy mogę transkrybować wideo?</b></summary><br/>
Tak, bezpośrednio — MP4, MOV, MKV, WebM, M4V, TS, QT i M2TS. Ścieżka audio jest wyodrębniana wewnątrz przeglądarki i transkrybowana jak zwykły plik, więc nie potrzebujesz ffmpeg ani strony z konwerterem. Jeśli kontener używa kodeka, którego przeglądarka nie potrafi zdekodować, aplikacja to komunikuje, zamiast zwracać pustą transkrypcję.
</details>

<details>
<summary><b>Dlaczego pierwsze uruchomienie jest wolne?</b></summary><br/>
Przy pierwszym użyciu modelu przeglądarka pobiera jego wagi — od 41 MB dla tiny na WebAssembly do 3.24 GB dla turbo na WebGPU. Potem są w pamięci podręcznej. Do prawie wszystkiego wybierz <b>base</b> (77 MB na WebAssembly, 291 MB na WebGPU).
</details>

<details>
<summary><b>Jak dokładny jest wynik i który model wybrać?</b></summary><br/>
Na tym samym 34-sekundowym klipie nasze cztery modele różniły się w 26 z 111 słów, a ten sam model w dwóch rozmiarach pobierania różnił się sam od siebie. Wybieraj po słowach, na których Ci zależy, a nie po procentowej dokładności: <a href="https://earscribe.app/guides/which-whisper-model-should-i-use">przewodnik po modelach</a> pokazuje rzeczywiste różnice.
</details>

<details>
<summary><b>Czy dostanę napisy SRT lub VTT?</b></summary><br/>
Tak: Eksport → SRT lub VTT. Timing pochodzi z granic segmentów Whispera, a nie z późniejszego dzielenia tekstu. Kontrola napisów oznacza cue zbyt długie, zbyt szybkie, powtórzone, puste lub nachodzące na siebie, a tekst i timing cue możesz poprawić przed eksportem.
</details>

<details>
<summary><b>Co, jeśli mam już plik SRT lub VTT?</b></summary><br/>
Skonwertuj go bez pobierania modelu: <a href="https://earscribe.app/srt-to-vtt">SRT na VTT</a> i <a href="https://earscribe.app/srt-to-txt">SRT na tekst</a> parsują plik lokalnie. Nic nie jest wysyłane i żadne wagi Whispera nie są pobierane.
</details>

<details>
<summary><b>Czy działa offline?</b></summary><br/>
Krok transkrypcji tak: po wczytaniu strony i modelu audio jest przetwarzane bez kontaktowania się z serwerem transkrypcji. Aplikacja nie jest pakietem offline — otwarcie jej wymaga sieci, a model, którego nigdy nie pobrano, trzeba pobrać. Instalacja ze stopki dodaje skrót, który otwiera obszar roboczy; nie dodaje kopii offline.
</details>

<details>
<summary><b>Czy oznacza, kto mówi?</b></summary><br/>
Nie. Wynik to płaski tekst ze znacznikami czasu. Diaryzacja mówców nie jest częścią tego builda i aplikacja nie udaje inaczej.
</details>

<details>
<summary><b>Gdzie są przechowywane moje wyniki?</b></summary><br/>
W tej przeglądarce: projekty w IndexedDB, wagi modeli w CacheStorage. Oryginalne audio nie jest zapisywane razem z projektem, chyba że je zachowasz. Strona, której nigdy nie zapisano w obszarze roboczym, po odświeżeniu startuje od zera; używaj <code>/dashboard</code> i jego eksportu, żeby zachować to, na czym Ci zależy.
</details>

<details>
<summary><b>Czy istnieje darmowa alternatywa dla Otter.ai lub Rev?</b></summary><br/>
EarScribe jest darmową alternatywą dla usług transkrypcji w chmurze: obliczenia wykonujesz sam, audio zostaje na miejscu i nie ma opłat za minutę. Kompromis jest realny — bez etykiet mówców, bez przestrzeni roboczej dla zespołu, a długie pliki ogranicza Twój komputer.
</details>

<details>
<summary><b>Jak za darmo zamienić MP3 na tekst?</b></summary><br/>
Wrzuć MP3 na <a href="https://earscribe.app/mp3-to-text">earscribe.app/mp3-to-text</a> (albo na stronę główną). Plik jest dekodowany w przeglądarce, transkrybowany lokalnie, a wynik możesz skopiować albo wyeksportować jako SRT, VTT, TXT lub JSON.
</details>

> Więcej odpowiedzi na **[stronie O nas](https://earscribe.app/about)**, a notatki z pomiarów w **[przewodnikach](https://earscribe.app/guides)**.

---

## 🛠️ Stack technologiczny

- **[Next.js 15](https://nextjs.org)** (App Router) + **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web, WebGPU z fallbackiem na WebAssembly
- **[OpenAI Whisper](https://github.com/openai/whisper)** — tiny, base, small i large-v3-turbo, skwantyzowane do ONNX
- **[mediabunny](https://mediabunny.dev)** + **WebCodecs** — demuksowanie wideo i ekstrakcja audio w karcie
- **[next-intl](https://next-intl.dev)** — 27 locale, jeden katalog komunikatów na język
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Cloudflare Pages](https://pages.cloudflare.com)** do hostingu, z kilkoma Pages Functions (host modeli, endpoint opinii)

Strona jest renderowana statycznie i hydratowana w przeglądarce; transkrypcja i konwersja napisów działają wyłącznie po stronie klienta. Wagi modeli pochodzą z CDN Hugging Face przy pierwszym użyciu i są cachowane w CacheStorage.

---

## 🧑‍💻 Praca lokalna

```bash
git clone https://github.com/rocnubie/earscribe-free-speech-to-text.git
cd earscribe-free-speech-to-text
pnpm install
pnpm dev
# → http://localhost:3000
```

Kontrole uruchamiane przed wdrożeniem:

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

`pnpm build` tworzy statyczny eksport w `out/`. Kilka audytów czyta `out/`, więc najpierw uruchom build.

---

## ☁️ Wdrożenie

Wdrożenia produkcyjne idą jednym poleceniem, które po kolei uruchamia wszystkie kontrole:

```bash
pnpm pages:deploy
```

Najpierw porównuje lokalny znacznik wdrożenia (`deployId` w `lib/release.ts`) z tym serwowanym pod `/changelog` na stronie live i odmawia kontynuacji, jeśli są identyczne — tak wyłapuje się nieaktualny build. Potem buduje, uruchamia audyty linków, przewodników, `llms.txt`, i18n, sitemapy i PWA, i publikuje `out/` na Cloudflare Pages.

`/changelog` to lista zmian dla czytelnika, z którą można coś zrobić. To nie jest log builda: wewnętrzne refaktory, poprawki copy i praca tłumaczeniowa dostają nowy `deployId`, ale bez wpisu w changelogu.

Środowisko i bindingi:

| Nazwa | Do czego służy |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Adresy kanoniczne, sitemapa, tagi OG |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Identyfikator witryny w Plausible |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | Adres skryptu Plausible |
| `FEEDBACK_DB` (binding D1) | Endpoint `/feedback`; schemat w `migrations/` |

---

## 🌐 Dodanie nowego języka

1. Dopisz kod locale do `ALL_LOCALE_NAMES` w [`i18n/locale.ts`](i18n/locale.ts).
2. Dodaj `messages/<code>.json` obok `en.json`, w pełni przetłumaczony.
3. Uruchom `pnpm i18n:gate` — routing, sitemapa, hreflang i metadane OG podchwycą locale automatycznie, ale brakujący klucz wywali gate.

W `translatedLocales` należą tylko locale, które przechodzą gate; przełącznik języka oznacza wszystkie pozostałe jako częściowe.

---

## 🔬 Dodanie nowego modelu Whisper

Dopisz wpis do `MODELS` w [`lib/models.ts`](lib/models.ts) ze **zmierzonym** `sizeMB` dla `wasm` i dla `webgpu` — te dwa backendy dostarczają różne pliki wag, a podanie jednej liczby dla obu to sposób, w jaki aplikacja kiedyś obiecywała 500 MB i dostarczała 968 MB. Repozytorium musi istnieć na Hugging Face jako `onnx-community/<name>` albo być zgodne z ONNX-Whisper. Dodaj pasujący blok `models.<id>` do każdego `messages/*.json` na tekst o zaletach i wadach.

---

## 🤝 Współtworzenie

Pull requesty są mile widziane — zwłaszcza:

- Tłumaczenia (`messages/<code>.json`) i poprawki w README dla konkretnych locale
- Zgłoszenia błędów z plikiem, który zawiódł, przeglądarką i pamięcią urządzenia
- Pomiary: rozmiar modelu, czas i pamięć szczytowa na sprzęcie, którego nie mamy
- Poprawki dostępności

Otwórz issue albo PR tutaj, a najlepiej najpierw wypróbuj **[earscribe.app](https://earscribe.app)**, żeby zobaczyć, w czym miałbyś uczestniczyć.

---

## 📄 Licencja

Strona marketingowa i strony w tym repozytorium są na licencji [MIT](LICENSE): darmowe do użytku prywatnego i komercyjnego. Worker transkrypcji, dekoder audio i eksportery napisów nie są tu publikowane, więc to repozytorium nie jest kompletną, samodzielnie hostowalną kopią usługi.

---

<p align="center">
  <b>👉 Wypróbuj działającą aplikację: <a href="https://earscribe.app">earscribe.app</a></b><br/>
  <sub>Audio na tekst · Wideo na tekst · Mowa na tekst · Eksport napisów · 100% za darmo · Bez rejestracji · Na urządzeniu</sub>
</p>

<p align="center">
  Zbudowane z ❤️ na <a href="https://github.com/openai/whisper">OpenAI Whisper</a>, <a href="https://huggingface.co/docs/transformers.js">Transformers.js</a>, <a href="https://onnxruntime.ai">ONNX Runtime Web</a> i <a href="https://mediabunny.dev">mediabunny</a>.
</p>
