<p align="center">
  <b>🌐 Language / 语言 / Idioma:</b><br/>
  <a href="README.md">English</a> · <a href="README.zh-CN.md">中文</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português</a> · <a href="README.ja.md">日本語</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.ru.md">Русский</a> · <a href="README.ko.md">한국어</a>
</p>

<h1 align="center">EarScribe — Conversor de Áudio para Texto Grátis &amp; Reconhecimento de Voz Grátis</h1>

<p align="center">
  <b>Transcreva áudio e vídeo para texto no seu navegador. 100% grátis, sem cadastro, sem envio. Ilimitado.</b><br/>
  <sub>Powered by OpenAI Whisper via WebGPU / WebAssembly — seu áudio nunca sai do seu dispositivo.</sub>
</p>

<p align="center">
  <a href="https://earscribe.app/pt-br"><img alt="Demo ao vivo" src="https://img.shields.io/badge/Acesse-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app/pt-br"><img alt="Grátis" src="https://img.shields.io/badge/100%25-Grátis-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app/pt-br"><img alt="Sem cadastro" src="https://img.shields.io/badge/Sem-Cadastro-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app/pt-br"><img alt="Privado" src="https://img.shields.io/badge/No--dispositivo-Privado-0f172a?style=for-the-badge"></a>
  <img alt="Licença MIT" src="https://img.shields.io/badge/Licença-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app/pt-br"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe — Conversor de áudio para texto grátis — arraste um MP3, WAV ou M4A e receba voz em texto direto no navegador via OpenAI Whisper, sem cadastro"></a>
</p>

<p align="center">
  <b>Experimente agora:</b>
  <a href="https://earscribe.app/pt-br"><strong>earscribe.app/pt-br</strong></a> ·
  <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/about">Sobre o projeto</a>
</p>

---

## O que é o EarScribe?

**[EarScribe](https://earscribe.app)** é um **conversor de áudio para texto grátis** e uma ferramenta de **reconhecimento de voz** que roda inteiramente no seu navegador. Arraste um arquivo de áudio — MP3, WAV, M4A, OGG, FLAC ou WebM — e receba uma transcrição completa com marcações de tempo, além de exportação direta para **legendas SRT** e **VTT** em um clique. Não existe upload, não existe login, não existe chave de API e não existe cobrança por minuto.

É a maneira mais simples de **transcrever áudio e vídeo para texto** de forma gratuita:

- Arraste qualquer arquivo de áudio e solte na página
- O **OpenAI Whisper** transcreve localmente, sem enviar nada para servidor algum
- Receba a **transcrição com timestamps**, waveform sincronizado e **legendas SRT / VTT**
- Seu áudio **nunca sai do dispositivo** — totalmente privado, funciona offline após o primeiro download do modelo

**Transcrição privada, grátis ilimitado, sem conta, sem cadastro.** É assim que deveria ser.

> Acesse agora: **[earscribe.app/pt-br](https://earscribe.app/pt-br)**

---

## Índice

- [Funcionalidades](#funcionalidades)
- [Capturas de tela](#capturas-de-tela)
- [Como usar em 3 passos](#como-usar-em-3-passos)
- [Comparação com Otter.ai, Rev e outros](#comparação-com-otterai-rev-e-outros)
- [Modelos Whisper disponíveis](#modelos-whisper-disponíveis)
- [Formatos suportados e 99 idiomas](#formatos-suportados-e-99-idiomas)
- [Casos de uso](#casos-de-uso)
- [Perguntas frequentes](#perguntas-frequentes)
- [Stack técnico](#stack-técnico)
- [Desenvolvimento local](#desenvolvimento-local)
- [Licença](#licença)

---

## Funcionalidades

O EarScribe é um ambiente completo de **transcrição automática grátis** — feito para podcasters, jornalistas, estudantes e qualquer pessoa que precise converter voz em texto sem enviar gravações sensíveis para um serviço de nuvem.

| | Funcionalidade | O que significa |
|---|---|---|
| | **100% grátis, ilimitado** | Sem plano pago, sem cota diária, sem cobrança por minuto. **Áudio em texto grátis** de verdade. |
| | **Sem cadastro, sem login** | Sem e-mail, sem conta, sem cartão de crédito. Abra [earscribe.app/pt-br](https://earscribe.app/pt-br) e arraste o arquivo. |
| | **Transcrição privada** | O áudio nunca sai do seu dispositivo. Não existe endpoint de servidor que toca no seu arquivo. |
| | **IA nativa no navegador** | O **OpenAI Whisper** roda localmente via WebGPU (acelerado por GPU) ou WebAssembly como fallback. |
| | **Exportar legendas SRT e VTT** | Um clique para exportar legendas prontas para Premiere, Final Cut, DaVinci Resolve e YouTube. |
| | **Transcrição com timestamps** | Clique em qualquer linha para pular para aquele momento no áudio. Waveform integrado. |
| | **99 idiomas** | O Whisper detecta automaticamente o idioma falado — sem configuração manual. |
| | **Funciona offline** | Após o primeiro download, os modelos ficam em cache. Transcrições seguintes funcionam sem internet. |
| | **4 modelos Whisper** | Tiny (80 MB) → Base → Small → **Large v3 Turbo** para precisão profissional. |
| | **Múltiplos formatos de exportação** | `.txt` · `.srt` · `.vtt` · `.json` (com timing) |
| | **10 idiomas de interface** | PT-BR · EN · ES · DE · FR · RU · JA · KO · HI · AR |
| | **Sem anúncios, sem rastreamento** | Apenas Plausible Analytics — sem session replay, sem cookies, sem fingerprinting. |

---

## Capturas de tela

> Capturas reais da aplicação em **[earscribe.app/pt-br](https://earscribe.app/pt-br)** — 2026.

### 1. Arraste o arquivo — transcrição de áudio grátis, sem cadastro, sem login

<p align="center">
  <a href="https://earscribe.app/pt-br"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="Conversor de áudio para texto grátis — arraste MP3, WAV, M4A, OGG, FLAC ou WebM no navegador. Voz em texto e reconhecimento de voz grátis, sem cadastro, sem login, ilimitado."></a>
</p>

### 2. Transcrição com timestamps e waveform — clique em qualquer linha para ouvir

<p align="center">
  <a href="https://earscribe.app/pt-br"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="Transcrição de voz grátis no EarScribe — resultado com timestamps, waveform sincronizado e exportação de legendas SRT e VTT em um clique. MP3 em texto, WAV em texto, M4A em texto."></a>
</p>

### 3. Três passos: arraste → escolha o modelo Whisper → exporte

<p align="center">
  <a href="https://earscribe.app/pt-br"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="Como funciona o conversor de áudio para texto grátis EarScribe — arraste o áudio, escolha o modelo OpenAI Whisper (Tiny, Base, Small ou Large v3 Turbo), leia e exporte a transcrição sem cadastro"></a>
</p>

### 4. Por que o EarScribe — privacidade em primeiro lugar, Whisper nativo no navegador

<p align="center">
  <a href="https://earscribe.app/pt-br"><img src="https://earscribe.app/screenshots/04-features.webp" alt="Funcionalidades do EarScribe — transcrição privada sem envio, WebGPU e WASM, 99 idiomas detectados automaticamente, exportação SRT VTT JSON TXT, funciona offline, 100% grátis sem chave de API"></a>
</p>

### 5. Quem usa o EarScribe — podcasters, jornalistas, estudantes, editores de vídeo

<p align="center">
  <a href="https://earscribe.app/pt-br"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="Casos de uso do EarScribe — transcrição de podcast grátis, transcrição de aula, transcrição de reunião, gerar legendas SRT de vídeo, transcrição de entrevista, transcrição de audiolivro"></a>
</p>

### 6. EarScribe vs Otter.ai vs Rev vs Whisper API — comparação direta

<p align="center">
  <a href="https://earscribe.app/pt-br"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="EarScribe vs Otter.ai vs Rev vs Whisper API — alternativa grátis ao Otter.ai e ao Rev com áudio em texto ilimitado, sem taxas por minuto e privacidade no dispositivo"></a>
</p>

### 7. Perguntas frequentes — transcrição de voz grátis

<p align="center">
  <a href="https://earscribe.app/pt-br"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="FAQ de voz em texto grátis — respostas sobre privacidade, converter MP3 em texto, exportar legendas SRT e VTT, idiomas suportados, uso offline e OpenAI Whisper online no navegador"></a>
</p>

---

## Como usar em 3 passos

O fluxo mais rápido de **transcrição de voz grátis** disponível no navegador:

**Passo 1 — Abra o EarScribe**

Acesse **[earscribe.app/pt-br](https://earscribe.app/pt-br)** em qualquer navegador moderno (Chrome, Edge, Safari, Firefox). Não precisa instalar nada, não precisa criar conta.

**Passo 2 — Arraste seu arquivo de áudio**

Solte um arquivo MP3, WAV, M4A, OGG, FLAC ou WebM na página (até ~2 horas por arquivo). Em seguida, escolha um modelo Whisper. O **Base** é recomendado para a maioria dos casos; o **Turbo** oferece precisão profissional se você tiver WebGPU disponível no navegador.

**Passo 3 — Transcreva e exporte**

Clique em **Transcrever**. O áudio é decodificado e processado pelo Whisper *dentro da aba do navegador*. Leia a transcrição, clique em qualquer linha para ouvir aquele trecho, ou exporte em **SRT / VTT / TXT / JSON**.

Sem upload. Sem conta. Sem cota. Só **áudio em texto grátis** que respeita seus dados.

> **Dica:** Quer **transcrever um vídeo para texto**? Extraia o áudio primeiro com qualquer ferramenta gratuita (ffmpeg, Audacity ou VLC exportam MP3 / WAV de um vídeo) e arraste o resultado para o EarScribe.

---

## Comparação com Otter.ai, Rev e outros

Como o EarScribe se compara a outras formas de **transcrever áudio para texto** em 2026?

| | **EarScribe** | Otter.ai Grátis | Rev (Trial) | HappyScribe | Whisper CLI local |
|---|:---:|:---:|:---:|:---:|:---:|
| **Grátis e ilimitado** | ✅ | ⚠️ 300 min/mês | ❌ Apenas trial | ❌ Pago | ✅ |
| **Sem cadastro / login** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Áudio não é enviado (privado)** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Funciona no navegador** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Exportar legendas SRT / VTT** | ✅ | ⚠️ Pago | ✅ | ✅ | ⚠️ Manual |
| **Transcrição com timestamps** | ✅ | ✅ | ✅ | ✅ | ⚠️ Manual |
| **Funciona offline** | ✅ (após 1ª carga) | ❌ | ❌ | ❌ | ✅ |
| **99 idiomas** | ✅ | ⚠️ Limitado | ⚠️ Limitado | ✅ | ✅ |
| **OpenAI Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Instalação necessária** | ❌ Nenhuma | ❌ Nenhuma | ❌ Nenhuma | ❌ Nenhuma | ⚠️ Python + GPU |
| **Custo** | R$ 0 | R$ 0–R$ 150/mês | US$ 0,25/min | €0,20/min | R$ 0 (seu hardware) |

**Conclusão:** O EarScribe é a única ferramenta que combina *realmente grátis, ilimitado, sem cadastro, sem upload, nativo no navegador e com legendas prontas* — tudo em um clique. É a **alternativa grátis ao Otter.ai** e a **alternativa grátis ao Rev** com privacidade real. → **[Experimente em earscribe.app/pt-br](https://earscribe.app/pt-br)**

---

## Modelos Whisper disponíveis

O EarScribe oferece quatro tamanhos de modelo **OpenAI Whisper**. Todos rodam localmente; o primeiro download fica em cache permanentemente no navegador.

| Modelo | Tamanho | Precisão | Velocidade | RAM mínima | Ideal para |
|---|---:|:---:|:---:|---:|---|
| **Whisper Tiny** | ~80 MB | ⭐ | ⚡⚡⚡⚡ | 1 GB | Notas de voz rápidas, celulares com pouca memória |
| **Whisper Base** *(Recomendado)* | ~200 MB | ⭐⭐ | ⚡⚡⚡ | 2 GB | Transcrição de podcast e aula no dia a dia |
| **Whisper Small** | ~500 MB | ⭐⭐⭐ | ⚡⚡ | 4 GB | Sotaques regionais, áudio com ruído de fundo |
| **Whisper Large v3 Turbo** | ~800 MB | ⭐⭐⭐⭐ | ⚡⚡⚡ (WebGPU) | 6 GB | Transcrições profissionais, múltiplos falantes, música com voz |

> Os modelos são **armazenados em cache após o primeiro uso** — a próxima transcrição começa na hora. Confira os detalhes completos em **[earscribe.app/pt-br](https://earscribe.app/pt-br)**.

---

## Formatos suportados e 99 idiomas

### Formatos de áudio — MP3, WAV, M4A, OGG, FLAC, WebM

O EarScribe aceita qualquer formato que a Web Audio API consiga decodificar:

- **[Converter MP3 em texto](https://earscribe.app/pt-br)** — o formato mais comum de podcast
- **[WAV em texto](https://earscribe.app/pt-br)** — gravações de estúdio sem compressão
- **[M4A em texto](https://earscribe.app/pt-br)** — notas de voz do iPhone e do Apple Voice Memos
- **OGG em texto** — formato de código aberto
- **FLAC em texto** — arquivos de alta fidelidade
- **WebM em texto** — áudio e vídeo gravados pelo navegador

Para **vídeo para texto** (MP4, MOV, MKV), extraia o áudio primeiro com qualquer ferramenta gratuita (Audacity, VLC, ffmpeg) e arraste o MP3 ou WAV resultante para o **[earscribe.app/pt-br](https://earscribe.app/pt-br)**.

### Idiomas — 99 suportados

O Whisper detecta automaticamente o idioma falado. O EarScribe transcreve português, inglês, espanhol, francês, alemão, italiano, russo, japonês, coreano, chinês (simplificado e tradicional), árabe, hindi, turco, holandês, polonês, indonésio, sueco, norueguês, dinamarquês, finlandês, tcheco, húngaro, grego, hebraico, tailandês, vietnamita e mais 70 idiomas.

A interface está disponível em:

| Idioma | Link |
|---|---|
| Português (Brasil) | [earscribe.app/pt-br](https://earscribe.app/pt-br) |
| English | [earscribe.app](https://earscribe.app) |
| Español | [earscribe.app/es](https://earscribe.app/es) |
| Deutsch | [earscribe.app/de](https://earscribe.app/de) |
| Français | [earscribe.app/fr](https://earscribe.app/fr) |
| Русский | [earscribe.app/ru](https://earscribe.app/ru) |
| 日本語 | [earscribe.app/ja](https://earscribe.app/ja) |
| 한국어 | [earscribe.app/ko](https://earscribe.app/ko) |
| हिन्दी | [earscribe.app/hi](https://earscribe.app/hi) |
| العربية | [earscribe.app/ar](https://earscribe.app/ar) |

---

## Casos de uso

O EarScribe é uma ferramenta de **transcrição automática grátis** de uso geral. Veja o que as pessoas fazem com ela:

### Podcasters e criadores de conteúdo

**Transcrição de podcast grátis** para show notes, SEO de episódios e acessibilidade. Converta seu **MP3 em texto** em minutos e exporte `.srt` para a versão em vídeo do episódio. → [Comece em earscribe.app/pt-br](https://earscribe.app/pt-br)

### Jornalistas e pesquisadores

**As fontes ficam no seu computador.** Nenhum servidor de terceiros, nenhum log de auditoria, nenhuma superfície de vazamento. **Transcrição de entrevista grátis** com uma das garantias de privacidade mais sólidas disponíveis na web. Ideal para jornalismo investigativo e pesquisa qualitativa.

### Estudantes e educadores

**Transcrição de aula grátis** — grave a aula, arraste o arquivo e tenha uma transcrição pesquisável antes da próxima sessão. Funciona com gravações do iPhone (`.m4a`) e do Zoom.

### Reuniões e pesquisa com usuários

**Áudio em texto para entrevistas de usuário** — gere uma transcrição etiquetada sem enviar áudio sensível de clientes para um SaaS de terceiros. Transcrição de reunião privada e sem custo.

### Editores de vídeo — legendas e closed captions

**Gerar legendas grátis** em formato SRT ou VTT para YouTube, Premiere Pro, Final Cut Pro e DaVinci Resolve. A sincronização vem diretamente dos timestamps emitidos pelo Whisper, então as legendas encaixam no áudio sem ajuste manual.

### Audiolivros e gravações longas

Arquivo MP3 de duas horas? Sem problema. O **Whisper Large v3 Turbo** processa áudios longos sem taxas por minuto e sem cota de API. Perfeito para transcrição de audiolivros, sermões e gravações de eventos.

---

## Perguntas frequentes

<details>
<summary><b>O EarScribe é realmente 100% grátis sem limites?</b></summary><br/>
Sim — 100% grátis, ilimitado, sem cadastro e sem login. Não há plano pago, cartão de crédito, cobrança por minuto ou cota diária. O modelo de <b>reconhecimento de voz</b> OpenAI Whisper roda no seu próprio hardware, então não existe custo de computação em nuvem a ser repassado. <b>Conversor de áudio para texto grátis</b> sem pegadinhas.
</details>

<details>
<summary><b>Meu áudio é privado e seguro?</b></summary><br/>
Totalmente privado. O EarScribe é uma ferramenta <em>local-first</em>: seu arquivo de áudio nunca sai do dispositivo e nunca é enviado a nenhum servidor. Sem conta significa sem dados coletados sobre você. Você pode até usar offline depois que o modelo for baixado. <b>Transcrição privada</b> de verdade.
</details>

<details>
<summary><b>O áudio é enviado para algum servidor?</b></summary><br/>
Não. A <b>transcrição automática grátis</b> acontece inteiramente de forma local — o áudio é decodificado no seu dispositivo e processado por um modelo Whisper rodando em um Web Worker. Nada é enviado a nenhum servidor. O <b>áudio não é enviado</b> em nenhuma etapa do processo.
</details>

<details>
<summary><b>Por que a primeira vez é lenta?</b></summary><br/>
Na primeira vez que você escolhe um modelo, o navegador faz o download dele (de 80 MB a 800 MB, dependendo do tamanho). Depois disso, o modelo fica armazenado em cache no navegador e reutilizado — sem novo download. Transcrições seguintes começam imediatamente.
</details>

<details>
<summary><b>Quais idiomas são suportados?</b></summary><br/>
O <b>conversor de áudio para texto grátis</b> suporta 99 idiomas via Whisper, incluindo português brasileiro. O idioma é detectado automaticamente — você não precisa configurar nada. Funciona com sotaques regionais do Brasil sem ajustes.
</details>

<details>
<summary><b>Consigo transcrever um vídeo para texto?</b></summary><br/>
Não diretamente pelo EarScribe. Para <b>transcrever áudio e vídeo para texto</b>, extraia o áudio primeiro com qualquer ferramenta gratuita — ffmpeg, Audacity ou VLC exportam MP3 ou WAV de qualquer vídeo — e arraste o resultado para <a href="https://earscribe.app/pt-br">earscribe.app/pt-br</a>.
</details>

<details>
<summary><b>Funciona offline?</b></summary><br/>
Após o modelo ser baixado uma vez, sim — a <b>transcrição de voz grátis</b> funciona offline. A página precisa ser carregada uma primeira vez, mas as transcrições seguintes funcionam sem internet. Útil para gravar em campo e transcrever no avião ou em locais sem sinal.
</details>

<details>
<summary><b>Como converter MP3 em texto de graça?</b></summary><br/>
Arraste o MP3 para o <a href="https://earscribe.app/pt-br">EarScribe</a>. O arquivo é decodificado no navegador, o Whisper transcreve localmente e você pode copiar o resultado ou exportar como SRT, VTT, TXT ou JSON. Não existe etapa de upload e não é preciso criar conta. <b>Converter MP3 em texto</b> nunca foi tão simples.
</details>

<details>
<summary><b>O EarScribe é uma alternativa grátis ao Otter.ai e ao Rev?</b></summary><br/>
Sim. O EarScribe é uma <b>alternativa grátis ao Otter.ai</b> e uma <b>alternativa grátis ao Rev</b> para quem precisa de transcrição sem pagar por minuto ou assinar um plano mensal. A diferença: você faz o processamento no seu próprio hardware, mas o áudio nunca sai do dispositivo e não há taxas ou limites de uso.
</details>

<details>
<summary><b>Como gerar legendas SRT ou VTT a partir de um áudio?</b></summary><br/>
Após a transcrição, clique em <b>Exportar → .srt</b> ou <b>.vtt</b>. A sincronização vem dos timestamps emitidos pelo Whisper, então as <b>legendas SRT</b> e <b>VTT</b> encaixam no áudio sem ajuste manual. Arraste o arquivo exportado direto para o Premiere, Final Cut, DaVinci ou YouTube. <b>Gerar legendas grátis</b> nunca foi tão direto.
</details>

<details>
<summary><b>O EarScribe roda o OpenAI Whisper no navegador?</b></summary><br/>
Sim — o EarScribe executa a <b>transcrição automática grátis</b> via <b>OpenAI Whisper online</b> (Tiny, Base, Small e Large v3 Turbo) diretamente no navegador, usando Transformers.js sobre WebGPU, com fallback para WebAssembly quando WebGPU não está disponível. É o mesmo modelo que alimenta produtos pagos de transcrição, rodando de graça no seu dispositivo.
</details>

> Mais respostas na **[página Sobre](https://earscribe.app/about)**.

---

## Stack técnico

O EarScribe foi construído para ser rápido, estático e barato de hospedar:

- **[Next.js 15](https://nextjs.org)** (App Router) + **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web (WebGPU + WASM)
- **[OpenAI Whisper](https://github.com/openai/whisper)** — Tiny, Base, Small, Large v3 Turbo (ONNX quantizado)
- **[next-intl](https://next-intl.dev)** — i18n (10 idiomas incluídos)
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[@opennextjs/cloudflare](https://opennext.js.org/cloudflare)** — deploy no Cloudflare Pages
- **Plausible Analytics** (carregado apenas em produção)

Todo o frontend é **estático**. Os pesos dos modelos são baixados do CDN do Hugging Face no primeiro uso e armazenados em cache pelo CacheStorage do navegador.

---

## Desenvolvimento local

```bash
git clone https://github.com/<seu-org>/earscribe.git
cd earscribe
pnpm install
pnpm dev
# → http://localhost:3000
```

Verificação de tipos, lint e build:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

Deploy para Cloudflare Pages:

```bash
pnpm cf:build       # gera .open-next/
pnpm cf:preview     # preview local via Wrangler
pnpm cf:deploy      # wrangler deploy
```

Variáveis de ambiente necessárias no painel do Cloudflare:

| Variável | Uso |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URLs canônicas, sitemap, tags OG |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Identificador do site no Plausible |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | URL do script do Plausible |

---

## Licença

[MIT](LICENSE) — livre para uso pessoal e comercial.

---

<p align="center">
  <b>Experimente agora: <a href="https://earscribe.app/pt-br">earscribe.app/pt-br</a></b><br/>
  <sub>Conversor de áudio para texto grátis · Voz em texto · Transcrição de voz grátis · 100% grátis · Sem cadastro · Privado · Áudio não é enviado</sub>
</p>

<p align="center">
  Construído com <a href="https://github.com/openai/whisper">OpenAI Whisper</a>, <a href="https://huggingface.co/docs/transformers.js">Transformers.js</a> e <a href="https://onnxruntime.ai">ONNX Runtime Web</a>.
</p>
