import React from "react";
import Typography from "@mui/material/Typography";

const ResumePDF = ({ resumeLink, children }) => {
  const openPDF = () => {
    window.open(resumeLink, "_blank", "noopener,noreferrer");
  };

  return (
    <Typography
      onClick={openPDF}
      style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}
    >
      {children}
    </Typography>
  );
};

export default ResumePDF;
