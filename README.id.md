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

<h1 align="center">EarScribe — Audio & Video ke Teks Gratis di Browser Anda</h1>

<p align="center">
  <b>Jatuhkan berkas audio, video, atau rekam dari mikrofon. Dapatkan transkrip berstempel waktu dan subtitel.</b><br/>
  <sub>Whisper berjalan di perangkat Anda sendiri melalui WebGPU atau WebAssembly — rekamannya tidak pernah diunggah.</sub>
</p>

<p align="center">
  <a href="https://earscribe.app"><img alt="Aplikasi langsung" src="https://img.shields.io/badge/Live-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Gratis" src="https://img.shields.io/badge/100%25-Free-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Tanpa pendaftaran" src="https://img.shields.io/badge/No-Sign--up-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Di perangkat, privat" src="https://img.shields.io/badge/On--device-Private-0f172a?style=for-the-badge"></a>
  <img alt="Lisensi MIT" src="https://img.shields.io/badge/License-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe — audio dan video ke teks gratis di browser. Jatuhkan MP3, WAV, M4A, atau MP4 dan dapatkan transkrip berstempel waktu tanpa mengunggah apa pun."></a>
</p>

<p align="center">
  <b>🔗 Buka aplikasinya:</b> <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/guides">Panduan</a> ·
  <a href="https://earscribe.app/changelog">Catatan perubahan</a> ·
  <a href="https://earscribe.app/about">Tentang</a>
</p>

---

## 🎙️ Apa itu EarScribe

Ruang kerja transkripsi yang berjalan sepenuhnya di dalam tab browser. Anda memberinya audio, berkas video, atau mikrofon; ia mengembalikan teks berstempel waktu yang bisa Anda klik untuk memutar ulang, ditambah berkas subtitel yang bisa langsung diserahkan ke editor. Tidak ada akun, tidak ada unggahan, dan tidak ada tagihan per menit.

Tiga pintu masuk, satu alur kerja:

- **Berkas** — MP3, WAV, M4A, AAC, OGG, FLAC, Opus, atau hampir semua yang bisa didekode Web Audio API, hingga 1 GiB.
- **Video** — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS. Trek audionya dipisahkan dan dikodekan ulang menjadi mono 16 kHz **di dalam tab**, lalu ditranskripsi seperti berkas biasa. Tanpa ffmpeg, tanpa situs konverter.
- **Mikrofon** — rekam dan transkripsi di tempat yang sama, untuk kuliah, panggilan yang boleh Anda rekam, atau memo suara yang kalau tidak direkam akan hilang.

Tambahkan antrean dan Anda bisa menjatuhkan satu folder penuh berkas lalu meninggalkannya; tambahkan ruang kerja di `/dashboard` dan hasilnya menjadi proyek yang bisa dibuka lagi, diedit, dan diekspor nanti.

> 👉 **Aplikasi langsung:** **[earscribe.app](https://earscribe.app)**

---

## 📚 Daftar Isi

- [✨ Yang bisa dilakukan](#-yang-bisa-dilakukan)
- [🖼️ Tangkapan Layar](#️-tangkapan-layar)
- [🚀 Mulai cepat](#-mulai-cepat)
- [🗂️ Ruang kerja](#️-ruang-kerja)
- [💸 Berapa biayanya](#-berapa-biayanya)
- [🆚 Perbandingan](#-perbandingan)
- [🌍 Input & bahasa yang didukung](#-input--bahasa-yang-didukung)
- [💼 Kasus penggunaan](#-kasus-penggunaan)
- [🚧 Yang tidak dilakukannya](#-yang-tidak-dilakukannya)
- [❓ FAQ](#-faq)
- [🛠️ Tumpukan teknologi](#️-tumpukan-teknologi)
- [🧑‍💻 Pengembangan lokal](#-pengembangan-lokal)
- [☁️ Deploy](#️-deploy)
- [🌐 Menambahkan bahasa baru](#-menambahkan-bahasa-baru)
- [🔬 Menambahkan model Whisper baru](#-menambahkan-model-whisper-baru)
- [🤝 Berkontribusi](#-berkontribusi)
- [📄 Lisensi](#-lisensi)

---

## ✨ Yang bisa dilakukan

| | Kemampuan | Yang sebenarnya Anda dapatkan |
|---|---|---|
| 🎬 | **Audio, video, dan mikrofon** | Wadah video diterima langsung. Trek audionya diekstrak secara lokal, jadi MP4 berukuran 200 MB pun tidak pernah meninggalkan mesin Anda. |
| 📝 | **Transkrip berstempel waktu** | Setiap baris punya waktu mulai dan selesai. Klik satu baris untuk mendengar momen itu; penggeser bentuk gelombang ikut bergerak. |
| 🔍 | **Pencarian di dalam transkrip** | Sebuah nama, angka, atau istilah — langsung lompat ke kalimatnya dan putar ulang, bukan mendengarkan ulang seluruh berkas. |
| 🎞️ | **Ekspor subtitel** | SRT, WebVTT, teks biasa, JSON (objek transkrip dengan kode waktu presisi penuh), atau papan klip. |
| 🧪 | **Pemeriksaan subtitel** | Menandai baris yang terlalu panjang, terlalu cepat, berulang, kosong, atau bertumpuk sebelum Anda mengekspornya. |
| 📚 | **Antrean batch** | Jatuhkan beberapa berkas, tetapkan satu model dan satu bahasa lisan, lalu biarkan antrean memprosesnya berurutan. Anda bisa berhenti setelah berkas yang sedang berjalan kapan saja. |
| 🗂️ | **Proyek** | Hasil disimpan di browser sebagai proyek di bawah `/dashboard`: transkrip, subtitel, berkas sumber, dan folder sampah, semuanya bisa dibuka lagi nanti. |
| ✏️ | **Penyuntingan subtitel** | Perbaiki teksnya, geser titik masuk/keluar baris, pisahkan atau hapus baris, lalu ekspor lagi. |
| 💾 | **Pencadangan dan pemulihan** | Ekspor seluruh ruang kerja sebagai satu berkas dan impor di browser lain. |
| 🔁 | **Konversi subtitel** | SRT ⇄ VTT dan SRT → teks, di dalam browser, tanpa unduhan model — satu-satunya alat di sini yang langsung siap dipakai. |
| 🆓 | **Gratis dan tanpa batas** | Tanpa tingkatan berbayar, tanpa kuota harian, tanpa biaya per menit, tanpa akun. |
| 🔒 | **Privat secara arsitektur** | Transkripsi berjalan secara lokal. Halaman publik memuat analitik dan iklan; `/dashboard` bebas iklan. |
| 🌍 | **27 bahasa antarmuka, 99 bahasa lisan** | Antarmukanya diterjemahkan ke 27 lokal; Whisper mendeteksi bahasa lisan secara otomatis. |

---

## 🖼️ Tangkapan Layar

> Tangkapan layar asli dari situs langsung di **[earscribe.app](https://earscribe.app)**.

### 1. Jatuhkan berkas, video, atau rekam — tanpa pendaftaran, tanpa unggahan

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="Konverter audio dan video ke teks gratis — jatuhkan MP3, WAV, M4A, MP4, MOV, atau MKV di browser. Tanpa pendaftaran, tanpa login."></a>
</p>

### 2. Transkrip berstempel waktu dengan bentuk gelombang — klik baris mana pun untuk melompat

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="Keluaran transkrip EarScribe — audio ke teks berstempel waktu dengan penggeser bentuk gelombang dan ekspor subtitel SRT serta VTT sekali klik"></a>
</p>

### 3. Tiga langkah: jatuhkan → pilih model Whisper → ekspor

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="Cara kerja audio ke teks gratis di EarScribe — jatuhkan audio atau video, pilih model Whisper (tiny, base, small, atau turbo), baca dan ekspor transkripnya"></a>
</p>

### 4. Mengapa EarScribe — Whisper native browser yang mengutamakan privasi

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/04-features.webp" alt="Fitur EarScribe — privat tanpa unggahan, WebGPU plus WASM, 99 bahasa lisan terdeteksi otomatis, ekspor SRT VTT JSON TXT, inferensi di perangkat"></a>
</p>

### 5. Siapa yang memakai EarScribe — podcaster, jurnalis, mahasiswa, editor

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="Kasus penggunaan EarScribe — audio ke teks gratis untuk podcaster, jurnalis, mahasiswa, riset pengguna, subtitel video, dan transkripsi buku audio"></a>
</p>

### 6. EarScribe vs Otter.ai, Rev, HappyScribe, dan instalasi Whisper lokal

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="Perbandingan EarScribe vs Otter.ai vs Rev vs HappyScribe — audio ke teks gratis tanpa batas dengan inferensi di perangkat dan tanpa biaya per menit"></a>
</p>

### 7. FAQ — privasi, format, ekspor subtitel, penggunaan offline

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="FAQ ucapan ke teks gratis — jawaban tentang privasi, MP3 dan video ke teks, ekspor subtitel SRT dan VTT, bahasa yang didukung, penggunaan offline, dan Whisper di browser"></a>
</p>

---

## 🚀 Mulai cepat

1. Buka **[earscribe.app](https://earscribe.app)** di Chrome, Edge, Safari, atau Firefox.
2. Jatuhkan sebuah berkas — atau video, atau tekan rekam. Menerima hingga 1 GiB per berkas; batas sebenarnya adalah memori perangkat Anda, bukan ukuran di disk.
3. Pilih model. **base** adalah bawaan dan cocok untuk sebagian besar ucapan; **tiny** untuk ponsel atau memo suara singkat; **small** dan **turbo** untuk audio beraksen, bising, atau penting.
4. Tekan **Transkripsi**. Audio didekode dan dimasukkan ke Whisper di dalam tab. Proses pertama mengunduh bobotnya, jadi perhatikan ukuran pada tombol.
5. Baca transkripnya, klik satu baris untuk memutar ulang, perbaiki yang penting, lalu **Ekspor → SRT / VTT / TXT / JSON** atau salin.

Ingin memproses batch? Beralihlah ke antrean, jatuhkan berkas sebanyak yang Anda mau, dan pilih modelnya sekali saja. Antrean memproses satu berkas setiap kali, memakai ulang model yang sudah ada di memori, dan menyimpan setiap hasil sebagai proyek.

> 💡 **Tidak perlu langkah konversi.** MP4 berdurasi dua jam bisa langsung dimasukkan. Kalau Anda hanya ingin menyimpan audionya, aplikasi ini bisa mengekstrak trek audio video untuk Anda.

---

## 🗂️ Ruang kerja

`/dashboard` adalah mesin transkripsi yang sama, tetapi dengan ingatan. Semua disimpan di browser ini — IndexedDB untuk catatan proyek, CacheStorage untuk bobot model — dan tidak ada yang disinkronkan ke akun, karena akunnya memang tidak ada.

| Bagian | Isinya |
|---|---|
| **Proyek** | Semuanya, yang terbaru di atas. |
| **Transkrip** | Proyek yang dibuat oleh satu proses transkripsi. Menyunting barisnya tetap menyimpannya di sini. |
| **Subtitel** | Proyek yang dibuat dari berkas subtitel — konverter dan impor — sehingga pekerjaan subtitel terpisah dari pekerjaan ucapan. |
| **Berkas** | Media sumber yang disimpan ruang kerja, bisa disaring menurut jenis: transkrip, subtitel, audio. Audio aslinya **tidak** disimpan secara bawaan. |
| **Sampah** | Proyek yang dihapus, masih bisa dipulihkan sampai Anda mengosongkannya. |

Di dalam proyek Anda bisa mencari di dalam transkrip, mengklik stempel waktu untuk memutar ulang, menyunting baris subtitel (teks, titik masuk/keluar, tambah atau hapus), membagi baris yang terlalu panjang menjadi lebih pendek, mengekspor ulang dalam format apa pun, atau membuka pemutar media tanpa meninggalkan halaman.

**Pencadangan:** ruang kerja diekspor sebagai satu berkas (hingga 320 MB) dan diimpor di browser atau mesin lain. Karena proyek tidak pernah meninggalkan perangkat, berkas inilah satu-satunya salinan yang berpindah — perlakukan seperti cadangan dokumen lain pada umumnya.

---

## 💸 Berapa biayanya

Gratis bukan berarti tanpa beban. Berikut ukuran unduhan terukur per model dan per backend, bukan perkiraan:

| Model | WebGPU | WebAssembly | Penggunaan umum |
|---|---:|---:|---|
| **tiny** | 151 MB | 41 MB | Memo suara, ponsel kelas bawah, percobaan pertama |
| **base** *(bawaan)* | 291 MB | 77 MB | Wawancara, rapat, podcast |
| **small** | 968 MB | 249 MB | Ucapan beraksen, ruangan bising |
| **turbo** | 3.24 GB | 1.09 GB | Transkrip kelas studio, saat akurasi lebih penting daripada waktu |

- **Unduh sekali, setelah itu di-cache.** Bobot disimpan di cache browser; proses kedua tidak mengunduh apa pun. Profil browser berbeda berarti mengunduh ulang.
- **GPU sepadan.** Di mesin yang sama, WebGPU menyelesaikan berkas 40 menit dengan base dalam sekitar 3.8 menit, sedangkan CPU 9.4 menit — kira-kira 2.5× lebih cepat, dengan unduhan tiga sampai empat kali lebih besar. `turbo` di WebGPU bahkan tidak menyelesaikan unduhan 3.24 GB dalam pengujian kami, jadi ia dicatat sebagai belum terukur, bukan cepat.
- **Memori yang menentukan, bukan ukuran berkas.** Rekaman panjang didekode ke mono 16 kHz sebelum ditranskripsi. MP3 40 menit butuh beberapa ratus MB; WAV stereo dua jam bisa menghabiskan tab bahkan sebelum mulai. Dekode sekarang meminta 16 kHz secara langsung, yang menurunkan memori puncak pada berkas stereo dua jam dari sekitar 1.6 GB menjadi 0.5 GB.
- **Tanpa server, tanpa antrean di mesin orang lain.** Waktunya milik CPU Anda, jadi laptop lambat akan tetap lambat. Itulah harga yang dibayar karena tidak mengunggah.

Pengukuran lengkap, metodenya, dan proses yang gagal ada di [panduan](https://earscribe.app/guides).

---

## 🆚 Perbandingan

Bagaimana EarScribe dibandingkan dengan cara lain mentranskripsi audio pada 2026?

| | **EarScribe** | Otter.ai Gratis | Uji Coba Rev | HappyScribe | Whisper CLI Lokal |
|---|:---:|:---:|:---:|:---:|:---:|
| **Gratis & tanpa batas** | ✅ | ⚠️ 300 menit/bulan | ❌ Hanya uji coba | ❌ Berbayar | ✅ |
| **Tanpa pendaftaran / login** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Tanpa unggahan (privat)** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Video tanpa mengunggah** | ✅ Diekstrak lokal | ❌ Wajib unggah | ❌ Wajib unggah | ❌ Wajib unggah | ✅ Butuh ffmpeg |
| **Berjalan di browser** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Ekspor SRT / VTT** | ✅ | ⚠️ Berbayar | ✅ | ✅ | ⚠️ Manual |
| **Transkrip berstempel waktu** | ✅ | ✅ | ✅ | ✅ | ⚠️ Manual |
| **Inferensi lokal** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **99 bahasa lisan** | ✅ | ⚠️ Terbatas | ⚠️ Terbatas | ✅ | ✅ |
| **Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Perlu instalasi** | ❌ Tidak ada | ❌ Tidak ada | ❌ Tidak ada | ❌ Tidak ada | ⚠️ Python + GPU |
| **Biaya** | $0 | $0–$30/bulan | $0.25/menit | €0.20/menit | $0 (perangkat Anda) |

**Di mana ia kalah:** instalasi lokal bisa menjalankan model yang lebih besar di backend yang lebih cepat daripada tab browser, dan layanan berbayar menambahkan label pembicara serta ruang kerja tim. Keunggulan EarScribe adalah gratis, tidak perlu memasang apa pun, dan audionya tidak ke mana-mana.

→ **[Coba di earscribe.app](https://earscribe.app)**

---

## 🌍 Input & bahasa yang didukung

### Audio — MP3, WAV, M4A, AAC, OGG, FLAC, Opus

Apa pun yang bisa didekode Web Audio API diterima; tujuh format di atas mencakup hampir semua rekaman yang akan Anda temui.

- 🎵 **[MP3 ke teks](https://earscribe.app/mp3-to-text)** — standar podcast dan wawancara
- 🎙️ **[WAV ke teks](https://earscribe.app/wav-to-text)** — rekaman studio dan lapangan tanpa kompresi
- 📱 **[M4A ke teks](https://earscribe.app/m4a-to-text)** — Memo Suara iPhone
- 🎧 **[Memo suara ke teks](https://earscribe.app/voice-memo-to-text)** — rekaman ponsel di perangkat seluler
- 🔊 **[Audio ke teks](https://earscribe.app/audio-to-text)** — pintu masuk umum
- 🎬 **[Audio ke SRT](https://earscribe.app/audio-to-srt)** — langsung menjadi subtitel

### Video — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS

Trek audio dipisahkan dengan [mediabunny](https://mediabunny.dev), didekode dengan WebCodecs, lalu dikodekan ulang menjadi MP3 mono 16 kHz berukuran kecil (atau WAV bila tidak ada encoder MP3) — semuanya secara lokal. Wadah yang tidak bisa didekode browser akan gagal dengan pesan yang jelas, bukan menghasilkan transkrip kosong tanpa pemberitahuan.

### Mikrofon

Perekaman berlangsung di tab dengan MediaRecorder. Rekaman ditranskripsi persis seperti berkas yang dijatuhkan; subtitel langsung saat merekam **tidak** disediakan (lihat [yang tidak dilakukannya](#-yang-tidak-dilakukannya)).

### Bahasa — 99 lisan, 27 antarmuka

Whisper mendeteksi bahasa lisan secara otomatis: Inggris, Spanyol, Prancis, Jerman, Italia, Portugis, Rusia, Jepang, Korea, Mandarin (Sederhana dan Tradisional), Arab, Hindi, Turki, Belanda, Polandia, Indonesia, Swedia, Norwegia, Denmark, Finlandia, Ceko, Hungaria, Yunani, Ibrani, Thai, Vietnam, dan 70+ lainnya.

Antarmukanya diterjemahkan ke 27 lokal. Bahasa Inggris berada di `/`, 26 lainnya memakai prefiks:

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

## 💼 Kasus penggunaan

### 🎙️ Podcaster & kreator
**[Transkripsi podcast](https://earscribe.app/podcast-transcription)** untuk catatan acara, SEO episode, dan aksesibilitas. Ekspor SRT untuk versi video, TXT untuk blog.

### 📰 Jurnalis & peneliti
**[Transkripsi wawancara](https://earscribe.app/interview-transcription)** yang rekaman sumbernya tetap di laptop Anda. Tidak ada salinan pihak ketiga yang bisa bocor, disita, atau diaudit.

### 🎓 Mahasiswa & dosen
**[Transkripsi kuliah](https://earscribe.app/audio-to-text)** dari kelas yang direkam, bisa dicari sebelum sesi berikutnya. Bekerja dengan Memo Suara iPhone dan ekspor Zoom.

### 📞 Rapat & riset pengguna
**[Rekaman rapat ke teks](https://earscribe.app/meeting-recording-to-text)** — transkrip panggilannya, bukan catatan rapat yang dibuat otomatis.

### 🎬 Editor video
**[Audio ke SRT](https://earscribe.app/audio-to-srt)** untuk YouTube, Premiere, Final Cut, dan Resolve. Waktu baris diambil dari stempel waktu Whisper sendiri, dan pemeriksaan subtitel menandai apa yang akan meluap di layar.

### 📚 Buku audio & rekaman panjang
Berkas dua jam didukung, tetapi justru di sinilah memori perangkat menentukan. Baca [cara audio panjang ditangani](https://earscribe.app/guides/how-to-transcribe-long-audio) sebelum memulai berkas empat jam.

---

## 🚧 Yang tidak dilakukannya

Menjadi jelas di sini menghemat satu percobaan sia-sia untuk semua orang:

- **Tanpa pemisahan pembicara.** Dua orang dalam satu berkas menghasilkan teks datar tanpa label "Pembicara 1 / Pembicara 2". Halaman wawancara menyatakannya dengan sengaja.
- **Tanpa terjemahan.** Transkrip tetap dalam bahasa yang diucapkan; bahasa antarmuka dan bahasa lisan tidak saling berkaitan.
- **Tanpa subtitel langsung.** Perekaman dan transkripsi adalah dua langkah terpisah — mikrofon merekam dulu, baru berkasnya ditranskripsi.
- **Antrean bersifat serial dan butuh tab tetap terbuka.** Satu model, satu pengaturan bahasa untuk seluruh batch. Menutup tab menghentikannya.
- **Tanpa sinkronisasi antarperangkat.** Proyek tinggal di browser ini. Gunakan ekspor ruang kerja untuk memindahkannya.
- **Bukan aplikasi offline.** Bobot di-cache, tetapi halamannya sendiri dimuat dari jaringan. Memasangnya hanya menambahkan pintasan desktop atau layar utama, bukan salinan offline.
- **1 GiB per berkas adalah batas keras; memori adalah batas praktisnya.**

---

## ❓ FAQ

<details>
<summary><b>Apakah EarScribe benar-benar gratis, tanpa batas?</b></summary><br/>
Ya — tanpa tingkatan berbayar, tanpa kartu kredit, tanpa biaya per menit, tanpa kuota harian atau bulanan, tanpa akun. Komputasinya berjalan di perangkat Anda sendiri, jadi tidak ada tagihan cloud yang harus diteruskan. Ada batas 1 GiB per berkas, dan memori perangkat Anda yang menentukan apa yang benar-benar selesai.
</details>

<details>
<summary><b>Apakah audio saya diunggah ke suatu tempat?</b></summary><br/>
Tidak. Audio didekode di tab dan dimasukkan ke model Whisper yang berjalan di Web Worker. Bobot model diunduh <i>ke</i> browser Anda dari CDN, yang berarti CDN melihat alamat IP Anda — tetapi rekamannya tidak dikirim. Halaman publik memuat Google AdSense — kecuali halaman bahasa Persia, yang dikecualikan kebijakan AdSense — ditambah analitik Plausible tanpa cookie; <code>/dashboard</code> tidak memuat kode iklan.
</details>

<details>
<summary><b>Bisakah saya mentranskripsi video?</b></summary><br/>
Bisa, langsung — MP4, MOV, MKV, WebM, M4V, TS, QT, dan M2TS. Trek audio diekstrak di dalam browser dan ditranskripsi seperti berkas biasa, jadi Anda tidak perlu ffmpeg atau situs konverter. Jika wadahnya memakai codec yang tidak bisa didekode browser, aplikasi akan mengatakannya, bukan menghasilkan transkrip kosong.
</details>

<details>
<summary><b>Mengapa proses pertama lambat?</b></summary><br/>
Saat pertama kali memakai sebuah model, browser mengunduh bobotnya — 41 MB untuk tiny di WebAssembly hingga 3.24 GB untuk turbo di WebGPU. Setelah itu di-cache. Pilih <b>base</b> (77 MB di WebAssembly, 291 MB di WebGPU) untuk hampir semua kebutuhan.
</details>

<details>
<summary><b>Seberapa akurat, dan model mana yang harus saya pilih?</b></summary><br/>
Pada klip 34 detik yang sama, keempat model kami berbeda pada 26 dari 111 kata, dan model yang sama dengan dua ukuran unduhan pun berbeda dengan dirinya sendiri. Pilih berdasarkan kata yang penting bagi Anda, bukan berdasarkan persentase akurasi: <a href="https://earscribe.app/guides/which-whisper-model-should-i-use">panduan model</a> menunjukkan perbedaan sebenarnya.
</details>

<details>
<summary><b>Bisakah saya mendapatkan subtitel SRT atau VTT?</b></summary><br/>
Bisa: Ekspor → SRT atau VTT. Waktunya berasal dari batas segmen Whisper sendiri, bukan dari memotong teks setelahnya. Pemeriksaan subtitel menandai baris yang terlalu panjang, terlalu cepat, berulang, kosong, atau bertumpuk, dan Anda bisa menyunting teks serta waktu baris sebelum mengekspor.
</details>

<details>
<summary><b>Bagaimana kalau saya sudah punya berkas SRT atau VTT?</b></summary><br/>
Konversikan tanpa mengunduh model: <a href="https://earscribe.app/srt-to-vtt">SRT ke VTT</a> dan <a href="https://earscribe.app/srt-to-txt">SRT ke teks</a> mengurai berkasnya secara lokal. Tidak ada yang diunggah dan tidak ada bobot Whisper yang diambil.
</details>

<details>
<summary><b>Apakah bisa dipakai offline?</b></summary><br/>
Langkah transkripsinya bisa: setelah halaman dan model dimuat, audio diproses tanpa menghubungi server transkripsi. Aplikasinya bukan paket offline — membukanya butuh jaringan, dan model yang belum pernah Anda unduh harus diambil dulu. Memasangnya dari bagian footer hanya menambahkan pintasan yang langsung membuka ruang kerja; itu tidak menambahkan salinan offline.
</details>

<details>
<summary><b>Apakah ia memberi label siapa yang berbicara?</b></summary><br/>
Tidak. Keluarannya adalah teks datar dengan kode waktu. Diarisasi pembicara bukan bagian dari versi ini, dan aplikasinya tidak berpura-pura sebaliknya.
</details>

<details>
<summary><b>Di mana hasil saya disimpan?</b></summary><br/>
Di browser ini: proyek di IndexedDB, bobot model di CacheStorage. Audio asli tidak disimpan bersama proyek kecuali Anda menyimpannya. Halaman yang belum pernah disimpan ke ruang kerja akan kembali kosong saat dimuat ulang; gunakan <code>/dashboard</code> dan ekspornya untuk menyimpan apa pun yang penting bagi Anda.
</details>

<details>
<summary><b>Apakah ada alternatif gratis untuk Otter.ai atau Rev?</b></summary><br/>
EarScribe adalah alternatif gratis untuk layanan transkripsi cloud: komputasinya Anda yang lakukan, audionya tetap di tempatnya, dan tidak ada biaya per menit. Komprominya nyata — tanpa label pembicara, tanpa ruang kerja tim, dan berkas panjang dibatasi oleh mesin Anda.
</details>

<details>
<summary><b>Bagaimana cara mengubah MP3 menjadi teks secara gratis?</b></summary><br/>
Jatuhkan MP3-nya ke <a href="https://earscribe.app/mp3-to-text">earscribe.app/mp3-to-text</a> (atau halaman depan). Berkasnya didekode di browser Anda, ditranskripsi secara lokal, dan bisa disalin atau diekspor sebagai SRT, VTT, TXT, atau JSON.
</details>

> Jawaban lainnya ada di **[halaman Tentang](https://earscribe.app/about)**, dan catatan pengukuran di **[panduan](https://earscribe.app/guides)**.

---

## 🛠️ Tumpukan teknologi

- **[Next.js 15](https://nextjs.org)** (App Router) + **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web, WebGPU dengan cadangan WebAssembly
- **[OpenAI Whisper](https://github.com/openai/whisper)** — tiny, base, small, dan large-v3-turbo, terkuantisasi ONNX
- **[mediabunny](https://mediabunny.dev)** + **WebCodecs** — pemisahan video dan ekstraksi audio di dalam tab
- **[next-intl](https://next-intl.dev)** — 27 lokal, satu katalog pesan per bahasa
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Cloudflare Pages](https://pages.cloudflare.com)** untuk hosting, dengan beberapa Pages Functions (host model, endpoint umpan balik)

Situsnya dirender secara statis dan dihidrasi di browser; transkripsi dan konversi subtitel sepenuhnya di sisi klien. Bobot model diambil dari CDN Hugging Face saat pertama dipakai dan di-cache di CacheStorage.

---

## 🧑‍💻 Pengembangan lokal

```bash
git clone https://github.com/rocnubie/earscribe-free-speech-to-text.git
cd earscribe-free-speech-to-text
pnpm install
pnpm dev
# → http://localhost:3000
```

Pemeriksaan yang dijalankan sebelum deploy:

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

`pnpm build` menghasilkan ekspor statis di `out/`. Beberapa audit membaca `out/`, jadi jalankan build terlebih dahulu.

---

## ☁️ Deploy

Deploy produksi lewat satu perintah, yang menjalankan semua audit secara berurutan:

```bash
pnpm pages:deploy
```

Perintah ini terlebih dahulu membandingkan penanda deploy lokal (`deployId` di `lib/release.ts`) dengan yang disajikan di `/changelog` pada situs langsung, dan menolak melanjutkan bila keduanya sama — begitulah build yang usang tertangkap. Setelah itu ia membangun, menjalankan audit tautan, panduan, `llms.txt`, i18n, sitemap, dan PWA, lalu menerbitkan `out/` ke Cloudflare Pages.

`/changelog` adalah daftar perubahan untuk pembaca yang bisa ditindaklanjuti. Itu bukan log build: refaktor internal, perbaikan teks, dan pekerjaan terjemahan mendapat `deployId` baru tetapi tidak ada entri catatan perubahan.

Lingkungan dan binding:

| Nama | Digunakan untuk |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL kanonis, sitemap, tag OG |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Pengenal situs Plausible |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | URL skrip Plausible |
| `FEEDBACK_DB` (binding D1) | Endpoint `/feedback`; skemanya di `migrations/` |

---

## 🌐 Menambahkan bahasa baru

1. Tambahkan kode lokal ke akhir `ALL_LOCALE_NAMES` di [`i18n/locale.ts`](i18n/locale.ts).
2. Tambahkan `messages/<code>.json` di samping `en.json`, diterjemahkan sepenuhnya.
3. Jalankan `pnpm i18n:gate` — routing, sitemap, hreflang, dan metadata OG akan mengenali lokal itu secara otomatis, tetapi satu kunci yang hilang akan menggagalkan pemeriksaan.

Hanya lokal yang lolos pemeriksaan yang boleh masuk ke `translatedLocales`; pengalih bahasa menandai sisanya sebagai parsial.

---

## 🔬 Menambahkan model Whisper baru

Tambahkan satu entri ke `MODELS` di [`lib/models.ts`](lib/models.ts) dengan `sizeMB` yang **terukur** untuk `wasm` dan `webgpu` — kedua backend mengirim berkas bobot yang berbeda, dan menuliskan satu angka untuk keduanya adalah cara aplikasi ini pernah menjanjikan 500 MB lalu memberikan 968 MB. Repositorinya harus ada di Hugging Face sebagai `onnx-community/<name>` atau kompatibel dengan ONNX-Whisper. Tambahkan juga blok `models.<id>` yang sesuai ke setiap `messages/*.json` untuk teks kelebihan/kekurangannya.

---

## 🤝 Berkontribusi

Pull request sangat diterima — terutama:

- Terjemahan (`messages/<code>.json`), dan perbaikan README khusus lokal
- Laporan bug yang menyertakan berkas yang bermasalah, browser, dan memori perangkat
- Pengukuran: ukuran model, waktu, dan memori puncak pada perangkat keras yang tidak kami miliki
- Perbaikan aksesibilitas

Buka issue atau PR di sini, atau coba dulu **[earscribe.app](https://earscribe.app)** untuk melihat apa yang akan Anda kontribusikan.

---

## 📄 Lisensi

Situs pemasaran dan halaman-halaman di repositori ini berlisensi [MIT](LICENSE): gratis untuk penggunaan pribadi maupun komersial. Worker transkripsi, dekoder audio, dan pengekspor subtitel tidak diterbitkan di sini, sehingga repositori ini bukan salinan layanan yang lengkap dan bisa di-hosting sendiri.

---

<p align="center">
  <b>👉 Coba aplikasi langsungnya: <a href="https://earscribe.app">earscribe.app</a></b><br/>
  <sub>Audio ke teks · Video ke teks · Ucapan ke teks · Ekspor subtitel · 100% gratis · Tanpa pendaftaran · Di perangkat</sub>
</p>

<p align="center">
  Dibuat dengan ❤️ di atas <a href="https://github.com/openai/whisper">OpenAI Whisper</a>, <a href="https://huggingface.co/docs/transformers.js">Transformers.js</a>, <a href="https://onnxruntime.ai">ONNX Runtime Web</a>, dan <a href="https://mediabunny.dev">mediabunny</a>.
</p>
