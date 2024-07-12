import React from "react";
import { useRef } from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ThemeBox from "../components/ThemeBox";
import { Typography, Stack } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const avatar = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectById("86095266-e792-41a1-821f-f56663b449f5");
    avatar.current = obj;
  }

  function triggerAnimation() {
    if (avatar !== undefined) {
      avatar.current.emitEvent("mouseHover");
    }
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <ResponsiveAppBar
        buttonAnimation={triggerAnimation}
        currentpage={"Home"}
      />
      <ThemeBox
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexGrow="1"
        gap="5vw"
        padding="5vw"
      >
        <Spline
          style={{
            width: "350px",
            height: "350px",
            visibility: isMobile ? "hidden" : "visible",
            position: isMobile ? "absolute" : "static",
            borderRadius: "100%",
            borderWidth: "10px",
            borderStyle: "solid",
          }}
          scene="https://prod.spline.design/o9BfKGQ3Vh8mS4zv/scene.splinecode"
          onLoad={onLoad}
        />

        <ThemeBox
          sx={{
            backgroundColor: "primary.main",
            color: "#f5f7fa",
            width: "350px",
            fontSize: "18px",
            display: "flex",
            borderRadius: "20px",
            border: "10px solid",
            borderColor: "text.primary",
            flexGrow: "1",
            padding: "30px 50px 30px 50px",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow:
              "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);",
          }}
        >
          <Typography
            sx={{ fontSize: "3em", fontWeight: "bold", marginBottom: "3vh" }}
          >
            Hi!
          </Typography>
          <Stack direction="column" justifyContent="center" spacing={4}>
            <Typography sx={{ fontSize: "1.3em" }}>
              I'm Sharanya, a passionate fullstack developer with a keen
              interest in exploring various fields such as machine learning,
              cloud computing, and game development. Currently, I am a junior at
              Cornell University's College of Engineering, where I am constantly
              honing my skills and expanding my knowledge in the ever-evolving
              tech landscape.
            </Typography>
            <Typography sx={{ fontSize: "1.3em" }}>
              In addition to my coursework, I am an active member of the
              software team for Cornell Cup Robotics. My current project
              involves developing computer vision software for an educational
              robot called Minibot, which aims to enhance classroom learning
              through interactive technology.
            </Typography>
            <Typography sx={{ fontSize: "1.3em" }}>
              I am eagerly seeking internship opportunities for Summer 2025 to
              further develop my expertise and contribute to innovative
              projects.
            </Typography>
          </Stack>
        </ThemeBox>
      </ThemeBox>
    </div>
  );
}

export default Home;
