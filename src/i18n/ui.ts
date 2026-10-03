export const languages = {
  ca: 'Català',
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'ca';

const ca = {
  meta: {
    title: 'Eduard Fabra · Desenvolupador de software i creador de Vialyst',
    description:
      'Portfoli d’Eduard Fabra: desenvolupador de software especialitzat en PHP, e-commerce i disseny de solucions web. Creador de Vialyst.',
  },
  a11y: {
    skip: 'Salta al contingut principal',
    mainNav: 'Navegació principal',
    language: 'Idioma',
    openMenu: 'Obre el menú',
    externalLink: '(s’obre en una pestanya nova)',
  },
  nav: {
    vialyst: 'Vialyst',
    stack: 'Stack',
    about: 'Sobre mi',
    projects: 'Projectes',
    experience: 'Experiència',
  },
  hero: {
    greeting: 'Hola, soc',
    role: 'Desenvolupador de software i creador de Vialyst.',
    subtitle:
      'Especialitzat en PHP, e-commerce i disseny de solucions web. Construeixo productes digitals robustos, escalables i pensats per a les persones que els fan servir.',
    ctaDemo: 'Veure la demo de Vialyst',
    ctaContact: 'Contacte',
    location: 'Barcelona',
  },
  vialyst: {
    eyebrow: 'Projecte destacat',
    title: 'Vialyst',
    description:
      'Vialyst és una guia de viatge interactiva pensada per a famílies: una aplicació web offline-first que reuneix itineraris diaris, audioguies, mapes, previsió del temps, vols i llistes de viatge en un sol lloc.',
    features: [
      { title: 'Funciona sense connexió', text: 'Itineraris, mapes i audioguies precarregats per fer-los servir sense dades ni Wi-Fi.' },
      { title: 'Audioguies', text: 'Narracions de cada dia generades amb text-to-speech i pronunciació nativa dels topònims.' },
      { title: 'Mapes i rutes', text: 'Mapes interactius amb allotjament, vols i punts d’interès de cada jornada.' },
      { title: 'Temps i vols', text: 'Previsió meteorològica per a cada parada i seguiment dels vols en temps real.' },
      { title: 'Tot a mà', text: 'Llista d’equipatge, frases útils amb àudio, plans per a dies de pluja i contactes d’emergència.' },
      { title: 'Mode sorpresa', text: 'Un compte enrere que amaga la destinació fins al dia de la sortida.' },
    ],
    cta: 'Prova la demo',
  },
  stack: {
    eyebrow: 'Tecnologies',
    title: 'Stack tecnològic',
    intro: 'Les eines amb què treballo cada dia per construir i escalar productes web.',
    groups: {
      backend: 'Backend',
      ecommerce: 'E-commerce',
      cloud: 'Cloud i DevOps',
      data: 'Dades',
      frontend: 'Frontend i disseny',
      tools: 'Eines i metodologia',
    },
  },
  about: {
    eyebrow: 'Sobre mi',
    title: 'Enginyeria amb visió de producte',
    bio: [
      'Fa més de 20 anys que desenvolupo software per a la web, sobretot plataformes d’e-commerce i marketplaces amb PHP i Symfony. M’agrada entendre el negoci abans d’escriure la primera línia de codi.',
      'He estat Engineering Manager amb un enfocament clar de producte a Drinks&Co, on gestionava cinc equips de desenvolupament i definia prioritats amb l’arquitecte tècnic, producte i el CTO. Abans, durant més d’una dècada, vaig liderar l’equip d’integracions del marketplace d’Uvinum.',
      'Avui soc Principal Software Engineer a SonoSuite i, en paral·lel, construeixo Vialyst, la meva guia de viatge interactiva, i projectes de domòtica amb Home Assistant.',
    ],
    contactTitle: 'Parlem',
    contactText: 'Tens un projecte en ment o vols col·laborar? Escriu-me.',
    email: 'Correu electrònic',
  },
  projects: {
    eyebrow: 'Codi obert',
    title: 'Els meus projectes',
    intro: 'Una selecció dels projectes que publico a GitHub, entre d’altres.',
    items: {
      rfCover: {
        title: 'RF Cover Time Based',
        description:
          'Integració per a Home Assistant que crea persianes, tendals i cortines amb control de posició a partir del temps de recorregut, per a dispositius RF o IR sense estat.',
      },
      homeAssistant: {
        title: 'Configuració de Home Assistant',
        description:
          'La configuració completa de la meva llar intel·ligent: dispositius Zigbee i Wi-Fi, ESPHome i automatitzacions documentades.',
      },
      tempsDeFlors: {
        title: 'Temps de Flors Tracker',
        description:
          'Porta al mòbil el planell de paper de Girona Temps de Flors: marca els espais visitats, puntua’ls i segueix el teu progrés en un mapa, sense registre i compatible fins i tot amb tauletes antigues.',
      },
    },
    viewCode: 'Veure el codi a GitHub',
    openApp: 'Obre l’app',
    moreOnGithub: 'Més projectes a GitHub',
  },
  experience: {
    eyebrow: 'Trajectòria',
    title: 'On he treballat',
    present: 'Actualitat',
    items: {
      sonosuite: {
        description:
          'Plataforma de distribució musical digital per a segells i artistes. Lideratge tècnic, arquitectura PHP i gestió d’equips.',
      },
      drinksco: {
        description:
          'Marketplace internacional de vins i begudes. Gestió de cinc equips de desenvolupament i, abans, lideratge de l’equip d’integració d’afiliats i tercers amb el catàleg (fins a cinc desenvolupadors).',
      },
      grupobc: {
        description: 'Coordinació del departament d’IT i desenvolupament de solucions internes durant set anys.',
      },
    },
    roles: {
      principal: 'Principal Software Engineer',
      engineeringManager: 'Engineering Manager',
      teamLead: 'Cap d’equip',
      itCoordinator: 'Coordinador i programador del departament d’IT',
    },
  },
  footer: {
    rights: 'Tots els drets reservats.',
    built: 'Fet amb Astro i Tailwind CSS.',
    backToTop: 'Torna a dalt',
  },
};

export type Dictionary = typeof ca;

const es: Dictionary = {
  meta: {
    title: 'Eduard Fabra · Desarrollador de software y creador de Vialyst',
    description:
      'Portfolio de Eduard Fabra: desarrollador de software especializado en PHP, e-commerce y diseño de soluciones web. Creador de Vialyst.',
  },
  a11y: {
    skip: 'Saltar al contenido principal',
    mainNav: 'Navegación principal',
    language: 'Idioma',
    openMenu: 'Abrir el menú',
    externalLink: '(se abre en una pestaña nueva)',
  },
  nav: {
    vialyst: 'Vialyst',
    stack: 'Stack',
    about: 'Sobre mí',
    projects: 'Proyectos',
    experience: 'Experiencia',
  },
  hero: {
    greeting: 'Hola, soy',
    role: 'Desarrollador de software y creador de Vialyst.',
    subtitle:
      'Especializado en PHP, e-commerce y diseño de soluciones web. Construyo productos digitales robustos, escalables y pensados para las personas que los utilizan.',
    ctaDemo: 'Ver la demo de Vialyst',
    ctaContact: 'Contacto',
    location: 'Barcelona',
  },
  vialyst: {
    eyebrow: 'Proyecto destacado',
    title: 'Vialyst',
    description:
      'Vialyst es una guía de viaje interactiva pensada para familias: una aplicación web offline-first que reúne itinerarios diarios, audioguías, mapas, previsión del tiempo, vuelos y listas de viaje en un solo lugar.',
    features: [
      { title: 'Funciona sin conexión', text: 'Itinerarios, mapas y audioguías precargados para usarlos sin datos ni Wi-Fi.' },
      { title: 'Audioguías', text: 'Narraciones de cada día generadas con text-to-speech y pronunciación nativa de los topónimos.' },
      { title: 'Mapas y rutas', text: 'Mapas interactivos con alojamiento, vuelos y puntos de interés de cada jornada.' },
      { title: 'Tiempo y vuelos', text: 'Previsión meteorológica para cada parada y seguimiento de los vuelos en tiempo real.' },
      { title: 'Todo a mano', text: 'Lista de equipaje, frases útiles con audio, planes para días de lluvia y contactos de emergencia.' },
      { title: 'Modo sorpresa', text: 'Una cuenta atrás que oculta el destino hasta el día de la salida.' },
    ],
    cta: 'Prueba la demo',
  },
  stack: {
    eyebrow: 'Tecnologías',
    title: 'Stack tecnológico',
    intro: 'Las herramientas con las que trabajo cada día para construir y escalar productos web.',
    groups: {
      backend: 'Backend',
      ecommerce: 'E-commerce',
      cloud: 'Cloud y DevOps',
      data: 'Datos',
      frontend: 'Frontend y diseño',
      tools: 'Herramientas y metodología',
    },
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Ingeniería con visión de producto',
    bio: [
      'Llevo más de 20 años desarrollando software para la web, sobre todo plataformas de e-commerce y marketplaces con PHP y Symfony. Me gusta entender el negocio antes de escribir la primera línea de código.',
      'He sido Engineering Manager con un claro enfoque de producto en Drinks&Co, donde gestionaba cinco equipos de desarrollo y definía prioridades con el arquitecto técnico, producto y el CTO. Antes, durante más de una década, lideré el equipo de integraciones del marketplace de Uvinum.',
      'Hoy soy Principal Software Engineer en SonoSuite y, en paralelo, construyo Vialyst, mi guía de viaje interactiva, y proyectos de domótica con Home Assistant.',
    ],
    contactTitle: 'Hablemos',
    contactText: '¿Tienes un proyecto en mente o quieres colaborar? Escríbeme.',
    email: 'Correo electrónico',
  },
  projects: {
    eyebrow: 'Código abierto',
    title: 'Mis proyectos',
    intro: 'Una selección de los proyectos que publico en GitHub, entre otros.',
    items: {
      rfCover: {
        title: 'RF Cover Time Based',
        description:
          'Integración para Home Assistant que crea persianas, toldos y cortinas con control de posición a partir del tiempo de recorrido, para dispositivos RF o IR sin estado.',
      },
      homeAssistant: {
        title: 'Configuración de Home Assistant',
        description:
          'La configuración completa de mi hogar inteligente: dispositivos Zigbee y Wi-Fi, ESPHome y automatizaciones documentadas.',
      },
      tempsDeFlors: {
        title: 'Temps de Flors Tracker',
        description:
          'Lleva al móvil el plano de papel de Girona Temps de Flors: marca los espacios visitados, puntúalos y sigue tu progreso en un mapa, sin registro y compatible incluso con tabletas antiguas.',
      },
    },
    viewCode: 'Ver el código en GitHub',
    openApp: 'Abrir la app',
    moreOnGithub: 'Más proyectos en GitHub',
  },
  experience: {
    eyebrow: 'Trayectoria',
    title: 'Dónde he trabajado',
    present: 'Actualidad',
    items: {
      sonosuite: {
        description:
          'Plataforma de distribución musical digital para sellos y artistas. Liderazgo técnico, arquitectura PHP y gestión de equipos.',
      },
      drinksco: {
        description:
          'Marketplace internacional de vinos y bebidas. Gestión de cinco equipos de desarrollo y, antes, liderazgo del equipo de integración de afiliados y terceros con el catálogo (hasta cinco desarrolladores).',
      },
      grupobc: {
        description: 'Coordinación del departamento de IT y desarrollo de soluciones internas durante siete años.',
      },
    },
    roles: {
      principal: 'Principal Software Engineer',
      engineeringManager: 'Engineering Manager',
      teamLead: 'Jefe de equipo',
      itCoordinator: 'Coordinador y programador del departamento de IT',
    },
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    built: 'Hecho con Astro y Tailwind CSS.',
    backToTop: 'Volver arriba',
  },
};

const en: Dictionary = {
  meta: {
    title: 'Eduard Fabra · Software developer and creator of Vialyst',
    description:
      'Portfolio of Eduard Fabra: software developer specialised in PHP, e-commerce and web solution design. Creator of Vialyst.',
  },
  a11y: {
    skip: 'Skip to main content',
    mainNav: 'Main navigation',
    language: 'Language',
    openMenu: 'Open menu',
    externalLink: '(opens in a new tab)',
  },
  nav: {
    vialyst: 'Vialyst',
    stack: 'Stack',
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
  },
  hero: {
    greeting: 'Hello, I’m',
    role: 'Software developer and creator of Vialyst.',
    subtitle:
      'Specialised in PHP, e-commerce and web solution design. I build robust, scalable digital products designed around the people who use them.',
    ctaDemo: 'See the Vialyst demo',
    ctaContact: 'Contact',
    location: 'Barcelona',
  },
  vialyst: {
    eyebrow: 'Featured project',
    title: 'Vialyst',
    description:
      'Vialyst is an interactive travel guide designed for families: an offline-first web app that brings daily itineraries, audio guides, maps, weather forecasts, flights and travel checklists together in one place.',
    features: [
      { title: 'Works offline', text: 'Itineraries, maps and audio guides are precached, so they work without data or Wi-Fi.' },
      { title: 'Audio guides', text: 'Daily narration generated with text-to-speech, with native pronunciation of place names.' },
      { title: 'Maps & routes', text: 'Interactive maps showing lodging, flights and each day’s points of interest.' },
      { title: 'Weather & flights', text: 'Forecasts for every stop and real-time flight tracking.' },
      { title: 'Everything at hand', text: 'Packing list, useful phrases with audio, rainy-day plans and emergency contacts.' },
      { title: 'Surprise mode', text: 'A countdown that keeps the destination hidden until departure day.' },
    ],
    cta: 'Try the demo',
  },
  stack: {
    eyebrow: 'Technologies',
    title: 'Tech stack',
    intro: 'The tools I use every day to build and scale web products.',
    groups: {
      backend: 'Backend',
      ecommerce: 'E-commerce',
      cloud: 'Cloud & DevOps',
      data: 'Data',
      frontend: 'Frontend & design',
      tools: 'Tools & methodology',
    },
  },
  about: {
    eyebrow: 'About me',
    title: 'Engineering with a product mindset',
    bio: [
      'I’ve been building software for the web for more than 20 years, mostly e-commerce platforms and marketplaces with PHP and Symfony. I like to understand the business before writing the first line of code.',
      'I was a product-oriented Engineering Manager at Drinks&Co, managing five development teams and setting priorities with the technical architect, product and the CTO. Before that, I spent over a decade leading Uvinum’s marketplace integrations team.',
      'Today I’m a Principal Software Engineer at SonoSuite and, on the side, I build Vialyst, my interactive travel guide, along with home-automation projects on Home Assistant.',
    ],
    contactTitle: 'Let’s talk',
    contactText: 'Have a project in mind or want to collaborate? Get in touch.',
    email: 'Email',
  },
  projects: {
    eyebrow: 'Open source',
    title: 'My projects',
    intro: 'A selection of the projects I publish on GitHub, among others.',
    items: {
      rfCover: {
        title: 'RF Cover Time Based',
        description:
          'A Home Assistant integration that turns RF or IR blinds, awnings and shutters into covers with position control, calculated from travel time.',
      },
      homeAssistant: {
        title: 'Home Assistant configuration',
        description:
          'The full configuration of my smart home: Zigbee and Wi-Fi devices, ESPHome and documented automations.',
      },
      tempsDeFlors: {
        title: 'Temps de Flors Tracker',
        description:
          'Takes the paper map of Girona Temps de Flors to your phone: mark the spaces you’ve visited, rate them and track your progress on a map, with no sign-up and support even for old tablets.',
      },
    },
    viewCode: 'View the code on GitHub',
    openApp: 'Open the app',
    moreOnGithub: 'More projects on GitHub',
  },
  experience: {
    eyebrow: 'Career',
    title: 'Where I’ve worked',
    present: 'Present',
    items: {
      sonosuite: {
        description:
          'Digital music distribution platform for labels and artists. Technical leadership, PHP architecture and team management.',
      },
      drinksco: {
        description:
          'International wine and drinks marketplace. Managed five development teams and, before that, led the team integrating affiliates and third parties into the catalog (up to five developers).',
      },
      grupobc: {
        description: 'Coordinated the IT department and built internal solutions for seven years.',
      },
    },
    roles: {
      principal: 'Principal Software Engineer',
      engineeringManager: 'Engineering Manager',
      teamLead: 'Team Lead',
      itCoordinator: 'IT Department Coordinator & Developer',
    },
  },
  footer: {
    rights: 'All rights reserved.',
    built: 'Built with Astro and Tailwind CSS.',
    backToTop: 'Back to top',
  },
};

export const ui: Record<Lang, Dictionary> = { ca, es, en };
