// ================================
// CURSOR
// ================================
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

// Suavizado del movimiento (Lerp)
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  // El punto central es instantáneo
  cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

function animateCursor() {
  // El anillo sigue al mouse con un retraso del 15% por frame
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  
  ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Efectos de hover mejorados
document.querySelectorAll('a, button, .project-card, .service-row, .skill-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '18px';
    cursor.style.height = '18px';
    ring.style.width = '48px';
    ring.style.height = '48px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '10px';
    cursor.style.height = '10px';
    ring.style.width = '36px';
    ring.style.height = '36px';
  });
});


// ================================
// LOADER
// ================================
const bar = document.getElementById('loaderBar');
const percent = document.getElementById('loaderPercent');
const loader = document.getElementById('loader');
const main = document.getElementById('main');
let p = 0;

const interval = setInterval(() => {
  p += Math.random() * 3 + 1;
  if (p >= 100) {
    p = 100;
    clearInterval(interval);
    setTimeout(() => {
      loader.classList.add('hidden');
      main.classList.add('visible');
      // Las animaciones de texto del hero se disparan automáticamente con la clase 'visible' en #main
    }, 800);
  }
  bar.style.width = p + '%';
  percent.textContent = Math.floor(p) + '%';
}, 40);


// ================================
// LANGUAGE TRANSLATION
// ================================
const languageToggle = document.getElementById('language-toggle');
const languageMenu = document.getElementById('language-menu');
const languageButtons = document.querySelectorAll('.language-option');
let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';

const translations = {
  en: {
    aboutNav: 'About',
    projectsNav: 'Projects',
    contactNav: 'Contact',
    heroRole: 'Web Developer / SOC Cybersecurity Analyst',
    heroDescription1: 'Designing websites, e-commerce platforms, landing pages, digital portfolios, and maintenance. Focused on minimalist and elegant aesthetics, every project becomes a digital work of art that combines functionality and beauty.',
    heroDescription2: 'I build modern websites with speed, clarity, and a polished user experience.',
    scrollText: 'Scroll',
    statusHeading: 'Announcements & <span class="italic font-light opacity-30">Status</span>',
    statusLabel: '01 / Atelier Status',
    statusAvailable: 'Available',
    announcementLabel: '02 / Important Announcements',
    announcementTitle: 'No Announcements <br><span class="italic text-white/40">Currently</span>',
    announcementText: 'We celebrate the official launch of Velo Studio with new collaboration opportunities.',
    communicationsLabel: '03 / Communications',
    communicationsTitle: 'No communications <br><span class="italic text-white/40">Currently</span>',
    communicationsText: 'Pending: Portfolio update with new projects and detailed case studies.',
    operatingNoticeLabel: 'Operating Notice',
    operatingNoticeText: 'Work Monday to Friday | 5-7 hours daily <span class="text-white/60">Maximum 2 weeks duration.</span>',
    priorityLabel: 'Priority: High',
    aboutTitle: 'The <span class="italic font-light opacity-20">Essence</span>',
    aboutHeading: 'Design that<br><span class="italic opacity-30">transcends the levels of elegance and creativity.</span>',
    aboutPara1: 'I am Josue Hernandez, founder of JH Studio. My focus goes beyond the conventional to create websites that combine elegant, minimalist, and creative aesthetics. Every website is built to impress and feel memorable.',
    aboutPara2: 'Always focused on delivering excellent performance and stability. My goal is to create websites that are not only functional but also impressive and attractive.',
    atelierAvailable: 'Atelier Available',
    expertiseLabel: 'Technical Expertise',
    skill1: 'Web Development (HTML / CSS / JS)',
    skill2: 'UI & 3D Design',
    skill3: 'Junior Cybersecurity',
    curriculumLabel: 'Curriculum',
    cvCaption: 'Click the image to view it full size.',
    downloadCv: 'Download CV (PDF)',
    projectsLabel: 'Projects / Works',
    project01Name: 'JC Barber Studio',
    project01Desc: 'Full website for a barber service.',
    project02Name: 'Japanese Culture Portfolio',
    project02Desc: 'Personal showcase website with clean design and Japanese-inspired visuals.',
    project03Name: 'CHKADVENTURES',
    project03Desc: 'Tourism website for a Costa Rican adventure organization. Coming soon.',
    project04Name: 'Landing Page',
    project04Desc: 'Example of a landing page coming soon.',
    servicesLabel: 'Services & Pricing',
    servicesIntro: 'Web development for informational sites, landing pages, and online stores. Every project is designed with usability, speed, and clean aesthetics to reflect your brand and goals.',
    service01Name: 'Landing Page / Portfolio',
    service02Name: 'Full development with multiple sections',
    service03Name: 'Pages with 3D elements, multi-section layouts and interactions',
    service04Name: 'E-commerce site / online store',
    service05Name: 'Monthly maintenance',
    notesTitle: 'Important Notes',
    note1: 'Base rate $30/h. Final price is calculated according to project duration, number of sections, and required features.',
    note2: 'A 50% deposit of the total project value is required before starting to formalize the project.',
    note3: 'Maintenance includes content updates, small security adjustments, plugin support, weekly basic site support, weekly visitor reports, and fast bug fixes.',
    note4: 'If you already have all information, images, and materials for the website, please share them via Google Drive.',
    note5: 'If you need photos, videos, or content provided by me, an extra fee may apply due to additional development time.',
    contactEyebrow: 'Ready to start?',
    contactTitle: 'Let\'s work<br><em>together.</em>',
    contactSub: 'Do you have a project in mind? I would love to hear from you and create something that truly impresses.',
    contactBtn: 'Contact me',
    socialLinkedIn: 'LinkedIn',
    socialInstagram: 'Instagram',
    socialEmail: 'Email',
    languageTitle: 'Language',
    statusOpen: 'Open',
    statusClosed: 'Closed',
    statusOpenDesc: 'Currently accepting selected projects for the first quarter of 2026.',
    statusClosedDesc: 'Outside working hours. The Atelier will reopen on the next business day at 8:00 AM.'
  },
  es: {
    aboutNav: 'Sobre mí',
    projectsNav: 'Proyectos',
    contactNav: 'Contacto',
    heroRole: 'Desarrollador Web / Analista SOC Ciberseguridad',
    heroDescription1: 'Diseño sitios web, plataformas e-commerce, landing pages, portafolios digitales y mantenimientos. Con un enfoque en la estética minimalista y elegante, cada proyecto se convierte en una obra de arte digital que combina funcionalidad y belleza.',
    heroDescription2: 'Construyo sitios modernos con velocidad, claridad y una experiencia de usuario pulida.',
    scrollText: 'Scroll',
    statusHeading: 'Anuncios & <span class="italic font-light opacity-30">Status</span>',
    statusLabel: '01 / Atelier Status',
    statusAvailable: 'Disponible',
    announcementLabel: '02 / Anuncios Importantes',
    announcementTitle: 'Sin Anuncios <br><span class="italic text-white/40">Actualmente</span>',
    announcementText: 'Celebramos el lanzamiento oficial de Velo Studio con nuevas oportunidades de colaboración.',
    communicationsLabel: '03 / Comunicados',
    communicationsTitle: 'Sin comunicados <br><span class="italic text-white/40">Actualmente</span>',
    communicationsText: 'Pendiente: Actualización de portafolio con nuevos proyectos y casos de estudio detallados.',
    operatingNoticeLabel: 'Aviso Operativo',
    operatingNoticeText: 'Trabajos Lunes a Viernes | 5-7 horas diarias <span class="text-white/60">Máximo 2 semanas de duración.</span>',
    priorityLabel: 'Prioridad: Alta',
    aboutTitle: 'La <span class="italic font-light opacity-20">Esencia</span>',
    aboutHeading: 'Diseño que<br><span class="italic opacity-30">trasciende los niveles de elegancia y creatividad.</span>',
    aboutPara1: 'Soy Josue Hernandez, fundador de JH Studio. Mi enfoque se aleja de lo convencional para crear sitios web que combinan una estética elegante, minimalista y creativa. Cada sitio se construye para impresionar y ser memorable.',
    aboutPara2: 'Siempre enfocado en ofrecer el mejor rendimiento y estabilidad. Mi objetivo es crear sitios web que no solo sean funcionales sino también impresionantes y atractivos.',
    atelierAvailable: 'Atelier Disponible',
    expertiseLabel: 'Experiencia Técnica',
    skill1: 'Desarrollo Web (HTML / CSS / JS)',
    skill2: 'Diseño UI & 3D',
    skill3: 'Ciberseguridad Jr.',
    curriculumLabel: 'Currículum',
    cvCaption: 'Clic en la imagen para verla en tamaño completo.',
    downloadCv: 'Descargar CV (PDF)',
    projectsLabel: 'Proyectos / Trabajos',
    project01Name: 'JC Barber Studio',
    project01Desc: 'Sitio completo para un servicio de barbería.',
    project02Name: 'Portafolio inspirado en Japón',
    project02Desc: 'Sitio personal con diseño limpio y visuales inspirados en Japón.',
    project03Name: 'CHKADVENTURES',
    project03Desc: 'Sitio de turismo para una organización de aventuras costarricense. Próximamente.',
    project04Name: 'Landing Page',
    project04Desc: 'Ejemplo de landing page próximamente.',
    servicesLabel: 'Servicios y precios',
    servicesIntro: 'Desarrollo web para sitios informativos, landing pages y tiendas en línea. Cada proyecto se diseña con enfoque en usabilidad, velocidad y estética limpia para reflejar tu marca y objetivos.',
    service01Name: 'Landing Page / Portafolio',
    service02Name: 'Desarrollo completo con múltiples secciones',
    service03Name: 'Páginas con elementos 3D, múltiples secciones e interacciones',
    service04Name: 'Sitio e-commerce / tienda online',
    service05Name: 'Mantenimiento mensual',
    notesTitle: 'Notas importantes',
    note1: 'Tarifa base $30/h. El precio final se calcula según la duración del proyecto, la cantidad de secciones y funciones necesarias.',
    note2: 'Se requiere un depósito del 50% del valor total del proyecto antes de comenzar, para formalizar el inicio.',
    note3: 'El mantenimiento incluye actualizaciones de contenido, ajustes menores de seguridad, soporte de plugins, soporte básico semanal, reportes semanales de visitantes, y reparación rápida de errores.',
    note4: 'Si ya cuentas con la información, imágenes y materiales para el sitio, por favor compártelos vía Google Drive.',
    note5: 'Si necesitas fotos, videos o contenido proporcionado por mí, puede aplicar un cargo extra debido al tiempo adicional de desarrollo.',
    contactEyebrow: '¿Listo para empezar?',
    contactTitle: 'Trabajemos<br><em>juntos.</em>',
    contactSub: '¿Tenés un proyecto en mente? Me encantaría escucharte y crear algo que realmente impresione.',
    contactBtn: 'Contáctame',
    socialLinkedIn: 'LinkedIn',
    socialInstagram: 'Instagram',
    socialEmail: 'Email',
    languageTitle: 'Idioma',
    statusOpen: 'Abierto',
    statusClosed: 'Cerrado',
    statusOpenDesc: 'Actualmente aceptando proyectos seleccionados para el primer trimestre de 2026.',
    statusClosedDesc: 'Fuera de horario. El Atelier abrirá nuevamente el próximo día hábil a las 8:00 AM.'
  },
  ja: {
    aboutNav: '私について',
    projectsNav: 'プロジェクト',
    contactNav: 'コンタクト',
    heroRole: 'ウェブ開発者 / SOC サイバーセキュリティ アナリスト',
    heroDescription1: 'ウェブサイト、eコマースプラットフォーム、ランディングページ、デジタルポートフォリオ、メンテナンスを設計します。ミニマルでエレガントな美学に焦点を当て、すべてのプロジェクトを機能性と美しさを兼ね備えたデジタルアートにしています。',
    heroDescription2: '私はスピード、明快さ、洗練されたユーザー体験を備えたモダンなウェブサイトを構築します。',
    scrollText: 'スクロール',
    statusHeading: 'アナウンス & <span class="italic font-light opacity-30">ステータス</span>',
    statusLabel: '01 / Atelier Status',
    statusAvailable: '利用可能',
    announcementLabel: '02 / 重要なお知らせ',
    announcementTitle: 'お知らせはありません <br><span class="italic text-white/40">現在</span>',
    announcementText: 'Velo Studioの公式ローンチを祝い、新たな協力の機会を提供しています。',
    communicationsLabel: '03 / コミュニケーション',
    communicationsTitle: '現在、連絡事項はありません <br><span class="italic text-white/40">。</span>',
    communicationsText: '保留中：新しいプロジェクトと詳細なケーススタディでポートフォリオを更新予定です。',
    operatingNoticeLabel: '運用通知',
    operatingNoticeText: '月曜から金曜 | 1日5〜7時間 <span class="text-white/60">最長2週間の期間。</span>',
    priorityLabel: '優先度：高',
    aboutTitle: '本質 <span class="italic font-light opacity-20"></span>',
    aboutHeading: 'エレガンスと創造性のレベルを超えるデザイン。',
    aboutPara1: '私はJH Studioの創設者、Josue Hernandezです。型にはまらない美学とクリエイティブなスタイルを組み合わせたウェブサイトを制作します。すべてのサイトは印象的で記憶に残るように構築されます。',
    aboutPara2: '卓越したパフォーマンスと安定性を提供することに注力しています。機能的であるだけでなく、印象的で魅力的なウェブサイトを作成するのが私の目標です。',
    atelierAvailable: 'アトリエ利用可',
    expertiseLabel: 'テクニカルエキスパート',
    skill1: 'Web開発 (HTML / CSS / JS)',
    skill2: 'UI & 3Dデザイン',
    skill3: 'ジュニアサイバーセキュリティ',
    curriculumLabel: '履歴書',
    cvCaption: '画像をクリックしてフルサイズで表示します。',
    downloadCv: 'CVをダウンロード (PDF)',
    projectsLabel: 'プロジェクト / 作品',
    project01Name: 'JC Barber Studio',
    project01Desc: '理髪店向けのフルサイト。',
    project02Name: '日本文化のポートフォリオ',
    project02Desc: '日本をテーマにしたクリーンなデザインの個人サイト。',
    project03Name: 'CHKADVENTURES',
    project03Desc: 'コスタリカの観光冒険組織向けのサイト。近日公開。',
    project04Name: 'ランディングページ',
    project04Desc: '近日公開のランディングページの例。',
    servicesLabel: 'サービス & 価格',
    servicesIntro: '情報サイト、ランディングページ、オンラインストアのためのウェブ開発。すべてのプロジェクトは、ブランドと目標を反映する使いやすさ、スピード、クリーンな美学で設計されます。',
    service01Name: 'ランディングページ / ポートフォリオ',
    service02Name: '複数セクションのフル開発',
    service03Name: '3D要素、マルチセクションレイアウト、インタラクションを備えたページ',
    service04Name: 'Eコマースサイト / オンラインストア',
    service05Name: '月次メンテナンス',
    notesTitle: '重要な注意事項',
    note1: '基本料金 $30/h。最終価格は、プロジェクト期間、セクション数、および必要な機能に応じて計算されます。',
    note2: 'プロジェクト開始前に、総額の50%のデポジットが必要です。',
    note3: 'メンテナンスには、コンテンツ更新、小規模なセキュリティ調整、プラグインサポート、週次の基本サポート、訪問者レポート、および迅速なバグ修正が含まれます。',
    note4: 'ウェブサイトのすべての情報、画像、素材をお持ちの場合は、Google Driveで共有してください。',
    note5: '写真、ビデオ、コンテンツの提供が必要な場合は、追加の開発時間に応じて追加料金が発生する場合があります。',
    contactEyebrow: '準備はできましたか？',
    contactTitle: '一緒に<br><em>作りましょう。</em>',
    contactSub: 'プロジェクトをお考えですか？ぜひお話を聞かせてください。',
    contactBtn: 'お問い合わせ',
    socialLinkedIn: 'LinkedIn',
    socialInstagram: 'Instagram',
    socialEmail: 'メール',
    languageTitle: '言語',
    statusOpen: '稼働中',
    statusClosed: '休業中',
    statusOpenDesc: '現在、2026年第1四半期の選ばれたプロジェクトを受け付けています。',
    statusClosedDesc: '営業時間外です。アトリエは次の営業日午前8時に再開します。'
  },
  pt: {
    aboutNav: 'Sobre',
    projectsNav: 'Projetos',
    contactNav: 'Contato',
    heroRole: 'Desenvolvedor Web / Analista de SOC de Cibersegurança',
    heroDescription1: 'Desenvolvo sites, plataformas de e-commerce, landing pages, portfólios digitais e manutenção. Com foco em estética minimalista e elegante, cada projeto se torna uma obra digital que combina funcionalidade e beleza.',
    heroDescription2: 'Construo sites modernos com velocidade, clareza e uma experiência de usuário polida.',
    scrollText: 'Scroll',
    statusHeading: 'Anúncios & <span class="italic font-light opacity-30">Status</span>',
    statusLabel: '01 / Atelier Status',
    statusAvailable: 'Disponível',
    announcementLabel: '02 / Anúncios Importantes',
    announcementTitle: 'Sem anúncios <br><span class="italic text-white/40">Atualmente</span>',
    announcementText: 'Celebramos o lançamento oficial do Velo Studio com novas oportunidades de colaboração.',
    communicationsLabel: '03 / Comunicações',
    communicationsTitle: 'Sem comunicações <br><span class="italic text-white/40">Atualmente</span>',
    communicationsText: 'Pendente: Atualização do portfólio com novos projetos e estudos de caso detalhados.',
    operatingNoticeLabel: 'Aviso Operacional',
    operatingNoticeText: 'Trabalho de segunda a sexta | 5-7 horas diárias <span class="text-white/60">Máximo de 2 semanas de duração.</span>',
    priorityLabel: 'Prioridade: Alta',
    aboutTitle: 'A <span class="italic font-light opacity-20">Essência</span>',
    aboutHeading: 'Design que<br><span class="italic opacity-30">transcende os níveis de elegância e criatividade.</span>',
    aboutPara1: 'Sou Josue Hernandez, fundador do JH Studio. Meu foco vai além do convencional para criar sites que combinam estética elegante, minimalista e criativa. Cada site é construído para impressionar e ser memorável.',
    aboutPara2: 'Sempre focado em entregar excelente desempenho e estabilidade. Meu objetivo é criar sites que não sejam apenas funcionais, mas também impressionantes e atraentes.',
    atelierAvailable: 'Atelier Disponível',
    expertiseLabel: 'Expertise Técnica',
    skill1: 'Desenvolvimento Web (HTML / CSS / JS)',
    skill2: 'Design UI & 3D',
    skill3: 'Cibersegurança Jr.',
    curriculumLabel: 'Currículo',
    cvCaption: 'Clique na imagem para ver em tamanho real.',
    downloadCv: 'Baixar CV (PDF)',
    projectsLabel: 'Projetos / Trabalhos',
    project01Name: 'JC Barber Studio',
    project01Desc: 'Site completo para um serviço de barbearia.',
    project02Name: 'Portfólio inspirado no Japão',
    project02Desc: 'Site pessoal com design limpo e visuais inspirados no Japão.',
    project03Name: 'CHKADVENTURES',
    project03Desc: 'Site turístico para uma organização de aventura da Costa Rica. Em breve.',
    project04Name: 'Landing Page',
    project04Desc: 'Exemplo de landing page em breve.',
    servicesLabel: 'Serviços e Preços',
    servicesIntro: 'Desenvolvimento web para sites informativos, landing pages e lojas online. Cada projeto é projetado com foco em usabilidade, velocidade e estética limpa para refletir sua marca e objetivos.',
    service01Name: 'Landing Page / Portfólio',
    service02Name: 'Desenvolvimento completo com múltiplas seções',
    service03Name: 'Páginas com elementos 3D, layouts multi-seção e interações',
    service04Name: 'Site e-commerce / loja online',
    service05Name: 'Manutenção mensal',
    notesTitle: 'Notas importantes',
    note1: 'Tarifa base $30/h. O preço final é calculado de acordo com a duração do projeto, número de seções e funcionalidades necessárias.',
    note2: 'É necessário um depósito de 50% do valor total do projeto antes de iniciar para formalizar o início.',
    note3: 'A manutenção inclui atualizações de conteúdo, pequenos ajustes de segurança, suporte de plugins, suporte básico semanal, relatórios semanais de visitantes e correções rápidas de erros.',
    note4: 'Se você já tiver todas as informações, imagens e materiais para o site, compartilhe-os via Google Drive.',
    note5: 'Se precisar que eu forneça fotos, vídeos ou conteúdo, pode haver uma taxa extra devido ao tempo adicional de desenvolvimento.',
    contactEyebrow: 'Pronto para começar?',
    contactTitle: 'Vamos trabalhar<br><em>juntos.</em>',
    contactSub: 'Você tem um projeto em mente? Eu adoraria ouvir você e criar algo que realmente impressione.',
    contactBtn: 'Contate-me',
    socialLinkedIn: 'LinkedIn',
    socialInstagram: 'Instagram',
    socialEmail: 'Email',
    languageTitle: 'Idioma',
    statusOpen: 'Aberto',
    statusClosed: 'Fechado',
    statusOpenDesc: 'Atualmente aceitando projetos selecionados para o primeiro trimestre de 2026.',
    statusClosedDesc: 'Fora do horário de trabalho. O Atelier reabrirá no próximo dia útil às 8:00.'
  }
};

function updateLanguageText(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('preferredLanguage', lang);
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const value = translations[lang][key];
    if (value === undefined) return;
    if (el.dataset.i18nType === 'html') {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });
  languageToggle.title = translations[lang].languageTitle || 'Language';
  currentPhrases = phraseSets[lang];
  pi = 0;
  ci = 0;
  deleting = false;
  if (tw) tw.textContent = '';
  updateAtelierStatus();
}

const phraseSets = {
  en: [
    'Web Developer.',
    'SOC Security Analyst.',
    'Founder of JH Studio.',
    'Creator of digital experiences.'
  ],
  es: [
    'Desarrollador web.',
    'Analista SOC Jr.',
    'Fundador de JH Studio.',
    'Creador de experiencias digitales.'
  ],
  ja: [
    'ウェブ開発者.',
    'SOCセキュリティアナリスト.',
    'JH Studioの創設者.',
    'デジタル体験のクリエイター.'
  ],
  pt: [
    'Desenvolvedor Web.',
    'Analista de Segurança SOC.',
    'Fundador do JH Studio.',
    'Criador de experiências digitais.'
  ]
};

let currentPhrases = phraseSets[currentLanguage];
let pi = 0, ci = 0, deleting = false;
const tw = document.getElementById('typewriter-text');

function type() {
  if (!tw) return;
  const phrase = currentPhrases[pi];
  if (!deleting) {
    tw.textContent = phrase.substring(0, ci + 1);
    ci++;
    if (ci === phrase.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    tw.textContent = phrase.substring(0, ci - 1);
    ci--;
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % currentPhrases.length;
    }
  }
  setTimeout(type, deleting ? 40 : 80);
}

setTimeout(type, 1200);

languageToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  languageMenu.classList.toggle('hidden');
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedLang = button.dataset.lang;
    if (!selectedLang) return;
    updateLanguageText(selectedLang);
    languageMenu.classList.add('hidden');
  });
});

document.addEventListener('click', (event) => {
  if (!languageToggle.contains(event.target) && !languageMenu.contains(event.target)) {
    languageMenu.classList.add('hidden');
  }
});

updateLanguageText(currentLanguage);


// ================================
// REVEAL + SKILL BARS
// ================================
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Si es una skill-card, animamos la barra con un pequeño delay
      const fills = entry.target.querySelectorAll('.skill-fill');
      fills.forEach((fill) => {
        setTimeout(() => {
          fill.style.width = fill.dataset.width + '%';
        }, 400);
      });
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ================================
// PARALLAX
// ================================
const bgText = document.querySelector('.hero-bg-text'); 
const heroName = document.querySelector('.hero-name'); // Para el efecto de inclinación

window.addEventListener('scroll', () => {
  const s = window.scrollY;
  if (bgText) bgText.style.transform = `translateY(${s * 0.3}px)`;
});

// ================================
// REAL-TIME ATELIER STATUS
// ================================
function updateAtelierStatus() {
  const statusDot = document.getElementById('status-dot');
  const statusText = document.getElementById('status-text');
  const statusDesc = document.getElementById('status-desc');
  
  if (!statusDot || !statusText || !statusDesc) return;

  const now = new Date();
  const day = now.getDay(); // 0 (Sun) to 6 (Sat)
  const hour = now.getHours();
  
  // Logic: Monday to Friday (1-5) and between 08:00 and 15:59
  const isOpen = day >= 1 && day <= 5 && hour >= 8 && hour < 16;
  const strings = translations[currentLanguage] || translations.en;
  
  if (isOpen) {
    statusDot.classList.remove('status-closed');
    statusText.textContent = strings.statusOpen;
    statusDesc.textContent = strings.statusOpenDesc;
  } else {
    statusDot.classList.add('status-closed');
    statusText.textContent = strings.statusClosed;
    statusDesc.textContent = strings.statusClosedDesc;
  }
}

// Ejecutar al cargar y actualizar cada minuto para precisión en tiempo real
updateAtelierStatus();
setInterval(updateAtelierStatus, 60000);