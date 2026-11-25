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

<h1 align="center">EarScribe — Convertir gratuitement l'audio et la vidéo en texte dans votre navigateur</h1>

<p align="center">
  <b>Déposez un fichier audio, une vidéo, ou enregistrez avec le micro. Vous obtenez une transcription horodatée et des sous-titres.</b><br/>
  <sub>Whisper s'exécute sur votre propre appareil via WebGPU ou WebAssembly — l'enregistrement n'est jamais envoyé.</sub>
</p>

<p align="center">
  <a href="https://earscribe.app"><img alt="Application en ligne" src="https://img.shields.io/badge/Live-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Gratuit" src="https://img.shields.io/badge/100%25-Free-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Sans inscription" src="https://img.shields.io/badge/No-Sign--up-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Privé" src="https://img.shields.io/badge/On--device-Private-0f172a?style=for-the-badge"></a>
  <img alt="Licence MIT" src="https://img.shields.io/badge/License-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe — convertir gratuitement l'audio et la vidéo en texte dans le navigateur. Déposez un MP3, un WAV, un M4A ou un MP4 et obtenez une transcription horodatée sans rien envoyer."></a>
</p>

<p align="center">
  <b>🔗 Ouvrir l'application :</b> <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/guides">Guides</a> ·
  <a href="https://earscribe.app/changelog">Journal des modifications</a> ·
  <a href="https://earscribe.app/about">À propos</a>
</p>

---

## 🎙️ Ce qu'est EarScribe

Un espace de travail de transcription qui tourne entièrement dans un onglet du navigateur. Vous lui donnez de l'audio, une vidéo ou votre micro ; il vous rend du texte horodaté que vous pouvez cliquer pour réécouter, ainsi que des fichiers de sous-titres à transmettre à un monteur. Pas de compte, pas d'envoi de fichier, pas de facturation à la minute.

Trois entrées, une seule chaîne de traitement :

- **Un fichier** — MP3, WAV, M4A, AAC, OGG, FLAC, Opus, ou presque tout ce que la Web Audio API sait décoder, jusqu'à 1 GiB.
- **Une vidéo** — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS. La piste audio est démultiplexée puis réencodée en mono 16 kHz **dans l'onglet**, avant d'être transcrite comme n'importe quel fichier. Pas de ffmpeg, pas de site de conversion.
- **Le micro** — enregistrer et transcrire au même endroit, pour un cours, une conversation que vous êtes autorisé à enregistrer, ou une note vocale qui serait autrement perdue.

Avec la file d'attente, vous déposez un dossier entier de fichiers et vous partez ; avec l'espace de travail sur `/dashboard`, les résultats deviennent des projets que vous pouvez rouvrir, modifier et exporter plus tard.

> 👉 **Application en ligne :** **[earscribe.app](https://earscribe.app)**

---

## 📚 Sommaire

- [✨ Ce qu'il fait](#-ce-quil-fait)
- [🖼️ Captures d'écran](#️-captures-décran)
- [🚀 Démarrage rapide](#-démarrage-rapide)
- [🗂️ L'espace de travail](#️-lespace-de-travail)
- [💸 Ce que cela coûte](#-ce-que-cela-coûte)
- [🆚 Comparaison](#-comparaison)
- [🌍 Entrées et langues prises en charge](#-entrées-et-langues-prises-en-charge)
- [💼 Cas d'usage](#-cas-dusage)
- [🚧 Ce qu'il ne fait pas](#-ce-quil-ne-fait-pas)
- [❓ FAQ](#-faq)
- [🛠️ Stack technique](#️-stack-technique)
- [🧑‍💻 Développement local](#-développement-local)
- [☁️ Déploiement](#️-déploiement)
- [🌐 Ajouter une langue](#-ajouter-une-langue)
- [🔬 Ajouter un modèle Whisper](#-ajouter-un-modèle-whisper)
- [🤝 Contribuer](#-contribuer)
- [📄 Licence](#-licence)

---

## ✨ Ce qu'il fait

| | Fonction | Ce que vous obtenez concrètement |
|---|---|---|
| 🎬 | **Audio, vidéo et micro** | Les conteneurs vidéo sont acceptés directement. La piste audio est extraite localement, si bien qu'un MP4 de 200 MB ne quitte pas la machine non plus. |
| 📝 | **Transcription horodatée** | Chaque cue porte une heure de début et de fin. Cliquez sur une ligne pour réécouter ce moment ; la forme d'onde suit le mouvement. |
| 🔍 | **Recherche dans la transcription** | Un nom, un chiffre, un terme — sautez à la phrase et réécoutez-la au lieu de reprendre le fichier depuis le début. |
| 🎞️ | **Export de sous-titres** | SRT, WebVTT, texte brut, JSON (l'objet de transcription avec des codes temporels en pleine précision) ou le presse-papiers. |
| 🧪 | **Contrôle des sous-titres** | Signale les cues trop longs, trop rapides, répétés, vides ou qui se chevauchent avant l'export. |
| 📚 | **File d'attente par lots** | Déposez plusieurs fichiers, choisissez un modèle et une langue parlée, et laissez la file les traiter dans l'ordre. Vous pouvez mettre en pause après le fichier en cours, à tout moment. |
| 🗂️ | **Projets** | Les résultats sont enregistrés dans le navigateur sous forme de projets dans `/dashboard` : transcriptions, sous-titres, fichiers sources et corbeille, à rouvrir plus tard. |
| ✏️ | **Édition des sous-titres** | Corrigez le texte, déplacez le point d'entrée ou de sortie d'un cue, scindez ou supprimez un cue, puis exportez de nouveau. |
| 💾 | **Sauvegarde et restauration** | Exportez tout l'espace de travail dans un seul fichier et importez-le dans un autre navigateur. |
| 🔁 | **Conversion de sous-titres** | SRT ⇄ VTT et SRT → texte, dans le navigateur, sans télécharger de modèle — le seul outil ici qui démarre instantanément. |
| 🆓 | **Gratuit et illimité** | Aucune offre payante, aucun quota quotidien, aucune facturation à la minute, aucun compte. |
| 🔒 | **Confidentiel par conception** | La transcription s'exécute localement. Les pages publiques embarquent des mesures d'audience et de la publicité ; `/dashboard` est sans publicité. |
| 🌍 | **27 langues d'interface, 99 langues parlées** | L'interface est traduite en 27 locales ; Whisper détecte automatiquement la langue parlée. |

---

## 🖼️ Captures d'écran

> De vraies captures du site en ligne, sur **[earscribe.app](https://earscribe.app)**.

### 1. Déposez un fichier, une vidéo, ou enregistrez — sans inscription, sans envoi

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="Convertisseur audio et vidéo en texte gratuit — déposez un MP3, WAV, M4A, MP4, MOV ou MKV dans le navigateur. Sans inscription, sans connexion."></a>
</p>

### 2. Transcription horodatée avec forme d'onde — cliquez sur une ligne pour y aller

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="Résultat de transcription EarScribe — audio converti en texte avec horodatage, curseur de forme d'onde et export de sous-titres SRT et VTT en un clic"></a>
</p>

### 3. Trois étapes : déposer → choisir un modèle Whisper → exporter

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="Comment fonctionne la conversion audio en texte gratuite sur EarScribe — déposez de l'audio ou une vidéo, choisissez un modèle Whisper (tiny, base, small ou turbo), lisez et exportez la transcription"></a>
</p>

### 4. Pourquoi EarScribe — la confidentialité d'abord, Whisper natif dans le navigateur

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/04-features.webp" alt="Fonctionnalités d'EarScribe — confidentiel sans envoi, WebGPU et WASM, 99 langues parlées détectées automatiquement, export SRT VTT JSON TXT, inférence sur l'appareil"></a>
</p>

### 5. Qui utilise EarScribe — podcasters, journalistes, étudiants, monteurs

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="Cas d'usage d'EarScribe — audio en texte gratuit pour les podcasters, les journalistes, les étudiants, la recherche utilisateur, les sous-titres vidéo et la transcription de livres audio"></a>
</p>

### 6. EarScribe face à Otter.ai, Rev, HappyScribe et une installation Whisper locale

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="Comparaison EarScribe face à Otter.ai, Rev et HappyScribe — audio en texte gratuit et illimité, inférence sur l'appareil, aucune facturation à la minute"></a>
</p>

### 7. FAQ — confidentialité, formats, export de sous-titres, usage hors ligne

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="FAQ de la reconnaissance vocale gratuite — réponses sur la confidentialité, la conversion MP3 et vidéo en texte, l'export de sous-titres SRT et VTT, les langues prises en charge, l'usage hors ligne et Whisper dans le navigateur"></a>
</p>

---

## 🚀 Démarrage rapide

1. Ouvrez **[earscribe.app](https://earscribe.app)** dans Chrome, Edge, Safari ou Firefox.
2. Déposez un fichier — ou une vidéo, ou lancez l'enregistrement. Jusqu'à 1 GiB par fichier ; la vraie limite est la mémoire de votre appareil, pas la taille sur le disque.
3. Choisissez un modèle. **base** est le choix par défaut et convient à la plupart des voix ; **tiny** est fait pour un téléphone ou une note vocale rapide ; **small** et **turbo** pour un accent, un environnement bruyant ou un audio important.
4. Appuyez sur **Transcrire**. L'audio est décodé et transmis à Whisper dans l'onglet. Le premier lancement télécharge les poids, surveillez donc la taille affichée sur le bouton.
5. Lisez la transcription, cliquez sur une ligne pour la réécouter, corrigez ce qui compte, puis **Exporter → SRT / VTT / TXT / JSON** ou copiez le texte.

Vous préférez un lot ? Passez à la file d'attente, déposez autant de fichiers que vous voulez et choisissez le modèle une seule fois. La file traite un fichier à la fois, réutilise le modèle déjà en mémoire et enregistre chaque résultat comme un projet.

> 💡 **Aucune étape de conversion.** Un MP4 de deux heures passe directement. Si vous préférez ne garder que l'audio, l'application peut extraire la piste audio d'une vidéo pour vous.

---

## 🗂️ L'espace de travail

`/dashboard` est le même moteur de transcription, avec de la mémoire en plus. Tout est stocké dans ce navigateur — IndexedDB pour les enregistrements de projets, CacheStorage pour les poids des modèles — et rien n'est synchronisé avec un compte, puisqu'il n'y a pas de compte.

| Section | Ce qu'elle contient |
|---|---|
| **Projets** | Tout, du plus récent au plus ancien. |
| **Transcriptions** | Les projets créés par une transcription. Modifier leurs cues les laisse ici. |
| **Sous-titres** | Les projets issus d'un fichier de sous-titres — le convertisseur et les imports —, pour que le travail sur les sous-titres reste séparé du travail sur la parole. |
| **Fichiers** | Les médias sources que l'espace de travail conserve, filtrables par type : transcriptions, sous-titres, audio. L'audio d'origine n'est **pas** enregistré par défaut. |
| **Corbeille** | Les projets supprimés, récupérables jusqu'à ce que vous la vidiez. |

Dans un projet, vous pouvez rechercher dans la transcription, cliquer sur un horodatage pour réécouter, modifier les cues de sous-titres (texte, points d'entrée et de sortie, ajout ou suppression), redécouper les cues longs en cues plus courts, exporter de nouveau dans n'importe quel format, ou ouvrir le lecteur multimédia sans quitter la page.

**Sauvegarde :** l'espace de travail s'exporte en un seul fichier (jusqu'à 320 MB) et s'importe dans un autre navigateur ou sur une autre machine. Comme les projets ne quittent jamais l'appareil, ce fichier est la seule copie qui circule — traitez-le comme n'importe quelle sauvegarde de document.

---

## 💸 Ce que cela coûte

Gratuit ne veut pas dire sans poids. Voici des tailles de téléchargement mesurées, par modèle et par backend, pas des estimations :

| Modèle | WebGPU | WebAssembly | Usage typique |
|---|---:|---:|---|
| **tiny** | 151 MB | 41 MB | Notes vocales, téléphones modestes, premier essai |
| **base** *(par défaut)* | 291 MB | 77 MB | Entretiens, réunions, podcasts |
| **small** | 968 MB | 249 MB | Parole accentuée, pièces bruyantes |
| **turbo** | 3.24 GB | 1.09 GB | Qualité studio, quand la précision compte plus que le temps |

- **Téléchargé une fois, mis en cache ensuite.** Les poids résident dans le cache du navigateur ; une deuxième exécution ne télécharge rien. Un autre profil de navigateur implique de télécharger de nouveau.
- **Le GPU vaut le coup.** Sur la même machine, WebGPU a terminé un fichier de 40 minutes avec base en environ 3.8 minutes, contre 9.4 sur le CPU — soit environ 2.5× plus rapide, pour un téléchargement trois à quatre fois plus lourd. `turbo` sur WebGPU n'a jamais terminé son téléchargement de 3.24 GB lors de notre test ; il est donc indiqué comme non mesuré, et non comme rapide.
- **C'est la mémoire qui décide, pas la taille du fichier.** Les enregistrements longs sont décodés en mono 16 kHz avant la transcription. Un MP3 de 40 minutes demande quelques centaines de mégaoctets ; un WAV stéréo de deux heures peut épuiser un onglet avant même de commencer. Le décodage demande désormais directement du 16 kHz, ce qui a fait passer le pic de mémoire d'un fichier stéréo de deux heures d'environ 1.6 GB à 0.5 GB.
- **Pas de serveur, pas de file d'attente sur la machine d'un autre.** Le temps est celui de votre CPU ; un portable lent sera donc lent. C'est le prix à payer pour ne rien envoyer.

Les mesures complètes, avec la méthode et les exécutions qui ont échoué, se trouvent dans les [guides](https://earscribe.app/guides).

---

## 🆚 Comparaison

Comment EarScribe se situe-t-il en 2026 face aux autres façons de transcrire de l'audio ?

| | **EarScribe** | Otter.ai Free | Rev Free Trial | HappyScribe | Whisper CLI local |
|---|:---:|:---:|:---:|:---:|:---:|
| **Gratuit et illimité** | ✅ | ⚠️ 300 min/mois | ❌ Essai seulement | ❌ Payant | ✅ |
| **Sans inscription / connexion** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Sans envoi (confidentiel)** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Vidéo sans envoi** | ✅ Extraction locale | ❌ Envoi obligatoire | ❌ Envoi obligatoire | ❌ Envoi obligatoire | ✅ Nécessite ffmpeg |
| **Fonctionne dans le navigateur** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Export SRT / VTT** | ✅ | ⚠️ Payant | ✅ | ✅ | ⚠️ Manuel |
| **Transcription horodatée** | ✅ | ✅ | ✅ | ✅ | ⚠️ Manuel |
| **Inférence locale** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **99 langues parlées** | ✅ | ⚠️ Limité | ⚠️ Limité | ✅ | ✅ |
| **Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Installation requise** | ❌ Aucune | ❌ Aucune | ❌ Aucune | ❌ Aucune | ⚠️ Python + GPU |
| **Coût** | $0 | $0–$30/mois | $0.25/min | €0.20/min | $0 (votre matériel) |

**Là où il perd :** une installation locale peut faire tourner un modèle plus gros sur un backend plus rapide qu'un onglet de navigateur, et un service payant ajoute l'identification des locuteurs et un espace de travail d'équipe. L'avantage d'EarScribe, c'est qu'il est gratuit, qu'il n'y a rien à installer et que l'audio ne va nulle part.

→ **[Essayer sur earscribe.app](https://earscribe.app)**

---

## 🌍 Entrées et langues prises en charge

### Audio — MP3, WAV, M4A, AAC, OGG, FLAC, Opus

Tout ce que la Web Audio API sait décoder est accepté ; ces sept formats couvrent presque tous les enregistrements que vous rencontrerez.

- 🎵 **[MP3 en texte](https://earscribe.app/mp3-to-text)** — le standard du podcast et de l'entretien
- 🎙️ **[WAV en texte](https://earscribe.app/wav-to-text)** — enregistrements studio et de terrain sans perte
- 📱 **[M4A en texte](https://earscribe.app/m4a-to-text)** — les mémos vocaux de l'iPhone
- 🎧 **[Mémo vocal en texte](https://earscribe.app/voice-memo-to-text)** — les enregistrements au téléphone, sur mobile
- 🔊 **[Audio en texte](https://earscribe.app/audio-to-text)** — le point d'entrée général
- 🎬 **[Audio en SRT](https://earscribe.app/audio-to-srt)** — directement vers les sous-titres

### Vidéo — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS

La piste audio est démultiplexée avec [mediabunny](https://mediabunny.dev), décodée avec WebCodecs et réencodée en un petit MP3 mono 16 kHz (ou en WAV là où aucun encodeur MP3 n'existe) — entièrement en local. Un conteneur que le navigateur ne sait pas décoder échoue avec un message clair, au lieu de produire une transcription vide en silence.

### Micro

L'enregistrement se fait dans l'onglet avec MediaRecorder. Un enregistrement est transcrit exactement comme un fichier déposé ; les sous-titres en direct pendant l'enregistrement ne sont **pas** fournis (voir [ce qu'il ne fait pas](#-ce-quil-ne-fait-pas)).

### Langues — 99 parlées, 27 d'interface

Whisper détecte automatiquement la langue parlée : anglais, espagnol, français, allemand, italien, portugais, russe, japonais, coréen, chinois (simplifié et traditionnel), arabe, hindi, turc, néerlandais, polonais, indonésien, suédois, norvégien, danois, finnois, tchèque, hongrois, grec, hébreu, thaï, vietnamien, et plus de 70 autres.

L'interface est traduite en 27 locales. L'anglais est à la racine `/`, les 26 autres portent un préfixe :

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

## 💼 Cas d'usage

### 🎙️ Podcasters et créateurs
La **[transcription de podcast](https://earscribe.app/podcast-transcription)** pour les notes d'épisode, le SEO et l'accessibilité. Exportez le SRT pour la version vidéo, le TXT pour le blog.

### 📰 Journalistes et chercheurs
La **[transcription d'entretien](https://earscribe.app/interview-transcription)** où l'enregistrement source reste sur votre portable. Aucune copie chez un tiers ne peut fuiter, être saisie ou auditée.

### 🎓 Étudiants et enseignants
La **[transcription de cours](https://earscribe.app/audio-to-text)** d'une séance enregistrée, consultable avant la suivante. Fonctionne avec les mémos vocaux de l'iPhone et les exports Zoom.

### 📞 Réunions et recherche utilisateur
La **[conversion d'un enregistrement de réunion en texte](https://earscribe.app/meeting-recording-to-text)** — une transcription de l'échange, pas des notes de réunion générées automatiquement.

### 🎬 Monteurs vidéo
**[Audio en SRT](https://earscribe.app/audio-to-srt)** pour YouTube, Premiere, Final Cut et Resolve. Le minutage des cues vient des horodatages de Whisper eux-mêmes, et le contrôle des sous-titres signale ce qui débordera à l'écran.

### 📚 Livres audio et enregistrements longs
Les fichiers de deux heures sont pris en charge, mais c'est précisément le cas où la mémoire de l'appareil décide. Lisez [comment l'audio long est traité](https://earscribe.app/guides/how-to-transcribe-long-audio) avant de lancer un fichier de quatre heures.

---

## 🚧 Ce qu'il ne fait pas

Être explicite ici évite à tout le monde une exécution perdue :

- **Pas de séparation des locuteurs.** Deux personnes dans un même fichier donnent un texte plat, sans étiquettes « Locuteur 1 / Locuteur 2 ». La page consacrée aux entretiens le dit volontairement.
- **Pas de traduction.** La transcription reste dans la langue parlée ; la langue de l'interface et la langue parlée n'ont aucun lien.
- **Pas de sous-titres en direct.** L'enregistrement et la transcription sont deux étapes distinctes — le micro enregistre d'abord, le fichier est transcrit ensuite.
- **La file d'attente est sérielle et exige l'onglet ouvert.** Un modèle, un réglage de langue pour tout le lot. Fermer l'onglet l'arrête.
- **Pas de synchronisation entre appareils.** Les projets vivent dans ce navigateur. Utilisez l'export de l'espace de travail pour les déplacer.
- **Ce n'est pas une application hors ligne.** Les poids sont en cache, mais la page elle-même est chargée depuis le réseau. L'installer ajoute un raccourci sur le bureau ou l'écran d'accueil, pas une copie hors ligne.
- **1 GiB par fichier est une limite stricte ; la mémoire est la limite réelle.**

---

## ❓ FAQ

<details>
<summary><b>EarScribe est-il vraiment gratuit, sans limites ?</b></summary><br/>
Oui — pas d'offre payante, pas de carte bancaire, pas de facturation à la minute, pas de quota journalier ni mensuel, pas de compte. Le calcul tourne sur votre propre matériel, il n'y a donc aucune facture cloud à répercuter. Il existe un plafond de 1 GiB par fichier, et la mémoire de votre appareil borne ce qui aboutit vraiment.
</details>

<details>
<summary><b>Mon audio est-il envoyé quelque part ?</b></summary><br/>
Non. L'audio est décodé dans l'onglet et transmis à un modèle Whisper qui tourne dans un Web Worker. Les poids des modèles sont téléchargés <i>vers</i> votre navigateur depuis un CDN, qui voit donc votre adresse IP — mais l'enregistrement n'est pas envoyé. Les pages publiques embarquent Google AdSense — sauf les pages en persan, que la politique AdSense exclut — ainsi que Plausible Analytics sans cookies ; <code>/dashboard</code> ne charge aucun code publicitaire.
</details>

<details>
<summary><b>Puis-je transcrire une vidéo ?</b></summary><br/>
Oui, directement — MP4, MOV, MKV, WebM, M4V, TS, QT et M2TS. La piste audio est extraite dans le navigateur et transcrite comme un fichier normal : inutile de passer par ffmpeg ou par un site de conversion. Si un conteneur utilise un codec que le navigateur ne sait pas décoder, l'application le signale au lieu de rendre une transcription vide.
</details>

<details>
<summary><b>Pourquoi le premier lancement est-il lent ?</b></summary><br/>
La première fois que vous utilisez un modèle, le navigateur télécharge ses poids — 41 MB pour tiny sur WebAssembly, jusqu'à 3.24 GB pour turbo sur WebGPU. Ils sont ensuite mis en cache. Choisissez <b>base</b> (77 MB sur WebAssembly, 291 MB sur WebGPU) pour presque tout.
</details>

<details>
<summary><b>Quelle est la précision, et quel modèle choisir ?</b></summary><br/>
Sur le même extrait de 34 secondes, nos quatre modèles ont divergé sur 26 des 111 mots, et un même modèle avec deux tailles de téléchargement s'est contredit lui-même. Choisissez selon les mots qui comptent pour vous, pas selon un pourcentage de précision : <a href="https://earscribe.app/guides/which-whisper-model-should-i-use">le guide des modèles</a> montre les différences réelles.
</details>

<details>
<summary><b>Puis-je obtenir des sous-titres SRT ou VTT ?</b></summary><br/>
Oui : Exporter → SRT ou VTT. Le minutage vient des frontières de segments de Whisper lui-même, pas d'un découpage du texte après coup. Le contrôle des sous-titres signale les cues trop longs, trop rapides, répétés, vides ou qui se chevauchent, et vous pouvez modifier le texte et le minutage des cues avant d'exporter.
</details>

<details>
<summary><b>Et si j'ai déjà un fichier SRT ou VTT ?</b></summary><br/>
Convertissez-le sans télécharger de modèle : <a href="https://earscribe.app/srt-to-vtt">SRT en VTT</a> et <a href="https://earscribe.app/srt-to-txt">SRT en texte</a> analysent le fichier localement. Rien n'est envoyé et aucun poids Whisper n'est récupéré.
</details>

<details>
<summary><b>Cela fonctionne-t-il hors ligne ?</b></summary><br/>
L'étape de transcription, oui : une fois la page et le modèle chargés, l'audio est traité sans contacter de serveur de transcription. L'application n'est pas pour autant un paquet hors ligne — l'ouvrir demande le réseau, et un modèle que vous n'avez jamais téléchargé doit être récupéré. L'installer depuis le pied de page ajoute un raccourci qui ouvre l'espace de travail ; cela n'ajoute pas de copie hors ligne.
</details>

<details>
<summary><b>Indique-t-il qui parle ?</b></summary><br/>
Non. La sortie est du texte plat avec des codes temporels. La diarisation des locuteurs ne fait pas partie de cette version, et l'application ne prétend pas le contraire.
</details>

<details>
<summary><b>Où sont stockés mes résultats ?</b></summary><br/>
Dans ce navigateur : les projets dans IndexedDB, les poids des modèles dans CacheStorage. L'audio d'origine n'est pas enregistré avec un projet, sauf si vous le conservez. Une page qui n'a jamais été enregistrée dans l'espace de travail repart à zéro au rechargement ; utilisez <code>/dashboard</code> et son export pour garder ce qui vous importe.
</details>

<details>
<summary><b>Existe-t-il une alternative gratuite à Otter.ai ou Rev ?</b></summary><br/>
EarScribe est une alternative gratuite aux services de transcription cloud : c'est vous qui fournissez le calcul, l'audio ne bouge pas, et il n'y a pas de frais à la minute. Le compromis est réel — pas d'étiquettes de locuteurs, pas d'espace d'équipe, et les fichiers longs sont bornés par votre machine.
</details>

<details>
<summary><b>Comment convertir un MP3 en texte gratuitement ?</b></summary><br/>
Déposez le MP3 sur <a href="https://earscribe.app/mp3-to-text">earscribe.app/mp3-to-text</a> (ou sur la page d'accueil). Il est décodé dans votre navigateur, transcrit localement, et peut être copié ou exporté en SRT, VTT, TXT ou JSON.
</details>

> D'autres réponses sur la **[page À propos](https://earscribe.app/about)**, et les notes de mesure dans les **[guides](https://earscribe.app/guides)**.

---

## 🛠️ Stack technique

- **[Next.js 15](https://nextjs.org)** (App Router) + **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web, WebGPU avec repli sur WebAssembly
- **[OpenAI Whisper](https://github.com/openai/whisper)** — tiny, base, small et large-v3-turbo, quantifiés en ONNX
- **[mediabunny](https://mediabunny.dev)** + **WebCodecs** — démultiplexage vidéo et extraction audio dans l'onglet
- **[next-intl](https://next-intl.dev)** — 27 locales, un catalogue de messages par langue
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Cloudflare Pages](https://pages.cloudflare.com)** pour l'hébergement, avec quelques Pages Functions (hôte des modèles, point de terminaison de retour)

Le site est rendu statiquement et s'hydrate dans le navigateur ; la transcription et la conversion de sous-titres sont uniquement côté client. Les poids des modèles viennent du CDN Hugging Face au premier usage, puis sont mis en cache dans CacheStorage.

---

## 🧑‍💻 Développement local

```bash
git clone https://github.com/rocnubie/earscribe-free-speech-to-text.git
cd earscribe-free-speech-to-text
pnpm install
pnpm dev
# → http://localhost:3000
```

Les vérifications lancées avant un déploiement :

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

`pnpm build` produit un export statique dans `out/`. Plusieurs audits lisent `out/`, lancez donc le build d'abord.

---

## ☁️ Déploiement

Les déploiements de production passent par une seule commande, qui exécute tous les audits dans l'ordre :

```bash
pnpm pages:deploy
```

Elle compare d'abord le marqueur de déploiement local (`deployId` dans `lib/release.ts`) avec celui servi sur `/changelog` du site en ligne, et refuse de continuer s'ils sont identiques — c'est ainsi qu'un build obsolète est détecté. Vient ensuite le build, puis les audits des liens, des guides, de `llms.txt`, de l'i18n, du sitemap et de la PWA, avant la publication de `out/` sur Cloudflare Pages.

`/changelog` est une liste de changements lisible par les visiteurs, sur laquelle ils peuvent agir. Ce n'est pas un journal de build : les refactorisations internes, les corrections de texte et le travail de traduction obtiennent un nouveau `deployId` mais aucune entrée dans le journal.

Environnement et bindings :

| Nom | Utilisé pour |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canoniques, sitemap, balises OG |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Identifiant de site Plausible |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | URL du script Plausible |
| `FEEDBACK_DB` (binding D1) | Le point de terminaison `/feedback` ; schéma dans `migrations/` |

---

## 🌐 Ajouter une langue

1. Ajoutez le code de locale à `ALL_LOCALE_NAMES` dans [`i18n/locale.ts`](i18n/locale.ts).
2. Créez `messages/<code>.json` à côté de `en.json`, entièrement traduit.
3. Lancez `pnpm i18n:gate` — le routage, le sitemap, les balises hreflang et les métadonnées OG prennent la locale en compte automatiquement, mais une clé manquante fait échouer la vérification.

Seules les locales qui passent la vérification ont leur place dans `translatedLocales` ; le sélecteur de langue marque toutes les autres comme partielles.

---

## 🔬 Ajouter un modèle Whisper

Ajoutez une entrée à `MODELS` dans [`lib/models.ts`](lib/models.ts), avec une `sizeMB` **mesurée** pour `wasm` et pour `webgpu` — les deux backends livrent des fichiers de poids différents, et citer un seul chiffre pour les deux est justement ce qui a fait promettre 500 MB à l'application pour en livrer 968 MB. Le dépôt doit exister sur Hugging Face sous `onnx-community/<name>` ou être compatible ONNX-Whisper. Ajoutez un bloc `models.<id>` correspondant dans chaque `messages/*.json` pour le texte des avantages et des inconvénients.

---

## 🤝 Contribuer

Les pull requests sont bienvenues — en particulier :

- Les traductions (`messages/<code>.json`) et les corrections de README propres à une locale
- Les rapports de bug avec le fichier qui a échoué, le navigateur et la mémoire de l'appareil
- Les mesures : taille de modèle, temps et pic de mémoire sur du matériel que nous n'avons pas
- Les corrections d'accessibilité

Ouvrez une issue ou une PR ici, ou essayez d'abord **[earscribe.app](https://earscribe.app)** pour voir à quoi vous contribueriez.

---

## 📄 Licence

Le site marketing et les pages de ce dépôt sont sous [MIT](LICENSE) : libres pour un usage personnel et commercial. Le worker de transcription, le décodeur audio et les exportateurs de sous-titres ne sont pas publiés ici ; ce dépôt n'est donc pas une copie complète et auto-hébergeable du service.

---

<p align="center">
  <b>👉 Essayez l'application en ligne : <a href="https://earscribe.app">earscribe.app</a></b><br/>
  <sub>Audio en texte · Vidéo en texte · Parole en texte · Export de sous-titres · 100 % gratuit · Sans inscription · Sur l'appareil</sub>
</p>

<p align="center">
  Construit avec ❤️ sur <a href="https://github.com/openai/whisper">OpenAI Whisper</a>, <a href="https://huggingface.co/docs/transformers.js">Transformers.js</a>, <a href="https://onnxruntime.ai">ONNX Runtime Web</a> et <a href="https://mediabunny.dev">mediabunny</a>.
</p>
