import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ThemeBox from "../components/ThemeBox";
import ContactCard from "../components/ContactCard";
import Zoom from "@mui/material/Zoom";

function Contact() {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <ResponsiveAppBar currentpage={"Contact"} />
      <ThemeBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flexGrow="1"
        gap="5vh"
      >
        <Zoom in={checked} timeout={{ enter: 500 }}>
          <div>
            <ContactCard
              name={"Sharanya Dabas"}
              description={"Aspiring Software Engineer"}
              headerImage={"/images/cornell-banner.jpg"}
              image={"/images/headshot.jpg"}
              linkEmail={"sd699@cornell.edu"}
              linkLinkedin={"https://www.linkedin.com/in/sharanya-dabas/"}
              linkGithub={"https://github.com/sharanyadabas"}
              phoneNumber={"(781) 985-1259"}
            />
          </div>
        </Zoom>
      </ThemeBox>
    </div>
  );
}

export default Contact;
