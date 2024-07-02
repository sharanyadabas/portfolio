import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ActionAreaCard from "../components/ProjectCard";
import ThemeBox from "../components/ThemeBox";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const small = {
  width: 260,
  height: 130,
};

const main = {
  width: 600,
  height: 350,
};

const ExerciseEngine = {
  title: "Exercise Engine",
  description: "Workout Search Engine",
  image: "/portfolio/images/exengine.jpeg",
  link: "http://3.140.251.0:8080/",
};

const EtchSketch = {
  title: "Etch-a-Sketch",
  description: "Interactive Drawing Tablet",
  image: "/portfolio/images/etchsketch.jpeg",
  link: "https://sharanyadabas.github.io/etch-a-sketch/",
};

const Calculator = {
  title: "Calculator",
  description: "4 Function Calculator with Floating Point Arithmetic",
  image: "/portfolio/images/calculator.jpeg",
  link: "https://sharanyadabas.github.io/calculator/",
};

const projects = [ExerciseEngine, EtchSketch, Calculator];

function Projects() {
  return (
    <>
      <ResponsiveAppBar />
      <ThemeBox display="flex" alignItems="center" flexDirection="column">
        <ActionAreaCard size={main} {...ExerciseEngine} />
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          {projects.map((project) => (
            <ActionAreaCard size={small} {...project} />
          ))}
        </Stack>
      </ThemeBox>
    </>
  );
}

export default Projects;
