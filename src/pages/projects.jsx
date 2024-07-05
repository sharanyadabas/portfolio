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
  image: "/portfolio/images/exengine.jpeg",
  link: "http://3.140.251.0:8080/",
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

const EtchSketch = {
  title: "Etch-a-Sketch",
  description: "Add github floating button to top right of each project",
  image: "/portfolio/images/etchsketch.jpeg",
  link: "https://sharanyadabas.github.io/etch-a-sketch/",
  linkgithub: "https://github.com/sharanyadabas/etch-a-sketch",
  technologies: ["javascript", "html5", "css3"],
};

const Calculator = {
  title: "Calculator",
  description: "4 Function Calculator with Floating Point Arithmetic",
  image: "/portfolio/images/calculator.jpeg",
  link: "https://sharanyadabas.github.io/calculator/",
  linkgithub: "https://github.com/sharanyadabas/calculator",
  technologies: ["javascript", "html5", "css3"],
};

const ExtraProject = {
  title: "ExtraProject",
  description: "Id voluptate dolor enim laborum ea ipsum.",
  image: "/portfolio/images/template.jpg",
  link: "https://www.example.com/",
  linkgithub: "https://github.com/sharanyadabas/",
  technologies: ["ocaml", "c"],
};
const ExtraProject2 = {
  title: "ExtraProject2",
  description: "Duis aute nulla qui do est amet Lorem officia reprehenderit.",
  image: "/portfolio/images/template.jpg",
  link: "https://www.example.com/",
  linkgithub: "https://github.com/sharanyadabas/",
  technologies: ["nextjs", "react", "materialui"],
};

const allProjects = [
  ExerciseEngine,
  EtchSketch,
  Calculator,
  ExtraProject,
  ExtraProject2,
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
    console.log("changing main card to ", project.title);
    console.log("changing main stack to ", project.technologies);
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
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <ResponsiveAppBar />
      <ThemeBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flexGrow="1"
        gap="5vh"
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
                maxWidth: "300px",
              }}
              justifyContent="space-between"
            >
              <ThemeBox
                sx={{
                  flexGrow: "1",
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
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
            color="inherit"
            sx={{ width: 60, height: 60 }}
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
            color="inherit"
            sx={{ width: 60, height: 60 }}
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
