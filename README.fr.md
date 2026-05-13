<p align="center">
  <b>🌐 Language / 语言 / Idioma:</b><br/>
  <a href="README.md">English</a> · <a href="README.zh-CN.md">中文</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português</a> · <a href="README.ja.md">日本語</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.ru.md">Русский</a> · <a href="README.ko.md">한국어</a>
</p>

<h1 align="center">EarScribe — Convertisseur Audio en Texte Gratuit & Reconnaissance Vocale Gratuite</h1>

<p align="center">
  <b>Transcrivez audio et vidéo en texte dans votre navigateur. 100% gratuit, sans inscription, sans envoi. Illimité.</b><br/>
  <sub>Propulsé par OpenAI Whisper sur WebGPU / WebAssembly — ton audio ne quitte jamais ton appareil.</sub>
</p>

<p align="center">
  <a href="https://earscribe.app/fr"><img alt="Démo en ligne" src="https://img.shields.io/badge/Live-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app/fr"><img alt="Gratuit" src="https://img.shields.io/badge/100%25-Gratuit-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app/fr"><img alt="Sans inscription" src="https://img.shields.io/badge/Sans-Inscription-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app/fr"><img alt="Privé" src="https://img.shields.io/badge/Sur--appareil-Privé-0f172a?style=for-the-badge"></a>
  <img alt="Licence MIT" src="https://img.shields.io/badge/Licence-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app/fr"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe — Convertisseur audio en texte gratuit — glisse-dépose un MP3, WAV ou M4A pour une transcription vocale gratuite dans le navigateur via OpenAI Whisper, sans inscription ni envoi de fichier"></a>
</p>

<p align="center">
  <b>🔗 Essayer maintenant :</b>
  <a href="https://earscribe.app/fr"><strong>earscribe.app/fr</strong></a> ·
  <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/about">À propos</a>
</p>

---

## 🎙️ Qu'est-ce qu'EarScribe ?

**[EarScribe](https://earscribe.app/fr)** est un **convertisseur audio en texte gratuit** et un outil de **reconnaissance vocale gratuite** qui fonctionne entièrement dans ton navigateur web. Dépose un fichier audio — MP3, WAV, M4A, OGG, FLAC, WebM, ou la piste audio d'une vidéo — et obtiens une transcription complète avec horodatage, ainsi qu'un **export SRT / VTT** en un clic pour les sous-titres. Aucun envoi de fichier, aucune connexion, aucune clé API, aucun tarif à la minute.

C'est la façon la plus simple de **transcrire audio et vidéo en texte** gratuitement :

- 🎧 **Glisse-dépose** n'importe quel fichier audio
- 🧠 **OpenAI Whisper** transcrit localement sur ton appareil
- 📝 Obtiens une **transcription avec horodatage**, une forme d'onde synchronisée et des **sous-titres SRT / VTT**
- 🔒 L'audio **ne quitte jamais ton appareil** — 100% privé, utilisable hors ligne après le premier téléchargement du modèle

> 👉 **Application en ligne :** **[earscribe.app/fr](https://earscribe.app/fr)**

---

## 📚 Sommaire

- [✨ Fonctionnalités](#-fonctionnalités)
- [🖼️ Captures d'écran](#️-captures-décran)
- [🚀 Démarrage rapide (transcription en 30 secondes)](#-démarrage-rapide-transcription-en-30-secondes)
- [🆚 Comparaison des outils de transcription gratuits](#-comparaison-des-outils-de-transcription-gratuits)
- [🤖 Modèles — Choisir le bon Whisper](#-modèles--choisir-le-bon-whisper)
- [🌍 Formats supportés & 99 langues](#-formats-supportés--99-langues)
- [💼 Cas d'usage](#-cas-dusage)
- [❓ FAQ — Transcription vocale gratuite](#-faq--transcription-vocale-gratuite)
- [🛠️ Stack technique](#️-stack-technique)
- [🧑‍💻 Développement local](#-développement-local)
- [📄 Licence](#-licence)

---

## ✨ Fonctionnalités

EarScribe est un espace de travail de **transcription automatique gratuite** complet — conçu pour les podcasteurs, journalistes, étudiants et toute personne souhaitant **transcrire audio en texte** sans envoyer des enregistrements sensibles vers un service cloud.

| | Fonctionnalité | Ce que ça signifie |
|---|---|---|
| 🆓 | **100% gratuit, illimité** | Aucun niveau payant, aucun quota journalier, aucun tarif à la minute. Un vrai **convertisseur audio texte gratuit** sans limite. |
| 🚫 | **Sans inscription, sans connexion** | Pas d'e-mail, pas de compte, pas de carte bancaire. Ouvre [earscribe.app/fr](https://earscribe.app/fr) et dépose un fichier, c'est tout. |
| 🔒 | **Privé par conception** | L'audio ne quitte jamais ton appareil. Aucun serveur ne touche ton fichier. **Transcription privée** garantie. |
| 🌐 | **IA native dans le navigateur** | **OpenAI Whisper** tourne localement via WebGPU (accéléré GPU) ou WebAssembly en repli. |
| 🎬 | **Export sous-titres** | Export **SRT / VTT** en un clic — compatible Premiere, Final Cut, DaVinci Resolve, YouTube. **Générer des sous-titres gratuits** n'a jamais été aussi simple. |
| 📜 | **Transcription horodatée** | Clique sur n'importe quelle ligne pour sauter à ce moment dans l'audio. Lecteur de forme d'onde intégré. |
| 🗣️ | **99 langues** | Whisper détecte automatiquement la langue parlée — aucun réglage manuel nécessaire. |
| ⚡ | **Hors ligne après le premier lancement** | Les modèles sont mis en cache dans ton navigateur. Les transcriptions suivantes fonctionnent sans internet. |
| 🎚️ | **4 modèles Whisper** | Tiny (40 Mo) → Base → Small → **Large v3 Turbo** pour une précision professionnelle. |
| 📦 | **Multiples formats d'export** | `.txt` · `.srt` · `.vtt` · `.json` (brut + horodatage) |
| 🌍 | **10 langues d'interface** | EN · ES · DE · FR · PT-BR · RU · JA · KO · HI · AR |
| 🪶 | **Aucune pub, aucun tracking** | Uniquement Plausible Analytics — pas de session replay, pas de cookies, pas de fingerprinting. |

---

## 🖼️ Captures d'écran

> Captures réelles depuis le site en ligne **[earscribe.app/fr](https://earscribe.app/fr)** — enregistrées en 2026.

### 1. Dépose un fichier audio — 100% gratuit, sans inscription, sans connexion

<p align="center">
  <a href="https://earscribe.app/fr"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="Convertisseur audio en texte gratuit — glisse-dépose un MP3, WAV, M4A, OGG, FLAC ou WebM dans le navigateur. Sans inscription, sans connexion, reconnaissance vocale gratuite illimitée."></a>
</p>

### 2. Transcription horodatée avec forme d'onde — clique sur une ligne pour naviguer

<p align="center">
  <a href="https://earscribe.app/fr"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="Résultat de transcription EarScribe — audio en texte horodaté avec lecteur de forme d'onde et export sous-titres SRT et VTT gratuits en un clic"></a>
</p>

### 3. Trois étapes : dépose → choix du modèle Whisper → export

<p align="center">
  <a href="https://earscribe.app/fr"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="Comment fonctionne la transcription audio en texte gratuite sur EarScribe — dépose le fichier, choisis le modèle OpenAI Whisper (Tiny, Base, Small ou Large v3 Turbo), lis et exporte la transcription"></a>
</p>

### 4. Pourquoi EarScribe — Whisper natif dans le navigateur, respect de la vie privée

<p align="center">
  <a href="https://earscribe.app/fr"><img src="https://earscribe.app/screenshots/04-features.webp" alt="Fonctionnalités EarScribe — transcription privée sans envoi, WebGPU et WASM, 99 langues détectées automatiquement, export SRT VTT JSON TXT, fonctionne hors ligne, 100% gratuit sans clé API"></a>
</p>

### 5. Qui utilise EarScribe — podcasteurs, journalistes, étudiants, monteurs vidéo

<p align="center">
  <a href="https://earscribe.app/fr"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="Cas d'usage EarScribe — convertisseur audio en texte gratuit pour podcasteurs, journalistes, étudiants, recherche utilisateur, générateur de sous-titres SRT pour vidéo, et transcription de livres audio"></a>
</p>

### 6. EarScribe vs Otter.ai, Rev, Whisper API — tableau comparatif intégré

<p align="center">
  <a href="https://earscribe.app/fr"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="EarScribe vs Otter.ai vs Rev vs Whisper API — alternative gratuite illimitée à la transcription audio en texte, sans tarif à la minute, avec confidentialité sur l'appareil"></a>
</p>

### 7. FAQ — Reconnaissance vocale gratuite & transcription automatique

<p align="center">
  <a href="https://earscribe.app/fr"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="FAQ transcription vocale gratuite — réponses sur la confidentialité, MP3 en texte, export sous-titres SRT et VTT, langues supportées, utilisation hors ligne et OpenAI Whisper dans le navigateur"></a>
</p>

---

## 🚀 Démarrage rapide (transcription en 30 secondes)

Le flux de **voix en texte gratuit** le plus rapide du web :

1. Ouvre **[earscribe.app/fr](https://earscribe.app/fr)** dans n'importe quel navigateur moderne (Chrome, Edge, Safari, Firefox).
2. Glisse ton fichier audio sur la page (MP3, WAV, M4A, OGG, FLAC, WebM — jusqu'à ~2 heures par fichier).
3. Choisis un modèle Whisper. **Base** est recommandé pour la plupart des usages ; **Turbo** offre une précision professionnelle si ton navigateur supporte WebGPU.
4. Clique sur **Transcrire**. L'audio est décodé et traité par Whisper *dans ton onglet de navigateur*.
5. Lis la transcription, clique sur une ligne pour jouer ce moment, ou **Exporte → .srt / .vtt / .txt / .json**.

Aucun envoi. Aucun compte. Aucun quota. Un **convertisseur audio texte gratuit** qui respecte tes données.

> 💡 **Astuce pro :** Tu veux **transcrire audio et vidéo en texte** à partir d'un fichier MP4 ou MOV ? Extrais d'abord la piste audio (ffmpeg, Audacity ou VLC peuvent exporter en MP3 / WAV depuis une vidéo) et dépose le résultat sur EarScribe.

---

## 🆚 Comparaison des outils de transcription gratuits

Comment EarScribe se compare-t-il aux autres façons de **transcrire audio et vidéo en texte** en 2026 ?

| | **EarScribe** | Otter.ai Gratuit | Rev Essai gratuit | HappyScribe | Whisper CLI local |
|---|:---:|:---:|:---:|:---:|:---:|
| **Gratuit & illimité** | ✅ | ⚠️ 300 min/mois | ❌ Essai seulement | ❌ Payant | ✅ |
| **Sans inscription / connexion** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Sans envoi (privé)** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Fonctionne dans le navigateur** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Export SRT / VTT** | ✅ | ⚠️ Payant | ✅ | ✅ | ⚠️ Manuel |
| **Transcription horodatée** | ✅ | ✅ | ✅ | ✅ | ⚠️ Manuel |
| **Fonctionne hors ligne** | ✅ (après 1er chargement) | ❌ | ❌ | ❌ | ✅ |
| **99 langues** | ✅ | ⚠️ Limité | ⚠️ Limité | ✅ | ✅ |
| **OpenAI Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Installation requise** | ❌ Aucune | ❌ Aucune | ❌ Aucune | ❌ Aucune | ⚠️ Python + GPU |
| **Coût** | 0 € | 0–30 $/mois | 0,25 $/min | 0,20 €/min | 0 € (ton matériel) |

**Verdict :** EarScribe est le seul outil qui combine *vraiment gratuit, illimité, sans inscription, sans envoi, natif dans le navigateur, prêt pour les sous-titres* en un seul clic. C'est l'**alternative gratuite à Otter.ai** et l'**alternative gratuite à Rev** qui respecte ta vie privée. → **[Essayer sur earscribe.app/fr](https://earscribe.app/fr)**

---

## 🤖 Modèles — Choisir le bon Whisper

EarScribe propose quatre tailles de modèles **OpenAI Whisper**. Tous tournent localement ; le premier téléchargement est mis en cache indéfiniment.

| Modèle | Taille | Précision | Vitesse | RAM | Idéal pour |
|---|---:|:---:|:---:|---:|---|
| **Whisper Tiny** | ~80 Mo | ⭐ | ⚡⚡⚡⚡ | 1 Go | Notes vocales rapides, téléphones d'entrée de gamme |
| **Whisper Base** *(Recommandé)* | ~200 Mo | ⭐⭐ | ⚡⚡⚡ | 2 Go | Transcription quotidienne de podcasts et cours |
| **Whisper Small** | ~500 Mo | ⭐⭐⭐ | ⚡⚡ | 4 Go | Parole accentuée, audio bruité |
| **Whisper Large v3 Turbo** | ~800 Mo | ⭐⭐⭐⭐ | ⚡⚡⚡ (WebGPU) | 6 Go | Transcriptions professionnelles, multi-locuteurs, musique+parole |

> 📌 Les modèles sont **mis en cache après le premier lancement** — ta prochaine transcription est instantanée. Retrouve l'analyse complète sur **[earscribe.app/fr](https://earscribe.app/fr)**.

---

## 🌍 Formats supportés & 99 langues

### Formats audio — MP3, WAV, M4A, OGG, FLAC, WebM

EarScribe accepte tout format audio que l'API Web Audio peut décoder :

- 🎵 **[Convertir MP3 en texte](https://earscribe.app/fr)** — le format podcast le plus courant
- 🎙️ **[WAV en texte](https://earscribe.app/fr)** — enregistrements studio sans perte
- 📱 **[M4A en texte](https://earscribe.app/fr)** — Apple Voice Memos, enregistrements iPhone
- 🎶 **[OGG en texte](https://earscribe.app/fr)** — format open source
- 🔊 **[FLAC en texte](https://earscribe.app/fr)** — archives haute-fidélité
- 🎥 **[WebM en texte](https://earscribe.app/fr)** — audio/vidéo enregistrés depuis le navigateur

Pour **transcrire audio et vidéo en texte** (MP4, MOV, MKV), extrais d'abord la piste audio avec un outil gratuit (Audacity, VLC, ffmpeg), puis dépose le MP3 ou WAV résultant sur **[earscribe.app/fr](https://earscribe.app/fr)**.

### Langues — 99 supportées

Whisper détecte automatiquement la langue parlée. EarScribe transcrit le français, l'anglais, l'espagnol, l'allemand, l'italien, le portugais, le russe, le japonais, le coréen, le chinois (simplifié et traditionnel), l'arabe, l'hindi, le turc, le néerlandais, le polonais, l'indonésien, le suédois, le norvégien, le danois, le finnois, le tchèque, le hongrois, le grec, l'hébreu, le thaï, le vietnamien, et 70+ autres.

L'interface est disponible dans les langues suivantes :

| Langue | Lien |
|---|---|
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

## 💼 Cas d'usage

EarScribe est un outil de **transcription vocale** polyvalent. Voici ce pour quoi les gens l'utilisent :

### 🎙️ Podcasteurs & créateurs de contenu

**Transcrire un podcast gratuitement** pour les notes d'émission, le référencement des épisodes et l'accessibilité. Convertis ton **MP3 en texte** en quelques minutes, puis exporte en `.srt` pour les versions vidéo. → [Commencer sur earscribe.app/fr](https://earscribe.app/fr)

### 📰 Journalistes & chercheurs

**Les interviews de sources restent sur ton ordinateur.** Aucun serveur tiers à saisir, aucun journal d'audit, aucune surface de fuite. **Transcription d'interviews gratuite** avec l'une des meilleures garanties de confidentialité du web. La **transcription privée** n'est pas un argument marketing ici — c'est une réalité technique : l'audio ne quitte pas l'appareil.

### 🎓 Étudiants & enseignants

**Transcrire un cours gratuitement** — dépose un cours enregistré et obtiens une transcription consultable avant la prochaine session. Fonctionne avec les mémos vocaux iPhone (`.m4a`) et les enregistrements Zoom.

### 📞 Réunions & recherche utilisateur

**Transcrire une réunion** ou des interviews utilisateur — produis une transcription étiquetée sans envoyer l'audio client sensible à un SaaS tiers. **Gratuit illimité**, sans quota.

### 🎬 Monteurs vidéo — sous-titres & légendes

**Générer des sous-titres gratuits** au format SRT depuis l'audio pour YouTube, Premiere Pro, Final Cut Pro, DaVinci Resolve. Les timecodes proviennent des horodatages émis par Whisper, les **sous-titres SRT** et **sous-titres VTT** s'alignent donc parfaitement.

### 📚 Livres audio & contenus longs

Un MP3 de deux heures ? Aucun problème. **Whisper Large v3 Turbo** gère des audio de longueur livre audio sans tarif à la minute ni quota d'API.

---

## ❓ FAQ — Transcription vocale gratuite

<details>
<summary><b>EarScribe est-il vraiment 100% gratuit et sans limite ?</b></summary><br/>
Oui — 100% gratuit, illimité, <b>sans inscription</b> et <b>sans connexion</b>. Il n'y a aucun niveau payant, aucune carte bancaire, aucun tarif à la minute et aucun quota journalier ou mensuel. Le modèle de <b>reconnaissance vocale gratuite</b> Whisper tourne sur ton propre matériel, donc il n'y a aucun coût de calcul cloud à répercuter. <b>Gratuit illimité</b>, pour de vrai. → <a href="https://earscribe.app/fr">earscribe.app/fr</a>
</details>

<details>
<summary><b>Mon audio est-il privé et sécurisé ?</b></summary><br/>
Entièrement privé. EarScribe est un <b>convertisseur audio en texte</b> local-first : ton fichier audio ne quitte jamais ton appareil et n'est jamais envoyé à un serveur. <b>Audio non envoyé</b> — ce n'est pas une promesse de politique de confidentialité, c'est une réalité d'architecture. Aucun compte ne signifie aucune donnée collectée sur toi. Tu peux même l'utiliser hors ligne une fois le modèle téléchargé.
</details>

<details>
<summary><b>Mon audio est-il envoyé quelque part ?</b></summary><br/>
Non. La <b>transcription automatique gratuite</b> se produit entièrement en local — l'audio est décodé sur ton appareil et transmis à un modèle Whisper s'exécutant dans un Web Worker. Rien n'est envoyé à un serveur. C'est ce qu'on entend par <b>dans le navigateur</b> et <b>local</b>.
</details>

<details>
<summary><b>Pourquoi le premier lancement est-il lent ?</b></summary><br/>
La première fois que tu sélectionnes un modèle, ton navigateur le télécharge (de 80 Mo à 800 Mo selon la taille choisie). Ensuite, le modèle est mis en cache et réutilisé — aucun re-téléchargement nécessaire. La <b>transcription vocale</b> suivante démarre instantanément.
</details>

<details>
<summary><b>Quelles langues sont supportées ?</b></summary><br/>
La <b>transcription automatique gratuite</b> supporte 99 langues via Whisper. La langue est détectée automatiquement — tu n'as pas à en choisir une. Ça inclut le français, l'anglais, l'espagnol, l'arabe, le mandarin, l'hindi, et 93 autres.
</details>

<details>
<summary><b>Puis-je transcrire une vidéo ?</b></summary><br/>
Pas directement. Pour <b>transcrire audio et vidéo en texte</b> depuis un fichier MP4 ou MOV, extrais d'abord la piste audio (tout outil capable d'exporter en MP3 ou WAV depuis une vidéo fera l'affaire) et dépose-la sur <a href="https://earscribe.app/fr">earscribe.app/fr</a>.
</details>

<details>
<summary><b>Ça fonctionne hors ligne ?</b></summary><br/>
Une fois le modèle téléchargé, oui — la <b>transcription privée</b> fonctionne hors ligne. La page elle-même doit d'abord être chargée, mais les exécutions suivantes fonctionnent sans internet. Idéal pour les zones à connectivité limitée ou les environnements où la confidentialité exige l'isolation réseau.
</details>

<details>
<summary><b>Comment convertir un MP3 en texte gratuitement ?</b></summary><br/>
Dépose le MP3 sur <a href="https://earscribe.app/fr">EarScribe</a> pour <b>convertir MP3 en texte</b> gratuitement. Le fichier est décodé dans ton navigateur, Whisper le transcrit localement, et tu peux copier le résultat ou exporter ta <b>transcription vocale</b> en SRT, VTT, TXT ou JSON. Aucun envoi, aucun compte requis.
</details>

<details>
<summary><b>Puis-je générer des sous-titres SRT ou VTT depuis de l'audio ?</b></summary><br/>
Oui. Après la transcription, clique sur <b>Exporter → .srt</b> ou <b>.vtt</b>. Les timecodes proviennent des horodatages émis par Whisper, donc les <b>sous-titres SRT</b> et <b>sous-titres VTT</b> s'alignent avec la transcription sans découpage manuel. Compatibles YouTube, Premiere Pro, Final Cut et DaVinci Resolve.
</details>

<details>
<summary><b>C'est une alternative gratuite à Otter.ai ou Rev ?</b></summary><br/>
Oui. EarScribe est une <b>alternative gratuite à Otter.ai</b> et une <b>alternative gratuite à Rev</b> pour la transcription cloud. Le compromis : tu fais le calcul sur ta propre machine pour la <b>voix en texte gratuit</b>, mais l'audio ne la quitte jamais et il n'y a aucun tarif à la minute ni abonnement.
</details>

<details>
<summary><b>EarScribe fait-il tourner OpenAI Whisper dans le navigateur ?</b></summary><br/>
Oui — EarScribe exécute <b>OpenAI Whisper en ligne</b> (Tiny, Base, Small et Large v3 Turbo) directement dans le navigateur via Transformers.js sur WebGPU, avec repli sur WebAssembly quand WebGPU n'est pas disponible. Pas de serveur, pas de clé API — juste du calcul local.
</details>

> Lis plus de réponses sur la **[page À propos](https://earscribe.app/about)**.

---

## 🛠️ Stack technique

EarScribe est conçu pour être rapide, statique et peu coûteux à héberger :

- **[Next.js 15](https://nextjs.org)** (App Router) + **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web (WebGPU + WASM)
- **[OpenAI Whisper](https://github.com/openai/whisper)** — Tiny, Base, Small, Large v3 Turbo (quantifié ONNX)
- **[next-intl](https://next-intl.dev)** — i18n (10 langues disponibles)
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[@opennextjs/cloudflare](https://opennext.js.org/cloudflare)** — déploiement sur Cloudflare Pages
- **Plausible Analytics** (chargé uniquement en production)

Le frontend est entièrement **statique**. Les poids des modèles sont récupérés depuis le CDN Hugging Face au premier usage et mis en cache par le CacheStorage du navigateur.

---

## 🧑‍💻 Développement local

```bash
git clone https://github.com/<ton-org>/earscribe.git
cd earscribe
pnpm install
pnpm dev
# → http://localhost:3000
```

Vérification des types, lint et build :

```bash
pnpm typecheck
pnpm lint
pnpm build
```

Déploiement sur Cloudflare Pages :

```bash
pnpm cf:build          # produit .open-next/
pnpm cf:preview        # aperçu local via Wrangler
pnpm cf:deploy         # wrangler deploy
```

---

## 📄 Licence

[MIT](LICENSE) — libre d'utilisation personnelle et commerciale.

---

<p align="center">
  <b>👉 Essayer l'application : <a href="https://earscribe.app/fr">earscribe.app/fr</a></b><br/>
  <sub>Convertisseur audio en texte gratuit · Reconnaissance vocale gratuite · Transcrire audio et vidéo en texte · 100% gratuit · Sans inscription · Privé · Illimité</sub>
</p>

<p align="center">
  Construit avec ❤️ sur <a href="https://github.com/openai/whisper">OpenAI Whisper</a>, <a href="https://huggingface.co/docs/transformers.js">Transformers.js</a> et <a href="https://onnxruntime.ai">ONNX Runtime Web</a>.
</p>
