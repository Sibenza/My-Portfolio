export const profile = {
    name: 'Sibenza Munkombwe',
    initials: 'SM',
    headline: 'IT Operations, Data Science, Full-Stack Development',
    tagline: "I don't just write code — I build solutions that solve real problems.",
    blurb:
      "Bachelor of Science in Information Systems at The Copperbelt University. " +
      "I work at the intersection of data and impact — building full-stack applications, designing " +
      "databases, and turning raw information into decisions people can act on.",
    location: 'Kitwe, Zambia',
    // ⚠️ REPLACE these with your real details
    email: 'sibenzachibbs@gmail.com',
    phone: '+260 976 501 017',
    socials: [
      { label: 'GitHub', url: 'https://github.com/Sibenza/Sibenza' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/sibenza-munkombwe-72a300423' },
    ],
    roles: [
      'Full-Stack Developer',
      'Data & Analytics Enthusiast',
      'Database Administrator',
      'Data Scientist',
      'Problem Solver',
    ],
    stats: [
      { value: '5', label: 'Academic Projects' },
      { value: '12+', label: 'Technologies' },
      { value: '4', label: 'Languages Spoken' },
      { value: '2026', label: 'Graduating' },
    ],
  };
  
  export const about = {
    paragraphs: [
      "My academic journey has given me hands-on experience across full-stack software development, " +
        "database engineering, data analytics, and systems security. I enjoy the full lifecycle of a " +
        "system — from analysing a problem, to designing the schema, to shipping an interface that " +
        "people actually want to use.",
      "I'm driven by the intersection of data and impact. Whether it's mining sensor telemetry, " +
        "agricultural weather data, or customer transactions, I'm fascinated by how the right " +
        "architecture turns raw numbers into intelligence that optimises operations and drives " +
        "smarter decisions.",
    ],
    softSkills: [
      { title: 'Analytical Thinking', text: 'I break complex problems into manageable components.' },
      { title: 'Problem Solving', text: 'I don\u2019t just identify issues — I design and ship solutions.' },
      { title: 'Team Collaboration', text: 'The best results come from diverse minds working together.' },
      { title: 'Communication', text: 'I translate technical concepts into stakeholder language.' },
      { title: 'Adaptability', text: 'I thrive on new challenges and emerging technologies.' },
      { title: 'Attention to Detail', text: 'In code and in life, the details make the difference.' },
    ],
    languages: [
      { name: 'English', level: 'Fluent' },
      { name: 'Tonga', level: 'Native' },
      { name: 'Nyanja', level: 'Fluent' },
      { name: 'Bemba', level: 'Intermediate' },
    ],
  };
  
  export const skillGroups = [
    {
      icon: '⌨️',
      title: 'Programming',
      skills: ['Python', 'Java', 'JavaScript', 'PHP', 'HTML5', 'CSS3'],
    },
    {
      icon: '🧩',
      title: 'Frameworks & Libraries',
      skills: ['React', 'Bootstrap', 'Responsive Web Design'],
    },
    {
      icon: '🗄️',
      title: 'Databases',
      skills: ['MySQL', 'Microsoft SQL Server', 'XAMPP', 'Database Design', 'Query Optimisation'],
    },
    {
      icon: '📊',
      title: 'Data & Analytics',
      skills: ['Data Mining', 'Business Analytics', 'Data Visualisation', 'Power BI'],
    },
    {
      icon: '🛠️',
      title: 'Tools',
      skills: ['Git', 'Version Control', 'VS Code', 'Microsoft Office Suite'],
    },
    {
      icon: '📐',
      title: 'Methodologies',
      skills: ['Agile Development', 'Systems Analysis', 'Quality Assurance', 'Project Management'],
    },
  ];
  
  export const projects = [
  {
    id: '01',
    slug: 'agricultural-decision-support',
    title: 'Gamified Smart Agricultural Decision Support System',
    accent: '#2ee6a8',
    summary:
      'An intelligent web-based farming system that recommends optimal crops based on real-time ' +
      'weather conditions, using AI and machine learning algorithms.',
    impact:
      'Sharpened my ability to translate complex data into user-friendly, actionable insights.',
    tags: ['AI & Machine Learning', 'Web Development', 'Data Analytics', 'Python'],

    role: 'Full-Stack Developer & ML Integrator',
    year: '2025',
    overview:
      'Small-scale farmers often plant the wrong crops for the season, losing yield to weather ' +
      'they could have anticipated. This project started as a question: could a simple web app ' +
      'give a farmer the same kind of decision support a large agribusiness uses? I built a system ' +
      'that pulls real-time weather data and runs it through an ML model to recommend the most ' +
      'suitable crops for the coming weeks.',
    features: [
      'Real-time weather integration via public APIs',
      'Machine learning model trained on historical yield data',
      'Gamified interface rewarding farmers for consistent use',
      'Personalised crop recommendations per region and season',
      'Mobile-responsive design for low-bandwidth rural access',
    ],
    stack: ['Python', 'Scikit-learn', 'Flask', 'JavaScript', 'MySQL'],
    learnings:
      'I learned that a model is only as good as the interface around it. Farmers didn\u2019t want ' +
      'a dashboard \u2014 they wanted one clear answer, with a reason. Rebuilding the UI around a ' +
      'single recommendation tripled engagement in user tests.',
    github: '',
    demo: '',
  },
  {
    id: '02',
    slug: 'inventory-management-system',
    title: 'Inventory Management System',
    accent: '#38bdf8',
    summary:
      'A comprehensive inventory platform with secure authentication, real-time dashboard ' +
      'analytics, customer management, and accounts payable modules.',
    impact:
      'Demonstrated end-to-end proficiency across the full software engineering stack.',
    tags: ['Full-Stack', 'Database Design', 'Dashboard Analytics', 'Python', 'SQL'],

    role: 'Full-Stack Developer',
    year: '2024',
    overview:
      'Built to solve a real problem for a small retail operation: stock was being tracked in ' +
      'spreadsheets, and payables were getting missed. This system centralises inventory, customers, ' +
      'and accounts payable into a single platform with role-based access control and live analytics.',
    features: [
      'Secure authentication with hashed credentials and role-based access',
      'Real-time dashboard showing stock levels, sales and low-inventory alerts',
      'Customer management with purchase history',
      'Accounts payable tracking with payment reminders',
      'Optimised SQL queries for fast reporting on large datasets',
    ],
    stack: ['Python', 'Flask', 'MySQL', 'Bootstrap', 'Chart.js'],
    learnings:
      'Designing the schema first saved me weeks. I sketched the entity relationships on paper ' +
      'before touching code, and every feature afterward slotted in cleanly \u2014 no migrations, ' +
      'no schema rewrites.',
    github: '',
    demo: '',
  },
  {
    id: '03',
    slug: 'chinese-wall-security-model',
    title: 'Chinese Wall Security Model',
    accent: '#a78bfa',
    summary:
      'A security model implementing conflict-of-interest access control, built with a Python GUI.',
    impact:
      'Deepened my grasp of information security principles critical to protecting sensitive data.',
    tags: ['Cybersecurity', 'Access Control', 'Python GUI'],

    role: 'Security Developer',
    year: '2024',
    overview:
      'The Chinese Wall model prevents conflicts of interest by dynamically restricting access ' +
      'based on what a user has already accessed. I implemented it as a desktop application to ' +
      'explore how policy enforcement can be built into application logic rather than bolted on ' +
      'afterward.',
    features: [
      'Dynamic access policy enforced at runtime',
      'Conflict-of-interest tracking per user session',
      'Clean Python GUI demonstrating each access decision',
      'Audit log of every granted and denied request',
    ],
    stack: ['Python', 'Tkinter', 'OOP Design Patterns'],
    learnings:
      'Security is a state machine. The hardest part wasn\u2019t the rules themselves \u2014 it was ' +
      'reasoning about how a user\u2019s access history changes what they should be allowed to do next.',
    github: '',
    demo: '',
  },
  {
    id: '04',
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    accent: '#fbbf24',
    summary:
      'A fully functional marketplace enabling users to advertise, buy, and sell goods with ' +
      'integrated database persistence.',
    impact:
      'Strengthened my full-stack capabilities and understanding of user-centric design.',
    tags: ['Web Development', 'UX', 'Database Integration', 'PHP'],

    role: 'Full-Stack Developer',
    year: '2024',
    overview:
      'A marketplace built to explore the full lifecycle of a transactional web app \u2014 from ' +
      'user registration and listings, to cart management, checkout, and order history. Every ' +
      'interaction is persisted so state survives across sessions.',
    features: [
      'User registration and profile management',
      'Listing creation with image uploads',
      'Shopping cart and multi-step checkout',
      'Order history and seller notifications',
      'Responsive layout tested across devices',
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    learnings:
      'I discovered how much UX work sits between "it functions" and "it feels right." Adding ' +
      'clear feedback at every step \u2014 loading states, confirmations, error messages \u2014 was ' +
      'the biggest single improvement to the final product.',
    github: '',
    demo: '',
  },
  {
    id: '05',
    slug: 'zedmemes',
    title: 'ZedMemes — Social Media Platform',
    accent: '#fb7185',
    summary:
      'A meme-sharing platform connecting users across Zambia, built for engagement and ' +
      'community growth.',
    impact:
      'Honed my ability to build engaging digital communities people actually want to use.',
    tags: ['Web Technologies', 'Community Engagement', 'User Interaction'],

    role: 'Founder & Developer',
    year: '2023',
    overview:
      'A light-hearted project with a serious goal: build a platform where Zambians could share ' +
      'and discover local humour. The project taught me how to design for virality, handle user ' +
      'uploads, and create a feed that feels alive.',
    features: [
      'User accounts with avatar and bio',
      'Upload, caption and tag memes',
      'Upvote/downvote and comment system',
      'Personalised feed based on engagement',
      'Mobile-first responsive design',
    ],
    stack: ['JavaScript', 'PHP', 'MySQL', 'CSS3'],
    learnings:
      'Real engagement comes from small loops. The vote button, the notification badge, the ' +
      '"trending" tag \u2014 each one nudges users back. I learned to design for the return visit, ' +
      'not the first impression.',
    github: '',
    demo: '',
  },
];
  
  export const education = [
    {
      period: 'Completed September 2026 | Awaiting Results',
      title: 'BSc in Information Systems',
      org: 'The Copperbelt University',
      detail: 'Awaiting results.',
      coursework: [
        'Systems Analysis & Design',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Data Mining & Business Analytics',
        'Web & Mobile Technologies',
        'Information Systems Security',
        'E-Commerce & ERP Systems',
        'Project Management',
        'Research Methods',
      ],
    },
    {
      period: '2016 — 2020',
      title: 'Grade 12 School Certificate',
      org: 'Chipata Day Secondary School, Chipata',
      detail: '',
      coursework: [],
    },
  ];