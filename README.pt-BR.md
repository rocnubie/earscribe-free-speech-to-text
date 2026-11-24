<p align="center">
  <b>🌐 Language / 语言 / Idioma:</b><br/>
  <a href="README.md">English</a> · <a href="README.zh-CN.md">中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.ru.md">Русский</a>
</p>

<h1 align="center">EarScribe — Áudio e vídeo para texto grátis no navegador</h1>

<p align="center">
  <b>Solte um arquivo de áudio, um vídeo, ou grave pelo microfone. Receba uma transcrição com carimbos de tempo e legendas.</b><br/>
  <sub>O Whisper roda no seu próprio dispositivo via WebGPU ou WebAssembly — a gravação nunca é enviada.</sub>
</p>

<p align="center">
  <a href="https://earscribe.app"><img alt="App ao vivo" src="https://img.shields.io/badge/Live-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Grátis" src="https://img.shields.io/badge/100%25-Free-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Sem cadastro" src="https://img.shields.io/badge/No-Sign--up-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Privado" src="https://img.shields.io/badge/On--device-Private-0f172a?style=for-the-badge"></a>
  <img alt="Licença MIT" src="https://img.shields.io/badge/License-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe — áudio e vídeo para texto grátis no navegador. Solte um MP3, WAV, M4A ou MP4 e receba uma transcrição com carimbos de tempo sem enviar nada."></a>
</p>

<p align="center">
  <b>🔗 Abra o app:</b> <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/guides">Guias</a> ·
  <a href="https://earscribe.app/changelog">Novidades</a> ·
  <a href="https://earscribe.app/about">Sobre</a>
</p>

---

## 🎙️ O que é o EarScribe

Um espaço de trabalho de transcrição que roda inteiro na aba do navegador. Você entrega áudio, um arquivo de vídeo ou o microfone; ele devolve texto com carimbos de tempo em que dá para clicar e ouvir de novo, além de arquivos de legenda para levar ao editor. Sem conta, sem envio e sem cobrança por minuto.

Três portas de entrada, um único fluxo:

- **Um arquivo** — MP3, WAV, M4A, AAC, OGG, FLAC, Opus, ou quase tudo o que a Web Audio API consegue decodificar, até 1 GiB.
- **Um vídeo** — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS. A faixa de áudio é separada (demux) e recodificada para 16 kHz mono **dentro da aba**, e depois transcrita como qualquer outro arquivo. Sem ffmpeg, sem site de conversão.
- **O microfone** — grave e transcreva no mesmo lugar: uma aula, uma ligação que você tem permissão de gravar ou um recado de voz que você perderia.

Com a fila, dá para soltar os arquivos de uma pasta inteira e deixar rodando; com a área de trabalho em `/dashboard`, os resultados viram projetos que você reabre, edita e exporta depois.

> 👉 **App ao vivo:** **[earscribe.app](https://earscribe.app)**

---

## 📚 Índice

- [✨ O que ele faz](#-o-que-ele-faz)
- [🖼️ Capturas de tela](#️-capturas-de-tela)
- [🚀 Início rápido](#-início-rápido)
- [🗂️ A área de trabalho](#️-a-área-de-trabalho)
- [💸 Quanto custa](#-quanto-custa)
- [🆚 Comparação](#-comparação)
- [🌍 Entradas e idiomas compatíveis](#-entradas-e-idiomas-compatíveis)
- [💼 Casos de uso](#-casos-de-uso)
- [🚧 O que ele não faz](#-o-que-ele-não-faz)
- [❓ Perguntas frequentes](#-perguntas-frequentes)
- [🛠️ Stack técnico](#️-stack-técnico)
- [🧑‍💻 Desenvolvimento local](#-desenvolvimento-local)
- [☁️ Deploy](#️-deploy)
- [🌐 Adicionar um novo idioma](#-adicionar-um-novo-idioma)
- [🔬 Adicionar um novo modelo do Whisper](#-adicionar-um-novo-modelo-do-whisper)
- [🤝 Contribuindo](#-contribuindo)
- [📄 Licença](#-licença)

---

## ✨ O que ele faz

| | Recurso | O que você recebe de fato |
|---|---|---|
| 🎬 | **Áudio, vídeo e microfone** | Contêineres de vídeo são aceitos direto. A faixa de áudio é extraída localmente, então um MP4 de 200 MB também não sai da máquina. |
| 📝 | **Transcrição com carimbos de tempo** | Cada linha tem horário de início e de fim. Clique em uma para ouvir aquele trecho; o cursor da forma de onda acompanha. |
| 🔍 | **Busca dentro da transcrição** | Um nome, um número, um termo: pule para a frase e ouça de novo em vez de reescutar o arquivo inteiro. |
| 🎞️ | **Exportação de legendas** | SRT, WebVTT, texto puro, JSON (o objeto da transcrição com timecodes de precisão total) ou a área de transferência. |
| 🧪 | **Checagem de legendas** | Antes de exportar, sinaliza linhas longas demais, rápidas demais, repetidas, vazias ou sobrepostas. |
| 📚 | **Fila em lote** | Solte vários arquivos, defina um modelo e um idioma falado, e deixe a fila processar em ordem. Dá para pausar depois do arquivo atual a qualquer momento. |
| 🗂️ | **Projetos** | Os resultados ficam salvos no navegador como projetos em `/dashboard`: transcrições, legendas, arquivos de origem e uma lixeira, prontos para reabrir. |
| ✏️ | **Edição de legendas** | Corrija o texto, mova o ponto de entrada ou de saída de uma linha, divida ou apague, e exporte de novo. |
| 💾 | **Backup e restauração** | Exporte a área de trabalho inteira em um arquivo só e importe em outro navegador. |
| 🔁 | **Conversão de legendas** | SRT ⇄ VTT e SRT → texto, no navegador, sem baixar modelo — a única ferramenta daqui que começa na hora. |
| 🆓 | **Grátis e ilimitado** | Sem plano pago, sem cota diária, sem tarifa por minuto, sem conta. |
| 🔒 | **Privado por arquitetura** | A transcrição roda localmente. As páginas públicas têm analytics e anúncios; `/dashboard` fica sem anúncios. |
| 🌍 | **27 idiomas de interface, 99 idiomas falados** | A interface é traduzida para 27 locales; o Whisper detecta o idioma falado sozinho. |

---

## 🖼️ Capturas de tela

> Capturas reais do site no ar, **[earscribe.app](https://earscribe.app)**.

### 1. Solte um arquivo ou um vídeo, ou grave — sem cadastro e sem envio

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="Conversor grátis de áudio e vídeo para texto — solte MP3, WAV, M4A, MP4, MOV ou MKV no navegador. Sem cadastro, sem login."></a>
</p>

### 2. Transcrição com carimbos de tempo e forma de onda — clique em qualquer linha para pular

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="Resultado do EarScribe — áudio para texto com carimbos de tempo, cursor na forma de onda e exportação de legendas SRT e VTT em um clique"></a>
</p>

### 3. Três passos: soltar → escolher um modelo do Whisper → exportar

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="Como funciona o áudio para texto grátis no EarScribe — solte áudio ou vídeo, escolha um modelo do Whisper (tiny, base, small ou turbo), leia e exporte a transcrição"></a>
</p>

### 4. Por que o EarScribe — Whisper nativo do navegador, privacidade em primeiro lugar

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/04-features.webp" alt="Recursos do EarScribe — privado sem envio, WebGPU mais WASM, 99 idiomas falados detectados sozinhos, exportação SRT VTT JSON TXT, inferência no dispositivo"></a>
</p>

### 5. Quem usa o EarScribe — podcasters, jornalistas, estudantes, editores

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="Casos de uso do EarScribe — áudio para texto grátis para podcasters, jornalistas, estudantes, pesquisa com usuários, legendas de vídeo e transcrição de audiolivros"></a>
</p>

### 6. EarScribe vs Otter.ai, Rev, HappyScribe e um Whisper local

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="Comparação do EarScribe com Otter.ai, Rev e HappyScribe — áudio para texto grátis e ilimitado com inferência no dispositivo e sem tarifas por minuto"></a>
</p>

### 7. Perguntas frequentes — privacidade, formatos, exportação de legendas, uso offline

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="Perguntas frequentes sobre fala para texto grátis — respostas sobre privacidade, MP3 e vídeo para texto, exportação de legendas SRT e VTT, idiomas compatíveis, uso offline e Whisper no navegador"></a>
</p>

---

## 🚀 Início rápido

1. Abra **[earscribe.app](https://earscribe.app)** no Chrome, Edge, Safari ou Firefox.
2. Solte um arquivo — ou um vídeo, ou aperte gravar. Aceita até 1 GiB por arquivo; o limite real é a memória do seu dispositivo, não o tamanho no disco.
3. Escolha um modelo. **base** é o padrão e dá conta da maioria das falas; **tiny** é para celular ou um recado rápido; **small** e **turbo** são para áudio com sotaque, ruidoso ou importante.
4. Clique em **Transcrever**. O áudio é decodificado e entregue ao Whisper dentro da aba. Na primeira vez os pesos são baixados, então fique de olho no tamanho que aparece no botão.
5. Leia a transcrição, clique numa linha para ouvir de novo, corrija o que importa e depois **Exportar → SRT / VTT / TXT / JSON** ou copie.

Prefere um lote? Vá para a fila, solte quantos arquivos quiser e escolha o modelo uma vez só. A fila processa um arquivo por vez, reaproveita o modelo que já está na memória e salva cada resultado como projeto.

> 💡 **Sem etapa de conversão.** Um MP4 de duas horas entra direto. Se você quiser só o áudio, o app extrai a faixa de áudio do vídeo para você.

---

## 🗂️ A área de trabalho

`/dashboard` é o mesmo motor de transcrição, com memória. Tudo fica neste navegador —IndexedDB para os registros dos projetos, CacheStorage para os pesos do modelo— e nada é sincronizado com uma conta, porque não existe conta.

| Seção | O que fica ali |
|---|---|
| **Projetos** | Tudo, mais recente primeiro. |
| **Transcrições** | Projetos criados por uma transcrição. Editar as linhas mantém o projeto aqui. |
| **Legendas** | Projetos criados a partir de um arquivo de legenda — o conversor e as importações —, para o trabalho de legenda não se misturar com o de fala. |
| **Arquivos** | A mídia de origem que a área de trabalho guarda, filtrável por tipo: transcrições, legendas, áudio. O áudio original **não** é salvo por padrão. |
| **Lixeira** | Projetos apagados, recuperáveis até você esvaziar. |

Dentro de um projeto dá para buscar na transcrição, clicar num carimbo de tempo para ouvir de novo, editar as linhas de legenda (texto, pontos de entrada e saída, adicionar ou remover), quebrar linhas longas em outras mais curtas, exportar de novo em qualquer formato ou abrir o player sem sair da página.

**Backup:** a área de trabalho é exportada em um arquivo único (de até 320 MB) e importada em outro navegador ou em outra máquina. Como os projetos nunca saem do dispositivo, esse arquivo é a única cópia que viaja — trate como qualquer backup de documento.

---

## 💸 Quanto custa

Grátis não quer dizer sem custo. Estes são tamanhos de download medidos por modelo e backend, não estimativas:

| Modelo | WebGPU | WebAssembly | Uso típico |
|---|---:|---:|---|
| **tiny** | 151 MB | 41 MB | Recados de voz, celulares simples, um primeiro teste |
| **base** *(padrão)* | 291 MB | 77 MB | Entrevistas, reuniões, podcasts |
| **small** | 968 MB | 249 MB | Fala com sotaque, salas barulhentas |
| **turbo** | 3.24 GB | 1.09 GB | Transcrições de estúdio, quando precisão importa mais que tempo |

- **Baixa uma vez, fica em cache.** Os pesos ficam no cache do navegador; na segunda vez não baixa nada. Outro perfil de navegador significa baixar de novo.
- **A GPU compensa.** Na mesma máquina, a WebGPU terminou um arquivo de 40 minutos com o base em cerca de 3.8 minutos, contra 9.4 na CPU — umas 2.5× mais rápido, por três a quatro vezes mais download. O `turbo` na WebGPU nunca concluiu o download de 3.24 GB no nosso teste, então aparece como não medido, não como rápido.
- **A memória decide, não o tamanho do arquivo.** Gravações longas são decodificadas para 16 kHz mono antes da transcrição. Um MP3 de 40 minutos pede algumas centenas de megabytes; um WAV estéreo de duas horas pode estourar a aba antes de começar. A decodificação agora pede 16 kHz direto, o que reduziu o pico de memória num arquivo estéreo de duas horas de cerca de 1.6 GB para 0.5 GB.
- **Sem servidor, sem fila na máquina de outra pessoa.** O tempo é da sua CPU, então notebook lento é lento. É o preço de não enviar nada.

Medições completas, com o método e as execuções que falharam, estão nos [guias](https://earscribe.app/guides).

---

## 🆚 Comparação

Como o EarScribe se compara a outras formas de transcrever áudio em 2026?

| | **EarScribe** | Otter.ai Free | Rev Free Trial | HappyScribe | Whisper CLI local |
|---|:---:|:---:|:---:|:---:|:---:|
| **Grátis e ilimitado** | ✅ | ⚠️ 300 min/mês | ❌ Só teste | ❌ Pago | ✅ |
| **Sem cadastro / login** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Sem envio (privado)** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Vídeo sem enviar** | ✅ Extrai localmente | ❌ Precisa enviar | ❌ Precisa enviar | ❌ Precisa enviar | ✅ Precisa de ffmpeg |
| **Roda no navegador** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Exportação SRT / VTT** | ✅ | ⚠️ Pago | ✅ | ✅ | ⚠️ Manual |
| **Transcrição com carimbos de tempo** | ✅ | ✅ | ✅ | ✅ | ⚠️ Manual |
| **Inferência local** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **99 idiomas falados** | ✅ | ⚠️ Limitado | ⚠️ Limitado | ✅ | ✅ |
| **Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Precisa instalar** | ❌ Nada | ❌ Nada | ❌ Nada | ❌ Nada | ⚠️ Python + GPU |
| **Custo** | $0 | $0–$30/mês | $0.25/min | €0.20/min | $0 (seu hardware) |

**Onde ele perde:** uma instalação local consegue rodar um modelo maior num backend mais rápido que uma aba do navegador, e um serviço pago acrescenta rótulos de locutor e uma área de trabalho de equipe. A vantagem do EarScribe é ser grátis, não exigir instalação e o áudio nunca sair do lugar.

→ **[Experimente em earscribe.app](https://earscribe.app)**

---

## 🌍 Entradas e idiomas compatíveis

### Áudio — MP3, WAV, M4A, AAC, OGG, FLAC, Opus

Tudo o que a Web Audio API consegue decodificar é aceito; esses sete formatos cobrem quase toda gravação que você vai encontrar.

- 🎵 **[MP3 para texto](https://earscribe.app/mp3-to-text)** — o padrão de podcast e entrevista
- 🎙️ **[WAV para texto](https://earscribe.app/wav-to-text)** — gravações de estúdio e de campo sem perda
- 📱 **[M4A para texto](https://earscribe.app/m4a-to-text)** — Notas de Voz do iPhone
- 🎧 **[Recado de voz para texto](https://earscribe.app/voice-memo-to-text)** — gravações do celular
- 🔊 **[Áudio para texto](https://earscribe.app/audio-to-text)** — a porta de entrada geral
- 🎬 **[Áudio para SRT](https://earscribe.app/audio-to-srt)** — direto para as legendas

### Vídeo — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS

A faixa de áudio é separada com [mediabunny](https://mediabunny.dev), decodificada com WebCodecs e recodificada como um MP3 mono de 16 kHz pequeno (ou WAV onde não existe codificador MP3) — tudo localmente. Se o navegador não decodifica um contêiner, o app avisa com uma mensagem clara em vez de devolver uma transcrição vazia sem explicação.

### Microfone

A gravação acontece na aba com MediaRecorder. Uma gravação é transcrita exatamente como um arquivo solto; legendas ao vivo durante a gravação **não** são oferecidas (veja [o que ele não faz](#-o-que-ele-não-faz)).

### Idiomas — 99 falados, 27 de interface

O Whisper detecta o idioma falado sozinho: inglês, espanhol, francês, alemão, italiano, português, russo, japonês, coreano, chinês (simplificado e tradicional), árabe, híndi, turco, holandês, polonês, indonésio, sueco, norueguês, dinamarquês, finlandês, tcheco, húngaro, grego, hebraico, tailandês, vietnamita e outros 70+ idiomas.

A interface é traduzida para 27 locales. O inglês fica em `/`, os outros 26 levam prefixo:

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

## 💼 Casos de uso

### 🎙️ Podcasters e criadores
**[Transcrição de podcast](https://earscribe.app/podcast-transcription)** para notas do episódio, SEO e acessibilidade. Exporte SRT para a versão em vídeo e TXT para o blog.

### 📰 Jornalistas e pesquisadores
**[Transcrição de entrevista](https://earscribe.app/interview-transcription)** em que a gravação original fica no seu notebook. Não existe cópia de terceiro para vazar, ser intimada ou auditada.

### 🎓 Estudantes e professores
**[Transcrição de aula](https://earscribe.app/audio-to-text)** de uma turma gravada, pesquisável antes do próximo encontro. Funciona com Notas de Voz do iPhone e exportações do Zoom.

### 📞 Reuniões e pesquisa com usuários
**[Gravação de reunião para texto](https://earscribe.app/meeting-recording-to-text)** — uma transcrição da chamada, não notas de reunião geradas automaticamente.

### 🎬 Editores de vídeo
**[Áudio para SRT](https://earscribe.app/audio-to-srt)** para YouTube, Premiere, Final Cut e Resolve. O tempo de cada linha vem dos carimbos do próprio Whisper, e a checagem de legendas aponta o que vai estourar na tela.

### 📚 Audiolivros e gravações longas
Arquivos de duas horas são suportados, mas é aí que a memória do dispositivo decide. Leia [como áudio longo é tratado](https://earscribe.app/guides/how-to-transcribe-long-audio) antes de começar um de quatro horas.

---

## 🚧 O que ele não faz

Ser explícito aqui economiza uma execução perdida de todo mundo:

- **Sem separação de locutores.** Duas pessoas no mesmo arquivo geram texto corrido, sem rótulos "Locutor 1 / Locutor 2". A página de entrevista diz isso de propósito.
- **Sem tradução.** A transcrição fica no idioma falado; idioma da interface e idioma falado não têm relação.
- **Sem legendas ao vivo.** Gravar e transcrever são etapas separadas — o microfone grava primeiro e depois o arquivo é transcrito.
- **A fila é serial e precisa da aba aberta.** Um modelo e um idioma para o lote inteiro. Fechar a aba interrompe.
- **Sem sincronização entre dispositivos.** Os projetos vivem neste navegador. Use a exportação da área de trabalho para levá-los.
- **Não é um app offline.** Os pesos ficam em cache, mas a página em si vem da rede. Instalar cria um atalho na área de trabalho ou na tela inicial, não uma cópia offline.
- **1 GiB por arquivo é um teto rígido; a memória é o limite prático.**

---

## ❓ Perguntas frequentes

<details>
<summary><b>O EarScribe é mesmo grátis, sem limites?</b></summary><br/>
Sim — sem plano pago, sem cartão, sem tarifa por minuto, sem cota diária ou mensal, sem conta. O processamento roda no seu próprio hardware, então não existe conta de nuvem para repassar. Há um teto de 1 GiB por arquivo, e a memória do seu dispositivo define o que de fato termina.
</details>

<details>
<summary><b>Meu áudio é enviado para algum lugar?</b></summary><br/>
Não. O áudio é decodificado na aba e entregue a um modelo Whisper rodando num Web Worker. Os pesos do modelo são baixados <i>para</i> o seu navegador a partir de uma CDN, o que significa que a CDN vê o seu endereço IP — mas a gravação não é enviada. As páginas públicas têm Google AdSense — exceto as páginas em persa, que a política do AdSense exclui — e analytics Plausible sem cookies; <code>/dashboard</code> não carrega código de anúncio.
</details>

<details>
<summary><b>Consigo transcrever um vídeo?</b></summary><br/>
Sim, direto — MP4, MOV, MKV, WebM, M4V, TS, QT e M2TS. A faixa de áudio é extraída dentro do navegador e transcrita como um arquivo normal, então você não precisa de ffmpeg nem de site conversor. Se o contêiner usar um codec que o navegador não decodifica, o app avisa em vez de entregar uma transcrição vazia.
</details>

<details>
<summary><b>Por que a primeira execução é lenta?</b></summary><br/>
Na primeira vez que você usa um modelo, o navegador baixa os pesos — 41 MB para o tiny em WebAssembly até 3.24 GB para o turbo em WebGPU. Depois ficam em cache. Para quase tudo, escolha o <b>base</b> (77 MB em WebAssembly, 291 MB em WebGPU).
</details>

<details>
<summary><b>Qual é a precisão e qual modelo devo escolher?</b></summary><br/>
No mesmo clipe de 34 segundos, nossos quatro modelos discordaram em 26 de 111 palavras, e o mesmo modelo em dois tamanhos de download discordou de si mesmo. Escolha pelas palavras que importam para você, não por uma porcentagem de precisão: <a href="https://earscribe.app/guides/which-whisper-model-should-i-use">o guia de modelos</a> mostra as diferenças reais.
</details>

<details>
<summary><b>Consigo legendas SRT ou VTT?</b></summary><br/>
Sim: Exportar → SRT ou VTT. O tempo vem dos limites de segmento do próprio Whisper, não de dividir o texto depois. A checagem de legendas sinaliza linhas longas demais, rápidas demais, repetidas, vazias ou sobrepostas, e você pode editar texto e tempo antes de exportar.
</details>

<details>
<summary><b>E se eu já tiver um arquivo SRT ou VTT?</b></summary><br/>
Converta sem baixar modelo: <a href="https://earscribe.app/srt-to-vtt">SRT para VTT</a> e <a href="https://earscribe.app/srt-to-txt">SRT para texto</a> leem o arquivo localmente. Nada é enviado e nenhum peso do Whisper é baixado.
</details>

<details>
<summary><b>Funciona offline?</b></summary><br/>
A etapa de transcrição funciona: uma vez carregados a página e o modelo, o áudio é processado sem contatar servidor de transcrição. O app não é um pacote offline — abrir precisa de rede, e um modelo que você nunca baixou precisa ser buscado. Instalar pelo rodapé cria um atalho que abre a área de trabalho; não cria uma cópia offline.
</details>

<details>
<summary><b>Ele identifica quem está falando?</b></summary><br/>
Não. A saída é texto corrido com timecodes. Diarização de locutores não faz parte desta versão, e o app não finge o contrário.
</details>

<details>
<summary><b>Onde ficam meus resultados?</b></summary><br/>
Neste navegador: os projetos no IndexedDB, os pesos do modelo no CacheStorage. O áudio original não é salvo com o projeto a menos que você o mantenha. Uma página que nunca foi salva na área de trabalho começa limpa ao recarregar; use <code>/dashboard</code> e a exportação dele para guardar o que importa.
</details>

<details>
<summary><b>Existe uma alternativa grátis ao Otter.ai ou ao Rev?</b></summary><br/>
O EarScribe é uma alternativa gratuita aos serviços de transcrição na nuvem: o processamento é seu, o áudio fica onde está e não há tarifa por minuto. A troca é real — sem rótulos de locutor, sem área de trabalho de equipe, e arquivos longos dependem da sua máquina.
</details>

<details>
<summary><b>Como converto um MP3 para texto de graça?</b></summary><br/>
Solte o MP3 em <a href="https://earscribe.app/mp3-to-text">earscribe.app/mp3-to-text</a> (ou na página inicial). Ele é decodificado no seu navegador, transcrito localmente, e pode ser copiado ou exportado como SRT, VTT, TXT ou JSON.
</details>

> Mais respostas na **[página Sobre](https://earscribe.app/about)** e notas de medição nos **[guias](https://earscribe.app/guides)**.

---

## 🛠️ Stack técnico

- **[Next.js 15](https://nextjs.org)** (App Router) + **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web, WebGPU com fallback para WebAssembly
- **[OpenAI Whisper](https://github.com/openai/whisper)** — tiny, base, small e large-v3-turbo, quantizados em ONNX
- **[mediabunny](https://mediabunny.dev)** + **WebCodecs** — demux de vídeo e extração de áudio na aba
- **[next-intl](https://next-intl.dev)** — 27 locales, um catálogo de mensagens por idioma
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Cloudflare Pages](https://pages.cloudflare.com)** para a hospedagem, com algumas Pages Functions (host de modelos, endpoint de feedback)

O site é renderizado de forma estática e hidrata no navegador; transcrição e conversão de legendas acontecem só no cliente. Os pesos do modelo vêm da CDN do Hugging Face no primeiro uso e ficam no CacheStorage.

---

## 🧑‍💻 Desenvolvimento local

```bash
git clone https://github.com/rocnubie/earscribe-free-speech-to-text.git
cd earscribe-free-speech-to-text
pnpm install
pnpm dev
# → http://localhost:3000
```

Checagens que rodam antes de um deploy:

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

`pnpm build` gera uma exportação estática em `out/`. Várias auditorias leem `out/`, então rode o build primeiro.

---

## ☁️ Deploy

Os deploys de produção passam por um comando só, que roda todas as auditorias em ordem:

```bash
pnpm pages:deploy
```

Primeiro ele compara o marcador de deploy local (`deployId` em `lib/release.ts`) com o que está no ar em `/changelog` e se recusa a continuar se forem iguais — é assim que um build desatualizado é pego. Depois faz o build, roda as auditorias de links, guias, `llms.txt`, i18n, sitemap e PWA, e publica `out/` no Cloudflare Pages.

`/changelog` é uma lista de mudanças para quem lê, com coisas sobre as quais dá para agir. Não é um log de build: refatorações internas, ajustes de texto e trabalho de tradução ganham um novo `deployId`, mas nenhuma entrada no changelog.

Ambiente e bindings:

| Nome | Para que serve |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URLs canônicas, sitemap, tags OG |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Identificador do site no Plausible |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | URL do script do Plausible |
| `FEEDBACK_DB` (binding D1) | O endpoint `/feedback`; schema em `migrations/` |

---

## 🌐 Adicionar um novo idioma

1. Acrescente o código do locale a `ALL_LOCALE_NAMES` em [`i18n/locale.ts`](i18n/locale.ts).
2. Crie `messages/<code>.json` ao lado de `en.json`, totalmente traduzido.
3. Rode `pnpm i18n:gate` — roteamento, sitemap, hreflang e metadados OG pegam o locale sozinhos, mas uma chave faltando derruba o gate.

Só entram em `translatedLocales` os locales que passam no gate; o seletor de idioma marca o resto como parcial.

---

## 🔬 Adicionar um novo modelo do Whisper

Acrescente uma entrada em `MODELS` em [`lib/models.ts`](lib/models.ts) com um `sizeMB` **medido** para `wasm` e para `webgpu` — os dois backends entregam arquivos de pesos diferentes, e citar um número só para ambos foi como o app chegou a prometer 500 MB e entregar 968 MB. O repositório precisa existir no Hugging Face como `onnx-community/<name>` ou ser compatível com ONNX-Whisper. Adicione um bloco `models.<id>` correspondente em cada `messages/*.json` para os textos de prós e contras.

---

## 🤝 Contribuindo

Pull requests são bem-vindas — especialmente:

- Traduções (`messages/<code>.json`) e correções de README específicas de cada locale
- Relatos de bug com o arquivo que quebrou, o navegador e a memória do dispositivo
- Medições: tamanho de modelo, tempo e pico de memória em hardware que não temos
- Correções de acessibilidade

Abra uma issue ou uma PR aqui, ou experimente primeiro o **[earscribe.app](https://earscribe.app)** para ver a que você estaria contribuindo.

---

## 📄 Licença

O site de marketing e as páginas deste repositório são [MIT](LICENSE): livres para uso pessoal e comercial. O worker de transcrição, o decodificador de áudio e os exportadores de legendas não são publicados aqui, então este repositório não é uma cópia completa do serviço que você possa hospedar por conta própria.

---

<p align="center">
  <b>👉 Experimente o app: <a href="https://earscribe.app">earscribe.app</a></b><br/>
  <sub>Áudio para texto · Vídeo para texto · Fala para texto · Exportação de legendas · 100% grátis · Sem cadastro · No dispositivo</sub>
</p>

<p align="center">
  Feito com ❤️ sobre <a href="https://github.com/openai/whisper">OpenAI Whisper</a>, <a href="https://huggingface.co/docs/transformers.js">Transformers.js</a>, <a href="https://onnxruntime.ai">ONNX Runtime Web</a> e <a href="https://mediabunny.dev">mediabunny</a>.
</p>
