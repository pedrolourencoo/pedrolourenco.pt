/* ==========================================================================
   Pedro Lourenço — Portfolio Script
   i18n (PT/EN) · scroll reveal (IntersectionObserver) · mobile nav
   dynamic stats · contact form (Web3Forms)
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. TRANSLATIONS
     ------------------------------------------------------------------ */
  const translations = {
    pt: {
      nav_about: "Sobre",
      nav_skills: "Skills",
      nav_experience: "Experiência",
      nav_education: "Educação",
      nav_projects: "Projetos",
      nav_contact: "Contactos",

      hero_title: "Automatizo processos, protejo sistemas e construo software com propósito.",
      hero_subtitle: "Sou o Pedro, developer de Évora apaixonado por Python, automação e cibersegurança. Transformo problemas complexos em soluções eficientes.",
      hero_cta_cv: "Download CV",
      hero_cta_contact: "Contactar",
      hero_status: "Disponível para novos projetos",

      about_title: "Sobre Mim",
      about_text: "Sou um jovem profissional natural de Évora, focado em desenvolvimento de software, automação de processos e cibersegurança. Gosto de perceber como os sistemas funcionam — e como os posso tornar mais eficientes, seguros e inteligentes. Ao longo do meu percurso, tenho combinado formação técnica com experiência prática em projetos reais, desde sistemas de visão computacional até automação financeira.",
      about_stat_roles: "Experiências profissionais",
      about_stat_skills: "Tecnologias dominadas",
      about_stat_certs: "Formações técnicas",
      about_badge_iefp: "Elegível para Estágio IEFP (ATIVAR.PT)",
      about_badge_availability: "Disponibilidade imediata",

      skills_title: "Skills",
      skills_desc: "Linguagens, ferramentas e tecnologias que uso no meu dia a dia.",

      experience_title: "Experiência Profissional",
      exp1_role: "Python Developer — IoT & Visão Computacional",
      exp1_desc: "Desenvolvimento em Python de soluções de IoT e Visão Computacional, incluindo o sistema \"Geo Guard\" e conversão de imagens 2D para modelos 3D.",
      exp2_role: "Software Developer",
      exp2_desc: "Criação de um programa para automação de faturas em PDF e gestão financeira.",
      exp3_role: "Developer & Suporte Técnico",
      exp3_desc: "Desenvolvimento de software em Visual Basic e suporte técnico.",
      exp4_role: "Operador de Armazém",
      exp4_desc: "Operador de Armazém com foco na organização e produtividade.",

      education_title: "Educação",
      edu1_level: "Nível 5",
      edu1_name: "Técnico Especialista de<br>Cibersegurança",
      edu2_level: "Nível 4",
      edu2_name: "Técnico de Gestão e Programação de Sistemas Informáticos",
      edu_grade_label: "Nota final",
      edu_cert_btn: "Ver Certificado",
      additional_certs_title: "Certificações Adicionais",

      projects_title: "Projetos",
      projects_desc: "Alguns dos projetos em que participei.",
      project1_desc: "Sistema de IoT e Visão Computacional para monitorização e deteção inteligente, desenvolvido em Python.",
      project2_name: "Conversão 2D → 3D",
      project2_desc: "Ferramenta para conversão automática de imagens 2D em modelos 3D, aplicada a projetos de visão computacional.",
      project3_name: "Automação de Faturas",
      project3_desc: "Programa para automação de faturas em PDF e gestão financeira, desenvolvido para a Futurévora.",

      contact_title: "Contactos",
      contact_desc: "Vamos conversar sobre o teu próximo projeto.",
      contact_location_label: "Localização",
      contact_form_name: "Nome",
      contact_form_email: "Email",
      contact_form_message: "Mensagem",
      contact_form_submit: "Enviar",
      contact_form_sending: "A enviar...",
      contact_form_success: "Mensagem enviada com sucesso! Entrarei em contacto em breve.",
      contact_form_error: "Ocorreu um erro ao enviar. Tenta novamente ou contacta-me diretamente.",

      footer_copy: "© 2026 Pedro Lourenço. Todos os direitos reservados."
    },

    en: {
      nav_about: "About",
      nav_skills: "Skills",
      nav_experience: "Experience",
      nav_education: "Education",
      nav_projects: "Projects",
      nav_contact: "Contact",

      hero_title: "I automate processes, secure systems and build software with purpose.",
      hero_subtitle: "I'm Pedro, a developer from Évora who's passionate about Python, automation and cybersecurity. I turn complex problems into efficient solutions.",
      hero_cta_cv: "Download CV",
      hero_cta_contact: "Get in Touch",
      hero_status: "Available for new projects",

      about_title: "About Me",
      about_text: "I'm a young professional from Évora, Portugal, focused on software development, process automation and cybersecurity. I enjoy understanding how systems work — and how to make them more efficient, secure and intelligent. Throughout my journey, I've combined technical training with hands-on experience in real projects, from computer vision systems to financial automation.",
      about_stat_roles: "Professional roles",
      about_stat_skills: "Technologies mastered",
      about_stat_certs: "Technical qualifications",
      about_badge_iefp: "Eligible for IEFP Internship (ATIVAR.PT)",
      about_badge_availability: "Available immediately",

      skills_title: "Skills",
      skills_desc: "Languages, tools and technologies I use day to day.",

      experience_title: "Professional Experience",
      exp1_role: "Python Developer — IoT & Computer Vision",
      exp1_desc: "Python development of IoT and Computer Vision solutions, including the \"Geo Guard\" system and 2D-to-3D image conversion.",
      exp2_role: "Software Developer",
      exp2_desc: "Built a program for PDF invoice automation and financial management.",
      exp3_role: "Developer & Technical Support",
      exp3_desc: "Software development in Visual Basic and technical support.",
      exp4_role: "Warehouse Operator",
      exp4_desc: "Warehouse Operator focused on organization and productivity.",

      education_title: "Education",
      edu1_level: "Level 5",
      edu1_name: "Cybersecurity Specialist<br>Technician",
      edu2_level: "Level 4",
      edu2_name: "IT Systems Management and Programming Technician",
      edu_grade_label: "Final grade",
      edu_cert_btn: "View Certificate",
      additional_certs_title: "Additional Certifications",

      projects_title: "Projects",
      projects_desc: "A few of the projects I've worked on.",
      project1_desc: "IoT and Computer Vision system for monitoring and smart detection, built in Python.",
      project2_name: "2D → 3D Conversion",
      project2_desc: "Tool for automatically converting 2D images into 3D models, applied to computer vision projects.",
      project3_name: "Invoice Automation",
      project3_desc: "Program for PDF invoice automation and financial management, built for Futurévora.",

      contact_title: "Contact",
      contact_desc: "Let's talk about your next project.",
      contact_location_label: "Location",
      contact_form_name: "Name",
      contact_form_email: "Email",
      contact_form_message: "Message",
      contact_form_submit: "Send",
      contact_form_sending: "Sending...",
      contact_form_success: "Message sent successfully! I'll get back to you soon.",
      contact_form_error: "Something went wrong. Please try again or contact me directly.",

      footer_copy: "© 2026 Pedro Lourenço. All rights reserved."
    }
  };

  const STORAGE_KEY = 'preferred-lang';

  /* ------------------------------------------------------------------
     2. LANGUAGE DETECTION
     ------------------------------------------------------------------ */
  function detectLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') return saved;

    const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return browserLang.startsWith('pt') ? 'pt' : 'en';
  }

  function getCurrentLang() {
    return document.documentElement.getAttribute('lang') === 'pt' ? 'pt' : 'en';
  }

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.documentElement.setAttribute('lang', lang);
    document.title = lang === 'pt'
      ? 'Pedro Lourenço — Software Developer'
      : 'Pedro Lourenço — Software Developer';

    document.querySelectorAll('.lang-option').forEach((el) => {
      el.classList.toggle('active', el.getAttribute('data-lang') === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
    document.body.setAttribute('data-lang', lang);
  }

  function initLanguage() {
    const lang = detectLanguage();
    applyLanguage(lang);

    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const current = getCurrentLang();
        applyLanguage(current === 'pt' ? 'en' : 'pt');
      });
    }
  }

  /* ------------------------------------------------------------------
     3. SCROLL REVEAL (IntersectionObserver)
     ------------------------------------------------------------------ */
  function initScrollReveal() {
    const targets = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || targets.length === 0) {
      targets.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
  }

  /* ------------------------------------------------------------------
     4. MOBILE NAV TOGGLE
     ------------------------------------------------------------------ */
  function initMobileNav() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('primary-nav');
    if (!menuToggle || !nav) return;

    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu after tapping a link
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------------------------------------------------------------------
     5. HEADER SCROLL STATE (subtle shadow once scrolled)
     ------------------------------------------------------------------ */
  function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    const onScroll = () => {
      header.style.boxShadow = window.scrollY > 8
        ? '0 8px 24px rgba(0,0,0,0.25)'
        : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------------------
     6. BACK TO TOP
     Mostra o botão flutuante depois de fazer scroll para baixo e faz
     smooth scroll até ao topo quando clicado.
     ------------------------------------------------------------------ */
  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    const onScroll = () => {
      btn.classList.toggle('visible', window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------
     7. DYNAMIC STATS (Sobre Mim) — efeito Odómetro / Slot Machine
     Conta automaticamente os itens das secções Experiência, Skills e
     Educação e constrói, para cada número, uma "roda" mecânica por
     dígito (0 a 9 empilhados na vertical, tal como as fitas físicas de
     um odómetro). O movimento é feito só em CSS (transform: translateY
     com transition), disparado quando o .about-stats entra no ecrã
     (IntersectionObserver, tal como o .reveal) — a classe dinâmica
     .is-spinning liga o CSS e o "arranque" da animação em simultâneo.
     Para atualizar os números basta adicionar/remover itens no HTML
     (.timeline-item, .skill-chip, .edu-card) — nada a mexer aqui.
     ------------------------------------------------------------------ */

  // Constrói uma "roda" (coluna) do odómetro para um único dígito (0-9):
  // uma fita vertical com os 10 algarismos, que desliza até ao dígito-alvo.
  function buildOdometerDigit(digit) {
    const digitEl = document.createElement('span');
    digitEl.className = 'odometer-digit';

    const strip = document.createElement('span');
    strip.className = 'odometer-strip';
    // Desloca a fita para cima em múltiplos de 10% da sua própria altura
    // (10 algarismos empilhados = cada um ocupa exatamente 10% da fita).
    strip.style.setProperty('--odometer-shift', `${-(digit * 10)}%`);

    for (let i = 0; i <= 9; i++) {
      const numEl = document.createElement('span');
      numEl.className = 'odometer-num';
      numEl.textContent = String(i);
      strip.appendChild(numEl);
    }

    digitEl.appendChild(strip);
    return digitEl;
  }

  function buildOdometer(el, target) {
    el.innerHTML = '';
    el.classList.add('odometer');

    const digits = document.createElement('span');
    digits.className = 'odometer-digits';
    digits.setAttribute('aria-hidden', 'true');

    String(target)
      .split('')
      .map(Number)
      .forEach((digit) => digits.appendChild(buildOdometerDigit(digit)));

    const srValue = document.createElement('span');
    srValue.className = 'visually-hidden';
    srValue.textContent = String(target);

    el.appendChild(digits);
    el.appendChild(srValue);
  }

  function initStats() {
    const statTargets = [
      { el: document.getElementById('stat-roles'), count: document.querySelectorAll('#experience .timeline-item').length },
      { el: document.getElementById('stat-skills'), count: document.querySelectorAll('#skills .skill-chip').length },
      { el: document.getElementById('stat-certs'), count: document.querySelectorAll('#education .edu-card').length }
    ];

    statTargets.forEach(({ el, count }) => {
      if (!el) return;
      buildOdometer(el, count);
    });

    const statsContainer = document.querySelector('.about-stats');
    const statNums = statTargets.map((s) => s.el).filter(Boolean);
    if (!statsContainer || statNums.length === 0) return;

    const spinOdometers = () => {
      statNums.forEach((el) => {
        el.querySelectorAll('.odometer-strip').forEach((strip) => {
          void strip.offsetHeight;
          strip.classList.add('is-spinning');
        });
      });
    };

    if (!('IntersectionObserver' in window)) {
      spinOdometers();
      return;
    }

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            spinOdometers();
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    statsObserver.observe(statsContainer);
  }

  /* ------------------------------------------------------------------
     9. MAPA DE CONTACTO (Leaflet + CARTO Dark)
     Mapa sem pan/zoom (não se arrasta nem faz zoom, comporta-se como uma
     imagem) com aspeto "painel de cibersegurança": tiles dark da CARTO
     cobertas por uma película azul-escura (::after em CSS, sem filter),
     + um marcador HUD com coordenadas em fonte monospace, sem pino
     luminoso nem ícones padrão do Leaflet. O texto do marcador é
     selecionável/copiável; clicar fora dele abre o Google Maps.
     Só inicializa quando a .contact-map está visível (>=1024px), porque
     o Leaflet mede o contentor no momento da criação; se o mapa nascer
     escondido (display:none no mobile) fica com o tamanho errado.
     ------------------------------------------------------------------ */
  let contactMapInstance = null;

  function createContactMap() {
    const container = document.getElementById('contact-map');
    if (!container || contactMapInstance || typeof L === 'undefined') return;

    // Évora, Portugal
    const EVORA_COORDS = [38.5714, -7.9135];

    contactMapInstance = L.map(container, {
      center: EVORA_COORDS,
      zoom: 14,
      // Mapa 100% estático — sem qualquer interação, funciona como uma imagem
      zoomControl: false,
      dragging: false,
      touchZoom: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      attributionControl: true
    });

    // Chave gratuita da CARTO — gera a tua em https://carto.com/basemaps se precisares de trocar
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png?key=cb1_3p31_1_2ab9b370e64a9473cb9a8df7', {
      subdomains: 'abcd',
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(contactMapInstance);

    // Marcador "Tech Coordinates": sem pino/ícone padrão, apenas uma mira (reticle)
    // no ponto exato + uma etiqueta HUD com "ÉVORA" e as coordenadas em monospace
    const techCoordsIcon = L.divIcon({
      className: 'tech-marker-icon',
      html: `
        <span class="tech-marker-reticle"></span>
        <div class="tech-marker-tag">
          <span class="tech-marker-title">ÉVORA</span>
          <span class="tech-marker-coords">38.5714&deg; N, 7.9135&deg; W</span>
        </div>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0]
    });

    const techMarker = L.marker(EVORA_COORDS, {
      icon: techCoordsIcon,
      interactive: false,
      keyboard: false
    }).addTo(contactMapInstance);

    // Impede que cliques/seleção de texto na etiqueta (ÉVORA + coordenadas) sejam
    // apanhados pelo listener de clique do mapa — permite copiar o texto sem
    // disparar o redirecionamento para o Google Maps
    const markerEl = techMarker.getElement();
    const textTag = markerEl ? markerEl.querySelector('.tech-marker-tag') : null;
    if (textTag) L.DomEvent.disableClickPropagation(textTag);

    // Cursor "pointer" no mapa inteiro — sinaliza que é clicável.
    // O texto do marcador (ÉVORA + coordenadas) sobrepõe-se com cursor:text via CSS.
    container.style.cursor = 'pointer';

    // Mapa clicável: fora do texto, abre a localização no Google Maps numa nova aba
    contactMapInstance.on('click', () => {
      window.open('https://www.google.com/maps/search/?api=1&query=%C3%89vora%2C+Portugal', '_blank', 'noopener');
    });
  }

  function initContactMap() {
    const desktopQuery = window.matchMedia('(min-width: 1024px)');

    if (desktopQuery.matches) {
      createContactMap();
    }

    // Cria o mapa assim que o ecrã passar a desktop (ex.: redimensionar a janela)
    desktopQuery.addEventListener('change', (e) => {
      if (e.matches) createContactMap();
    });

    // Garante que os tiles ocupam o espaço certo após mudanças de layout
    window.addEventListener('resize', () => {
      if (contactMapInstance) contactMapInstance.invalidateSize();
    });
  }

  /* ------------------------------------------------------------------
     8. CONTACT FORM (Web3Forms)
     Envia o formulário via fetch para a API do Web3Forms sem recarregar
     a página. Ver o comentário no HTML para configurar a "access_key".
     Se preferires o Formspree, muda o <form> para usar action="..."
     method="POST" nativo e esta função deixa de ser necessária
     (podes remover a chamada a initContactForm() mais abaixo).
     ------------------------------------------------------------------ */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    const submitBtn = form ? form.querySelector('button[type="submit"]') : null;
    if (!form || !status) return;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const dict = translations[getCurrentLang()];
      status.textContent = dict.contact_form_sending;
      status.classList.remove('success', 'error');
      if (submitBtn) submitBtn.disabled = true;

      const formData = new FormData(form);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData
        });
        const result = await response.json();

        if (response.ok && result.success) {
          status.textContent = dict.contact_form_success;
          status.classList.add('success');
          form.reset();
        } else {
          status.textContent = dict.contact_form_error;
          status.classList.add('error');
        }
      } catch (err) {
        status.textContent = dict.contact_form_error;
        status.classList.add('error');
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  /* ------------------------------------------------------------------
     INIT
     ------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initStats();
    initScrollReveal();
    initMobileNav();
    initHeaderScroll();
    initBackToTop();
    initContactForm();
    initContactMap();
  });
})();