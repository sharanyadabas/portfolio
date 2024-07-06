import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ThemeBox from "../components/ThemeBox";

function Home() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <ResponsiveAppBar currentpage={"Resume"} />
      <ThemeBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flexGrow="1"
      >
        <h1>Resume Page</h1>
      </ThemeBox>
    </div>
  );
}

export default Home;
