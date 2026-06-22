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
        title: '',
        text: [],
        tags: [],
        roleText: [],
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
          'The Alfresco work was just some bug fixing for a couple of weeks. It would not usually be worth mentioning, but it is an interesting example of a project I was brought onto literally a week or two before production, to a code base and the platform (Alfresco) I was unfamiliar with. I did help them, and the client was satisfied with my help, but it is not the kind of work I usually do. The help was not groundbreaking, but I was able to help with their need for additional manpower at a very late hour and on very short notice. This provided an intro to additional work for the same client.',
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
