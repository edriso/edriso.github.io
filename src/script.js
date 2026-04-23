const PORTFOLIO_BASE = 'https://edriso.netlify.app';

const ROLES = {
  software: {
    pageTitle: 'Mohamed Idris - Software Engineer',
    metaDescription:
      'Mohamed Idris - Software Engineer building web apps with React, Node.js, TypeScript, PHP, and more.',
    ogTitle: 'Mohamed Idris | Software Engineer',
    ogDescription:
      'Software Engineer building web apps with React, Node.js, TypeScript, PHP, and more.',
    roleTitle: 'Software Engineer',
    about: [
      'Software engineer with a strong foundation in computer science and a passion for building web applications that solve real problems and are easy for people to use.',
      'Experienced across the full stack, from building frontend interfaces with React and Vue to developing APIs and services with Node.js and Laravel. I enjoy collaborating with teams to deliver well-crafted applications that create real value. Active user of AI tools to accelerate development workflows.'
    ],
    skills: [
      { label: 'Languages', items: 'JavaScript, TypeScript, PHP, HTML, CSS' },
      {
        label: 'Frontend',
        items: 'React, Next.js, Vue, Alpine.js, Tailwind CSS, SASS'
      },
      {
        label: 'Backend',
        items: 'Node.js, Express.js, Laravel, Prisma, GraphQL, REST APIs'
      },
      { label: 'Databases', items: 'MySQL, PostgreSQL, MongoDB' },
      { label: 'Platforms', items: 'Shopify, Magento 2, Hyvä' },
      { label: 'Bots', items: 'Grammy, Discord.js' },
      { label: 'Testing', items: 'Vitest, Jest, React Testing Library' },
      { label: 'Tools', items: 'Git, Docker, CI/CD, Postman, AI Tools' },
      {
        label: 'Soft Skills',
        items: 'Agile Methodologies, Team Collaboration, Code Review'
      }
    ]
  },

  fullstack: {
    pageTitle: 'Mohamed Idris - Fullstack Engineer',
    metaDescription:
      'Mohamed Idris - Fullstack Engineer building performant web applications with React, Next.js, TypeScript, Node.js, and GraphQL.',
    ogTitle: 'Mohamed Idris | Fullstack Engineer',
    ogDescription:
      'Fullstack Engineer building performant web applications with React, Next.js, TypeScript, and Node.js.',
    roleTitle: 'Fullstack Engineer',
    about: [
      'Fullstack engineer with a strong foundation in computer science and a passion for building complete web applications, from the UI down to the API and database.',
      'Experienced in React, Next.js, TypeScript, Node.js, PHP, and GraphQL across both frontend and backend. I enjoy collaborating with teams to deliver accessible, well-tested applications that drive growth and create real value for users. Active user of AI tools to accelerate development workflows.'
    ],
    skills: [
      { label: 'Languages', items: 'JavaScript, TypeScript, PHP, HTML, CSS' },
      {
        label: 'Frontend',
        items: 'React, Next.js, Vue, Alpine.js, Tailwind CSS, SASS'
      },
      {
        label: 'Backend',
        items: 'Node.js, Express.js, Laravel, Prisma, GraphQL, REST APIs'
      },
      { label: 'Databases', items: 'MySQL, PostgreSQL, MongoDB' },
      { label: 'Platforms', items: 'Shopify, Magento 2, Hyvä' },
      { label: 'Bots', items: 'Grammy, Discord.js' },
      { label: 'Testing', items: 'Vitest, Jest, React Testing Library' },
      { label: 'Tools', items: 'Git, Docker, CI/CD, Postman, AI Tools' },
      {
        label: 'Soft Skills',
        items: 'Agile Methodologies, Team Collaboration, Code Review'
      }
    ]
  },

  frontend: {
    pageTitle: 'Mohamed Idris - Frontend Developer',
    metaDescription:
      'Mohamed Idris - Frontend Developer specializing in React, Next.js, Vue, TypeScript, and building polished, accessible user interfaces.',
    ogTitle: 'Mohamed Idris | Frontend Developer',
    ogDescription:
      'Frontend Developer specializing in React, Next.js, Vue, TypeScript, and accessible UI development.',
    roleTitle: 'Frontend Developer',
    about: [
      'Frontend developer with a strong eye for detail and a focus on building fast, accessible, and polished user interfaces.',
      'Specialized in React, Next.js, and Vue with TypeScript, delivering clean component architectures and smooth user experiences. I enjoy bridging the gap between design and engineering, collaborating closely with designers and backend developers to ship interfaces people enjoy using. Active user of AI tools to accelerate development workflows.'
    ],
    skills: [
      { label: 'Languages', items: 'JavaScript, TypeScript, HTML, CSS' },
      {
        label: 'Frontend',
        items: 'React, Next.js, Vue, Alpine.js, Tailwind CSS, SASS'
      },
      { label: 'APIs', items: 'GraphQL, REST APIs' },
      { label: 'Testing', items: 'Vitest, Jest, React Testing Library' },
      { label: 'Tools', items: 'Git, Postman, AI Tools' },
      {
        label: 'Soft Skills',
        items: 'Agile Methodologies, Team Collaboration, Code Review'
      }
    ]
  },

  php: {
    pageTitle: 'Mohamed Idris - PHP/Laravel Developer',
    metaDescription:
      'Mohamed Idris - PHP/Laravel Developer with expertise in building robust APIs, database architecture, and full-stack web applications.',
    ogTitle: 'Mohamed Idris | PHP/Laravel Developer',
    ogDescription:
      'PHP/Laravel Developer with expertise in building robust APIs, database architecture, and full-stack web applications.',
    roleTitle: 'PHP/Laravel Developer',
    about: [
      'PHP/Laravel developer with a strong foundation in computer science and hands-on experience building robust APIs and web applications.',
      'Experienced in Laravel, MySQL, PostgreSQL, and RESTful API design, with additional proficiency in Node.js and JavaScript for services that benefit from a JavaScript runtime. I care about clean code, good architecture, and building systems that are maintainable and reliable long-term. Active user of AI tools to accelerate development workflows.'
    ],
    skills: [
      { label: 'Languages', items: 'PHP, JavaScript, TypeScript, HTML, CSS' },
      {
        label: 'Backend',
        items: 'Laravel, Node.js, Express.js, Prisma, GraphQL, REST APIs'
      },
      { label: 'Databases', items: 'MySQL, PostgreSQL, MongoDB' },
      { label: 'Frontend', items: 'React, Vue, Alpine.js, Tailwind CSS' },
      { label: 'Testing', items: 'Vitest, Jest' },
      { label: 'Tools', items: 'Git, Docker, CI/CD, Postman, AI Tools' },
      {
        label: 'Soft Skills',
        items:
          'Agile Methodologies, Team Collaboration, Code Review, Technical Documentation'
      }
    ]
  },

  magento: {
    pageTitle: 'Mohamed Idris - E-commerce Developer',
    metaDescription:
      'Mohamed Idris - E-commerce Developer specializing in Magento 2, Hyvä Theme, GCP, and building scalable B2C/B2B platforms from scratch.',
    ogTitle: 'Mohamed Idris | E-commerce Developer',
    ogDescription:
      'E-commerce Developer specializing in Magento 2, Hyvä Theme, and full-stack web development.',
    roleTitle: 'E-commerce Developer',
    about: [
      'E-commerce developer with a strong foundation in computer science and hands-on experience building and owning Magento 2 platforms end-to-end.',
      'Specialized in Magento 2, Hyvä Theme, and B2C/B2B e-commerce development. Experienced with PHP, JavaScript, TypeScript, React, GraphQL, GCP infrastructure, Cloudflare (CDN, WAF, caching), and Linux/Nginx server management. Active user of AI tools to accelerate development workflows.'
    ],
    skills: [
      {
        label: 'E-commerce',
        items: 'Magento 2, Hyvä Theme, Shopify, B2C & B2B, Adobe Commerce'
      },
      { label: 'Languages', items: 'PHP, JavaScript, TypeScript, HTML, CSS' },
      {
        label: 'Frontend',
        items: 'React, Next.js, Vue, Alpine.js, Tailwind CSS, SASS'
      },
      {
        label: 'Backend',
        items: 'Node.js, Express.js, Laravel, Prisma, GraphQL, REST APIs'
      },
      { label: 'Databases', items: 'MySQL, PostgreSQL, MongoDB' },
      {
        label: 'Infrastructure',
        items:
          'GCP (Compute Engine, Cloud SQL, IAM, load balancing), Cloudflare (CDN, WAF, caching, DDoS protection), Linux/Unix, Nginx/Apache, Docker'
      },
      {
        label: 'Security',
        items: 'OWASP, PCI DSS, SSL/TLS, firewall configuration'
      },
      { label: 'Testing', items: 'Vitest, Jest, React Testing Library' },
      { label: 'Tools', items: 'Git, CI/CD, Postman, AI Tools' },
      {
        label: 'Soft Skills',
        items:
          'Agile Methodologies, Team Collaboration, Code Review, Technical Documentation'
      }
    ]
  }
};

const VALID_ROLES = Object.keys(ROLES);
const DEFAULT_ROLE = 'software';
const STORAGE_KEY = 'portfolio_role';

function getRole() {
  const param = new URLSearchParams(window.location.search).get('r');
  if (VALID_ROLES.includes(param)) {
    localStorage.setItem(STORAGE_KEY, param);
    return param;
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  return VALID_ROLES.includes(stored) ? stored : DEFAULT_ROLE;
}

function applyRole(role) {
  const data = ROLES[role];

  document.title = data.pageTitle;
  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', data.metaDescription);
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute('content', data.ogTitle);
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute('content', data.ogDescription);

  document.querySelector('[data-role="title"]').textContent = data.roleTitle;

  document.querySelector('[data-role="about"]').innerHTML = data.about
    .map((p) => `<p>${p}</p>`)
    .join('');

  document.querySelector('[data-role="skills"]').innerHTML = data.skills
    .map((s) => `<li><strong>${s.label}</strong>: ${s.items}</li>`)
    .join('');

  document.getElementById('portfolio-link').href =
    role !== DEFAULT_ROLE ? `${PORTFOLIO_BASE}?r=${role}` : PORTFOLIO_BASE;
}

applyRole(getRole());

document.getElementById('download-btn').addEventListener('click', () => {
  window.scrollTo(0, 0);
  window.print();
});
