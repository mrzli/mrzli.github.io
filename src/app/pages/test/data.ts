import type { ExperienceSectionProps } from './components';

export const EXPERIENCE_SECTIONS: readonly ExperienceSectionProps[] = [
  {
    title: 'Freelance software developer / Self Employed',
    location: 'Remote',
    role: 'Full Stack Web Developer (Primarily)',
    from: { year: 2016, month: 1 },
    to: 'Present',
    projects: [
      {
        title: 'Large HVAC System Site Monitoring and Control Web Application',
        text: ['TODO'],
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
        ],
        roleText: ['TODO'],
      },
      {
        title: 'Automated Warehouse Robotics System Web Application',
        text: ['TODO'],
        tags: [
          'Angular',
          'TypeScript',
          'RxJS',
          'ESLint',
          'Prettier',
          'Python',
          'PostgreSQL',
          'Docker',
        ],
        roleText: ['TODO'],
      },
      {
        title: 'Oracle Eloqua to Mobile Messaging Integration',
        text: ['TODO'],
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
        ],
        roleText: ['TODO'],
      },
      {
        title: 'Mobile Application for Managing Electricity Consumption',
        text: ['TODO'],
        tags: [
          'React Native',
          'TypeScript',
          'Expo',
          'Jest',
          'ESLint',
          'Prettier',
        ],
        roleText: ['TODO'],
      },
      {
        title: 'Mobile Fueling Management System',
        text: [
          'This was a very large project used for managing the business and operations of a market leading mobile fueling company from California. It is a "startup", which at the time had several hundred employees and exponential growth.',
          'Project involved doezens of developers.',
          'As part of the system, there were several web applications built with Angular and React, mobile applications (both iOS and Android), and a backend system connecting all of these together, built on top of Node (Express) with a MongoDB database.',
          'I had ownership of some parts of the system, and on occasion I was required to do code changes that would affect the functioning of the entire system, which required careful planning and execution, and - in coordination with other developers and PMs - managed to implement those without signifnicant (or any) issues - no easy task on that codebase.',
          'I was required to do occasiona migrations on the production Mongo database via JavaScript scripts, and with careful testing and work process, was able to do those without any errors during my time at the company. Again, not an easy thing to do, with hich cost of errors.',
          'I was the driver for some code quality improvements where that was possible, such as how we do testing, and the introduction to monorepo.',
          'Most of my technical work was on the backend Node apllication - all layers between the REST API down to and including the database (~70%). The rest of the time, I was working on the admin web application written in Angular (~30%). I did not work on mobile applications.',
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
          'I was a full-stack developer, with more focus on the backend.',
          'I was also involved with interview process for new developers, as well as onboarding and mentoring.',
          'At the time the system was already fully in production, and it was the central product for the company, which depended on it for its business operations.',
        ],
      },
      {
        title: 'Insurance Web Platform',
        text: [
          'A medium sized web application (100k lines of code for frontend alone), in the insurance domain, built for a UK client. This was a kind of insurance platform, designed to connect different parties involved in the insurance process, used to search for insurance schemes etc.',
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
          'I was a frontend-only developer on the project. I got involved after the project had been under development for a year and a half. For most of my time on the project, I was the only frontend developer.',
          'The frontend was in a pretty rough state when I joined. My job was refactoring large chunks of the frontend code base, from the UI down to the backend API interface.',
          'This included refactoring of entire app sections, fixing application-wide typing issues, complete refactroging of the state management system and async (API calling) infrastructure, refactoring high level application architecture, cleaning up and improving the development and build toolchain (scripts, Webpack), introducing formatting and linting tools, adding some tests (I had good coverage of the utility code, but added onlu basic testing for components and a handful of Cypress tests for more complicated flows.',
          'I also incuded Storybook, and with its help created component library, which was a wrapper around Material UI, but matched existing application design and styling.',
          'And of course, when necessary, I did new development and fixes.',
        ],
      },
      {
        title: 'Accounting Web Application',
        text: [
          'A large application for accounting and transactions built for a medium-sized Finnish company. The app contains dozens of screens with very complex business logc, data display and editing functionality.',
        ],
        tags: ['Angular', 'TypeScript', 'Jest', 'RxJS', 'AG Grid'],
        roleText: [
          'I worked exclusively on the frontend.',
          'There was some rudimentary development done before I got involved, but not much - some sporadic prototype work by a single person. After a colleague and I joined the project, the two of did most of the initial work, and were able to make some architectural choices.',
          'After a few months, the team quickly grew to more than 10 people on the frontend alone. After this, my role was essentially that of a senior developer. I was responsible for some application-wide changes. I implemented some subsystems using patterns that were reused throughout the project, also some larger features and screens, down to simpler maintanance work when required.',
        ],
      },
      {
        title: 'Graveyards Management Web Application',
        text: [
          'This was a relatively small multi-tenant web application used for managing graveyards and graves, information on the deceased and the owners.',
          'It featured interactive maps with geospatial data for each grave, implemented with the help of OpenLayers.',
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
          'I implemented almost the entire application (95% or more).',
          'I used Vue with TypeScript for the frontend, Vuex for state management, Vuetify for UI components, OpenLayers for the interactive maps, and Jest for unit testing.',
          'I built the backend using Kotlin Spring Boot. Liquibase for database setup and migrations. PosgtreSQL was the production database, while H2 in-memory database was used for development. These could be easily swapped due to Liquibase abstractions.',
          'Jasper Reports were used for PDF reporting.',
          'I implemented detailed backend integration tests using Jest and TypeScript. It is unconventional, but I did it as an expriement, and since such tests are more flexible and familiar to me, it worked very well. They test entire backend stack, the tests covered large part of the backend functionality, and worked reasonably well with an in-memory H2 database.',
          'Docker and Docker Swarm was used only for development, to try to automate certain tasks and experiment with a more automated deployment process.',
          'In the end, for the purposes of this project, a semi-manual deployment process was sufficient. Most of it was handled with scripts, but it still required a manual action to deploy.',
        ],
      },
      {
        title: 'Parking Mobile Application',
        text: [
          'A mobile application for buying parking tickers for lots and garages in the city of Zagreb (capital of Croatia). To be used by general public.',
        ],
        tags: ['Java'],
        roleText: [
          'I implemented the central message hub of this system - the part that connects all the system endpoints, and represents the top layer of the backend.',
          'This part includes the web API (REST), to be used by the mobile frontends (Android and iOS), backend validations, and it directly interfaces with parking service provider APIs. It also communicates with the payment providers - indirectly, through a component built by another programmer, and to the data access layer.',
          'I did not work on the mobile application itself.',
        ],
      },
      {
        title: 'NIAS (SSO System) Interface',
        text: [
          'Croatia has a national Single Sign-On system called NIAS (National Identification and Authentication System). Multiple accredited providers can provide authentication services to NIAS, government itself, but also banks and other trusted providers.',
          "This project represents integration of Croatian Postal Service as a provider into NIAS. It allows an existing user of NIAS to log into the client's (Postal Service's) system and have it validate user's credentials.",
        ],
        tags: ['Java', 'JSP', 'SOAP'],
        roleText: ['I implemented the entire project.'],
      },
      {
        title: 'Government Payments Validation Component',
        text: [
          'I was tasked to create a Java component (JAR file) that is used to validate input data correctness for payments to the Croatian government, government agencies, local and regional administrations etc.',
          'Invoices have several parts that need to be validated, either in isolation, or in relation to other parts. This includes description, destination account, dates, so-called "model" and "call-to-number" fields and so on.',
          'The validation rules needed to be easily configurable to accommodate changes in the rules.',
          'The component was used as a part of a larger system, but was developed and could be tested completely in isolation.',
          'The requirements were clearly defined because there are existing rules and regulations on how these payments need to be handled. This was specified in a document about 180 pages long. About 30 pages were rule specifications, the rest were relevant tables and data listings.',
          'Conceptually, the component works simply by accepting a structured list of invoice data, and outputs a structured list of validation errors and warnings (if any), with all the relevant data attached to each issue.',
        ],
        tags: ['Java', 'JUnit'],
        roleText: [
          'This was actually a very small project. I believe it was in the very low thousands of lines of code. It took less than two weeks to implement, with extensive unit tests.',
          "I give it so much detail because it was one of my favorite pieces of work to do and is a good example of how well and quickly things can go when you don't have to deal with legacy issues, and you have clear requirements from beginning to end.",
          'I implemented all of it. I read the requirements document, converted all the information to a large (about 3k lines) JSON configuration file covering all the rules, implemented the code that parses it and implements the validation.',
          'Since the validation logic is quite complicated and the component can be tested in isolation, this is one of the best cases of a project where unit tests are very useful, very important and relatively straightforward to implement. There was a large number of tests covering all the scenarios I could think of.',
          'The first batch of detailed manual tests done by QA releved some error, about 3 out of a 100 tested scenarios failed. Whoever did those tests did an amazing job, and provided a well structured Excel file with test results. I converted those results to CSV, and created a test context which parses it, and converts each scenario listed in the CSV to a test. It was trivial to fix the 3 failing tests, and I also had all the scenarios that passed manual testing covered by unit tests and protected against regressions.',
          'After the above, I was very confident in the quality of the component. There were no more reported issues while I worked for that client, and probably ever since. Had there been another batch of manual tests done in a similar manner, I would just repeat the same thing (or add new cases to existing CSV), and be essentially certain that all checked scenarios would work in production, and never break in the future. It was extremely satisfying to do that work.',
        ],
      },
      {
        title: 'EU Roaming Usage and Traffic Tracking Web Application',
        text: [
          'This was a system built to track roaming usage for the largest Croatian telecom, commissioned during the time of significant EU roaming changes. It was used to provide stats on use, and help detect any abuse.',
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
          'I was a backend-only developer on this project. I believe frontend was done in AngularJS, but I was not involved in that part.',
          'I implemented the entire backend, from the REST API, down to the repository (data access layer). I also implemented the reporting system, which was based on Jasper Reports.',
        ],
      },
      {
        title: 'e-Learning Web Application (MVP)',
        text: [
          'This was a platform for online learning, which - among other features - allowed user to view video courses, and online meetings with whiteboards. It was not a fully-featured commercial produce yet, just an MVP.',
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
          'Besides some initial work by other developers, I implemented the entire application. I also handled deployment, communication with clients and I was actively involved in the development of requirements.',
        ],
      },
      {
        title: 'Other Projects',
        text: [
          'Simple service used for exporting data from database in JSON format, built using C# and WCF. The target database is Microsoft SQL Server.',
          'Some emergency work on an Alfresco based web app for a client very close to production deadline.',
          'Work on backend for a talent acquisition software built using Ruby.',
          'Small project used for talent management (HR/recruitment) built with React.',
        ],
        tags: ['C#', 'WCF', 'Ruby', 'React', 'Java', 'Alfresco'],
        roleText: [
          'I did the first service mentioned completely by myself.',
          'The Alfresco work was just some bug fixing for a couple of weeks. It would not usually be worth mentioning, but it is an interesting example of a project I was brought onto literally a week or two before production, to a code base and the platform (Alfresco) I was unfamiliar with. I did help them, and the client was satisfied with my help. The help was not groundbreaking, but I was able to fix the problems they needed fixing at that time. This provided an intro to additional work for the same client. This is not the type of work I usually do, and would not normally accept doing.',
          'The last two projects were small projects, each lasting several weeks. The work on these projects was split evenly between me and another programmer.',
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
          'This it a large scale product, with 1M+ daily views.',
          'It is the official product that allows citizens and businesses in Croatia to submit their tax forms electronically. It supports many different tax forms to handle all the relevant types of tax reporting. The application has many other features, but tax reporting (form submission) is probably the main use case.',
        ],
        tags: [
          'C#',
          'ASP.NET Web Forms',
          'jQuery',
          'Microsoft Reports (.rdlc)',
          'IBM DB2',
        ],
        roleText: [
          'I fully implemented 7 of the tax forms used in production as of March 2016. Additionally, I did varying amounts of work on about 10 other forms, ranging from bug fixes, to implementing large parts of entire forms. At that time, there were a total of about 25 tax forms in the entire system.',
          'Implementing a tax form including doing a web form, XML import and export, PDF reporting, extensive server-side validation based on business and legal rules, and tax form specific changes to the data access layer.',
        ],
      },
      {
        title: 'Location and Building Permits Web Application',
        text: [
          "This is a relatively simple application used for submission of data relevant to different types of location and building permits. It was built for Croatia's Ministry of Construction and Physical Planning, to be used by citizens (general population).",
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
          'I implemented large chunks of the project. Much of the UI part (views, models, controllers), significant part of the underlying business logic, the entire data access layer and PDF reporting.',
        ],
      },
      {
        title: 'Other Projects',
        text: [
          'Ny time on this job was spent on many other projects as well. This included full stack development on two other very large ASP.NET Web Forms applications to be used by the employees of Ministry of Construction and Physical Planning. These are different applications from the one mentioned above.',
          'Several WCF and ASMX web services as part of the above projects or as standalone components in a larger system.',
          'Software components used for XML processing: validation, data manipulation, data to XML export, XML to database import.',
          'Various programs for offline data processing and validation, email error reporting etc.',
        ],
        tags: ['C#', 'ASP.NET Web Forms', '.NET COM', 'WCF'],
        roleText: [
          'Regarding the two large ASP.NET Web forms application. These applications were mostly in maintanance phase. While I did some larger chunks of work there, most of my work was just bug fixes and small feature development.',
          'A lot of the rest were mini projects by themselves (although fitting into largers systems). They usually lasted a few days to few weeks. I mostly implemented those completely by myself.',
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
          'This project was a piece of software that enabled easier programmatic access to Microsoft Excel spreadsheet data. It allowed the user to read, write, manipulate and convert data and print.',
        ],
        tags: ['C#', 'Web Forms', 'WPF', 'Windows Forms'],
        roleText: [
          'I did various tasks I was assigned to do.',
          'Example: Implementation of export from Excel format to a Windows Forms DataGrid. The goal was to match the DataGrid output to resemble the original Excel content, formatting and styling as close as possible.',
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
          'This was a large WPF desktop application used by operators to observe inspection data to perform damage anaysis of staam generators in nuclear power plants.',
        ],
        tags: ['C#', 'WPF', 'Cinch (MVVM framework)'],
        roleText: [
          'I developed a large part of the entire application.',
          'I created several custom WPF controls with display 2D and 3D signal charts and plots. Processing and display of the data was very resource intensive, so rendering was done in a separate thread to keep the application responsive.',
          'I worked on data persistence and data versioning system, app subsystem for signal filtering and mixing, and in general many WPF views and systems of the application throughout its entire stack, from the UI down the persistence layer.',
        ],
      },
      {
        title:
          'Steam Generator Walker Robot Command and Monitoring Application',
        text: [
          'The company was building a robot (prototype) that was able to walk on the steam generator tubes wall, and was used for probe positioning. It allowed easier inspection with reduced (or eliminated) operator exposure to ionizing radiation.',
          'This part of the project refers to a WPF desktop application that interfaces with the robot, controls it, displays its position, monitors its state and complements hardware and electronics handling of edge conditions and failure states.',
        ],
        tags: ['C#', 'WPF', 'Cinch (MVVM framework)'],
        roleText: [
          'I implemented the large majority of the application code.',
          'I created the entire GUI, which mostly consists of custom controls with specialized graphical display. Again, some of the more complex controls required multi-threading to keep the application responsive.',
          'I also either implemted from scratch, or fully rewrote nearly all of the backend code, down to the elctronics controller interface.',
          'The C-like electronics controller code was written by another programmer. I maintained it and implemented required changes and fixes as necessary, but I was not its original author.',
        ],
      },
      {
        title: 'Other Projects',
        text: [
          'There are other projects I worked on that are used in the inspection process.',
        ],
        tags: ['C#'],
        roleText: ['Mostly bug fixes. Nothing of note.'],
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
          'This was a web application that allowed the user to configure and monitor the operation of fuel stations fuel dispenser drivers.',
        ],
        tags: ['C#', 'ASP.NET Web Forms', 'PostgreSQL'],
        roleText: [
          'I implemented substantial sections of the project, and was responsible for the maintenance of the entire project.',
        ],
      },
      {
        title: 'Fuel Dispenser Configuration and Control Desktop Application',
        text: [
          'Similar in purpose to the above web application, used for different drivers and clients.',
        ],
        tags: ['C#', 'Windows Forms', 'SQLite'],
        roleText: [
          'I created the entire application. It had custom GUI controls for displaying fuel dispenser state and enabled control over it. Used SQLite for data storage.',
        ],
      },
      {
        title: 'Various Projects',
        text: [
          'I worked on several fuel displenser driver, and small tools used for regex validation, manipulation of Windows registry entries etc.',
        ],
        tags: ['C#', 'C++'],
        roleText: [
          'Mostyl bug fixing and maintanance. I did a full implementation of some of the tools.',
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
          'Some applications for a few financial institutions in Croatia (banks, funds, stock exchanges).',
        ],
        tags: ['C#', 'ASP.NET Web Forms', 'Microsoft SQL Server'],
        roleText: [
          'I did small tasks and bug fixes on the web applications and their databases.',
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
          'This project was a body animation exporter. It allowed exporting of body animation data built inside 3ds Max (3ds Max Biped format) into a format called MPEG-4 FBA, used by a larger face and body animation system.',
        ],
        tags: ['C++', '3ds Max SDK'],
        roleText: ['I implemented the entire exporter.'],
      },
    ],
  },
];
