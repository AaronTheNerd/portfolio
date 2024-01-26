import { Injectable } from '@angular/core';

import { Project } from '../_models/project.model';
import { Language } from '../_enums/language.enum';
import { Observable, of } from 'rxjs';
import { SectionHeadingComponent } from '../project-detail/dynamic/section-heading/section-heading.component';
import { SubsectionHeadingComponent } from '../project-detail/dynamic/subsection-heading/subsection-heading.component';
import { SubsubsectionHeadingComponent } from '../project-detail/dynamic/subsubsection-heading/subsubsection-heading.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 1,
      title: "Discord Bot",
      school: false,
      languages: [Language.py],
      description: `A Discord bot written in Python which utilizes the <code>discord.py</code> library to play music and assist in virtual D&D sessions in my friend's Discord server. The bot utilizes the <code>youtubeDL</code> library to search and download music from YouTube, which is then played through a voice channel in the server. In addition to music playback, the bot has commands for rolling dice, which can be used to simulate actions and combat in D&D sessions. The bot can roll various types of dice with support for rolling with advantage or disadvantage. Through this project, I gained experience in integrating APIs, programming with Python, and developing a customized bot for multiple use cases as requested by users.`,
      tags: [
        "Discord.py",
        "Bot",
        "Coroutines",
        "Youtube-dl",
        "User Feedback",
        "Bug Fixes",
      ],
      created: new Date("2021-09-01"),
      modified: new Date("2022-11-01"),
      gitLink: "https://github.com/AaronTheNerd/DiscordBot",
      thumbnails: ["assets/thumbnails/discord.webp"],
      favorite: true,
      content: [
        {
          componentType: SectionHeadingComponent,
          inputs: {
            title: "What I Learned",
            id: "what-i-learned"
          }
        },
        {
          componentType: SubsectionHeadingComponent,
          inputs: {
            title: "Something",
            id: "something"
          }
        },
        {
          componentType: SubsubsectionHeadingComponent,
          inputs: {
            title: "Something Else",
            id: "something-else"
          }
        }
      ]
    },
    {
      id: 2,
      title: "Sorting Algorithm Visualizer",
      school: false,
      languages: [Language.cpp],
      description: `A program written in C++ designed to provide a visual representation of various sorting algorithms. The program utilizes the GTK windowing toolkit to display the current state of the list being sorted, as well as information on which sort is currently running and how many swaps and lookups have occurred.`,
      tags: ["GTK", "Multithreading", "Sorting Algorithms", "Visualizer"],
      created: new Date("2021-08-01"),
      modified: new Date("2021-08-31"),
      gitLink: "https://github.com/AaronTheNerd/SortingAlgorithmVisualizer",
      thumbnails: [
        "assets/thumbnails/sorter/sorter1.jpg",
        "assets/thumbnails/sorter/sorter2.jpg",
        "assets/thumbnails/sorter/sorter3.jpg",
      ],
      content: []
    },
    {
      id: 3,
      title: "Seamless Triangular GIF Generator",
      school: false,
      languages: [Language.py],
      description: `A Python program that generates mesmerizing animations of morphing triangles. The program utilizes a combination of mathematical algorithms and user customization to create unique and visually appealing GIFs.`,
      tags: ["OpenSimplex", "PIL", "ImageMagick", "Delaunay Triangulation"],
      created: new Date("2021-05-01"),
      modified: new Date("2021-07-01"),
      gitLink: "https://github.com/AaronTheNerd/DynamicBackgrounds",
      thumbnails: [
        "assets/thumbnails/triangles/triangle1.jpg",
        "assets/thumbnails/triangles/triangle2.jpg",
      ],
      content: []
    },
    {
      id: 4,
      title: "Unsigned Arbitrary Precision Integer",
      school: false,
      languages: [Language.cpp],
      description: `A C++ library that provides a powerful tool for handling large integer numbers with arbitrary precision. This object serves as a standard numeric type in C++ and offers a wide range of features to perform arithmetic operations on integers of any size.`,
      tags: ["Performance Testing", "Unit Testing", "Optimization", "Karatsuba"],
      created: new Date("2020-11-01"),
      modified: new Date("2021-07-01"),
      gitLink: "https://github.com/AaronTheNerd/uInteger",
      thumbnails: [],
      favorite: true,
      content: []
    },
    {
      id: 5,
      title: "Programmable Christmas Tree",
      school: false,
      languages: [Language.py, Language.arduino],
      description: `A DIY project that brings a unique and interactive twist to traditional holiday decorations. By utilizing an Arduino microcontroller and a Python program, this project allows users to program and customize the lighting patterns and animations on their Christmas tree, creating a dazzling and dynamic display.`,
      tags: ["Serial I/O", "Information Encoding/Decoding", "Arduino"],
      created: new Date("2020-11-01"),
      modified: new Date("2020-12-01"),
      gitLink:
        "https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/Arduino/AnimatedChristmasTree",
      thumbnails: ["assets/thumbnails/christmas.jpg"],
      content: []
    },
    {
      id: 7,
      title: "IMDb Webscraper",
      school: false,
      languages: [Language.py],
      description: `A Python-based web scraping tool that allows users to retrieve the top-rated 250 movies from IMDb. The scraper utilizes popular Python libraries such as Selenium, BeautifulSoup, and Pandas to automate the process of extracting movie data from IMDb's website and exporting it to a spreadsheet for further use.`,
      tags: ["Webscraping", "Pandas", "BeautifulSoup", "Selenium"],
      created: new Date("2020-03-01"),
      modified: new Date("2020-03-30"),
      gitLink:
        "https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/Python/IMDb%20Webscraper",
      thumbnails: [],
      content: []
    },
    {
      id: 9,
      title: "The Game of Life",
      school: false,
      languages: [Language.java],
      description: `A Java program that implements Conway's Game of Life. The program provides a GUI that allows users to interactively simulate the evolution of a population of cells according to the rules of the Game of Life.`,
      tags: ["Java AWT", "JavaX Swing"],
      created: new Date("2018-12-01"),
      modified: new Date("2018-12-31"),
      gitLink:
        "https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/Java/The%20Game%20of%20Life",
      thumbnails: [
        "assets/thumbnails/GoL/GoL1.jpg",
        "assets/thumbnails/GoL/GoL2.jpg",
        "assets/thumbnails/GoL/GoL3.jpg",
      ],
      content: []
    },
    {
      id: 10,
      title: "RISC-V CPU",
      school: true,
      languages: [Language.verilog],
      description: `A Verilog-based implementation of a RISC-V CPU. This CPU is designed to simulate a three-stage pipeline for executing RISC-V instructions, including R-, I-, U-, J-, B-, and L-type instructions.`,
      tags: [
        "RISC-V",
        "Assembly Programming",
        "Unit Testing",
        "End-to-End Testing",
      ],
      created: new Date("2020-10-01"),
      modified: new Date("2020-12-01"),
      gitLink: "https://github.com/AaronTheNerd/CSCE611/tree/master/lab_jb",
      thumbnails: ["assets/thumbnails/de2-115.png"],
      favorite: true,
      content: []
    },
    {
      id: 12,
      title: "Roomba Interface",
      school: true,
      languages: [Language.py],
      description: `A Python program that was developed as part of an assignment for a Robotics course. The program provides a way for a computer to interface with a Roomba. The Roomba Interface enables users to parse input from all the sensors on the Roomba, as well as send commands to drive the Roomba, all while operating asynchronously in separate threads.`,
      tags: [
        "Raspberry Pi",
        "Serial I/O",
        "Multithreading",
        "Sensors",
        "Closed-Loop Controller",
      ],
      created: new Date("2019-10-01"),
      modified: new Date("2019-12-01"),
      gitLink: "https://github.com/AaronTheNerd/csce274_project1",
      thumbnails: [],
      content: []
    },
    {
      id: 13,
      title: "Simple TCP Connection",
      school: true,
      languages: [Language.java],
      description: `The Java TCP Connection is a simple TCP implementation developed as an assignment for a computer networking course. The primary goal of this program is to create a reliable and congestion-aware data transfer mechanism over an existing UDP connection, providing reliable and ordered delivery of data between two endpoints.`,
      tags: ["TCP Connection"],
      created: new Date("2020-04-01"),
      modified: new Date("2020-04-08"),
      gitLink: "https://github.com/AaronTheNerd/csce416ec",
      thumbnails: [],
      content: []
    },
    {
      id: 14,
      title: "Audio Visualizer",
      school: true,
      languages: [Language.matlab],
      description: `A MATLAB program developed as an assignment for a Signals and Systems course. The primary goal of this program is to provide a visual representation of an audio file loaded into MATLAB, displaying the components of the current waveform in real-time using the FFT algorithm. The program also incorporates visually appealing "falling bars" to add an extra aesthetic touch to the visualization.`,
      tags: ["FFT", "Visualizer"],
      created: new Date("2019-12-01"),
      modified: new Date("2019-12-08"),
      gitLink:
        "https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/MatLab/AudioVisualizer",
      thumbnails: ["assets/thumbnails/visualizer.jpg"],
      favorite: true,
      content: []
    },
    {
      id: 18,
      title: "Runtime Optimization of MergeSort via Multithreading",
      school: true,
      languages: [Language.cpp],
      description: `A C++ program that was developed as part of an assignment for a Statistics course. The aim of the project was to optimize the runtime of the mergeSort algorithm by leveraging multithreading techniques. The program allows for adjusting the number of worker threads available to the mergeSort algorithm and measures the runtime to find the optimal number of threads that can optimize the algorithm's performance.`,
      tags: ["Multithreading", "Performance Analysis"],
      created: new Date("2019-11-01"),
      modified: new Date("2019-12-01"),
      gitLink:
        "https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/C++/MergeSort",
      thumbnails: ["assets/thumbnails/chart.png"],
      content: []
    },
    {
      id: 20,
      title: "Ellipse Perimeter Approximation",
      school: false,
      languages: [Language.cpp, Language.py],
      description: `A program I designed that aims to generate approximate formulas for the perimeter of an ellipse using a brute-force approach. Initially prototyped in Python, the program has been further developed and optimized in C++ for enhanced performance. By recursively generating stack-based calculators and comparing the results to the known perimeters of ellipses with various dimensions, the program seeks to find the closest approximation for the perimeter of an ellipse. This process involves extensive calculations and rigorous analysis to identify the most accurate formula. By rewriting the program in C++, I have achieved improved efficiency and speed, allowing for far faster computations.`,
      tags: ["Multithreading"],
      created: new Date("2022-10-28"),
      modified: new Date("2022-12-29"),
      gitLink: "https://github.com/AaronTheNerd/EllipseApprox",
      thumbnails: ["assets/thumbnails/ellipse-comparison.png"],
      content: []
    },
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects.slice();
  }

  getProject(id: number): Observable<Project | undefined> {
    const project = this.projects.find((project: Project) => {
      return project.id === id;
    });
    return of(project);
  }
}
