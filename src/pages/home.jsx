import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ThemeBox from "../components/ThemeBox";
import Zoom from "@mui/material/Zoom";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Home() {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <ResponsiveAppBar currentPage={"Home"} />
      <ThemeBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flexGrow="1"
      >
        <h1>Home Page</h1>
        <Zoom in={checked} timeout={{ enter: 500 }}>
          <div>
            <Spline
              style={{ width: "350px", height: "350px", borderRadius: "100%" }}
              scene="https://prod.spline.design/xbErh2ldmymfVxSf/scene.splinecode"
            />
          </div>
        </Zoom>
      </ThemeBox>
    </div>
  );
}

export default Home;
