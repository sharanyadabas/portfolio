import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ThemeBox from "../components/ThemeBox";
import ContactCard from "../components/ContactCard";

function Contact() {
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
        <ContactCard
          name={"Sharanya Dabas"}
          description={"Aspiring Software Engineer"}
          headerImage={"/portfolio/images/cornell-banner.jpg"}
          image={"/portfolio/images/headshot.jpg"}
          linkEmail={"sd699@cornell.edu"}
          linkLinkedin={"https://www.linkedin.com/in/sharanya-dabas/"}
          linkGithub={"https://github.com/sharanyadabas"}
          phoneNumber={"(781) 985-1259"}
        />
      </ThemeBox>
    </div>
  );
}

export default Contact;
