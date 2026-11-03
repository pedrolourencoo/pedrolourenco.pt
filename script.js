// Script do portfólio: idioma, animações, navegação, mapa, formulário e carrosséis

(function () {
  'use strict';

  // ===== Traduções (PT/EN) =====
  const translations = {
    pt: {
      meta_title_home: 'Pedro Lourenço — Software Developer & Cybersecurity',
      meta_desc_home: 'Portfólio de Pedro Lourenço — Software Developer em Évora especializado em Python, automação de processos, IoT e cibersegurança.',
      meta_title_case: 'Portfólio Pessoal — Pedro Lourenço',
      meta_desc_case: 'Estudo de caso do meu portfólio pessoal: design, código, infraestrutura e formulário serverless, tudo construído com HTML, CSS e JavaScript puro.',
      skip_link: 'Saltar para o conteúdo',
      aria_toggle_lang: 'Mudar idioma',
      aria_menu: 'Abrir menu',
      aria_back_top: 'Voltar ao topo',

      nav_about: 'Sobre',
      nav_skills: 'Skills',
      nav_certificates: 'Certificados',
      nav_projects: 'Projetos',
      nav_contact: 'Contactos',

      hero_title: 'Desenvolvo software com <span class="text-accent">propósito.</span>',
      hero_subtitle: 'Sou o Pedro, developer de Évora focado em Python, automação e cibersegurança. Transformo problemas complexos em soluções eficientes.',
      hero_cta_cv: 'Download CV',
      hero_cta_contact: 'Contactar',
      hero_status: 'Disponível para novos projetos',

      about_title: 'Sobre Mim',
      foto_word_1: 'Criar.',
      foto_word_2: 'Automatizar.',
      foto_word_3: 'Proteger.',
      ai_generated_notice: 'Imagens geradas por IA',
      stat_years: 'Anos de experiência',
      stat_availability: 'Disponibilidade',
      stat_projects: 'Projetos práticos',
      about_role: 'Técnico de Cibersegurança | TI & Segurança de Redes',
      badge_available: 'Disponibilidade imediata',
      badge_iefp: 'Elegível para Estágio IEFP',
      about_text: 'Começo sempre pela mesma pergunta: <strong>como posso tornar este sistema mais eficiente e seguro?</strong><br><br>Sou um jovem profissional natural de Évora, focado em desenvolvimento de software, automação e cibersegurança. Tenho combinado formação técnica com experiência prática em projetos reais, desde sistemas de visão computacional até automação financeira.',
      timeline_aria: 'Linha do tempo académica e profissional',
      tl1_date: 'Maio 2025 — Ago 2025',
      tl1_title: 'Python Developer — IoT & Visão Computacional',
      level_5: 'Nível 5',
      level_4: 'Nível 4',
      tl2_title: 'Técnico Especialista de Cibersegurança',
      tl2_place: 'Centro de Formação Profissional de Évora',
      tl3_title: 'Técnico de Gestão e Programação (GPSI)',
      tl3_place: 'Escola Secundária de Vendas Novas',
      tl4_title: 'Developer & Suporte Técnico',
      grade_unit: 'valores',
      cert_link: 'Ver certificado',
      cert_link_cyber: 'Ver certificado — Técnico Especialista de Cibersegurança',
      cert_link_gpsi: 'Ver certificado — Técnico de Gestão e Programação (GPSI)',

      skills_title: 'O meu arsenal<br>tecnológico.',
      skills_desc: 'Linguagens e ferramentas com que construo, automatizo e protejo sistemas. Escolho cada uma pelo problema que resolve, não pela moda.',
      skill_cat_software: 'Lógica & Automação',
      skill_cat_web: 'Web & UI/UX',
      skill_cat_db: 'Dados & Cibersegurança',
      skill_cat_tools: 'Workflow & Deploy',
      skill_cat_ai: 'IA & Produtividade',

      certificates_title: 'Certificados',
      cert_type_cisco: 'Certificado Cisco',

      projects_title: 'Trabalho que fala<br>por si próprio.',
      projects_filter_aria: 'Filtrar projetos',
      filter_all: 'Todos',
      filter_web: 'Web Development',
      filter_automation: 'Automação',
      filter_data: 'Dados & IA',
      proj_coming_soon: 'Em breve',
      projects_more: 'Ver mais projetos',
      projects_less: 'Ver menos projetos',
      p1_title: 'Portfólio Pessoal',
      p1_desc: 'O website que estás a ver neste momento — construído do zero com HTML, CSS e JavaScript puro (Vanilla).',
      p2_title: 'Automação de Faturas',
      p2_desc: 'Programa desenvolvido para a Futurévora capaz de processar faturas em formato PDF para otimização da gestão financeira.',
      p3_badge: 'IoT & Visão',
      p3_title: 'Geo Guard',
      p3_desc: 'Sistema integrado desenvolvido em Python focado na monitorização contínua e deteção inteligente em ambientes controlados.',
      p4_badge: 'Automação Gráfica',
      p4_title: 'Conversão 2D → 3D',
      p4_desc: 'Ferramenta técnica capaz de converter automaticamente ficheiros de imagens 2D em modelos tridimensionais (3D).',
      p5_title: 'Outro Projeto Web',
      p5_desc: 'Projeto extra adicionado apenas para poderes testar a funcionalidade do botão de ver mais e os filtros.',

      contact_hero_title: 'Tens um desafio?<br><span class="text-accent">Vamos conversar.</span>',
      contact_hero_desc: 'Quer seja um novo projeto, automação de processos ou segurança do teu sistema, estou disponível para ajudar.',
      contact_form_name: 'Nome',
      contact_form_email: 'Email',
      contact_form_message: 'Mensagem',
      contact_form_submit: 'Enviar',
      contact_ph_name: 'O teu nome',
      contact_ph_email: 'o.teu@email.com',
      contact_ph_message: 'Conta-me em que posso ajudar…',
      contact_map_aria: 'Mapa — Évora, Portugal',
      contact_form_sending: 'A enviar...',
      contact_form_success: 'Mensagem enviada com sucesso! Entrarei em contacto em breve.',
      contact_form_error: 'Ocorreu um erro ao enviar. Tenta novamente ou contacta-me diretamente.',

      footer_copy: '© 2026 Pedro Lourenço. Todos os direitos reservados.',
      footer_tagline: 'Desenvolvedor focado em automação, segurança e eficiência.',
      footer_links_title: 'Navegação',
      footer_made: 'Desenvolvido com código em Évora, Portugal.',

      back_to_projects: 'Voltar aos projetos',
      cs_title: 'Um portfólio feito à mão, do primeiro pixel ao deploy',
      cs_lead: 'O site que estás a ver é o meu projeto mais pessoal: HTML, CSS e JavaScript puro, sem frameworks nem templates. Queria que carregasse depressa, se lesse bem em qualquer ecrã e mostrasse como penso e construo.',
      cs_btn_live: 'Ver website',
      cs_btn_code: 'Código no GitHub',
      cs_browser_alt: 'Captura de ecrã da página inicial do portfólio',
      meta_role: 'Papel',
      meta_year: 'Ano',
      meta_deploy: 'Alojamento',

      cs_overview_title: 'Visão geral',
      cs_overview_text: 'Precisava de uma presença online à altura do meu perfil técnico: rápida, segura e fácil de manter. Em vez de partir de um template, desenhei o sistema visual, escrevi todo o código e configurei a infraestrutura de ponta a ponta. O resultado é um site leve, bilingue e sem dependências pesadas, que posso evoluir a qualquer momento.',
      cs_hl1_title: 'Leve e rápido',
      cs_hl1_desc: 'Sem frameworks: HTML, CSS e JavaScript puro mantêm o peso da página no mínimo.',
      cs_hl2_title: 'Bilingue de raiz',
      cs_hl2_desc: 'Interface PT/EN com deteção do idioma do browser e preferência guardada entre visitas.',
      cs_hl3_title: 'Acessível',
      cs_hl3_desc: 'Navegação por teclado, foco visível, bom contraste e respeito por quem reduz o movimento no sistema.',
      cs_hl4_title: 'Detalhes com propósito',
      cs_hl4_desc: 'Cursor personalizado, contadores tipo odómetro e animações ao scroll que guiam o olhar sem distrair.',

      cs_evo_title: 'A evolução',
      cs_evo_text: 'A primeira versão do portfólio era rudimentar e servia apenas para marcar presença online. Nesta segunda versão reconstruí tudo do zero: um sistema de design coerente, código organizado por responsabilidades e uma interface mais madura. Arrasta o seletor para ver a diferença.',
      cs_v1: 'Versão 1.0 do portfólio — início da jornada',
      cs_v2: 'Versão 2.0 do portfólio — foco em performance e UI/UX',
      cs_compare_aria: 'Comparar a versão 1 com a versão 2',
      cs_compare_hint: 'Arrasta para comparar as duas versões',
      cs_ch1_title: 'Design',
      cs_ch1_desc: 'De um layout improvisado para um sistema visual consistente, com tokens de cor, tipografia Manrope e componentes reutilizáveis.',
      cs_ch2_title: 'Código',
      cs_ch2_desc: 'De ficheiros soltos para uma base separada em HTML, CSS e JavaScript, com dicionário de traduções e funções independentes.',
      cs_ch3_title: 'Experiência',
      cs_ch3_desc: 'De uma página estática para uma interface viva, com filtros de projetos, animações ao scroll, mapa interativo e formulário funcional.',

      cs_screens_title: 'Ecrãs principais',
      cs_screens_text: 'Alguns dos ecrãs que definem a experiência, do desktop ao telemóvel.',
      cs_shot_home: 'Página inicial com foto, anéis orbitais e chamada à ação',
      cs_shot_mobile: 'Versão mobile com menu recolhível',
      cs_shot_about: 'Sobre mim, com contadores tipo odómetro e linha do tempo',
      cs_shot_projects: 'Projetos com filtros por categoria e cartões horizontais',

      cs_infra_title: 'Infraestrutura & Deploy',
      cs_infra_text: 'Um site rápido também depende de onde e como é servido. Combinei três peças para que cada push para o GitHub chegue ao visitante de forma automática, segura e com cache global.',
      cs_pipe_git: 'Código versionado no GitHub',
      cs_pipe_vercel: 'Build e deploy automáticos',
      cs_pipe_cf: 'DNS, CDN e proteção',
      cs_pipe_site: 'Site online, servido em HTTPS',
      proj_infra_vercel: 'Alojamento pensado para frontend, ligado ao GitHub. Cada push gera um novo deploy automático e uma pré-visualização, sem passos manuais.',
      proj_infra_cloudflare: 'Gere o DNS e distribui o conteúdo por uma CDN global. Ajuda a proteger o site de tráfego malicioso e coloca imagens e estilos em cache perto de quem visita.',
      cs_domain_title: 'Domínio personalizado',
      proj_infra_domain: 'Domínio próprio para a minha marca pessoal, com registos A e CNAME a apontar para a Vercel e HTTPS ativo.',

      cs_form_title: 'Formulário dinâmico & serverless',
      cs_form_text: 'A secção de contactos envia mensagens sem servidor próprio. O formulário usa a API do <strong>Web3Forms</strong> através da Fetch API: os dados seguem de forma assíncrona e o email chega-me diretamente, enquanto o visitante recebe confirmação de sucesso ou erro na própria página.',
      cs_form_l1: 'Envio assíncrono com Fetch API, sem recarregar a página.',
      cs_form_l2: 'Sem backend para manter: o Web3Forms recebe os dados e entrega o email.',
      cs_form_l3: 'Feedback imediato de sucesso ou erro, com campo anti-spam (honeypot) escondido.',
      cs_form_shot: 'Formulário de contacto com mensagem de estado',

      cs_perf_title: 'Medir, afinar, repetir',
      cs_perf_text: 'O portfólio não ficou parado depois de publicado. Continuo a medi-lo no PageSpeed Insights, em mobile e desktop, e a corrigir o que o atrasa, uma coisa de cada vez. Em mobile, o Desempenho passou de 59 para 96 e o LCP de 10,8 s para 1,7 s; Acessibilidade, Boas práticas e SEO estão nos 100.',
      cs_perf_c1_title: 'Performance',
      cs_perf_c1_desc: 'Um único ficheiro de CSS, fontes alojadas no próprio site e imagens responsivas com srcset: o telemóvel descarrega só o que precisa e a página aparece mais depressa.',
      cs_perf_c2_title: 'Medição',
      cs_perf_c2_desc: 'Antes de mexer no código, vejo no PageSpeed Insights o que pesa de facto (LCP, CLS, recursos que bloqueiam a renderização) e confirmo com um novo teste depois de cada alteração.',
      cs_perf_c3_title: 'Pesquisa no Google',
      cs_perf_c3_desc: 'Sitemap, robots.txt, URLs limpos e canonical coerente. Submeti o site ao Google Search Console para ser indexado e poder aparecer nas pesquisas.',
      cs_perf_close: 'O objetivo é simples: tratar o site como um produto que se mede e se melhora de forma contínua, e não como uma página que se publica e se esquece.',
      cs_learn_title: 'O que levo deste projeto',
      cs_learn_text: 'Construir sem frameworks obrigou-me a perceber o que cada linha faz: gestão de estado no DOM, acessibilidade, performance e deploy contínuo. É a base sobre a qual continuo a evoluir.',
      cs_next_title: 'Queres ver o resultado ou falar comigo?',
      cs_next_text: 'Explora os outros projetos ou diz-me em que posso ajudar.',
      cs_btn_other: 'Ver outros projetos'
    },

    en: {
      meta_title_home: 'Pedro Lourenço — Software Developer & Cybersecurity',
      meta_desc_home: 'Portfolio of Pedro Lourenço — Software Developer in Évora specialized in Python, process automation, IoT, and cybersecurity.',
      meta_title_case: 'Personal Portfolio — Pedro Lourenço',
      meta_desc_case: 'Case study of my personal portfolio: design, code, infrastructure and a serverless form, all built with plain HTML, CSS and JavaScript.',
      skip_link: 'Skip to content',
      aria_toggle_lang: 'Change language',
      aria_menu: 'Open menu',
      aria_back_top: 'Back to top',

      nav_about: 'About',
      nav_skills: 'Skills',
      nav_certificates: 'Certificates',
      nav_projects: 'Projects',
      nav_contact: 'Contact',

      hero_title: 'I build software with <span class="text-accent">purpose.</span>',
      hero_subtitle: "I'm Pedro, a developer from Évora focused on Python, automation, and cybersecurity. I turn complex problems into efficient solutions.",
      hero_cta_cv: 'Download CV',
      hero_cta_contact: 'Get in Touch',
      hero_status: 'Available for new projects',

      about_title: 'About Me',
      foto_word_1: 'Create.',
      foto_word_2: 'Automate.',
      foto_word_3: 'Protect.',
      ai_generated_notice: 'AI-generated',
      stat_years: 'Years of experience',
      stat_availability: 'Availability',
      stat_projects: 'Hands-on projects',
      about_role: 'Cybersecurity Technician | IT & Network Security',
      badge_available: 'Available immediately',
      badge_iefp: 'Eligible for IEFP Internship',
      about_text: "I always start with the same question: <strong>how can I make this system more efficient and secure?</strong><br><br>I'm a young professional from Évora focused on software development, automation, and cybersecurity. I combine technical training with hands-on experience in real projects, from computer vision systems to financial automation.",
      timeline_aria: 'Academic and professional timeline',
      tl1_date: 'May 2025 — Aug 2025',
      tl1_title: 'Python Developer — IoT & Computer Vision',
      level_5: 'Level 5',
      level_4: 'Level 4',
      tl2_title: 'Cybersecurity Specialist Technician',
      tl2_place: 'Évora Professional Training Centre',
      tl3_title: 'Management and Programming Technician (GPSI)',
      tl3_place: 'Vendas Novas Secondary School',
      tl4_title: 'Developer & Technical Support',
      grade_unit: '/ 20',
      cert_link: 'View certificate',
      cert_link_cyber: 'View certificate — Cybersecurity Specialist Technician',
      cert_link_gpsi: 'View certificate — Management and Programming Technician (GPSI)',

      skills_title: 'My technical<br>arsenal.',
      skills_desc: 'The languages and tools I use to build, automate and secure systems. I pick each one for the problem it solves, not for the hype.',
      skill_cat_software: 'Logic & Automation',
      skill_cat_web: 'Web & UI/UX',
      skill_cat_db: 'Data & Cybersecurity',
      skill_cat_tools: 'Workflow & Deployment',
      skill_cat_ai: 'AI & Productivity',

      certificates_title: 'Certificates',
      cert_type_cisco: 'Cisco Certificate',

      projects_title: 'Work that speaks<br>for itself.',
      projects_filter_aria: 'Filter projects',
      filter_all: 'All',
      filter_web: 'Web Development',
      filter_automation: 'Automation',
      filter_data: 'Data & AI',
      proj_coming_soon: 'Coming Soon',
      projects_more: 'Show more projects',
      projects_less: 'Show fewer projects',
      p1_title: 'Personal Portfolio',
      p1_desc: "The website you're looking at right now — built from scratch with plain HTML, CSS and JavaScript (Vanilla).",
      p2_title: 'Invoice Automation',
      p2_desc: 'Program built for Futurévora that processes PDF invoices to streamline financial management.',
      p3_badge: 'IoT & Vision',
      p3_title: 'Geo Guard',
      p3_desc: 'Integrated Python system focused on continuous monitoring and smart detection in controlled environments.',
      p4_badge: 'Graphic Automation',
      p4_title: '2D → 3D Conversion',
      p4_desc: 'Technical tool that automatically converts 2D image files into three-dimensional (3D) models.',
      p5_title: 'Another Web Project',
      p5_desc: 'Extra project added only so you can test the show-more button and the filters.',

      contact_hero_title: "Have a challenge?<br><span class=\"text-accent\">Let's talk.</span>",
      contact_hero_desc: "Whether it's a new project, process automation or system security, I'm available to help.",
      contact_form_name: 'Name',
      contact_form_email: 'Email',
      contact_form_message: 'Message',
      contact_form_submit: 'Send',
      contact_ph_name: 'Your name',
      contact_ph_email: 'you@email.com',
      contact_ph_message: 'Tell me how I can help…',
      contact_map_aria: 'Map — Évora, Portugal',
      contact_form_sending: 'Sending...',
      contact_form_success: "Message sent successfully! I'll get back to you soon.",
      contact_form_error: 'Something went wrong. Please try again or contact me directly.',

      footer_copy: '© 2026 Pedro Lourenço. All rights reserved.',
      footer_tagline: 'Developer focused on automation, security, and efficiency.',
      footer_links_title: 'Navigation',
      footer_made: 'Built with code in Évora, Portugal.',

      back_to_projects: 'Back to projects',
      cs_title: 'A portfolio built by hand, from the first pixel to deploy',
      cs_lead: "The site you're looking at is my most personal project: plain HTML, CSS and JavaScript, with no frameworks or templates. I wanted it to load fast, read well on any screen and show how I think and build.",
      cs_btn_live: 'Visit website',
      cs_btn_code: 'Code on GitHub',
      cs_browser_alt: 'Screenshot of the portfolio home page',
      meta_role: 'Role',
      meta_year: 'Year',
      meta_deploy: 'Hosting',

      cs_overview_title: 'Overview',
      cs_overview_text: 'I needed an online presence that matched my technical profile: fast, secure and easy to maintain. Instead of starting from a template, I designed the visual system, wrote all the code and set up the infrastructure end to end. The result is a lightweight, bilingual site with no heavy dependencies that I can evolve at any time.',
      cs_hl1_title: 'Light and fast',
      cs_hl1_desc: 'No frameworks: plain HTML, CSS and JavaScript keep page weight to a minimum.',
      cs_hl2_title: 'Bilingual by design',
      cs_hl2_desc: 'PT/EN interface that detects the browser language and remembers your choice between visits.',
      cs_hl3_title: 'Accessible',
      cs_hl3_desc: 'Keyboard navigation, visible focus, strong contrast and respect for reduced-motion settings.',
      cs_hl4_title: 'Details with purpose',
      cs_hl4_desc: 'Custom cursor, odometer counters and scroll animations that guide the eye without distracting.',

      cs_evo_title: 'The evolution',
      cs_evo_text: 'My first portfolio was basic and only served to establish an online presence. For this second version I rebuilt everything from scratch: a coherent design system, code organised by responsibility and a more mature interface. Drag the slider to see the difference.',
      cs_v1: 'Portfolio version 1.0 — the beginning of the journey',
      cs_v2: 'Portfolio version 2.0 — focused on performance and UI/UX',
      cs_compare_aria: 'Compare version 1 with version 2',
      cs_compare_hint: 'Drag to compare both versions',
      cs_ch1_title: 'Design',
      cs_ch1_desc: 'From an improvised layout to a consistent visual system, with colour tokens, Manrope typography and reusable components.',
      cs_ch2_title: 'Code',
      cs_ch2_desc: 'From loose files to a clean separation of HTML, CSS and JavaScript, with a translation dictionary and independent functions.',
      cs_ch3_title: 'Experience',
      cs_ch3_desc: 'From a static page to a living interface, with project filters, scroll animations, an interactive map and a working form.',

      cs_screens_title: 'Key screens',
      cs_screens_text: 'A few of the screens that define the experience, from desktop to mobile.',
      cs_shot_home: 'Home page with photo, orbital rings and call to action',
      cs_shot_mobile: 'Mobile version with collapsible menu',
      cs_shot_about: 'About me, with odometer counters and a timeline',
      cs_shot_projects: 'Projects with category filters and horizontal cards',

      cs_infra_title: 'Infrastructure & Deployment',
      cs_infra_text: 'A fast site also depends on where and how it is served. I combined three pieces so that every push to GitHub reaches visitors automatically, securely and with global caching.',
      cs_pipe_git: 'Code versioned on GitHub',
      cs_pipe_vercel: 'Automatic build and deploy',
      cs_pipe_cf: 'DNS, CDN and protection',
      cs_pipe_site: 'Live site, served over HTTPS',
      proj_infra_vercel: 'Frontend-focused hosting connected to GitHub. Every push triggers a new automatic deployment and a preview, with no manual steps.',
      proj_infra_cloudflare: 'Manages DNS and delivers content through a global CDN. Helps shield the site from malicious traffic and caches images and styles close to visitors.',
      cs_domain_title: 'Custom domain',
      proj_infra_domain: 'A domain of my own for my personal brand, with A and CNAME records pointing to Vercel and HTTPS enabled.',

      cs_form_title: 'Dynamic & serverless form',
      cs_form_text: 'The contact section sends messages without a server of my own. The form uses the <strong>Web3Forms</strong> API through the Fetch API: data is sent asynchronously and the email reaches me directly, while the visitor sees a success or error message on the page.',
      cs_form_l1: 'Asynchronous submission with the Fetch API, no page reload.',
      cs_form_l2: 'No backend to maintain: Web3Forms receives the data and delivers the email.',
      cs_form_l3: 'Instant success or error feedback, with a hidden anti-spam (honeypot) field.',
      cs_form_shot: 'Contact form with status message',

      cs_perf_title: 'Measure, tune, repeat',
      cs_perf_text: 'The portfolio did not stand still once it was published. I keep measuring it on PageSpeed Insights, on mobile and desktop, and fixing whatever slows it down, one thing at a time. On mobile, Performance went from 59 to 96 and LCP from 10.8 s to 1.7 s; Accessibility, Best Practices and SEO all score 100.',
      cs_perf_c1_title: 'Performance',
      cs_perf_c1_desc: 'A single CSS file, self-hosted fonts and responsive images with srcset: phones download only what they need and the page shows up sooner.',
      cs_perf_c2_title: 'Measurement',
      cs_perf_c2_desc: 'Before touching the code, I check on PageSpeed Insights what actually weighs the page down (LCP, CLS, render-blocking resources) and confirm with a new test after every change.',
      cs_perf_c3_title: 'Google search',
      cs_perf_c3_desc: 'Sitemap, robots.txt, clean URLs and a consistent canonical. I submitted the site to Google Search Console so it can be indexed and show up in search results.',
      cs_perf_close: 'The goal is simple: treat the site as a product that is continuously measured and improved, not as a page that gets published and forgotten.',
      cs_learn_title: 'What I take from this project',
      cs_learn_text: 'Building without frameworks forced me to understand what every line does: DOM state management, accessibility, performance and continuous deployment. It is the foundation I keep building on.',
      cs_next_title: 'Want to see the result or talk to me?',
      cs_next_text: 'Explore the other projects or tell me how I can help.',
      cs_btn_other: 'See other projects'
    }
  };

  // ===== Helpers e estado =====
  const STORAGE_KEY = 'preferred-lang';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  // O localStorage pode estar bloqueado (modo privado)
  const storage = {
    get(key) {
      try { return localStorage.getItem(key); } catch (e) { return null; }
    },
    set(key, value) {
      try { localStorage.setItem(key, value); } catch (e) { /* sem acesso: ignora */ }
    }
  };

  let currentLang = 'pt';

  const t = (key) => {
    const dict = translations[currentLang] || translations.pt;
    return dict[key] !== undefined ? dict[key] : (translations.pt[key] || key);
  };

  // ===== Idioma =====
  function detectLanguage() {
    const saved = storage.get(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') return saved;
    return (navigator.language || 'en').toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }

  function applyLanguage(lang) {
    currentLang = translations[lang] ? lang : 'pt';
    const dict = translations[currentLang];

    $$('[data-i18n]').forEach((el) => {
      const value = dict[el.dataset.i18n];
      if (value === undefined) return;
      if (el.tagName === 'TITLE') document.title = value;
      else el.innerHTML = value;
    });

    $$('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(',').forEach((pair) => {
        const parts = pair.split(':').map((s) => s.trim());
        const attr = parts[0];
        const key = parts[1];
        if (attr && key && dict[key] !== undefined) el.setAttribute(attr, dict[key]);
      });
    });

    document.documentElement.setAttribute('lang', currentLang);
    document.body.setAttribute('data-lang', currentLang);

    $$('.lang-option').forEach((el) => {
      el.classList.toggle('active', el.dataset.lang === currentLang);
    });

    storage.set(STORAGE_KEY, currentLang);
  }

  function initLanguage() {
    applyLanguage(detectLanguage());
    const toggleBtn = $('#lang-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        applyLanguage(currentLang === 'pt' ? 'en' : 'pt');
        // A tradução reescreve o botão "Ver mais/menos", por isso volta a acertá-lo
        document.dispatchEvent(new CustomEvent('languagechange'));
      });
    }
  }

  // ===== Fundo animado (chuva binária) =====
  function initMatrixCanvas() {
    const canvas = $('#bg-matrix');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotionMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
    const COLORS = ['#3ea6ff', '#6ff5c9'];
    const CHARS = ['0', '1'];
    const FONT_SIZE = 13;
    const FRAME_INTERVAL = 50; // ~20 fps

    let width = 0;
    let height = 0;
    let drops = [];
    let rafId = null;
    let lastTime = 0;

    const createDrop = (x, initial) => ({
      x: x,
      y: initial ? -Math.random() * height * 2.5 : -FONT_SIZE * (2 + Math.random() * 25),
      color: COLORS[Math.random() < 0.5 ? 0 : 1],
      speed: 0.75 + Math.random() * 0.5
    });

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Redimensionar o canvas limpa o contexto, por isso a fonte define-se aqui
      // e não em cada frame (forçava o browser a recalcular estilos 20x por segundo)
      ctx.font = '500 ' + FONT_SIZE + 'px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';

      const colSpacing = width < 768 ? 72 : 52;
      const colCount = Math.floor(width / colSpacing);

      drops = Array.from({ length: colCount }, (_, i) => {
        const jitter = (Math.random() - 0.5) * (colSpacing * 0.35);
        return createDrop(Math.floor(i * colSpacing + colSpacing / 2 + jitter), true);
      });
    };

    const drawFrame = (timestamp) => {
      if (document.hidden || reducedMotionMQ.matches) {
        rafId = null;
        return;
      }

      rafId = requestAnimationFrame(drawFrame);

      if (timestamp - lastTime < FRAME_INTERVAL) return;
      lastTime = timestamp;

      ctx.fillStyle = 'rgba(6, 11, 31, 0.14)';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];

        if (drop.y >= 0 && drop.y <= height) {
          ctx.fillStyle = drop.color;
          ctx.fillText(CHARS[Math.random() < 0.5 ? 0 : 1], drop.x, drop.y);
        }

        drop.y += FONT_SIZE * drop.speed;

        if (drop.y > height && Math.random() > 0.99) {
          drop.y = -FONT_SIZE * (4 + Math.random() * 30);
          drop.color = COLORS[Math.random() < 0.5 ? 0 : 1];
          drop.speed = 0.3 + Math.random() * 0.3;
        }
      }
    };

    const start = () => {
      if (!rafId && !document.hidden && !reducedMotionMQ.matches) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(drawFrame);
      }
    };

    const stop = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    // Arranca só quando o browser está livre, para não pesar no carregamento
    const boot = () => { resize(); start(); };
    if ('requestIdleCallback' in window) requestIdleCallback(boot, { timeout: 800 });
    else setTimeout(boot, 150);

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop(); else start();
    });

    const onMotionChange = (e) => {
      if (e.matches) {
        stop();
        ctx.clearRect(0, 0, width, height);
      } else {
        start();
      }
    };
    if (reducedMotionMQ.addEventListener) reducedMotionMQ.addEventListener('change', onMotionChange);
    else if (reducedMotionMQ.addListener) reducedMotionMQ.addListener(onMotionChange);
  }

  // ===== Imagens que não carregam =====
  function markMissing(img) {
    img.hidden = true;
    const host = img.closest('[data-placeholder]');
    if (host) host.classList.add('is-missing');
  }

  // O evento "error" não faz bubble, por isso usa-se a fase de captura
  document.addEventListener('error', (event) => {
    if (event.target instanceof HTMLImageElement) markMissing(event.target);
  }, true);

  function initImageFallbacks() {
    $$('img').forEach((img) => {
      if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) markMissing(img);
    });
  }

  // ===== Animações ao fazer scroll =====
  function revealInView() {
    const limit = window.innerHeight * 1.1;
    const pending = $$('.reveal:not(.visible)');
    // Lê todas as posições primeiro e só depois escreve (evita reflows em cadeia)
    const toShow = pending.filter((el) => el.getBoundingClientRect().top < limit);
    toShow.forEach((el) => el.classList.add('visible'));
  }

  function initScrollReveal() {
    const targets = $$('.reveal');
    if (!('IntersectionObserver' in window) || targets.length === 0) {
      targets.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach((el) => observer.observe(el));

    // Rede de segurança: o que já está no ecrã nunca fica escondido
    setTimeout(revealInView, 1500);
  }

  function initResumeGuard() {
    const refresh = () => {
      revealInView();
      document.body.classList.add('is-repainting');
      void document.body.offsetHeight;
      requestAnimationFrame(() => document.body.classList.remove('is-repainting'));
    };

    window.addEventListener('pageshow', (e) => { if (e.persisted) refresh(); });
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') refresh();
    });
  }

  // ===== Navegação e scroll suave =====
  function initMobileNav() {
    const menuToggle = $('#menu-toggle');
    const nav = $('#primary-nav');

    const closeMenu = () => {
      if (nav) nav.classList.remove('open');
      if (menuToggle) {
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    };

    if (menuToggle && nav) {
      menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = nav.classList.toggle('open');
        menuToggle.classList.toggle('open', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
      });

      document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) closeMenu();
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
      });
    }

    // Links com âncora (#secção ou /#secção) sem deixar o "#" na URL:
    // na mesma página faz scroll suave; vindo de outra página (ex.: estudo de caso)
    // guarda o destino, vai para "/" e faz o scroll depois de carregar.
    const PENDING_KEY = 'pendingScrollTarget';
    const HEADER_OFFSET = 70;
    const isHome = ['/', '/index', '/index.html'].includes(window.location.pathname);

    const findTarget = (id) => {
      try { return $('#' + id); } catch (err) { return null; }
    };

    const scrollToId = (id, smooth) => {
      const behavior = smooth ? 'smooth' : 'auto';
      const el = findTarget(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
        window.scrollTo({ top, behavior });
        return true;
      }
      if (id === 'hero' && isHome) {
        window.scrollTo({ top: 0, behavior });
        return true;
      }
      return false;
    };

    const ANCHOR_RE = /^(?:\/|\.\/)?(?:index(?:\.html)?)?#/;
    $$('a[href*="#"]').filter((a) => ANCHOR_RE.test(a.getAttribute('href') || '')).forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        // Ctrl/Cmd/Shift/botão do meio continuam a abrir noutro separador
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

        const href = this.getAttribute('href') || '';
        const id = href.replace(ANCHOR_RE, '');
        if (!id) return;

        // A secção está nesta página: scroll suave
        if (findTarget(id) || (id === 'hero' && isHome)) {
          e.preventDefault();
          closeMenu();
          scrollToId(id, true);
          return;
        }

        // A secção é da home e estamos noutra página: guarda o destino e vai para "/"
        if (!href.startsWith('#')) {
          try {
            sessionStorage.setItem(PENDING_KEY, id);
          } catch (err) {
            return; // Sem sessionStorage: segue o link normal (com #)
          }
          e.preventDefault();
          closeMenu();
          window.location.assign('/');
        }
      });
    });

    // Veio de outra página com uma secção por mostrar
    let pending = null;
    try {
      pending = sessionStorage.getItem(PENDING_KEY);
      sessionStorage.removeItem(PENDING_KEY);
    } catch (err) { pending = null; }

    if (pending) {
      const go = () => scrollToId(pending, false);
      go();
      if (document.readyState === 'complete') {
        setTimeout(go, 60);
      } else {
        window.addEventListener('load', () => setTimeout(go, 60), { once: true });
      }
    }
  }

  // ===== Estado do scroll (header, topo, barra de progresso) =====
  function initScrollUI() {
    const header = $('#header');
    const backToTop = $('#back-to-top');
    const progress = $('#scroll-progress');
    let ticking = false;

    const update = () => {
      // Lê antes de escrever, para não forçar layout
      const y = window.scrollY;
      const max = progress ? document.documentElement.scrollHeight - window.innerHeight : 0;
      if (header) header.classList.toggle('scrolled', y > 8);
      if (backToTop) backToTop.classList.toggle('visible', y > 300);
      if (progress) {
        progress.style.setProperty('--progress', max > 0 ? Math.min(y / max, 1).toFixed(4) : 0);
      }
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });

    // A primeira atualização espera pelo layout inicial
    requestAnimationFrame(() => requestAnimationFrame(update));

    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // ===== Estatísticas (odómetro) =====
  function buildOdometerDigit(finalDigit, extraSpins = 0) {
    const digitEl = document.createElement('span');
    digitEl.className = 'odometer-digit';

    const strip = document.createElement('span');
    strip.className = 'odometer-strip';

    // Voltas completas (0 a 9) mais o dígito final
    const totalItems = extraSpins * 10 + finalDigit + 1;
    const shiftPercent = -((totalItems - 1) * (100 / totalItems));

    strip.style.setProperty('--odometer-shift', `${shiftPercent}%`);

    for (let i = 0; i < totalItems; i++) {
      const numEl = document.createElement('span');
      numEl.className = 'odometer-num';
      numEl.textContent = String(i % 10);
      strip.appendChild(numEl);
    }

    digitEl.appendChild(strip);
    return digitEl;
  }

  function buildOdometer(el, target, suffix = '') {
    el.innerHTML = '';
    el.classList.add('odometer');

    const digits = document.createElement('span');
    digits.className = 'odometer-digits';
    digits.setAttribute('aria-hidden', 'true');

    const strTarget = String(target);
    const len = strTarget.length;

    strTarget.split('').map(Number).forEach((digit, idx) => {
      // No 100, as dezenas e unidades dão voltas extra
      let extraSpins = 0;
      if (target === 100) {
        if (idx === 0) extraSpins = 1;
        if (idx === 1) extraSpins = 2;
        if (idx === 2) extraSpins = 3;
      }
      digits.appendChild(buildOdometerDigit(digit, extraSpins));
    });

    if (suffix) {
      const sufEl = document.createElement('span');
      sufEl.className = 'odometer-suffix';
      sufEl.textContent = suffix;
      digits.appendChild(sufEl);
    }

    const srValue = document.createElement('span');
    srValue.className = 'visually-hidden';
    srValue.textContent = String(target) + suffix;

    el.appendChild(digits);
    el.appendChild(srValue);
  }

  function initStats() {
    const statsContainer = $('.about-stats');
    if (!statsContainer) return;

    const targets = [];

    // Anos de experiência
    const yearsEl = $('#stat-years');
    if (yearsEl) {
      const parsed = parseInt(yearsEl.textContent.trim(), 10);
      targets.push({ el: yearsEl, count: Number.isNaN(parsed) ? 3 : parsed, suffix: '' });
    }

    // Disponibilidade (100%)
    const availEl = $('#stat-availability');
    if (availEl) {
      targets.push({ el: availEl, count: 100, suffix: '%' });
    }

    // Projetos práticos
    const projectsEl = $('#stat-projects');
    if (projectsEl) {
      const total = $$('#projects .proj-card:not(.is-clone)').length;
      const parsed = parseInt(projectsEl.textContent.trim(), 10);
      targets.push({ el: projectsEl, count: total > 0 ? total : (Number.isNaN(parsed) ? 0 : parsed), suffix: '' });
    }

    if (!targets.length) return;

    targets.forEach((s) => buildOdometer(s.el, s.count, s.suffix));

    const spin = () => {
      statsContainer.querySelectorAll('.odometer-strip').forEach((strip) => {
        void strip.offsetHeight; // força reflow para a animação arrancar do início
        strip.classList.add('is-spinning');
      });
    };

    if (!('IntersectionObserver' in window)) {
      spin();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        spin();
        observer.disconnect();
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    observer.observe(statsContainer);
  }

  // ===== Interações por toque =====
  function initTouchInteractions() {
    const INTERACTIVE_CARD = '.about-photo-container, .proj-card-soon';

    document.addEventListener('click', (e) => {
      const targetCard = e.target instanceof Element ? e.target.closest(INTERACTIVE_CARD) : null;

      $$(INTERACTIVE_CARD).forEach((card) => {
        if (card === targetCard) card.classList.toggle('is-active');
        else card.classList.remove('is-active');
      });
    });
  }

  // ===== Mapa de contacto (a partir de 768px) =====
  let contactMapInstance = null;

  function createContactMap() {
    const container = $('#contact-map');
    if (!container || contactMapInstance || typeof L === 'undefined') return;

    const EVORA_COORDS = [38.5714, -7.9135];

    contactMapInstance = L.map(container, {
      center: EVORA_COORDS,
      zoom: 14,
      zoomControl: false,
      dragging: false,
      touchZoom: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      attributionControl: true
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png?key=cb1_3p31_1_2ab9b370e64a9473cb9a8df7', {
      subdomains: 'abcd',
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(contactMapInstance);

    const techCoordsIcon = L.divIcon({
      className: 'tech-marker-icon',
      html:
        '<span class="tech-marker-reticle"></span>' +
        '<div class="tech-marker-tag">' +
          '<span class="tech-marker-title">ÉVORA</span>' +
          '<span class="tech-marker-coords">38.5714&deg; N, 7.9135&deg; W</span>' +
        '</div>',
      iconSize: [0, 0],
      iconAnchor: [0, 0]
    });

    const techMarker = L.marker(EVORA_COORDS, {
      icon: techCoordsIcon,
      interactive: false,
      keyboard: false
    }).addTo(contactMapInstance);

    // Deixa copiar o texto do marcador sem abrir o Google Maps
    const markerEl = techMarker.getElement();
    const textTag = markerEl ? markerEl.querySelector('.tech-marker-tag') : null;
    if (textTag) L.DomEvent.disableClickPropagation(textTag);

    contactMapInstance.on('click', () => {
      window.open('https://www.google.com/maps/search/?api=1&query=%C3%89vora%2C+Portugal', '_blank', 'noopener');
    });
  }

  // O Leaflet (~50 KB) só descarrega quando o mapa vai ser usado: ecrã com
  // 768px ou mais e mapa perto de aparecer. No telemóvel nunca carrega.
  let leafletPromise = null;

  function loadLeaflet() {
    if (typeof L !== 'undefined') return Promise.resolve();
    if (leafletPromise) return leafletPromise;

    const LEAFLET = 'https://unpkg.com/leaflet@1.9.4/dist/';
    const loadCss = new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = LEAFLET + 'leaflet.css';
      link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
      link.crossOrigin = '';
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
    const loadJs = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = LEAFLET + 'leaflet.js';
      script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
      script.crossOrigin = '';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });

    leafletPromise = Promise.all([loadCss, loadJs]).catch((err) => {
      leafletPromise = null;
      throw err;
    });
    return leafletPromise;
  }

  function initContactMap() {
    const mapEl = $('#contact-map');
    if (!mapEl) return;

    const query = window.matchMedia('(min-width: 768px)');
    let nearViewport = !('IntersectionObserver' in window);

    const tryCreate = () => {
      if (contactMapInstance || !query.matches || !nearViewport) return;
      loadLeaflet()
        .then(createContactMap)
        .catch((err) => console.error('[mapa] Leaflet não carregou:', err));
    };

    if (!nearViewport) {
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          nearViewport = true;
          observer.disconnect();
          tryCreate();
        }
      }, { rootMargin: '400px 0px' });
      observer.observe(mapEl);
    }

    tryCreate();

    const onChange = () => tryCreate();
    if (query.addEventListener) query.addEventListener('change', onChange);
    else if (query.addListener) query.addListener(onChange);

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (contactMapInstance) contactMapInstance.invalidateSize();
      }, 150);
    }, { passive: true });
  }

  // ===== Formulário de contacto =====
  function initContactForm() {
    const form = $('#contact-form');
    const status = $('#form-status');
    if (!form || !status) return;

    const submitBtn = $('button[type="submit"]', form);

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      status.textContent = t('contact_form_sending');
      status.classList.remove('success', 'error');
      form.setAttribute('aria-busy', 'true');
      if (submitBtn) submitBtn.disabled = true;

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(form)
        });
        const result = await response.json();

        if (response.ok && result.success) {
          status.textContent = t('contact_form_success');
          status.classList.add('success');
          form.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        status.textContent = t('contact_form_error');
        status.classList.add('error');
      } finally {
        form.removeAttribute('aria-busy');
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  // ===== Cursor personalizado (desktop com rato) =====
  function initCursor() {
    const dot = $('#cursor');
    const ring = $('#cursor-ring');
    if (!dot || !ring) return;

    const root = document.documentElement;
    const MIN_WIDTH = 1024;
    const INTERACTIVE = 'a, button, .contact-map, .hero-photo, .about-photo-container, .skill-category, .skill-tag, .rec-card, .proj-card, .compare, .gl-btn, .gl-backdrop';

    let active = false;
    let seen = false;
    let x = 0;
    let y = 0;
    let ringX = 0;
    let ringY = 0;
    let frame = null;

    const render = () => {
      ringX += (x - ringX) * 0.15;
      ringY += (y - ringY) * 0.15;
      ring.style.setProperty('--x', ringX + 'px');
      ring.style.setProperty('--y', ringY + 'px');

      frame = (Math.abs(x - ringX) > 0.1 || Math.abs(y - ringY) > 0.1)
        ? requestAnimationFrame(render)
        : null;
    };

    const enable = () => {
      active = true;
      root.classList.add('has-custom-cursor');
    };

    const disable = () => {
      active = false;
      seen = false;
      root.classList.remove('has-custom-cursor');
      document.body.classList.remove('hovering', 'text-hover');
      if (frame !== null) {
        cancelAnimationFrame(frame);
        frame = null;
      }
    };

    document.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      if (window.innerWidth < MIN_WIDTH) {
        if (active) disable();
        return;
      }
      if (!active) enable();

      x = e.clientX;
      y = e.clientY;
      if (!seen) {
        ringX = x;
        ringY = y;
        seen = true;
      }

      dot.style.setProperty('--x', x + 'px');
      dot.style.setProperty('--y', y + 'px');
      if (frame === null) frame = requestAnimationFrame(render);
    }, { passive: true });

    document.addEventListener('mouseover', (e) => {
      if (!active || !(e.target instanceof Element)) return;
      const interactive = e.target.closest(INTERACTIVE);
      const textField = !interactive && e.target.closest('input, textarea');
      document.body.classList.toggle('hovering', Boolean(interactive));
      document.body.classList.toggle('text-hover', Boolean(textField));
    });

    document.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget) document.body.classList.remove('hovering', 'text-hover');
    });

    window.addEventListener('resize', () => {
      if (active && window.innerWidth < MIN_WIDTH) disable();
    }, { passive: true });
  }

  // ===== Menu do CV =====
  function initCvDropdown() {
    const btn = $('#cv-btn');
    const dropdown = $('#cv-dropdown');
    if (!btn || !dropdown) return;

    const setOpen = (isOpen) => {
      dropdown.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', String(isOpen));
    };

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      setOpen(!dropdown.classList.contains('open'));
    });

    document.addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  // ===== Carrossel infinito (mobile) =====
  // Duplica os cartões antes e depois do conjunto real. Quando o scroll assenta,
  // salta para o conjunto do meio sem se notar, por isso nunca chega ao fim.
  function createLoopCarousel(track) {
    let on = false;
    let anchor = null; // primeiro cartão real
    let centerLeft = 0;
    let touching = false;
    let settleTimer = null;

    const makeClone = (card) => {
      const clone = card.cloneNode(true);
      clone.classList.add('is-clone');
      clone.setAttribute('aria-hidden', 'true');
      clone.tabIndex = -1;
      return clone;
    };

    const getSetWidth = () => {
      const firstClone = $('.is-clone', track);
      if (!firstClone || !anchor) return 0;
      return anchor.getBoundingClientRect().left - firstClone.getBoundingClientRect().left;
    };

    // Sem o snap ativo, para o salto não ser "puxado" para outro cartão
    const jumpTo = (left) => {
      track.style.scrollSnapType = 'none';
      track.scrollLeft = left;
      requestAnimationFrame(() => { track.style.scrollSnapType = ''; });
    };

    const centerAnchor = () => {
      if (!anchor) return;
      const offset = anchor.getBoundingClientRect().left - track.getBoundingClientRect().left;
      centerLeft = offset + track.scrollLeft - (track.clientWidth - anchor.offsetWidth) / 2;
      jumpTo(centerLeft);
    };

    const normalize = () => {
      if (!on || touching) return;
      const setWidth = getSetWidth();
      if (!setWidth) return;
      const sets = Math.round((track.scrollLeft - centerLeft) / setWidth);
      if (sets !== 0) jumpTo(track.scrollLeft - sets * setWidth);
    };

    const scheduleNormalize = (delay) => {
      clearTimeout(settleTimer);
      settleTimer = setTimeout(normalize, delay);
    };

    track.addEventListener('scroll', () => scheduleNormalize(120), { passive: true });
    track.addEventListener('touchstart', () => { touching = true; }, { passive: true });
    ['touchend', 'touchcancel'].forEach((type) => {
      track.addEventListener(type, () => {
        touching = false;
        scheduleNormalize(160);
      }, { passive: true });
    });

    const disable = () => {
      on = false;
      anchor = null;
      $$('.is-clone', track).forEach((clone) => clone.remove());
    };

    const enable = (cards) => {
      disable();
      if (cards.length < 2) {
        track.scrollLeft = 0;
        return;
      }
      on = true;
      anchor = cards[0];
      track.prepend(...cards.map(makeClone));
      track.append(...cards.map(makeClone));
      requestAnimationFrame(() => requestAnimationFrame(centerAnchor));
    };

    return { enable, disable };
  }

  // ===== Projetos (filtros e "Ver mais") =====
  function initProjects() {
    const filterBtns = $$('.filter-btn');
    const track = $('#projects-list');
    const loadMore = $('#btn-load-more');
    if (!filterBtns.length || !track) return;

    const origCards = $$('.proj-card', track); // guardados antes de existirem clones
    if (!origCards.length) return;

    const INITIAL_COUNT = 3;
    const mobileMQ = window.matchMedia('(max-width: 767px)');
    const carousel = createLoopCarousel(track);

    let currentFilter = 'all';
    let isExpanded = false;

    const matches = (card) => currentFilter === 'all' || card.dataset.cat === currentFilter;

    const update = () => {
      const matching = origCards.filter(matches);

      if (mobileMQ.matches) {
        origCards.forEach((card) => card.classList.toggle('hidden', !matches(card)));
        if (loadMore) loadMore.hidden = true;
        carousel.enable(matching);
        return;
      }

      carousel.disable();
      let shown = 0;
      origCards.forEach((card) => {
        const visible = matches(card) && (isExpanded || shown < INITIAL_COUNT);
        if (visible) shown++;
        card.classList.toggle('hidden', !visible);
      });

      if (loadMore) {
        loadMore.hidden = matching.length <= INITIAL_COUNT;
        const key = isExpanded ? 'projects_less' : 'projects_more';
        loadMore.dataset.i18n = key;
        loadMore.textContent = t(key);
      }
    };

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => {
          const isActive = b === btn;
          b.classList.toggle('active', isActive);
          b.setAttribute('aria-pressed', String(isActive));
        });
        currentFilter = btn.dataset.filter;
        isExpanded = false;
        update();
      });
    });

    if (loadMore) {
      loadMore.addEventListener('click', () => {
        isExpanded = !isExpanded;
        update();
      });
    }

    // Se o idioma mudar, o botão "Ver mais/menos" tem de acompanhar
    document.addEventListener('languagechange', () => {
      if (loadMore && !mobileMQ.matches) {
        loadMore.textContent = t(isExpanded ? 'projects_less' : 'projects_more');
      }
    });

    const onMQ = () => update();
    if (mobileMQ.addEventListener) mobileMQ.addEventListener('change', onMQ);
    else if (mobileMQ.addListener) mobileMQ.addListener(onMQ);

    update();
  }

  // ===== Skills (carrossel no mobile, grelha no resto) =====
  function initSkillsCarousel() {
    const track = $('.skills-grid-new');
    if (!track) return;

    const cards = $$('.skill-category', track);
    if (!cards.length) return;

    const mobileMQ = window.matchMedia('(max-width: 767px)');
    const carousel = createLoopCarousel(track);

    const update = () => {
      if (mobileMQ.matches) carousel.enable(cards);
      else carousel.disable();
    };

    if (mobileMQ.addEventListener) mobileMQ.addEventListener('change', update);
    else if (mobileMQ.addListener) mobileMQ.addListener(update);

    update();
  }

  // ===== Comparador v1 / v2 =====
  function initCompare() {
    $$('.compare').forEach((compare) => {
      const range = $('.compare-range', compare);
      if (!range) return;

      const setPos = (val) => {
        range.value = val;
        compare.style.setProperty('--pos', val + '%');
      };

      // Começa a 100%: só se vê a v1.0
      setPos(100);

      let userInteracted = false;
      let animId = null;
      let timeoutId = null;

      // Se o utilizador mexer no slider, a animação pára
      const cancelAnimation = () => {
        userInteracted = true;
        if (animId) cancelAnimationFrame(animId);
        if (timeoutId) clearTimeout(timeoutId);
      };

      range.addEventListener('input', () => {
        cancelAnimation();
        compare.style.setProperty('--pos', range.value + '%');
      });
      range.addEventListener('pointerdown', cancelAnimation);
      range.addEventListener('mousedown', cancelAnimation);
      range.addEventListener('touchstart', cancelAnimation, { passive: true });

      // Desliza de um valor para outro com easing
      const animateSlide = (from, to, duration, onComplete) => {
        let startTime = null;
        const step = (timestamp) => {
          if (userInteracted) return;
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // easeInOut
          const eased = 0.5 - Math.cos(progress * Math.PI) / 2;
          const current = from + (to - from) * eased;

          setPos(current.toFixed(2));

          if (progress < 1) {
            animId = requestAnimationFrame(step);
          } else {
            setPos(to);
            if (onComplete) onComplete();
          }
        };
        animId = requestAnimationFrame(step);
      };

      const startIntroAnimation = () => {
        if (userInteracted) return;

        // Mostra a v1.0 durante 1,5 s
        timeoutId = setTimeout(() => {
          if (userInteracted) return;

          // Desliza até à esquerda (revela a v2.0) em 1,2 s
          animateSlide(100, 0, 1200, () => {
            if (userInteracted) return;

            // Espera 400 ms para dar tempo de ver a v2.0
            timeoutId = setTimeout(() => {
              if (userInteracted) return;

              // Volta ao centro (50%) em 0,9 s
              animateSlide(0, 50, 900, () => {
                // a partir daqui o controlo é só manual
              });
            }, 400);
          });
        }, 1500);
      };

      // A animação só arranca quando o comparador aparece no ecrã
      if (!('IntersectionObserver' in window)) {
        startIntroAnimation();
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startIntroAnimation();
            observer.disconnect(); // só corre uma vez
          }
        });
      }, { threshold: 0.3 });

      observer.observe(compare);
    });
  }

  // ===== Lightbox da galeria =====
  function initGalleryLightbox() {
    const lightbox = $('#gallery-lightbox');
    if (!lightbox) return;

    const imgEl = $('#gl-active-img');
    const captionEl = $('#gl-caption');
    const prevBtn = $('#gl-prev');
    const nextBtn = $('#gl-next');
    const closeBtn = $('#gl-close');
    const backdrop = $('.gl-backdrop', lightbox);

    // Ecrãs principais: setas e loop infinito
    const shots = $$('.gallery .shot');
    const galleryItems = shots.map((shot) => {
      const img = $('img', shot);
      const caption = $('figcaption', shot);
      return {
        src: img ? img.getAttribute('src') : '',
        alt: img ? img.getAttribute('alt') : '',
        text: caption ? caption.textContent.trim() : ''
      };
    });

    let currentIndex = 0;
    let isAnimating = false;
    let isSingleMode = false;

    const showImage = (index, direction = 'next') => {
      if (isAnimating || isSingleMode) return;
      isAnimating = true;

      const item = galleryItems[index];
      const outClass = direction === 'next' ? 'slide-out-left' : 'slide-out-right';
      imgEl.classList.remove('slide-in-from-right', 'slide-in-from-left', 'slide-out-left', 'slide-out-right');
      imgEl.classList.add(outClass);

      setTimeout(() => {
        imgEl.src = item.src;
        imgEl.alt = item.alt;
        if (captionEl) captionEl.textContent = item.text;

        const inClass = direction === 'next' ? 'slide-in-from-right' : 'slide-in-from-left';
        imgEl.classList.remove(outClass);
        imgEl.classList.add(inClass);

        setTimeout(() => {
          imgEl.classList.remove(inClass);
          isAnimating = false;
        }, 280);
      }, 150);
    };

    const openLightbox = (src, alt, captionText, single = false) => {
      isSingleMode = single;
      lightbox.classList.toggle('gl-single-mode', single);

      imgEl.src = src;
      imgEl.alt = alt || '';
      if (captionEl) captionEl.textContent = captionText || '';
      imgEl.className = 'gl-active-img';

      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    const prevImage = () => {
      if (isSingleMode || !galleryItems.length) return;
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      showImage(currentIndex, 'prev');
    };

    const nextImage = () => {
      if (isSingleMode || !galleryItems.length) return;
      currentIndex = (currentIndex + 1) % galleryItems.length;
      showImage(currentIndex, 'next');
    };

    // Clique nos ecrãs principais
    shots.forEach((shot, i) => {
      shot.addEventListener('click', () => {
        currentIndex = i;
        const item = galleryItems[i];
        openLightbox(item.src, item.alt, item.text, false);
      });
    });

    // Clique no mockup do topo (abre sem setas)
    const browserFrame = $('.browser .media-frame');
    if (browserFrame) {
      browserFrame.style.cursor = 'pointer';
      browserFrame.addEventListener('click', () => {
        const img = $('img', browserFrame);
        if (img) openLightbox(img.getAttribute('src'), img.getAttribute('alt'), 'pedrolourenco.pt — Mockup principal', true);
      });
    }

    // Clique na imagem do formulário (abre sem setas)
    const formShot = $('#dynamic-form figure.shot');
    if (formShot) {
      formShot.style.cursor = 'pointer';
      formShot.addEventListener('click', () => {
        const img = $('img', formShot);
        const caption = $('figcaption', formShot);
        if (img) openLightbox(img.getAttribute('src'), img.getAttribute('alt'), caption ? caption.textContent.trim() : '', true);
      });
    }

    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (backdrop) backdrop.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (!isSingleMode) {
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
      }
    });
  }

  // ===== Arranque (cada módulo corre isolado) =====
  const safeInit = (fn) => {
    try {
      fn();
    } catch (err) {
      console.error('[init] ' + fn.name + ' falhou:', err);
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    [
      initLanguage,
      initMatrixCanvas,
      initImageFallbacks,
      initStats,
      initScrollReveal,
      initResumeGuard,
      initMobileNav,
      initScrollUI,
      initTouchInteractions,
      initContactForm,
      initContactMap,
      initCursor,
      initCvDropdown,
      initProjects,
      initSkillsCarousel,
      initCompare,
      initGalleryLightbox
    ].forEach(safeInit);
  });
})();