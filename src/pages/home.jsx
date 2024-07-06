import React from "react";
import { useRef } from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ThemeBox from "../components/ThemeBox";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Home() {
  const avatar = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectById("86095266-e792-41a1-821f-f56663b449f5");
    avatar.current = obj;
    console.log(avatar);
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
        justifyContent="center"
        flexGrow="1"
        padding="10vw"
        gap="5vw"
      >
        <Spline
          style={{
            width: "350px",
            height: "350px",
            borderRadius: "100%",
            borderWidth: "10px",
            borderStyle: "solid",
          }}
          scene="https://prod.spline.design/xbErh2ldmymfVxSf/scene.splinecode"
          onLoad={onLoad}
        />
        <ThemeBox
          sx={{
            height: "350px",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            borderRadius: "20px",
            border: "10px solid",
            flexGrow: "1",
          }}
        ></ThemeBox>
      </ThemeBox>
    </div>
  );
}

export default Home;
