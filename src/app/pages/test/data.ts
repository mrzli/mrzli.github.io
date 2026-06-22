import type { ExperienceSectionProps } from './components';

export const EXPERIENCE_SECTIONS: readonly ExperienceSectionProps[] = [
  {
    title: '',
    location: '',
    role: '',
    from: { year: 2007, month: 1 },
    to: { year: 2008, month: 12 },
    projects: [
      {
        title: '',
        text: [],
        tags: [],
        roleText: [],
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
        title: 'Various Projects',
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
