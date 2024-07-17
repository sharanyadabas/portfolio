import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ProjectCard from "../components/ProjectCard";
import ThemeBox from "../components/ThemeBox";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { motion } from "framer-motion";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MainProjectCard from "../components/MainProjectCard";

import TechStack from "../components/TechStack";

const ExerciseEngine = {
  title: "Exercise Engine",
  description:
    "Exercise search engine that is powered by single value decomposition on exercise descriptions to rank similarities between different exercises. Users can query via dropdown or ad-hoc search and use filters on muscle groups or equipment.",
  image: "/images/exengine.jpeg",
  link: "http://3.15.240.235:8080/",
  linkgithub: "https://github.com/sharanyadabas/Exercise-Engine-SVD",
  technologies: [
    "python",
    "flask",
    "javascript",
    "jquery",
    "html5",
    "css3",
    "docker",
    "amazonwebservices",
  ],
};

const DoodleJump = {
  title: "Embedded Jump",
  description:
    "Game controller using the FRDM-KL46Z microcontroller, leveraging its onboard accelerometer to detect tilt direction and acceleration. The controller interfaces with Python via a UART connection, enabling users to play a Pygame version of Doodle Jump with snappy, motion-based controls.",
  image: "/images/embeddedjump.png",
  link: "https://pages.github.coecis.cornell.edu/ece3140-sp2024/mwm223-sd699/",
  linkgithub: "",
  technologies: ["c", "python"],
};

const CamlCapital = {
  title: "Caml Capital",
  description:
    "Functional programming approach to Monopoly, brought to life as a terminal-based multiplayer game. Using functional paradigms, it supports buying properties, houses, and hotels, as well as all community chest and chance spaces for a complete Monopoly experience.",
  image: "/images/camlcapital.jpg",
  link: "",
  linkgithub: "https://github.com/sharanyadabas/cs3110-final-project/",
  technologies: ["ocaml"],
};

const Portfolio = {
  title: "Portfolio",
  description:
    "Portfolio website that allows viewers to interact with my projects and provides relevant information about me as a developer. Created from scratch to practice working with React Hooks and MaterialUI ",
  image: "/images/portfolio.png",
  link: "",
  linkgithub: "https://github.com/sharanyadabas/portfolio",
  technologies: ["react", "materialui", "javascript"],
};

const EtchSketch = {
  title: "Etch-a-Sketch",
  description:
    "Interactive drawing tablet that features a resizable canvas. Allows for users to pick from greyscale, color, drag, and hover modes. Note: To begin, must select both a color and drawing mode",
  image: "/images/etchsketch.jpeg",
  link: "https://sharanyadabas.github.io/etch-a-sketch/",
  linkgithub: "https://github.com/sharanyadabas/etch-a-sketch",
  technologies: ["javascript", "html5", "css3"],
};

const Calculator = {
  title: "Calculator",
  description:
    "4 function calculator that supports floating point arithmetic. Has a memory feature that allows for users to execute continuous operations on a value",
  image: "/images/calculator.jpeg",
  link: "https://sharanyadabas.github.io/calculator/",
  linkgithub: "https://github.com/sharanyadabas/calculator",
  technologies: ["javascript", "html5", "css3"],
};

const allProjects = [
  ExerciseEngine,
  DoodleJump,
  CamlCapital,
  Portfolio,
  EtchSketch,
  Calculator,
];

const mainCardVariants = {
  hidden: { opacity: 0, x: -300 },
  visible: { opacity: 1, x: 0 },
};

const techStackVariants = {
  hidden: { opacity: 0, x: 300 },
  visible: { opacity: 1, x: 0 },
};

const smallCardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 150 : -150,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 150 : -150,
    opacity: 0,
  }),
};

function Projects() {
  const [pointers, setPointers] = React.useState({ left: 0, right: 3 });
  const [projects, setProjects] = React.useState([]);
  const [mainCard, setMainCard] = React.useState(allProjects[0]);
  const [mainStack, setMainStack] = React.useState(allProjects[0].technologies);
  const [direction, setDirection] = React.useState(0);

  const sliceWrap = (array, start, end) => {
    if (start <= end) {
      return array.slice(start, end + 1);
    } else {
      return array.slice(start).concat(array.slice(0, end + 1));
    }
  };

  const changeMainCard = (project) => {
    setMainCard(project);
    setMainStack(project.technologies);
  };

  React.useEffect(() => {
    const updatedProjects = sliceWrap(
      allProjects,
      pointers.left,
      pointers.right
    );
    setProjects(updatedProjects);
  }, [pointers]);

  const shiftProjectsRight = () => {
    const leftPointer = (pointers.left + 1) % allProjects.length;
    const rightPointer = (pointers.right + 1) % allProjects.length;
    setPointers({ left: leftPointer, right: rightPointer });
    setDirection(1);
  };
  const shiftProjectsLeft = () => {
    const leftPointer =
      pointers.left === 0 ? allProjects.length - 1 : pointers.left - 1;
    const rightPointer =
      pointers.right === 0 ? allProjects.length - 1 : pointers.right - 1;
    setPointers({ left: leftPointer, right: rightPointer });
    setDirection(-1);
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <ResponsiveAppBar currentpage={"Projects"} />
      <ThemeBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flexGrow="1"
        gap="5vh"
        maxWidth="100vw"
      >
        <Stack direction="row" alignItems="center" gap="3vw">
          <motion.div
            key={mainCard.title}
            variants={mainCardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 30, damping: 10 }}
          >
            <MainProjectCard {...mainCard} />
          </motion.div>
          <motion.div
            key={mainCard.title + "stack"}
            variants={techStackVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 30, damping: 10 }}
            style={{ height: "100%" }}
          >
            <Stack
              style={{
                height: "100%",
                gap: "2vh",
                minWidth: "240px",
                maxWidth: "360px",
              }}
              justifyContent="space-between"
            >
              <ThemeBox
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "20px 20px 20px 20px",
                  fontSize: "18px",
                  color: "#f5f7fa",
                  backgroundColor: "primary.main",
                  borderRadius: "20px",
                  border: "5px solid",
                  borderColor: "text.primary",
                  boxShadow:
                    "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);",
                }}
              >
                {mainCard.description}
              </ThemeBox>
              <TechStack techList={mainStack} />
            </Stack>
          </motion.div>
        </Stack>
        <Stack direction="row" spacing={7} alignItems="center">
          <IconButton
            sx={{ width: 60, height: 60, color: "primary.main" }}
            onClick={shiftProjectsLeft}
          >
            <KeyboardArrowLeftIcon sx={{ fontSize: 70 }} />
          </IconButton>
          {projects.map((project, index) => (
            <motion.div
              key={index + project.title}
              custom={direction}
              variants={smallCardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 60, damping: 10 }}
            >
              <ProjectCard
                key={project.title}
                {...project}
                onClick={() => changeMainCard(project)}
              />
            </motion.div>
          ))}
          <IconButton
            sx={{ width: 60, height: 60, color: "primary.main" }}
            onClick={shiftProjectsRight}
          >
            <KeyboardArrowRightIcon sx={{ fontSize: 70 }} />
          </IconButton>
        </Stack>
      </ThemeBox>
    </div>
  );
}

export default Projects;
