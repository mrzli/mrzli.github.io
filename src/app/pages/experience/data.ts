import type { ExperienceSectionProps } from './components';

export const EXPERIENCE_SECTIONS: readonly ExperienceSectionProps[] = [
  {
    title: 'Freelance Software Developer / Self-Employed',
    location: 'Remote',
    role: 'Primarily Full-Stack Web Developer',
    from: { year: 2016, month: 1 },
    to: 'Present',
    projects: [
      {
        title: 'Large HVAC System Site Monitoring and Control Web Application',
        text: [
          'An application for monitoring and controlling HVAC equipment across buildings and sites, developed for a large multinational. It is part of a complete hardware and software solution for facilities such as hotels and office buildings.',
          'In a software engineering context and my experience this was not a complicated project, but required a level of patience for a while when it came to fully understanding the domain and use some of the technologies and tooling native that domain.'
        ],
        tags: [
          'React',
          'TypeScript',
          'MobX',
          'Tailwind CSS',
          'Jest',
          'ESLint',
          'Prettier',
          'Fantom',
          'FIN Framework',
          'Axon',
          'Project Haystack',
          'Folio',
          'Copilot',
          'Claude',
          'ChatGPT',
        ],
        roleText: [
          'I did normal web development work. I was brought onboard to help an existing team which worked on the project for some time. I developed some sections of the frontend, implemented components and controls, aligned to UI designs, fixed issues as the arose or were assigned to me.',
        ],
      },
      {
        title: 'Automated Warehouse Robotics System Web Application',
        text: [
          'A web application for managing robots and fleets in a warehouse automation system. The robots handle and move goods in large warehouses, operating autonomously for extended periods.',
          'This was very complicated project overall, dealing with automation, planning, orhestration of warehouse robots, computer vision etc. I dealt almost exclusively with the frontend. The frontend itself had several parallel repos and branches that needed to be maintained simultaneously. Each had around 100kloc, although much of the code was similar between the versions.',
          'Several dozen people worked actively on it. Frontend was handled by myself and one other developer. There was no clear seniority here. He was with the company for several years before I came along and had greater domain knowledge. I had greater software development breadth and depth of knowledge due to more more overall years and more diverse experience, and different approach to work overall.'
        ],
        tags: [
          'Angular',
          'TypeScript',
          'RxJS',
          'ESLint',
          'Prettier',
          'Python',
          'PostgreSQL',
          'Docker',
          'Copilot',
          'Claude',
          'ChatGPT',
        ],
        roleText: [
          "I was brought in to improve the project frontend overall, and in particular to resolve a major blocking issue they had with their software.",
          "I independently migrated the application from Angular 8 to 18, resolving over a thousand errors and refactoring libraries where necessary. The migration's feasibility was initially uncertain, but I completed it without observed regressions, removing a major blocker for the system's security audit.",
          'I organized the changes so the migration could be repeated across related robot and fleet management applications and branches. I also fixed issues and implemented client requests, including a simpler interface for dock monitoring and truck reception, and frontend support for pallet stacking and related robot operations.',
        ],
      },
      {
        title: 'Oracle Eloqua to Mobile Messaging Integration',
        text: [
          'Oracle Eloqua is a cloud-based B2B marketing automation platform for designing campaigns through a visual drag-and-drop interface. Alongside its built-in nodes, it supports third-party integrations and extensions through the Oracle Cloud Marketplace.',
          'This integration connects Eloqua to a mobile messaging platform, allowing users to send SMS and WhatsApp messages as part of their campaigns. It was a medium-sized project with complex business logic and requirements.',
        ],
        tags: [
          'React',
          'TypeScript',
          'Redux',
          'redux-observable',
          'RxJS',
          'Tailwind CSS',
          'NestJS',
          'Prisma',
          'Jest',
          'ESLint',
          'Prettier',
          'MySQL',
          'Docker',
          'OAuth 1.0',
          'OAuth 2.0',
          'JWT',
          'Nx (monorepo)',
        ],
        roleText: [
          'I implemented the entire integration except the CI/CD pipeline, which was handled separately by another developer. It remains one of my favorite projects: broad enough to involve many aspects of software development, but small enough for me to build on my own.',
          'The high-level goals were clear and achievable, even though some requirements needed clarification. I worked autonomously, parsed the documentation, clarified details with the client, and gave regular progress demos.',
          'The client required JavaScript and recommended MySQL, choices I was happy with. Otherwise, I was free to choose the stack, structure, and development process. Understanding the Oracle documentation was the hardest initial task. Development went smoothly after that.',
          'I used an Nx monorepo, React for the frontend, Redux and redux-observable for state management and API calls, NestJS for the backend, and Prisma as the ORM.',
          'The codebase was about 20,000 lines, including roughly 1,000-2,000 lines of tests. It handled asynchronous, two-way communication with both Eloqua and the messaging platform. A React frontend embedded in the Eloqua web client as an iframe let users configure and monitor the integration.',
          'The integration needed to process hundreds of thousands of messages per minute without loss, collect delivery and failure reports through webhooks, and generate statistics.',
          'Load testing near the end of development revealed several race conditions caused by mistakes in my implementation. One involved a Prisma call that wrote and then read data without an atomic database operation. I fixed it with a transaction, a reminder to understand the database behavior behind ORM calls. The other issues were also straightforward to fix once detected. Knowing the whole codebase and its execution flows made these usually difficult problems manageable.',
          'I added extensive backend tests: unit tests, at least one test per endpoint, and tests for the complex asynchronous flows I could identify, especially those where race conditions had occurred. I designed the database and external service interfaces to be mockable rather than using an in-memory database. This kept the tests fast and provided a useful regression safety net.',
          'Extensive logging supported debugging and monitoring and helped identify the race conditions.',
          'Authentication included OAuth 2.0 for requests to Eloqua, OAuth 1.0a for requests from Eloqua, API keys for requests to the messaging platform, and, as I recall, Basic Auth for incoming messaging webhooks. I used JWT authentication between the frontend and backend.',
          'Another developer handled deployment to Azure for testing and production.',
        ],
      },
      {
        title: 'Mobile Application for Managing Electricity Consumption',
        text: [
          'A mobile application built for a Norwegian client, to be used by the Norwegian public. Users can monitor and manage electricity consumption, choose providers, and view statistics and insights.',
        ],
        tags: ['React Native', 'TypeScript', 'Expo', 'Jest', 'ESLint', 'Prettier'],
        roleText: [
          'I worked exclusively on the React Native frontend as part of a team of eight developers, implementing screens and features.',
        ],
      },
      {
        title: 'Mobile Fueling Management System',
        text: [
          'A large system for managing the business and operations of a leading mobile fueling company in California. At the time, the startup had several hundred employees and was growing exponentially.',
          'Dozens of developers worked on the system, which included Angular and React web applications, iOS and Android apps, and a shared Node.js backend built with Express and MongoDB.',
          "The system was already in production and central to the company's operations.",
        ],
        tags: [
          'Angular',
          'TypeScript',
          'NgRx',
          'Mocha',
          'Express',
          'Nx',
          'ESLint',
          'Prettier',
          'MongoDB',
        ],
        roleText: [
          'I worked across the stack, spending about 70% of my time on the Node.js backend, from the REST API to the database, and 30% on the Angular administration app. I did not work on the mobile apps.',
          'I owned parts of the system and occasionally made changes affecting the whole application. Careful planning and coordination with developers and project managers allowed me to deliver these without significant issues.',
          'I also ran production MongoDB migrations using JavaScript scripts. Errors would have been costly, but careful testing and execution kept these migrations error-free during my time at the company.',
          'I drove improvements to testing practices and the introduction of a monorepo where the codebase allowed it. I also interviewed, onboarded, and mentored developers.',
        ],
      },
      {
        title: 'Insurance Web Platform',
        text: [
          'A web platform built for a UK client to connect parties in the insurance process and search for insurance schemes. The frontend alone contained about 100,000 lines of code.',
        ],
        tags: [
          'React',
          'TypeScript',
          'Jest',
          'Webpack',
          'Storybook',
          'React Testing Library',
          'Material UI',
          'Redux',
          'redux-observable',
          'RxJS',
          'Node.js',
          'Cypress',
        ],
        roleText: [
          'I joined after a year and a half of development and worked exclusively on the frontend. For most of my time on the project, I was the only frontend developer.',
          'The frontend needed substantial restructuring, from the UI to the backend API interface. I refactored entire application sections, fixed typing issues throughout the app, rebuilt state management and asynchronous API handling, and reorganized the top-level architecture.',
          'I improved development scripts and the Webpack build, introduced formatting and linting, and added tests. Utility code had good coverage, while component coverage was basic, with a handful of Cypress tests for more complex flows.',
          'Using Storybook, I built a component library around Material UI that matched the existing application design. I also developed features and fixed bugs.',
        ],
      },
      {
        title: 'Accounting Web Application',
        text: [
          'A large accounting and transactions application for a medium-sized Finnish company, with dozens of screens containing complex business logic and data viewing and editing features.',
        ],
        tags: ['Angular', 'TypeScript', 'Jest', 'RxJS', 'AG Grid'],
        roleText: [
          'I worked exclusively on the frontend. A colleague and I joined after limited prototype development and did most of the initial implementation, with room to make architectural decisions.',
          'Within a few months, the frontend team grew to more than ten people. As a senior developer, I made application-wide changes, implemented subsystems and reusable patterns, built larger features and screens, and handled maintenance.',
        ],
      },
      {
        title: 'Graveyard Management Web Application',
        text: [
          'A small multi-tenant application for managing graveyards, graves, and information about the deceased and grave owners. It included interactive OpenLayers maps with geospatial data for each grave.',
        ],
        tags: [
          'Vue',
          'TypeScript',
          'Vuetify',
          'Vuex',
          'Jest',
          'OpenLayers',
          'Spring Boot',
          'Kotlin',
          'Liquibase',
          'PostgreSQL',
          'H2',
          'Jasper Reports',
          'Docker',
          'Docker Swarm',
        ],
        roleText: [
          'I implemented at least 95% of the application.',
          'The frontend used Vue and TypeScript, Vuex for state management, Vuetify for UI components, OpenLayers for maps, and Jest for unit tests.',
          'I built the backend with Kotlin and Spring Boot, using Liquibase for database setup and migrations. PostgreSQL served production and an in-memory H2 database supported development. Liquibase abstractions made switching between them straightforward. Jasper Reports handled PDF reporting.',
          'As an experiment, I wrote backend integration tests in Jest and TypeScript, tools I found flexible and familiar. The tests exercised the full backend stack, covered much of its functionality, and worked well with an in-memory H2 database.',
          'I used Docker and Docker Swarm only in development to automate tasks and experiment with deployment. Production used a partly manual process: scripts handled most steps, but deployment required a manual action. This was sufficient for the project.',
        ],
      },
      {
        title: 'Parking Mobile Application',
        text: [
          'A public mobile application for buying parking tickets for lots and garages in Zagreb, Croatia.',
        ],
        tags: ['Java'],
        roleText: [
          'I built the central message hub connecting the system endpoints and forming the top layer of the backend.',
          'This included the REST API for the Android and iOS apps, backend validation, and direct integration with parking provider APIs. It also connected to the data access layer and to payment providers through a component built by another developer.',
          'I did not work on the mobile apps themselves.',
        ],
      },
      {
        title: 'NIAS (SSO System) Interface',
        text: [
          "NIAS (National Identification and Authentication System) is Croatia's national single sign-on system. Accredited authentication providers include the government, banks, and other trusted organizations.",
          "This project integrated the Croatian Postal Service as a NIAS provider and allowed existing NIAS users to sign in to the Postal Service's system and have their credentials validated.",
        ],
        tags: ['Java', 'JSP', 'SOAP'],
        roleText: ['I implemented the entire project.'],
      },
      {
        title: 'Government Payments Validation Component',
        text: [
          'A Java component (JAR) for validating payments to the Croatian government, agencies, and local and regional administrations.',
          'It checked invoice fields individually and in combination, including descriptions, destination accounts, dates, and the "model" and "call-to-number" fields. The rules needed to be easy to reconfigure when requirements changed.',
          'The component belonged to a larger system but could be developed and tested independently. It accepted structured invoice data and returned validation errors and warnings with details for each issue.',
          'Requirements came from a document of about 180 pages: roughly 30 pages of rules, with supporting tables and data making up the rest.',
        ],
        tags: ['Java', 'JUnit'],
        roleText: [
          'I implemented the entire component in less than two weeks, including extensive unit tests. As I recall, it contained a few thousand lines of code. Clear requirements and no legacy constraints made it one of my favorite projects.',
          'I translated the requirements into a JSON configuration file of about 3,000 lines, then wrote the code to parse it and apply the validation rules.',
          'The complex logic and isolated interface made unit tests especially useful and straightforward to write. I covered all the scenarios I could identify.',
          'Detailed manual testing by QA found about three failures in 100 scenarios. The results arrived in a well-structured Excel file, which I converted to CSV and used to generate automated tests. I fixed the three failures and gained regression coverage for every scenario QA had checked.',
          'No further issues were reported while I worked for the client. Further QA results in the same format could have been added to the CSV to extend coverage. Having a repeatable way to turn manual checks into regression tests made this work particularly satisfying.',
        ],
      },
      {
        title: 'EU Roaming Usage and Traffic Tracking Web Application',
        text: [
          "A roaming usage tracking system for Croatia's largest telecom, commissioned during significant changes to EU roaming rules. It provided usage statistics and helped detect abuse.",
        ],
        tags: [
          'Java',
          'Spring Boot',
          'JPA/Hibernate',
          'Querydsl',
          'Liquibase',
          'Jasper Reports',
          'Maven',
        ],
        roleText: [
          'I worked exclusively on the backend. I believe the frontend used AngularJS, but I was not involved in it.',
          'I implemented the entire backend, from the REST API to the repository layer, and the reporting system using Jasper Reports.',
        ],
      },
      {
        title: 'e-Learning Web Application (MVP)',
        text: [
          'An online learning MVP with video courses and online meetings with whiteboards. It had not yet become a full commercial product.',
        ],
        tags: [
          'AngularJS',
          'Java',
          'Spring Boot',
          'JPA/Hibernate',
          'Querydsl',
          'PostgreSQL',
          'Maven',
          'Video.js',
          'Veeting Rooms',
        ],
        roleText: [
          'After some initial work by other developers, I implemented the rest of the application. I also handled deployment, communicated with clients, and helped define requirements.',
        ],
      },
      {
        title: 'Other Projects',
        text: [
          'A C# and WCF service for exporting Microsoft SQL Server data as JSON.',
          'Urgent fixes to an Alfresco web application shortly before its production deadline.',
          'A Ruby backend for talent acquisition software.',
          'A small React application for talent management and recruitment.',
        ],
        tags: ['C#', 'WCF', 'Ruby', 'React', 'Java', 'Alfresco'],
        roleText: [
          'I built the data export service on my own.',
          'I joined the Alfresco project one or two weeks before production, with no prior knowledge of its codebase or platform. I spent a couple of weeks fixing the issues the client needed resolved. The client was satisfied, which led to further work. This kind of last-minute assignment is unusual for me and not work I would normally accept.',
          'The two talent management projects each lasted several weeks. Another developer and I split the work evenly.',
        ],
      },
    ],
  },
  {
    title: 'APIS IT',
    location: 'Zagreb (Croatia)',
    role: 'C# Developer',
    from: { year: 2013, month: 11 },
    to: { year: 2016, month: 5 },
    projects: [
      {
        title: "Croatia's Ministry of Finance e-Tax Web Application",
        text: [
          'A large application with more than one million daily views, allowing Croatian citizens and businesses to submit tax forms electronically. It supported many types of tax reporting alongside other features, with form submission probably its main use case.',
        ],
        tags: ['C#', 'ASP.NET Web Forms', 'jQuery', 'Microsoft Reports (.rdlc)', 'IBM DB2'],
        roleText: [
          'I fully implemented seven tax forms in production as of March 2016 and contributed to about ten others, from bug fixes to substantial implementation. The system contained about 25 forms at the time.',
          'Each form required a web interface, XML import and export, PDF reporting, extensive server-side validation against business and legal rules, and changes to the data access layer.',
        ],
      },
      {
        title: 'Location and Building Permits Web Application',
        text: [
          "A relatively simple public application for submitting data for location and building permits, built for Croatia's Ministry of Construction and Physical Planning.",
        ],
        tags: [
          'C#',
          'ASP.NET MVC',
          'jQuery',
          'Fluent Validation',
          'Aspose.Words',
          'Oracle Database',
        ],
        roleText: [
          'I implemented much of the UI, including views, models, and controllers, a substantial part of the business logic, the entire data access layer, and PDF reporting.',
        ],
      },
      {
        title: 'Other Projects',
        text: [
          'Two large ASP.NET Web Forms applications for employees of the Ministry of Construction and Physical Planning, separate from the public permits application.',
          'WCF and ASMX web services, both within these projects and as standalone components of larger systems.',
          'XML processing components for validation, data manipulation, database export to XML, and XML import into databases.',
          'Programs for offline data processing, validation, and error reporting by email.',
        ],
        tags: ['C#', 'ASP.NET Web Forms', '.NET COM', 'WCF'],
        roleText: [
          'I worked across the stack on the two Web Forms applications, which were mainly in maintenance. Most tasks were bug fixes and small features, with some larger implementations.',
          'Most of the other components were small projects within larger systems, lasting a few days to a few weeks. I usually implemented them on my own.',
        ],
      },
    ],
  },
  {
    title: 'Gemmeus d.o.o.',
    location: 'Remote',
    role: 'C# Developer',
    from: { year: 2012, month: 10 },
    to: { year: 2013, month: 1 },
    projects: [
      {
        title: 'Excel Component for Spreadsheet Data Manipulation',
        text: [
          'A component for programmatic access to Microsoft Excel spreadsheets, supporting reading, writing, data manipulation, conversion, and printing.',
        ],
        tags: ['C#', 'Web Forms', 'WPF', 'Windows Forms'],
        roleText: [
          'I handled various development tasks, including exporting Excel data to a Windows Forms DataGrid while matching the original content, formatting, and styles as closely as possible.',
        ],
      },
    ],
  },
  {
    title: 'INETEC - Institute for Nuclear Technology d.o.o.',
    location: 'Zagreb (Croatia)',
    role: 'C# Windows Desktop (WPF) Developer',
    from: { year: 2009, month: 11 },
    to: { year: 2012, month: 10 },
    projects: [
      {
        title: 'Steam Generator Damage Analysis Application',
        text: [
          'A large WPF desktop application for operators to review inspection data and analyze damage in nuclear power plant steam generators.',
        ],
        tags: ['C#', 'WPF', 'Cinch (MVVM framework)'],
        roleText: [
          'I developed a large part of the application.',
          'I created custom WPF controls for 2D and 3D signal charts and plots. Rendering ran on a separate thread to keep the application responsive during intensive data processing and display.',
          'I worked on data persistence and versioning, signal filtering and mixing, and many WPF views and subsystems, from the UI to the persistence layer.',
        ],
      },
      {
        title: 'Steam Generator Walker Robot Command and Monitoring Application',
        text: [
          'A prototype robot for positioning inspection probes could walk along a steam generator tube wall, reducing or eliminating operator exposure to ionizing radiation.',
          'The WPF desktop application controlled the robot, displayed its position, monitored its state, and complemented hardware and electronic handling of edge cases and failures.',
        ],
        tags: ['C#', 'WPF', 'Cinch (MVVM framework)'],
        roleText: [
          'I implemented most of the application, including the entire GUI. It consisted mainly of custom graphical controls, with multithreading for the more complex displays to keep the application responsive.',
          'I built or fully rewrote nearly all the backend code down to the electronics controller interface.',
          'Another developer wrote the original controller code in a C-like language. I maintained it and made the required changes and fixes.',
        ],
      },
      {
        title: 'Other Projects',
        text: ['Other applications used in the nuclear inspection process.'],
        tags: ['C#'],
        roleText: ['My work was mainly bug fixes.'],
      },
    ],
  },
  {
    title: 'Ultra d.o.o.',
    location: 'Karlovac (Croatia)',
    role: 'C# Windows Desktop and Web Developer',
    from: { year: 2008, month: 10 },
    to: { year: 2009, month: 11 },
    projects: [
      {
        title: 'Fuel Dispenser Configuration and Control Web Application',
        text: [
          'A web application for configuring and monitoring fuel dispenser drivers at fuel stations.',
        ],
        tags: ['C#', 'ASP.NET Web Forms', 'PostgreSQL'],
        roleText: [
          'I implemented substantial parts of the application and maintained the entire project.',
        ],
      },
      {
        title: 'Fuel Dispenser Configuration and Control Desktop Application',
        text: [
          'A desktop application with a similar purpose to the web application, serving different drivers and clients.',
        ],
        tags: ['C#', 'Windows Forms', 'SQLite'],
        roleText: [
          'I built the entire application, with custom controls for displaying and controlling fuel dispenser state and SQLite for storage.',
        ],
      },
      {
        title: 'Various Projects',
        text: [
          'Fuel dispenser drivers and small tools for tasks such as regex validation and editing Windows registry entries.',
        ],
        tags: ['C#', 'C++'],
        roleText: [
          'I mainly fixed bugs and handled maintenance. I also built some of the tools in full.',
        ],
      },
    ],
  },
  {
    title: 'Ekobit d.o.o.',
    location: 'Zagreb (Croatia)',
    role: 'C# Web Developer',
    from: { year: 2008, month: 2 },
    to: { year: 2008, month: 10 },
    projects: [
      {
        title: 'Various Projects',
        text: [
          'Web applications for Croatian financial institutions, including banks, funds, and stock exchanges.',
        ],
        tags: ['C#', 'ASP.NET Web Forms', 'Microsoft SQL Server'],
        roleText: [
          'I handled small development tasks and bug fixes in the applications and their databases.',
        ],
      },
    ],
  },
  {
    title: 'Visage Technologies (Student Project)',
    location: 'Zagreb (Croatia)',
    role: 'C++ Developer',
    from: { year: 2007, month: 1 },
    to: { year: 2007, month: 8 },
    projects: [
      {
        title: 'Body Animation Exporter',
        text: [
          'An exporter that converted body animations from 3ds Max Biped to MPEG-4 FBA for a larger face and body animation system.',
        ],
        tags: ['C++', '3ds Max SDK'],
        roleText: ['I implemented the entire exporter.'],
      },
    ],
  },
];
