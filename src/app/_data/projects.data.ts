import { Language } from "../_enums/language.enum";
import { Project } from "../_models/project.model";
import { AudioVisualizerComponent } from "../project-detail/projects/audio-visualizer/audio-visualizer.component";
import { ChristmasTreeComponent } from "../project-detail/projects/christmas-tree/christmas-tree.component";
import { DiscordBotComponent } from "../project-detail/projects/discord-bot/discord-bot.component";
import { EllipseApproxComponent } from "../project-detail/projects/ellipse-approx/ellipse-approx.component";
import { MergesortComponent } from "../project-detail/projects/mergesort/mergesort.component";
import { PythonProjectWizardComponent } from "../project-detail/projects/python-project-wizard/python-project-wizard.component";
import { RiscVComponent } from "../project-detail/projects/risc-v/risc-v.component";
import { RoombaComponent } from "../project-detail/projects/roomba/roomba.component";
import { SortingVisualizerComponent } from "../project-detail/projects/sorting-visualizer/sorting-visualizer.component";
import { TcpConnectionComponent } from "../project-detail/projects/tcp-connection/tcp-connection.component";
import { TriangularMeshComponent } from "../project-detail/projects/triangular-mesh/triangular-mesh.component";
import { UintegerComponent } from "../project-detail/projects/uinteger/uinteger.component";

export const PROJECTS: Project[] = [
  {
    title: "Python Project Wizard",
    school: false,
    languages: [Language.py],
    description: "A Python project I developed to make it easier to create new Python projects. Once this program is installed from PyPI, a new bash script named <code>merlin</code> is created which can be called to create a Python project skeleton. This skeleton includes VSCode launch configurations, a pipenv, and code for reading external configuration files and producing log output. My Python Project Wizard has made it substantially easier to get started on new Python projects without needing to rewrite much of the boilerplate I have written for past projects.",
    tags: ["Test Driven Development", "Unit Testing"],
    modified: new Date("12/29/2023"),
    created: new Date("08/25/2023"),
    thumbnails: [],
    gitLink: "https://github.com/AaronTheNerd/PythonProjectWizard",
    favorite: true,
    component: PythonProjectWizardComponent
  },
  {
    title: "Simple TCP Connection",
    school: true,
    languages: [Language.java],
    description: "The Java TCP Connection is a simple TCP implementation developed as an assignment for a computer networking course. The primary goal of this program is to create a reliable and congestion-aware data transfer mechanism over an existing UDP connection, providing reliable and ordered delivery of data between two endpoints.",
    tags: ["TCP Connection"],
    modified: new Date("04/08/2020"),
    created: new Date("04/01/2020"),
    thumbnails: [],
    gitLink: "",
    favorite: false,
    component: TcpConnectionComponent
  },
  {
    title: "Runtime Optimization of MergeSort via Multithreading",
    school: true,
    languages: [Language.cpp],
    description: "A C++ program that was developed as part of an assignment for a Statistics course. The aim of the project was to optimize the runtime of the mergeSort algorithm by leveraging multithreading techniques. The program allows for adjusting the number of worker threads available to the mergeSort algorithm and measures the runtime to find the optimal number of threads that can optimize the algorithm's performance.",
    tags: ["Multithreading", "Performance Analysis"],
    modified: new Date("12/01/2019"),
    created: new Date("11/01/2019"),
    thumbnails: ["assets/thumbnails/chart.png"],
    gitLink: "https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/C++/MergeSort",
    favorite: false,
    component: MergesortComponent
  },
  {
    title: "Ellipse Perimeter Approximation",
    school: false,
    languages: [Language.cpp, Language.py],
    description: "A program I designed that aims to generate approximate formulas for the perimeter of an ellipse using a brute-force approach. Initially prototyped in Python, the program has been further developed and optimized in C++ for enhanced performance. By recursively generating stack-based calculators and comparing the results to the known perimeters of ellipses with various dimensions, the program seeks to find the closest approximation for the perimeter of an ellipse.",
    tags: ["Multithreading"],
    modified: new Date("07/01/2023"),
    created: new Date("10/28/2022"),
    thumbnails: ["assets/thumbnails/ellipse-comparison.png"],
    gitLink: "https://github.com/AaronTheNerd/EllipseApprox",
    favorite: false,
    component: EllipseApproxComponent
  },
  {
    title: "Programmable Christmas Tree",
    school: false,
    languages: [Language.py, Language.arduino],
    description: "A DIY project that brings a unique and interactive twist to traditional holiday decorations. By utilizing an Arduino microcontroller and a Python program, this project allows users to program and customize the lighting patterns and animations on their Christmas tree, creating a dazzling and dynamic display.",
    tags: ["Serial I/O", "Information Encoding/Decoding"],
    modified: new Date("12/01/2020"),
    created: new Date("11/01/2020"),
    thumbnails: ["assets/thumbnails/christmas.jpg"],
    gitLink: "https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/Arduino/AnimatedChristmasTree",
    favorite: false,
    component: ChristmasTreeComponent
  },
  {
    title: "Unsigned Arbitrary Precision Integer",
    school: false,
    languages: [Language.cpp],
    description: "A C++ library that provides a powerful tool for handling large integer numbers with arbitrary precision. This object serves as a standard numeric type in C++ and offers a wide range of features to perform arithmetic operations on integers of any size.",
    tags: ["Performance Testing", "Unit Testing", "Optimization", "Karatsuba"],
    modified: new Date("07/01/2021"),
    created: new Date("11/01/2020"),
    thumbnails: [],
    gitLink: "https://github.com/AaronTheNerd/uInteger",
    favorite: true,
    component: UintegerComponent
  },
  {
    title: "Triangular Mesh Animator",
    school: false,
    languages: [Language.py],
    description: "A Python program that generates mesmerizing animations of morphing triangles. The program utilizes a combination of mathematical algorithms and user customization to create unique and visually appealing GIFs.",
    tags: ["OpenSimplex", "PIL", "Delaunay Triangulation"],
    modified: new Date("02/08/2024"),
    created: new Date("05/01/2021"),
    thumbnails: [
      "assets/thumbnails/triangles/triangle1.jpg",
      "assets/thumbnails/triangles/triangle2.jpg"
    ],
    gitLink: "https://github.com/AaronTheNerd/DynamicBackgrounds",
    favorite: false,
    component: TriangularMeshComponent
  },
  {
    title: "Audio Visualizer",
    school: true,
    languages: [Language.matlab],
    description: "A MATLAB program developed as an assignment for a Signals and Systems course. The primary goal of this program is to provide a visual representation of an audio file loaded into MATLAB, displaying the components of the current waveform in real-time using the FFT algorithm. The program also incorporates visually appealing \"falling bars\" to add an extra aesthetic touch to the visualization.",
    tags: ["FFT", "Visualizer"],
    modified: new Date("12/08/2019"),
    created: new Date("12/01/2019"),
    thumbnails: [
      "assets/thumbnails/visualizer.jpg"
    ],
    gitLink: "https://github.com/AaronTheNerd/Personal-Coding-Projects/tree/master/MatLab/AudioVisualizer",
    favorite: true,
    component: AudioVisualizerComponent
  },
  {
    title: "Roomba Interface",
    school: true,
    languages: [Language.py],
    description: "A Python program that was developed as part of an assignment for a Robotics course. The program provides a way for a computer to interface with a Roomba. The Roomba Interface enables users to parse input from all the sensors on the Roomba, as well as send commands to drive the Roomba, all while operating asynchronously in separate threads.",
    tags: ["Raspberry Pi", "Serial I/O", "Multithreading", "Sensors", "Closed-Loop Controller"],
    modified: new Date("12/01/2019"),
    created: new Date("10/01/2019"),
    thumbnails: [
    ],
    gitLink: "https://github.com/AaronTheNerd/csce274_project1",
    favorite: false,
    component: RoombaComponent
  },
  {
    title: "Discord Bot",
    school: false,
    languages: [Language.py],
    description: "A Discord bot written in Python which utilizes the <code>discord.py</code> library to play music and assist in virtual D&D sessions in my friend's Discord server. The bot utilizes the <code>youtubeDL</code> library to search and download music from YouTube, which is then played through a voice channel in the server. In addition to music playback, the bot has commands for rolling dice, which can be used to simulate actions and combat in D&D sessions. The bot can roll various types of dice with support for rolling with advantage or disadvantage. Through this project, I gained experience in integrating APIs, programming with Python, and developing a customized bot for multiple use cases as requested by users.",
    tags: ["Discord.py", "Bot", "Coroutines", "Youtube-dl", "User Feedback"],
    modified: new Date("10/19/2023"),
    created: new Date("09/01/2021"),
    thumbnails: [
      "assets/thumbnails/discord.webp"
    ],
    gitLink: "https://github.com/AaronTheNerd/DiscordBot",
    favorite: false,
    component: DiscordBotComponent
  },
  {
    title: "RISC-V CPU",
    school: true,
    languages: [Language.verilog],
    description: "A Verilog-based implementation of a RISC-V CPU. This CPU is designed to simulate a three-stage pipeline for executing RISC-V instructions, including R-, I-, U-, J-, B-, and L-type instructions.",
    tags: ["RISC-V", "Assembly Programming", "Unit Testing", "End-to-End Testing"],
    modified: new Date("12/01/2020"),
    created: new Date("10/01/2020"),
    thumbnails: [
      "assets/thumbnails/de2-115.png"
    ],
    gitLink: "https://github.com/AaronTheNerd/CSCE611/tree/master/lab_jb",
    favorite: true,
    component: RiscVComponent
  },
  {
    title: "Sorting Algorithm Visualizer",
    school: false,
    languages: [Language.cpp],
    description: "A program written in C++ designed to provide a visual representation of various sorting algorithms. The program utilizes the GTK windowing toolkit to display the current state of the list being sorted, as well as information on which sort is currently running and how many swaps and lookups have occurred.",
    tags: ["GTK", "Multithreading", "Sorting Algorithms", "Visualizer"],
    modified: new Date("08/31/2021"),
    created: new Date("08/01/2021"),
    thumbnails: [
      "assets/thumbnails/sorter/sorter1.jpg",
      "assets/thumbnails/sorter/sorter2.jpg",
      "assets/thumbnails/sorter/sorter3.jpg",
    ],
    gitLink: "https://github.com/AaronTheNerd/SortingAlgorithmVisualizer",
    favorite: false,
    component: SortingVisualizerComponent
  },
];