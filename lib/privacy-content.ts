import type { Locale } from "@/i18n/locale";

type PrivacyLocale = "en" | "zh-CN" | "ja" | "fr" | "es" | "ko";
export const PRIVACY_LOCALES = ["en", "zh-CN", "ja", "fr", "es", "ko"] as const;

interface PrivacyCopy {
  title: string;
  description: string;
  updated: string;
  intro: string;
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
}

const COPY: Record<PrivacyLocale, PrivacyCopy> = {
  en: {
    title: "Privacy at EarScribe",
    description: "What EarScribe processes locally, what the browser downloads, and what limited analytics the site records.",
    updated: "Updated July 27, 2026",
    intro: "EarScribe is designed so the audio file you choose is decoded and transcribed on your device. This page explains that boundary without claiming that a web page makes every privacy or security risk disappear.",
    sections: [
      { title: "Your audio and transcript", paragraphs: ["The selected audio is passed to browser audio APIs and a Whisper model running in a Web Worker. EarScribe does not upload that audio to its application server.", "Transcript edits may be saved in this browser so they can be restored when you select the same file again. Audio is not included in that saved draft."], bullets: ["You can clear saved drafts through your browser site-data settings.", "Exported files are created locally and downloaded by your browser."] },
      { title: "What the browser downloads", paragraphs: ["The page loads HTML, JavaScript, CSS and fonts or images used by the interface. On first use, the selected Whisper model is downloaded through EarScribe's model proxy and may be cached by the browser."], bullets: ["Model downloads range from roughly 80 MB to 800 MB.", "Removing browser cache or site data may remove cached models and saved drafts."] },
      { title: "Aggregate analytics", paragraphs: ["EarScribe uses Plausible Analytics to understand aggregate visits and real product actions such as selecting a file, starting a transcription, completing it, using subtitle checks and exporting a format."], bullets: ["Audio, transcript text and file names are not sent as analytics properties.", "Device capability is attached only to real workflow events to diagnose compatibility and performance."] },
      { title: "Limits of local processing", paragraphs: ["Local processing reduces exposure created by uploading recordings to a transcription service, but it does not make the browser, device, extensions, network or downloaded exports automatically secure. Use device and organizational controls appropriate to the sensitivity of the recording."] },
    ],
  },
  "zh-CN": {
    title: "EarScribe 隐私说明",
    description: "说明哪些内容在设备本地处理、浏览器会下载什么，以及站点记录哪些有限的匿名统计信息。",
    updated: "更新于 2026 年 7 月 27 日",
    intro: "EarScribe 的设计原则是：你选择的音频在当前设备上解码和转录。这里会明确说明边界，而不会把网页本地处理夸大成“完全没有任何隐私或安全风险”。",
    sections: [
      { title: "音频和文字稿", paragraphs: ["选中的音频会交给浏览器音频接口，并由 Web Worker 中运行的 Whisper 模型处理。EarScribe 不会把音频上传到应用服务器。", "你修改过的文字稿可能保存在当前浏览器中，方便再次选择同一个文件时恢复。保存的草稿不包含音频。"], bullets: ["可以通过浏览器的网站数据设置清除草稿。", "导出文件在本地生成，并由浏览器直接下载。"] },
      { title: "浏览器会下载什么", paragraphs: ["页面需要加载界面所需的 HTML、JavaScript、CSS、字体或图片。首次使用某个 Whisper 模型时，浏览器会通过 EarScribe 的模型代理下载模型，并可能缓存。"], bullets: ["不同模型大约需要下载 80 MB 到 800 MB。", "清理浏览器缓存或网站数据，可能同时删除模型缓存和文字草稿。"] },
      { title: "匿名汇总统计", paragraphs: ["EarScribe 使用 Plausible Analytics 了解汇总访问情况和真实产品操作，例如选择文件、开始和完成转录、使用字幕检查以及导出格式。"], bullets: ["音频内容、文字稿内容和文件名不会作为统计属性发送。", "设备能力只附加在真实流程事件中，用于判断兼容性和性能问题。"] },
      { title: "本地处理的边界", paragraphs: ["本地处理减少了把录音上传给转录服务带来的暴露面，但不能自动保证浏览器、设备、扩展程序、网络和已导出文件全部安全。请根据录音的敏感程度，使用合适的设备和组织安全措施。"] },
    ],
  },
  ja: {
    title: "EarScribeのプライバシー",
    description: "端末内で処理する情報、ブラウザがダウンロードするもの、記録する限定的なアクセス解析について説明します。",
    updated: "2026年7月27日更新",
    intro: "EarScribeは、選択した音声を現在の端末で解析・文字起こしする設計です。このページではその範囲を明確にし、Webページだからあらゆるプライバシー・セキュリティリスクがなくなるとは説明しません。",
    sections: [
      { title: "音声と文字起こし", paragraphs: ["選択した音声はブラウザの音声APIとWeb Worker内のWhisperモデルで処理され、EarScribeのアプリケーションサーバーにはアップロードされません。", "編集した文字起こしは、同じファイルを再度選んだときに復元できるよう、このブラウザに保存される場合があります。保存内容に音声は含まれません。"], bullets: ["ブラウザのサイトデータ設定から保存済みの下書きを削除できます。", "書き出しファイルは端末内で作成され、ブラウザからダウンロードされます。"] },
      { title: "ブラウザがダウンロードするもの", paragraphs: ["画面表示に必要なHTML、JavaScript、CSS、フォントや画像を読み込みます。Whisperモデルの初回利用時は、EarScribeのモデルプロキシ経由でモデルをダウンロードし、ブラウザにキャッシュする場合があります。"], bullets: ["モデルの容量は約80 MBから800 MBです。", "キャッシュやサイトデータを削除すると、モデルと下書きも消える場合があります。"] },
      { title: "集計アクセス解析", paragraphs: ["Plausible Analyticsを使用し、訪問数と、ファイル選択、文字起こし開始・完了、字幕チェック、書き出し形式などの実際の操作を集計します。"], bullets: ["音声、文字起こし本文、ファイル名は解析情報として送信しません。", "端末性能は互換性と処理上の問題を確認するため、実際の操作イベントにのみ付加します。"] },
      { title: "端末内処理の限界", paragraphs: ["端末内処理は録音を外部サービスへアップロードする際のリスクを減らしますが、ブラウザ、端末、拡張機能、ネットワーク、書き出したファイルの安全性を自動で保証するものではありません。録音の機密性に応じた管理を行ってください。"] },
    ],
  },
  fr: {
    title: "Confidentialité chez EarScribe",
    description: "Ce qui est traité sur votre appareil, ce que le navigateur télécharge et les statistiques limitées enregistrées par le site.",
    updated: "Mise à jour le 27 juillet 2026",
    intro: "EarScribe est conçu pour décoder et transcrire le fichier audio choisi sur votre appareil. Cette page précise cette limite sans prétendre qu'une application web élimine tout risque de confidentialité ou de sécurité.",
    sections: [
      { title: "Audio et transcription", paragraphs: ["L'audio choisi est traité par les API audio du navigateur et un modèle Whisper dans un Web Worker. Il n'est pas envoyé au serveur applicatif d'EarScribe.", "Les corrections du texte peuvent être enregistrées dans ce navigateur afin d'être restaurées lorsque vous sélectionnez à nouveau le même fichier. Le brouillon ne contient pas l'audio."], bullets: ["Les données enregistrées peuvent être supprimées dans les réglages de données du site du navigateur.", "Les exports sont générés localement puis téléchargés par le navigateur."] },
      { title: "Téléchargements du navigateur", paragraphs: ["La page charge les fichiers nécessaires à l'interface. Lors de la première utilisation, le modèle Whisper choisi est téléchargé via le proxy de modèles EarScribe et peut être mis en cache."], bullets: ["Les modèles représentent environ 80 à 800 Mo.", "Effacer le cache ou les données du site peut supprimer modèles et brouillons."] },
      { title: "Mesure d'audience agrégée", paragraphs: ["Plausible Analytics mesure les visites et des actions produit réelles : choix d'un fichier, début et fin de transcription, vérification des sous-titres et format exporté."], bullets: ["Le contenu audio, le texte transcrit et le nom du fichier ne sont pas envoyés comme propriétés analytiques.", "Les capacités de l'appareil ne sont associées qu'aux actions réelles pour diagnostiquer compatibilité et performances."] },
      { title: "Limites du traitement local", paragraphs: ["Le traitement local réduit les risques liés à l'envoi d'un enregistrement à un service de transcription, mais ne sécurise pas automatiquement le navigateur, l'appareil, les extensions, le réseau ou les fichiers exportés."] },
    ],
  },
  es: {
    title: "Privacidad en EarScribe",
    description: "Qué se procesa en tu dispositivo, qué descarga el navegador y qué estadísticas limitadas registra el sitio.",
    updated: "Actualizado el 27 de julio de 2026",
    intro: "EarScribe está diseñado para decodificar y transcribir el audio seleccionado en tu dispositivo. Esta página explica ese límite sin afirmar que una aplicación web elimina todos los riesgos de privacidad o seguridad.",
    sections: [
      { title: "Audio y transcripción", paragraphs: ["El audio se procesa mediante las API del navegador y un modelo Whisper ejecutado en un Web Worker. No se sube al servidor de la aplicación de EarScribe.", "Las correcciones del texto pueden guardarse en este navegador para recuperarlas al seleccionar de nuevo el mismo archivo. El borrador no incluye el audio."], bullets: ["Puedes borrar los borradores desde la configuración de datos del sitio del navegador.", "Los archivos exportados se generan localmente y el navegador los descarga."] },
      { title: "Qué descarga el navegador", paragraphs: ["La página carga los archivos necesarios para la interfaz. La primera vez, el modelo Whisper elegido se descarga mediante el proxy de modelos de EarScribe y puede quedar almacenado en caché."], bullets: ["Los modelos ocupan aproximadamente entre 80 y 800 MB.", "Borrar la caché o los datos del sitio puede eliminar modelos y borradores."] },
      { title: "Analítica agregada", paragraphs: ["Plausible Analytics mide visitas y acciones reales: seleccionar un archivo, iniciar y completar la transcripción, revisar subtítulos y exportar un formato."], bullets: ["El audio, el texto transcrito y el nombre del archivo no se envían como propiedades analíticas.", "La capacidad del dispositivo solo se adjunta a acciones reales para diagnosticar compatibilidad y rendimiento."] },
      { title: "Límites del procesamiento local", paragraphs: ["Procesar en el dispositivo reduce la exposición de subir una grabación a un servicio externo, pero no protege automáticamente el navegador, el equipo, las extensiones, la red o los archivos exportados."] },
    ],
  },
  ko: {
    title: "EarScribe 개인정보 안내",
    description: "기기에서 처리되는 정보, 브라우저가 내려받는 항목, 사이트가 기록하는 제한적인 통계를 설명합니다.",
    updated: "2026년 7월 27일 업데이트",
    intro: "EarScribe는 선택한 오디오를 현재 기기에서 디코딩하고 텍스트로 변환하도록 설계되었습니다. 이 페이지는 그 범위를 정확히 설명하며, 웹 앱이 모든 개인정보 및 보안 위험을 없앤다고 주장하지 않습니다.",
    sections: [
      { title: "오디오와 변환 결과", paragraphs: ["선택한 오디오는 브라우저 오디오 API와 Web Worker에서 실행되는 Whisper 모델로 처리됩니다. EarScribe 애플리케이션 서버로 업로드되지 않습니다.", "수정한 텍스트는 같은 파일을 다시 선택할 때 복원할 수 있도록 현재 브라우저에 저장될 수 있습니다. 저장된 초안에는 오디오가 포함되지 않습니다."], bullets: ["브라우저의 사이트 데이터 설정에서 저장된 초안을 삭제할 수 있습니다.", "내보내기 파일은 기기에서 생성된 뒤 브라우저가 다운로드합니다."] },
      { title: "브라우저가 내려받는 항목", paragraphs: ["화면에 필요한 HTML, JavaScript, CSS, 글꼴과 이미지를 불러옵니다. Whisper 모델을 처음 사용할 때는 EarScribe 모델 프록시를 통해 모델을 내려받고 브라우저에 캐시할 수 있습니다."], bullets: ["모델 크기는 약 80MB에서 800MB입니다.", "캐시나 사이트 데이터를 지우면 모델과 초안도 삭제될 수 있습니다."] },
      { title: "집계 분석", paragraphs: ["Plausible Analytics로 방문 수와 파일 선택, 변환 시작 및 완료, 자막 검사, 내보내기 형식 같은 실제 제품 동작을 집계합니다."], bullets: ["오디오 내용, 변환된 텍스트, 파일 이름은 분석 속성으로 전송하지 않습니다.", "기기 성능 정보는 호환성과 성능 문제를 확인하기 위해 실제 작업 이벤트에만 첨부합니다."] },
      { title: "로컬 처리의 한계", paragraphs: ["기기 내 처리는 녹음 파일을 외부 변환 서비스에 업로드할 때 생기는 노출을 줄이지만, 브라우저, 기기, 확장 프로그램, 네트워크, 내보낸 파일의 안전을 자동으로 보장하지는 않습니다."] },
    ],
  },
};

export function getPrivacyCopy(locale: Locale | string): PrivacyCopy {
  return COPY[locale as PrivacyLocale] ?? COPY.en;
}
